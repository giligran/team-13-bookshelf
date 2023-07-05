//  change page
import { loginCheck } from './firebase.js';
import { mobileAuthChek } from './menu.js';
const shopLink = document.querySelector('.shop-link');
const homeLink = document.querySelector('.home-link');
const shopLinkMb = document.querySelector('.btn-shop-mb');
const homeLinkMb = document.querySelector('.btn-home-mb');

homeLink.classList.remove('active');
shopLink.classList.add('active');
homeLinkMb.classList.remove('active');
shopLinkMb.classList.add('active');

const authExist = localStorage.getItem('exist');
if (authExist) {
  loginCheck();
}
const refs = {
  switcherRef: document.querySelector('.switch'),
  container: document.querySelector('.header-container'),
  logo: document.querySelector('.icon-title-svg'),
  shop: document.querySelector('.shop-icon-svg'),
  arrow: document.querySelector('.arow-down'),
  burger: document.querySelector('.icon-menu-svg'),
  x: document.querySelector('.x-icon-menu-svg'),
  mobMenu: document.querySelector('#mobile-menu'),
  mobOpen: document.querySelector('#mob-menu-open'),
  mobClose: document.querySelector('#m-close'),
  shopLs: document.querySelector('body'),
  bookItem: document.querySelector('.book-list'),
};
if (localStorage.getItem('mode') === 'dark') {
  refs.container.classList.add('dark');
  refs.logo.classList.add('dark');
  refs.burger.classList.add('dark');
  refs.x.classList.add('dark');
  refs.shopLs.classList.add('dark');
  refs.bookItem.classList.add('dark');
}

function themasChanger(evt) {
  if (evt.target.nodeName === 'INPUT') {
    refs.container.classList.toggle('dark');
    refs.logo.classList.toggle('dark');
    refs.burger.classList.toggle('dark');
    refs.x.classList.toggle('dark');
    refs.shopLs.classList.toggle('dark');
    refs.bookItem.classList.toggle('dark');
    if (refs.container.classList.contains('dark')) {
      localStorage.setItem('mode', 'dark');
      const theme = localStorage.getItem('mode');
      // console.log(theme);
    } else {
      localStorage.removeItem('mode');
      const theme = localStorage.getItem('mode');
      // console.log(theme);
    }
  }
}

refs.switcherRef.addEventListener('click', themasChanger);

// Open mobile menu
function toggleBtn() {
  mobileAuthChek ();
  refs.mobMenu.classList.toggle('hidden');
  refs.container.classList.toggle('fixed');
  refs.mobOpen.classList.toggle('inactive');
  refs.mobClose.classList.toggle('active');
}

refs.mobOpen.addEventListener('click', toggleBtn);
refs.mobClose.addEventListener('click', toggleBtn);
