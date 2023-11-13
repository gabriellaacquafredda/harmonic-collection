// summary image reveals
document.addEventListener('DOMContentLoaded', function() {
    const texts = document.querySelectorAll('.text');

    texts.forEach(text => {
        text.addEventListener('mouseover', function() {
            const imgContainer = text.querySelector('.imgcontainer');
            if (imgContainer) {
                imgContainer.classList.add('show');
            }
        });

        text.addEventListener('mouseout', function() {
            const imgContainer = text.querySelector('.imgcontainer');
            if (imgContainer) {
                imgContainer.classList.add('show');
            }
        });
    });
});

// auto scroll functions...need to add listeners to prevent repeated actions
// 1
// document.addEventListener('DOMContentLoaded', function() {
//     const cont1 = document.querySelector('.cont-1');

//     cont1.addEventListener('mouseover', function() {
//         window.scrollBy({
//             top: 20,
//         });
//     });
// });


// // 2
// document.addEventListener('DOMContentLoaded', function() {
//     const cont2 = document.querySelector('.cont-2');

//     cont2.addEventListener('mouseover', function() {
//         window.scrollBy({
//             top: 400,
//             behavior: 'smooth'
//         });
//     });
// });


// // 3
// document.addEventListener('DOMContentLoaded', function() {
//     const cont3 = document.querySelector('.cont-3');

//     const3.addEventListener('mouseover', function() {
//         window.scrollBy({
//             top: 800,
//             behavior: 'smooth'
//         });
//     });
// });


// // 4
// document.addEventListener('DOMContentLoaded', function() {
//     const cont4 = document.querySelector('.cont-4');

//     const4.addEventListener('mouseover', function() {
//         window.scrollBy({
//             top: 400,
//             behavior: 'smooth'
//         });
//     });
// });