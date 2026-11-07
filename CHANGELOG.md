# Journal des Modifications — Modor

Toutes les modifications notables apportées au projet **Modor** sont consignées dans ce fichier chronologique, en conformité avec les recommandations [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

---

## [1.5.0] — 2026-11-07

### ✂️ Extension du Catalogue Raisonné des Vêtements (+12 fiches historiques, total 34 pièces)
- **Conservation Intégrale des 22 Pièces Initiales** :
  - Respect strict et non-régression des 22 fiches historiques déjà présentes (`GAR_VERTUGADIN` à `GAR_TAILLEUR_ANNEES_80`).
- **Création de 12 Nouvelles Fiches Typologiques Documentées** :
  - **Robe volante (`GAR_ROBE_VOLANTE`)** : Déshabillé ample de la Régence et du début Louis XV, plis non pincés d'un seul tenant de l'encolure au sol.
  - **Casaquin (`GAR_CASAQUIN`)** : Veste ajustée du XVIIIe siècle à basques fendues sur les hanches couvrant les paniers et plis Watteau au dos.
  - **Robe-chemise / Chemise à la reine (`GAR_ROBE_CHEMISE`)** : Robe en mousseline blanche de coton froncée à coulisses popularisée par Marie-Antoinette en 1783 (scandale du portrait de Vigée Le Brun).
  - **Redingote féminine (`GAR_REDINGOTE_FEMININE`)** : Manteau d'extérieur sartorial inspiré du riding coat anglais, collets étagés et double boutonnage.
  - **Spencer féminin (`GAR_SPENCER`)** : Veste courte s'arrêtant immédiatement sous la gorge pour la robe Empire, sans basques, réapparue pour le vélo en 1895.
  - **Tea-gown / Robe d'intérieur (`GAR_TEA_GOWN`)** : Toilette d'après-midi portée sans corset rigide pour le thé de 17h, associant confort de peignoir et soieries précieuses.
  - **Pelisse féminine (`GAR_PELISSE`)** : Manteau d'hiver protecteur ouatiné doublé et bordé de fourrures précieuses, col montant et brandebourgs.
  - **Costume de cycliste féminin (`GAR_COSTUME_CYCLISTE`)** : Ensemble complet d'émancipation de 1895 associant culotte bouffante bloomer, veste cintrée en cheviotte, guêtres et canotier.
  - **Jupe-culotte (`GAR_JUPE_CULOTTE`)** : Vêtement bifurqué trompe-l'œil dissimulant deux jambes larges sous un pli creux central (scandale d'Auteuil de 1911).
  - **Robe fourreau (`GAR_ROBE_FOURREAU`)** : Robe étroite fuselée coupée dans le droit-fil avec pinces longitudinales et gaine structurante des années 1950.
  - **Robe trapèze (`GAR_ROBE_TRAPEZE`)** : Silhouette triangulaire géométrique évasée depuis les épaules sans taille marquée (création Yves Saint Laurent chez Dior en 1958).
  - **Robe portefeuille (`GAR_ROBE_PORTEFEUILLE`)** : Robe croisée en jersey fluide enveloppant nouée à la taille par des liens coordonnés (Diane von Fürstenberg en 1974).
- **Iconographie Patrimoniale Optimisée & Vérifiée** :
  - 12 clichés d'archives et muséaux authentiques issus des collections ouvertes et du domaine public (The Met, BnF Gallica, Muséum de Toulouse, LACMA, RISD Museum, de Young Museum).
  - Métadonnées de conservation complètes (titre, institution, licence, légende muséale) et compression Web haute définition.
- **Interface & Filtres Enrichis** :
  - Ajout des catégories de filtre `Corsages & Casaquins` et `Manteaux & Redingotes` dans `GarmentCatalog.tsx`.
  - Badges dynamiques synchronisés dans `QuickNavBar.tsx` et `HamburgerMenu.tsx`.

---

## [1.4.0] — 2026-11-07

### 👑 Extension du Panthéon des Créateurs et Créatrices
- **Enrichissement du Catalogue Biographique (+12 fiches majeures, total 35 créateurs)** :
  - **Jeanne Lanvin (1867–1946)** : Broderies d'art, bleu Lanvin, robes de style, Maison Lanvin.
  - **Madame Grès / Germaine Krebs (1903–1993)** : Robes de vestale drapées en jersey de soie, Maison Grès.
  - **Cristóbal Balenciaga (1895–1972)** : « L'architecte de la couture », lignes tonneau, sac, baby doll et tailleur semi-ajusté (nationalité espagnole).
  - **Gaby Aghion (1921–2014)** : Invention du prêt-à-porter de luxe, fondation de la Maison Chloé.
  - **Pierre Cardin (1922–2020)** : Ligne cosmocorps, robes cerceaux, prêt-à-porter et pionnier des licences.
  - **Paco Rabanne (1934–2023)** : « Le métallurgiste de la mode », robes en rhodoïd et métal riveté (nationalité espagnole).
  - **Azzedine Alaïa (1935–2017)** : « Le sculpteur de la silhouette », mailles sculptantes, découpe laser (nationalité tunisienne).
  - **Christian Lacroix (né en 1951)** : Robe pouf, baroque arlésien, corsages brodés et renaissance théâtrale de la haute couture.
  - **Chantal Thomass (née en 1947)** : Dessous dessus, lingerie couture, soie, dentelle et féminité décomplexée.
  - **Adeline André (née en 1949)** : Coupe à trois emmanchures, épure géométrique, haute couture minimaliste.
  - **Issey Miyake (1938–2022)** : Révolution *Pleats Please*, plissage thermo-fixé, concept *A Piece of Cloth* (nationalité japonaise).
  - **Jean-Charles de Castelbajac (né en 1949)** : Manteau teddy bear, poncho à deux, appropriation Pop Art et mode subversive.
