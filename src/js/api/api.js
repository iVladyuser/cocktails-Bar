import axios from "axios";

export const BASE_URL = 'https://drinkify.b.goit.study/api/v1';
// import { letterOrNumber } from '../hero/search-hero';
export async function getCocktailsByLetter(letterOrNumber) {
  try {
    const url = `${BASE_URL}/cocktails/search/?f=${letterOrNumber}`;
    const response = await axios.get(url);
  return response.data.cocktails;
  }
  catch (error) {
    console.error("Помилка при отриманні коктейлів", error);
    throw error;
  }
};
 
export async function searchCocktailsByName(name) {
  try {
    const url = `${BASE_URL}/cocktails/search?s=${name}`;
    const response = await axios.get(url);
    return response.data.cocktails;
  } catch (error) {
    console.error('Помилка при пошуку коктейлів за іменем:', error);
    throw error; 
  }
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



