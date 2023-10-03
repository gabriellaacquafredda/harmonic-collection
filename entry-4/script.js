const words = ["the external form of something", "a geometric figure", "a definite or orderly arrangement","one's body, physique, silhouette", "the specified condition or state of something","the act of making","the correct or original form or contours of something","a specific form or guise assumed by someone or something","making (something) fit the form of something else.","developing in a particular way; progressing","in the phrase, 'way, shape, or form,'","a person or thing that is difficult to see and identify clearly","a specific form or guise assumed by someone or something"];
const wordElement = document.getElementById("word");

let currentIndex = 0;

function rotateWords() {
    wordElement.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
}

setInterval(rotateWords, 1800);

//for revealed-content...trying to have screen auto-scroll.
function scrollToDropdownContent() {
    const dropdownContent = document.querySelector(".slip");

    if (dropdownContent) {

        const scrollPosition = dropdownContent.offsetTop + dropdownContent.clientHeight;

        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
}

const touch2Checkbox = document.getElementById("touch2");

if (touch2Checkbox) {
    touch2Checkbox.addEventListener("change", function() {
        if (this.checked) {
            scrollToDropdownContent();
        }
    });
}

const images = document.querySelectorAll('.tri-container .tri');
let imageIndex = 0;
const imageSwitchDelay = 200;

function switchImage() {
    images[imageIndex].style.display = 'none';
    imageIndex = (imageIndex + 1) % images.length;
    images[imageIndex].style.display = 'block';

    setTimeout(switchImage, imageSwitchDelay);
}

switchImage();