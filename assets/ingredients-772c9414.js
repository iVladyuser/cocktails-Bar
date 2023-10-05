import{f as v}from"./header-5dddfabb.js";const f=document.querySelector(".modal"),a="favoriteIngredients",c=document.querySelector(".add-to-favorite-list"),u=JSON.parse(localStorage.getItem(a))??[],s=(o,t)=>{const r=o.map(e=>`
           <li class="favorite-ingredient-item">
           <div class="favorite-ingridient-content">
            <h3 class="favorite-ingredient-name">${e.title}</h3>
            <p class="favorite-ingredient-alcohol-type">Alcoholic: ${e.alcohol}</p>
          
            <p class="favorite-ingredient-descr">${e.description}</p>
           
            <div class="modal-favorite-bottons">
            <button class="modal-btn-favorites-learnmore" data-learnmore-ingredient data-ingredient="${e._id}">Learn more</button>
            <button class="modal-btn-remove" data-remove-ingredient aria-label="remove" data-removeid="${e._id}">
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
            </li> 
            `).join("");t.innerHTML=r},l=o=>{const t=o.target.dataset.removeid,e=JSON.parse(localStorage.getItem(a)).findIndex(({_id:n})=>n===t);cocktailsArray.splice(e,1),localStorage.setItem(a,JSON.stringify(cocktailsArray));const i=JSON.parse(localStorage.getItem(a));renderFavoriteCocktail(i,favoriteCocktailList).then(()=>{document.querySelectorAll("[data-remove-cocktails]").forEach(d=>d.addEventListener("click",l))}),document.querySelectorAll("[data-learnmore-cocktail]").forEach(n=>n.addEventListener("click",g))};s(u,c).then(()=>{document.querySelectorAll("[data-remove-ingredient]").forEach(t=>t.addEventListener("click",l))});document.querySelectorAll("[data-learnmore-ingredient]");const g=o=>{const t=o.target.dataset.ingredient;v(t).then(()=>{const r=document.querySelector("[data-modal-add-ingredients]");f.classList.add("modal-ingredient");const e=()=>{r.removeEventListener("click",e),closeModal();const i=JSON.parse(localStorage.getItem(a))??[];s(i,c).then(()=>{document.querySelectorAll("[data-remove-ingredient]").forEach(d=>d.addEventListener("click",l))}),document.querySelectorAll("[data-learnmore-ingredient]").forEach(n=>n.addEventListener("click",g))};r.addEventListener("click",e),console.log(r)})};
