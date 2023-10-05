import axios from 'axios';
import { BASE_URL } from '../api/api';

const modal = document.querySelector('.modal');
const modalCocktailContent = document.querySelector('.modal-cocktail__content');
const ingredientsContentEl = document.querySelector(
  '.modal-ingredients__content'
);

export async function fetchIngredient(ingredientId, ingredientName) {
  try {
    const response = await axios.get(`${BASE_URL}/ingredients/${ingredientId}`);
    const data = response.data;

    renderList(data, ingredientsContentEl, ingredientName);

    const inStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));
    const idInStorage = inStorage.some(({ _id }) => _id === ingredientId);

    const addFavoritesBtn = document.querySelector(
      '[data-modal-add-ingredients]'
    );

    if (idInStorage) {
      addFavoritesBtn.textContent = 'Remove from favorite';
    }

    addToLocalStorage(data);

    const backButtonEl = document.querySelector(
      '[data-modal-close-ingredients]'
    );

    const handleClickBackButton = () => {
      ingredientsContentEl.style.display = 'none';
      modalCocktailContent.style.display = 'block';
      modal.classList.remove('modal-ingredient');
      backButtonEl.removeEventListener('click', handleClickBackButton);
    };
    backButtonEl.addEventListener('click', handleClickBackButton);
  } catch (error) {
    console.error('Error while getting ingredient:', error);
    throw error;
  }
}

export const renderList = (arr, container, ingredientName) => {
  const backDrop = document.querySelector('#modal-cocktail');
  const markup = arr
    .map(
      item => `
            <h3 class="ingredient-name">${ingredientName || item.title}</h3>
            <p class="ingredient-type">${item.title}</p>
            <div class="ingredient-descr-wrapper">
            <p class="ingredient-descr">${item.description}</p>
            </div>
            <ul class="ingredient-characteristic-list">
            <li class="ingredient-characteristic-item"><p class="ingredient-characteristic-descr">Type: ${
              item.type || 'Unfortunately, the data is temporarily unavailable'
            }</p></li>
            <li class="ingredient-characteristic-item"><p class="ingredient-characteristic-descr">Country of origin: ${
              item.country ||
              'Unfortunately, the data is temporarily unavailable'
            }</p></li>
            <li class="ingredient-characteristic-item"><p class="ingredient-characteristic-descr">Alcohol by volume: ${
              item.abv || 'Unfortunately, the data is temporarily unavailable'
            } %</p></li>
            <li class="ingredient-characteristic-item"><p class="ingredient-characteristic-descr">Flavour: ${
              item.flavour ||
              'Unfortunately, the data is temporarily unavailable'
            }</p></li>
            </ul>
            <div class="modal-bottons">
            <button class="modal-btn-addfavorites" data-modal-add-ingredients data-ingredient="${
              item._id
            }">Add to favorite</button>
            <button class="modal-btn-back" data-modal-close-ingredients aria-label="close">Back</button> 
            </div>
            `
    )
    .join('');

  container.innerHTML = markup;
  if (backDrop.classList.contains('is-hidden')) {
    backDrop.classList.remove('is-hidden');
  }
};

const KEY_FAVORITE = 'favoriteIngredients';
export const ingredientsArray =
  JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
if (localStorage.getItem(KEY_FAVORITE) === null) {
  localStorage.setItem(KEY_FAVORITE, JSON.stringify([]));
}

async function addToLocalStorage(data) {
  const favoritesBtn = document.querySelector('[data-modal-add-ingredients]');

  const handleClickAddButton = event => {
    const ingredientId = event.target.dataset.ingredient;
    const inStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));
    const idInStorage = inStorage.some(({ _id }) => _id === ingredientId);

    if (idInStorage) {
      favoritesBtn.removeEventListener('click', handleClickAddButton);
      favoritesBtn.addEventListener('click', handleClickRemoveButton);
      return;
    }

    ingredientsArray.push(data[0]);
    localStorage.setItem(KEY_FAVORITE, JSON.stringify(ingredientsArray));

    favoritesBtn.textContent = 'Remove from favorite';

    favoritesBtn.removeEventListener('click', handleClickAddButton);
    favoritesBtn.addEventListener('click', handleClickRemoveButton);
  };

  const handleClickRemoveButton = event => {
    const ingredientId = event.target.dataset.ingredient;
    const inStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));
    const indexId = inStorage.findIndex(({ _id }) => _id === ingredientId);

    ingredientsArray.splice(indexId, 1);
    localStorage.setItem(KEY_FAVORITE, JSON.stringify(ingredientsArray));

    favoritesBtn.textContent = 'Add to favorite';

    favoritesBtn.removeEventListener('click', handleClickRemoveButton);
    favoritesBtn.addEventListener('click', handleClickAddButton);
  };

  if (favoritesBtn.textContent === 'Add to favorite') {
    favoritesBtn.addEventListener('click', handleClickAddButton);
  }

  if (favoritesBtn.textContent === 'Remove from favorite') {
    favoritesBtn.addEventListener('click', handleClickRemoveButton);
  }
}
