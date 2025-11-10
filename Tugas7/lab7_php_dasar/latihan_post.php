<!DOCTYPE html>
<html>
<body>
  <h2>Form Input</h2>
  <form method="post" action="">
    <label>Nama: </label>
    <input type="text" name="nama">
    <input type="submit" value="Kirim">
  </form>

  <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      echo 'Selamat Datang ' . htmlspecialchars($_POST['nama']);
    }
  ?>
</body>
</html>