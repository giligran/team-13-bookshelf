import{B as d,l as m,m as u}from"./modal-authorization-afb91716.js";const r=document.querySelector(".book-list"),g=new d;function h(t){const c=t.closest(".book-item"),o=Array.from(c.parentNode.children),n=o.indexOf(c);if(c.remove(),o.forEach((s,i)=>{i>=n&&(s.style.transform=`translateY(-${c.offsetHeight}px)`)}),Array.from(document.querySelectorAll(".book-item")).length===0){const s=document.createElement("img");s.src="../img/blocks.png",s.alt="Зображення порожнього списку покупок",r.appendChild(s)}}g.fetchBooksByCategory("Young Adult Paperback Monthly").then(t=>{const c=t;if(console.log(t),c.length>0)c.map(o=>{const n=o.title.length>16?o.title.slice(0,15)+"...":o.title,l=document.createElement("li");l.classList.add("book-item"),l.innerHTML=`
          <div class="book-card">
            <div>
              <img src="${o.book_image}" alt="Зображення обгортки книги" class="img-title-book" />
            </div>
            <div class="book-info">
              <h2 class="book-title">${n}</h2>
              <h3 class="book-category">${o.category}</h3>
              <p class="book-description">David Burroughs was once a devoted father to his three-year-old son Matthew,
              living a dream life just a short drive away from the working-class suburb where he and his wife,
              Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David
              was asleep just down the hall.</p>
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
        `;const s=l.querySelector(".remove-book");s.addEventListener("click",()=>{h(s)}),r.appendChild(l)}).join("");else{const o=document.createElement("img");o.src="../img/blocks.png",o.classList.add("empty-list-png"),o.alt="Зображення порожнього списку покупок",r.appendChild(o)}}).catch(t=>{console.error(t)});const b=document.querySelector(".shop-link"),k=document.querySelector(".home-link"),v=document.querySelector(".btn-shop-mb"),p=document.querySelector(".btn-home-mb");k.classList.remove("active");b.classList.add("active");p.classList.remove("active");v.classList.add("active");const y=localStorage.getItem("exist");y&&m();const e={switcherRef:document.querySelector(".switch"),container:document.querySelector(".header-container"),logo:document.querySelector(".icon-title-svg"),shop:document.querySelector(".shop-icon-svg"),arrow:document.querySelector(".arow-down"),burger:document.querySelector(".icon-menu-svg"),x:document.querySelector(".x-icon-menu-svg"),mobMenu:document.querySelector("#mobile-menu"),mobOpen:document.querySelector("#mob-menu-open"),mobClose:document.querySelector("#m-close"),shopLs:document.querySelector("body"),bookItem:document.querySelector(".book-list")};localStorage.getItem("mode")==="dark"&&(e.container.classList.add("dark"),e.logo.classList.add("dark"),e.burger.classList.add("dark"),e.x.classList.add("dark"),e.shopLs.classList.add("dark"),e.bookItem.classList.add("dark"));function L(t){t.target.nodeName==="INPUT"&&(e.container.classList.toggle("dark"),e.logo.classList.toggle("dark"),e.burger.classList.toggle("dark"),e.x.classList.toggle("dark"),e.shopLs.classList.toggle("dark"),e.bookItem.classList.toggle("dark"),e.container.classList.contains("dark")?(localStorage.setItem("mode","dark"),localStorage.getItem("mode")):(localStorage.removeItem("mode"),localStorage.getItem("mode")))}e.switcherRef.addEventListener("click",L);function a(){u(),e.mobMenu.classList.toggle("hidden"),e.container.classList.toggle("fixed"),e.mobOpen.classList.toggle("inactive"),e.mobClose.classList.toggle("active")}e.mobOpen.addEventListener("click",a);e.mobClose.addEventListener("click",a);const f=document.getElementById("logout-button"),S=document.querySelector("#authorization"),q=document.querySelector("#mobile-menu"),w=document.querySelector(".header-container"),B=document.querySelector("#mob-menu-open"),I=document.querySelector("#m-close"),E=document.querySelector("#btn-signup");document.querySelector("#avatar");document.querySelector("#blokLinkMb");document.querySelector("#mobileUN");function C(t){t.preventDefault(),localStorage.clear(),location.reload()}function x(){S.classList.remove("visually-hidden"),q.classList.add("hidden"),w.classList.remove("fixed"),B.classList.remove("inactive"),I.classList.remove("active"),console.log("2")}E.addEventListener("click",x);f.addEventListener("click",C);
