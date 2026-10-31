# Modor — Mode & Mémoire
## Encyclopédie interactive de l'histoire de la mode féminine en France (XVIe – XXIe siècle)

Modor est une application web progressive (PWA) conçue comme un catalogue de musée et une encyclopédie historique, visuelle, interactive et pédagogique consacrée à l'évolution des vêtements féminins, des sous-structures et des silhouettes en France, de la Renaissance au XXIe siècle.

---

## 1. Fonctionnalités Principales

### A. Chronologie Interactive (1500–2026)
- Navigation chronologique siècle par siècle (XVIe, XVIIe, XVIIIe, XIXe, XXe, XXIe).
- Filtrage rapide par siècle et par période.
- 18 fiches de périodes exhaustives respectant la grille analytique en 19 sections documentaires (contexte politique, contexte social, morphologie, robes, pièces de dessous, accessoires, coiffures, chaussures, matières, usages, clivages sociaux, créateurs, sources).

### B. Comparateur de Silhouettes Normalisé
- Dessin vectoriel uniforme respectant une même posture (vue de face, proportions anatomiques 8,5 têtes, fond neutre).
- Mode Duo (côte à côte entre deux époques) et Galerie (4 époques simultanées).
- Calque des structures internes activable/désactivable (cages, vertugadins, paniers à coudes, crinolines d'acier, tournures en porte-à-faux, corsets sablier ou en S, guêpières).
- Repères métriques d'analyse morphologique (largeur d'épaules, hauteur/finesse de la taille, envergure de la jupe).
- Tableau différentiel morphologique automatique avec préréglages historiques (Rupture néoclassique 1789, Crinoline vs Tournure 1860/1885, Années Folles vs New Look 1947, etc.).

### C. Module « Anatomie d'une Silhouette »
- Dissection pédagogique interactive par points d'intérêt tactiles (Coiffure, Col/Fraise, Manches, Corsage, Corset, Taille, Jupe, Jupon, Armature mécanique, Chaussures).
- Modèles commutables par grandes époques de rupture (Renaissance Valois, Rococo Louis XV, Crinoline Second Empire, New Look Christian Dior).
- Fiches analytiques pour chaque couche : rôle anatomique, construction & coupe, matières textiles d'époque, évolution historique.

### D. Catalogue Raisonné des Vêtements
- Typologie complète : Robes, Structures & Cages, Corsets, Jupons, Vestes & Tailleurs, Pantalons, Accessoires & Fraises.
- Fiches complètes des pièces incontournables : *Vertugadin, Fraise, Robe à la française, Robe à l'anglaise, Panier à coudes, Corps à baleines, Robe Empire, Manche gigot, Crinoline cage, Tournure, Corset en S, Robe garçonne, Robe charleston, Robe en biais, New Look Bar, Tailleur Chanel, Smoking Saint Laurent, Mini-jupe Courrèges, Pantalon flare 70s, Tailleur Power Dressing 80s*.

### E. Panthéon des Grands Créateurs & Maisons de Couture
- Fiches biographiques détaillées des figures majeures de la haute couture parisienne : *Rose Bertin, Charles Frederick Worth, Jeanne Paquin, Paul Poiret, Coco Chanel, Madeleine Vionnet, Elsa Schiaparelli, Christian Dior, Pierre Balmain, Hubert de Givenchy, Yves Saint Laurent, André Courrèges, Claude Montana, Thierry Mugler, Jean Paul Gaultier, Karl Lagerfeld, Simon Porte Jacquemus, Marine Serre, Louis Hippolyte Leroy, Jean Patou, Sonia Rykiel, Kenzo Takada, Martin Margiela*.
- Distinction entre créateurs français et créateurs étrangers ayant exercé une influence déterminante sur le rayonnement de Paris.

### F. Galerie Iconographique & Crédits Patrimoniaux
- Grille des œuvres patrimoniales avec provenance vérifiée (Palais Galliera, Bibliothèque nationale de France / Gallica, Musée des Arts Décoratifs de Paris, The Metropolitan Museum of Art).
- Zoom haute définition avec cartouche d'accession muséale (artiste, date, institution, licence Domaine Public / CC0, lien source).

### G. Quiz d'Érudition & Apprentissage
- Quiz thématiques par siècle et quiz global.
- QCM avec validation immédiate et encadré d'explication historique détaillée (« Le saviez-vous ? »).
- Calcul du score, attribution d'un rang honorifique et sauvegarde locale des performances.

### H. Recherche Globale & Espace Personnel (Favoris & Notes)
- Moteur de recherche instantané à tolérance de frappe (accessible via `Ctrl+K` ou `Cmd+K`).
- Système de favoris persistant en LocalStorage.
- Bloc-notes personnel sur chaque époque.
- Export et Import des données utilisateur au format standard JSON avec validation de schéma.

