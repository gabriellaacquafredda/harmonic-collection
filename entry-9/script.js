const mySpan = document.querySelector(".my-span");
const theatreImage = document.getElementById('theatre');
const willImage = document.getElementById('will');
const titleImage = document.getElementById('title');
const quillImage = document.getElementById('quill');
const tempestImage = document.getElementById('tempest');
const theatre2Image = document.getElementById('theatre2');
const revealed = document.querySelector('.revealed');
const revealed2 = document.querySelector('.revealed2');
const h33 = document.querySelector('.h3-3');

console.log(revealed)
console.log(h33)

mySpan.addEventListener("mouseenter", () => {
  mySpan.classList.add("grow");

  theatreImage.style.display = 'block';
  theatreImage.style.position = 'relative';
  setTimeout(() => {
    theatreImage.style.opacity = '1';
  }, 200);

  willImage.style.display = 'block';
  willImage.style.position = 'relative';
  setTimeout(() => {
    willImage.style.opacity = '1';
  }, 500); 

  titleImage.style.display = 'block';
  titleImage.style.position = 'absolute';
  setTimeout(() => {
    titleImage.style.opacity = '1';
  }, 1000); 

  quillImage.style.display = 'block';
  quillImage.style.position = 'absolute';
  setTimeout(() => {
    quillImage.style.opacity = '1';
  }, 700); 

  tempestImage.style.display = 'block';
  tempestImage.style.position = 'relative';
  setTimeout(() => {
    tempestImage.style.opacity = '1';
  }, 400); 

  theatre2Image.style.display = 'inline-block';
  theatre2Image.style.position = 'relative';
  setTimeout(() => {
    theatre2Image.style.opacity = '1';
  }, 500);

  revealed.style.display = 'inline-block';
  revealed.style.position = 'relative';
  setTimeout(() => {
    revealed.style.opacity = '1';
  }, 1100);

  revealed2.style.display = 'flex';
  revealed2.style.position = 'relative';
  setTimeout(() => {
    revealed2.style.opacity = '1';
  }, 1100);

  h33.style.display = 'block';
  h33.style.position = 'relative';
  setTimeout(() => {
    h33.style.opacity = '1';
  }, 1100);
});

const fontSlider = document.getElementById('fontSlider');
const textElement = document.getElementById('text');

fontSlider.addEventListener('input', () => {
    const fontSize = fontSlider.value + 'px';
    textElement.style.fontSize = fontSize;
});
