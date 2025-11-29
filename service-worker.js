const CACHE_NAME = 'dokkan-db-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './js/data.js',
  './js/link_skills.js',
  // ここに必要な画像パスを追加していくとオフラインでも完全動作します
  // './assets/images/1030430.png', etc...
];

// インストール時にキャッシュする
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// リクエスト時にキャッシュがあればそれを返す
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// 更新時に古いキャッシュを削除
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
});