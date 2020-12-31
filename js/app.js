const menu = document.getElementById('menu');
const overlayNav = document.getElementById('overlayNav');
const closeBtn = document.querySelector('.closebtn');

menu.addEventListener('click', () => {
  overlayNav.style.height = '100%';
});

closeBtn.addEventListener('click', () => {
  overlayNav.style.height = '0%';
});

