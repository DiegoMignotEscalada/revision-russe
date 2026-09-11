# Révision de russe — bloc 1

Outil personnel de mémorisation des six cas du russe, par répétition espacée.
Application web sans dépendance, installable sur Android, fonctionnant hors
connexion. Interface entièrement en français ; le russe n'apparaît que comme
contenu à apprendre.

Le contenu du bloc 1 est construit à partir de diapositives de cours particuliers
de niveau A1→A2. **Le support n'est pas dans ce dépôt et ne doit jamais y être
ajouté** : il est sous droits d'auteur. `.gitignore` bloque tout fichier `.pdf`.

## Ce que fait l'application

- **Pratiquer** — sessions de 10 à 50 questions. Les cartes échues sont servies
  en priorité, par échéance croissante. Le nombre de nouvelles cartes par session
  est réglable de 0 à 15, défaut 4. Filtres par cas et par catégorie lexicale.
- **Erreurs** — cartes les plus ratées, révision ciblée. Les échecs portant sur
  un seul caractère sont comptés à part, sans que la sanction soit adoucie.
- **Stats** — taux de réussite par cas, puis par point de grammaire. Une
  sous-catégorie comptant moins de dix tentatives reste grisée : en dessous, un
  taux d'erreur est du bruit.
- **Règles** — référence grammaticale complète du bloc, consultable à tout moment.
  Aucune règle n'est montrée avant une réponse pendant l'exercice.
- **Installer** — instructions Android, état du service worker, export et import
  JSON de la progression.

La correction est stricte : orthographe exacte, `ё` distinct de `е`, aucune
tolérance à la faute de frappe. Les accents toniques sont affichés partout mais
ne se tapent jamais : ils sont retirés des deux côtés avant comparaison.

Après chaque réponse, le paradigme complet de l'item s'affiche avec la case
concernée encadrée. C'est l'élément central de l'outil : voir la forme dans sa
grille, pas seulement lire une correction.

## Lancer en local

Aucune compilation. Il faut un serveur HTTP, car un service worker ne
s'enregistre pas depuis `file://` :

```bash
cd revision-russe
python3 -m http.server 8000
# puis http://localhost:8000
```

## Structure

```
index.html          structure et styles
app.js              moteur : SRS, sessions, rendu, correction, statistiques
data/lexique.js     noms et adjectifs, six cas, deux nombres
data/bloc2.js       verbes, pronoms, comparaison, négation, numéraux
data/grammaire.js   registre des sous-catégories et points de grammaire
data/phrases.js     phrases en contexte
sw.js               service worker
manifest.json       manifeste PWA
SPEC.md             spécification de référence
RAPPORT-VERIFICATION.md   sortie du script de contrôle
icones/             icônes PNG du manifeste
tools/generer.py    générateur de paradigmes (hors application)
tools/verifier.py   contrôle des treize points de SPEC §8.5
tools/verifier-site.py  contrôle du site servi : manifeste, précache, références
tools/test-moteur.js       trente tests du moteur
tools/test-corrections.js  tests des défauts corrigés et non régressés
tools/fuzz-cartes.js       les 1297 cartes jouées une à une, réponses fausses
tools/fuzz-justes.js       les 1297 cartes jouées une à une, réponses justes
tools/audit-correction.js  propriétés de la correction, 33 000 perturbations
tools/audit-robustesse.js  état corrompu, quota, doubles clics, injection
tools/audit-invariants.js  simulation d'un an avec horloge fictive
tools/audit-ambiguite.py   unicité des consignes et des réponses
tools/audit-reconnaissance.js  gloses françaises saisissables
tools/audit-saisie.js      Unicode, claviers, ponctuation
tools/audit-affichage.js   débordements, contraste, échappement
tools/audit-sw.js          service worker exécuté dans un faux contexte
tools/audit-horloge-integrite.js  horloge, intégrité croisée, filtres
tools/audit-endurance.js   cinquante séances enchaînées
tools/test-blocs.js        absence du bloc 2, migration, onglets
tools/generer-bloc2.py     générateur du bloc 2
tools/tout-verifier.sh     lanceur unique de tous les contrôles
INVARIANTS.md              ce qui doit être vrai, et par quel script
SECURITE.md                audit de sécurité : surfaces, protections, décisions
tools/audit-securite.js    injections, pollution de prototype, réseau, CSP
```

## Ajouter ou corriger du contenu

Les fichiers `data/*.js` sont la **source de vérité** et s'éditent à la main.
Corriger une faute ou ajouter un bloc ne demande jamais de toucher à `app.js`.

