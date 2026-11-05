# Architecture Technique et Principes de Conception

## 1. Philosophie et Contraintes Architecturales

Le projet **Modor — Mode & Mémoire** est conçu selon des règles strictes d'ingénierie logicielle pour le web patrimonial et éducatif :

1. **Zero-Backend Infrastructure** :
   - Aucun serveur Node.js, Express ou base de données distante n'est requis en production.
   - L'application est compilée sous la forme d'une SPA (Single Page Application) statique optimisée, directement déployable sur un réseau de diffusion de contenu (CDN) tel que Cloudflare Pages, GitHub Pages ou Vercel.
2. **100% Offline-First (PWA)** :
   - L'intégralité du corpus (22 périodes, 22 vêtements, 23 créateurs, 13 silhouettes géométriques, 4 modèles anatomiques, 18 questions de quiz, 67 planches documentaires muséales) est embarquée localement.
   - Grâce à un Service Worker configuré avec `vite-plugin-pwa`, l'application fonctionne sans aucune perte de fonctionnalité même en l'absence totale de réseau.
3. **Persistance Locale et Respect de la Vie Privée** :
   - Les données utilisateur (favoris, notes de recherche, historique de visite, scores de quiz) sont conservées exclusivement sur le périphérique de l'utilisateur via l'API `LocalStorage`.
   - Fonctionnalité intégrée d'exportation et d'importation de sauvegarde JSON pour la portabilité sans compte tiers.

---

## 2. Pile Technologique

