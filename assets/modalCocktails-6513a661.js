import{a as h,B as S,f}from"./header-feb6b5db.js";const g=document.querySelector("#modal-cocktail"),v=document.querySelector(".modal"),l=document.querySelector(".modal-cocktail__content"),m=document.querySelector(".modal-ingredients__content"),_=document.querySelector("[data-modal-close]");async function I(n){try{const a=(await h.get(`${S}/cocktails/lookup/?id=${n}`)).data;p(a,l),y();const o=JSON.parse(localStorage.getItem(c)).some(({_id:i})=>i===n),d=document.querySelector("[data-modal-add-cocktails]");o&&(d.textContent="Remove from favorite"),L(a),document.querySelector("[data-modal-back-close]").addEventListener("click",k)}catch(t){throw console.error("Error while getting cocktail:",t),t}}const p=(n,t)=>{const a=n.map(e=>`
      <div class="modal-header">
        <img class="modal-header__img" src="${e.drinkThumb}" alt="${e.drink}" loading="lazy" width="288" height="277" />
        <div class="modal-header__heading">
          <h2 class="modal-header__title">${e.drink}</h2>
          <h3 class="modal-header__subtitle">ingredients</h3>
          <p class="modal-header__text">Per cocktail</p>
          <ul class="modal-header__list">
            ${e.ingredients.map(o=>`<li class="modal-header__item">
                    <a href="#" class="modal-header__link" data-ingredient="${o.ingredientId}">${o.measure||""} ${o.title}</a>
                  </li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="modal-header--bottom">
      <h3 class="modal-header__subtitle modal-header__subtitle-inst">instructions:</h3>
      <p class="modal-header__text modal-header__text-inst">${e.description}</p> 
      </div>
      <div class="modal-bottons">
      <button class="modal-btn-addfavorites" data-modal-add-cocktails data-cocktail="${e._id}">Add to favorite</button>
      <button class="modal-btn-back" data-modal-back-close aria-label="close">Back</button> 
      </div>
      `).join("");t.innerHTML=a,g.classList.remove("is-hidden")};_.addEventListener("click",k);g.addEventListener("click",n=>{n.target.classList.contains("backdrop")&&k()});async function k(){g.classList.add("is-hidden"),setTimeout(()=>{v.classList.remove("modal-ingredient"),m.style.display="none",l.style.display="block",l.innerHTML="",m.innerHTML=""},300)}async function y(){document.querySelectorAll(".modal-header__link").forEach(t=>t.addEventListener("click",a=>{a.preventDefault(),v.classList.add("modal-ingredient"),l.style.display="none";const e=a.target.dataset.ingredient,o=a.target.textContent;f(e,o),m.style.display="block"}))}const c="favoriteCocktails",s=JSON.parse(localStorage.getItem(c))??[];localStorage.getItem(c)===null&&localStorage.setItem(c,JSON.stringify([]));async function L(n){const t=document.querySelector("[data-modal-add-cocktails]"),a=o=>{const d=o.target.dataset.cocktail;if(JSON.parse(localStorage.getItem(c)).some(({_id:r})=>r===d)){t.removeEventListener("click",a),t.addEventListener("click",e);return}s.push(n[0]),localStorage.setItem(c,JSON.stringify(s)),t.textContent="Remove from favorite",t.removeEventListener("click",a),t.addEventListener("click",e)},e=o=>{const d=o.target.dataset.cocktail,i=JSON.parse(localStorage.getItem(c)).findIndex(({_id:r})=>r===d);s.splice(i,1),localStorage.setItem(c,JSON.stringify(s)),t.textContent="Add to favorite",t.removeEventListener("click",e),t.addEventListener("click",a)};t.textContent==="Add to favorite"&&t.addEventListener("click",a),t.textContent==="Remove from favorite"&&t.addEventListener("click",e)}export{k as a,s as c,I as f};
