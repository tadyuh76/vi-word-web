'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "3d5d9d679cb5678c1e25b6eaf12efaa8",
"/": "3d5d9d679cb5678c1e25b6eaf12efaa8",
"manifest.json": "b369ee22a3335d7a452402e56c073d08",
".git/logs/HEAD": "f570f98391b00e786be328ff669a6f47",
".git/logs/refs/remotes/main/master": "400db8e21c8de709a51a868bda9bcc59",
".git/logs/refs/remotes/origin/main": "a5caa973ee75c8ae64b75d42aac069bd",
".git/logs/refs/heads/main": "c8fb584436cbdef9e0fbdc8693f38c09",
".git/logs/refs/heads/master": "e21aec8904556acc9aafe563d2bae50a",
".git/index": "54ba11adc908b7936f3b2d31545db303",
".git/config": "5b603c2c0801a9ded3b79159fc38b404",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/519ecf09c3b094493872df2100427a98e77908": "43a29329a122b718f4157cf6db031382",
".git/objects/1c/d025961bc821fcbc63005dca001a4a963afb56": "b7fda456806e25d4174210cc5f964d5d",
".git/objects/03/009757d3ba4df6c487362f436ff06694c148b0": "3230d45ea80b81e1a292f25aec2d1914",
".git/objects/0e/a3fa976f5006c637fcce89244cb5f268e00593": "0c5fe853cb5f9fe99d3c71c118dc07ef",
".git/objects/2f/1928339474bc54879f3e4cce1de5406e05d56e": "492d8e0ce470803808a2234b8e328d0a",
".git/objects/f7/3528e4c51d7b349bad05cebd6334895c3b37db": "91475bd37bb6f95e50a214ecea7546f7",
".git/objects/cb/63066fb51d13b32c10aab2f6129053478e3b26": "bb61fd433256644b976fed95a8787fda",
".git/objects/7a/2c172672082e5186b54e6cda00b8187213ee1f": "52cc336ec7a6344bdfd716cb595bbbb6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/36/50c0e7be4d4efa8281ac39479eb6238dd9e19e": "b5c7b0a72d71542f80a084997f67d8c1",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/6e/896ac665f6fe7030aa00e60b6037af386b6879": "8295fc9ffdbe0ea18c43323aec72fd3d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/85/ea52df5ee01738a330a337d63edfe99423dce4": "71cc4b4ab2210f01a71195feef6e0618",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/fb/9af30a42191a60e611600144d8af772213ff72": "78b51e2e54a8f28a78af0a276cff2acc",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/38/a5d591506df146dc9218cf627fa079aca78c86": "29d0744da72724571f8118710aafbcf0",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/d1/2979b037d8bae88b9a5c5fbfa0337ea1248172": "9f2dceeea4d72a1e120a300fa028a53d",
".git/objects/db/4b0e0e91d2449f5ebac2fdb479ed64de54230a": "f0b04fbea2083a03b9e6e300277899f8",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/21/e517fcdb015ace2a8325ceb3d2398dc82dc916": "c7d07935bda757ba381e14c4e3412006",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/82/da19edbdacfd603c71a2f375a751712b3382f6": "112ba7c457d1f790a6c57088c002eba2",
".git/objects/aa/e787e199cfd379192889c0eab3506ed5d37a98": "5ed626f02a436570644f29613efb9373",
".git/objects/13/2eade396e5cb3089d69c57831efeb68e2a2583": "240cf0e56420d66eb61a8c5b61f19df8",
".git/objects/5b/324c9bf3a625a22f13c7f6239f6eb0a47e8b84": "e87093107c1c0b9132f593ce1cec93c9",
".git/objects/5b/5be07bfff476f93e56b6e64143bba969e9bdfc": "f18a4ba869be34051dac540cf79b2e5a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/e0/a479afa6f84226a69335ac517bbd59dd256222": "99e350390d2f411e5a4336a178325dfe",
".git/objects/c1/8379cfcb101e51127749f5dec2d01ccf11d2fc": "a51de5f27fe8771dc92ad8a5bac8f82a",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/3c/ea685461c7e9c70eafd9add32276b0e6eebbf9": "0428c3a60e2da679e22ae9f24aee8f1a",
".git/objects/a7/e1900c30956fa2b2e68ea11ad6e6c250efe8ce": "60c31286c7af1b5a15d56d337c0da34b",
".git/objects/cc/48b6754ae04b414bebee300c3c38c8c1904395": "66feb093b6757df1698ba1ae03d594d6",
".git/objects/23/34f9b5b83ca6d9cfffaf10af957568dca573bc": "fc34bb63285bee57921289a2e4bd2d73",
".git/objects/f0/5696b7a835d74f240c934a38ba6a640c3f8e47": "fbfb143a2c19938e20e2c67b24e84a33",
".git/objects/f0/b265f564076b4e4d9da4310c4a88d8888bcd63": "c24ee7ba2a5565016a42ac0921172743",
".git/objects/2c/335dedd727b7980c11329db3624d57ec4554ba": "b7ec2613106bef6bd8386a8472a94cbd",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/8c/baa34496888387bb85a920f92a2636515f11f9": "3c81fef5dd3b976d0676e4ccb1c3b622",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b3/29c5f09bc800ae356ea3e02eded667699601f4": "f35f63ae4efd4e8fd82a702c3ffa2494",
".git/objects/be/b7a0b1be6bd886bab36ebced483a8a44b22d4d": "4170b854e931d1dc335927dd2f4d6187",
".git/objects/d3/1fd48f73880b7267947afe69b36b1b2e92ca21": "42ba2f5b801c37cb9d2dccfe90fdae67",
".git/objects/0f/0fd1d55b3e9e32ac0f1b1ecdbc59612ca88bf5": "da56b49c0d29942dacc901c812ccaaef",
".git/COMMIT_EDITMSG": "c65ac31d085d811f3ae1fe5c11b55533",
".git/refs/remotes/main/master": "4feb452796713760887a995b64f8e3ca",
".git/refs/remotes/origin/main": "544446bbee4dba9167667d8456e91f81",
".git/refs/heads/main": "544446bbee4dba9167667d8456e91f81",
".git/refs/heads/master": "4feb452796713760887a995b64f8e3ca",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "8e878403b466840357b21dffb74dfa02",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js": "bd78ad4fd1ea164be2653f94472b5fc6",
"assets/AssetManifest.json": "c1dae1d8e066387f6a9c3aedf052b0cb",
"assets/FontManifest.json": "ed1465a7bc11035d2a04083ea1255b55",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "54e543bbdc2c7a859a9284d3b26b5313",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/bubbles.svg": "0e0a5f380e73c24c9bd0a7d08ba0906b",
"assets/assets/icons/gift.svg": "02792c1ea0f7459b59d829e5db49b7ce",
"assets/assets/icons/diamond.svg": "2be92bfc77f950dbf0f80a0eaba35e0c",
"assets/assets/icons/notebook.svg": "c1d64f30975ee25871106c877e830e82",
"assets/assets/icons/settings.svg": "80c04a25c535b2140bc5cfb053bf28a8",
"assets/assets/icons/profile.svg": "65a438bbe5d6e2a31f8c221928304bf7",
"assets/assets/icons/play.svg": "1a06d77f1600b99e27aa1364fa63c876",
"assets/assets/game_console.json": "45deb7bd77a967ca864cfb7446268c91",
"assets/assets/searching.json": "2a911d5b2c608327bd1f230a7ebcfe1d",
"assets/assets/background.jpg": "bc83f424ff8cd4ef2452ab96a5974d9f",
"assets/assets/fail.svg": "abc502b0a7bf3b2ca90305859f17f660",
"assets/assets/fonts/Montserrat-Medium.ttf": "aca6287f22eef510c1e622c97bb1e1e1",
"assets/assets/fonts/Quicksand-Regular.ttf": "6cbafd2cb6e973c96ade779edc39c62a",
"assets/assets/fonts/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "9e7757030c60a7a6973c9a95d9cea1c0"
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
