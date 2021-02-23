const menu = document.getElementById('menu');
const overlayNav = document.getElementById('overlayNav');
const closeBtn = document.querySelector('.closebtn');
const modalButton = document.getElementById('modalButton');
const modal = document.querySelector('.modal');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const diary = document.querySelector('.diary');

// style radio buttons and make invisible
for ( let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].style.opacity = '0';
  radioButtons[i].style.cursor = 'pointer';
  radioButtons[i].style.width = '15px';
  radioButtons[i].style.height = '15px';
}

// open and close the navigation on mobile devices
menu.addEventListener('click', () => {
  overlayNav.style.height = '100%';
  overlayNav.style.transition = "all .8s";
});

closeBtn.addEventListener('click', () => {
  overlayNav.style.height = '0%';
  overlayNav.style.transition = "all .5s";
});

// open note modal
modalButton.addEventListener('click', () => {
  modal.classList.toggle('show');
});

// choose a label color 
const modalColors = document.querySelector('.modal-colors');

modalColors.addEventListener('click', () => {
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

// create note targets
const form = document.querySelector('.form-2');
const title = document.querySelector('#title-input');
const text = document.querySelector('#text-input');
const newNote = document.getElementById('newNote');

// function to create a note
function createDiv() {
  const initialDiv = newNote.firstElementChild;
  const div = document.createElement('div');
  const section = document.createElement('section');
  const span = document.createElement('span');
  const closeSpan = document.createElement('span');
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  newNote.insertBefore(div, initialDiv);
  div.appendChild(section);
  section.appendChild(span);
  section.appendChild(h3);
  section.appendChild(closeSpan);
  div.appendChild(article);
  article.appendChild(h2);
  article.appendChild(p);
  h2.textContent = title.value;
  h3.textContent = noteDate;
  closeSpan.innerHTML = '&times;';
  closeSpan.className = 'close';
  p.textContent = text.value;
  let radioValue = '';
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
        radioValue = radioButtons[i].value;
    } 
  }
  span.className = radioValue;
}

// function to uncheck buttons
function uncheckButton() {
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].parentNode.style.boxShadow = 'none';
    radioButtons[i].checked = false;
  } 
}

// target post note or cancel buttons
const postButton = document.getElementById('postButton');
const cancelButton = document.getElementById('cancelButton');

// post note
postButton.addEventListener('click', (e) => {
  e.preventDefault();
  let checked = false;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      checked = true;
      break;
    } 
  } 
  if (title.value === "") {
    alert('Please include a title for your note');
  } else if (text.value === "") {
    alert('Please include text content for your note');
  } else if ( checked === false ) {
    alert('Please choose color label');
  } else {
    createDiv();
    uncheckButton();
    form.reset();
    modal.classList.toggle('show');
  }
});

// cancel button 
cancelButton.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
  uncheckButton();
  modal.classList.toggle('show');
});

// close note when close button pressed
diary.addEventListener('click', e => {
  const close = document.getElementsByClassName('close');
  for (let i = 0; i < close.length; i++) {
    if (e.target === close[i]) {
      close[i].parentNode.parentNode.classList.add('hide');
    }
  }
});


