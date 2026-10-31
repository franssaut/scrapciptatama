"""
Web Scraper untuk Linktree Profile (contoh: https://linktr.ee/cipta.group)
Mengekstrak data profil, tautan utama (katalog properti / drive), dan media sosial.
Dapat mengekspor hasil ke JSON, CSV, dan Excel (.xlsx).
"""

import sys
import os
import re
import json
import argparse
from typing import Dict, Any, Optional
import urllib.request
import urllib.error

# Optional imports for enhanced features
try:
    import pandas as pd
except ImportError:
    pd = None

try:
    from rich.console import Console
    from rich.table import Table
    from rich.panel import Panel
    from rich import print as rprint
    console = Console()
except ImportError:
    console = None


class LinktreeScraper:
    """Scraper untuk mengekstrak data dari halaman Linktree."""

    DEFAULT_HEADERS = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/124.0.0.0 Safari/537.36"
        ),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "id,en-US;q=0.9,en;q=0.8",
    }

    def __init__(self, url: str = "https://linktr.ee/cipta.group", headers: Optional[Dict[str, str]] = None):
        # Normalisasi URL
        if not url.startswith("http"):
            url = f"https://linktr.ee/{url.lstrip('@')}"
        self.url = url
        self.headers = headers or self.DEFAULT_HEADERS
        self.raw_data: Dict[str, Any] = {}
        self.scraped_data: Dict[str, Any] = {}

    def fetch_html(self) -> str:
        """Mengambil kode HTML dari Linktree."""
        req = urllib.request.Request(self.url, headers=self.headers)
        try:
            with urllib.request.urlopen(req, timeout=15) as response:
                return response.read().decode("utf-8")
        except urllib.error.HTTPError as e:
            raise RuntimeError(f"Gagal mengambil halaman: HTTP {e.code} - {e.reason}")
        except urllib.error.URLError as e:
            raise RuntimeError(f"Gagal koneksi ke {self.url}: {e.reason}")

    def scrape(self) -> Dict[str, Any]:
        """Mengekstrak JSON Next.js dari halaman Linktree."""
        html = self.fetch_html()

        # Ekstrak data dari script __NEXT_DATA__
        match = re.search(r'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', html, re.DOTALL)
        if not match:
            raise ValueError("Struktur data Linktree (__NEXT_DATA__) tidak ditemukan di halaman.")

        try:
            payload = json.loads(match.group(1))
        except json.JSONDecodeError as e:
            raise ValueError(f"Gagal mengurai JSON Next.js: {e}")

        page_props = payload.get("props", {}).get("pageProps", {})
        self.raw_data = page_props

        # Ekstrak informasi profil
        profile_info = {
            "username": page_props.get("username", ""),
            "page_title": page_props.get("pageTitle", ""),
            "description": page_props.get("description", ""),
            "avatar_url": page_props.get("customAvatar", ""),
            "is_verified": page_props.get("isProfileVerified", False),
            "meta_title": page_props.get("metaTitle", ""),
            "meta_description": page_props.get("metaDescription", ""),
            "source_url": self.url,
        }

        # Ekstrak tautan utama
        links = []
        raw_links = page_props.get("links", [])
        for idx, item in enumerate(raw_links, 1):
            title = (item.get("title") or "").strip()
            url = item.get("url") or ""
            link_type = item.get("type", "UNKNOWN")
            link_id = item.get("id")

            links.append({
                "no": idx,
                "id": link_id,
                "title": title,
                "url": url,
                "type": link_type,
                "position": item.get("position", idx - 1),
            })

        # Ekstrak tautan sosial media
        social_links = []
        raw_social = page_props.get("socialLinks", [])
        for idx, item in enumerate(raw_social, 1):
            platform = item.get("type", "UNKNOWN")
            url = item.get("url") or ""
            social_links.append({
                "no": idx,
                "platform": platform,
                "url": url,
                "position": item.get("position", idx - 1),
            })

        self.scraped_data = {
            "profile": profile_info,
            "links_count": len(links),
            "social_links_count": len(social_links),
            "links": links,
            "social_links": social_links,
        }

        return self.scraped_data

    def display_console(self):
        """Menampilkan data hasil scraping secara rapi di konsol terminal."""
        data = self.scraped_data
        if not data:
            print("Belum ada data. Silakan jalankan scrape() terlebih dahulu.")
            return

        profile = data["profile"]
        links = data["links"]
        social_links = data["social_links"]

        if console:
            # Menggunakan library rich
            console.rule("[bold cyan]Hasil Scraping Linktree[/bold cyan]")
            profile_text = (
                f"[bold green]Username:[/bold green] {profile['username']}\n"
                f"[bold green]Judul Halaman:[/bold green] {profile['page_title']}\n"
                f"[bold green]Deskripsi/Bio:[/bold green] {profile['description']}\n"
                f"[bold green]Avatar URL:[/bold green] {profile['avatar_url']}\n"
                f"[bold green]Terverifikasi:[/bold green] {'Ya' if profile['is_verified'] else 'Tidak'}\n"
                f"[bold green]Total Links:[/bold green] {len(links)} item\n"
                f"[bold green]Total Social Links:[/bold green] {len(social_links)} item"
            )
            console.print(Panel(profile_text, title="[bold yellow]Informasi Profil[/bold yellow]", expand=False))

            # Tabel Links
            table_links = Table(title="[bold yellow]Daftar Tautan Utama (Katalog Properti & Folder Drive)[/bold yellow]")
            table_links.add_column("No", justify="center", style="cyan", no_wrap=True)
            table_links.add_column("Judul / Proyek", style="magenta")
            table_links.add_column("Tipe", justify="center", style="green")
            table_links.add_column("Target URL", style="blue")

            for item in links:
                table_links.add_row(str(item["no"]), item["title"], item["type"], item["url"])

            console.print(table_links)

            # Tabel Social Links
            table_social = Table(title="[bold yellow]Tautan Media Sosial & Kontak[/bold yellow]")
            table_social.add_column("No", justify="center", style="cyan", no_wrap=True)
            table_social.add_column("Platform", style="magenta")
            table_social.add_column("URL", style="blue")

            for item in social_links:
                table_social.add_row(str(item["no"]), item["platform"], item["url"])

            console.print(table_social)
        else:
            # Fallback konsol biasa
            print("=" * 60)
            print("INFORMASI PROFIL:")
            print(f"Username   : {profile['username']}")
            print(f"Judul      : {profile['page_title']}")
            print(f"Deskripsi  : {profile['description']}")
            print(f"Avatar     : {profile['avatar_url']}")
            print("=" * 60)
            print(f"DAFTAR TAUTAN ({len(links)} item):")
            for item in links:
                print(f"  {item['no']}. {item['title']}")
                print(f"     URL: {item['url']}")
            print("=" * 60)
            print(f"MEDIA SOSIAL ({len(social_links)} item):")
            for item in social_links:
                print(f"  {item['no']}. [{item['platform']}] {item['url']}")
            print("=" * 60)

    def save_json(self, filepath: str = "cipta_group_data.json") -> str:
        """Menyimpan data lengkap ke berkas JSON."""
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(self.scraped_data, f, indent=2, ensure_ascii=False)
        return os.path.abspath(filepath)

    def save_csv(self, filepath: str = "cipta_group_links.csv") -> str:
        """Menyimpan daftar link dan social media ke berkas CSV."""
        rows = []
        # Tambahkan tautan utama
        for item in self.scraped_data.get("links", []):
            rows.append({
                "Kategori": "Tautan Utama",
                "Label / Judul": item.get("title", ""),
                "Platform / Tipe": item.get("type", ""),
                "URL": item.get("url", ""),
                "Posisi": item.get("position", ""),
            })
        # Tambahkan social media
        for item in self.scraped_data.get("social_links", []):
            rows.append({
                "Kategori": "Media Sosial",
                "Label / Judul": item.get("platform", ""),
                "Platform / Tipe": item.get("platform", ""),
                "URL": item.get("url", ""),
                "Posisi": item.get("position", ""),
            })

        if pd is not None:
            df = pd.DataFrame(rows)
            df.to_csv(filepath, index=False, encoding="utf-8-sig")
        else:
            import csv
            with open(filepath, "w", newline="", encoding="utf-8-sig") as f:
                writer = csv.DictWriter(f, fieldnames=["Kategori", "Label / Judul", "Platform / Tipe", "URL", "Posisi"])
                writer.writeheader()
                writer.writerows(rows)

        return os.path.abspath(filepath)

    def save_excel(self, filepath: str = "cipta_group_links.xlsx") -> Optional[str]:
        """Menyimpan data ke berkas Microsoft Excel (.xlsx) dengan multi-sheet."""
        if pd is None:
            print("[Warning] Pandas tidak terpasang, penyimpanan Excel dilewati.")
            return None

        # Siapkan DataFrame
        profile_df = pd.DataFrame([self.scraped_data.get("profile", {})])
        links_df = pd.DataFrame(self.scraped_data.get("links", []))
        social_df = pd.DataFrame(self.scraped_data.get("social_links", []))

        with pd.ExcelWriter(filepath, engine="openpyxl") as writer:
            profile_df.to_excel(writer, sheet_name="Profil", index=False)
            links_df.to_excel(writer, sheet_name="Tautan Utama", index=False)
            social_df.to_excel(writer, sheet_name="Media Sosial", index=False)

        return os.path.abspath(filepath)