- **Rigueur Documentaire et Liens Croisés** :
  - Aucune invention de citations, d'innovations ou de dates : vérification intégrale auprès des fonds patrimoniaux (Palais Galliera, MAD Paris, BnF Gallica, The MET, Fondation Azzedine Alaïa, FHCM).
  - Ajout des sources institutionnelles référentes `SRC_FONDATION_ALAIA` et `SRC_FHCM` dans `src/data/sources.ts`.
  - Intégration bidirectionnelle des identifiants des créateurs dans l'ensemble des 22 périodes historiques correspondantes (`src/data/periods.ts`).
  - Clichés historiques authentiques et portraits patrimoniaux optimisés pour 10 créateurs, et gestion d'un composant de repli élégant sans dégradation visuelle pour les profils sous droits réservés (Gaby Aghion, Adeline André).
  - Filtre dynamique par nationalité dans la galerie des créateurs (Française, Espagnole, Italienne, Japonaise, Tunisienne, Allemande, Britannique).

---

## [1.3.0] — 2026-11-07

### 🧭 Barre de Menu & Navigation Rapide Inter-Pages
- **Barre de Navigation Rapide Dédiée (`src/components/common/QuickNavBar.tsx`)** :
  - Barre de menu sticky accessible en permanence sous l'en-tête principal, sur mobile, tablette et desktop.
  - Accès direct en 1 clic aux 8 sections majeures de l'encyclopédie : *Chronologie*, *Silhouettes*, *Anatomie*, *Vestiaire*, *Créateurs*, *Galerie*, *Quiz* et *Favoris & Notes*.
  - Défilement horizontal fluide avec chevrons d'assistance et estompage dégradé pour les petits écrans.
  - Détection automatique et défilement centré vers l'onglet actif.
  - Fil d'Ariane contextuel (*Chronologie / [Nom de l'époque]*) avec bouton de retour immédiat lors de la lecture d'une fiche d'époque détaillée.
  - Menu déroulant « Saut rapide » affichant l'inventaire des pages et des touches de raccourci.
  - Navigation au clavier complète : touches fléchées gauche/droite, Home/End, et raccourcis globaux `Alt+1` à `Alt+8`.
  - Suite de tests unitaires dédiée (`src/test/quick-nav.test.ts`) validant la complétude des 8 routes, la cyclicité clavier et la résolution des données contextuelles.

---

## [1.2.0] — 2026-11-07

### 🎨 Remplacement Intégral des Visuels Historiques
- **Authenticité Visuelle et Patrimoniale Restaurée** :
  - Remplacement de l'ensemble des planches génériques schématiques (planches silhouettes synthétiques 800x1000) par les chefs-d'œuvre historiques et photographies d'archives réels issus du domaine public (Wikimedia Commons, Musée du Louvre, Palais Galliera, Metropolitan Museum of Art, BnF / Gallica).
  - Chaque période historique dispose désormais de sa véritable œuvre iconographique : portrait de Marguerite de Valois par l'atelier de François Clouet (1572), portrait de Madame de Montespan par Pierre Mignard, robe à la française par François Boucher, Juliette Récamier par Jacques-Louis David (1800), Impératrice Joséphine par François Gérard (1806), gravures de Gavarni pour le Romantisme (1830), Impératrice Eugénie par Winterhalter (1855), tournures de la Maison Worth (1885), Jeanne Paquin dans son atelier (1895), planches de la Gazette du Bon Ton (1914), robe garçonne de 1925, Madeleine Vionnet par Jean Dunand (1935), Christian Dior dans son atelier (1947), Hubert de Givenchy avec Audrey Hepburn (1954), Robe Mondrian d'Yves Saint Laurent (1965), smoking Yves Saint Laurent (1966), Jean Paul Gaultier (1984), Martin Margiela (1996), John Galliano pour Dior (2003), Simon Porte Jacquemus (2019) et Marine Serre (2023).
  - Optimisation et compression des images haute définition via ImageMagick pour garantir des temps de chargement ultra-rapides et une mise en cache PWA optimale.
  - Ajout d'un test automatisé d'unicité et de non-duplication des images de périodes dans la suite Vitest (`src/test/images-integrity.test.ts`).

