# Praktikum 8 - PHP dan Database MySQL

Repository ini berisi hasil pengerjaan Praktikum 8 Mata Kuliah Pemrograman Web.  
Pada praktikum ini dibuat aplikasi CRUD (Create, Read, Update, Delete) sederhana menggunakan PHP dan database MySQL dengan studi kasus Data Barang.

---

## 📌 Tujuan Praktikum
1. Memahami dasar-dasar penggunaan database MySQL.
2. Menghubungkan PHP dengan database menggunakan mysqli.
3. Membuat fitur CRUD:
   - Create (Tambah Data)
   - Read (Menampilkan Data)
   - Update (Mengubah Data)
   - Delete (Menghapus Data)
4. Menerapkan upload file (gambar barang).

---

## 📂 Struktur Direktori
```
Lab8Web/
│── index.php
│── tambah.php
│── ubah.php
│── hapus.php
│── koneksi.php
│── style.css
│── README.md
│── .gitignore (opsional)
│
├── gambar/
│ └── (file gambar yang di-upload)
│
└── screenshots/
└── (isi screenshot langkah-langkah)
```

---

## 🛠 Persiapan Alat
Sebelum memulai, lakukan hal berikut:

1. Install **XAMPP**.
2. Jalankan **Apache** dan **MySQL** di XAMPP Control Panel.
3. Akses phpMyAdmin:
http://localhost/phpmyadmin/

sql
Copy code

---

## 🗄️ Membuat Database & Tabel
Jalankan SQL berikut:

```sql
CREATE DATABASE latihan1;
USE latihan1;

CREATE TABLE data_barang (
id_barang INT(10) AUTO_INCREMENT PRIMARY KEY,
kategori VARCHAR(30),
nama VARCHAR(30),
gambar VARCHAR(100),
harga_beli DECIMAL(10,0),
harga_jual DECIMAL(10,0),
stok INT(4)
);
🔗 koneksi.php — File Koneksi Database
File ini menghubungkan PHP ke MySQL.

php
Copy code
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$host = "localhost";
$user = "root";
$pass = "";
$db   = "latihan1";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

echo "Koneksi Berhasil!";
?>
File ini digunakan di semua file lain:

php
Copy code
include "koneksi.php";
📄 Penjelasan Setiap File
1. index.php (READ)
Menampilkan seluruh data barang dari database.

Menyediakan tombol:

Tambah Barang

Ubah

Hapus

2. tambah.php (CREATE)
Menambahkan data barang baru.

Mendukung upload gambar.

3. ubah.php (UPDATE)
Mengubah data barang yang sudah ada.

Bisa mengganti gambar atau tetap menggunakan yang lama.

4. hapus.php (DELETE)
Menghapus data barang berdasarkan id_barang.

5. style.css
Mengatur tampilan layout agar lebih rapi.

🧪 Cara Menjalankan Aplikasi
Copy folder Lab8Web ke:

makefile
Copy code
C:\xampp\htdocs\
Jalankan:

bash
Copy code
http://localhost/Lab8Web/index.php
Coba fitur:

Tambah barang

Edit barang

Hapus barang

🖼️ Screenshot (Isi dengan screenshot asli Anda)
Silakan ganti gambar berikut di folder /screenshots:

/screenshots/01_koneksi.png

/screenshots/02_index.png

/screenshots/03_tambah.png

/screenshots/04_ubah.png

/screenshots/05_hapus.png
