const logoutButton = document.getElementById('logout-button');
const backdrop = document.querySelector('#authorization');
const mobMenu = document.querySelector('#mobile-menu');
const container = document.querySelector('.header-container');
const mobOpen = document.querySelector('#mob-menu-open');
const mobClose = document.querySelector('#m-close');
const mobBtmSignUp = document.querySelector('#btn-signup');
const avatar = document.querySelector('#avatar');
const blokLink = document.querySelector('#blokLinkMb');
const mobileUN = document.querySelector('#mobileUN');

export function mobileAuthChek() {
  if (localStorage.getItem('exist')) {
    mobBtmSignUp.style.display = 'none';
    avatar.style.display = 'flex';
    blokLink.style.display = 'flex';
    logoutButton.style.display = 'flex';
    mobileUN.textContent = `${localStorage.getItem('name')}`;
  } else {
    mobBtmSignUp.style.display = 'block';
    avatar.style.display = 'none';
    blokLink.style.display = 'none';
    logoutButton.style.display = 'none';
  }
}

function logOut(e) {
  e.preventDefault();
  localStorage.clear();
  location.reload();
}

function logIN() {
  backdrop.classList.remove('visually-hidden');
  mobMenu.classList.add('hidden');
  container.classList.remove('fixed');
  mobOpen.classList.remove('inactive');
  mobClose.classList.remove('active');
  console.log('2');
}
mobBtmSignUp.addEventListener('click', logIN);
logoutButton.addEventListener('click', logOut);


