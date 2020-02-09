/* Smooth Scroll
   ============================================ */

const scroll = new SmoothScroll('a[href*="#"]');


/* ページトップボタン挿入
   ============================================ */

   const pageTopBtn = document.createElement('a');
   pageTopBtn.setAttribute('href', '#');
   pageTopBtn.classList.add('page-top');
   pageTopBtn.classList.add('is-not-visible');

   document.querySelector('main').appendChild(pageTopBtn);


   const insertedPageTopBtn = document.querySelector('main a.page-top');
   window.addEventListener('scroll', () => {
  
    //高さを取得して表示
    let scrollTop = document.scrollingElement.scrollTop;
  if(scrollTop > 100) {
    insertedPageTopBtn.classList.remove('is-not-visible');
  }else{
    insertedPageTopBtn.classList.add('is-not-visible');
  }
  
    
  }, false);

/* ハンバーガーメニュークラス切替
   ============================================ */

if (window.innerWidth < 1000) {

  const hamburgerMenu = document.querySelector('header .hamburger-menu');
  if(hamburgerMenu){
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
}