---

## 2. Principes Techniques & Architecture

- **Zéro infrastructure backend** : Fonctionnement 100% autonome côté client.
- **Zéro API payante ou compte requis** : Confidentialité totale des données utilisateur.
- **PWA installable** : Conforme aux normes PWA de pointe (Service Worker, Web App Manifest complet, icônes 192/512/maskable, bouton d'installation in-app `PWAInstallButton`, instructions dédiées iOS Safari).
- **Cache hors-ligne complet** : Consultation intégrale des fiches historiques même sans connexion réseau.

### Arborescence du Projet

```
src/
├── types/                 # Interfaces TypeScript strictes (Period, Garment, Designer, Silhouette, Quiz)
├── data/
│   ├── periods.ts         # 18 périodes historiques documentées
│   ├── garments.ts        # Fiches typologiques des vêtements et structures
│   ├── designers.ts       # Fiches biographiques des créateurs
│   ├── silhouettes.ts     # Définitions morphologiques et géométriques normalisées
│   ├── anatomy.ts         # Modèles d'anatomie et points d'intérêt interactifs
│   ├── quizzes.ts         # Banque de questions de quiz historiques
│   └── sources.ts         # Répertoire des sources institutionnelles et archives
├── services/
│   ├── storage.ts         # Gestionnaire LocalStorage & Import/Export JSON
│   ├── search.ts          # Moteur d'indexation et de recherche textuelle
│   └── validation.ts      # Validateur automatisé d'intégrité référentielle
├── hooks/
│   ├── usePWAInstall.ts   # Détection PWA, événements installprompt & iOS
│   ├── useOnlineStatus.ts # Détection d'état réseau et hors-ligne
│   └── useFavorites.ts    # État réactif des favoris
├── components/
│   ├── common/            # Navbar (Top Bar Contract), Footer, PWAInstallButton, SearchModal
│   ├── timeline/          # Frise chronologique et filtres de siècles
│   ├── periods/           # Fiche détaillée 19 sections
│   ├── silhouettes/       # SilhouetteFigure SVG et SilhouetteComparator
│   ├── anatomy/           # Dissection anatomique interactive
│   ├── garments/          # Catalogue typologique et modal d'inspection
│   ├── designers/         # Galerie des créateurs et biographies
│   ├── gallery/           # Galerie visuelle patrimoniale
│   ├── quiz/              # Moteur de quiz interactif
│   └── favorites/         # Favoris, export/import JSON et réinitialisation
└── test/
    └── integrity.test.ts  # Suite de tests Vitest automatisés
```

---

## 3. Installation et Développement

### Prérequis
- Node.js (v18 ou supérieur)
- npm (v9 ou supérieur)

### Commandes Utiles

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement (port 3000)
npm run dev

# Exécution des tests automatisés Vitest
npm test

# Contrôle strict des types TypeScript (ESLint / Typecheck)
npm run lint

# Compilation pour la production
npm run build

# Prévisualisation locale du build
npm run preview
```

---

## 4. Déploiement sur Cloudflare Pages

Le projet est configuré nativement pour un hébergement statique sur **Cloudflare Pages** :

1. Connectez votre dépôt Git à votre tableau de bord Cloudflare Pages.
2. Paramètres de compilation :
   - **Framework preset** : `Vite`
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
3. Les fichiers de configuration inclus dans `/public` sont automatiquement pris en compte :
   - `_redirects` : Redirection SPA `/* /index.html 200` garantissant le routage sans rechargement.
   - `_headers` : En-têtes de sécurité HTTP (`X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`) et gestion du cache pour `manifest.webmanifest` et `sw.js`.

---

## 5. Guide Éditorial : Comment Enrichir les Contenus

La structure de Modor est conçue pour permettre l'ajout de nouveaux contenus sans toucher au code logique de l'application :

1. **Ajouter une nouvelle période** : Ouvrez `src/data/periods.ts` et ajoutez un objet typé `Period` respectant l'interface définie dans `src/types/index.ts`. Renseignez impérativement les 19 champs analytiques et les identifiants de sources.
2. **Ajouter un vêtement** : Ouvrez `src/data/garments.ts` et déclarez un objet `Garment` avec sa catégorie, sa fonction anatomique et ses matériaux.
3. **Ajouter un créateur** : Ouvrez `src/data/designers.ts` et ajoutez un objet `Designer` avec ses innovations et créations emblématiques.
4. **Vérifier l'intégrité** : Lancez simplement `npm test` ; le validateur automatique (`src/services/validation.ts`) vérifiera instantanément l'absence de doublons, la validité des dates et l'existence de toutes les références croisées.
