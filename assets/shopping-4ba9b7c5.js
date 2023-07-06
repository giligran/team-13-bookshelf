import{a as i,l as g,m as h}from"./modal-authorization-32aff7bb.js";const b="/team-13-bookshelf/assets/blocks-cdd8b575.png",n=document.querySelector(".book-list");function k(o){const s=o.closest(".book-item"),l=Array.from(s.parentNode.children),a=l.indexOf(s);if(s.remove(),l.forEach((t,c)=>{c>=a&&(t.style.transform=`translateY(-${s.offsetHeight}px)`)}),Array.from(document.querySelectorAll(".book-item")).length===0){const t=document.createElement("img");t.src=blocks,t.alt="Зображення порожнього списку покупок",n.appendChild(t)}}const r=JSON.parse(localStorage.getItem(i));console.log(r);if(r.length>0)r.map(o=>{let s;s=o.title.length>16?o.title.slice(0,15)+"...":o.title,window.screen.width>=768&&(s=o.title);const l=document.createElement("li");l.classList.add("book-item"),l.innerHTML=`
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
              <use href="./img/symbol-defs.svg#icon-dump"></use>
            </svg>
          </button>
        `;const a=l.querySelector(".remove-book");a.addEventListener("click",()=>{const d=a.getAttribute("data-id");k(a);const t=JSON.parse(localStorage.getItem(i)),c=t.findIndex(u=>u._id===d);c!==-1&&t.splice(c,1),localStorage.setItem(i,JSON.stringify(t))}),n.appendChild(l)}).join("");else{const o=document.createElement("img");o.src=b,o.classList.add("empty-list-png"),o.alt="Зображення порожнього списку покупок",n.appendChild(o)}const p=document.querySelector(".shop-link"),v=document.querySelector(".home-link"),L=document.querySelector(".btn-shop-mb"),y=document.querySelector(".btn-home-mb");v.classList.remove("active");p.classList.add("active");y.classList.remove("active");L.classList.add("active");const S=localStorage.getItem("exist");S&&g();const e={switcherRef:document.querySelector(".switch"),container:document.querySelector(".header-container"),logo:document.querySelector(".icon-title-svg"),shop:document.querySelector(".shop-icon-svg"),arrow:document.querySelector(".arow-down"),burger:document.querySelector(".icon-menu-svg"),x:document.querySelector(".x-icon-menu-svg"),mobMenu:document.querySelector("#mobile-menu"),mobOpen:document.querySelector("#mob-menu-open"),mobClose:document.querySelector("#m-close"),shopLs:document.querySelector("body"),bookItem:document.querySelector(".book-list"),modWindow:document.querySelector(".modal-authorization"),submitBtn:document.querySelector("#submit"),modX:document.querySelector(".modal-authorization-close")};localStorage.getItem("mode")==="dark"&&(e.container.classList.add("dark"),e.logo.classList.add("dark"),e.burger.classList.add("dark"),e.x.classList.add("dark"),e.shopLs.classList.add("dark"),e.bookItem.classList.add("dark"),e.modWindow.classList.add("dark"),e.submitBtn.classList.add("dark"),e.modX.classList.add("dark"));function f(o){o.target.nodeName==="INPUT"&&(e.container.classList.toggle("dark"),e.logo.classList.toggle("dark"),e.burger.classList.toggle("dark"),e.x.classList.toggle("dark"),e.shopLs.classList.toggle("dark"),e.bookItem.classList.toggle("dark"),e.modWindow.classList.toggle("dark"),e.submitBtn.classList.toggle("dark"),e.modX.classList.toggle("dark"),e.container.classList.contains("dark")?(localStorage.setItem("mode","dark"),localStorage.getItem("mode")):(localStorage.removeItem("mode"),localStorage.getItem("mode")))}e.switcherRef.addEventListener("click",f);function m(){h(),e.mobMenu.classList.toggle("hidden"),e.container.classList.toggle("fixed"),e.mobOpen.classList.toggle("inactive"),e.mobClose.classList.toggle("active")}e.mobOpen.addEventListener("click",m);e.mobClose.addEventListener("click",m);const q=document.getElementById("logout-button"),w=document.querySelector("#authorization"),I=document.querySelector("#mobile-menu"),B=document.querySelector(".header-container"),E=document.querySelector("#mob-menu-open"),x=document.querySelector("#m-close"),C=document.querySelector("#btn-signup");document.querySelector("#avatar");document.querySelector("#blokLinkMb");document.querySelector("#mobileUN");function M(o){o.preventDefault(),localStorage.clear(),location.reload()}function O(){w.classList.remove("visually-hidden"),I.classList.add("hidden"),B.classList.remove("fixed"),E.classList.remove("inactive"),x.classList.remove("active"),console.log("2")}C.addEventListener("click",O);q.addEventListener("click",M);
