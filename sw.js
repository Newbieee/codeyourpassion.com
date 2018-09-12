/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");
importScripts("https://cdn.rawgit.com/mozilla/localForage/master/dist/localforage.js");

workbox.skipWaiting()
workbox.clientsClaim()

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "9c6fbc85f51a8c37d86c0b2b63350cb7"
  },
  {
    "url": "main.js",
    "revision": "529cf157bfe6a1829588cba72f36572a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute('https://offline-demo-160ec.firebaseio.com/programs.json?orderBy=%22claimed%22&equalTo=true', function(event){
	let url = event.url;
  fetch(event.url).then(function(response) {
	  console.log("Response status: " + response.status);
	  var cloneRes = response.clone();
	  console.log("Cloned response");
	  console.log(cloneRes);
	  return response;
  }).catch(function(error) {
	  //debugger;
	  console.log(url);
	  console.warn("Constructing response from local as there is an error");
	  console.warn(error);
	  let payload = new Response('{"text": "hello world"}', {"status": 200, "statusText": "Serving from local cache", "type": "", "headers": {'Content-Type': 'application/json'}});
	  console.log(payload);
	  return payload;
	  /* return localforage.getItem("userPrograms").then((res) => {
		  console.log("response from index db");
		  console.log(res);
		  let payload = new Response(JSON.stringify(res), {"status": 200, "statusText": "Serving from local cache", "ok": true, "url": url});
		  console.log(payload);
		  return payload;
	  }); */
  });
})
