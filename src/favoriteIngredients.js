// import { fetchIngredient } from './js/modalIngredients/modalIngredients'
const KEY_FAVORITE = 'favoriteIngredients';
const favoriteIngredientsList = document.querySelector('.add-to-favorite-list');

const favoriteIngredient = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

const renderFavoriteIngridient = (arr, container) => {
  const markup = arr
    .map(
      item => `
           <li class="favorite-ingredient-item">
           <div class="favorite-ingridient-content">
            <h3 class="favorite-ingredient-name">${item.title}</h3>
            <p class="favorite-ingredient-alcohol-type">Alcoholic: ${item.alcohol}</p>
          
            <p class="favorite-ingredient-descr">${item.description}</p>
           
            <div class="modal-favorite-bottons">
            <button class="modal-btn-favorites-learnmore" data-addtofavorites-ingredients data-ingredient="${item._id}">Learn more</button>
            <button class="modal-btn-remove" data-modal-remove-ingredients aria-label="remove">
            <svg
              class="icon-trash"
              aria-label="icon-thash"
              width="18"
              height="18"
            >
            <use href="./img/sprite.svg#icon-trash-01"></use>
            </svg></button>
            </div>
            </div>
            </li> 
            `
    )
    .join('');

  container.innerHTML = markup;

  //  const favoriteLearnMoreButtons = document.querySelectorAll('.modal-btn-favorites-learnmore');
  //  favoriteLearnMoreButtons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     const ingredientId = button.getAttribute('data-ingridient');
  //     fetchIngridient(ingredientId);
  //   });
  // });
};

renderFavoriteIngridient(favoriteIngredient, favoriteIngredientsList);
