# SPEC — Application de révision de russe, bloc 1

Document de référence. Le code est écrit contre cette spécification. Toute divergence
constatée entre le code et ce document est un défaut du code, sauf si ce document est
modifié d'abord.

Version 2.0 — bloc 1 (les six cas, noms et adjectifs) et bloc 2 (verbes,
pronoms, comparaison, négation, numéraux).

---

## 1. Objet et périmètre

Outil personnel de mémorisation, construit à partir des diapositives de cours
particuliers (`Cours_Masha_Russe.pdf`, niveau A1→A2). Objectif à moyen terme : TRKI‑1 (B1).

Le contenu est le chantier du projet, pas le moteur. Une erreur dans les données se
mémorise : c'est le pire résultat possible pour un outil de mémorisation. Toute forme
douteuse porte `aValider: true` plutôt qu'une valeur devinée.

### Contenu du bloc 2

Ajouté après le bloc 1, dans `data/bloc2.js`, sans modifier les fichiers du
bloc 1. Nouveau type d'item, `flexion` : une liste de cellules étiquetées — я,
ты, он, passé masculin, futur, datif — au lieu d'un tableau de six cas. Un seul
mécanisme couvre ainsi les conjugaisons, les pronoms déclinés et le relatif.

| Thème | Contenu | Page du support |
|---|---|---|
| Verbes de mouvement | идти́/ходи́ть, е́хать/е́здить, лете́ть/лета́ть, плыть/пла́вать, бежа́ть/бе́гать, présent complet | 20, 54, 55 |
| Aspect | les dix paires du support, avec le passé des deux membres | 48 |
| Passé et futur | приезжа́ть/прие́хать aux trois temps, futur composé et futur simple | 79 |
| Verbes en ‑ся | улыба́ться, боя́ться, présent et passé | 53 |
| Pronoms au datif | я, ты, он, она́, оно́, мы, вы, они́, avec la forme après préposition | 98 |
| Relatif кото́рый | onze formes, quatre genres et quatre cas | 66 |
| Comparaison d'égalité | тако́й же / так же, formes affirmatives et négatives | 95 |
| Négations en ни‑ | les cinq mots, double négation | 20, 84 |
| Numéraux | de сто à миллио́н, accord après 1, 2‑4, 5+ | 57 |
| Impératif | règle et exemples, sans item testable | 96 |

Chaque forme a été relevée à l'œil sur l'image de la page, la reconnaissance
optique servant seulement à localiser les pages. Le passé des paires d'aspect
est formé selon la règle de la page 79, à l'exception des supplétions
шёл, пошёл, пришёл.

### Hors périmètre

- Russe des affaires.
- Audio, appel à un modèle de langage, production libre corrigée automatiquement.
- Préverbes de mouvement au-delà de при‑, participes, gérondifs, conditionnel :
  le support ne les traite pas assez pour en faire des cartes.

---

## 2. Arbitrages réversibles

| Point | Décision | Motif |
|---|---|---|
| Russe des affaires | Exclu de la v1 | Hors programme, hors niveau, fausserait les statistiques |
| Une carte par item | Retenu | Deux cartes doubleraient le délai de couverture |
| Faute de frappe | Aucune indulgence | Choix de l'utilisateur, contre la recommandation |
| ё / е | Strict | Choix de l'utilisateur |
| Ordre d'introduction | Grammaire directrice, lexique en appui | Chronologie des cours arbitre à l'intérieur des blocs |
| Audio, appel LLM, production libre | Exclus | Choix de l'utilisateur |
| Unité d'ordonnancement | Couple (item, sous‑catégorie) | Voir §4.3 — révision de la v0 |
| Qualité SM‑2 en réussite | q = 5, non q = 4 | Voir §2.4 — mesuré, pas supposé |
| Introduction de nouvelles cartes | Régulée par l'arriéré | Voir §2.5 — mesuré |
| Progression par cas | Blocs réglables, 60 par défaut, sujet de départ au choix | Voir §2.6 |
| Étape 3 de la construction de session | Supprimée | Voir §2.7 |
| Phrases d'exercice | Réécrites, non recopiées | Voir §7.2 — révision de la v0 |
| Nombre de formes par item | 12, ou `indeclinable`, ou `pluriel_seul`, ou `singulier_seul` | Voir §4.1 — révision de la v0 |

