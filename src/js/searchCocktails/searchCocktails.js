// import Pagination from 'tui-pagination';
// import { renderList } from '../cocktailsMarkUp/cocktailsMarkUp';

// const galleryCocktails = document.querySelector('.cocktails-list');

// export function pagination(cocktailData) {
//   function isMobile() {
//     if (window.innerWidth >= 768) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   if (window.innerWidth >= 1280) {
//     cardsPerPage = 9;
//   } else {
//     cardsPerPage = 8;
//   }
//   const itemsPerPage = cardsPerPage; // Кількість елементів на сторінці
//   console.log(cardsPerPage);
//   let currentPage = 1; // Поточна сторінка
//   const totalItems = cocktailData.length; // Загальна кількість елементів

//   const container = document.getElementById('pagination');

//   // Опції для пагінатора
//   const options = {
//     totalItems,
//     itemsPerPage,
//     visiblePages: 5, // Кількість видимих сторінок в пагінаторе
//     centerAlign: true, // Рівняння по центру
//   };

//   const pagination = new Pagination(container, options);

//   // Обробник зміни сторінки
//   pagination.on('beforeMove', event => {
//     currentPage = event.page;
//     renderPage();
//   });

//   //Функція для відображення данних на сторінці
//   function renderPage() {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const paginatedData = cocktailData.slice(startIndex, endIndex);

//     // Тут вставляти розмітку на сторінку, рендерити картки
//     console.log(paginatedData);
//     renderList();
//   }

//   // Ініціалізація початкової сторінки
//   fetchCocktailGallery();
// }


