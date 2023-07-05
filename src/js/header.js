// import { doc } from "firebase/firestore";
// keep login i
import { loginCheck } from './firebase.js';
import { mobileAuthChek } from './menu.js'
const authExist = localStorage.getItem('exist');
if (authExist) {
  loginCheck();
}

const shopLink = document.querySelector('.shop-link');
const homeLink = document.querySelector('.home-link');
const shopLinkMb = document.querySelector('.btn-shop-mb');
const homeLinkMb = document.querySelector('.btn-home-mb');
shopLinkMb.classList.remove('active');
homeLinkMb.classList.add('active');
shopLink.classList.remove('active');
homeLink.classList.add('active');

//  Thema Changer
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
  page: document.querySelector('.page-mode'),
  home: document.querySelector('.section-home'),
  support: document.querySelector('.support'),
  homeTitle: document.querySelector('.home-title'),
};

// console.log(localStorage.getItem('mode'));
if (localStorage.getItem('mode') === 'dark') {
  refs.container.classList.add('dark');
  refs.logo.classList.add('dark');
  refs.shop.classList.add('dark');
  refs.burger.classList.add('dark');
  refs.x.classList.add('dark');
  refs.page.classList.add('dark');
  refs.home.classList.add('dark');
  refs.support.classList.add('dark');
  refs.homeTitle.classList.add('dark');
}

function themasChanger(evt) {
  if (evt.target.nodeName === 'INPUT') {
    refs.container.classList.toggle('dark');
    refs.logo.classList.toggle('dark');
    refs.shop.classList.toggle('dark');
    refs.burger.classList.toggle('dark');
    refs.x.classList.toggle('dark');
    refs.page.classList.toggle('dark');
    refs.home.classList.toggle('dark');
    refs.support.classList.toggle('dark');
    refs.homeTitle.classList.toggle('dark');
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
