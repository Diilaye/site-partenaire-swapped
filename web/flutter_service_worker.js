'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "44597eab59a9a31e6ac3f391ee39de6e",
"index.html": "98877807c79bcc050c376079e9ccb89a",
"/": "98877807c79bcc050c376079e9ccb89a",
"main.dart.js": "9e6cde8e65c0b5bc51c7eaded6458944",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "bb480d52b46839c00e20f2ba1725eb1c",
"icons/Icon-192.png": "bb480d52b46839c00e20f2ba1725eb1c",
"icons/Icon-maskable-192.png": "bb480d52b46839c00e20f2ba1725eb1c",
"icons/Icon-maskable-512.png": "bb480d52b46839c00e20f2ba1725eb1c",
"icons/Icon-512.png": "bb480d52b46839c00e20f2ba1725eb1c",
"manifest.json": "efa6ec09ac2e782803722c1a4fedee99",
"assets/AssetManifest.json": "62e3ba422ddb1a03712625539769a6e5",
"assets/NOTICES": "2885c03abd3bff1de61e802ec30a0c20",
"assets/FontManifest.json": "0e0df9cfb22baed2bd1b72587c59c7f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "05e1022077f58ae605844b680651b727",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "0dc539fb7b81b3297e1a12e4ea12f2c9",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/swape.png": "bb480d52b46839c00e20f2ba1725eb1c",
"assets/assets/images/bg.jpeg": "05aacbfe4bfd855835025ad464416e20",
"assets/assets/fonts/Josefin_Sans/JosefinSans-Italic-VariableFont_wght.ttf": "b0dc350427faa64a69c5958bff759a3b",
"assets/assets/fonts/Josefin_Sans/static/JosefinSans-Thin.ttf": "fc28a44f4480a836ffcf35097be6bc6f",
"assets/assets/fonts/Josefin_Sans/static/JosefinSans-Bold.ttf": "b22a8f2494bafa9cd040aa9db29bc43d",
"assets/assets/fonts/Josefin_Sans/static/JosefinSans-Light.ttf": "1e660e971a00bdedd9aea889b8b3308d",
"assets/assets/fonts/Josefin_Sans/static/JosefinSans-LightItalic.ttf": "93b39a163e735af1f87193a19ccec91d",
"assets/assets/fonts/Josefin_Sans/static/JosefinSans-MediumItalic.ttf": "9e1c4b3f33f47962038d8f06abdc7c1c",
"assets/assets/fonts/Josefin_Sans/static/JosefinSans-SemiBold.ttf": "4d6fba7324c7c30b35e1190e93f38aac",
"assets/assets/fonts/Josefin_Sans/static/JosefinSans-Regular.ttf": "effd9508e574fd2ab338bbd81f784f3e",
"assets/assets/fonts/Josefin_Sans/static/JosefinSans-ExtraLightItalic.ttf": "b2348a369e861bfecda6f0134cef9e4c",
"assets/assets/fonts/Josefin_Sans/static/JosefinSans-Medium.ttf": "4c0529618e047e91b356eb04633136dc",
"assets/assets/fonts/Josefin_Sans/static/JosefinSans-ThinItalic.ttf": "d665a305f831c278b331870887888306",
"assets/assets/fonts/Josefin_Sans/static/JosefinSans-ExtraLight.ttf": "9f0254c38d87976d2ea6dbd1f45aaa9c",
"assets/assets/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf": "2e8222ace1f1b9047606c56fa65686a2",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
