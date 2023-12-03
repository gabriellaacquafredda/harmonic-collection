// pre-load background sequence
function preloadImages() {
    var imageUrls = [
      'images/bg-1.png',
      'images/bg-2.png',
      'images/bg-3.png',
      'images/bg-4.png',
      'images/bg-5.png',
      'images/bg-6.png'
    ];
  
    for (var i = 0; i < imageUrls.length; i++) {
      var img = new Image();
      img.src = imageUrls[i];
    }
  }
  
  window.onload = function () {
    preloadImages();
  };
  