### Trois arbitrages révisés par rapport à la consigne initiale

**Unité d'ordonnancement.** La consigne demandait une entrée d'état par item et une
progression par cas. Les deux sont incompatibles : si `стол` est introduit au stade
prépositionnel, un état unique par lemme couvre déjà ses douze formes et rien ne permet
de représenter *столе́ maîtrisé, стола́м échoué*, ni d'introduire son génitif pluriel plus
tard. C'est aussi la cause du défaut d'affichage constaté en v0 (« Génitif pluriel zéro »
après une erreur au datif). L'unité retenue est le couple (item, sous‑catégorie).

**Phrases d'exercice.** La consigne justifiait le dépôt public par le fait que le contenu
est réécrit, et demandait par ailleurs de reprendre 70 % des phrases du PDF. Les deux ne
tiennent pas ensemble. Retenu : collocations et listes de mots reprises telles quelles
(non protégeables : в го́роде, на рабо́те, зимо́й), phrases d'exercice réécrites dans le
même périmètre lexical et grammatical. `sourceProf: true` marque les items dont le
*contenu grammatical* vient du PDF, `phraseReecrite: true` marque les phrases dont la
formulation est originale.

**Nombre de formes.** L'exigence « douze formes ou indéclinable » forcerait à fabriquer
un singulier de `де́ньги` et un pluriel de `молоко́`. Deux valeurs ajoutées :
`pluriel_seul`, `singulier_seul`.

### §2.4 — Qualité SM‑2 en réussite : q = 5 et non q = 4

La consigne prescrivait q = 4 en réussite. Avec q = 4, la variation de facilité vaut
exactement zéro : `0,1 − (5−4) × (0,08 + (5−4) × 0,02) = 0`. La facilité ne peut alors
que baisser, jamais remonter. Une carte échouée deux fois est bloquée au plancher 1,3 à
vie, avec le pire facteur de croissance possible, sans aucune voie de retour même après
vingt réussites d'affilée.

Mesuré sur une simulation d'un an (`tools/audit-invariants.js`) : **54 % des cartes
atteignaient le plancher 1,3**. Avec q = 5, la variation vaut +0,10 en réussite et la
proportion tombe à **1 %**.

C'est un écart à la lettre de la consigne, réversible en changeant un chiffre dans
`majSM2`. L'intervalle est par ailleurs borné à cinq ans, pour éviter des échéances
absurdes après une longue série de réussites.

### §2.6 — Progression par cas : blocs bornés, non exhaustion

§8.1 impose une progression par cas. Appliqué à la lettre, cela signifie épuiser les
366 cartes de prépositionnel avant la première d'accusatif : à huit nouvelles cartes
par séance, 46 séances, et davantage avec la régulation, soit plus de six mois sur un
seul cas. Constaté à l'usage.

Retenu : les blocs par cas sont conservés mais bornés, à 60 cartes par défaut,
réglable de 30 à 200. Le **sujet de départ est réglable** : l'ordre canonique est
tourné à partir du sujet choisi, les autres suivant dans le même ordre relatif. Un
sujet déjà beaucoup travaillé peut ainsi être reporté à la fin du cycle. Un bloc de
prépositionnel, un d'accusatif, un de datif, et ainsi de suite, puis retour au
prépositionnel pour une deuxième vague. Mesuré : l'accusatif apparaît à la sixième
séance et le datif à la onzième, au lieu de la quarante-sixième et de la
soixantième.

