'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "934cbf403a54f37af0912b2ed77b9ce7",
"index.html": "bd40e5b3ff122216b6982f3b59095360",
"/": "bd40e5b3ff122216b6982f3b59095360",
"main.dart.js": "7c0a07aa2fa31509ffd673c6ab824fb2",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7a35df918f25915e500ecdef5829122f",
"assets/AssetManifest.json": "db57b626a44577de9b60d8941b465383",
"assets/NOTICES": "ec1a442dc6e8215499e01635304924f0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "499c6af84dd6746ddeaf8cb35f965131",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d56dce181400b18bf075b80011dbd121",
"assets/fonts/MaterialIcons-Regular.otf": "e7faf883d671ebfa6063157e0a4d01f4",
"assets/assets/svg/coin_button_2.svg": "fa3db088a58f5afc71c1c33fcf895f91",
"assets/assets/svg/usdt.svg": "e090404e93a81cd1fc1c78466954a897",
"assets/assets/svg/bottom_flash_2.svg": "19a7b1bad73d8fcd76e5b21bf84738d7",
"assets/assets/svg/coin_button_3.svg": "bfbf7ff5c54b13c5719e19bb49d215bd",
"assets/assets/svg/coin_button_1.svg": "72fb2cbbdc33e939e11ba70102c4eaa1",
"assets/assets/svg/button_home_sell_coin.svg": "0a7da942e64fd83efe29a5b81daea8b8",
"assets/assets/svg/bottom_flash_1.svg": "83c54b8b37590774519e8cbe6eb436c9",
"assets/assets/svg/coin_button_4.svg": "174ef49e2cc150df5954d48623986fc5",
"assets/assets/svg/change_pay_nopass.svg": "e0dca98077a87fd31f5bce30c8b527a0",
"assets/assets/svg/notifications_have.svg": "63ee24b1b0b89f6c459194398dffc346",
"assets/assets/svg/down.svg": "f55b5424e1ccdeb075737a2dd07b9be5",
"assets/assets/svg/icon_phone.svg": "476a18fdc127c8e5366becfb066501a2",
"assets/assets/svg/coin_button_5.svg": "9bc5e718bede6e85b49b20a5c92a2196",
"assets/assets/svg/vector.svg": "dd86847edb6411eb460096348aa0b334",
"assets/assets/svg/icon_hide.svg": "d7dcc269f9e55ea8a549258d6b443727",
"assets/assets/svg/button_hot_background.svg": "4889a7686b08434b2dec6753a5cd1022",
"assets/assets/svg/verified_s.svg": "0095381973838359e0b3845d89642919",
"assets/assets/svg/add.svg": "eee7c73c4f59444ea637a3e4ce2e76cc",
"assets/assets/svg/verified_f.svg": "8a753d197d09612d1cf7fa0f81cb309c",
"assets/assets/svg/close.svg": "9581dc078dfec4ebbf3ac18b0daf76d3",
"assets/assets/svg/copy.svg": "6a52450ce89d05aa65fb3d87715f8905",
"assets/assets/svg/bottom_home_1.svg": "8b58f8bdb1c63563c3166a91bf761d11",
"assets/assets/svg/right.svg": "a74092b203cb7b58e8c735b3719a94de",
"assets/assets/svg/id_2.svg": "4961934988928e16a1f65bbaccf65da2",
"assets/assets/svg/icon_lock.svg": "55792b443a9aa0159f5baaa81b6576ad",
"assets/assets/svg/login_title_left.svg": "dce868d0eae2d1420d1c8eac671552ce",
"assets/assets/svg/bottom_home_2.svg": "10c5e824666be3944566ad47bf13e224",
"assets/assets/svg/id_1.svg": "8d833d695e2ea2041fc8f622b42ff25b",
"assets/assets/svg/logo_2.svg": "c3f4205db9e8395d7a6c787bc70803f8",
"assets/assets/svg/icon_code.svg": "d6d0bb9261a22744e339fc232bf233b2",
"assets/assets/svg/camara.svg": "10d2da2229556e509518471428a75f29",
"assets/assets/svg/bottom_scan.svg": "2a0151bf7477aa1e994db0653cd5ce40",
"assets/assets/svg/faq.svg": "da3b3017a8c5bff500ecd4e8165f5be6",
"assets/assets/svg/chat_1.svg": "ab134b0e906ee16164cef32c654a4591",
"assets/assets/svg/isdone.svg": "f1c13a53e649b321829aeeef3acc52b2",
"assets/assets/svg/bottom_chat_2.svg": "655de904679868a09f414b0aa77b650a",
"assets/assets/svg/page_select.svg": "9b7a1984b8349a4bd180c71b112afc1a",
"assets/assets/svg/filter.svg": "18b5e66d993cd53822e872a0f7eeb1b6",
"assets/assets/svg/icon_user.svg": "4b4ba144a77ccc69557d9fcfd303d170",
"assets/assets/svg/bottom_chat_1.svg": "d253688b2857d24aa9d0f8577dbd71dc",
"assets/assets/svg/notifications.svg": "15b00ad0b4a89a70b5b4a22a0919bcba",
"assets/assets/svg/error.svg": "c5735355c4d4eb732d56a98a800089b8",
"assets/assets/svg/bottom_my_2.svg": "80c0880c1cbd708ba1f102162c70666a",
"assets/assets/svg/login_title_right.svg": "45cb12b3a6b8dbe9021ae7e46b4c31e4",
"assets/assets/svg/logo.svg": "e4826d9a57661e6750a03e05f48cc20e",
"assets/assets/svg/del.svg": "6d63d83f28a05ffdd80fcf3b1f1ced31",
"assets/assets/svg/help.svg": "2e29f6ab823d3e4a3529f6d6b58aa864",
"assets/assets/svg/bottom_my_1.svg": "72b2e34386cf231b20dcfe7fd941b912",
"assets/assets/svg/page_unselect.svg": "46506e1b265bafa3aad44d4c467fa2ec",
"assets/assets/svg/icon_show.svg": "833e1ca5866e7abf8f3493d406239be5",
"assets/assets/images/news.png": "ca659cde3ef67bd9a9e42deef87014d0",
"assets/assets/images/arrow_right_back.png": "57175f147940d1a9d109cd144926df61",
"assets/assets/images/sucess.png": "bcc8608bcdefa79047584dc5d84b53eb",
"assets/assets/images/login_background.png": "fa614cd948b1cd810d91b56e1ceb2722",
"assets/assets/images/wallet.png": "0a93bfc5e9f67ed03c85bef6a39ad6fe",
"assets/assets/images/kefu_1.png": "916c29c110b3bcb68a4172d83785daba",
"assets/assets/images/system_announcement_icon.png": "6a9efe5f16d6aafd284704d298655673",
"assets/assets/images/website_filing_icon.png": "90bded4cbf75fc5efae67dcf4cad6fd8",
"assets/assets/images/open-eyes.gif": "e3ed55236b39df67e10741e56389cc27",
"assets/assets/images/kefu_2.png": "da1d2c03aeafa813c9bff39933dae91e",
"assets/assets/images/open-mouth.gif": "3908d4179a424fffa89656c338715bdc",
"assets/assets/images/lock.png": "10ce2980a457e63ee3c868372e351c22",
"assets/assets/images/version_information.png": "1f3cb872b73ce2701881ba364124286b",
"assets/assets/images/and.png": "ce16cc9a52e97a319add351f4c585e4a",
"assets/assets/images/service.png": "ef98660d8d474743a62f4a68e095401d",
"assets/assets/images/turn-left.gif": "da4613bcb37ac09c6ab308ff2451a9a6",
"assets/assets/images/wallet_title_bg.png": "b08b14c8ba46a7ce4dde4669da4c6cb4",
"assets/assets/images/mine_bg.png": "60db985404769941e7f4d76ec582b67d",
"assets/assets/images/alert_background.png": "b08f1fc98be94087f52e13c494000de8",
"assets/assets/images/upgrade_top.png": "b7b5d2d34dd01c27edc4e29238b60dfc",
"assets/assets/images/my_orderlist_sell.png": "0a8607c5d5d766f3941b4e83e3d957aa",
"assets/assets/images/ispayed.png": "5b8d22f33f55b76db4d2ed83c5c0be98",
"assets/assets/images/promotion.png": "36684fdd732f18384c636c8cd67abaa0",
"assets/assets/images/robot_icon.png": "63231ce631a95a1ea13855522c20cb3b",
"assets/assets/images/unread.png": "6423cfc888c76e7626fccb1e589f1e26",
"assets/assets/images/account.png": "926e79c877362fe69ae52ff3a9b46e6f",
"assets/assets/images/safety.png": "f19c447b593c1ae59e63b3b95d36452c",
"assets/assets/images/flash_exchange_rightbar.png": "36f7884238f6fbf04da4699f74eaeb79",
"assets/assets/images/pop_close.png": "8791971df5a43c034f535a3d8dc49160",
"assets/assets/images/my_orders_filter.png": "c10d24c9b4229b85e08b07a49c176b1f",
"assets/assets/images/face.png": "9f4133ff9042b2111e3bc91c2e3c65f0",
"assets/assets/images/polygon.png": "154177a0ddd48354218aaaf02feac263",
"assets/assets/images/upay.png": "7f48fa87ace20214f6af282edc72e523",
"assets/assets/images/left_icon.png": "71f6b2febd3000e3f51a6d502263074e",
"assets/assets/images/chat_default_avatar.png": "e525669ff28d5d1a2f8b78c59d4e0e89",
"assets/assets/images/mine_faqs.png": "ad48ff943c097b0687c0ace141fc53b0",
"assets/assets/images/avatar.png": "9c44d5af13cd340c47019af70038a02f",
"assets/assets/images/weichatpay.png": "faf48369527f40f707d4fe4afcad8e5d",
"assets/assets/images/chat_service.png": "ea5a04fa48183aaf358bf0df34a618b1",
"assets/assets/images/logo.png": "bfdf28c0e62d36044112f0c083361807",
"assets/assets/images/login_title_right.png": "bf11543dbc8cc33f9a1f8ccfe2790add",
"assets/assets/images/pic_front.png": "43031c1bff03a0391a2aadaefddac091",
"assets/assets/images/share_gift_icon.png": "f1daac68afd6ff8bbd20a8cf2a4d35a5",
"assets/assets/images/turn-right.gif": "60a4c4315f82381319d9e421c17d1aac",
"assets/assets/images/phone.png": "c4727f188b65a97dfb9c4ce0a04ce889",
"assets/assets/images/my_orderlist_buy.png": "8ba54b1ee6ac4b54bd6b3d4260fd74d6",
"assets/assets/images/coin-icon.png": "68d74f97c9fe43eab5fa46202aa8fd48",
"assets/assets/images/alipay.png": "ef1c45fac3b9b36f5d68291842998873",
"assets/assets/images/wallet_title_bg_2.png": "977854328765416d66f3ec16263558fb",
"assets/assets/images/bank.png": "f3e1059ca7fb1505cd809d6f575d81cd",
"assets/assets/images/scan_back.png": "fa8a1f41a8102c3661e71250a181ee82",
"assets/assets/images/login_title_shardow.png": "f0827acc6b037168a66418ad368b4226",
"assets/assets/images/tutorials-icon.png": "36d1fcff165cda65492cb772406be8e2",
"assets/assets/images/home_back_img.png": "fca5a99f19ba4b978bf00263bd96c315",
"assets/assets/images/edit.png": "d470f4d25e7d02bcb40cf49fef703bcb",
"assets/assets/images/flash_exchange_logo.png": "459b5e47f1cea67c276b954200e5acf6",
"assets/assets/images/scan_select_photo.png": "223d837225622e30f71924f46060adfa",
"assets/assets/images/chat_3.png": "6fe7a6c8440d2fdf19968565ac913643",
"assets/assets/images/chat_notice.png": "68b18e7322170e1f53c77ccd01caf726",
"assets/assets/images/shanduibg.png": "02ebbc2e6787a15ddec5579692fc4e5c",
"assets/assets/images/union.png": "ca197f622caa57d1d815be6f44f0e27a",
"assets/assets/images/chat_2.png": "b529e4539a1e1941709ce00cad438531",
"assets/assets/images/wechat.png": "faf48369527f40f707d4fe4afcad8e5d",
"assets/assets/images/scan_mycode.png": "707767e280afa928b516003d8d9e6d7a",
"assets/assets/images/loading.png": "7c18c6ca08ca12323cc97309d8c439f5",
"assets/assets/images/add_qrcode.png": "a1d742c9134e0acfdb34d0224c71212e",
"assets/assets/images/login_title_left.png": "382c1989b6b1c9ac699cbc705efcd576",
"assets/assets/images/scan.png": "3f632f1b812657d769afab6c347741d0",
"assets/assets/images/scan_line.png": "a77e194ddf9d5a537cf8c60e8a17347e",
"assets/assets/images/user_default_avatar.png": "7592f22fb211d0905cdd6e0daabd7e9e",
"assets/assets/images/sign_gift_icon.png": "678aff8a025289ce763f82c9af54cab2",
"assets/assets/lottie/loading.zip": "175fefa4b9a61f23b51acc586ca76dfd",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
