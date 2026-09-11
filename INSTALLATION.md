# Mise en ligne, pas à pas

Ce guide suppose que vous partez de l'archive `revision-russe.zip` et que vous
n'avez rien installé sur votre ordinateur. Comptez vingt minutes.

---

## Ce que contient l'archive

Trois familles de fichiers. Seule la première fait tourner l'application.

### 1. L'application (indispensable, à publier)

| Fichier | Rôle |
|---|---|
| `index.html` | La page. Contient toute la mise en forme. |
| `app.js` | Le moteur : sessions, correction, répétition espacée, statistiques. |
| `data/lexique.js` | 344 noms et 44 adjectifs, avec leurs douze formes. |
| `data/bloc2.js` | Verbes, pronoms, comparaison, négation, numéraux. |
| `data/phrases.js` | 111 phrases en contexte. |
| `data/grammaire.js` | Les 22 points de grammaire et les 51 sous-catégories. |
| `sw.js` | Le fichier qui permet le fonctionnement hors connexion. |
| `manifest.json` | Ce qui rend l'application installable sur Android. |
| `icones/` | Trois icônes PNG. |

### 2. La documentation (à publier aussi, ne gêne pas)

`README.md`, `SPEC.md`, `INVARIANTS.md`, `RAPPORT-VERIFICATION.md`.
Ce sont des notes. Elles n'affectent en rien le fonctionnement.

### 3. La maintenance (facultatif)

Le dossier `tools/` : le générateur de paradigmes et les onze scripts de
contrôle. **L'application ne les charge jamais.** Ils ne servent que si vous
modifiez le contenu et voulez revérifier que rien n'est cassé. Vous pouvez les
publier ou non, cela ne change rien.

### Ce qu'il ne faut PAS publier

- Le dossier caché `.git` : c'est l'historique local, inutile en ligne.
- Le PDF de cours : il est sous droits d'auteur. Il n'est pas dans l'archive,
  et le fichier `.gitignore` empêche qu'il y entre par accident.

---

## Étape 1 — Décompresser et regarder

1. Décompressez `revision-russe.zip`. Vous obtenez un dossier `revision-russe`.
2. Ouvrez ce dossier. Double-cliquez sur `index.html`.

Votre navigateur ouvre l'application. **Vous pouvez déjà pratiquer.** Deux
limites à cet aperçu : le mode hors connexion ne fonctionne pas encore, et la
progression enregistrée ici ne suivra pas sur votre téléphone.

Si vous voyez l'onglet Pratiquer avec le bouton « Commencer », tout est en
ordre. Cliquez sur Commencer, répondez à deux ou trois questions, regardez la
grille de paradigme qui s'affiche après chaque réponse. C'est le cœur de l'outil.

---

## Étape 2 — Créer le dépôt sur GitHub

1. Allez sur `https://github.com` et connectez-vous avec le compte
   **DiegoMignotEscalada**.
2. En haut à droite, cliquez sur le **+** puis sur **New repository**.
3. Remplissez ainsi :
   - **Repository name** : `revision-russe` — exactement ce nom, en minuscules
     et avec le tiret. L'adresse finale en dépend.
   - **Public** : cochez. GitHub Pages gratuit exige un dépôt public. Le contenu
     est du vocabulaire réécrit, rien de confidentiel.
   - **Add a README file** : **décochez**. Vous en avez déjà un.
   - **Add .gitignore** et **Choose a license** : laissez sur *None*.
4. Cliquez sur **Create repository**.

Vous arrivez sur une page vide qui propose plusieurs façons d'envoyer des
fichiers.

---

## Étape 3 — Envoyer les fichiers

Cherchez le lien **uploading an existing file** au milieu de la page, ou le
bouton **Add file** puis **Upload files**.

1. Ouvrez le dossier `revision-russe` sur votre ordinateur.
2. Sélectionnez **tout le contenu** du dossier — pas le dossier lui-même, son
   contenu. Autrement dit : `index.html`, `app.js`, `sw.js`, `manifest.json`,
   les fichiers `.md`, et les dossiers `data`, `icones`, `tools`.
3. Faites-les glisser dans la zone de dépôt de GitHub.

**Point important.** Les fichiers doivent se retrouver **à la racine** du dépôt.
Si après l'envoi vous voyez un seul dossier `revision-russe` contenant tout le
reste, c'est raté : l'adresse ne fonctionnera pas. Dans ce cas, supprimez et
recommencez en sélectionnant bien le *contenu* et non le dossier.