À l'intérieur d'un cas, l'ordre était alphabétique par identifiant, ce qui donnait
**seize adjectifs d'affilée comme toutes premières cartes de l'application**, avant le
premier nom. L'ordre est maintenant : les noms dans l'ordre thématique du fichier de
données, puis les phrases en contexte, puis les adjectifs, qui présupposent les noms.
Les premières cartes sont désormais го́род, теа́тр, клуб, музе́й au prépositionnel.

### §2.7 — Suppression de l'étape 3 : une carte acquise ne revient qu'à son échéance

§6.1 prévoyait de compléter une séance trop courte par un tirage pondéré parmi les
cartes **non échues**, en favorisant les faibles facilités. Cette étape est supprimée.

Motif : elle ramène des cartes déjà acquises avant leur échéance, ce qui contredit le
principe de la répétition espacée et encombre les séances de matière déjà sue. Une
séance plus courte est préférable, et son motif est désormais affiché. Le curseur des
nouvelles cartes, monté jusqu'à 40, est le levier de longueur au démarrage.

Conséquence assumée : la longueur de séance annoncée par le curseur n'est atteinte que
lorsque l'arriéré de révisions le permet. C'est le comportement correct.

### §2.5 — Introduction régulée par l'arriéré

La consigne décrivait un ordonnancement en trois étapes où les nouvelles cartes ne
prennent que les places restantes après les échues. Deux comportements symétriques ont
été mesurés sur un an, à 20 questions et 4 séances par semaine :

| Politique | Cartes introduites en un an | Arriéré de révisions |
|---|---|---|
| Places restantes seulement | 170 sur 1297 | maîtrisé |
| Réserve fixe pour les nouvelles | 1297 sur 1297 | **1196 cartes** |
| Régulation par l'arriéré | 348 sur 1297 | stable à 80 |

Sans réserve, dès que l'arriéré atteint la longueur de session, plus aucune carte
nouvelle n'entre : sept ans de couverture. Avec une réserve fixe, la couverture est
complète mais le dispositif ne tient plus ses propres échéances, ce qui vide le SRS de
son sens.

Retenu : la réserve est accordée pleine tant que l'arriéré reste sous deux séances,
réduite de moitié jusqu'à quatre séances, suspendue au‑delà. Elle reprend d'elle‑même
quand l'arriéré se résorbe. Le motif est affiché dans l'onglet Pratiquer plutôt que
subi en silence.

---

## 3. Réserves

- L'application n'est pas un outil de préparation au TORFL. Elle couvre la section
  grammaire‑lexique et une partie de l'écrit. Lecture de textes non adaptés, écoute et
  expression orale sont hors périmètre.
- **La couverture du corpus prend environ quatre ans au rythme de référence**, non un an
  comme estimé initialement. L'estimation initiale divisait la taille du corpus par le
  nombre de nouvelles cartes par séance, en ignorant que les révisions dues occupent
  l'essentiel de chaque séance. Mesuré sur une simulation d'un an : 348 cartes
  introduites sur 1297 à 20 questions et 4 séances par semaine. Voir le tableau de débit
  du rapport de vérification pour les autres rythmes.
- Les corrigés, traductions de gloses et phrases générées sont produits par un modèle et
  contiennent des erreurs. Le bouton de signalement est le mécanisme de correction.
- Le niveau réel de l'utilisateur n'est pas évalué. Le choix entre TBU (A2) et TRKI‑1 (B1)
  demande un test de placement.
- Les statistiques de niveau 2 resteront grisées plusieurs mois : trente sous‑catégories
  à dix tentatives minimum, à quatre nouvelles cartes par session, c'est mécanique.

---

## 4. Modèle de données

### 4.1 Item lexical

