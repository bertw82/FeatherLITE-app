const menu = document.getElementById('menu');
const overlayNav = document.getElementById('overlayNav');
const closeBtn = document.querySelector('.closebtn');
const modalButton = document.getElementById('modalButton');
const modal = document.querySelector('.modal');

// open and close the navigation on mobile devices
menu.addEventListener('click', () => {
  overlayNav.style.height = '100%';
  overlayNav.style.transition = "all .8s"
});

closeBtn.addEventListener('click', () => {
  overlayNav.style.height = '0%';
  overlayNav.style.transition = "all .5s"
});

// open note modal
modalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// close note modal by clicking anywhere else on screen
window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
})

