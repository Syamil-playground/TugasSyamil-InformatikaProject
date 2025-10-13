# Praktikum 4: css layout

---

### 1. Membuat Box Element
File: [`lab4_box.html`](https://github.com/Syamil-playground/TugasSyamil-InformatikaProject/blob/2fa90fe2a5db06671153c07d77f55c3cdb56381d/Tugas4/lab4practice/lab4_box.html)+[`style.css`](https://github.com/Syamil-playground/TugasSyamil-InformatikaProject/blob/0bb02d95cd16a27326b924fb5442476a11c88093/Tugas4/lab4practice/style.css)

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
File: [`home.html`](https://github.com/Syamil-playground/TugasSyamil-InformatikaProject/blob/0cbdf8ec0098ec935b4a84bea759e969a84509ff/Tugas4/layout%20sederhana/home.html)+[`style.css`](https://github.com/Syamil-playground/TugasSyamil-InformatikaProject/blob/521f8091ca84a724ce9f6372af558383ebdae107/Tugas4/layout%20sederhana/style.css)

-	Menggunakan elemen semantik: `<header>` ,`<nav>` ,`<section>` ,`<aside>` , `<footer>`
- Menambahkan navigasi, hero panel, main content, sidebar, dan footer.

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
  background-color: rgb(143, 175, 175);
  float: left;
  width: 640px;
  padding: 20px;
}
#sidebar {
  float: left;
  width: 260px;
  padding: 20px;
}

/* Widget Box */
.widget-box {
  border: 1px solid #eee;
  margin-bottom: 20px;
}
.widget-box .title {
  background-color: #428bca;
  color: #fff;
  padding: 10px 16px;
}
.widget-box ul {
  list-style-type: none;
}
.widget-box li {
  border-bottom: 1px solid #eee;
}
.widget-box li a {
  padding: 10px 16px;
  color: #333;
  display: block;
  text-decoration: none;
}
.widget-box li:hover a {
  background-color: #eee;
}
.widget-box p {
  padding: 15px;
  line-height: 25px;
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

### 3. Membuat about & kontak layout
File: [`about.html`](https://github.com/Syamil-playground/TugasSyamil-InformatikaProject/blob/ceec9e6cfebf9164efbc99ce5e2b2ec2a857b561/Tugas4/layout%20sederhana/about.html)+[`kontak.html`](https://github.com/Syamil-playground/TugasSyamil-InformatikaProject/blob/ceec9e6cfebf9164efbc99ce5e2b2ec2a857b561/Tugas4/layout%20sederhana/kontak.html)

- Berisi deskripsi diri dan portofolio.

- Berisi form input: nama, email, pesan.

- Menggunakan layout yang sama seperti `home.html`.

- Menggunakan layout yang sama dan styling form.


#### `about.html`
```html
<body>
  <div id="container">
    <header>
      <h1>About Me</h1>
    </header>

    <nav>
      <a href="home.html">Home</a>
      <a href="artikel.html">Artikel</a>
      <a href="about.html" class="active">About</a>
      <a href="kontak.html">Kontak</a>
    </nav>

    <section id="hero">
      <h1>Profil dan Portofolio</h1>
      <p>Saya adalah mahasiswa Teknik Informatika yang memiliki minat dalam pengembangan web dan desain antarmuka pengguna.</p>
    </section>

    <section id="wrapper">
      <section id="main">
        <article class="entry">
          <h2>Deskripsi Diri</h2>
          <p>Saya memiliki pengalaman dalam HTML, CSS, dan JavaScript. Saya juga aktif dalam kegiatan kampus dan komunitas teknologi.</p>
        </article>

        <article class="entry">
          <h2>Portofolio</h2>
          <ul>
            <li>Website E-learning</li>
            <li>Aplikasi To-do List</li>
            <li>Desain UI untuk aplikasi mobile</li>
          </ul>
        </article>
      </section>

      <aside id="sidebar">
        <div class="widget-box">
          <h3 class="title">Skills</h3>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>UI/UX Design</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </aside>
    </section>

    <footer>
      <p>&copy; 2025 - Universitas Pelita Bangsa</p>
    </footer>
  </div>
```
#### `kontak.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kontak</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="container">
    <header>
      <h1>Kontak</h1>
    </header>

    <nav>
      <a href="home.html">Home</a>
      <a href="artikel.html">Artikel</a>
      <a href="about.html">About</a>
      <a href="kontak.html" class="active">Kontak</a>
    </nav>

    <section id="hero">
      <h1>Hubungi Saya</h1>
      <p>Silakan isi formulir di bawah ini untuk mengirim pesan atau pertanyaan.</p>
    </section>

    <section id="wrapper">
      <section id="main">
        <form action="#" method="post">
          <fieldset>
            <legend>Form Kontak</legend>
            <p>
              <label for="nama">Nama</label><br />
              <input type="text" id="nama" name="nama" required />
            </p>
            <p>
              <label for="email">Email</label><br />
              <input type="email" id="email" name="email" required />
            </p>
            <p>
              <label for="pesan">Pesan</label><br />
              <textarea id="pesan" name="pesan" rows="5" required></textarea>
            </p>
            <p>
              <button type="submit">Kirim</button>
            </p>
          </fieldset>
        </form>
      </section>

      <aside id="sidebar">
        <div class="widget-box">
          <h3 class="title">Informasi Kontak</h3>
          <ul>
            <li>Email: syamil@example.com</li>
            <li>WhatsApp: 0812-3456-7890</li>
            <li>Instagram: @syamil.dev</li>
          </ul>
        </div>
      </aside>
    </section>

    <footer>
      <p>&copy; 2025 - Universitas Pelita Bangsa</p>
    </footer>
  </div>
</body>
</html>
```

<img width="1035" height="634" alt="image" src="https://github.com/user-attachments/assets/cefa90a5-f8ba-422b-b227-164f9c60d9d3" />
<img width="1062" height="642" alt="image" src="https://github.com/user-attachments/assets/76aa489a-b402-4ac2-a7ad-4f7bf8677073" />





