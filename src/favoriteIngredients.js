import { closeModal } from './js/modalCocktails/modalCocktails';
import {
  fetchIngredient,
  ingredientsArray,
} from './js/modalIngredients/modalIngredients';

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
