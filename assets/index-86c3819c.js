import"./modulepreload-polyfill-ec808ebb.js";console.log(5);const n="https://drinkify.b.goit.study/api/v1";async function s(){try{const t=`${n}/cocktails/?r=8`,o=await fetch(t);if(!o.ok)throw new Error(`HTTP Error! Status: ${o.status}`);const r=await o.json();a(r,document.getElementById("cocktail-container"))}catch(t){throw console.error("Помилка при отриманні галереї:",t),t}}s();const a=(t,o)=>{const r=t.map(c=>`<div class="cocktail-card">
    <img src="${c.drinkThumb}" alt"${c.drink}" width ="300"/>
        <h2 class="cocktail-title">${c.drink}</h2>
    <p class="cocktail-description">${c.description}</p>
     <div>
     <button type="button" class="card-button" href="#">Learn More</button>
     <button class="card-svg" href="#">SVG</button>
     </div></div>`).join();o.insertAdjacentHTML("beforeend",r)};
