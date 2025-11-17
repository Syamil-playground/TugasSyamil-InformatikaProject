# Lab8Web - Praktikum 8 (PHP & MySQL)

**Isi repository ini** (dihasilkan otomatis):
- koneksi.php
- index.php
- tambah.php
- ubah.php
- hapus.php
- style.css
- folder `gambar/` (tempat upload gambar)
- folder `screenshots/` (placeholder screenshot untuk dokumentasi)

## Langkah pengerjaan praktikum
1. Jalankan XAMPP (Apache + MySQL).
2. Buat database `latihan1` di phpMyAdmin, lalu buat tabel `data_barang`:
```sql
CREATE DATABASE latihan1;
USE latihan1;

CREATE TABLE data_barang (
  id_barang int(10) auto_increment PRIMARY KEY,
  kategori varchar(30),
  nama varchar(30),
  gambar varchar(100),
  harga_beli decimal(10,0),
  harga_jual decimal(10,0),
  stok int(4)
);
```
3. Copy folder `Lab8Web` ke `htdocs` (atau direktori webserver Anda).
4. Buka http://localhost/Lab8Web/index.php untuk melihat daftar barang.
5. Gunakan halaman *Tambah Barang* untuk menambahkan data (dengan upload gambar).
6. Ubah / hapus data menggunakan tombol yang tersedia.

## README - Dokumentasi & Screenshot
Contoh nama screenshot:
- screenshots/01_koneksi.png (tes koneksi php)
- screenshots/02_index.png (tampilan index)
- screenshots/03_tambah.png (form tambah)
- screenshots/04_ubah.png (form ubah)

> Catatan: file screenshot di folder `screenshots/` saat ini adalah **placeholder**. Ganti dengan screenshot hasil praktik sebenarnya ketika melakukan tugas.

## README - Instruksi pengumpulan
1. Commit semua file ke repository `Lab8Web` di GitHub.
2. Sertakan screenshot setiap langkah (sesuai instruksi praktikum).
3. Upload link repository ke e-learning / ecampus.

-- Selesai --
