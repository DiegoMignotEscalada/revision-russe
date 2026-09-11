// Bloc 2 : verbes, pronoms, comparaison, négation, numéraux.
// Fichier de DONNÉES. Source de vérité, éditable à la main.
// Produit initialement par tools/generer-bloc2.py.

const BLOC2 = {
 "items": [
  {
   "id": "fx_idti",
   "type": "flexion",
   "lemme": "идти́",
   "fr": "aller à pied",
   "precision": "en ce moment",
   "serie": false,
   "frVariantes": [],
   "groupe": "mouvement",
   "categorie": "mouvement",
   "aspect": "unidirectionnel",
   "paire": "ходи́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "ja",
     "libelle": "я",
     "forme": "иду́"
    },
    {
     "cle": "ty",
     "libelle": "ты",
     "forme": "идёшь"
    },
    {
     "cle": "on",
     "libelle": "он / она́",
     "forme": "идёт"
    },
    {
     "cle": "my",
     "libelle": "мы",
     "forme": "идём"
    },
    {
     "cle": "vy",
     "libelle": "вы",
     "forme": "идёте"
    },
    {
     "cle": "oni",
     "libelle": "они́",
     "forme": "иду́т"
    }
   ],
   "sousCategories": [
    "verbe_mouvement_conj",
    "verbe_present_sg",
    "verbe_present_pl"
   ],
   "bloc": 2,
   "note": "Un trajet en cours, dans une seule direction : сейча́с, сего́дня.",
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_hodit",
   "type": "flexion",
   "lemme": "ходи́ть",
   "fr": "aller à pied",
   "precision": "habituellement",
   "serie": false,
   "frVariantes": [],
   "groupe": "mouvement",
   "categorie": "mouvement",
   "aspect": "multidirectionnel",
   "paire": "идти́",
   "irregularite": null,
   "cellules": [
    {
     "cle": "ja",
     "libelle": "я",
     "forme": "хожу́"
    },
    {
     "cle": "ty",
     "libelle": "ты",
     "forme": "хо́дишь"
    },
    {
     "cle": "on",
     "libelle": "он / она́",
     "forme": "хо́дит"
    },
    {
     "cle": "my",
     "libelle": "мы",
     "forme": "хо́дим"
    },
    {
     "cle": "vy",
     "libelle": "вы",
     "forme": "хо́дите"
    },
    {
     "cle": "oni",
     "libelle": "они́",
     "forme": "хо́дят"
    }
   ],
   "sousCategories": [
    "verbe_mouvement_conj",
    "verbe_present_sg",
    "verbe_present_pl"
   ],
   "bloc": 2,
   "note": "Aller-retour ou habitude : ка́ждый день, обы́чно, ча́сто, всегда́, иногда́, ре́дко, никогда́ не.",
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_ehat",
   "type": "flexion",
   "lemme": "е́хать",
   "fr": "aller en véhicule",
   "precision": "en ce moment",
   "serie": false,
   "frVariantes": [],
   "groupe": "mouvement",
   "categorie": "mouvement",
   "aspect": "unidirectionnel",
   "paire": "е́здить",
   "irregularite": null,
   "cellules": [
    {
     "cle": "ja",
     "libelle": "я",
     "forme": "е́ду"
    },
    {
     "cle": "ty",
     "libelle": "ты",
     "forme": "е́дешь"
    },
    {
     "cle": "on",
     "libelle": "он / она́",
     "forme": "е́дет"
    },
    {
     "cle": "my",
     "libelle": "мы",
     "forme": "е́дем"
    },
    {
     "cle": "vy",
     "libelle": "вы",
     "forme": "е́дете"
    },
    {
     "cle": "oni",
     "libelle": "они́",
     "forme": "е́дут"
    }
   ],
   "sousCategories": [
    "verbe_mouvement_conj",
    "verbe_present_sg"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_ezdit",
   "type": "flexion",
   "lemme": "е́здить",
   "fr": "aller en véhicule",
   "precision": "habituellement",
   "serie": false,
   "frVariantes": [],
   "groupe": "mouvement",
   "categorie": "mouvement",
   "aspect": "multidirectionnel",
   "paire": "е́хать",
   "irregularite": null,
   "cellules": [
    {
     "cle": "ja",
     "libelle": "я",
     "forme": "е́зжу"
    },
    {
     "cle": "ty",
     "libelle": "ты",
     "forme": "е́здишь"
    },
    {
     "cle": "on",
     "libelle": "он / она́",
     "forme": "е́здит"
    },
    {
     "cle": "my",
     "libelle": "мы",
     "forme": "е́здим"
    },
    {
     "cle": "vy",
     "libelle": "вы",
     "forme": "е́здите"
    },
    {
     "cle": "oni",
     "libelle": "они́",
     "forme": "е́здят"
    }
   ],
   "sousCategories": [
    "verbe_mouvement_conj",
    "verbe_present_pl"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_letet",
   "type": "flexion",
   "lemme": "лете́ть",
   "fr": "voler",
   "precision": "en ce moment",
   "serie": false,
   "frVariantes": [],
   "groupe": "mouvement",
   "categorie": "mouvement",
   "aspect": "unidirectionnel",
   "paire": "лета́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "ja",
     "libelle": "я",
     "forme": "лечу́"
    },
    {
     "cle": "ty",
     "libelle": "ты",
     "forme": "лети́шь"
    },
    {
     "cle": "on",
     "libelle": "он / она́",
     "forme": "лети́т"
    },
    {
     "cle": "my",
     "libelle": "мы",
     "forme": "лети́м"
    },
    {
     "cle": "vy",
     "libelle": "вы",
     "forme": "лети́те"
    },
    {
     "cle": "oni",
     "libelle": "они́",
     "forme": "летя́т"
    }
   ],
   "sousCategories": [
    "verbe_mouvement_conj",
    "verbe_present_sg"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_letat",
   "type": "flexion",
   "lemme": "лета́ть",
   "fr": "voler",
   "precision": "habituellement",
   "serie": false,
   "frVariantes": [],
   "groupe": "mouvement",
   "categorie": "mouvement",
   "aspect": "multidirectionnel",
   "paire": "лете́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "ja",
     "libelle": "я",
     "forme": "лета́ю"
    },
    {
     "cle": "ty",
     "libelle": "ты",
     "forme": "лета́ешь"
    },
    {
     "cle": "on",
     "libelle": "он / она́",
     "forme": "лета́ет"
    },
    {
     "cle": "my",
     "libelle": "мы",
     "forme": "лета́ем"
    },
    {
     "cle": "vy",
     "libelle": "вы",
     "forme": "лета́ете"
    },
    {
     "cle": "oni",
     "libelle": "они́",
     "forme": "лета́ют"
    }
   ],
   "sousCategories": [
    "verbe_mouvement_conj",
    "verbe_present_pl"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_plyt",
   "type": "flexion",
   "lemme": "плыть",
   "fr": "nager, naviguer",
   "precision": "en ce moment",
   "serie": false,
   "frVariantes": [],
   "groupe": "mouvement",
   "categorie": "mouvement",
   "aspect": "unidirectionnel",
   "paire": "пла́вать",
   "irregularite": null,
   "cellules": [
    {
     "cle": "ja",
     "libelle": "я",
     "forme": "плыву́"
    },
    {
     "cle": "ty",
     "libelle": "ты",
     "forme": "плывёшь"
    },
    {
     "cle": "on",
     "libelle": "он / она́",
     "forme": "плывёт"
    },
    {
     "cle": "my",
     "libelle": "мы",
     "forme": "плывём"
    },
    {
     "cle": "vy",
     "libelle": "вы",
     "forme": "плывёте"
    },
    {
     "cle": "oni",
     "libelle": "они́",
     "forme": "плыву́т"
    }
   ],
   "sousCategories": [
    "verbe_mouvement_conj",
    "verbe_present_sg"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_plavat",
   "type": "flexion",
   "lemme": "пла́вать",
   "fr": "nager",
   "precision": "habituellement",
   "serie": false,
   "frVariantes": [],
   "groupe": "mouvement",
   "categorie": "mouvement",
   "aspect": "multidirectionnel",
   "paire": "плыть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "ja",
     "libelle": "я",
     "forme": "пла́ваю"
    },
    {
     "cle": "ty",
     "libelle": "ты",
     "forme": "пла́ваешь"
    },
    {
     "cle": "on",
     "libelle": "он / она́",
     "forme": "пла́вает"
    },
    {
     "cle": "my",
     "libelle": "мы",
     "forme": "пла́ваем"
    },
    {
     "cle": "vy",
     "libelle": "вы",
     "forme": "пла́ваете"
    },
    {
     "cle": "oni",
     "libelle": "они́",
     "forme": "пла́вают"
    }
   ],
   "sousCategories": [
    "verbe_mouvement_conj",
    "verbe_present_pl"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_bezhat",
   "type": "flexion",
   "lemme": "бежа́ть",
   "fr": "courir",
   "precision": "en ce moment",
   "serie": false,
   "frVariantes": [],
   "groupe": "mouvement",
   "categorie": "mouvement",
   "aspect": "unidirectionnel",
   "paire": "бе́гать",
   "irregularite": null,
   "cellules": [
    {
     "cle": "ja",
     "libelle": "я",
     "forme": "бегу́"
    },
    {
     "cle": "ty",
     "libelle": "ты",
     "forme": "бежи́шь"
    },
    {
     "cle": "on",
     "libelle": "он / она́",
     "forme": "бежи́т"
    },
    {
     "cle": "my",
     "libelle": "мы",
     "forme": "бежи́м"
    },
    {
     "cle": "vy",
     "libelle": "вы",
     "forme": "бежи́те"
    },
    {
     "cle": "oni",
     "libelle": "они́",
     "forme": "бегу́т"
    }
   ],
   "sousCategories": [
    "verbe_mouvement_conj",
    "verbe_present_sg",
    "verbe_present_pl"
   ],
   "bloc": 2,
   "note": "Conjugaison mixte : бегу́ et бегу́т en -г-, le reste en -ж-.",
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_begat",
   "type": "flexion",
   "lemme": "бе́гать",
   "fr": "courir",
   "precision": "habituellement",
   "serie": false,
   "frVariantes": [],
   "groupe": "mouvement",
   "categorie": "mouvement",
   "aspect": "multidirectionnel",
   "paire": "бежа́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "ja",
     "libelle": "я",
     "forme": "бе́гаю"
    },
    {
     "cle": "ty",
     "libelle": "ты",
     "forme": "бе́гаешь"
    },
    {
     "cle": "on",
     "libelle": "он / она́",
     "forme": "бе́гает"
    },
    {
     "cle": "my",
     "libelle": "мы",
     "forme": "бе́гаем"
    },
    {
     "cle": "vy",
     "libelle": "вы",
     "forme": "бе́гаете"
    },
    {
     "cle": "oni",
     "libelle": "они́",
     "forme": "бе́гают"
    }
   ],
   "sousCategories": [
    "verbe_mouvement_conj",
    "verbe_present_pl"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_priezzhat",
   "type": "flexion",
   "lemme": "приезжа́ть",
   "fr": "arriver en véhicule",
   "precision": "imperfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "imperfectif",
   "paire": "прие́хать",
   "irregularite": null,
   "cellules": [
    {
     "cle": "ja",
     "libelle": "я",
     "forme": "приезжа́ю"
    },
    {
     "cle": "ty",
     "libelle": "ты",
     "forme": "приезжа́ешь"
    },
    {
     "cle": "on",
     "libelle": "он / она́",
     "forme": "приезжа́ет"
    },
    {
     "cle": "my",
     "libelle": "мы",
     "forme": "приезжа́ем"
    },
    {
     "cle": "vy",
     "libelle": "вы",
     "forme": "приезжа́ете"
    },
    {
     "cle": "oni",
     "libelle": "они́",
     "forme": "приезжа́ют"
    },
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "приезжа́л"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "приезжа́ла"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "приезжа́ло"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "приезжа́ли"
    },
    {
     "cle": "futur_ja",
     "libelle": "je (futur)",
     "forme": "бу́ду приезжа́ть"
    },
    {
     "cle": "futur_oni",
     "libelle": "ils (futur)",
     "forme": "бу́дут приезжа́ть"
    }
   ],
   "sousCategories": [
    "verbe_present_sg",
    "verbe_passe",
    "verbe_futur"
   ],
   "bloc": 2,
   "note": "Futur composé : бу́ду, бу́дешь, бу́дет, бу́дем, бу́дете, бу́дут + infinitif.",
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_priehat",
   "type": "flexion",
   "lemme": "прие́хать",
   "fr": "arriver en véhicule",
   "precision": "perfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "perfectif",
   "paire": "приезжа́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "прие́хал"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "прие́хала"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "прие́хало"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "прие́хали"
    },
    {
     "cle": "futur_ja",
     "libelle": "je (futur)",
     "forme": "прие́ду"
    },
    {
     "cle": "futur_ty",
     "libelle": "tu (futur)",
     "forme": "прие́дешь"
    },
    {
     "cle": "futur_on",
     "libelle": "il (futur)",
     "forme": "прие́дет"
    },
    {
     "cle": "futur_my",
     "libelle": "nous (futur)",
     "forme": "прие́дем"
    },
    {
     "cle": "futur_vy",
     "libelle": "vous (futur)",
     "forme": "прие́дете"
    },
    {
     "cle": "futur_oni",
     "libelle": "ils (futur)",
     "forme": "прие́дут"
    }
   ],
   "sousCategories": [
    "verbe_passe",
    "verbe_futur"
   ],
   "bloc": 2,
   "note": "Un perfectif n’a pas de présent : ses formes de type présent expriment le futur.",
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_ulybatsja",
   "type": "flexion",
   "lemme": "улыба́ться",
   "fr": "sourire",
   "precision": null,
   "serie": false,
   "frVariantes": [],
   "groupe": "reflexif",
   "categorie": "reflexif",
   "aspect": null,
   "paire": null,
   "irregularite": null,
   "cellules": [
    {
     "cle": "ja",
     "libelle": "я",
     "forme": "улыба́юсь"
    },
    {
     "cle": "ty",
     "libelle": "ты",
     "forme": "улыба́ешься"
    },
    {
     "cle": "on",
     "libelle": "он / она́",
     "forme": "улыба́ется"
    },
    {
     "cle": "my",
     "libelle": "мы",
     "forme": "улыба́емся"
    },
    {
     "cle": "vy",
     "libelle": "вы",
     "forme": "улыба́етесь"
    },
    {
     "cle": "oni",
     "libelle": "они́",
     "forme": "улыба́ются"
    },
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "улыба́лся"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "улыба́лась"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "улыба́лось"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "улыба́лись"
    }
   ],
   "sousCategories": [
    "verbe_reflexif",
    "verbe_present_sg",
    "verbe_passe"
   ],
   "bloc": 2,
   "note": "Après une consonne, -ся ; après une voyelle, -сь.",
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_bojatsja",
   "type": "flexion",
   "lemme": "боя́ться",
   "fr": "avoir peur",
   "precision": null,
   "serie": false,
   "frVariantes": [],
   "groupe": "reflexif",
   "categorie": "reflexif",
   "aspect": null,
   "paire": null,
   "irregularite": null,
   "cellules": [
    {
     "cle": "ja",
     "libelle": "я",
     "forme": "бою́сь"
    },
    {
     "cle": "ty",
     "libelle": "ты",
     "forme": "бои́шься"
    },
    {
     "cle": "on",
     "libelle": "он / она́",
     "forme": "бои́тся"
    },
    {
     "cle": "my",
     "libelle": "мы",
     "forme": "бои́мся"
    },
    {
     "cle": "vy",
     "libelle": "вы",
     "forme": "бои́тесь"
    },
    {
     "cle": "oni",
     "libelle": "они́",
     "forme": "боя́тся"
    },
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "боя́лся"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "боя́лась"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "боя́лось"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "боя́лись"
    }
   ],
   "sousCategories": [
    "verbe_reflexif",
    "verbe_present_pl",
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_pron_ja",
   "type": "flexion",
   "lemme": "я",
   "fr": "je",
   "precision": null,
   "serie": false,
   "frVariantes": [],
   "groupe": "pronom",
   "categorie": "pronom",
   "aspect": null,
   "paire": null,
   "irregularite": null,
   "cellules": [
    {
     "cle": "dat",
     "libelle": "datif",
     "forme": "мне"
    },
    {
     "cle": "dat_k",
     "libelle": "к + datif",
     "forme": "ко мне"
    }
   ],
   "sousCategories": [
    "pronom_cas"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_pron_ty",
   "type": "flexion",
   "lemme": "ты",
   "fr": "tu",
   "precision": null,
   "serie": false,
   "frVariantes": [],
   "groupe": "pronom",
   "categorie": "pronom",
   "aspect": null,
   "paire": null,
   "irregularite": null,
   "cellules": [
    {
     "cle": "dat",
     "libelle": "datif",
     "forme": "тебе́"
    },
    {
     "cle": "dat_k",
     "libelle": "к + datif",
     "forme": "к тебе́"
    }
   ],
   "sousCategories": [
    "pronom_cas"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_pron_on",
   "type": "flexion",
   "lemme": "он",
   "fr": "il",
   "precision": null,
   "serie": false,
   "frVariantes": [],
   "groupe": "pronom",
   "categorie": "pronom",
   "aspect": null,
   "paire": null,
   "irregularite": null,
   "cellules": [
    {
     "cle": "dat",
     "libelle": "datif",
     "forme": "ему́"
    },
    {
     "cle": "dat_k",
     "libelle": "к + datif",
     "forme": "к нему́"
    }
   ],
   "sousCategories": [
    "pronom_cas"
   ],
   "bloc": 2,
   "note": "Après une préposition, le pronom de 3e personne prend un н- initial.",
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_pron_ona",
   "type": "flexion",
   "lemme": "она́",
   "fr": "elle",
   "precision": null,
   "serie": false,
   "frVariantes": [],
   "groupe": "pronom",
   "categorie": "pronom",
   "aspect": null,
   "paire": null,
   "irregularite": null,
   "cellules": [
    {
     "cle": "dat",
     "libelle": "datif",
     "forme": "ей"
    },
    {
     "cle": "dat_k",
     "libelle": "к + datif",
     "forme": "к ней"
    }
   ],
   "sousCategories": [
    "pronom_cas"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_pron_ono",
   "type": "flexion",
   "lemme": "оно́",
   "fr": "il",
   "precision": "neutre",
   "serie": false,
   "frVariantes": [],
   "groupe": "pronom",
   "categorie": "pronom",
   "aspect": null,
   "paire": null,
   "irregularite": null,
   "cellules": [
    {
     "cle": "dat",
     "libelle": "datif",
     "forme": "ему́"
    },
    {
     "cle": "dat_k",
     "libelle": "к + datif",
     "forme": "к нему́"
    }
   ],
   "sousCategories": [
    "pronom_cas"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_pron_my",
   "type": "flexion",
   "lemme": "мы",
   "fr": "nous",
   "precision": null,
   "serie": false,
   "frVariantes": [],
   "groupe": "pronom",
   "categorie": "pronom",
   "aspect": null,
   "paire": null,
   "irregularite": null,
   "cellules": [
    {
     "cle": "dat",
     "libelle": "datif",
     "forme": "нам"
    },
    {
     "cle": "dat_k",
     "libelle": "к + datif",
     "forme": "к нам"
    }
   ],
   "sousCategories": [
    "pronom_cas"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_pron_vy",
   "type": "flexion",
   "lemme": "вы",
   "fr": "vous",
   "precision": null,
   "serie": false,
   "frVariantes": [],
   "groupe": "pronom",
   "categorie": "pronom",
   "aspect": null,
   "paire": null,
   "irregularite": null,
   "cellules": [
    {
     "cle": "dat",
     "libelle": "datif",
     "forme": "вам"
    },
    {
     "cle": "dat_k",
     "libelle": "к + datif",
     "forme": "к вам"
    }
   ],
   "sousCategories": [
    "pronom_cas"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_pron_oni",
   "type": "flexion",
   "lemme": "они́",
   "fr": "ils, elles",
   "precision": null,
   "serie": false,
   "frVariantes": [],
   "groupe": "pronom",
   "categorie": "pronom",
   "aspect": null,
   "paire": null,
   "irregularite": null,
   "cellules": [
    {
     "cle": "dat",
     "libelle": "datif",
     "forme": "им"
    },
    {
     "cle": "dat_k",
     "libelle": "к + datif",
     "forme": "к ним"
    }
   ],
   "sousCategories": [
    "pronom_cas"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_kotoryj",
   "type": "flexion",
   "lemme": "кото́рый",
   "fr": "qui, lequel",
   "precision": null,
   "serie": false,
   "frVariantes": [],
   "groupe": "pronom",
   "categorie": "pronom",
   "aspect": null,
   "paire": null,
   "irregularite": null,
   "cellules": [
    {
     "cle": "nom_m",
     "libelle": "nominatif masculin",
     "forme": "кото́рый"
    },
    {
     "cle": "nom_n",
     "libelle": "nominatif neutre",
     "forme": "кото́рое"
    },
    {
     "cle": "nom_f",
     "libelle": "nominatif féminin",
     "forme": "кото́рая"
    },
    {
     "cle": "nom_pl",
     "libelle": "nominatif pluriel",
     "forme": "кото́рые"
    },
    {
     "cle": "gen_m",
     "libelle": "génitif masculin et neutre",
     "forme": "кото́рого"
    },
    {
     "cle": "gen_f",
     "libelle": "génitif féminin",
     "forme": "кото́рой"
    },
    {
     "cle": "gen_pl",
     "libelle": "génitif pluriel",
     "forme": "кото́рых"
    },
    {
     "cle": "acc_f",
     "libelle": "accusatif féminin",
     "forme": "кото́рую"
    },
    {
     "cle": "prep_m",
     "libelle": "prépositionnel masculin et neutre",
     "forme": "о кото́ром"
    },
    {
     "cle": "prep_f",
     "libelle": "prépositionnel féminin",
     "forme": "о кото́рой"
    },
    {
     "cle": "prep_pl",
     "libelle": "prépositionnel pluriel",
     "forme": "о кото́рых"
    }
   ],
   "sousCategories": [
    "kotoryj"
   ],
   "bloc": 2,
   "note": "Le genre vient du nom repris ; le cas vient de la fonction dans la subordonnée.",
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_asp_pokupat",
   "type": "flexion",
   "lemme": "покупа́ть",
   "fr": "acheter",
   "precision": "imperfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "imperfectif",
   "paire": "купи́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "perfectif",
     "libelle": "partenaire perfectif",
     "forme": "купи́ть"
    },
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "покупа́л"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "покупа́ла"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "покупа́ло"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "покупа́ли"
    }
   ],
   "sousCategories": [
    "aspect_paire",
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_aspf_pokupat",
   "type": "flexion",
   "lemme": "купи́ть",
   "fr": "acheter",
   "precision": "perfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "perfectif",
   "paire": "покупа́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "купи́л"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "купи́ла"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "купи́ло"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "купи́ли"
    }
   ],
   "sousCategories": [
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_asp_gotovit",
   "type": "flexion",
   "lemme": "гото́вить",
   "fr": "préparer, cuisiner",
   "precision": "imperfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "imperfectif",
   "paire": "пригото́вить",
   "irregularite": null,
   "cellules": [
    {
     "cle": "perfectif",
     "libelle": "partenaire perfectif",
     "forme": "пригото́вить"
    },
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "гото́вил"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "гото́вила"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "гото́вило"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "гото́вили"
    }
   ],
   "sousCategories": [
    "aspect_paire",
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_aspf_gotovit",
   "type": "flexion",
   "lemme": "пригото́вить",
   "fr": "préparer, cuisiner",
   "precision": "perfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "perfectif",
   "paire": "гото́вить",
   "irregularite": null,
   "cellules": [
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "пригото́вил"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "пригото́вила"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "пригото́вило"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "пригото́вили"
    }
   ],
   "sousCategories": [
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_asp_idti_pojti",
   "type": "flexion",
   "lemme": "идти́",
   "fr": "aller",
   "precision": "imperfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "imperfectif",
   "paire": "пойти́",
   "irregularite": null,
   "cellules": [
    {
     "cle": "perfectif",
     "libelle": "partenaire perfectif",
     "forme": "пойти́"
    },
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "шёл"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "шла"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "шло"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "шли"
    }
   ],
   "sousCategories": [
    "aspect_paire",
    "verbe_passe"
   ],
   "bloc": 2,
   "note": "Passé supplétif : шёл, шла, шли.",
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_aspf_idti_pojti",
   "type": "flexion",
   "lemme": "пойти́",
   "fr": "aller",
   "precision": "perfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "perfectif",
   "paire": "идти́",
   "irregularite": null,
   "cellules": [
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "пошёл"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "пошла́"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "пошло́"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "пошли́"
    }
   ],
   "sousCategories": [
    "verbe_passe"
   ],
   "bloc": 2,
   "note": "Passé supplétif.",
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_asp_zvat",
   "type": "flexion",
   "lemme": "звать",
   "fr": "appeler",
   "precision": "imperfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "imperfectif",
   "paire": "позва́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "perfectif",
     "libelle": "partenaire perfectif",
     "forme": "позва́ть"
    },
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "звал"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "звала́"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "зва́ло"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "зва́ли"
    }
   ],
   "sousCategories": [
    "aspect_paire",
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_aspf_zvat",
   "type": "flexion",
   "lemme": "позва́ть",
   "fr": "appeler",
   "precision": "perfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "perfectif",
   "paire": "звать",
   "irregularite": null,
   "cellules": [
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "позва́л"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "позвала́"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "позва́ло"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "позва́ли"
    }
   ],
   "sousCategories": [
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_asp_darit",
   "type": "flexion",
   "lemme": "дари́ть",
   "fr": "offrir",
   "precision": "imperfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "imperfectif",
   "paire": "подари́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "perfectif",
     "libelle": "partenaire perfectif",
     "forme": "подари́ть"
    },
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "дари́л"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "дари́ла"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "дари́ло"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "дари́ли"
    }
   ],
   "sousCategories": [
    "aspect_paire",
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_aspf_darit",
   "type": "flexion",
   "lemme": "подари́ть",
   "fr": "offrir",
   "precision": "perfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "perfectif",
   "paire": "дари́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "подари́л"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "подари́ла"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "подари́ло"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "подари́ли"
    }
   ],
   "sousCategories": [
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_asp_zhelat",
   "type": "flexion",
   "lemme": "жела́ть",
   "fr": "souhaiter",
   "precision": "imperfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "imperfectif",
   "paire": "пожела́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "perfectif",
     "libelle": "partenaire perfectif",
     "forme": "пожела́ть"
    },
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "жела́л"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "жела́ла"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "жела́ло"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "жела́ли"
    }
   ],
   "sousCategories": [
    "aspect_paire",
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_aspf_zhelat",
   "type": "flexion",
   "lemme": "пожела́ть",
   "fr": "souhaiter",
   "precision": "perfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "perfectif",
   "paire": "жела́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "пожела́л"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "пожела́ла"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "пожела́ло"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "пожела́ли"
    }
   ],
   "sousCategories": [
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_asp_videt",
   "type": "flexion",
   "lemme": "ви́деть",
   "fr": "voir",
   "precision": "imperfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "imperfectif",
   "paire": "уви́деть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "perfectif",
     "libelle": "partenaire perfectif",
     "forme": "уви́деть"
    },
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "ви́дел"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "ви́дела"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "ви́дело"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "ви́дели"
    }
   ],
   "sousCategories": [
    "aspect_paire",
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_aspf_videt",
   "type": "flexion",
   "lemme": "уви́деть",
   "fr": "voir",
   "precision": "perfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "perfectif",
   "paire": "ви́деть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "уви́дел"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "уви́дела"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "уви́дело"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "уви́дели"
    }
   ],
   "sousCategories": [
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_asp_prihodit",
   "type": "flexion",
   "lemme": "приходи́ть",
   "fr": "venir, arriver à pied",
   "precision": "imperfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "imperfectif",
   "paire": "прийти́",
   "irregularite": null,
   "cellules": [
    {
     "cle": "perfectif",
     "libelle": "partenaire perfectif",
     "forme": "прийти́"
    },
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "приходи́л"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "приходи́ла"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "приходи́ло"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "приходи́ли"
    }
   ],
   "sousCategories": [
    "aspect_paire",
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_aspf_prihodit",
   "type": "flexion",
   "lemme": "прийти́",
   "fr": "venir, arriver à pied",
   "precision": "perfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "perfectif",
   "paire": "приходи́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "пришёл"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "пришла́"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "пришло́"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "пришли́"
    }
   ],
   "sousCategories": [
    "verbe_passe"
   ],
   "bloc": 2,
   "note": "Passé supplétif.",
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_asp_govorit",
   "type": "flexion",
   "lemme": "говори́ть",
   "fr": "parler, dire",
   "precision": "imperfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "imperfectif",
   "paire": "сказа́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "perfectif",
     "libelle": "partenaire perfectif",
     "forme": "сказа́ть"
    },
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "говори́л"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "говори́ла"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "говори́ло"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "говори́ли"
    }
   ],
   "sousCategories": [
    "aspect_paire",
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_aspf_govorit",
   "type": "flexion",
   "lemme": "сказа́ть",
   "fr": "parler, dire",
   "precision": "perfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "perfectif",
   "paire": "говори́ть",
   "irregularite": null,
   "cellules": [
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "сказа́л"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "сказа́ла"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "сказа́ло"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "сказа́ли"
    }
   ],
   "sousCategories": [
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_asp_nravitsja",
   "type": "flexion",
   "lemme": "нра́виться",
   "fr": "plaire",
   "precision": "imperfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "imperfectif",
   "paire": "понра́виться",
   "irregularite": null,
   "cellules": [
    {
     "cle": "perfectif",
     "libelle": "partenaire perfectif",
     "forme": "понра́виться"
    },
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "нра́вился"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "нра́вилась"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "нра́вилось"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "нра́вились"
    }
   ],
   "sousCategories": [
    "aspect_paire",
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_aspf_nravitsja",
   "type": "flexion",
   "lemme": "понра́виться",
   "fr": "plaire",
   "precision": "perfectif",
   "serie": false,
   "frVariantes": [],
   "groupe": "aspect",
   "categorie": "aspect",
   "aspect": "perfectif",
   "paire": "нра́виться",
   "irregularite": null,
   "cellules": [
    {
     "cle": "passe_m",
     "libelle": "il (passé)",
     "forme": "понра́вился"
    },
    {
     "cle": "passe_f",
     "libelle": "elle (passé)",
     "forme": "понра́вилась"
    },
    {
     "cle": "passe_n",
     "libelle": "neutre (passé)",
     "forme": "понра́вилось"
    },
    {
     "cle": "passe_pl",
     "libelle": "ils (passé)",
     "forme": "понра́вились"
    }
   ],
   "sousCategories": [
    "verbe_passe"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_negations",
   "type": "flexion",
   "lemme": "ни-…не",
   "fr": "Négations en ни-",
   "precision": "double négation : le verbe garde не",
   "serie": true,
   "frVariantes": [],
   "groupe": "negation",
   "categorie": "negation",
   "aspect": null,
   "paire": null,
   "irregularite": null,
   "cellules": [
    {
     "cle": "nikogda",
     "libelle": "jamais",
     "forme": "никогда́ не"
    },
    {
     "cle": "nikto",
     "libelle": "personne",
     "forme": "никто́ не"
    },
    {
     "cle": "nichego",
     "libelle": "rien",
     "forme": "ничего́ не"
    },
    {
     "cle": "nigde",
     "libelle": "nulle part, sans mouvement",
     "forme": "нигде́ не"
    },
    {
     "cle": "nikuda",
     "libelle": "nulle part, avec mouvement",
     "forme": "никуда́ не"
    }
   ],
   "sousCategories": [
    "negation_serie"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  },
  {
   "id": "fx_takoj_zhe",
   "type": "flexion",
   "lemme": "тако́й же",
   "fr": "Comparaison d’égalité",
   "precision": "accord avec le nom, ou forme invariable",
   "serie": true,
   "frVariantes": [],
   "groupe": "comparaison",
   "categorie": "comparaison",
   "aspect": null,
   "paire": null,
   "irregularite": null,
   "cellules": [
    {
     "cle": "m",
     "libelle": "masculin",
     "forme": "тако́й же"
    },
    {
     "cle": "f",
     "libelle": "féminin",
     "forme": "така́я же"
    },
    {
     "cle": "n",
     "libelle": "neutre",
     "forme": "тако́е же"
    },
    {
     "cle": "pl",
     "libelle": "pluriel",
     "forme": "таки́е же"
    },
    {
     "cle": "adv",
     "libelle": "devant un adverbe, invariable",
     "forme": "так же"
    },
    {
     "cle": "neg_m",
     "libelle": "négatif masculin",
     "forme": "не тако́й"
    },
    {
     "cle": "neg_n",
     "libelle": "négatif neutre",
     "forme": "не тако́е"
    },
    {
     "cle": "neg_f",
     "libelle": "négatif féminin",
     "forme": "не така́я"
    },
    {
     "cle": "neg_adv",
     "libelle": "négatif devant un adverbe",
     "forme": "не так"
    }
   ],
   "sousCategories": [
    "comparatif_serie"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "variantes": {}
  }
 ],
 "phrases": [
  {
   "id": "phr2_mvt1",
   "type": "phrase",
   "avant": "Сейча́с Макси́м на у́лице, он ",
   "reponse": "идёт",
   "apres": " в шко́лу.",
   "accepte": [],
   "indice": "идти́ / ходи́ть",
   "question": "Une fois, ou habituellement ? (сейча́с / ка́ждый день)",
   "cas": "verbe",
   "sousCategorie": "mouvement_choix",
   "fr": "Maxime est dans la rue, il va à l’école.",
   "choix": [
    "идёт",
    "хо́дит"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_mvt2",
   "type": "phrase",
   "avant": "Анто́н ре́дко е́здит на рабо́ту на маши́не, он обы́чно ",
   "reponse": "хо́дит",
   "apres": " пешко́м.",
   "accepte": [],
   "indice": "идти́ / ходи́ть",
   "question": "Une fois, ou habituellement ? (сейча́с / ка́ждый день)",
   "cas": "verbe",
   "sousCategorie": "mouvement_choix",
   "fr": "Anton va rarement au travail en voiture, il y va d’habitude à pied.",
   "choix": [
    "идёт",
    "хо́дит"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_mvt3",
   "type": "phrase",
   "avant": "Мари́на никогда́ не ",
   "reponse": "хо́дит",
   "apres": " в университе́т пешко́м.",
   "accepte": [],
   "indice": "идти́ / ходи́ть",
   "question": "Une fois, ou habituellement ? (сейча́с / ка́ждый день)",
   "cas": "verbe",
   "sousCategorie": "mouvement_choix",
   "fr": "Marina ne va jamais à l’université à pied.",
   "choix": [
    "идёт",
    "хо́дит"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_mvt4",
   "type": "phrase",
   "avant": "В воскресе́нье мы ча́сто ",
   "reponse": "хо́дим",
   "apres": " в музе́й.",
   "accepte": [],
   "indice": "идти́ / ходи́ть",
   "question": "Une fois, ou habituellement ? (сейча́с / ка́ждый день)",
   "cas": "verbe",
   "sousCategorie": "mouvement_choix",
   "fr": "Le dimanche nous allons souvent au musée.",
   "choix": [
    "идём",
    "хо́дим"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_mvt5",
   "type": "phrase",
   "avant": "О́сенью пти́цы ",
   "reponse": "летя́т",
   "apres": " на юг.",
   "accepte": [],
   "indice": "лете́ть / лета́ть",
   "question": "Une fois, ou habituellement ? (сейча́с / ка́ждый день)",
   "cas": "verbe",
   "sousCategorie": "mouvement_choix",
   "fr": "En automne les oiseaux volent vers le sud.",
   "choix": [
    "лета́ют",
    "летя́т"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_mvt6",
   "type": "phrase",
   "avant": "Мы ча́сто ",
   "reponse": "лета́ем",
   "apres": " в Гре́цию.",
   "accepte": [],
   "indice": "лете́ть / лета́ть",
   "question": "Une fois, ou habituellement ? (сейча́с / ка́ждый день)",
   "cas": "verbe",
   "sousCategorie": "mouvement_choix",
   "fr": "Nous allons souvent en Grèce en avion.",
   "choix": [
    "лета́ем",
    "лети́м"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_mvt7",
   "type": "phrase",
   "avant": "Ко́шка ",
   "reponse": "бежи́т",
   "apres": " от соба́ки.",
   "accepte": [],
   "indice": "бежа́ть / бе́гать",
   "question": "Une fois, ou habituellement ? (сейча́с / ка́ждый день)",
   "cas": "verbe",
   "sousCategorie": "mouvement_choix",
   "fr": "Le chat fuit le chien.",
   "choix": [
    "бе́гает",
    "бежи́т"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_mvt8",
   "type": "phrase",
   "avant": "Футболи́сты мно́го ",
   "reponse": "бе́гают",
   "apres": ".",
   "accepte": [],
   "indice": "бежа́ть / бе́гать",
   "question": "Une fois, ou habituellement ? (сейча́с / ка́ждый день)",
   "cas": "verbe",
   "sousCategorie": "mouvement_choix",
   "fr": "Les footballeurs courent beaucoup.",
   "choix": [
    "бе́гают",
    "бегу́т"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_mvt9",
   "type": "phrase",
   "avant": "Мы ",
   "reponse": "плывём",
   "apres": " на Барбадо́с.",
   "accepte": [],
   "indice": "плыть / пла́вать",
   "question": "Une fois, ou habituellement ? (сейча́с / ка́ждый день)",
   "cas": "verbe",
   "sousCategorie": "mouvement_choix",
   "fr": "Nous naviguons vers la Barbade.",
   "choix": [
    "пла́ваем",
    "плывём"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_mvt10",
   "type": "phrase",
   "avant": "Я ",
   "reponse": "пла́ваю",
   "apres": " ка́ждое у́тро.",
   "accepte": [],
   "indice": "плыть / пла́вать",
   "question": "Une fois, ou habituellement ? (сейча́с / ка́ждый день)",
   "cas": "verbe",
   "sousCategorie": "mouvement_choix",
   "fr": "Je nage tous les matins.",
   "choix": [
    "пла́ваю",
    "плыву́"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_asp1",
   "type": "phrase",
   "avant": "Вчера́ я ",
   "reponse": "купи́л",
   "apres": " но́вое пальто́ — оди́н раз, ре́зультат.",
   "accepte": [],
   "indice": "покупа́ть / купи́ть",
   "question": "Processus ou résultat ?",
   "cas": "verbe",
   "sousCategorie": "aspect_choix",
   "fr": "Hier j’ai acheté un manteau.",
   "choix": [
    "купи́л",
    "покупа́л"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_asp2",
   "type": "phrase",
   "avant": "Ра́ньше я ча́сто ",
   "reponse": "покупа́л",
   "apres": " газе́ты.",
   "accepte": [],
   "indice": "покупа́ть / купи́ть",
   "question": "Processus ou résultat ?",
   "cas": "verbe",
   "sousCategorie": "aspect_choix",
   "fr": "Avant j’achetais souvent des journaux.",
   "choix": [
    "купи́л",
    "покупа́л"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_asp3",
   "type": "phrase",
   "avant": "Она́ до́лго ",
   "reponse": "гото́вила",
   "apres": " обе́д.",
   "accepte": [],
   "indice": "гото́вить / пригото́вить",
   "question": "Processus ou résultat ?",
   "cas": "verbe",
   "sousCategorie": "aspect_choix",
   "fr": "Elle a longtemps préparé le déjeuner.",
   "choix": [
    "гото́вила",
    "пригото́вила"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_asp4",
   "type": "phrase",
   "avant": "Она́ уже́ ",
   "reponse": "пригото́вила",
   "apres": " обе́д.",
   "accepte": [],
   "indice": "гото́вить / пригото́вить",
   "question": "Processus ou résultat ?",
   "cas": "verbe",
   "sousCategorie": "aspect_choix",
   "fr": "Elle a déjà préparé le déjeuner.",
   "choix": [
    "гото́вила",
    "пригото́вила"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_asp5",
   "type": "phrase",
   "avant": "Он ка́ждый день ",
   "reponse": "говори́л",
   "apres": " с ма́мой по телефо́ну.",
   "accepte": [],
   "indice": "говори́ть / сказа́ть",
   "question": "Processus ou résultat ?",
   "cas": "verbe",
   "sousCategorie": "aspect_choix",
   "fr": "Il parlait chaque jour au téléphone avec sa mère.",
   "choix": [
    "говори́л",
    "сказа́л"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_asp6",
   "type": "phrase",
   "avant": "Он ничего́ не ",
   "reponse": "сказа́л",
   "apres": ".",
   "accepte": [],
   "indice": "говори́ть / сказа́ть",
   "question": "Processus ou résultat ?",
   "cas": "verbe",
   "sousCategorie": "aspect_choix",
   "fr": "Il n’a rien dit.",
   "choix": [
    "говори́л",
    "сказа́л"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_asp7",
   "type": "phrase",
   "avant": "Я до́лго не ",
   "reponse": "ви́дел",
   "apres": " сестру́.",
   "accepte": [],
   "indice": "ви́деть / уви́деть",
   "question": "Processus ou résultat ?",
   "cas": "verbe",
   "sousCategorie": "aspect_choix",
   "fr": "Je n’avais pas vu ma sœur depuis longtemps.",
   "choix": [
    "ви́дел",
    "уви́дел"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_asp8",
   "type": "phrase",
   "avant": "Вдруг я ",
   "reponse": "уви́дел",
   "apres": " её на пло́щади.",
   "accepte": [],
   "indice": "ви́деть / уви́деть",
   "question": "Processus ou résultat ?",
   "cas": "verbe",
   "sousCategorie": "aspect_choix",
   "fr": "Soudain je l’ai vue sur la place.",
   "choix": [
    "ви́дел",
    "уви́дел"
   ],
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_dat1",
   "type": "phrase",
   "avant": "Учи́тель говори́т ",
   "reponse": "мне",
   "apres": " о рабо́те.",
   "accepte": [],
   "indice": "я",
   "question": "À qui ? (кому?)",
   "cas": "pronom",
   "sousCategorie": "pronom_phrase",
   "fr": "Le professeur me parle du travail.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_dat2",
   "type": "phrase",
   "avant": "Я звоню́ ",
   "reponse": "ему́",
   "apres": " ка́ждый ве́чер.",
   "accepte": [],
   "indice": "он",
   "question": "À qui ? (кому?)",
   "cas": "pronom",
   "sousCategorie": "pronom_phrase",
   "fr": "Je lui téléphone chaque soir.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_dat3",
   "type": "phrase",
   "avant": "Мы идём ",
   "reponse": "к ней",
   "apres": ".",
   "accepte": [],
   "indice": "она́",
   "question": "À qui ? (кому?)",
   "cas": "pronom",
   "sousCategorie": "pronom_phrase",
   "fr": "Nous allons chez elle.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_dat4",
   "type": "phrase",
   "avant": "Она́ помога́ет ",
   "reponse": "нам",
   "apres": ".",
   "accepte": [],
   "indice": "мы",
   "question": "À qui ? (кому?)",
   "cas": "pronom",
   "sousCategorie": "pronom_phrase",
   "fr": "Elle nous aide.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_dat5",
   "type": "phrase",
   "avant": "Я скуча́ю по ",
   "reponse": "ним",
   "apres": ".",
   "accepte": [],
   "indice": "они́",
   "question": "À qui ? (кому?)",
   "cas": "pronom",
   "sousCategorie": "pronom_phrase",
   "fr": "Ils me manquent.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_dat6",
   "type": "phrase",
   "avant": "Он подари́л ",
   "reponse": "тебе́",
   "apres": " кни́гу.",
   "accepte": [],
   "indice": "ты",
   "question": "À qui ? (кому?)",
   "cas": "pronom",
   "sousCategorie": "pronom_phrase",
   "fr": "Il t’a offert un livre.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_neg1",
   "type": "phrase",
   "avant": "Мари́на ",
   "reponse": "никогда́ не",
   "apres": " хо́дит в университе́т пешко́м.",
   "accepte": [],
   "indice": "ни-…не",
   "question": "Négation double : mot en ни- et не",
   "cas": "negation",
   "sousCategorie": "negation_mot",
   "fr": "Marina ne va jamais à l’université à pied.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_neg2",
   "type": "phrase",
   "avant": "",
   "reponse": "Никто́ не",
   "apres": " зна́ет э́того челове́ка.",
   "accepte": [],
   "indice": "ни-…не",
   "question": "Négation double : mot en ни- et не",
   "cas": "negation",
   "sousCategorie": "negation_mot",
   "fr": "Personne ne connaît cet homme.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_neg3",
   "type": "phrase",
   "avant": "Он ",
   "reponse": "ничего́ не",
   "apres": " сказа́л.",
   "accepte": [],
   "indice": "ни-…не",
   "question": "Négation double : mot en ни- et не",
   "cas": "negation",
   "sousCategorie": "negation_mot",
   "fr": "Il n’a rien dit.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_neg4",
   "type": "phrase",
   "avant": "Мы ",
   "reponse": "нигде́ не",
   "apres": " бы́ли.",
   "accepte": [],
   "indice": "ни-…не",
   "question": "Négation double : mot en ни- et не",
   "cas": "negation",
   "sousCategorie": "negation_mot",
   "fr": "Nous n’avons été nulle part.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_neg5",
   "type": "phrase",
   "avant": "Ле́том я ",
   "reponse": "никуда́ не",
   "apres": " е́здил.",
   "accepte": [],
   "indice": "ни-…не",
   "question": "Négation double : mot en ни- et не",
   "cas": "negation",
   "sousCategorie": "negation_mot",
   "fr": "Cet été je ne suis allé nulle part.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_cmp1",
   "type": "phrase",
   "avant": "Баскетбо́л — ",
   "reponse": "тако́й же",
   "apres": " популя́рный вид спо́рта, как футбо́л.",
   "accepte": [],
   "indice": "тако́й же",
   "question": "Accord avec le nom, ou forme invariable ?",
   "cas": "comparaison",
   "sousCategorie": "comparatif_egal",
   "fr": "Le basket est un sport aussi populaire que le football.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_cmp2",
   "type": "phrase",
   "avant": "Францу́зские десе́рты ",
   "reponse": "таки́е же",
   "apres": " вку́сные, как италья́нские.",
   "accepte": [],
   "indice": "тако́й же",
   "question": "Accord avec le nom, ou forme invariable ?",
   "cas": "comparaison",
   "sousCategorie": "comparatif_egal",
   "fr": "Les desserts français sont aussi bons que les italiens.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_cmp3",
   "type": "phrase",
   "avant": "Она́ танцу́ет ",
   "reponse": "так же",
   "apres": " хорошо́, как её сестра́.",
   "accepte": [],
   "indice": "тако́й же",
   "question": "Accord avec le nom, ou forme invariable ?",
   "cas": "comparaison",
   "sousCategorie": "comparatif_egal",
   "fr": "Elle danse aussi bien que sa sœur.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_cmp4",
   "type": "phrase",
   "avant": "Э́то зда́ние ",
   "reponse": "не тако́е",
   "apres": " краси́вое, как то.",
   "accepte": [],
   "indice": "тако́й же",
   "question": "Accord avec le nom, ou forme invariable ?",
   "cas": "comparaison",
   "sousCategorie": "comparatif_egal",
   "fr": "Ce bâtiment n’est pas aussi beau que celui-là.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_cmp5",
   "type": "phrase",
   "avant": "Мой компью́тер рабо́тает ",
   "reponse": "не так",
   "apres": " бы́стро, как твой.",
   "accepte": [],
   "indice": "тако́й же",
   "question": "Accord avec le nom, ou forme invariable ?",
   "cas": "comparaison",
   "sousCategorie": "comparatif_egal",
   "fr": "Mon ordinateur ne marche pas aussi vite que le tien.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_num1",
   "type": "phrase",
   "avant": "В университе́те два ",
   "reponse": "зда́ния",
   "apres": ".",
   "accepte": [],
   "indice": "1 → nom. ; 2, 3, 4 → gén. sg ; 5+ → gén. pl",
   "question": "Quel cas après ce nombre ?",
   "cas": "numeral",
   "sousCategorie": "numeral_accord",
   "fr": "Il y a deux bâtiments à l’université.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_num2",
   "type": "phrase",
   "avant": "Э́то сто́ит пять ",
   "reponse": "рубле́й",
   "apres": ".",
   "accepte": [],
   "indice": "1 → nom. ; 2, 3, 4 → gén. sg ; 5+ → gén. pl",
   "question": "Quel cas après ce nombre ?",
   "cas": "numeral",
   "sousCategorie": "numeral_accord",
   "fr": "Cela coûte cinq roubles.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_num3",
   "type": "phrase",
   "avant": "У меня́ три ",
   "reponse": "дня",
   "apres": ".",
   "accepte": [],
   "indice": "1 → nom. ; 2, 3, 4 → gén. sg ; 5+ → gén. pl",
   "question": "Quel cas après ce nombre ?",
   "cas": "numeral",
   "sousCategorie": "numeral_accord",
   "fr": "J’ai trois jours.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_num4",
   "type": "phrase",
   "avant": "В го́роде два́дцать ",
   "reponse": "музе́ев",
   "apres": ".",
   "accepte": [],
   "indice": "1 → nom. ; 2, 3, 4 → gén. sg ; 5+ → gén. pl",
   "question": "Quel cas après ce nombre ?",
   "cas": "numeral",
   "sousCategorie": "numeral_accord",
   "fr": "Il y a vingt musées dans la ville.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_num5",
   "type": "phrase",
   "avant": "Одна́ ",
   "reponse": "ты́сяча",
   "apres": " е́вро.",
   "accepte": [],
   "indice": "1 → nom. ; 2, 3, 4 → gén. sg ; 5+ → gén. pl",
   "question": "Quel cas après ce nombre ?",
   "cas": "numeral",
   "sousCategorie": "numeral_accord",
   "fr": "Mille euros.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_kot1",
   "type": "phrase",
   "avant": "Канди́нский — худо́жник, ",
   "reponse": "кото́рый",
   "apres": " жил в Росси́и.",
   "accepte": [],
   "indice": "кото́рый",
   "question": "Genre du nom repris, cas de la subordonnée",
   "cas": "pronom",
   "sousCategorie": "kotoryj_phrase",
   "fr": "Kandinsky est un peintre qui a vécu en Russie.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_kot2",
   "type": "phrase",
   "avant": "Худо́жник, ",
   "reponse": "кото́рого",
   "apres": " не все понима́ют.",
   "accepte": [],
   "indice": "кото́рый",
   "question": "Genre du nom repris, cas de la subordonnée",
   "cas": "pronom",
   "sousCategorie": "kotoryj_phrase",
   "fr": "Un peintre que tout le monde ne comprend pas.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_kot3",
   "type": "phrase",
   "avant": "Худо́жник, о ",
   "reponse": "кото́ром",
   "apres": " мно́го писа́ли кри́тики.",
   "accepte": [],
   "indice": "кото́рый",
   "question": "Genre du nom repris, cas de la subordonnée",
   "cas": "pronom",
   "sousCategorie": "kotoryj_phrase",
   "fr": "Un peintre dont les critiques ont beaucoup parlé.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_kot4",
   "type": "phrase",
   "avant": "Э́то кни́га, ",
   "reponse": "кото́рую",
   "apres": " я чита́ю.",
   "accepte": [],
   "indice": "кото́рый",
   "question": "Genre du nom repris, cas de la subordonnée",
   "cas": "pronom",
   "sousCategorie": "kotoryj_phrase",
   "fr": "C’est le livre que je lis.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  },
  {
   "id": "phr2_kot5",
   "type": "phrase",
   "avant": "Э́то студе́нты, ",
   "reponse": "кото́рые",
   "apres": " у́чатся в Москве́.",
   "accepte": [],
   "indice": "кото́рый",
   "question": "Genre du nom repris, cas de la subordonnée",
   "cas": "pronom",
   "sousCategorie": "kotoryj_phrase",
   "fr": "Ce sont les étudiants qui étudient à Moscou.",
   "choix": null,
   "bloc": 2,
   "note": null,
   "aValider": false,
   "sourceProf": true,
   "phraseReecrite": true
  }
 ],
 "sous": [
  {
   "id": "verbe_present_sg",
   "cas": "verbe",
   "libelle": "Présent, singulier",
   "cellule": null,
   "cles": [
    "ja",
    "ty",
    "on"
   ],
   "nombre": "sg",
   "genre": "flexion",
   "regle": "gram_present"
  },
  {
   "id": "verbe_present_pl",
   "cas": "verbe",
   "libelle": "Présent, pluriel",
   "cellule": null,
   "cles": [
    "my",
    "vy",
    "oni"
   ],
   "nombre": "sg",
   "genre": "flexion",
   "regle": "gram_present"
  },
  {
   "id": "verbe_passe",
   "cas": "verbe",
   "libelle": "Passé, accord en genre et en nombre",
   "cellule": null,
   "cles": [
    "passe_m",
    "passe_f",
    "passe_n",
    "passe_pl"
   ],
   "nombre": "sg",
   "genre": "flexion",
   "regle": "gram_passe"
  },
  {
   "id": "verbe_futur",
   "cas": "verbe",
   "libelle": "Futur",
   "cellule": null,
   "cles": [
    "futur_ja",
    "futur_ty",
    "futur_on",
    "futur_my",
    "futur_vy",
    "futur_oni"
   ],
   "nombre": "sg",
   "genre": "flexion",
   "regle": "gram_futur"
  },
  {
   "id": "verbe_mouvement_conj",
   "cas": "verbe",
   "libelle": "Conjugaison des verbes de mouvement",
   "cellule": null,
   "cles": [
    "ja",
    "ty",
    "on",
    "my",
    "vy",
    "oni"
   ],
   "nombre": "sg",
   "genre": "flexion",
   "regle": "gram_mouvement"
  },
  {
   "id": "verbe_reflexif",
   "cas": "verbe",
   "libelle": "Verbes en -ся",
   "cellule": null,
   "cles": [
    "ja",
    "ty",
    "on",
    "my",
    "vy",
    "oni",
    "passe_m",
    "passe_f",
    "passe_pl"
   ],
   "nombre": "sg",
   "genre": "flexion",
   "regle": "gram_reflexifs"
  },
  {
   "id": "mouvement_choix",
   "cas": "verbe",
   "libelle": "Aller une fois ou habituellement",
   "cellule": null,
   "cles": [],
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_mouvement"
  },
  {
   "id": "aspect_choix",
   "cas": "verbe",
   "libelle": "Imperfectif ou perfectif",
   "cellule": null,
   "cles": [],
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_aspect"
  },
  {
   "id": "aspect_paire",
   "cas": "verbe",
   "libelle": "Trouver le partenaire aspectuel",
   "cellule": null,
   "cles": [
    "perfectif"
   ],
   "nombre": "sg",
   "genre": "flexion",
   "regle": "gram_aspect"
  },
  {
   "id": "pronom_cas",
   "cas": "pronom",
   "libelle": "Pronoms personnels au datif",
   "cellule": null,
   "cles": [
    "dat",
    "dat_k"
   ],
   "nombre": "sg",
   "genre": "flexion",
   "regle": "gram_pronoms"
  },
  {
   "id": "kotoryj",
   "cas": "pronom",
   "libelle": "Le relatif кото́рый",
   "cellule": null,
   "cles": "*",
   "nombre": "sg",
   "genre": "flexion",
   "regle": "gram_kotoryj"
  },
  {
   "id": "pronom_phrase",
   "cas": "pronom",
   "libelle": "Pronoms personnels en contexte",
   "cellule": null,
   "cles": [],
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_pronoms"
  },
  {
   "id": "kotoryj_phrase",
   "cas": "pronom",
   "libelle": "кото́рый en contexte",
   "cellule": null,
   "cles": [],
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_kotoryj"
  },
  {
   "id": "comparatif_egal",
   "cas": "comparaison",
   "libelle": "тако́й же… как",
   "cellule": null,
   "cles": [],
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_comparatif"
  },
  {
   "id": "negation_mot",
   "cas": "negation",
   "libelle": "Négations en ни-",
   "cellule": null,
   "cles": [],
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_negation"
  },
  {
   "id": "numeral_accord",
   "cas": "numeral",
   "libelle": "Accord après un nombre",
   "cellule": null,
   "cles": [],
   "nombre": "sg",
   "genre": "phrase",
   "regle": "gram_numeraux"
  },
  {
   "id": "negation_serie",
   "cas": "negation",
   "libelle": "Les cinq négations en ни-",
   "cellule": null,
   "cles": "*",
   "nombre": "sg",
   "genre": "flexion",
   "regle": "gram_negation"
  },
  {
   "id": "comparatif_serie",
   "cas": "comparaison",
   "libelle": "Les formes de тако́й же",
   "cellule": null,
   "cles": "*",
   "nombre": "sg",
   "genre": "flexion",
   "regle": "gram_comparatif"
  }
 ],
 "points": [
  {
   "id": "gram_mouvement",
   "titre": "Verbes de mouvement : une fois ou habituellement",
   "cas": "verbe",
   "bloc": 2,
   "regle": "Le russe distingue deux verbes là où le français en a un. Идти́ décrit un trajet en cours, dans une seule direction : сейча́с, сего́дня. Ходи́ть décrit un aller-retour ou une habitude : ка́ждый день, обы́чно, ча́сто, всегда́, иногда́, ре́дко, никогда́ не. La même opposition vaut pour е́хать / е́здить en véhicule, лете́ть / лета́ть, плыть / пла́вать, бежа́ть / бе́гать.",
   "tableau": [
    [
     "Une direction",
     "Aller-retour, habitude"
    ],
    [
     "идти́ — я иду́",
     "ходи́ть — я хожу́"
    ],
    [
     "е́хать — я е́ду",
     "е́здить — я е́зжу"
    ],
    [
     "лете́ть — я лечу́",
     "лета́ть — я лета́ю"
    ],
    [
     "плыть — я плыву́",
     "пла́вать — я пла́ваю"
    ],
    [
     "бежа́ть — я бегу́",
     "бе́гать — я бе́гаю"
    ]
   ],
   "exemples": [
    "Сейча́с я иду́ в университе́т.",
    "Я ка́ждый день хожу́ в магази́н."
   ]
  },
  {
   "id": "gram_present",
   "titre": "Présent",
   "cas": "verbe",
   "bloc": 2,
   "regle": "Deux séries de désinences. Première conjugaison : -ю/-у, -ешь, -ет, -ем, -ете, -ют/-ут. Deuxième conjugaison : -ю/-у, -ишь, -ит, -им, -ите, -ят/-ат. Un perfectif n’a pas de présent : ses formes de type présent expriment le futur.",
   "tableau": [
    [
     "",
     "1re conjugaison",
     "2e conjugaison"
    ],
    [
     "я",
     "лета́ю",
     "лечу́"
    ],
    [
     "ты",
     "лета́ешь",
     "лети́шь"
    ],
    [
     "он, она́",
     "лета́ет",
     "лети́т"
    ],
    [
     "мы",
     "лета́ем",
     "лети́м"
    ],
    [
     "вы",
     "лета́ете",
     "лети́те"
    ],
    [
     "они́",
     "лета́ют",
     "летя́т"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_passe",
   "titre": "Passé",
   "cas": "verbe",
   "bloc": 2,
   "regle": "Le passé ne s’accorde pas en personne mais en genre et en nombre avec le sujet : -л au masculin, -ла au féminin, -ло au neutre, -ли au pluriel. Il se forme sur l’infinitif privé de -ть.",
   "tableau": [
    [
     "Sujet",
     "Forme"
    ],
    [
     "он",
     "приезжа́л"
    ],
    [
     "она́",
     "приезжа́ла"
    ],
    [
     "оно́",
     "приезжа́ло"
    ],
    [
     "они́, мы, вы",
     "приезжа́ли"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_futur",
   "titre": "Futur",
   "cas": "verbe",
   "bloc": 2,
   "regle": "Deux futurs, selon l’aspect. À l’imperfectif, futur composé : бу́ду, бу́дешь, бу́дет, бу́дем, бу́дете, бу́дут suivis de l’infinitif. Au perfectif, futur simple : les désinences du présent appliquées au verbe perfectif.",
   "tableau": [
    [
     "Imperfectif",
     "Perfectif"
    ],
    [
     "я бу́ду приезжа́ть",
     "я прие́ду"
    ],
    [
     "ты бу́дешь приезжа́ть",
     "ты прие́дешь"
    ],
    [
     "они́ бу́дут приезжа́ть",
     "они́ прие́дут"
    ]
   ],
   "exemples": [
    "Тури́сты всегда́ бу́дут приезжа́ть в го́род на Неве́.",
    "Я ско́ро прие́ду!"
   ]
  },
  {
   "id": "gram_aspect",
   "titre": "Imperfectif et perfectif",
   "cas": "verbe",
   "bloc": 2,
   "regle": "L’imperfectif décrit le processus, la répétition, l’habitude. Le perfectif décrit le résultat, l’action menée à son terme et prise une seule fois. Les deux verbes forment une paire qu’il faut mémoriser ensemble : le perfectif s’obtient tantôt par un préfixe, tantôt par un changement de radical, tantôt par supplétion.",
   "tableau": [
    [
     "Imperfectif (processus)",
     "Perfectif (résultat)"
    ],
    [
     "покупа́ть",
     "купи́ть"
    ],
    [
     "гото́вить",
     "пригото́вить"
    ],
    [
     "идти́",
     "пойти́"
    ],
    [
     "звать",
     "позва́ть"
    ],
    [
     "дари́ть",
     "подари́ть"
    ],
    [
     "жела́ть",
     "пожела́ть"
    ],
    [
     "ви́деть",
     "уви́деть"
    ],
    [
     "приходи́ть",
     "прийти́"
    ],
    [
     "говори́ть",
     "сказа́ть"
    ],
    [
     "нра́виться",
     "понра́виться"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_imperatif",
   "titre": "Impératif",
   "cas": "verbe",
   "bloc": 2,
   "regle": "L’impératif se forme sur le radical du présent : -й, -и ou -ь au tutoiement, plus -те au vouvoiement. L’aspect change le sens : l’imperfectif à la forme négative interdit ou déconseille, le perfectif à la forme affirmative demande une action précise.",
   "tableau": [
    [
     "Aspect",
     "Tutoiement",
     "Vouvoiement"
    ],
    [
     "imperfectif",
     "(не) расска́зывай",
     "(не) расска́зывайте"
    ],
    [
     "perfectif",
     "расскажи́",
     "расскажи́те"
    ],
    [
     "imperfectif",
     "—",
     "(не) разгова́ривайте"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_reflexifs",
   "titre": "Verbes en -ся",
   "cas": "verbe",
   "bloc": 2,
   "regle": "Le suffixe réfléchi s’ajoute après la désinence ordinaire : -ся après une consonne, -сь après une voyelle. Il ne se traduit pas toujours par un pronom réfléchi en français.",
   "tableau": [
    [
     "",
     "улыба́ться",
     "боя́ться"
    ],
    [
     "я",
     "улыба́юсь",
     "бою́сь"
    ],
    [
     "ты",
     "улыба́ешься",
     "бои́шься"
    ],
    [
     "он, она́",
     "улыба́ется",
     "бои́тся"
    ],
    [
     "мы",
     "улыба́емся",
     "бои́мся"
    ],
    [
     "вы",
     "улыба́етесь",
     "бои́тесь"
    ],
    [
     "они́",
     "улыба́ются",
     "боя́тся"
    ],
    [
     "passé masculin",
     "улыба́лся",
     "боя́лся"
    ],
    [
     "passé féminin",
     "улыба́лась",
     "боя́лась"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_pronoms",
   "titre": "Pronoms personnels au datif",
   "cas": "pronom",
   "bloc": 2,
   "regle": "Après une préposition, les pronoms de troisième personne prennent un н- initial : ему́ mais к нему́, ей mais к ней, им mais к ним. Les verbes говори́ть, писа́ть, дава́ть, звони́ть, дари́ть, помога́ть, обеща́ть, рекомендова́ть, сове́товать, идти́ к, е́хать к, скуча́ть по appellent le datif.",
   "tableau": [
    [
     "Nominatif",
     "Datif",
     "к + datif"
    ],
    [
     "я",
     "мне",
     "ко мне"
    ],
    [
     "ты",
     "тебе́",
     "к тебе́"
    ],
    [
     "он, оно́",
     "ему́",
     "к нему́"
    ],
    [
     "она́",
     "ей",
     "к ней"
    ],
    [
     "мы",
     "нам",
     "к нам"
    ],
    [
     "вы",
     "вам",
     "к вам"
    ],
    [
     "они́",
     "им",
     "к ним"
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_kotoryj",
   "titre": "Le relatif кото́рый",
   "cas": "pronom",
   "bloc": 2,
   "regle": "Кото́рый remplace le nom repris et se décline comme un adjectif. Son genre et son nombre viennent du nom repris ; son cas vient de sa fonction dans la subordonnée. C’est la difficulté du point : les deux informations ne viennent pas du même endroit.",
   "tableau": [
    [
     "Cas",
     "m.",
     "n.",
     "f.",
     "pl."
    ],
    [
     "Nominatif",
     "кото́рый",
     "кото́рое",
     "кото́рая",
     "кото́рые"
    ],
    [
     "Génitif",
     "кото́рого",
     "кото́рого",
     "кото́рой",
     "кото́рых"
    ],
    [
     "Accusatif",
     "= gén. si animé",
     "= nom.",
     "кото́рую",
     "= gén. si animé"
    ],
    [
     "Prépositionnel",
     "о кото́ром",
     "о кото́ром",
     "о кото́рой",
     "о кото́рых"
    ]
   ],
   "exemples": [
    "Канди́нский — худо́жник, кото́рый жил в Росси́и.",
    "Худо́жник, о кото́ром мно́го писа́ли кри́тики."
   ]
  },
  {
   "id": "gram_comparatif",
   "titre": "Comparatif d’égalité",
   "cas": "comparaison",
   "bloc": 2,
   "regle": "Тако́й же s’accorde avec le nom qualifié et introduit un adjectif : тако́й же, така́я же, тако́е же, таки́е же. Так же, invariable, introduit un adverbe. La comparaison se ferme par как. À la forme négative : не тако́й… как, не так… как.",
   "tableau": [
    [
     "Structure",
     "Exemple"
    ],
    [
     "тако́й же + adjectif masculin",
     "Баскетбо́л — тако́й же популя́рный вид спо́рта, как футбо́л."
    ],
    [
     "таки́е же + adjectif pluriel",
     "Францу́зские десе́рты таки́е же вку́сные, как италья́нские."
    ],
    [
     "так же + adverbe",
     "Она́ танцу́ет так же хорошо́, как её сестра́."
    ],
    [
     "не така́я + adjectif féminin",
     "Была́ не така́я хоро́шая му́зыка, как в про́шлом году́."
    ],
    [
     "не так + adverbe",
     "Мой компью́тер рабо́тает не так бы́стро, как твой."
    ]
   ],
   "exemples": []
  },
  {
   "id": "gram_negation",
   "titre": "Négations en ни-",
   "cas": "negation",
   "bloc": 2,
   "regle": "Le russe pratique la double négation : le mot négatif ne suffit pas, le verbe doit lui aussi porter не. Никогда́ не, никто́ не, ничего́ не, нигде́ не, никуда́ не.",
   "tableau": [],
   "exemples": [
    "Мари́на никогда́ не хо́дит в университе́т пешко́м.",
    "Никто́ не зна́ет."
   ]
  },
  {
   "id": "gram_numeraux",
   "titre": "Accord après un nombre",
   "cas": "numeral",
   "bloc": 2,
   "regle": "Un gouverne le nominatif. Deux, trois et quatre gouvernent le génitif singulier. À partir de cinq, et pour vingt, vingt-cinq et au-delà, le génitif pluriel.",
   "tableau": [
    [
     "Nombre",
     "Cas",
     "Masculin",
     "Féminin"
    ],
    [
     "1",
     "nominatif",
     "оди́н миллио́н",
     "одна́ ты́сяча"
    ],
    [
     "2, 3, 4",
     "génitif singulier",
     "два миллио́на",
     "две ты́сячи"
    ],
    [
     "5 et plus",
     "génitif pluriel",
     "пять миллио́нов",
     "пять ты́сяч"
    ],
    [
     "100",
     "",
     "сто",
     ""
    ],
    [
     "200, 300, 400",
     "",
     "две́сти, три́ста, четы́реста",
     ""
    ],
    [
     "500 à 900",
     "",
     "пятьсо́т, шестьсо́т, семьсо́т, восемьсо́т, девятьсо́т",
     ""
    ],
    [
     "1000, 1 000 000",
     "",
     "ты́сяча, миллио́н",
     ""
    ]
   ],
   "exemples": []
  }
 ]
};

if (typeof window !== 'undefined') window.BLOC2 = BLOC2;
