// sw.js (minimal)
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// ネットワーク優先（失敗したらキャッシュ）※今はキャッシュしてないので素通しに近い
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
