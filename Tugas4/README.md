# Praktikum 4: css layout

---

### 1. Membuat Box Element
File: [`lab4_box.html`](https://github.com/Syamil-playground/TugasSyamil-InformatikaProject/blob/50501cd1be133e468397fded6f69714ac373fbed/Tugas4/lab4_box.html)+[`lab4_style.css`](

- Membuat tiga div dengan warna berbeda.
- Menggunakan properti `float` dan `clear` untuk mengatur posisi elemen.

#### `html`
```html
<div class="div1">Div 1</div>
<div class="div2">Div 2</div>
<div class="div3">Div 3</div>
<div class="div4">Div 4</div>
```
#### `css`
```css
div {
  float: left;
  padding: 10px;
}
.div1 { background: red; }
.div2 { background: yellow; }
.div3 { background: green; }
.div4 {
  background-color: blue;
  clear: left;
  float: none;
}
```

<img width="476" height="276" alt="image" src="https://github.com/user-attachments/assets/cab23b79-8265-4156-a241-d2cddb8a4415" />


---

### 2. Membuat Layout Sederhana
File: [`home.html`]()+[`homestyle.css`]()

• 	Menggunakan elemen semantik: `<header>` ,`<nav>` ,`<section>` ,`<aside>` , `<footer>`

• 	Menambahkan navigasi, hero panel, main content, sidebar, dan footer.

#### `html` 
```html
  <div id="container">
    <header>
      <h1>Layout Sederhana</h1>
    </header>

    <nav>
      <a href="home.html" class="active">Home</a>
      <a href="artikel.html">Artikel</a>
      <a href="about.html">About</a>
      <a href="kontak.html">Kontak</a>
    </nav>

    <section id="hero">
      <h1>Hello World!</h1>
      <p>Selamat datang di website sederhana kami.</p>
      <a href="#" class="btn">Learn more »</a>
    </section>

    <section id="wrapper">
      <section id="main">
        <p>Ini adalah konten utama.</p>
      </section>
      <aside id="sidebar">
        <p>Ini adalah sidebar.</p>
      </aside>
    </section>

    <footer>
      <p>&copy; 2025 - Universitas Pelita Bangsa</p>
    </footer>
  </div>
```

#### `css`
```css
/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  color: #333;
  background-color: #f9f9f9;
}

#container {
  width: 980px;
  margin: 0 auto;
  box-shadow: 0 0 1em #ccc;
}

/* Header */
header {
  background-color: #dff0d8;
  padding: 20px;
}
header h1 {
  color: #a85252;
}

nav {
  background-color: #1f5faa;
}
nav a {
  padding: 15px 30px;
  display: inline-block;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}
nav a.active,
nav a:hover {
  background-color: #2b83ea;
}
/* Hero Section */
#hero {
  background-color: #e4e4e5;
  padding: 50px 20px;
  margin-bottom: 20px;
}
#hero h1 {
  font-size: 35px;
  margin-bottom: 20px;
}
#hero p {
  font-size: 16px;
  margin-bottom: 10px;
}
.btn {
  background-color: #337ab7;
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 4px;
}


/* Main Content */
#wrapper {
  margin: 0;
}
#main {
  float: left;
  width: 640px;
  padding: 20px;
}
#sidebar {
  float: left;
  width: 260px;
  padding: 20px;
}

/* Footer */
footer {
  color: #a85252;
  background-color: #f7ecb5;
  text-align: center;
  padding: 15px;
  clear: both;
}
```

<img width="1044" height="625" alt="image" src="https://github.com/user-attachments/assets/f064a24b-14c7-4322-b269-e44f54455ad0" />




---

### 3. Membuat Kontak & About layout

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
File: [`lab3_tabel.html`](https://github.com/Syamil-playground/TugasSyamil-InformatikaProject/blob/4487577466c9714716ad6c74ce7d6b6572966fe7/Tugas3/Lab3Web/lab3_tabel.html)

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
File: [`lab3_form.html`](https://github.com/Syamil-playground/TugasSyamil-InformatikaProject/blob/7f542f3fe6a7de08167e15a9d1ee9158a457dd38/Tugas3/Lab3Web/lab3_form.html)

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
File:[`style.css`](https://github.com/Syamil-playground/TugasSyamil-InformatikaProject/blob/de1feaffc3427d41a6e442db0757ffc39632a87d/Tugas3/Lab3Web/style.css)
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


