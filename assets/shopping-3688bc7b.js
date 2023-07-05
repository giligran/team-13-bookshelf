import{B as m,l as g}from"./modal-authorization-1fc674e0.js";const i=document.querySelector(".book-list"),u=new m;function k(t){const s=t.closest(".book-item"),o=Array.from(s.parentNode.children),c=o.indexOf(s);if(s.remove(),o.forEach((r,d)=>{d>=c&&(r.style.transform=`translateY(-${s.offsetHeight}px)`)}),Array.from(document.querySelectorAll(".book-item")).length===0){const r=document.createElement("img");r.src="../img/blocks.png",r.alt="Зображення порожнього списку покупок",i.appendChild(r)}}u.fetchBooksByCategory("Young Adult Paperback Monthly").then(t=>{const s=t;if(console.log(t),s.length>0)s.forEach(o=>{const c=document.createElement("li");c.classList.add("book-item"),c.innerHTML=`
          <div class="book-card">
            <div>
              <img src="${o.book_image}" alt="Зображення обгортки книги" class="img-title-book" />
            </div>
            <div class="book-info">
              <h2 class="book-title">${o.title}</h2>
              <h3 class="book-category">${o.category}</h3>
              <p class="book-description">${o.description}</p>
              <div class="buying-list">
                <p class="book-author">${o.author}</p>
                <ul class="book-retailers">
                  
                  <li>
                    <a href="${o.amazon_product_url}"><img src="./img/logo-partners/amazon.png" class="retailer-logo amazon-logo" /></a>
                  </li>
                  <li>
                    <a href=""><img src="./img/logo-partners/ibook.png" class="retailer-logo ibook-logo" /></a>
                  </li>
                  <li>
                    <a href=""><img src="./img/logo-partners/bookshop.png" class="retailer-logo bookshop-logo" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button type="button" class="remove-book" data-item-remove>
            <svg class="remove-book-item" width="28" height="28">
              <use href="./img/symbol-defs.svg#icon-dump"></use>
            </svg>
          </button>
        `;const l=c.querySelector(".remove-book");l.addEventListener("click",()=>{k(l)}),i.appendChild(c)});else{const o=document.createElement("img");o.src="../img/blocks.png",o.classList.add("empty-list-png"),o.alt="Зображення порожнього списку покупок",i.appendChild(o)}}).catch(t=>{console.error(t)});const a={switcherRef:document.querySelector(".switch"),shoppingCard:document.querySelectorAll(".book-card"),bookTitle:document.querySelectorAll(".book-title")};function h(t){t.target.nodeName==="INPUT"&&a.shoppingCard.forEach(s=>{s.classList.toggle("dark")})}a.switcherRef.addEventListener("click",h);const b=document.querySelector(".shop-link"),p=document.querySelector(".home-link"),L=document.querySelector(".btn-shop-mb"),v=document.querySelector(".btn-home-mb");p.classList.remove("active");b.classList.add("active");v.classList.remove("active");L.classList.add("active");const f=localStorage.getItem("exist");f&&g();const e={switcherRef:document.querySelector(".switch"),container:document.querySelector(".header-container"),logo:document.querySelector(".icon-title-svg"),shop:document.querySelector(".shop-icon-svg"),arrow:document.querySelector(".arow-down"),burger:document.querySelector(".icon-menu-svg"),x:document.querySelector(".x-icon-menu-svg"),mobMenu:document.querySelector("#mobile-menu"),mobOpen:document.querySelector("#mob-menu-open"),mobClose:document.querySelector("#m-close"),shopLs:document.querySelector("body"),bookItem:document.querySelector(".book-list")};localStorage.getItem("mode")==="dark"&&(e.container.classList.add("dark"),e.logo.classList.add("dark"),e.burger.classList.add("dark"),e.x.classList.add("dark"),e.shopLs.classList.add("dark"),e.bookItem.classList.add("dark"));function y(t){t.target.nodeName==="INPUT"&&(e.container.classList.toggle("dark"),e.logo.classList.toggle("dark"),e.burger.classList.toggle("dark"),e.x.classList.toggle("dark"),e.shopLs.classList.toggle("dark"),e.bookItem.classList.toggle("dark"),e.container.classList.contains("dark")?(localStorage.setItem("mode","dark"),localStorage.getItem("mode")):(localStorage.removeItem("mode"),localStorage.getItem("mode")))}e.switcherRef.addEventListener("click",y);function n(){e.mobMenu.classList.toggle("hidden"),e.container.classList.toggle("fixed"),e.mobOpen.classList.toggle("inactive"),e.mobClose.classList.toggle("active")}e.mobOpen.addEventListener("click",n);e.mobClose.addEventListener("click",n);
