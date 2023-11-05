// failed scripts...
// const hoverDiv = document.querySelector('.hov-div');

// hoverDiv.addEventListener('mouseover', function() {
//     hoverDiv.classList.add('show-text');
// });

// hover to reveal
const hoverDivs = document.querySelectorAll('.hov-div , .hov-div2 , .hov-div3 , .hov-div4 , .hov-div5');
console.log(hoverDivs);

hoverDivs.forEach(function(hoverDiv) {
    hoverDiv.addEventListener('mouseover', function() {
        hoverDiv.classList.add('show-text');
    });
});

// moving on
const triggerButton = document.getElementsByClassName('.hov-div', 'hov-div2');
const animatedElement = document.getElementById('moving-on');

function startAnimation() {
  animatedElement.classList.add('animated');
}


