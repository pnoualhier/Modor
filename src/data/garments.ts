import { Garment } from '../types';

export const HISTORICAL_GARMENTS: Garment[] = [
  {
    id: 'GAR_VERTUGADIN',
    name: 'Vertugadin',
    category: 'structures',
    periodIds: ['PER_RENAISSANCE'],
    century: 16,
    eraDates: 'vers 1530 – 1610',
    definition: 'Sous-structure conique ou cylindrique portée sous les jupes pour leur donner une forme géométrique évasée et rigide sans s\'affaisser.',
    anatomicalRole: 'Élargit et projette la partie inférieure du corps en créant un contraste saisissant avec la finesse du buste conique.',
    constructionDetails: 'Constitué d\'une jupe de toile forte ou coutil renforcée de cerceaux concentriques en osier, canne de jonc, fil de laiton ou cordes de chanvre cousues dans des coulisses. Il existe le vertugadin espagnol (conique en entonnoir) et le vertugadin français en tambour (bourrelet horizontal formant plateau aux hanches).',
    materials: ['Toile de lin d\'Hollande', 'Coutils', 'Joncs', 'Osier', 'Fanons de baleine'],
    socialContext: 'Symbole de prestige aristocratique et de majesté à la cour des Valois. Le port du vertugadin empêchait la femme de s\'asseoir sur des chaises ordinaires, imposant des plians ou carreaux au sol.',
    evolution: 'Apparu en Espagne sous le nom de verdugado vers 1470, il gagne la France sous François Ier puis s\'hypertrophie sous Henri III avant de disparaître progressivement sous Louis XIII vers 1615 au profit de simples jupons superposés.',
    silhouetteEffect: 'Crée une jupe conique rigide triangulaire ou un plateau horizontal en tambour soulignant la verticalité du torse.',
    images: [
      {
        id: 'IMG_GAR_VERTUGADIN',
        title: 'Anne de Danemark au vertugadin en tambour (XVIe siècle)',
        institution: 'Wikipédia / Wikimedia Commons',
        license: 'Domaine Public',
        imageUrl: '/images/historical/vertugadin_wiki.jpg',
        caption: 'Portrait d\'époque montrant l\'ampleur cylindrique du vertugadin en tambour de la Renaissance.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_BOCHER', 'SRC_PAUPER', 'SRC_LELOIR']
  },
  {
    id: 'GAR_FRAISE',
    name: 'Fraise',
    category: 'accessoires',
    periodIds: ['PER_RENAISSANCE'],
    century: 16,
    eraDates: 'vers 1550 – 1625',
    definition: 'Collerette blanche plissée ou tuyautée portée autour du cou par les femmes et les hommes, faite de fine toile de lin empesée à l\'amidon.',
    anatomicalRole: 'Encadre et isole la tête comme sur un plateau, forçant un port de tête altier et hiératique.',
    constructionDetails: 'Ruban de fine batiste ou toile de lin plié en godrons réguliers en forme de huit (tuyaux d\'orgue), fixé sur un tour de cou rigide et gaufré au fer chaud après trempage dans l\'empoi (amidon de blé).',
    materials: ['Batiste de lin', 'Linon', 'Dentelle au fuseau', 'Amidon de blé'],
    socialContext: 'Marqueur suprême de noblesse : son entretien exigeait un personnel spécialisé (les blanchisseuses empeseuses). Elle interdisait tout travail manuel et tout mouvement précipité.',
    evolution: 'Petite ruche modeste froncée sous François Ier, elle croît démesurément sous Henri III et Catherine de Médicis pour devenir la « roue de meule » ou « fraise à confusion ». Remplacée vers 1625 par le col plat en dentelle rabattu sur les épaules (col Médicis ou rabat).',
    silhouetteEffect: 'Élargit horizontalement la base du cou et met en valeur la blancheur du teint et les perles des coiffures.',
    images: [
      {
        id: 'IMG_GAR_FRAISE',
        title: 'Fraise tuyautée à godrons en fine batiste',
        institution: 'Wikipédia / Wikimedia Commons (Musée Carnavalet)',
        license: 'Domaine Public',
        imageUrl: '/images/historical/fraise_renaissance.jpg',
        caption: 'Fraise tuyautée à tuyaux réguliers empesés à l\'amidon, fin du XVIe siècle.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_BOCHER', 'SRC_LELOIR', 'SRC_BNF_GALLICA']
  },
  {
    id: 'GAR_CORPS_BALEINE',
    name: 'Corps à baleines',
    category: 'structures',
    periodIds: ['PER_RENAISSANCE', 'PER_BAROQUE_LOUIS_XIV', 'PER_ROCOCO_XVIII'],
    century: 17,
    eraDates: 'XVIe – fin XVIIIe siècle (vers 1550 – 1789)',
    definition: 'Sous-vêtement rigide armé de fanons de baleine resserrant le buste, aplatissant la poitrine et forçant les épaules en arrière.',
    anatomicalRole: 'Maintient la colonne vertébrale droite, aplatit le diaphragme et projette la gorge au-dessus d\'un décolleté plongeant.',
    constructionDetails: 'Deux ou trois épaisseurs de coutil et toile de lin cousues ensemble, percées de dizaines de coulisses verticales et obliques dans lesquelles sont insérés des fanons de baleine de quelques millimètres. Un busc d\'acier, d\'os gravé ou de buis est glissé au centre devant.',
    materials: ['Coutil fort', 'Fanons de baleine boréale', 'Busc d\'ivoire ou acier', 'Rubans de laçage de soie'],
    socialContext: 'Imposé dès la plus tendre enfance aux jeunes filles de la noblesse pour leur « former la taille » et leur inculquer la tenue morale et corporelle requise à la cour.',
    evolution: 'D\'abord corsage piqué rigide à la Renaissance, il devient le grand corps de cour baleiné sous Louis XIV, puis le corps à baleines rococo à laçage dorsal sous Louis XV. Balayé par la Révolution de 1789.',
    silhouetteEffect: 'Transforme le torse féminin en un cône parfait sans courbure naturelle, dégageant les clavicules.',
    images: [
      {
        id: 'IMG_GAR_CORPS',
        title: 'Corps à baleines en soie brochée et coutil armé',
        institution: 'Wikipédia / Wikimedia Commons (MAD Paris)',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/corps_baleine_mad.jpg',
        caption: 'Corps à baleines du XVIIIe siècle présentant les coulisses à fanons et les œillets de laçage décalés.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_PAUPER', 'SRC_MAD_PARIS', 'SRC_GALLIERA']
  },
  {
    id: 'GAR_ROBE_FRANCAISE',
    name: 'Robe à la française',
    category: 'robes',
    periodIds: ['PER_ROCOCO_XVIII'],
    century: 18,
    eraDates: 'vers 1720 – 1780',
    definition: 'Robe emblématique du XVIIIe siècle européen caractérisée par de grands plis doubles au dos (plis Watteau) flottant gracieusement jusqu\'au sol.',
    anatomicalRole: 'Habille le panier latéral tout en offrant une liberté majestueuse de draperie à l\'arrière.',
    constructionDetails: 'Se compose du manteau de robe (avec plis plats au dos partant de l\'encolure), d\'une jupe coordonnée ouverte sur le devant et d\'une pièce d\'estomac richement garnie d\'échelles de rubans épinglée au corps baleiné.',
    materials: ['Soie façonnée de Lyon', 'Taffetas glacé', 'Damas fleuri', 'Dentelle de Valenciennes', 'Gaze d\'or'],
    socialContext: 'Considérée dans toutes les cours d\'Europe comme le summum du goût et du raffinement aristocratique parisien.',
    evolution: 'Issue de la robe battante de la Régence (1715-1725), elle s\'affine sous Louis XV pour devenir le costume de cérémonie privilégié de la haute société.',
    silhouetteEffect: 'Largeur spectaculaire vue de face sur les hanches, minceur de profil et somptueuse traîne ondulante au dos.',
    images: [
      {
        id: 'IMG_GAR_ROBE_FR',
        title: 'Robe à la française en soie peinte aux motifs floraux',
        institution: 'Wikipédia / Wikimedia Commons (The MET)',
        license: 'Domaine Public / Open Access CCO',
        imageUrl: '/images/historical/robe_francaise_detail.jpg',
        caption: 'Vue dorsale des plis Watteau et des manchettes à pagode d\'une robe à la française d\'époque Louis XV.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_MET_COSTUME', 'SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'GAR_ROBE_ANGLAISE',
    name: 'Robe à l\'anglaise',
    category: 'robes',
    periodIds: ['PER_ROCOCO_XVIII'],
    century: 18,
    eraDates: 'vers 1770 – 1795',
    definition: 'Robe ajustée dont le corsage au dos est baleiné et cousu au corps, marquant fermement la cambrure des reins sans pli flottant.',
    anatomicalRole: 'Souligne la finesse de la cambrure dorsale et recentre le volume sur l\'arrière.',
    constructionDetails: 'Le corsage est coupé avec des coutures cintrées ajustées au corps baleiné par des coutures plaquées, la jupe étant cousue à la taille en plis serrés dits plis d\'orgue.',
    materials: ['Indiennes de coton imprimées', 'Pékin de soie', 'Taffetas de Florence', 'Mousseline'],
    socialContext: 'Influence de l\'anglomanie et du retour à la nature prôné par Jean-Jacques Rousseau, privilégiant une aisance accrue lors des promenades campagnardes.',
    evolution: 'Popularisée en France dans les années 1770, elle supplante la robe à la française pour le quotidien avant de mener à la robe chemise.',
    silhouetteEffect: 'Taille naturelle bien marquée, dos ajusté et hanches plus doucement arrondies que sur les grands paniers de cour.',
    images: [
      {
        id: 'IMG_GAR_ROBE_ANG',
        title: 'Robe à l\'anglaise en satin vert et fleurs brodées',
        institution: 'Wikipédia / Wikimedia Commons (Palais Galliera)',
        license: 'Domaine Public',
        imageUrl: '/images/historical/robe_anglaise_galliera.jpg',
        caption: 'Dos plaqué à découpes cintrées caractéristique de la robe à l\'anglaise vers 1780.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_BNF_GALLICA']
  },
  {
    id: 'GAR_PANIER',
    name: 'Panier',
    category: 'structures',
    periodIds: ['PER_ROCOCO_XVIII'],
    century: 18,
    eraDates: 'vers 1715 – 1785',
    definition: 'Armature sous-jacente faite de cerceaux de baleine ou d\'osier étendant la jupe transversalement sur les deux côtés tout en maintenant le ventre plat.',
    anatomicalRole: 'Projette les hanches latéralement jusqu\'à parfois plus d\'un mètre de chaque côté sans augmenter le volume avant-arrière.',
    constructionDetails: 'Deux paniers séparés (paniers à coudes) attachés par une ceinture de ruban à la taille, munis d\'ouvertures pour passer les mains et accéder aux poches intérieures nouées sous la jupe.',
    materials: ['Fanon de baleine', 'Osier', 'Coutil de lin', 'Rubans de tresse'],
    socialContext: 'Indispensable pour porter la robe à la française. Les carrosses et les portes des châteaux royaux durent être élargis pour permettre le passage des grandes dames en paniers de cour.',
    evolution: 'D\'abord cloche ronde (panier à guéridon) vers 1718, il devient ovale puis panier double à coudes articulé, avant d\'être abandonné lors de la Révolution de 1789.',
    silhouetteEffect: 'Proportion frontale monumentale et silhouette de profil ultra-plate.',
    images: [
      {
        id: 'IMG_GAR_PANIER',
        title: 'Robe de cour à grands paniers latéraux du XVIIIe siècle',
        institution: 'Wikipédia / Wikimedia Commons',
        license: 'Domaine Public',
        imageUrl: '/images/historical/panier_wiki.jpg',
        caption: 'Silhouette du XVIIIe siècle projetée latéralement par une structure de paniers à coudes.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_PAUPER', 'SRC_BOCHER', 'SRC_GALLIERA']
  },
  {
    id: 'GAR_ROBE_EMPIRE',
    name: 'Robe Empire',
    category: 'robes',
    periodIds: ['PER_REVOLUTION_DIRECTOIRE', 'PER_XIX_EMPIRE'],
    century: 19,
    eraDates: 'vers 1795 – 1820',
    definition: 'Robe tubulaire en tissu léger caractérisée par une taille coupée très haut, immédiatement sous la poitrine, et une jupe droite fluide.',
    anatomicalRole: 'Allonge les jambes à l\'extrême et libère l\'estomac et la taille naturelle de toute contrainte métallique.',
    constructionDetails: 'Corsage très court de quelques centimètres, à encolure basse carrée ou ronde, avec petites manches ballons bouffantes, jupe cousue à fronces sous le décolleté.',
    materials: ['Mousseline de coton blanc des Indes', 'Percale', 'Linon', 'Satin de soie', 'Velours impérial'],
    socialContext: 'Inspirée de la statuaire grecque et romaine antique, elle symbolise la rupture avec l\'Ancien Régime et l\'avènement de la modernité républicaine puis napoléonienne.',
    evolution: 'Née de la robe-chemise sous le Directoire, enrichie de broderies dorées sous Napoléon Ier, elle s\'alourdit et s\'abaisse progressivement après 1815.',
    silhouetteEffect: 'Ligne pure en colonne antique, drapé fluide et mouvements du corps perceptibles sous le tissu.',
    images: [
      {
        id: 'IMG_GAR_ROBE_EMP',
        title: 'Robe Empire en mousseline de coton brodée au point de chaînette',
        institution: 'Wikipédia / Wikimedia Commons (The MET)',
        license: 'Domaine Public / Open Access CCO',
        imageUrl: '/images/historical/robe_empire_met.jpg',
        caption: 'Robe taille haute en mousseline blanche portée vers 1805 avec manches ballon.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_MET_COSTUME', 'SRC_GALLIERA', 'SRC_BOCHER']
  },
  {
    id: 'GAR_MANCHE_GIGOT',
    name: 'Manche gigot',
    category: 'corsages',
    periodIds: ['PER_XIX_ROMANTISME', 'PER_XIX_FIN_SIECLE'],
    century: 19,
    eraDates: '1825–1836 puis 1892–1897',
    definition: 'Manche démesurément bouffante aux épaules et au bras supérieur, se rétrécissant brutalement à partir du coude pour s\'ajuster étroitement jusqu\'au poignet.',
    anatomicalRole: 'Élargit horizontalement la carrure des épaules pour accentuer optiquement l\'extrême finesse de la taille de guêpe.',
    constructionDetails: 'Taillée en fuseau avec un empiècement immense de tissu froncé à la tête d\'emmanchure, maintenue gonflée par des coussins d\'épaule amovibles en crin ou des arceaux de baleine.',
    materials: ['Soie taffetas', 'Mérinos de Reims', 'Mousseline empesée', 'Crin de cheval de rembourrage'],
    socialContext: 'Emblème de la mode romantique sous Charles X puis de la parisienne conquérante de la fin du siècle célébrée par la caricature et les affiches de Chéret.',
    evolution: 'Culmine vers 1832-1835 avant de s\'effondrer, puis réapparaît de manière spectaculaire dans les années 1890 pour équilibrer la silhouette sans tournure.',
    silhouetteEffect: 'Carrure impressionnante créant une silhouette en sablier parfait.',
    images: [
      {
        id: 'IMG_GAR_GIGOT',
        title: 'Gravure de manche gigot sous la Restauration',
        institution: 'Wikipédia / Wikimedia Commons (BnF / Gallica)',
        license: 'Domaine Public',
        imageUrl: '/images/historical/manche_gigot_detail.jpg',
        caption: 'Volume sphérique de la manche gigot romantique soutenu par armature de crin.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_BOCHER', 'SRC_GALLIERA', 'SRC_BNF_GALLICA']
  },
  {
    id: 'GAR_CRINOLINE',
    name: 'Crinoline cage',
    category: 'structures',
    periodIds: ['PER_XIX_CRINOLINE'],
    century: 19,
    eraDates: '1856 – 1868',
    definition: 'Jupon-cage composé de lames d\'acier flexibles suspendues par des rubans de tresse, conférant à la jupe du Second Empire son volume en dôme géant.',
    anatomicalRole: 'Soutient des jupes de 2 à 3 mètres de circonférence sans peser sur les hanches, laissant les jambes libres de bouger à l\'intérieur de la cloche.',
    constructionDetails: 'Brevetée par Tavernier et popularisée par Charles Frederick Worth en 1856. Entre 10 et 30 cercles d\'acier laminé à ressorts, reliés verticalement par des bandes de coutil rivetées.',
    materials: ['Acier trempé laminé', 'Rubans de coton fort', 'Rivets métalliques', 'Toile de coutil'],
    socialContext: 'Triomphe de la métallurgie industrielle appliquée à la mode. Objet d\'un engouement mondial et de milliers de caricatures raillant les difficultés d\'accès aux calèches.',
    evolution: 'Remplace les lourds jupons de crin (crinoline primitive) en 1856. Devient circulaire géante vers 1860, puis s\'aplatit devant pour rejeter le volume en arrière vers 1867, enfantant la tournure.',
    silhouetteEffect: 'Dôme géant sphérique ou cloche pyramidale monumentale équilibrant le petit corsage pigeonnant.',
    images: [
      {
        id: 'IMG_GAR_CRINOLINE',
        title: 'Crinoline cage métallique brevetée Tavernier',
        institution: 'Wikipédia / Wikimedia Commons (Musée des Arts Décoratifs)',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/crinoline_cage_archive.jpg',
        caption: 'La crinoline cage d\'acier flexible (vers 1860), chef-d\'œuvre d\'ingénierie textile du Second Empire.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_PAUPER', 'SRC_MET_COSTUME']
  },
  {
    id: 'GAR_TOURNURE',
    name: 'Tournure (ou faux-cul)',
    category: 'structures',
    periodIds: ['PER_XIX_TOURNURE'],
    century: 19,
    eraDates: '1869 – 1889',
    definition: 'Sous-structure portée à la ceinture projetant l\'arrière de la jupe vers l\'extérieur tout en laissant le devant et les flancs strictement plats.',
    anatomicalRole: 'Accentue la cambrure lombaire et sert de promontoire aux drapés en cascade de la robe à traîne.',
    constructionDetails: 'Demi-cerceaux d\'acier cintrés en demi-lune assemblés sur un panneau arrière de coutil ou coussin de crin matelassé, muni de cordons intérieurs permettant de régler la cambrure.',
    materials: ['Demi-arceaux d\'acier à ressorts', 'Crin de cheval tressé', 'Coutil', 'Rubans de réglage'],
    socialContext: 'Caractéristique de la femme bourgeoise sous la IIIe République. Sa démarche chaloupée et sa cambrure artificielle fascinaient les peintres impressionnistes.',
    evolution: 'Première tournure souple (1869-1876), éclipsée par le corset cuirasse étroit (1877-1882), puis seconde tournure rigide en angle droit (1883-1888) avant son abandon soudain en 1889.',
    silhouetteEffect: 'Profil sinueux en S : buste penché vers l\'avant, reins cambrés et projection arrière spectaculaire.',
    images: [
      {
        id: 'IMG_GAR_TOURNURE',
        title: 'Structure de tournure et robe à faux-cul (vers 1885)',
        institution: 'Wikipédia / Wikimedia Commons',
        license: 'Domaine Public',
        imageUrl: '/images/historical/tournure_wiki.jpg',
        caption: 'La tournure à demi-arceaux d\'acier projetant le volume du drapé en arrière.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_PAUPER', 'SRC_BOCHER']
  },
  {
    id: 'GAR_CORSET',
    name: 'Corset',
    category: 'corsets',
    periodIds: ['PER_XIX_ROMANTISME', 'PER_XIX_CRINOLINE', 'PER_XIX_TOURNURE', 'PER_XIX_FIN_SIECLE', 'PER_XX_1900_1910'],
    century: 19,
    eraDates: 'vers 1820 – 1910 (puis réinterprétations)',
    definition: 'Sous-vêtement féminin armé de baleines et fermé par un laçage dorsal, destiné à affiner la taille, soutenir la gorge et sculpter les contours du tronc.',
    anatomicalRole: 'Modèle artificiellement la taille anatomique, affine le tour de taille jusqu\'à 45 cm et soutient la poitrine selon les canons de chaque décennie.',
    constructionDetails: 'Panneaux de coutil assemblés en biais pour épouser les formes, baleines d\'acier ou fanons insérés dans chaque couture, busc avant muni de crochets métalliques (invention de 1829) et œillets renforcés au dos.',
    materials: ['Coutil anglais', 'Baleines d\'acier trempé', 'Busc métallique à pitons', 'Soie satinée', 'Lacet de tresse'],
    socialContext: 'Objet d\'intenses débats médicaux et moraux au XIXe siècle, accusé de comprimer le foie et la rate tout en étant exigé par la bienséance bourgeoise la plus rigide.',
    evolution: 'Corset court Empire, corset romantique en sablier, corset Second Empire, corset cuirasse, puis corset droitier de la Belle Époque supprimé par Paul Poiret en 1906.',
    silhouetteEffect: 'Affine impitoyablement la taille naturelle et redresse le buste.',
    images: [
      {
        id: 'IMG_GAR_CORSET',
        title: 'Corset taille de guêpe en satin noir brodé de soie',
        institution: 'Wikipédia / Wikimedia Commons (Palais Galliera)',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/corset_1890_galliera.jpg',
        caption: 'Corset fin de siècle vers 1895 en satin brodé, busc métallique avant et laçage au dos.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_PAUPER', 'SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'GAR_JUPON',
    name: 'Jupon',
    category: 'jupons',
    periodIds: ['PER_BAROQUE_LOUIS_XIV', 'PER_XIX_CRINOLINE', 'PER_XX_1950_1960'],
    century: 19,
    eraDates: 'Tous siècles (apogée XIXe et années 1950)',
    definition: 'Jupe de dessous en tissu souple ou empesé portée sous la robe pour lui donner du gonflant, la préserver et réchauffer le corps.',
    anatomicalRole: 'Amortit les angles des armatures métalliques ou procure seul une ampleur vaporeuse.',
    constructionDetails: 'Composé de plusieurs volants froncés ou plissés superposés, garnis d\'entre-deux de broderie anglaise ou de dentelle, taille coulissée à cordon.',
    materials: ['Batiste de lin', 'Taffetas de soie froufroutant', 'Nylon', 'Organdi de coton'],
    socialContext: 'Objet érotique et poétique de la littérature du XIXe siècle (le « frou-frou » du jupon de soie célébré par Maupassant).',
    evolution: 'Superposé par dizaines sous Louis XIV et dans les années 1840, réduit à un rôle protecteur sous la crinoline, il renaît en nylon sous le New Look des années 1950.',
    silhouetteEffect: 'Donne une silhouette vaporeuse et une démarche musicale rythmée par le froissement de la soie.',
    images: [
      {
        id: 'IMG_GAR_JUPON',
        title: 'Jupon d\'organdi à volants brodés',
        institution: 'Wikipédia / Wikimedia Commons (Palais Galliera)',
        license: 'Domaine Public',
        imageUrl: '/images/historical/jupon_dentelle.jpg',
        caption: 'Jupon en batiste et broderie anglaise de la fin du XIXe siècle.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_LELOIR']
  },
  {
    id: 'GAR_ROBE_BELLE_EPOQUE',
    name: 'Robe Belle Époque',
    category: 'robes',
    periodIds: ['PER_XX_1900_1910'],
    century: 20,
    eraDates: '1900 – 1908',
    definition: 'Robe de jour ou du soir incarnant la silhouette sinueuse en S, rehaussée de cols guimpe baleinés et de mousselines brodées.',
    anatomicalRole: 'Épouse la cambrure serpentine imposée par le corset droitier sans découpe de taille heurtée.',
    constructionDetails: 'Bustier baleiné intégré doublé de soie, col montant en dentelle maintenu par de fines baleines de celluloïd, jupe évasée au sol en forme de corolle de lys avec traîne légère.',
    materials: ['Dentelle d\'Irlande', 'Mousseline de soie plissée', 'Satin duchesse', 'Tulle perlé'],
    socialContext: 'Parure d\'apparat de la haute société internationale séjournant à Paris, Cannes ou Deauville pendant la Belle Époque.',
    evolution: 'Disparaît avec la révolution orientale de Paul Poiret qui abolit le corset et taille haute dès 1906-1908.',
    silhouetteEffect: 'Ligne serpentine en S, décolleté pigeonnier haut et jupe corolle fleurie.',
    images: [
      {
        id: 'IMG_GAR_BELLE_EP',
        title: 'Robe d\'après-midi Belle Époque en mousseline et dentelle',
        institution: 'Wikipédia / Wikimedia Commons (Palais Galliera)',
        license: 'Domaine Public',
        imageUrl: '/images/historical/robe_belle_epoque_detail.jpg',
        caption: 'Robe Belle Époque ornée de guipures et de dentelles d\'Irlande vers 1904.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'GAR_ROBE_GARCONNE',
    name: 'Robe garçonne',
    category: 'robes',
    periodIds: ['PER_XX_1920_1930'],
    century: 20,
    eraDates: '1922 – 1929',
    definition: 'Robe droite tubulaire sans corset, caractérisée par une taille basse posée sur les hanches et une longueur écourtée au genou.',
    anatomicalRole: 'Efface les courbes féminines traditionnelles (poitrine et hanches) au profit d\'une allure androgyne élancée.',
    constructionDetails: 'Deux pans droits de tissu assemblés sans pinces de poitrine, bretelles simples ou manches courtes, taille soulignée d\'une ceinture souple retombant lâchement.',
    materials: ['Jersey de laine souple', 'Crêpe de Chine', 'Satin marocain', 'Mousseline'],
    socialContext: 'Manifeste de la femme émancipée de l\'après-guerre (la garçonne), libre de ses mouvements, dansant le tango et conduisant des automobiles.',
    evolution: 'Instituée par Gabrielle Chanel et Jean Patou, elle règne sans rivale pendant toutes les Années Folles avant le retour du glamour galbé des années 1930.',
    silhouetteEffect: 'Ligne verticale tubulaire, allure juvénile et jambes libérées.',
    images: [
      {
        id: 'IMG_GAR_GARCONNE',
        title: 'Robe droite à taille basse des Années Folles',
        institution: 'Wikipédia / Wikimedia Commons (Palais Galliera)',
        license: 'Domaine Public',
        imageUrl: '/images/historical/robe_garconne_1925.jpg',
        caption: 'Robe droite en crêpe de soie des Années Folles avec taille basse ceinturée.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_BNF_GALLICA']
  },
  {
    id: 'GAR_ROBE_CHARLESTON',
    name: 'Robe charleston',
    category: 'robes',
    periodIds: ['PER_XX_1920_1930'],
    century: 20,
    eraDates: '1924 – 1929',
    definition: 'Robe festive courte sans manches, constellée de franges de soie ou de rangs de perles de verre s\'animant au rythme saccadé du jazz.',
    anatomicalRole: 'Accompagne et démultiplie visuellement les mouvements rapides des jambes et du bassin lors de la danse.',
    constructionDetails: 'Fond de mousseline ou de crêpe droit sur lequel sont brodées au point de Beauvais des milliers de perles de verre ou cousus des volants étagés de franges libres.',
    materials: ['Perles de verre de Murano', 'Tubes de jais', 'Franges de soie', 'Mousseline'],
    socialContext: 'Symbole des nuits parisiennes et new-yorkaises des Années Folles, associée aux musiques de Duke Ellington et aux danses de Joséphine Baker.',
    evolution: 'Apogée entre 1925 et 1928, elle reste l\'icône indétrônable de la décennie dans l\'imaginaire collectif.',
    silhouetteEffect: 'Scintillante et dynamique, fluide en mouvement.',
    images: [
      {
        id: 'IMG_GAR_CHARLESTON',
        title: 'Robe de bal à franges perlées style Charleston',
        institution: 'Wikipédia / Wikimedia Commons (Musée des Arts Décoratifs)',
        license: 'Domaine Public',
        imageUrl: '/images/historical/robe_charleston_perles.jpg',
        caption: 'Robe du soir couverte de perles de verre et de franges dansantes vers 1926.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'GAR_ROBE_EN_BIAIS',
    name: 'Robe en biais',
    category: 'robes',
    periodIds: ['PER_XX_1930_1940'],
    century: 20,
    eraDates: '1928 – 1939',
    definition: 'Robe coupée dans le biais du tissu (à 45 degrés du droit-fil), permettant à l\'étoffe de s\'étirer naturellement et d\'épouser les courbes sans armature.',
    anatomicalRole: 'Moule le corps comme une seconde peau liquide en suivant chaque mouvement respiratoire et locomoteur.',
    constructionDetails: 'Chef-d\'œuvre de coupe géométrique inventé par Madeleine Vionnet sur une figurine articulée en bois de 80 cm, sans agrafe ni fermeture à glissière.',
    materials: ['Crêpe romain de soie', 'Satin lourd face mate et brillante', 'Jersey de soie'],
    socialContext: 'Considérée par les historiens du costume comme la plus haute prouesse technique de l\'histoire de la haute couture française.',
    evolution: 'Triomphe dans les années 1930 pour les tenues de soirée hollywoodiennes et parisiennes, elle inspire John Galliano et Alexander McQueen dans les années 1990.',
    silhouetteEffect: 'Fluide, sculpturale et serpentine, sublimant la ligne du dos nu.',
    images: [
      {
        id: 'IMG_GAR_BIAIS',
        title: 'Robe du soir en crêpe de soie coupée en biais par Madeleine Vionnet',
        institution: 'Wikipédia / Wikimedia Commons (MAD Paris)',
        license: 'Domaine Public',
        imageUrl: '/images/historical/robe_biais_vionnet.jpg',
        caption: 'Robe coupée en plein biais par Madeleine Vionnet vers 1934, épousant le buste avec fluidité.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_MAD_PARIS', 'SRC_GALLIERA']
  },
  {
    id: 'GAR_NEW_LOOK',
    name: 'Silhouette New Look (Tailleur Bar)',
    category: 'robes',
    periodIds: ['PER_XX_1940_1950', 'PER_XX_1950_1960'],
    century: 20,
    eraDates: '1947 – 1957',
    definition: 'Ensemble révolutionnaire créé par Christian Dior le 12 février 1947 : veste cintrée à basques capitonnées et jupe corolle ultra-ample descendant à mi-mollet.',
    anatomicalRole: 'Sculpte une silhouette d\'une féminité triomphante : taille minuscule, poitrine haute et hanches généreuses.',
    constructionDetails: 'Veste Bar en shantung de soie avec rembourrage de crin et coutil aux basques pour créer les hanches, jupe plissée circulaire consommant jusqu\'à 12 mètres de lainage noir.',
    materials: ['Shantung de soie grège', 'Drap de laine peignée noir', 'Taffetas de soie', 'Tulle raide'],
    socialContext: 'Choc esthétique mondial salué par Carmel Snow (« It\'s quite a revolution, dear Christian, your dresses have such a new look ! »). Réponse joyeuse et fastueuse à l\'austérité de la guerre.',
    evolution: 'Définit toute la décennie 1950 avant que la jeunesse des années 1960 ne rejette son carcan corset.',
    silhouetteEffect: 'Sablier corolle parfait : buste cintré, taille de guêpe et jupe épanouie comme une fleur.',
    images: [
      {
        id: 'IMG_GAR_NEWLOOK',
        title: 'Le Tailleur Bar de Christian Dior, 1947',
        institution: 'Wikipédia / Wikimedia Commons (Archives Dior)',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/dior_bar_archive.jpg',
        caption: 'Le Tailleur Bar original de 1947 : veste en soie crème et jupe plissée noire corolle.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS', 'SRC_MET_COSTUME']
  },
  {
    id: 'GAR_TAILLEUR_FEMININ',
    name: 'Tailleur féminin',
    category: 'vestes',
    periodIds: ['PER_XIX_FIN_SIECLE', 'PER_XX_1900_1910', 'PER_XX_1920_1930', 'PER_XX_1950_1960'],
    century: 19,
    eraDates: '1885 à nos jours',
    definition: 'Ensemble coordonné comprenant une veste de coupe tailleur et une jupe (puis un pantalon), adapté de la tradition sartoriale masculine pour les femmes.',
    anatomicalRole: 'Confère une stature digne, structurée et professionnelle adaptée aux activités citadines.',
    constructionDetails: 'Veste à revers d\'entoilage piqué au point de chausson, découpes princesse épousant la taille, doublure de soie et jupe à plis creux ou droite.',
    materials: ['Drap de laine peignée', 'Tweed écossais', 'Gabardine de laine', 'Flanelle', 'Serge'],
    socialContext: 'Instrument historique d\'émancipation permettant aux femmes de voyager, travailler dans les bureaux et circuler librement dans l\'espace public.',
    evolution: 'Tailleur trotteur des années 1890 par Redfern, tailleur souple en jersey de Chanel (1920), tailleur en tweed gansé iconique de Chanel (1954), tailleur pantalon contemporain.',
    silhouetteEffect: 'Ligne sobre, élégante, nette et fonctionnelle.',
    images: [
      {
        id: 'IMG_GAR_TAILLEUR',
        title: 'Tailleur féminin en tweed gansé par Gabrielle Chanel',
        institution: 'Wikipédia / Wikimedia Commons (Palais Galliera)',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/tailleur_chanel_1954.jpg',
        caption: 'Le tailleur en tweed gansé de 1954 par Coco Chanel : chaîne d\'or cousue dans l\'ourlet pour un tombé parfait.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'GAR_SMOKING_FEMININ',
    name: 'Smoking féminin',
    category: 'vestes',
    periodIds: ['PER_XX_1960_1970', 'PER_XX_1970_1980'],
    century: 20,
    eraDates: '1966 à nos jours',
    definition: 'Costume du soir d\'homme transposé pour la femme par Yves Saint Laurent en 1966, composé d\'un smoking en grain de poudre à revers de satin et pantalon coordonné.',
    anatomicalRole: 'Allonge la jambe et confère une autorité sculpturale défiant les conventions de genre.',
    constructionDetails: 'Veste de coupe masculine à revers crantés en satin de soie noir brillant, pantalon droit à pli marqué et galon de satin le long de la couture externe.',
    materials: ['Grain de poudre de laine noire', 'Satin de soie duchesse', 'Mousseline transparente pour le chemisier'],
    socialContext: 'Scandale initial : des restaurants huppés refusèrent l\'entrée aux femmes vêtues du smoking YSL. Il devient le symbole de la femme puissante et libre.',
    evolution: 'Revisité dans chaque collection Saint Laurent jusqu\'à son défilé rétrospectif de 2002, il demeure une pièce permanente de la garde-robe féminine mondiale.',
    silhouetteEffect: 'Ligne androgyne noire affûtée, chic souverain et élégance intemporelle.',
    images: [
      {
        id: 'IMG_GAR_SMOKING',
        title: 'Le premier smoking pour femme par Yves Saint Laurent',
        institution: 'Wikipédia / Wikimedia Commons (de Young Museum)',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/ysl_smoking_1966.jpg',
        caption: 'Smoking Haute Couture Automne-Hiver 1966 par Yves Saint Laurent, photographié par Helmut Newton rue Aubriot.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'GAR_MINI_JUPE',
    name: 'Mini-jupe',
    category: 'jupes',
    periodIds: ['PER_XX_1960_1970'],
    century: 20,
    eraDates: '1962 à nos jours',
    definition: 'Jupe très courte s\'arrêtant au moins 15 centimètres au-dessus des genoux, symbole éclatant de la révolution des mœurs des années 1960.',
    anatomicalRole: 'Dévoile les cuisses et libère totalement la foulée de la femme.',
    constructionDetails: 'Coupe droite ou légèrement trapèze, montée sur une ceinture simple ou taille basse, portée obligatoirement avec des collants opaques.',
    materials: ['Gabardine de laine', 'Vinyle ciré brillant', 'Denim', 'Jersey synthétique', 'Cuir suédé'],
    socialContext: 'Créée par Mary Quant à Londres et propulsée en haute couture par André Courrèges à Paris en 1964. Elle incarne l\'émancipation corporelle et sexuelle de la jeunesse.',
    evolution: 'Scandale planétaire à ses débuts, puis adoptée universellement. Concurrencée par la maxi-jupe dans les années 70 avant de revenir comme classique permanent.',
    silhouetteEffect: 'Silhouette juvénile, élancée et énergique.',
    images: [
      {
        id: 'IMG_GAR_MINIJUPE',
        title: 'Mini-jupe trapèze en gabardine blanche par André Courrèges',
        institution: 'Wikipédia / Wikimedia Commons (Musée des Arts Décoratifs)',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/courreges_minijupe_1965.jpg',
        caption: 'La mini-jupe trapèze blanche et bottes vinyle d\'André Courrèges, révolution spatiale de 1965.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'GAR_PANTALON_PATTE_ELEPHANT',
    name: 'Pantalon pattes d\'éléphant (flare)',
    category: 'pantalons',
    periodIds: ['PER_XX_1970_1980'],
    century: 20,
    eraDates: '1968 – 1978 (puis revivals)',
    definition: 'Pantalon ajusté sur les hanches et les cuisses, s\'évasant largement en trompette à partir du genou jusqu\'à dissimuler les chaussures.',
    anatomicalRole: 'Équilibre les proportions et allonge la silhouette lorsqu\'il est associé à des semelles compensées.',
    constructionDetails: 'Coupe évasée à pinces ou sans pinces, taille moyenne ou haute, ourlet large recouvrant le cou-de-pied.',
    materials: ['Denim brut', 'Velours côtelé', 'Gabardine de tergal', 'Jersey lurex'],
    socialContext: 'Issu de l\'uniforme des marins militaires et adopté par la culture hippie et disco, il incarne l\'esprit de liberté et le refus des conformismes bourgeois.',
    evolution: 'Incontournable des années 1970, il refait des apparitions cycliques sous l\'appellation « bootcut » dans les années 2000 et 2020.',
    silhouetteEffect: 'Ligne fluide en cloche inversée vers le bas.',
    images: [
      {
        id: 'IMG_GAR_PATTE_ELEPH',
        title: 'Pantalon flare pattes d\'éléphant en denim des années 1970',
        institution: 'Wikipédia / Wikimedia Commons (Archives Mode)',
        license: 'Domaine Public',
        imageUrl: '/images/historical/flare_pants_70s.jpg',
        caption: 'Pantalon évasé pattes d\'éléphant en denim avec surpiqûres orange vers 1974.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'GAR_TAILLEUR_ANNEES_80',
    name: 'Tailleur Power Dressing (années 1980)',
    category: 'vestes',
    periodIds: ['PER_XX_1980_1990'],
    century: 20,
    eraDates: '1980 – 1989',
    definition: 'Veste de tailleur d\'affaires aux épaules démesurément élargies par d\'épaisses épaulettes en mousse, cintrée à la taille et portée sur jupe étroite ou pantalon fuseau.',
    anatomicalRole: 'Construit une carrure athlétique masculine imposante pour asseoir l\'autorité professionnelle des femmes cadres.',
    constructionDetails: 'Épaulettes semi-rigides de plusieurs centimètres d\'épaisseur cousues aux têtes de manches, col cranté plongeant, boutons dorés opulents.',
    materials: ['Laine peignée lourde', 'Gabardine de laine', 'Cuir d\'agneau plongé', 'Soie taffetas'],
    socialContext: 'Symbole de l\'accession des femmes aux postes de direction financière et politique dans les années 1980.',
    evolution: 'Défini par Claude Montana, Thierry Mugler et Giorgio Armani, il s\'adoucit radicalement au début des années 1990 avec le minimalisme.',
    silhouetteEffect: 'Silhouette en V spectaculaire (épaules larges et taille fine).',
    images: [
      {
        id: 'IMG_GAR_TAILLEUR_80S',
        title: 'Tailleur aux épaules structurées par Claude Montana',
        institution: 'Wikipédia / Wikimedia Commons (Musée des Arts Décoratifs)',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/montana_power_suit_1984.jpg',
        caption: 'Tailleur d\'affaires aux épaules XXL et taille cintrée par Claude Montana en 1984.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  }
];
