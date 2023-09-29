import axios from 'axios';
import { BASE_URL } from '../api/api';

const ingredientsContentEl = document.querySelector(
  '.modal-ingredients__content'
);

const modal = document.querySelector('#modal-cocktail');
modal.classList.remove('is-hidden');

async function fetchIngredient() {
  try {
    const response = await axios.get(
      `${BASE_URL}/ingredients/64aebb7f82d96cc69e0eb4a5`
    );
    const data = response.data;

    renderList(data, ingredientsContentEl);

    console.log(data);
  } catch (error) {
    console.error('Error while getting ingredient:', error);
    throw error;
  }
}

fetchIngredient();

const renderList = (arr, container) => {
  const markup = arr
    .map(
      item => `
            <h2 class="ingredient-name">${item.title}</h2>
            <p class="ingredient-type">${item.type}</p>
            <p class="ingredient-desrc">${item.description}</p>
            <ul class="ingredient-characteristic-list">
            <li class="ingredient-characteristic-item"><p>Type: </p></li>
            <li class="ingredient-characteristic-item"><p>Country of origin: ${item.country}</p></li>
            <li class="ingredient-characteristic-item"><p>Alcohol by volume: ${item.abv} %</p></li>
            <li class="ingredient-characteristic-item"><p>Flavour: ${item.flavour}</p></li>
            </ul>
            `
    )
    .join('');

  container.insertAdjacentHTML('afterbegin', markup);
};
