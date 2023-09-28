// Функція для відображення коктейлів у галереї
function displayCocktails(cocktails) {
  // Отримуємо елемент, в який будемо вставляти коктейлі
  const galleryContainer = document.querySelector('.gallery-container'); // Замініть '.gallery-container' на селектор вашого контейнера для галереї

  // Очищаємо контейнер перед вставкою нових коктейлів
  galleryContainer.innerHTML = '';

  // Проходимося по кожному коктейлю та створюємо карточку для нього
  cocktails.forEach(cocktail => {
    const cocktailCard = document.createElement('div');
    cocktailCard.classList.add('cocktail-card'); // Замініть 'cocktail-card' на клас вашої карточки

    // Додаємо зображення коктейлю
    const cocktailImage = document.createElement('img');
    cocktailImage.src = cocktail.image; // Припустимо, що у кожного коктейлю є поле 'image' з URL зображення
    cocktailImage.alt = cocktail.name; // Встановлюємо атрибут 'alt' для зображення
    cocktailCard.appendChild(cocktailImage);

    // Додаємо назву коктейлю
    const cocktailName = document.createElement('h2');
    cocktailName.textContent = cocktail.name; // Припустимо, що у кожного коктейлю є поле 'name' з назвою
    cocktailCard.appendChild(cocktailName);

    // Додаємо опис коктейлю (обрізаємо, якщо потрібно)
    const cocktailDescription = document.createElement('p');
    const maxDescriptionLength = 100; // Максимальна довжина опису перед обрізанням
    cocktailDescription.textContent = cocktail.description.length > maxDescriptionLength ?
      cocktail.description.slice(0, maxDescriptionLength) + '...' :
      cocktail.description;
    cocktailCard.appendChild(cocktailDescription);

    // Додаємо кнопки "LearnMore" та "AddTo" (або "Remove" у відповідних випадках)
    const learnMoreButton = document.createElement('button');
    learnMoreButton.textContent = 'Learn More';
    const addToButton = document.createElement('button');
    addToButton.textContent = 'Add To';

    // Додаємо обробники подій для кнопок
    learnMoreButton.addEventListener('click', () => {
      // Відкриваємо модальне вікно з детальною інформацією про коктейль
      openModal(cocktail); // Реалізуйте функцію відкриття модального вікна з детальною інформацією
    });

    addToButton.addEventListener('click', () => {
      if (isInFavorites(cocktail)) {
        // Якщо коктейль вже у списку обраних, видаляємо його
        removeFromFavorites(cocktail.id);
        addToButton.textContent = 'Add To'; // Змінюємо текст кнопки на "Add To"
      } else {
        // Додаємо коктейль до списку обраних
        saveToFavorites(cocktail);
        addToButton.textContent = 'Remove'; // Змінюємо текст кнопки на "Remove"
      }
    });

    // Додаємо кнопки до карточки
    cocktailCard.appendChild(learnMoreButton);
    cocktailCard.appendChild(addToButton);

    // Додаємо карточку до контейнера
    galleryContainer.appendChild(cocktailCard);
  });
}

// Перевірка, чи коктейль є в списку обраних
function isInFavorites(cocktail) {
  const favorites = getFavorites();
  return favorites.some(favorite => favorite.id === cocktail.id);
}