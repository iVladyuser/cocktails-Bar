import axios from 'axios';
import { BASE_URL } from '../api/api';
import { fetchCocktail } from '../modalCocktails/modalCocktails';
import { Pagination } from 'tui-pagination';

let useMyCode = false;
let lastSearchText = '';

function renderGalleryOrError(arr, container) {
  if (arr.length === 0) {
    container.innerHTML = `
      <div class="block-page-hero">
        <svg class="icon-rafiki" >
          <use href="./img/sprite.svg#icon-rafiki"></use>
        </svg>
        <p class="text-page">Sorry, we <span class="text-span">didn’t find</span> any <br>cocktail for you</p>
      </div>
    `;
  } else {
    container.innerHTML = '';

    const markup = arr
      .map(
        item =>
          `<li class="cocktail-card">
          <div class="container__img">
            <img class="cocktail-card-img" src="${item.drinkThumb}" alt="${item.drink}" width="300" height="260"/>
          </div>
          <div class="cocktail-description-container">
            <h2 class="cocktail-title">${item.drink}</h2>
            <p class="cocktail-description">${item.description}</p>
            <ul class="cocktail-button-container">
              <button type="button" class="card-button-learn-more" data-drink="${item._id}">Learn More</button>
              <li>
                <button class="button-svg-heart">
                  <svg
                    class="icon-heart"
                    aria-label="icon-heart"
                    width="24"
                    height="24"
                  >
                    <path d="M15.6306 3.4574C15.2475 3.07416 14.7927 2.77014 14.2921 2.56272C13.7915 2.3553 13.2549 2.24854 12.7131 2.24854C12.1712 2.24854 11.6347 2.3553 11.1341 2.56272C10.6335 2.77014 10.1786 3.07416 9.79558 3.4574L9.00058 4.2524L8.20558 3.4574C7.43181 2.68364 6.38235 2.24894 5.28808 2.24894C4.1938 2.24894 3.14435 2.68364 2.37058 3.4574C1.59681 4.23117 1.16211 5.28063 1.16211 6.3749C1.16211 7.46918 1.59681 8.51864 2.37058 9.2924L3.16558 10.0874L9.00058 15.9224L14.8356 10.0874L15.6306 9.2924C16.0138 8.90934 16.3178 8.45451 16.5253 7.95392C16.7327 7.45333 16.8394 6.91677 16.8394 6.3749C16.8394 5.83304 16.7327 5.29648 16.5253 4.79589C16.3178 4.29529 16.0138 3.84047 15.6306 3.4574Z" stroke="#FDFDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </li>`
      )
      .join('');

    container.innerHTML = markup;

    const learnMoreButtons = document.querySelectorAll(
      '.card-button-learn-more'
    );
    learnMoreButtons.forEach(button => {
      button.addEventListener('click', () => {
        const drinkId = button.getAttribute('data-drink');
        fetchCocktail(drinkId);
      });
    });
  }
}

function renderErrorBlock(container) {
  container.innerHTML = `
    <div class="block-page-hero">
      <svg class="icon-rafiki" >
        <use href="./img/sprite.svg#icon-rafiki"></use>
      </svg>
      <p class="text-page">Sorry, we <span class="text-span">didn’t find</span> any <br>cocktail for you</p>
    </div>
  `;
}

const mainTitle = document.querySelector('.main-title');

function updateMainTitle(text) {
  mainTitle.textContent = text;
}

function hideMainTitle() {
  mainTitle.style.display = 'none';
}

export async function fetchCocktailGalleryByName(name) {
  try {
    const url = `${BASE_URL}/cocktails/search/?s=${name}`;

    const response = await axios.get(url);
    console.log('Response:', response.data);
    if (response.status !== 200) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    renderGalleryOrError(
      response.data,
      document.querySelector('.js__cocktails__list')
    );

    updateMainTitle('Searching results');
  } catch (error) {
    console.error('Помилка при отриманні галереї за назвою:', error);

    renderErrorBlock(document.querySelector('.js__cocktails__list'));
    hideMainTitle();
  }
}

export async function fetchCocktailGallery(letterOrNumber) {
  try {
    let url;
    if (!isNaN(letterOrNumber)) {
      url = `${BASE_URL}/cocktails/search/?f=${letterOrNumber}`;
    } else {
      url = `${BASE_URL}/cocktails/search/?f=${letterOrNumber}`;
    }

    const response = await axios.get(url);
    console.log('Response:', response.data);
    if (response.status !== 200) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    renderGalleryOrError(
      response.data,
      document.querySelector('.js__cocktails__list')
    );

    lastSearchText = letterOrNumber;
  } catch (error) {
    console.error('Помилка при отриманні галереї:', error);

    renderErrorBlock(document.querySelector('.js__cocktails__list'));
    hideMainTitle();
  }
}

const keyboardButtons = document.querySelectorAll('.keyboard-letter');
keyboardButtons.forEach(button => {
  button.addEventListener('click', () => {
    const letterOrNumber = button.textContent;
    useMyCode = true;

    keyboardButtons.forEach(otherButton => {
      otherButton.classList.remove('active');
    });

    button.classList.add('active');

    fetchCocktailGallery(letterOrNumber);
    console.log(letterOrNumber);
  });
});

const select = document.querySelector('.hero-mobyle-js');
select.addEventListener('change', event => {
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;
  const letterOrNumber = selectedOptionText;
  useMyCode = true;
  fetchCocktailGallery(letterOrNumber);
});

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.text-input');
const searchButton = document.querySelector('.input-icon-hero');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchText = searchInput.value.trim();
  if (searchText) {
    fetchCocktailGalleryByName(searchText);
  } else if (lastSearchText) {
    fetchCocktailGallery(lastSearchText);
  }
});

searchButton.addEventListener('click', () => {
  searchForm.dispatchEvent(new Event('submit'));
});

searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchForm.dispatchEvent(new Event('submit'));
  }
});

searchInput.addEventListener('blur', () => {
  keyboardButtons.forEach(button => {
    button.classList.remove('active');
  });
});





// Initialize the pagination component
const paginationContainer = document.getElementById('pagination');
const pagination = new Pagination(paginationContainer, {
  totalItems: 100, 
  itemsPerPage: 10,
  visiblePages: 5, 
  centerAlign: true, 
});

// Add an event listener for page changes
pagination.on('afterMove', event => {
  const currentPage = event.page;
  // Fetch and render the data for the new page
  fetchCocktailGalleryByPage(currentPage);
});

// Function to fetch and render data based on the current page
async function fetchCocktailGalleryByPage(page) {
  try {
    const url = `${BASE_URL}/cocktails/search/?page=${page}`;

    const response = await axios.get(url);
    console.log('Response:', response.data);
    if (response.status !== 200) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    renderGalleryOrError(
      response.data,
      document.querySelector('.js__cocktails__list')
    );

    lastSearchText = ''; // Reset lastSearchText if using pagination
  } catch (error) {
    console.error('Error fetching gallery by page:', error);

    renderErrorBlock(document.querySelector('.js__cocktails__list'));
    hideMainTitle();
  }
}

