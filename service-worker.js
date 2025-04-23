// service-worker.js

const CACHE_NAME = 'cosmetic-shop-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/home.html',
  '/cart.html',
  '/checkoutproduct.html',
  '/css/home.css',
  '/css/cart.css',
  '/css/checkout.css',
  '/css/index.css',
  '/home.js',
  '/cart.js',
  '/images/product1.webp',
  '/images/product2.webp',
  '/images/product3.webp',
  '/images/product4.webp',
  '/images/images6.webp',
  '/images/images7.webp',
  '/images/images8.webp',
  '/images/images9.webp',
  '/images/images10.webp',
  '/images/images11.webp',
  '/images/images12.webp',
  // Add any other important static files
];

// Install event - caching assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event - clean up old caches if needed
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Fetch event - serve cached content if offline
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       return response || fetch(event.request)
//     })
//   );
self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }).catch(() => {
        // Optional: You can return a fallback page or image here
        return caches.match('/offline.html');
      })
    );
  });
  

