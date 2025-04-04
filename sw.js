// sw.js - Service Worker

const CACHE_NAME = 'sieste-fm-cache-v2'; // Incrémenter version si changements majeurs
const urlsToCache = [
    '/', // Cache la racine
    '/index.html',
    '/styles.css',
    '/script.js',
    '/logo.png', // Assurez-vous que c'est le bon nom/chemin
    '/manifest.json', // Ajouter le manifest au cache
    '/icons/icon-192x192.png', // Ajouter les icônes principales au cache
    '/icons/icon-512x512.png'
];

// Installation du Service Worker et mise en cache initiale
self.addEventListener('install', event => {
    console.log('[SW] Installation');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Mise en cache des ressources initiales');
                return cache.addAll(urlsToCache);
            })
            .catch(err => {
                console.error('[SW] Échec de la mise en cache initiale:', err);
            })
    );
    self.skipWaiting(); // Force le SW à s'activer immédiatement
});

// Activation du Service Worker et nettoyage des anciens caches
self.addEventListener('activate', event => {
    console.log('[SW] Activation');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Suppression de l\'ancien cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim(); // Prend le contrôle immédiatement
});

// Stratégie de cache : Cache d'abord, puis réseau (Cache First) pour les ressources statiques
self.addEventListener('fetch', event => {
    // Ne pas mettre en cache les requêtes vers Suno (elles sont dynamiques)
    if (event.request.url.includes('suno.com')) {
        // console.log('[SW] Fetch réseau uniquement pour:', event.request.url);
        event.respondWith(fetch(event.request));
        return;
    }

     // Ne pas mettre en cache les requêtes non-GET (POST, PUT, etc.)
    if (event.request.method !== 'GET') {
        event.respondWith(fetch(event.request));
        return;
    }


    // Pour les autres requêtes (nos fichiers statiques)
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Trouvé dans le cache : on le retourne
                if (response) {
                    // console.log('[SW] Ressource trouvée dans le cache:', event.request.url);
                    return response;
                }

                // Non trouvé dans le cache : on va sur le réseau
                // console.log('[SW] Ressource non trouvée dans le cache, fetch réseau pour:', event.request.url);
                return fetch(event.request).then(
                    networkResponse => {
                        // Vérifier si la réponse est valide avant de la mettre en cache
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                             // Ne pas mettre en cache les erreurs ou les réponses cross-origin sans CORS
                            return networkResponse;
                        }

                        // Cloner la réponse car elle ne peut être consommée qu'une fois
                        const responseToCache = networkResponse.clone();

                        // Mettre la nouvelle réponse en cache pour la prochaine fois
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                // console.log('[SW] Mise en cache de la nouvelle ressource:', event.request.url);
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse; // Retourner la réponse du réseau
                    }
                ).catch(error => {
                    // Échec du fetch réseau (mode hors ligne)
                    console.warn('[SW] Fetch réseau échoué pour:', event.request.url, error);
                    // On pourrait retourner une page offline générique ici si besoin
                    // return caches.match('/offline.html');
                    // Pour l'instant, on laisse l'erreur se propager (le navigateur affichera une erreur)
                });
            })
    );
});