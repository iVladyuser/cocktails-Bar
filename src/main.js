import axios from 'axios';
import './js/header/header';
import './js/hero/hero';
import './js/cocktailsMarkUp/cocktailsMarkUp';
import './js/searchCocktails/searchCocktails';
import './js/modalCocktails/modalCocktails';
import './js/api/api';

const refs = {
    searchInput: document.querySelector('input[name="searchQuery"'),
    searchForm: document.getElementById('search-form'),
};

refs.searchForm.addEventListener('submit', onFormSubmit);

async function onFormSybmit(e) {
  e.preventDefault();
  options.params.q = searchInput.value.trim();
  if (options.params.q === '') {
    return;
  }
  options.params.page = 1;
  galleryEl.innerHTML = '';
  reachedEnd = false;

  try {
    showLoader();
    const response = await axios.get(BASE_URL, options);
    totalHits = response.data.totalHits;
    const hits = response.data.hits;
    if (hits.length === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      Notify.success(`Hooray! We found ${totalHits} images.`);
      renderGallery(hits);
    }
    searchInput.value = '';
    hideLoader();
  } catch (err) {
    Notify.failure(err);
    hideLoader();
  }
}



