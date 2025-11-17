<?php
include("koneksi.php");

// query untuk menampilkan data
$sql = 'SELECT * FROM data_barang';
$result = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <link href="style.css" rel="stylesheet" type="text/css" />
    <title>Data Barang</title>
</head>
<body>
    <div class="container">
        <h1>Data Barang</h1>
        <a class="btn" href="tambah.php">Tambah Barang</a>
        <div class="main">
            <table>
            <tr>
                <th>Gambar</th>
                <th>Nama Barang</th>
                <th>Kategori</th>
                <th>Harga Jual</th>
                <th>Harga Beli</th>
                <th>Stok</th>
                <th>Aksi</th>
            </tr>
            <?php if($result): ?>
            <?php while($row = mysqli_fetch_array($result)): ?>
            <tr>
                <td><?php if(!empty($row['gambar'])): ?><img src="<?= $row['gambar'];?>" alt="<?= $row['nama'];?>" class="thumb"/><?php else: ?>-<?php endif; ?></td>
                <td><?= htmlspecialchars($row['nama']);?></td>
                <td><?= htmlspecialchars($row['kategori']);?></td>
                <td><?= number_format($row['harga_jual'],0,',','.');?></td>
                <td><?= number_format($row['harga_beli'],0,',','.');?></td>
                <td><?= (int)$row['stok'];?></td>
                <td>
                    <a class="action" href="ubah.php?id=<?= $row['id_barang'];?>">Ubah</a> |
                    <a class="action" href="hapus.php?id=<?= $row['id_barang'];?>" onclick="return confirm('Hapus data ini?')">Hapus</a>
                </td>
            </tr>
            <?php endwhile; else: ?>
            <tr>
                <td colspan="7">Belum ada data</td>
            </tr>
            <?php endif; ?>
            </table>
        </div>
    </div>
</body>
</html>