Chaque fichier déclare une constante globale contenant un littéral JSON strict.
Ce format est volontaire : `tools/verifier.py` le relit sans interpréteur
JavaScript.

Un nom porte douze formes dans l'ordre **N G D A I P**, singulier puis pluriel,
ou bien une marque d'invariabilité (`indeclinable`, `pluriel_seul`,
`singulier_seul`). Un adjectif porte quatre séries de six formes (`m`, `f`, `n`,
`pl`). Toute forme douteuse doit porter `aValider: true` plutôt qu'une valeur
devinée : une erreur dans les données se mémorise, c'est le pire résultat
possible pour un outil de mémorisation.

Quand deux formes sont réellement attestées, le champ `variantes` les fait
accepter à la correction sans relâcher la rigueur ailleurs :

```js
variantes: { 'pl.1': ['тёть'] }   // génitif pluriel : тётей ou тёть
```

La clé est `nombre.indice` — `sg` ou `pl` pour un nom, `m`, `f`, `n` ou `pl`
pour un adjectif, suivi de l'indice de la case de 0 à 5. Une phrase utilise le
champ `accepte`, une simple liste de réponses supplémentaires.

Deux règles structurelles sont vérifiées et bloquantes : un item lexical ne peut
pas porter une sous-catégorie de genre `phrase`, et une phrase ne peut porter
qu'une sous-catégorie de genre `phrase` ou `choix`. Enfreindre l'une des deux
fait lire un paradigme inexistant.

Après toute modification :

```bash
npm install jsdom
bash tools/tout-verifier.sh          # tout, moins d'une minute
bash tools/tout-verifier.sh --long   # ajoute la simulation d'un an
```

`INVARIANTS.md` liste ce qui doit être vrai en permanence, avec la sévérité et
le script qui le vérifie. Un invariant sans script est une dette, pas une
garantie.

Après une modification du contenu, les deux contrôles les plus utiles sont
`fuzz-cartes.js` et `fuzz-justes.js` : ils forcent chaque carte du corpus et
signalent toute carte sans paradigme, sans règle, sans case surlignée, ou dont
une réponse juste serait refusée.

`tools/generer.py` a produit la première version des données. Il n'est pas
rejoué automatiquement et l'application ne le charge pas. Il reste au dépôt à
titre de documentation du raisonnement de déclinaison.

## Rythme réel

Mesuré par simulation d'un an, à 25 % de réponses fausses :

| Questions/séance | Séances/semaine | Cartes introduites/an | Corpus complet |
|---|---|---|---|
| 20 | 4 | 328 | 4 ans |
| 30 | 4 | 516 | 2,5 ans |
| 30 | 5 | 615 | 2,1 ans |

Le curseur « nouvelles cartes par séance » ne change presque rien : la
régulation par l'arriéré gouverne. Ce qui compte est la longueur de séance, la
fréquence, et le taux de réussite. Passer de 25 % à 15 % de réponses fausses
fait autant qu'allonger la séance de moitié.

## Contrôle du périmètre lexical

Le support est un assemblage d'images sans couche texte : 98 pages, 97
caractères extractibles directement. Le périmètre est néanmoins contrôlé, par
reconnaissance optique préalable. Le fichier produit n'est pas versionné, c'est
une reproduction du support.

```bash
sudo apt-get install tesseract-ocr tesseract-ocr-rus poppler-utils
mkdir -p ocr && pdftoppm -r 200 -png Cours_Masha_Russe.pdf ocr/p
for f in ocr/p-*.png; do tesseract "$f" "${f%.png}" -l rus+eng; done
cat ocr/p-*.txt > ../support-ocr.txt
python3 tools/verifier-perimetre.py        # écrit RAPPORT-PERIMETRE.md
```

Une absence de correspondance est un signal, pas une preuve : la reconnaissance
manque des mots, notamment ceux incrustés dans des photographies. Tout retrait
demande un contrôle à l'œil sur la diapositive.

## Limite connue

Reste hors de portée d'un script : la légitimité d'une seconde forme là où la
langue hésite. `tools/audit-ambiguite.py` produit la liste des candidats, le
champ `variantes` reçoit celles qui sont confirmées. Le bouton de signalement,
présent sur chaque carte pendant l'exercice, est le mécanisme de correction
prévu ; les signalements sont listés dans l'onglet Stats avec un bouton de copie
en texte brut.

## Déploiement

GitHub Pages, branche `main`, à la racine. Le service worker exige HTTPS ; sur
GitHub Pages c'est le cas par défaut. Pour forcer le rechargement des fichiers
après un déploiement, incrémenter `CACHE_VERSION` en tête de `sw.js`.
