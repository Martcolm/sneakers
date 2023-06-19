let data = 0;
document.getElementById("counting").innerText = data;

function increment() {
  data += 1;
  document.getElementById("counting").innerText = data;
}
function decrement() {
  if (data === 0) {
    data = 0;
    alert("You can't purchase any item of zero quantity");
  } else {
    data--;
  }
  document.getElementById("counting").innerText = data;
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.querySelector(".wrapper").style.opacity = "0.3";
  document.getElementById("cart").style.opacity = "0.3";
  document.getElementById("i").style.opacity = "0.3";
  document.querySelector(".avt").style.opacity = "0.3";
  document.querySelector(".quantity").style.opacity = "0.3";
  document.querySelector(".mySlides").style.opacity = "0.3";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.querySelector(".wrapper").style.opacity = "1";
  document.getElementById("cart").style.opacity = "1";
  document.getElementById("i").style.opacity = "1";
  document.querySelector(".avt").style.opacity = "1";
  document.querySelector(".quantity").style.opacity = "1";
}
function cart() {
  document.querySelector(".avt").style.border = "3px solid orange";
  document.querySelector(".avt").style.borderRadius = "50%";
}
function openModal() {
  document.getElementById("dark").style.display = "unset";
}

function closeModal() {
  document.getElementById("dark").style.display = "none";
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
