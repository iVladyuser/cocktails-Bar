import{i as u,d as k,a as f}from"./header-69b8a56e.js";const h=document.querySelector("#modal-cocktail"),p=document.querySelector(".modal");document.querySelector(".modal-cocktail__content");const y=document.querySelector(".modal-ingredients__content"),a="favoriteIngredients",l=document.querySelector(".add-to-favorite-list"),I=JSON.parse(localStorage.getItem(a))??[],c=async(t,o)=>{const r=t.map(e=>`
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
              width="24"
              height="24"
            >
            <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" fill="none" stroke="#FDFDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></button>
            </div>
            </div>
            </li> 
            `).join("");o.innerHTML=r},s=t=>{const o=t.target.dataset.removeid,e=JSON.parse(localStorage.getItem(a)).findIndex(({_id:n})=>n===o);u.splice(e,1),localStorage.setItem(a,JSON.stringify(u));const d=JSON.parse(localStorage.getItem(a));c(d,l).then(()=>{document.querySelectorAll("[data-remove-ingredient]").forEach(g=>g.addEventListener("click",s))}),document.querySelectorAll("[data-learnmore-ingredient]").forEach(n=>n.addEventListener("click",m))};c(I,l).then(()=>{document.querySelectorAll("[data-remove-ingredient]").forEach(o=>o.addEventListener("click",s))});const C=document.querySelectorAll("[data-learnmore-ingredient]"),m=t=>{const o=t.target.dataset.ingredient;k(o).then(()=>{const r=document.querySelector("[data-modal-add-ingredients]");h.style.display="block",y.style.display="block";const e=document.querySelector("[data-modal-close-ingredients]"),d=n=>{n.preventDefault(),h.style.display="none",f()};e.addEventListener("click",d),p.classList.add("modal-ingredient");const i=()=>{r.removeEventListener("click",i),f();const n=JSON.parse(localStorage.getItem(a))??[];c(n,l).then(()=>{document.querySelectorAll("[data-remove-ingredient]").forEach(S=>S.addEventListener("click",s))}),document.querySelectorAll("[data-learnmore-ingredient]").forEach(v=>v.addEventListener("click",m))};r.addEventListener("click",i)})};C.forEach(t=>t.addEventListener("click",m));
