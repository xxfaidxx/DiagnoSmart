<p align="center">
  <img src="public/images/icon.png" alt="DiagnoSmart Icon" width="250"/>
</p>

> **"Deteksi dini, Hidup lebih pasti di DiagnoSmart"**

**DiagnoSmart** adalah platform diagnosis cerdas berbasis web yang memanfaatkan teknologi modern untuk membantu pengguna mengenali potensi penyakit sejak dini. Dengan tampilan elegan, responsif, dan fungsionalitas berbasis AI ringan, DiagnoSmart dirancang untuk menjadi asisten kesehatan pribadi Anda – cepat, mudah, dan aman.

---

## Fitur Unggulan

 **Diagnosis Gejala Otomatis**  
Masukkan gejala, dapatkan analisis — semudah itu.

 **Visualisasi Hasil Interaktif**  
Informasi kesehatan ditampilkan secara jelas dan ringkas.

 **Keamanan Data & Autentikasi Supabase**  
Privasi pengguna terjaga dengan protokol modern.

 **Arsitektur Modular**  
Kembangkan dengan mudah berkat struktur komponen yang rapi.

 **Tampilan Responsif & Modern**  
Dibangun dengan TailwindCSS untuk pengalaman yang konsisten di semua perangkat.

---

##  Teknologi yang Digunakan

| Kategori     | Teknologi                                 |
|--------------|--------------------------------------------|
| Frontend     | HTML5, TailwindCSS, JavaScript (Modular)   |
| Backend      | Express.js, Hapi.js                        |
| Auth & DB    | Supabase                                   |
| Build Tools  | Webpack, Babel, PostCSS, Nodemon           |
| Hosting      | Firebase (konfigurasi disiapkan)           |

---

##  Struktur Proyek

```
DiagnoSmart/
├── src/
│   ├── components/   # Komponen UI reusable
│   ├── pages/        # Halaman aplikasi (Home, Result, dsb)
│   ├── routes/       # Routing logika diagnosis
│   ├── scripts/      # Script JS utama
│   ├── server.js     # Entry point server
│   └── supa.js       # Konfigurasi Supabase
├── public/
│   ├── images/       # Gambar dan aset visual
│   └── css/          # Output TailwindCSS
├── webpack.*.js      # Konfigurasi bundling Webpack
├── tailwind.config.js
└── package.json      # Informasi & dependensi proyek
```

---

##  Cara Menjalankan

### 1. Clone dan Install

```bash
git clone https://github.com/xxfaidxx/DiagnoSmart.git
cd DiagnoSmart
npm install
```

### 2. Jalankan untuk Development

```bash
npm run dev
```

### 3. Compile untuk Produksi

```bash
npm run build
```

> Jalankan `npm start` jika hanya ingin mengaktifkan frontend dengan Webpack Dev Server.

---

## Kontribusi

Kami sangat terbuka untuk kontribusi dari komunitas. Baik itu perbaikan bug, fitur baru, atau peningkatan performa – semua kontribusi sangat berarti!

 laporkan bug/saran di [Issue Tracker](https://github.com/xxfaidxx/DiagnoSmart/issues)

---

##  Lisensi

Proyek ini dilisensikan di bawah lisensi **ISC** – Silakan gunakan dan modifikasi sesuai kebutuhan.

---

##  Pengembang

**Tim DiagnoSmart**
 GitHub: [@xxfaidxx](https://github.com/xxfaidxx)

---

## 🌈 Penutup

**DiagnoSmart** bukan sekadar aplikasi – ini adalah langkah awal menuju masyarakat yang lebih peduli dan sadar kesehatan.  
Mari bersama membangun masa depan kesehatan digital yang lebih cerdas dan inklusif.

> _“Sehat dimulai dari kesadaran. DiagnoSmart membantu mewujudkannya.”_
