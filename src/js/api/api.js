import axios from "axios";

export const BASE_URL = 'https://drinkify.b.goit.study/api/v1';

export async function getCocktailsByLetter(letterOrNumber) {
  const url = `${BASE_URL}/cocktails?f=${letterOrNumber}`;
  const data = await axios.get(url);
  console.log(data);
  return data.cocktails;
};


// Список коктейлів за літерою або за цифрою

export async function getCocktailsByLetter(f) {
  const response = await fetch(`${BASE_URL}/cocktails?letterOrNumber=${f}`, {
  });
  if (!response.ok) {
    throw new Error('Не вдалося отримати дані про коктейлі');
  }
  const data = await response.json();
  return data.cocktails;
}

// Список коктейлів за назвою
export async function searchCocktailsByName(name) {
  const response = await fetch(`${BASE_URL}/cocktails/search?s=${name}`, {
   
  });
  if (!response.ok) {
    throw new Error('Не вдалося знайти коктейлі за цією назвою');
  }
  const data = await response.json();
  return data.cocktails;
}
  
// Зберігаємо в localStorage
export function saveToFavorites(cocktail) {
  const favorites = getFavorites();
  favorites.push(cocktail);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Отримуємо обрані коктейлі з localStorage
export function getFavorites() {
  const favoritesJSON = localStorage.getItem('favorites');
  return favoritesJSON ? JSON.parse(favoritesJSON) : [];
}

// Видаляємо коктейлі з обраних
export function removeFromFavorites(cocktailId) {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(cocktail => cocktail.id !== cocktailId);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
}



