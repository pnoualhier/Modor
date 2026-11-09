/**
 * Données officielles vérifiées de la landing page Modor
 * Reflète strictement l'état réel de l'application :
 * 22 époques historiques, 34 pièces de vestiaire, 35 créateurs et modistes,
 * 13 silhouettes analysées, 4 modèles d'anatomie, 18 questions de quiz, 89 images d'archives.
 */

export interface PeriodHighlight {
  id: string;
  name: string;
  century: string;
  years: string;
  silhouette: string;
  keyGarment: string;
  emblematicFigure: string;
  description: string;
  accentColor: string;
  imageUrl: string;
}

export interface UniversItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  screenshotId: string;
  path: string;
}

export interface GarmentHighlight {
  id: string;
  name: string;
  period: string;
  century: string;
  category: 'armature' | 'robe' | 'corsage' | 'emancipation';
  categoryLabel: string;
  description: string;
  innovation: string;
  imageUrl: string;
}

export interface DesignerHighlight {
  id: string;
  name: string;
  house: string;
  lifespan: string;
  era: string;
  significance: string;
  quote?: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'projet' | 'contenu' | 'technique' | 'usage';
}

export const METRICS = {
  periodsCount: 22,
  garmentsCount: 34,
  designersCount: 35,
  universCount: 8,
  silhouettesCount: 13,
  anatomyModelsCount: 4,
  quizQuestionsCount: 18,
  museumSourcesCount: 9,
  centuriesCovered: 'XVIe au XXIe siècle',
  yearRange: '1515 – 2026',
  license: 'Domaine Public & Code Open Source',
  appUrl: '/',
  productionUrl: 'https://modor.pages.dev/',
  githubUrl: 'https://github.com/pnoualhier/Modor',
};

export const PERIOD_HIGHLIGHTS: PeriodHighlight[] = [
  {
    id: 'renaissance',
    name: 'Renaissance & Valois',
    century: 'XVIe siècle',
    years: '1515 – 1610',
    silhouette: 'Conique & pyramidale',
    keyGarment: 'Vertugadin en tambour & Fraise tuyautée',
    emblematicFigure: 'Catherine de Médicis & Marguerite de Valois',
    description: 'Le corps féminin devient une forteresse géométrique : corsage rigide à busc de fer ou de bois, jupe tendue sur vertugadin et collerette plissée isolant le visage.',
    accentColor: '#9A3412',
    imageUrl: '/images/historical/marguerite_valois.jpg',
  },
  {
    id: 'grand-siecle-lumieres',
    name: 'Grand Siècle & Lumières',
    century: 'XVIIe – XVIIIe siècle',
    years: '1610 – 1789',
    silhouette: 'Sablier évasé & Paniers à coudes',
    keyGarment: 'Robe à la française & Corps à baleines',
    emblematicFigure: 'Madame de Pompadour & Marie-Antoinette',
    description: "Apogée du faste versaillais. Le pli Watteau flotte dans le dos tandis que les paniers déploient la jupe latéralement jusqu'à plus de deux mètres d'envergure.",
    accentColor: '#B45309',
    imageUrl: '/images/historical/robe_francaise_met.jpg',
  },
  {
    id: 'revolution-empire',
    name: 'Révolution & Directoire',
    century: 'Fin XVIIIe – Début XIXe',
    years: '1789 – 1815',
    silhouette: 'Tubulaire néoclassique',
    keyGarment: 'Robe chemise & Châle de cachemire',
    emblematicFigure: 'Joséphine de Beauharnais & Madame Récamier',
    description: 'Rupture radicale : abandon momentané des corsets et des paniers. La mousseline blanche translucide ceinturée sous la gorge évoque les statues de la Grèce antique.',
    accentColor: '#5F6B58',
    imageUrl: '/images/historical/robe_empire_met.jpg',
  },
  {
    id: 'romantisme-second-empire',
    name: 'Restauration & Second Empire',
    century: 'XIXe siècle',
    years: '1815 – 1870',
    silhouette: 'Dôme & Cloche métallique',
    keyGarment: 'Crinoline cage & Manche gigot',
    emblematicFigure: "Impératrice Eugénie & Charles Frederick Worth",
    description: "L'industrialisation métallurgique libère les jambes du poids des jupons grâce à la crinoline cage d'acier flexible, avant que Worth n'invente la haute couture.",
    accentColor: '#7C2D12',
    imageUrl: '/images/historical/crinoline_cage_archive.jpg',
  },
  {
    id: 'belle-epoque-annees-folles',
    name: 'Belle Époque & Années Folles',
    century: 'Fin XIXe – Années 1930',
    years: '1870 – 1939',
    silhouette: 'Courbe en S puis Ligne fluide',
    keyGarment: 'Tournure en pouf & Robe en biais',
    emblematicFigure: 'Paul Poiret, Jeanne Lanvin & Madeleine Vionnet',
    description: "Après l'extrême cambrure de la tournure, Poiret supprime le corset, Vionnet invente la coupe en biais libérant le tombé naturel de l'étoffe, et Chanel impose le confort.",
    accentColor: '#881337',
    imageUrl: '/images/historical/robe_tournure_worth.jpg',
  },
  {
    id: 'apres-guerre-contemporain',
    name: 'Après-Guerre & Émancipation',
    century: 'XXe – XXIe siècle',
    years: '1947 – 2026',
    silhouette: 'New Look sablier puis liberté plurielle',
    keyGarment: 'Tailleur Bar, Mini-jupe & Smoking',
    emblematicFigure: 'Christian Dior, André Courrèges & Yves Saint Laurent',
    description: "Dior fait renaître la splendeur parisienne avec le New Look (1947), rapidement bousculé par la révolte des années 1960, le pantalon pour toutes et la mode conceptuelle.",
    accentColor: '#242321',
    imageUrl: '/images/historical/dior_bar_archive.jpg',
  },
];

