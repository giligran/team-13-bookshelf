//  Thema Changer
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
};
function themasChanger(evt) {
  if (evt.target.nodeName === 'INPUT') {
    refs.container.classList.toggle('dark');
    refs.logo.classList.toggle('dark');
    refs.shop.classList.toggle('dark');
    refs.burger.classList.toggle('dark');
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
