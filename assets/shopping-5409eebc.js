import{l,B as i}from"./fetch-api-cc6df2fc.js";const n=document.querySelector(".shop-link"),d=document.querySelector(".home-link");d.classList.remove("active");n.classList.add("active");const m=localStorage.getItem("exist");m&&l();const e={switcherRef:document.querySelector(".switch"),container:document.querySelector(".header-container"),logo:document.querySelector(".icon-title-svg"),shop:document.querySelector(".shop-icon-svg"),arrow:document.querySelector(".arow-down"),burger:document.querySelector(".icon-menu-svg"),mobMenu:document.querySelector("#mobile-menu"),mobOpen:document.querySelector("#mob-menu-open"),mobClose:document.querySelector("#mob-menu-close"),shopLs:document.querySelector("#shopLs")};localStorage.getItem("mode")==="dark"&&(e.container.classList.add("dark"),e.logo.classList.add("dark"),e.burger.classList.add("dark"),e.shopLs.classList.add("dark"));function g(t){t.target.nodeName==="INPUT"&&(e.container.classList.toggle("dark"),e.logo.classList.toggle("dark"),e.burger.classList.toggle("dark"),e.shopLs.classList.toggle("dark"),e.container.classList.contains("dark")?(localStorage.setItem("mode","dark"),localStorage.getItem("mode")):(localStorage.removeItem("mode"),localStorage.getItem("mode")))}e.switcherRef.addEventListener("click",g);e.mobOpen.addEventListener("click",()=>{e.mobMenu.classList.toggle("hidden")});e.mobClose.addEventListener("click",()=>{e.mobMenu.classList.toggle("hidden")});const u=document.querySelector(".book-list"),h=new i;function k(t){const s=t.closest(".book-item"),o=Array.from(s.parentNode.children),r=o.indexOf(s);s.remove(),o.forEach((c,a)=>{a>=r&&(c.style.transform=`translateY(${c.offsetHeight}px)`)})}h.fetchBooksByCategory("Young Adult Paperback Monthly").then(t=>{const s=t;s.length>0?s.forEach(o=>{const r=document.createElement("li");r.classList.add("book-item"),r.innerHTML=`
          <div class="book-card">
            <div>
              <img src="${o.image}" alt="Зображення обгортки книги" class="img-title-book" />
            </div>
            <div class="book-info">
              <h2 class="book-title">${o.title}</h2>
              <h3 class="book-category">${o.category}</h3>
              <p class="book-description">${o.description}</p>
              <div class="buying-list">
                <p class="book-author">${o.author}</p>
                <ul class="book-retailers">
                  
                  <li>
                    <a href=""><img src="../img/logo-partners/amazon.png" class="retailer-logo amazon-logo" /></a>
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
          </div>
          <button type="button" class="remove-book" data-item-remove>
            <svg class="remove-book-item" width="28" height="28">
              <use href="../img/symbol-defs.svg#icon-dump"></use>
            </svg>
          </button>
        `;const c=r.querySelector(".remove-book");c.addEventListener("click",()=>{k(c)}),u.appendChild(r)}):document.querySelector(".empty-list-png").classList.remove(".is-hidden")}).catch(t=>{console.error(t)});
