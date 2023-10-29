// failed scripts...
// const hoverDiv = document.querySelector('.hov-div');

// hoverDiv.addEventListener('mouseover', function() {
//     hoverDiv.classList.add('show-text');
// });

// hover to reveal
const hoverDivs = document.querySelectorAll('.hov-div, .hov-div2');

hoverDivs.forEach(hoverDiv => {
    hoverDiv.addEventListener('mouseover', function() {
        hoverDiv.classList.add('show-text');
    });
});
