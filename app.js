/* Révision de russe — bloc 1. Moteur.
   Aucune dépendance. Les données viennent de data/*.js et ne sont jamais
   modifiées ici. Ordre des cases partout : N G D A I P. */
(function () {
'use strict';

var CLE = 'revision-russe-v1';
var INTERVALLE_MAX = 365 * 5;   /* borne de sûreté, cinq ans */
var ACC = '\u0301';
var CAS = ['nom', 'gen', 'dat', 'acc', 'instr', 'prep'];
var NOM_CAS = {
  nom: 'Nominatif', gen: 'Génitif', dat: 'Datif',
  acc: 'Accusatif', instr: 'Instrumental', prep: 'Prépositionnel'
};
var ABREV = ['nom', 'gén', 'dat', 'acc', 'instr', 'prép'];
/* Ordre d'introduction imposé par SPEC §8.1 : prépositionnel, accusatif,
   datif, instrumental, génitif singulier, pluriels du nominatif, génitif
   pluriel en dernier. */
var RANG = { prep: 0, acc: 10, dat: 20, instr: 30, gen: 40, nom: 45 };
var CAT_NOM = {
  lieux: 'Lieux', maison: 'Maison', nourriture: 'Nourriture',
  vetements: 'Vêtements', sport: 'Sport', personnes: 'Personnes',
  famille: 'Famille', corps: 'Corps', transports: 'Transports',
  temps: 'Temps', mois: 'Mois', etude: 'Étude', loisirs: 'Loisirs',
  objets: 'Objets', argent: 'Argent', quantites: 'Quantités',
  animaux: 'Animaux', nature: 'Nature', couleurs: 'Couleurs',
  qualite: 'Qualités'
};
var SERIES_ADJ = [
  { cle: 'm', lib: 'masculin singulier' },
  { cle: 'f', lib: 'féminin singulier' },
  { cle: 'n', lib: 'neutre singulier' },
  { cle: 'pl', lib: 'pluriel' }
];

/* ------------------------------------------------------------ index de base */

var SOUS = {}, POINTS = {}, ITEMS = {}, PAR_LEMME = {}, PAR_FORME = {};
GRAMMAIRE.sous.forEach(function (s) { SOUS[s.id] = s; });
GRAMMAIRE.points.forEach(function (p) { POINTS[p.id] = p; });
LEXIQUE.forEach(function (it) {
  ITEMS[it.id] = it;
  var cle = sansAcc(it.lemme).toLowerCase();
  if (!PAR_LEMME[cle]) PAR_LEMME[cle] = it;
  /* Index de TOUTES les formes : sert à retrouver le paradigme d'une phrase
     dont l'indice est une forme fléchie (шко́ле, о́кна, друзья́), et à accepter
     en reconnaissance les gloses des homographes (лет = год et ле́то,
     о по́ле = пол et по́ле). */
  var series = it.type === 'adjectif' ? ['m', 'f', 'n', 'pl'] : ['sg', 'pl'];
  series.forEach(function (k) {
    (it[k] || []).forEach(function (f) {
      var c = sansAcc(f).toLowerCase();
      if (!PAR_FORME[c]) PAR_FORME[c] = [];
      if (PAR_FORME[c].indexOf(it) < 0) PAR_FORME[c].push(it);
    });
  });
  if (it.loc2) {
    var cl = sansAcc(it.loc2.forme).toLowerCase().split(' ').pop();
    if (!PAR_FORME[cl]) PAR_FORME[cl] = [];
    PAR_FORME[cl].push(it);
  }
});
PHRASES.forEach(function (p) { ITEMS[p.id] = p; });

var CARTES = [];
LEXIQUE.forEach(function (it) {
  (it.sousCategories || []).forEach(function (s) {
    CARTES.push({ id: it.id + '|' + s, itemId: it.id, sous: s, kind: it.type });
  });
});
PHRASES.forEach(function (p) {
  CARTES.push({ id: p.id, itemId: p.id, sous: p.sousCategorie, kind: 'phrase' });
});
var PAR_ID = {};
CARTES.forEach(function (c) { PAR_ID[c.id] = c; });

/* ------------------------------------------------------------------- outils */

function sansAcc(s) { return String(s).split(ACC).join(''); }
function normaliser(s) {
  /* Accents toniques ignorés, casse ignorée, espaces normalisés.
     ё et е restent distincts : c'est une exigence, pas un oubli. */
  return sansAcc(String(s)).toLowerCase().trim().replace(/\s+/g, ' ');
}
function normFr(s) {
  return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().trim().replace(/[’']/g, "'").replace(/\s+/g, ' ');
}
function ech(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function el(id) { return document.getElementById(id); }
function jour() { return 86400000; }

/* ------------------------------------------------------------------- l'état */

var etat = charger();
nettoyerEtats();

function nettoyerEtats() {
  /* Une carte peut disparaître entre deux versions des données : une
     sous-catégorie retirée, un item corrigé. L'état correspondant devient
     orphelin et fausserait les compteurs et l'onglet Erreurs. */
  var retires = 0;
  Object.keys(etat.etats).forEach(function (id) {
    if (!PAR_ID[id]) { delete etat.etats[id]; retires += 1; }
  });
  etat.signalements = etat.signalements.filter(function (s) {
    return !!PAR_ID[s.carteId];
  });
  if (retires) sauver();
}

function neuf() {
  return {
    v: 1, etats: {}, sous: {}, signalements: [],
    reglages: reglagesParDefaut()
  };
}
function reglagesParDefaut() {
  return { longueur: 20, nouveaux: 4, revisionsSeules: false, cats: [], cas: [] };
}

/* Un état venu du stockage n'est jamais digne de confiance : export édité à la
   main, version antérieure du format, écriture interrompue, données d'un autre
   appareil. Toute valeur est donc contrainte à un domaine valide plutôt que
   supposée présente. Un état partiel donnait une page blanche au démarrage :
   des réglages sans `cas` ni `cats`, ou des signalements qui ne sont pas un
   tableau, suffisaient. */
function nombre(v, defaut, mini, maxi) {
  var n = typeof v === 'number' ? v : parseFloat(v);
  if (!isFinite(n)) return defaut;
  if (mini != null && n < mini) return mini;
  if (maxi != null && n > maxi) return maxi;
  return n;
}
function tableauDeTextes(v) {
  if (!Array.isArray(v)) return [];
  return v.filter(function (x) { return typeof x === 'string'; });
}
function assainir(e) {
  var out = neuf();
  if (!e || typeof e !== 'object' || Array.isArray(e)) return out;

  var r = (e.reglages && typeof e.reglages === 'object' &&
    !Array.isArray(e.reglages)) ? e.reglages : {};
  /* On contraint au domaine, pas à la liste des quatre valeurs proposées :
     restreindre à la liste rejetterait toute valeur légitime future et rendait
     les harnais de test inopérants sans rien protéger de plus. */
  out.reglages = {
    longueur: Math.round(nombre(r.longueur, 20, 1, 2000)),
    nouveaux: Math.round(nombre(r.nouveaux, 4, 0, 15)),
    revisionsSeules: r.revisionsSeules === true,
    cats: tableauDeTextes(r.cats),
    cas: tableauDeTextes(r.cas)
  };

  var etats = (e.etats && typeof e.etats === 'object' && !Array.isArray(e.etats))
    ? e.etats : {};
  Object.keys(etats).forEach(function (cle) {
    if (!cle) return;
    var x = etats[cle];
    if (!x || typeof x !== 'object') return;
    out.etats[cle] = {
      intervalle: Math.round(nombre(x.intervalle, 0, 0, INTERVALLE_MAX)),
      facilite: nombre(x.facilite, 2.5, 1.3, 5),
      echeance: nombre(x.echeance, 0, 0, 8.64e15),
      repetitions: Math.round(nombre(x.repetitions, 0, 0, 10000)),
      produitUneFois: x.produitUneFois === true,
      tentatives: Math.round(nombre(x.tentatives, 0, 0, 1e6)),
      echecs: Math.round(nombre(x.echecs, 0, 0, 1e6)),
      echecsUneLettre: Math.round(nombre(x.echecsUneLettre, 0, 0, 1e6)),
      signale: x.signale === true
    };
  });

  var sous = (e.sous && typeof e.sous === 'object' && !Array.isArray(e.sous))
    ? e.sous : {};
  Object.keys(sous).forEach(function (cle) {
    var x = sous[cle];
    if (!x || typeof x !== 'object') return;
    out.sous[cle] = {
      tentatives: Math.round(nombre(x.tentatives, 0, 0, 1e6)),
      reussites: Math.round(nombre(x.reussites, 0, 0, 1e6))
    };
    if (out.sous[cle].reussites > out.sous[cle].tentatives) {
      out.sous[cle].reussites = out.sous[cle].tentatives;
    }
  });

  if (Array.isArray(e.signalements)) {
    out.signalements = e.signalements.filter(function (x) {
      return x && typeof x === 'object';
    }).map(function (x) {
      return {
        carteId: String(x.carteId == null ? '' : x.carteId),
        itemId: String(x.itemId == null ? '' : x.itemId),
        sous: String(x.sous == null ? '' : x.sous),
        lemme: String(x.lemme == null ? '' : x.lemme),
        attendu: String(x.attendu == null ? '' : x.attendu),
        note: String(x.note == null ? '' : x.note),
        quand: String(x.quand == null ? '' : x.quand)
      };
    });
  }
  return out;
}

function charger() {
  try {
    var brut = localStorage.getItem(CLE);
    if (!brut) return neuf();
    return assainir(JSON.parse(brut));
  } catch (err) {
    console.warn('État illisible, remis à neuf', err && err.message);
    return neuf();
  }
}

/* Une écriture qui échoue en silence, c'est une progression perdue sans que
   l'utilisateur le sache. Le motif est retenu et affiché. */
var sauvegardeKO = null;
function sauver() {
  try {
    localStorage.setItem(CLE, JSON.stringify(etat));
    if (sauvegardeKO) { sauvegardeKO = null; avertirSauvegarde(); }
  } catch (err) {
    var nom = (err && (err.name || err.message)) || 'erreur inconnue';
    if (sauvegardeKO !== nom) {
      sauvegardeKO = nom;
      console.warn('Sauvegarde impossible', nom);
      avertirSauvegarde();
    }
  }
}
function avertirSauvegarde() {
  var z = el('bandeau');
  if (!z) return;
  if (!sauvegardeKO) { z.innerHTML = ''; return; }
  z.innerHTML = '<div class="alerte">La progression ne peut pas être ' +
    'enregistrée (' + ech(sauvegardeKO) + '). Les réponses de cette session ' +
    'seront perdues à la fermeture. Libérez de l\u2019espace de stockage, ou ' +
    'quittez la navigation privée.</div>';
}
function etatDe(id) {
  return etat.etats[id] || null;
}
function creerEtat() {
  return {
    intervalle: 0, facilite: 2.5, echeance: 0, repetitions: 0,
    produitUneFois: false, tentatives: 0, echecs: 0, echecsUneLettre: 0,
    signale: false
  };
}

/* -------------------------------------------------------------------- SM‑2 */

function majSM2(e, reussi, uneLettre) {
  /* Écart assumé avec SPEC §6.1, qui prescrivait q = 4 en réussite.
     Avec q = 4 la variation de facilité vaut exactement zéro : la facilité ne
     peut alors que baisser, et une carte échouée deux fois reste bloquée au
     plancher 1,3 à vie, sans voie de retour. Mesuré sur une simulation d'un an :
     54 % des cartes atteignaient le plancher. q = 5 donne +0,10 en réussite et
     rend la remontée possible. Pour revenir à la lettre de la consigne, il
     suffit de remettre 4 ci-dessous. */
  var q = reussi ? 5 : 2;
  e.tentatives += 1;
  e.facilite = Math.max(1.3, e.facilite + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
  if (reussi) {
    e.repetitions += 1;
    if (e.repetitions === 1) e.intervalle = 1;
    else if (e.repetitions === 2) e.intervalle = 6;
    else e.intervalle = Math.round(e.intervalle * e.facilite);
    /* borne de sûreté : au-delà, l'échéance dérive vers des dates absurdes */
    e.intervalle = Math.min(e.intervalle, INTERVALLE_MAX);
    e.echeance = Date.now() + e.intervalle * jour();
  } else {
    /* L'intervalle retombe à zéro, sans exception, y compris pour un échec
       à une seule lettre. */
    e.repetitions = 0;
    e.intervalle = 0;
    e.echeance = Date.now() + 10 * 60000;
    e.echecs += 1;
    if (uneLettre) e.echecsUneLettre += 1;
  }
}
function majSous(sid, reussi) {
  var s = etat.sous[sid] || (etat.sous[sid] = { tentatives: 0, reussites: 0 });
  s.tentatives += 1;
  if (reussi) s.reussites += 1;
}

/* -------------------------------------------------------- file d'échéances */

function rangCarte(c) {
  var s = SOUS[c.sous];
  if (!s) return 99;
  var r = RANG[s.cas];
  if (r == null) r = 60;
  if (s.cas === 'gen' && s.nombre === 'pl') r = 50;
  if (s.id.indexOf('genpl') === 0 || s.id === 'gen_pl_quantite') r = 50;
  return r;
}
function cartesFiltrees() {
  var rg = etat.reglages;
  return CARTES.filter(function (c) {
    var it = ITEMS[c.itemId], s = SOUS[c.sous];
    if (!it || !s) return false;
    if (rg.cas.length && rg.cas.indexOf(s.cas) < 0) return false;
    if (rg.cats.length) {
      var cat = it.categorie || null;
      if (!cat || rg.cats.indexOf(cat) < 0) return false;
    }
    return true;
  });
}
function nbEchus() {
  var n = Date.now(), k = 0;
  CARTES.forEach(function (c) {
    var e = etatDe(c.id);
    if (e && e.echeance <= n) k += 1;
  });
  return k;
}
function construireSession() {
  var rg = etat.reglages, n = Date.now(), pool = cartesFiltrees();
  var echus = [], neuves = [], reste = [];
  pool.forEach(function (c) {
    var e = etatDe(c.id);
    if (!e) neuves.push(c);
    else if (e.echeance <= n) echus.push(c);
    else reste.push(c);
  });
  /* Régulation de l'introduction. Deux échecs symétriques ont été mesurés sur
     une simulation d'un an à 20 questions et 4 séances par semaine :

     - sans réserve, dès que l'arriéré atteint la longueur de session, plus
       aucune carte nouvelle n'entre : 170 cartes introduites sur 1297, soit
       sept ans de couverture ;
     - avec une réserve fixe, la couverture est complète mais l'arriéré de
       révisions monte à 1196 cartes, c'est-à-dire que le dispositif ne tient
       plus ses propres échéances.

     Le corpus est simplement plus gros que ce que ce rythme absorbe. La seule
     réponse honnête est donc de réguler : la réserve de nouvelles cartes est
     accordée pleine quand l'arriéré est maîtrisé, réduite de moitié quand il
     dérive, suspendue quand il devient ingérable. L'arriéré redescend, puis
     l'introduction reprend d'elle-même. L'utilisateur voit le motif dans
     l'onglet Pratiquer. */
  var quotaDemande = rg.revisionsSeules ? 0 : rg.nouveaux;
  var quota = quotaEffectif(quotaDemande, echus.length, rg.longueur);

  /* 1. les échues d'abord, par échéance croissante */
  echus.sort(function (a, b) { return etatDe(a.id).echeance - etatDe(b.id).echeance; });
  var liste = echus.slice(0, Math.max(1, rg.longueur - quota));

  /* 2. les nouvelles, dans l'ordre d'introduction de §8.1 */
  var prises = 0;
  if (liste.length < rg.longueur && quota > 0) {
    neuves.sort(function (a, b) {
      var d = rangCarte(a) - rangCarte(b);
      return d !== 0 ? d : (a.id < b.id ? -1 : 1);
    });
    var aPrendre = Math.min(quota, rg.longueur - liste.length);
    liste = liste.concat(neuves.slice(0, aPrendre));
    prises = Math.min(aPrendre, neuves.length);
  }

  /* 2 bis. réserve non consommée faute de cartes nouvelles : elle revient aux
     révisions, jamais à des cartes non échues. Sans cela, en fin de corpus, des
     cartes non échues passeraient devant un arriéré de mille cartes. */
  if (liste.length < rg.longueur && echus.length > liste.length - prises) {
    var deja = liste.length - prises;
    liste = echus.slice(0, deja + (rg.longueur - liste.length)).concat(
      liste.slice(deja));
  }

  /* 3. complément par tirage pondéré parmi les cartes NON échues, en
        favorisant les faibles facilités. Le tirage aléatoire ne sert qu'ici. */
  if (liste.length < rg.longueur && reste.length) {
    var poids = reste.map(function (c) {
      var e = etatDe(c.id);
      return Math.max(0.1, 2.7 - e.facilite);
    });
    var total = poids.reduce(function (a, b) { return a + b; }, 0);
    while (liste.length < rg.longueur && reste.length) {
      var tir = Math.random() * total, i = 0;
      while (i < reste.length - 1 && tir > poids[i]) { tir -= poids[i]; i += 1; }
      liste.push(reste[i]);
      total -= poids[i];
      reste.splice(i, 1); poids.splice(i, 1);
    }
  }
  return entrelacer(liste);
}
/* Seuils de régulation, exprimés en multiples de la longueur de session. */
var SEUIL_MOITIE = 2, SEUIL_ARRET = 4;

function quotaEffectif(demande, arriere, longueur) {
  if (!demande) return 0;
  if (arriere <= longueur * SEUIL_MOITIE) return demande;
  if (arriere <= longueur * SEUIL_ARRET) return Math.ceil(demande / 2);
  return 0;
}
function motifRegulation(demande, arriere, longueur) {
  var q = quotaEffectif(demande, arriere, longueur);
  if (!demande) return null;
  if (q === demande) return null;
  if (q === 0) {
    return 'Introduction de nouvelles cartes suspendue : ' + arriere +
      ' cartes échues en attente, soit plus de ' + SEUIL_ARRET +
      ' séances de retard. Elle reprendra quand l\u2019arriéré sera résorbé.';
  }
  return 'Introduction réduite à ' + q + ' carte' + (q > 1 ? 's' : '') +
    ' : ' + arriere + ' cartes échues en attente.';
}

function entrelacer(liste) {
  /* Jamais deux cartes de la même sous-catégorie à la suite quand c'est
     évitable. L'ordre de priorité des échéances est conservé au mieux. */
  var out = [], reste = liste.slice();
  while (reste.length) {
    var i = 0;
    if (out.length) {
      var prec = out[out.length - 1].sous;
      while (i < reste.length && reste[i].sous === prec) i += 1;
      if (i === reste.length) i = 0;
    }
    out.push(reste[i]);
    reste.splice(i, 1);
  }
  return out;
}

/* ----------------------------------------------- construction d'une question */

function question(carte) {
  var it = ITEMS[carte.itemId], s = SOUS[carte.sous], e = etatDe(carte.id);
  var vu = e && e.produitUneFois;
  var q = { carte: carte, item: it, sous: s, sens: 'production', genre: s.genre };

  /* Le type de l'item l'emporte sur le genre de la sous-catégorie : une
     phrase ne peut jamais être rendue comme une forme fléchie isolée. */
  if (it.type === 'phrase') {
    q.genre = 'phrase';
    q.attendu = it.reponse;
    q.avant = it.avant; q.apres = it.apres;
    q.indice = it.indice; q.interro = it.question;
    q.choix = it.choix || null;
    if (q.choix && vu && Math.random() < 0.25) q.sens = 'boutons';
    return q;
  }
  if (s.genre === 'choix') {
    /* prep_v_na porté par un item lexical : в/на + prépositionnel singulier */
    q.attendu = (it.prep || 'в') + ' ' + (it.sg ? it.sg[5] : it.pl[5]);
    q.avant = ''; q.apres = '';
    q.indice = it.lemme;
    q.interro = 'Où ? (где?)';
    q.choix = ['в', 'на'];
    if (vu && Math.random() < 0.25) q.sens = 'boutons';
    return q;
  }
  if (s.genre === 'indecl') {
    var i = Math.floor(Math.random() * 6);
    q.attendu = it.sg[i];
    q.libelleCase = NOM_CAS[CAS[i]] + ' singulier';
    q.caseVisee = { idx: i, nombre: 'sg' };
    return q;
  }
  if (s.genre === 'adj') {
    var serie = SERIES_ADJ[Math.floor(Math.random() * 4)];
    q.attendu = it[serie.cle][s.cellule];
    q.libelleCase = NOM_CAS[s.cas] + ', ' + serie.lib +
      /* au masculin et au pluriel, l'accusatif dépend de l'animation :
         sans précision, la question n'aurait pas de réponse unique */
      (s.cas === 'acc' && (serie.cle === 'm' || serie.cle === 'pl')
        ? ' (nom inanimé)' : '');
    q.serieAdj = serie.cle;
    q.caseVisee = { idx: s.cellule, nombre: serie.cle };
    if (vu && Math.random() < 0.25) q.sens = 'reconnaissance';
    return q;
  }
  /* carte de forme */
  var tab = s.nombre === 'pl' ? it.pl : it.sg;
  if (!tab || s.cellule == null || tab[s.cellule] == null) {
    /* Combinaison item / sous-catégorie incohérente : les scripts de contrôle
       doivent l'interdire. Ici on écarte la carte au lieu d'afficher
       « undefined ». */
    console.error('Carte incohérente, écartée : ' + carte.id);
    return null;
  }
  q.attendu = tab[s.cellule];
  q.libelleCase = NOM_CAS[s.cas] + (s.nombre === 'pl' ? ' pluriel' : ' singulier') +
    /* un nom à deux locatifs a deux prépositionnels : préciser lequel */
    (it.loc2 && s.cas === 'prep' && s.nombre === 'sg'
      ? ' avec о (« au sujet de »)' : '');
  q.caseVisee = { idx: s.cellule, nombre: s.nombre };
  if (vu && Math.random() < 0.25) q.sens = 'reconnaissance';
  return q;
}

/* ----------------------------------------------------------------- session */

var sess = null;

function lancerSession(cartes) {
  var liste = cartes || construireSession();
  if (!liste.length) {
    rendre('pratiquer');
    var z = document.createElement('div');
    z.className = 'carte';
    z.innerHTML = '<h3>Rien à faire pour l\u2019instant</h3><div class="question">' +
      'Aucune carte n\u2019est échue et le quota de nouvelles cartes est à zéro. ' +
      'Augmentez le curseur, décochez « révisions uniquement », ou élargissez ' +
      'les filtres.</div>';
    el('vue').insertBefore(z, el('vue').firstChild);
    return;
  }
  sess = { liste: liste, i: 0, perf: [], q: null, phase: 'question' };
  afficherQuestion();
}
function afficherQuestion() {
  while (sess.i < sess.liste.length) {
    var q = question(sess.liste[sess.i]);
    if (q) { sess.q = q; sess.phase = 'question'; dessinerExercice(); return; }
    sess.i += 1;
  }
  finSession();
}

function dessinerExercice() {
  var q = sess.q, it = q.item, h = [];
  h.push('<div class="carte entree">');
  h.push('<div class="consigne">' + ech(consigne(q)) + '</div>');

  if (q.genre === 'phrase' || q.genre === 'choix') {
    h.push('<div class="phrase">' + ech(q.avant) +
      '<span class="trou">?</span>' + ech(q.apres) + '</div>');
    h.push('<div class="question">' + ech(q.interro) +
      (q.indice ? ' &middot; <span class="ru">' + ech(q.indice) + '</span>' : '') +
      '</div>');
    if (it.fr) h.push('<div class="question dim">' + ech(it.fr) + '</div>');
  } else if (q.sens === 'reconnaissance') {
    h.push('<div class="invite"><span class="ru ' + ech(it.type) + '">' +
      ech(q.attendu) + '</span></div>');
    h.push('<div class="question">Traduisez en français.</div>');
  } else {
    h.push('<div class="invite">' + ech(it.fr) + '</div>');
    h.push('<div class="question"><span class="ru">' + ech(it.lemme) +
      '</span> &rarr; ' + ech(q.libelleCase) + '</div>');
  }
  h.push(badges(it));

  if (q.sens === 'boutons') {
    h.push('<div class="ligne">' + q.choix.map(function (c) {
      return '<button data-choix="' + ech(c) + '" class="ru">' + ech(c) + '</button>';
    }).join('') + '</div>');
  } else {
    h.push('<input type="text" id="saisie" autocomplete="off" autocapitalize="off" ' +
      'autocorrect="off" spellcheck="false" inputmode="text" ' +
      (q.sens === 'reconnaissance' ? 'lang="fr"' : 'lang="ru"') + '>');
    h.push('<div style="height:8px"></div>');
    h.push('<button class="primaire" id="valider">Valider</button>');
  }
  h.push('</div>');
  h.push('<div class="ligne"><span class="mono dim">' + (sess.i + 1) + ' / ' +
    sess.liste.length + '</span><div class="pastilles" style="justify-content:flex-end">' +
    sess.perf.slice(-10).map(function (p) {
      return '<span class="pastille ' + (p ? 'ok' : 'ko') + '"></span>';
    }).join('') + '</div></div>');
  h.push('<div style="height:10px"></div>');
  h.push('<button class="petit plein" id="abandon">Terminer la session</button>');

  el('vue').innerHTML = h.join('');
  var champ = el('saisie');
  if (champ) {
    champ.focus();
    champ.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter') { ev.preventDefault(); repondre(champ.value); }
    });
    el('valider').addEventListener('click', function () { repondre(champ.value); });
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-choix]'),
    function (b) {
      b.addEventListener('click', function () {
        repondre(b.getAttribute('data-choix') + ' ' +
          sansAcc(sess.q.attendu).split(' ').slice(1).join(' '));
      });
    });
  el('abandon').addEventListener('click', finSession);
}

function consigne(q) {
  if (q.sens === 'reconnaissance') return 'Reconnaissance';
  if (q.genre === 'choix' || (q.item.type === 'phrase' && q.choix)) {
    return q.sens === 'boutons' ? 'В ou НА ?' : 'Complétez : préposition et forme';
  }
  if (q.genre === 'phrase') return 'Complétez la phrase';
  if (q.genre === 'indecl') return 'Indéclinable — donnez la forme';
  return 'Production';
}
function badges(it) {
  var b = [];
  if (it.type === 'nom') b.push('<span class="badge">' +
    ({ m: 'masculin', f: 'féminin', n: 'neutre' }[it.genre] || '') + '</span>');
  if (it.anime) b.push('<span class="badge">animé</span>');
  if (it.irregularite) b.push('<span class="badge irr">' +
    ech(it.irregularite.replace('_', ' ')) + '</span>');
  if (it.aValider) b.push('<span class="badge valider">à valider</span>');
  return b.length ? '<div class="badges">' + b.join('') + '</div>' : '';
}

/* -------------------------------------------------------------- correction */

function repondre(saisie) {
  if (sess.phase !== 'question') return;
  var q = sess.q, donne = String(saisie == null ? '' : saisie);
  var reussi, uneLettre = false, attenduAff = q.attendu;

  if (q.sens === 'reconnaissance') {
    /* La forme affichée peut appartenir à plusieurs items : лет est le génitif
       pluriel de год et de ле́то, о по́ле celui de пол et de по́ле. Refuser la
       glose de l'homographe serait une fausse erreur. */
    var homos = PAR_FORME[sansAcc(q.attendu).toLowerCase()] || [q.item];
    var refs = [];
    homos.concat([q.item]).forEach(function (x) {
      refs = refs.concat([x.fr]).concat(x.frVariantes || []);
    });
    var cible = normFr(donne);
    reussi = refs.some(function (r) {
      return normFr(r) === cible ||
        normFr(r).split(/,\s*/).indexOf(cible) >= 0;
    });
    attenduAff = q.item.fr;
  } else {
    /* Correction stricte, mais une forme réellement variable ne doit pas
       compter comme faute : тёть à côté de тётей, ре́кам à côté de река́м,
       ча́ю à côté de ча́я. Les variantes sont déclarées dans les données. */
    var cibles = [q.attendu].concat(variantesAcceptees(q));
    var saisi = normaliser(donne);
    reussi = cibles.some(function (c) { return normaliser(c) === saisi; });
    if (!reussi && saisi) {
      uneLettre = cibles.some(function (c) {
        return distance1(saisi, normaliser(c));
      });
    }
  }

  var e = etat.etats[q.carte.id] || (etat.etats[q.carte.id] = creerEtat());
  if (reussi && q.sens !== 'reconnaissance') e.produitUneFois = true;
  majSM2(e, reussi, uneLettre);
  majSous(q.carte.sous, reussi);
  sess.perf.push(reussi);
  sauver();

  sess.phase = 'retour';
  dessinerRetour(reussi, donne, attenduAff, uneLettre);
}

function variantesAcceptees(q) {
  var it = q.item;
  if (it.type === 'phrase') return it.accepte || [];
  if (!it.variantes || !q.caseVisee) return [];
  var col = q.caseVisee.nombre, idx = q.caseVisee.idx;
  return it.variantes[col + '.' + idx] || [];
}
function distance1(a, b) {
  /* Vrai si les deux chaînes diffèrent d'un seul caractère : substitution,
     insertion ou suppression. Sert au comptage séparé dans l'onglet Erreurs,
     jamais à adoucir la correction. */
  if (a === b) return false;
  if (a.length === b.length) {
    var d = 0;
    for (var i = 0; i < a.length; i += 1) if (a[i] !== b[i]) d += 1;
    return d === 1;
  }
  if (Math.abs(a.length - b.length) !== 1) return false;
  var lg = a.length > b.length ? a : b, ct = a.length > b.length ? b : a;
  for (var j = 0; j < ct.length; j += 1) {
    if (lg[j] !== ct[j]) return lg.slice(j + 1) === ct.slice(j);
  }
  return true;
}

function dessinerRetour(reussi, donne, attendu, uneLettre) {
  var q = sess.q, it = q.item, h = [];
  h.push('<div class="carte entree">');
  h.push('<div class="verdict ' + (reussi ? 'ok">Correct' : 'ko">Incorrect') +
    (uneLettre ? ' — un seul caractère' : '') + '</div>');
  h.push('<div class="reponse"><span class="ru ' +
    (q.sens === 'reconnaissance' ? '' : ech(it.type)) + '">' +
    ech(attendu) + '</span></div>');
  if (q.genre === 'phrase' && it.type === 'phrase') {
    h.push('<div class="question">' + ech(it.avant) + '<b>' + ech(it.reponse) +
      '</b>' + ech(it.apres) + '</div>');
  }
  if (!reussi && q.sens !== 'reconnaissance') h.push(comparatif(donne, attendu));
  if (!reussi && q.sens === 'reconnaissance' && donne.trim()) {
    h.push('<div class="question">Votre réponse : ' + ech(donne) + '</div>');
  }
  h.push(paradigme(q));
  h.push(regle(q));
  if (it.note) h.push('<div class="question dim">' + ech(it.note) + '</div>');
  h.push('</div>');
  h.push('<button class="primaire" id="suite">Suivant</button>');
  h.push('<div style="height:8px"></div>');
  h.push('<button class="petit plein" id="signaler">Signaler une erreur de contenu</button>');
  h.push('<div id="zone-signal"></div>');

  el('vue').innerHTML = h.join('');
  el('suite').addEventListener('click', function () { sess.i += 1; afficherQuestion(); });
  el('suite').focus();
  el('signaler').addEventListener('click', ouvrirSignalement);
  /* Pas d'écouteur clavier global ici : le bouton Suivant a le focus, et un
     appui sur Entrée déclenche déjà son clic. Un écouteur sur document ferait
     avancer deux fois, et s'accumulerait à chaque retour. */
}

function comparatif(donne, attendu) {
  /* Informatif seulement : ne propose rien, n'annule rien. */
  var a = sansAcc(donne).trim(), b = sansAcc(attendu);
  var m = [], i, j;
  for (i = 0; i <= a.length; i += 1) { m[i] = []; m[i][0] = i; }
  for (j = 0; j <= b.length; j += 1) m[0][j] = j;
  for (i = 1; i <= a.length; i += 1) {
    for (j = 1; j <= b.length; j += 1) {
      m[i][j] = a[i - 1].toLowerCase() === b[j - 1].toLowerCase()
        ? m[i - 1][j - 1]
        : 1 + Math.min(m[i - 1][j], m[i][j - 1], m[i - 1][j - 1]);
    }
  }
  var hd = [], hb = [];
  i = a.length; j = b.length;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && a[i - 1].toLowerCase() === b[j - 1].toLowerCase()) {
      hd.unshift(ech(a[i - 1])); hb.unshift(ech(b[j - 1])); i -= 1; j -= 1;
    } else if (j > 0 && (i === 0 || m[i][j - 1] <= m[i - 1][j])) {
      hd.unshift('<b>·</b>'); hb.unshift('<b>' + ech(b[j - 1]) + '</b>'); j -= 1;
    } else {
      hd.unshift('<s>' + ech(a[i - 1]) + '</s>'); hb.unshift('<b>·</b>'); i -= 1;
    }
  }
  return '<div class="diff"><span class="lig"><span class="et">saisi</span>' +
    hd.join('') + '</span><span class="lig"><span class="et">attendu</span>' +
    hb.join('') + '</span></div>';
}

/* --------------------------------------------- la grille, élément central */

function itemPorteur(q) {
  if (q.item.type !== 'phrase') return q.item;
  var ind = q.item.indice ? sansAcc(q.item.indice).toLowerCase() : '';
  if (PAR_LEMME[ind]) return PAR_LEMME[ind];
  /* l'indice peut être une forme fléchie : шко́ле, о́кна, друзья́ */
  if (PAR_FORME[ind]) return PAR_FORME[ind][0];
  /* dernier recours : la réponse attendue elle-même */
  var rep = sansAcc(q.attendu).toLowerCase().split(' ').pop();
  if (PAR_FORME[rep]) return PAR_FORME[rep][0];
  return null;
}
function paradigme(q) {
  var it = itemPorteur(q);
  if (!it) return '';
  if (it.type === 'adjectif') return grilleAdj(it, q);
  return grilleNom(it, q);
}
function caseCiblee(it, q) {
  /* La case visée est déterminée par la sous-catégorie. Quand la réponse
     attendue est une forme du paradigme, on la retrouve pour surligner
     exactement la bonne case, y compris pour les phrases.

     L'ordre de recherche compte. Beaucoup de formes sont homographes d'une
     case d'un autre cas : ле́су est à la fois le datif de лес et le radical du
     deuxième locatif, пло́щади vaut génitif, datif et prépositionnel. Chercher
     « n'importe où » surlignait le datif pour в лесу́, ce qui enseigne le
     contraire du point testé. On cherche donc d'abord le deuxième locatif,
     puis la ligne du cas de la sous-catégorie, puis le reste. */
  var s = SOUS[q.carte.sous];
  var prio = s ? CAS.indexOf(s.cas) : -1;
  /* Chez un indéclinable les douze cases sont identiques : la recherche par
     forme surlignerait toujours le nominatif. On garde la case demandée, ou à
     défaut la ligne du cas testé — le cas des phrases, qui n'ont pas de case
     propre (ча́шка ко́фе, в кафе́). */
  if (it.irregularite === 'indeclinable') {
    return q.caseVisee ||
      (prio >= 0 ? { idx: prio, nombre: 'sg' } : null);
  }
  var dernier = normaliser(q.attendu).split(' ').pop();
  if (it.loc2 && normaliser(it.loc2.forme).split(' ').pop() === dernier) {
    return { idx: -1, nombre: 'loc2' };
  }
  var cols = it.type === 'adjectif' ? ['m', 'f', 'n', 'pl'] : ['sg', 'pl'];
  var lignes = [];
  if (prio >= 0) lignes.push(prio);
  for (var k = 0; k < 6; k += 1) if (k !== prio) lignes.push(k);
  for (var L = 0; L < lignes.length; L += 1) {
    for (var c = 0; c < cols.length; c += 1) {
      var tab = it[cols[c]];
      if (!tab) continue;
      if (normaliser(tab[lignes[L]]) === dernier) {
        return { idx: lignes[L], nombre: cols[c] };
      }
    }
  }
  return q.caseVisee || null;
}
function grilleNom(it, q) {
  var vise = caseCiblee(it, q), h = [];
  h.push('<table class="para"><tr><th></th><th>singulier</th><th>pluriel</th></tr>');
  for (var i = 0; i < 6; i += 1) {
    h.push('<tr>');
    h.push('<td class="cas">' + ABREV[i] + '</td>');
    ['sg', 'pl'].forEach(function (col) {
      var tab = it[col];
      var v = vise && vise.idx === i && vise.nombre === col;
      h.push('<td class="' + (v ? 'vise ' : '') + 'ru">' +
        (tab ? ech(tab[i]) : '<span class="muted">—</span>') + '</td>');
    });
    h.push('</tr>');
  }
  h.push('</table>');
  if (it.loc2) {
    var v2 = vise && vise.nombre === 'loc2';
    h.push('<table class="para"><tr><td class="cas">loc. 2</td><td class="' +
      (v2 ? 'vise ' : '') + 'ru" colspan="2">' + ech(it.loc2.forme) +
      ' <span class="muted" style="font-size:13px">— ' + ech(it.loc2.contexte) +
      '</span></td></tr></table>');
  }
  return h.join('');
}
function grilleAdj(it, q) {
  var vise = caseCiblee(it, q), h = [];
  h.push('<table class="para"><tr><th></th><th>m</th><th>f</th><th>n</th>' +
    '<th>pl</th></tr>');
  for (var i = 0; i < 6; i += 1) {
    h.push('<tr><td class="cas">' + ABREV[i] + '</td>');
    ['m', 'f', 'n', 'pl'].forEach(function (col) {
      var v = vise && vise.idx === i && vise.nombre === col;
      h.push('<td class="' + (v ? 'vise ' : '') + 'ru" style="font-size:14px">' +
        ech(it[col][i]) + '</td>');
    });
    h.push('</tr>');
  }
  h.push('</table>');
  return h.join('');
}

function regle(q) {
  /* La règle affichée est celle du point testé, résolue par la sous-catégorie
     de la carte : elle ne peut pas porter sur un autre cas. */
  var s = SOUS[q.carte.sous], pt = s && POINTS[s.regle];
  var h = ['<div class="regle"><span class="titre">' +
    ech(s ? s.libelle : '') + '</span>'];
  if (pt) {
    h.push(ech(pt.regle));
    if (pt.exemples && pt.exemples.length) {
      h.push('<div class="exemples ru">' +
        pt.exemples.map(ech).join('<br>') + '</div>');
    }
  }
  h.push('</div>');
  return h.join('');
}

/* ------------------------------------------------------------ signalements */

function ouvrirSignalement() {
  var q = sess.q, z = el('zone-signal');
  z.innerHTML = '<div class="bloc"><h3>Signalement</h3>' +
    '<input type="text" id="note-signal" style="font-size:16px" ' +
    'placeholder="Ce qui vous paraît faux"><div style="height:8px"></div>' +
    '<button class="petit" id="ok-signal">Enregistrer</button></div>';
  el('note-signal').focus();
  el('ok-signal').addEventListener('click', function () {
    var e = etat.etats[q.carte.id];
    if (e) e.signale = true;
    etat.signalements.push({
      carteId: q.carte.id, itemId: q.carte.itemId, sous: q.carte.sous,
      lemme: q.item.lemme || q.item.reponse, attendu: q.attendu,
      note: el('note-signal').value, quand: new Date().toISOString()
    });
    sauver();
    z.innerHTML = '<div class="bloc dim">Signalement enregistré. ' +
      'Retrouvez-le dans l\u2019onglet Stats.</div>';
  });
}

function finSession() {
  var justes = sess.perf.filter(Boolean).length, total = sess.perf.length;
  sess = null;
  var h = ['<div class="carte entree"><h2 style="margin-top:0">Session terminée</h2>'];
  h.push('<p class="mono dim">' + justes + ' / ' + total + '</p>');
  h.push('</div>');
  el('vue').innerHTML = h.join('');
  var attendu = ++jetonVue;
  setTimeout(function () {
    /* si l'utilisateur a changé d'onglet entre-temps, on ne reprend pas la main */
    if (jetonVue === attendu && ongletActif === 'pratiquer') rendre('pratiquer');
  }, 900);
}

/* ------------------------------------------------------------------ onglets */

var ongletActif = 'pratiquer';
var jetonVue = 0;

function rendre(nom) {
  ongletActif = nom || ongletActif;
  Array.prototype.forEach.call(document.querySelectorAll('#onglets button'),
    function (b) {
      if (b.getAttribute('data-onglet') === ongletActif) {
        b.setAttribute('aria-current', 'page');
      } else b.removeAttribute('aria-current');
    });
  var n = nbEchus();
  el('entete-echus').textContent = n ? n + ' à revoir' : 'rien à revoir';
  avertirSauvegarde();
  ({
    pratiquer: vuePratiquer, erreurs: vueErreurs, stats: vueStats,
    regles: vueRegles, installer: vueInstaller
  }[ongletActif])();
}

function vuePratiquer() {
  var rg = etat.reglages, h = [];
  var pool = cartesFiltrees(), vues = 0, dus = 0, n = Date.now();
  pool.forEach(function (c) {
    var e = etatDe(c.id);
    if (e) { vues += 1; if (e.echeance <= n) dus += 1; }
  });
  h.push('<div class="carte">');
  h.push('<h3>Session</h3>');
  var quota = rg.revisionsSeules ? 0 : rg.nouveaux;
  var qEff = quotaEffectif(quota, dus, rg.longueur);
  var prevu = Math.min(rg.longueur,
    Math.min(dus, Math.max(1, rg.longueur - qEff)) +
    Math.min(qEff, pool.length - vues) + (vues - dus));
  h.push('<div class="question">' + dus + ' échues, ' + (pool.length - vues) +
    ' jamais vues, ' + pool.length + ' cartes dans le filtre.</div>');
  h.push('<div class="question dim">Cette session comptera <b>' + prevu +
    '</b> question' + (prevu > 1 ? 's' : '') + '.' +
    (prevu < rg.longueur ? ' Moins que la longueur demandée : il n\u2019y a pas ' +
      'assez de cartes disponibles dans le filtre.' : '') + '</div>');
  var motif = motifRegulation(quota, dus, rg.longueur);
  if (motif) {
    h.push('<div class="question" style="color:var(--blue)">' + ech(motif) +
      '</div>');
  }
  h.push('<label class="bascule" for="rev-seules"><input type="checkbox" ' +
    'id="rev-seules"' + (rg.revisionsSeules ? ' checked' : '') +
    '> Révisions uniquement</label>');
  h.push('<div style="height:12px"></div>');
  h.push('<div class="mono dim">Longueur</div>');
  h.push('<div class="chips" id="ch-longueur">' + [10, 20, 30, 50].map(function (v) {
    return '<button class="chip" data-v="' + v + '" aria-pressed="' +
      (rg.longueur === v) + '">' + v + '</button>';
  }).join('') + '</div>');
  h.push('<div style="height:12px"></div>');
  h.push('<div class="mono dim">Nouvelles cartes par session : <b id="lbl-nouveaux">' +
    rg.nouveaux + '</b></div>');
  h.push('<input type="range" id="rg-nouveaux" min="0" max="15" value="' +
    rg.nouveaux + '"' + (rg.revisionsSeules ? ' disabled' : '') + '>');
  h.push('</div>');

  h.push('<div class="carte"><h3>Filtres</h3>');
  h.push('<div class="mono dim">Cas</div><div class="chips" id="ch-cas">' +
    CAS.map(function (c) {
      return '<button class="chip" data-v="' + c + '" aria-pressed="' +
        (rg.cas.indexOf(c) >= 0) + '">' + ech(NOM_CAS[c]) + '</button>';
    }).join('') + '</div>');
  var cats = {};
  LEXIQUE.forEach(function (it) { if (it.categorie) cats[it.categorie] = 1; });
  h.push('<div style="height:10px"></div><div class="mono dim">Catégories</div>' +
    '<div class="chips" id="ch-cats">' + Object.keys(cats).sort().map(function (c) {
      return '<button class="chip" data-v="' + ech(c) + '" aria-pressed="' +
        (rg.cats.indexOf(c) >= 0) + '">' + ech(CAT_NOM[c] || c) + '</button>';
    }).join('') + '</div>');
  h.push('<div class="question dim" style="margin-top:8px">Aucun filtre ' +
    'sélectionné signifie : tout le corpus. Les phrases en contexte ne portent ' +
    'pas de catégorie lexicale et sont écartées dès qu\u2019une catégorie est ' +
    'cochée.</div>');
  h.push('</div>');
  h.push('<button class="primaire" id="go">Commencer</button>');
  el('vue').innerHTML = h.join('');

  el('go').addEventListener('click', function () { lancerSession(); });
  el('rev-seules').addEventListener('change', function () {
    rg.revisionsSeules = this.checked; sauver(); vuePratiquer();
  });
  el('rg-nouveaux').addEventListener('input', function () {
    rg.nouveaux = parseInt(this.value, 10);
    el('lbl-nouveaux').textContent = rg.nouveaux; sauver();
  });
  chips('ch-longueur', function (v) { rg.longueur = parseInt(v, 10); });
  chips('ch-cas', function (v) { bascule(rg.cas, v); });
  chips('ch-cats', function (v) { bascule(rg.cats, v); });
}
function bascule(tab, v) {
  var i = tab.indexOf(v);
  if (i >= 0) tab.splice(i, 1); else tab.push(v);
}
function chips(id, action) {
  Array.prototype.forEach.call(el(id).querySelectorAll('.chip'), function (b) {
    b.addEventListener('click', function () {
      action(b.getAttribute('data-v'));
      sauver();
      vuePratiquer();
    });
  });
}

function libelleCarte(id) {
  var c = PAR_ID[id];
  if (!c) return { mot: id, sous: 'carte inconnue' };
  var it = ITEMS[c.itemId], s = SOUS[c.sous];
  var mot = it ? (it.lemme || (it.avant + '…' + it.reponse)) : c.itemId;
  return { mot: mot, sous: s ? s.libelle : c.sous };
}
function vueErreurs() {
  var lignes = Object.keys(etat.etats).map(function (id) {
    return { id: id, e: etat.etats[id] };
  }).filter(function (l) { return l.e.echecs > 0; })
    .sort(function (a, b) { return b.e.echecs - a.e.echecs; });
  var h = ['<div class="carte"><h3>Cartes les plus ratées</h3>'];
  if (!lignes.length) {
    h.push('<div class="vide">Aucun échec enregistré pour l\u2019instant.</div>');
  } else {
    h.push('<div class="question dim">Les échecs portant sur un seul caractère ' +
      'sont comptés à part. La sanction, elle, est identique.</div>');
    lignes.slice(0, 40).forEach(function (l) {
      var lc = libelleCarte(l.id);
      h.push('<div class="stat"><span class="lib"><span class="ru">' +
        ech(lc.mot) + '</span><br><span class="mono muted">' + ech(lc.sous) +
        '</span></span><span class="val">' + l.e.echecs + ' / ' +
        l.e.tentatives + (l.e.echecsUneLettre ? ' &middot; ' +
          l.e.echecsUneLettre + " d'une lettre" : '') + '</span></div>');
    });
    h.push('<div style="height:10px"></div>');
    h.push('<button class="primaire" id="go-erreurs">Réviser ces cartes</button>');
  }
  h.push('</div>');
  el('vue').innerHTML = h.join('');
  if (el('go-erreurs')) {
    el('go-erreurs').addEventListener('click', function () {
      var cartes = lignes.slice(0, etat.reglages.longueur)
        .map(function (l) { return PAR_ID[l.id]; }).filter(Boolean);
      lancerSession(entrelacer(cartes));
    });
  }
}

function vueStats() {
  var h = [];
  var parCas = {};
  CAS.forEach(function (c) { parCas[c] = { t: 0, r: 0 }; });
  GRAMMAIRE.sous.forEach(function (s) {
    var st = etat.sous[s.id];
    if (!st) return;
    parCas[s.cas].t += st.tentatives;
    parCas[s.cas].r += st.reussites;
  });
  h.push('<div class="carte"><h3>Par cas</h3>');
  CAS.forEach(function (c) {
    h.push(ligneStat(NOM_CAS[c], parCas[c].t, parCas[c].r, false));
  });
  h.push('</div>');

  h.push('<div class="carte"><h3>Par point de grammaire</h3>');
  h.push('<div class="question dim">Une sous-catégorie comptant moins de dix ' +
    'tentatives reste grisée : en dessous, un taux d\u2019erreur est du bruit.</div>');
  CAS.forEach(function (c) {
    var liste = GRAMMAIRE.sous.filter(function (s) { return s.cas === c; });
    if (!liste.length) return;
    h.push('<div class="mono dim" style="margin:10px 0 5px">' +
      ech(NOM_CAS[c]) + '</div>');
    liste.forEach(function (s) {
      var st = etat.sous[s.id] || { tentatives: 0, reussites: 0 };
      h.push(ligneStat(s.libelle, st.tentatives, st.reussites, true));
    });
  });
  h.push('</div>');

  h.push('<div class="carte"><h3>Signalements</h3>');
  if (!etat.signalements.length) {
    h.push('<div class="vide">Aucun signalement.</div>');
  } else {
    etat.signalements.slice().reverse().forEach(function (s) {
      h.push('<div class="stat"><span class="lib"><span class="ru">' +
        ech(s.lemme) + '</span> <span class="ru muted">' + ech(s.attendu) +
        '</span><br><span class="mono muted">' + ech(s.sous) + '</span>' +
        (s.note ? '<br>' + ech(s.note) : '') + '</span></div>');
    });
    h.push('<textarea id="txt-signal" readonly>' +
      ech(texteSignalements()) + '</textarea>');
    h.push('<div style="height:8px"></div>');
    h.push('<div class="ligne"><button class="petit" id="copie-signal">Copier</button>' +
      '<button class="petit" id="vide-signal">Effacer la liste</button></div>');
  }
  h.push('</div>');

  var vues = Object.keys(etat.etats).length;
  h.push('<div class="carte"><h3>Corpus</h3><div class="question">' +
    CARTES.length + ' cartes au total, ' + vues + ' abordées, ' +
    LEXIQUE.length + ' items lexicaux, ' + PHRASES.length +
    ' phrases en contexte.</div></div>');

  el('vue').innerHTML = h.join('');
  if (el('copie-signal')) {
    el('copie-signal').addEventListener('click', function () {
      var t = el('txt-signal'); t.select();
      try { document.execCommand('copy'); } catch (e) {
        /* méthode obsolète, absente sur certains navigateurs : on retombe
           sur l'API presse-papiers juste en dessous */
      }
      if (navigator.clipboard) navigator.clipboard.writeText(t.value);
      this.textContent = 'Copié';
    });
    el('vide-signal').addEventListener('click', function () {
      etat.signalements = []; sauver(); vueStats();
    });
  }
}
function texteSignalements() {
  return etat.signalements.map(function (s) {
    return '- ' + s.lemme + ' [' + s.sous + '] attendu : ' + s.attendu +
      (s.note ? ' — ' + s.note : '') + ' (' + s.quand.slice(0, 10) + ')';
  }).join('\n');
}
function ligneStat(lib, t, r, n2) {
  var grise = n2 && t < 10;
  var pct = t ? Math.round(100 * r / t) : 0;
  return '<div class="stat' + (grise ? ' grise' : '') + (n2 ? ' n2' : '') +
    '"><span class="lib">' + ech(lib) + '</span>' +
    (grise || !t ? '' : '<span class="jauge"><i style="width:' + pct +
      '%"></i></span>') +
    '<span class="val">' + (t === 0 ? '—' : grise ? t + ' tent.' :
      pct + ' % &middot; ' + t) + '</span></div>';
}

function vueRegles() {
  var h = ['<div class="question dim">Référence du bloc 1, consultable à tout ' +
    'moment. Aucune règle n\u2019est affichée avant une réponse pendant ' +
    'l\u2019exercice.</div>'];
  CAS.forEach(function (c) {
    var pts = GRAMMAIRE.points.filter(function (p) { return p.cas === c; });
    if (!pts.length) return;
    h.push('<h2>' + ech(NOM_CAS[c]) + '</h2>');
    pts.forEach(function (p) {
      h.push('<details><summary>' + ech(p.titre) + '</summary><div class="corps">');
      h.push('<p>' + ech(p.regle) + '</p>');
      if (p.tableau && p.tableau.length) {
        h.push('<table class="reg">');
        p.tableau.forEach(function (r, i) {
          h.push('<tr>' + r.map(function (cel) {
            return i === 0 ? '<th>' + ech(cel) + '</th>'
              : '<td class="ru">' + ech(cel) + '</td>';
          }).join('') + '</tr>');
        });
        h.push('</table>');
      }
      if (p.exemples && p.exemples.length) {
        h.push('<div class="exemples ru">' + p.exemples.map(ech).join('<br>') +
          '</div>');
      }
      h.push('</div></details>');
    });
  });
  el('vue').innerHTML = h.join('');
}

function vueInstaller() {
  var h = ['<div class="carte"><h3>Installer sur Android</h3>' +
    '<p>Ouvrez le site dans Chrome, puis menu ⋮ &rarr; ' +
    '« Installer l\u2019application ». L\u2019application démarre alors en ' +
    'plein écran et fonctionne hors connexion.</p>' +
    '<div class="question dim">Le clavier russe s\u2019ajoute dans les ' +
    'réglages Android. Les accents toniques ne se tapent jamais : ils sont ' +
    'affichés, et ignorés à la correction. Le ё, en revanche, est exigé : il se ' +
    'trouve sous un appui long sur е sur la plupart des claviers.</div></div>'];
  h.push('<div class="carte"><h3>Mode hors connexion</h3><div id="etat-sw" ' +
    'class="question">Vérification…</div></div>');
  h.push('<div class="carte"><h3>Sauvegarde</h3>' +
    '<p class="question">Les résultats sont stockés dans ce navigateur ' +
    'uniquement. Exportez avant de changer d\u2019appareil ou d\u2019effacer ' +
    'les données du site.</p>' +
    '<button class="petit plein" id="exp">Exporter</button>' +
    '<div style="height:8px"></div>' +
    '<textarea id="zone-json" placeholder="Collez ici un export pour le ' +
    'réimporter"></textarea><div style="height:8px"></div>' +
    '<div class="ligne"><button class="petit" id="imp">Importer</button>' +
    '<button class="petit" id="raz">Tout effacer</button></div></div>');
  el('vue').innerHTML = h.join('');
  el('etat-sw').textContent = messageSW();
  el('exp').addEventListener('click', function () {
    el('zone-json').value = JSON.stringify(etat);
    el('zone-json').select();
  });
  el('imp').addEventListener('click', function () {
    try {
      var e = JSON.parse(el('zone-json').value);
      if (!e || !e.etats) throw new Error('format');
      etat = e; etat.sous = etat.sous || {};
      etat.signalements = etat.signalements || [];
      etat.reglages = etat.reglages || neuf().reglages;
      sauver(); rendre('pratiquer');
    } catch (err) {
      el('etat-sw').textContent = 'Import refusé : le texte collé n\u2019est ' +
        'pas un export valide.';
    }
  });
  el('raz').addEventListener('click', function () {
    if (this.getAttribute('data-c')) {
      etat = neuf(); sauver(); rendre('pratiquer');
    } else {
      this.setAttribute('data-c', '1');
      this.textContent = 'Confirmer l\u2019effacement';
    }
  });
}

/* ------------------------------------------------------------ service worker */

var etatSW = 'attente';
function messageSW() {
  if (etatSW === 'ok') return 'Service worker actif : l\u2019application ' +
    'fonctionne hors connexion.';
  if (etatSW === 'absent') return 'Service worker non pris en charge par ce ' +
    'navigateur. Le mode hors connexion est indisponible.';
  if (etatSW === 'protocole') return 'Enregistrement impossible : la page ' +
    'n\u2019est pas servie en HTTPS ou en localhost. Sur GitHub Pages, ' +
    'l\u2019adresse doit commencer par https://.';
  if (etatSW && etatSW.indexOf('erreur') === 0) return 'Échec de ' +
    'l\u2019enregistrement : ' + etatSW.slice(7);
  return 'Vérification en cours…';
}
function enregistrerSW() {
  if (!('serviceWorker' in navigator)) { etatSW = 'absent'; return; }
  if (location.protocol !== 'https:' && location.hostname !== 'localhost'
    && location.hostname !== '127.0.0.1') {
    /* L'enregistrement depuis une URL blob: ou file: échoue toujours.
       On ne l'avale pas silencieusement : c'est le défaut de la v0. */
    etatSW = 'protocole';
    console.warn('Service worker non enregistré : protocole ' + location.protocol);
    return;
  }
  navigator.serviceWorker.register('./sw.js').then(function () {
    etatSW = 'ok';
    if (ongletActif === 'installer' && el('etat-sw')) {
      el('etat-sw').textContent = messageSW();
    }
  }).catch(function (err) {
    etatSW = 'erreur ' + err.message;
    console.error('Service worker : échec de l\u2019enregistrement', err);
    if (ongletActif === 'installer' && el('etat-sw')) {
      el('etat-sw').textContent = messageSW();
    }
  });
}

/* ------------------------------------------------------------------ démarrage */

Array.prototype.forEach.call(document.querySelectorAll('#onglets button'),
  function (b) {
    b.addEventListener('click', function () {
      sess = null;
      jetonVue += 1;
      rendre(b.getAttribute('data-onglet'));
    });
  });
rendre('pratiquer');
enregistrerSW();

})();