```js
{
  id: 'lex_stol',
  type: 'nom',
  lemme: 'стол',
  fr: 'table',
  frVariantes: ['bureau'],
  genre: 'm',
  anime: false,
  categorie: 'maison',
  irregularite: null,        // null | 'irregulier' | 'indeclinable' | 'pluriel_seul' | 'singulier_seul'
  sg: ['стол','стола́','столу́','стол','столо́м','столе́'],   // N G D A I P — null si pluriel_seul
  pl: ['столы́','столо́в','стола́м','столы́','стола́ми','стола́х'], // null si singulier_seul
  loc2: null,                // deuxième locatif : { forme:'в лесу́', contexte:'lieu physique' }
  bloc: 1,
  sousCategories: ['prep_sg_e','dat_sg_u','instr_sg_om','gen_sg_a','genpl_ov'],
  sourceProf: true,
  aValider: false
}
```

Ordre des cases, invariable dans tout le projet : **N G D A I P** (1 2 3 4 5 6).

Un `indeclinable` porte douze fois la même forme. Un `pluriel_seul` a `sg: null`. Un
`singulier_seul` a `pl: null`.

### 4.2 Adjectif

```js
{
  id: 'adj_novyj', type: 'adjectif', lemme: 'но́вый', fr: 'neuf, nouveau',
  classe: 'dur',             // dur | velaire | sifflante | mou
  m: [...], f: [...], n: [...], pl: [...],   // 6 formes chacun, N G D A I P
  sousCategories: ['adj_nom','adj_prep','adj_acc','adj_gen'], ...
}
```

### 4.3 Point de grammaire

```js
{
  id: 'gram_prep_v_na',
  titre: 'В ou НА au prépositionnel',
  bloc: 1,
  cas: 'prep',
  regle: '...',              // affiché à l'erreur et dans l'onglet Règles
  tableau: [...],            // lignes de tableau optionnelles, rendues dans Règles
  exemples: ['в теа́тре', 'на конце́рте'],
  sousCategories: ['prep_v_na']
}
```

### 4.4 Phrase en contexte

```js
{
  id: 'phr_042', type: 'phrase',
  avant: 'Мы живём ', trou: 'в Москве́', apres: '.',
  reponse: 'в Москве́',      // ce qui est attendu à la saisie, accents ignorés
  indice: 'Москва́',          // forme de départ montrée entre parenthèses
  question: 'Où ? (где?)',   // doit correspondre au cas annoté
  cas: 'prep', sousCategorie: 'prep_sg_e',
  fr: 'Nous habitons à Moscou.',
  sourceProf: true, phraseReecrite: true, aValider: false
}
```

### 4.5 État de révision

Une entrée par couple (item, sous‑catégorie). Clé : `` `${itemId}|${sousCategorie}` ``.

```js
{
  intervalle: 6,             // jours
  facilite: 2.5,
  echeance: 1735689600000,   // timestamp
  repetitions: 3,
  produitUneFois: true,      // a déjà été réussi dans le sens production
  tentatives: 7,
  echecs: 2,
  echecsUneLettre: 1,        // échecs dont la divergence porte sur un seul caractère
  signale: false
}
```

`echecsUneLettre` n'a **aucun effet** sur l'ordonnancement : la sanction SM‑2 est
identique. Il sert uniquement à ne pas polluer l'onglet Erreurs avec des fautes de
clavier, la correction restant stricte.

---

## 5. Architecture

Pas de framework, pas de dépendance, pas d'outil de build.

```
index.html          structure + styles
app.js              moteur : SRS, sessions, rendu, correction, statistiques
data/lexique.js     items lexicaux (noms, adjectifs)
data/grammaire.js   points de grammaire, règles, tableaux
data/phrases.js     phrases en contexte
sw.js               service worker
manifest.json       manifeste PWA
tools/generer.py    générateur de paradigmes (hors application, non chargé par le site)
tools/verifier.py   script de contrôle (hors application)
SPEC.md
README.md
```

**Séparation stricte données / code.** Corriger une faute ou ajouter un bloc de contenu
ne demande jamais de toucher à `app.js`. Les fichiers `data/*.js` sont la source de
vérité et sont éditables à la main ; `tools/generer.py` a servi à les produire et reste
au dépôt à titre de documentation, il n'est pas rejoué automatiquement.