export const UNIVERS_MODULES: UniversItem[] = [
  {
    id: 'chronologie',
    name: 'Chronologie interactive',
    tagline: '500 ans en un ruban temporel continu',
    description: 'Explorez 22 périodes de 1515 à aujourd’hui. Visualisez les jalons historiques, les évolutions sociopolitiques et comparez les époques avec filtres par siècle.',
    features: ['Frise temporelle synchronisée', 'Filtres par siècle (XVIe au XXIe)', 'Fiches d’époque exhaustives', 'Repères historiques et artistiques'],
    icon: 'Clock',
    screenshotId: '01_chronologie_frise',
    path: '#chronologie',
  },
  {
    id: 'silhouettes',
    name: 'Morphologie & Silhouettes',
    tagline: 'Le corps féminin redessiné par l’artifice',
    description: 'Un comparateur morphologique normalisé pour juxtaposer deux époques et analyser les lignes d’épaules, la cambrure lombaire, le cintrage et l’amplitude.',
    features: ['13 silhouettes normalisées', 'Comparateur face-à-face interactif', 'Rapports taille / hanches / épaules', 'Notices explicatives anatomiques'],
    icon: 'Maximize2',
    screenshotId: '02_silhouettes_comparateur',
    path: '#silhouettes',
  },
  {
    id: 'anatomie',
    name: 'Anatomie du costume',
    tagline: 'Déshabillage architectural par calques',
    description: 'Une vue en coupe pédagogique à 5 couches : dessous hygiéniques, armatures et corps rigides, juponnages, robe d’apparat et ornements extérieurs.',
    features: ['4 époques maîtresses modélisées', '5 calques indépendants superposables', 'Effeuillage progressif du vêtement', 'Explications techniques des matériaux'],
    icon: 'Layers',
    screenshotId: '03_anatomie_costume',
    path: '#anatomie',
  },
  {
    id: 'vestiaire',
    name: 'Catalogue du vestiaire',
    tagline: '34 pièces patrimoniales décryptées',
    description: 'De la fraise d’Henri III au pantalon smoking d’Yves Saint Laurent. Fiches complètes avec étymologie, matériaux, patrons, sociologie et postérité.',
    features: ['34 fiches muséales illustrées', 'Tri par famille (Armatures, Robes, etc.)', 'Recherche en direct instantanée', 'Iconographie haute définition'],
    icon: 'BookOpen',
    screenshotId: '04_catalogue_vestiaire',
    path: '#vestiaire',
  },
  {
    id: 'createurs',
    name: 'Panthéon des créateurs',
    tagline: '35 orfèvres de la haute couture',
    description: 'Biographies documentées, signatures stylistiques, maisons de couture et pièces manifestes des plus grands créateurs ayant forgé l’aura de Paris.',
    features: ['35 créateurs et créatrices', 'Maison, décennies d’activité et dates', 'Innovations techniques fondatrices', 'Citations et manifestes'],
    icon: 'Award',
    screenshotId: '05_pantheon_createurs',
    path: '#createurs',
  },
  {
    id: 'galerie',
    name: 'Galerie & Iconographie',
    tagline: '89 œuvres et gravures de musée',
    description: 'Une collection d’archives d’exception : toiles de cour, gravures de journaux de mode, brevets originaux et photographies d’époque avec métadonnées.',
    features: ['89 archives haute définition', 'Crédits et fonds muséaux précis', 'Agrandissement plein écran', 'Filtrage thématique'],
    icon: 'Image',
    screenshotId: '06_grand_quiz',
    path: '#galerie',
  },
  {
    id: 'quiz',
    name: 'Grand Quiz culturel',
    tagline: 'Testez votre érudition textile',
    description: '18 questions rigoureuses rédigées par des passionnés pour tester votre connaissance des techniques de couture, des dates clés et des anecdotes historiques.',
    features: ['18 questions documentées', 'Explications détaillées immédiates', 'Calcul du score et titre honorifique', 'Accessible à tous niveaux'],
    icon: 'HelpCircle',
    screenshotId: '06_grand_quiz',
    path: '#quiz',
  },
  {
    id: 'favoris',
    name: 'Carnet de recherche personnel',
    tagline: 'Vos notes et coups de cœur sauvegardés',
    description: 'Constituez votre dossier d’étude personnel : épinglez des pièces, annotez vos observations et retrouvez vos découvertes sans inscription ni traçage.',
    features: ['Sauvegarde locale 100% privée', 'Annotations libres par fiche', 'Export de vos références', 'Respect total de la vie privée'],
    icon: 'Bookmark',
    screenshotId: '08_onboarding_mentions',
    path: '#favoris',
  },
];

