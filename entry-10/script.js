// reveal
document.addEventListener('DOMContentLoaded', function() {
    var detailsElement = document.getElementById('myDetails');

    var isDetailsActive = localStorage.getItem('detailsActive') === 'true';

document.body.style.overflow = isDetailsActive ? 'auto' : 'hidden';

    if (isDetailsActive) {
        detailsElement.classList.add('active');
    }

    detailsElement.addEventListener('toggle', function() {
        console.log('Details toggled!');

        this.classList.toggle('active');

        if (this.classList.contains('active')) {
            console.log('Scrolling down 1500px...');
            window.scrollTo({
                top: window.scrollY + 725,
                behavior: 'smooth'
            });

    document.body.style.overflow = 'auto';

            localStorage.setItem('detailsActive', 'true');
        } else {

    document.body.style.overflow = 'hidden';

            localStorage.setItem('detailsActive', 'false');
        }
    });
// trying to reset on refresh
        // window.addEventListener('load', function() {
        //     if (!isDetailsActive) {
        //         detailsElement.classList.remove('detailsActive', 'true');
        //     }
        // });
});

  

  