const mySpan = document.querySelector(".my-span");
const theatreImage = document.getElementById('theatre');
const willImage = document.getElementById('will');
const titleImage = document.getElementById('title');
const quillImage = document.getElementById('quill');
const tempestImage = document.getElementById('tempest');

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
});

const fontSlider = document.getElementById('fontSlider');
const textElement = document.getElementById('text');

fontSlider.addEventListener('input', () => {
    const fontSize = fontSlider.value + 'px';
    textElement.style.fontSize = fontSize;
});
