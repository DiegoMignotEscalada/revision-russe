/* Service worker de l'application de révision de russe.
   Stratégie : cache d'abord, avec mise à jour en arrière-plan.
   Pour forcer le rechargement des fichiers après un déploiement, incrémenter
   CACHE_VERSION. C'est le seul geste nécessaire. */

const CACHE_VERSION = 'revision-russe-v9';

/* Tout ce que l'application utilise, et rien d'autre. Depuis la version 9, la
   liste ne contient plus aucune adresse distante : les polices sont dans le
   dossier polices/. */
const FICHIERS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './data/grammaire.js',
  './data/lexique.js',
  './data/phrases.js',
  './data/bloc2.js',
  './data/bloc3.js',
  './icones/icone-192.png',
  './icones/icone-512.png',
  './icones/icone-maskable-512.png',
  './polices/spectral-latin-300-normal.woff2',
  './polices/spectral-latin-400-normal.woff2',
  './polices/spectral-latin-600-normal.woff2',
  './polices/spectral-cyrillic-300-normal.woff2',
  './polices/spectral-cyrillic-400-normal.woff2',
  './polices/spectral-cyrillic-600-normal.woff2',
  './polices/jetbrains-mono-latin-400-normal.woff2',
  './polices/jetbrains-mono-latin-700-normal.woff2',
  './polices/jetbrains-mono-cyrillic-400-normal.woff2',
  './polices/jetbrains-mono-cyrillic-700-normal.woff2'
];

self.addEventListener('install', (ev) => {
  ev.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      /* fetch + put plutôt que cache.addAll : addAll rejette en bloc. Chaque
         fichier est mis en cache indépendamment, un échec réseau sur l'un ne
         fait pas tomber l'installation. */
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

  /* Seules les requêtes vers ce site sont prises en charge. Tout le reste est
     laissé au navigateur, sans passer par le cache : le service worker ne
     stocke ni ne sert jamais de contenu tiers. */
  let memeOrigine = false;
  try { memeOrigine = new URL(req.url).origin === self.location.origin; }
  catch (err) { memeOrigine = false; }
  if (!memeOrigine) return;

  /* La requête réseau est lancée SYNCHRONEMENT, et waitUntil est appelé dans le
     corps du gestionnaire : sans cela le navigateur peut tuer le service worker
     dès la réponse servie depuis le cache, et la mise à jour en arrière-plan
     n'aboutit jamais. Le cache resterait figé jusqu'au prochain changement de
     CACHE_VERSION. */
  /* cache: 'no-cache' : la copie de rafraîchissement est toujours revalidée
     auprès du serveur. Sans cela, le navigateur peut rendre sa propre copie
     encore « fraîche » pendant dix minutes, et le cache mêlerait l'ancienne
     version d'un fichier à la nouvelle d'un autre. */
  const reseau = fetch(req, { cache: 'no-cache' }).then((rep) => {
    if (rep && rep.ok && rep.type === 'basic') {
      const copie = rep.clone();
      caches.open(CACHE_VERSION).then((cache) => cache.put(req, copie));
    }
    return rep;
  });
  ev.waitUntil(reseau.catch(() => {}));

  /* Cache d'abord, réseau en repli. ignoreSearch : une adresse ouverte avec un
     paramètre ajouté par un lanceur ou un partage doit trouver la même page. */
  ev.respondWith(
    caches.match(req, { ignoreSearch: true })
      .then((cachee) => cachee || reseau)
      .catch(() => reseau)
  );
});