export const GARMENT_HIGHLIGHTS: GarmentHighlight[] = [
  {
    id: 'vertugadin',
    name: 'Vertugadin en tambour',
    period: 'Renaissance (1570 – 1610)',
    century: 'XVIe siècle',
    category: 'armature',
    categoryLabel: 'Armature & Structure',
    description: "Cercle rigide de jonc ou de fil de fer posé horizontalement sur les hanches, conférant à la jupe une forme tubulaire rappelant la surface d'un tambour.",
    innovation: "Première rigidification mécanique de la silhouette féminine en France, importée d'Espagne et adaptée par Catherine de Médicis.",
    imageUrl: '/images/historical/vertugadin_wiki.jpg',
  },
  {
    id: 'corps-a-baleines',
    name: 'Corps à baleines',
    period: 'Grand Siècle & Lumières (1650 – 1789)',
    century: 'XVIIe – XVIIIe siècle',
    category: 'armature',
    categoryLabel: 'Armature & Structure',
    description: 'Corsage rigide structuré par des dizaines de fanons de baleine resserrés, écrasant la poitrine et imposant un port de tête altier et vertical.',
    innovation: 'Véritable exo-squelette textile façonnant la posture aristocratique selon les règles strictes de la cour royale.',
    imageUrl: '/images/historical/corps_baleine_mad.jpg',
  },
  {
    id: 'robe-a-la-francaise',
    name: 'Robe à la française',
    period: 'Siècle des Lumières (1730 – 1775)',
    century: 'XVIIIe siècle',
    category: 'robe',
    categoryLabel: 'Robe & Parure',
    description: 'Composée d’un manteau ouvert sur une pièce d’estomac triangulaire, ornée dans le dos des célèbres plis Watteau cousus à l’encolure.',
    innovation: 'Le symbole absolu du goût français sous Louis XV, alliant majesté frontale et grâce mouvante dans le dos.',
    imageUrl: '/images/historical/robe_francaise_detail.jpg',
  },
  {
    id: 'crinoline-cage',
    name: 'Crinoline cage métallique',
    period: 'Second Empire (1856 – 1867)',
    century: 'XIXe siècle',
    category: 'armature',
    categoryLabel: 'Armature & Structure',
    description: 'Armature de cerceaux d’acier flexible reliés par des rubans de toile, brevetée par Tavernier en France en 1856.',
    innovation: 'Allège spectaculairement les femmes du poids de 6 à 8 jupons superposés, tout en atteignant des diamètres records.',
    imageUrl: '/images/historical/crinoline_cage_archive.jpg',
  },
  {
    id: 'tournure',
    name: 'Tournure en pouf (ou faux-cul)',
    period: 'Belle Époque (1870 – 1889)',
    century: 'XIXe siècle',
    category: 'armature',
    categoryLabel: 'Armature & Structure',
    description: 'Armature semi-circulaire rejetant l’ampleur de la traîne exclusivement vers l’arrière, cambrant la silhouette en une courbe sinueuse.',
    innovation: 'Transfère le volume latéral vers la croupe, créant la démarche chaloupée caractéristique des tableaux impressionnistes.',
    imageUrl: '/images/historical/tournure_wiki.jpg',
  },
  {
    id: 'robe-en-biais',
    name: 'Robe en biais Vionnet',
    period: 'Entre-deux-guerres (1920 – 1935)',
    century: 'XXe siècle',
    category: 'robe',
    categoryLabel: 'Robe & Parure',
    description: 'Robe taillée à 45 degrés par rapport au droit-fil du tissu, épousant le corps féminin sans fermeture éclair ni corset.',
    innovation: 'Madeleine Vionnet libère le mouvement par une révolution géométrique du patronage, inspirée des drapés antiques.',
    imageUrl: '/images/historical/robe_biais_vionnet.jpg',
  },
  {
    id: 'smoking-feminin',
    name: 'Smoking féminin Saint Laurent',
    period: 'Révolution Pop (1966)',
    century: 'XXe siècle',
    category: 'emancipation',
    categoryLabel: 'Bifurcation & Émancipation',
    description: 'Adaptation féminine du smoking masculin de soirée, combinant veste cintrée à revers de satin et pantalon droit noir.',
    innovation: 'Yves Saint Laurent offre aux femmes le pouvoir symbolique du costume masculin tout en affirmant une sensualité audacieuse.',
    imageUrl: '/images/historical/ysl_smoking_1966.jpg',
  },
];

