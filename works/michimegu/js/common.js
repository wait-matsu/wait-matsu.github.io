// ライブラリ読み込み
// ==============================================================
// Smooth Scroll
document.write('<script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>');
// jQuery
document.write('<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>');

function loadFooter() {
  $.ajax({
    url: "/works/michimegu//modules/footer.html", // 読み込むHTMLファイル
    cache: false,
    async: false,
    dataType: 'html',
    success: function (html) {
      document.write(html);
    }
  });
}