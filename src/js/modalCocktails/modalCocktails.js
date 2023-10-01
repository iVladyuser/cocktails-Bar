// // import { saveToFavorites, removeFromFavorites } from '../api/api';

// // const modalCocktailContent = document.querySelector('.modal-cocktail__content');
// // const backDrop = document.querySelector('#modal-cocktail');

// // function createOnClickForModal() {
// //   return () => {
// //     saveToFavorites();
// //     removeFromFavorites();
// //   };
// // }

// function renderCocktailCard(data) {
//   const ingredients = [
//     data.strIngredient1,
//     data.strIngredient2,
//     data.strIngredient3,
//     data.strIngredient4,
//     data.strIngredient5,
//     data.strIngredient6,
//     data.strIngredient7,
//     data.strIngredient8,
//     data.strIngredient9,
//     data.strIngredient10,
//     data.strIngredient11,
//     data.strIngredient12,
//     data.strIngredient13,
//     data.strIngredient14,
//     data.strIngredient15,
//   ].filter(item => item);

//   const markup = `
//       <div class="modal-header">
//         <img class="modal-header__img" src="${data.drinkThumb}" alt="${
//     data.drink
//   }" loading="lazy" width="280" height="280" />
//         <div class="modal-header__heading">
//           <h2 class="modal-header__title">${data.drink}</h2>
//           <h3 class="modal-header__subtitle">ingredients</h3>
//           <p class="modal-header__text">Per cocktail</p>
//           <ul class="modal-header__list">
//             ${ingredients
//               .map(
//                 item => `<li class="modal-header__item">
//                     <a href="#" class="modal-header__link" data-ingredient="${item}">✶ ${item}</a>
//                   </li>`
//               )
//               .join('')}
//           </ul>
//         </div>
//       </div>
//       <div class="modal-header--bottom">
//       <h3 class="modal-header__subtitle">instructions:</h3>
//       <p class="modal-header__text">${data.description}</p>
//       </div>
//    `;

//   modalCocktailContent.innerHTML = markup;
//   backDrop.classList.remove('is-hidden');
// }

// export { renderCocktailCard, createOnClickForModal };

import axios from 'axios';
import { BASE_URL } from '../api/api';
import { saveToFavorites, removeFromFavorites } from '../api/api';
import { fetchIngredient } from '../modalIngredients/modalIngredients';

const modalCocktailContent = document.querySelector('.modal-cocktail__content');
const backDrop = document.querySelector('#modal-cocktail');
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

    // console.log(data[0]);
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
      }" loading="lazy" width="280" height="280" />
        <div class="modal-header__heading">
          <h2 class="modal-header__title">${item.drink}</h2>
          <h3 class="modal-header__subtitle">ingredients</h3>
          <p class="modal-header__text">Per cocktail</p>
          <ul class="modal-header__list">
            ${item.ingredients
              .map(
                item => `<li class="modal-header__item">
                    <a href="#" class="modal-header__link" data-ingredient="${item.ingredientId}">${item.title}</a>
                  </li>`
              )
              .join('')}
          </ul>
        </div>
      </div>
      <div class="modal-header--bottom">
      <h3 class="modal-header__subtitle">instructions:</h3>
      <p class="modal-header__text">${item.description}</p>
      </div>
   `
    )
    .join('');

  container.insertAdjacentHTML('afterbegin', markup);
  backDrop.classList.remove('is-hidden');
};

// // export { renderCocktailCard, createOnClickForModal };

function moveToIngredient() {
  const ingredientList = document.querySelectorAll('.modal-header__link');
  const ingredientLink = ingredientList.forEach(item =>
    item.addEventListener('click', event => {
      const ingredientId = event.target.dataset.ingredient;

      fetchIngredient(ingredientId);
    })
  );
}
