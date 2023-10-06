import axios from 'axios';
import { BASE_URL } from '../api/api';
import { fetchCocktail } from '../modalCocktails/modalCocktails';
import { cocktailsArray } from '../modalCocktails/modalCocktails';
// import { favorites } from '../api/api';

const KEY_FAVORITE = 'favoriteCocktails';

export async function fetchCocktailGallery() {
  try {
    const url = `${BASE_URL}/cocktails/`;

    const screenWidth = window.innerWidth;

    let cardCount = 8;
    if (screenWidth >= 1280) {
      cardCount = 9;
    }

    const response = await axios.get(url, { params: { r: cardCount } });

    if (response.status !== 200) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    renderList(response.data, document.querySelector('.js__cocktails__list'));
  } catch (error) {
    console.error('Помилка при отриманні галереї:', error);
    throw error;
  }
}

export function renderList(arr, container) {
  const markup = arr
    .map(
      item =>
        `<li class="cocktail-card">
        <div class="container__img" >
       <img class="cocktail-card-img" src="${item.drinkThumb}" alt="${item.drink}"
       loading="lazy"
        onerror="this.src='../img/hero/girl-mobile.png'; this.alt='${item.drink}'"/>
     </div>

     <div class="cocktail-description-container" >
     <h2 class="cocktail-title">${item.drink}</h2>
     <p class="cocktail-description">${item.description}</p>
     
    <ul class="cocktail-button-container"> 
    <li> <button type="button" class="card-button-learn-more" data-drink="${item._id}">
    Learn More</button></li>
    <li> <button type="button" class="button-svg-heart" data-heart-btn data-drink="${item._id}">
     <svg
              class="icon-heart"
              aria-label="icon-heart"
              width="24"
              height="24"
            >
              <path d="M15.6306 3.4574C15.2475 3.07416 14.7927 2.77014 14.2921 2.56272C13.7915 2.3553 13.2549 2.24854 12.7131 2.24854C12.1712 2.24854 11.6347 2.3553 11.1341 2.56272C10.6335 2.77014 10.1786 3.07416 9.79558 3.4574L9.00058 4.2524L8.20558 3.4574C7.43181 2.68364 6.38235 2.24894 5.28808 2.24894C4.1938 2.24894 3.14435 2.68364 2.37058 3.4574C1.59681 4.23117 1.16211 5.28063 1.16211 6.3749C1.16211 7.46918 1.59681 8.51864 2.37058 9.2924L3.16558 10.0874L9.00058 15.9224L14.8356 10.0874L15.6306 9.2924C16.0138 8.90934 16.3178 8.45451 16.5253 7.95392C16.7327 7.45333 16.8394 6.91677 16.8394 6.3749C16.8394 5.83304 16.7327 5.29648 16.5253 4.79589C16.3178 4.29529 16.0138 3.84047 15.6306 3.4574Z" stroke="#FDFDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>">
            </svg>
     </button>
     </li>
     </ul>
     </div>
     </li>`
    )
    .join('');
  container.insertAdjacentHTML('beforeend', markup);

  const learnMoreButtons = document.querySelectorAll('.card-button-learn-more');
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const drinkId = button.getAttribute('data-drink');
      fetchCocktail(drinkId);
    });
  });
}

const handleClickHeartBtn = event => {
  const svgHeart = event.target.children[0];

  const drinkId = event.target.dataset.drink;

  async function onBackend(drinkId) {
    try {
      const response = await axios.get(
        `${BASE_URL}/cocktails/lookup/?id=${drinkId}`
      );
      const data = response.data;

      const inStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));
      const idInStorage = inStorage.some(({ _id }) => _id === drinkId);

      if (!idInStorage) {
        cocktailsArray.push(data[0]);
        localStorage.setItem(KEY_FAVORITE, JSON.stringify(cocktailsArray));
        svgHeart.style.fill = 'rgb(255, 255, 255)';
      }

      if (idInStorage) {
        const indexId = inStorage.findIndex(({ _id }) => _id === drinkId);
        cocktailsArray.splice(indexId, 1);
        localStorage.setItem(KEY_FAVORITE, JSON.stringify(cocktailsArray));
        svgHeart.style.fill = 'none';
      }
    } catch (error) {
      console.error('Помилка при завантаженні напою:', error);
      throw error;
    }
  }

  onBackend(drinkId);
};

fetchCocktailGallery().then(() => {
  const heartBtn = document.querySelectorAll('[data-heart-btn]');

  heartBtn.forEach(btn => {
    const drinkId = btn.dataset.drink;

    const inStorage = JSON.parse(localStorage.getItem(KEY_FAVORITE));
    const idInStorage = inStorage.some(({ _id }) => _id === drinkId);

    if (idInStorage) {
      btn.firstElementChild.style.fill = 'rgb(255, 255, 255)';
    }

    heartBtn.forEach(btn => btn.addEventListener('click', handleClickHeartBtn));
  });
});
