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

// Get references to the necessary elements IN
const forwardButton = document.getElementById('forward');
const slides = document.querySelectorAll('.Containers'); // Change this selector to match your slide elements

// Initialize a variable to keep track of the current slide index
let currentSlideIndex = 0;

// Function to check if the current slide is the last one
function isLastSlide() {
  return currentSlideIndex === slides.length - 1;
}

// Function to hide/show the forward button based on the current slide
function updateForwardButtonVisibility() {
  if (isLastSlide()) {
    forwardButton.style.display = 'none'; // Hide the button
  } else {
    forwardButton.style.display = 'block'; // Show the button
  }
}

// Function to navigate to the next slide
function nextSlide() {
  if (!isLastSlide()) {
    currentSlideIndex++;
    // Code to display the next slide (e.g., using CSS transitions)
    // ...
    updateForwardButtonVisibility();
  }
}

// Event listener for the forward button click
forwardButton.addEventListener('click', nextSlide);

// Initial visibility setup
updateForwardButtonVisibility();

