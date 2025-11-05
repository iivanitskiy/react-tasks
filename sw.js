const CACHE_NAME = 'my-app-cache-v2';
const DYNAMIC_CACHE_NAME = 'my-app-dynamic-cache-v2';

const urlsToCache = [
  '/',
  '/index.html',
  '/offline.html',
  '/src/main.jsx',
  '/src/index.css',
];

self.addEventListener('install', async () => {
	const cache = await caches.open(CACHE_NAME);
	await cache.addAll(urlsToCache);
});

self.addEventListener('activate', async () => {
  const cachesKeysArr = await caches.keys();
  await Promise.all(cachesKeysArr.filter(key => key !== CACHE_NAME && key !== DYNAMIC_CACHE_NAME).map(key => caches.delete(key)));
});

self.addEventListener('fetch', event => {
  event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }
  try {
    const response = await fetch(request);
    return response;
  } catch {
    return networkFirst(request);
  }
}

async function networkFirst(request) {
  const cache = await caches.open(DYNAMIC_CACHE_NAME);

  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request);
    return cached ?? await caches.match('/offline.html');
  }
};