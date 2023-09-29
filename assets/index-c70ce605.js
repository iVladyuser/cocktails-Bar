import"./styles-f6f67b94.js";(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=document.querySelectorAll('.header-mobile-menu-link[href^="#"]'),i=()=>{const r=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!r),t.classList.toggle("is-open")},s=()=>{t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body)};e.addEventListener("click",i),o.addEventListener("click",i),n.forEach(r=>{r.addEventListener("click",()=>{s()})}),window.matchMedia("(min-width: 1200px)").addEventListener("change",r=>{r.matches&&s()})})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".btn-hero-scroll"),e=document.querySelector(".js__cocktails__list.cocktails-list");t.addEventListener("click",function(){e&&e.scrollIntoView({behavior:"smooth"})})});const c=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,49,50,51,52,53,54,55,56,57,48];function a(){let t="";for(let e=0;e<c.length;e++)t+='<option data="'+c[e]+'" class="hero-mobyle-min">'+String.fromCharCode(c[e])+"</option>";document.querySelector("#keyboard-min").innerHTML=t}a();document.querySelectorAll("#keyboard-min .hero-mobyle-min").forEach(function(t){t.onclick=function(e){document.querySelectorAll("#keyboard-min .hero-mobyle-min").forEach(function(o){o.classList.remove("active")}),this.getAttribute("data"),this.classList.add("active")}});function l(){let t="";for(let e=0;e<c.length;e++)t+='<button type="button"  class="keyboard-letter" data="'+c[e]+'" >'+String.fromCharCode(c[e])+"</button>";document.querySelector("#keyboard").innerHTML=t}l();document.querySelectorAll("#keyboard .keyboard-letter").forEach(function(t){t.onclick=function(e){document.querySelectorAll("#keyboard .keyboard-letter").forEach(function(o){o.classList.remove("active")}),this.getAttribute("data"),this.classList.add("active")}});document.querySelector(".search-js");document.querySelectorAll(".keyboard-letter");const d="https://drinkify.b.goit.study/api/v1";async function u(){try{const t=`${d}/cocktails/`,e=window.innerWidth;let o=8;e>=1280&&(o=9);const n=await fetch(`${t}?r=${o}`);if(!n.ok)throw new Error(`HTTP Error! Status: ${n.status}`);const i=await n.json();h(i,document.querySelector(".js__cocktails__list"))}catch(t){throw console.error("Помилка при отриманні галереї:",t),t}}u();const h=(t,e)=>{const o=t.map(n=>`<li class="cocktail-card">
     <img src="${n.drinkThumb}" alt="${n.drink}" width ="300" height="300"/>
   
     <h2 class="cocktail-title">${n.drink}</h2>
     <p class="cocktail-description">${n.description}</p>
     
    <div class="cocktail-button-container"> 
     <button type="button" class="card-button-learn-more">Learn More</button>
     <button class="button-svg-heart">
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
