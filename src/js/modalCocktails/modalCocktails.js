
import axios from 'axios';
import { BASE_URL } from '../api/api';
// import { saveToFavorites, removeFromFavorites } from '../api/api';

const modalCocktailContent = document.querySelector('.modal-cocktail__content');
const backDrop = document.querySelector('#modal-cocktail');
const closeModalBtn = document.querySelector("[data-modal-close]");
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

    console.log(data[0]);
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
      <p class="modal-header__text modal-header__text-inst">${item.description}</p> 
      </div>
      <div class="modal-bottons">
      <button class="modal-btn-addfavorites">Add to favorite</button>
      <button class="modal-btn-back" data-modal-close aria-label="close">Back</button> 
      </div>
   `
    )
    .join('');

  container.insertAdjacentHTML('afterbegin', markup);
  backDrop.classList.remove('is-hidden');
};


closeModalBtn.addEventListener("click", closeModal)

async function closeModal() {
  backDrop.classList.add('is-hidden');
  location.reload()
}


// // export { renderCocktailCard, createOnClickForModal };
