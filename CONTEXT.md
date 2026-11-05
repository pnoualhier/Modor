# CONTEXT.md — Contexte du Projet Modor

## 1. Origine & Vocation du Projet

**Modor** est une encyclopédie muséale interactive, accessible et autonome consacrée à l'histoire de la mode féminine en France, depuis la Renaissance (vers 1500) jusqu'au XXIe siècle (2026).

Le projet a été développé en réponse aux besoins des étudiants, chercheurs, créateurs et amateurs d'histoire du costume souhaitant :
- Visualiser objectivement l'impact des sous-structures mécaniques (vertugadins, paniers à coudes, crinolines cages en acier, tournures « faux-cul », corsets baleinés) sur la métamorphose des silhouettes féminines.
- Disposer d'une ressource rigoureusement documentée, traçable et respectueuse des collections patrimoniales (fonds BnF Gallica, Palais Galliera, MAD Paris, The MET).
- Consulter l'ensemble des données, fiches et planches graphiques de façon **100% hors-ligne**, sans dépendance vis-à-vis d'un serveur ou d'une connexion internet.
- Bénéficier d'une interface adaptée aussi bien aux spécialistes qu'aux utilisateurs novices grâce à une navigation claire et des explications contextuelles permanentes.

---

## 2. Principes Fondateurs & Règles d'Architecture

### A. Autonomie & Respect de la Vie Privée
- **Zéro base de données distante / Zéro backend propriétaire** : L'application est un SPA compilé statiquement fonctionnant exclusivement dans le navigateur de l'utilisateur.
- **Stockage 100% Local** : Toutes les données personnelles (marquages de favoris, notes de recherche, scores de quiz, historique de consultation) sont conservées dans le `localStorage` de l'appareil.
- **Zéro pistage publicitaire ou analytique** : Aucun tracker, cookie tiers ou télémétrie n'est employé.

### B. Fiabilité & Continuité Hors-Ligne (PWA)
- L'application est enregistrée en tant que Progressive Web App (PWA).
- Le Service Worker implémente une stratégie de cache hybride permettant la consultation intégrale des fiches et des données statiques même sans réseau.
- Un système de surveillance en arrière-plan vérifie automatiquement les mises à jour sans bloquer l'usage.

### C. Décharge de Responsabilité & Cadre Juridique
- Une clause exonératoire de responsabilité est explicitement stipulée dans le parcours d'accueil (Onboarding) et dans les paramètres : l'auteur et éditeur décline expressément toute responsabilité quant aux données historiques, dates, attributions ou descriptions techniques fournies, ces dernières étant fournies à titre culturel et didactique.

---

## 3. Structure Fonctionnelle de l'Application

Les fonctionnalités sont réparties selon une arborescence claire, accessible depuis la barre supérieure et le **Menu Hamburger Catégorisé** :

1. **Histoire & Époques** :
   - *Frise Chronologique* : 22 époques de 1500 à 2026 structurées selon 19 rubriques normalisées.
   - *Galerie Iconographique* : Consultation des gravures, peintures et photographies d'époque.
2. **Morphologie & Silhouettes** :
   - *Comparateur de Silhouettes* : Canon de proportion normalisé (8,5 têtes), calques d'armature et métriques comparatives.
   - *Anatomie du Costume* : Dissection interactive par hotspots sur le corps du mannequin.
3. **Vestiaire & Haute Couture** :
   - *Catalogue des Vêtements & Structures* : Fiches illustrées des pièces historiques avec photos Wikipédia/Wikimedia.
   - *Panthéon des Créateurs* : 23 biographies illustrées des grands couturiers et marchandes de modes.
4. **Pédagogie & Recherche** :
   - *Grand Quiz de la Mode* : 18 questions d'érudition réparties par siècles.
   - *Recherche Globale* : Recherche instantanée plein texte (`Ctrl+K`).
5. **Espace Personnel** :
   - *Favoris & Notes Locales* : Sélection privée et carnet de recherche.
   - *Export / Import JSON versionné* : Sauvegarde atomique avec validation stricte de schéma.
6. **Système & Application** :
   - *Paramètres Système* : Version, date de sortie, vérification manuelle et purge complète du cache.
   - *Guide d'Accueil & Mentions Légales* : Onboarding interactif et clause de non-responsabilité.
   - *Bouton d'Installation PWA* : Ajout sur écran d'accueil mobile et desktop.

---

## 4. Données & Typologie des Modèles

L'ensemble des données est centralisé dans des fichiers TypeScript typés de manière stricte dans `src/data/` :
- `periods.ts` : 22 périodes historiques respectant l'interface `Period`.
- `garments.ts` : 22 fiches de vêtements et structures avec photographies d'archives.
- `designers.ts` : 23 fiches de créateurs avec clichés d'époque.
- `silhouettes.ts` : Définitions vectorielles SVG paramétriques des silhouettes.
- `anatomy.ts` : Modèles anatomiques et coordonnées des points tactiles.
- `quizzes.ts` : Banque de questions avec justifications documentaires.
- `sources.ts` : Répertoire des 7 institutions partenaires et des licences patrimoniales.

---

## 5. Environnement d'Exécution & Déploiement

- **Serveur de développement** : Vite sur le port 3000.
- **Framework** : React 18 avec TypeScript.
- **Styles** : Tailwind CSS v4.
- **Hébergement** : 100% compatible Cloudflare Pages, Vercel, Netlify, serveurs statiques Nginx ou GitHub Pages.
