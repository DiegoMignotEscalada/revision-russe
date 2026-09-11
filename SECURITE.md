# Audit de sécurité

Contexte : l'application est utilisée sur un téléphone professionnel. Ce
document décrit ce qu'elle expose, ce qu'elle ne fait pas, et ce qui reste à
votre appréciation. Les contrôles automatiques correspondants sont dans
`tools/audit-securite.js`.

---

## Ce que l'application est, techniquement

Un site statique. Pas de serveur, pas de base de données, pas de compte, pas
d'authentification. Quatre fichiers de code et quatre fichiers de données,
servis tels quels par GitHub Pages en HTTPS.

**Aucune dépendance à l'exécution.** Ni bibliothèque, ni greffon, ni gestionnaire
de paquets. La chaîne d'approvisionnement logicielle, qui est aujourd'hui le
premier vecteur de compromission des applications web, est ici inexistante :
il n'y a rien à compromettre en amont. Les outils de test (`jsdom`, `eslint`)
ne sont jamais servis au navigateur.

**Aucune permission demandée.** Pas de notifications, pas de géolocalisation,
pas d'accès aux contacts, à la caméra, au micro, aux fichiers. Le manifeste
n'en réclame aucune.

---

## Surfaces d'entrée, et ce qui a été éprouvé

L'application ne reçoit d'entrée que de trois sources. Toutes les trois ont été
attaquées.

### 1. Le stockage local du navigateur

C'est la seule mémoire de l'application. Seul du code de la **même origine**
peut y écrire.

Le seul contenu libre qu'elle réaffiche est le texte de vos signalements. Huit
charges d'injection classiques y ont été introduites — balise `img` avec
gestionnaire d'erreur, `script`, `svg` avec `onload`, `iframe` en
`javascript:`, sortie de `textarea`, `@import` CSS — puis les quatre onglets
rendus. **Aucune n'a produit d'exécution, aucune n'est entrée dans le DOM comme
balise.** Tout contenu passe par une fonction d'échappement avant insertion, et
un contrôle automatique vérifie qu'aucune interpolation ne la contourne.

### 2. Le champ d'import

Même jeu de charges, injectées cette fois par le texte collé. Même résultat. Un
texte qui n'est pas un export valide est refusé sans être interprété, et sans
détruire l'état en place.

**Pollution de prototype** éprouvée séparément : un export contenant des clés
`__proto__`, `constructor` et `prototype` ne modifie pas `Object.prototype` et
ne perturbe ni le rendu ni les sessions. L'état chargé est reconstruit champ par
champ dans un objet neuf, jamais fusionné.

### 3. L'adresse par laquelle la page est ouverte

Un seul écran réaffiche l'URL — celui qui signale un fichier de données
manquant. Quatre adresses malveillantes ont été essayées, en chemin, en requête
et en fragment. Aucune exécution. L'audit a d'ailleurs trouvé là un vrai
défaut : `location.href` était inséré sans échappement. Corrigé, et l'écran
n'utilise plus que le chemin.

---

## Réseau : une seule requête vers un tiers, supprimable

**Le moteur ne fait aucune requête réseau.** Ni `fetch`, ni `XMLHttpRequest`, ni
`sendBeacon`, ni WebSocket. Vérifié automatiquement. Aucune mesure d'audience,
aucun traceur, aucun pixel.

La seule sortie vers un tiers est le chargement de deux polices de caractères
depuis Google Fonts, au premier lancement. Ce que Google voit alors : l'adresse
IP de l'appareil, son navigateur, et la page demandeuse. Ensuite, le service
worker sert tout depuis le cache.

**Pour supprimer cette requête**, retirez les trois lignes signalées en tête de
`index.html`, et l'entrée `fonts.googleapis.com` de la liste `FICHIERS` dans
`sw.js`. L'application fonctionne à l'identique ; la typographie retombe sur les
polices du système. Vérifié : aucune erreur, aucune référence distante
résiduelle.

Si votre politique interne restreint les appels sortants, c'est le réglage à
choisir.

---

## Politique de sécurité du contenu

GitHub Pages n'autorise aucun en-tête HTTP personnalisé. Une politique est donc
déclarée dans la page :

