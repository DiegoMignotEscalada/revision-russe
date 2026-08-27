// Lexique du bloc 1 : noms et adjectifs, six cas, deux nombres.
// Fichier de DONNÉES. Source de vérité, éditable à la main.
// Produit initialement par tools/generer.py.

const LEXIQUE = [
 {
  "id": "lex_gorod",
  "type": "nom",
  "lemme": "го́род",
  "fr": "ville",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "го́род",
   "го́рода",
   "го́роду",
   "го́род",
   "го́родом",
   "го́роде"
  ],
  "pl": [
   "города́",
   "городо́в",
   "города́м",
   "города́",
   "города́ми",
   "города́х"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u",
   "nom_pl_a",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_strana",
  "type": "nom",
  "lemme": "страна́",
  "fr": "pays",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "страна́",
   "страны́",
   "стране́",
   "страну́",
   "страно́й",
   "стране́"
  ],
  "pl": [
   "стра́ны",
   "стран",
   "стра́нам",
   "стра́ны",
   "стра́нами",
   "стра́нах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_sg_f_u",
   "instr_sg_om",
   "genpl_zero",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_teatr",
  "type": "nom",
  "lemme": "теа́тр",
  "fr": "théâtre",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "теа́тр",
   "теа́тра",
   "теа́тру",
   "теа́тр",
   "теа́тром",
   "теа́тре"
  ],
  "pl": [
   "теа́тры",
   "теа́тров",
   "теа́трам",
   "теа́тры",
   "теа́трами",
   "теа́трах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_klub",
  "type": "nom",
  "lemme": "клуб",
  "fr": "club",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "клуб",
   "клу́ба",
   "клу́бу",
   "клуб",
   "клу́бом",
   "клу́бе"
  ],
  "pl": [
   "клу́бы",
   "клу́бов",
   "клу́бам",
   "клу́бы",
   "клу́бами",
   "клу́бах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_ofis",
  "type": "nom",
  "lemme": "о́фис",
  "fr": "bureau (local)",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "о́фис",
   "о́фиса",
   "о́фису",
   "о́фис",
   "о́фисом",
   "о́фисе"
  ],
  "pl": [
   "о́фисы",
   "о́фисов",
   "о́фисам",
   "о́фисы",
   "о́фисами",
   "о́фисах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_muzej",
  "type": "nom",
  "lemme": "музе́й",
  "fr": "musée",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "музе́й",
   "музе́я",
   "музе́ю",
   "музе́й",
   "музе́ем",
   "музе́е"
  ],
  "pl": [
   "музе́и",
   "музе́ев",
   "музе́ям",
   "музе́и",
   "музе́ями",
   "музе́ях"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ov",
   "prep_pl_ah",
   "dat_pl_am",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_restoran",
  "type": "nom",
  "lemme": "рестора́н",
  "fr": "restaurant",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "рестора́н",
   "рестора́на",
   "рестора́ну",
   "рестора́н",
   "рестора́ном",
   "рестора́не"
  ],
  "pl": [
   "рестора́ны",
   "рестора́нов",
   "рестора́нам",
   "рестора́ны",
   "рестора́нами",
   "рестора́нах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_internet",
  "type": "nom",
  "lemme": "Интерне́т",
  "fr": "Internet",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "Интерне́т",
   "Интерне́та",
   "Интерне́ту",
   "Интерне́т",
   "Интерне́том",
   "Интерне́те"
  ],
  "pl": [
   "Интерне́ты",
   "Интерне́тов",
   "Интерне́там",
   "Интерне́ты",
   "Интерне́тами",
   "Интерне́тах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_blog",
  "type": "nom",
  "lemme": "блог",
  "fr": "blog",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "блог",
   "бло́га",
   "бло́гу",
   "блог",
   "бло́гом",
   "бло́ге"
  ],
  "pl": [
   "бло́ги",
   "бло́гов",
   "бло́гам",
   "бло́ги",
   "бло́гами",
   "бло́гах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_chat",
  "type": "nom",
  "lemme": "чат",
  "fr": "messagerie, chat",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "чат",
   "ча́та",
   "ча́ту",
   "чат",
   "ча́том",
   "ча́те"
  ],
  "pl": [
   "ча́ты",
   "ча́тов",
   "ча́там",
   "ча́ты",
   "ча́тами",
   "ча́тах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_sever",
  "type": "nom",
  "lemme": "се́вер",
  "fr": "nord",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "се́вер",
   "се́вера",
   "се́веру",
   "се́вер",
   "се́вером",
   "се́вере"
  ],
  "pl": [
   "се́веры",
   "се́веров",
   "се́верам",
   "се́веры",
   "се́верами",
   "се́верах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_jug",
  "type": "nom",
  "lemme": "юг",
  "fr": "sud",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "юг",
   "ю́га",
   "ю́гу",
   "юг",
   "ю́гом",
   "ю́ге"
  ],
  "pl": [
   "ю́ги",
   "ю́гов",
   "ю́гам",
   "ю́ги",
   "ю́гами",
   "ю́гах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_vostok",
  "type": "nom",
  "lemme": "восто́к",
  "fr": "est",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "восто́к",
   "восто́ка",
   "восто́ку",
   "восто́к",
   "восто́ком",
   "восто́ке"
  ],
  "pl": [
   "восто́ки",
   "восто́ков",
   "восто́кам",
   "восто́ки",
   "восто́ками",
   "восто́ках"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_zapad",
  "type": "nom",
  "lemme": "за́пад",
  "fr": "ouest",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "за́пад",
   "за́пада",
   "за́паду",
   "за́пад",
   "за́падом",
   "за́паде"
  ],
  "pl": [
   "за́пады",
   "за́падов",
   "за́падам",
   "за́пады",
   "за́падами",
   "за́падах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_ostrov",
  "type": "nom",
  "lemme": "о́стров",
  "fr": "île",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "о́стров",
   "о́строва",
   "о́строву",
   "о́стров",
   "о́стровом",
   "о́строве"
  ],
  "pl": [
   "острова́",
   "острово́в",
   "острова́м",
   "острова́",
   "острова́ми",
   "острова́х"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om",
   "nom_pl_a",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_rabota",
  "type": "nom",
  "lemme": "рабо́та",
  "fr": "travail",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "рабо́та",
   "рабо́ты",
   "рабо́те",
   "рабо́ту",
   "рабо́той",
   "рабо́те"
  ],
  "pl": [
   "рабо́ты",
   "рабо́т",
   "рабо́там",
   "рабо́ты",
   "рабо́тами",
   "рабо́тах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_zero",
   "prep_pl_ah",
   "dat_pl_am",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_koncert",
  "type": "nom",
  "lemme": "конце́рт",
  "fr": "concert",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "конце́рт",
   "конце́рта",
   "конце́рту",
   "конце́рт",
   "конце́ртом",
   "конце́рте"
  ],
  "pl": [
   "конце́рты",
   "конце́ртов",
   "конце́ртам",
   "конце́рты",
   "конце́ртами",
   "конце́ртах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_lekcija",
  "type": "nom",
  "lemme": "ле́кция",
  "fr": "cours magistral",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "ле́кция",
   "ле́кции",
   "ле́кции",
   "ле́кцию",
   "ле́кцией",
   "ле́кции"
  ],
  "pl": [
   "ле́кции",
   "ле́кций",
   "ле́кциям",
   "ле́кции",
   "ле́кциями",
   "ле́кциях"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_ii",
   "dat_sg_ii",
   "acc_sg_f_u",
   "prep_sg_ii",
   "genpl_ij",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_urok",
  "type": "nom",
  "lemme": "уро́к",
  "fr": "leçon, cours",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "уро́к",
   "уро́ка",
   "уро́ку",
   "уро́к",
   "уро́ком",
   "уро́ке"
  ],
  "pl": [
   "уро́ки",
   "уро́ков",
   "уро́кам",
   "уро́ки",
   "уро́ками",
   "уро́ках"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_ekzamen",
  "type": "nom",
  "lemme": "экза́мен",
  "fr": "examen",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "экза́мен",
   "экза́мена",
   "экза́мену",
   "экза́мен",
   "экза́меном",
   "экза́мене"
  ],
  "pl": [
   "экза́мены",
   "экза́менов",
   "экза́менам",
   "экза́мены",
   "экза́менами",
   "экза́менах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_vystavka",
  "type": "nom",
  "lemme": "вы́ставка",
  "fr": "exposition",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "вы́ставка",
   "вы́ставки",
   "вы́ставке",
   "вы́ставку",
   "вы́ставкой",
   "вы́ставке"
  ],
  "pl": [
   "вы́ставки",
   "вы́ставок",
   "вы́ставкам",
   "вы́ставки",
   "вы́ставками",
   "вы́ставках"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_i",
   "dat_sg_e",
   "genpl_voyelle_mobile",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_ekskursija",
  "type": "nom",
  "lemme": "экску́рсия",
  "fr": "excursion",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "экску́рсия",
   "экску́рсии",
   "экску́рсии",
   "экску́рсию",
   "экску́рсией",
   "экску́рсии"
  ],
  "pl": [
   "экску́рсии",
   "экску́рсий",
   "экску́рсиям",
   "экску́рсии",
   "экску́рсиями",
   "экску́рсиях"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_sg_f_u",
   "instr_sg_oj",
   "genpl_ij",
   "prep_sg_ii",
   "gen_sg_ii",
   "dat_sg_ii",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_vstrecha",
  "type": "nom",
  "lemme": "встре́ча",
  "fr": "rendez-vous, réunion",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "встре́ча",
   "встре́чи",
   "встре́че",
   "встре́чу",
   "встре́чей",
   "встре́че"
  ],
  "pl": [
   "встре́чи",
   "встреч",
   "встре́чам",
   "встре́чи",
   "встре́чами",
   "встре́чах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_sajt",
  "type": "nom",
  "lemme": "сайт",
  "fr": "site",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "сайт",
   "са́йта",
   "са́йту",
   "сайт",
   "са́йтом",
   "са́йте"
  ],
  "pl": [
   "са́йты",
   "са́йтов",
   "са́йтам",
   "са́йты",
   "са́йтами",
   "са́йтах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_stranica",
  "type": "nom",
  "lemme": "страни́ца",
  "fr": "page",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "страни́ца",
   "страни́цы",
   "страни́це",
   "страни́цу",
   "страни́цей",
   "страни́це"
  ],
  "pl": [
   "страни́цы",
   "страни́ц",
   "страни́цам",
   "страни́цы",
   "страни́цами",
   "страни́цах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_e",
   "acc_sg_f_u",
   "instr_sg_oj",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_forum",
  "type": "nom",
  "lemme": "фо́рум",
  "fr": "forum",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "фо́рум",
   "фо́рума",
   "фо́руму",
   "фо́рум",
   "фо́румом",
   "фо́руме"
  ],
  "pl": [
   "фо́румы",
   "фо́румов",
   "фо́румам",
   "фо́румы",
   "фо́румами",
   "фо́румах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ov",
   "prep_pl_ah",
   "dat_pl_am",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_fabrika",
  "type": "nom",
  "lemme": "фа́брика",
  "fr": "manufacture",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "фа́брика",
   "фа́брики",
   "фа́брике",
   "фа́брику",
   "фа́брикой",
   "фа́брике"
  ],
  "pl": [
   "фа́брики",
   "фа́брик",
   "фа́брикам",
   "фа́брики",
   "фа́бриками",
   "фа́бриках"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_zavod",
  "type": "nom",
  "lemme": "заво́д",
  "fr": "usine",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "заво́д",
   "заво́да",
   "заво́ду",
   "заво́д",
   "заво́дом",
   "заво́де"
  ],
  "pl": [
   "заво́ды",
   "заво́дов",
   "заво́дам",
   "заво́ды",
   "заво́дами",
   "заво́дах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_vokzal",
  "type": "nom",
  "lemme": "вокза́л",
  "fr": "gare",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "вокза́л",
   "вокза́ла",
   "вокза́лу",
   "вокза́л",
   "вокза́лом",
   "вокза́ле"
  ],
  "pl": [
   "вокза́лы",
   "вокза́лов",
   "вокза́лам",
   "вокза́лы",
   "вокза́лами",
   "вокза́лах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_stancija",
  "type": "nom",
  "lemme": "ста́нция",
  "fr": "station",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "ста́нция",
   "ста́нции",
   "ста́нции",
   "ста́нцию",
   "ста́нцией",
   "ста́нции"
  ],
  "pl": [
   "ста́нции",
   "ста́нций",
   "ста́нциям",
   "ста́нции",
   "ста́нциями",
   "ста́нциях"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "prep_sg_ii",
   "gen_sg_ii",
   "dat_sg_ii",
   "genpl_ij",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_ferma",
  "type": "nom",
  "lemme": "фе́рма",
  "fr": "ferme",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "фе́рма",
   "фе́рмы",
   "фе́рме",
   "фе́рму",
   "фе́рмой",
   "фе́рме"
  ],
  "pl": [
   "фе́рмы",
   "ферм",
   "фе́рмам",
   "фе́рмы",
   "фе́рмами",
   "фе́рмах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_y",
   "dat_sg_e",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_pochta",
  "type": "nom",
  "lemme": "по́чта",
  "fr": "poste",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "по́чта",
   "по́чты",
   "по́чте",
   "по́чту",
   "по́чтой",
   "по́чте"
  ],
  "pl": [
   "по́чты",
   "почт",
   "по́чтам",
   "по́чты",
   "по́чтами",
   "по́чтах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_sg_f_u",
   "instr_sg_oj",
   "genpl_zero",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_more",
  "type": "nom",
  "lemme": "мо́ре",
  "fr": "mer",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "мо́ре",
   "мо́ря",
   "мо́рю",
   "мо́ре",
   "мо́рем",
   "мо́ре"
  ],
  "pl": [
   "моря́",
   "море́й",
   "моря́м",
   "моря́",
   "моря́ми",
   "моря́х"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": "в мо́ре = dans l’eau ; на мо́ре = au bord de la mer.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "genpl_ej",
   "nom_pl_a",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_reka",
  "type": "nom",
  "lemme": "река́",
  "fr": "rivière",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "река́",
   "реки́",
   "реке́",
   "ре́ку",
   "реко́й",
   "реке́"
  ],
  "pl": [
   "ре́ки",
   "рек",
   "река́м",
   "ре́ки",
   "река́ми",
   "река́х"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": "Datif pluriel : река́м, également ре́кам selon les sources.",
  "aValider": true,
  "sourceProf": true,
  "variantes": {
   "pl.2": [
    "ре́кам"
   ],
   "pl.5": [
    "ре́ках"
   ],
   "pl.4": [
    "ре́ками"
   ]
  },
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_ozero",
  "type": "nom",
  "lemme": "о́зеро",
  "fr": "lac",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "о́зеро",
   "о́зера",
   "о́зеру",
   "о́зеро",
   "о́зером",
   "о́зере"
  ],
  "pl": [
   "озёра",
   "озёр",
   "озёрам",
   "озёра",
   "озёрами",
   "озёрах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_okean",
  "type": "nom",
  "lemme": "океа́н",
  "fr": "océan",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "океа́н",
   "океа́на",
   "океа́ну",
   "океа́н",
   "океа́ном",
   "океа́не"
  ],
  "pl": [
   "океа́ны",
   "океа́нов",
   "океа́нам",
   "океа́ны",
   "океа́нами",
   "океа́нах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ov",
   "prep_pl_ah",
   "dat_pl_am",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_voda",
  "type": "nom",
  "lemme": "вода́",
  "fr": "eau",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "вода́",
   "воды́",
   "воде́",
   "во́ду",
   "водо́й",
   "воде́"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Accusatif à accent reculé : во́ду, non водý.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_bereg",
  "type": "nom",
  "lemme": "бе́рег",
  "fr": "rive, bord",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "бе́рег",
   "бе́рега",
   "бе́регу",
   "бе́рег",
   "бе́регом",
   "бе́реге"
  ],
  "pl": [
   "берега́",
   "берего́в",
   "берега́м",
   "берега́",
   "берега́ми",
   "берега́х"
  ],
  "prep": "на",
  "loc2": {
   "forme": "на берегу́",
   "contexte": "situation dans le lieu"
  },
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u",
   "nom_pl_a",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_park",
  "type": "nom",
  "lemme": "парк",
  "fr": "parc",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "парк",
   "па́рка",
   "па́рку",
   "парк",
   "па́рком",
   "па́рке"
  ],
  "pl": [
   "па́рки",
   "па́рков",
   "па́ркам",
   "па́рки",
   "па́рками",
   "па́рках"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_les",
  "type": "nom",
  "lemme": "лес",
  "fr": "forêt",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "лес",
   "ле́са",
   "ле́су",
   "лес",
   "ле́сом",
   "ле́се"
  ],
  "pl": [
   "леса́",
   "лесо́в",
   "леса́м",
   "леса́",
   "леса́ми",
   "леса́х"
  ],
  "prep": "в",
  "loc2": {
   "forme": "в лесу́",
   "contexte": "situation dans le lieu"
  },
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "nom_pl_a",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_sad",
  "type": "nom",
  "lemme": "сад",
  "fr": "jardin",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "сад",
   "са́да",
   "са́ду",
   "сад",
   "са́дом",
   "са́де"
  ],
  "pl": [
   "сады́",
   "садо́в",
   "сада́м",
   "сады́",
   "сада́ми",
   "сада́х"
  ],
  "prep": "в",
  "loc2": {
   "forme": "в саду́",
   "contexte": "situation dans le lieu"
  },
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_ulica",
  "type": "nom",
  "lemme": "у́лица",
  "fr": "rue",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "у́лица",
   "у́лицы",
   "у́лице",
   "у́лицу",
   "у́лицей",
   "у́лице"
  ],
  "pl": [
   "у́лицы",
   "у́лиц",
   "у́лицам",
   "у́лицы",
   "у́лицами",
   "у́лицах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_sg_f_u",
   "instr_sg_oj",
   "genpl_zero",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_prospekt",
  "type": "nom",
  "lemme": "проспе́кт",
  "fr": "avenue",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "проспе́кт",
   "проспе́кта",
   "проспе́кту",
   "проспе́кт",
   "проспе́ктом",
   "проспе́кте"
  ],
  "pl": [
   "проспе́кты",
   "проспе́ктов",
   "проспе́ктам",
   "проспе́кты",
   "проспе́ктами",
   "проспе́ктах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_ploshchad",
  "type": "nom",
  "lemme": "пло́щадь",
  "fr": "place",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "пло́щадь",
   "пло́щади",
   "пло́щади",
   "пло́щадь",
   "пло́щадью",
   "пло́щади"
  ],
  "pl": [
   "пло́щади",
   "площаде́й",
   "площадя́м",
   "пло́щади",
   "площадя́ми",
   "площадя́х"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_i",
   "gen_sg_i",
   "acc_sg_f_zero",
   "instr_sg_ju",
   "genpl_ej",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_stadion",
  "type": "nom",
  "lemme": "стадио́н",
  "fr": "stade",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "стадио́н",
   "стадио́на",
   "стадио́ну",
   "стадио́н",
   "стадио́ном",
   "стадио́не"
  ],
  "pl": [
   "стадио́ны",
   "стадио́нов",
   "стадио́нам",
   "стадио́ны",
   "стадио́нами",
   "стадио́нах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_rynok",
  "type": "nom",
  "lemme": "ры́нок",
  "fr": "marché",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "ры́нок",
   "ры́нка",
   "ры́нку",
   "ры́нок",
   "ры́нком",
   "ры́нке"
  ],
  "pl": [
   "ры́нки",
   "ры́нков",
   "ры́нкам",
   "ры́нки",
   "ры́нками",
   "ры́нках"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ov",
   "prep_pl_ah",
   "dat_pl_am",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_balet",
  "type": "nom",
  "lemme": "бале́т",
  "fr": "ballet",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "бале́т",
   "бале́та",
   "бале́ту",
   "бале́т",
   "бале́том",
   "бале́те"
  ],
  "pl": [
   "бале́ты",
   "бале́тов",
   "бале́там",
   "бале́ты",
   "бале́тами",
   "бале́тах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_opera",
  "type": "nom",
  "lemme": "о́пера",
  "fr": "opéra",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "о́пера",
   "о́перы",
   "о́пере",
   "о́перу",
   "о́перой",
   "о́пере"
  ],
  "pl": [
   "о́перы",
   "о́пер",
   "о́перам",
   "о́перы",
   "о́перами",
   "о́перах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_y",
   "dat_sg_e",
   "acc_sg_f_u",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_universitet",
  "type": "nom",
  "lemme": "университе́т",
  "fr": "université",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "университе́т",
   "университе́та",
   "университе́ту",
   "университе́т",
   "университе́том",
   "университе́те"
  ],
  "pl": [
   "университе́ты",
   "университе́тов",
   "университе́там",
   "университе́ты",
   "университе́тами",
   "университе́тах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_shkola",
  "type": "nom",
  "lemme": "шко́ла",
  "fr": "école",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "шко́ла",
   "шко́лы",
   "шко́ле",
   "шко́лу",
   "шко́лой",
   "шко́ле"
  ],
  "pl": [
   "шко́лы",
   "школ",
   "шко́лам",
   "шко́лы",
   "шко́лами",
   "шко́лах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_magazin",
  "type": "nom",
  "lemme": "магази́н",
  "fr": "magasin",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "магази́н",
   "магази́на",
   "магази́ну",
   "магази́н",
   "магази́ном",
   "магази́не"
  ],
  "pl": [
   "магази́ны",
   "магази́нов",
   "магази́нам",
   "магази́ны",
   "магази́нами",
   "магази́нах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_bank",
  "type": "nom",
  "lemme": "банк",
  "fr": "banque",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "банк",
   "ба́нка",
   "ба́нку",
   "банк",
   "ба́нком",
   "ба́нке"
  ],
  "pl": [
   "ба́нки",
   "ба́нков",
   "ба́нкам",
   "ба́нки",
   "ба́нками",
   "ба́нках"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_apteka",
  "type": "nom",
  "lemme": "апте́ка",
  "fr": "pharmacie",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "апте́ка",
   "апте́ки",
   "апте́ке",
   "апте́ку",
   "апте́кой",
   "апте́ке"
  ],
  "pl": [
   "апте́ки",
   "апте́к",
   "апте́кам",
   "апте́ки",
   "апте́ками",
   "апте́ках"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_gostinica",
  "type": "nom",
  "lemme": "гости́ница",
  "fr": "hôtel",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "гости́ница",
   "гости́ницы",
   "гости́нице",
   "гости́ницу",
   "гости́ницей",
   "гости́нице"
  ],
  "pl": [
   "гости́ницы",
   "гости́ниц",
   "гости́ницам",
   "гости́ницы",
   "гости́ницами",
   "гости́ницах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_y",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_kafe",
  "type": "nom",
  "lemme": "кафе́",
  "fr": "café (lieu)",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "lieux",
  "irregularite": "indeclinable",
  "sg": [
   "кафе́",
   "кафе́",
   "кафе́",
   "кафе́",
   "кафе́",
   "кафе́"
  ],
  "pl": [
   "кафе́",
   "кафе́",
   "кафе́",
   "кафе́",
   "кафе́",
   "кафе́"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "indecl"
  ]
 },
 {
  "id": "lex_bar",
  "type": "nom",
  "lemme": "бар",
  "fr": "bar",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "бар",
   "ба́ра",
   "ба́ру",
   "бар",
   "ба́ром",
   "ба́ре"
  ],
  "pl": [
   "ба́ры",
   "ба́ров",
   "ба́рам",
   "ба́ры",
   "ба́рами",
   "ба́рах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ov",
   "prep_pl_ah",
   "dat_pl_am",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_bassejn",
  "type": "nom",
  "lemme": "бассе́йн",
  "fr": "piscine",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "бассе́йн",
   "бассе́йна",
   "бассе́йну",
   "бассе́йн",
   "бассе́йном",
   "бассе́йне"
  ],
  "pl": [
   "бассе́йны",
   "бассе́йнов",
   "бассе́йнам",
   "бассе́йны",
   "бассе́йнами",
   "бассе́йнах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_zoopark",
  "type": "nom",
  "lemme": "зоопа́рк",
  "fr": "zoo",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "зоопа́рк",
   "зоопа́рка",
   "зоопа́рку",
   "зоопа́рк",
   "зоопа́рком",
   "зоопа́рке"
  ],
  "pl": [
   "зоопа́рки",
   "зоопа́рков",
   "зоопа́ркам",
   "зоопа́рки",
   "зоопа́рками",
   "зоопа́рках"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_centr",
  "type": "nom",
  "lemme": "центр",
  "fr": "centre",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "центр",
   "це́нтра",
   "це́нтру",
   "центр",
   "це́нтром",
   "це́нтре"
  ],
  "pl": [
   "це́нтры",
   "це́нтров",
   "це́нтрам",
   "це́нтры",
   "це́нтрами",
   "це́нтрах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_scena",
  "type": "nom",
  "lemme": "сце́на",
  "fr": "scène",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "сце́на",
   "сце́ны",
   "сце́не",
   "сце́ну",
   "сце́ной",
   "сце́не"
  ],
  "pl": [
   "сце́ны",
   "сцен",
   "сце́нам",
   "сце́ны",
   "сце́нами",
   "сце́нах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_metro",
  "type": "nom",
  "lemme": "метро́",
  "fr": "métro",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "transports",
  "irregularite": "indeclinable",
  "sg": [
   "метро́",
   "метро́",
   "метро́",
   "метро́",
   "метро́",
   "метро́"
  ],
  "pl": [
   "метро́",
   "метро́",
   "метро́",
   "метро́",
   "метро́",
   "метро́"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "indecl"
  ]
 },
 {
  "id": "lex_kino",
  "type": "nom",
  "lemme": "кино́",
  "fr": "cinéma",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "lieux",
  "irregularite": "indeclinable",
  "sg": [
   "кино́",
   "кино́",
   "кино́",
   "кино́",
   "кино́",
   "кино́"
  ],
  "pl": [
   "кино́",
   "кино́",
   "кино́",
   "кино́",
   "кино́",
   "кино́"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "indecl"
  ]
 },
 {
  "id": "lex_obed",
  "type": "nom",
  "lemme": "обе́д",
  "fr": "déjeuner",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "обе́д",
   "обе́да",
   "обе́ду",
   "обе́д",
   "обе́дом",
   "обе́де"
  ],
  "pl": [
   "обе́ды",
   "обе́дов",
   "обе́дам",
   "обе́ды",
   "обе́дами",
   "обе́дах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_dvorec",
  "type": "nom",
  "lemme": "дворе́ц",
  "fr": "palais",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "дворе́ц",
   "дворца́",
   "дворцу́",
   "дворе́ц",
   "дворцо́м",
   "дворце́"
  ],
  "pl": [
   "дворцы́",
   "дворцо́в",
   "дворца́м",
   "дворцы́",
   "дворца́ми",
   "дворца́х"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_etazh",
  "type": "nom",
  "lemme": "эта́ж",
  "fr": "étage",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "эта́ж",
   "этажа́",
   "этажу́",
   "эта́ж",
   "этажо́м",
   "этаже́"
  ],
  "pl": [
   "этажи́",
   "этаже́й",
   "этажа́м",
   "этажи́",
   "этажа́ми",
   "этажа́х"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_i",
   "instr_sg_om",
   "genpl_ej",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_london",
  "type": "nom",
  "lemme": "Ло́ндон",
  "fr": "Londres",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "Ло́ндон",
   "Ло́ндона",
   "Ло́ндону",
   "Ло́ндон",
   "Ло́ндоном",
   "Ло́ндоне"
  ],
  "pl": [
   "Ло́ндоны",
   "Ло́ндонов",
   "Ло́ндонам",
   "Ло́ндоны",
   "Ло́ндонами",
   "Ло́ндонах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ov",
   "prep_pl_ah",
   "dat_pl_am",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_supermarket",
  "type": "nom",
  "lemme": "суперма́ркет",
  "fr": "supermarché",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "суперма́ркет",
   "суперма́ркета",
   "суперма́ркету",
   "суперма́ркет",
   "суперма́ркетом",
   "суперма́ркете"
  ],
  "pl": [
   "суперма́ркеты",
   "суперма́ркетов",
   "суперма́ркетам",
   "суперма́ркеты",
   "суперма́ркетами",
   "суперма́ркетах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_tenerife",
  "type": "nom",
  "lemme": "Тенери́фе",
  "fr": "Tenerife",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "lieux",
  "irregularite": "indeclinable",
  "sg": [
   "Тенери́фе",
   "Тенери́фе",
   "Тенери́фе",
   "Тенери́фе",
   "Тенери́фе",
   "Тенери́фе"
  ],
  "pl": [
   "Тенери́фе",
   "Тенери́фе",
   "Тенери́фе",
   "Тенери́фе",
   "Тенери́фе",
   "Тенери́фе"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "indecl"
  ]
 },
 {
  "id": "lex_dom",
  "type": "nom",
  "lemme": "дом",
  "fr": "maison",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "дом",
   "до́ма",
   "до́му",
   "дом",
   "до́мом",
   "до́ме"
  ],
  "pl": [
   "дома́",
   "домо́в",
   "дома́м",
   "дома́",
   "дома́ми",
   "дома́х"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah",
   "nom_pl_a",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_kvartira",
  "type": "nom",
  "lemme": "кварти́ра",
  "fr": "appartement",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "кварти́ра",
   "кварти́ры",
   "кварти́ре",
   "кварти́ру",
   "кварти́рой",
   "кварти́ре"
  ],
  "pl": [
   "кварти́ры",
   "кварти́р",
   "кварти́рам",
   "кварти́ры",
   "кварти́рами",
   "кварти́рах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_kuhnja",
  "type": "nom",
  "lemme": "ку́хня",
  "fr": "cuisine",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "ку́хня",
   "ку́хни",
   "ку́хне",
   "ку́хню",
   "ку́хней",
   "ку́хне"
  ],
  "pl": [
   "ку́хни",
   "ку́хонь",
   "ку́хням",
   "ку́хни",
   "ку́хнями",
   "ку́хнях"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": "на ку́хне et в ку́хне sont tous deux attestés.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_i",
   "dat_sg_e",
   "genpl_voyelle_mobile",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_spalnja",
  "type": "nom",
  "lemme": "спа́льня",
  "fr": "chambre",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "спа́льня",
   "спа́льни",
   "спа́льне",
   "спа́льню",
   "спа́льней",
   "спа́льне"
  ],
  "pl": [
   "спа́льни",
   "спа́лен",
   "спа́льням",
   "спа́льни",
   "спа́льнями",
   "спа́льнях"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_sg_f_u",
   "instr_sg_oj",
   "genpl_zero",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_vannaja",
  "type": "nom",
  "lemme": "ва́нная",
  "fr": "salle de bains",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "maison",
  "irregularite": "irregulier",
  "sg": [
   "ва́нная",
   "ва́нной",
   "ва́нной",
   "ва́нную",
   "ва́нной",
   "ва́нной"
  ],
  "pl": [
   "ва́нные",
   "ва́нных",
   "ва́нным",
   "ва́нные",
   "ва́нными",
   "ва́нных"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": "Substantif de forme adjectivale : se décline comme un adjectif.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "gen_sg_irreg",
   "genpl_voyelle_mobile",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_stolovaja",
  "type": "nom",
  "lemme": "столо́вая",
  "fr": "salle à manger",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "maison",
  "irregularite": "irregulier",
  "sg": [
   "столо́вая",
   "столо́вой",
   "столо́вой",
   "столо́вую",
   "столо́вой",
   "столо́вой"
  ],
  "pl": [
   "столо́вые",
   "столо́вых",
   "столо́вым",
   "столо́вые",
   "столо́выми",
   "столо́вых"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": "Substantif de forme adjectivale.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_irreg",
   "genpl_voyelle_mobile",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_gostinaja",
  "type": "nom",
  "lemme": "гости́ная",
  "fr": "salon",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "maison",
  "irregularite": "irregulier",
  "sg": [
   "гости́ная",
   "гости́ной",
   "гости́ной",
   "гости́ную",
   "гости́ной",
   "гости́ной"
  ],
  "pl": [
   "гости́ные",
   "гости́ных",
   "гости́ным",
   "гости́ные",
   "гости́ными",
   "гости́ных"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": "Substantif de forme adjectivale.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_i",
   "acc_sg_f_u",
   "instr_sg_oj",
   "gen_sg_irreg",
   "genpl_voyelle_mobile",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_detskaja",
  "type": "nom",
  "lemme": "де́тская",
  "fr": "chambre d’enfants",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "maison",
  "irregularite": "irregulier",
  "sg": [
   "де́тская",
   "де́тской",
   "де́тской",
   "де́тскую",
   "де́тской",
   "де́тской"
  ],
  "pl": [
   "де́тские",
   "де́тских",
   "де́тским",
   "де́тские",
   "де́тскими",
   "де́тских"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": "Substantif de forme adjectivale.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_voyelle_mobile",
   "prep_pl_ah",
   "dat_pl_am",
   "gen_sg_irreg",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_kabinet",
  "type": "nom",
  "lemme": "кабине́т",
  "fr": "bureau (pièce)",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "кабине́т",
   "кабине́та",
   "кабине́ту",
   "кабине́т",
   "кабине́том",
   "кабине́те"
  ],
  "pl": [
   "кабине́ты",
   "кабине́тов",
   "кабине́там",
   "кабине́ты",
   "кабине́тами",
   "кабине́тах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_komnata",
  "type": "nom",
  "lemme": "ко́мната",
  "fr": "pièce",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "ко́мната",
   "ко́мнаты",
   "ко́мнате",
   "ко́мнату",
   "ко́мнатой",
   "ко́мнате"
  ],
  "pl": [
   "ко́мнаты",
   "ко́мнат",
   "ко́мнатам",
   "ко́мнаты",
   "ко́мнатами",
   "ко́мнатах"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_y",
   "dat_sg_e",
   "acc_sg_f_u",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_stol",
  "type": "nom",
  "lemme": "стол",
  "fr": "table",
  "frVariantes": [
   "bureau"
  ],
  "genre": "m",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "стол",
   "стола́",
   "столу́",
   "стол",
   "столо́м",
   "столе́"
  ],
  "pl": [
   "столы́",
   "столо́в",
   "стола́м",
   "столы́",
   "стола́ми",
   "стола́х"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_stul",
  "type": "nom",
  "lemme": "стул",
  "fr": "chaise",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "стул",
   "сту́ла",
   "сту́лу",
   "стул",
   "сту́лом",
   "сту́ле"
  ],
  "pl": [
   "сту́лья",
   "сту́льев",
   "сту́льям",
   "сту́лья",
   "сту́льями",
   "сту́льях"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "nom_pl_ya",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_okno",
  "type": "nom",
  "lemme": "окно́",
  "fr": "fenêtre",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "окно́",
   "окна́",
   "окну́",
   "окно́",
   "окно́м",
   "окне́"
  ],
  "pl": [
   "о́кна",
   "о́кон",
   "о́кнам",
   "о́кна",
   "о́кнами",
   "о́кнах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_i",
   "genpl_voyelle_mobile",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_pol",
  "type": "nom",
  "lemme": "пол",
  "fr": "sol",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "пол",
   "по́ла",
   "по́лу",
   "пол",
   "по́лом",
   "по́ле"
  ],
  "pl": [
   "полы́",
   "поло́в",
   "пола́м",
   "полы́",
   "пола́ми",
   "пола́х"
  ],
  "prep": "на",
  "loc2": {
   "forme": "на полу́",
   "contexte": "situation dans le lieu"
  },
  "bloc": 1,
  "note": "Prépositionnel о по́ле, homographe de celui de по́ле (champ).",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_shkaf",
  "type": "nom",
  "lemme": "шкаф",
  "fr": "armoire",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "шкаф",
   "шка́фа",
   "шка́фу",
   "шкаф",
   "шка́фом",
   "шка́фе"
  ],
  "pl": [
   "шкафы́",
   "шкафо́в",
   "шкафа́м",
   "шкафы́",
   "шкафа́ми",
   "шкафа́х"
  ],
  "prep": "в",
  "loc2": {
   "forme": "в шкафу́",
   "contexte": "situation dans le lieu"
  },
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_krovat",
  "type": "nom",
  "lemme": "крова́ть",
  "fr": "lit",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "крова́ть",
   "крова́ти",
   "крова́ти",
   "крова́ть",
   "крова́тью",
   "крова́ти"
  ],
  "pl": [
   "крова́ти",
   "крова́тей",
   "крова́тям",
   "крова́ти",
   "крова́тями",
   "крова́тях"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_i",
   "gen_sg_i",
   "acc_sg_f_zero",
   "instr_sg_ju",
   "genpl_ej",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_holodilnik",
  "type": "nom",
  "lemme": "холоди́льник",
  "fr": "réfrigérateur",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "холоди́льник",
   "холоди́льника",
   "холоди́льнику",
   "холоди́льник",
   "холоди́льником",
   "холоди́льнике"
  ],
  "pl": [
   "холоди́льники",
   "холоди́льников",
   "холоди́льникам",
   "холоди́льники",
   "холоди́льниками",
   "холоди́льниках"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_plita",
  "type": "nom",
  "lemme": "плита́",
  "fr": "plaque de cuisson",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "плита́",
   "плиты́",
   "плите́",
   "плиту́",
   "плито́й",
   "плите́"
  ],
  "pl": [
   "пли́ты",
   "плит",
   "пли́там",
   "пли́ты",
   "пли́тами",
   "пли́тах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_zero",
   "prep_pl_ah",
   "dat_pl_am",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_kniga",
  "type": "nom",
  "lemme": "кни́га",
  "fr": "livre",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "objets",
  "irregularite": null,
  "sg": [
   "кни́га",
   "кни́ги",
   "кни́ге",
   "кни́гу",
   "кни́гой",
   "кни́ге"
  ],
  "pl": [
   "кни́ги",
   "книг",
   "кни́гам",
   "кни́ги",
   "кни́гами",
   "кни́гах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_ruchka",
  "type": "nom",
  "lemme": "ру́чка",
  "fr": "stylo",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "objets",
  "irregularite": null,
  "sg": [
   "ру́чка",
   "ру́чки",
   "ру́чке",
   "ру́чку",
   "ру́чкой",
   "ру́чке"
  ],
  "pl": [
   "ру́чки",
   "ру́чек",
   "ру́чкам",
   "ру́чки",
   "ру́чками",
   "ру́чках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_i",
   "dat_sg_e",
   "acc_sg_f_u",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_stakan",
  "type": "nom",
  "lemme": "стака́н",
  "fr": "verre",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "objets",
  "irregularite": null,
  "sg": [
   "стака́н",
   "стака́на",
   "стака́ну",
   "стака́н",
   "стака́ном",
   "стака́не"
  ],
  "pl": [
   "стака́ны",
   "стака́нов",
   "стака́нам",
   "стака́ны",
   "стака́нами",
   "стака́нах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_lampa",
  "type": "nom",
  "lemme": "ла́мпа",
  "fr": "lampe",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "ла́мпа",
   "ла́мпы",
   "ла́мпе",
   "ла́мпу",
   "ла́мпой",
   "ла́мпе"
  ],
  "pl": [
   "ла́мпы",
   "ламп",
   "ла́мпам",
   "ла́мпы",
   "ла́мпами",
   "ла́мпах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_divan",
  "type": "nom",
  "lemme": "дива́н",
  "fr": "canapé",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "дива́н",
   "дива́на",
   "дива́ну",
   "дива́н",
   "дива́ном",
   "дива́не"
  ],
  "pl": [
   "дива́ны",
   "дива́нов",
   "дива́нам",
   "дива́ны",
   "дива́нами",
   "дива́нах"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_tetrad",
  "type": "nom",
  "lemme": "тетра́дь",
  "fr": "cahier",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "objets",
  "irregularite": null,
  "sg": [
   "тетра́дь",
   "тетра́ди",
   "тетра́ди",
   "тетра́дь",
   "тетра́дью",
   "тетра́ди"
  ],
  "pl": [
   "тетра́ди",
   "тетра́дей",
   "тетра́дям",
   "тетра́ди",
   "тетра́дями",
   "тетра́дях"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_sg_f_zero",
   "instr_sg_ju",
   "genpl_ej",
   "prep_sg_i",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_slovar",
  "type": "nom",
  "lemme": "слова́рь",
  "fr": "dictionnaire",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "objets",
  "irregularite": null,
  "sg": [
   "слова́рь",
   "словаря́",
   "словарю́",
   "слова́рь",
   "словарём",
   "словаре́"
  ],
  "pl": [
   "словари́",
   "словаре́й",
   "словаря́м",
   "словари́",
   "словаря́ми",
   "словаря́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_karandash",
  "type": "nom",
  "lemme": "каранда́ш",
  "fr": "crayon",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "objets",
  "irregularite": null,
  "sg": [
   "каранда́ш",
   "карандаша́",
   "карандашу́",
   "каранда́ш",
   "карандашо́м",
   "карандаше́"
  ],
  "pl": [
   "карандаши́",
   "карандаше́й",
   "карандаша́м",
   "карандаши́",
   "карандаша́ми",
   "карандаша́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_televizor",
  "type": "nom",
  "lemme": "телеви́зор",
  "fr": "téléviseur",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "objets",
  "irregularite": null,
  "sg": [
   "телеви́зор",
   "телеви́зора",
   "телеви́зору",
   "телеви́зор",
   "телеви́зором",
   "телеви́зоре"
  ],
  "pl": [
   "телеви́зоры",
   "телеви́зоров",
   "телеви́зорам",
   "телеви́зоры",
   "телеви́зорами",
   "телеви́зорах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_telefon",
  "type": "nom",
  "lemme": "телефо́н",
  "fr": "téléphone",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "objets",
  "irregularite": null,
  "sg": [
   "телефо́н",
   "телефо́на",
   "телефо́ну",
   "телефо́н",
   "телефо́ном",
   "телефо́не"
  ],
  "pl": [
   "телефо́ны",
   "телефо́нов",
   "телефо́нам",
   "телефо́ны",
   "телефо́нами",
   "телефо́нах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ov",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_kompjuter",
  "type": "nom",
  "lemme": "компью́тер",
  "fr": "ordinateur",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "objets",
  "irregularite": null,
  "sg": [
   "компью́тер",
   "компью́тера",
   "компью́теру",
   "компью́тер",
   "компью́тером",
   "компью́тере"
  ],
  "pl": [
   "компью́теры",
   "компью́теров",
   "компью́терам",
   "компью́теры",
   "компью́терами",
   "компью́терах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_veshalka",
  "type": "nom",
  "lemme": "ве́шалка",
  "fr": "cintre",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "maison",
  "irregularite": null,
  "sg": [
   "ве́шалка",
   "ве́шалки",
   "ве́шалке",
   "ве́шалку",
   "ве́шалкой",
   "ве́шалке"
  ],
  "pl": [
   "ве́шалки",
   "ве́шалок",
   "ве́шалкам",
   "ве́шалки",
   "ве́шалками",
   "ве́шалках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_i",
   "dat_sg_e",
   "acc_sg_f_u",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_zanaveski",
  "type": "nom",
  "lemme": "занаве́ски",
  "fr": "rideaux",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "maison",
  "irregularite": "pluriel_seul",
  "sg": null,
  "pl": [
   "занаве́ски",
   "занаве́сок",
   "занаве́скам",
   "занаве́ски",
   "занаве́сками",
   "занаве́сках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_voyelle_mobile",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_zdanie",
  "type": "nom",
  "lemme": "зда́ние",
  "fr": "bâtiment",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "зда́ние",
   "зда́ния",
   "зда́нию",
   "зда́ние",
   "зда́нием",
   "зда́нии"
  ],
  "pl": [
   "зда́ния",
   "зда́ний",
   "зда́ниям",
   "зда́ния",
   "зда́ниями",
   "зда́ниях"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "prep_sg_ii",
   "genpl_ij",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_puteshestvie",
  "type": "nom",
  "lemme": "путеше́ствие",
  "fr": "voyage",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "loisirs",
  "irregularite": null,
  "sg": [
   "путеше́ствие",
   "путеше́ствия",
   "путеше́ствию",
   "путеше́ствие",
   "путеше́ствием",
   "путеше́ствии"
  ],
  "pl": [
   "путеше́ствия",
   "путеше́ствий",
   "путеше́ствиям",
   "путеше́ствия",
   "путеше́ствиями",
   "путеше́ствиях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_ii",
   "gen_sg_a",
   "dat_sg_u",
   "genpl_ij"
  ]
 },
 {
  "id": "lex_iskusstvo",
  "type": "nom",
  "lemme": "иску́сство",
  "fr": "art",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "loisirs",
  "irregularite": null,
  "sg": [
   "иску́сство",
   "иску́сства",
   "иску́сству",
   "иску́сство",
   "иску́сством",
   "иску́сстве"
  ],
  "pl": [
   "иску́сства",
   "иску́сств",
   "иску́сствам",
   "иску́сства",
   "иску́сствами",
   "иску́сствах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_zero"
  ]
 },
 {
  "id": "lex_obshchezhitie",
  "type": "nom",
  "lemme": "общежи́тие",
  "fr": "résidence universitaire",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "общежи́тие",
   "общежи́тия",
   "общежи́тию",
   "общежи́тие",
   "общежи́тием",
   "общежи́тии"
  ],
  "pl": [
   "общежи́тия",
   "общежи́тий",
   "общежи́тиям",
   "общежи́тия",
   "общежи́тиями",
   "общежи́тиях"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "prep_sg_ii",
   "genpl_ij",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_zadanie",
  "type": "nom",
  "lemme": "зада́ние",
  "fr": "exercice, devoir",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "etude",
  "irregularite": null,
  "sg": [
   "зада́ние",
   "зада́ния",
   "зада́нию",
   "зада́ние",
   "зада́нием",
   "зада́нии"
  ],
  "pl": [
   "зада́ния",
   "зада́ний",
   "зада́ниям",
   "зада́ния",
   "зада́ниями",
   "зада́ниях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_ii",
   "gen_sg_a",
   "genpl_ij"
  ]
 },
 {
  "id": "lex_zanjatie",
  "type": "nom",
  "lemme": "заня́тие",
  "fr": "cours, séance",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "etude",
  "irregularite": null,
  "sg": [
   "заня́тие",
   "заня́тия",
   "заня́тию",
   "заня́тие",
   "заня́тием",
   "заня́тии"
  ],
  "pl": [
   "заня́тия",
   "заня́тий",
   "заня́тиям",
   "заня́тия",
   "заня́тиями",
   "заня́тиях"
  ],
  "prep": "на",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om",
   "prep_sg_ii",
   "genpl_ij",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_pismo",
  "type": "nom",
  "lemme": "письмо́",
  "fr": "lettre",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "objets",
  "irregularite": null,
  "sg": [
   "письмо́",
   "письма́",
   "письму́",
   "письмо́",
   "письмо́м",
   "письме́"
  ],
  "pl": [
   "пи́сьма",
   "пи́сем",
   "пи́сьмам",
   "пи́сьма",
   "пи́сьмами",
   "пи́сьмах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_zero",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_slovo",
  "type": "nom",
  "lemme": "сло́во",
  "fr": "mot",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "etude",
  "irregularite": null,
  "sg": [
   "сло́во",
   "сло́ва",
   "сло́ву",
   "сло́во",
   "сло́вом",
   "сло́ве"
  ],
  "pl": [
   "слова́",
   "слов",
   "слова́м",
   "слова́",
   "слова́ми",
   "слова́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e",
   "nom_pl_a"
  ]
 },
 {
  "id": "lex_mesto",
  "type": "nom",
  "lemme": "ме́сто",
  "fr": "place, lieu",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "ме́сто",
   "ме́ста",
   "ме́сту",
   "ме́сто",
   "ме́стом",
   "ме́сте"
  ],
  "pl": [
   "места́",
   "мест",
   "места́м",
   "места́",
   "места́ми",
   "места́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u",
   "nom_pl_a"
  ]
 },
 {
  "id": "lex_pole",
  "type": "nom",
  "lemme": "по́ле",
  "fr": "champ",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "lieux",
  "irregularite": null,
  "sg": [
   "по́ле",
   "по́ля",
   "по́лю",
   "по́ле",
   "по́лем",
   "по́ле"
  ],
  "pl": [
   "поля́",
   "поле́й",
   "поля́м",
   "поля́",
   "поля́ми",
   "поля́х"
  ],
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": "Prépositionnel о по́ле, homographe de celui de пол (sol).",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ej",
   "prep_pl_ah",
   "nom_pl_a",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_jabloko",
  "type": "nom",
  "lemme": "я́блоко",
  "fr": "pomme",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "я́блоко",
   "я́блока",
   "я́блоку",
   "я́блоко",
   "я́блоком",
   "я́блоке"
  ],
  "pl": [
   "я́блоки",
   "я́блок",
   "я́блокам",
   "я́блоки",
   "я́блоками",
   "я́блоках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Nominatif pluriel en -и, irrégulier pour un neutre.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_grusha",
  "type": "nom",
  "lemme": "гру́ша",
  "fr": "poire",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "гру́ша",
   "гру́ши",
   "гру́ше",
   "гру́шу",
   "гру́шей",
   "гру́ше"
  ],
  "pl": [
   "гру́ши",
   "груш",
   "гру́шам",
   "гру́ши",
   "гру́шами",
   "гру́шах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_i",
   "dat_sg_e"
  ]
 },
 {
  "id": "lex_apelsin",
  "type": "nom",
  "lemme": "апельси́н",
  "fr": "orange",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "апельси́н",
   "апельси́на",
   "апельси́ну",
   "апельси́н",
   "апельси́ном",
   "апельси́не"
  ],
  "pl": [
   "апельси́ны",
   "апельси́нов",
   "апельси́нам",
   "апельси́ны",
   "апельси́нами",
   "апельси́нах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov"
  ]
 },
 {
  "id": "lex_ananas",
  "type": "nom",
  "lemme": "анана́с",
  "fr": "ananas",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "анана́с",
   "анана́са",
   "анана́су",
   "анана́с",
   "анана́сом",
   "анана́се"
  ],
  "pl": [
   "анана́сы",
   "анана́сов",
   "анана́сам",
   "анана́сы",
   "анана́сами",
   "анана́сах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_klubnika",
  "type": "nom",
  "lemme": "клубни́ка",
  "fr": "fraise",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "клубни́ка",
   "клубни́ки",
   "клубни́ке",
   "клубни́ку",
   "клубни́кой",
   "клубни́ке"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_i"
  ]
 },
 {
  "id": "lex_malina",
  "type": "nom",
  "lemme": "мали́на",
  "fr": "framboise",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "мали́на",
   "мали́ны",
   "мали́не",
   "мали́ну",
   "мали́ной",
   "мали́не"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_e",
   "acc_sg_f_u",
   "instr_sg_oj"
  ]
 },
 {
  "id": "lex_vishnja",
  "type": "nom",
  "lemme": "ви́шня",
  "fr": "cerise",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "ви́шня",
   "ви́шни",
   "ви́шне",
   "ви́шню",
   "ви́шней",
   "ви́шне"
  ],
  "pl": [
   "ви́шни",
   "ви́шен",
   "ви́шням",
   "ви́шни",
   "ви́шнями",
   "ви́шнях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_voyelle_mobile",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_baklazhan",
  "type": "nom",
  "lemme": "баклажа́н",
  "fr": "aubergine",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "баклажа́н",
   "баклажа́на",
   "баклажа́ну",
   "баклажа́н",
   "баклажа́ном",
   "баклажа́не"
  ],
  "pl": [
   "баклажа́ны",
   "баклажа́нов",
   "баклажа́нам",
   "баклажа́ны",
   "баклажа́нами",
   "баклажа́нах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_kabachok",
  "type": "nom",
  "lemme": "кабачо́к",
  "fr": "courgette",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "кабачо́к",
   "кабачка́",
   "кабачку́",
   "кабачо́к",
   "кабачко́м",
   "кабачке́"
  ],
  "pl": [
   "кабачки́",
   "кабачко́в",
   "кабачка́м",
   "кабачки́",
   "кабачка́ми",
   "кабачка́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_i"
  ]
 },
 {
  "id": "lex_kapusta",
  "type": "nom",
  "lemme": "капу́ста",
  "fr": "chou",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "капу́ста",
   "капу́сты",
   "капу́сте",
   "капу́сту",
   "капу́стой",
   "капу́сте"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_oj"
  ]
 },
 {
  "id": "lex_chesnok",
  "type": "nom",
  "lemme": "чесно́к",
  "fr": "ail",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "чесно́к",
   "чеснока́",
   "чесноку́",
   "чесно́к",
   "чесноко́м",
   "чесноке́"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Génitif partitif чесноку́ attesté à côté de чеснока́.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {
   "sg.1": [
    "чесноку́"
   ]
  },
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_perec",
  "type": "nom",
  "lemme": "пе́рец",
  "fr": "poivron, poivre",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "пе́рец",
   "пе́рца",
   "пе́рцу",
   "пе́рец",
   "пе́рцем",
   "пе́рце"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u"
  ]
 },
 {
  "id": "lex_kolbasa",
  "type": "nom",
  "lemme": "колбаса́",
  "fr": "saucisson",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "колбаса́",
   "колбасы́",
   "колбасе́",
   "колбасу́",
   "колбасо́й",
   "колбасе́"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_sg_f_u",
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_moloko",
  "type": "nom",
  "lemme": "молоко́",
  "fr": "lait",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "молоко́",
   "молока́",
   "молоку́",
   "молоко́",
   "молоко́м",
   "молоке́"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_kartofel",
  "type": "nom",
  "lemme": "карто́фель",
  "fr": "pommes de terre",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "карто́фель",
   "карто́феля",
   "карто́фелю",
   "карто́фель",
   "карто́фелем",
   "карто́феле"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a"
  ]
 },
 {
  "id": "lex_kartoshka",
  "type": "nom",
  "lemme": "карто́шка",
  "fr": "pomme de terre (familier)",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "карто́шка",
   "карто́шки",
   "карто́шке",
   "карто́шку",
   "карто́шкой",
   "карто́шке"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_e",
   "acc_sg_f_u",
   "instr_sg_oj"
  ]
 },
 {
  "id": "lex_syr",
  "type": "nom",
  "lemme": "сыр",
  "fr": "fromage",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "сыр",
   "сы́ра",
   "сы́ру",
   "сыр",
   "сы́ром",
   "сы́ре"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Génitif partitif сы́ру attesté à côté de сы́ра.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {
   "sg.1": [
    "сы́ру"
   ]
  },
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_jogurt",
  "type": "nom",
  "lemme": "йо́гурт",
  "fr": "yaourt",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "йо́гурт",
   "йо́гурта",
   "йо́гурту",
   "йо́гурт",
   "йо́гуртом",
   "йо́гурте"
  ],
  "pl": [
   "йо́гурты",
   "йо́гуртов",
   "йо́гуртам",
   "йо́гурты",
   "йо́гуртами",
   "йо́гуртах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_morkov",
  "type": "nom",
  "lemme": "морко́вь",
  "fr": "carotte",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "морко́вь",
   "морко́ви",
   "морко́ви",
   "морко́вь",
   "морко́вью",
   "морко́ви"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_i",
   "dat_sg_i",
   "acc_sg_f_zero",
   "prep_sg_i",
   "instr_sg_ju"
  ]
 },
 {
  "id": "lex_morkovka",
  "type": "nom",
  "lemme": "морко́вка",
  "fr": "carotte (familier)",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "морко́вка",
   "морко́вки",
   "морко́вке",
   "морко́вку",
   "морко́вкой",
   "морко́вке"
  ],
  "pl": [
   "морко́вки",
   "морко́вок",
   "морко́вкам",
   "морко́вки",
   "морко́вками",
   "морко́вках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_oj",
   "genpl_voyelle_mobile",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_borshch",
  "type": "nom",
  "lemme": "борщ",
  "fr": "bortsch",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "борщ",
   "борща́",
   "борщу́",
   "борщ",
   "борщо́м",
   "борще́"
  ],
  "pl": [
   "борщи́",
   "борще́й",
   "борща́м",
   "борщи́",
   "борща́ми",
   "борща́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_desert",
  "type": "nom",
  "lemme": "десе́рт",
  "fr": "dessert",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "десе́рт",
   "десе́рта",
   "десе́рту",
   "десе́рт",
   "десе́ртом",
   "десе́рте"
  ],
  "pl": [
   "десе́рты",
   "десе́ртов",
   "десе́ртам",
   "десе́рты",
   "десе́ртами",
   "десе́ртах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u"
  ]
 },
 {
  "id": "lex_menju",
  "type": "nom",
  "lemme": "меню́",
  "fr": "menu",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "indeclinable",
  "sg": [
   "меню́",
   "меню́",
   "меню́",
   "меню́",
   "меню́",
   "меню́"
  ],
  "pl": [
   "меню́",
   "меню́",
   "меню́",
   "меню́",
   "меню́",
   "меню́"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "indecl"
  ]
 },
 {
  "id": "lex_mjaso",
  "type": "nom",
  "lemme": "мя́со",
  "fr": "viande",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "мя́со",
   "мя́са",
   "мя́су",
   "мя́со",
   "мя́сом",
   "мя́се"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_maslo",
  "type": "nom",
  "lemme": "ма́сло",
  "fr": "beurre, huile",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "ма́сло",
   "ма́сла",
   "ма́слу",
   "ма́сло",
   "ма́слом",
   "ма́сле"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a"
  ]
 },
 {
  "id": "lex_kurica",
  "type": "nom",
  "lemme": "ку́рица",
  "fr": "poulet, poule",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "ку́рица",
   "ку́рицы",
   "ку́рице",
   "ку́рицу",
   "ку́рицей",
   "ку́рице"
  ],
  "pl": [
   "ку́рицы",
   "ку́риц",
   "ку́рицам",
   "ку́риц",
   "ку́рицами",
   "ку́рицах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_e",
   "acc_sg_f_u",
   "instr_sg_oj"
  ]
 },
 {
  "id": "lex_ryba",
  "type": "nom",
  "lemme": "ры́ба",
  "fr": "poisson",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "ры́ба",
   "ры́бы",
   "ры́бе",
   "ры́бу",
   "ры́бой",
   "ры́бе"
  ],
  "pl": [
   "ры́бы",
   "рыб",
   "ры́бам",
   "ры́бы",
   "ры́бами",
   "ры́бах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_zero",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_luk",
  "type": "nom",
  "lemme": "лук",
  "fr": "oignon",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "лук",
   "лу́ка",
   "лу́ку",
   "лук",
   "лу́ком",
   "лу́ке"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Génitif partitif лу́ку attesté à côté de лу́ка.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {
   "sg.1": [
    "лу́ку"
   ]
  },
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_tvorog",
  "type": "nom",
  "lemme": "тво́рог",
  "fr": "fromage blanc",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "тво́рог",
   "тво́рога",
   "тво́рогу",
   "тво́рог",
   "тво́рогом",
   "тво́роге"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u"
  ]
 },
 {
  "id": "lex_vinograd",
  "type": "nom",
  "lemme": "виногра́д",
  "fr": "raisin",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "виногра́д",
   "виногра́да",
   "виногра́ду",
   "виногра́д",
   "виногра́дом",
   "виногра́де"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_ogurec",
  "type": "nom",
  "lemme": "огуре́ц",
  "fr": "concombre",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "огуре́ц",
   "огурца́",
   "огурцу́",
   "огуре́ц",
   "огурцо́м",
   "огурце́"
  ],
  "pl": [
   "огурцы́",
   "огурцо́в",
   "огурца́м",
   "огурцы́",
   "огурца́ми",
   "огурца́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_pomidor",
  "type": "nom",
  "lemme": "помидо́р",
  "fr": "tomate",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "помидо́р",
   "помидо́ра",
   "помидо́ру",
   "помидо́р",
   "помидо́ром",
   "помидо́ре"
  ],
  "pl": [
   "помидо́ры",
   "помидо́ров",
   "помидо́рам",
   "помидо́ры",
   "помидо́рами",
   "помидо́рах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u"
  ]
 },
 {
  "id": "lex_banan",
  "type": "nom",
  "lemme": "бана́н",
  "fr": "banane",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "бана́н",
   "бана́на",
   "бана́ну",
   "бана́н",
   "бана́ном",
   "бана́не"
  ],
  "pl": [
   "бана́ны",
   "бана́нов",
   "бана́нам",
   "бана́ны",
   "бана́нами",
   "бана́нах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov"
  ]
 },
 {
  "id": "lex_limon",
  "type": "nom",
  "lemme": "лимо́н",
  "fr": "citron",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "лимо́н",
   "лимо́на",
   "лимо́ну",
   "лимо́н",
   "лимо́ном",
   "лимо́не"
  ],
  "pl": [
   "лимо́ны",
   "лимо́нов",
   "лимо́нам",
   "лимо́ны",
   "лимо́нами",
   "лимо́нах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_ikra",
  "type": "nom",
  "lemme": "икра́",
  "fr": "caviar",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "икра́",
   "икры́",
   "икре́",
   "икру́",
   "икро́й",
   "икре́"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a"
  ]
 },
 {
  "id": "lex_vino",
  "type": "nom",
  "lemme": "вино́",
  "fr": "vin",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "вино́",
   "вина́",
   "вину́",
   "вино́",
   "вино́м",
   "вине́"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_i",
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_sok",
  "type": "nom",
  "lemme": "сок",
  "fr": "jus",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "сок",
   "со́ка",
   "со́ку",
   "сок",
   "со́ком",
   "со́ке"
  ],
  "pl": [
   "со́ки",
   "со́ков",
   "со́кам",
   "со́ки",
   "со́ками",
   "со́ках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ov",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_chaj",
  "type": "nom",
  "lemme": "чай",
  "fr": "thé",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "чай",
   "ча́я",
   "ча́ю",
   "чай",
   "ча́ем",
   "ча́е"
  ],
  "pl": [
   "ча́и",
   "ча́ев",
   "ча́ям",
   "ча́и",
   "ча́ями",
   "ча́ях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Génitif partitif ча́ю attesté à côté de ча́я : les deux sont acceptés.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {
   "sg.1": [
    "ча́ю"
   ]
  },
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_kofe",
  "type": "nom",
  "lemme": "ко́фе",
  "fr": "café (boisson)",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "indeclinable",
  "sg": [
   "ко́фе",
   "ко́фе",
   "ко́фе",
   "ко́фе",
   "ко́фе",
   "ко́фе"
  ],
  "pl": [
   "ко́фе",
   "ко́фе",
   "ко́фе",
   "ко́фе",
   "ко́фе",
   "ко́фе"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "indecl"
  ]
 },
 {
  "id": "lex_shokolad",
  "type": "nom",
  "lemme": "шокола́д",
  "fr": "chocolat",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "шокола́д",
   "шокола́да",
   "шокола́ду",
   "шокола́д",
   "шокола́дом",
   "шокола́де"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_eda",
  "type": "nom",
  "lemme": "еда́",
  "fr": "nourriture",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "еда́",
   "еды́",
   "еде́",
   "еду́",
   "едо́й",
   "еде́"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_produkty",
  "type": "nom",
  "lemme": "проду́кты",
  "fr": "produits alimentaires",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "pluriel_seul",
  "sg": null,
  "pl": [
   "проду́кты",
   "проду́ктов",
   "проду́ктам",
   "проду́кты",
   "проду́ктами",
   "проду́ктах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_paket",
  "type": "nom",
  "lemme": "паке́т",
  "fr": "sachet, brique",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "паке́т",
   "паке́та",
   "паке́ту",
   "паке́т",
   "паке́том",
   "паке́те"
  ],
  "pl": [
   "паке́ты",
   "паке́тов",
   "паке́там",
   "паке́ты",
   "паке́тами",
   "паке́тах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov"
  ]
 },
 {
  "id": "lex_kilogramm",
  "type": "nom",
  "lemme": "килогра́мм",
  "fr": "kilogramme",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "quantites",
  "irregularite": null,
  "sg": [
   "килогра́мм",
   "килогра́мма",
   "килогра́мму",
   "килогра́мм",
   "килогра́ммом",
   "килогра́мме"
  ],
  "pl": [
   "килогра́ммы",
   "килогра́ммов",
   "килогра́ммам",
   "килогра́ммы",
   "килогра́ммами",
   "килогра́ммах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_butylka",
  "type": "nom",
  "lemme": "буты́лка",
  "fr": "bouteille",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "quantites",
  "irregularite": null,
  "sg": [
   "буты́лка",
   "буты́лки",
   "буты́лке",
   "буты́лку",
   "буты́лкой",
   "буты́лке"
  ],
  "pl": [
   "буты́лки",
   "буты́лок",
   "буты́лкам",
   "буты́лки",
   "буты́лками",
   "буты́лках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_i",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_chashka",
  "type": "nom",
  "lemme": "ча́шка",
  "fr": "tasse",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "quantites",
  "irregularite": null,
  "sg": [
   "ча́шка",
   "ча́шки",
   "ча́шке",
   "ча́шку",
   "ча́шкой",
   "ча́шке"
  ],
  "pl": [
   "ча́шки",
   "ча́шек",
   "ча́шкам",
   "ча́шки",
   "ча́шками",
   "ча́шках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_e",
   "acc_sg_f_u",
   "instr_sg_oj",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_picca",
  "type": "nom",
  "lemme": "пи́цца",
  "fr": "pizza",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "пи́цца",
   "пи́ццы",
   "пи́цце",
   "пи́ццу",
   "пи́ццей",
   "пи́цце"
  ],
  "pl": [
   "пи́ццы",
   "пицц",
   "пи́ццам",
   "пи́ццы",
   "пи́ццами",
   "пи́ццах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_zero",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_plate",
  "type": "nom",
  "lemme": "пла́тье",
  "fr": "robe",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "vetements",
  "irregularite": null,
  "sg": [
   "пла́тье",
   "пла́тья",
   "пла́тью",
   "пла́тье",
   "пла́тьем",
   "пла́тье"
  ],
  "pl": [
   "пла́тья",
   "пла́тьев",
   "пла́тьям",
   "пла́тья",
   "пла́тьями",
   "пла́тьях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e",
   "nom_pl_ya"
  ]
 },
 {
  "id": "lex_brjuki",
  "type": "nom",
  "lemme": "брю́ки",
  "fr": "pantalon",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "vetements",
  "irregularite": "pluriel_seul",
  "sg": null,
  "pl": [
   "брю́ки",
   "брюк",
   "брю́кам",
   "брю́ки",
   "брю́ками",
   "брю́ках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_shljapa",
  "type": "nom",
  "lemme": "шля́па",
  "fr": "chapeau",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "vetements",
  "irregularite": null,
  "sg": [
   "шля́па",
   "шля́пы",
   "шля́пе",
   "шля́пу",
   "шля́пой",
   "шля́пе"
  ],
  "pl": [
   "шля́пы",
   "шляп",
   "шля́пам",
   "шля́пы",
   "шля́пами",
   "шля́пах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_oj",
   "genpl_zero",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_krossovki",
  "type": "nom",
  "lemme": "кроссо́вки",
  "fr": "baskets",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "vetements",
  "irregularite": "pluriel_seul",
  "sg": null,
  "pl": [
   "кроссо́вки",
   "кроссо́вок",
   "кроссо́вкам",
   "кроссо́вки",
   "кроссо́вками",
   "кроссо́вках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_pidzhak",
  "type": "nom",
  "lemme": "пиджа́к",
  "fr": "veste",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "vetements",
  "irregularite": null,
  "sg": [
   "пиджа́к",
   "пиджака́",
   "пиджаку́",
   "пиджа́к",
   "пиджако́м",
   "пиджаке́"
  ],
  "pl": [
   "пиджаки́",
   "пиджако́в",
   "пиджака́м",
   "пиджаки́",
   "пиджака́ми",
   "пиджака́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_i"
  ]
 },
 {
  "id": "lex_dzhinsy",
  "type": "nom",
  "lemme": "джи́нсы",
  "fr": "jean",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "vetements",
  "irregularite": "pluriel_seul",
  "sg": null,
  "pl": [
   "джи́нсы",
   "джи́нсов",
   "джи́нсам",
   "джи́нсы",
   "джи́нсами",
   "джи́нсах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ov"
  ]
 },
 {
  "id": "lex_galstuk",
  "type": "nom",
  "lemme": "га́лстук",
  "fr": "cravate",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "vetements",
  "irregularite": null,
  "sg": [
   "га́лстук",
   "га́лстука",
   "га́лстуку",
   "га́лстук",
   "га́лстуком",
   "га́лстуке"
  ],
  "pl": [
   "га́лстуки",
   "га́лстуков",
   "га́лстукам",
   "га́лстуки",
   "га́лстуками",
   "га́лстуках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_sapogi",
  "type": "nom",
  "lemme": "сапоги́",
  "fr": "bottes",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "vetements",
  "irregularite": "pluriel_seul",
  "sg": null,
  "pl": [
   "сапоги́",
   "сапо́г",
   "сапога́м",
   "сапоги́",
   "сапога́ми",
   "сапога́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_futbolka",
  "type": "nom",
  "lemme": "футбо́лка",
  "fr": "tee-shirt",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "vetements",
  "irregularite": null,
  "sg": [
   "футбо́лка",
   "футбо́лки",
   "футбо́лке",
   "футбо́лку",
   "футбо́лкой",
   "футбо́лке"
  ],
  "pl": [
   "футбо́лки",
   "футбо́лок",
   "футбо́лкам",
   "футбо́лки",
   "футбо́лками",
   "футбо́лках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_e",
   "acc_sg_f_u",
   "instr_sg_oj",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_kurtka",
  "type": "nom",
  "lemme": "ку́ртка",
  "fr": "blouson",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "vetements",
  "irregularite": null,
  "sg": [
   "ку́ртка",
   "ку́ртки",
   "ку́ртке",
   "ку́ртку",
   "ку́рткой",
   "ку́ртке"
  ],
  "pl": [
   "ку́ртки",
   "ку́рток",
   "ку́рткам",
   "ку́ртки",
   "ку́ртками",
   "ку́ртках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_voyelle_mobile",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_jubka",
  "type": "nom",
  "lemme": "ю́бка",
  "fr": "jupe",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "vetements",
  "irregularite": null,
  "sg": [
   "ю́бка",
   "ю́бки",
   "ю́бке",
   "ю́бку",
   "ю́бкой",
   "ю́бке"
  ],
  "pl": [
   "ю́бки",
   "ю́бок",
   "ю́бкам",
   "ю́бки",
   "ю́бками",
   "ю́бках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_rubashka",
  "type": "nom",
  "lemme": "руба́шка",
  "fr": "chemise",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "vetements",
  "irregularite": null,
  "sg": [
   "руба́шка",
   "руба́шки",
   "руба́шке",
   "руба́шку",
   "руба́шкой",
   "руба́шке"
  ],
  "pl": [
   "руба́шки",
   "руба́шек",
   "руба́шкам",
   "руба́шки",
   "руба́шками",
   "руба́шках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_i",
   "dat_sg_e",
   "acc_sg_f_u",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_kofta",
  "type": "nom",
  "lemme": "ко́фта",
  "fr": "gilet",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "vetements",
  "irregularite": null,
  "sg": [
   "ко́фта",
   "ко́фты",
   "ко́фте",
   "ко́фту",
   "ко́фтой",
   "ко́фте"
  ],
  "pl": [
   "ко́фты",
   "кофт",
   "ко́фтам",
   "ко́фты",
   "ко́фтами",
   "ко́фтах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_oj",
   "genpl_zero",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_tufli",
  "type": "nom",
  "lemme": "ту́фли",
  "fr": "chaussures de ville",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "vetements",
  "irregularite": "pluriel_seul",
  "sg": null,
  "pl": [
   "ту́фли",
   "ту́фель",
   "ту́флям",
   "ту́фли",
   "ту́флями",
   "ту́флях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_plashch",
  "type": "nom",
  "lemme": "плащ",
  "fr": "imperméable",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "vetements",
  "irregularite": null,
  "sg": [
   "плащ",
   "плаща́",
   "плащу́",
   "плащ",
   "плащо́м",
   "плаще́"
  ],
  "pl": [
   "плащи́",
   "плаще́й",
   "плаща́м",
   "плащи́",
   "плаща́ми",
   "плаща́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_i",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_zont",
  "type": "nom",
  "lemme": "зонт",
  "fr": "parapluie",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "objets",
  "irregularite": null,
  "sg": [
   "зонт",
   "зонта́",
   "зонту́",
   "зонт",
   "зонто́м",
   "зонте́"
  ],
  "pl": [
   "зонты́",
   "зонто́в",
   "зонта́м",
   "зонты́",
   "зонта́ми",
   "зонта́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov"
  ]
 },
 {
  "id": "lex_shapka",
  "type": "nom",
  "lemme": "ша́пка",
  "fr": "bonnet",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "vetements",
  "irregularite": null,
  "sg": [
   "ша́пка",
   "ша́пки",
   "ша́пке",
   "ша́пку",
   "ша́пкой",
   "ша́пке"
  ],
  "pl": [
   "ша́пки",
   "ша́пок",
   "ша́пкам",
   "ша́пки",
   "ша́пками",
   "ша́пках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_sharf",
  "type": "nom",
  "lemme": "шарф",
  "fr": "écharpe",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "vetements",
  "irregularite": null,
  "sg": [
   "шарф",
   "ша́рфа",
   "ша́рфу",
   "шарф",
   "ша́рфом",
   "ша́рфе"
  ],
  "pl": [
   "ша́рфы",
   "ша́рфов",
   "ша́рфам",
   "ша́рфы",
   "ша́рфами",
   "ша́рфах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a"
  ]
 },
 {
  "id": "lex_sumka",
  "type": "nom",
  "lemme": "су́мка",
  "fr": "sac",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "objets",
  "irregularite": null,
  "sg": [
   "су́мка",
   "су́мки",
   "су́мке",
   "су́мку",
   "су́мкой",
   "су́мке"
  ],
  "pl": [
   "су́мки",
   "су́мок",
   "су́мкам",
   "су́мки",
   "су́мками",
   "су́мках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_e",
   "acc_sg_f_u",
   "instr_sg_oj",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_chasy",
  "type": "nom",
  "lemme": "часы́",
  "fr": "montre",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "objets",
  "irregularite": "pluriel_seul",
  "sg": null,
  "pl": [
   "часы́",
   "часо́в",
   "часа́м",
   "часы́",
   "часа́ми",
   "часа́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Homographe du pluriel de час (heure).",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ov",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_odezhda",
  "type": "nom",
  "lemme": "оде́жда",
  "fr": "vêtements",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "vetements",
  "irregularite": "singulier_seul",
  "sg": [
   "оде́жда",
   "оде́жды",
   "оде́жде",
   "оде́жду",
   "оде́ждой",
   "оде́жде"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_futbol",
  "type": "nom",
  "lemme": "футбо́л",
  "fr": "football",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "sport",
  "irregularite": "singulier_seul",
  "sg": [
   "футбо́л",
   "футбо́ла",
   "футбо́лу",
   "футбо́л",
   "футбо́лом",
   "футбо́ле"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u"
  ]
 },
 {
  "id": "lex_tennis",
  "type": "nom",
  "lemme": "те́ннис",
  "fr": "tennis",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "sport",
  "irregularite": "singulier_seul",
  "sg": [
   "те́ннис",
   "те́нниса",
   "те́ннису",
   "те́ннис",
   "те́ннисом",
   "те́ннисе"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_boks",
  "type": "nom",
  "lemme": "бокс",
  "fr": "boxe",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "sport",
  "irregularite": "singulier_seul",
  "sg": [
   "бокс",
   "бо́кса",
   "бо́ксу",
   "бокс",
   "бо́ксом",
   "бо́ксе"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_basketbol",
  "type": "nom",
  "lemme": "баскетбо́л",
  "fr": "basket-ball",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "sport",
  "irregularite": "singulier_seul",
  "sg": [
   "баскетбо́л",
   "баскетбо́ла",
   "баскетбо́лу",
   "баскетбо́л",
   "баскетбо́лом",
   "баскетбо́ле"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u"
  ]
 },
 {
  "id": "lex_volejbol",
  "type": "nom",
  "lemme": "волейбо́л",
  "fr": "volley-ball",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "sport",
  "irregularite": "singulier_seul",
  "sg": [
   "волейбо́л",
   "волейбо́ла",
   "волейбо́лу",
   "волейбо́л",
   "волейбо́лом",
   "волейбо́ле"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_sport",
  "type": "nom",
  "lemme": "спорт",
  "fr": "sport",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "sport",
  "irregularite": "singulier_seul",
  "sg": [
   "спорт",
   "спо́рта",
   "спо́рту",
   "спорт",
   "спо́ртом",
   "спо́рте"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_dajving",
  "type": "nom",
  "lemme": "да́йвинг",
  "fr": "plongée",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "sport",
  "irregularite": "singulier_seul",
  "sg": [
   "да́йвинг",
   "да́йвинга",
   "да́йвингу",
   "да́йвинг",
   "да́йвингом",
   "да́йвинге"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a"
  ]
 },
 {
  "id": "lex_serfing",
  "type": "nom",
  "lemme": "сёрфинг",
  "fr": "surf",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "sport",
  "irregularite": "singulier_seul",
  "sg": [
   "сёрфинг",
   "сёрфинга",
   "сёрфингу",
   "сёрфинг",
   "сёрфингом",
   "сёрфинге"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_beg",
  "type": "nom",
  "lemme": "бег",
  "fr": "course à pied",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "sport",
  "irregularite": "singulier_seul",
  "sg": [
   "бег",
   "бе́га",
   "бе́гу",
   "бег",
   "бе́гом",
   "бе́ге"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_hokkej",
  "type": "nom",
  "lemme": "хокке́й",
  "fr": "hockey",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "sport",
  "irregularite": "singulier_seul",
  "sg": [
   "хокке́й",
   "хокке́я",
   "хокке́ю",
   "хокке́й",
   "хокке́ем",
   "хокке́е"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_gimnastika",
  "type": "nom",
  "lemme": "гимна́стика",
  "fr": "gymnastique",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "sport",
  "irregularite": "singulier_seul",
  "sg": [
   "гимна́стика",
   "гимна́стики",
   "гимна́стике",
   "гимна́стику",
   "гимна́стикой",
   "гимна́стике"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_i",
   "dat_sg_e",
   "acc_sg_f_u"
  ]
 },
 {
  "id": "lex_joga",
  "type": "nom",
  "lemme": "йо́га",
  "fr": "yoga",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "sport",
  "irregularite": "singulier_seul",
  "sg": [
   "йо́га",
   "йо́ги",
   "йо́ге",
   "йо́гу",
   "йо́гой",
   "йо́ге"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_oj"
  ]
 },
 {
  "id": "lex_plavanie",
  "type": "nom",
  "lemme": "пла́вание",
  "fr": "natation",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "sport",
  "irregularite": "singulier_seul",
  "sg": [
   "пла́вание",
   "пла́вания",
   "пла́ванию",
   "пла́вание",
   "пла́ванием",
   "пла́вании"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_ii"
  ]
 },
 {
  "id": "lex_student",
  "type": "nom",
  "lemme": "студе́нт",
  "fr": "étudiant",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "студе́нт",
   "студе́нта",
   "студе́нту",
   "студе́нта",
   "студе́нтом",
   "студе́нте"
  ],
  "pl": [
   "студе́нты",
   "студе́нтов",
   "студе́нтам",
   "студе́нтов",
   "студе́нтами",
   "студе́нтах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u"
  ]
 },
 {
  "id": "lex_studentka",
  "type": "nom",
  "lemme": "студе́нтка",
  "fr": "étudiante",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "студе́нтка",
   "студе́нтки",
   "студе́нтке",
   "студе́нтку",
   "студе́нткой",
   "студе́нтке"
  ],
  "pl": [
   "студе́нтки",
   "студе́нток",
   "студе́нткам",
   "студе́нток",
   "студе́нтками",
   "студе́нтках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_sg_f_u",
   "instr_sg_oj",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_uchitel",
  "type": "nom",
  "lemme": "учи́тель",
  "fr": "instituteur, professeur",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "учи́тель",
   "учи́теля",
   "учи́телю",
   "учи́теля",
   "учи́телем",
   "учи́теле"
  ],
  "pl": [
   "учителя́",
   "учителе́й",
   "учителя́м",
   "учителе́й",
   "учителя́ми",
   "учителя́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "genpl_ej",
   "nom_pl_a"
  ]
 },
 {
  "id": "lex_prepodavatel",
  "type": "nom",
  "lemme": "преподава́тель",
  "fr": "enseignant",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "преподава́тель",
   "преподава́теля",
   "преподава́телю",
   "преподава́теля",
   "преподава́телем",
   "преподава́теле"
  ],
  "pl": [
   "преподава́тели",
   "преподава́телей",
   "преподава́телям",
   "преподава́телей",
   "преподава́телями",
   "преподава́телях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_anime_pl",
   "prep_sg_e",
   "gen_sg_a",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_vrach",
  "type": "nom",
  "lemme": "врач",
  "fr": "médecin",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "врач",
   "врача́",
   "врачу́",
   "врача́",
   "врачо́м",
   "враче́"
  ],
  "pl": [
   "врачи́",
   "враче́й",
   "врача́м",
   "враче́й",
   "врача́ми",
   "врача́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_i",
   "acc_anime_sg",
   "instr_sg_om",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_inzhener",
  "type": "nom",
  "lemme": "инжене́р",
  "fr": "ingénieur",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "инжене́р",
   "инжене́ра",
   "инжене́ру",
   "инжене́ра",
   "инжене́ром",
   "инжене́ре"
  ],
  "pl": [
   "инжене́ры",
   "инжене́ров",
   "инжене́рам",
   "инжене́ров",
   "инжене́рами",
   "инжене́рах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ov",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_akter",
  "type": "nom",
  "lemme": "актёр",
  "fr": "acteur",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "актёр",
   "актёра",
   "актёру",
   "актёра",
   "актёром",
   "актёре"
  ],
  "pl": [
   "актёры",
   "актёров",
   "актёрам",
   "актёров",
   "актёрами",
   "актёрах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "acc_anime_pl",
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_aktrisa",
  "type": "nom",
  "lemme": "актри́са",
  "fr": "actrice",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "актри́са",
   "актри́сы",
   "актри́се",
   "актри́су",
   "актри́сой",
   "актри́се"
  ],
  "pl": [
   "актри́сы",
   "актри́с",
   "актри́сам",
   "актри́с",
   "актри́сами",
   "актри́сах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_y",
   "dat_sg_e",
   "acc_sg_f_u"
  ]
 },
 {
  "id": "lex_prodavec",
  "type": "nom",
  "lemme": "продаве́ц",
  "fr": "vendeur",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "продаве́ц",
   "продавца́",
   "продавцу́",
   "продавца́",
   "продавцо́м",
   "продавце́"
  ],
  "pl": [
   "продавцы́",
   "продавцо́в",
   "продавца́м",
   "продавцо́в",
   "продавца́ми",
   "продавца́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_povar",
  "type": "nom",
  "lemme": "по́вар",
  "fr": "cuisinier",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "по́вар",
   "по́вара",
   "по́вару",
   "по́вара",
   "по́варом",
   "по́варе"
  ],
  "pl": [
   "повара́",
   "поваро́в",
   "повара́м",
   "поваро́в",
   "повара́ми",
   "повара́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "acc_anime_pl",
   "nom_pl_a"
  ]
 },
 {
  "id": "lex_bankir",
  "type": "nom",
  "lemme": "банки́р",
  "fr": "banquier",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "банки́р",
   "банки́ра",
   "банки́ру",
   "банки́ра",
   "банки́ром",
   "банки́ре"
  ],
  "pl": [
   "банки́ры",
   "банки́ров",
   "банки́рам",
   "банки́ров",
   "банки́рами",
   "банки́рах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u"
  ]
 },
 {
  "id": "lex_zritel",
  "type": "nom",
  "lemme": "зри́тель",
  "fr": "spectateur",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "зри́тель",
   "зри́теля",
   "зри́телю",
   "зри́теля",
   "зри́телем",
   "зри́теле"
  ],
  "pl": [
   "зри́тели",
   "зри́телей",
   "зри́телям",
   "зри́телей",
   "зри́телями",
   "зри́телях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_anime_sg",
   "instr_sg_om",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_ekskursovod",
  "type": "nom",
  "lemme": "экскурсово́д",
  "fr": "guide",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "экскурсово́д",
   "экскурсово́да",
   "экскурсово́ду",
   "экскурсово́да",
   "экскурсово́дом",
   "экскурсово́де"
  ],
  "pl": [
   "экскурсово́ды",
   "экскурсово́дов",
   "экскурсово́дам",
   "экскурсово́дов",
   "экскурсово́дами",
   "экскурсово́дах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_turist",
  "type": "nom",
  "lemme": "тури́ст",
  "fr": "touriste",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "тури́ст",
   "тури́ста",
   "тури́сту",
   "тури́ста",
   "тури́стом",
   "тури́сте"
  ],
  "pl": [
   "тури́сты",
   "тури́стов",
   "тури́стам",
   "тури́стов",
   "тури́стами",
   "тури́стах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_anime_pl",
   "prep_sg_e",
   "gen_sg_a"
  ]
 },
 {
  "id": "lex_hudozhnik",
  "type": "nom",
  "lemme": "худо́жник",
  "fr": "peintre, artiste",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "худо́жник",
   "худо́жника",
   "худо́жнику",
   "худо́жника",
   "худо́жником",
   "худо́жнике"
  ],
  "pl": [
   "худо́жники",
   "худо́жников",
   "худо́жникам",
   "худо́жников",
   "худо́жниками",
   "худо́жниках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "acc_anime_sg",
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_advokat",
  "type": "nom",
  "lemme": "адвока́т",
  "fr": "avocat",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "адвока́т",
   "адвока́та",
   "адвока́ту",
   "адвока́та",
   "адвока́том",
   "адвока́те"
  ],
  "pl": [
   "адвока́ты",
   "адвока́тов",
   "адвока́там",
   "адвока́тов",
   "адвока́тами",
   "адвока́тах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ov",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_balerina",
  "type": "nom",
  "lemme": "балери́на",
  "fr": "ballerine",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "балери́на",
   "балери́ны",
   "балери́не",
   "балери́ну",
   "балери́ной",
   "балери́не"
  ],
  "pl": [
   "балери́ны",
   "балери́н",
   "балери́нам",
   "балери́н",
   "балери́нами",
   "балери́нах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "acc_anime_pl",
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_kosmonavt",
  "type": "nom",
  "lemme": "космона́вт",
  "fr": "cosmonaute",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "космона́вт",
   "космона́вта",
   "космона́вту",
   "космона́вта",
   "космона́втом",
   "космона́вте"
  ],
  "pl": [
   "космона́вты",
   "космона́втов",
   "космона́втам",
   "космона́втов",
   "космона́втами",
   "космона́втах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u",
   "acc_anime_sg"
  ]
 },
 {
  "id": "lex_kompozitor",
  "type": "nom",
  "lemme": "компози́тор",
  "fr": "compositeur",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "компози́тор",
   "компози́тора",
   "компози́тору",
   "компози́тора",
   "компози́тором",
   "компози́торе"
  ],
  "pl": [
   "компози́торы",
   "компози́торов",
   "компози́торам",
   "компози́торов",
   "компози́торами",
   "компози́торах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_partner",
  "type": "nom",
  "lemme": "партнёр",
  "fr": "partenaire",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "партнёр",
   "партнёра",
   "партнёру",
   "партнёра",
   "партнёром",
   "партнёре"
  ],
  "pl": [
   "партнёры",
   "партнёров",
   "партнёрам",
   "партнёров",
   "партнёрами",
   "партнёрах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "acc_anime_pl"
  ]
 },
 {
  "id": "lex_klient",
  "type": "nom",
  "lemme": "кли́ент",
  "fr": "client",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "кли́ент",
   "кли́ента",
   "кли́енту",
   "кли́ента",
   "кли́ентом",
   "кли́енте"
  ],
  "pl": [
   "кли́енты",
   "кли́ентов",
   "кли́ентам",
   "кли́ентов",
   "кли́ентами",
   "кли́ентах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u"
  ]
 },
 {
  "id": "lex_sotrudnik",
  "type": "nom",
  "lemme": "сотру́дник",
  "fr": "collaborateur",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "сотру́дник",
   "сотру́дника",
   "сотру́днику",
   "сотру́дника",
   "сотру́дником",
   "сотру́днике"
  ],
  "pl": [
   "сотру́дники",
   "сотру́дников",
   "сотру́дникам",
   "сотру́дников",
   "сотру́дниками",
   "сотру́дниках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_anime_sg",
   "instr_sg_om",
   "genpl_ov"
  ]
 },
 {
  "id": "lex_uchitelnica",
  "type": "nom",
  "lemme": "учи́тельница",
  "fr": "institutrice",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "учи́тельница",
   "учи́тельницы",
   "учи́тельнице",
   "учи́тельницу",
   "учи́тельницей",
   "учи́тельнице"
  ],
  "pl": [
   "учи́тельницы",
   "учи́тельниц",
   "учи́тельницам",
   "учи́тельниц",
   "учи́тельницами",
   "учи́тельницах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_specialist",
  "type": "nom",
  "lemme": "специали́ст",
  "fr": "spécialiste",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "специали́ст",
   "специали́ста",
   "специали́сту",
   "специали́ста",
   "специали́стом",
   "специали́сте"
  ],
  "pl": [
   "специали́сты",
   "специали́стов",
   "специали́стам",
   "специали́стов",
   "специали́стами",
   "специали́стах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_anime_pl",
   "prep_sg_e",
   "gen_sg_a"
  ]
 },
 {
  "id": "lex_kollega",
  "type": "nom",
  "lemme": "колле́га",
  "fr": "collègue",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "колле́га",
   "колле́ги",
   "колле́ге",
   "колле́гу",
   "колле́гой",
   "колле́ге"
  ],
  "pl": [
   "колле́ги",
   "колле́г",
   "колле́гам",
   "колле́г",
   "колле́гами",
   "колле́гах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Masculin de déclinaison en -а : accusatif колле́гу, non колле́ги.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_e",
   "acc_anime_sg",
   "instr_sg_oj"
  ]
 },
 {
  "id": "lex_nachalnik",
  "type": "nom",
  "lemme": "нача́льник",
  "fr": "chef",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "нача́льник",
   "нача́льника",
   "нача́льнику",
   "нача́льника",
   "нача́льником",
   "нача́льнике"
  ],
  "pl": [
   "нача́льники",
   "нача́льников",
   "нача́льникам",
   "нача́льников",
   "нача́льниками",
   "нача́льниках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ov",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_doktor",
  "type": "nom",
  "lemme": "до́ктор",
  "fr": "docteur",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "до́ктор",
   "до́ктора",
   "до́ктору",
   "до́ктора",
   "до́ктором",
   "до́кторе"
  ],
  "pl": [
   "доктора́",
   "докторо́в",
   "доктора́м",
   "докторо́в",
   "доктора́ми",
   "доктора́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "acc_anime_pl",
   "prep_sg_e",
   "nom_pl_a"
  ]
 },
 {
  "id": "lex_hirurg",
  "type": "nom",
  "lemme": "хиру́рг",
  "fr": "chirurgien",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "хиру́рг",
   "хиру́рга",
   "хиру́ргу",
   "хиру́рга",
   "хиру́ргом",
   "хиру́рге"
  ],
  "pl": [
   "хиру́рги",
   "хиру́ргов",
   "хиру́ргам",
   "хиру́ргов",
   "хиру́ргами",
   "хиру́ргах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u",
   "acc_anime_sg"
  ]
 },
 {
  "id": "lex_terapevt",
  "type": "nom",
  "lemme": "терапе́вт",
  "fr": "généraliste",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "терапе́вт",
   "терапе́вта",
   "терапе́вту",
   "терапе́вта",
   "терапе́втом",
   "терапе́вте"
  ],
  "pl": [
   "терапе́вты",
   "терапе́втов",
   "терапе́втам",
   "терапе́втов",
   "терапе́втами",
   "терапе́втах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_psihoterapevt",
  "type": "nom",
  "lemme": "психотерапе́вт",
  "fr": "psychothérapeute",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "психотерапе́вт",
   "психотерапе́вта",
   "психотерапе́вту",
   "психотерапе́вта",
   "психотерапе́втом",
   "психотерапе́вте"
  ],
  "pl": [
   "психотерапе́вты",
   "психотерапе́втов",
   "психотерапе́втам",
   "психотерапе́втов",
   "психотерапе́втами",
   "психотерапе́втах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "acc_anime_pl"
  ]
 },
 {
  "id": "lex_massazhist",
  "type": "nom",
  "lemme": "массажи́ст",
  "fr": "masseur",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "массажи́ст",
   "массажи́ста",
   "массажи́сту",
   "массажи́ста",
   "массажи́стом",
   "массажи́сте"
  ],
  "pl": [
   "массажи́сты",
   "массажи́стов",
   "массажи́стам",
   "массажи́стов",
   "массажи́стами",
   "массажи́стах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u"
  ]
 },
 {
  "id": "lex_instruktor",
  "type": "nom",
  "lemme": "инстру́ктор",
  "fr": "moniteur",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "инстру́ктор",
   "инстру́ктора",
   "инстру́ктору",
   "инстру́ктора",
   "инстру́ктором",
   "инстру́кторе"
  ],
  "pl": [
   "инстру́кторы",
   "инстру́кторов",
   "инстру́кторам",
   "инстру́кторов",
   "инстру́кторами",
   "инстру́кторах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_anime_sg",
   "instr_sg_om",
   "genpl_ov"
  ]
 },
 {
  "id": "lex_nemec",
  "type": "nom",
  "lemme": "не́мец",
  "fr": "Allemand",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "не́мец",
   "не́мца",
   "не́мцу",
   "не́мца",
   "не́мцем",
   "не́мце"
  ],
  "pl": [
   "не́мцы",
   "не́мцев",
   "не́мцам",
   "не́мцев",
   "не́мцами",
   "не́мцах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_drug",
  "type": "nom",
  "lemme": "друг",
  "fr": "ami",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "famille",
  "irregularite": null,
  "sg": [
   "друг",
   "дру́га",
   "дру́гу",
   "дру́га",
   "дру́гом",
   "дру́ге"
  ],
  "pl": [
   "друзья́",
   "друзе́й",
   "друзья́м",
   "друзе́й",
   "друзья́ми",
   "друзья́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_anime_pl",
   "prep_sg_e",
   "gen_sg_a",
   "genpl_supplet",
   "nom_pl_ya"
  ]
 },
 {
  "id": "lex_podruga",
  "type": "nom",
  "lemme": "подру́га",
  "fr": "amie",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "famille",
  "irregularite": null,
  "sg": [
   "подру́га",
   "подру́ги",
   "подру́ге",
   "подру́гу",
   "подру́гой",
   "подру́ге"
  ],
  "pl": [
   "подру́ги",
   "подру́г",
   "подру́гам",
   "подру́г",
   "подру́гами",
   "подру́гах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_e",
   "acc_sg_f_u",
   "instr_sg_oj"
  ]
 },
 {
  "id": "lex_mama",
  "type": "nom",
  "lemme": "ма́ма",
  "fr": "maman",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "famille",
  "irregularite": null,
  "sg": [
   "ма́ма",
   "ма́мы",
   "ма́ме",
   "ма́му",
   "ма́мой",
   "ма́ме"
  ],
  "pl": [
   "ма́мы",
   "мам",
   "ма́мам",
   "мам",
   "ма́мами",
   "ма́мах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_zero",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_papa",
  "type": "nom",
  "lemme": "па́па",
  "fr": "papa",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "famille",
  "irregularite": null,
  "sg": [
   "па́па",
   "па́пы",
   "па́пе",
   "па́пу",
   "па́пой",
   "па́пе"
  ],
  "pl": [
   "па́пы",
   "пап",
   "па́пам",
   "пап",
   "па́пами",
   "па́пах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Masculin de déclinaison en -а : accusatif па́пу.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "acc_anime_pl",
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_sestra",
  "type": "nom",
  "lemme": "сестра́",
  "fr": "sœur",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "famille",
  "irregularite": null,
  "sg": [
   "сестра́",
   "сестры́",
   "сестре́",
   "сестру́",
   "сестро́й",
   "сестре́"
  ],
  "pl": [
   "сёстры",
   "сестёр",
   "сёстрам",
   "сестёр",
   "сёстрами",
   "сёстрах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_i",
   "acc_sg_f_u",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_brat",
  "type": "nom",
  "lemme": "брат",
  "fr": "frère",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "famille",
  "irregularite": null,
  "sg": [
   "брат",
   "бра́та",
   "бра́ту",
   "бра́та",
   "бра́том",
   "бра́те"
  ],
  "pl": [
   "бра́тья",
   "бра́тьев",
   "бра́тьям",
   "бра́тьев",
   "бра́тьями",
   "бра́тьях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah",
   "nom_pl_ya"
  ]
 },
 {
  "id": "lex_syn",
  "type": "nom",
  "lemme": "сын",
  "fr": "fils",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "famille",
  "irregularite": null,
  "sg": [
   "сын",
   "сы́на",
   "сы́ну",
   "сы́на",
   "сы́ном",
   "сы́не"
  ],
  "pl": [
   "сыновья́",
   "сынове́й",
   "сыновья́м",
   "сынове́й",
   "сыновья́ми",
   "сыновья́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "acc_anime_pl",
   "genpl_ej",
   "nom_pl_ya"
  ]
 },
 {
  "id": "lex_doch",
  "type": "nom",
  "lemme": "дочь",
  "fr": "fille (filiation)",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "famille",
  "irregularite": "irregulier",
  "sg": [
   "дочь",
   "до́чери",
   "до́чери",
   "дочь",
   "до́черью",
   "до́чери"
  ],
  "pl": [
   "до́чери",
   "дочере́й",
   "дочеря́м",
   "дочере́й",
   "дочерьми́",
   "дочеря́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Radical en -ер- ; instrumental pluriel дочерьми́, non дочеря́ми.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_i",
   "gen_sg_irreg",
   "dat_sg_i",
   "acc_sg_f_zero",
   "instr_sg_ju",
   "genpl_ej",
   "instr_pl_mi"
  ]
 },
 {
  "id": "lex_mat",
  "type": "nom",
  "lemme": "мать",
  "fr": "mère",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "famille",
  "irregularite": "irregulier",
  "sg": [
   "мать",
   "ма́тери",
   "ма́тери",
   "мать",
   "ма́терью",
   "ма́тери"
  ],
  "pl": [
   "ма́тери",
   "матере́й",
   "матеря́м",
   "матере́й",
   "матеря́ми",
   "матеря́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Radical en -ер-.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_sg_f_zero",
   "instr_sg_ju",
   "genpl_ej",
   "prep_sg_i",
   "gen_sg_irreg"
  ]
 },
 {
  "id": "lex_rebenok",
  "type": "nom",
  "lemme": "ребёнок",
  "fr": "enfant",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "famille",
  "irregularite": "irregulier",
  "sg": [
   "ребёнок",
   "ребёнка",
   "ребёнку",
   "ребёнка",
   "ребёнком",
   "ребёнке"
  ],
  "pl": [
   "де́ти",
   "дете́й",
   "де́тям",
   "дете́й",
   "детьми́",
   "де́тях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Supplétion : pluriel де́ти. Instrumental pluriel детьми́.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_mi",
   "gen_sg_irreg",
   "genpl_supplet",
   "nom_pl_supplet"
  ]
 },
 {
  "id": "lex_chelovek",
  "type": "nom",
  "lemme": "челове́к",
  "fr": "personne, être humain",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "personnes",
  "irregularite": "irregulier",
  "sg": [
   "челове́к",
   "челове́ка",
   "челове́ку",
   "челове́ка",
   "челове́ком",
   "челове́ке"
  ],
  "pl": [
   "лю́ди",
   "люде́й",
   "лю́дям",
   "люде́й",
   "людьми́",
   "лю́дях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Supplétion : pluriel лю́ди. Instrumental pluriel людьми́.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_anime_pl",
   "prep_sg_e",
   "gen_sg_irreg",
   "genpl_supplet",
   "instr_pl_mi",
   "nom_pl_supplet"
  ]
 },
 {
  "id": "lex_babushka",
  "type": "nom",
  "lemme": "ба́бушка",
  "fr": "grand-mère",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "famille",
  "irregularite": null,
  "sg": [
   "ба́бушка",
   "ба́бушки",
   "ба́бушке",
   "ба́бушку",
   "ба́бушкой",
   "ба́бушке"
  ],
  "pl": [
   "ба́бушки",
   "ба́бушек",
   "ба́бушкам",
   "ба́бушек",
   "ба́бушками",
   "ба́бушках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_e",
   "acc_sg_f_u",
   "instr_sg_oj",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_dedushka",
  "type": "nom",
  "lemme": "де́душка",
  "fr": "grand-père",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "famille",
  "irregularite": null,
  "sg": [
   "де́душка",
   "де́душки",
   "де́душке",
   "де́душку",
   "де́душкой",
   "де́душке"
  ],
  "pl": [
   "де́душки",
   "де́душек",
   "де́душкам",
   "де́душек",
   "де́душками",
   "де́душках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Masculin de déclinaison en -а : accusatif де́душку.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_voyelle_mobile",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_roditeli",
  "type": "nom",
  "lemme": "роди́тели",
  "fr": "parents",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "famille",
  "irregularite": "pluriel_seul",
  "sg": null,
  "pl": [
   "роди́тели",
   "роди́телей",
   "роди́телям",
   "роди́телей",
   "роди́телями",
   "роди́телях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "acc_anime_pl",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_muzh",
  "type": "nom",
  "lemme": "муж",
  "fr": "mari",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "famille",
  "irregularite": null,
  "sg": [
   "муж",
   "му́жа",
   "му́жу",
   "му́жа",
   "му́жем",
   "му́же"
  ],
  "pl": [
   "мужья́",
   "муже́й",
   "мужья́м",
   "муже́й",
   "мужья́ми",
   "мужья́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u",
   "acc_anime_sg",
   "genpl_ej",
   "nom_pl_ya"
  ]
 },
 {
  "id": "lex_zhena",
  "type": "nom",
  "lemme": "жена́",
  "fr": "épouse",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "famille",
  "irregularite": null,
  "sg": [
   "жена́",
   "жены́",
   "жене́",
   "жену́",
   "жено́й",
   "жене́"
  ],
  "pl": [
   "жёны",
   "жён",
   "жёнам",
   "жён",
   "жёнами",
   "жёнах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_zero",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_devushka",
  "type": "nom",
  "lemme": "де́вушка",
  "fr": "jeune femme",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "де́вушка",
   "де́вушки",
   "де́вушке",
   "де́вушку",
   "де́вушкой",
   "де́вушке"
  ],
  "pl": [
   "де́вушки",
   "де́вушек",
   "де́вушкам",
   "де́вушек",
   "де́вушками",
   "де́вушках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "acc_anime_pl",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_semja",
  "type": "nom",
  "lemme": "семья́",
  "fr": "famille",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "famille",
  "irregularite": null,
  "sg": [
   "семья́",
   "семьи́",
   "семье́",
   "семью́",
   "семьёй",
   "семье́"
  ],
  "pl": [
   "се́мьи",
   "семе́й",
   "се́мьям",
   "се́мьи",
   "се́мьями",
   "се́мьях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_i",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_tetja",
  "type": "nom",
  "lemme": "тётя",
  "fr": "tante",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "famille",
  "irregularite": null,
  "sg": [
   "тётя",
   "тёти",
   "тёте",
   "тётю",
   "тётей",
   "тёте"
  ],
  "pl": [
   "тёти",
   "тётей",
   "тётям",
   "тётей",
   "тётями",
   "тётях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Génitif pluriel тётей ou тёть, les deux attestés. Les deux sont acceptés à la correction.",
  "aValider": true,
  "sourceProf": true,
  "variantes": {
   "pl.1": [
    "тёть"
   ],
   "pl.3": [
    "тёть"
   ]
  },
  "sousCategories": [
   "acc_sg_f_u",
   "instr_sg_oj",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_koroleva",
  "type": "nom",
  "lemme": "короле́ва",
  "fr": "reine",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "personnes",
  "irregularite": null,
  "sg": [
   "короле́ва",
   "короле́вы",
   "короле́ве",
   "короле́ву",
   "короле́вой",
   "короле́ве"
  ],
  "pl": [
   "короле́вы",
   "короле́в",
   "короле́вам",
   "короле́в",
   "короле́вами",
   "короле́вах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_koshka",
  "type": "nom",
  "lemme": "ко́шка",
  "fr": "chatte, chat",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "animaux",
  "irregularite": null,
  "sg": [
   "ко́шка",
   "ко́шки",
   "ко́шке",
   "ко́шку",
   "ко́шкой",
   "ко́шке"
  ],
  "pl": [
   "ко́шки",
   "ко́шек",
   "ко́шкам",
   "ко́шек",
   "ко́шками",
   "ко́шках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_anime_pl",
   "prep_sg_e",
   "gen_sg_i",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_kot",
  "type": "nom",
  "lemme": "кот",
  "fr": "chat",
  "frVariantes": [],
  "genre": "m",
  "anime": true,
  "categorie": "animaux",
  "irregularite": null,
  "sg": [
   "кот",
   "кота́",
   "коту́",
   "кота́",
   "кото́м",
   "коте́"
  ],
  "pl": [
   "коты́",
   "кото́в",
   "кота́м",
   "кото́в",
   "кота́ми",
   "кота́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_i",
   "acc_anime_sg",
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_sobaka",
  "type": "nom",
  "lemme": "соба́ка",
  "fr": "chien",
  "frVariantes": [],
  "genre": "f",
  "anime": true,
  "categorie": "animaux",
  "irregularite": null,
  "sg": [
   "соба́ка",
   "соба́ки",
   "соба́ке",
   "соба́ку",
   "соба́кой",
   "соба́ке"
  ],
  "pl": [
   "соба́ки",
   "соба́к",
   "соба́кам",
   "соба́к",
   "соба́ками",
   "соба́ках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_zero",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_noga",
  "type": "nom",
  "lemme": "нога́",
  "fr": "jambe, pied",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "corps",
  "irregularite": null,
  "sg": [
   "нога́",
   "ноги́",
   "ноге́",
   "но́гу",
   "ного́й",
   "ноге́"
  ],
  "pl": [
   "но́ги",
   "ног",
   "нога́м",
   "но́ги",
   "нога́ми",
   "нога́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_ruka",
  "type": "nom",
  "lemme": "рука́",
  "fr": "main, bras",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "corps",
  "irregularite": null,
  "sg": [
   "рука́",
   "руки́",
   "руке́",
   "ру́ку",
   "руко́й",
   "руке́"
  ],
  "pl": [
   "ру́ки",
   "рук",
   "рука́м",
   "ру́ки",
   "рука́ми",
   "рука́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_i",
   "acc_sg_f_u"
  ]
 },
 {
  "id": "lex_zub",
  "type": "nom",
  "lemme": "зуб",
  "fr": "dent",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "corps",
  "irregularite": null,
  "sg": [
   "зуб",
   "зу́ба",
   "зу́бу",
   "зуб",
   "зу́бом",
   "зу́бе"
  ],
  "pl": [
   "зу́бы",
   "зубо́в",
   "зуба́м",
   "зу́бы",
   "зуба́ми",
   "зуба́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_spina",
  "type": "nom",
  "lemme": "спина́",
  "fr": "dos",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "corps",
  "irregularite": null,
  "sg": [
   "спина́",
   "спины́",
   "спине́",
   "спи́ну",
   "спино́й",
   "спине́"
  ],
  "pl": [
   "спи́ны",
   "спин",
   "спи́нам",
   "спи́ны",
   "спи́нами",
   "спи́нах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_glaz",
  "type": "nom",
  "lemme": "глаз",
  "fr": "œil",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "corps",
  "irregularite": null,
  "sg": [
   "глаз",
   "гла́за",
   "гла́зу",
   "глаз",
   "гла́зом",
   "гла́зе"
  ],
  "pl": [
   "глаза́",
   "глаз",
   "глаза́м",
   "глаза́",
   "глаза́ми",
   "глаза́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u",
   "nom_pl_a"
  ]
 },
 {
  "id": "lex_kashel",
  "type": "nom",
  "lemme": "ка́шель",
  "fr": "toux",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "corps",
  "irregularite": "singulier_seul",
  "sg": [
   "ка́шель",
   "ка́шля",
   "ка́шлю",
   "ка́шель",
   "ка́шлем",
   "ка́шле"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_nasmork",
  "type": "nom",
  "lemme": "на́сморк",
  "fr": "rhume",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "corps",
  "irregularite": "singulier_seul",
  "sg": [
   "на́сморк",
   "на́сморка",
   "на́сморку",
   "на́сморк",
   "на́сморком",
   "на́сморке"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_bessonnica",
  "type": "nom",
  "lemme": "бессо́нница",
  "fr": "insomnie",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "corps",
  "irregularite": "singulier_seul",
  "sg": [
   "бессо́нница",
   "бессо́нницы",
   "бессо́ннице",
   "бессо́нницу",
   "бессо́нницей",
   "бессо́ннице"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_y"
  ]
 },
 {
  "id": "lex_avtobus",
  "type": "nom",
  "lemme": "авто́бус",
  "fr": "autobus",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "transports",
  "irregularite": null,
  "sg": [
   "авто́бус",
   "авто́буса",
   "авто́бусу",
   "авто́бус",
   "авто́бусом",
   "авто́бусе"
  ],
  "pl": [
   "авто́бусы",
   "авто́бусов",
   "авто́бусам",
   "авто́бусы",
   "авто́бусами",
   "авто́бусах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_mashina",
  "type": "nom",
  "lemme": "маши́на",
  "fr": "voiture",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "transports",
  "irregularite": null,
  "sg": [
   "маши́на",
   "маши́ны",
   "маши́не",
   "маши́ну",
   "маши́ной",
   "маши́не"
  ],
  "pl": [
   "маши́ны",
   "маши́н",
   "маши́нам",
   "маши́ны",
   "маши́нами",
   "маши́нах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_zero",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_taksi",
  "type": "nom",
  "lemme": "такси́",
  "fr": "taxi",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "transports",
  "irregularite": "indeclinable",
  "sg": [
   "такси́",
   "такси́",
   "такси́",
   "такси́",
   "такси́",
   "такси́"
  ],
  "pl": [
   "такси́",
   "такси́",
   "такси́",
   "такси́",
   "такси́",
   "такси́"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "indecl"
  ]
 },
 {
  "id": "lex_samokat",
  "type": "nom",
  "lemme": "самока́т",
  "fr": "trottinette",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "transports",
  "irregularite": null,
  "sg": [
   "самока́т",
   "самока́та",
   "самока́ту",
   "самока́т",
   "самока́том",
   "самока́те"
  ],
  "pl": [
   "самока́ты",
   "самока́тов",
   "самока́там",
   "самока́ты",
   "самока́тами",
   "самока́тах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u"
  ]
 },
 {
  "id": "lex_motocikl",
  "type": "nom",
  "lemme": "мотоци́кл",
  "fr": "moto",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "transports",
  "irregularite": null,
  "sg": [
   "мотоци́кл",
   "мотоци́кла",
   "мотоци́клу",
   "мотоци́кл",
   "мотоци́клом",
   "мотоци́кле"
  ],
  "pl": [
   "мотоци́клы",
   "мотоци́клов",
   "мотоци́клам",
   "мотоци́клы",
   "мотоци́клами",
   "мотоци́клах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_velosiped",
  "type": "nom",
  "lemme": "велосипе́д",
  "fr": "vélo",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "transports",
  "irregularite": null,
  "sg": [
   "велосипе́д",
   "велосипе́да",
   "велосипе́ду",
   "велосипе́д",
   "велосипе́дом",
   "велосипе́де"
  ],
  "pl": [
   "велосипе́ды",
   "велосипе́дов",
   "велосипе́дам",
   "велосипе́ды",
   "велосипе́дами",
   "велосипе́дах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_poezd",
  "type": "nom",
  "lemme": "по́езд",
  "fr": "train",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "transports",
  "irregularite": null,
  "sg": [
   "по́езд",
   "по́езда",
   "по́езду",
   "по́езд",
   "по́ездом",
   "по́езде"
  ],
  "pl": [
   "поезда́",
   "поездо́в",
   "поезда́м",
   "поезда́",
   "поезда́ми",
   "поезда́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u",
   "nom_pl_a"
  ]
 },
 {
  "id": "lex_marshrutka",
  "type": "nom",
  "lemme": "маршру́тка",
  "fr": "minibus de ligne",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "transports",
  "irregularite": null,
  "sg": [
   "маршру́тка",
   "маршру́тки",
   "маршру́тке",
   "маршру́тку",
   "маршру́ткой",
   "маршру́тке"
  ],
  "pl": [
   "маршру́тки",
   "маршру́ток",
   "маршру́ткам",
   "маршру́тки",
   "маршру́тками",
   "маршру́тках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_sg_f_u",
   "instr_sg_oj",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_samolet",
  "type": "nom",
  "lemme": "самолёт",
  "fr": "avion",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "transports",
  "irregularite": null,
  "sg": [
   "самолёт",
   "самолёта",
   "самолёту",
   "самолёт",
   "самолётом",
   "самолёте"
  ],
  "pl": [
   "самолёты",
   "самолётов",
   "самолётам",
   "самолёты",
   "самолётами",
   "самолётах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_jahta",
  "type": "nom",
  "lemme": "я́хта",
  "fr": "yacht",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "transports",
  "irregularite": null,
  "sg": [
   "я́хта",
   "я́хты",
   "я́хте",
   "я́хту",
   "я́хтой",
   "я́хте"
  ],
  "pl": [
   "я́хты",
   "яхт",
   "я́хтам",
   "я́хты",
   "я́хтами",
   "я́хтах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_y"
  ]
 },
 {
  "id": "lex_den",
  "type": "nom",
  "lemme": "день",
  "fr": "jour",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": "irregulier",
  "sg": [
   "день",
   "дня",
   "дню",
   "день",
   "днём",
   "дне"
  ],
  "pl": [
   "дни",
   "дней",
   "дням",
   "дни",
   "дня́ми",
   "днях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Voyelle mobile : le -е- du radical disparaît hors du nominatif.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om",
   "gen_sg_irreg",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_nedelja",
  "type": "nom",
  "lemme": "неде́ля",
  "fr": "semaine",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "неде́ля",
   "неде́ли",
   "неде́ле",
   "неде́лю",
   "неде́лей",
   "неде́ле"
  ],
  "pl": [
   "неде́ли",
   "неде́ль",
   "неде́лям",
   "неде́ли",
   "неде́лями",
   "неде́лях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_voyelle_mobile",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_mesjac",
  "type": "nom",
  "lemme": "ме́сяц",
  "fr": "mois",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "ме́сяц",
   "ме́сяца",
   "ме́сяцу",
   "ме́сяц",
   "ме́сяцем",
   "ме́сяце"
  ],
  "pl": [
   "ме́сяцы",
   "ме́сяцев",
   "ме́сяцам",
   "ме́сяцы",
   "ме́сяцами",
   "ме́сяцах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_god",
  "type": "nom",
  "lemme": "год",
  "fr": "an, année",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "год",
   "го́да",
   "го́ду",
   "год",
   "го́дом",
   "го́де"
  ],
  "pl": [
   "го́ды",
   "лет",
   "года́м",
   "го́ды",
   "года́ми",
   "года́х"
  ],
  "prep": null,
  "loc2": {
   "forme": "в году́",
   "contexte": "situation dans le temps"
  },
  "bloc": 1,
  "note": "Génitif pluriel supplétif : лет, emprunté à ле́то.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {
   "pl.0": [
    "года́"
   ],
   "pl.3": [
    "года́"
   ]
  },
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u",
   "genpl_supplet"
  ]
 },
 {
  "id": "lex_chas",
  "type": "nom",
  "lemme": "час",
  "fr": "heure",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "час",
   "ча́са",
   "ча́су",
   "час",
   "ча́сом",
   "ча́се"
  ],
  "pl": [
   "часы́",
   "часо́в",
   "часа́м",
   "часы́",
   "часа́ми",
   "часа́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Prépositionnel в ча́се (unité de durée : ско́лько мину́т в ча́се). La forme в часу́ ne vaut que pour l’heure du jour (в кото́ром часу́), absente du support : elle n’est pas testée.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_minuta",
  "type": "nom",
  "lemme": "мину́та",
  "fr": "minute",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "мину́та",
   "мину́ты",
   "мину́те",
   "мину́ту",
   "мину́той",
   "мину́те"
  ],
  "pl": [
   "мину́ты",
   "мину́т",
   "мину́там",
   "мину́ты",
   "мину́тами",
   "мину́тах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_sekunda",
  "type": "nom",
  "lemme": "секу́нда",
  "fr": "seconde",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "секу́нда",
   "секу́нды",
   "секу́нде",
   "секу́нду",
   "секу́ндой",
   "секу́нде"
  ],
  "pl": [
   "секу́нды",
   "секу́нд",
   "секу́ндам",
   "секу́нды",
   "секу́ндами",
   "секу́ндах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_y",
   "dat_sg_e"
  ]
 },
 {
  "id": "lex_utro",
  "type": "nom",
  "lemme": "у́тро",
  "fr": "matin",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "у́тро",
   "у́тра",
   "у́тру",
   "у́тро",
   "у́тром",
   "у́тре"
  ],
  "pl": [
   "у́тра",
   "утр",
   "у́трам",
   "у́тра",
   "у́трами",
   "у́трах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Génitif pluriel утр, désinence zéro sans voyelle mobile, forme rare à l’usage.",
  "aValider": true,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_zero"
  ]
 },
 {
  "id": "lex_vecher",
  "type": "nom",
  "lemme": "ве́чер",
  "fr": "soir",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "ве́чер",
   "ве́чера",
   "ве́черу",
   "ве́чер",
   "ве́чером",
   "ве́чере"
  ],
  "pl": [
   "вечера́",
   "вечеро́в",
   "вечера́м",
   "вечера́",
   "вечера́ми",
   "вечера́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "nom_pl_a"
  ]
 },
 {
  "id": "lex_noch",
  "type": "nom",
  "lemme": "ночь",
  "fr": "nuit",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "ночь",
   "но́чи",
   "но́чи",
   "ночь",
   "но́чью",
   "но́чи"
  ],
  "pl": [
   "но́чи",
   "ноче́й",
   "ноча́м",
   "но́чи",
   "ноча́ми",
   "ноча́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_i",
   "gen_sg_i",
   "acc_sg_f_zero",
   "instr_sg_ju",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_zima",
  "type": "nom",
  "lemme": "зима́",
  "fr": "hiver",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "зима́",
   "зимы́",
   "зиме́",
   "зи́му",
   "зимо́й",
   "зиме́"
  ],
  "pl": [
   "зи́мы",
   "зим",
   "зи́мам",
   "зи́мы",
   "зи́мами",
   "зи́мах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Instrumental зимо́й = adverbe « en hiver ».",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_i",
   "acc_sg_f_u",
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_vesna",
  "type": "nom",
  "lemme": "весна́",
  "fr": "printemps",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "весна́",
   "весны́",
   "весне́",
   "весну́",
   "весно́й",
   "весне́"
  ],
  "pl": [
   "вёсны",
   "вёсен",
   "вёснам",
   "вёсны",
   "вёснами",
   "вёснах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Instrumental весно́й = adverbe « au printemps ».",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_voyelle_mobile",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_leto",
  "type": "nom",
  "lemme": "ле́то",
  "fr": "été",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "ле́то",
   "ле́та",
   "ле́ту",
   "ле́то",
   "ле́том",
   "ле́те"
  ],
  "pl": [
   "ле́та",
   "лет",
   "ле́там",
   "ле́та",
   "ле́тами",
   "ле́тах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Instrumental ле́том = adverbe « en été ». Son génitif pluriel лет sert aussi de génitif pluriel à год.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e",
   "genpl_supplet"
  ]
 },
 {
  "id": "lex_osen",
  "type": "nom",
  "lemme": "о́сень",
  "fr": "automne",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "temps",
  "irregularite": "singulier_seul",
  "sg": [
   "о́сень",
   "о́сени",
   "о́сени",
   "о́сень",
   "о́сенью",
   "о́сени"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Instrumental о́сенью = adverbe « en automne ».",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_i",
   "dat_sg_i",
   "acc_sg_f_zero",
   "prep_sg_i",
   "instr_sg_ju"
  ]
 },
 {
  "id": "lex_vek",
  "type": "nom",
  "lemme": "век",
  "fr": "siècle",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "век",
   "ве́ка",
   "ве́ку",
   "век",
   "ве́ком",
   "ве́ке"
  ],
  "pl": [
   "века́",
   "веко́в",
   "века́м",
   "века́",
   "века́ми",
   "века́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah",
   "nom_pl_a"
  ]
 },
 {
  "id": "lex_kanikuly",
  "type": "nom",
  "lemme": "кани́кулы",
  "fr": "vacances scolaires",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": "pluriel_seul",
  "sg": null,
  "pl": [
   "кани́кулы",
   "кани́кул",
   "кани́кулам",
   "кани́кулы",
   "кани́кулами",
   "кани́кулах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_sutki",
  "type": "nom",
  "lemme": "су́тки",
  "fr": "journée de 24 heures",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": "pluriel_seul",
  "sg": null,
  "pl": [
   "су́тки",
   "су́ток",
   "су́ткам",
   "су́тки",
   "су́тками",
   "су́тках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_ponedelnik",
  "type": "nom",
  "lemme": "понеде́льник",
  "fr": "lundi",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "понеде́льник",
   "понеде́льника",
   "понеде́льнику",
   "понеде́льник",
   "понеде́льником",
   "понеде́льнике"
  ],
  "pl": [
   "понеде́льники",
   "понеде́льников",
   "понеде́льникам",
   "понеде́льники",
   "понеде́льниками",
   "понеде́льниках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov"
  ]
 },
 {
  "id": "lex_vtornik",
  "type": "nom",
  "lemme": "вто́рник",
  "fr": "mardi",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "вто́рник",
   "вто́рника",
   "вто́рнику",
   "вто́рник",
   "вто́рником",
   "вто́рнике"
  ],
  "pl": [
   "вто́рники",
   "вто́рников",
   "вто́рникам",
   "вто́рники",
   "вто́рниками",
   "вто́рниках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Accusatif de temps : во вто́рник, avec во et non в.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_sreda",
  "type": "nom",
  "lemme": "среда́",
  "fr": "mercredi",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "среда́",
   "среды́",
   "среде́",
   "сре́ду",
   "средо́й",
   "среде́"
  ],
  "pl": [
   "сре́ды",
   "сред",
   "сре́дам",
   "сре́ды",
   "сре́дами",
   "сре́дах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Accusatif в сре́ду, accent reculé. Datif pluriel сре́дам ou среда́м.",
  "aValider": true,
  "sourceProf": true,
  "variantes": {
   "pl.2": [
    "среда́м"
   ],
   "pl.4": [
    "среда́ми"
   ],
   "pl.5": [
    "среда́х"
   ]
  },
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a"
  ]
 },
 {
  "id": "lex_chetverg",
  "type": "nom",
  "lemme": "четве́рг",
  "fr": "jeudi",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "четве́рг",
   "четверга́",
   "четвергу́",
   "четве́рг",
   "четверго́м",
   "четверге́"
  ],
  "pl": [
   "четверги́",
   "четверго́в",
   "четверга́м",
   "четверги́",
   "четверга́ми",
   "четверга́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_i",
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_pjatnica",
  "type": "nom",
  "lemme": "пя́тница",
  "fr": "vendredi",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "пя́тница",
   "пя́тницы",
   "пя́тнице",
   "пя́тницу",
   "пя́тницей",
   "пя́тнице"
  ],
  "pl": [
   "пя́тницы",
   "пя́тниц",
   "пя́тницам",
   "пя́тницы",
   "пя́тницами",
   "пя́тницах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_zero",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_subbota",
  "type": "nom",
  "lemme": "суббо́та",
  "fr": "samedi",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "суббо́та",
   "суббо́ты",
   "суббо́те",
   "суббо́ту",
   "суббо́той",
   "суббо́те"
  ],
  "pl": [
   "суббо́ты",
   "суббо́т",
   "суббо́там",
   "суббо́ты",
   "суббо́тами",
   "суббо́тах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_voskresene",
  "type": "nom",
  "lemme": "воскресе́нье",
  "fr": "dimanche",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "воскресе́нье",
   "воскресе́нья",
   "воскресе́нью",
   "воскресе́нье",
   "воскресе́ньем",
   "воскресе́нье"
  ],
  "pl": [
   "воскресе́нья",
   "воскресе́ний",
   "воскресе́ньям",
   "воскресе́нья",
   "воскресе́ньями",
   "воскресе́ньях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u",
   "genpl_ij",
   "nom_pl_ya"
  ]
 },
 {
  "id": "lex_vyhodnye",
  "type": "nom",
  "lemme": "выходны́е",
  "fr": "week-end, jours de repos",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": "pluriel_seul",
  "sg": null,
  "pl": [
   "выходны́е",
   "выходны́х",
   "выходны́м",
   "выходны́е",
   "выходны́ми",
   "выходны́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Substantif de forme adjectivale, toujours au pluriel dans cet emploi.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_voyelle_mobile",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_janvar",
  "type": "nom",
  "lemme": "янва́рь",
  "fr": "janvier",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "mois",
  "irregularite": null,
  "sg": [
   "янва́рь",
   "января́",
   "январю́",
   "янва́рь",
   "январём",
   "январе́"
  ],
  "pl": [
   "январи́",
   "январе́й",
   "января́м",
   "январи́",
   "января́ми",
   "января́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_fevral",
  "type": "nom",
  "lemme": "февра́ль",
  "fr": "février",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "mois",
  "irregularite": null,
  "sg": [
   "февра́ль",
   "февраля́",
   "февралю́",
   "февра́ль",
   "февралём",
   "феврале́"
  ],
  "pl": [
   "феврали́",
   "феврале́й",
   "февраля́м",
   "феврали́",
   "февраля́ми",
   "февраля́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_i",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_mart",
  "type": "nom",
  "lemme": "март",
  "fr": "mars",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "mois",
  "irregularite": null,
  "sg": [
   "март",
   "ма́рта",
   "ма́рту",
   "март",
   "ма́ртом",
   "ма́рте"
  ],
  "pl": [
   "ма́рты",
   "ма́ртов",
   "ма́ртам",
   "ма́рты",
   "ма́ртами",
   "ма́ртах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov"
  ]
 },
 {
  "id": "lex_aprel",
  "type": "nom",
  "lemme": "апре́ль",
  "fr": "avril",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "mois",
  "irregularite": null,
  "sg": [
   "апре́ль",
   "апре́ля",
   "апре́лю",
   "апре́ль",
   "апре́лем",
   "апре́ле"
  ],
  "pl": [
   "апре́ли",
   "апре́лей",
   "апре́лям",
   "апре́ли",
   "апре́лями",
   "апре́лях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_maj",
  "type": "nom",
  "lemme": "май",
  "fr": "mai",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "mois",
  "irregularite": null,
  "sg": [
   "май",
   "ма́я",
   "ма́ю",
   "май",
   "ма́ем",
   "ма́е"
  ],
  "pl": [
   "ма́и",
   "ма́ев",
   "ма́ям",
   "ма́и",
   "ма́ями",
   "ма́ях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a"
  ]
 },
 {
  "id": "lex_ijun",
  "type": "nom",
  "lemme": "ию́нь",
  "fr": "juin",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "mois",
  "irregularite": null,
  "sg": [
   "ию́нь",
   "ию́ня",
   "ию́ню",
   "ию́нь",
   "ию́нем",
   "ию́не"
  ],
  "pl": [
   "ию́ни",
   "ию́ней",
   "ию́ням",
   "ию́ни",
   "ию́нями",
   "ию́нях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_ijul",
  "type": "nom",
  "lemme": "ию́ль",
  "fr": "juillet",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "mois",
  "irregularite": null,
  "sg": [
   "ию́ль",
   "ию́ля",
   "ию́лю",
   "ию́ль",
   "ию́лем",
   "ию́ле"
  ],
  "pl": [
   "ию́ли",
   "ию́лей",
   "ию́лям",
   "ию́ли",
   "ию́лями",
   "ию́лях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_ej",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_avgust",
  "type": "nom",
  "lemme": "а́вгуст",
  "fr": "août",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "mois",
  "irregularite": null,
  "sg": [
   "а́вгуст",
   "а́вгуста",
   "а́вгусту",
   "а́вгуст",
   "а́вгустом",
   "а́вгусте"
  ],
  "pl": [
   "а́вгусты",
   "а́вгустов",
   "а́вгустам",
   "а́вгусты",
   "а́вгустами",
   "а́вгустах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_sentjabr",
  "type": "nom",
  "lemme": "сентя́брь",
  "fr": "septembre",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "mois",
  "irregularite": null,
  "sg": [
   "сентя́брь",
   "сентября́",
   "сентябрю́",
   "сентя́брь",
   "сентябрём",
   "сентябре́"
  ],
  "pl": [
   "сентябри́",
   "сентябре́й",
   "сентября́м",
   "сентябри́",
   "сентября́ми",
   "сентября́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_i",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_oktjabr",
  "type": "nom",
  "lemme": "октя́брь",
  "fr": "octobre",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "mois",
  "irregularite": null,
  "sg": [
   "октя́брь",
   "октября́",
   "октябрю́",
   "октя́брь",
   "октябрём",
   "октябре́"
  ],
  "pl": [
   "октябри́",
   "октябре́й",
   "октября́м",
   "октябри́",
   "октября́ми",
   "октября́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ej",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_nojabr",
  "type": "nom",
  "lemme": "ноя́брь",
  "fr": "novembre",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "mois",
  "irregularite": null,
  "sg": [
   "ноя́брь",
   "ноября́",
   "ноябрю́",
   "ноя́брь",
   "ноябрём",
   "ноябре́"
  ],
  "pl": [
   "ноябри́",
   "ноябре́й",
   "ноября́м",
   "ноябри́",
   "ноября́ми",
   "ноября́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_dekabr",
  "type": "nom",
  "lemme": "дека́брь",
  "fr": "décembre",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "mois",
  "irregularite": null,
  "sg": [
   "дека́брь",
   "декабря́",
   "декабрю́",
   "дека́брь",
   "декабрём",
   "декабре́"
  ],
  "pl": [
   "декабри́",
   "декабре́й",
   "декабря́м",
   "декабри́",
   "декабря́ми",
   "декабря́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_i",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_rasskaz",
  "type": "nom",
  "lemme": "расска́з",
  "fr": "récit, nouvelle",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "etude",
  "irregularite": null,
  "sg": [
   "расска́з",
   "расска́за",
   "расска́зу",
   "расска́з",
   "расска́зом",
   "расска́зе"
  ],
  "pl": [
   "расска́зы",
   "расска́зов",
   "расска́зам",
   "расска́зы",
   "расска́зами",
   "расска́зах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov"
  ]
 },
 {
  "id": "lex_zhurnal",
  "type": "nom",
  "lemme": "журна́л",
  "fr": "revue",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "etude",
  "irregularite": null,
  "sg": [
   "журна́л",
   "журна́ла",
   "журна́лу",
   "журна́л",
   "журна́лом",
   "журна́ле"
  ],
  "pl": [
   "журна́лы",
   "журна́лов",
   "журна́лам",
   "журна́лы",
   "журна́лами",
   "журна́лах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_gazeta",
  "type": "nom",
  "lemme": "газе́та",
  "fr": "journal",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "etude",
  "irregularite": null,
  "sg": [
   "газе́та",
   "газе́ты",
   "газе́те",
   "газе́ту",
   "газе́той",
   "газе́те"
  ],
  "pl": [
   "газе́ты",
   "газе́т",
   "газе́там",
   "газе́ты",
   "газе́тами",
   "газе́тах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_y"
  ]
 },
 {
  "id": "lex_film",
  "type": "nom",
  "lemme": "фильм",
  "fr": "film",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "loisirs",
  "irregularite": null,
  "sg": [
   "фильм",
   "фи́льма",
   "фи́льму",
   "фильм",
   "фи́льмом",
   "фи́льме"
  ],
  "pl": [
   "фи́льмы",
   "фи́льмов",
   "фи́льмам",
   "фи́льмы",
   "фи́льмами",
   "фи́льмах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om"
  ]
 },
 {
  "id": "lex_muzyka",
  "type": "nom",
  "lemme": "му́зыка",
  "fr": "musique",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "loisirs",
  "irregularite": "singulier_seul",
  "sg": [
   "му́зыка",
   "му́зыки",
   "му́зыке",
   "му́зыку",
   "му́зыкой",
   "му́зыке"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_bilet",
  "type": "nom",
  "lemme": "биле́т",
  "fr": "billet",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "loisirs",
  "irregularite": null,
  "sg": [
   "биле́т",
   "биле́та",
   "биле́ту",
   "биле́т",
   "биле́том",
   "биле́те"
  ],
  "pl": [
   "биле́ты",
   "биле́тов",
   "биле́там",
   "биле́ты",
   "биле́тами",
   "биле́тах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_dengi",
  "type": "nom",
  "lemme": "де́ньги",
  "fr": "argent",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "argent",
  "irregularite": "pluriel_seul",
  "sg": null,
  "pl": [
   "де́ньги",
   "де́нег",
   "деньга́м",
   "де́ньги",
   "деньга́ми",
   "деньга́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_voyelle_mobile"
  ]
 },
 {
  "id": "lex_rubl",
  "type": "nom",
  "lemme": "рубль",
  "fr": "rouble",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "argent",
  "irregularite": null,
  "sg": [
   "рубль",
   "рубля́",
   "рублю́",
   "рубль",
   "рублём",
   "рубле́"
  ],
  "pl": [
   "рубли́",
   "рубле́й",
   "рубля́м",
   "рубли́",
   "рубля́ми",
   "рубля́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ej",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_dollar",
  "type": "nom",
  "lemme": "до́ллар",
  "fr": "dollar",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "argent",
  "irregularite": null,
  "sg": [
   "до́ллар",
   "до́ллара",
   "до́ллару",
   "до́ллар",
   "до́лларом",
   "до́лларе"
  ],
  "pl": [
   "до́ллары",
   "до́лларов",
   "до́лларам",
   "до́ллары",
   "до́лларами",
   "до́лларах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_frank",
  "type": "nom",
  "lemme": "фра́нк",
  "fr": "franc",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "argent",
  "irregularite": null,
  "sg": [
   "франк",
   "фра́нка",
   "фра́нку",
   "франк",
   "фра́нком",
   "фра́нке"
  ],
  "pl": [
   "фра́нки",
   "фра́нков",
   "фра́нкам",
   "фра́нки",
   "фра́нками",
   "фра́нках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u"
  ]
 },
 {
  "id": "lex_evro",
  "type": "nom",
  "lemme": "е́вро",
  "fr": "euro",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "argent",
  "irregularite": "indeclinable",
  "sg": [
   "е́вро",
   "е́вро",
   "е́вро",
   "е́вро",
   "е́вро",
   "е́вро"
  ],
  "pl": [
   "е́вро",
   "е́вро",
   "е́вро",
   "е́вро",
   "е́вро",
   "е́вро"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "indecl"
  ]
 },
 {
  "id": "lex_vremja",
  "type": "nom",
  "lemme": "вре́мя",
  "fr": "temps",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "temps",
  "irregularite": "irregulier",
  "sg": [
   "вре́мя",
   "вре́мени",
   "вре́мени",
   "вре́мя",
   "вре́менем",
   "вре́мени"
  ],
  "pl": [
   "времена́",
   "времён",
   "времена́м",
   "времена́",
   "времена́ми",
   "времена́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Radical en -ен-.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami",
   "prep_sg_i",
   "gen_sg_irreg",
   "genpl_voyelle_mobile",
   "nom_pl_a"
  ]
 },
 {
  "id": "lex_imja",
  "type": "nom",
  "lemme": "и́мя",
  "fr": "prénom",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "personnes",
  "irregularite": "irregulier",
  "sg": [
   "и́мя",
   "и́мени",
   "и́мени",
   "и́мя",
   "и́менем",
   "и́мени"
  ],
  "pl": [
   "имена́",
   "имён",
   "имена́м",
   "имена́",
   "имена́ми",
   "имена́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": "Radical en -ен-.",
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_i",
   "gen_sg_irreg",
   "genpl_voyelle_mobile",
   "nom_pl_a"
  ]
 },
 {
  "id": "lex_derevo",
  "type": "nom",
  "lemme": "де́рево",
  "fr": "arbre",
  "frVariantes": [],
  "genre": "n",
  "anime": false,
  "categorie": "nature",
  "irregularite": null,
  "sg": [
   "де́рево",
   "де́рева",
   "де́реву",
   "де́рево",
   "де́ревом",
   "де́реве"
  ],
  "pl": [
   "дере́вья",
   "дере́вьев",
   "дере́вьям",
   "дере́вья",
   "дере́вьями",
   "дере́вьях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om",
   "nom_pl_ya"
  ]
 },
 {
  "id": "lex_kartina",
  "type": "nom",
  "lemme": "карти́на",
  "fr": "tableau",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "loisirs",
  "irregularite": null,
  "sg": [
   "карти́на",
   "карти́ны",
   "карти́не",
   "карти́ну",
   "карти́ной",
   "карти́не"
  ],
  "pl": [
   "карти́ны",
   "карти́н",
   "карти́нам",
   "карти́ны",
   "карти́нами",
   "карти́нах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_zero",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_fotografija",
  "type": "nom",
  "lemme": "фотогра́фия",
  "fr": "photographie",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "loisirs",
  "irregularite": null,
  "sg": [
   "фотогра́фия",
   "фотогра́фии",
   "фотогра́фии",
   "фотогра́фию",
   "фотогра́фией",
   "фотогра́фии"
  ],
  "pl": [
   "фотогра́фии",
   "фотогра́фий",
   "фотогра́фиям",
   "фотогра́фии",
   "фотогра́фиями",
   "фотогра́фиях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_pl_ami",
   "prep_sg_ii",
   "gen_sg_ii",
   "dat_sg_ii",
   "genpl_ij"
  ]
 },
 {
  "id": "lex_jazyk",
  "type": "nom",
  "lemme": "язы́к",
  "fr": "langue",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "etude",
  "irregularite": null,
  "sg": [
   "язы́к",
   "языка́",
   "языку́",
   "язы́к",
   "языко́м",
   "языке́"
  ],
  "pl": [
   "языки́",
   "языко́в",
   "языка́м",
   "языки́",
   "языка́ми",
   "языка́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_i"
  ]
 },
 {
  "id": "lex_istorija",
  "type": "nom",
  "lemme": "исто́рия",
  "fr": "histoire",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "etude",
  "irregularite": null,
  "sg": [
   "исто́рия",
   "исто́рии",
   "исто́рии",
   "исто́рию",
   "исто́рией",
   "исто́рии"
  ],
  "pl": [
   "исто́рии",
   "исто́рий",
   "исто́риям",
   "исто́рии",
   "исто́риями",
   "исто́риях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_oj",
   "genpl_ij",
   "prep_pl_ah",
   "prep_sg_ii",
   "gen_sg_ii",
   "dat_sg_ii"
  ]
 },
 {
  "id": "lex_literatura",
  "type": "nom",
  "lemme": "литерату́ра",
  "fr": "littérature",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "etude",
  "irregularite": "singulier_seul",
  "sg": [
   "литерату́ра",
   "литерату́ры",
   "литерату́ре",
   "литерату́ру",
   "литерату́рой",
   "литерату́ре"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_biologija",
  "type": "nom",
  "lemme": "биоло́гия",
  "fr": "biologie",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "etude",
  "irregularite": "singulier_seul",
  "sg": [
   "биоло́гия",
   "биоло́гии",
   "биоло́гии",
   "биоло́гию",
   "биоло́гией",
   "биоло́гии"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_ii",
   "gen_sg_ii",
   "dat_sg_ii"
  ]
 },
 {
  "id": "lex_medicina",
  "type": "nom",
  "lemme": "медици́на",
  "fr": "médecine",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "etude",
  "irregularite": "singulier_seul",
  "sg": [
   "медици́на",
   "медици́ны",
   "медици́не",
   "медици́ну",
   "медици́ной",
   "медици́не"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_sg_f_u",
   "instr_sg_oj"
  ]
 },
 {
  "id": "lex_genetika",
  "type": "nom",
  "lemme": "гене́тика",
  "fr": "génétique",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "etude",
  "irregularite": "singulier_seul",
  "sg": [
   "гене́тика",
   "гене́тики",
   "гене́тике",
   "гене́тику",
   "гене́тикой",
   "гене́тике"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_geografija",
  "type": "nom",
  "lemme": "геогра́фия",
  "fr": "géographie",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "etude",
  "irregularite": "singulier_seul",
  "sg": [
   "геогра́фия",
   "геогра́фии",
   "геогра́фии",
   "геогра́фию",
   "геогра́фией",
   "геогра́фии"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_ii",
   "gen_sg_ii",
   "dat_sg_ii"
  ]
 },
 {
  "id": "lex_ekonomika",
  "type": "nom",
  "lemme": "эконо́мика",
  "fr": "économie",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "etude",
  "irregularite": "singulier_seul",
  "sg": [
   "эконо́мика",
   "эконо́мики",
   "эконо́мике",
   "эконо́мику",
   "эконо́микой",
   "эконо́мике"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_e",
   "acc_sg_f_u",
   "instr_sg_oj"
  ]
 },
 {
  "id": "lex_psihologija",
  "type": "nom",
  "lemme": "психоло́гия",
  "fr": "psychologie",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "etude",
  "irregularite": "singulier_seul",
  "sg": [
   "психоло́гия",
   "психоло́гии",
   "психоло́гии",
   "психоло́гию",
   "психоло́гией",
   "психоло́гии"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_ii",
   "gen_sg_ii",
   "dat_sg_ii"
  ]
 },
 {
  "id": "lex_matematika",
  "type": "nom",
  "lemme": "матема́тика",
  "fr": "mathématiques",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "etude",
  "irregularite": "singulier_seul",
  "sg": [
   "матема́тика",
   "матема́тики",
   "матема́тике",
   "матема́тику",
   "матема́тикой",
   "матема́тике"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_himija",
  "type": "nom",
  "lemme": "хи́мия",
  "fr": "chimie",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "etude",
  "irregularite": "singulier_seul",
  "sg": [
   "хи́мия",
   "хи́мии",
   "хи́мии",
   "хи́мию",
   "хи́мией",
   "хи́мии"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_ii",
   "dat_sg_ii",
   "acc_sg_f_u",
   "prep_sg_ii"
  ]
 },
 {
  "id": "lex_prazdnik",
  "type": "nom",
  "lemme": "пра́здник",
  "fr": "fête",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "temps",
  "irregularite": null,
  "sg": [
   "пра́здник",
   "пра́здника",
   "пра́зднику",
   "пра́здник",
   "пра́здником",
   "пра́зднике"
  ],
  "pl": [
   "пра́здники",
   "пра́здников",
   "пра́здникам",
   "пра́здники",
   "пра́здниками",
   "пра́здниках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah"
  ]
 },
 {
  "id": "lex_komiks",
  "type": "nom",
  "lemme": "ко́микс",
  "fr": "bande dessinée",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "loisirs",
  "irregularite": null,
  "sg": [
   "ко́микс",
   "ко́микса",
   "ко́миксу",
   "ко́микс",
   "ко́миксом",
   "ко́миксе"
  ],
  "pl": [
   "ко́миксы",
   "ко́миксов",
   "ко́миксам",
   "ко́миксы",
   "ко́миксами",
   "ко́миксах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_novost",
  "type": "nom",
  "lemme": "но́вость",
  "fr": "nouvelle, information",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "etude",
  "irregularite": null,
  "sg": [
   "но́вость",
   "но́вости",
   "но́вости",
   "но́вость",
   "но́востью",
   "но́вости"
  ],
  "pl": [
   "но́вости",
   "новосте́й",
   "новостя́м",
   "но́вости",
   "новостя́ми",
   "новостя́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_i",
   "gen_sg_i",
   "dat_sg_i",
   "acc_sg_f_zero",
   "instr_sg_ju",
   "genpl_ej"
  ]
 },
 {
  "id": "lex_klassika",
  "type": "nom",
  "lemme": "класси́ка",
  "fr": "classiques",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "loisirs",
  "irregularite": "singulier_seul",
  "sg": [
   "класси́ка",
   "класси́ки",
   "класси́ке",
   "класси́ку",
   "класси́кой",
   "класси́ке"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_sg_f_u",
   "instr_sg_oj"
  ]
 },
 {
  "id": "lex_detektiv",
  "type": "nom",
  "lemme": "детекти́в",
  "fr": "roman policier",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "loisirs",
  "irregularite": null,
  "sg": [
   "детекти́в",
   "детекти́ва",
   "детекти́ву",
   "детекти́в",
   "детекти́вом",
   "детекти́ве"
  ],
  "pl": [
   "детекти́вы",
   "детекти́вов",
   "детекти́вам",
   "детекти́вы",
   "детекти́вами",
   "детекти́вах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_pl_ah",
   "dat_pl_am",
   "instr_pl_ami"
  ]
 },
 {
  "id": "lex_fantastika",
  "type": "nom",
  "lemme": "фанта́стика",
  "fr": "science-fiction",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "loisirs",
  "irregularite": "singulier_seul",
  "sg": [
   "фанта́стика",
   "фанта́стики",
   "фанта́стике",
   "фанта́стику",
   "фанта́стикой",
   "фанта́стике"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_i"
  ]
 },
 {
  "id": "lex_kommentarij",
  "type": "nom",
  "lemme": "коммента́рий",
  "fr": "commentaire",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "etude",
  "irregularite": null,
  "sg": [
   "коммента́рий",
   "коммента́рия",
   "коммента́рию",
   "коммента́рий",
   "коммента́рием",
   "коммента́рии"
  ],
  "pl": [
   "коммента́рии",
   "коммента́риев",
   "коммента́риям",
   "коммента́рии",
   "коммента́риями",
   "коммента́риях"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "dat_sg_u",
   "instr_sg_om",
   "prep_sg_ii"
  ]
 },
 {
  "id": "lex_matreshka",
  "type": "nom",
  "lemme": "матрёшка",
  "fr": "matriochka",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "objets",
  "irregularite": null,
  "sg": [
   "матрёшка",
   "матрёшки",
   "матрёшке",
   "матрёшку",
   "матрёшкой",
   "матрёшке"
  ],
  "pl": [
   "матрёшки",
   "матрёшек",
   "матрёшкам",
   "матрёшки",
   "матрёшками",
   "матрёшках"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "genpl_voyelle_mobile",
   "prep_pl_ah",
   "dat_pl_am"
  ]
 },
 {
  "id": "lex_vodka",
  "type": "nom",
  "lemme": "во́дка",
  "fr": "vodka",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": "singulier_seul",
  "sg": [
   "во́дка",
   "во́дки",
   "во́дке",
   "во́дку",
   "во́дкой",
   "во́дке"
  ],
  "pl": null,
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e"
  ]
 },
 {
  "id": "lex_vitamin",
  "type": "nom",
  "lemme": "витами́н",
  "fr": "vitamine",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "nourriture",
  "irregularite": null,
  "sg": [
   "витами́н",
   "витами́на",
   "витами́ну",
   "витами́н",
   "витами́ном",
   "витами́не"
  ],
  "pl": [
   "витами́ны",
   "витами́нов",
   "витами́нам",
   "витами́ны",
   "витами́нами",
   "витами́нах"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "gen_sg_a",
   "dat_sg_u"
  ]
 },
 {
  "id": "lex_cvet",
  "type": "nom",
  "lemme": "цвет",
  "fr": "couleur",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "couleurs",
  "irregularite": null,
  "sg": [
   "цвет",
   "цве́та",
   "цве́ту",
   "цвет",
   "цве́том",
   "цве́те"
  ],
  "pl": [
   "цвета́",
   "цвето́в",
   "цвета́м",
   "цвета́",
   "цвета́ми",
   "цвета́х"
  ],
  "prep": null,
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "instr_sg_om",
   "genpl_ov",
   "prep_pl_ah",
   "nom_pl_a"
  ]
 },
 {
  "id": "lex_rossija",
  "type": "nom",
  "lemme": "Росси́я",
  "fr": "Russie",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": "singulier_seul",
  "sg": [
   "Росси́я",
   "Ро́ссии",
   "Ро́ссии",
   "Ро́ссию",
   "Ро́ссией",
   "Ро́ссии"
  ],
  "pl": null,
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_ii",
   "gen_sg_ii",
   "dat_sg_ii",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_peterburg",
  "type": "nom",
  "lemme": "Петербу́рг",
  "fr": "Saint-Pétersbourg",
  "frVariantes": [],
  "genre": "m",
  "anime": false,
  "categorie": "lieux",
  "irregularite": "singulier_seul",
  "sg": [
   "Петербу́рг",
   "Петербу́рга",
   "Петербу́ргу",
   "Петербу́рг",
   "Петербу́ргом",
   "Петербу́рге"
  ],
  "pl": null,
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "prep_sg_e",
   "gen_sg_a",
   "dat_sg_u",
   "prep_v_na"
  ]
 },
 {
  "id": "lex_italija",
  "type": "nom",
  "lemme": "Ита́лия",
  "fr": "Italie",
  "frVariantes": [],
  "genre": "f",
  "anime": false,
  "categorie": "lieux",
  "irregularite": "singulier_seul",
  "sg": [
   "Ита́лия",
   "Ита́лии",
   "Ита́лии",
   "Ита́лию",
   "Ита́лией",
   "Ита́лии"
  ],
  "pl": null,
  "prep": "в",
  "loc2": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "variantes": {},
  "sousCategories": [
   "acc_sg_f_u",
   "instr_sg_oj",
   "prep_sg_ii",
   "gen_sg_ii",
   "dat_sg_ii",
   "prep_v_na"
  ]
 },
 {
  "id": "adj_novyj",
  "type": "adjectif",
  "lemme": "но́вый",
  "fr": "neuf, nouveau",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "но́вый",
   "но́вого",
   "но́вому",
   "но́вый",
   "но́вым",
   "но́вом"
  ],
  "f": [
   "но́вая",
   "но́вой",
   "но́вой",
   "но́вую",
   "но́вой",
   "но́вой"
  ],
  "n": [
   "но́вое",
   "но́вого",
   "но́вому",
   "но́вое",
   "но́вым",
   "но́вом"
  ],
  "pl": [
   "но́вые",
   "но́вых",
   "но́вым",
   "но́вые",
   "но́выми",
   "но́вых"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_staryj",
  "type": "adjectif",
  "lemme": "ста́рый",
  "fr": "vieux, ancien",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "ста́рый",
   "ста́рого",
   "ста́рому",
   "ста́рый",
   "ста́рым",
   "ста́ром"
  ],
  "f": [
   "ста́рая",
   "ста́рой",
   "ста́рой",
   "ста́рую",
   "ста́рой",
   "ста́рой"
  ],
  "n": [
   "ста́рое",
   "ста́рого",
   "ста́рому",
   "ста́рое",
   "ста́рым",
   "ста́ром"
  ],
  "pl": [
   "ста́рые",
   "ста́рых",
   "ста́рым",
   "ста́рые",
   "ста́рыми",
   "ста́рых"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_interesnyj",
  "type": "adjectif",
  "lemme": "интере́сный",
  "fr": "intéressant",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "интере́сный",
   "интере́сного",
   "интере́сному",
   "интере́сный",
   "интере́сным",
   "интере́сном"
  ],
  "f": [
   "интере́сная",
   "интере́сной",
   "интере́сной",
   "интере́сную",
   "интере́сной",
   "интере́сной"
  ],
  "n": [
   "интере́сное",
   "интере́сного",
   "интере́сному",
   "интере́сное",
   "интере́сным",
   "интере́сном"
  ],
  "pl": [
   "интере́сные",
   "интере́сных",
   "интере́сным",
   "интере́сные",
   "интере́сными",
   "интере́сных"
  ],
  "adverbe": "интере́сно",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_krasivyj",
  "type": "adjectif",
  "lemme": "краси́вый",
  "fr": "beau",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "краси́вый",
   "краси́вого",
   "краси́вому",
   "краси́вый",
   "краси́вым",
   "краси́вом"
  ],
  "f": [
   "краси́вая",
   "краси́вой",
   "краси́вой",
   "краси́вую",
   "краси́вой",
   "краси́вой"
  ],
  "n": [
   "краси́вое",
   "краси́вого",
   "краси́вому",
   "краси́вое",
   "краси́вым",
   "краси́вом"
  ],
  "pl": [
   "краси́вые",
   "краси́вых",
   "краси́вым",
   "краси́вые",
   "краси́выми",
   "краси́вых"
  ],
  "adverbe": "краси́во",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_trudnyj",
  "type": "adjectif",
  "lemme": "тру́дный",
  "fr": "difficile",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "тру́дный",
   "тру́дного",
   "тру́дному",
   "тру́дный",
   "тру́дным",
   "тру́дном"
  ],
  "f": [
   "тру́дная",
   "тру́дной",
   "тру́дной",
   "тру́дную",
   "тру́дной",
   "тру́дной"
  ],
  "n": [
   "тру́дное",
   "тру́дного",
   "тру́дному",
   "тру́дное",
   "тру́дным",
   "тру́дном"
  ],
  "pl": [
   "тру́дные",
   "тру́дных",
   "тру́дным",
   "тру́дные",
   "тру́дными",
   "тру́дных"
  ],
  "adverbe": "тру́дно",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_bystryj",
  "type": "adjectif",
  "lemme": "бы́стрый",
  "fr": "rapide",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "бы́стрый",
   "бы́строго",
   "бы́строму",
   "бы́стрый",
   "бы́стрым",
   "бы́стром"
  ],
  "f": [
   "бы́страя",
   "бы́строй",
   "бы́строй",
   "бы́струю",
   "бы́строй",
   "бы́строй"
  ],
  "n": [
   "бы́строе",
   "бы́строго",
   "бы́строму",
   "бы́строе",
   "бы́стрым",
   "бы́стром"
  ],
  "pl": [
   "бы́стрые",
   "бы́стрых",
   "бы́стрым",
   "бы́стрые",
   "бы́стрыми",
   "бы́стрых"
  ],
  "adverbe": "бы́стро",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_medlennyj",
  "type": "adjectif",
  "lemme": "ме́дленный",
  "fr": "lent",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "ме́дленный",
   "ме́дленного",
   "ме́дленному",
   "ме́дленный",
   "ме́дленным",
   "ме́дленном"
  ],
  "f": [
   "ме́дленная",
   "ме́дленной",
   "ме́дленной",
   "ме́дленную",
   "ме́дленной",
   "ме́дленной"
  ],
  "n": [
   "ме́дленное",
   "ме́дленного",
   "ме́дленному",
   "ме́дленное",
   "ме́дленным",
   "ме́дленном"
  ],
  "pl": [
   "ме́дленные",
   "ме́дленных",
   "ме́дленным",
   "ме́дленные",
   "ме́дленными",
   "ме́дленных"
  ],
  "adverbe": "ме́дленно",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_vnimatelnyj",
  "type": "adjectif",
  "lemme": "внима́тельный",
  "fr": "attentif",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "внима́тельный",
   "внима́тельного",
   "внима́тельному",
   "внима́тельный",
   "внима́тельным",
   "внима́тельном"
  ],
  "f": [
   "внима́тельная",
   "внима́тельной",
   "внима́тельной",
   "внима́тельную",
   "внима́тельной",
   "внима́тельной"
  ],
  "n": [
   "внима́тельное",
   "внима́тельного",
   "внима́тельному",
   "внима́тельное",
   "внима́тельным",
   "внима́тельном"
  ],
  "pl": [
   "внима́тельные",
   "внима́тельных",
   "внима́тельным",
   "внима́тельные",
   "внима́тельными",
   "внима́тельных"
  ],
  "adverbe": "внима́тельно",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_pravilnyj",
  "type": "adjectif",
  "lemme": "пра́вильный",
  "fr": "correct",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "пра́вильный",
   "пра́вильного",
   "пра́вильному",
   "пра́вильный",
   "пра́вильным",
   "пра́вильном"
  ],
  "f": [
   "пра́вильная",
   "пра́вильной",
   "пра́вильной",
   "пра́вильную",
   "пра́вильной",
   "пра́вильной"
  ],
  "n": [
   "пра́вильное",
   "пра́вильного",
   "пра́вильному",
   "пра́вильное",
   "пра́вильным",
   "пра́вильном"
  ],
  "pl": [
   "пра́вильные",
   "пра́вильных",
   "пра́вильным",
   "пра́вильные",
   "пра́вильными",
   "пра́вильных"
  ],
  "adverbe": "пра́вильно",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_ponjatnyj",
  "type": "adjectif",
  "lemme": "поня́тный",
  "fr": "compréhensible",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "поня́тный",
   "поня́тного",
   "поня́тному",
   "поня́тный",
   "поня́тным",
   "поня́тном"
  ],
  "f": [
   "поня́тная",
   "поня́тной",
   "поня́тной",
   "поня́тную",
   "поня́тной",
   "поня́тной"
  ],
  "n": [
   "поня́тное",
   "поня́тного",
   "поня́тному",
   "поня́тное",
   "поня́тным",
   "поня́тном"
  ],
  "pl": [
   "поня́тные",
   "поня́тных",
   "поня́тным",
   "поня́тные",
   "поня́тными",
   "поня́тных"
  ],
  "adverbe": "поня́тно",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_prekrasnyj",
  "type": "adjectif",
  "lemme": "прекра́сный",
  "fr": "magnifique",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "прекра́сный",
   "прекра́сного",
   "прекра́сному",
   "прекра́сный",
   "прекра́сным",
   "прекра́сном"
  ],
  "f": [
   "прекра́сная",
   "прекра́сной",
   "прекра́сной",
   "прекра́сную",
   "прекра́сной",
   "прекра́сной"
  ],
  "n": [
   "прекра́сное",
   "прекра́сного",
   "прекра́сному",
   "прекра́сное",
   "прекра́сным",
   "прекра́сном"
  ],
  "pl": [
   "прекра́сные",
   "прекра́сных",
   "прекра́сным",
   "прекра́сные",
   "прекра́сными",
   "прекра́сных"
  ],
  "adverbe": "прекра́сно",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_skuchnyj",
  "type": "adjectif",
  "lemme": "ску́чный",
  "fr": "ennuyeux",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "ску́чный",
   "ску́чного",
   "ску́чному",
   "ску́чный",
   "ску́чным",
   "ску́чном"
  ],
  "f": [
   "ску́чная",
   "ску́чной",
   "ску́чной",
   "ску́чную",
   "ску́чной",
   "ску́чной"
  ],
  "n": [
   "ску́чное",
   "ску́чного",
   "ску́чному",
   "ску́чное",
   "ску́чным",
   "ску́чном"
  ],
  "pl": [
   "ску́чные",
   "ску́чных",
   "ску́чным",
   "ску́чные",
   "ску́чными",
   "ску́чных"
  ],
  "adverbe": "ску́чно",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_vkusnyj",
  "type": "adjectif",
  "lemme": "вку́сный",
  "fr": "savoureux",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "вку́сный",
   "вку́сного",
   "вку́сному",
   "вку́сный",
   "вку́сным",
   "вку́сном"
  ],
  "f": [
   "вку́сная",
   "вку́сной",
   "вку́сной",
   "вку́сную",
   "вку́сной",
   "вку́сной"
  ],
  "n": [
   "вку́сное",
   "вку́сного",
   "вку́сному",
   "вку́сное",
   "вку́сным",
   "вку́сном"
  ],
  "pl": [
   "вку́сные",
   "вку́сных",
   "вку́сным",
   "вку́сные",
   "вку́сными",
   "вку́сных"
  ],
  "adverbe": "вку́сно",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_shumnyj",
  "type": "adjectif",
  "lemme": "шу́мный",
  "fr": "bruyant",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "шу́мный",
   "шу́много",
   "шу́мному",
   "шу́мный",
   "шу́мным",
   "шу́мном"
  ],
  "f": [
   "шу́мная",
   "шу́мной",
   "шу́мной",
   "шу́мную",
   "шу́мной",
   "шу́мной"
  ],
  "n": [
   "шу́мное",
   "шу́много",
   "шу́мному",
   "шу́мное",
   "шу́мным",
   "шу́мном"
  ],
  "pl": [
   "шу́мные",
   "шу́мных",
   "шу́мным",
   "шу́мные",
   "шу́мными",
   "шу́мных"
  ],
  "adverbe": "шу́мно",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_elegantnyj",
  "type": "adjectif",
  "lemme": "элега́нтный",
  "fr": "élégant",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "элега́нтный",
   "элега́нтного",
   "элега́нтному",
   "элега́нтный",
   "элега́нтным",
   "элега́нтном"
  ],
  "f": [
   "элега́нтная",
   "элега́нтной",
   "элега́нтной",
   "элега́нтную",
   "элега́нтной",
   "элега́нтной"
  ],
  "n": [
   "элега́нтное",
   "элега́нтного",
   "элега́нтному",
   "элега́нтное",
   "элега́нтным",
   "элега́нтном"
  ],
  "pl": [
   "элега́нтные",
   "элега́нтных",
   "элега́нтным",
   "элега́нтные",
   "элега́нтными",
   "элега́нтных"
  ],
  "adverbe": "элега́нтно",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_aktivnyj",
  "type": "adjectif",
  "lemme": "акти́вный",
  "fr": "actif",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "акти́вный",
   "акти́вного",
   "акти́вному",
   "акти́вный",
   "акти́вным",
   "акти́вном"
  ],
  "f": [
   "акти́вная",
   "акти́вной",
   "акти́вной",
   "акти́вную",
   "акти́вной",
   "акти́вной"
  ],
  "n": [
   "акти́вное",
   "акти́вного",
   "акти́вному",
   "акти́вное",
   "акти́вным",
   "акти́вном"
  ],
  "pl": [
   "акти́вные",
   "акти́вных",
   "акти́вным",
   "акти́вные",
   "акти́вными",
   "акти́вных"
  ],
  "adverbe": "акти́вно",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_zdorovyj",
  "type": "adjectif",
  "lemme": "здоро́вый",
  "fr": "sain, en bonne santé",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "здоро́вый",
   "здоро́вого",
   "здоро́вому",
   "здоро́вый",
   "здоро́вым",
   "здоро́вом"
  ],
  "f": [
   "здоро́вая",
   "здоро́вой",
   "здоро́вой",
   "здоро́вую",
   "здоро́вой",
   "здоро́вой"
  ],
  "n": [
   "здоро́вое",
   "здоро́вого",
   "здоро́вому",
   "здоро́вое",
   "здоро́вым",
   "здоро́вом"
  ],
  "pl": [
   "здоро́вые",
   "здоро́вых",
   "здоро́вым",
   "здоро́вые",
   "здоро́выми",
   "здоро́вых"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_ljubimyj",
  "type": "adjectif",
  "lemme": "люби́мый",
  "fr": "préféré",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "люби́мый",
   "люби́мого",
   "люби́мому",
   "люби́мый",
   "люби́мым",
   "люби́мом"
  ],
  "f": [
   "люби́мая",
   "люби́мой",
   "люби́мой",
   "люби́мую",
   "люби́мой",
   "люби́мой"
  ],
  "n": [
   "люби́мое",
   "люби́мого",
   "люби́мому",
   "люби́мое",
   "люби́мым",
   "люби́мом"
  ],
  "pl": [
   "люби́мые",
   "люби́мых",
   "люби́мым",
   "люби́мые",
   "люби́мыми",
   "люби́мых"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_deshevyj",
  "type": "adjectif",
  "lemme": "дешёвый",
  "fr": "bon marché",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "дешёвый",
   "дешёвого",
   "дешёвому",
   "дешёвый",
   "дешёвым",
   "дешёвом"
  ],
  "f": [
   "дешёвая",
   "дешёвой",
   "дешёвой",
   "дешёвую",
   "дешёвой",
   "дешёвой"
  ],
  "n": [
   "дешёвое",
   "дешёвого",
   "дешёвому",
   "дешёвое",
   "дешёвым",
   "дешёвом"
  ],
  "pl": [
   "дешёвые",
   "дешёвых",
   "дешёвым",
   "дешёвые",
   "дешёвыми",
   "дешёвых"
  ],
  "adverbe": "дёшево",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_opasnyj",
  "type": "adjectif",
  "lemme": "опа́сный",
  "fr": "dangereux",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "опа́сный",
   "опа́сного",
   "опа́сному",
   "опа́сный",
   "опа́сным",
   "опа́сном"
  ],
  "f": [
   "опа́сная",
   "опа́сной",
   "опа́сной",
   "опа́сную",
   "опа́сной",
   "опа́сной"
  ],
  "n": [
   "опа́сное",
   "опа́сного",
   "опа́сному",
   "опа́сное",
   "опа́сным",
   "опа́сном"
  ],
  "pl": [
   "опа́сные",
   "опа́сных",
   "опа́сным",
   "опа́сные",
   "опа́сными",
   "опа́сных"
  ],
  "adverbe": "опа́сно",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_solenyj",
  "type": "adjectif",
  "lemme": "солёный",
  "fr": "salé",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "qualite",
  "m": [
   "солёный",
   "солёного",
   "солёному",
   "солёный",
   "солёным",
   "солёном"
  ],
  "f": [
   "солёная",
   "солёной",
   "солёной",
   "солёную",
   "солёной",
   "солёной"
  ],
  "n": [
   "солёное",
   "солёного",
   "солёному",
   "солёное",
   "солёным",
   "солёном"
  ],
  "pl": [
   "солёные",
   "солёных",
   "солёным",
   "солёные",
   "солёными",
   "солёных"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_molodoj",
  "type": "adjectif",
  "lemme": "молодо́й",
  "fr": "jeune",
  "frVariantes": [],
  "classe": "dur_fin",
  "categorie": "qualite",
  "m": [
   "молодо́й",
   "молодо́го",
   "молодо́му",
   "молодо́й",
   "молоды́м",
   "молодо́м"
  ],
  "f": [
   "молода́я",
   "молодо́й",
   "молодо́й",
   "молоду́ю",
   "молодо́й",
   "молодо́й"
  ],
  "n": [
   "молодо́е",
   "молодо́го",
   "молодо́му",
   "молодо́е",
   "молоды́м",
   "молодо́м"
  ],
  "pl": [
   "молоды́е",
   "молоды́х",
   "молоды́м",
   "молоды́е",
   "молоды́ми",
   "молоды́х"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_rodnoj",
  "type": "adjectif",
  "lemme": "родно́й",
  "fr": "natal, maternel",
  "frVariantes": [],
  "classe": "dur_fin",
  "categorie": "qualite",
  "m": [
   "родно́й",
   "родно́го",
   "родно́му",
   "родно́й",
   "родны́м",
   "родно́м"
  ],
  "f": [
   "родна́я",
   "родно́й",
   "родно́й",
   "родну́ю",
   "родно́й",
   "родно́й"
  ],
  "n": [
   "родно́е",
   "родно́го",
   "родно́му",
   "родно́е",
   "родны́м",
   "родно́м"
  ],
  "pl": [
   "родны́е",
   "родны́х",
   "родны́м",
   "родны́е",
   "родны́ми",
   "родны́х"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_malenkij",
  "type": "adjectif",
  "lemme": "ма́ленький",
  "fr": "petit",
  "frVariantes": [],
  "classe": "velaire",
  "categorie": "qualite",
  "m": [
   "ма́ленький",
   "ма́ленького",
   "ма́ленькому",
   "ма́ленький",
   "ма́леньким",
   "ма́леньком"
  ],
  "f": [
   "ма́ленькая",
   "ма́ленькой",
   "ма́ленькой",
   "ма́ленькую",
   "ма́ленькой",
   "ма́ленькой"
  ],
  "n": [
   "ма́ленькое",
   "ма́ленького",
   "ма́ленькому",
   "ма́ленькое",
   "ма́леньким",
   "ма́леньком"
  ],
  "pl": [
   "ма́ленькие",
   "ма́леньких",
   "ма́леньким",
   "ма́ленькие",
   "ма́ленькими",
   "ма́леньких"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_tihij",
  "type": "adjectif",
  "lemme": "ти́хий",
  "fr": "silencieux",
  "frVariantes": [],
  "classe": "velaire",
  "categorie": "qualite",
  "m": [
   "ти́хий",
   "ти́хого",
   "ти́хому",
   "ти́хий",
   "ти́хим",
   "ти́хом"
  ],
  "f": [
   "ти́хая",
   "ти́хой",
   "ти́хой",
   "ти́хую",
   "ти́хой",
   "ти́хой"
  ],
  "n": [
   "ти́хое",
   "ти́хого",
   "ти́хому",
   "ти́хое",
   "ти́хим",
   "ти́хом"
  ],
  "pl": [
   "ти́хие",
   "ти́хих",
   "ти́хим",
   "ти́хие",
   "ти́хими",
   "ти́хих"
  ],
  "adverbe": "ти́хо",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_gromkij",
  "type": "adjectif",
  "lemme": "гро́мкий",
  "fr": "sonore, fort",
  "frVariantes": [],
  "classe": "velaire",
  "categorie": "qualite",
  "m": [
   "гро́мкий",
   "гро́мкого",
   "гро́мкому",
   "гро́мкий",
   "гро́мким",
   "гро́мком"
  ],
  "f": [
   "гро́мкая",
   "гро́мкой",
   "гро́мкой",
   "гро́мкую",
   "гро́мкой",
   "гро́мкой"
  ],
  "n": [
   "гро́мкое",
   "гро́мкого",
   "гро́мкому",
   "гро́мкое",
   "гро́мким",
   "гро́мком"
  ],
  "pl": [
   "гро́мкие",
   "гро́мких",
   "гро́мким",
   "гро́мкие",
   "гро́мкими",
   "гро́мких"
  ],
  "adverbe": "гро́мко",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_legkij",
  "type": "adjectif",
  "lemme": "лёгкий",
  "fr": "facile, léger",
  "frVariantes": [],
  "classe": "velaire",
  "categorie": "qualite",
  "m": [
   "лёгкий",
   "лёгкого",
   "лёгкому",
   "лёгкий",
   "лёгким",
   "лёгком"
  ],
  "f": [
   "лёгкая",
   "лёгкой",
   "лёгкой",
   "лёгкую",
   "лёгкой",
   "лёгкой"
  ],
  "n": [
   "лёгкое",
   "лёгкого",
   "лёгкому",
   "лёгкое",
   "лёгким",
   "лёгком"
  ],
  "pl": [
   "лёгкие",
   "лёгких",
   "лёгким",
   "лёгкие",
   "лёгкими",
   "лёгких"
  ],
  "adverbe": "легко́",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_russkij",
  "type": "adjectif",
  "lemme": "ру́сский",
  "fr": "russe",
  "frVariantes": [],
  "classe": "velaire",
  "categorie": "qualite",
  "m": [
   "ру́сский",
   "ру́сского",
   "ру́сскому",
   "ру́сский",
   "ру́сским",
   "ру́сском"
  ],
  "f": [
   "ру́сская",
   "ру́сской",
   "ру́сской",
   "ру́сскую",
   "ру́сской",
   "ру́сской"
  ],
  "n": [
   "ру́сское",
   "ру́сского",
   "ру́сскому",
   "ру́сское",
   "ру́сским",
   "ру́сском"
  ],
  "pl": [
   "ру́сские",
   "ру́сских",
   "ру́сским",
   "ру́сские",
   "ру́сскими",
   "ру́сских"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_plohoj",
  "type": "adjectif",
  "lemme": "плохо́й",
  "fr": "mauvais",
  "frVariantes": [],
  "classe": "velaire_fin",
  "categorie": "qualite",
  "m": [
   "плохо́й",
   "плохо́го",
   "плохо́му",
   "плохо́й",
   "плохи́м",
   "плохо́м"
  ],
  "f": [
   "плоха́я",
   "плохо́й",
   "плохо́й",
   "плоху́ю",
   "плохо́й",
   "плохо́й"
  ],
  "n": [
   "плохо́е",
   "плохо́го",
   "плохо́му",
   "плохо́е",
   "плохи́м",
   "плохо́м"
  ],
  "pl": [
   "плохи́е",
   "плохи́х",
   "плохи́м",
   "плохи́е",
   "плохи́ми",
   "плохи́х"
  ],
  "adverbe": "пло́хо",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_dorogoj",
  "type": "adjectif",
  "lemme": "дорого́й",
  "fr": "cher",
  "frVariantes": [],
  "classe": "velaire_fin",
  "categorie": "qualite",
  "m": [
   "дорого́й",
   "дорого́го",
   "дорого́му",
   "дорого́й",
   "дороги́м",
   "дорого́м"
  ],
  "f": [
   "дорога́я",
   "дорого́й",
   "дорого́й",
   "дорогу́ю",
   "дорого́й",
   "дорого́й"
  ],
  "n": [
   "дорого́е",
   "дорого́го",
   "дорого́му",
   "дорого́е",
   "дороги́м",
   "дорого́м"
  ],
  "pl": [
   "дороги́е",
   "дороги́х",
   "дороги́м",
   "дороги́е",
   "дороги́ми",
   "дороги́х"
  ],
  "adverbe": "до́рого",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_horoshij",
  "type": "adjectif",
  "lemme": "хоро́ший",
  "fr": "bon",
  "frVariantes": [],
  "classe": "sifflante",
  "categorie": "qualite",
  "m": [
   "хоро́ший",
   "хоро́шего",
   "хоро́шему",
   "хоро́ший",
   "хоро́шим",
   "хоро́шем"
  ],
  "f": [
   "хоро́шая",
   "хоро́шей",
   "хоро́шей",
   "хоро́шую",
   "хоро́шей",
   "хоро́шей"
  ],
  "n": [
   "хоро́шее",
   "хоро́шего",
   "хоро́шему",
   "хоро́шее",
   "хоро́шим",
   "хоро́шем"
  ],
  "pl": [
   "хоро́шие",
   "хоро́ших",
   "хоро́шим",
   "хоро́шие",
   "хоро́шими",
   "хоро́ших"
  ],
  "adverbe": "хорошо́",
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_bolshoj",
  "type": "adjectif",
  "lemme": "большо́й",
  "fr": "grand",
  "frVariantes": [],
  "classe": "sifflante_fin",
  "categorie": "qualite",
  "m": [
   "большо́й",
   "большо́го",
   "большо́му",
   "большо́й",
   "больши́м",
   "большо́м"
  ],
  "f": [
   "больша́я",
   "большо́й",
   "большо́й",
   "большу́ю",
   "большо́й",
   "большо́й"
  ],
  "n": [
   "большо́е",
   "большо́го",
   "большо́му",
   "большо́е",
   "больши́м",
   "большо́м"
  ],
  "pl": [
   "больши́е",
   "больши́х",
   "больши́м",
   "больши́е",
   "больши́ми",
   "больши́х"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_sinij",
  "type": "adjectif",
  "lemme": "си́ний",
  "fr": "bleu foncé",
  "frVariantes": [],
  "classe": "mou",
  "categorie": "couleurs",
  "m": [
   "си́ний",
   "си́него",
   "си́нему",
   "си́ний",
   "си́ним",
   "си́нем"
  ],
  "f": [
   "си́няя",
   "си́ней",
   "си́ней",
   "си́нюю",
   "си́ней",
   "си́ней"
  ],
  "n": [
   "си́нее",
   "си́него",
   "си́нему",
   "си́нее",
   "си́ним",
   "си́нем"
  ],
  "pl": [
   "си́ние",
   "си́них",
   "си́ним",
   "си́ние",
   "си́ними",
   "си́них"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_belyj",
  "type": "adjectif",
  "lemme": "бе́лый",
  "fr": "blanc",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "couleurs",
  "m": [
   "бе́лый",
   "бе́лого",
   "бе́лому",
   "бе́лый",
   "бе́лым",
   "бе́лом"
  ],
  "f": [
   "бе́лая",
   "бе́лой",
   "бе́лой",
   "бе́лую",
   "бе́лой",
   "бе́лой"
  ],
  "n": [
   "бе́лое",
   "бе́лого",
   "бе́лому",
   "бе́лое",
   "бе́лым",
   "бе́лом"
  ],
  "pl": [
   "бе́лые",
   "бе́лых",
   "бе́лым",
   "бе́лые",
   "бе́лыми",
   "бе́лых"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_chernyj",
  "type": "adjectif",
  "lemme": "чёрный",
  "fr": "noir",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "couleurs",
  "m": [
   "чёрный",
   "чёрного",
   "чёрному",
   "чёрный",
   "чёрным",
   "чёрном"
  ],
  "f": [
   "чёрная",
   "чёрной",
   "чёрной",
   "чёрную",
   "чёрной",
   "чёрной"
  ],
  "n": [
   "чёрное",
   "чёрного",
   "чёрному",
   "чёрное",
   "чёрным",
   "чёрном"
  ],
  "pl": [
   "чёрные",
   "чёрных",
   "чёрным",
   "чёрные",
   "чёрными",
   "чёрных"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_krasnyj",
  "type": "adjectif",
  "lemme": "кра́сный",
  "fr": "rouge",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "couleurs",
  "m": [
   "кра́сный",
   "кра́сного",
   "кра́сному",
   "кра́сный",
   "кра́сным",
   "кра́сном"
  ],
  "f": [
   "кра́сная",
   "кра́сной",
   "кра́сной",
   "кра́сную",
   "кра́сной",
   "кра́сной"
  ],
  "n": [
   "кра́сное",
   "кра́сного",
   "кра́сному",
   "кра́сное",
   "кра́сным",
   "кра́сном"
  ],
  "pl": [
   "кра́сные",
   "кра́сных",
   "кра́сным",
   "кра́сные",
   "кра́сными",
   "кра́сных"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_rozovyj",
  "type": "adjectif",
  "lemme": "ро́зовый",
  "fr": "rose",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "couleurs",
  "m": [
   "ро́зовый",
   "ро́зового",
   "ро́зовому",
   "ро́зовый",
   "ро́зовым",
   "ро́зовом"
  ],
  "f": [
   "ро́зовая",
   "ро́зовой",
   "ро́зовой",
   "ро́зовую",
   "ро́зовой",
   "ро́зовой"
  ],
  "n": [
   "ро́зовое",
   "ро́зового",
   "ро́зовому",
   "ро́зовое",
   "ро́зовым",
   "ро́зовом"
  ],
  "pl": [
   "ро́зовые",
   "ро́зовых",
   "ро́зовым",
   "ро́зовые",
   "ро́зовыми",
   "ро́зовых"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_zelenyj",
  "type": "adjectif",
  "lemme": "зелёный",
  "fr": "vert",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "couleurs",
  "m": [
   "зелёный",
   "зелёного",
   "зелёному",
   "зелёный",
   "зелёным",
   "зелёном"
  ],
  "f": [
   "зелёная",
   "зелёной",
   "зелёной",
   "зелёную",
   "зелёной",
   "зелёной"
  ],
  "n": [
   "зелёное",
   "зелёного",
   "зелёному",
   "зелёное",
   "зелёным",
   "зелёном"
  ],
  "pl": [
   "зелёные",
   "зелёных",
   "зелёным",
   "зелёные",
   "зелёными",
   "зелёных"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_zheltyj",
  "type": "adjectif",
  "lemme": "жёлтый",
  "fr": "jaune",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "couleurs",
  "m": [
   "жёлтый",
   "жёлтого",
   "жёлтому",
   "жёлтый",
   "жёлтым",
   "жёлтом"
  ],
  "f": [
   "жёлтая",
   "жёлтой",
   "жёлтой",
   "жёлтую",
   "жёлтой",
   "жёлтой"
  ],
  "n": [
   "жёлтое",
   "жёлтого",
   "жёлтому",
   "жёлтое",
   "жёлтым",
   "жёлтом"
  ],
  "pl": [
   "жёлтые",
   "жёлтых",
   "жёлтым",
   "жёлтые",
   "жёлтыми",
   "жёлтых"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_seryj",
  "type": "adjectif",
  "lemme": "се́рый",
  "fr": "gris",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "couleurs",
  "m": [
   "се́рый",
   "се́рого",
   "се́рому",
   "се́рый",
   "се́рым",
   "се́ром"
  ],
  "f": [
   "се́рая",
   "се́рой",
   "се́рой",
   "се́рую",
   "се́рой",
   "се́рой"
  ],
  "n": [
   "се́рое",
   "се́рого",
   "се́рому",
   "се́рое",
   "се́рым",
   "се́ром"
  ],
  "pl": [
   "се́рые",
   "се́рых",
   "се́рым",
   "се́рые",
   "се́рыми",
   "се́рых"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_oranzhevyj",
  "type": "adjectif",
  "lemme": "ора́нжевый",
  "fr": "orange",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "couleurs",
  "m": [
   "ора́нжевый",
   "ора́нжевого",
   "ора́нжевому",
   "ора́нжевый",
   "ора́нжевым",
   "ора́нжевом"
  ],
  "f": [
   "ора́нжевая",
   "ора́нжевой",
   "ора́нжевой",
   "ора́нжевую",
   "ора́нжевой",
   "ора́нжевой"
  ],
  "n": [
   "ора́нжевое",
   "ора́нжевого",
   "ора́нжевому",
   "ора́нжевое",
   "ора́нжевым",
   "ора́нжевом"
  ],
  "pl": [
   "ора́нжевые",
   "ора́нжевых",
   "ора́нжевым",
   "ора́нжевые",
   "ора́нжевыми",
   "ора́нжевых"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_fioletovyj",
  "type": "adjectif",
  "lemme": "фиоле́товый",
  "fr": "violet",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "couleurs",
  "m": [
   "фиоле́товый",
   "фиоле́тового",
   "фиоле́товому",
   "фиоле́товый",
   "фиоле́товым",
   "фиоле́товом"
  ],
  "f": [
   "фиоле́товая",
   "фиоле́товой",
   "фиоле́товой",
   "фиоле́товую",
   "фиоле́товой",
   "фиоле́товой"
  ],
  "n": [
   "фиоле́товое",
   "фиоле́тового",
   "фиоле́товому",
   "фиоле́товое",
   "фиоле́товым",
   "фиоле́товом"
  ],
  "pl": [
   "фиоле́товые",
   "фиоле́товых",
   "фиоле́товым",
   "фиоле́товые",
   "фиоле́товыми",
   "фиоле́товых"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 },
 {
  "id": "adj_korichnevyj",
  "type": "adjectif",
  "lemme": "кори́чневый",
  "fr": "marron",
  "frVariantes": [],
  "classe": "dur",
  "categorie": "couleurs",
  "m": [
   "кори́чневый",
   "кори́чневого",
   "кори́чневому",
   "кори́чневый",
   "кори́чневым",
   "кори́чневом"
  ],
  "f": [
   "кори́чневая",
   "кори́чневой",
   "кори́чневой",
   "кори́чневую",
   "кори́чневой",
   "кори́чневой"
  ],
  "n": [
   "кори́чневое",
   "кори́чневого",
   "кори́чневому",
   "кори́чневое",
   "кори́чневым",
   "кори́чневом"
  ],
  "pl": [
   "кори́чневые",
   "кори́чневых",
   "кори́чневым",
   "кори́чневые",
   "кори́чневыми",
   "кори́чневых"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_nom",
   "adj_gen",
   "adj_dat"
  ]
 },
 {
  "id": "adj_goluboj",
  "type": "adjectif",
  "lemme": "голубо́й",
  "fr": "bleu clair",
  "frVariantes": [],
  "classe": "dur_fin",
  "categorie": "couleurs",
  "m": [
   "голубо́й",
   "голубо́го",
   "голубо́му",
   "голубо́й",
   "голубы́м",
   "голубо́м"
  ],
  "f": [
   "голуба́я",
   "голубо́й",
   "голубо́й",
   "голубу́ю",
   "голубо́й",
   "голубо́й"
  ],
  "n": [
   "голубо́е",
   "голубо́го",
   "голубо́му",
   "голубо́е",
   "голубы́м",
   "голубо́м"
  ],
  "pl": [
   "голубы́е",
   "голубы́х",
   "голубы́м",
   "голубы́е",
   "голубы́ми",
   "голубы́х"
  ],
  "adverbe": null,
  "bloc": 1,
  "note": null,
  "aValider": false,
  "sourceProf": true,
  "irregularite": null,
  "variantes": {},
  "sousCategories": [
   "adj_acc",
   "adj_instr",
   "adj_prep"
  ]
 }
];

if (typeof window !== 'undefined') window.LEXIQUE = LEXIQUE;
