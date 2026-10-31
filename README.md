# Portal Katalog Properti Cipta Group & Web Scraper

Website portal katalog modern dan script web scraper otomatis untuk profil Linktree resmi **Cipta Group / PT Ciptatama Windsor** ([https://linktr.ee/cipta.group](https://linktr.ee/cipta.group)).

---

## 🌐 Fitur Website (`index.html`)

Website telah dirancang secara terstruktur, rapi, dan responsif dengan fitur-fitur:
1. **Hero Section Modern**: Tagline resmi *"Menciptakan masa depan bersamamu. Est 1996"*, statistik pengalaman 28+ tahun di Batam, dan legalitas terpercaya.
2. **Katalog Interaktif 9 Proyek**:
   - Filter Kategori: *Semua*, *Perumahan*, *Komersial & Ruko*, dan *Cluster Eksklusif*.
   - Fitur Pencarian Cepat (*Real-time Live Search*) berdasarkan nama proyek atau lokasi.
   - Tombol langsung ke folder Google Drive resmi (brosur resolusi tinggi & pricelist).
   - Tombol konsultasi WhatsApp per proyek dengan pesan terisi otomatis (*pre-filled message*).
3. **Pilar Keunggulan Pengembang**: Lokasi strategis di Batam, legalitas terjamin, kemudahan KPR perbankan.
4. **Formulir Konsultasi & Survey Lokasi**: Terhubung langsung ke WhatsApp Marketing resmi.
5. **Floating WhatsApp Button**: Tombol chat mengambang yang selalu mudah dijangkau di perangkat mobile dan desktop.

---

## 📁 Struktur Berkas

```
scrapciptatama/
├── index.html              # Halaman utama website (dapat langsung dibuka atau di-host di GitHub Pages)
├── serve.py                # Server lokal Python dengan auto-open browser
├── scraper.py              # Script scraper Linktree (ekstraksi metadata Next.js)
├── cipta_group_data.json   # Hasil scrape format JSON
├── cipta_group_links.csv   # Hasil scrape format CSV
├── cipta_group_links.xlsx  # Hasil scrape format Excel
├── requirements.txt        # Dependensi Python
├── README.md               # Dokumentasi proyek
└── assets/
    ├── css/
    │   └── style.css       # Styling kustom (glassmorphism, animai, font)
    └── js/
        └── app.js          # Logika dinamis katalog, filter, pencarian, dan integrasi WhatsApp
```

---

## 🚀 Cara Menjalankan Website Secara Lokal

### Opsi 1: Menjalankan dengan Server Python (Direkomendasikan)
Cukup jalankan:
```bash
python serve.py
```
Website akan otomatis terbuka di browser pada alamat `http://localhost:8000`.

### Opsi 2: Langsung Buka Berkas HTML
Anda juga dapat langsung klik ganda (double click) berkas `index.html` pada File Explorer untuk membukanya di browser apapun.

---

## ☁️ Cara Publikasi Gratis ke GitHub Pages

Karena repositori ini sudah terhubung ke GitHub (`franssaut/scrapciptatama`), Anda dapat mengaktifkan website ini secara gratis agar bisa diakses oleh publik di internet:

1. Buka repositori Anda di GitHub: **[https://github.com/franssaut/scrapciptatama](https://github.com/franssaut/scrapciptatama)**
2. Klik tab **Settings** di bagian atas.
3. Pada menu samping kiri, klik **Pages**.
4. Di bagian **Build and deployment > Branch**:
   - Pilih branch: `main`
   - Pilih folder: `/ (root)`
   - Klik **Save**.
5. Tunggu sekitar 1-2 menit, website Anda akan tayang secara online di:
   **`https://franssaut.github.io/scrapciptatama/`**

---

## 🔄 Cara Menjalankan Ulang Web Scraper

Jika terdapat pembaruan tautan pada profil Linktree:
```bash
python scraper.py
```
Pustaka Python yang dibutuhkan:
```bash
pip install -r requirements.txt
```
