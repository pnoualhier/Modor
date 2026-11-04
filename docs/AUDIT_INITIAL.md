# Audit Initial du Projet « Modor »
**Encyclopédie interactive de l'histoire de la mode féminine en France**
*Date d'audit : 1er Novembre 2026*

---

## 1. État des Lieux & Architecture Existant

Le projet Modor est une application web progressive (PWA) conçue avec **React 19**, **TypeScript strict**, **Vite**, **Tailwind CSS v4** et **Vitest**.
Il s'appuie sur une base de données documentaire locale entièrement intégrée (fichiers TypeScript typés), sans dépendance à un backend distant, conformément au cahier des charges.

### Arborescence Actuelle
- `src/data/` : Contient 7 collections documentaires (`periods.ts`, `garments.ts`, `designers.ts`, `silhouettes.ts`, `anatomy.ts`, `quizzes.ts`, `sources.ts`).
- `src/services/` : Services de persistance locale (`storage.ts`), de recherche (`search.ts`) et de validation de données (`validation.ts`).
- `src/components/` : Composants de visualisation éditoriale (Chronologie, Comparateur morphologique, Dissection anatomique, Catalogue des vêtements, Créateurs, Galerie visuelle, Quiz, Favoris & Export JSON).
- `public/` : Configuration PWA (`icon.svg`, PNG rasterisés 192/512/apple-touch, `_headers`, `_redirects`).

---

## 2. Fonctionnalités Évaluées & Diagnostic

### 2.1 Fonctionnalités Opérationnelles
- **Navigation et Frise chronologique** : Filtrage par siècle et affichage séquentiel de 18 périodes historiques avec métriques morphologiques.
- **Comparateur de silhouettes** : Rendu vectoriel SVG normalisé (posture de face, échelle constante, calque des armatures internes, jauges métriques).
- **Module anatomique** : Points d'intérêt interactifs sur silhouette vectorielle avec affichage des rôles, coupes et matériaux.
- **Catalogue des vêtements** : Typologie par catégorie (robes, cages, corsets, jupons, vestes, pantalons, accessoires).
- **Galerie des créateurs** : 23 fiches biographiques avec innovations et créations emblématiques.
- **Module de quiz** : Système de questions chronologiques avec explications historiques.
- **Recherche globale** : Moteur de recherche client instantané.
- **Stockage local & PWA** : Sauvegarde en LocalStorage, export/import JSON, Service Worker configuré avec Workbox.

### 2.2 Points Critiques à Corriger & Améliorer (P0 / P1)

1. **Fiabilisation de l'Intégrité des Données (P0)** :
   - Le service `validation.ts` doit passer d'une simple vérification booléenne à un rapport hiérarchisé à 3 niveaux (`error`, `warning`, `info`).
   - Rendre le contrôle d'intégrité systématique et bloquant lors des tests automatisés.
   - Validation stricte de chaque champ obligatoire des 19 sections de périodes.

2. **Référentiel des Illustrations & Provenance (P0)** :
   - Plusieurs références d'images pointent vers des chemins `/images/historical/...` qui n'ont pas encore leurs fichiers SVG / WebP locaux réels dans `public/images/`.
   - Nécessité de créer les illustrations vectorielles et schémas locaux réels pour chaque pièce afin de garantir un fonctionnement 100% hors-ligne sans dépendance à des URL tierces volatiles.
   - Création du document d'audit documentaire `docs/SOURCES_ET_LICENCES.md` distinguant explicitement œuvres patrimoniales, schémas explicatifs et reconstitutions.

3. **Amélioration de la Recherche Globale (P1)** :
   - Gestion de l'insensibilité aux accents (diacritiques) et ligatures françaises (œ, æ, é, è, ê, à, etc.).
   - Support des synonymes historiques (ex: *faux-cul* ↔ *tournure*, *Watteau* ↔ *robe à la française*, *crinoline cage* ↔ *Tavernier*).
   - Recherche sur les sources documentaires et les matières.

4. **Accessibilité Numérique WCAG 2.2 AA (P1)** :
   - Amélioration des attributs ARIA sur les points d'intérêt anatomiques et le comparateur SVG.
   - Gestion stricte du focus clavier dans les fenêtres modales (SearchModal, GarmentDetail, DesignerDetail).
   - Support explicite de `prefers-reduced-motion`.
   - Création de `docs/ACCESSIBILITE.md`.

5. **Assainissement des Dépendances & Outillage de Qualité (P1 / P2)** :
   - Suppression des dépendances obsolètes (`@google/genai`, `express`, `dotenv`, `motion`).
   - Configuration d'ESLint 9 (`eslint.config.js`) avec le parser TypeScript et alignement des scripts (`npm run lint`, `npm run typecheck`, `npm test`).
   - Écriture de tests de composants et d'accessibilité.

---

## 3. Plan d'Action & Priorisation

| Priorité | Domaine | Actions |
|---|---|---|
| **P0** | Intégrité des données | Refonte de `src/services/validation.ts` avec 3 niveaux de sévérité et contrôle bidirectionnel des relations. |
| **P0** | Illustrations & Licences | Génération des assets visuels locaux dans `public/images/`, rédaction de `docs/SOURCES_ET_LICENCES.md`. |
| **P0** | Comparateur & Anatomie | Amélioration des contrastes, zoom mobile, accessibilité clavier et tactilité des hotspots. |
| **P1** | Recherche & Favoris | Normalisation Unicode sans accents, synonymes historiques, validation stricte de l'import JSON versionné. |
| **P1** | Quiz & Progression | Mode aléatoire, mémorisation des historiques et sauvegarde des scores par siècle. |
| **P1** | Accessibilité WCAG 2.2 AA | Traitement du focus, navigation clavier intégrale, contraste des textes et `docs/ACCESSIBILITE.md`. |
| **P1** | Tests & Couverture | Tests unitaires Vitest étendus, tests de composants et documentation `docs/TESTS.md`. |
| **P2** | Documentation | Création de `docs/ARCHITECTURE.md`, `docs/GUIDE_EDITORIAL.md`, mise à jour du `README.md` et `docs/RAPPORT_FINAL.md`. |
