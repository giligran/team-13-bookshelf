import{a as n,l as g,m as h}from"./modal-authorization-d9cc7882.js";const b="/team-13-bookshelf/assets/blocks-cdd8b575.png",k="/team-13-bookshelf/assets/symbol-defs-07af4f7d.svg",i=document.querySelector(".book-list");function p(o){const s=o.closest(".book-item"),l=Array.from(s.parentNode.children),a=l.indexOf(s);if(s.remove(),l.forEach((t,c)=>{c>=a&&(t.style.transform=`translateY(-${s.offsetHeight}px)`)}),Array.from(document.querySelectorAll(".book-item")).length===0){const t=document.createElement("img");t.src=blocks,t.alt="Зображення порожнього списку покупок",i.appendChild(t)}}const r=JSON.parse(localStorage.getItem(n));console.log(r);if(r.length>0)r.map(o=>{let s;s=o.title.length>16?o.title.slice(0,15)+"...":o.title,window.screen.width>=768&&(s=o.title);const l=document.createElement("li");l.classList.add("book-item"),l.innerHTML=`
            <div>
              <img src="${o.book_image}" alt="Зображення обгортки книги" class="img-title-book" />
            </div>
            <div class="book-info">
              <h2 class="book-title">${s}</h2>
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
          <button type="button" class="remove-book" data-id=${o._id}>
            <svg class="remove-book-item" width="28" height="28">
              <use href="${k}#icon-dump"></use>
            </svg>
          </button>
        `;const a=l.querySelector(".remove-book");a.addEventListener("click",()=>{const d=a.getAttribute("data-id");p(a);const t=JSON.parse(localStorage.getItem(n)),c=t.findIndex(u=>u._id===d);c!==-1&&t.splice(c,1),localStorage.setItem(n,JSON.stringify(t))}),i.appendChild(l)}).join("");else{const o=document.createElement("img");o.src=b,o.classList.add("empty-list-png"),o.alt="Зображення порожнього списку покупок",i.appendChild(o)}const v=document.querySelector(".shop-link"),L=document.querySelector(".home-link"),y=document.querySelector(".btn-shop-mb"),f=document.querySelector(".btn-home-mb");L.classList.remove("active");v.classList.add("active");f.classList.remove("active");y.classList.add("active");const S=localStorage.getItem("exist");S&&g();const e={switcherRef:document.querySelector(".switch"),container:document.querySelector(".header-container"),logo:document.querySelector(".icon-title-svg"),shop:document.querySelector(".shop-icon-svg"),arrow:document.querySelector(".arow-down"),burger:document.querySelector(".icon-menu-svg"),x:document.querySelector(".x-icon-menu-svg"),mobMenu:document.querySelector("#mobile-menu"),mobOpen:document.querySelector("#mob-menu-open"),mobClose:document.querySelector("#m-close"),shopLs:document.querySelector("body"),bookItem:document.querySelector(".book-list"),modWindow:document.querySelector(".modal-authorization"),submitBtn:document.querySelector("#submit"),modX:document.querySelector(".modal-authorization-close")};localStorage.getItem("mode")==="dark"&&(e.container.classList.add("dark"),e.logo.classList.add("dark"),e.burger.classList.add("dark"),e.x.classList.add("dark"),e.shopLs.classList.add("dark"),e.bookItem.classList.add("dark"),e.modWindow.classList.add("dark"),e.submitBtn.classList.add("dark"),e.modX.classList.add("dark"));function q(o){o.target.nodeName==="INPUT"&&(e.container.classList.toggle("dark"),e.logo.classList.toggle("dark"),e.burger.classList.toggle("dark"),e.x.classList.toggle("dark"),e.shopLs.classList.toggle("dark"),e.bookItem.classList.toggle("dark"),e.modWindow.classList.toggle("dark"),e.submitBtn.classList.toggle("dark"),e.modX.classList.toggle("dark"),e.container.classList.contains("dark")?(localStorage.setItem("mode","dark"),localStorage.getItem("mode")):(localStorage.removeItem("mode"),localStorage.getItem("mode")))}e.switcherRef.addEventListener("click",q);function m(){h(),e.mobMenu.classList.toggle("hidden"),e.container.classList.toggle("fixed"),e.mobOpen.classList.toggle("inactive"),e.mobClose.classList.toggle("active")}e.mobOpen.addEventListener("click",m);e.mobClose.addEventListener("click",m);const w=document.getElementById("logout-button"),I=document.querySelector("#authorization"),B=document.querySelector("#mobile-menu"),E=document.querySelector(".header-container"),x=document.querySelector("#mob-menu-open"),C=document.querySelector("#m-close"),M=document.querySelector("#btn-signup");document.querySelector("#avatar");document.querySelector("#blokLinkMb");document.querySelector("#mobileUN");function O(o){o.preventDefault(),localStorage.clear(),location.reload()}function D(){I.classList.remove("visually-hidden"),B.classList.add("hidden"),E.classList.remove("fixed"),x.classList.remove("inactive"),C.classList.remove("active"),console.log("2")}M.addEventListener("click",D);w.addEventListener("click",O);
