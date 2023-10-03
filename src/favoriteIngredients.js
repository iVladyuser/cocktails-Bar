// const KEY_FAVORITE = 'favoriteIngredients';
// const favoriteIngredientsList = document.querySelector('.add-to-favorite-list');

// const favoriteIngredient = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

// const renderFavoriteIngridient = (arr, container) => {
//   const markup = arr
//     .map(
//       item => `
//             <h3 class="ingredient-name">${ingredientName}</h3>
//             <p class="ingredient-alcohol-type">Alcohol:${item.alcohol}</p>
//             <div class="ingredient-descr-wrapper">
//             <p class="ingredient-descr">${item.description}</p>
//             </div>
//             <div class="modal-favorite-bottons">
//             <button class="modal-btn-favorites-learnmore" data-modal-addtofavorites-ingredients data-ingredient="${
//               item._id
//             }">Learn more</button>
//             <button class="modal-btn-remove" data-modal-remove-ingredients aria-label="remove">remove</button> 
//             </div>
//             `
//     )
//     .join('');

//   container.innerHTML = markup;
// };

// renderFavoriteIngridient(favoriteIngredient, favoriteIngredientsList)