/* ハンバーガーメニュークラス切替
   ============================================ */

const hamburgerMenu = document.querySelector('header .hamburger-menu');
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('is-active');
})