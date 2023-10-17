// rotating words
const words = ["the external form of something", "a geometric figure", "a definite or orderly arrangement","one's body, physique, silhouette", "the specified condition or state of something","the act of making","the correct or original form or contours of something","a specific form or guise assumed by someone or something","making (something) fit the form of something else.","developing in a particular way; progressing","in the phrase, 'way, shape, or form,'","a person or thing that is difficult to see and identify clearly","a specific form or guise assumed by someone or something"];
const wordElement = document.getElementById("word");

let currentIndex = 0;

function rotateWords() {
    wordElement.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
}

setInterval(rotateWords, 1400);

// revealed content
function scrollToDropdownContent() {
    const dropdownContent = document.querySelector(".slip");

    if (dropdownContent) {

        const scrollPosition = dropdownContent.offsetTop + (dropdownContent.clientHeight / 2)

        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
}

const touch2Checkbox = document.getElementById("touch2");

if (touch2Checkbox) {
    touch2Checkbox.addEventListener("change", function() {
        
            scrollToDropdownContent();
    });
}

const images = document.querySelectorAll('.tri-container .tri');
let imageIndex = 0;
const imageSwitchDelay = 500;

function switchImage() {
    images[imageIndex].style.display = 'none';
    imageIndex = (imageIndex + 1) % images.length;
    images[imageIndex].style.display = 'block';

    setTimeout(switchImage, imageSwitchDelay);
}

switchImage();

// typesetting definitions: 1
document.addEventListener("DOMContentLoaded", function() {
    var words = ["designing text layouts.", "creating typefaces or fonts.","working/re-working layouts for legibility.","arranging type."];
    var currentIndex = 0;

    function fns() {
        var elem = document.getElementById("btn");
        elem.innerHTML = words[currentIndex];

        currentIndex = (currentIndex + 1) % words.length;
    }

    var btn = document.getElementById("btn");
    btn.addEventListener("click", fns);
});

function fns2() {
    var elem = document.getElementById("btn2");
    elem.innerHTML = words[currentIndex];

    currentIndex = (currentIndex + 1) % words.length;
}

// typesetting definitions: 2
document.addEventListener("DOMContentLoaded", function() {
    var words = ["the gutenberg press","manual typing/sterotyping", "hot metal typesetting","linotype","phototypesetting","the original chinese letterpress"];
    var currentIndex = 0;

    function fns2(){
        var elem = document.getElementById("btn2");
        elem.innerHTML = words[currentIndex];

        currentIndex = (currentIndex + 1) % words.length;
    }

    var btn = document.getElementById("btn2");
    btn.addEventListener("click", fns2);
});

// typesetting definitions: 3
document.addEventListener("DOMContentLoaded", function() {
    var words = ["adobe softwares,","figma,","microsoft word,","google docs,","typewriters,","touchscreen keyboards,", "word-processors,"];
    var currentIndex = 0;

    function fns3(){
        var elem = document.getElementById("btn3");
        elem.innerHTML = words[currentIndex];

        currentIndex = (currentIndex + 1) % words.length;
    }

    var btn = document.getElementById("btn3");
    btn.addEventListener("click", fns3);
});