4. En bas, dans **Commit changes**, écrivez par exemple
   « Première mise en ligne ».
5. Cliquez sur **Commit changes**.

Vérifiez maintenant la liste des fichiers affichée. Vous devez voir `index.html`
et `app.js` directement, sans dossier intermédiaire.

Si `.gitignore` n'apparaît pas, ce n'est pas grave : les fichiers commençant par
un point sont parfois masqués par le système et non envoyés. Il ne sert qu'en
local.

---

## Étape 4 — Activer la publication

1. Dans le dépôt, cliquez sur l'onglet **Settings** (la roue dentée, en haut).
2. Dans la colonne de gauche, cliquez sur **Pages**.
3. Sous **Build and deployment**, réglez :
   - **Source** : *Deploy from a branch*
   - **Branch** : `main`, et le dossier `/ (root)`
4. Cliquez sur **Save**.

Les intitulés exacts peuvent varier légèrement selon les évolutions de
l'interface, mais la logique reste la même : publier depuis la branche `main`, à
la racine.

Attendez une à deux minutes. Rechargez la page Settings → Pages : une adresse
apparaît en haut.

---

## Étape 5 — Vérifier

Ouvrez cette adresse, qui doit être :

```
https://diegomignotescalada.github.io/revision-russe/
```

**N'oubliez pas la barre oblique finale.** Sans elle, les fichiers de données ne
se chargent pas.

Trois contrôles, dans l'ordre :

1. **L'application s'affiche**, avec l'onglet Pratiquer et le bouton
   « Commencer ». Si vous obtenez une page blanche, attendez deux minutes de
   plus : la publication n'est pas immédiate.
2. **Allez dans l'onglet Installer.** Sous « Mode hors connexion », le texte doit
   dire *Service worker actif : l'application fonctionne hors connexion*. C'est
   la confirmation que le fonctionnement sans réseau est en place. Si un message
   d'erreur s'affiche à la place, il en donne la raison — l'application ne le
   cache pas.
3. **Faites une session de quelques questions** pour vérifier que la correction
   et la grille de paradigme répondent.

---

## Étape 6 — Installer sur le téléphone

1. Sur votre téléphone Android, ouvrez **Chrome** — pas un autre navigateur, lui
   seul installe correctement ce type d'application.
2. Allez à l'adresse ci-dessus.
3. Menu **⋮** en haut à droite → **Installer l'application** (parfois
   *Ajouter à l'écran d'accueil*).
4. Confirmez.

Une icône apparaît sur l'écran d'accueil. Lancée par cette icône, l'application
s'ouvre en plein écran, sans barre d'adresse, et fonctionne sans réseau.

**Le premier lancement doit se faire avec du réseau**, le temps que les fichiers
se mettent en cache. Ensuite, plus besoin.

---

## Étape 7 — Le clavier russe

Sans clavier russe, vous ne pourrez pas répondre.

**Android** : Paramètres → Système → Langues et saisie → Clavier virtuel →
Gboard → Langues → Ajouter un clavier → Russe. Vous basculerez ensuite d'un
clavier à l'autre par le globe ou la barre d'espace.

Deux choses à savoir sur la saisie :

- **Les accents toniques ne se tapent jamais.** L'application les affiche
  partout parce qu'ils sont indispensables à la prononciation, mais elle les
  ignore à la correction. Tapez `столе`, pas `столе́`.
- **Le ё est exigé.** Il se trouve sous un appui long sur `е` sur la plupart des
  claviers. C'était votre choix, contre ma recommandation : `ёлка` et `елка` sont
  deux réponses différentes.

---

## Étape 8 — Vos premiers réglages

Dans l'onglet Pratiquer :

- **Longueur** : 30. C'est le réglage par défaut.
- **Nouvelles cartes par session** : 12 par défaut. Au démarrage, quand aucune
  révision n'est échue, ce curseur détermine seul la longueur de la séance :
  montez-le si vos séances vous paraissent courtes.
- **Commencer par** : choisissez le sujet par lequel démarrer. L'ordre canonique
  est tourné à partir de ce sujet, ce qui permet de reporter à la fin un sujet
  déjà beaucoup travaillé.
