<?php
// akses: latihan_get.php?nama=Syamil
echo 'Selamat Datang ' . (isset($_GET['nama']) ? htmlspecialchars($_GET['nama']) : 'Tamu');
?>
