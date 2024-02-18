'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "44597eab59a9a31e6ac3f391ee39de6e",
"index.html": "fb40d145422a1f4d8b368eb4bc9bd187",
"/": "fb40d145422a1f4d8b368eb4bc9bd187",
"main.dart.js": "93af9790ba8828c9dfc1d2831f2b992e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "bb480d52b46839c00e20f2ba1725eb1c",
"icons/Icon-192.png": "bb480d52b46839c00e20f2ba1725eb1c",
"icons/Icon-maskable-192.png": "bb480d52b46839c00e20f2ba1725eb1c",
"icons/Icon-maskable-512.png": "bb480d52b46839c00e20f2ba1725eb1c",
"icons/Icon-512.png": "bb480d52b46839c00e20f2ba1725eb1c",
"manifest.json": "efa6ec09ac2e782803722c1a4fedee99",
"assets/AssetManifest.json": "31175c5236828045eb5a067b62179e51",
"assets/NOTICES": "74b1b87eb7afa61b04612ee4690d5e92",
"assets/FontManifest.json": "0e0df9cfb22baed2bd1b72587c59c7f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "3894b1371308030162dd2db0f0e0a469",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "338b89108316caf1a2eaa759112fa93a",
"assets/fonts/MaterialIcons-Regular.otf": "de89865233944d2ade45b5cfa7089fcc",
"assets/assets/images/cuisine.png": "6034b0df0e0907cc09267df09d99d8e3",
"assets/assets/images/info.png": "4e0d435508fb7449a0cc73326d92ad75",
"assets/assets/images/piscine-public.jpg": "163e6e8afa57ea46d5f2c16986f4b7d8",
"assets/assets/images/alarme-incendie.jpg": "77cf03d128f853da70e126c9803295e0",
"assets/assets/images/wifi.jpg": "2ef9c5edb2d4b34ed71582e75c9d1534",
"assets/assets/images/mtn-logo.png": "fc20c093b48480bc4bf16da568064109",
"assets/assets/images/gardien.jpg": "b3b3066dead3a453890af04dabbb2fd1",
"assets/assets/images/service-logement.jpg": "7dee15487d412bc11b89a0237e26a320",
"assets/assets/images/europeen.png": "feef230fd3c8fd931157ecf093726f78",
"assets/assets/images/wifi.png": "764fe64b30dc6cbfd30eb53f3f566276",
"assets/assets/images/systeme-audio.png": "d7d5d0682614b4f35b5ba19af38aeb15",
"assets/assets/images/adresse.png": "31aab2e2b860315397d621ab0344ee5e",
"assets/assets/images/avatar-feminin.jpg": "6631a9813981e7099f8aabd4e2533fb2",
"assets/assets/images/ping-pong.png": "221e0a2bf1043de264fdaf10eba6a6db",
"assets/assets/images/evolution.png": "4c34752759ac97513fc9ac041808cbfb",
"assets/assets/images/service-taxi-moto.jpg": "ea94ca4e124757d59d437153a2a9f8c4",
"assets/assets/images/easy-stay.jpg": "ba644676859d5e5c02d97bcfb2dea750",
"assets/assets/images/wallet.png": "cdd964d7be481387826da7ea870d5133",
"assets/assets/images/cheminee.png": "35a7ec7bf3052e51accb48c3c5acd08d",
"assets/assets/images/eau-forage.jpg": "582e1b93fdddef8a517a86efe520d6f6",
"assets/assets/images/parrainer.png": "f9950e2d7bb49d7f82f734a858bd8310",
"assets/assets/images/tv.png": "8cc4d08d5d116948533f21301e9901e4",
"assets/assets/images/baignoire.jpg": "883dba1855f3c6b0ab96cb6b915127ad",
"assets/assets/images/tv.jpg": "91d7a5b0bbe39376943505cb75327b9e",
"assets/assets/images/down-arrow.png": "1c1121b6919911b10366ac58a1d2da25",
"assets/assets/images/lit-king.jpg": "6dea626da7ea623423b5018b6f311f27",
"assets/assets/images/barbecue.png": "75d494f69f2ba7aef22a6073458e2ed5",
"assets/assets/images/standard.png": "21c332442f0a08768f887334a1b75c47",
"assets/assets/images/surplacerestau.png": "edfac4fe482ae7295a1b014fb2f5fee2",
"assets/assets/images/avatar-feminin-noir.jpg": "30262c8fd48c4d120578959e40991f8e",
"assets/assets/images/FlavorSwift.jpg": "70863934a90062269ef1c8a9327738c2",
"assets/assets/images/villa.png": "b647ff681bbe66ee533b6ec3e0641d2b",
"assets/assets/images/service-voiture.jpg": "b221863d0735a3e5e60dc3285fa58468",
"assets/assets/images/bath.png": "ea77d68979136dfb713cadfa73406085",
"assets/assets/images/jeux-enfant.jpg": "ec571380dac816db3d2e9c5d1ac83fe7",
"assets/assets/images/balcon.png": "94eca1690f7cdf9ed2fcb49f2b547ddf",
"assets/assets/images/qr-code.png": "15b1ba038731602922b5235dc82f5507",
"assets/assets/images/bouilloire-electrique.jpg": "f5a66c311fdb92d38f1c4240ea5bd833",
"assets/assets/images/fer.jpg": "190de0604aac45704a3e6ff939a7e6a5",
"assets/assets/images/asiatique.png": "d8bac8575d1f94e09900a7ed9491d52e",
"assets/assets/images/machine-laver.jpg": "e89e96dd0719751944fd6bc6cc87afd5",
"assets/assets/images/service-restaurant.jpeg": "828003cd730969f6f966d8a8f57cbbe1",
"assets/assets/images/cuisiniere.jpg": "5ed2a8ae0352c9e41561c60b1b8a3330",
"assets/assets/images/micro-onde.jpg": "9ab479b499695ba3d55bc14ad2c994a1",
"assets/assets/images/vue-sur-eau.jpg": "c9601c4b70073e9bc1dd832366732615",
"assets/assets/images/faire-secher.png": "f85592147b08391c2189e96ed23a7c87",
"assets/assets/images/lit-simple.jpg": "a2f1844de785488d02a1f4d402dfc554",
"assets/assets/images/deally.png": "b45eaec72a44bdd7e29ba87b597ba225",
"assets/assets/images/livraison.png": "6b29b0aefe623b63924b7d1a62a57928",
"assets/assets/images/refrigerateur.jpg": "b1fdd35bcb3b1476c91d8e67204ea9e8",
"assets/assets/images/chaudiere-electrique.jpg": "a292418c00d0aa10b8ac598f01e3da3c",
"assets/assets/images/bureau.png": "7f438a3b346486ea5bf7d3a37b187c90",
"assets/assets/images/autre-adresse.png": "69f6f806ad2459c98d1306601b4a6d1c",
"assets/assets/images/table-a-manger.png": "e1e8be27a6ca965550bcaf967e7b93ed",
"assets/assets/images/amerique.png": "6d5618a981eefa43f77ccfe6285f2772",
"assets/assets/images/home.png": "f57db47d10f091d8444fcc4295956854",
"assets/assets/images/table-basse.jpg": "3eaf6ace3ac85667ef8493bd0a8bf851",
"assets/assets/images/user.png": "a3afb6f07d2d893705367886912f712c",
"assets/assets/images/appartements.png": "e565d4cb7ceebe6b7849cf116a1d98c0",
"assets/assets/images/commodite/alarme-incendie.png": "4c56573ec61a4e54c7b01d1fbf5a0c3a",
"assets/assets/images/commodite/gardien.png": "587c3c0fd44146aaa2e3a01155f304a2",
"assets/assets/images/commodite/wifi.png": "764fe64b30dc6cbfd30eb53f3f566276",
"assets/assets/images/commodite/eau-forage.png": "1b12954304da5630d631c5f745657e95",
"assets/assets/images/commodite/hotel.png": "759b2dba7d5da86a2ba15043ccab2cb7",
"assets/assets/images/commodite/baignoire.png": "ea77d68979136dfb713cadfa73406085",
"assets/assets/images/commodite/lit-king.png": "bbfe5d8e68568a20b3a783857a7731c6",
"assets/assets/images/commodite/chaudiere.png": "ee600d53e2443ff5b56319ecbd8bdd32",
"assets/assets/images/commodite/machine-laver.png": "f85592147b08391c2189e96ed23a7c87",
"assets/assets/images/commodite/micro-onde.png": "329740c22faed6997474618232f9fbe7",
"assets/assets/images/commodite/cuisiniere.png": "61947a237506645177ae96114ea37ce2",
"assets/assets/images/commodite/lit-simple.png": "b2cc60b583ae1606ba0bfc8b2a4e639e",
"assets/assets/images/commodite/seche-linge.png": "cf800a84e12299bdd3ed33f05b7db7a9",
"assets/assets/images/commodite/refrigerateur.png": "9e0d57e70fa9e762f487313981d248c9",
"assets/assets/images/commodite/table-a-manger.png": "f7774c237a5ed33c85adcb2349a754a5",
"assets/assets/images/commodite/table-basse.png": "c47b074c561efe23c5c86b3ebf19b4a2",
"assets/assets/images/commodite/piscine-prive.png": "24c62094b4a991bc0d6bf1f512a7dbb1",
"assets/assets/images/commodite/menagere.png": "77a6787c45c91c829d122b101edf7d77",
"assets/assets/images/commodite/canape.png": "17548dbddddd8ec0b32f3905c6787e78",
"assets/assets/images/commodite/seche-cheveux.png": "a76e8d0c27ff997091806c983327d99c",
"assets/assets/images/commodite/parking.png": "21698bbc733a90ba4065ecaa53ba8a40",
"assets/assets/images/commodite/televiseur.png": "ec54f3994b68c8df6909425c414c5003",
"assets/assets/images/commodite/piscine-commune.png": "151046be3659893a73bec52ad87e9f11",
"assets/assets/images/commodite/bouilloire.png": "896b5915fd8c04f8d385ee5f16dcd39f",
"assets/assets/images/commodite/extincteur.png": "440f89b90c25a32b501c297756885aa5",
"assets/assets/images/commodite/cafetiere.png": "77d78e20d819a1e8d44c5750b38ba33b",
"assets/assets/images/commodite/climatiseur.png": "b34c122df2f69ddefaecfe8643eeddbc",
"assets/assets/images/commodite/fer-repasser.png": "eb8a5aeb016eb92f227635383d5731ab",
"assets/assets/images/commodite/machine-a-cafe.png": "3221c8e96c14bf698d61b5578d832160",
"assets/assets/images/commodite/mixeur.png": "10c5a55f13f208a5d3eee73fa5799dd1",
"assets/assets/images/commodite/ventilateur.png": "f49e706f4a08c46d73ff2301571ad916",
"assets/assets/images/commodite/lit-double.png": "2df4d53338e95c0b8da34818525d25ed",
"assets/assets/images/commodite/couverts.png": "6034b0df0e0907cc09267df09d99d8e3",
"assets/assets/images/commodite/douche.png": "a792ba01499ee9affc034b76da1366d4",
"assets/assets/images/commodite/jardin-public.png": "5902461299536691ec7862bf66d18440",
"assets/assets/images/commodite/jardin-prive.png": "363185e93851feee64377e4782b72f39",
"assets/assets/images/commodite/miroir.png": "7dfbe0edfa54a2f35249415aefd018e8",
"assets/assets/images/commodite/armoire.png": "a8a7c1d774e155ab1385e00830896f9f",
"assets/assets/images/oceanie.png": "5aea0a0f371cc6ff473c2b1e27122427",
"assets/assets/images/filtre.png": "aefab42852f3566aef39801933457306",
"assets/assets/images/africa.png": "68b35a6ab689b82445dc7d9c5fe6d77a",
"assets/assets/images/draps-de-lit.png": "28f91c5c36a883284f2a806097b2f5ae",
"assets/assets/images/couvert.jpg": "274f5e5622a8168c60e1bfdb38c77861",
"assets/assets/images/suites.png": "93f341dfde53e78481cd4616c602d743",
"assets/assets/images/arrow_rigth.png": "bfe7766862a22c7039b5d7e7fdbadb30",
"assets/assets/images/piscine.png": "5e0d77e359f9967ecba119f885c90276",
"assets/assets/images/piscine-prive.jpg": "cc55dee24f0a9172389ec1724ee2ec69",
"assets/assets/images/gel-bain.png": "1bbbf0a3dde64b09dc4712ade4ca9ea7",
"assets/assets/images/terasse.jpg": "5bd4c619ce1407c09b696b1724bad63d",
"assets/assets/images/preparion.png": "d88dcd802bdfc5216a1cca38ce317e4e",
"assets/assets/images/double-lit.jpg": "68aea817f498d449cc16b7270d4b6b3c",
"assets/assets/images/search.png": "a67b7445ee1bb9681707178084aea316",
"assets/assets/images/seche-cheveux.jpg": "05623cedc3ec3c3b882af4bda27208b3",
"assets/assets/images/seche-cheveux.png": "4b71327c9225227b3f63a49cc246f165",
"assets/assets/images/avatar.jpg": "7cb3395bd202417fa2e4488358857cd0",
"assets/assets/images/parking.png": "8538ba2b3a6dd3ebd2a18cd5bfa32cd2",
"assets/assets/images/orange-money.png": "ebb2e30eea48f09fe2922fdf8adf1e57",
"assets/assets/images/parking.jpg": "82e2aade58400a43b55ce3bdc3272f61",
"assets/assets/images/machine-a-laver.png": "baba34523f605c55d96305d594845528",
"assets/assets/images/extincteurs.jpg": "148633645fdb1c6d1d29cba1f3f73cb9",
"assets/assets/images/frigo.png": "80cf73b5df890f1c72d6b12c7d17f0df",
"assets/assets/images/climatisateur.jpg": "6e4f293f75ece3ceb3b76e6f388df580",
"assets/assets/images/wave.png": "03d817befd9da709457caa3ec1d114c3",
"assets/assets/images/livree.png": "f49b3c96a9cb44b7d3be5a512f625d9c",
"assets/assets/images/hotels.png": "1d3555f1fb4f5dd53325014064d05113",
"assets/assets/images/cafetiere.jpg": "b582f852671131b3467c0949d889908a",
"assets/assets/images/table-manger.jpg": "c4192b16e559babce3f7f096f98d9d91",
"assets/assets/images/mur-douche.jpg": "4228554a8861f5a2c94f1b23a16aef06",
"assets/assets/images/swape.png": "bb480d52b46839c00e20f2ba1725eb1c",
"assets/assets/images/canape-moderne.jpg": "dbf23c882dd128b125c2d8b2dc424fc2",
"assets/assets/images/kit-secour.png": "cc0934fc0a06c7d6bab21910d269261a",
"assets/assets/images/bagage.png": "1d28f60936283cd959e3dca2d54f1d69",
"assets/assets/images/planche-a-repasser.png": "cfb12b91dc75af60f50f4cd6a25bbc78",
"assets/assets/images/exit.png": "19ce2933a3e63276dccf229a66619d2f",
"assets/assets/images/vue-eau2.jpg": "77bc2ef9036ce77ef4786c10c0796675",
"assets/assets/images/Mixeur.jpg": "2affc62e1cd856cde65160fbe2951d6d",
"assets/assets/images/traiteur.jpg": "ff72fa6bdb7a48c63d3a5d56f5c53026",
"assets/assets/images/amrmoire.png": "f4e4441d4947f4be60d697a8140b4231",
"assets/assets/images/extinters.png": "f3ad94e25f7548b7cdc5c91613b6a1a5",
"assets/assets/images/ventilateur.png": "2b93122c2e446de6e6d53398b3d33cc4",
"assets/assets/images/chambre.png": "a3cea64c289d423579a72a2e71f8871f",
"assets/assets/images/about-us.jpg": "6fb46fbca4abcc892e839c47bd32eb45",
"assets/assets/images/not-inclue.png": "12cd2fe2f7dd183ec5c7dd0965173247",
"assets/assets/images/info-alert.png": "806b906a281e195c7464d4f65eff45a7",
"assets/assets/images/regression.png": "f9958e505a5f03ab8ca74c7596a1a901",
"assets/assets/images/eau-cheau.png": "81e6a880c6c838e952bd00bade2a57f5",
"assets/assets/images/ventilateur.jpg": "63d53d5bfcff6b18b368d4ee6ac36dab",
"assets/assets/images/edit.png": "1936c09be10b669c761c54978689fb81",
"assets/assets/images/corde-linge-vetements.jpg": "68aa1c1a4128c1f719401edac53a95e7",
"assets/assets/images/cgu.png": "11f7f440d92b7737ebfe291ee8261596",
"assets/assets/images/garderie.png": "2bc0bb15322f5d0ab3cf41ebf8cd574e",
"assets/assets/images/vue-eau1.jpg": "178bdf78d65b140df2519d367b494ef0",
"assets/assets/images/deally-about.jpg": "2e6463498335691d910da813cd91d74d",
"assets/assets/images/menage-femme.jpg": "21bb90ff73804487948a2fc3a81bb013",
"assets/assets/images/moyens-de-paiement.png": "4be3947e96d98daa62d6b7892c54d81e",
"assets/assets/images/paypal.png": "9b817b7a19f430e7b9654b29f7ddbb00",
"assets/assets/images/shampoo.png": "13c14f92793c88110785cbb1401a4b60",
"assets/assets/images/up-arrow.png": "83b9adcb58a47f0e3ccc407e556f44e1",
"assets/assets/images/bar.png": "5c77f654000b0a22b1490a6c7fedfc55",
"assets/assets/images/livraisonresto.png": "77c1c33deca218b46fd0df76b5d17227",
"assets/assets/images/mobilier-exterieur.png": "cb5e1afed9352fafb0388c6b281af0c9",
"assets/assets/images/bg.jpeg": "05aacbfe4bfd855835025ad464416e20",
"assets/assets/images/jardin.jpg": "107ff109510a1378c78165cfa239e3b8",
"assets/assets/images/favorite.png": "17b677345d9fd2f6f6a7dc83910413f3",
"assets/assets/images/animaux.png": "554202876f6122cad949e922c236f5d8",
"assets/assets/images/jardin-public.jpg": "3db658e94fcd2a0aeab8c76033954a0e",
"assets/assets/images/why-swaped.jpg": "6bffd9e78818abb15519df75ab372029",
"assets/assets/images/miroir.jpg": "ddaf2ab89bebfbd2651a86070f6c0198",
"assets/assets/images/autres-equipement.png": "4fca5041e97ff7c0d7e6a607408b8c20",
"assets/assets/images/jardin-prive.jpg": "aa29663368875b2652358d518a5fb6ca",
"assets/assets/images/orders.png": "3e4f416d7b41a996e5800ae460553a14",
"assets/assets/images/cancel-commande.png": "5456d9f3cfdc544a7b323d1d6e0d02ab",
"assets/assets/images/armoire.jpg": "1261d40badd2f15a2a3d08ec0952035c",
"assets/assets/images/domicile.png": "495a3000987973b65ac2355c54d62d77",
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
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
