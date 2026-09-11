/* Service worker de l'application de révision de russe.
   Stratégie : cache-first avec mise à jour en arrière-plan.
   Pour forcer le rechargement des fichiers après un déploiement, incrémenter
   CACHE_VERSION. C'est le seul geste nécessaire. */

const CACHE_VERSION = 'revision-russe-v8';

const FICHIERS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './data/grammaire.js',
  './data/lexique.js',
  './data/phrases.js',
  './data/bloc2.js',
  './icones/icone-192.png',
  './icones/icone-512.png',
  './icones/icone-maskable-512.png',
  /* Seule entrée distante de la liste. Si vous retirez les polices de
     index.html pour supprimer toute requête vers un tiers, retirez aussi
     cette ligne : elle échouerait sans conséquence, mais autant être net. */
  'https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;600&family=JetBrains+Mono:wght@400;700&display=swap'
];

self.addEventListener('install', (ev) => {
  ev.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      /* addAll échoue en bloc si une seule requête échoue : les polices
         distantes sont donc mises en cache une par une, sans faire tomber
         l'installation si le réseau les refuse. */
      /* fetch + put plutôt que cache.add : add rejette en bloc et n'est pas
         disponible partout. Chaque fichier est mis en cache indépendamment,
         un échec réseau ne fait pas tomber l'installation. */
      Promise.all(FICHIERS.map((url) =>
        fetch(new Request(url, { cache: 'reload' }))
          .then((rep) => {
            if (!rep || !rep.ok) throw new Error('réponse ' + (rep && rep.status));
            return cache.put(url, rep);
          })
          .catch((err) => {
            console.warn('Précache impossible :', url, err && err.message);
          })
      ))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil(
    caches.keys()
      .then((cles) => Promise.all(
        cles.filter((c) => c !== CACHE_VERSION).map((c) => caches.delete(c))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (ev) => {
  const req = ev.request;
  if (req.method !== 'GET') return;

  /* La requête réseau est lancée SYNCHRONEMENT, et waitUntil est appelé dans le
     corps du gestionnaire : sans cela le navigateur peut tuer le service worker
     dès la réponse servie depuis le cache, et la mise à jour en arrière-plan
     n'aboutit jamais. Le cache resterait figé jusqu'au prochain changement de
     CACHE_VERSION. */
  const reseau = fetch(req).then((rep) => {
    if (rep && rep.ok && (rep.type === 'basic' || rep.type === 'cors')) {
      const copie = rep.clone();
      caches.open(CACHE_VERSION).then((cache) => cache.put(req, copie));
    }
    return rep;
  });
  ev.waitUntil(reseau.catch(() => {}));

  /* Cache d'abord, réseau en repli. */
  ev.respondWith(
    caches.match(req)
      .then((cachee) => cachee || reseau)
      .catch(() => reseau)
  );
});
