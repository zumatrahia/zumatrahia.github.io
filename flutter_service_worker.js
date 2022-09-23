'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "03acefc4795e8573b194262cd3a4419f",
"index.html": "0bc8cf08df9bd0ef2288c1652bc0b536",
"/": "0bc8cf08df9bd0ef2288c1652bc0b536",
"main.dart.js": "1e1e4bfb028fec88f0f3c7bfe8218d00",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "493757defcfefaf370ef90ea0954c227",
"assets/AssetManifest.json": "3be916977c6a5758d1dcf241e1b41628",
"assets/NOTICES": "74a5bed8b0d964bf30fe1606ecdcdefe",
"assets/FontManifest.json": "3ed2ae3e7b618dd28a377d7183b1833d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/icon_googleplay.png": "efc6313455b0d53c2c8a3a48a2eb38b6",
"assets/assets/images/icon_zumatrahia.png": "bfb9295f019900b1c0e082a7aa549a36",
"assets/assets/images/icon_privacy.png": "e528c25dfd787c40ea803ab3781bb8a2",
"assets/assets/images/0/screen3.jpeg": "733aaee135b70807229a9a22653551c9",
"assets/assets/images/0/screen2.jpeg": "b5b885de8b6ce3065205215ff8cb3542",
"assets/assets/images/0/screen4.jpeg": "9f81b7080599867efa0364d09f0b8ebb",
"assets/assets/images/0/icon.jpeg": "39e995a0d5547bd794b55ed672140417",
"assets/assets/images/0/screen1.jpeg": "ee7256735befaeeac5a49c19f0e23547",
"assets/assets/images/7/screen3.jpeg": "c0031cc8700ed20e800d037c62c9143f",
"assets/assets/images/7/screen2.jpeg": "23fa11df162646732438fee888c69c7b",
"assets/assets/images/7/screen5.jpeg": "f30a3e1d99fba00b3893c27870b765e3",
"assets/assets/images/7/screen4.jpeg": "f738c4a93da1e903a8d30ceba78fef71",
"assets/assets/images/7/icon.jpeg": "b48f03d4999daf5018b4e370878d2ccf",
"assets/assets/images/7/screen1.jpeg": "d8aaa09efee043b7da047df5fcd88028",
"assets/assets/images/icon_appstore.png": "50472c1d3d0775a9db42176538e2908e",
"assets/assets/images/6/screen3.jpeg": "c43330ec772a4fff8f72bf89022714b3",
"assets/assets/images/6/screen2.jpeg": "6e304d5553922db5b1605e6267f46a9e",
"assets/assets/images/6/screen5.jpeg": "9f95f652f4e795f53e5d805720fa2edd",
"assets/assets/images/6/screen8.jpeg": "34ce95c6537564f5fc584395ee0f6090",
"assets/assets/images/6/screen4.jpeg": "7b9ae2551ce8e5694a4e4761ca878e10",
"assets/assets/images/6/screen7.jpeg": "90edfa5e44f87ebe645dc6645c45d653",
"assets/assets/images/6/screen6.jpeg": "9be203d86ab87d50a31b1d71e7bc12f1",
"assets/assets/images/6/icon.jpeg": "6d145122a4b29b29964b8a32623af30f",
"assets/assets/images/6/screen1.jpeg": "a96dc02ef5d6372e823780bf8a5cebf8",
"assets/assets/images/1/screen3.jpeg": "d36bb1b1c4cdcda6d67d6d8e63390d64",
"assets/assets/images/1/screen2.jpeg": "586e89171e09d5dc83cd1ca2c6d5b156",
"assets/assets/images/1/screen5.jpeg": "992addfd84d0015ba34ff28491546509",
"assets/assets/images/1/screen4.jpeg": "0c22b8922a730fd06f16f8fcc0433142",
"assets/assets/images/1/icon.jpeg": "13d698733303f95f5eb62b88b4593815",
"assets/assets/images/1/screen1.jpeg": "9f71ec54690ed76689a50b6bec7ec905",
"assets/assets/images/8/screen3.jpeg": "315b3e3e17c8caeed2647b168309330a",
"assets/assets/images/8/screen2.jpeg": "8a83f65564c4db69d61875c583ec1036",
"assets/assets/images/8/screen4.jpeg": "0eca4ebf6adf4b0e290defb3e75290e5",
"assets/assets/images/8/icon.jpeg": "e856030a6cc7e94993a9f2891f8062f2",
"assets/assets/images/8/screen1.jpeg": "451a3e43c52ec926269fc09b8deeb25d",
"assets/assets/images/icon_aboutus.png": "3e70d21aa5286418372994cefb72b034",
"assets/assets/images/icon_apps.png": "0e5681b0513d7da48bc355dbcf75bffe",
"assets/assets/images/4/screen3.jpeg": "bb7452a824db6d638de41bfd4b8b0802",
"assets/assets/images/4/screen2.jpeg": "7c671cd7dbfd84e04cc2258a28c89258",
"assets/assets/images/4/screen5.jpeg": "90a39acd5828e121bd4b6d2834164ffe",
"assets/assets/images/4/screen8.jpeg": "2135940e57e80b8a33c31663b95ad787",
"assets/assets/images/4/screen4.jpeg": "06f1cde321e63da35cdf533179a688f8",
"assets/assets/images/4/screen7.jpeg": "79376c133fa7111f312992f6d914f00f",
"assets/assets/images/4/screen6.jpeg": "d54f5cb5df1359d0177ec9ba894440e0",
"assets/assets/images/4/icon.jpeg": "6d72e47c5c7fc4d585e6535bd46ea9e5",
"assets/assets/images/4/screen1.jpeg": "ab966bcc4fd55e81ef8b659729349077",
"assets/assets/images/3/screen3.jpeg": "ab9337af0e316f4447c65d48ef378468",
"assets/assets/images/3/screen2.jpeg": "c10488725a106c88388736d57bf51d76",
"assets/assets/images/3/screen5.jpeg": "a06eb3148bd4688e976cde3ef4d85612",
"assets/assets/images/3/screen4.jpeg": "bf1988c71e2a8fd1ac28124e52e39ff4",
"assets/assets/images/3/screen7.jpeg": "067359edf958e138424dd636181ff3fc",
"assets/assets/images/3/screen6.jpeg": "54b21f9ccb52ec10eb26d9e30a9a0cd0",
"assets/assets/images/3/icon.jpeg": "cbf8fb5c38f72cbcf7dc3642ab7ce0dc",
"assets/assets/images/3/screen1.jpeg": "26353ddbfbe1efec2024ebc67c02d5cd",
"assets/assets/images/2/screen3.jpeg": "3403dd1959cd9326c1cadd95b2f58c03",
"assets/assets/images/2/screen2.jpeg": "4dee64b272c90b84d0a81bca273efdc8",
"assets/assets/images/2/screen5.jpeg": "39309d6c7aaebf3b4365e9d502836f85",
"assets/assets/images/2/screen8.jpeg": "164651a2fdb1738e7a66dea0b7d2cc67",
"assets/assets/images/2/screen4.jpeg": "49282a87477176e2602346af4d550d7c",
"assets/assets/images/2/screen7.jpeg": "fe1c8e54a2db663d1e7c9e4b7559940c",
"assets/assets/images/2/screen6.jpeg": "673a657f5defb8611ba8c969f5dcfbd1",
"assets/assets/images/2/icon.jpeg": "ddc9010d53d44b7fab9995b11b2d8680",
"assets/assets/images/2/screen1.jpeg": "243098a07b7c9c35c5193beca4f04ade",
"assets/assets/images/5/screen3.jpeg": "b009e75a9049fc15f8e53635ce1689bd",
"assets/assets/images/5/screen2.jpeg": "78e2c9be0394c28ff13dc306b9bd0452",
"assets/assets/images/5/screen5.jpeg": "7b58feacd08f8e5eb47846c61dde6723",
"assets/assets/images/5/screen8.jpeg": "027eed8f7e16043932040a50034e6c06",
"assets/assets/images/5/screen4.jpeg": "697a6bea4de871f118ecf16903afd7eb",
"assets/assets/images/5/screen7.jpeg": "4317c3bcc6c834eb7cfb3c36a15c1461",
"assets/assets/images/5/screen6.jpeg": "52732eae0ce475d618429ee17686fc32",
"assets/assets/images/5/icon.jpeg": "d6e06e31fefeca35827e016f7706f9b6",
"assets/assets/images/5/screen1.jpeg": "c0036aabff2be792be3f76faf1987f26",
"assets/assets/fonts/YellowCandy.otf": "715f1867cfd7830f0d52c3a062ff4791",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
