<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <title>Tugas Lab 7 - PHP Dasar</title>
</head>
<body>
  <h1>Form Data Diri</h1>
  <form method="post" action="">
    <label>Nama:</label><br>
    <input type="text" name="nama" required><br><br>

    <label>Tanggal Lahir:</label><br>
    <input type="date" name="tgl_lahir" required><br><br>

    <label>Pekerjaan:</label><br>
    <select name="pekerjaan" required>
      <option value="">--Pilih Pekerjaan--</option>
      <option value="magang">Magang</option>
      <option value="staff">Staff</option>
      <option value="programmer">Programmer</option>
      <option value="manager">Manager</option>
      <option value="wiraswasta">Wiraswasta</option>
    </select><br><br>

    <input type="submit" value="Tampilkan">
  </form>

  <?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama = htmlspecialchars($_POST['nama']);
    $tgl = $_POST['tgl_lahir'];
    $pekerjaan = $_POST['pekerjaan'];

    try {
      $lahir = new DateTime($tgl);
      $now = new DateTime();
      $diff = $now->diff($lahir);
      $umur_tahun = $diff->y;
      $umur_detail = $diff->y . " tahun, " . $diff->m . " bulan, " . $diff->d . " hari";
    } catch (Exception $e) {
      $umur_tahun = "Tanggal tidak valid";
      $umur_detail = "Tanggal tidak valid";
    }

    switch ($pekerjaan) {
      case 'magang': $gaji = 500000; break;
      case 'staff': $gaji = 3000000; break;
      case 'programmer': $gaji = 7000000; break;
      case 'manager': $gaji = 12000000; break;
      case 'wiraswasta': $gaji = 5000000; break;
      default: $gaji = 0;
    }

    function rupiah($angka) {
      return 'Rp ' . number_format($angka, 0, ',', '.');
    }

    echo "<hr>";
    echo "<h2>Hasil Input</h2>";
    echo "<b>Nama:</b> $nama <br>";
    echo "<b>Tanggal Lahir:</b> " . htmlspecialchars($tgl) . "<br>";
    echo "<b>Umur:</b> $umur_detail (usia $umur_tahun tahun) <br>";
    echo "<b>Pekerjaan:</b> " . htmlspecialchars($pekerjaan) . "<br>";
    echo "<b>Gaji:</b> " . rupiah($gaji) . "<br>";
  }
  ?>
</body>
</html>