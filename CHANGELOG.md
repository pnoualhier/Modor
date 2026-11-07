# Journal des Modifications — Modor

Toutes les modifications notables apportées au projet **Modor** sont consignées dans ce fichier chronologique, en conformité avec les recommandations [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

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
