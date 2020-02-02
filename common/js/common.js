/* Smooth Scroll
   ============================================ */

const scroll = new SmoothScroll('a[href*="#"]');

/* ハンバーガーメニュークラス切替
   ============================================ */

if (window.innerWidth < 1000) {

  const hamburgerMenu = document.querySelector('header .hamburger-menu');
  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('is-active');
  });

  // メニュー内のリンククリック時にメニューを閉じる
  const hamburgerMenuItems = document.querySelectorAll('header .hamburger-menu+.global-menu li:not(.sns)');
  hamburgerMenuItems.forEach(li => {
    li.addEventListener('click', () => {
      hamburgerMenu.classList.remove('is-active');
    });
  })
}
