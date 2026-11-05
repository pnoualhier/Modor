# Protocole de Tests et Assurance Qualité

## 1. Vue d'Ensemble de la Suite de Tests

La qualité et l'intégrité de **Modor** sont garanties par une suite complète de tests automatisés exécutés via **Vitest** en environnement Node.js / TypeScript.

La suite couvre :
1. **L'intégrité référentielle bidirectionnelle** (`src/test/integrity.test.ts`) ;
2. **La normalisation et le moteur de recherche historique** (`src/test/search.test.ts`) ;
3. **Le moteur d'audit et les statistiques documentaires** (`src/test/validation.test.ts`) ;
4. **La cohérence des coordonnées et des modèles vectoriels** (`src/test/anatomy.test.ts`).

---

## 2. Commandes de Test et de Validation

```bash
# Exécution de la suite complète de tests unitaires et d'intégrité
npm test

# Exécution du linter ESLint (0 erreur tolérée)
npm run lint

# Vérification du typage statique TypeScript strict
npm run typecheck

# Compilation de production Vite PWA
npm run build
```

---

## 3. Détail des Vérifications Opérées

### 3.1. Intégrité Référentielle Documentaire
- **Unicité absolue des identifiants** : Détection des collisions sur `periodIds`, `garmentIds`, `designerIds`, `sourceIds`, `silhouetteIds` et `quizIds` ;
- **Contrainte chronologique** : `startYear <= endYear` pour chaque période ;
- **Liaisons bidirectionnelles** :
  - Chaque vêtement référencé dans une période existe dans `HISTORICAL_GARMENTS` ;
  - Chaque période référencée dans la fiche d'un vêtement existe dans `HISTORICAL_PERIODS` ;
  - Chaque créateur référencé dans une période existe dans `HISTORICAL_DESIGNERS` ;
  - Chaque source bibliographique existe dans `HISTORICAL_SOURCES`.
- **Ressources iconographiques locales** : Vérification que l'intégralité des 62 chemins d'images commence par `/images/historical/` et dispose d'un fichier local correspondant dans `public/images/historical/`.

### 3.2. Moteur de Recherche et Synonymes
- Test de stripping des accents (`é`, `è`, `ê`, `à`, `ç` normalisés sans diacritiques) ;
- Vérification de la table d'équivalence historique (`faux-cul` -> `tournure`, `cage` -> `crinoline`, `watteau` -> `robe à la française`, `smoking` -> `Le Smoking`) ;
- Validation de l'algorithme de classement des résultats : les correspondances directes sur le titre obtiennent un score supérieur à 50 et apparaissent en tête de liste.

### 3.3. Ergonomie et Accessibilité Vectorielle
- Validation des pourcentages de positionnement des points d'anatomie (compris strictement entre 0% et 100%) ;
- Contrôle de la complétude des modèles géométriques de silhouettes (`waistWidth`, `hipsWidth`, `skirtBottomWidth`).

---

## 4. Matrice des Résultats Actuels

| Suite de Tests | Nombre de Tests | Statut |
| :--- | :--- | :--- |
| `src/test/integrity.test.ts` | 9 tests | **PASSÉ (0 erreur)** |
| `src/test/search.test.ts` | 5 tests | **PASSÉ (0 erreur)** |
| `src/test/validation.test.ts` | 3 tests | **PASSÉ (0 erreur)** |
| `src/test/anatomy.test.ts` | 2 tests | **PASSÉ (0 erreur)** |
| `src/test/images-integrity.test.ts` | 5 tests | **PASSÉ (0 erreur)** |
| `src/test/storage.test.ts` | 15 tests | **PASSÉ (0 erreur)** |
| `src/test/interactions.test.ts` | 10 tests | **PASSÉ (0 erreur)** |
| `src/test/ui-states.test.ts` | 9 tests | **PASSÉ (0 erreur)** |
| **Total Global** | **58 tests** | **100% SUCCÈS** |