### ☁️ Déploiement Cloudflare Pages
- **Synchronisation du Lockfile & Compatibilité CI/CD** :
  - Correction de l'erreur `bun install --frozen-lockfile` lors du déploiement Cloudflare Pages suite au retrait de dépendances obsolètes.
  - Mise à niveau d'`esbuild` (`^0.28.0`) et régénération propre du verrouillage `bun.lock` et `package-lock.json`.

---

## [1.1.0] — 2026-11-05

### ✨ Ajouts Majeurs

- **Menu Hamburger Catégorisé** (`src/components/common/HamburgerMenu.tsx`) :
  - Nouveau tiroir latéral accessible depuis la barre supérieure sur tous les formats d'écran.
  - Regroupement des fonctionnalités en 6 catégories ordonnées : *Histoire & Époques*, *Morphologie & Silhouettes*, *Vestiaire & Haute Couture*, *Pédagogie & Recherche*, *Espace Personnel*, et *Système & Application*.
  - Raccourci de recherche intégré et bouton d'installation PWA contextuel.

- **Menu de Paramètres Système** (`src/components/common/SystemSettingsModal.tsx`) :
  - Affichage de la version installée (`v1.1.0`), de la date de sortie officielle (`5 Novembre 2026`) et de la date de dernière vérification.
  - Bouton **« Vérifier les mises à jour »** interrogeant le Service Worker sans interrompre la lecture.
  - Bouton **« Forcer la mise à jour »** assurant la purge intégrale du cache navigateur et le rechargement immédiat sans perte des favoris ni des notes.

- **Système de Mises à Jour Automatiques en Arrière-Plan** (`src/services/updateService.ts`, `src/hooks/useAppUpdates.ts`) :
  - Scrutation périodique toutes les 15 minutes, réveil lors de la reprise du focus de l'onglet et lors du retour de la connexion réseau.
  - Notification flottante non intrusive signalant la disponibilité d'une nouvelle version prête à l'emploi.

- **Onboarding & Mentions Légales Déclaratives** (`src/components/common/OnboardingModal.tsx`) :
  - Parcours d'accueil didactique en 3 étapes guidant l'utilisateur novice.
  - Clause d'exonération de responsabilité stipulant expressément que l'auteur et éditeur décline toute responsabilité quant à l'exactitude des données historiques fournies.
  - Sauvegarde locale de l'acceptation via `OnboardingService`.

- **Infobulles et Accompagnement Contextuel pour Novices** (`src/components/common/HelpTooltip.tsx`) :
  - Composant d'infobulle accessible (`role="tooltip"`, `aria-label`, support clavier Escape et clic extérieur) intégré sur chaque écran.
  - Explications vulgarisées sur la chronologie, le comparateur de silhouettes, la dissection anatomique, le vestiaire, les créateurs, le quiz et les sauvegardes.

- **Bouton d'Installation Directe de l'Application (PWA)** (`src/components/common/PWAInstallButton.tsx`) :
  - Bouton interactif visible dans la barre supérieure et dans le menu hamburger pour installer l'application sur desktop ou mobile en 1 clic.
  - Guidage spécifique pour les utilisateurs iOS Safari.

- **Identité Visuelle & Documentation Enrichie** :
  - Création du logo vectoriel officiel `public/logo-modor.svg`.
  - Création de la capture d'écran / aperçu d'interface SVG haute fidélité `public/images/modor-interface-preview.svg`.
  - Mise à jour du `README.md` avec badges, aperçu graphique et structure complète.
  - Création de `CONTEXT.md` et `CHANGELOG.md`.

---

## [1.0.1] — 2026-11-04

### 🛠️ Corrections & Consolidations

- **Audit et Intégrité des Ressources Visuelles** :
  - Remplacement de tous les liens rompus par des visuels historiques issus de Wikipédia, Wikimedia Commons et Gallica.
  - Intégration du composant commun `ImageWithFallback.tsx` garantissant un affichage élégant sans casse de mise en page en cas de latence réseau.
  - Suppression de toutes les mentions textuelles superflues « libre de droit ».
- **Sécurisation de l'Import / Export JSON** :
  - Format d'export versionné avec horodatage ISO et numéro de schéma.
  - Validation stricte de type et rejet atomique des fichiers malformés pour préserver les données existantes.
  - Suite de tests Vitest automatisée couvrant les cas d'import corrompus, anciens ou incomplets.

---

## [1.0.0] — 2026-11-01

### 🚀 Lancement Initial

- 22 périodes historiques de la mode féminine française documentées selon la grille en 19 rubriques.
- Comparateur de silhouettes vectorielles avec canon normalisé de 8,5 têtes.
- Dissection anatomique du costume par points d'intérêt tactiles.
- Catalogue de 22 pièces vestimentaires et sous-structures.
- Panthéon de 23 créateurs parisiens et marchandes de modes.
- Moteur de quiz historique avec 18 questions.
- Moteur de recherche globale instantané (`Ctrl+K`).
- Mode hors-ligne PWA complet.
