var img = [
    'img/banner1.webp',
    'img/banner2.webp',
    'img-listTour/bn1.jpg'
];
var i = 0;

function after() {
    i++;
    if (i === 2) {
        i = 0;
    }
    var images = document.getElementsByClassName('banner-image-slide');
    for (var j = 0; j < images.length; j++) {
        images[j].src = img[i];
    }
}

function before() {
    i--;
    if (i < 0) {
        i = 1;
    }
    var images = document.getElementsByClassName('banner-image-slide');
    for (var j = 0; j < images.length; j++) {
        images[j].src = img[i];
    }
}
setInterval('before()', 4000);

function openModal(img) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');
  
    modal.style.display = 'block';
    modalImage.src = img.src;
  }
  
  function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  