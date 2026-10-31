# Portal Katalog Properti Cipta Group & Web Scraper Mendalam (Deep Inspection)

Website portal katalog modern dan script **Deep Web Scraper** otomatis untuk profil Linktree resmi **Cipta Group / PT Ciptatama Windsor** ([https://linktr.ee/cipta.group](https://linktr.ee/cipta.group)).

---

## 🔍 Hasil Scraping Mendalam (Deep Inspection)

Scraper tidak hanya membaca tautan dari Linktree, tetapi juga melakukan **pemindaian mendalam ke dalam folder Google Drive publik** masing-masing proyek:

- **Total Proyek**: 9 Kawasan Perumahan, Cluster & Niaga
- **Total Subfolder Dokumen Terekstrak**: **44 folder** (Brosur, Pricelist / Angsuran, Siteplan, Denah, Gambar Rumah, Video)
- **Total Berkas Digital Teridentifikasi**: **20 video konten promosi**
- **Saluran Resmi**: WhatsApp (+62 856-6667-363), Instagram (@ciptatama_windsor), TikTok (@cipta_windsor)

### Rincian 9 Proyek & Folder Dokumen Digital:
1. **🥀 SILVERBELL, TCA 2** (Cluster Eksklusif • Tiban Centre Avenue)
   - 📁 Subfolder: `BROSUR`, `PRICELIST`, `SITEPLAN`, `VIDEO`
2. **🏬 CIPTA GRAND CITY** (Kota Mandiri & Niaga • Kawasan Terpadu)
   - 📁 Subfolder: `BROSUR`, `DENAH`, `GAMBAR`, `PRICE LIST`, `SITE PLAN`, `VIDEO`
   - 📄 Berkas: 20 video konten marketing & review
3. **🏬 CIPTA LAND** (Komersial & Ruko • Batam)
   - 📁 Subfolder: `Brosur Ciptaland`, `Ruko Cipta Land`, `Rumah, Blok Dahlia`, `Rumah, Blok Kamboja`
4. **🏡 CIPTA PIAYU VILLAGE 2** (Perumahan Subsidi & Komersil • Piayu)
   - 📁 Subfolder: `BROSUR`, `PRICELIST`, `SITE PLAN`, `VIDEO`
5. **🏡 CIPTA MANDIRI** (Perumahan Keluarga • Batam)
   - 📁 Subfolder: `BROSUR`, `DENAH`, `GAMBAR`, `PRICE LIST`, `SITE PLAN`, `VIDEO`
6. **🏡 CIPTA RESIDENCE** (Perumahan Modern • Batam)
   - 📁 Subfolder: `BROSUR`, `DENAH`, `GAMBAR RUMAH`, `PRICE LIST`, `SITE PLAN`, `VIDEO`
7. **🏡 CIPTA GREEN CITY TCA II** (Eco Living • Tiban Centre Avenue)
   - 📁 Subfolder: `BROSUR`, `DENAH`, `GAMBAR RUMAH`, `PRICE LIST`, `SITE PLAN`
8. **🏡 CIPTA GREEN VIEW** (Hunian Panorama Alami • Batam)
   - 📁 Subfolder: `BROSUR`, `DENAH`, `GAMBAR RUMAH`, `PRICE LIST`, `SITE PLAN`, `VIDEO`
9. **🏬 PESONA NIAGA** (Komersial & Ruko • Pusat Niaga Batam)
   - 📁 Subfolder: `Gambar Ruko`, `PRICELIST`, `SEWA`

---

## 📁 Berkas Hasil Ekspor

1. **`cipta_group_detailed.json`**: Struktur pohon lengkap hierarkis (profil, 9 proyek, 44 subfolder dokumen, direct drive links).
2. **`cipta_group_detailed.csv`**: Tabel baris per dokumen/folder dengan klasifikasi dokumen, lokasi, kategori, dan URL.
3. **`cipta_group_detailed.xlsx`**: Buku kerja Excel 4 lembar (*Profil*, *Daftar Proyek*, *Rincian Dokumen & Drive*, *Media Sosial & Kontak*).

---

## 🚀 Cara Menjalankan Ulang Deep Scraper

```bash
# Jalankan scraper mendalam (Linktree + Google Drive deep scan)
python scraper.py

# Opsi hanya scrape cepat (tanpa scan dalam Drive)
python scraper.py --no-deep

# Tentukan nama prefix keluaran
python scraper.py --output-prefix data_lengkap
```

---

## 🌐 Menjalankan & Membuka Website

### Jalankan Lokal:
```bash
python serve.py
```
Akses di browser pada: `http://localhost:8000`

### Live di Vercel:
👉 **[https://scrapciptatama.vercel.app](https://scrapciptatama.vercel.app)**
