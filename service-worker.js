const CACHE_NAME = 'dokkan-db-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/data.js',
  './js/categories.js',
  './js/link_skills.js',
  './js/utils.js',
  './js/tabs/zukan.js'
  // 画像ファイルは動的にキャッシュされるのでここには書かなくてOK
];

// インストール処理
self.addEventListener('install', (event) => {
  self.skipWaiting(); // 待機せずにすぐ有効化
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// リクエスト処理：ネットワーク優先 (Network First)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // 正常に取得できたら、キャッシュを更新してそのレスポンスを返す
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      })
      .catch(() => {
        // オフラインなどで取得できなかったら、キャッシュを返す
        return caches.match(event.request);
      })
  );
});

// 古いキャッシュの削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
  self.clients.claim(); // すぐにコントロールを開始
});