importScripts("https://cdn.rawgit.com/mozilla/localForage/master/dist/localforage.js");

var cacheName = 'offline-demo-cache-5';
var filesToCache = [
	'/',
	'/index.html',
	'/main.js',
	'polyfills.js',
	'runtime.js',
	'scripts.js',
	'styles.js',
	'vendor.js'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  self.skipWaiting();
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  if(e.request.url === 'https://offline-demo-160ec.firebaseio.com/programs.json?orderBy=%22claimed%22&equalTo=true') {
	  e.respondWith(
		fetch(e.request).then(function(response) {
			console.log("Error response: "+ response.statusText);
			console.log("Error Code: "+response.status);
		  return response;
		})
		.catch(function(error){
			console.warn("Constructing response from local as there is an error");
			console.warn(error);
			/* let payload = new Response('{"text": "hello world"}', {"status": 200, "statusText": "Serving from local cache", "type": "", "headers": {'Content-Type': 'application/json'}});
			console.log(payload);
			return payload; */
			
			return localforage.getItem("userPrograms").then((res) => {
			  console.log("response from index db");
			  console.log(res);
			  let payload = new Response(JSON.stringify(res), {"status": 200, "statusText": "Serving from local cache", "headers": {'Content-Type': 'application/json'}});
			  console.log(payload);
			  return payload;
			});
		})
	  );
  }
});