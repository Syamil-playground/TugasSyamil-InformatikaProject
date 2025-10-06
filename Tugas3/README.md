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

📸 *Screenshot tampilan Ordered List*

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

📸 *Screenshot tampilan Unordered List*

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

📸 *Screenshot tampilan Description List*

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

📸 *Screenshot tampilan Tabel*

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

📸 *Screenshot tampilan penggabungan sel*

---

### 6. Membuat Form
File: `lab3_form.html`

```html
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

📸 *Screenshot tampilan Form*

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

📸 *Screenshot tampilan Form dengan CSS*