Chaque fichier de données déclare une constante globale contenant un tableau JSON
strict, afin d'être relisible par le script de vérification sans interpréteur JavaScript.

### Service worker

Fichier `sw.js` réel, servi en HTTPS, enregistré par
`navigator.serviceWorker.register('./sw.js')`. **Jamais depuis une URL `blob:`** : Chrome
refuse ce protocole et l'échec est silencieux si le `.catch()` l'avale. La v0 faisait
cette erreur — le mode hors ligne semblait fonctionner alors que le cache n'existait pas.
L'échec d'enregistrement est journalisé et affiché dans l'onglet Installer.

Stratégie *cache‑first* avec mise à jour en arrière‑plan, versionnée par une constante
`CACHE_VERSION` en tête de fichier. Précache de tous les fichiers listés ci‑dessus à
l'installation.

### Manifeste

`display: standalone`, `start_url: "."`, thème sombre, icône SVG en donnée URL.
Installable depuis Chrome Android via ⋮ → « Installer l'application ».

### Stockage

`localStorage`, une seule clé `revision-russe-v1`. Export et import JSON par bouton.
Sauvegarde après chaque réponse.

---

## 6. Moteur

### 6.1 Répétition espacée — une vraie file d'échéances

SM‑2 classique. Le point critique : **une carte échue est présentée, une carte non échue
ne l'est pas.**

Construction d'une session de N questions :

1. Toutes les cartes dont `echeance <= maintenant`, triées par échéance croissante,
   servies en priorité.
2. Compléter avec au plus `nouveauxParSession` cartes jamais vues, dans l'ordre
   d'introduction de §7.1.
3. S'il reste des places, compléter par tirage pondéré parmi les cartes non échues, en
   favorisant les faibles facilités.
4. **Entrelacer** l'ordre final : jamais deux cartes de la même sous‑catégorie à la
   suite quand c'est évitable.

**Piège à ne pas reproduire.** La v0 calculait des échéances SM‑2 mais s'en servait
uniquement comme pondération d'un tirage aléatoire : une carte échue pouvait ne jamais
sortir, une carte maîtrisée ressortir le lendemain. Le tirage pondéré ne sert qu'à
l'étape 3.

Mise à jour après réponse :

- Réussite : `repetitions += 1` ; `intervalle` = 1 puis 6 puis `round(intervalle × facilite)` ;
  `facilite` ajustée par la formule SM‑2 avec q = 4, plancher 1,3.
- Échec : `repetitions = 0`, `intervalle = 0`, `echeance = maintenant + 10 min`,
  `facilite` ajustée avec q = 2. L'intervalle retombe à zéro, sans exception, y compris
  pour un échec à une seule lettre.

### 6.2 Réglages de session

- Longueur : 10, 20, 30, 50 questions.
- Nouvelles cartes par session : curseur 0 à 15, **défaut 4**.
- Mode « révisions uniquement » : force `nouveauxParSession = 0` pour la session.
- Filtres par catégorie lexicale et par cas.

### 6.3 Choix du type d'exercice

Une carte = un couple (item, sous‑catégorie). La sous‑catégorie détermine la case
demandée ; elle n'est jamais tirée au hasard.

- **Carte de forme** — 75 % production (glose française + case demandée → taper la
  forme russe), 25 % reconnaissance (forme russe → taper la glose française).
- **Carte de distinction binaire** (в/на, deuxième locatif) — 75 % production, phrase à
  trou ; 25 % choix entre deux boutons.
- **Carte de phrase** — toujours production.

**Tant que `produitUneFois === false`, le sens production est forcé.** La reconnaissance
n'apparaît qu'après une première production réussie.

### 6.4 Règle avant ou après

**Tentative d'abord.** Aucune règle affichée avant la réponse. À l'erreur, la règle du
point concerné s'affiche dans le retour. La règle reste consultable à tout moment dans
l'onglet Règles.

