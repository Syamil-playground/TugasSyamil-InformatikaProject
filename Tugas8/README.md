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
│
├── gambar/
└── (file gambar yang di-upload)
```

---

## 🛠 Persiapan Alat
Sebelum memulai, lakukan hal berikut:

1. Install **XAMPP**.
2. Jalankan **Apache** dan **MySQL** di XAMPP Control Panel.
3. Akses phpMyAdmin:
```
http://localhost/phpmyadmin/
```

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
```
🔗 koneksi.php — File Koneksi Database
File ini menghubungkan PHP ke MySQL.

```php
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
```
File ini digunakan di semua file lain:
```php
include "koneksi.php";
```
📄 Penjelasan Setiap File
1. index.php (READ)
Menampilkan seluruh data barang dari database.

Menyediakan tombol:
- Tambah Barang
- Ubah
- Hapus

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

```
http://localhost/Lab8Web/index.php
```
Coba fitur:
- Tambah barang
- Edit barang
- Hapus barang

🖼️ Screenshot
<img width="1319" height="308" alt="image" src="https://github.com/user-attachments/assets/5bd7ce5a-7396-4822-9954-cdf7b2423b86" />

<img width="1321" height="665" alt="image" src="https://github.com/user-attachments/assets/992c66d5-7278-4b4e-964d-b78ba98747c8" />
<img width="1320" height="421" alt="image" src="https://github.com/user-attachments/assets/6d0e0b37-f83a-4e3e-8e08-8642ff6eba29" />
<img width="1297" height="652" alt="image" src="https://github.com/user-attachments/assets/64e843a3-d9cf-4f41-b01c-4cd52b5917e8" />
<img width="1323" height="333" alt="image" src="https://github.com/user-attachments/assets/f661a32e-3e53-4bba-963a-e49612b22b39" />
