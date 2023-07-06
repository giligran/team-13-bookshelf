import{B as d,l as m,m as u}from"./modal-authorization-b618524e.js";const a=document.querySelector(".book-list"),g=new d;function h(t){const l=t.closest(".book-item"),o=Array.from(l.parentNode.children),c=o.indexOf(l);if(l.remove(),o.forEach((s,r)=>{r>=c&&(s.style.transform=`translateY(-${l.offsetHeight}px)`)}),Array.from(document.querySelectorAll(".book-item")).length===0){const s=document.createElement("img");s.src="../img/blocks.png",s.alt="Зображення порожнього списку покупок",a.appendChild(s)}}g.fetchBooksByCategory("Young Adult Paperback Monthly").then(t=>{const l=t;if(console.log(t),l.length>0)l.map(o=>{let c;c=o.title.length>16?o.title.slice(0,15)+"...":o.title,window.screen.width>=768&&(c=o.title);const n=document.createElement("li");n.classList.add("book-item"),n.innerHTML=`
            <div>
              <img src="${o.book_image}" alt="Зображення обгортки книги" class="img-title-book" />
            </div>
            <div class="book-info">
              <h2 class="book-title">${c}</h2>
              <h3 class="book-category">${o.category}</h3>
              <p class="book-description">David Burroughs was once a devoted father to his three-year-old son Matthew,
              living a dream life just a short drive away from the working-class suburb where he and his wife,
              Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David
              was asleep just down the hall.</p>
              <div class="buying-list">
                <p class="book-author">${o.author}</p>
                <ul class="book-retailers">
                  <li>
                    <a href="${o.amazon_product_url}"><img src="../img/logo-partners/amazon.png" class="retailer-logo amazon-logo" /></a>
                  </li>
                  <li>
                    <a href=""><img src="../img/logo-partners/ibook.png" class="retailer-logo ibook-logo" /></a>
                  </li>
                  <li>
                    <a href=""><img src="../img/logo-partners/bookshop.png" class="retailer-logo bookshop-logo" /></a>
                  </li>
                </ul>
              </div>
            </div>
          <button type="button" class="remove-book" data-item-remove>
            <svg class="remove-book-item" width="28" height="28">
              <use href="./img/symbol-defs.svg#icon-dump"></use>
            </svg>
          </button>
        `;const s=n.querySelector(".remove-book");s.addEventListener("click",()=>{h(s)}),a.appendChild(n)}).join("");else{const o=document.createElement("img");o.src="../img/blocks.png",o.classList.add("empty-list-png"),o.alt="Зображення порожнього списку покупок",a.appendChild(o)}}).catch(t=>{console.error(t)});const k=document.querySelector(".shop-link"),b=document.querySelector(".home-link"),p=document.querySelector(".btn-shop-mb"),v=document.querySelector(".btn-home-mb");b.classList.remove("active");k.classList.add("active");v.classList.remove("active");p.classList.add("active");const L=localStorage.getItem("exist");L&&m();const e={switcherRef:document.querySelector(".switch"),container:document.querySelector(".header-container"),logo:document.querySelector(".icon-title-svg"),shop:document.querySelector(".shop-icon-svg"),arrow:document.querySelector(".arow-down"),burger:document.querySelector(".icon-menu-svg"),x:document.querySelector(".x-icon-menu-svg"),mobMenu:document.querySelector("#mobile-menu"),mobOpen:document.querySelector("#mob-menu-open"),mobClose:document.querySelector("#m-close"),shopLs:document.querySelector("body"),bookItem:document.querySelector(".book-list"),modWindow:document.querySelector(".modal-authorization"),submitBtn:document.querySelector("#submit"),modX:document.querySelector(".modal-authorization-close")};localStorage.getItem("mode")==="dark"&&(e.container.classList.add("dark"),e.logo.classList.add("dark"),e.burger.classList.add("dark"),e.x.classList.add("dark"),e.shopLs.classList.add("dark"),e.bookItem.classList.add("dark"),e.modWindow.classList.add("dark"),e.submitBtn.classList.add("dark"),e.modX.classList.add("dark"));function y(t){t.target.nodeName==="INPUT"&&(e.container.classList.toggle("dark"),e.logo.classList.toggle("dark"),e.burger.classList.toggle("dark"),e.x.classList.toggle("dark"),e.shopLs.classList.toggle("dark"),e.bookItem.classList.toggle("dark"),e.modWindow.classList.toggle("dark"),e.submitBtn.classList.toggle("dark"),e.modX.classList.toggle("dark"),e.container.classList.contains("dark")?(localStorage.setItem("mode","dark"),localStorage.getItem("mode")):(localStorage.removeItem("mode"),localStorage.getItem("mode")))}e.switcherRef.addEventListener("click",y);function i(){u(),e.mobMenu.classList.toggle("hidden"),e.container.classList.toggle("fixed"),e.mobOpen.classList.toggle("inactive"),e.mobClose.classList.toggle("active")}e.mobOpen.addEventListener("click",i);e.mobClose.addEventListener("click",i);const f=document.getElementById("logout-button"),S=document.querySelector("#authorization"),q=document.querySelector("#mobile-menu"),w=document.querySelector(".header-container"),B=document.querySelector("#mob-menu-open"),I=document.querySelector("#m-close"),E=document.querySelector("#btn-signup");document.querySelector("#avatar");document.querySelector("#blokLinkMb");document.querySelector("#mobileUN");function C(t){t.preventDefault(),localStorage.clear(),location.reload()}function x(){S.classList.remove("visually-hidden"),q.classList.add("hidden"),w.classList.remove("fixed"),B.classList.remove("inactive"),I.classList.remove("active"),console.log("2")}E.addEventListener("click",x);f.addEventListener("click",C);
