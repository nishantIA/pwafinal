"use client"
// service-worker.js
const installEvent = () => {
  if(typeof window!=="undefined"){
    window.addEventListener('install', () => {
      console.log('service worker installed');
    });
  }
};
installEvent();

const activateEvent = () => {
  if(typeof window!=="undefined"){
    window.addEventListener('activate', () => {
      console.log('service worker activated');
    });
  }
  
};
activateEvent();
console.log("first")
// const CACHE_NAME = 'my-cache-v1';
// const cacheUrls = ['/index.html', '/styles.css', '/script.js'];

// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(cacheUrls);
//     })
//   );
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });
