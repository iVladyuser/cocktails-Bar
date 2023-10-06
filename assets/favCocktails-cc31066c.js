import{s as f,c as k,f as u,a as g}from"./header-3178d01a.js";const r="favoriteCocktails",i=document.querySelector(".add-to-favorite-coctail-list"),h=JSON.parse(localStorage.getItem(r))??[],s=async(t,a)=>{const n=document.querySelector(".add-to-favorite-list");if(t.length===0)n.innerHTML=`
           <div class="container">
        <div class="block-page favorite-block-page">
          <svg class="icon-rafiki" >
          <use href="${f}#icon-rafiki"></use>
        </svg>
          <p class="text-page">
            You haven't added any <br /><span class="text-span"
              >favorite cocktails</span
            >
            yet
          </p>
        </div>
      </div>`;else{a.innerHTML="";const c=t.map(e=>`
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
              width="24"
              height="24"
            >
            <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" fill="none" stroke="#FDFDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></button>
            </div> 
     </div>
     </li>`).join("");a.innerHTML=c}},d=t=>{const a=t.target.dataset.removeid,c=JSON.parse(localStorage.getItem(r)).findIndex(({_id:o})=>o===a);k.splice(c,1),localStorage.setItem(r,JSON.stringify(k));const e=JSON.parse(localStorage.getItem(r));s(e,i).then(()=>{document.querySelectorAll("[data-remove-cocktails]").forEach(l=>l.addEventListener("click",d))}),document.querySelectorAll("[data-learnmore-cocktail]").forEach(o=>o.addEventListener("click",v))};s(h,i).then(()=>{document.querySelectorAll("[data-remove-cocktails]").forEach(a=>a.addEventListener("click",d))});const p=document.querySelectorAll("[data-learnmore-cocktail]"),v=t=>{const a=t.target.dataset.cocktail;u(a).then(()=>{const n=document.querySelector("[data-modal-add-cocktails]"),c=()=>{n.removeEventListener("click",c),g();const e=JSON.parse(localStorage.getItem(r))??[];s(e,i).then(()=>{document.querySelectorAll("[data-remove-cocktails]").forEach(l=>l.addEventListener("click",d))}),document.querySelectorAll("[data-learnmore-cocktail]").forEach(o=>o.addEventListener("click",v))};n.addEventListener("click",c)})};p.forEach(t=>t.addEventListener("click",v));
