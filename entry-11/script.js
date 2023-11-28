// header click (reveal)
document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header-click');
    var click1 = document.querySelector('.click-1');
    var revealContainer = document.querySelector('.reveal');
    var headerClicked = false;

    header.addEventListener('click', function moveHeaderUp() {
        var currentTranslate = window.getComputedStyle(header).transform.match(/matrix\(([^)]+)\)/);
        var translateY = currentTranslate ? parseFloat(currentTranslate[1].split(', ')[5]) : 0;

        header.style.transform = 'translateY(' + (translateY - 10) + 'vh)';
        header.removeEventListener('click', moveHeaderUp);

        if (!headerClicked) {
            click1.style.opacity = 1;
            click1.style.transform = 'translateY(' + (translateY - 10) + 'vh)';
            header.style.fontStyle = 'italic';
            headerClicked = true;

            setTimeout(startLineAnimation, 1000);

            revealContainer.classList.remove('reveal-hidden');

            revealContainer.style.opacity = 0;
            setTimeout(function() {
                revealContainer.style.opacity = 1;
                revealContainer.classList.add('smooth');
            }, 10);
        }
    });

    // drawing the line
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // centering line
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 1;

    let initialLineLength = 0;
    const maxLineLength = 900;

    const animationSpeed = 2.5;
    const animationDuration = 3000;

    // drawing
    function drawLine(length) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#000000';

        const startX = centerX - length / 2;
        const startY = centerY;
        const endX = centerX + length / 2;
        const endY = centerY;

        // ease-in-out
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }

    function easeOut(t) {
        return 1 - Math.pow(1 - t, 2);
    }

    function animateLine(startTime) {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;

        const progress = Math.min(1, elapsed / animationDuration);

        const easedProgress = easeOut(progress);

        initialLineLength = easedProgress * maxLineLength;

        drawLine(initialLineLength);

        if (elapsed < animationDuration) {
            requestAnimationFrame(() => animateLine(startTime));
        }
    }

    // start
    function startLineAnimation() {
        animateLine(Date.now());
    }
});

// unsuccessful p5 layouts...switching over to vanilla js

// revealed content
function scrollToDropdownContent() {
    const dropdownContent = document.querySelector(".slip");

    if (dropdownContent) {

        const scrollPosition = dropdownContent.offsetTop + (dropdownContent.clientHeight / 150)

        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        });
    }
}

const printPointCheckbox = document.getElementById("print-point");

if (printPointCheckbox) {
    printPointCheckbox.addEventListener("change", function() {

        scrollToDropdownContent();
    });
}

// images with oridomi library
var folded = new OriDomi('.paper', {
    vPanels: 5, // left/right
    hPanels: 3, // top/bottom
    speed: 500,
    shadingIntensity: 20,
    perspective: 800,
    maxAngle: 85,
    shading: 'soft'
});

folded.accordion(10, 'left');
touchStartCallback = noOp

// want to place text behind folded images...but z-index does not apply...need to troubleshoot

var folded = new OriDomi('.paper2', {
    vPanels: 5, // left/right
    hPanels: 3, // top/bottom
    speed: 500,
    shadingIntensity: 20,
    perspective: 800,
    maxAngle: 85,
    shading: 'soft'
});

folded.accordion(10, 'left');
touchStartCallback = noOp

var folded = new OriDomi('.paper3', {
    vPanels: 5, // left/right
    hPanels: 3, // top/bottom
    speed: 500,
    shadingIntensity: 20,
    perspective: 800,
    maxAngle: 85,
    shading: 'soft'
});

folded.accordion(10, 'left');
touchStartCallback = noOp

// running into a *ton* of issues this week. will continue to troubleshoot moving forward