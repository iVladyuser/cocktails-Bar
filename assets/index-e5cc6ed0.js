import"./styles-a48f1935.js";(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=document.querySelectorAll('.header-mobile-menu-link[href^="#"]'),i=()=>{const c=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open")},a=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body)};t.addEventListener("click",i),o.addEventListener("click",i),n.forEach(c=>{c.addEventListener("click",()=>{a()})}),window.matchMedia("(min-width: 1200px)").addEventListener("change",c=>{c.matches&&a()})})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".btn-hero-scroll"),t=document.querySelector(".js__cocktails__list.cocktails-list");e.addEventListener("click",function(){t&&t.scrollIntoView({behavior:"smooth"})})});const r=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,49,50,51,52,53,54,55,56,57,48];function l(){let e="";for(let t=0;t<r.length;t++)e+='<option data="'+r[t]+'" class="hero-mobyle-min">'+String.fromCharCode(r[t])+"</option>";document.querySelector("#keyboard-min").innerHTML=e}l();document.querySelectorAll("#keyboard-min .hero-mobyle-min").forEach(function(e){e.onclick=function(t){document.querySelectorAll("#keyboard-min .hero-mobyle-min").forEach(function(o){o.classList.remove("active")}),this.getAttribute("data"),this.classList.add("active")}});function d(){let e="";for(let t=0;t<r.length;t++)e+='<button type="button"  class="keyboard-letter" data="'+r[t]+'" >'+String.fromCharCode(r[t])+"</button>";document.querySelector("#keyboard").innerHTML=e}d();document.querySelectorAll("#keyboard .keyboard-letter").forEach(function(e){e.onclick=function(t){document.querySelectorAll("#keyboard .keyboard-letter").forEach(function(o){o.classList.remove("active")}),this.getAttribute("data"),this.classList.add("active")}});document.querySelector(".search-js");document.querySelectorAll(".keyboard-letter");const u="https://drinkify.b.goit.study/api/v1";function m(e){const t=s();t.push(e),localStorage.setItem("favorites",JSON.stringify(t))}function s(){const e=localStorage.getItem("favorites");return e?JSON.parse(e):[]}function h(e){const o=s().filter(n=>n.id!==e);localStorage.setItem("favorites",JSON.stringify(o))}async function y(){try{const e=`${u}/cocktails/`,t=window.innerWidth;let o=8;t>=1280&&(o=9);const n=await fetch(`${e}?r=${o}`);if(!n.ok)throw new Error(`HTTP Error! Status: ${n.status}`);const i=await n.json();f(i,document.querySelector(".js__cocktails__list"))}catch(e){throw console.error("Помилка при отриманні галереї:",e),e}}y();const f=(e,t)=>{const o=e.map(n=>`<li class="cocktail-card">
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
     </li>`).join("");t.insertAdjacentHTML("beforeend",o)};document.querySelector(".modal-cocktail__content");document.querySelector("#modal-cocktail");createOnClickForModal(m,h);document.querySelector(".modal-ingredients__content");document.querySelector("#modal-cocktail");