### 6.5 Correction — stricte

- Orthographe exacte exigée.
- **ё et е sont distincts.** Aucune normalisation de l'un vers l'autre.
- Accents toniques **ignorés à la saisie** : U+0301 retiré des deux côtés avant
  comparaison. Ils sont affichés, jamais tapés.
- Casse ignorée. Espaces de début, de fin et espaces multiples ignorés.
- Variantes de traduction acceptées via `frVariantes`, accents français et casse ignorés.
- Aucune tolérance à la faute de frappe. Une lettre de travers est une erreur,
  l'intervalle retombe à zéro.

**À l'erreur, comparatif caractère par caractère** entre la réponse donnée et la réponse
attendue, divergences surlignées. **Informatif uniquement** : il ne propose rien,
n'annule rien, ne modifie aucune statistique de réussite.

### 6.6 Retour après réponse

1. Correct / incorrect, et la bonne réponse accentuée.
2. Le comparatif caractère par caractère si erreur de saisie.
3. **Le paradigme complet de l'item, case concernée surlignée.** Élément pédagogique le
   plus important : montrer la case dans sa grille, pas seulement la faute.
4. L'explication du **point de grammaire testé**, résolu par la sous‑catégorie de la
   carte. La v0 affichait « Génitif pluriel zéro » après une erreur au datif ; c'est
   structurellement impossible ici puisque la carte *est* le point testé.
5. Un bouton de signalement.

---

## 7. Interface

Entièrement en français : boutons, onglets, statistiques, explications, gloses. Le russe
n'apparaît que comme contenu à apprendre.

### 7.1 Identité visuelle — reprise telle quelle

```css
--bg:#0e0e12; --surface:#16161e; --card:#1e1e2a; --border:#2a2a3a;
--gold:#c9a84c; --gold-light:#e8c97a; --red:#e05c5c; --green:#5cb87a;
--blue:#5c9be0; --purple:#9b7fe0;
--text:#e8e4d9; --text-dim:#8a8578; --text-muted:#4a4840;
```

Polices : **Spectral** (300/400/600) pour le russe et le texte courant, **JetBrains Mono**
(400/700) pour métadonnées, badges, étiquettes. Chargées depuis Google Fonts avec repli
local, précachées par le service worker.

Code couleur : or pour les noms, violet pour les adjectifs, rouge pour les irréguliers et
les erreurs, vert pour les réussites, bleu pour l'information.

Largeur maximale 480 px, centré. Cartes à coins arrondis, animation d'entrée discrète.
`prefers-reduced-motion` respecté. Focus clavier visible.

### 7.2 Onglets

**Pratiquer** — réglages en chips, curseur de longueur, curseur de nouvelles cartes,
bascule « révisions uniquement », filtres par catégorie et par cas, bouton de lancement,
nombre de cartes échues du jour.

**Erreurs** — cartes les plus ratées, triées par nombre d'échecs, échecs à une seule
lettre comptés à part, bouton de révision ciblée.

**Stats** — deux niveaux, plus le panneau des signalements.

**Règles** — référence grammaticale complète du bloc : tableaux de déclinaison, règles,
moyens mnémotechniques. Consultable à tout moment.

**Installer** — instructions Android, état du service worker, export et import JSON.

### 7.3 Statistiques — deux niveaux

Niveau 1 : nominatif, génitif, datif, accusatif, instrumental, prépositionnel.

Niveau 2 : environ trente sous‑catégories (génitif pluriel masculin en ‑ов, génitif
pluriel féminin à désinence zéro, prépositionnel en ‑ии, accusatif animé, в vs на, etc.).

**Une sous‑catégorie comptant moins de dix tentatives est grisée** et n'affiche aucun
pourcentage. En dessous de ce seuil, un taux d'erreur est du bruit.

### 7.4 Signalements