export const DESIGNER_HIGHLIGHTS: DesignerHighlight[] = [
  {
    id: 'rose-bertin',
    name: 'Rose Bertin',
    house: 'Marchande de modes de la Reine',
    lifespan: '1747 – 1813',
    era: 'Rococo & Révolution',
    significance: 'Première créatrice française à obtenir une renommée internationale, surnommée « Ministre des modes » de Marie-Antoinette.',
    quote: '« Il n’y a de nouveau que ce qui a été oublié. »',
    imageUrl: '/images/historical/rose_bertin_portrait.jpg',
  },
  {
    id: 'charles-frederick-worth',
    name: 'Charles Frederick Worth',
    house: 'Maison Worth (Paris)',
    lifespan: '1825 – 1895',
    era: 'Second Empire & Début Belle Époque',
    significance: 'Père fondateur de la haute couture parisienne, premier à signer ses créations d’une étiquette et à défiler sur mannequins vivants.',
    imageUrl: '/images/historical/charles_frederick_worth.jpg',
  },
  {
    id: 'paul-poiret',
    name: 'Paul Poiret',
    house: 'Maison Poiret',
    lifespan: '1879 – 1944',
    era: 'Belle Époque & Années 1910',
    significance: 'Libérateur du corps féminin au début du XXe siècle : il bannit le corset, invente la silhouette hellénique et la jupe-culotte.',
    quote: '« C’est au nom de la liberté que j’ai proclamé la chute du corset. »',
    imageUrl: '/images/historical/paul_poiret_portrait.jpg',
  },
  {
    id: 'gabrielle-chanel',
    name: 'Gabrielle « Coco » Chanel',
    house: 'Chanel',
    lifespan: '1883 – 1971',
    era: 'Années 1920 – 1970',
    significance: 'Révolutionnaire du confort moderne : petite robe noire, jersey souple, tailleur en tweed sans entoilage rigide.',
    quote: '« La mode passe, le style reste. »',
    imageUrl: '/images/historical/coco_chanel_portrait.jpg',
  },
  {
    id: 'christian-dior',
    name: 'Christian Dior',
    house: 'Christian Dior',
    lifespan: '1905 – 1957',
    era: 'Après-Guerre (1947 – 1957)',
    significance: 'Inventeur du New Look (printemps 1947), ressuscitant l’extrême féminité, la taille de guêpe et les métrages généreux après les privations.',
    quote: '« Nous sortions d’une époque de guerre, de pénuries. Mes robes étaient faites pour rendre les femmes heureuses. »',
    imageUrl: '/images/historical/christian_dior_portrait.jpg',
  },
  {
    id: 'yves-saint-laurent',
    name: 'Yves Saint Laurent',
    house: 'Yves Saint Laurent Rive Gauche',
    lifespan: '1936 – 2008',
    era: 'Années 1960 – 2000',
    significance: 'Démocratise le luxe avec le prêt-à-porter Rive Gauche et dote la femme du vestiaire du pouvoir : smoking, saharienne, trench-coat.',
    quote: '« Chanel a donné la liberté aux femmes. J’ai donné le pouvoir. »',
    imageUrl: '/images/historical/yves_saint_laurent_portrait.jpg',
  },
];

