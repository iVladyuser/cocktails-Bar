import axios from 'axios';
import { BASE_URL } from '../api/api';

const ingredientsContentEl = document.querySelector(
  '.modal-ingredients__content'
);
const ingredientLink = document.querySelector('.modal-header__link');
// ingredientLink.addEventListener('click', console.log('hi'));

const backDrop = document.querySelector('#modal-cocktail');
const modal = document.querySelector('.modal');
// modal.addEventListener('click', event => {
//   if (event.currentTarget === event.target) {
//     return;
//   }
//   document.querySelectorAll('.modal-header__link').forEach(item => {
//     console.log(item);
//   });
// });
// backDrop.classList.remove('is-hidden');

export async function fetchIngredient(ingredientId) {
  try {
    const response = await axios.get(`${BASE_URL}/ingredients/${ingredientId}`);
    const data = response.data;

    renderList(data, ingredientsContentEl);

    console.log(data[0]);
  } catch (error) {
    console.error('Error while getting ingredient:', error);
    throw error;
  }
}

// fetchIngredient(64aebb7f82d96cc69e0eb4a5);

const renderList = (arr, container) => {
  const markup = arr
    .map(
      item => `
            <h3 class="ingredient-name">${item.title}</h3>
            <p class="ingredient-type">${item.type}</p>
            <div class="ingredient-descr-wrapper">
            <p class="ingredient-descr">${item.description}</p>
            </div>
            <ul class="ingredient-characteristic-list">
            <li class="ingredient-characteristic-item"><p class="ingredient-characteristic-descr">Type: ${
              item.type || 'Нажаль дані тимчасово відсутні'
            }</p></li>
            <li class="ingredient-characteristic-item"><p class="ingredient-characteristic-descr">Country of origin: ${
              item.country || 'Нажаль дані тимчасово відсутні'
            }</p></li>
            <li class="ingredient-characteristic-item"><p class="ingredient-characteristic-descr">Alcohol by volume: ${
              item.abv || 'Нажаль дані тимчасово відсутні'
            } %</p></li>
            <li class="ingredient-characteristic-item"><p class="ingredient-characteristic-descr">Flavour: ${
              item.flavour || 'Нажаль дані тимчасово відсутні'
            }</p></li>
            </ul>
            <div class="modal-bottons">
            <button class="modal-btn-addfavorites" data-modal-add-ingredients>Add to favorite</button>
            <button class="modal-btn-back" data-modal-close-ingredients aria-label="close">Back</button> 
            </div>
            `
    )
    .join('');

  container.innerHTML = markup;
};
