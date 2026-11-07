<p align="center">
  <img src="/logo-modor.svg" alt="Modor Logo" width="340" />
</p>

<p align="center">
  <strong>Encyclopédie interactive &amp; muséale de l'histoire de la mode féminine en France (XVIe – XXIe siècle)</strong><br />
  <em>Silhouettes vectorielles normalisées • Armatures et sous-structures mécaniques • Panthéon de la Haute Couture • PWA 100% Hors-Ligne</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.3.0-9A3412?style=flat-square" alt="Version 1.3.0" />
  <img src="https://img.shields.io/badge/PWA-100%25%20Hors--Ligne-242321?style=flat-square" alt="PWA Hors-Ligne" />
  <img src="https://img.shields.io/badge/Tests-68%20passed-10B981?style=flat-square" alt="Tests Vitest" />
  <img src="https://img.shields.io/badge/Confidentialit%C3%A9-Z%C3%A9ro%20Tracking-242321?style=flat-square" alt="Confidentialité" />
  <img src="https://img.shields.io/badge/Licence-Domaine%20Public%20%2F%20CC0-77736D?style=flat-square" alt="Licence Patrimoniale" />
</p>

---

## 📸 Aperçu de l'Interface

<p align="center">
  <img src="/images/modor-interface-preview.svg" alt="Aperçu de l'interface Modor" width="100%" />
</p>

---

## 🌟 Nouveautés Récentes (v1.3.0)

