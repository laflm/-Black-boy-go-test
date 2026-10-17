
const CACHE_NAME = 'black-boy-go-v4';

self.addEventListener('install', () => {
  // Wait for the player to accept the update.
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();

    await Promise.all(
      keys
        .filter(
          key =>
            key.startsWith('black-boy-go-') &&
            key !== CACHE_NAME
        )
        .map(key => caches.delete(key))
    );

    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (
    request.method !== 'GET' ||
    url.origin !== self.location.origin
  ) {
    return;
  }

  const isHTML =
    request.mode === 'navigate' ||
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('/');

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    try {
      const response = await fetch(
        request,
        isHTML ? { cache: 'no-store' } : {}
      );

      if (response.ok) {
        await cache.put(request, response.clone());
      }

      return response;
    } catch (error) {
      const cached = await cache.match(request);

      if (cached) return cached;

      throw error;
    }
  })());
});
