// import axios from 'axios';
// import Notiflix from 'notiflix';
// // import { fetchCocktail } from '../modalCocktails/modalCocktails';
// // import { saveToFavorites, removeFromFavorites } from './js/api/api'; //
// // import { renderList } from './js/hero/hero';

// document.addEventListener('DOMContentLoaded', () => {
//   // Вибираємо всі кнопки "Add to Favorites" та "Remove from Favorites"
//   const addToButtons = document.querySelectorAll('.button-svg-heart:not(.remove)');
//   const removeButtons = document.querySelectorAll('.button-svg-heart.remove');
//   const favorites = new Set(JSON.parse(localStorage.getItem('favorites')) || []);

//   function updateFavoritesInLocalStorage() {
//     localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
//   }

//   function renderFavorites() {
//     const favoritesContainer = document.querySelector('.favorites-container');
//     favoritesContainer.innerHTML = '';

//     for (const cocktailId of favorites) {
//       // Викликаємо функцію fetchCocktail з підтримкою імпортів і отримуємо дані про коктейль
//       const cocktailData = fetchCocktail(cocktailId);
//       if (cocktailData) {
//         // Створюємо карточку коктейля та додаємо її до відображення
//         const cocktailCard = createCocktailCard(cocktailData);
//         favoritesContainer.appendChild(cocktailCard);
//       }
//     }
//   }

//   function createCocktailCard(cocktailData) {
//     const cardMarkup = `
//       <div class="favorites-cocktail-card">
//         <li class="cocktail-card">
//           <div class="container__img">
//             <img class="cocktail-card-img" src="${cocktailData.drinkThumb}" alt="${cocktailData.drink}" width="300" height="260" />
//           </div>
//           <div class="cocktail-description-container">
//             <h2 class="cocktail-title">${cocktailData.drink}</h2>
//             <p class="cocktail-description">${cocktailData.description}</p>
//             <ul class="cocktail-button-container">
//               <button type="button" class="card-button-learn-more" data-drink="${cocktailData._id}">Learn More</button>
//               <li>
//                 <button class="button-svg-heart remove" data-drink="${cocktailData._id}">
//                   <svg
//                     class="icon-heart"
//                     aria-label="icon-heart"
//                     width="24"
//                     height="24"
//                   >
//                     <path d="M15.6306 3.4574C15.2475 3.07416 14.7927 2.77014 14.2921 2.56272C13.7915 2.3553 13.2549 2.24854 12.7131 2.24854C12.1712 2.24854 11.6347 2.3553 11.1341 2.56272C10.6335 2.77014 10.1786 3.07416 9.79558 3.4574L9.00058 4.2524L8.20558 3.4574C7.43181 2.68364 6.38235 2.24894 5.28808 2.24894C4.1938 2.24894 3.14435 2.68364 2.37058 3.4574C1.59681 4.23117 1.16211 5.28063 1.16211 6.3749C1.16211 7.46918 1.59681 8.51864 2.37058 9.2924L3.16558 10.0874L9.00058 15.9224L14.8356 10.0874L15.6306 9.2924C16.0138 8.90934 16.3178 8.45451 16.5253 7.95392C16.7327 7.45333 16.8394 6.91677 16.8394 6.3749C16.8394 5.83304 16.7327 5.29648 16.5253 4.79589C16.3178 4.29529 16.0138 3.84047 15.6306 3.4574Z" stroke="#FDFDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                   </svg>
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </li>
//       </div>`;

//     const cardContainer = document.createElement('div');
//     cardContainer.innerHTML = cardMarkup;

//     // Додаємо обробники подій для кнопок "Remove" на карточці
//     const removeButton = cardContainer.querySelector('.button-svg-heart.remove');
//     removeButton.addEventListener('click', () => {
//       const cocktailId = removeButton.getAttribute('data-drink');
//       removeFromFavorites(cocktailId, removeButton);
//     });

//     return cardContainer.firstElementChild;
//   }

//   function addToFavorites(cocktailId, button) {
//     if (favorites.has(cocktailId)) {
//       removeFromFavorites(cocktailId, button);
//     } else {
//       favorites.add(cocktailId);
//       button.querySelector('use').setAttribute('href', 'icon-heart-filled.svg');
//       updateFavoritesInLocalStorage();
//       renderFavorites();

//       // Відображаємо сповіщення про додавання коктейля
//       Notiflix.Notify.Success('Коктейль додано до улюблених!');
//     }
//   }

//   function removeFromFavorites(cocktailId, button) {
//     favorites.delete(cocktailId);
//     button.querySelector('use').setAttribute('href', 'icon-heart-empty.svg');
//     updateFavoritesInLocalStorage();
//     renderFavorites();

//     // Відображаємо сповіщення про видалення коктейля
//     Notiflix.Notify.Warning('Коктейль видалено з улюблених.');
//   }

//   // Додаємо обробники подій для кнопок "Add to Favorites"
//   addToButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const cocktailId = button.getAttribute('data-drink');
//       if (favorites.has(cocktailId)) {
//         removeFromFavorites(cocktailId, button);
//       } else {
//         addToFavorites(cocktailId, button);
//       }
//     });
//   });

//   // Відображення улюблених коктейлів при завантаженні сторінки
//   window.addEventListener('DOMContentLoaded', () => {
//     renderFavorites();
//   });
// });

import {
  fetchCocktail,
  closeModal,
  cocktailsArray,
} from './js/modalCocktails/modalCocktails';

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
          <use href="./img/sprite.svg#icon-rafiki"></use>
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