- **Framework UI** : React 19 (TypeScript strict)
- **Moteur de Build & Bundler** : Vite 8
- **PWA & Cache Hors-Ligne** : `vite-plugin-pwa` (Workbox)
- **Styles & Design System** : Tailwind CSS v4 (palette chromatique institutionnelle)
- **Typographie** : Cormorant Garamond (titrages d'inspiration Beaux-Arts) et Plus Jakarta Sans (corps de texte ergonomique)
- **Iconographie** : Lucide React
- **Suite de Tests** : Vitest (tests unitaires, d'intégrité référentielle et de recherche)
- **Qualité de Code** : ESLint 10 + `@typescript-eslint/parser`

---

## 3. Structure de l'Arborescence

```text
/
├── docs/                             # Documentation technique et éditoriale
│   ├── ACCESSIBILITE.md              # Audit WCAG 2.2 AA
│   ├── ARCHITECTURE.md               # Ce document
│   ├── AUDIT_INITIAL.md              # Audit d'entrée et plan de refonte
│   ├── GUIDE_EDITORIAL.md            # Charte éditoriale et historique
│   ├── SOURCES_ET_LICENCES.md        # Provenances, musées et licences
│   ├── TESTS.md                      # Guide d'exécution de la suite de tests
│   └── RAPPORT_FINAL.md              # Synthèse générale et métriques
├── public/                           # Fichiers statiques et assets PWA
│   ├── _headers                      # Directives de sécurité Cloudflare Pages
│   ├── _redirects                    # Routage SPA Cloudflare Pages
│   ├── apple-touch-icon.png          # Icône Apple iOS
│   ├── icon.svg                      # Logo vectoriel de la marque
│   ├── pwa-192x192.png               # Icône PWA Android / Chrome
│   ├── pwa-512x512.png               # Icône PWA grand format
│   └── images/                       # Fonds iconographique local
│       └── historical/               # 67 planches documentaires locales
├── scripts/                          # Scripts d'outillage
│   └── generate_images.js            # Générateur de planches locales via Sharp
├── src/                              # Code source applicatif
│   ├── components/                   # Composants React modulaires
│   │   ├── anatomy/                  # Vue dissection anatomique et hotspots
│   │   ├── common/                   # Navbar, Footer, Modal, Indicateurs PWA
│   │   ├── designers/                # Panthéon des créateurs et biographies
│   │   ├── favorites/                # Gestionnaire de favoris, notes et export
│   │   ├── gallery/                  # Galerie iconographique et cartouches
│   │   ├── garments/                 # Typologie des vêtements et filtres
│   │   ├── periods/                  # Fiche de période aux 19 rubriques
│   │   ├── quiz/                     # Moteur interactif de quiz d'époque
│   │   ├── silhouettes/              # Rendu vectoriel SVG et comparateur
│   │   └── timeline/                 # Chronologie dynamique par siècles
│   ├── data/                         # Base de connaissances typée
│   │   ├── anatomy.ts                # Modèles anatomiques et points d'intérêt
│   │   ├── designers.ts              # 23 notices de créateurs et maisons
│   │   ├── garments.ts               # 22 fiches de vêtements indispensables
│   │   ├── periods.ts                # 22 périodes historiques (1500–2026)
│   │   ├── quizzes.ts                # 18 questions historiques et anecdotes
│   │   ├── silhouettes.ts            # Paramètres géométriques des silhouettes
│   │   └── sources.ts                # Institutions et bibliographie
│   ├── hooks/                        # Hooks React personnalisés (favoris, offline)
│   ├── services/                     # Logique métier pure
│   │   ├── search.ts                 # Moteur de recherche accent-insensible
│   │   ├── storage.ts                # Gestionnaire LocalStorage & import/export
│   │   └── validation.ts             # Moteur de validation d'intégrité
│   ├── test/                         # Suite de tests Vitest
│   ├── types/                        # Déclarations d'interfaces TypeScript
│   ├── App.tsx                       # Composant racine et gestion d'état d'onglets
│   ├── index.css                     # Directives Tailwind et accessibilité
│   └── main.tsx                      # Point d'entrée DOM
├── vite.config.ts                    # Configuration Vite & VitePWA
└── package.json                      # Scripts et dépendances
```

---

## 4. Moteur Vectoriel de Silhouette (`SilhouetteFigure.tsx`)

Plutôt que de s'appuyer sur des images matricielles statiques pouvant devenir floues ou être lentes à charger, Modor intègre un moteur de rendu vectoriel géométrique :
- **Paramètres normalisés** : Largeur d'épaules, largeur et position verticale de taille, amplitude de hanches, largeur et retombée de jupe.
- **Calques superposables** :
  - Calque de silhouette extérieure (robe, étoffes, drapés) ;
  - Calque de structure sous-jacente commutable (baleines de corset, armature de vertugadin, cerceaux de crinoline, tournure à ressorts) ;
  - Calque de repères métriques (côtes d'amplitude et comparatif anatomique).
- Cette conception garantit un affichage net sur tout écran Retina, 4K ou mobile, sans consommation excessive de mémoire.

---

## 5. Moteur de Recherche Client (`search.ts`)

Pour offrir une réactivité instantanée (< 5 ms) sans appel réseau :
1. **Normalisation Unicode** : Les chaînes de recherche et l'ensemble du corpus sont passés par `normalize('NFD').replace(/[\u0300-\u036f]/g, '')`, permettant à une requête comme `crinoline` de matcher `Crinoline` ou à `courreges` de matcher `Courrèges`.
2. **Dictionnaire de Synonymes Historiques** : Résolution automatique des appellations vernaculaires vers les concepts scientifiques :
   - *faux-cul* ➔ *tournure*, *pouf*, *cul de Paris* ;
   - *watteau* ➔ *robe à la française*, *plis Watteau* ;
   - *cage* ➔ *crinoline* ;
   - *lbd* ➔ *petite robe noire* ;
   - *power dressing* ➔ *tailleur années 80*, *épaulettes*.
3. **Pondération & Classement (Scoring)** :
   - Titre exact : 100 pts ;
   - Inclusion dans le titre : 50 pts ;
   - Mots-clés et sous-titres : 20-25 pts ;
   - Corps descriptif et matières : 10 pts.

---

## 6. Stratégie de Mise en Cache PWA (`vite-plugin-pwa`)

La configuration dans `vite.config.ts` assure :
- Le pré-cachement systématique de l'ensemble des fichiers `js`, `css`, `html`, `ico`, `png`, `svg` et `jpg` du build ;
- Le cache à l'exécution (*CacheFirst*) pour les polices distantes Google Fonts avec une durée de conservation d'un an (365 jours) et jusqu'à 30 entrées ;
- L'actualisation automatique du Service Worker (`registerType: 'autoUpdate'`) pour garantir que toute mise à jour du site est immédiatement distribuée au client sans nécessiter d'intervention complexe.
