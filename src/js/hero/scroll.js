document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.btn-hero-scroll');
  const targetElement = document.querySelector(
    '.js__cocktails__list.cocktails-list'
  );

  button.addEventListener('click', function () {
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
