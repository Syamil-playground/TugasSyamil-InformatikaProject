# Praktikum 3: Membuat List, Table dan Form

## Deskripsi
Praktikum ini bertujuan untuk memahami dan mengimplementasikan elemen-elemen dasar HTML seperti List, Table, dan Form, serta menambahkan gaya menggunakan CSS.

## Struktur Folder
```
Lab3Web/
├── lab3_list.html
├── lab3_tabel.html
├── lab3_form.html
└── README.md
```

## Langkah Praktikum

### 1. Membuat Ordered List
File: `lab3_list.html`

```html
<section id="order-list">
  <h2>Ordered List</h2>
  <ol>
    <li>Pemrograman Web</li>
    <li>Sistem Informasi</li>
    <li>Basis Data 2</li>
  </ol>
</section>
```

<img width="306" height="199" alt="Screenshot 2025-10-06 204958" src="https://github.com/user-attachments/assets/c0dd8d35-7b61-4ef6-a88f-e31db54c1807" />


---

### 2. Membuat Unordered List

```html
<section id="unorder-list">
  <h2>Unordered List</h2>
  <ul type="square">
    <li>Jaringan Komputer</li>
    <li>Struktur Data</li>
    <li>Algoritma & Pemrograman</li>
  </ul>
</section>
```

<img width="342" height="282" alt="Screenshot 2025-10-06 205420" src="https://github.com/user-attachments/assets/9f14fba7-5b49-47a6-b51b-2325b4d938db" />


---

### 3. Membuat Description List

```html
<section id="description-list">
  <h2>Description List</h2>
  <dl>
    <dt>Fakultas Teknik</dt>
    <dd>Teknik Industri</dd>
    <dd>Teknik Informatika</dd>
    <dd>Teknik Lingkungan</dd>
    <dt>Fakultas Ekonomi dan Bisnis</dt>
    <dd>Akuntansi</dd>
    <dd>Manajemen</dd>
    <dd>Bisnis Digital</dd>
  </dl>
</section>
```

<img width="413" height="521" alt="Screenshot 2025-10-06 205426" src="https://github.com/user-attachments/assets/f114a5b4-140f-43c0-bc4b-6a1cd1f47974" />


---

### 4. Membuat Tabel
File: `lab3_tabel.html`

```html
<table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr>
      <th>No.</th>
      <th>Fakultas</th>
      <th>Program Studi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.</td>
      <td>Teknik</td>
      <td>Teknik Informatika</td>
    </tr>
    <tr>
      <td>2.</td>
      <td>Teknik</td>
      <td>Teknik Industri</td>
    </tr>
    <tr>
      <td>3.</td>
      <td>Teknik</td>
      <td>Teknik Lingkungan</td>
    </tr>
  </tbody>
</table>
```
<img width="256" height="137" alt="Screenshot 2025-10-06 210341" src="https://github.com/user-attachments/assets/ee2fa475-6978-4314-8be5-3445cbc8062d" />


---

### 5. Menggabungkan Sel Data

```html
<tr>
  <td rowspan="3">Teknik</td>
  <td>Teknik Informatika</td>
</tr>
<tr>
  <td>Teknik Industri</td>
</tr>
<tr>
  <td>Teknik Lingkungan</td>
</tr>
```

<img width="267" height="176" alt="Screenshot 2025-10-06 210634" src="https://github.com/user-attachments/assets/1a5d0b09-9697-4ada-a883-bfa3ddc74912" />


---

### 6. Membuat Form
File: `lab3_form.html`

```html
<head>
  <title>Form Data Pelanggan</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<form action="proses.php" method="post">
  <fieldset>
    <legend>Data Pelanggan</legend>
    <p>
      <label for="nama">Nama</label>
      <input type="text" id="nama" name="nama">
    </p>
    <p>
      <label for="alamat">Alamat</label>
      <textarea id="alamat" name="alamat" cols="20" rows="3"></textarea>
    </p>
    <p>
      <label>Jenis Kelamin</label>
      <input id="jk_l" type="radio" name="kelamin" value="L"><label for="jk_l">Laki-laki</label>
      <input id="jk_p" type="radio" name="kelamin" value="P"><label for="jk_p">Perempuan</label>
    </p>
    <p><input type="submit" value="Login"></p>
  </fieldset>
</form>
```

<img width="848" height="286" alt="Screenshot 2025-10-06 211954" src="https://github.com/user-attachments/assets/447ed312-df34-4fba-958e-bd7fdfd962f8" />


---

### 7. Menambahkan CSS pada Form

```html
<style>
form p > label {
  display: inline-block;
  width: 100px;
}
form input[type="text"], form textarea {
  border: 1px solid #197a43;
}
form input[type="submit"] {
  border: 1px solid #197a43;
  background-color: #197a43;
  color: #ffffff;
  font-weight: bold;
  padding: 5px 15px;
}
</style>
```

<img width="840" height="305" alt="Screenshot 2025-10-06 211710" src="https://github.com/user-attachments/assets/6637b640-1f80-40a7-a540-d185800d2d82" />


