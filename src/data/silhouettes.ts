import { SilhouetteDefinition } from '../types';

export const SILHOUETTE_DEFINITIONS: SilhouetteDefinition[] = [
  {
    id: 'SIL_RENAISSANCE',
    periodId: 'PER_RENAISSANCE',
    periodTitle: 'XVIe siècle : Renaissance',
    eraName: 'Renaissance (1500–1600)',
    century: 16,
    yearLabel: 'vers 1580',
    summary: 'Buste conique géométrisé aplatissant les seins, taille naturelle étroite et jupe conique rigide évasée par le vertugadin en entonnoir ou en tambour.',
    svgModel: {
      headProfile: 'Coiffe en cœur ornée de perles et fraise tuyautée empesée entourant le cou.',
      shouldersWidth: 62,
      waistWidth: 26,
      waistY: 48,
      hipsWidth: 70,
      skirtBottomWidth: 104,
      skirtBottomY: 96,
      understructureShape: 'conic_vertugadin',
      structureName: 'Vertugadin en cerceaux de jonc & Busc d\'acier',
      description: 'Armature rigide conique sous-jacente faite d\'osier et corps baleiné aplatisseur.'
    },
    keyFeatures: [
      'Buste aplati en cône inversé géométrique rigide',
      'Fraise plissée tuyautée isolant la tête',
      'Manches à crevés volumineuses avec manchettes',
      'Jupe conique tendue sans aucun pli souple',
      'Pièce d\'estomac descendant en pointe aiguë sur le ventre'
    ],
    undergarmentStructures: [
      'Vertugadin espagnol conique ou en tambour français',
      'Corps baleiné rigide piqué à busc central en métal',
      'Chemise de lin blanc brodé de fils d\'or'
    ]
  },
  {
    id: 'SIL_BAROQUE',
    periodId: 'PER_BAROQUE_LOUIS_XIV',
    periodTitle: 'XVIIe siècle : Versailles & Grand Siècle',
    eraName: 'Grand Siècle (1660–1700)',
    century: 17,
    yearLabel: 'vers 1685',
    summary: 'Grand corps baleiné à décolleté bateau dégageant les épaules, coiffure à la Fontange dressée vers le ciel et manteau de robe drapé sur les hanches avec traîne majestueuse.',
    svgModel: {
      headProfile: 'Coiffure à la Fontange étirée en hauteur avec dentelle amidonnée dressée.',
      shouldersWidth: 70,
      waistWidth: 24,
      waistY: 48,
      hipsWidth: 60,
      skirtBottomWidth: 92,
      skirtBottomY: 96,
      understructureShape: 'baroque_mantua',
      structureName: 'Grand corps baleiné & Jupons superposés',
      description: 'Buste rigide très comprimé et superposition de la modeste, la friponne et la secrète.'
    },
    keyFeatures: [
      'Hauteur verticale spectaculaire accentuée par la Fontange',
      'Décolleté ovale bateau dégageant les épaules',
      'Manches au coude garnies de volants d\'engageantes en dentelle',
      'Manteau de robe relevé en draperies latérales découvrant la jupe',
      'Traîne longue symbolisant le rang aristocratique'
    ],
    undergarmentStructures: [
      'Grand corps rigide armé de dizaines de fanons de baleine',
      'Trois jupons successifs de taffetas et satin piqué',
      'Busc gravé d\'ivoire ou d\'acier'
    ]
  },
  {
    id: 'SIL_ROCOCO',
    periodId: 'PER_ROCOCO_XVIII',
    periodTitle: 'XVIIIe siècle : Rococo & Lumières',
    eraName: 'Rococo & Lumières (1730–1780)',
    century: 18,
    yearLabel: 'vers 1765',
    summary: 'Largeur latérale maximale grâce aux paniers à coudes, torse en cône étroit, décolleté carré généreux et plis Watteau au dos de la robe à la française.',
    svgModel: {
      headProfile: 'Petite tête poudrée délicate ornée de fleurs de soie et nœuds de velours.',
      shouldersWidth: 54,
      waistWidth: 22,
      waistY: 48,
      hipsWidth: 110,
      skirtBottomWidth: 130,
      skirtBottomY: 96,
      understructureShape: 'rococo_panier',
      structureName: 'Paniers à coudes doubles articulés',
      description: 'Armatures latérales de fanons étendant la jupe sur plus d\'un mètre de largeur frontale.'
    },
    keyFeatures: [
      'Largeur frontale extrême des hanches contrastant avec un profil ultra-plat',
      'Corps à baleines conique à laçage dorsal comprimant le diaphragme',
      'Plis Watteau au dos tombant librement des épaules en traîne',
      'Manchettes à pagode étagées en dentelle fine au coude',
      'Échelle de rubans ornant la pièce d\'estomac triangulaire'
    ],
    undergarmentStructures: [
      'Paniers doubles à coudes en fanons articulés',
      'Corps à baleines rococo à œillets décalés',
      'Chemise de batiste de lin blanc et poches nouées à la taille'
    ]
  },
  {
    id: 'SIL_DIRECTOIRE',
    periodId: 'PER_REVOLUTION_DIRECTOIRE',
    periodTitle: 'Révolution & Directoire (1789–1800)',
    eraName: 'Néoclassicisme & Directoire',
    century: 18,
    yearLabel: 'vers 1798',
    summary: 'Rupture radicale : abolition des corsets et des paniers, silhouette en colonne fluide, taille placée sous les seins et mousseline transparente inspirée des statues antiques.',
    svgModel: {
      headProfile: 'Coiffure courte à la Titus ou chignon grec noué de rubans sans poudre.',
      shouldersWidth: 50,
      waistWidth: 28,
      waistY: 34,
      hipsWidth: 42,
      skirtBottomWidth: 65,
      skirtBottomY: 96,
      understructureShape: 'neoclassic_column',
      structureName: 'Libération totale des structures rigides',
      description: 'Simple chemise fine ou collant chair sans aucune baleine ni jupon métallique.'
    },
    keyFeatures: [
      'Taille très haute immédiatement sous la poitrine',
      'Jupe tubulaire droite tombant sans armature avec petite traîne',
      'Bras et décolleté généreusement dénudés',
      'Matières vaporeuses translucides (mousseline de coton blanc)',
      'Sandales plates nouées sur le mollet'
    ],
    undergarmentStructures: [
      'Chemise de corps légère en linon fin',
      'Brassière courte souple sans baleines',
      'Collant ou maillot couleur chair sous mousseline'
    ]
  },
  {
    id: 'SIL_ROMANTISME',
    periodId: 'PER_XIX_ROMANTISME',
    periodTitle: 'XIXe : Restauration & Romantisme (1820–1840)',
    eraName: 'Romantisme (1830)',
    century: 19,
    yearLabel: 'vers 1832',
    summary: 'Silhouette sablier théâtrale : épaules gigantesques formées par les manches gigot rembourrées, taille naturelle comprimée et jupe cloche raccourcie à la cheville.',
    svgModel: {
      headProfile: 'Capote cabriolet monumentale masquant le profil et chignon en nœud d\'Apollon.',
      shouldersWidth: 84,
      waistWidth: 22,
      waistY: 50,
      hipsWidth: 55,
      skirtBottomWidth: 86,
      skirtBottomY: 93,
      understructureShape: 'hour_glass_s',
      structureName: 'Corset sablier & Coussins de manche en crin',
      description: 'Corset à busc d\'acier serré et rembourrages de plumes sous les manches gigot.'
    },
    keyFeatures: [
      'Manches gigot colossales s\'élargissant depuis le coude',
      'Taille naturelle étranglée créant le sablier romantique',
      'Grand col pèlerine (canezou) blanc couvrant les épaules',
      'Jupe cloche laissant voir les chevilles et fins souliers plats',
      'Capote cabriolet entourant hermétiquement le visage'
    ],
    undergarmentStructures: [
      'Corset romantique à œillets métalliques et laçage très serré',
      'Sous-manches armées de fanons ou coussins de plumes d\'oie',
      'Multiples jupons d\'organdi empesé'
    ]
  },
  {
    id: 'SIL_CRINOLINE',
    periodId: 'PER_XIX_CRINOLINE',
    periodTitle: 'XIXe : Second Empire & Crinoline (1840–1870)',
    eraName: 'Second Empire (1855–1865)',
    century: 19,
    yearLabel: 'vers 1860',
    summary: 'Monumentalité pyramidale : corsage en pointe rigide enserrant le buste et dôme sphérique géant de la crinoline cage d\'acier atteignant deux mètres d\'envergure.',
    svgModel: {
      headProfile: 'Cheveux lissés en bandeaux plats cachant les oreilles et chignon bas.',
      shouldersWidth: 60,
      waistWidth: 20,
      waistY: 50,
      hipsWidth: 90,
      skirtBottomWidth: 135,
      skirtBottomY: 96,
      understructureShape: 'crinoline_dome',
      structureName: 'Crinoline cage d\'acier flexible Tavernier',
      description: 'Lames d\'acier à ressorts reliées par des rubans formant un dôme sphérique.'
    },
    keyFeatures: [
      'Volume sphérique géant en dôme entourant le corps à 360 degrés',
      'Corsage ajusté en pointe plongeante sur le bassin',
      'Décolleté bateau laissant les épaules nues pour le soir (berthe)',
      'Manches pagode s\'évasant au poignet avec sous-manches blanches',
      'Jupe à multiples volants superposés de soie ou de tulle'
    ],
    undergarmentStructures: [
      'Crinoline cage à ressorts d\'acier flexible (1856)',
      'Corset Second Empire armé de baleines rigides',
      'Pantalettes de lingerie blanche bordées de dentelle sous la cage'
    ]
  },
  {
    id: 'SIL_TOURNURE',
    periodId: 'PER_XIX_TOURNURE',
    periodTitle: 'XIXe : Tournure & Faux-Cul (1870–1890)',
    eraName: 'Tournure & IIIe République',
    century: 19,
    yearLabel: 'vers 1885',
    summary: 'Silhouette en S cambrée : devant strictement plat le long du ventre et des cuisses, tout le volume étant projeté en angle droit vers l\'arrière par la tournure métallique.',
    svgModel: {
      headProfile: 'Chignon haut frisé sur le front avec petit bibi penché en avant.',
      shouldersWidth: 54,
      waistWidth: 22,
      waistY: 50,
      hipsWidth: 64,
      skirtBottomWidth: 80,
      skirtBottomY: 96,
      understructureShape: 'tournure_bustle',
      structureName: 'Tournure à demi-arceaux (Faux-cul)',
      description: 'Armature arrière mécanique en porte-à-faux supportant les bouillonnés de tissu.'
    },
    keyFeatures: [
      'Projection arrière spectaculaire formant un promontoire horizontal',
      'Devant et flancs de la jupe ajustés et sculptés',
      'Corset cuirasse très long descendant sur les hanches',
      'Draperies complexes en cascade (retroussis à la polonaise)',
      'Traîne plissée balayant le sol avec rubans de lestage'
    ],
    undergarmentStructures: [
      'Tournure à ressorts d\'acier en demi-lune et coussin de crin',
      'Corset cuirasse long à busc rigide',
      'Jupon de dessus avec volant balayeuse protégeant l\'ourlet'
    ]
  },
  {
    id: 'SIL_BELLE_EPOQUE',
    periodId: 'PER_XX_1900_1910',
    periodTitle: 'XXe : Belle Époque (1900–1910)',
    eraName: 'Belle Époque (Ligne S)',
    century: 20,
    yearLabel: 'vers 1905',
    summary: 'Silhouette serpentine en S créée par le corset droitier : poitrine projetée en avant en pigeonnier, reins cambrés, jupe épousant le bassin et s\'évasant en corolle de fleur.',
    svgModel: {
      headProfile: 'Chapeau gainsborough géant fleuri et coiffure pompadour bouffante.',
      shouldersWidth: 64,
      waistWidth: 22,
      waistY: 50,
      hipsWidth: 58,
      skirtBottomWidth: 95,
      skirtBottomY: 96,
      understructureShape: 'hour_glass_s',
      structureName: 'Corset droitier en S (Gaches-Sarraute)',
      description: 'Busc droit non cambré forçant la bascule du bassin et la projection thoracique.'
    },
    keyFeatures: [
      'Cambrure serpentine en double courbure (forme de S)',
      'Poitrine opulente projetée en avant d\'une seule masse (pigeonnier)',
      'Col montant en dentelle baleiné jusqu\'aux oreilles (guimpe)',
      'Jupe corolle Art Nouveau traînant sur le sol en onde fluide',
      'Chapeaux démesurés chargés de plumes et de fleurs'
    ],
    undergarmentStructures: [
      'Corset droitier en S sans courbure sur l\'estomac',
      'Jupons multiples en taffetas froufroutant de soie',
      'Soutien-gorge pigeonnant primitif'
    ]
  },
  {
    id: 'SIL_GARCONNE',
    periodId: 'PER_XX_1920_1930',
    periodTitle: 'XXe : Années Folles (1920–1930)',
    eraName: 'Garçonne (1925)',
    century: 20,
    yearLabel: 'vers 1925',
    summary: 'Révolution androgyne : buste aplati, suppression des hanches, taille basse tombant sur les fesses, robe droite au genou et jambes dévoilées.',
    svgModel: {
      headProfile: 'Chapeau cloche enfoncé sur les yeux et coupe courte à la garçonne.',
      shouldersWidth: 48,
      waistWidth: 32,
      waistY: 62,
      hipsWidth: 40,
      skirtBottomWidth: 50,
      skirtBottomY: 74,
      understructureShape: 'tubular_flapper',
      structureName: 'Bandeau aplatisseur & Gaine souple',
      description: 'Effacement délibéré de la poitrine et des hanches au profit d\'une ligne droite.'
    },
    keyFeatures: [
      'Silhouette tubulaire droite sans courbure de taille',
      'Taille basse positionnée sur les hanches par une ceinture souple',
      'Robe courte s\'arrêtant juste sous le genou (jambes découvertes)',
      'Cheveux très courts à la garçonne sous chapeau cloche',
      'Souliers salomé à bride bride pour danser le charleston'
    ],
    undergarmentStructures: [
      'Bandeau aplatisseur de poitrine en satin élastique',
      'Gaine souple sans laçage ni baleines d\'acier',
      'Combinaison légère en crêpe de soie et bas chair à jarretelles'
    ]
  },
  {
    id: 'SIL_NEW_LOOK',
    periodId: 'PER_XX_1940_1950',
    periodTitle: 'XXe : New Look de Christian Dior (1947–1955)',
    eraName: 'New Look (1947)',
    century: 20,
    yearLabel: '1947',
    summary: 'Retour magistral à la féminité corolle : épaules douces, taille étranglée par la guêpière, poitrine rehaussée et jupe épanouie de 12 mètres d\'ampleur à mi-mollet.',
    svgModel: {
      headProfile: 'Chapeau tambourin ou capeline penchée et mise en plis soignée.',
      shouldersWidth: 58,
      waistWidth: 20,
      waistY: 48,
      hipsWidth: 72,
      skirtBottomWidth: 115,
      skirtBottomY: 82,
      understructureShape: 'new_look_corolle',
      structureName: 'Guêpière corsetée & Jupon corolle de nylon raide',
      description: 'Ceinture gainante rigide affinant la taille et jupons raides de crinoline moderne.'
    },
    keyFeatures: [
      'Taille de guêpe ultra-cintrée par la guêpière de Rochas/Dior',
      'Hanches capitonnées par les basques rembourrées de la veste Bar',
      'Jupe corolle plissée circulaire descendant à mi-mollet (30 cm du sol)',
      'Épaules rondes féminines sans épaulettes militaires',
      'Escarpins fins et gants blancs de rigueur'
    ],
    undergarmentStructures: [
      'Guêpière baleinée resserrant la taille à 48–52 cm',
      'Jupon corolle à volants d\'organdi ou nylon rigide',
      'Soutien-gorge pigeonnier à bonnets séparés'
    ]
  },
  {
    id: 'SIL_TRAPEZE_MINI',
    periodId: 'PER_XX_1960_1970',
    periodTitle: 'XXe : Mini-Jupe & Espace (1960–1970)',
    eraName: 'Sixties & Ère Spatiale',
    century: 20,
    yearLabel: 'vers 1966',
    summary: 'Ligne géométrique trapèze épurée, cuissardes ou bottes plates en vinyle, mini-jupe raccourcie 20 cm au-dessus du genou et collants colorés.',
    svgModel: {
      headProfile: 'Coupe au carré graphique Vidal Sassoon et lunettes hublot blanches.',
      shouldersWidth: 52,
      waistWidth: 32,
      waistY: 50,
      hipsWidth: 46,
      skirtBottomWidth: 68,
      skirtBottomY: 62,
      understructureShape: 'trapeze_mini',
      structureName: 'Collants nylon sans coutures & Lingerie seconde peau',
      description: 'Disparition complète des gaines et des jupons ; le corps bouge librement.'
    },
    keyFeatures: [
      'Robe trapèze évasée en A coupée court sans marquage de taille',
      'Mini-jupe dévoilant largement les cuisses',
      'Collants opaques en nylon coloré ou blanc spatial',
      'Bottes blanches plates en vinyle souple',
      'Matières industrielles modernes (vinyle, gabardine raide, plastique)'
    ],
    undergarmentStructures: [
      'Collants sans couture en nylon stretch',
      'Soutien-gorge sans armature translucide (No-Bra)',
      'Culotte bikini invisible'
    ]
  },
  {
    id: 'SIL_POWER_DRESSING',
    periodId: 'PER_XX_1980_1990',
    periodTitle: 'XXe : Power Dressing (1980–1990)',
    eraName: 'Eighties & Épaules XXL',
    century: 20,
    yearLabel: 'vers 1985',
    summary: 'Silhouette en V athlétique et conquérante : épaules surdimensionnées par des épaulettes XXL, taille étranglée par une large ceinture de cuir et jupe droite au genou.',
    svgModel: {
      headProfile: 'Chevelure crêpée volumineuse laquée et boucles d\'oreilles clips dorées XXL.',
      shouldersWidth: 88,
      waistWidth: 24,
      waistY: 48,
      hipsWidth: 44,
      skirtBottomWidth: 44,
      skirtBottomY: 76,
      understructureShape: 'power_shoulder',
      structureName: 'Épaulettes monumentales & Body sculptant en Lycra',
      description: 'Coussinets d\'épaules en mousse de plusieurs centimètres et sous-vêtement body.'
    },
    keyFeatures: [
      'Carrure monumentale en triangle inversé (forme en V)',
      'Épaulettes épaisses cousues dans les vestes de tailleur',
      'Taille très cintrée par une large ceinture de cuir à boucle d\'or',
      'Jupe crayon étroite s\'arrêtant au genou ou pantalon fuseau',
      'Escarpins pointus à talons aiguilles vernis'
    ],
    undergarmentStructures: [
      'Épaulettes en mousse thermocollée amovibles',
      'Body gainant en élasthanne Lycra',
      'Collants résille ou plumetis noirs'
    ]
  },
  {
    id: 'SIL_CONTEMPORAINE',
    periodId: 'PER_XXI_2020_PRESENT',
    periodTitle: 'XXIe : Éco-responsabilité & Inclusivité (2020s)',
    eraName: 'Contemporain (Années 2020)',
    century: 21,
    yearLabel: '2026',
    summary: 'Silhouette hybride, décontractée et libre : veste de tailleur oversize fluide déstructurée, superpositions upcyclées de pièces vintage, maille seconde peau et baskets éco-conçues.',
    svgModel: {
      headProfile: 'Cheveux naturels libres, chignon déstructuré et écouteurs sans fil.',
      shouldersWidth: 64,
      waistWidth: 36,
      waistY: 50,
      hipsWidth: 48,
      skirtBottomWidth: 62,
      skirtBottomY: 88,
      understructureShape: 'contemporary_fluid',
      structureName: 'Lingerie confortable éco-conçue & Seconde peau',
      description: 'Zéro contrainte métallique, matières régénérées respirantes et liberté motrice.'
    },
    keyFeatures: [
      'Coupes unisexes fluides et tailoring déstructuré oversize',
      'Mélange éclectique de pièces vintage de seconde main et créations upcyclées',
      'Combinaison ou tops seconde peau (imprimé lune Marine Serre)',
      'Baskets éco-responsables réparables ou mocassins crantés',
      'Rejet des diktats de morphologie rigide au profit du confort'
    ],
    undergarmentStructures: [
      'Lingerie écologique en fibres d\'eucalyptus ou coton bio',
      'Textiles régulateurs thermiques seconde peau',
      'Brassières confortables sans coutures ni armatures'
    ]
  }
];
