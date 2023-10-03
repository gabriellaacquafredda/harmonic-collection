const mySpan = document.querySelector(".my-span");

mySpan.addEventListener("mouseenter", () => {
  mySpan.classList.add("grow");
});

const fontSlider = document.getElementById('fontSlider');
const textElement = document.getElementById('text');

fontSlider.addEventListener('input', () => {
    const fontSize = fontSlider.value + 'px';
    textElement.style.fontSize = fontSize;
});