```
default-src 'self'; script-src 'self';
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com; img-src 'self' data:;
connect-src 'self'; object-src 'none'; frame-src 'none';
base-uri 'none'; form-action 'none'
```

Effet concret : même si un contenu malveillant parvenait à entrer dans la page,
il ne pourrait ni exécuter de script en ligne, ni charger un script distant, ni
envoyer quoi que ce soit ailleurs que sur cette origine. `unsafe-inline` n'est
accordé qu'aux styles ; les scripts sont tous des fichiers externes et n'ont
besoin d'aucune dérogation.

`connect-src` est à `'self'` plutôt qu'à `'none'` : cela suffit à empêcher
l'exfiltration vers un tiers — l'origine est un hébergement statique, sans
point de collecte — sans risquer de gêner le service worker.

---

## Service worker

Un service worker est un composant puissant : il s'interpose entre la page et le
réseau, et il persiste. Trois précautions vérifiées automatiquement :

- **Portée limitée.** Enregistré en chemin relatif, donc cantonné au
  sous-dossier `/revision-russe/`. Un chemin absolu lui aurait donné la portée
  de tout le domaine.
- **HTTPS exigé.** L'enregistrement est refusé hors HTTPS, et l'échec est
  affiché plutôt qu'avalé.
- **Cache discipliné.** Seules les réponses valides et de type connu entrent en
  cache ; les requêtes non `GET` ne sont pas interceptées ; les anciens caches
  sont purgés à chaque changement de version.

Le service worker est exécuté par un test dans un contexte simulé, avec un faux
cache et un faux réseau : installation, échec d'une ressource distante,
activation, réponse depuis le cache, et fonctionnement hors connexion.

---

## Données : ce qui est stocké, et où

Le stockage local ne contient que votre progression : pour chaque carte, un
intervalle, une facilité, une échéance, des compteurs de tentatives et
d'échecs. Plus le texte libre de vos signalements, si vous en écrivez.

**Rien ne quitte l'appareil.** Il n'y a pas de synchronisation, pas de compte,
pas de sauvegarde distante. L'export produit un texte que vous collez où vous
voulez — un courriel que vous vous envoyez, par exemple. À partir de là, c'est
votre messagerie qui le protège, plus l'application.

Aucun secret, aucune clé, aucune adresse de courriel dans les fichiers publiés.
Vérifié automatiquement contre les motifs usuels — clés privées, jetons GitHub,
clés d'API, identifiants AWS. Les commits sont signés d'une adresse fictive
`diego@local`, jamais d'une adresse réelle.

---

## Trois points qui relèvent de votre décision

Ils ne sont pas des défauts, mais vous devez les connaître.

**Le dépôt est public.** C'est une contrainte de GitHub Pages en formule
gratuite. Le contenu publié est du vocabulaire russe et du code ; rien de
professionnel, rien de personnel au-delà de votre nom de compte, déjà visible
dans l'adresse. Si cela vous gêne, une formule payante permet un dépôt privé
avec Pages, ou l'application peut être servie depuis n'importe quel autre
hébergement statique.

**L'origine est partagée avec vos autres sites GitHub Pages.** Tout ce que vous
publierez sous `diegomignotescalada.github.io` partagera la même origine, donc le
même stockage local et la même capacité à enregistrer un service worker. Comme
vous contrôlez tout ce qui y est publié, le risque est théorique — mais
n'installez pas de code tiers sur ce compte.

**L'adresse est publique et sans authentification.** Quiconque la connaît peut
ouvrir l'application. Il n'y verra que le corpus de vocabulaire : votre
progression est locale à votre téléphone et n'est jamais servie.

---

## Ce qui n'a pas pu être vérifié ici

Le comportement réel d'un navigateur : l'application de la politique de sécurité
du contenu, l'installation de l'application progressive, le fonctionnement hors
connexion réel. Les tests utilisent un DOM simulé, qui n'applique pas les
politiques de sécurité. La logique est éprouvée, son application par Chrome ne
peut l'être que sur l'appareil.

Contrôle à faire une fois sur le téléphone, après mise en ligne : ouvrir la
console de Chrome et vérifier qu'aucune violation de politique de sécurité n'est
signalée. S'il y en avait une, elle nommerait la directive fautive.
