document.addEventListener('DOMContentLoaded', () => {

  /* =============================
     LOGIN HANDLER
  ============================= */
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Gunakan dataPengguna dari data.js
if (typeof dataPengguna === "undefined") {
  alert("❌ Data pengguna tidak ditemukan! Pastikan data.js sudah di-load sebelum app.js");
  return;
}

const user = dataPengguna.find(
  u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
);

      if (user) {
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('nama', user.nama);
        sessionStorage.setItem('role', user.role);
        sessionStorage.setItem('email', user.email);

        alert(`Selamat datang, ${user.nama}!`);
        window.location.href = 'dashboard.html';
      } 
      else {
        alert('Email atau password salah!');
      }
    });
  }
/* =============================
   PASSWORD VISIBILITY TOGGLE
============================= */
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePassword && passwordInput) {
  togglePassword.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    togglePassword.classList.toggle('fa-eye-slash');
  });
}
  /* =============================
     CEK LOGIN STATUS
  ============================= */
  function checkLogin() {
    const halamanDilindungi = ['dashboard.html', 'stok.html', 'tracking.html', 'checkout.html'];
    if (halamanDilindungi.some(p => window.location.pathname.includes(p))) {
      if (!sessionStorage.getItem('loggedIn')) {
        window.location.href = 'index.html';
      }
    }
  }
  checkLogin();

  /* =============================
     LOGOUT HANDLER
  ============================= */
  const logoutBtn = document.getElementById('logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function (e) {
      e.preventDefault();
      sessionStorage.clear();
      window.location.href = 'index.html';
    });
  }
