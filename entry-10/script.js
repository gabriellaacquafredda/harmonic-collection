// reveal
document.addEventListener('DOMContentLoaded', function() {
    var detailsElement=document.getElementById('myDetails');
    var print1Element=document.getElementById('print-1');
    var print2Element=document.getElementById('print-2');
    var print3Element=document.getElementById('print-3');
    var print4Element=document.getElementById('print-4');
    var print5Element=document.getElementById('print-5');
    var print6Element=document.getElementById('print-6');
    var print7Element=document.getElementById('print-7');
    var print8Element=document.getElementById('print-8');
    var print9Element=document.getElementById('print-9');
    var print10Element=document.getElementById('print-10');
    var dogsElement=document.getElementById('dogs');
    var bunnyElement=document.getElementById('bunny');

    const isDetailsActive=document.querySelector('detailsActive');
    const isOpen=myDetails.open;
    console.log('details are open', myDetails);

    document.body.style.overflow=isDetailsActive ? 'auto' : 'hidden';

    detailsElement.addEventListener('toggle', function() {
            console.log('Details toggled!');

            this.classList.toggle('active');

            if (this.classList.contains('active')) {
                console.log('Scrolling down 1500px...');
                var scrollDuration=4000;
                scrollToSmooth(window.scrollY + 725, scrollDuration);

                document.body.style.overflow='auto';

                showPrint1();
                showPrint2();
                showPrint3();
                showPrint4();
                showPrint5();
                showPrint6();
                showPrint7();
                showPrint8();
                showPrint9();
                showPrint10();
                showDogs();
                showBunny();

                localStorage.setItem('detailsActive', 'true');
            }

            else {
                document.body.style.overflow='hidden';

                hidePrint1();
                hidePrint2();
                hidePrint3();
                hidePrint4();
                hidePrint5();
                hidePrint6();
                hidePrint7();
                hidePrint8();
                hidePrint9();
                hidePrint10();
                hideDogs();
                hideBunny();

                localStorage.setItem('detailsActive', 'false');
            }
        });

    function scrollToSmooth(targetPosition, duration) {
        var startPosition=window.scrollY;
        var startTime=performance.now();

        function scrollAnimation(currentTime) {
            var elapsedTime=currentTime - startTime;

            window.scrollTo(0, easeInOut(elapsedTime, startPosition, targetPosition - startPosition, duration));

            if (elapsedTime < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        function easeInOut(t, b, c, d) {

            t /=d / 2;
            if (t < 1) return c / 2 * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(scrollAnimation);
    }

    function showPrint1() {
        print1Element.style.display='flex';
        print2Element.style.display='flex';
        print3Element.style.display='flex';
        print4Element.style.display='flex';
        print5Element.style.display='flex';
        print6Element.style.display='flex';
        print7Element.style.display='flex';
        print8Element.style.display='flex';
        print9Element.style.display='flex';
        print10Element.style.display='flex';
        dogsElement.style.display='flex';
        bunnyElement.style.display='flex';
    }

    function hidePrint1() {
        print1Element.style.display='none';
        print2Element.style.display='none';
        print3Element.style.display='none';
        print4Element.style.display='none';
        print5Element.style.display='none';
        print6Element.style.display='none';
        print7Element.style.display='none';
        print8Element.style.display='none';
        print9Element.style.display='none';
        print10Element.style.display='none';
        dogsElement.style.display='none';
        bunnyElement.style.display='none';
    }
});

// trying to reset on refresh
// $(document).ready(function(){
//     $(this).scrollTop(0);
// });