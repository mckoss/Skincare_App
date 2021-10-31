var homeIndex = 1;
homeSlides(homeIndex);

// Next/previous controls
function exfoliantSlides(n) {
  homeSlides(homeIndex += n);
}

// Thumbnail image controls
function nowSlide(n) {
  homeSlides(homeIndex = n);
}

function homeSlides(n) {
  var i;
  var homes = document.getElementsByClassName("cat");
  var dots = document.getElementsByClassName("dot");
  if (n > homes.length) {homeIndex = 1}
  if (n < 1) {homeIndex = homes.length}
  for (i = 0; i < homes.length; i++) {
      homes[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  homes[homeIndex-1].style.display = "block";
  dots[homeIndex-1].className += " active";
} 

var showIndex = 1;
showSlides(showIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bird");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 