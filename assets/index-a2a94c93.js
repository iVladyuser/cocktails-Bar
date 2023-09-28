import"./modulepreload-polyfill-ec808ebb.js";const c=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,49,50,51,52,53,54,55,56,57,48];function n(){let t="";for(let e=0;e<c.length;e++)t+='<button type="button"  class="keyboard-letter" data="'+c[e]+'" >'+String.fromCharCode(c[e])+"</button>";document.querySelector("#keyboard").innerHTML=t}n();document.querySelectorAll("#keyboard .keyboard-letter").forEach(function(t){t.onclick=function(e){document.querySelectorAll("#keyboard .keyboard-letter").forEach(function(o){o.classList.remove("active")}),this.getAttribute("data"),this.classList.add("active")}});const a=document.querySelector(".search"),s=document.querySelector('[data="'+c[i]+'"]');s.addEventListener("click",()=>{a.focus()});const d="https://drinkify.b.goit.study/api/v1";async function l(){try{const t=`${d}/cocktails/?r=8`,e=await fetch(t);if(!e.ok)throw new Error(`HTTP Error! Status: ${e.status}`);const o=await e.json();u(o,document.getElementById("cocktail-container"))}catch(t){throw console.error("Помилка при отриманні галереї:",t),t}}l();const u=(t,e)=>{const o=t.map(r=>`<div class="cocktail-card">
    <img src="${r.drinkThumb}" alt"${r.drink}" width ="300"/>
        <h2 class="cocktail-title">${r.drink}</h2>
    <p class="cocktail-description">${r.description}</p>
     <div>
     <button type="button" class="card-button" href="#">Learn More</button>
     <button class="card-svg" href="#">SVG</button>
     </div></div>`).join();e.insertAdjacentHTML("beforeend",o)};
