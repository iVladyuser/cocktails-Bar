import"./styles-b4a6ebbf.js";const e="favoriteCocktails",r=document.querySelector(".add-to-favorite-coctail-list"),s=JSON.parse(localStorage.getItem(e))??[],c=(t,o)=>{const i=t.map(a=>`
        <li class="favorite-cocktail-item">
        <div class="container__img" >
       <img class="favorite-cocktail-card-img" src="${a.drinkThumb}" alt="${a.drink}"/>
        </div>

     <div class="cocktail-description-container" >
     <h3 class="favorite-cocktail-name">${a.drink}</h3>
     <p class="favorite-cocktail-descr">${a.description}</p>

    <div class="modal-favorite-bottons modal-favorite-cocktail-bottons">
            <button class="modal-btn-favorites-learnmore" data-modal-addtofavorites-ingredients data-ingredient="${a._id}">Learn more</button>
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
     </li>`).join("");o.innerHTML=i};c(s,r);
