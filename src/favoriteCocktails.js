import {
  fetchCocktail,
  closeModal,
  cocktailsArray,
} from './js/modalCocktails/modalCocktails';
import spriteRafiki from '/img/sprite.svg'
const KEY_FAVORITE = 'favoriteCocktails';
const favoriteCocktailList = document.querySelector(
  '.add-to-favorite-coctail-list'
);

const favoriteCocktail = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

const renderFavoriteCocktail = async (arr, container) => {
  const newTwoContainer = document.querySelector('.add-to-favorite-list');
  if (arr.length === 0) {
    newTwoContainer.innerHTML = `
           <div class="container">
        <div class="block-page favorite-block-page">
          <svg class="icon-rafiki" >
          <use href="${spriteRafiki}#icon-rafiki"></use>
        </svg>
          <p class="text-page">
            You haven't added any <br /><span class="text-span"
              >favorite cocktails</span
            >
            yet
          </p>
        </div>
      </div>`;
  } else {
    container.innerHTML = '';
    const markup = arr
      .map(
        item => `
        <li class="favorite-cocktail-item">
        <div class="container__img" >
       <img class="favorite-cocktail-card-img" src="${item.drinkThumb}" alt="${item.drink}"/>
        </div>

     <div class="cocktail-description-container" >
     <h3 class="favorite-cocktail-name">${item.drink}</h3>
     <p class="favorite-cocktail-descr">${item.description}</p>

    <div class="modal-favorite-bottons modal-favorite-cocktail-bottons">
            <button class="modal-btn-favorites-learnmore" data-learnmore-cocktail data-cocktail="${item._id}">Learn more</button>
            <button class="modal-btn-remove" data-remove-cocktails aria-label="remove" data-removeid="${item._id}">
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
     </li>`
      )
      .join('');

    container.innerHTML = markup;
  }
};
const handleClickRemoveButton = event => {
  const cocktailId = event.target.dataset.removeid;
  const idInStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));
  const indexId = idInStorage.findIndex(({ _id }) => _id === cocktailId);
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

renderFavoriteCocktail(favoriteCocktail, favoriteCocktailList).then(() => {
  const deleteBtn = document.querySelectorAll('[data-remove-cocktails]');

  deleteBtn.forEach(btn =>
    btn.addEventListener('click', handleClickRemoveButton)
  );
});

// LEARN MORE button and modal

const learnMoreBtn = document.querySelectorAll('[data-learnmore-cocktail]');

const openModal = event => {
  const drinkId = event.target.dataset.cocktail;
  fetchCocktail(drinkId).then(() => {
    const addFavoritesBtn = document.querySelector(
      '[data-modal-add-cocktails]'
    );

    const removeAndClose = () => {
      addFavoritesBtn.removeEventListener('click', removeAndClose);

      closeModal();

      const favoriteCocktailInModal =
        JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

      renderFavoriteCocktail(
        favoriteCocktailInModal,
        favoriteCocktailList
      ).then(() => {
        const deleteBtn = document.querySelectorAll('[data-remove-cocktails]');

        deleteBtn.forEach(btn =>
          btn.addEventListener('click', handleClickRemoveButton)
        );
      });

      const learnMoreBtnAfterCloseModal = document.querySelectorAll(
        '[data-learnmore-cocktail]'
      );

      learnMoreBtnAfterCloseModal.forEach(btn =>
        btn.addEventListener('click', openModal)
      );
    };

    addFavoritesBtn.addEventListener('click', removeAndClose);
  });
};

learnMoreBtn.forEach(btn => btn.addEventListener('click', openModal));
