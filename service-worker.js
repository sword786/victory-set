const CACHE_NAME = "timetable-cache-v5";
const urlsToCache = [
  './index.html',
  './manifest.json',
  './icon.png',
  './alarm3.mp3'
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
