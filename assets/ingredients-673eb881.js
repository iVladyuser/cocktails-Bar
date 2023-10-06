import{s as h,i as u,d as S,a as f}from"./header-3178d01a.js";const p=document.querySelector("#modal-cocktail"),y=document.querySelector(".modal");document.querySelector(".modal-cocktail__content");const I=document.querySelector(".modal-ingredients__content"),i="favoriteIngredients",l=document.querySelector(".add-to-favorite-list"),C=JSON.parse(localStorage.getItem(i))??[],c=async(e,n)=>{const r=document.querySelector(".add-to-favorite-list");if(e.length===0)r.innerHTML=`
      <div class="block-page-hero favorite-block-page">
        <svg class="icon-rafiki" >
          <use href="${h}#icon-rafiki"></use>
        </svg>
        <p class="text-page">Sorry, we <span class="text-span">didn’t find</span> any <br>cocktail for you</p>
      </div>
    `;else{n.innerHTML="";const a=e.map(t=>`
           <li class="favorite-ingredient-item">
           <div class="favorite-ingridient-content">
            <h3 class="favorite-ingredient-name">${t.title}</h3>
            <p class="favorite-ingredient-alcohol-type">Alcoholic: ${t.alcohol}</p>
          
            <p class="favorite-ingredient-descr">${t.description}</p>
           
            <div class="modal-favorite-bottons">
            <button class="modal-btn-favorites-learnmore" data-learnmore-ingredient data-ingredient="${t._id}">Learn more</button>
            <button class="modal-btn-remove" data-remove-ingredient aria-label="remove" data-removeid="${t._id}">
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
            </li> 
            `).join("");n.innerHTML=a}},s=e=>{const n=e.target.dataset.removeid,a=JSON.parse(localStorage.getItem(i)).findIndex(({_id:o})=>o===n);u.splice(a,1),localStorage.setItem(i,JSON.stringify(u));const t=JSON.parse(localStorage.getItem(i));c(t,l).then(()=>{document.querySelectorAll("[data-remove-ingredient]").forEach(m=>m.addEventListener("click",s))}),document.querySelectorAll("[data-learnmore-ingredient]").forEach(o=>o.addEventListener("click",g))};c(C,l).then(()=>{document.querySelectorAll("[data-remove-ingredient]").forEach(n=>n.addEventListener("click",s))});const E=document.querySelectorAll("[data-learnmore-ingredient]"),g=e=>{const n=e.target.dataset.ingredient;S(n).then(()=>{const r=document.querySelector("[data-modal-add-ingredients]");p.style.display="block",I.style.display="block";const a=document.querySelector("[data-modal-close-ingredients]"),t=o=>{o.preventDefault(),p.style.display="none",f()};a.addEventListener("click",t),y.classList.add("modal-ingredient");const d=()=>{r.removeEventListener("click",d),f();const o=JSON.parse(localStorage.getItem(i))??[];c(o,l).then(()=>{document.querySelectorAll("[data-remove-ingredient]").forEach(k=>k.addEventListener("click",s))}),document.querySelectorAll("[data-learnmore-ingredient]").forEach(v=>v.addEventListener("click",g))};r.addEventListener("click",d)})};E.forEach(e=>e.addEventListener("click",g));
