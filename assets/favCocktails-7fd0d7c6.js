import"./header-7f04e61d.js";import{c as v,f,a as u}from"./modalCocktails-bea66942.js";const r="favoriteCocktails",i=document.querySelector(".add-to-favorite-coctail-list"),g=JSON.parse(localStorage.getItem(r))??[],s=async(t,o)=>{const c=t.map(e=>`
        <li class="favorite-cocktail-item">
        <div class="container__img" >
       <img class="favorite-cocktail-card-img" src="${e.drinkThumb}" alt="${e.drink}"/>
        </div>

     <div class="cocktail-description-container" >
     <h3 class="favorite-cocktail-name">${e.drink}</h3>
     <p class="favorite-cocktail-descr">${e.description}</p>

    <div class="modal-favorite-bottons modal-favorite-cocktail-bottons">
            <button class="modal-btn-favorites-learnmore" data-learnmore-cocktail data-cocktail="${e._id}">Learn more</button>
            <button class="modal-btn-remove" data-remove-cocktails aria-label="remove" data-removeid="${e._id}">
            <svg
              class="icon-trash"
              aria-label="icon-thash"
              width="18"
              height="18"
            >
            <use href="./img/sprite.svg#icon-trash-01"></use>
            </svg></button>
            </div> 
     </div>
     </li>`).join("");o.innerHTML=c},d=t=>{const o=t.target.dataset.removeid,e=JSON.parse(localStorage.getItem(r)).findIndex(({_id:a})=>a===o);v.splice(e,1),localStorage.setItem(r,JSON.stringify(v));const n=JSON.parse(localStorage.getItem(r));s(n,i).then(()=>{document.querySelectorAll("[data-remove-cocktails]").forEach(l=>l.addEventListener("click",d))}),document.querySelectorAll(".modal-btn-favorites-learnmore").forEach(a=>a.addEventListener("click",m))};s(g,i).then(()=>{document.querySelectorAll("[data-remove-cocktails]").forEach(o=>o.addEventListener("click",d))});const h=document.querySelectorAll(".modal-btn-favorites-learnmore"),m=t=>{const o=t.target.dataset.cocktail;f(o).then(()=>{const c=document.querySelector("[data-modal-add-cocktails]"),e=()=>{c.removeEventListener("click",e),u();const n=JSON.parse(localStorage.getItem(r))??[];s(n,i).then(()=>{document.querySelectorAll("[data-remove-cocktails]").forEach(l=>l.addEventListener("click",d))}),document.querySelectorAll(".modal-btn-favorites-learnmore").forEach(a=>a.addEventListener("click",m))};c.addEventListener("click",e)})};h.forEach(t=>t.addEventListener("click",m));
