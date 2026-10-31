"""
Web Scraper Mendalam (Deep Scraper) untuk Linktree & Katalog Drive Cipta Group
URL Sumber: https://linktr.ee/cipta.group

Tingkatan Ekstraksi:
1. Profil Lengkap Linktree (Bio, Avatar, Tema, SEO, Integrasi)
2. Metadata Proyek (Kategori, Lokasi, Tipe, Tag, Status)
3. Ekstraksi Google Drive Mendalam (Subfolder: BROSUR, PRICELIST, SITEPLAN, VIDEO, DENAH, dsb.)
4. Deteksi File Digital & Tautan Langsung (PDF, Excel, Video Konten)
5. Ekspor Multi-Format (JSON Hierarkis, CSV Rinci, Excel Multi-Sheet)
"""

import sys
import os
import re
import json
import time
import argparse
from typing import Dict, Any, List, Optional
import urllib.request
import urllib.error

# Pustaka opsional
try:
    import pandas as pd
except ImportError:
    pd = None

try:
    from rich.console import Console
    from rich.table import Table
    from rich.panel import Panel
    from rich.tree import Tree
    from rich import print as rprint
    console = Console()
except ImportError:
    console = None


class LinktreeDeepScraper:
    """Scraper mendalam untuk Linktree dan Google Drive Asset Explorer."""

    DEFAULT_HEADERS = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/124.0.0.0 Safari/537.36"
        ),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "id,en-US;q=0.9,en;q=0.8",
    }

    LOCATION_KEYWORDS = {
        "tca": "TCA (Tiban Centre Avenue), Batam",
        "tiban": "Tiban, Batam",
        "piayu": "Piayu, Batam",
        "mandiri": "Batam",
        "residence": "Batam",
        "grand city": "Kawasan Terpadu Batam",
        "land": "Batam",
        "niaga": "Pusat Niaga Batam",
    }

    CATEGORY_MAP = {
        "silverbell": ("Cluster Eksklusif", "cluster", "Hunian Mewah Modern"),
        "grand city": ("Kota Mandiri & Niaga", "komersial", "Mega Proyek Terpadu"),
        "land": ("Komersial & Ruko", "komersial", "Pusat Niaga Strategis"),
        "piayu": ("Perumahan Subsidi/Komersil", "residensial", "Hunian Asri Ramah Anggaran"),
        "mandiri": ("Perumahan", "residensial", "Hunian Keluarga Strategis"),
        "residence": ("Perumahan Modern", "residensial", "Hunian Nyaman & Tertata"),
        "green city": ("Eco Living", "cluster", "Kota Hijau Berkelanjutan"),
        "green view": ("Hunian Panorama", "residensial", "Pemandangan Alam Asri"),
        "pesona niaga": ("Komersial & Ruko", "komersial", "Ruko Bisnis Ramai"),
    }

    def __init__(self, url: str = "https://linktr.ee/cipta.group", deep_drive: bool = True):
        if not url.startswith("http"):
            url = f"https://linktr.ee/{url.lstrip('@')}"
        self.url = url
        self.deep_drive = deep_drive
        self.scraped_data: Dict[str, Any] = {}

    def fetch_html(self, target_url: str, timeout: int = 15) -> str:
        """Mengambil teks HTML dari URL target."""
        req = urllib.request.Request(target_url, headers=self.DEFAULT_HEADERS)
        try:
            with urllib.request.urlopen(req, timeout=timeout) as response:
                return response.read().decode("utf-8", errors="ignore")
        except urllib.error.HTTPError as e:
            raise RuntimeError(f"Gagal mengambil {target_url}: HTTP {e.code} - {e.reason}")
        except urllib.error.URLError as e:
            raise RuntimeError(f"Gagal koneksi ke {target_url}: {e.reason}")

    def parse_drive_contents(self, folder_url: str) -> Dict[str, Any]:
        """Mengekstrak struktur folder dan file di dalam Google Drive folder publik."""
        try:
            html = self.fetch_html(folder_url, timeout=12)
        except Exception as e:
            return {"error": str(e), "subfolders": [], "files": []}

        # Cari payload window['_DRIVE_ivd']
        match = re.search(r"window\['_DRIVE_ivd'\]\s*=\s*'([^']+)'", html)
        if not match:
            return {"subfolders": [], "files": []}

        raw = match.group(1).replace(r'\/', '/')
        try:
            # Decode \x.. format
            decoded_text = re.sub(r'\\x([0-9a-fA-F]{2})', lambda m: chr(int(m.group(1), 16)), raw)
            data = json.loads(decoded_text)
        except Exception:
            return {"subfolders": [], "files": []}

        subfolders = []
        files = []
        item_list = data[0] if (isinstance(data, list) and len(data) > 0 and isinstance(data[0], list)) else data

        for entry in item_list:
            if isinstance(entry, list) and len(entry) >= 4:
                item_id = str(entry[0])
                name = str(entry[2])
                mime = str(entry[3])
                is_folder = "folder" in mime.lower()

                if is_folder:
                    subfolders.append({
                        "id": item_id,
                        "name": name,
                        "category_tag": self._categorize_subfolder(name),
                        "url": f"https://drive.google.com/drive/folders/{item_id}",
                    })
                else:
                    files.append({
                        "id": item_id,
                        "name": name,
                        "mimeType": mime,
                        "url": f"https://drive.google.com/file/d/{item_id}/view",
                        "direct_download": f"https://drive.google.com/uc?export=download&id={item_id}"
                    })

        return {
            "subfolders": subfolders,
            "files": files,
            "total_subfolders": len(subfolders),
            "total_files": len(files)
        }

    def _categorize_subfolder(self, name: str) -> str:
        n = name.upper()
        if "BROSUR" in n:
            return "Brosur / Marketing Kit"
        if "PRICE" in n:
            return "Pricelist / Simulasi Angsuran"
        if "SITE" in n:
            return "Siteplan / Masterplan"
        if "VIDEO" in n:
            return "Video Promosi & Progres"
        if "DENAH" in n:
            return "Denah Rumah / Lantai"
        if "GAMBAR" in n or "FOTO" in n:
            return "Galeri Desain & Tipe Unit"
        if "SEWA" in n:
            return "Informasi Sewa Niaga"
        return "Dokumen Properti"

    def _enrich_project_metadata(self, raw_title: str) -> Dict[str, str]:
        """Mengekstrak emoji, nama bersih, lokasi, dan kategori proyek."""
        # Ekstrak emoji di awal judul
        emoji_match = re.match(r'^([^\w\s]+)\s*(.*)$', raw_title)
        if emoji_match:
            emoji = emoji_match.group(1)
            clean_title = emoji_match.group(2).strip()
        else:
            emoji = "🏡"
            clean_title = raw_title.strip()

        # Deteksi lokasi & kategori
        title_lower = clean_title.lower()
        location = "Batam"
        for kw, loc in self.LOCATION_KEYWORDS.items():
            if kw in title_lower:
                location = loc
                break

        category_name = "Perumahan & Komersial"
        category_slug = "residensial"
        highlight = "Proyek Unggulan Cipta Group"
        for kw, (cat_name, cat_slug, hl) in self.CATEGORY_MAP.items():
            if kw in title_lower:
                category_name = cat_name
                category_slug = cat_slug
                highlight = hl
                break

        return {
            "emoji": emoji,
            "clean_title": clean_title,
            "category_name": category_name,
            "category_slug": category_slug,
            "location": location,
            "highlight": highlight,
        }

    def scrape(self) -> Dict[str, Any]:
        """Melakukan scraping menyeluruh: Linktree + Google Drive deep scan."""
        html = self.fetch_html(self.url)

        match = re.search(r'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', html, re.DOTALL)
        if not match:
            raise ValueError("Struktur data Linktree (__NEXT_DATA__) tidak ditemukan.")

        payload = json.loads(match.group(1))
        page_props = payload.get("props", {}).get("pageProps", {})

        # Profil Lengkap
        profile = {
            "username": page_props.get("username", ""),
            "page_title": page_props.get("pageTitle", ""),
            "description": page_props.get("description", ""),
            "avatar_url": page_props.get("customAvatar", ""),
            "is_verified": page_props.get("isProfileVerified", False),
            "meta_title": page_props.get("metaTitle", ""),
            "meta_description": page_props.get("metaDescription", ""),
            "theme_name": page_props.get("theme", {}).get("name", "Custom"),
            "source_url": self.url,
            "scraped_at": time.strftime("%Y-%m-%d %H:%M:%S"),
        }

        # Media Sosial & Kontak
        social_links = []
        for s in page_props.get("socialLinks", []):
            stype = s.get("type", "UNKNOWN")
            surl = s.get("url", "")
            contact_meta = {}
            if stype == "WHATSAPP":
                # Ekstrak nomor
                phone_match = re.search(r'phone=(\d+)', surl)
                if phone_match:
                    p = phone_match.group(1)
                    contact_meta["phone_raw"] = p
                    contact_meta["phone_display"] = f"+{p[:2]} {p[2:5]}-{p[5:9]}-{p[9:]}"
            elif stype == "INSTAGRAM":
                contact_meta["handle"] = surl.rstrip("/").split("/")[-1]
            elif stype == "TIKTOK":
                contact_meta["handle"] = surl.rstrip("/").split("/")[-1]

            social_links.append({
                "platform": stype,
                "url": surl,
                "position": s.get("position", 0),
                "meta": contact_meta
            })

        # Ekstraksi Proyek & Google Drive
        raw_links = page_props.get("links", [])
        projects = []

        total_projects = len(raw_links)
        print(f"[*] Ditemukan {total_projects} proyek pada Linktree...")

        for idx, item in enumerate(raw_links, 1):
            raw_title = (item.get("title") or "").strip()
            drive_url = item.get("url", "")
            meta_info = self._enrich_project_metadata(raw_title)

            # Ekstrak folder ID dari Google Drive URL
            folder_id_match = re.search(r'folders/([a-zA-Z0-9_-]+)', drive_url)
            folder_id = folder_id_match.group(1) if folder_id_match else None

            project_entry = {
                "no": idx,
                "id": item.get("id"),
                "raw_title": raw_title,
                "clean_title": meta_info["clean_title"],
                "emoji": meta_info["emoji"],
                "category": meta_info["category_name"],
                "category_slug": meta_info["category_slug"],
                "location": meta_info["location"],
                "highlight": meta_info["highlight"],
                "drive_url": drive_url,
                "drive_folder_id": folder_id,
                "drive_details": {
                    "scanned": False,
                    "subfolders": [],
                    "files": [],
                    "total_subfolders": 0,
                    "total_files": 0
                }
            }

            # Lakukan scan mendalam ke dalam folder Drive jika diaktifkan
            if self.deep_drive and drive_url and folder_id:
                print(f"    [{idx}/{total_projects}] Memindai isi folder: {meta_info['clean_title']} ...")
                drive_details = self.parse_drive_contents(drive_url)
                project_entry["drive_details"] = {
                    "scanned": True,
                    "subfolders": drive_details.get("subfolders", []),
                    "files": drive_details.get("files", []),
                    "total_subfolders": drive_details.get("total_subfolders", 0),
                    "total_files": drive_details.get("total_files", 0)
                }
                time.sleep(0.2)

            projects.append(project_entry)

        self.scraped_data = {
            "profile": profile,
            "summary": {
                "total_projects": len(projects),
                "total_social_channels": len(social_links),
                "total_drive_subfolders": sum(p["drive_details"]["total_subfolders"] for p in projects),
                "total_drive_files": sum(p["drive_details"]["total_files"] for p in projects),
            },
            "social_links": social_links,
            "projects": projects
        }

        return self.scraped_data

    def display_console(self):
        """Menampilkan pohon struktur data yang mendalam di terminal."""
        data = self.scraped_data
        if not data:
            return

        profile = data["profile"]
        summary = data["summary"]

        if console:
            console.rule("[bold cyan]Laporan Hasil Scraping Mendalam (Deep Inspection)[/bold cyan]")
            
            p_text = (
                f"[bold green]Brand:[/bold green] {profile['page_title']}\n"
                f"[bold green]Tagline:[/bold green] {profile['description']}\n"
                f"[bold green]Total Proyek:[/bold green] {summary['total_projects']}\n"
                f"[bold green]Total Subfolder Drive:[/bold green] {summary['total_drive_subfolders']} folder (Brosur, Pricelist, Siteplan, dsb.)\n"
                f"[bold green]Total File Digital Langsung:[/bold green] {summary['total_drive_files']} berkas (Video/Dokumen)\n"
                f"[bold green]Waktu Scraping:[/bold green] {profile['scraped_at']}"
            )
            console.print(Panel(p_text, title="[bold yellow]Ringkasan Profil Cipta Group[/bold yellow]", expand=False))

            # Tree Visualisasi
            tree = Tree("[bold cyan]📂 Portofolio Proyek & Dokumen Digital Cipta Group[/bold cyan]")
            for p in data["projects"]:
                p_node = tree.add(
                    f"[bold yellow]{p['emoji']} {p['clean_title']}[/bold yellow] "
                    f"[dim]({p['category']} • {p['location']})[/dim]"
                )
                
                # Tambahkan subfolder
                sfs = p["drive_details"]["subfolders"]
                if sfs:
                    sf_node = p_node.add(f"[cyan]📁 Subfolder Dokumen ({len(sfs)}):[/cyan]")
                    for sf in sfs:
                        sf_node.add(f"[green]• {sf['name']}[/green] [dim]({sf['category_tag']})[/dim]")

                # Tambahkan files jika ada
                fls = p["drive_details"]["files"]
                if fls:
                    fl_node = p_node.add(f"[magenta]📄 File Konten ({len(fls)}):[/magenta]")
                    for fl in fls[:5]:  # tampilkan 5 teratas
                        fl_node.add(f"[blue]• {fl['name']}[/blue]")
                    if len(fls) > 5:
                        fl_node.add(f"[dim]... dan {len(fls)-5} file lainnya[/dim]")

            console.print(tree)
        else:
            print(f"Scraped {summary['total_projects']} projects with {summary['total_drive_subfolders']} subfolders.")

    def save_json(self, filepath: str = "cipta_group_detailed.json") -> str:
        """Menyimpan data hierarkis lengkap ke JSON."""
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(self.scraped_data, f, indent=2, ensure_ascii=False)
        return os.path.abspath(filepath)

    def save_csv(self, filepath: str = "cipta_group_detailed.csv") -> str:
        """Menyimpan data dokumen dan subfolder per proyek ke CSV mendalam."""
        rows = []
        for p in self.scraped_data.get("projects", []):
            subfolders = p["drive_details"]["subfolders"]
            files = p["drive_details"]["files"]

            # Jika ada subfolder, buat 1 baris per subfolder
            if subfolders:
                for sf in subfolders:
                    rows.append({
                        "Proyek": p["clean_title"],
                        "Kategori Proyek": p["category"],
                        "Lokasi": p["location"],
                        "Tipe Item": "Subfolder Dokumen",
                        "Nama Dokumen / Folder": sf["name"],
                        "Klasifikasi Dokumen": sf["category_tag"],
                        "Tautan URL": sf["url"],
                        "Root Drive Proyek": p["drive_url"]
                    })
            else:
                rows.append({
                    "Proyek": p["clean_title"],
                    "Kategori Proyek": p["category"],
                    "Lokasi": p["location"],
                    "Tipe Item": "Root Folder",
                    "Nama Dokumen / Folder": p["raw_title"],
                    "Klasifikasi Dokumen": "Folder Utama",
                    "Tautan URL": p["drive_url"],
                    "Root Drive Proyek": p["drive_url"]
                })

            # Tambahkan file langsung jika ada
            for fl in files:
                rows.append({
                    "Proyek": p["clean_title"],
                    "Kategori Proyek": p["category"],
                    "Lokasi": p["location"],
                    "Tipe Item": "File Digital Langsung",
                    "Nama Dokumen / Folder": fl["name"],
                    "Klasifikasi Dokumen": fl.get("mimeType", "File"),
                    "Tautan URL": fl["url"],
                    "Root Drive Proyek": p["drive_url"]
                })

        if pd is not None:
            df = pd.DataFrame(rows)
            df.to_csv(filepath, index=False, encoding="utf-8-sig")
        else:
            import csv
            with open(filepath, "w", newline="", encoding="utf-8-sig") as f:
                keys = ["Proyek", "Kategori Proyek", "Lokasi", "Tipe Item", "Nama Dokumen / Folder", "Klasifikasi Dokumen", "Tautan URL", "Root Drive Proyek"]
                writer = csv.DictWriter(f, fieldnames=keys)
                writer.writeheader()
                writer.writerows(rows)

        return os.path.abspath(filepath)

    def save_excel(self, filepath: str = "cipta_group_detailed.xlsx") -> Optional[str]:
        """Menyimpan data ke Excel multi-sheet terstruktur."""
        if pd is None:
            return None

        # Sheet 1: Profil
        profile_df = pd.DataFrame([self.scraped_data.get("profile", {})])
        
        # Sheet 2: Proyek Utama
        projects_summary = []
        for p in self.scraped_data.get("projects", []):
            projects_summary.append({
                "No": p["no"],
                "Nama Proyek": p["clean_title"],
                "Kategori": p["category"],
                "Lokasi": p["location"],
                "Highlight": p["highlight"],
                "Tautan Google Drive": p["drive_url"],
                "Jumlah Subfolder": p["drive_details"]["total_subfolders"],
                "Daftar Subfolder": ", ".join(sf["name"] for sf in p["drive_details"]["subfolders"]),
                "Jumlah File": p["drive_details"]["total_files"]
            })
        proj_df = pd.DataFrame(projects_summary)

        # Sheet 3: Rincian Dokumen & Subfolder
        docs_rows = []
        for p in self.scraped_data.get("projects", []):
            for sf in p["drive_details"]["subfolders"]:
                docs_rows.append({
                    "Proyek": p["clean_title"],
                    "Kategori": p["category"],
                    "Tipe Dokumen": sf["category_tag"],
                    "Nama Folder Dokumen": sf["name"],
                    "Tautan Langsung": sf["url"]
                })
            for fl in p["drive_details"]["files"]:
                docs_rows.append({
                    "Proyek": p["clean_title"],
                    "Kategori": p["category"],
                    "Tipe Dokumen": "File Media / Video",
                    "Nama Folder Dokumen": fl["name"],
                    "Tautan Langsung": fl["url"]
                })
        docs_df = pd.DataFrame(docs_rows)

        # Sheet 4: Media Sosial & Kontak
        soc_rows = []
        for s in self.scraped_data.get("social_links", []):
            soc_rows.append({
                "Platform": s["platform"],
                "URL": s["url"],
                "Kontak / Handle": s.get("meta", {}).get("phone_display") or s.get("meta", {}).get("handle") or "-"
            })
        soc_df = pd.DataFrame(soc_rows)

        with pd.ExcelWriter(filepath, engine="openpyxl") as writer:
            profile_df.to_excel(writer, sheet_name="Profil Cipta Group", index=False)
            proj_df.to_excel(writer, sheet_name="Daftar Proyek", index=False)
            docs_df.to_excel(writer, sheet_name="Rincian Dokumen & Drive", index=False)
            soc_df.to_excel(writer, sheet_name="Media Sosial & Kontak", index=False)

        return os.path.abspath(filepath)


def main():
    parser = argparse.ArgumentParser(description="Deep Linktree & Google Drive Scraper")
    parser.add_argument("--url", default="https://linktr.ee/cipta.group", help="URL Linktree")
    parser.add_argument("--no-deep", action="store_true", help="Nonaktifkan pemindaian Google Drive mendalam")
    parser.add_argument("--output-prefix", default="cipta_group_detailed", help="Prefix nama file output")

    args = parser.parse_args()

    scraper = LinktreeDeepScraper(url=args.url, deep_drive=not args.no_deep)
    scraper.scrape()
    scraper.display_console()

    prefix = args.output_prefix
    j = scraper.save_json(f"{prefix}.json")
    c = scraper.save_csv(f"{prefix}.csv")
    x = scraper.save_excel(f"{prefix}.xlsx")

    print("\n[+] Berkas hasil scraping mendalam tersimpan:")
    print(f"    - JSON : {j}")
    print(f"    - CSV  : {c}")
    if x:
        print(f"    - Excel: {x}")


if __name__ == "__main__":
    main()
