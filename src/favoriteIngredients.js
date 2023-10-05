import {
  fetchIngredient,
  renderList,
} from './js/modalIngredients/modalIngredients';

const modal = document.querySelector('.modal');

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
  cocktailsArray.splice(indexId, 1);
  localStorage.setItem(KEY_FAVORITE, JSON.stringify(cocktailsArray));

  const inStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));

  renderFavoriteCocktail(inStorage, favoriteCocktailList).then(() => {
    const deleteBtn = document.querySelectorAll('[data-remove-cocktails]');

    deleteBtn.forEach(btn =>
      btn.addEventListener('click', handleClickRemoveButton)
    );
  });

  const learnMoreBtnAfterRepeatRender = document.querySelectorAll(
    '[data-learnmore-cocktail]'
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

    console.log(addFavoritesBtn);
  });
};

// learnMoreBtn.forEach(btn => btn.addEventListener('click', openModal));
