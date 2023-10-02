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
            <p class="ingredient-descr">${item.description}</p>
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
            `
    )
    .join('');

  container.innerHTML = markup;
};

// import axios from 'axios';
// import { BASE_URL } from '../api/api';
// import { saveToFavorites, removeFromFavorites } from '../api/api';
// import { fetchIngredient } from '../modalIngredients/modalIngredients';

// const modalCocktailContent = document.querySelector('.modal-cocktail__content');
// const backDrop = document.querySelector('#modal-cocktail');
// // backDrop.classList.remove('is-hidden');

// // function createOnClickForModal() {
// //   return () => {
// //     saveToFavorites();
// //     removeFromFavorites();
// //   };
// // }

// export async function fetchCocktail(drinkId) {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}/cocktails/lookup/?id=${drinkId}`
//     );
//     const data = response.data;

//     renderCocktailList(data, modalCocktailContent);

//     moveToIngredient();

//     // console.log(data[0]);
//   } catch (error) {
//     console.error('Error while getting cocktail:', error);
//     throw error;
//   }
// }

// // fetchCocktail('639b6de9ff77d221f190c57e');

// const renderCocktailList = (arr, container) => {
//   const markup = arr
//     .map(
//       item => `
//       <div class="modal-header">
//         <img class="modal-header__img" src="${item.drinkThumb}" alt="${
//         item.drink
//       }" loading="lazy" width="280" height="280" />
//         <div class="modal-header__heading">
//           <h2 class="modal-header__title">${item.drink}</h2>
//           <h3 class="modal-header__subtitle">ingredients</h3>
//           <p class="modal-header__text">Per cocktail</p>
//           <ul class="modal-header__list">
//             ${item.ingredients
//               .map(
//                 item => `<li class="modal-header__item">
//                     <a href="#" class="modal-header__link" data-ingredient="${item.ingredientId}">${item.title}</a>
//                   </li>`
//               )
//               .join('')}
//           </ul>
//         </div>
//       </div>
//       <div class="modal-header--bottom">
//       <h3 class="modal-header__subtitle">instructions:</h3>
//       <p class="modal-header__text">${item.description}</p>
//       </div>
//    `
//     )
//     .join('');

//   container.insertAdjacentHTML('afterbegin', markup);
//   backDrop.classList.remove('is-hidden');
// };

// // // export { renderCocktailCard, createOnClickForModal };

// function moveToIngredient() {
//   const ingredientList = document.querySelectorAll('.modal-header__link');
//   const ingredientLink = ingredientList.forEach(item =>
//     item.addEventListener('click', event => {
//       const ingredientId = event.target.dataset.ingredient;

//       fetchIngredient(ingredientId);
//     })
//   );
// }
