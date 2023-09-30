import axios from 'axios';
import { BASE_URL } from '../api/api';

const modalCocktailContent = document.querySelector('.modal-cocktail__content');
const modalCocktail = document.querySelector('#modal-cocktail');
// modalCocktail.classList.remove('is-hidden');

async function fetchCocktail() {
  try {
    const response = await axios.get(
      `${BASE_URL}/cocktails/lookup/?id=639b6de9ff77d221f190c57e`
    );
    const data = response.data;

    renderCocktailList(data, modalCocktailContent);

    console.log(data[0]);
  } catch (error) {
    console.error('Error while getting cocktail:', error);
    throw error;
  }
}

// fetchCocktail();

const renderCocktailList = (arr, container) => {
  const markup = /*html*/ arr
    .map(
      item => `
      <div class="modal-header">
        <img class="modal-header__img" src="${item.drinkThumb}" alt="${item.drink}" loading="lazy" width="280" height="280" />
        <div class="modal-header__heading">
          <h2 class="modal-header__title">${item.drink}</h2>
          <h3 class="modal-header__subtitle">Ingredients</h3>
          <p class="modal-header__text">Per cocktail</p>
          <ul class="modal-header__list">
            ${ingredients
          .map(
            item =>
              `<li class="modal-header__item">
                    <a href="#" class="modal-header__link" data-ingredient="${item.title}">✶ ${item.title}</a>
                  </li>`
          )
          .join('')}
          </ul>
        </div>
      </div>
      <div class="modal-header--bottom">
      <h3 class="modal-header__subtitle">Instractions:</h3>
      <p class="modal-header__text">${item.description}</p>
      </div>
       `
    )
    .join('');

  container.insertAdjacentHTML('afterbegin', markup);
              
};

