// gen
let totalRevealed = 0;

// hover to reveal
const hoverDivs = document.querySelectorAll('.hov-div , .hov-div2 , .hov-div3 , .hov-div4 , .hov-div5');
console.log(hoverDivs);

// this is the goal, but needs to happen only after all have revealed themselves
// this needs to be a function that you can then call from within the mouseevent

hoverDivs.forEach(function(hoverDiv) {
  let hasRevealed = false;  

  hoverDiv.addEventListener('mouseenter', function() {
    hoverDiv.classList.add('show-text');
    
    if (hasRevealed === false) {
      totalRevealed++;
      hasRevealed = true;
    }
    if (totalRevealed === 5) {
      console.log("yuh")
      let finalReveal = document.getElementById('final-reveal');
      finalReveal.style.setProperty('display', 'flex');
    }
    console.log(totalRevealed)
  });


});




