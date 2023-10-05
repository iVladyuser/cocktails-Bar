import axios from 'axios';
import { BASE_URL } from '../api/api';
import { fetchIngredient } from '../modalIngredients/modalIngredients';

const backDrop = document.querySelector('#modal-cocktail');
const modal = document.querySelector('.modal');
const modalCocktailContent = document.querySelector('.modal-cocktail__content');
const modalIngredientsContent = document.querySelector(
  '.modal-ingredients__content'
);
const closeModalBtn = document.querySelector('[data-modal-close]');

export async function fetchCocktail(drinkId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/cocktails/lookup/?id=${drinkId}`
    );
    const data = response.data;

    renderCocktailList(data, modalCocktailContent);

    moveToIngredient();

    const inStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));
    const idInStorage = inStorage.some(({ _id }) => _id === drinkId);

    const addFavoritesBtn = document.querySelector(
      '[data-modal-add-cocktails]'
    );

    if (idInStorage) {
      addFavoritesBtn.textContent = 'Remove from favorite';
    }

    addToLocalStorage(data);

    const modalBtnBackClose = document.querySelector('[data-modal-back-close]');
    modalBtnBackClose.addEventListener('click', closeModal);
    // console.log(data);
  } catch (error) {
    console.error('Error while getting cocktail:', error);
    throw error;
  }
}

export const renderCocktailList = (arr, container) => {
  const markup = arr
    .map(
      item => `
      <div class="modal-header">
        <img class="modal-header__img" src="${item.drinkThumb}" alt="${
        item.drink
      }" loading="lazy" width="288" height="277" />
        <div class="modal-header__heading">
          <h2 class="modal-header__title">${item.drink}</h2>
          <h3 class="modal-header__subtitle">ingredients</h3>
          <p class="modal-header__text">Per cocktail</p>
          <ul class="modal-header__list">
            ${item.ingredients
              .map(
                item => `<li class="modal-header__item">
                    <a href="#" class="modal-header__link" data-ingredient="${
                      item.ingredientId
                    }">${item.measure || ''} ${item.title}</a>
                  </li>`
              )
              .join('')}
          </ul>
        </div>
      </div>
      <div class="modal-header--bottom">
      <h3 class="modal-header__subtitle modal-header__subtitle-inst">instructions:</h3>
      <p class="modal-header__text modal-header__text-inst">${
        item.description
      }</p> 
      </div>
      <div class="modal-bottons">
      <button class="modal-btn-addfavorites" data-modal-add-cocktails data-cocktail="${
        item._id
      }">Add to favorite</button>
      <button class="modal-btn-back" data-modal-back-close aria-label="close">Back</button> 
      </div>
      `
    )
    .join('');

  container.innerHTML = markup;
  backDrop.classList.remove('is-hidden');
};

closeModalBtn.addEventListener('click', closeModal);
backDrop.addEventListener('click', event => {
  const backdrop = event.target.classList.contains('backdrop');
  if (!backdrop) {
    return;
  }
  closeModal();
});

export async function closeModal() {
  backDrop.classList.add('is-hidden');
  setTimeout(() => {
    modal.classList.remove('modal-ingredient');
    modalIngredientsContent.style.display = 'none';
    modalCocktailContent.style.display = 'block';
    modalCocktailContent.innerHTML = '';
    modalIngredientsContent.innerHTML = '';
  }, 300);
}

async function moveToIngredient() {
  const ingredientList = document.querySelectorAll('.modal-header__link');
  ingredientList.forEach(item =>
    item.addEventListener('click', event => {
      event.preventDefault();

      modal.classList.add('modal-ingredient');

      modalCocktailContent.style.display = 'none';

      const ingredientId = event.target.dataset.ingredient;
      const ingredientName = event.target.textContent;

      fetchIngredient(ingredientId, ingredientName);

      modalIngredientsContent.style.display = 'block';
    })
  );
}

const KEY_FAVORITE = 'favoriteCocktails';
export const cocktailsArray =
  JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
if (localStorage.getItem(KEY_FAVORITE) === null) {
  localStorage.setItem(KEY_FAVORITE, JSON.stringify([]));
}

async function addToLocalStorage(data) {
  const favoritesBtn = document.querySelector('[data-modal-add-cocktails]');

  const handleClickAddButton = event => {
    const cocktailId = event.target.dataset.cocktail;
    const inStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));
    const idInStorage = inStorage.some(({ _id }) => _id === cocktailId);

    if (idInStorage) {
      favoritesBtn.removeEventListener('click', handleClickAddButton);
      favoritesBtn.addEventListener('click', handleClickRemoveButton);
      return;
    }

    cocktailsArray.push(data[0]);
    localStorage.setItem(KEY_FAVORITE, JSON.stringify(cocktailsArray));
    favoritesBtn.textContent = 'Remove from favorite';
    favoritesBtn.removeEventListener('click', handleClickAddButton);
    favoritesBtn.addEventListener('click', handleClickRemoveButton);
  };

  const handleClickRemoveButton = event => {
    const cocktailId = event.target.dataset.cocktail;
    const inStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));

    const indexId = inStorage.findIndex(({ _id }) => _id === cocktailId);
    cocktailsArray.splice(indexId, 1);
    localStorage.setItem(KEY_FAVORITE, JSON.stringify(cocktailsArray));
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
