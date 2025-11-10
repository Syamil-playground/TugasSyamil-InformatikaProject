<?php
// akses: latihan_get.php?nama=Agung
echo 'Selamat Datang ' . (isset($_GET['nama']) ? htmlspecialchars($_GET['nama']) : 'Tamu');
?>