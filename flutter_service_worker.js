'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c085f9acd3be1296f727b0ea4e7dda0d",
".git/config": "48d7aeec75335f9eb7faeaae1f33e172",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "804133c69e6ee5cc8ce1c64250a46925",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "84dbfe00f8b7feb44be74934d3eb407b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd3683f1bd75dbc186dcf5dd6cbf123c",
".git/logs/refs/heads/Main": "e9c6e2bc5e4db03c915ab2c1dd2f4e0c",
".git/logs/refs/remotes/origin/Main": "b4142bad24a6b62817508a8ce75638fc",
".git/objects/03/aab0018dda27be0285a92f0056c37d650b429e": "32f1021425a161e2111c32a04e6ab83f",
".git/objects/04/c46ab1af49e96114dd62e0a369579267c4ca5c": "499293f54878fd44f824ad31fc87d55f",
".git/objects/06/c80d3f197f5589827ba7cce61c0abae55e02d3": "78564b8b562b09835bcbdfa0b123a533",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/10/3b008158d66aac0ce63bba8bdbb4dcc0cf022d": "9e885d22bbdd3a3239d801a3186f8aa3",
".git/objects/13/9e30c9c802058f6d6319c0e194cd0df7a6946d": "9ce85db134ab81d21d2b9f321c38a022",
".git/objects/1b/70beb59b07632a135b73898e0c911ac8201076": "5af3de44f790ea1ce6e0ef1947581218",
".git/objects/1e/64ab09080dea84a2d70f0f9b614609d30c83d1": "459e8f3a3f77c8b0764bf840e3948be8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/32/51efdefc0bfa67b2a056c8050c964121b5dfdd": "cbd7cf4e3c0b534a8f75f28655f139a2",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/e305bf7f4e4c61ad532ba511a32d2dbabc4461": "8c08b24fa987eeb490a11f8a7ffea6a8",
".git/objects/33/e58d15864a9e5d3c03edd55b915bcd4b07c71f": "d32f4cd5fa17d4bcb6b90ea5b22f923f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/390ef7176ef9b2f573b4eacbcd19fa8dfc75aa": "eac5f0535aeeb028cd5fca403e167456",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/ff8d927e3cd631b334d89d351d2ed2dadac232": "15a2d4df78c14d541087f23be9945190",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/aeeb5a45d391ef65a3d2516cef86bdc0f58562": "334ba7df598495b6ddcfde71f57b59b7",
".git/objects/4d/401e277bc1acc6130b37490f2575c4a5573a4c": "1ede719e2a6892685966d0eb01e90908",
".git/objects/51/26615aba189c522f2f5bd2c626576545cd684b": "fe54d36892f126aaf862d0d1c4d47bff",
".git/objects/57/90b89b6f6898efe63141d880c63fa4f85e32c7": "0753092b634dcc62b2b31002a9cbbb04",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/82/c5b8727d038c9315007f1fcbd685fe680043b5": "86b0475b83a0affba250bf32651c1690",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/e325262d9197d595b8b422530ae3cd59c65c88": "9adf5509cae422f54d70f1dfd4e781de",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/f8ea897960708d6275c519f1e737c99b37a68a": "01d25fe87c511d36d1719438c0279541",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/217aaf33d4c09f06fa38e121ea3b4b99f853c8": "97b22049375eb7e4795cdc05a6ceb17b",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/d56e1c090ddfd442546db9580e4b4a6302ec5d": "c25040d1f60d8e027a022f6f3a2012a8",
".git/objects/9b/46c75ce365caec3258b4788d5d46222be12616": "65b9aaf51a9ef1c65c9f32efa78797b3",
".git/objects/9f/7290db86895859e169eecb30836c50be56f31a": "51c73c9c4084b752c9658467474ccf0f",
".git/objects/a1/502c746ef4bf35b32b5f843273042091332741": "eb5370e91436ae69e9e09c3ff74e2b36",
".git/objects/b0/9ec4c13525abf7f0bdb24ec94c98d0dab8cb39": "fe8d12a6d3b9662e2df1b4e771769878",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/a008ed2cd6c7af261878074ce7c2887e764059": "c6dba26fe8e3e0bfae06aaf1c6fbf055",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7d72503b0a5f842bf750cec6d03cb67b6a1374": "779011e71556ec228971ff6d93cf939b",
".git/objects/b8/a10758903e463a40a2f494856ddbc788e0172c": "14deef0ea915ad042983026c7b5ccb61",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ca/ecd1ee63591fcd4a3ff7f3a7447bfce55d171d": "f5b432026a6482c64daa1b9fe0af7862",
".git/objects/cb/602306177896e9144db4b02ccdd6b30e0b9380": "3cba9e8b6e8c090d1cf13b2c322f19aa",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fd/6150c49c540b446d735123aa9be6b898767b62": "01eb0522d1d4019f11ce6be33da14949",
".git/refs/heads/Main": "46b20bee2b18ed8a687a56ac3c0ebb5c",
".git/refs/remotes/origin/Main": "46b20bee2b18ed8a687a56ac3c0ebb5c",
"assets/AssetManifest.bin": "b827b636caa9e9de2351f266ddae3dff",
"assets/AssetManifest.bin.json": "7774ee9df4826968e3a452794292ede1",
"assets/AssetManifest.json": "248a4a8f57e8e206895e242f164fffb5",
"assets/assets/images/americano.png": "10d18c88a53d6bbcf5cff10c42193a86",
"assets/assets/images/app_logo.png": "d404dd161e300b992314308a1e6ba90b",
"assets/assets/images/background_img.jpg": "082e6f47284c8ee904bca82c1d9e5f73",
"assets/assets/images/cappuccino.png": "0918d4c5d997e217b4c6615bca158178",
"assets/assets/images/cup.png": "e19fe21722e812b2363e3780617690e7",
"assets/assets/images/error.png": "3e011ae22cc904e1a11d484c8474c5e9",
"assets/assets/images/espresso.jpg": "a7abd07840367f8f0b869b405cc99d83",
"assets/assets/images/flat_white.png": "09a148f537f8fe194eb76a64030b1b54",
"assets/assets/images/latte.jpg": "855e1511e988a2c693fd4d460ae4b0a3",
"assets/assets/images/latte.png": "adb18f6b38d34e767c84f7d7dbe27e00",
"assets/assets/images/noise.png": "9dd66916b6d50636ce4998727c5e2b69",
"assets/assets/images/noisy-background.jpg": "acc8b52222513c4057f918ffec982a99",
"assets/assets/images/user.jpg": "5a14f615e3f36acec2839f5c3c46c342",
"assets/assets/images/veg.png": "600836b7e31fc4fcc78476509f010c56",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c9aa43cc45ebfb9f4335534d312e6c53",
"assets/NOTICES": "2d384ca6490d7d8d7f7d2d1a582d582c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e4a0c70ea54e6b85e728b81db3b7276e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "73bc6c303137f607b27dee75e7283904",
"/": "73bc6c303137f607b27dee75e7283904",
"main.dart.js": "87120351a365f81300358dc2641cb57d",
"manifest.json": "395ae34533b5504aadabfea7c16ebbe8",
"version.json": "2809d4730c89d6cc6a347a3f779691e8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
