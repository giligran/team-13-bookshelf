import{B as i,l as n}from"./modal-authorization-22a4dd36.js";const d=document.querySelector(".book-list"),m=new i;function g(t){const s=t.closest(".book-item"),o=Array.from(s.parentNode.children),c=o.indexOf(s);s.remove(),o.forEach((r,l)=>{l>=c&&(r.style.transform=`translateY(${r.offsetHeight}px)`)})}m.fetchBooksByCategory("Young Adult Paperback Monthly").then(t=>{const s=t;s.length>0?s.forEach(o=>{const c=document.createElement("li");c.classList.add("book-item"),c.innerHTML=`
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
        `;const r=c.querySelector(".remove-book");r.addEventListener("click",()=>{g(r)}),d.appendChild(c)}):document.querySelector(".empty-list-png").classList.remove(".is-hidden")}).catch(t=>{console.error(t)});const u=document.querySelector(".shop-link"),k=document.querySelector(".home-link"),h=document.querySelector(".btn-shop-mb"),b=document.querySelector(".btn-home-mb");k.classList.remove("active");u.classList.add("active");b.classList.remove("active");h.classList.add("active");const p=localStorage.getItem("exist");p&&n();const e={switcherRef:document.querySelector(".switch"),container:document.querySelector(".header-container"),logo:document.querySelector(".icon-title-svg"),shop:document.querySelector(".shop-icon-svg"),arrow:document.querySelector(".arow-down"),burger:document.querySelector(".icon-menu-svg"),x:document.querySelector(".x-icon-menu-svg"),mobMenu:document.querySelector("#mobile-menu"),mobOpen:document.querySelector("#mob-menu-open"),mobClose:document.querySelector("#m-close"),shopLs:document.querySelector("body"),bookItem:document.querySelector(".book-list")};localStorage.getItem("mode")==="dark"&&(e.container.classList.add("dark"),e.logo.classList.add("dark"),e.burger.classList.add("dark"),e.x.classList.add("dark"),e.shopLs.classList.add("dark"),e.bookItem.classList.add("dark"));function v(t){t.target.nodeName==="INPUT"&&(e.container.classList.toggle("dark"),e.logo.classList.toggle("dark"),e.burger.classList.toggle("dark"),e.x.classList.toggle("dark"),e.shopLs.classList.toggle("dark"),e.bookItem.classList.toggle("dark"),e.container.classList.contains("dark")?(localStorage.setItem("mode","dark"),localStorage.getItem("mode")):(localStorage.removeItem("mode"),localStorage.getItem("mode")))}e.switcherRef.addEventListener("click",v);function a(){e.mobMenu.classList.toggle("hidden"),e.container.classList.toggle("fixed"),e.mobOpen.classList.toggle("inactive"),e.mobClose.classList.toggle("active")}e.mobOpen.addEventListener("click",a);e.mobClose.addEventListener("click",a);
