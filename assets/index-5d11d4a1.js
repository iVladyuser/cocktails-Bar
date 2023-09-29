import"./styles-baa84d0a.js";(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=document.querySelectorAll('.header-mobile-menu-link[href^="#"]'),i=()=>{const c=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!c),t.classList.toggle("is-open")},a=()=>{t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body)};e.addEventListener("click",i),o.addEventListener("click",i),n.forEach(c=>{c.addEventListener("click",()=>{a()})}),window.matchMedia("(min-width: 1200px)").addEventListener("change",c=>{c.matches&&a()})})();document.addEventListener("DOMContentLoaded",function(){document.querySelector(".btn-hero-scroll").addEventListener("click",function(){const e=document.getElementById("cocktail-container");e&&window.scrollTo({top:e.offsetTop,behavior:"smooth"})})});const r=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,49,50,51,52,53,54,55,56,57,48];function s(){let t="";for(let e=0;e<r.length;e++)t+='<option data="'+r[e]+'" class="hero-mobyle-min">'+String.fromCharCode(r[e])+"</option>";document.querySelector("#keyboard-min").innerHTML=t}s();document.querySelectorAll("#keyboard-min .hero-mobyle-min").forEach(function(t){t.onclick=function(e){document.querySelectorAll("#keyboard-min .hero-mobyle-min").forEach(function(o){o.classList.remove("active")}),this.getAttribute("data"),this.classList.add("active")}});function l(){let t="";for(let e=0;e<r.length;e++)t+='<button type="button"  class="keyboard-letter" data="'+r[e]+'" >'+String.fromCharCode(r[e])+"</button>";document.querySelector("#keyboard").innerHTML=t}l();document.querySelectorAll("#keyboard .keyboard-letter").forEach(function(t){t.onclick=function(e){document.querySelectorAll("#keyboard .keyboard-letter").forEach(function(o){o.classList.remove("active")}),this.getAttribute("data"),this.classList.add("active")}});document.querySelector(".search-js");document.querySelectorAll(".keyboard-letter");const d="https://drinkify.b.goit.study/api/v1";async function u(){try{const t=`${d}/cocktails/`,e=window.innerWidth;let o=8;e>=768&&(o=9);const n=await fetch(`${t}?r=${o}`);if(!n.ok)throw new Error(`HTTP Error! Status: ${n.status}`);const i=await n.json();h(i,document.querySelector(".js__cocktails__list"))}catch(t){throw console.error("Помилка при отриманні галереї:",t),t}}u();const h=(t,e)=>{const o=t.map(n=>`<li class="cocktail-card">
     <img src="${n.drinkThumb}" alt="${n.drink}" width ="300"/>
     <h2 class="cocktail-title">${n.drink}</h2>
     <p class="cocktail-description">${n.description}</p>  
     <div class="cocktail-item-container">
     <button type="button" class="card-button-learn-more" href="#">Learn More</button>
     <button class="card-svg-heart">
     <svg
              class="icon-heart"
              aria-label="icon-heart"
              width="24"
              height="24"
            >
              <use href="/img/sprite.svg#icon-heart"></use>
            </svg>
     </button>
     </div>
     </li>`).join("");e.insertAdjacentHTML("beforeend",o)};
