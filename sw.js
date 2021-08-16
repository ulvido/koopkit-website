"use strict";

// cache define
const CACHE_NAME = "sveltePWAtest-v1";
const FILES_TO_CACHE = [
  "favicon.png",
  "global.css",
];

// service worker install
self.addEventListener("install", e => {
  console.log("[Service Worker] Installing...");

  const preCache = async () => {
    console.log("[Service Worker] Opening Cache...");
    const cache = await caches.open(CACHE_NAME);
    console.log("[Service Worker] Caching all: app shell and content");
    await cache.addAll(FILES_TO_CACHE);
  }
  e.waitUntil(preCache());
  console.log("[Service Worker] Install Completed ✓");
  // Forces the waiting service worker to become the active service worker.
  self.skipWaiting();
});

// service worker on activation
self.addEventListener("activate", e => {
  console.log(`[Service Worker] Activated ✓`);

  let cacheWhitelist = [
    CACHE_NAME,
  ];

  const validateCache = async () => {
    console.log("[Service Worker] Validating Cache...");
    const keyList = await caches.keys();
    return await Promise.all(keyList.map(key => {
      if (cacheWhitelist.indexOf(key) === -1) {
        return caches.delete(key);
      }
    }));
  }

  e.waitUntil(validateCache());
  console.log("[Service Worker] Validate Cache Completed ✓");
  /** When a service worker is initially registered, 
   * pages won"t use it until they next load. 
   * The claim() method causes those pages to be controlled immediately. 
   */
  e.waitUntil(self.clients.claim());
});

// listen fetch
self.addEventListener("fetch", (e) => {

  if (e.request.mode !== "navigate" || e.request.method !== "GET") {
    // Not a page navigation, bail.
    return;
  }

  const fetchResponder = async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(CACHE_NAME);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  }

  e.respondWith(fetchResponder())
  console.log("[Service Worker] Fetch Completed ✓");
});

// NOTIFICATIONS
// notification cancelled
self.addEventListener("notificationclose", e => {
  let { notification } = e;
  let primaryKey = notification.data.primaryKey;

  console.log("Closed notification: " + primaryKey);
});

// notification action
self.addEventListener("notificationclick", function (e) {
  let { notification, action } = e;
  let primaryKey = notification.data.primaryKey;

  if (action === "close") {
    console.log("Closed tapped: " + primaryKey);
    notification.close();
  } else {
    clients.openWindow("http://www.example.com");
    notification.close();
  }
});