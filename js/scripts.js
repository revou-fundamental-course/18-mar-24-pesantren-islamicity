// Tabs
function openLink(evt, linkName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("myLink");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();


// Array berisi URL gambar-gambar banner
var images = [
    "https://www.w3schools.com/w3images/london2.jpg",
    "https://www.w3schools.com/w3images/newyork2.jpg",
    "https://www.w3schools.com/w3images/sanfran.jpg",
    // Tambahkan URL gambar-gambar lainnya sesuai kebutuhan
];

var index = 0;
var intervalTime = 3000; // Waktu interval dalam milidetik (misalnya, 3000 untuk 3 detik)

function changeBanner() {
    // Mengubah gambar banner
    document.querySelector(".banner-image").src = images[index];

    // Menambahkan 1 ke indeks untuk memilih gambar berikutnya
    index++;

    // Kembali ke gambar pertama jika sudah mencapai akhir array
    if (index === images.length) {
        index = 0;
    }
}

// Memanggil fungsi changeBanner secara otomatis dengan interval waktu tertentu
setInterval(changeBanner, intervalTime);



// Persiapan  
  
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = -1; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}



// FORM VALIDATION 

function validateForm() {
  var name = document.getElementById("name").value.trim(); // Trim leading/trailing whitespace
  var phone = document.getElementById("phone").value;
  var dob = document.getElementById("dob").value;
  var jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked');
  var email = document.getElementById("email").value;
  var pesan = document.getElementById("pesan").value.trim();

  var nameError = document.getElementById("nameError");
  var phoneError = document.getElementById("phoneError");
  var dobError = document.getElementById("dobError");
  var jenisKelaminError = document.getElementById("jenisKelaminError");
  var emailError = document.getElementById("emailError");
  var pesanError = document.getElementById("pesanError");


// Validasi nama
if (name === "") {
  nameError.innerHTML = "Nama harus diisi";
  return false;
} else {
  nameError.innerHTML = "";
}

// Validasi telepon
var phonePattern = /^\d{10,12}$/; // Regex untuk 10-12 digit
if (!phone.match(phonePattern)) {
  phoneError.innerHTML = "Format telepon tidak valid (10-12 digit)";
  return false;
} else {
  phoneError.innerHTML = "";
}

// Validasi tanggal lahir
if (dob === "") {
  dobError.innerHTML = "Tanggal lahir harus diisi";
  return false;
} else {
  dobError.innerHTML = "";
}

  // Validasi jenis kelamin
  if (!jenisKelamin) {
    jenisKelaminError.innerHTML = "Pilih jenis kelamin";
    return false;
  } else {
    jenisKelaminError.innerHTML = "";
  }

// Validasi email
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!email.match(emailPattern)) {
  emailError.innerHTML = "Format email tidak valid";
  return false;
} else {
  emailError.innerHTML = "";
}

// Validasi pesan
if (pesan === "") {
  pesanError.innerHTML = "Pesan harus diisi";
  return false;
} else {
  pesanError.innerHTML = "";
}

// Tampilkan pesan sukses jika semua validasi berhasil
if (name && phone && dob && email && pesan) {
  alert("Formulir berhasil terkirim!");
}

return true;
}
