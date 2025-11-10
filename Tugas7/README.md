
# 🧩 Praktikum 7 — PHP Dasar

Repository ini berisi hasil **Praktikum 7: PHP Dasar** pada mata kuliah **Pemrograman Web**.  
Tujuan praktikum ini adalah mengenal dasar sintaks PHP, penggunaan variabel, form (`GET` dan `POST`), serta membuat program sederhana untuk menampilkan data diri dengan perhitungan umur dan gaji.

---

## 📂 Struktur Folder

```

lab7_php_dasar/
├── php_dasar.php          # Program dasar menampilkan teks & variabel
├── latihan_get.php        # Contoh penggunaan method GET
├── latihan_post.php       # Contoh penggunaan method POST dengan form
├── tugas.php              # Program tugas (input data diri, hitung umur & gaji)
└── README.md              # Dokumentasi proyek

````

---

## ⚙️ Persiapan Lingkungan

1. **Install XAMPP**
   - Unduh dan instal XAMPP sesuai sistem operasi Anda.  
   - Jalankan **Apache** (dan **MySQL** jika diperlukan).

2. **Letakkan Folder Proyek**
   - Salin folder `lab7_php_dasar` ke direktori `htdocs` XAMPP.  
     Contoh:  
     ```
     C:\xampp\htdocs\lab7_php_dasar
     ```

3. **Jalankan di Browser**
   - Buka browser dan akses URL berikut:
     ```
     http://localhost/lab7_php_dasar/
     ```

---

## 🧠 Penjelasan File

### 1️⃣ `php_dasar.php`
Menampilkan teks dan variabel menggunakan PHP.

```php
<?php
  echo "Hello World";
  $nim = "0411500400";
  $nama = "Abdullah";
  echo "<br>NIM : $nim";
  echo "<br>Nama : $nama";
?>
````

### 2️⃣ `latihan_get.php`

Mendemonstrasikan cara mengambil data dari URL menggunakan `$_GET`.

Akses:

```
http://localhost/lab7_php_dasar/latihan_get.php?nama=Agung
```

### 3️⃣ `latihan_post.php`

Membuat form HTML dengan method `POST` dan menampilkan hasil input dari user.

### 4️⃣ `tugas.php`

Program utama praktikum.
Menampilkan form input **Nama**, **Tanggal Lahir**, dan **Pekerjaan**, lalu menghitung umur serta menampilkan gaji berdasarkan pekerjaan yang dipilih.

Contoh logika:

```php
switch ($pekerjaan) {
  case 'programmer': $gaji = 7000000; break;
  case 'manager': $gaji = 12000000; break;
  // dan seterusnya
}
```

---

## 🧮 Hasil Program (Contoh Tampilan)

### 📸 Screenshot

> Ganti bagian ini dengan screenshot hasil Anda:

* `php_dasar.php` di browser
* `latihan_get.php` dengan parameter
* `latihan_post.php` setelah submit
* `tugas.php` dengan hasil perhitungan umur & gaji

Contoh:

```
![Tampilan php_dasar](screenshots/php_dasar.png)
![Form tugas.php](screenshots/tugas_form.png)
![Hasil tugas.php](screenshots/tugas_result.png)
```

---

## 🧾 Kesimpulan

Melalui praktikum ini, kita belajar:

* Dasar sintaks PHP (`echo`, variabel, operator)
* Penggunaan form HTML dan superglobal PHP (`$_GET`, `$_POST`)
* Penerapan logika program untuk menghitung data dinamis (umur dan gaji)
* Membangun aplikasi sederhana berbasis server (PHP)

---
