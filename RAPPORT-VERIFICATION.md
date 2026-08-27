# Rapport de vérification

Produit par `tools/verifier.py`. Couvre les treize points de SPEC §8.5.

**Résultat : les treize contrôles passent.**

## 1. Instrumental pluriel en -ьми

- дочь → **дочерьми́**
- ребёнок → **детьми́**
- челове́к → **людьми́**
- мать → **матеря́ми** : régulier, ce n’est pas un -ьми

## 2. Deuxième locatif

- лес → **в лесу́** (situation) / **о ле́се** (au sujet de)
- сад → **в саду́** (situation) / **о са́де** (au sujet de)
- бе́рег → **на берегу́** (situation) / **о бе́реге** (au sujet de)
- шкаф → **в шкафу́** (situation) / **о шка́фе** (au sujet de)
- пол → **на полу́** (situation) / **о по́ле** (au sujet de)
- год → **в году́** (situation) / **о го́де** (au sujet de)
- час : prépositionnel **в ча́се**, pas de deuxième locatif retenu (SPEC §8.4)

## 3. Prépositionnel des neutres en -ие

- зда́ние → **зда́нии**
- заня́тие → **заня́тии**
- зада́ние → **зада́нии**
- общежи́тие → **общежи́тии**

## 4. Génitif pluriel : désinence zéro, voyelle mobile, supplétion

- кни́га → **книг**
- шко́ла → **школ**
- страна́ → **стран**
- рука́ → **рук**
- нога́ → **ног**
- соба́ка → **соба́к**
- ко́шка → **ко́шек**
- ку́хня → **ку́хонь**
- ку́ртка → **ку́рток**
- окно́ → **о́кон**
- письмо́ → **пи́сем**
- год → **лет**

## 5. Pluriels en -ья et leurs génitifs pluriels

- стул → **сту́лья**, génitif pluriel **сту́льев**
- брат → **бра́тья**, génitif pluriel **бра́тьев**
- друг → **друзья́**, génitif pluriel **друзе́й**
- сын → **сыновья́**, génitif pluriel **сынове́й**
- де́рево → **дере́вья**, génitif pluriel **дере́вьев**

## 6. Supplétions

- челове́к → **лю́ди** (génitif pluriel люде́й)
- ребёнок → **де́ти** (génitif pluriel дете́й)

## 7. Radicaux irréguliers

- вре́мя → génitif **вре́мени**, instrumental **вре́менем**
- и́мя → génitif **и́мени**, instrumental **и́менем**
- мать → génitif **ма́тери**, instrumental **ма́терью**
- дочь → génitif **до́чери**, instrumental **до́черью**

## 8. Indéclinables : douze cases identiques

- кафе́ : invariable sur les douze cases
- метро́ : invariable sur les douze cases
- кино́ : invariable sur les douze cases
- Тенери́фе : invariable sur les douze cases
- меню́ : invariable sur les douze cases
- ко́фе : invariable sur les douze cases
- такси́ : invariable sur les douze cases
- е́вро : invariable sur les douze cases

## 9. Accusatif animé = génitif, partout

- 56 items animés contrôlés, singulier et pluriel
- де́душка → **де́душку** (masculin en -а, exception)
- па́па → **па́пу** (masculin en -а, exception)
- колле́га → **колле́гу** (masculin en -а, exception)

## 10. Accusatif des féminins en -ь = nominatif

- пло́щадь → accusatif **пло́щадь**
- крова́ть → accusatif **крова́ть**
- тетра́дь → accusatif **тетра́дь**
- морко́вь → accusatif **морко́вь**
- дочь → accusatif **дочь**
- мать → accusatif **мать**
- ночь → accusatif **ночь**
- о́сень → accusatif **о́сень**
- но́вость → accusatif **но́вость**

## 11. Génitif pluriel en -ий et en -ей

- ста́нция → **ста́нций**
- фотогра́фия → **фотогра́фий**
- зада́ние → **зада́ний**
- зда́ние → **зда́ний**
- рубль → **рубле́й**
- эта́ж → **этаже́й**

## 12. Phrases : cohérence du cas, de la question et de la sous-catégorie

- 111 phrases sur 111 contrôlées sans écart

## 13. Cohérence structurelle

- 497 identifiants, tous uniques
- 4758 formes russes contrôlées : douze cases ou marque d’invariabilité, un seul accent tonique par mot, aucun ё accentué
- 51 sous-catégories, toutes rattachées à un point de grammaire existant

## Couverture

| Mesure | Valeur |
| --- | --- |
| Noms | 342 |
| Adjectifs | 44 |
| Phrases en contexte | 111 |
| Points de grammaire | 22 |
| Sous-catégories | 51 |
| Cartes | 1297 |

Débit mesuré par simulation d’un an (tools/audit-invariants.js), à 25 % de réponses fausses. La colonne « corpus » indique le temps nécessaire pour aborder les 1297 cartes au rythme donné.

| Questions/séance | Séances/semaine | Réponses/an | Cartes introduites/an | Corpus | Arriéré stabilisé |
| --- | --- | --- | --- | --- | --- |
| 20 | 4 | 4 100 | 328 (25 %) | 4 ans | 84 |
| 30 | 4 | 6 200 | 516 (40 %) | 2,5 ans | 117 |
| 30 | 5 | 7 800 | 615 (47 %) | 2,1 ans | 116 |

Deux enseignements. Le curseur « nouvelles cartes par séance » ne change presque rien : passer de 4 à 8 fait 328 cartes contre 348, parce que la régulation par l’arriéré gouverne. Ce qui compte est la longueur de séance, la fréquence, et le taux de réussite : passer de 25 % à 15 % de réponses fausses fait autant que rallonger la séance de moitié, soit 516 cartes introduites au lieu de 348.

Sous-catégories portées par moins de six cartes, par nature du phénomène et non par défaut de contenu : nom_pl_supplet (2), instr_pl_mi (3), instr_saisons (4), prep_pl_phrase (4), genpl_supplet (5).

## Limite de ce contrôle

Le support `Cours_Masha_Russe.pdf` est un assemblage d’images sans couche texte : 98 pages, 97 caractères extractibles directement. Le périmètre lexical est néanmoins contrôlé, par reconnaissance optique préalable des pages : voir `tools/verifier-perimetre.py` et `RAPPORT-PERIMETRE.md`. Une absence de correspondance est un signal à vérifier à l’œil, pas une preuve : la reconnaissance manque des mots.

Ce que ce rapport garantit : la correction *interne* des paradigmes, des accents, des sous-catégories et des phrases. Ce qu’il ne garantit pas : la fidélité du périmètre au support. Cette fidélité repose sur la lecture des diapositives, et le bouton de signalement de l’application est le mécanisme de correction prévu.

Les neuf adjectifs de qualité dont la présence au support était douteuse (опа́сный, шу́мный, элега́нтный, акти́вный, здоро́вый, родно́й, внима́тельный, пра́вильный, поня́тный) ont tous été retrouvés dans les diapositives par ce contrôle.

## Formes marquées à valider

Ces items portent `aValider: true`. Une variante est attestée, ou une source diverge. Ils sont signalés dans l’interface par un badge.

- **река́** — Datif pluriel : река́м, également ре́кам selon les sources.
- **тётя** — Génitif pluriel тётей ou тёть, les deux attestés. Les deux sont acceptés à la correction.
- **у́тро** — Génitif pluriel утр, désinence zéro sans voyelle mobile, forme rare à l’usage.
- **среда́** — Accusatif в сре́ду, accent reculé. Datif pluriel сре́дам ou среда́м.
