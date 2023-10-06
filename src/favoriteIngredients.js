import { closeModal } from './js/modalCocktails/modalCocktails';
import {
  fetchIngredient,
  ingredientsArray,
} from './js/modalIngredients/modalIngredients';
import spriteRafiki from '/img/sprite.svg'
const backDrop = document.querySelector('#modal-cocktail');
const modal = document.querySelector('.modal');
const modalCocktailContent = document.querySelector('.modal-cocktail__content');
const modalIngredientsContent = document.querySelector(
  '.modal-ingredients__content'
);

const KEY_FAVORITE = 'favoriteIngredients';
const favoriteIngredientsList = document.querySelector('.add-to-favorite-list');

const favoriteIngredient = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

const renderFavoriteIngridient = async (arr, container) => {
  const newContainer = document.querySelector('.add-to-favorite-list');
  if (arr.length === 0) {
    newContainer.innerHTML = `
      <div class="block-page-hero favorite-block-page">
        <svg class="icon-rafiki" >
          <use href="${spriteRafiki}#icon-rafiki"></use>
        </svg>
        <p class="text-page">Sorry, we <span class="text-span">didn’t find</span> any <br>cocktail for you</p>
      </div>
    `;
  } else {
    container.innerHTML = '';
    const markup = arr
      .map(
        item => `
           <li class="favorite-ingredient-item">
           <div class="favorite-ingridient-content">
            <h3 class="favorite-ingredient-name">${item.title}</h3>
            <p class="favorite-ingredient-alcohol-type">Alcoholic: ${item.alcohol}</p>
          
            <p class="favorite-ingredient-descr">${item.description}</p>
           
            <div class="modal-favorite-bottons">
            <button class="modal-btn-favorites-learnmore" data-learnmore-ingredient data-ingredient="${item._id}">Learn more</button>
            <button class="modal-btn-remove" data-remove-ingredient aria-label="remove" data-removeid="${item._id}">
            <svg
              class="icon-trash"
              aria-label="icon-thash"
              width="24"
              height="24"
            >
            <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" fill="none" stroke="#FDFDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
  }
};
const handleClickRemoveButton = event => {
  const ingredientId = event.target.dataset.removeid;
  const idInStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));
  const indexId = idInStorage.findIndex(({ _id }) => _id === ingredientId);
  ingredientsArray.splice(indexId, 1);
  localStorage.setItem(KEY_FAVORITE, JSON.stringify(ingredientsArray));

  const inStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));

  renderFavoriteIngridient(inStorage, favoriteIngredientsList).then(() => {
    const deleteBtn = document.querySelectorAll('[data-remove-ingredient]');

    deleteBtn.forEach(btn =>
      btn.addEventListener('click', handleClickRemoveButton)
    );
  });

  const learnMoreBtnAfterRepeatRender = document.querySelectorAll(
    '[data-learnmore-ingredient]'
  );

  learnMoreBtnAfterRepeatRender.forEach(btn =>
    btn.addEventListener('click', openModal)
  );
};

renderFavoriteIngridient(favoriteIngredient, favoriteIngredientsList).then(
  () => {
    const deleteBtn = document.querySelectorAll('[data-remove-ingredient]');

    deleteBtn.forEach(btn =>
      btn.addEventListener('click', handleClickRemoveButton)
    );
  }
);

// LEARN MORE button and modal

const learnMoreBtn = document.querySelectorAll('[data-learnmore-ingredient]');

const openModal = event => {
  const drinkId = event.target.dataset.ingredient;
  fetchIngredient(drinkId).then(() => {
    const addFavoritesBtn = document.querySelector(
      '[data-modal-add-ingredients]'
    );

    backDrop.style.display = 'block';
    modalIngredientsContent.style.display = 'block';

    const backButtonEl = document.querySelector(
      '[data-modal-close-ingredients]'
    );

    const handleClickBackButton = event => {
      event.preventDefault();
      backDrop.style.display = 'none';
      closeModal();
    };

    backButtonEl.addEventListener('click', handleClickBackButton);

    modal.classList.add('modal-ingredient');

    const removeAndClose = () => {
      addFavoritesBtn.removeEventListener('click', removeAndClose);

      closeModal();

      const favoriteIngredientInModal =
        JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

      renderFavoriteIngridient(
        favoriteIngredientInModal,
        favoriteIngredientsList
      ).then(() => {
        const deleteBtn = document.querySelectorAll('[data-remove-ingredient]');

        deleteBtn.forEach(btn =>
          btn.addEventListener('click', handleClickRemoveButton)
        );
      });

      const learnMoreBtnAfterCloseModal = document.querySelectorAll(
        '[data-learnmore-ingredient]'
      );

      learnMoreBtnAfterCloseModal.forEach(btn =>
        btn.addEventListener('click', openModal)
      );
    };

    addFavoritesBtn.addEventListener('click', removeAndClose);
  });
};

learnMoreBtn.forEach(btn => btn.addEventListener('click', openModal));
