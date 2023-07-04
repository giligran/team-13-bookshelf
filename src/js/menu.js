const logoutButton = document.getElementById('logout-button');
const backdrop = document.querySelector('#authorization');
const mobMenu = document.querySelector('#mobile-menu');
const container = document.querySelector('.header-container');
const mobOpen = document.querySelector('#mob-menu-open');
const mobClose = document.querySelector('#m-close');

if (localStorage.getItem('exist')) {
  const userName = document.querySelector('#mobileUN');
  const logoutMenuBtn = document.querySelector('#logout-button');
  userName.textContent = `${localStorage.getItem('name')}`;
  logoutMenuBtn.style.display = 'block';
  logoutButton.addEventListener('click', logOut);
} else {
  const avatar = document.querySelector('#avatar');
  avatar.textContent = 'Pleas Log in first';
  logoutButton.textContent = 'Log In';
  logoutButton.removeEventListener('click', logOut);
  logoutButton.addEventListener('click', logIN);
}
console.log(localStorage.getItem('exist'));

function logOut(e) {
  e.preventDefault();
  localStorage.clear();
  location.reload();
  console.log('reloaded');
}

function logIN() {
  backdrop.classList.toggle('visually-hidden');
  mobMenu.classList.toggle('hidden');
  container.classList.toggle('fixed');
  mobOpen.classList.toggle('inactive');
  mobClose.classList.toggle('active');
}
