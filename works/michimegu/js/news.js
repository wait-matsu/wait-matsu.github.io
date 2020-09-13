$(function () {
  const newsGenre = {
    'news': 'お知らせ',
    'update': 'アップデート',
    'event': 'イベント',
  }
  const newsList = {
    202020913: {
      date: '2020.09.13',
      genre: 'event',
      title: '【イベント開催予告】<a href="./events/ticket01/">みちめぐ切符イベント開催のお知らせ</a>',
    },
    202020912: {
      date: '2020.09.12',
      genre: 'update',
      title: '【ver1.7.8】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020830: {
      date: '2020.08.30',
      genre: 'update',
      title: '【ver1.7.6】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020829: {
      date: '2020.08.30',
      genre: 'update',
      title: '【ver1.7.5】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020823: {
      date: '2020.08.23',
      genre: 'update',
      title: '【ver1.7.4】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020816: {
      date: '2020.08.16',
      genre: 'update',
      title: '【ver1.7.0】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020802: {
      date: '2020.08.02',
      genre: 'update',
      title: '【ver1.6.17】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020720: {
      date: '2020.07.20',
      genre: 'update',
      title: '【ver1.6.13】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020628: {
      date: '2020.06.28',
      genre: 'update',
      title: '【ver1.6.11】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020621: {
      date: '2020.06.21',
      genre: 'update',
      title: '【ver1.6.8】アップデートが配信されました。（リリースノートはアプリからご確認ください）',
    },
    202020615: {
      date: '2020.06.15',
      genre: 'event',
      title: '【イベント開催予告】<a href="./events/treasure-hunt01/">宝探しゲーム開催のお知らせ</a>',
    },
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