// Install the ServiceWorker
self.addEventListener('install', function(event) {
  event.waitUntil(

    // Open a cache
    caches.open('v1').then(function(cache) {

      // Define what we want to cache
      return cache.addAll([
        '/',
        'index.html',
        'js/app.js',
        'js/jquery.min.js',
        'js/note-list.js',
        'css/style.css',
        'favicon.ico',
        'manifest.json',
        'img/icon-simple.png',
        'img/icon-180x180.png',
        'img/icon-192x192.png',
        'img/icon-192x192.maskable.png',
        'img/icon-512x512.png',
        'img/icon-512x512.maskable.png',
        'js/cache-polyfill.js'
      ]);
    })
  );
});

// Use ServiceWorker (or not) to fetch data
self.addEventListener('fetch', function(event) {

  event.respondWith(

    // Look for something in the cache that matches the request
    caches.match(event.request).then(function(response) {

      // If we find something, return it
      // Otherwise, use the network instead
      return response || fetch(event.request);
    })
  );
});