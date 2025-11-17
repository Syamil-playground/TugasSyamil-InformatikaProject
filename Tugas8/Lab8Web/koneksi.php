<?php
// Tampilkan semua error PHP
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Konfigurasi koneksi
$host = "localhost";
$user = "root";
$pass = "";
$db   = "latihan1";

// Membuat koneksi
$conn = mysqli_connect($host, $user, $pass, $db);

// Cek koneksi
if (!$conn) {
    die("<h2 style='color:red;'>Koneksi ke database gagal:<br>" . mysqli_connect_error() . "</h2>");
}

