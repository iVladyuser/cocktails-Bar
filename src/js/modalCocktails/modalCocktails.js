import { saveToFavorites, removeFromFavorites } from '../api/api';

const modalCocktailContent = document.querySelector('.modal-cocktail__content');
const backDrop = document.querySelector('#modal-cocktail');

function createOnClickForModal() {
  return () => {
    saveToFavorites();
    removeFromFavorites();
  };
}

function renderCocktailCard(data) {
  const ingredients = [
    data.strIngredient1,
    data.strIngredient2,
    data.strIngredient3,
    data.strIngredient4,
    data.strIngredient5,
    data.strIngredient6,
    data.strIngredient7,
    data.strIngredient8,
    data.strIngredient9,
    data.strIngredient10,
    data.strIngredient11,
    data.strIngredient12,
    data.strIngredient13,
    data.strIngredient14,
    data.strIngredient15,
  ].filter(item => item);

  const markup = `
      <div class="modal-header">
        <img class="modal-header__img" src="${data.drinkThumb}" alt="${data.drink}" loading="lazy" width="280" height="280" />
        <div class="modal-header__heading">
          <h2 class="modal-header__title">${data.drink}</h2>
          <h3 class="modal-header__subtitle">ingredients</h3>
          <p class="modal-header__text">Per cocktail</p>
          <ul class="modal-header__list">
            ${ingredients
              .map(
                item => `<li class="modal-header__item">
                    <a href="#" class="modal-header__link" data-ingredient="${item}">✶ ${item}</a>
                  </li>`
              )
              .join('')}
          </ul>
        </div>
      </div>
      <div class="modal-header--bottom">
      <h3 class="modal-header__subtitle">instructions:</h3>
      <p class="modal-header__text">${data.description}</p>
      </div>
   `;

  modalCocktailContent.innerHTML = markup;
  backDrop.classList.remove('is-hidden');
}

export { renderCocktailCard, createOnClickForModal };



// import { fetchCocktailGallery } from '../cocktailsMarkUp/cocktailsMarkUp'
// import { saveToFavorites, removeFromFavorites } from '../api/api';

// const modalCocktailContent = document.querySelector('.modal-cocktail__content');
// const backDrop = document.querySelector('#modal-cocktail');

// const onClickModal = createOnClickForModal(
//   saveToFavorites,
//   removeFromFavorites
// );


// async function renderCocktailCard() {
//   const {
//     strIngredient1,
//     strIngredient2,
//     strIngredient3,
//     strIngredient4,
//     strIngredient5,
//     strIngredient6,
//     strIngredient7,
//     strIngredient8,
//     strIngredient9,
//     strIngredient10,
//     strIngredient11,
//     strIngredient12,
//     strIngredient13,
//     strIngredient14,
//     strIngredient15,
//   } = await fetchCocktailGallery();
//   const ingredients = [
//     strIngredient1,
//     strIngredient2,
//     strIngredient3,
//     strIngredient4,
//     strIngredient5,
//     strIngredient6,
//     strIngredient7,
//     strIngredient8,
//     strIngredient9,
//     strIngredient10,
//     strIngredient11,
//     strIngredient12,
//     strIngredient13,
//     strIngredient14,
//     strIngredient15,
//   ].filter(item => item);

//   const markup = /*html*/ `
//       <div class="modal-header">
//         <img class="modal-header__img" src="${item.DrinkThumb}" alt="${item.drink}" loading="lazy" width="280" height="280" />
//         <div class="modal-header__heading">
//           <h2 class="modal-header__title">${item.drink}</h2>
//           <h3 class="modal-header__subtitle">ingredients</h3>
//           <p class="modal-header__text">Per cocktail</p>
//           <ul class="modal-header__list">
//             ${ingredients
//               .map(
//                 item =>
//                   `<li class="modal-header__item">
//                     <a href="#" class="modal-header__link" data-ingredient="${item}">✶ ${item}</a>
//                   </li>`
//               )
//               .join('')}
//           </ul>
//         </div>
//       </div>
//       <div class="modal-header--bottom">
//       <h3 class="modal-header__subtitle">instractions:</h3>
//       <p class="modal-header__text">${item.description}</p>
//       </div>
//        `;
//   modalCocktailContent.innerHTML = markup;
//   backDrop.classList.remove('is-hidden');

// }

// export { renderCocktailCard };