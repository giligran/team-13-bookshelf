const refs ={
    switcherRef: document.querySelector('.switch'),
    container: document.querySelector('.header-container'),
    logo: document.querySelector('.icon-title-svg'),
    shop: document.querySelector('.shop-icon-svg'),
    arrow: document.querySelector('.arow-down'),
    mobMenu: document.querySelector('.icon-menu-svg'),
}

// const switcherRef = document.querySelector('.switch');

function themasChanger (evt) {
    if (evt.target.nodeName === "INPUT") {
    refs.container.classList.toggle('dark');
    refs.logo.classList.toggle('dark');
    refs.shop.classList.toggle('dark');
    refs.arrow.classList.toggle('dark');
    refs.mobMenu.classList.toggle('dark');
    
    }
}

refs.switcherRef.addEventListener('click', themasChanger)