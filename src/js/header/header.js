
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const anchorLinks = document.querySelectorAll(
    '.header-mobile-menu-link[href^="#"]'
  );
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };
  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  anchorLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    if (!e.matches) return;
    closeMenu();
  });
})();


