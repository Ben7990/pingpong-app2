const CACHE_NAME = 'pingpong-v11';

// Полный список файлов для кеширования
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './manifest.json',
    './privacy.html',
    // Иконки - создадим их через эмодзи и CSS
    './icon-72.png',
    './icon-96.png',
    './icon-128.png',
    './icon-144.png',
    './icon-152.png',
    './icon-192.png',
    './icon-384.png',
    './icon-512.png',
    './favicon.ico'
];

// Устанавливаем Service Worker
self.addEventListener('install', event => {
    console.log('Service Worker установлен v11');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Кеш открыт');
                // Кешируем каждый файл отдельно, чтобы избежать ошибок при отсутствии иконок
                return Promise.allSettled(
                    urlsToCache.map(url => {
                        return cache.add(url).catch(err => {
                            console.log(`Не удалось закешировать ${url}:`, err);
                        });
                    })
                );
            })
            .then(() => self.skipWaiting())
    );
});

// Активируем Service Worker
self.addEventListener('activate', event => {
    console.log('Service Worker активирован v11');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('Удаляем старый кеш:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Перехватываем запросы
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).then(response => {
                    // Проверяем, что получили валидный ответ
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    // Кешируем только успешные ответы
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                });
            })
    );
});