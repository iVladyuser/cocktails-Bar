import"./modulepreload-polyfill-ec808ebb.js";const n="https://drinkify.b.goit.study/api/v1";async function s(){try{const t=`${n}/cocktails/?r=8`,o=await fetch(t);if(!o.ok)throw new Error(`HTTP Error! Status: ${o.status}`);const c=await o.json();a(c,document.getElementById("cocktail-container"))}catch(t){throw console.error("Помилка при отриманні галереї:",t),t}}s();const a=(t,o)=>{const c=t.map(r=>`<div class="cocktail-card">
    <img src="${r.drinkThumb}" alt"${r.drink}" width ="300"/>
        <h2 class="cocktail-title">${r.drink}</h2>
    <p class="cocktail-description">${r.description}</p>
     <div>
     <button type="button" class="card-button" href="#">Learn More</button>
     <button class="card-svg" href="#">SVG</button>
     </div></div>`).join();o.insertAdjacentHTML("beforeend",c)};