/* =============================
   MODAL HANDLER: LUPA PASSWORD & DAFTAR
============================= */
const modal = document.createElement('div');
modal.id = 'modal';
/* =============================
   MODAL HANYA UNTUK LOGIN PAGE
============================= */
if (window.location.pathname.includes("login.html") || window.location.pathname.endsWith("index.html")) {
  modal.className = 'modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="card">
      <div id="modal-content"></div>
      <div style="text-align:right;margin-top:10px">
        <button id="closeModal" class="btn btn-ghost">Tutup</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalContent = document.getElementById('modal-content');
  const btnShowForgot = document.getElementById('btnShowForgot');
  const btnShowRegister = document.getElementById('btnShowRegister');

  /* ====== Lupa Password ====== */
  if (btnShowForgot) {
    btnShowForgot.addEventListener('click', () => {
      modalContent.innerHTML = `
        <h3>Lupa Password</h3>
        <p class="small">Masukkan email untuk reset (demo)</p>
        <input id="fp-email" type="email" placeholder="email@domain.com">
        <div style="margin-top:10px">
          <button id="fp-send" class="btn btn-primary">Kirim</button>
        </div>
      `;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');

      document.getElementById('fp-send').addEventListener('click', () => {
        alert('Link reset password telah dikirim ke email Anda (demo).');
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* ====== Daftar ====== */
  if (btnShowRegister) {
    btnShowRegister.addEventListener('click', () => {
      modalContent.innerHTML = `
        <h3>Daftar Akun Baru</h3>
        <div class="form-row"><label>Nama</label><input id="reg-name" type="text" required></div>
        <div class="form-row"><label>Email</label><input id="reg-email" type="email" required></div>
        <div class="form-row" style="position: relative;">
          <label>Password</label>
          <input id="reg-pass" type="password" required>
          <i class="fa fa-eye" id="togglePasswordReg" title="Lihat Password"></i>
        </div>
        <div style="text-align:right"><button id="reg-save" class="btn btn-primary">Daftar</button></div>
      `;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');

      // tombol lihat password (mata)
      const togglePasswordReg = document.getElementById('togglePasswordReg');
      const regPassInput = document.getElementById('reg-pass');
      if (togglePasswordReg && regPassInput) {
        togglePasswordReg.addEventListener('click', () => {
          const isPassword = regPassInput.getAttribute('type') === 'password';
          regPassInput.setAttribute('type', isPassword ? 'text' : 'password');
          togglePasswordReg.classList.toggle('fa-eye-slash');
        });
      }

      document.getElementById('reg-save').addEventListener('click', () => {
        alert('Pendaftaran berhasil (demo). Silakan login.');
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* ====== Tutup Modal ====== */
  const closeModalBtn = document.getElementById('closeModal');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    });
  }
}
// ====== Greeting Berdasarkan Waktu ======
    // Greeting (jika elemen memang ada di halaman)
const greetingEl = document.getElementById("greeting");
if (greetingEl) {
  const now = new Date();
  const hour = now.getHours();
  let greetingText = "";

  if (hour >= 5 && hour < 11) {
      greetingText = "Selamat Pagi ";
  } else if (hour >= 11 && hour < 15) {
      greetingText = "Selamat Siang ";
  } else if (hour >= 15 && hour < 18) {
      greetingText = "Selamat Sore ";
  } else {
      greetingText = "Selamat Malam ";
  }

  greetingEl.innerText = greetingText + (sessionStorage.getItem('nama') || '');
}


  /* =============================
     DATA HANDLING: KATALOG BUKU
  ============================= */
  if (document.getElementById('katalogBuku')) {
    loadKatalogBuku();
  }

  function loadKatalogBuku() {
    const katalogContainer = document.getElementById('katalogBuku');
    katalogContainer.innerHTML = '';

    dataKatalogBuku.forEach(buku => {
      const card = `
        <div class="book-card">
          <img src="${buku.cover}" alt="${buku.namaBarang}"
               onerror="this.src='https://via.placeholder.com/250x200?text=${encodeURIComponent(buku.namaBarang)}'">
          <h3>${buku.namaBarang}</h3>
          <p><strong>Kode:</strong> ${buku.kodeBarang}</p>
          <p><strong>Jenis:</strong> ${buku.jenisBarang}</p>
          <p><strong>Edisi:</strong> ${buku.edisi}</p>
          <p><strong>Stok:</strong> ${buku.stok}</p>
          <p><strong>Harga:</strong> ${buku.harga}</p>
        </div>
      `;
      katalogContainer.innerHTML += card;
    });
  }
/* =============================
   LOAD SELECT BUKU UNTUK CHECKOUT
============================= */
function loadBookSelect() {
  const bookSelect = document.getElementById("bookSelect");
  if (!bookSelect) return; // kalau halaman bukan checkout, keluar

  bookSelect.innerHTML = `<option value="">-- Pilih Buku --</option>`;

  dataKatalogBuku.forEach(buku => {
    if (buku.stok > 0) {
      const option = document.createElement("option");
      option.value = buku.kodeBarang;
      option.textContent = `${buku.namaBarang} (${buku.kodeBarang}) - ${buku.harga}`;
      bookSelect.appendChild(option);
    }
  });
}

// Jalankan saat halaman checkout dibuka
if (document.getElementById("bookSelect")) {
  loadBookSelect();
}

  /* =============================
   CHECKOUT PEMESANAN BUKU
============================= */
const checkoutForm = document.getElementById("checkoutForm");
const riwayatTabel = document.getElementById("riwayatTransaksi");

if (checkoutForm) {
  checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const kodeBuku = document.getElementById("bookSelect").value;
    const borrowerName = document.getElementById("borrowerName").value.trim();
    const borrowDate = document.getElementById("borrowDate").value;

    // Validasi input
    if (!kodeBuku || !borrowerName || !borrowDate) {
      alert("⚠️ Mohon isi semua data pemesanan!");
      return;
    }

    const buku = dataKatalogBuku.find((b) => b.kodeBarang === kodeBuku);

    if (!buku) {
      alert("❌ Buku tidak ditemukan!");
      return;
    }

    if (buku.stok <= 0) {
      alert("❌ Stok buku habis!");
      return;
    }

    // Kurangi stok
    buku.stok--;

    // Buat objek transaksi baru
    const transaksiBaru = {
      id: Date.now(),
      kodeBuku: buku.kodeBarang,
      namaBuku: buku.namaBarang,
      pemesan: borrowerName,
      tanggal: borrowDate,
      harga: buku.harga,
    };

    // Simpan ke array global (jika belum ada variabelnya, buat baru)
    if (typeof dataTransaksi === "undefined") {
      window.dataTransaksi = [];
    }
    dataTransaksi.push(transaksiBaru);

    // Tambahkan baris baru ke tabel riwayat
    if (riwayatTabel && riwayatTabel.querySelector("tbody")) {
      const tbody = riwayatTabel.querySelector("tbody");
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${transaksiBaru.kodeBuku}</td>
        <td>${transaksiBaru.namaBuku}</td>
        <td>${transaksiBaru.pemesan}</td>
        <td>${transaksiBaru.tanggal}</td>
        <td>${transaksiBaru.harga}</td>
      `;
      tbody.appendChild(row);
    }

    // Reset form & refresh dropdown
    checkoutForm.reset();
    if (typeof loadBookSelect === "function") {
      loadBookSelect();
    }

    // Pesan sukses
    alert(
      `✅ Checkout berhasil!\nBuku: "${buku.namaBarang}"\nPemesan: ${borrowerName}\nTanggal: ${borrowDate}`
    );
  });
}



/* =============================
   TAMBAH BUKU KE STOK (PERBAIKAN)
============================= */
const addBookForm = document.getElementById("addBookForm");
if (addBookForm) {
  addBookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const kode = document.getElementById("kodeBuku").value.trim();
  const nama = document.getElementById("namaBuku").value.trim();
  const harga = parseInt(document.getElementById("hargaBuku").value);
  const stok = parseInt(document.getElementById("stokBuku").value);
  const edisi = document.getElementById("edisiBuku").value.trim() || "-";
  const jenis = document.getElementById("jenisBuku").value.trim() || "-";
  const gambarInput = document.getElementById("gambarBuku");

  if (!kode || !nama || isNaN(harga) || isNaN(stok)) {
    alert("⚠️ Mohon isi semua field wajib (kode, nama, harga, stok)!");
    return;
  }

  let gambarURL = "https://via.placeholder.com/250x200?text=Buku+Baru";
  if (gambarInput.files && gambarInput.files[0]) {
    const file = gambarInput.files[0];
    gambarURL = URL.createObjectURL(file);
  }

  const bukuBaru = {
    kodeBarang: kode,
    namaBarang: nama,
    harga: "Rp " + harga.toLocaleString(),
    edisi: edisi,
    jenisBarang: jenis,
    stok: stok,
    cover: gambarURL
  };

  dataKatalogBuku.push(bukuBaru);

  if (typeof loadKatalogBuku === "function") {
    loadKatalogBuku();
  }

  addBookForm.reset();
  alert("✅ Buku baru berhasil ditambahkan ke stok!");
});
}
}); // ⬅️ TUTUP addBookForm & DOMContentLoaded BERSAMA-SAMA

/* =============================
   TRACKING PENGIRIMAN (FINAL)
============================= */
document.addEventListener("DOMContentLoaded", () => {
  const trackingForm = document.getElementById("trackingForm");
  const trackingResult = document.getElementById("trackingResult");

  if (trackingForm && trackingResult) {
    trackingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nomorDO = document.getElementById("searchDO").value.trim().toUpperCase();

      if (typeof dataTracking === "undefined") {
        trackingResult.innerHTML = `<p style="color:red;">❌ Data tracking tidak ditemukan di data.js</p>`;
        return;
      }

      const hasil = Object.values(dataTracking).find(
        item => item.nomorDO.toUpperCase() === nomorDO
      );

      if (!hasil) {
        trackingResult.innerHTML = `
          <div class="tracking-card not-found">
            <p>❌ Nomor DO <strong>${nomorDO}</strong> tidak ditemukan.</p>
          </div>
        `;
        return;
      }

      const progressPercent =
        hasil.status.toLowerCase().includes("dikirim") ? 33 :
        hasil.status.toLowerCase().includes("perjalanan") ? 66 :
        100;

      trackingResult.innerHTML = `
        <div class="tracking-card">
          <h3>📦 Nomor DO: ${hasil.nomorDO}</h3>
          <p><strong>Nama:</strong> ${hasil.nama}</p>
          <p><strong>Ekspedisi:</strong> ${hasil.ekspedisi}</p>
          <p><strong>Tanggal Kirim:</strong> ${hasil.tanggalKirim}</p>
          <p><strong>Paket:</strong> ${hasil.paket}</p>
          <p><strong>Total:</strong> ${hasil.total}</p>

          <div class="progress-wrapper">
            <div class="progress-bar" style="width: ${progressPercent}%"></div>
          </div>

          <p class="status-label"><strong>Status:</strong> ${hasil.status}</p>

          <h4>Riwayat Perjalanan:</h4>
          <ul class="timeline">
            ${hasil.perjalanan.map(p => `<li>${p.waktu} — ${p.keterangan}</li>`).join('')}
          </ul>
        </div>
      `;
    });
  }
});
