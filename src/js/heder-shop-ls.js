//  change page
import { loginCheck } from './firebase.js'
const shopLink = document.querySelector('.shop-link');
const homeLink = document.querySelector('.home-link');

homeLink.classList.remove('active');
shopLink.classList.add('active');

const authExist = localStorage.getItem('exist')
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
  mobMenu: document.querySelector('#mobile-menu'),
  mobOpen: document.querySelector('#mob-menu-open'),
  mobClose: document.querySelector('#mob-menu-close'),
  shopLs: document.querySelector('#shopLs'),
};
if (localStorage.getItem('mode') === 'dark') {
  refs.container.classList.add('dark');
  refs.logo.classList.add('dark');
//   refs.shop.classList.add('dark');
  refs.burger.classList.add('dark');
  refs.shopLs.classList.add('dark');
}

function themasChanger(evt) {
  if (evt.target.nodeName === 'INPUT') {
    refs.container.classList.toggle('dark');
    refs.logo.classList.toggle('dark');
    // refs.shop.classList.toggle('dark');
    refs.burger.classList.toggle('dark');
    refs.shopLs.classList.toggle('dark');
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
refs.mobOpen.addEventListener('click', () => {
  refs.mobMenu.classList.toggle('hidden');
});
refs.mobClose.addEventListener('click', () => {
  refs.mobMenu.classList.toggle('hidden');
});