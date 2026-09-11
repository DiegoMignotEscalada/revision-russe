// Registre des sous-catégories et points de grammaire du bloc 1.
// Fichier de DONNÉES. Source de vérité, éditable à la main.
// Produit initialement par tools/generer.py.

const GRAMMAIRE = {
 "sous": [
  {
   "id": "nom_pl_a",
   "cas": "nom",
   "libelle": "Nominatif pluriel accentué en -а́ / -я́",
   "cellule": 0,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_nom_pl"
  },
  {
   "id": "nom_pl_ya",
   "cas": "nom",
   "libelle": "Nominatif pluriel en -ья",
   "cellule": 0,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_nom_pl"
  },
  {
   "id": "nom_pl_supplet",
   "cas": "nom",
   "libelle": "Pluriels supplétifs (лю́ди, де́ти)",
   "cellule": 0,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_nom_pl"
  },
  {
   "id": "gen_sg_a",
   "cas": "gen",
   "libelle": "Génitif singulier masculin et neutre en -а / -я",
   "cellule": 1,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_gen_sg"
  },
  {
   "id": "gen_sg_y",
   "cas": "gen",
   "libelle": "Génitif singulier féminin en -ы",
   "cellule": 1,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_gen_sg"
  },
  {
   "id": "gen_sg_i",
   "cas": "gen",
   "libelle": "Génitif singulier féminin en -и",
   "cellule": 1,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_gen_sg"
  },
  {
   "id": "gen_sg_ii",
   "cas": "gen",
   "libelle": "Génitif singulier en -ии",
   "cellule": 1,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_gen_sg"
  },
  {
   "id": "gen_sg_irreg",
   "cas": "gen",
   "libelle": "Génitif singulier des radicaux irréguliers",
   "cellule": 1,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_irreguliers"
  },
  {
   "id": "gen_sg_quantite",
   "cas": "gen",
   "libelle": "Quantités et partitif au singulier",
   "cellule": null,
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_quantites"
  },
  {
   "id": "gen_pl_quantite",
   "cas": "gen",
   "libelle": "Quantités au pluriel",
   "cellule": null,
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_quantites"
  },
  {
   "id": "genpl_ov",
   "cas": "gen",
   "libelle": "Génitif pluriel masculin en -ов / -ев",
   "cellule": 1,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_gen_pl"
  },
  {
   "id": "genpl_ej",
   "cas": "gen",
   "libelle": "Génitif pluriel en -ей",
   "cellule": 1,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_gen_pl"
  },
  {
   "id": "genpl_ij",
   "cas": "gen",
   "libelle": "Génitif pluriel en -ий",
   "cellule": 1,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_gen_pl"
  },
  {
   "id": "genpl_zero",
   "cas": "gen",
   "libelle": "Génitif pluriel à désinence zéro",
   "cellule": 1,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_gen_pl"
  },
  {
   "id": "genpl_voyelle_mobile",
   "cas": "gen",
   "libelle": "Génitif pluriel à voyelle mobile",
   "cellule": 1,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_gen_pl"
  },
  {
   "id": "genpl_supplet",
   "cas": "gen",
   "libelle": "Génitifs pluriels supplétifs (лет, люде́й)",
   "cellule": 1,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_gen_pl"
  },
  {
   "id": "dat_sg_u",
   "cas": "dat",
   "libelle": "Datif singulier masculin et neutre en -у / -ю",
   "cellule": 2,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_dat"
  },
  {
   "id": "dat_sg_e",
   "cas": "dat",
   "libelle": "Datif singulier féminin en -е",
   "cellule": 2,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_dat"
  },
  {
   "id": "dat_sg_i",
   "cas": "dat",
   "libelle": "Datif singulier féminin mou en -и",
   "cellule": 2,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_dat"
  },
  {
   "id": "dat_sg_ii",
   "cas": "dat",
   "libelle": "Datif singulier en -ии",
   "cellule": 2,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_dat"
  },
  {
   "id": "dat_pl_am",
   "cas": "dat",
   "libelle": "Datif pluriel en -ам / -ям",
   "cellule": 2,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_dat"
  },
  {
   "id": "dat_nravitsya",
   "cas": "dat",
   "libelle": "нра́виться + datif",
   "cellule": null,
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_nravitsya"
  },
  {
   "id": "dat_k_po",
   "cas": "dat",
   "libelle": "к et по + datif",
   "cellule": null,
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_k_po"
  },
  {
   "id": "acc_sg_f_u",
   "cas": "acc",
   "libelle": "Accusatif singulier féminin en -у / -ю",
   "cellule": 3,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_acc"
  },
  {
   "id": "acc_sg_f_zero",
   "cas": "acc",
   "libelle": "Accusatif des féminins en -ь, identique au nominatif",
   "cellule": 3,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_acc"
  },
  {
   "id": "acc_anime_sg",
   "cas": "acc",
   "libelle": "Accusatif animé singulier = génitif",
   "cellule": 3,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_acc_anime"
  },
  {
   "id": "acc_anime_pl",
   "cas": "acc",
   "libelle": "Accusatif animé pluriel = génitif",
   "cellule": 3,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_acc_anime"
  },
  {
   "id": "acc_temps",
   "cas": "acc",
   "libelle": "Accusatif de temps et игра́ть в",
   "cellule": null,
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_acc_temps"
  },
  {
   "id": "acc_anime_phrase",
   "cas": "acc",
   "libelle": "Accusatif animé en contexte",
   "cellule": null,
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_acc_anime"
  },
  {
   "id": "instr_sg_om",
   "cas": "instr",
   "libelle": "Instrumental singulier masculin et neutre en -ом / -ем",
   "cellule": 4,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_instr"
  },
  {
   "id": "instr_sg_oj",
   "cas": "instr",
   "libelle": "Instrumental singulier féminin en -ой / -ей",
   "cellule": 4,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_instr"
  },
  {
   "id": "instr_sg_ju",
   "cas": "instr",
   "libelle": "Instrumental des féminins en -ь, en -ью",
   "cellule": 4,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_instr"
  },
  {
   "id": "instr_pl_ami",
   "cas": "instr",
   "libelle": "Instrumental pluriel en -ами / -ями",
   "cellule": 4,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_instr"
  },
  {
   "id": "instr_pl_mi",
   "cas": "instr",
   "libelle": "Instrumental pluriel en -ьми",
   "cellule": 4,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_instr_mi"
  },
  {
   "id": "instr_saisons",
   "cas": "instr",
   "libelle": "Saisons à l’instrumental",
   "cellule": null,
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_saisons"
  },
  {
   "id": "instr_zanimatsya",
   "cas": "instr",
   "libelle": "занима́ться, интересова́ться, стать + instrumental",
   "cellule": null,
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_zanimatsya"
  },
  {
   "id": "prep_sg_e",
   "cas": "prep",
   "libelle": "Prépositionnel singulier en -е",
   "cellule": 5,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_prep_sg"
  },
  {
   "id": "prep_sg_i",
   "cas": "prep",
   "libelle": "Prépositionnel des féminins en -ь, en -и",
   "cellule": 5,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_prep_sg"
  },
  {
   "id": "prep_sg_ii",
   "cas": "prep",
   "libelle": "Prépositionnel en -ии",
   "cellule": 5,
   "nombre": "sg",
   "genre": "forme",
   "regle": "gram_prep_ii"
  },
  {
   "id": "prep_pl_ah",
   "cas": "prep",
   "libelle": "Prépositionnel pluriel en -ах / -ях",
   "cellule": 5,
   "nombre": "pl",
   "genre": "forme",
   "regle": "gram_prep_sg"
  },
  {
   "id": "prep_pl_phrase",
   "cas": "prep",
   "libelle": "Prépositionnel pluriel en contexte",
   "cellule": null,
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_prep_sg"
  },
  {
   "id": "prep_mois",
   "cas": "prep",
   "libelle": "Mois au prépositionnel",
   "cellule": null,
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_mois"
  },
  {
   "id": "prep_v_na",
   "cas": "prep",
   "libelle": "В ou НА au prépositionnel",
   "cellule": null,
   "nombre": "sg",
   "genre": "choix",
   "regle": "gram_v_na"
  },
  {
   "id": "prep_locatif2",
   "cas": "prep",
   "libelle": "Deuxième locatif en -у́",
   "cellule": null,
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_locatif2"
  },
  {
   "id": "indecl",
   "cas": "nom",
   "libelle": "Substantifs indéclinables",
   "cellule": null,
   "nombre": "sg",
   "genre": "indecl",
   "regle": "gram_indeclinables"
  },
  {
   "id": "adj_nom",
   "cas": "nom",
   "libelle": "Adjectif au nominatif",
   "cellule": 0,
   "nombre": "sg",
   "genre": "adj",
   "regle": "gram_adjectifs"
  },
  {
   "id": "adj_gen",
   "cas": "gen",
   "libelle": "Adjectif au génitif",
   "cellule": 1,
   "nombre": "sg",
   "genre": "adj",
   "regle": "gram_adjectifs"
  },
  {
   "id": "adj_dat",
   "cas": "dat",
   "libelle": "Adjectif au datif",
   "cellule": 2,
   "nombre": "sg",
   "genre": "adj",
   "regle": "gram_adjectifs"
  },
  {
   "id": "adj_acc",
   "cas": "acc",
   "libelle": "Adjectif à l’accusatif",
   "cellule": 3,
   "nombre": "sg",
   "genre": "adj",
   "regle": "gram_adjectifs"
  },
  {
   "id": "adj_instr",
   "cas": "instr",
   "libelle": "Adjectif à l’instrumental",
   "cellule": 4,
   "nombre": "sg",
   "genre": "adj",
   "regle": "gram_adjectifs"
  },
  {
   "id": "adj_prep",
   "cas": "prep",
   "libelle": "Adjectif au prépositionnel",
   "cellule": 5,
   "nombre": "sg",
   "genre": "adj",
   "regle": "gram_adjectifs"
  }
 ],
 "points": [
  {
   "id": "gram_prep_sg",
   "titre": "Prépositionnel singulier",
   "cas": "prep",
   "bloc": 1,
   "regle": "Le prépositionnel ne s’emploie jamais seul : il suit toujours une préposition, le plus souvent в, на ou о. Désinence -е pour la grande majorité des noms, quel que soit le genre. Les féminins en -ь font -и. Au pluriel, -ах pour les radicaux durs, -ях pour les mous.",
   "tableau": [
    [
     "Type",
     "Nominatif",
     "Prépositionnel"
    ],
    [
     "masculin dur",
     "стол",
     "в столе́"
    ],
    [
     "masculin mou",
     "слова́рь",
     "в словаре́"
    ],
    [
     "neutre",
     "окно́",
     "в окне́"
    ],
    [
     "féminin en -а",
     "ко́мната",
     "в ко́мнате"
    ],
    [
     "féminin en -ь",
     "тетра́дь",
     "в тетра́ди"
    ],
    [
     "pluriel dur",
     "столы́",
     "на стола́х"
    ],
    [
     "pluriel mou",
     "словари́",
     "в словаря́х"
    ]
   ],
   "exemples": [
    "Мы живём в го́роде.",
    "Кни́ги лежа́т на стола́х."
   ]
  },
  {
   "id": "gram_prep_ii",
   "titre": "Prépositionnel en -ии",
   "cas": "prep",
   "bloc": 1,
   "regle": "Trois séries font -ии et non -е : les féminins en -ия, les neutres en -ие, les masculins en -ий. C’est la faute la plus régulière du niveau A2 : зда́ние donne в зда́нии, jamais в зда́ние.",
   "tableau": [
    [
     "Nominatif",
     "Prépositionnel"
    ],
    [
     "Росси́я",
     "в Росси́и"
    ],
    [
     "ста́нция",
     "на ста́нции"
    ],
    [
     "ле́кция",
     "на ле́кции"
    ],
    [
     "зда́ние",
     "в зда́нии"
    ],
    [
     "заня́тие",
     "на заня́тии"
    ],
    [
     "зада́ние",
     "в зада́нии"
    ],
    [
     "коммента́рий",
     "в коммента́рии"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_v_na",
   "titre": "В ou НА au prépositionnel",
   "cas": "prep",
   "bloc": 1,
   "regle": "В marque l’intérieur d’un espace clos ou d’un territoire. НА marque une surface, un point cardinal, une île, un événement, et un jeu de lieux de travail à retenir par cœur. La liste ci-dessous est celle du cours.",
   "tableau": [
    [
     "В",
     "НА"
    ],
    [
     "в го́роде, в стране́",
     "на се́вере, на ю́ге, на восто́ке, на за́паде"
    ],
    [
     "в теа́тре, в клу́бе, в о́фисе",
     "на о́строве"
    ],
    [
     "в музе́е, в рестора́не",
     "на рабо́те, на конце́рте"
    ],
    [
     "в университе́те, в шко́ле",
     "на ле́кции, на уро́ке, на экза́мене"
    ],
    [
     "в па́рке, в лесу́, в саду́",
     "на вы́ставке, на экску́рсии"
    ],
    [
     "в мо́ре, в реке́ (dans l’eau)",
     "на реке́, на мо́ре (au bord)"
    ],
    [
     "в Интерне́те, в бло́ге, в ча́те",
     "на са́йте, на страни́це, на фо́руме"
    ],
    [
     "—",
     "на фа́брике, на заво́де, на вокза́ле, на ста́нции, на фе́рме, на по́чте"
    ],
    [
     "—",
     "на у́лице, на проспе́кте, на пло́щади, на стадио́не, на ры́нке"
    ],
    [
     "—",
     "на бале́те, на о́пере, на встре́че, на обе́де"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_mois",
   "titre": "Mois au prépositionnel",
   "cas": "prep",
   "bloc": 1,
   "regle": "Les mois prennent в + prépositionnel : в январе́, в декабре́. Les noms de mois en -брь et en -рь portent l’accent sur la désinence à tous les cas obliques : сентя́брь donne сентября́, в сентябре́. À ne pas confondre avec les saisons, qui donnent un adverbe par leur seul instrumental, sans préposition : зимо́й, ле́том.",
   "tableau": [
    [
     "Nominatif",
     "Quand ?"
    ],
    [
     "янва́рь",
     "в январе́"
    ],
    [
     "февра́ль",
     "в феврале́"
    ],
    [
     "март",
     "в ма́рте"
    ],
    [
     "апре́ль",
     "в апре́ле"
    ],
    [
     "май",
     "в ма́е"
    ],
    [
     "сентя́брь",
     "в сентябре́"
    ],
    [
     "октя́брь",
     "в октябре́"
    ],
    [
     "дека́брь",
     "в декабре́"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_locatif2",
   "titre": "Deuxième locatif en -у́",
   "cas": "prep",
   "bloc": 1,
   "regle": "Quelques masculins ont deux formes de prépositionnel. Après в ou на pour situer physiquement, la désinence est -у́, toujours accentuée. Après о au sens de « au sujet de », la forme est régulière en -е. Le support ne contient pas в часу́ : il donne au contraire ско́лько мину́т в ча́се, où час est une unité de durée. La forme в часу́ ne vaut que pour l’heure du jour et n’est pas testée ici.",
   "tableau": [
    [
     "Nom",
     "Situation",
     "À propos de"
    ],
    [
     "лес",
     "в лесу́",
     "о ле́се"
    ],
    [
     "сад",
     "в саду́",
     "о са́де"
    ],
    [
     "бе́рег",
     "на берегу́",
     "о бе́реге"
    ],
    [
     "шкаф",
     "в шкафу́",
     "о шка́фе"
    ],
    [
     "пол",
     "на полу́",
     "о по́ле"
    ],
    [
     "год",
     "в году́",
     "о го́де"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_acc",
   "titre": "Accusatif",
   "cas": "acc",
   "bloc": 1,
   "regle": "Pour un inanimé, l’accusatif est identique au nominatif, sauf les féminins en -а / -я qui font -у / -ю. Les féminins en -ь ne changent pas : пло́щадь, тетра́дь, ночь restent identiques. Au pluriel, l’accusatif des inanimés est identique au nominatif.",
   "tableau": [
    [
     "Genre",
     "Nominatif",
     "Accusatif"
    ],
    [
     "masculin inanimé",
     "журна́л",
     "журна́л"
    ],
    [
     "neutre",
     "письмо́",
     "письмо́"
    ],
    [
     "féminin en -а",
     "кни́га",
     "кни́гу"
    ],
    [
     "féminin en -я",
     "ку́хня",
     "ку́хню"
    ],
    [
     "féminin en -ия",
     "фотогра́фия",
     "фотогра́фию"
    ],
    [
     "féminin en -ь",
     "пло́щадь",
     "пло́щадь"
    ],
    [
     "pluriel inanimé",
     "газе́ты",
     "газе́ты"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_acc_anime",
   "titre": "Accusatif animé = génitif",
   "cas": "acc",
   "bloc": 1,
   "regle": "Un être animé prend au singulier masculin, et au pluriel dans les trois genres, la forme du génitif et non celle du nominatif. Le féminin singulier garde sa désinence propre en -у. Exception à connaître : les masculins de la déclinaison en -а (па́па, де́душка, колле́га) font -у comme les féminins.",
   "tableau": [
    [
     "",
     "Nominatif",
     "Accusatif"
    ],
    [
     "masculin animé sg",
     "актёр",
     "актёра"
    ],
    [
     "masculin animé sg",
     "врач",
     "врача́"
    ],
    [
     "masculin en -а",
     "де́душка",
     "де́душку"
    ],
    [
     "féminin animé sg",
     "актри́са",
     "актри́су"
    ],
    [
     "pluriel animé",
     "актёры",
     "актёров"
    ],
    [
     "pluriel animé",
     "де́ти",
     "дете́й"
    ],
    [
     "pluriel inanimé",
     "журна́лы",
     "журна́лы"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_acc_temps",
   "titre": "Accusatif de temps",
   "cas": "acc",
   "bloc": 1,
   "regle": "Les jours de la semaine et les expressions de fréquence se mettent à l’accusatif après в. Retenir во вто́рник, avec во et non в, pour des raisons de prononciation. Retenir aussi que игра́ть prend в + accusatif (игра́ть в футбо́л) là où занима́ться prend l’instrumental (занима́ться пла́ванием).",
   "tableau": [
    [
     "Nominatif",
     "Quand ?"
    ],
    [
     "понеде́льник",
     "в понеде́льник"
    ],
    [
     "вто́рник",
     "во вто́рник"
    ],
    [
     "среда́",
     "в сре́ду"
    ],
    [
     "четве́рг",
     "в четве́рг"
    ],
    [
     "пя́тница",
     "в пя́тницу"
    ],
    [
     "суббо́та",
     "в суббо́ту"
    ],
    [
     "воскресе́нье",
     "в воскресе́нье"
    ],
    [
     "выходны́е",
     "в выходны́е"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_dat",
   "titre": "Datif",
   "cas": "dat",
   "bloc": 1,
   "regle": "Datif singulier : -у / -ю pour les masculins et les neutres, -е pour les féminins en -а / -я, -и pour les féminins en -ь, -ии pour les séries en -ия et -ие. Au pluriel, -ам / -ям pour tous les genres.",
   "tableau": [
    [
     "Type",
     "Nominatif",
     "Datif"
    ],
    [
     "masculin",
     "учи́тель",
     "учи́телю"
    ],
    [
     "neutre",
     "мо́ре",
     "мо́рю"
    ],
    [
     "féminin en -а",
     "де́вушка",
     "де́вушке"
    ],
    [
     "féminin en -ия",
     "Мари́я",
     "Мари́и"
    ],
    [
     "féminin en -ь",
     "пло́щадь",
     "пло́щади"
    ],
    [
     "pluriel",
     "де́ти",
     "де́тям"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_nravitsya",
   "titre": "нра́виться + datif",
   "cas": "dat",
   "bloc": 1,
   "regle": "Avec люби́ть, la personne est sujet et l’objet aimé est à l’accusatif. Avec нра́виться, la construction s’inverse : la personne passe au datif et l’objet devient sujet au nominatif, ce qui commande l’accord du verbe. Ива́н лю́бит бале́т devient Ива́ну нра́вится бале́т.",
   "tableau": [],
   "exemples": [
    "Ма́ма лю́бит джаз. → Ма́ме нра́вится джаз.",
    "Студе́нт лю́бит кни́ги. → Студе́нту нра́вятся кни́ги."
   ]
  },
  {
   "id": "gram_k_po",
   "titre": "к et по + datif",
   "cas": "dat",
   "bloc": 1,
   "regle": "К introduit la direction vers une personne : идти́ к врачу́. По introduit un déplacement le long de ou sur une surface, et le moyen de communication : гуля́ть по пло́щади, говори́ть по телефо́ну. На́до, ну́жно, мо́жно, нельзя́ construisent également la personne au datif.",
   "tableau": [],
   "exemples": [
    "Зри́телю на́до идти́ к ме́сту.",
    "Мари́и нельзя́ есть шокола́д."
   ]
  },
  {
   "id": "gram_instr",
   "titre": "Instrumental",
   "cas": "instr",
   "bloc": 1,
   "regle": "Instrumental singulier : -ом / -ем pour les masculins et les neutres, -ой / -ей pour les féminins en -а / -я, -ью pour les féminins en -ь. Au pluriel, -ами / -ями. Le choix entre -ом et -ем, entre -ой et -ей, dépend de la dureté du radical et de la place de l’accent : après ж, ш, ч, щ, ц non accentué, on écrit -ем et -ей.",
   "tableau": [
    [
     "Type",
     "Nominatif",
     "Instrumental"
    ],
    [
     "masculin dur",
     "стол",
     "столо́м"
    ],
    [
     "masculin en -ж non accentué",
     "муж",
     "му́жем"
    ],
    [
     "masculin en -ж accentué",
     "эта́ж",
     "этажо́м"
    ],
    [
     "neutre",
     "мо́ре",
     "мо́рем"
    ],
    [
     "féminin en -а",
     "маши́на",
     "маши́ной"
    ],
    [
     "féminin en -ца",
     "ку́рица",
     "ку́рицей"
    ],
    [
     "féminin en -ь",
     "ночь",
     "но́чью"
    ],
    [
     "pluriel",
     "друзья́",
     "друзья́ми"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_instr_mi",
   "titre": "Instrumental pluriel en -ьми",
   "cas": "instr",
   "bloc": 1,
   "regle": "Trois noms seulement, mais très fréquents, font leur instrumental pluriel en -ьми : дочерьми́, детьми́, людьми́. La forme дочеря́ми est fautive.",
   "tableau": [
    [
     "Nominatif pluriel",
     "Instrumental pluriel"
    ],
    [
     "до́чери",
     "дочерьми́"
    ],
    [
     "де́ти",
     "детьми́"
    ],
    [
     "лю́ди",
     "людьми́"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_saisons",
   "titre": "Saisons à l’instrumental",
   "cas": "instr",
   "bloc": 1,
   "regle": "Les quatre saisons donnent un adverbe de temps par leur seul instrumental, sans préposition : зимо́й, весно́й, ле́том, о́сенью. Les mois, eux, prennent в + prépositionnel : в декабре́, в январе́.",
   "tableau": [
    [
     "Quoi ?",
     "Quand ?"
    ],
    [
     "зима́",
     "зимо́й"
    ],
    [
     "весна́",
     "весно́й"
    ],
    [
     "ле́то",
     "ле́том"
    ],
    [
     "о́сень",
     "о́сенью"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_zanimatsya",
   "titre": "занима́ться, интересова́ться, стать + instrumental",
   "cas": "instr",
   "bloc": 1,
   "regle": "Ces verbes commandent l’instrumental sans préposition : занима́ться пла́ванием, интересова́ться исто́рией, стать компози́тором, рабо́тать адвока́том, быть друзья́ми. À distinguer de игра́ть в + accusatif, qui vaut pour les sports d’équipe et de balle.",
   "tableau": [],
   "exemples": [
    "Она́ занима́ется гимна́стикой.",
    "Они́ игра́ют в футбо́л."
   ]
  },
  {
   "id": "gram_gen_sg",
   "titre": "Génitif singulier",
   "cas": "gen",
   "bloc": 1,
   "regle": "Génitif singulier : -а / -я pour les masculins et les neutres, -ы / -и pour les féminins en -а / -я, -и pour les féminins en -ь, -ии pour les séries en -ия. Après к, г, х, ж, ш, ч, щ, on écrit -и et non -ы.",
   "tableau": [
    [
     "Type",
     "Nominatif",
     "Génitif"
    ],
    [
     "masculin",
     "парк",
     "па́рка"
    ],
    [
     "masculin en -ь",
     "води́тель",
     "води́теля"
    ],
    [
     "neutre",
     "о́зеро",
     "о́зера"
    ],
    [
     "féminin en -а",
     "шко́ла",
     "шко́лы"
    ],
    [
     "féminin en -га",
     "кни́га",
     "кни́ги"
    ],
    [
     "féminin en -ия",
     "гимна́зия",
     "гимна́зии"
    ],
    [
     "féminin en -ь",
     "пло́щадь",
     "пло́щади"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_quantites",
   "titre": "Quantités et partitif",
   "cas": "gen",
   "bloc": 1,
   "regle": "Après мно́го, ма́ло, немно́го, ско́лько et après une mesure, le nom se met au génitif : ча́шка ча́я, буты́лка воды́, мно́го вре́мени. Avec les nombres, 1 gouverne le nominatif, 2, 3 et 4 le génitif singulier, 5 et au-delà le génitif pluriel.",
   "tableau": [
    [
     "Nombre",
     "Cas",
     "Exemple"
    ],
    [
     "1",
     "nominatif",
     "оди́н рубль"
    ],
    [
     "2, 3, 4",
     "génitif singulier",
     "два рубля́"
    ],
    [
     "5 et plus",
     "génitif pluriel",
     "пять рубле́й"
    ],
    [
     "мно́го, ма́ло",
     "génitif",
     "мно́го де́нег"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_gen_pl",
   "titre": "Génitif pluriel",
   "cas": "gen",
   "bloc": 1,
   "regle": "Le point le plus coûteux du système. Les masculins font -ов, ou -ев après -й, ou -ей après ж, ш, ч, щ et -ь. Les féminins en -а et les neutres en -о perdent leur désinence : il ne reste que le radical, souvent avec une voyelle mobile insérée pour éviter un groupe de consonnes final. Les séries en -ия et -ие font -ий.",
   "tableau": [
    [
     "Type",
     "Nominatif",
     "Génitif pluriel"
    ],
    [
     "masculin dur",
     "магази́н",
     "магази́нов"
    ],
    [
     "masculin en -й",
     "музе́й",
     "музе́ев"
    ],
    [
     "masculin en -ж, -ь",
     "эта́ж, рубль",
     "этаже́й, рубле́й"
    ],
    [
     "féminin en -а",
     "кни́га, шко́ла",
     "книг, школ"
    ],
    [
     "voyelle mobile",
     "ко́шка, ку́хня, ку́ртка",
     "ко́шек, ку́хонь, ку́рток"
    ],
    [
     "neutre en -о",
     "окно́, письмо́",
     "о́кон, пи́сем"
    ],
    [
     "série en -ия, -ие",
     "ста́нция, зда́ние",
     "ста́нций, зда́ний"
    ],
    [
     "pluriels en -ья",
     "сту́лья, бра́тья, друзья́",
     "сту́льев, бра́тьев, друзе́й"
    ],
    [
     "supplétions",
     "год, челове́к, ребёнок",
     "лет, люде́й, дете́й"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_nom_pl",
   "titre": "Nominatif pluriel irrégulier",
   "cas": "nom",
   "bloc": 1,
   "regle": "Le nominatif sert de forme de référence, mais son pluriel réserve trois séries à mémoriser : les masculins à pluriel accentué en -а́ (го́род → города́), les pluriels en -ья (стул → сту́лья), et deux supplétions complètes (челове́к → лю́ди, ребёнок → де́ти).",
   "tableau": [
    [
     "Singulier",
     "Pluriel",
     "Génitif pluriel"
    ],
    [
     "го́род",
     "города́",
     "городо́в"
    ],
    [
     "дом",
     "дома́",
     "домо́в"
    ],
    [
     "стул",
     "сту́лья",
     "сту́льев"
    ],
    [
     "брат",
     "бра́тья",
     "бра́тьев"
    ],
    [
     "друг",
     "друзья́",
     "друзе́й"
    ],
    [
     "сын",
     "сыновья́",
     "сынове́й"
    ],
    [
     "де́рево",
     "дере́вья",
     "дере́вьев"
    ],
    [
     "челове́к",
     "лю́ди",
     "люде́й"
    ],
    [
     "ребёнок",
     "де́ти",
     "дете́й"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_irreguliers",
   "titre": "Radicaux irréguliers",
   "cas": "gen",
   "bloc": 1,
   "regle": "Quatre noms allongent leur radical hors du nominatif et de l’accusatif : вре́мя et и́мя en -ен-, мать et дочь en -ер-. Le masculin путь, qui se décline comme un féminin, ne figure pas dans le support et n’est donc pas testé ici.",
   "tableau": [
    [
     "Nominatif",
     "Génitif",
     "Instrumental",
     "Prépositionnel"
    ],
    [
     "вре́мя",
     "вре́мени",
     "вре́менем",
     "вре́мени"
    ],
    [
     "и́мя",
     "и́мени",
     "и́менем",
     "и́мени"
    ],
    [
     "мать",
     "ма́тери",
     "ма́терью",
     "ма́тери"
    ],
    [
     "дочь",
     "до́чери",
     "до́черью",
     "до́чери"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_indeclinables",
   "titre": "Substantifs indéclinables",
   "cas": "nom",
   "bloc": 1,
   "regle": "Les emprunts terminés par une voyelle inattendue ne se déclinent pas : les douze cases sont identiques. Seul le contexte indique la fonction. Ils restent neutres pour l’accord, sauf ко́фе, traditionnellement masculin.",
   "tableau": [],
   "exemples": [
    "ко́фе, такси́, метро́, пальто́, кино́, кафе́, е́вро",
    "Я е́ду на такси́. Я говорю́ о такси́."
   ]
  },
  {
   "id": "gram_adjectifs",
   "titre": "Déclinaison de l’adjectif",
   "cas": "nom",
   "bloc": 1,
   "regle": "L’adjectif s’accorde en genre, en nombre et en cas. Quatre séries de désinences selon la finale du radical : dure, vélaire (к, г, х), sifflante (ж, ш, ч, щ) et molle. L’accusatif masculin et pluriel suit la règle de l’animé : identique au nominatif pour un inanimé, au génitif pour un animé. Le féminin fait toujours -ую / -юю.",
   "tableau": [
    [
     "Cas",
     "masculin",
     "féminin",
     "neutre",
     "pluriel"
    ],
    [
     "Nominatif",
     "но́вый",
     "но́вая",
     "но́вое",
     "но́вые"
    ],
    [
     "Génitif",
     "но́вого",
     "но́вой",
     "но́вого",
     "но́вых"
    ],
    [
     "Datif",
     "но́вому",
     "но́вой",
     "но́вому",
     "но́вым"
    ],
    [
     "Accusatif",
     "= N ou G",
     "но́вую",
     "но́вое",
     "= N ou G"
    ],
    [
     "Instrumental",
     "но́вым",
     "но́вой",
     "но́вым",
     "но́выми"
    ],
    [
     "Prépositionnel",
     "но́вом",
     "но́вой",
     "но́вом",
     "но́вых"
    ],
    [
     "vélaire",
     "ма́ленький",
     "ма́ленькая",
     "ма́ленькое",
     "ма́ленькие"
    ],
    [
     "sifflante",
     "хоро́ший",
     "хоро́шая",
     "хоро́шее",
     "хоро́шие"
    ],
    [
     "molle",
     "си́ний",
     "си́няя",
     "си́нее",
     "си́ние"
    ],
    [
     "finale accentuée",
     "молодо́й",
     "молода́я",
     "молодо́е",
     "молоды́е"
    ]
   ],
   "exemples": []
  }
 ]
};

if (typeof window !== 'undefined') window.GRAMMAIRE = GRAMMAIRE;
