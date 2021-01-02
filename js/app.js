const menu = document.getElementById('menu');
const overlayNav = document.getElementById('overlayNav');
const closeBtn = document.querySelector('.closebtn');
const modalButton = document.getElementById('modalButton');
const modal = document.querySelector('.modal');
const radioButtons = document.querySelectorAll('input[type="radio"]');

// make radio buttons invisible
for ( let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].style.opacity = '0';
}

// open and close the navigation on mobile devices
menu.addEventListener('click', () => {
  overlayNav.style.height = '100%';
  overlayNav.style.transition = "all .8s";
})

closeBtn.addEventListener('click', () => {
  overlayNav.style.height = '0%';
  overlayNav.style.transition = "all .5s";
})

// open note modal
modalButton.addEventListener('click', () => {
  modal.classList.toggle('show');
})

// note label colors
const modalColors = document.querySelector('.modal-colors');
const colorClass = [
  'mod-1', 'mod-2', 'mod-3', 'mod-4', 'mod-5', 'mod-6',
  'mod-7', 'mod-8', 'mod-9', 'mod-10', 'mod-11', 'mod-12', 'mod-13', 
  'mod-14', 'mod-15', 'mod-16', 'mod-17', 'mod-18'
];

// choose a label color 
modalColors.addEventListener('click', () => {
  const col = document.getElementsByClassName('col');
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
        radioButtons[i].parentNode.style.boxShadow = "0 0 5px 5px rgba(0,0,0,0.3)";
      } else if (!radioButtons[i].checked) {
        radioButtons[i].parentNode.style.boxShadow = "none";
      }
    } 
});

// use JS to get the current date
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

// create note
const form = document.querySelector('.form-2');
const title = document.querySelector('#title-input');
const text = document.querySelector('#text-input');
const newNote = document.getElementById('newNote');

// function to post a note
function createDiv() {
  const initialDiv = newNote.firstElementChild;
  const div = document.createElement('div');
  const section = document.createElement('section');
  const span = document.createElement('span');
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  newNote.insertBefore(div, initialDiv);
  div.appendChild(section);
  section.appendChild(span);
  section.appendChild(h3);
  div.appendChild(article);
  article.appendChild(h2);
  article.appendChild(p);
  h2.textContent = title.value;
  h3.textContent = noteDate;
  p.textContent = text.value;
  let radioValue = '';
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
        radioValue = radioButtons[i].value;
      } 
  } 
  span.className = radioValue;
}

// post a note or cancel
const postButton = document.getElementById('postButton');
const cancelButton = document.getElementById('cancelButton');

// function to uncheck buttons
function uncheckButton() {
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].parentNode.style.boxShadow = 'none';
  } 
}

// post note
postButton.addEventListener('click', (e) => {
  e.preventDefault();
  createDiv();
  uncheckButton();
  form.reset();
  modal.classList.toggle('show');
})

// cancel button 
cancelButton.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
  uncheckButton();
  modal.classList.toggle('show');
})


