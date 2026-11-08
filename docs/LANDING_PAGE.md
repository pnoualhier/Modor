# Documentation Officielle — Landing Page de Modor

> **MODOR — La mémoire de la mode féminine en France (1515 – 2026)**  
> Application officielle : [https://modor.pages.dev/](https://modor.pages.dev/)  
> Dépôt de code : [https://github.com/pnoualhier/Modor](https://github.com/pnoualhier/Modor)

---

## 1. Vision & Objectifs

La landing page officielle de **Modor** a été conçue pour offrir une vitrine éditoriale, patrimoniale et immersive au projet encyclopédique. Elle remplit cinq objectifs majeurs :

1. **Présentation claire** : Définir immédiatement Modor comme une encyclopédie interactive consacrée à l'histoire du costume féminin français, de la Renaissance au XXIe siècle.
2. **Richesse documentaire** : Mettre en lumière la profondeur des sources, les 22 époques, les 34 pièces de vestiaire et les 35 créateurs et modistes répertoriés.
3. **Exploration interactive** : Présenter les 8 univers de l'application (Chronologie, Silhouettes, Anatomie, Vestiaire, Créateurs, Galerie, Quiz, Favoris) avec des parcours d'immersion concrets.
4. **Valorisation culturelle** : Honorer le savoir-faire textile français à travers une direction artistique muséale (typographies de prestige, palette ivoire et terracotta, citations authentiques).
5. **Incitation à l'action** : Diriger naturellement les visiteurs vers l'application web interactive (`https://modor.pages.dev/`) sans barrière à l'entrée (aucun compte requis, 100% gratuit, sans publicité).

---

## 2. Architecture & Isolation Technique

Conformément aux contraintes strictes du projet, **la landing page ne modifie ni n'altère le fonctionnement de l'application principale**.

### 2.1 Arborescence des fichiers

```text
landing/
├── index.html                   # Point d'entrée HTML avec balises SEO, OG, Twitter, Schema.org
├── package.json                 # Configuration et dépendances autonomes
├── vite.config.ts               # Configuration Vite dédiée
└── src/
    ├── main.tsx                 # Montant React de la landing page
    ├── App.tsx                  # Assemblage des 13 sections patrimoniales
    ├── styles/
    │   └── landing.css          # Styles Tailwind v4, polices et accessibilité
    ├── data/
    │   └── landingData.ts       # Données vérifiées (métriques, FAQ, créateurs, époques)
    └── components/
        ├── Header.tsx           # Navigation fixe 3 zones & CTA
        ├── Hero.tsx             # Section 1 : Accroche éditoriale & visuel
        ├── Presentation.tsx     # Section 2 : Les 4 piliers & métriques clés
        ├── TimelinePreview.tsx  # Section 3 : 5 siècles à explorer (frise)
        ├── UniversGrid.tsx      # Section 4 : Les 8 univers interactifs
        ├── SilhouetteShowcase.tsx # Section 5 : Comprendre la silhouette
        ├── WardrobeShowcase.tsx # Section 6 : Le patrimoine du vestiaire
        ├── DesignersShowcase.tsx# Section 7 : Les 35 maîtres de la haute couture
        ├── GalleryShowcase.tsx  # Section 8 : Galerie & documents muséaux
        ├── AppPreviewSection.tsx# Section 9 : 8 captures d'écran réelles + lightbox
        ├── Philosophy.tsx       # Section 10 : Mémoire, Compréhension, Transmission
        ├── FAQSection.tsx       # Section 11 : FAQ 10 questions/réponses
        ├── FinalCTA.tsx         # Section 12 : Appel final à l'action
        └── Footer.tsx           # Section 13 : Liens patrimoniaux & crédits
```

### 2.2 Stratégie de build & Cloudflare Pages

Le projet supporte **deux modes de déploiement complémentaires** :

1. **Compilation Multi-Page dans le projet racine** :
   Le fichier `vite.config.ts` à la racine configure `rollupOptions.input` pour compiler à la fois :
   - `dist/index.html` : L'application web interactive Modor.
   - `dist/landing/index.html` : La landing page officielle.  
   Sur Cloudflare Pages, `https://modor.pages.dev/` sert l'application, et `https://modor.pages.dev/landing/` sert la landing page.

2. **Compilation Standalone** :
   La commande `npm run build:landing` permet de générer la landing page de manière totalement indépendante dans `landing/dist/` si celle-ci doit être hébergée sur un domaine distinct (ex. `modor.fr`).

---

## 3. Détail des 13 Sections Officielles

| Section | Titre | Contenu & Rôle |
|---|---|---|
| **01. Hero** | *Cinq siècles de mode féminine. Une histoire à explorer.* | Accroche patrimoniale, badges de réassurance, boutons d'action vers l'application et aperçu interactif de l'interface. |
| **02. Présentation** | *La mode raconte notre histoire.* | Les 4 piliers fondamentaux (Architecture du corps, Chronologie, Musées, Bien commun) et compteur de métriques vérifiées. |
| **03. Chronologie** | *Cinq siècles à explorer* | Sélecteur interactif des 6 grandes époques avec caractéristiques morphologiques, pièces maîtresses et reproductions d'époque. |
| **04. Univers** | *Huit manières d'explorer la mémoire textile* | Présentation détaillée des 8 modules (Chronologie, Silhouettes, Anatomie, Vestiaire, Créateurs, Galerie, Quiz, Favoris). |
| **05. Silhouettes** | *Comprendre l'architecture de la silhouette* | Explication des 3 calques (armature, volume, parure) et comparateur morphologique normalisé face-à-face. |
| **06. Vestiaire** | *Le patrimoine du vestiaire féminin* | Typologie des 34 pièces historiques réparties en catégories (armatures, robes, corsages, émancipations). |
| **07. Créateurs** | *Les orfèvres de la haute couture* | Panthéon des 35 couturiers et modistes français (Rose Bertin, Worth, Poiret, Chanel, Dior, YSL, Margiela, etc.). |
| **08. Galerie** | *Un trésor documentaire au service du patrimoine* | Présentation des 89 œuvres d'archives publiques issues du Palais Galliera, de la BnF, de Carnavalet et du Met. |
| **09. Interface** | *Découvrez l'interface de Modor* | Carrousel et lightbox plein écran des 8 captures réelles de l'application en haute définition. |
| **10. Philosophie** | *Les trois engagements de Modor* | Manifeste éthique articulé autour de la Mémoire, la Compréhension critique et la Transmission libre. |
| **11. FAQ** | *Foire aux questions* | Accordéon de 10 questions/réponses vérifiées classées par catégories (Projet, Contenu, Technique, Pédagogie). |
| **12. Appel final** | *L'histoire de la mode vous attend.* | Accroche conclusive invitant à lancer l'application directement dans le navigateur ou à consulter le code sur GitHub. |
| **13. Footer** | *Pied de page patrimonial* | Identité visuelle, liens de navigation, documentation technique, partenaires muséaux et mentions de licences libres. |

---

## 4. Données Chiffrées Vérifiées

Toutes les métriques figurant sur la landing page sont strictement vérifiées avec les données de code source :

- **22 époques historiques** documentées (1515 à 2026)
- **34 pièces de vestiaire et structures** analysées
- **35 créateurs et modistes** de haute couture
- **13 silhouettes** morphologiquement normalisées
- **4 modèles d'anatomie du costume** par calques
- **18 questions de grand quiz** culturel
- **89 images et gravures** d'archives patrimoniales
- **9 institutions muséales** de référence

---

## 5. Direction Artistique & Charte Graphique

- **Palette chromatique** :
  - Fond papier / ivoire : `#F7F4ED`, `#FAF6F0`
  - Encre typographique : `#242321`
  - Terracotta / Garance : `#9A3412` (accent principal, CTA)
  - Lie-de-vin / Rubis : `#7C2D12`, `#881337`
  - Cuir / Brun doré : `#D9CBB7`, `#B45309`
  - Lichen / Sauge : `#5F6B58`, `#A6AA99`
  - Gris neutre : `#77736D`, `#E5DFD5`
- **Typographie** :
  - Titres & mise en valeur : `Cormorant Garamond` (serif français noble, ligatures, italiques élégantes)
  - Texte courant & interfaces : `Plus Jakarta Sans` (sans-serif géométrique, clarté de lecture)
- **Règles Anti-Slop** :
  - Aucun emoji décoratif dans les titres ou les boutons.
  - Aucune illustration vectorielle générique ou personnage 3D cartoon.
  - Utilisation exclusive de reproductions d'œuvres patrimoniales d'époque et de captures réelles de l'application.

---

## 6. Référencement & Accessibilité

- **SEO & Meta-tags** :
  - Balises `<title>`, `<meta name="description">` et `<link rel="canonical">` complètes.
  - Balises Open Graph (`og:title`, `og:description`, `og:image`, `og:type`, `og:locale`).
  - Balises Twitter Cards (`summary_large_image`).
  - Métadonnées Schema.org structurées en JSON-LD :
    - `WebApplication` (application éducative gratuite, compatible multiplateforme).
    - `FAQPage` (indexation directe des questions/réponses par les moteurs de recherche).
- **Accessibilité WCAG 2.2 niveau AA** :
  - Contrastes de texte supérieurs aux seuils minimaux (minimum 4.5:1 sur fond ivoire).
  - Indicateurs de focus explicites (`:focus-visible`).
  - Prise en charge des préférences utilisateur de réduction de mouvement (`prefers-reduced-motion`).
  - Structure sémantique respectée (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).

---

## 7. Commandes de Compilation & Validation

```bash
# Vérification TypeScript
npm run typecheck

# Exécution de l'ensemble des 77 tests Vitest
npm test -- --run

# Compilation multi-page (application principale + landing page)
npm run build

# Compilation autonome de la landing page uniquement
npm run build:landing
```
