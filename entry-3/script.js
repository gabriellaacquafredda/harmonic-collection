// slides
var slidePosition = 1;
showSlides(slidePosition);
function plusSlides(n) {
  showSlides((slidePosition += n));
}
function currentSlide(n) {
  showSlides((slidePosition = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slidePosition - 1].style.display = "block";
}
showSlides(slidePosition);

const forwardButton = document.getElementById('forward');
const slides = document.querySelectorAll('.Containers'); 

let currentSlideIndex = 0;

function isLastSlide() {
  return currentSlideIndex === slides.length - 1;
}

function updateForwardButtonVisibility() {
  if (isLastSlide()) {
    forwardButton.style.display = 'none'; 
  } else {
    forwardButton.style.display = 'block'; 
  }
}

// navigation
function nextSlide() {
  if (!isLastSlide()) {
    currentSlideIndex++;
    // Code to display the next slide (e.g., using CSS transitions)
    // ...
    updateForwardButtonVisibility();
  }
}

forwardButton.addEventListener('click', nextSlide);

updateForwardButtonVisibility();

