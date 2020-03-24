$(function () {
  const newsGenre = {
    'news': 'お知らせ',
    'update': 'アップデート',
    'event': 'イベント',
  }
  const newsList = {
    202020324: {
      date: '2020.03.24',
      genre: 'news',
      title: '<a href="./functions/local-memo/">道の駅にメモを残せる機能</a>が追加されました。',
      url: ''
    }
  }

  let newsDOM = ``;
  for (const newsId of Object.keys(newsList)) {
    newsDOM += `<li>
<time datetime="${newsList[newsId].date.replace('.', '-')}">${newsList[newsId].date}</time>
<span class="tag">${newsGenre[newsList[newsId].genre]}</span>
<div class="title-area">
  <p class="title">${newsList[newsId].title}</p>
</div>
</li>`
  }

  $('.news-area .news').html(newsDOM);

});