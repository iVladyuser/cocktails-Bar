import axios from 'axios';
import { BASE_URL } from '../api/api';
import { fetchIngredient } from '../modalIngredients/modalIngredients';
// import { saveToFavorites, removeFromFavorites } from '../api/api';

const backDrop = document.querySelector('#modal-cocktail');
const modal = document.querySelector('.modal');
const modalCocktailContent = document.querySelector('.modal-cocktail__content');
const modalIngredientsContent = document.querySelector(
  '.modal-ingredients__content'
);
const closeModalBtn = document.querySelector('[data-modal-close]');
// backDrop.classList.remove('is-hidden');

// function createOnClickForModal() {
//   return () => {
//     saveToFavorites();
//     removeFromFavorites();
//   };
// }

export async function fetchCocktail(drinkId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/cocktails/lookup/?id=${drinkId}`
    );
    const data = response.data;

    renderCocktailList(data, modalCocktailContent);

    moveToIngredient();

    const modalBtnBackClose = document.querySelector('[data-modal-back-close]');
    modalBtnBackClose.addEventListener('click', closeModal);
  } catch (error) {
    console.error('Error while getting cocktail:', error);
    throw error;
  }
}

// fetchCocktail('639b6de9ff77d221f190c57e');

const renderCocktailList = (arr, container) => {
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
                    <a href="#" class="modal-header__link" data-ingredient="${item.ingredientId}">${item.measure} ${item.title}</a>
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
      <button class="modal-btn-addfavorites">Add to favorite</button>
      <button class="modal-btn-back" data-modal-back-close aria-label="close">Back</button> 
      </div>
   `
    )
    .join('');

  container.innerHTML = markup;
  backDrop.classList.remove('is-hidden');
};

closeModalBtn.addEventListener('click', closeModal);
backDrop.addEventListener('click', closeModal);

async function closeModal() {
  backDrop.classList.add('is-hidden');
  setTimeout(() => {
    modal.classList.remove('modal-ingredient');
    modalIngredientsContent.style.display = 'none';
    modalCocktailContent.style.display = 'block';
  }, 300);
  // location.reload()
}

async function moveToIngredient() {
  const ingredientList = document.querySelectorAll('.modal-header__link');
  ingredientList.forEach(item =>
    item.addEventListener('click', event => {
      event.preventDefault();

      modal.classList.add('modal-ingredient');

      modalCocktailContent.style.display = 'none';

      const ingredientId = event.target.dataset.ingredient;

      fetchIngredient(ingredientId);

      modalIngredientsContent.style.display = 'block';
    })
  );
}

// // export { renderCocktailCard, createOnClickForModal };
