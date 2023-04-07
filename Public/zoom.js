const images = document.querySelectorAll('.image');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');
const close = document.querySelector('.close');


for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    modalImage.src = this.src;
    overlay.classList.add('show');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
}

close.addEventListener('click', function() {
  overlay.classList.remove('show');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
});

overlay.addEventListener('click', function() {
  overlay.classList.remove('show');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
});

images.forEach(image => {
    image.addEventListener('click', function() {
      modalImage.src = this.src;
      overlay.classList.add('show');
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
      centerModalImage();
    });
  });
  
  function centerModalImage() {
    let imageWidth = modalImage.width;
    let imageHeight = modalImage.height;
    let modalWidth = modal.offsetWidth;
    let modalHeight = modal.offsetHeight;
  
    let top = (modalHeight - imageHeight) / 2;
    let left = (modalWidth - imageWidth) / 2;
  
    modalImage.style.top = top + 'px';
    modalImage.style.left = left + 'px';
  }
