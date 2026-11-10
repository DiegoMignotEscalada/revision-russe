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

**Correction de la version 2.** Ce qui précède n'était vrai qu'au chargement.
À l'import, l'état collé était adopté tel quel, sans assainissement, jusqu'au
prochain démarrage : un export tronqué ou édité pouvait planter l'écran suivant.
L'import passe maintenant par la même fonction que le chargement, refuse tout
texte de plus de 5 Mo, et garde une copie de secours de l'état remplacé. Les
trois clés de prototype sont écartées, et les tables internes n'ont plus de
prototype : la clé `constructor` y trouvait auparavant une propriété héritée et
n'était pas purgée.

### 3. L'adresse par laquelle la page est ouverte

Un seul écran réaffiche l'URL — celui qui signale un fichier de données
manquant. Quatre adresses malveillantes ont été essayées, en chemin, en requête
et en fragment. Aucune exécution. L'audit a d'ailleurs trouvé là un vrai
défaut : `location.href` était inséré sans échappement. Corrigé, et l'écran
n'utilise plus que le chemin.

---

## Réseau : aucune requête vers un tiers

**Le moteur ne fait aucune requête réseau.** Ni `fetch`, ni `XMLHttpRequest`, ni
`sendBeacon`, ni WebSocket. Aucune mesure d'audience, aucun traceur, aucun pixel.

Depuis la version 2, **la page non plus**. La version 1 chargeait deux polices
chez Google Fonts au premier lancement, ce qui livrait à Google l'adresse IP de
l'appareil. Les polices sont désormais des fichiers du site, dans `polices/`.
Vérifié dans un vrai navigateur : aucune requête ne sort de l'origine, en ligne
comme hors connexion.

---

## Politique de sécurité du contenu

GitHub Pages n'autorise aucun en-tête HTTP personnalisé. Une politique est donc
déclarée dans la page :

```
default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self';
img-src 'self' data:; connect-src 'self'; manifest-src 'self';
worker-src 'self'; object-src 'none'; frame-src 'none';
base-uri 'none'; form-action 'none'
```

Effet concret : même si un contenu malveillant parvenait à entrer dans la page,
il ne pourrait ni exécuter de script en ligne, ni charger un script distant, ni
poser un style, ni envoyer quoi que ce soit ailleurs que sur cette origine. La
version 1 accordait `unsafe-inline` aux styles et autorisait deux domaines de
Google ; ces deux dérogations ont disparu. Vérifié dans Chromium sur les 1 591
cartes : aucune violation signalée.

Une politique posée par une balise ne sait pas interdire l'affichage dans un
cadre. L'application le refuse donc elle-même, au démarrage.

---

## Service worker

Un service worker est un composant puissant : il s'interpose entre la page et le
réseau, et il persiste. Trois précautions vérifiées automatiquement :

- **Portée limitée.** Enregistré en chemin relatif, donc cantonné au
  sous-dossier `/revision-russe/`. Un chemin absolu lui aurait donné la portée
  de tout le domaine.
- **HTTPS exigé.** L'enregistrement est refusé hors HTTPS, et l'échec est
  affiché plutôt qu'avalé.
- **Cache discipliné.** Seules les réponses valides de ce site entrent en
  cache ; les requêtes vers une autre origine et les requêtes non `GET` ne sont
  pas interceptées ; les anciens caches sont purgés à chaque changement de
  version ; la copie de rafraîchissement est toujours revalidée.

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
clés d'API, identifiants AWS.

**Rectification, novembre 2026.** Ce document affirmait que les commits étaient
signés d'une adresse fictive. C'est faux pour ce dépôt : les fichiers ont été
déposés par l'interface web de GitHub, qui signe chaque dépôt de l'adresse de
courriel du compte. Cette adresse figure donc dans l'historique public. Pour les
dépôts à venir : GitHub → Settings → Emails → « Keep my email addresses
private ». L'historique existant, lui, ne change pas sans être réécrit.

**Sauvegarde.** La progression ne vit que dans le stockage du navigateur.
L'onglet Outils l'écrit dans un fichier ou la transmet par la feuille de partage
d'Android ; l'application demande aussi au navigateur un stockage durable. Un
état que l'application ne sait pas relire est mis de côté avant toute
réécriture.

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

La version 2 a été éprouvée dans un vrai Chromium, en téléphone simulé :
politique de sécurité appliquée, service worker, fonctionnement hors connexion,
passage de la version 1 en ligne à la version 2 avec une progression existante.
Restent hors de portée : l'installation sur un Android réel, la feuille de
partage, la synthèse vocale et l'octroi du stockage durable, qui dépendent de
l'appareil.