Bouton sur chaque carte pendant l'exercice. Un signalement est stocké avec l'état, donc
inclus dans l'export JSON, et listé dans un panneau de l'onglet Stats avec un bouton de
copie produisant un texte brut collable dans un courriel. Aucune dépendance externe.

### 7.5 Interdits

Aucune notification. Aucun son. Aucun badge. Aucune série de jours consécutifs. Aucun
message de félicitations gamifié.

Les points de performance intra‑session (dix derniers résultats en pastilles) sont
conservés : indicateurs de session, pas séries.

---

## 8. Contenu du bloc 1

### 8.1 Ordre d'introduction

1. Prépositionnel, avec la distinction в / на
2. Accusatif, avec animé = génitif
3. Datif, avec нра́виться, на́до, к, по
4. Instrumental, avec занима́ться, интересова́ться, стать кем
5. Génitif singulier, avec les quantités et le partitif
6. Génitif pluriel

Le nominatif sert de forme de référence ; seules ses irrégularités de pluriel
(сту́лья, лю́ди, де́ти) sont des points d'apprentissage.

Le génitif pluriel arrive en dernier : point le plus coûteux du système, abordable
seulement une fois les autres cas stabilisés.

### 8.2 Règles de production

- Périmètre lexical strictement limité au vocabulaire du PDF. Aucun mot ajouté.
- Collocations et listes reprises telles quelles ; phrases d'exercice réécrites.
- **Accents toniques portés sur toutes les formes russes**, diacritique combinant U+0301.
  Un `ё` ne porte jamais d'accent combinant : il est tonique par nature.
- Exercices du PDF relevant du bloc 1 corrigés.
- Exercices ouverts, non auto‑corrigeables, supprimés (« écris trois phrases sur tes
  projets », « traduis dans ta langue maternelle », « travaillez en binôme »).
- Gloses anglaises du support traduites en français.
- Gloses ambiguës marquées `aValider: true`. Exemple : le PDF donne `Учить` comme
  *to teach, learn*, qui recouvre trois emplois russes distincts.

### 8.3 Contenu spécifique du PDF intégré

- Tableau в / на au prépositionnel, intégralement.
- Jours de la semaine à l'accusatif, avec **во** вто́рник.
- Mois au prépositionnel : в декабре́, в январе́…
- Saisons à l'instrumental : зимо́й, весно́й, ле́том, о́сенью.
- Lexique thématique : lieux, pièces de la maison, fruits et légumes, vêtements, sports,
  métiers et médecins, couleurs, transports, temps, famille.

### 8.4 Corrections apportées à la consigne initiale sur le contenu

- **`в ча́се`, pas `в часу́` comme règle générale.** Le deuxième locatif de `час` ne vaut
  que pour l'heure du jour (`в кото́ром часу́`), absent du PDF, qui donne au contraire
  *Ско́лько мину́т в ча́се ?* La forme `в часу́` n'est donc pas retenue comme deuxième
  locatif testable.
- **`пол` (sol) et `по́ле` (champ)** ont le même prépositionnel écrit `о по́ле`. Les deux
  items sont annotés pour que la correction stricte ne départage pas au hasard.
- **`сын` est bien dans le PDF** (« после рождения сына »), contrairement à ce qui
  avait été avancé. Le mot est donc dans le périmètre, et son pluriel supplétif
  `сыновья́ / сынове́й` avec lui. Les deux sont retenus.
- **`путь` ne figure pas dans le PDF** et reste exclu, la consigne interdisant
  d'ajouter du vocabulaire hors périmètre. Le phénomène « masculin décliné comme un
  féminin » est documenté dans l'onglet Règles sans item testable.