def main():
    parser = argparse.ArgumentParser(description="Scraper Linktree Profile")
    parser.add_argument(
        "--url",
        default="https://linktr.ee/cipta.group",
        help="URL Linktree yang ingin di-scrape (default: https://linktr.ee/cipta.group)"
    )
    parser.add_argument(
        "--format",
        choices=["all", "json", "csv", "xlsx", "none"],
        default="all",
        help="Format file ekspor (default: all)"
    )
    parser.add_argument(
        "--output-prefix",
        default="cipta_group",
        help="Prefix nama file output (default: cipta_group)"
    )

    args = parser.parse_args()

    print(f"[*] Mengambil data dari: {args.url} ...")
    scraper = LinktreeScraper(url=args.url)
    
    try:
        scraper.scrape()
    except Exception as e:
        print(f"[Error] Terjadi kesalahan saat scraping: {e}")
        sys.exit(1)

    scraper.display_console()

    # Ekspor file sesuai pilihan
    prefix = args.output_prefix
    saved_files = []

    if args.format in ["all", "json"]:
        p = scraper.save_json(f"{prefix}_data.json")
        saved_files.append(f"JSON: {p}")

    if args.format in ["all", "csv"]:
        p = scraper.save_csv(f"{prefix}_links.csv")
        saved_files.append(f"CSV: {p}")

    if args.format in ["all", "xlsx"]:
        p = scraper.save_excel(f"{prefix}_links.xlsx")
        if p:
            saved_files.append(f"Excel: {p}")

    if saved_files:
        print("\n[+] Berkas berhasil disimpan:")
        for sf in saved_files:
            print(f"    - {sf}")


if __name__ == "__main__":
    main()
