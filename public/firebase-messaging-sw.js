importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDyCBXvAO7zqqAQo9PTuC1x7SO0mk3bYmc",
    authDomain: "notificationapp-ed3ca.firebaseapp.com",
    databaseURL: "https://notificationapp-ed3ca.firebaseio.com",
    projectId: "notificationapp-ed3ca",
    storageBucket: "notificationapp-ed3ca.appspot.com",
    messagingSenderId: "341243237176",
    appId: "1:341243237176:web:4dd6e9d925fb6722b667cd"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.messaging();

  let CACHE_NAME = 'my-site-cache-v1';
  let urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  '/firebase-messaging-sw.js',
  '/index.html',
  '/App.js',
  '/App.css'
];

this.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});