- **Le périmètre lexical est désormais vérifiable, par reconnaissance optique.** Le PDF
  est un assemblage d'images sans couche texte : 98 pages, 97 caractères extractibles
  directement. Les pages sont donc rasterisées puis passées à un moteur de
  reconnaissance en russe, ce qui produit 2 247 mots distincts, et `tools/verifier-perimetre.py`
  confronte le lexique à cet ensemble avec trois niveaux de tolérance. Le fichier de
  reconnaissance n'est pas versionné : c'est une reproduction du support.
  Ce contrôle a fait retirer treize items absents du support (Австра́лия, ковёр, арбу́з,
  гриб, ключ, волонтёр, журнали́ст, окули́ст, почтальо́н, стомато́лог, кусо́к, трамва́й,
  пальто́) et ajouter onze items présents mais oubliés (Петербу́рг, учи́тельница,
  специали́ст, путеше́ствие, иску́сство, морко́вка, борщ, десе́рт, меню́, кани́кулы,
  солёный). Une absence de correspondance reste un signal, non une preuve : la
  reconnaissance manque des mots, et tout retrait demande un contrôle à l'œil.

### 8.5 Points de vérification obligatoires avant déploiement

Contrôlés par `tools/verifier.py`, qui produit `RAPPORT-VERIFICATION.md`.

1. **Instrumental pluriel en ‑ьми** — дочерьми́, детьми́, людьми́. La v0 avait `дочерями`,
   forme fautive, alors que детьми et людьми y étaient corrects.
2. **Deuxième locatif** — о ле́се / в лесу́ ; о го́де / в году́ ; о са́де / в саду́ ;
   о бе́реге / на берегу́ ; о по́ле / на полу́ ; о шка́фе / в шкафу́. Chaque item porte
   les deux formes et l'exercice précise le contexte. `час` exclu, voir §8.4.
3. **Prépositionnel des neutres en ‑ие** — зда́нии, заня́тии, зада́нии, et non зда́ние.
4. **Génitif pluriel** — désinence zéro des féminins en ‑а (книг, школ, стран, рук, ног,
   соба́к) ; voyelle mobile (ко́шек, ку́хонь, ку́рток, о́кон, пи́сем) ; supplétion
   год → **лет**.
5. **Pluriels en ‑ья** — сту́лья, бра́тья, друзья́, дере́вья, avec leurs génitifs
   pluriels (сту́льев, бра́тьев, друзе́й, дере́вьев).
6. **Supplétions** — челове́к → лю́ди, ребёнок → де́ти.
7. **Radicaux irréguliers** — вре́мя et и́мя en ‑ен‑ ; мать et дочь en ‑ер‑.
8. **Indéclinables** — ко́фе, такси́, метро́, пальто́, кино́, кафе́ : douze cases
   identiques.
9. **Accusatif animé = génitif** au singulier masculin et au pluriel tous genres,
   partout, pas sur quelques items.
10. **Accusatif des féminins en ‑ь** = nominatif (тетра́дь, пло́щадь, ночь).
11. **Génitif pluriel en ‑ий** des féminins en ‑ия et des neutres en ‑ие (ста́нций,
    фотогра́фий, зада́ний, зда́ний), et en ‑ей après ж, ш, ч, щ, ь (рубле́й, этаже́й).
12. **Phrases en contexte** — le cas annoté correspond à la construction, et la question
    affichée correspond au cas (« À qui ? À quoi ? » pour le datif, pas « Quoi ? »).
    La v0 avait « Он у́чится {язы́к} два го́да » annotée datif avec la question « Quoi ? ».
13. **Cohérence structurelle** — douze formes, ou `indeclinable`, ou `pluriel_seul`, ou
    `singulier_seul` ; au moins une sous‑catégorie par item ; aucun identifiant en
    double ; toute sous‑catégorie référencée existe ; tout `ё` sans U+0301 ; toute forme
    russe porte exactement un accent tonique (ou un `ё`, ou est monosyllabique).

---

## 9. Déploiement

- Commit, push, GitHub Pages sur `main` à la racine.
- Vérifier que le site répond et que le service worker s'enregistre, console sans erreur.
- Vérifier que `git log --stat` ne contient aucun PDF.
- `README.md` : nature du projet, ajout de contenu, lancement en local.
