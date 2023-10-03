import axios from 'axios';
import { BASE_URL } from '../api/api';

const backDrop = document.querySelector('#modal-cocktail');
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

    changeAddBtnValue();

    addToLocalStorage();

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

    // console.log(data[0]);
  } catch (error) {
    console.error('Error while getting ingredient:', error);
    throw error;
  }
}

// fetchIngredient(64f1d5cc69d8333cf130fc22);

const renderList = (arr, container, ingredientName) => {
  const markup = arr
    .map(
      item => `
            <h3 class="ingredient-name">${ingredientName}</h3>
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
};

const KEY_FAVORITE = 'favoriteIngredients';
const ingredientsArray = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

async function addToLocalStorage() {
  const addFavoritesBtn = document.querySelector(
    '[data-modal-add-ingredients]'
  );
  addFavoritesBtn.addEventListener('click', event => {
    const ingredientId = event.target.dataset.ingredient;
    const inStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));
    if (inStorage === null) {
      ingredientsArray.push(ingredientId);
      localStorage.setItem(KEY_FAVORITE, JSON.stringify(ingredientsArray));
      changeAddBtnValue();
      return;
    } else {
      if (inStorage.includes(ingredientId)) {
        return;
      }
    }
    ingredientsArray.push(ingredientId);
    localStorage.setItem(KEY_FAVORITE, JSON.stringify(ingredientsArray));
    changeAddBtnValue();
    // console.log(inStorage);
  });
}

async function changeAddBtnValue() {
  const addFavoritesBtn = document.querySelector(
    '[data-modal-add-ingredients]'
  );
  const btnDataId = addFavoritesBtn.dataset.ingredient;
  // const btnValue = addFavoritesBtn.textContent;
  const inStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));
  if (inStorage === null) {
    return;
  } else {
    if (inStorage.includes(btnDataId)) {
      addFavoritesBtn.textContent = 'Remove from favorite';
    }
  }

  // console.log(btnValue);
}


