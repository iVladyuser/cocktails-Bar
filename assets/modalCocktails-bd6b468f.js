import{a as h,B as S,f}from"./header-03d2dc05.js";const g=document.querySelector("#modal-cocktail"),v=document.querySelector(".modal"),l=document.querySelector(".modal-cocktail__content"),m=document.querySelector(".modal-ingredients__content"),_=document.querySelector("[data-modal-close]");async function I(n){try{const e=(await h.get(`${S}/cocktails/lookup/?id=${n}`)).data;p(e,l),y();const o=JSON.parse(localStorage.getItem(c)).some(({_id:i})=>i===n),d=document.querySelector("[data-modal-add-cocktails]");o&&(d.textContent="Remove from favorite"),L(e),document.querySelector("[data-modal-back-close]").addEventListener("click",k),console.log(e)}catch(t){throw console.error("Error while getting cocktail:",t),t}}const p=(n,t)=>{const e=n.map(a=>`
      <div class="modal-header">
        <img class="modal-header__img" src="${a.drinkThumb}" alt="${a.drink}" loading="lazy" width="288" height="277" />
        <div class="modal-header__heading">
          <h2 class="modal-header__title">${a.drink}</h2>
          <h3 class="modal-header__subtitle">ingredients</h3>
          <p class="modal-header__text">Per cocktail</p>
          <ul class="modal-header__list">
            ${a.ingredients.map(o=>`<li class="modal-header__item">
                    <a href="#" class="modal-header__link" data-ingredient="${o.ingredientId}">${o.measure} ${o.title}</a>
                  </li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="modal-header--bottom">
      <h3 class="modal-header__subtitle modal-header__subtitle-inst">instructions:</h3>
      <p class="modal-header__text modal-header__text-inst">${a.description}</p> 
      </div>
      <div class="modal-bottons">
      <button class="modal-btn-addfavorites" data-modal-add-cocktails data-cocktail="${a._id}">Add to favorite</button>
      <button class="modal-btn-back" data-modal-back-close aria-label="close">Back</button> 
      </div>
      `).join("");t.innerHTML=e,g.classList.remove("is-hidden")};_.addEventListener("click",k);g.addEventListener("click",n=>{n.target.classList.contains("backdrop")&&k()});async function k(){g.classList.add("is-hidden"),setTimeout(()=>{v.classList.remove("modal-ingredient"),m.style.display="none",l.style.display="block",l.innerHTML="",m.innerHTML=""},300)}async function y(){document.querySelectorAll(".modal-header__link").forEach(t=>t.addEventListener("click",e=>{e.preventDefault(),v.classList.add("modal-ingredient"),l.style.display="none";const a=e.target.dataset.ingredient,o=e.target.textContent;f(a,o),m.style.display="block"}))}const c="favoriteCocktails",s=JSON.parse(localStorage.getItem(c))??[];localStorage.getItem(c)===null&&localStorage.setItem(c,JSON.stringify([]));async function L(n){const t=document.querySelector("[data-modal-add-cocktails]"),e=o=>{const d=o.target.dataset.cocktail;if(JSON.parse(localStorage.getItem(c)).some(({_id:r})=>r===d)){t.removeEventListener("click",e),t.addEventListener("click",a);return}s.push(n[0]),localStorage.setItem(c,JSON.stringify(s)),t.textContent="Remove from favorite",t.removeEventListener("click",e),t.addEventListener("click",a)},a=o=>{const d=o.target.dataset.cocktail,i=JSON.parse(localStorage.getItem(c)).findIndex(({_id:r})=>r===d);s.splice(i,1),localStorage.setItem(c,JSON.stringify(s)),t.textContent="Add to favorite",t.removeEventListener("click",a),t.addEventListener("click",e)};t.textContent==="Add to favorite"&&t.addEventListener("click",e),t.textContent==="Remove from favorite"&&t.addEventListener("click",a)}export{I as f};
