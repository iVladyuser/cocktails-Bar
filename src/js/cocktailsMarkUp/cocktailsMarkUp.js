import axios from 'axios';

import { BASE_URL } from '../api/api';

export async function fetchCocktailGallery() {
  try {
    const url = `${BASE_URL}/cocktails/`;

    const screenWidth = window.innerWidth;

    let cardCount = 8;
    if (screenWidth >= 1280) {
      cardCount = 9;
    }

    const response = await fetch(`${url}?r=${cardCount}`);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    renderList(data, document.querySelector('.js__cocktails__list'));
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
        `<li class="cocktail-card">
        <div class="container__img" >
       <img class="cocktail-card-img" src="${item.drinkThumb}" alt="${item.drink}" width ="300" height="260"/>
     </div>
     <div class="cocktail-description-container" >
     <h2 class="cocktail-title">${item.drink}</h2>
     <p class="cocktail-description">${item.description}</p>
     
    <ul class="cocktail-button-container"> 
    <li> <button type="button" class="card-button-learn-more">Learn More</button></li>
    <li> <button class="button-svg-heart">
     <svg
              class="icon-heart"
              aria-label="icon-heart"
              width="24"
              height="24"
            >
              <use href="../img/sprite.svg#HEART"></use>
            </svg>
     </button>
     </li>
     </ul>
     </div>
     </li>`
    )
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
};
