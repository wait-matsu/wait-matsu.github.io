$(function () {
  const newsGenre = {
    'news': 'お知らせ',
    'update': 'アップデート',
    'event': 'イベント',
  }
  const newsList = {
    202020501: {
      date: '2020.05.01',
      genre: 'update',
      title: '【ver1.5.8】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
      url: ''
    },
    202020423: {
      date: '2020.04.23',
      genre: 'update',
      title: '【ver1.5.7】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
      url: ''
    },
    202020418: {
      date: '2020.04.18',
      genre: 'update',
      title: '【ver1.5.4】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
      url: ''
    },
    202020412: {
      date: '2020.04.12',
      genre: 'update',
      title: '【ver1.5.3】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
      url: ''
    },
    202020405: {
      date: '2020.04.05',
      genre: 'update',
      title: '【ver1.5.0】フレンド機能が追加されました。',
      url: ''
    },
    202020329: {
      date: '2020.03.29',
      genre: 'update',
      title: '【ver1.4.0】<a href="./functions/trophy/">トロフィー</a>が追加されました。',
      url: ''
    },
    202020324: {
      date: '2020.03.24',
      genre: 'update',
      title: '【ver1.3.0】<a href="./functions/local-memo/">道の駅にメモを残せる「ローカルメモ」機能</a>が追加されました。',
      url: ''
    }
  }

  let newsDOM = ``;
  for (const newsId of Object.keys(newsList).reverse()) {
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