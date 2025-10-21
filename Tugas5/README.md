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

## 3. Menulis ke Dokumen

```html
<script>
  document.write("Selamat mencoba JavaScript<br>");
  document.write("Semoga sukses!");
</script>
```
![Screenshot_20251020-210728](https://github.com/user-attachments/assets/e39e0572-412b-481d-b351-524a88719574)


---

## 4. Prompt Input

```html
<script>
  var nama = prompt("Siapa nama anda?", "Masukkan nama anda");
  document.write("Hai, " + nama);
</script>
```
![Screenshot_20251020-210929](https://github.com/user-attachments/assets/438bb091-8ca3-4f95-a147-593b5fb6960c)
![Screenshot_20251020-210946](https://github.com/user-attachments/assets/10c6ebdf-f30a-412e-9380-8df5be82768d)


---

## 5. Fungsi dan Pemanggilan

```html
<script>
  function pesan() {
    alert("Memanggil JavaScript lewat body onload");
  }
</script>
<body onload="pesan()">
</body>
```

![Screenshot_20251020-211446](https://github.com/user-attachments/assets/04f1f78b-9558-447f-8328-ea773ab8d856)


---

## 6. Operasi Aritmatika

```html
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
```

![Screenshot_20251020-212005](https://github.com/user-attachments/assets/c67b7c40-a12d-49f6-9acb-477e6b3ff72c)
![Screenshot_20251020-212005](https://github.com/user-attachments/assets/f95ba776-34ff-43c9-850b-6721b0e7ccc3)


---

## 7. Seleksi Kondisi (if..else)

```html
<script>
  var nilai = prompt("Nilai (0-100): ", 0);
  var hasil = (nilai >= 60) ? "Lulus" : "Tidak Lulus";
  document.write("Hasil: " + hasil);
</script>
```
![Screenshot_20251020-212328](https://github.com/user-attachments/assets/d3457727-896c-44fe-ae17-77844579be45)
![Screenshot_20251020-212335](https://github.com/user-attachments/assets/d84e66c6-faec-44b0-9b18-9d0d623ffdbb)
![Screenshot_20251020-212344](https://github.com/user-attachments/assets/22fef0d4-ae69-4faa-aa9b-b68ba01755a0)
![Screenshot_20251020-212349](https://github.com/user-attachments/assets/1e48e381-db35-4539-a06d-01c19e9f6142)



---

## 8. Seleksi Kondisi (switch)

```html
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
```


![Screenshot_20251021-053957](https://github.com/user-attachments/assets/eb4d72c8-f950-4a6a-bef0-40262ece3712)![Screenshot_20251021-054005](https://github.com/user-attachments/assets/7fedb938-94c5-4d57-8e9b-7a448bbabebe)
![Screenshot_20251021-054008](https://github.com/user-attachments/assets/5d57394f-b4b2-4da5-aef8-42d3a541a90e)
---

## 9. Form Input: Genap/Ganjil

```html
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
```
![Screenshot_20251021-054216](https://github.com/user-attachments/assets/c2d64349-0258-4166-920b-0467da3c6b8a)
![Screenshot_20251021-054224](https://github.com/user-attachments/assets/08830cd3-7354-4b4e-b47d-c72d154ed91c)


---

## 10. Form Button: Ubah Warna

```html
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
```
![Screenshot_20251021-054330](https://github.com/user-attachments/assets/5d47f7cf-0e2d-49ad-a2b1-85e47593e9f9)
![Screenshot_20251021-054347](https://github.com/user-attachments/assets/024748ce-b4ce-424d-b11e-fcf881f725ea)
![Screenshot_20251021-054350](https://github.com/user-attachments/assets/ac4b44df-1256-44a7-a4a3-d668eb2e25bb)
![Screenshot_20251021-054342](https://github.com/user-attachments/assets/8274e02f-8833-47b1-9afa-2623fe5bfb9d)
![Screenshot_20251021-054344](https://github.com/user-attachments/assets/d8976ac0-ab08-4f5e-9395-02f6832e1960)


---

## 11. HTML DOM: CheckBox Total Harga

```html
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
```
![Screenshot_20251021-054422](https://github.com/user-attachments/assets/a16676d9-2087-494c-94ad-e781141a4251)
![Screenshot_20251021-054425](https://github.com/user-attachments/assets/dac5f165-b006-4590-b795-216694f11a1e)
![Screenshot_20251021-054428](https://github.com/user-attachments/assets/b056fbb1-914c-4c7b-842b-8b8db69fdb64)

---

✅ Tugas Tambahan: Validasi Form

```html
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
```
![Screenshot_20251021-055015](https://github.com/user-attachments/assets/cad454fb-d0fb-4a3b-b4b6-b15145a6929e)
![Screenshot_20251021-055021](https://github.com/user-attachments/assets/197d4065-b042-4ae8-885a-ba7371c7f604)


