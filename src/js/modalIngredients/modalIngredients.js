import { BASE_URL } from '../api/api';

const ingredientsContentEl = document.querySelector(
  '.modal-ingredients__content'
);

async function fetchIngredient() {
  try {
    const url = `${BASE_URL}/ingredients`;

    const response = await fetch(`${url}/64aebb7f82d96cc69e0eb4a5`)
      .then(response => response.json())
      .then(value => {
        return value;
      })
      .catch(error => new Error(`HTTP Error! Status: ${response.status}`));

    renderList(response, ingredientsContentEl);

    // console.log(response[0]);
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
            <h2 class="ingredient-name>${item.title}</h2>
            <p class="ingredient-type">${item.type}</p>
            <p class="ingredient-desrc">${item.description}</p>
            `
    )
    .join('');

  container.insertAdjacentHTML('afterbegin', markup);
};
