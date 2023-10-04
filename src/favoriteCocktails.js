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


const KEY_FAVORITE = 'favoriteCocktails';
const favoriteCocktailList = document.querySelector('.add-to-favorite-coctail-list');


const favoriteCocktail = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];


const renderFavoriteCocktail = (arr, container) => {
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
            <button class="modal-btn-favorites-learnmore" data-modal-addtofavorites-ingredients data-ingredient="${
              item._id
            }">Learn more</button>
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
     </li>`
    )
    .join('');

  container.innerHTML = markup;

};


renderFavoriteCocktail(favoriteCocktail, favoriteCocktailList)
