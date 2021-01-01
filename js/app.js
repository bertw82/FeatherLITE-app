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
});

// create note function
const modalColors = document.querySelector('.modal-colors');
const colorClass = [
  'mod-1', 'mod-2', 'mod-3', 'mod-4', 'mod-5', 'mod-6',
  'mod-7', 'mod-8', 'mod-9', 'mod-10', 'mod-11', 'mod-12', 'mod-13', 
  'mod-14', 'mod-15', 'mod-16', 'mod-17', 'mod-18'
];
modalColors.addEventListener('click', (e) => {
  const col = document.getElementsByClassName('col');
  diary.insertBefore(div, initialDiv);
  div.appendChild(section);
  section.appendChild(span);
  for (let i = 0; i < col.length; i++) {
    if (e.target === col[i]) {
      span.className = colorClass[i];
    }
  }
});
const form = document.querySelector('.form-2');
const title = document.querySelector('#title-input');
const text = document.querySelector('#text-input');
const date = new Date();
const monthNames = [
  "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"
];

const month = monthNames[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();
const noteDate = `
  ${month} ${day}, ${year}
`;
const diary = document.querySelector('.diary');
const initialDiv = diary.firstElementChild;
const div = document.createElement('div');
const section = document.createElement('section');
const span = document.createElement('span');
const article = document.createElement('article');
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
const p = document.createElement('p');

postButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  section.appendChild(h3);
  div. appendChild(article);
  article.appendChild(h2);
  article.appendChild(p);
  h2.textContent = title.value;
  h3.textContent = noteDate;
  p.textContent = text.value;
  form.reset();
  modal.style.display = 'none';
});