- **Cartes par bloc** : 60 par défaut. C'est le nombre de cartes nouvelles d'un
  même sujet servies avant de passer au suivant. À 12 nouvelles par séance, cela
  fait environ cinq séances sur le même sujet.
- **Filtres** : n'en mettez aucun au début. Ils servent plus tard, pour
  travailler un cas précis.

Le panneau **Progression par sujet** indique, pour chacun des sept sujets, le
nombre de cartes vues et le nombre acquises — produites correctement au moins
deux fois. Un sujet entièrement acquis porte une coche. Ses cartes ne reviennent
alors qu'à leur échéance, en rappel, y compris pendant que vous travaillez un
autre sujet.

Les cartes sont introduites par blocs de quarante par cas : environ cinq séances de
prépositionnel, puis cinq d'accusatif, puis de datif, et ainsi de suite, avant de
revenir au prépositionnel pour une deuxième vague. Les révisions dues, elles, mélangent
les cas d'elles-mêmes.

Rythme visé : quatre à cinq séances par semaine. À ce rythme, comptez deux ans
et demi pour aborder les 1 297 cartes. Le levier n'est pas le volume mais la
précision : passer de 25 % à 15 % de réponses fausses fait autant qu'allonger la
séance de moitié.

---

## Étape 9 — Sauvegarder votre progression

Votre progression est stockée dans le navigateur du téléphone, nulle part
ailleurs. Elle disparaît si vous effacez les données du site, changez d'appareil,
ou désinstallez.

**Une fois par mois** : onglet Installer → **Exporter** → le texte apparaît dans
la zone → copiez-le et collez-le dans un courriel que vous vous envoyez.

Pour restaurer : collez ce texte dans la même zone → **Importer**. Un import
invalide est refusé sans toucher à ce qui est en place.

Si l'espace de stockage du téléphone se remplit, un bandeau rouge apparaît en
haut de l'application pour vous prévenir que les réponses ne sont plus
enregistrées. Il n'y a pas de perte silencieuse.

---

## Corriger une faute dans le contenu

Vous en trouverez : le contenu a été produit à partir de vos diapositives, et
tout n'a pas pu être vérifié à l'œil.

**Pendant l'exercice**, appuyez sur *Signaler une erreur de contenu*, décrivez en
une ligne. Les signalements s'accumulent dans l'onglet Stats, avec un bouton
Copier qui produit un texte brut.

**Pour corriger réellement**, sur GitHub :

1. Ouvrez `data/lexique.js` dans le dépôt.
2. Cliquez sur l'icône de crayon.
3. Utilisez la recherche du navigateur pour trouver le mot.
4. Corrigez la forme fautive.
5. **Ouvrez ensuite `sw.js`** et changez la première ligne de valeur :
   `const CACHE_VERSION = 'revision-russe-v1'` devient `'revision-russe-v2'`.
   **Sans cela, votre téléphone gardera l'ancienne version en cache** et vous ne
   verrez pas la correction.
6. Enregistrez les deux fichiers, attendez deux minutes, rouvrez l'application.

L'ordre des cases est partout le même : nominatif, génitif, datif, accusatif,
instrumental, prépositionnel. Le premier tableau est le singulier, le second le
pluriel.

---

## Vérifier que rien n'est cassé après une modification

Facultatif, et cela demande un ordinateur avec Node.js et Python installés :

```bash
npm install jsdom
bash tools/tout-verifier.sh
```

Onze séries de contrôles se lancent : intégrité des données, unicité des
consignes, propriétés de la correction sur 33 000 perturbations, et les 1 297
cartes jouées une à une. Si tout passe, votre modification n'a rien cassé.

Vous n'avez pas besoin de cela pour corriger une faute d'orthographe. C'est utile
si vous ajoutez un bloc de contenu entier.

---

## Ce qui ne demande jamais d'assistance

Pratiquer, consulter les règles, voir les statistiques, exporter, réinstaller,
corriger une forme, ajouter un mot dans `data/lexique.js` en copiant le modèle du
mot voisin : tout cela se fait seul.

Ce pour quoi une aide peut servir un jour : ajouter le bloc des verbes, changer
la logique du moteur, ou traiter une série de signalements d'un coup. Le fichier
`SPEC.md` décrit ce que fait le programme et pourquoi, `INVARIANTS.md` ce qui doit
rester vrai. Ces deux documents existent précisément pour que quelqu'un — vous,
un développeur, ou un assistant — puisse reprendre le travail sans repartir de
zéro.
