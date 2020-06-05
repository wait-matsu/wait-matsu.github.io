$(function () {
  const newsGenre = {
    'news': 'お知らせ',
    'update': 'アップデート',
    'event': 'イベント',
  }
  const newsList = {
    202020605: {
      date: '2020.06.05',
      genre: 'update',
      title: '【ver1.6.5】新たに道の駅が13件追加されました。',
    },
    202020519: {
      date: '2020.05.19',
      genre: 'update',
      title: '【ver1.6.1】マイページにトロフィーの獲得総数が表示されるようになりました。',
    },
    202020506: {
      date: '2020.05.06',
      genre: 'update',
      title: '【ver1.6.0】<a href="./functions/route/">作成したルートを保存</a>する機能が追加されました。',
    },
    202020503: {
      date: '2020.05.03',
      genre: 'update',
      title: '【ver1.5.9】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020501: {
      date: '2020.05.01',
      genre: 'update',
      title: '【ver1.5.8】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020423: {
      date: '2020.04.23',
      genre: 'update',
      title: '【ver1.5.7】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020418: {
      date: '2020.04.18',
      genre: 'update',
      title: '【ver1.5.4】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020412: {
      date: '2020.04.12',
      genre: 'update',
      title: '【ver1.5.3】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020405: {
      date: '2020.04.05',
      genre: 'update',
      title: '【ver1.5.0】フレンド機能が追加されました。',
    },
    202020329: {
      date: '2020.03.29',
      genre: 'update',
      title: '【ver1.4.0】<a href="./functions/trophy/">トロフィー</a>が追加されました。',
    },
    202020324: {
      date: '2020.03.24',
      genre: 'update',
      title: '【ver1.3.0】<a href="./functions/local-memo/">道の駅にメモを残せる「ローカルメモ」機能</a>が追加されました。',
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