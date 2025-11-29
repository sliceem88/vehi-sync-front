const CACHE_VERSION = process.env.APP_VERSION;
const STATIC_CACHE = `static-cache-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-cache-${CACHE_VERSION}`;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            return cache.addAll([
                '/',
                '/favicon.ico',
                '/manifest.json',
            ]);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                    .filter(key => !key.includes(CACHE_VERSION))  // delete older caches
                    .map(key => caches.delete(key))
            );
        })
    );

    self.clients.claim();
});
