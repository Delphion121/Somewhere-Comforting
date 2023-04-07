const image = document.querySelector('.image');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');
const close = document.querySelector('.close');

image.addEventListener('click', function() {
  modalImage.src = this.src;
  overlay.classList.add('show');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
});

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