- 🧭 **Barre de Menu Rapide Inter-Pages** : Barre de navigation sticky permanente sous l'en-tête permettant de basculer instantanément en un clic entre toutes les sections :
  - *Chronologie* (22 époques de 1500 à 2026)
  - *Silhouettes* (Comparateur vectoriel morphologique)
  - *Anatomie* (Dissection par strates et points tactiles)
  - *Vestiaire* (Catalogue des 22 pièces et structures)
  - *Créateurs* (Panthéon des 23 maisons et modistes)
  - *Galerie* (67 œuvres et photographies d'archives)
  - *Quiz* (Grand test d'érudition)
  - *Favoris & Notes* (Espace privé sauvegardé localement)
  - Défilement tactile fluide sur mobile, chevrons latéraux, fil d'Ariane contextuel, menu « Saut rapide » et raccourcis clavier `Alt+1` à `Alt+8`.
- 🎨 **Visuels Historiques Authentiques du Domaine Public** : Remplacement de 100% des planches génériques par les véritables œuvres et photographies d'archives (Clouet, Mignard, Boucher, David, Gérard, Winterhalter, Worth, Paquin, Bon Ton, Chanel, Vionnet, Dior, Givenchy, Saint Laurent, Gaultier, Margiela, Serre).
- 🍔 **Menu Hamburger Catégorisé** : Regroupement méthodique des fonctionnalités en 6 univers :
  1. *Histoire & Époques* (Frise chronologique, Galerie iconographique)
  2. *Morphologie & Silhouettes* (Comparateur vectoriel duo/galerie, Dissection anatomique)
  3. *Vestiaire & Haute Couture* (Catalogue typologique, Panthéon des créateurs)
  4. *Pédagogie & Recherche* (Grand Quiz, Recherche plein texte)
  5. *Espace Personnel* (Favoris locaux, Notes privées, Sauvegarde/Restauration JSON)
  6. *Système & Application* (Paramètres, Guide d'accueil, Installation PWA)
- ⚙️ **Menu de Paramètres Système** :
  - Affichage de la version (`v1.1.0`) et de la date de sortie officielle (`5 Novembre 2026`).
  - Horodatage précis de la dernière vérification effectuée.
  - Bouton **« Vérifier les mises à jour »** avec interrogation du cache du Service Worker.
  - Bouton **« Forcer la mise à jour »** purgeant tous les caches navigateur tout en préservant intacts vos favoris et vos notes personnelles.
- 🔄 **Système de Mises à Jour Automatiques en Arrière-Plan** :
  - Détection proactive des nouvelles versions en tâche de fond (scrutation périodique toutes les 15 minutes, réveil lors de la reprise du focus et au retour en ligne).
  - Installation automatique et silencieuse sans interruption de lecture, avec notification discrète invitant à recharger si désiré.
- 🛡️ **Onboarding & Mentions Légales Déclaratives** :
  - Parcours d'accueil en 3 étapes guidant l'utilisateur novice.
  - **Clause exonératoire de responsabilité explicite** stipulant que l'auteur et éditeur décline toute responsabilité quant aux données et contenus historiques fournis.
  - Rappel des règles de stricte confidentialité (stockage 100% local, aucun pistage).
- 💡 **Infobulles et Aide Contextuelle pour Utilisateurs Novices** :
  - Composant accessible `HelpTooltip` présent sur tous les écrans (frise, comparateur, dissection, catalogue, créateurs, quiz, sauvegardes).
  - Définition vulgarisée des termes techniques (vertugadin, corsets en S, manches gigot, paniers à coudes, tournures, gaines guêpières, etc.).
- 📲 **Bouton d'Installation PWA Intégré** :
  - Bouton interactif **« Installer l'application »** disponible directement dans la barre supérieure et dans le menu hamburger pour un ajout en 1 clic sur l'écran d'accueil d'un mobile (Android/iOS) ou le bureau d'un ordinateur (Chrome, Edge, Safari, Firefox).
  - Instructions guidées personnalisées pour iPhone et iPad (Safari : *Partager* ➔ *Sur l'écran d'accueil*).

---

## 🏛️ Les Modules de l'Application

### 1. 📜 Chronologie Interactive (1500–2026)
- 22 périodes historiques richement documentées respectant une grille d'analyse uniforme en 19 rubriques.
- Filtre rapide par siècle (XVIe au XXIe siècle).
- Fiches exhaustives avec contexte géopolitique, statut de la femme, pièces d'apparat, coiffures, cosmétiques et souliers.

### 2. 📐 Comparateur de Silhouettes Normalisé
- Mannequin vectoriel unique respectant scrupuleusement la même échelle (canon anatomique de 8,5 têtes, vue de face, posture uniforme).
- Mode **Duo** (comparaison directe de 2 périodes) et **Galerie** (4 périodes simultanées).
- Calques de structures internes activables (cages métalliques, armatures en os de baleine, tournures en crin).
- Repères métriques et tableau morphologique différentiel calculant automatiquement les ratios de taille, d'épaules et d'envergure.

### 3. 🔬 Module « Anatomie d'une Silhouette »
- Dissection visuelle par points d'intérêt interactifs (hotspots) sur le corps du mannequin.
- Époques de rupture analysées couche par couche (Rococo 1750, Crinoline 1860, New Look 1947).
- Fiches techniques pour chaque couche : rôle anatomique, architecture de coupe, matières textiles et évolutions d'usage.

### 4. ✂️ Catalogue Raisonné des Vêtements & Structures
- Inventaire typologique de 34 pièces emblématiques : robes d'apparat (robe volante, robe à la française, robe à l'anglaise, chemise à la reine, robe Empire, tea-gown, robe fourreau, robe trapèze, robe portefeuille), manteaux et vestes (redingote, spencer, pelisse, tailleur, smoking), structures (crinolines cages, paniers, corsets sablier, vertugadin) et bifurcations émancipatrices (costume de cycliste, jupe-culotte, pantalon flare).
- Photographies et gravures d'archives issues des fonds publics (Wikipédia, Wikimedia Commons, BnF Gallica, Palais Galliera, MAD Paris, The MET).
- Visionneuse plein écran haute définition avec métadonnées de conservation muséale.

### 5. 👑 Panthéon des Grands Créateurs
- 35 fiches biographiques complètes de Rose Bertin (1770) à Simon Porte Jacquemus (2026), incluant Lanvin, Grès, Balenciaga, Aghion, Cardin, Rabanne, Alaïa, Lacroix, Thomass, André, Miyake et Castelbajac.
- Clichés photographiques et portraits d'archives patrimoniaux.
- Citations historiques, innovations stylistiques majeures et créations emblématiques.

### 6. 🏆 Grand Quiz de la Mode Française
- 18 questions d'érudition réparties par siècle.
- Validation instantanée avec justification documentaire et encadré historique « Le saviez-vous ? ».
- Mémorisation locale de la progression et des scores.

### 7. 🔒 Espace Personnel, Notes & Sauvegarde Atomique
- Marquage instantané des périodes, vêtements et créateurs favoris.
- Carnet de notes de recherche privées pour chaque période.
- **Export JSON versionné (v1.1)** horodaté et lisible.
- **Import JSON atomique et sécurisé** : validation stricte de schéma, typage, identifiants, rejet des fichiers malformés ou corrompus avec conservation des données préexistantes en cas d'erreur.

---

## 🛠️ Stack Technique

| Domaine | Technologies |
| :--- | :--- |
| **Langage & Framework** | TypeScript (mode strict), React 18, Vite |
| **Design & Stylisme** | Tailwind CSS v4, Cormorant Garamond, Plus Jakarta Sans |
| **Icônes** | Lucide React |
| **Architecture PWA** | Web App Manifest, Service Worker natif (CacheFirst + StaleWhileRevalidate), IndexedDB/LocalStorage |
| **Qualité & Tests** | Vitest (59 tests unitaires, d'intégrité et de composants), ESLint |
| **Déploiement** | 100% statique (Cloudflare Pages, Vercel, Netlify, Nginx) |

---

## 🚀 Installation & Commandes

```bash
# 1. Cloner le projet
git clone https://github.com/pnoualhier/Modor.git
cd Modor

# 2. Installer les dépendances
npm install

# 3. Démarrer le serveur de développement local (port 3000)
npm run dev

# 4. Exécuter l'ensemble des 59 tests automatisés
npm test

# 5. Valider les types TypeScript
npm run typecheck

# 6. Compiler l'application pour la production
npm run build
```

---

## ⚖️ Mentions Légales & Avertissement

> **Clause de non-responsabilité :** L'auteur et éditeur de l'application Modor décline formellement toute responsabilité quant aux informations historiques, dates, attributions, descriptions techniques, reconstitutions et illustrations fournies. Ces contenus sont mis à disposition à titre purement culturel et informatif.
> 
> Toutes les illustrations et portraits photographiques proviennent des domaines publics ou de licences libres (Wikipédia, Wikimedia Commons, BnF Gallica, Palais Galliera, The Metropolitan Museum of Art). Aucune donnée personnelle n'est transmise ni collectée : vos favoris et vos notes demeurent exclusivement stockés sur votre terminal local.

---

## 📄 Documentation Complète

Retrouvez les dossiers méthodologiques détaillés dans le répertoire [`docs/`](./docs) :
- [`docs/AUDIT_INITIAL.md`](./docs/AUDIT_INITIAL.md) : Audit technique, sécuritaire et accessibilité initial.
- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) : Architecture modulaire, flux de données et stratégie offline.
- [`docs/SOURCES_ET_LICENCES.md`](./docs/SOURCES_ET_LICENCES.md) : Inventaire patrimonial des fonds et licences.
- [`docs/ACCESSIBILITE.md`](./docs/ACCESSIBILITE.md) : Conformité WCAG 2.2 AA.
- [`docs/TESTS.md`](./docs/TESTS.md) : Matrice de couverture des tests Vitest.
