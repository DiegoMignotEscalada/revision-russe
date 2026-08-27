# Inventaire des invariants

Ce document liste ce qui doit être vrai en permanence. Chaque invariant porte un
identifiant, une sévérité, et le script qui le vérifie. Un invariant sans script
de vérification est une dette, pas une garantie.

Sévérités : **1** perte ou corruption de données, ou apprentissage d'une forme
fausse. **2** plantage ou blocage fonctionnel. **3** défaut pédagogique
(fausse erreur, mauvaise case surlignée). **4** défaut d'affichage ou de confort.

## A — Intégrité des données

| Id | Invariant | Sév. | Vérifié par |
| --- | --- | --- | --- |
| A1 | Douze formes, ou une marque d'invariabilité explicite | 1 | verifier.py 13 |
| A2 | Un seul accent tonique par mot, jamais sur un ё | 1 | verifier.py 13 |
| A3 | Aucun identifiant en double | 2 | verifier.py 13 |
| A4 | Toute sous-catégorie référencée existe et a un point de grammaire | 2 | verifier.py 13 |
| A5 | Un item lexical ne porte pas de sous-catégorie de genre `phrase` | 2 | verifier.py 13, generer.py |
| A6 | Une phrase ne porte qu'une sous-catégorie `phrase` ou `choix` | 2 | verifier.py 12, generer.py |
| A7 | Les treize points de contrôle du support passent | 1 | verifier.py 1–12 |
| A8 | Toute case interrogée a une réponse unique, ou ses variantes déclarées | 3 | audit-ambiguite.py |
| A10 | La liste des formes concurrentes acceptées est à jour | 3 | audit-ambiguite.py |
| A9 | Le cas annoté d'une phrase correspond à sa question | 3 | verifier.py 12 |

## B — Rendu d'une carte

| Id | Invariant | Sév. | Vérifié par |
| --- | --- | --- | --- |
| B1 | Toute carte du corpus produit une question affichable | 2 | fuzz-cartes.js |
| B2 | Tout retour affiche un paradigme | 3 | fuzz-cartes.js |
| B3 | Tout retour affiche la règle du cas testé, et d'aucun autre | 3 | fuzz-cartes.js, test-moteur.js |
| B4 | La case surlignée est celle du point testé | 3 | fuzz-cartes.js |
| B5 | Aucune réponse juste n'est refusée | 1 | fuzz-justes.js |
| B6 | Aucune réponse fausse n'est acceptée | 1 | audit-correction.js |
| B7 | ё et е restent distincts, accents et casse ignorés | 1 | test-moteur.js |

## C — Ordonnancement et progression

| Id | Invariant | Sév. | Vérifié par |
| --- | --- | --- | --- |
| C1 | Une carte échue est servie avant toute carte non échue | 2 | audit-invariants.js |
| C2 | Aucune carte n'apparaît deux fois dans une même session | 4 | audit-invariants.js |
| C3 | L'intervalle retombe à zéro à chaque échec, sans exception | 1 | audit-invariants.js |
| C4 | Après une réussite, l'intervalle croît strictement | 2 | audit-invariants.js |
| C5 | La facilité reste dans [1,3 ; borne haute finie] | 2 | audit-invariants.js |
| C6 | Une carte durablement réussie doit pouvoir retrouver un intervalle long après un échec isolé | 2 | audit-invariants.js |
| C10 | L'introduction de nouvelles cartes ne s'arrête jamais définitivement | 2 | audit-invariants.js |
| C11 | L'arriéré de révisions reste borné | 2 | audit-invariants.js |
| C7 | Tout le corpus est atteignable : aucune carte jamais introduite | 2 | audit-invariants.js |
| C8 | Les nombres stockés restent finis, l'échéance reste une date valide | 2 | audit-invariants.js |
| C9 | Les compteurs de sous-catégories concordent avec les états | 4 | audit-invariants.js |

## D — État persistant

| Id | Invariant | Sév. | Vérifié par |
| --- | --- | --- | --- |
| D1 | Un état corrompu ou tronqué ne fait pas planter le démarrage | 2 | audit-robustesse.js |
| D2 | Un état d'une version antérieure est repris sans perte utile | 1 | audit-robustesse.js |
| D3 | Les états orphelins sont purgés | 4 | test-corrections.js |
| D4 | `localStorage` indisponible ou plein ne bloque pas l'usage | 2 | audit-robustesse.js |
| D8 | Un échec d'écriture est signalé à l'écran, pas seulement en console | 1 | audit-robustesse.js |
| D9 | Un état partiel ou absurde est assaini, pas subi | 2 | audit-robustesse.js |
| D10 | Le contenu stocké n'est jamais exécutable | 1 | audit-robustesse.js |
| D5 | Export puis import restitue l'état à l'identique | 1 | audit-robustesse.js |
| D6 | Un import invalide ne détruit pas l'état en place | 1 | audit-robustesse.js |
| D7 | La taille de l'état reste sous le quota d'un navigateur mobile | 2 | audit-invariants.js |

## E — Cycle de vie de l'interface

| Id | Invariant | Sév. | Vérifié par |
| --- | --- | --- | --- |
| E1 | Un double clic sur Valider ne compte qu'une réponse | 1 | audit-robustesse.js |
| E2 | Un double clic sur Suivant ne saute pas de carte | 4 | audit-robustesse.js |
| E3 | Changer d'onglet en cours de session n'écrase pas la vue suivante | 4 | test-corrections.js |
| E4 | Aucun écouteur d'événement ne s'accumule | 4 | audit-robustesse.js |
| E5 | Tous les onglets se rendent sans erreur, état vide comme état plein | 2 | test-moteur.js, audit-robustesse.js |

## F — Hors connexion et installation

| Id | Invariant | Sév. | Vérifié par |
| --- | --- | --- | --- |
| F1 | Tout ce que le service worker précache existe et est servi | 2 | verifier-site.py |
| F2 | Le manifeste est installable : icônes réelles, 192 et 512, maskable | 2 | verifier-site.py |
| F3 | L'échec d'enregistrement est affiché, jamais avalé | 2 | test-moteur.js |
| F4 | Le service worker ne se met pas lui-même en cache | 2 | verifier-site.py |
| F5 | Un fichier ajouté au dépôt et servi est soit précaché, soit exclu sciemment | 2 | verifier-site.py |

## Comment lancer

```bash
npm install jsdom
bash tools/tout-verifier.sh          # contrôles rapides
bash tools/tout-verifier.sh --long   # ajoute la simulation d'un an
```

Le balayage de débit se lance par variables d'environnement :

```bash
LONGUEUR=30 SEANCES=5 NOUVEAUX=10 ECHEC=0.2 BREF=1 node tools/audit-invariants.js
```

## Deux pièges rencontrés en écrivant ces contrôles

Un test qui ne teste rien est pire qu'un test absent : il donne une fausse
assurance. Deux cas se sont présentés.

**Le simulateur de quota de stockage ne simulait rien.** Dans un objet `Storage`,
`localStorage.setItem = f` ne remplace pas la méthode : cela crée une *entrée*
nommée « setItem ». Le contrôle D4 passait sans avoir jamais provoqué d'échec
d'écriture. Il faut redéfinir la propriété `localStorage` de `window`.

**L'oracle de réponse juste répondait faux.** La première version corrigeait
l'état après coup dans `localStorage`, alors que l'application conserve son état
en mémoire et le réécrit au coup suivant. Toutes les réponses de la simulation
étaient donc des échecs, ce qui a produit une mesure absurde de 23 cartes
introduites en un an. L'oracle actuel identifie la carte par la consigne
affichée et n'écrit jamais dans l'état.
