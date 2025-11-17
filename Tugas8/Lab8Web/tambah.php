<?php
// Debug: tampilkan semua error
ini_set('display_errors', 1);
error_reporting(E_ALL);

include_once 'koneksi.php';

function show_error($msg) {
    echo "<h2>Error:</h2>";
    echo "<p style='color:red;'>$msg</p>";
    echo "<a href='tambah.php'>Kembali</a>";
    exit;
}

if (isset($_POST['submit'])) {
    $nama       = trim($_POST['nama']);
    $kategori   = trim($_POST['kategori']);
    $harga_jual = trim($_POST['harga_jual']);
    $harga_beli = trim($_POST['harga_beli']);
    $stok       = trim($_POST['stok']);

    // Validasi
    if ($nama == "") show_error("Nama barang wajib diisi.");
    if (!is_numeric($harga_jual)) show_error("Harga jual harus berupa angka.");
    if (!is_numeric($harga_beli)) show_error("Harga beli harus berupa angka.");
    if (!is_numeric($stok)) show_error("Stok harus berupa angka.");

    // Upload gambar
    $gambar_path = null;
    if (!empty($_FILES['file_gambar']['name'])) {
        $file = $_FILES['file_gambar'];
        
        if ($file['error'] !== UPLOAD_ERR_OK) {
            show_error("Upload gagal. Error code: " . $file['error']);
        }

        // Cek folder gambar
        $folder = dirname(__FILE__) . "/gambar/";
        if (!is_dir($folder)) {
            mkdir($folder, 0777, true);
        }

        $filename = str_replace(" ", "_", basename($file['name']));
        $destination = $folder . $filename;

        if (!move_uploaded_file($file['tmp_name'], $destination)) {
            show_error("Gagal memindahkan file ke folder gambar.");
        }

        $gambar_path = "gambar/" . $filename;
    }

    // Insert menggunakan prepared statement
    $sql = "INSERT INTO data_barang (nama, kategori, harga_jual, harga_beli, stok, gambar)
            VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = mysqli_prepare($conn, $sql);
    if (!$stmt) show_error("Prepare gagal: " . mysqli_error($conn));

    mysqli_stmt_bind_param(
        $stmt,
        "ssddis",
        $nama,
        $kategori,
        $harga_jual,
        $harga_beli,
        $stok,
        $gambar_path
    );

    if (!mysqli_stmt_execute($stmt)) {
        show_error("Insert gagal: " . mysqli_stmt_error($stmt));
    }

    mysqli_stmt_close($stmt);

    // Redirect kembali
    header("Location: index.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Tambah Barang</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <h1>Tambah Barang</h1>
    <a class="btn" href="index.php">Kembali</a>

    <div class="main">
        <form method="post" action="tambah.php" enctype="multipart/form-data">

            <div class="input">
                <label>Nama Barang</label>
                <input type="text" name="nama" required>
            </div>

            <div class="input">
                <label>Kategori</label>
                <select name="kategori">
                    <option value="Komputer">Komputer</option>
                    <option value="Elektronik">Elektronik</option>
                    <option value="Hand Phone">Hand Phone</option>
                </select>
            </div>

            <div class="input">
                <label>Harga Jual</label>
                <input type="number" name="harga_jual" required>
            </div>

            <div class="input">
                <label>Harga Beli</label>
                <input type="number" name="harga_beli" required>
            </div>

            <div class="input">
                <label>Stok</label>
                <input type="number" name="stok" required>
            </div>

            <div class="input">
                <label>File Gambar</label>
                <input type="file" name="file_gambar" accept="image/*">
            </div>

            <div class="submit">
                <input type="submit" name="submit" value="Simpan">
            </div>

        </form>
    </div>
</div>
</body>
</html>
