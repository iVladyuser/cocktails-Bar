import"./modulepreload-polyfill-ec808ebb.js";(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=document.querySelectorAll('.header-mobile-menu-link[href^="#"]'),r=()=>{const c=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!c),t.classList.toggle("is-open")},s=()=>{t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body)};e.addEventListener("click",r),o.addEventListener("click",r),n.forEach(c=>{c.addEventListener("click",()=>{s()})}),window.matchMedia("(min-width: 1200px)").addEventListener("change",c=>{c.matches&&s()})})();const a="https://drinkify.b.goit.study/api/v1";async function i(){try{const t=`${a}/cocktails/?r=8`,e=await fetch(t);if(!e.ok)throw new Error(`HTTP Error! Status: ${e.status}`);const o=await e.json();d(o,document.getElementById("cocktail-container"))}catch(t){throw console.error("Помилка при отриманні галереї:",t),t}}i();const d=(t,e)=>{const o=t.map(n=>`<div class="cocktail-card">
    <img src="${n.drinkThumb}" alt"${n.drink}" width ="300"/>
        <h2 class="cocktail-title">${n.drink}</h2>
    <p class="cocktail-description">${n.description}</p>
     <div>
     <button type="button" class="card-button" href="#">Learn More</button>
     <button class="card-svg" href="#">SVG</button>
     </div></div>`).join();e.insertAdjacentHTML("beforeend",o)};
