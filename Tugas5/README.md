# Praktikum 5: JavaScript – Pemrograman Web

---

## 1. Pengenalan JavaScript

```html
<script>
  document.write("Hello World");
  console.log("Hello World");
</script>
```

![Screenshot_20251020-205736](https://github.com/user-attachments/assets/fbf2020d-f600-4ef6-8ca6-5e6a343d4e79)
hasil tampilan Hello World

---

## 2. Alert Box

```html
<script>
  window.alert("Ini merupakan pesan untuk anda");
</script>
```
![Screenshot_20251020-205838](https://github.com/user-attachments/assets/1608655f-b97e-43f0-86aa-aee10ebe24d8)



---

3. Menulis ke Dokumen

`html
<script>
  document.write("Selamat mencoba JavaScript<br>");
  document.write("Semoga sukses!");
</script>
`

📸 Screenshot hasil document.write

---

4. Prompt Input

`html
<script>
  var nama = prompt("Siapa nama anda?", "Masukkan nama anda");
  document.write("Hai, " + nama);
</script>
`

📸 Screenshot prompt dan hasilnya

---

5. Fungsi dan Pemanggilan

`html
<script>
  function pesan() {
    alert("Memanggil JavaScript lewat body onload");
  }
</script>
<body onload="pesan()">
</body>
`

📸 Screenshot alert saat halaman dimuat

---

6. Operasi Aritmatika

`html
<script>
  function test(val1, val2) {
    document.write("Perkalian: " + val1 * val2 + "<br>");
    document.write("Pembagian: " + val1 / val2 + "<br>");
    document.write("Penjumlahan: " + (val1 + val2) + "<br>");
    document.write("Pengurangan: " + (val1 - val2) + "<br>");
    document.write("Modulus: " + (val1 % val2) + "<br>");
  }
</script>
<input type="button" value="Aritmatika" onclick="test(9,4)">
`

📸 Screenshot hasil operasi aritmatika

---

7. Seleksi Kondisi (if..else)

`html
<script>
  var nilai = prompt("Nilai (0-100): ", 0);
  var hasil = (nilai >= 60) ? "Lulus" : "Tidak Lulus";
  document.write("Hasil: " + hasil);
</script>
`

📸 Screenshot hasil seleksi kondisi

---

8. Seleksi Kondisi (switch)

`html
<script>
  function test() {
    var val1 = prompt("Input nilai (1-5):");
    switch (val1) {
      case "1": document.write("Bilangan satu"); break;
      case "2": document.write("Bilangan dua"); break;
      case "3": document.write("Bilangan tiga"); break;
      case "4": document.write("Bilangan empat"); break;
      case "5": document.write("Bilangan lima"); break;
      default: document.write("Bilangan lainnya");
    }
  }
</script>
<input type="button" value="Switch" onclick="test()">
`

📸 Screenshot hasil switch case

---

9. Form Input: Genap/Ganjil

`html
<script>
  function test() {
    var val1 = document.kirim.T1.value;
    document.kirim.T2.value = (val1 % 2 == 0) ? "Bilangan Genap" : "Bilangan Ganjil";
  }
</script>
<form name="kirim">
  <input type="text" name="T1">
  <input type="text" name="T2">
  <input type="button" value="Tebak" onclick="test()">
</form>
`

📸 Screenshot hasil tebakan bilangan

---

10. Form Button: Ubah Warna

`html
<script>
  function ubahWarnaLB(warna) {
    document.bgColor = warna;
  }
  function ubahWarnaLD(warna) {
    document.fgColor = warna;
  }
</script>
<form>
  <input type="button" value="Hijau" onclick="ubahWarnaLB('GREEN')">
  <input type="button" value="Putih" onclick="ubahWarnaLB('WHITE')">
  <input type="button" value="Kuning" onclick="ubahWarnaLD('YELLOW')">
  <input type="button" value="Biru" onclick="ubahWarnaLD('BLUE')">
</form>
`

📸 Screenshot perubahan warna latar dan teks

---

11. HTML DOM: CheckBox Total Harga

`html
<script>
  function hitung(ele) {
    var total = document.getElementById('total').value;
    total = total ? parseInt(total) : 0;
    var harga = parseInt(ele.value);
    total += ele.checked ? harga : -harga;
    document.getElementById('total').value = total;
  }
</script>
<label><input type="checkbox" value="5000" onclick="hitung(this)"> Ayam Goreng</label><br>
<label><input type="checkbox" value="500" onclick="hitung(this)"> Tempe Goreng</label><br>
<label><input type="checkbox" value="2500" onclick="hitung(this)"> Telur Dadar</label><br>
<strong>Total Bayar: Rp. <input id="total" type="text"></strong>
`

📸 Screenshot perhitungan otomatis total harga

---

✅ Tugas Tambahan: Validasi Form

`html
<script>
  function validateForm() {
    var x = document.forms["myForm"]["nama"].value;
    if (x == "") {
      alert("Nama harus diisi");
      return false;
    }
  }
</script>
<form name="myForm" onsubmit="return validateForm()">
  Nama: <input type="text" name="nama">
  <input type="submit" value="Submit">
</form>
`

📸 Screenshot validasi form
