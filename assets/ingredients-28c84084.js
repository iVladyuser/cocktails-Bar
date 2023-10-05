import"./header-7f04e61d.js";const o="favoriteIngredients",n=document.querySelector(".add-to-favorite-list"),r=JSON.parse(localStorage.getItem(o))??[],s=(t,i)=>{const a=t.map(e=>`
           <li class="favorite-ingredient-item">
           <div class="favorite-ingridient-content">
            <h3 class="favorite-ingredient-name">${e.title}</h3>
            <p class="favorite-ingredient-alcohol-type">Alcoholic: ${e.alcohol}</p>
          
            <p class="favorite-ingredient-descr">${e.description}</p>
           
            <div class="modal-favorite-bottons">
            <button class="modal-btn-favorites-learnmore" data-modal-addtofavorites-ingredients data-ingredient="${e._id}">Learn more</button>
            <button class="modal-btn-remove" data-modal-remove-ingredients aria-label="remove">
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
            `).join("");i.innerHTML=a};s(r,n);
