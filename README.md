# Linktree Web Scraper (cipta.group)

Script Python untuk melakukan web scraping pada profil Linktree [https://linktr.ee/cipta.group](https://linktr.ee/cipta.group).

Scraper ini mengekstrak data langsung dari payload metadata Next.js (`__NEXT_DATA__`), sehingga data yang didapat sangat akurat, cepat, dan lengkap tanpa perlu menggunakan browser otomatis yang berat (seperti Selenium / Puppeteer).

---

## 📋 Data yang Berhasil Diekstrak

1. **Informasi Profil**:
   - Username: `cipta.group`
   - Judul Halaman: `@cipta.group`
   - Bio / Deskripsi: `Menciptakan masa depan bersamamu. Est 1996`
   - Foto Profil / Avatar URL
   - Status Verifikasi

2. **Daftar Tautan Utama (9 Proyek Properti)**:
   - 🥀 SILVERBELL, TCA 2 (Google Drive)
   - 🏬 CIPTA GRAND CITY (Google Drive)
   - 🏬 CIPTA LAND (Google Drive)
   - 🏡 CIPTA PIAYU VILLAGE 2 (Google Drive)
   - 🏡 CIPTA MANDIRI (Google Drive)
   - 🏡 CIPTA RESIDENCE (Google Drive)
   - 🏡 CIPTA GREEN CITY TCA II (Google Drive)
   - 🏡 CIPTA GREEN VIEW (Google Drive)
   - 🏬 PESONA NIAGA (Google Drive)

3. **Media Sosial & Kontak (3 Akun)**:
   - Instagram: [@ciptatama_windsor](https://www.instagram.com/ciptatama_windsor/)
   - TikTok: [@cipta_windsor](https://www.tiktok.com/@cipta_windsor)
   - WhatsApp: [08566667363](https://api.whatsapp.com/send?phone=628566667363)

---

## 🚀 Cara Menjalankan

### 1. Instalasi Kebutuhan (Opsional jika sudah ada)
```bash
pip install -r requirements.txt
```

### 2. Jalankan Scraper
Cukup jalankan perintah berikut di terminal:
```bash
python scraper.py
```

### 3. Opsi Tambahan (CLI Arguments)
Anda dapat menentukan URL lain, format ekspor, atau nama berkas:
```bash
# Men-scrape URL lain
python scraper.py --url https://linktr.ee/nama_akun

# Hanya ekspor ke format tertentu (json, csv, xlsx, atau all)
python scraper.py --format xlsx

# Mengubah nama prefix berkas keluaran
python scraper.py --output-prefix data_cipta
```

---

## 📁 Berkas Hasil Ekspor

Setelah dijalankan, scraper menghasilkan berkas berikut di folder ini:
- `cipta_group_data.json` : Data terstruktur lengkap dalam format JSON.
- `cipta_group_links.csv` : Tabel daftar tautan dan sosial media dalam format CSV.
- `cipta_group_links.xlsx` : Berkas Excel dengan 3 lembar kerja (*Profil*, *Tautan Utama*, dan *Media Sosial*).
