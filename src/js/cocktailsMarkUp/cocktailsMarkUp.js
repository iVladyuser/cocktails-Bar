import axios from 'axios';

import { BASE_URL } from '../api/api';

export async function fetchCocktailGallery() {
  try {
    const url = `${BASE_URL}/cocktails/?r=8`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    renderList(data, document.getElementById('cocktail-container'));
  } catch (error) {
    console.error('Помилка при отриманні галереї:', error);
    throw error;
  }
}

fetchCocktailGallery();

const renderList = (arr, container) => {
  const markup = arr
    .map(
      item =>
        `<div class="cocktail-card">
    <img src="${item.drinkThumb}" alt"${item.drink}" width ="300"/>
        <h2 class="cocktail-title">${item.drink}</h2>
    <p class="cocktail-description">${item.description}</p>
     <div>
     <button type="button" class="card-button" href="#">Learn More</button>
     <button class="card-svg" href="#">SVG</button>
     </div></div>`
    )
    .join();
  container.insertAdjacentHTML('beforeend', markup);
};