export const APPLICATION_SCREENSHOTS = [
  {
    id: '01_chronologie_frise',
    title: 'Frise chronologique interactive',
    subtitle: 'Navigation temporelle fluide sur cinq siècles',
    description: 'Parcourez 22 périodes de 1515 à 2026. Filtrez par siècle, visualisez les jalons clés et accédez aux fiches d’époque avec leurs repères sociologiques.',
    imagePath: '/screenshots/01_chronologie_frise.png',
  },
  {
    id: '02_silhouettes_comparateur',
    title: 'Comparateur de silhouettes',
    subtitle: 'Juxtaposition morphologique normalisée',
    description: 'Comparez deux époques côte à côte pour mesurer l’évolution des lignes d’épaules, du cintrage et du volume des jupes sur une échelle anatomique exacte.',
    imagePath: '/screenshots/02_silhouettes_comparateur.png',
  },
  {
    id: '03_anatomie_costume',
    title: 'Anatomie du costume en calques',
    subtitle: 'Déshabillage architectural couche par couche',
    description: 'Explorez les 5 calques superposés d’une tenue d’époque : dessous hygiéniques, armatures mécaniques, jupons, robe principale et parure.',
    imagePath: '/screenshots/03_anatomie_costume.png',
  },
  {
    id: '04_catalogue_vestiaire',
    title: 'Catalogue du vestiaire & structures',
    subtitle: '34 fiches patrimoniales approfondies',
    description: 'Recherchez parmi 34 vêtements et structures historiques. Chaque fiche détaille l’histoire, les matériaux, la coupe et la postérité culturelle.',
    imagePath: '/screenshots/04_catalogue_vestiaire.png',
  },
  {
    id: '05_pantheon_createurs',
    title: 'Panthéon des 35 créateurs',
    subtitle: 'Biographies, maisons et innovations clés',
    description: 'Retrouvez les maîtres de la mode parisienne : portraits, dates clés, manifestes, innovations techniques et pièces conservées dans les musées.',
    imagePath: '/screenshots/05_pantheon_createurs.png',
  },
  {
    id: '06_grand_quiz',
    title: 'Grand Quiz culturel',
    subtitle: '18 questions pour tester votre érudition',
    description: 'Testez vos connaissances en histoire de la mode féminine à travers 18 questions documentées avec corrections et anecdotes culturelles détaillées.',
    imagePath: '/screenshots/06_grand_quiz.png',
  },
  {
    id: '07_menu_navigation',
    title: 'Menu de navigation universelle',
    subtitle: 'Accès rapide aux 8 univers de Modor',
    description: 'Passez instantanément d’un univers à un autre grâce à la barre de navigation ergonomique, conçue pour un confort d’étude optimal.',
    imagePath: '/screenshots/07_menu_navigation.png',
  },
  {
    id: '08_onboarding_mentions',
    title: 'Onboarding & Mentions patrimoniales',
    subtitle: 'Rigueur documentaire et crédits muséaux',
    description: 'Consultez la charte éditoriale, les sources universitaires et les institutions partenaires (Palais Galliera, BnF, Musée Carnavalet).',
    imagePath: '/screenshots/08_onboarding_mentions.png',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'projet',
    question: 'Qu’est-ce que le projet Modor ?',
    answer: 'Modor est une encyclopédie numérique et interactive consacrée à l’histoire de la mode féminine en France, de la Renaissance (1515) jusqu’à nos jours. Conçue comme un outil patrimonial d’intérêt public, elle allie vulgarisation de haut niveau, chronologie documentée, analyses anatomiques des armatures textiles et panthéon des créateurs.',
  },
  {
    category: 'projet',
    question: 'Pourquoi ce projet est-il centré sur la mode féminine en France ?',
    answer: 'La France, et plus particulièrement Paris depuis le règne de Louis XIV, a constitué le laboratoire mondial de la haute couture, des corporations de couturières et des métiers d’art. Ce cadre géographique et temporel permet d’offrir une profondeur d’analyse incomparable sur l’évolution sociologique, politique et industrielle du costume féminin.',
  },
  {
    category: 'contenu',
    question: 'D’où proviennent les données historiques et les images ?',
    answer: 'Toutes les données textuelles sont vérifiées d’après des travaux universitaires de référence (historiens du costume, catalogues du Palais Galliera, Musée des Arts Décoratifs, BnF). Les 89 images et gravures proviennent exclusivement d’archives du domaine public ou sous licences libres (Gallica / BnF, Musées de la Ville de Paris, Metropolitan Museum of Art, Rijksmuseum).',
  },
  {
    category: 'contenu',
    question: 'Combien d’éléments l’encyclopédie contient-elle actuellement ?',
    answer: 'La version actuelle comprend exactement 22 périodes historiques complètes, 34 pièces de vestiaire et d’armatures analysées, 35 notices de créateurs et modistes, 13 silhouettes morphologiques comparables, 4 modèles d’anatomie par calques et 18 questions de grand quiz.',
  },
  {
    category: 'technique',
    question: 'L’application fonctionne-t-elle sur smartphone et tablette ?',
    answer: 'Oui. Modor a été développée en responsive design complet et conçue comme une Progressive Web App (PWA). Elle s’adapte à tous les écrans, du smartphone à l’écran 4K d’ordinateur, avec un confort de lecture optimal et des interactions tactiles fluides.',
  },
  {
    category: 'technique',
    question: 'L’application peut-elle être utilisée hors ligne ?',
    answer: 'Oui. Grâce à son architecture PWA et son Service Worker intégré, Modor met en cache l’ensemble des fiches et des visuels essentiels lors de votre première visite. Vous pouvez ensuite la consulter sans connexion Internet, idéal pour des visites de musées ou des cours en amphithéâtre.',
  },
  {
    category: 'usage',
    question: 'L’accès est-il gratuit et faut-il créer un compte ?',
    answer: 'Modor est 100% gratuit, sans publicité, sans abonnement et sans aucun compte utilisateur obligatoire. Vos favoris et notes de recherche personnelles sont stockés localement dans votre propre navigateur pour préserver totalement votre vie privée.',
  },
  {
    category: 'usage',
    question: 'Comment fonctionne l’anatomie du costume en calques ?',
    answer: 'L’outil d’anatomie permet d’effeuiller virtuellement une tenue d’époque en 5 couches successives : dessous hygiéniques (chemise en lin), armature rigide (corset, vertugadin, crinoline), juponnage de volume, robe principale d’apparat et accessoires/parements. Cela permet de comprendre comment l’architecture invisible créait la ligne visible.',
  },
  {
    category: 'usage',
    question: 'Puis-je utiliser Modor pour mes cours, exposés ou recherches ?',
    answer: 'Absolument. Les enseignants, étudiants, modélistes et costumiers sont encouragés à utiliser Modor comme support pédagogique. Les crédits muséaux, les dates et les termes techniques sont normalisés pour faciliter vos citations universitaires.',
  },
  {
    category: 'projet',
    question: 'Le projet est-il open source et peut-on y contribuer ?',
    answer: 'Oui. Le code source complet de Modor est hébergé publiquement sur GitHub sous licence MIT. Tout le monde peut proposer des enrichissements documentaires, signaler des coquilles ou proposer de nouvelles fiches historiques via les Pull Requests du dépôt.',
  },
];
