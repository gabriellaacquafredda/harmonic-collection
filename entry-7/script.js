// image reveal
window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.long-container , .long-1, .long-2 , .long-3 , .long-4 , .long-5 , .long-6 , .long-7 , .long-8');
    var scrollHeight = window.scrollY;

    elements.forEach(function(element) {
        if (scrollHeight > 20) {
            element.classList.add('scrolled');
        } else {
            element.classList.remove('scrolled');
        }
    });
});
