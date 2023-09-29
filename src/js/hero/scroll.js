document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.btn-hero-scroll');

  button.addEventListener('click', function () {
    const targetElement = document.getElementById('cocktail-container');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});
