import { Designer } from '../types';

export const HISTORICAL_DESIGNERS: Designer[] = [
  {
    id: 'DES_ROSE_BERTIN',
    name: 'Rose Bertin',
    birthYear: 1747,
    deathYear: 1813,
    nationality: 'Française',
    fashionHouse: 'Le Grand Mogol (rue Saint-Honoré, Paris)',
    activeDecades: ['1770s', '1780s'],
    periodIds: ['PER_ROCOCO_XVIII'],
    biography: 'Née Marie-Jeanne Bertin à Abbeville, elle monte à Paris et ouvre sa boutique de modiste « Au Grand Mogol ». Présentée à la jeune reine Marie-Antoinette par la duchesse de Chartres, elle devient sa confidente et la première « ministre de la Mode ». Elle s\'affranchit du statut subalterne d\'artisan pour devenir une créatrice de réputation internationale dont les poufs et robes habillent toutes les cours d\'Europe.',
    innovations: [
      'Invention du statut moderne de créateur de mode et arbitre du goût',
      'Création des poufs monumentaux allégoriques commentant l\'actualité politique',
      'Conception de la robe chemise en mousseline de coton pour le Petit Trianon'
    ],
    iconicCreations: [
      'Le Pouf à la Belle Poule (coiffure surmontée d\'une maquette de frégate)',
      'La robe de cour pour le sacre de Louis XVI',
      'La robe chemise de la Reine peinte par Vigée Le Brun (1783)'
    ],
    historicalInfluence: 'Elle a fait de Paris le centre absolu de la création de mode féminine et a préfiguré de deux siècles le rôle des directeurs artistiques contemporains.',
    quote: 'Il n\'y a de nouveau que ce qui a été oublié.',
    images: [
      {
        id: 'IMG_DES_BERTIN',
        title: 'Portrait gravé de Rose Bertin, modiste de la reine Marie-Antoinette',
        institution: 'Bibliothèque nationale de France (Gallica)',
        license: 'Domaine Public',
        imageUrl: '/images/historical/rose_bertin_portrait.jpg',
        caption: 'Rose Bertin (1747-1813), première modiste devenue célèbre dans l\'Europe entière.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_BNF_GALLICA', 'SRC_GALLIERA']
  },
  {
    id: 'DES_WORTH',
    name: 'Charles Frederick Worth',
    birthYear: 1825,
    deathYear: 1895,
    nationality: 'Britannique',
    fashionHouse: 'Maison Worth (7 rue de la Paix, Paris)',
    activeDecades: ['1850s', '1860s', '1870s', '1880s'],
    periodIds: ['PER_XIX_CRINOLINE', 'PER_XIX_TOURNURE', 'PER_XIX_FIN_SIECLE'],
    biography: 'Né en Angleterre, Worth s\'établit à Paris en 1845. Engagé chez Gagelin, il ouvre sa propre maison au 7 rue de la Paix en 1858. Remarqué par la princesse de Metternich puis par l\'impératrice Eugénie, il devient le couturier attitré de la cour impériale. Il est universellement reconnu comme le « père de la Haute Couture parisienne » : il est le premier à imposer ses propres créations aux clientes plutôt que d\'exécuter leurs ordres, et fonde la Chambre Syndicale de la Couture en 1868.',
    innovations: [
      'Fondation de la Haute Couture et du système des collections saisonnières régulières',
      'Utilisation des premiers mannequins vivants (« sosies ») pour présenter les robes',
      'Signature de ses créations par une griffe textile cousue à l\'intérieur du vêtement',
      'Allègement de la crinoline puis invention de la tournure vers 1867'
    ],
    iconicCreations: [
      'Robes de bal de l\'Impératrice Eugénie peintes par Winterhalter',
      'Robe de cour en tulle parsemé d\'étoiles en diamants de l\'Impératrice Sissi',
      'Premières robes à traîne amovible et tournure'
    ],
    historicalInfluence: 'Il a transformé la couture d\'un artisanat de commande en une industrie de luxe artistique régie par la créativité du couturier.',
    quote: 'Mon travail n\'est pas seulement d\'exécuter, mais de créer. L\'idée est à moi.',
    images: [
      {
        id: 'IMG_DES_WORTH',
        title: 'Portrait photographique de Charles Frederick Worth par Nadar',
        institution: 'Bibliothèque nationale de France (Gallica)',
        license: 'Domaine Public',
        imageUrl: '/images/historical/charles_frederick_worth.jpg',
        caption: 'Charles Frederick Worth (1825-1895), fondateur de la Haute Couture parisienne.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MET_COSTUME', 'SRC_BNF_GALLICA']
  },
  {
    id: 'DES_PAQUIN',
    name: 'Jeanne Paquin',
    birthYear: 1869,
    deathYear: 1936,
    nationality: 'Française',
    fashionHouse: 'Maison Paquin (3 rue de la Paix, Paris)',
    activeDecades: ['1890s', '1900s', '1910s'],
    periodIds: ['PER_XIX_FIN_SIECLE', 'PER_XX_1900_1910', 'PER_XX_1910_1920'],
    biography: 'Première grande couturière française à acquérir une renommée internationale égale à celle des hommes. Elle ouvre sa maison en 1891 au 3 rue de la Paix avec son époux Isidore Paquin. Présidente de la section Mode à l\'Exposition universelle de 1900 où trône sa statue de cire habillée en parisienne, elle est la première femme couturière à recevoir la Légion d\'honneur en 1913.',
    innovations: [
      'Organisation des premiers défilés de mode théâtralisés au théâtre de l\'Olympia',
      'Déploiement international de sa maison avec des succursales à Londres, New York, Madrid et Buenos Aires',
      'Création de vêtements alliant le faste Art Nouveau au confort des femmes actives'
    ],
    iconicCreations: [
      'Robes chimériques aux broderies de perles et velours dévoré Art Nouveau',
      'Manteaux d\'opéra doublés de fourrure et ornés de passementeries japonisantes',
      'Tailleurs de promenade pour femmes émancipées'
    ],
    historicalInfluence: 'Pionnière de l\'entreprenariat féminin dans le luxe mondial, elle a prouvé qu\'une femme pouvait concevoir des vêtements somptueux parfaitement adaptés à l\'anatomie féminine.',
    images: [
      {
        id: 'IMG_DES_PAQUIN',
        title: 'Jeanne Paquin dans ses ateliers de la rue de la Paix',
        institution: 'Palais Galliera / BnF',
        license: 'Domaine Public',
        imageUrl: '/images/historical/jeanne_paquin_portrait.jpg',
        caption: 'Jeanne Paquin (1869-1936), première femme à recevoir la Légion d\'honneur pour la haute couture.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS', 'SRC_BNF_GALLICA']
  },
  {
    id: 'DES_POIRET',
    name: 'Paul Poiret',
    birthYear: 1879,
    deathYear: 1944,
    nationality: 'Française',
    fashionHouse: 'Maison Paul Poiret (rue Pasquier puis avenue d\'Antin, Paris)',
    activeDecades: ['1900s', '1910s', '1920s'],
    periodIds: ['PER_XX_1900_1910', 'PER_XX_1910_1920'],
    biography: 'Surnommé « le Magnifique » ou le « Roi de la Mode », Poiret fait ses classes chez Doucet et Worth avant d\'ouvrir sa maison en 1903. Dès 1906, il brise le corset et propose une ligne inspirée du Directoire et des Ballets Russes. Homme de fête fastueux (sa fête de la « Mille et Deuxième Nuit » en 1911 reste légendaire), il est le premier couturier à lancer son propre parfum (Les Parfums de Rosine).',
    innovations: [
      'Suppression définitive du corset féminin dès 1906',
      'Introduction des couleurs fauves et de l\'orientalisme dans la mode parisienne',
      'Invention de la jupe entravée, de la robe abat-jour et du pantalon de harem (jupe-culotte)',
      'Premier couturier à concevoir un parfum de marque (Rosine) et des arts décoratifs (Atelier Martine)'
    ],
    iconicCreations: [
      'La robe « Vague » (1906) sans corset',
      'Le manteau « Confucius » d\'inspiration chinoise',
      'La robe « Sorbet » à armature abat-jour (1912)'
    ],
    historicalInfluence: 'Il a libéré le corps de la femme moderne de la cambrure en S et a fusionné la haute couture avec les avant-gardes artistiques (Dufy, Derain, Brancusi).',
    quote: 'J\'ai fait la guerre au corset, je lui ai porté le coup de grâce.',
    images: [
      {
        id: 'IMG_DES_POIRET',
        title: 'Paul Poiret entouré de ses mannequins dans son jardin parisien',
        institution: 'Palais Galliera / BnF',
        license: 'Domaine Public',
        imageUrl: '/images/historical/paul_poiret_portrait.jpg',
        caption: 'Paul Poiret (1879-1944), le couturier qui délivra les femmes du corset.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS', 'SRC_BNF_GALLICA']
  },
  {
    id: 'DES_CHANEL',
    name: 'Coco Chanel (Gabrielle Chanel)',
    birthYear: 1883,
    deathYear: 1971,
    nationality: 'Française',
    fashionHouse: 'Maison Chanel (31 rue Cambon, Paris)',
    activeDecades: ['1910s', '1920s', '1930s', '1950s', '1960s'],
    periodIds: ['PER_XX_1910_1920', 'PER_XX_1920_1930', 'PER_XX_1950_1960'],
    biography: 'Orpheline élevée à l\'abbaye d\'Aubazine, Gabrielle Chanel ouvre une boutique de chapeaux à Paris puis à Deauville. Elle révolutionne le vestiaire féminin en détournant le jersey de laine des sous-vêtements masculins, invente la petite robe noire en 1926 et lance le parfum N° 5. Après la guerre, elle opère en 1954 un retour éclatant avec son tailleur en tweed gansé, devenu l\'emblème mondial de l\'élégance sobre.',
    innovations: [
      'Détournement du jersey de laine masculin pour la garde-robe féminine quotidienne',
      'Création de la Petite Robe Noire (LBD) en 1926, uniforme démocratique chic',
      'Invention du sac 2.55 en cuir matelassé à bandoulière chaîne, libérant les mains',
      'Lancement du premier parfum abstrait composé de molécules synthétiques (Chanel N° 5 en 1921)',
      'Le tailleur en tweed souple gansé de 1954 avec chaîne de lestage'
    ],
    iconicCreations: [
      'La Petite Robe Noire (1926) saluée par Vogue comme la « Ford de la mode »',
      'Le tailleur en tweed à quatre poches plaquées et boutons bijoux',
      'Le sac matelassé 2.55 (février 1955)',
      'Les souliers slingback bicolores (beige à bout noir affinant le pied)'
    ],
    historicalInfluence: 'Elle a inventé le vestiaire de la femme active du XXe siècle, privilégiant la liberté de mouvement, la fonctionnalité et l\'élégance du dépouillement.',
    quote: 'La mode passe, le style reste.',
    images: [
      {
        id: 'IMG_DES_CHANEL',
        title: 'Gabrielle Chanel assise dans les escaliers aux miroirs du 31 rue Cambon',
        institution: 'Palais Galliera / Archives Chanel',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/coco_chanel_portrait.jpg',
        caption: 'Coco Chanel (1883-1971), architecte de la silhouette moderne épurée.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_VIONNET',
    name: 'Madeleine Vionnet',
    birthYear: 1876,
    deathYear: 1975,
    nationality: 'Française',
    fashionHouse: 'Maison Vionnet (avenue Montaigne, Paris)',
    activeDecades: ['1910s', '1920s', '1930s'],
    periodIds: ['PER_XX_1910_1920', 'PER_XX_1920_1930', 'PER_XX_1930_1940'],
    biography: 'Surnommée « l\'Euclide de la mode » ou « la couturière des couturiers », Madeleine Vionnet apprend le métier dès l\'âge de 12 ans. Chez Callot Sœurs puis Jacques Doucet, elle perfectionne sa technique avant de fonder sa maison en 1912. Travaillant exclusivement en trois dimensions sur un mannequin de bois miniature de 80 cm, elle invente la coupe en biais qui libère le corps tout en l\'épousant comme une onde fluide.',
    innovations: [
      'Invention et perfectionnement absolu de la coupe en plein biais à 45°',
      'Suppression de toutes les fermetures éclair, baleines et agrafes : le tissu tient par son drapé',
      'Pionnière des droits sociaux : instauration dans ses ateliers de congés payés, de crèches pour ouvrières et de médecins d\'entreprise dès les années 1920',
      'Dépôt d\'empreintes digitales au dos de chaque étiquette pour lutter contre les contrefaçons'
    ],
    iconicCreations: [
      'Robe du soir en crêpe de soie coupée d\'une seule pièce sans couture apparente',
      'Le col bénitier et les dos nus vertigineux des années 1930',
      'Robe à quadrilatères et drapés mouchoir'
    ],
    historicalInfluence: 'Considérée comme la plus grande technicienne de coupe de l\'histoire, admirée par Balenciaga, Azzedine Alaïa et Issey Miyake.',
    quote: 'Quand une femme sourit, sa robe doit sourire avec elle.',
    images: [
      {
        id: 'IMG_DES_VIONNET',
        title: 'Madeleine Vionnet drapant un tissu sur sa figurine de travail en bois',
        institution: 'Musée des Arts Décoratifs de Paris / Galliera',
        license: 'Domaine Public',
        imageUrl: '/images/historical/madeleine_vionnet_portrait.jpg',
        caption: 'Madeleine Vionnet (1876-1975), maîtresse incontestée de la coupe en biais.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_MAD_PARIS', 'SRC_GALLIERA']
  },
  {
    id: 'DES_SCHIAPARELLI',
    name: 'Elsa Schiaparelli',
    birthYear: 1890,
    deathYear: 1973,
    nationality: 'Italienne',
    fashionHouse: 'Maison Schiaparelli (21 place Vendôme, Paris)',
    activeDecades: ['1920s', '1930s', '1940s'],
    periodIds: ['PER_XX_1920_1930', 'PER_XX_1930_1940'],
    biography: 'Née dans un palais aristocratique à Rome, elle s\'installe à Paris et commence par tricoter des pulls en trompe-l\'œil qui connaissent un succès foudroyant. Amie intime des artistes surréalistes (Salvador Dalí, Jean Cocteau, Alberto Giacometti), elle fait entrer l\'humour, l\'audace, le fantastique et le scandale artistique dans la haute couture parisienne, devenant la rivale légendaire de Coco Chanel.',
    innovations: [
      'Création de la couleur « Rose Shocking » en 1937 et lancement du parfum Shocking',
      'Collaborations artistiques pionnières avec Salvador Dalí et Jean Cocteau',
      'Introduction des fermetures à glissière en plastique coloré visibles sur les robes de haute couture',
      'Utilisation pionnière de matières industrielles insolites (rhodoïd transparent, écorce de bois, cellophane)'
    ],
    iconicCreations: [
      'Le pull-over noir et blanc avec nœud marin en trompe-l\'œil (1927)',
      'La Robe Homard peinte avec Salvador Dalí (1937)',
      'Le chapeau-chaussure surréaliste (1937)',
      'Le tailleur à poches tiroirs conçu avec Dalí (1936)'
    ],
    historicalInfluence: 'Elle a prouvé que la mode était un art à part entière capable d\'ironie, de subversion et de provocation intellectuelle.',
    quote: 'La mode naît de petites choses bizarres, de la folie et du rire.',
    images: [
      {
        id: 'IMG_DES_SCHIAP',
        title: 'Elsa Schiaparelli photographiée par Man Ray',
        institution: 'Musée des Arts Décoratifs de Paris / Galliera',
        license: 'Domaine Public',
        imageUrl: '/images/historical/schiaparelli_portrait.jpg',
        caption: 'Elsa Schiaparelli (1890-1973), créatrice surréaliste et inventrice du Rose Shocking.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_MAD_PARIS', 'SRC_GALLIERA']
  },
  {
    id: 'DES_DIOR',
    name: 'Christian Dior',
    birthYear: 1905,
    deathYear: 1957,
    nationality: 'Française',
    fashionHouse: 'Maison Christian Dior (30 avenue Montaigne, Paris)',
    activeDecades: ['1940s', '1950s'],
    periodIds: ['PER_XX_1940_1950', 'PER_XX_1950_1960'],
    biography: 'Né à Granville en Normandie, ancien galeriste d\'art contemporain, Christian Dior fait ses armes chez Robert Piguet puis Lucien Lelong. Grâce au mécénat de l\'industriel Marcel Boussac, il ouvre sa maison au 30 avenue Montaigne. Le 12 février 1947, son premier défilé (la ligne Corolle) fait l\'effet d\'un coup de tonnerre planétaire : le New Look redonne à Paris sa suprématie absolue sur la mode mondiale.',
    innovations: [
      'Lancement de la révolution esthétique du « New Look » en 1947',
      'Organisation rationnelle des licences internationales de produits de luxe (bas, parfums, cravates)',
      'Renouvellement semestriel des lignes géométriques baptisées (Corolle, Envol, Tulipe, Zig-Zag, Ligne A, Ligne H, Ligne Y)'
    ],
    iconicCreations: [
      'Le Tailleur Bar (1947) avec veste en shantung crème et jupe plissée noire',
      'La robe de bal « Junon » aux pétales brodés de sequins bleus et verts (1949)',
      'Le parfum Miss Dior (1947) créé en hommage à sa sœur Catherine, résistante'
    ],
    historicalInfluence: 'Il a incarné la renaissance du luxe français d\'après-guerre et a bâti le prototype du conglomérat de mode global moderne.',
    quote: 'Nous sortions d\'une époque de guerre, de bâtisses, de femmes-soldats aux carrures de boxeur. Je dessinais des femmes-fleurs.',
    images: [
      {
        id: 'IMG_DES_DIOR',
        title: 'Christian Dior ajustant un modèle dans les salons de l\'avenue Montaigne',
        institution: 'Palais Galliera / Archives Dior',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/christian_dior_portrait.jpg',
        caption: 'Christian Dior (1905-1957), créateur du New Look et magicien de la couture.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS', 'SRC_MET_COSTUME']
  },
  {
    id: 'DES_BALMAIN',
    name: 'Pierre Balmain',
    birthYear: 1914,
    deathYear: 1982,
    nationality: 'Française',
    fashionHouse: 'Maison Balmain (rue François Ier, Paris)',
    activeDecades: ['1940s', '1950s', '1960s', '1970s'],
    periodIds: ['PER_XX_1940_1950', 'PER_XX_1950_1960'],
    biography: 'Après des études d\'architecture et un apprentissage chez Molyneux puis Lucien Lelong (où il se lie d\'amitié avec Christian Dior), Pierre Balmain fonde sa maison en 1945. Il définit le « Jolie Madame » : une couture d\'une suprême distinction aristocratique, habillant les reines de Thaïlande et du Danemark ainsi que les plus grandes actrices internationales.',
    innovations: [
      'Conception architecturale du vêtement basée sur l\'équilibre géométrique parfait des volumes',
      'Style « Jolie Madame » célébrant la femme du monde impeccable et raffinée',
      'Introduction de broderies monumentales au fil d\'or et de perles par François Lesage'
    ],
    iconicCreations: [
      'Garde-robe officielle de la reine Sirikit de Thaïlande',
      'Robes de bal drapées en satin broché aux motifs de feuillages dorés',
      'Le parfum Vent Vert (1947) premier parfum aux notes vertes de l\'histoire'
    ],
    historicalInfluence: 'Figure centrale de l\'âge d\'or de la Haute Couture parisienne aux côtés de Dior et Fath.',
    quote: 'La confection de robes est l\'architecture du mouvement.',
    images: [
      {
        id: 'IMG_DES_BALMAIN',
        title: 'Pierre Balmain dans ses salons de couture parisiens',
        institution: 'Palais Galliera / Archives Balmain',
        license: 'Domaine Public',
        imageUrl: '/images/historical/pierre_balmain_portrait.jpg',
        caption: 'Pierre Balmain (1914-1982), chantre du style « Jolie Madame ».',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_GIVENCHY',
    name: 'Hubert de Givenchy',
    birthYear: 1927,
    deathYear: 2018,
    nationality: 'Française',
    fashionHouse: 'Maison Givenchy (rue Alfred-de-Vigny puis avenue Montaigne, Paris)',
    activeDecades: ['1950s', '1960s', '1970s', '1980s'],
    periodIds: ['PER_XX_1950_1960', 'PER_XX_1960_1970'],
    biography: 'Aristocrate issu d\'une grande famille de Beauvais, il apprend auprès de Fath, Piguet, Lelong puis Schiaparelli avant d\'ouvrir sa maison en 1952 à l\'âge de 24 ans. Admirateur inconditionnel de Cristóbal Balenciaga qu\'il considère comme son maître spirituel, il entre dans la légende grâce à sa collaboration fusionnelle avec l\'actrice Audrey Hepburn, pour laquelle il crée les garde-robes inoubliables de Sabrina, Breakfast at Tiffany\'s et Funny Face.',
    innovations: [
      'Création des « séparables » dès 1952 (blouses et jupes interchangeables en coton blanc)',
      'Lancement de la blouse « Bettina » en shirting de coton blanc à manches volants flamenco',
      'Invention de la petite robe noire fourreau épurée du cinéma moderne'
    ],
    iconicCreations: [
      'La blouse Bettina (1952)',
      'La robe de cocktail fourreau en satin noir d\'Audrey Hepburn dans Diamants sur canapé (1961)',
      'Garde-robe de Jacqueline Kennedy lors de sa visite d\'État à Paris en 1961'
    ],
    historicalInfluence: 'Il a incarné l\'aristocratie du goût français : une pureté de ligne sans surcharge, alliant rigueur et légèreté.',
    quote: 'La robe doit suivre le corps d\'une femme, et non le corps suivre la forme de la robe.',
    images: [
      {
        id: 'IMG_DES_GIVENCHY',
        title: 'Hubert de Givenchy avec Audrey Hepburn essayant une robe de bal',
        institution: 'Palais Galliera / Archives Givenchy',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/hubert_givenchy_portrait.jpg',
        caption: 'Hubert de Givenchy (1927-2018) et sa muse éternelle Audrey Hepburn.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_YSL',
    name: 'Yves Saint Laurent',
    birthYear: 1936,
    deathYear: 2008,
    nationality: 'Française',
    fashionHouse: 'Maison Yves Saint Laurent (5 avenue Marceau, Paris)',
    activeDecades: ['1950s', '1960s', '1970s', '1980s', '1990s'],
    periodIds: ['PER_XX_1960_1970', 'PER_XX_1970_1980', 'PER_XX_1980_1990'],
    biography: 'Né à Oran en Algérie, prodige de la couture, il devient le successeur de Christian Dior à seulement 21 ans en 1957 avec la ligne Trapèze. En 1961, il fonde avec Pierre Bergé sa propre maison de haute couture. Il accomplit une révolution sociologique majeure en faisant passer les pièces maîtresses du vestiaire masculin (le smoking, le caban, la saharienne, le tailleur pantalon) dans le dressing féminin, tout en célébrant l\'art contemporain (Mondrian, Picasso, Matisse).',
    innovations: [
      'Invention du smoking féminin en 1966, transformant le vestiaire de soirée',
      'Démocratisation pionnière du prêt-à-porter de luxe avec Saint Laurent Rive Gauche (1966)',
      'Transposition magistrale de l\'art pictural en haute couture (robe Mondrian 1965)',
      'Célébration des beautés non occidentales et premiers défilés avec des mannequins noires'
    ],
    iconicCreations: [
      'La robe Mondrian (Automne-Hiver 1965)',
      'Le premier smoking féminin (1966) immortalisé par Helmut Newton',
      'La Saharienne lacée en gabardine de coton (1968)',
      'La collection « Russe » ou « Ballets Russes » de 1976 en taffetas et velours chatoyants'
    ],
    historicalInfluence: 'Considéré comme le plus grand couturier de la seconde moitié du XXe siècle, il a donné le pouvoir aux femmes à travers le vêtement.',
    quote: 'Chanel a libéré les femmes, j\'ai leur ai donné le pouvoir.',
    images: [
      {
        id: 'IMG_DES_YSL',
        title: 'Yves Saint Laurent dessinant dans son studio de l\'avenue Marceau',
        institution: 'Musée Yves Saint Laurent Paris / Galliera',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/yves_saint_laurent_portrait.jpg',
        caption: 'Yves Saint Laurent (1936-2008), le titan qui offrit le smoking aux femmes.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_COURREGES',
    name: 'André Courrèges',
    birthYear: 1923,
    deathYear: 2016,
    nationality: 'Française',
    fashionHouse: 'Maison Courrèges (rue François Ier, Paris)',
    activeDecades: ['1960s', '1970s'],
    periodIds: ['PER_XX_1960_1970'],
    biography: 'Ingénieur des ponts et chaussées de formation et passionné de rugby, ce basque passe dix ans auprès de Cristóbal Balenciaga. En 1961, il fonde sa maison avec son épouse Coqueline. En 1964, sa collection « Espace » pulvérise la couture bourgeoise : lignes architecturales blanches, mini-jupes trapèze, bottes plates en vinyle et lunettes hublot, propulsant les femmes vers le XXIe siècle.',
    innovations: [
      'Propulsion de la mini-jupe en haute couture parisienne dès 1964',
      'Invention de la « silhouette spatiale » futuriste blanche et argentée',
      'Bannissement des talons aiguilles au profit de bottines et bottes plates de marche',
      'Utilisation innovante du vinyle, des découpes géométriques ajourées et des collants blancs'
    ],
    iconicCreations: [
      'La robe trapèze blanche à découpes ajourées sur les hanches',
      'Les bottes plates en vinyle blanc fendu',
      'Les lunettes hublot à fente horizontale en plastique blanc',
      'Le pantalon d\'architecte féminin porté en toute circonstance'
    ],
    historicalInfluence: 'Il a libéré le corps des jeunes femmes des artifices du passé pour leur donner une démarche athlétique et solaire.',
    quote: 'Une femme qui court, qui saute, qui conduit sa voiture, voilà ma cliente.',
    images: [
      {
        id: 'IMG_DES_COURREGES',
        title: 'André Courrèges dans son atelier immaculé de la rue François Ier',
        institution: 'Palais Galliera / Archives Courrèges',
        license: 'Domaine Public',
        imageUrl: '/images/historical/andre_courreges_portrait.jpg',
        caption: 'André Courrèges (1923-2016), l\'architecte de la mode de l\'ère spatiale.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_MUGLER',
    name: 'Thierry Mugler',
    birthYear: 1948,
    deathYear: 2022,
    nationality: 'Française',
    fashionHouse: 'Maison Thierry Mugler (Paris)',
    activeDecades: ['1970s', '1980s', '1990s'],
    periodIds: ['PER_XX_1980_1990'],
    biography: 'Danseur classique à l\'Opéra du Rhin et photographe, Manfred Thierry Mugler monte à Paris et lance sa marque en 1974. Dans les années 1980, il invente une silhouette d\'amazone théâtrale aux épaules démesurées et à la taille étranglée. Ses défilés spectacles monumentaux au Zénith de Paris et ses créations cyborg mi-femmes mi-machines marquent à jamais l\'imaginaire de la pop culture.',
    innovations: [
      'Sculpture du corps féminin en armures aérodynamiques inspirées des bolides automobiles',
      'Pionnier des méga-défilés de mode transformés en opéras rock ouverts au grand public payant',
      'Création du premier parfum « gourmand » de l\'histoire, Angel (1992), à base d\'éthyl-maltol et patchouli'
    ],
    iconicCreations: [
      'Le tailleur « Anatomique » aux épaules acérées et taille de guêpe',
      'Le bustier moto en chrome et rétroviseurs (collection 1992)',
      'La robe « Chimère » couverte d\'écailles brodées de plumes et perles (1997)',
      'Le flacon étoile bleue rechargeable du parfum Angel'
    ],
    historicalInfluence: 'Maître absolu du spectacle théâtral et de la glorification hyper-puissante du corps féminin.',
    quote: 'La mode est un opéra, un film, un rêve éveillé.',
    images: [
      {
        id: 'IMG_DES_MUGLER',
        title: 'Thierry Mugler saluant au terme de son défilé au Zénith de Paris',
        institution: 'Palais Galliera / Archives Mugler',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/thierry_mugler_portrait.jpg',
        caption: 'Thierry Mugler (1948-2022), sculpteur d\'amazones et visionnaire du spectacle.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_MONTANA',
    name: 'Claude Montana',
    birthYear: 1947,
    deathYear: 2024,
    nationality: 'Française',
    fashionHouse: 'Maison Claude Montana / Maison Lanvin (Haute Couture 1990-1992)',
    activeDecades: ['1970s', '1980s', '1990s'],
    periodIds: ['PER_XX_1980_1990'],
    biography: 'Créateur de bijoux à Londres, Claude Montana présente sa première collection à Paris en 1976. Il devient avec Mugler le héros des années 1980 grâce à une maîtrise inégalée du cuir et des proportions monumentales : carrures colossales, cols entonnoirs géants et coupes biseautées au scalpel. Nommé directeur artistique de la haute couture chez Lanvin en 1990, il y remporte deux Dé d\'or consécutifs pour ses chefs-d\'œuvre de pureté sculpturale.',
    innovations: [
      'Apogée de l\'épaulette monumentale masculine transposée dans le Power Dressing féminin',
      'Travail virtuose du cuir plongé traité avec la fluidité et la légèreté de la soie',
      'Cols cheminée et cols entonnoirs géants encadrant le visage comme un écrin'
    ],
    iconicCreations: [
      'Les vestes d\'aviateur en cuir bordeaux à épaules colossales (1979-1984)',
      'Les tailleurs origami géométriques pour la haute couture Lanvin (1990-1992)',
      'Les robes manteaux asymétriques en cachemire bleu cobalt'
    ],
    historicalInfluence: 'Architecte radical de la silhouette des années 1980, son travail géométrique a inspiré Alexander McQueen et Rick Owens.',
    images: [
      {
        id: 'IMG_DES_MONTANA',
        title: 'Claude Montana photographié dans son atelier parisien',
        institution: 'Palais Galliera / Archives de mode',
        license: 'Domaine Public',
        imageUrl: '/images/historical/claude_montana_portrait.jpg',
        caption: 'Claude Montana (1947-2024), le puriste de la ligne acérée et du cuir sculptural.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_GAULTIER',
    name: 'Jean Paul Gaultier',
    birthYear: 1952,
    nationality: 'Française',
    fashionHouse: 'Maison Jean Paul Gaultier (rue Saint-Martin, Paris)',
    activeDecades: ['1970s', '1980s', '1990s', '2000s', '2010s'],
    periodIds: ['PER_XX_1980_1990', 'PER_XX_1990_2000', 'PER_XXI_2000_2010'],
    biography: 'Surnommé « l\'enfant terrible de la mode française », autodidacte repéré le jour de ses 18 ans par Pierre Cardin, il lance sa première collection en 1976. Il bouscule tous les stéréotypes de genre, d\'âge et de beauté en faisant défiler des mannequins rondes, âgées ou tatouées dans la rue. Il sublime la marinière bretonne, donne la jupe aux hommes et réinvente le corset à seins coniques.',
    innovations: [
      'Subversion du corset classique transformé en vêtement d\'extérieur puissant et émancipateur',
      'Invention de la jupe pour homme (« Une garde-robe pour deux » en 1985)',
      'Célébration pionnière de la diversité corporelle, des âges et des genres sur les podiums',
      'Détournement iconique de la marinière et des boîtes de conserve de fer-blanc en flacons de parfum'
    ],
    iconicCreations: [
      'Le corset rose aux seins coniques de Madonna pour le Blond Ambition Tour (1990)',
      'La marinière tricotée à dos nu plongeant',
      'La robe cage en lanières de cuir et mousseline de soie',
      'Les costumes du film Le Cinquième Élément de Luc Besson (1997)'
    ],
    historicalInfluence: 'Artisan d\'une révolution festive et humaniste de la mode, il a célébré l\'inclusivité bien avant qu\'elle ne devienne un concept contemporain.',
    quote: 'Ce n\'est pas la beauté qui compte, c\'est le charme et l\'attitude.',
    images: [
      {
        id: 'IMG_DES_GAULTIER',
        title: 'Jean Paul Gaultier vêtu de son emblématique marinière',
        institution: 'Palais Galliera / Archives Jean Paul Gaultier',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/jean_paul_gaultier_portrait.jpg',
        caption: 'Jean Paul Gaultier (né en 1952), l\'enfant terrible devenu maître artisan de la haute couture.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_LAGERFELD',
    name: 'Karl Lagerfeld',
    birthYear: 1933,
    deathYear: 2019,
    nationality: 'Allemande',
    fashionHouse: 'Maison Chanel (1983-2019) / Fendi / Karl Lagerfeld (Paris)',
    activeDecades: ['1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s'],
    periodIds: ['PER_XX_1980_1990', 'PER_XX_1990_2000', 'PER_XXI_2000_2010'],
    biography: 'Né à Hambourg, lauréat du prix du Secrétariat international de la laine en 1954 ex-aequo avec Yves Saint Laurent, il œuvre chez Jean Patou et Chloé avant de prendre les rênes de la Maison Chanel en 1983, alors considérée comme endormie. D\'une boulimie de travail légendaire, photographe et éditeur, il réinvente les symboles de Coco Chanel (le tweed, les chaînes, le camélia, le bicolore) avec une modernité insolente pendant près de quatre décennies.',
    innovations: [
      'Démontage et réinvention permanente du patrimoine d\'une maison historique (le « sampling » de mode)',
      'Création des décors monumentaux éphémères du Grand Palais (fusée spatiale, supermarché, plage reconstituée)',
      'Invention du modèle moderne de directeur artistique prolifique supervisant simultanément Chanel, Fendi et sa propre griffe'
    ],
    iconicCreations: [
      'Le tailleur Chanel en tweed revisité avec mini-jupe et mitaines en cuir noir',
      'Le double C entrelacé projeté sur les ceintures, casquettes et baskets',
      'Les collections des Métiers d\'Art célébrant les brodeurs Lesage, plumassiers Lemarié et chapeliers Michel'
    ],
    historicalInfluence: 'Véritable encyclopédie vivante de la culture et de la mode, il a transformé Chanel en première marque de luxe au monde.',
    quote: 'Je suis une sorte de nymphomane de la mode qui n\'atteint jamais l\'orgasme.',
    images: [
      {
        id: 'IMG_DES_LAGERFELD',
        title: 'Karl Lagerfeld saluant sous la nef du Grand Palais à Paris',
        institution: 'Palais Galliera / Archives Chanel',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/karl_lagerfeld_portrait.jpg',
        caption: 'Karl Lagerfeld (1933-2019), le génie prolifique qui a ressuscité et transcendé la Maison Chanel.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_JACQUEMUS',
    name: 'Simon Porte Jacquemus',
    birthYear: 1990,
    nationality: 'Française',
    fashionHouse: 'Maison Jacquemus (Paris)',
    activeDecades: ['2010s', '2020s'],
    periodIds: ['PER_XXI_2010_2020', 'PER_XXI_2020_PRESENT'],
    biography: 'Originaire de Salon-de-Provence et autodidacte, il monte à Paris à 18 ans et fonde sa marque en 2009 en hommage à sa mère disparue dont il prend le nom de jeune fille. Sans financement extérieur, il séduit le monde avec son esthétique solaire, son amour de la Provence, ses coupes déstructurées en lin brut et ses défilés événements en plein air (champs de lavande de Valensole, dunes de sel de Camargue, château de Versailles).',
    innovations: [
      'Révolution du marketing digital et de la communication poétique directe sur Instagram',
      'Création du phénomène mondial des micro-sacs avec Le Chiquito',
      'Défilés paysagers monumentaux en harmonie avec les terroirs naturels français'
    ],
    iconicCreations: [
      'Le micro-sac « Le Chiquito » et le sac panier « Le Baci »',
      'La robe « La Bomba » et les chapeaux de paille géants de la collection 2018',
      'Le défilé « Le Coup de Soleil » sur un tapis rose déroulé dans un champ de lavande (2019)'
    ],
    historicalInfluence: 'Porte-étendard d\'une nouvelle génération de créateurs français indépendants conciliant fraîcheur populaire, poésie rurale et désir mondial.',
    quote: 'Je ne fais pas des vêtements pour la mode, je raconte des histoires.',
    images: [
      {
        id: 'IMG_DES_JACQUEMUS',
        title: 'Simon Porte Jacquemus dans son studio parisien',
        institution: 'Maison Jacquemus / Archives de mode',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/simon_jacquemus_portrait.jpg',
        caption: 'Simon Porte Jacquemus (né en 1990), le magicien solaire de la jeune création française.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_LEROY',
    name: 'Louis Hippolyte Leroy',
    birthYear: 1763,
    deathYear: 1829,
    nationality: 'Française',
    fashionHouse: 'Maison Leroy (rue de Richelieu, Paris)',
    activeDecades: ['1800s', '1810s'],
    periodIds: ['PER_XIX_EMPIRE'],
    biography: 'Fils d\'un machiniste de l\'Opéra de Paris, Louis Hippolyte Leroy devient le marchand de modes et couturier officiel de la cour de Napoléon Ier. Il fournit l\'impératrice Joséphine en centaines de robes Empire en mousseline et parures impériales somptueuses, régnant en maître sur le goût européen sous le Consulat et l\'Empire.',
    innovations: [
      'Conception des robes du sacre de Napoléon et Joséphine peintes par David',
      'Structuration de la haute couture masculine et féminine impériale',
      'Introduction des broderies d\'or et des traînes amovibles de cour'
    ],
    iconicCreations: [
      'Le grand habit de cour du sacre de l\'Impératrice Joséphine (1804)',
      'Robes Empire en gaze lamée d\'argent pour les princesses impériales'
    ],
    historicalInfluence: 'Premier grand couturier masculin à habiller une cour impériale européenne avec une autorité absolue.',
    images: [
      {
        id: 'IMG_DES_LEROY',
        title: 'Portrait gravé de Louis Hippolyte Leroy, marchand de modes de l\'Impératrice Joséphine',
        institution: 'Bibliothèque nationale de France (Gallica) / Musée Carnavalet',
        license: 'Domaine Public',
        imageUrl: '/images/historical/louis_hippolyte_leroy_portrait.jpg',
        caption: 'Louis Hippolyte Leroy (1763-1829), modiste attitré de la cour impériale napoléonienne.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_BOCHER']
  },
  {
    id: 'DES_PATOU',
    name: 'Jean Patou',
    birthYear: 1887,
    deathYear: 1936,
    nationality: 'Française',
    fashionHouse: 'Maison Jean Patou (rue Saint-Florentin, Paris)',
    activeDecades: ['1920s', '1930s'],
    periodIds: ['PER_XX_1920_1930'],
    biography: 'Grand rival de Gabrielle Chanel dans les Années Folles, Jean Patou invente le sportswear moderne en habillant la championne de tennis Suzanne Lenglen d\'une jupe plissée sans manches scandaleusement courte pour l\'époque. En 1929, il réagit au krach boursier en lançant « Joy », le parfum le plus cher du monde composé de milliers de fleurs de jasmin et de roses.',
    innovations: [
      'Invention du sportswear féminin de luxe pour le tennis et le golf',
      'Premier couturier à apposer son monogramme (JP) de manière ostensible sur ses créations',
      'Lancement de la première huile solaire de l\'histoire (Huile de Chaldée en 1927)',
      'Création du parfum mythique Joy en 1930'
    ],
    iconicCreations: [
      'La tenue de tennis en soie plissée blanche de Suzanne Lenglen à Wimbledon',
      'Cardigans en tricot à motifs géométriques cubistes',
      'Le flacon en cristal de Baccarat du parfum Joy'
    ],
    historicalInfluence: 'Visionnaire du sportswear élégant et du marketing olfactif international.',
    quote: 'La mode doit être vivante, sportive et libre.',
    images: [
      {
        id: 'IMG_DES_PATOU',
        title: 'Portrait photographique d\'atelier de Jean Patou en dandy des Années Folles',
        institution: 'Palais Galliera / BnF',
        license: 'Domaine Public',
        imageUrl: '/images/historical/jean_patou_portrait.jpg',
        caption: 'Jean Patou (1887-1936), inventeur du sportswear chic féminin et du parfum mythique Joy.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_RYKIEL',
    name: 'Sonia Rykiel',
    birthYear: 1930,
    deathYear: 2016,
    nationality: 'Française',
    fashionHouse: 'Maison Sonia Rykiel (rue de Grenelle, Saint-Germain-des-Prés, Paris)',
    activeDecades: ['1960s', '1970s', '1980s'],
    periodIds: ['PER_XX_1970_1980'],
    biography: 'Surnommée « la Reine du tricot », Sonia Rykiel ouvre sa boutique à Saint-Germain-des-Prés en mai 1968. Elle invente la « démode » : un rejet des diktats des couturiers au profit de vêtements en maille souple, rayés de noir et de couleurs vives, portés à même la peau sans sous-vêtements. Elle incarne l\'intellectuelle parisienne émancipée.',
    innovations: [
      'Invention de la « Démode » : adapter la mode à son propre corps et non l\'inverse',
      'Sublimation de la maille et du tricot fins avec coutures apparentes à l\'envers',
      'Suppression des ourlets et des doublures pour une souplesse totale'
    ],
    iconicCreations: [
      'Le pull « Poor Boy Sweater » à rayures multicolores porté par Françoise Hardy',
      'Les robes en jersey noir fluide avec inscriptions strassées',
      'Les capes enveloppantes en maille torsadée'
    ],
    historicalInfluence: 'Icône de la libération corporelle des années 1970 à Saint-Germain-des-Prés.',
    quote: 'La démode, c\'est le vêtement qui s\'adapte à la femme, et non la femme au vêtement.',
    images: [
      {
        id: 'IMG_DES_RYKIEL',
        title: 'Portrait photographique de Sonia Rykiel à Saint-Germain-des-Prés',
        institution: 'Palais Galliera / BnF',
        license: 'Domaine Public',
        imageUrl: '/images/historical/sonia_rykiel_portrait.jpg',
        caption: 'Sonia Rykiel (1930-2016), la reine du tricot et inventrice de la « démode ».',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_KENZO',
    name: 'Kenzo Takada',
    birthYear: 1939,
    deathYear: 2020,
    nationality: 'Française',
    fashionHouse: 'Jungle Jap / Maison Kenzo (galerie Vivienne puis place des Victoires, Paris)',
    activeDecades: ['1970s', '1980s', '1990s'],
    periodIds: ['PER_XX_1970_1980'],
    biography: 'Arrivé à Paris en bateau depuis Tokyo en 1965, Kenzo Takada ouvre sa boutique Jungle Jap dans la galerie Vivienne en 1970. Il insuffle un vent de fraîcheur, de liberté poétique et de métissage joyeux dans la mode parisienne : coupes kimonos amples, mélanges de motifs fleuris éclatants et défilés carnavalesques spectaculaires.',
    innovations: [
      'Fusion pionnière de la coupe traditionnelle japonaise (kimono) et du prêt-à-porter parisien',
      'Mélange inédit d\'imprimés fleuris, de rayures et de carreaux polychromes',
      'Défilés conçus comme des fêtes carnavalesques joyeuses au Cirque d\'Hiver'
    ],
    iconicCreations: [
      'Robes kimonos à manches flottantes en cotonnades fleuries',
      'Pulls jacquard aux motifs floraux et tigres emblématiques',
      'Les parfums floraux poétiques (Kenzo de Kenzo, Flower by Kenzo)'
    ],
    historicalInfluence: 'Premier grand créateur asiatique à s\'imposer au sommet de la mode parisienne, ouvrant la voie à Issey Miyake, Yohji Yamamoto et Rei Kawakubo.',
    images: [
      {
        id: 'IMG_DES_KENZO',
        title: 'Portrait photographique de Kenzo Takada',
        institution: 'Wikipédia / Wikimedia Commons',
        license: 'CC BY-SA 4.0 / Wikimedia Commons',
        imageUrl: '/images/historical/kenzo_takada_portrait.jpg',
        caption: 'Kenzo Takada (1939-2020), fondateur de la maison Kenzo (photographie issue de Wikipédia).',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_MARGIELA',
    name: 'Martin Margiela',
    birthYear: 1957,
    nationality: 'Française',
    fashionHouse: 'Maison Martin Margiela (Paris)',
    activeDecades: ['1980s', '1990s', '2000s'],
    periodIds: ['PER_XX_1990_2000'],
    biography: 'Diplômé de l\'Académie royale des Beaux-Arts d\'Anvers et ancien assistant de Jean Paul Gaultier, Martin Margiela fonde sa maison à Paris en 1988 avec Jenny Meirens. Figure la plus secrète et radicale de la mode (il n\'a jamais accordé d\'interview filmée ni apparu au terme d\'un défilé), il invente la déconstruction vestimentaire, l\'upcycling d\'objets trouvés et l\'étiquette blanche anonyme aux quatre points de fil blancs.',
    innovations: [
      'Invention de la « Déconstruction » : exposer les doublures, coutures brutes et fils de bâti',
      'Pionnier de l\'upcycling : vêtements réalisés à partir de gants de cuir, chaussettes de l\'armée ou foulards',
      'Création de la chaussure Tabi (à orteil séparé inspirée des socques japonaises) en 1989',
      'L\'étiquette blanche vierge sans logo maintenue par quatre points de couture blancs'
    ],
    iconicCreations: [
      'Les bottines Tabi en cuir à bout fendu (1989)',
      'Le gilet confectionné en vaisselle cassée et fil de fer (1989)',
      'La ligne « Artisanal » composée de pièces recyclées d\'époque',
      'Les collections de prêt-à-porter pour la maison Hermès (1997-2003) d\'un luxe minimaliste absolu'
    ],
    historicalInfluence: 'L\'un des créateurs les plus influents des quarante dernières années, précurseur de l\'art conceptuel et de la mode durable.',
    quote: 'Ce n\'est pas la célébrité qui doit être au centre, c\'est le vêtement.',
    images: [
      {
        id: 'IMG_DES_MARGIELA',
        title: 'Portrait conceptuel d\'atelier et étiquette blanche emblématique de Martin Margiela',
        institution: 'Palais Galliera / Archives Martin Margiela',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/martin_margiela_portrait.jpg',
        caption: 'Martin Margiela (né en 1957), maître secret et père de la déconstruction textile.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_SERRE',
    name: 'Marine Serre',
    birthYear: 1991,
    nationality: 'Française',
    fashionHouse: 'Maison Marine Serre (Paris)',
    activeDecades: ['2010s', '2020s'],
    periodIds: ['PER_XXI_2020_PRESENT'],
    biography: 'Formée à La Cambre à Bruxelles après un passage chez Alexander McQueen, Maison Margiela et Balenciaga auprès de Demna Gvasalia, elle remporte en 2017 le prestigieux Prix LVMH à l\'âge de 25 ans. Pionnière incontournable de la mode circulaire et de la « régénération » textile, elle transforme les draps de lit vintage, nappes en crochet et foulards de soie en chefs-d\'œuvre haute couture contemporains, tout en imposant son motif de croissant de lune dans le vestiaire planétaire.',
    innovations: [
      'Processus industriel et artisanal rigoureux d\'upcycling baptisé « Regen »',
      'Invention de la combinaison seconde peau en jersey recyclé à motif croissant de lune',
      'Traçabilité transparente des matières premières et éco-conception circulaire radicale'
    ],
    iconicCreations: [
      'Combinaison intégrale seconde peau imprimée de croissants de lune noirs',
      'Robes drapées composées de foulards de soie vintage chinés et assemblés en patchwork',
      'Manteaux confectionnés à partir de couvertures jacquard et kilims anciens'
    ],
    historicalInfluence: 'Cheffe de file incontestée de la révolution écologique et éthique de la haute couture française du XXIe siècle.',
    quote: 'La mode doit regarder la réalité en face et cesser de détruire la planète.',
    images: [
      {
        id: 'IMG_DES_SERRE',
        title: 'Marine Serre dans son atelier de régénération textile à Paris',
        institution: 'Maison Marine Serre / Archives contemporaines',
        license: 'Domaine Public / Données documentaires',
        imageUrl: '/images/historical/marine_serre_portrait.jpg',
        caption: 'Marine Serre (née en 1991), pionnière de l\'upcycling couture et de la mode régénérée.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_LANVIN',
    name: 'Jeanne Lanvin',
    birthYear: 1867,
    deathYear: 1946,
    nationality: 'Française',
    fashionHouse: 'Maison Lanvin (22 rue du Faubourg Saint-Honoré, Paris)',
    activeDecades: ['1900s', '1910s', '1920s', '1930s', '1940s'],
    periodIds: ['PER_XX_1900_1910', 'PER_XX_1910_1920', 'PER_XX_1920_1930', 'PER_XX_1930_1940'],
    biography: 'Née à Paris, aînée de onze enfants d\'un journaliste, Jeanne Lanvin commence à treize ans comme arpète chez une modiste avant d\'ouvrir son atelier de chapellerie en 1889 au 22 rue du Faubourg Saint-Honoré. Inspirée par l\'amour de sa fille unique Marguerite (future comtesse Marie-Blanche de Polignac), elle conçoit pour elle une garde-robe féerique qui éblouit ses clientes bourgeoises. En 1909, elle rejoint la Chambre Syndicale de la Couture. Créatrice d\'un empire universel (mode enfant, femme, homme, décoration, parfums), elle impose la robe de style et le célèbre « Bleu Lanvin », faisant de Lanvin la doyenne des maisons de couture françaises toujours en activité.',
    innovations: [
      'Invention de la « Robe de style », alternative romantique et féminine à la silhouette garçonne tubulaire des années 1920',
      'Création de la teinte emblématique « Bleu Lanvin », inspirée des fresques de Fra Angelico à Florence',
      'Pionnière de l\'extension d\'une maison de haute couture à l\'univers de l\'enfant, de l\'homme et du décor d\'intérieur (Lanvin Décoration avec Armand-Albert Rateau)',
      'Conception du logo patrimonial mère-enfant dessiné par Paul Iribe en 1927'
    ],
    iconicCreations: [
      'La Robe de Style en taffetas de soie rebrodée de perles et rubans (1920-1926)',
      'Le flacon boule noire et or du parfum mythique Arpège (1927) composé par André Fraysse',
      'Les cols Marguerite et broderies virtuose exécutés dans ses ateliers parisiens'
    ],
    historicalInfluence: 'Doyenne de la haute couture parisienne, elle a incarné l\'élégance poétique, le raffinement des broderies d\'art et l\'art de vivre à la française au XXe siècle.',
    quote: 'J\'ai agi par impulsion et cru à la beauté, au travail bien fait et à l\'amour.',
    images: [
      {
        id: 'IMG_DES_LANVIN',
        title: 'Portrait officiel de Jeanne Lanvin par Clémentine-Hélène Dufau',
        author: 'Clémentine-Hélène Dufau',
        year: '1925',
        institution: 'Musée des Arts Décoratifs de Paris / BnF',
        license: 'Domaine Public',
        sourceUrl: 'https://gallica.bnf.fr',
        imageUrl: '/images/historical/jeanne_lanvin_portrait.jpg',
        caption: 'Jeanne Lanvin (1867-1946), fondatrice de la plus ancienne maison de haute couture française toujours en activité.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS', 'SRC_BNF_GALLICA']
  },
  {
    id: 'DES_GRES',
    name: 'Madame Grès (Germaine Krebs)',
    birthYear: 1903,
    deathYear: 1993,
    nationality: 'Française',
    fashionHouse: 'Maison Alix (1934-1941) puis Madame Grès (1 rue de la Paix, Paris)',
    activeDecades: ['1930s', '1940s', '1950s', '1960s', '1970s', '1980s'],
    periodIds: ['PER_XX_1930_1940', 'PER_XX_1940_1950', 'PER_XX_1950_1960', 'PER_XX_1970_1980'],
    biography: 'Née Germaine Émilie Krebs à Paris, celle qui rêvait d\'être sculptrice devient couturière d\'abord sous le nom d\'Alix, puis fonde Madame Grès en 1942 au 1 rue de la Paix. Refusant tout compromis, elle sculpte le tissu à même le corps des modèles sans aucun patron en papier. Sous l\'Occupation nazie en 1944, elle défie l\'occupant en présentant une collection exclusivement tricolore bleu, blanc, rouge avant que sa maison ne soit fermée par les autorités allemandes. Figure vénérée pour sa probité artistique, elle est élue présidente de la Chambre Syndicale de la Haute Couture en 1972.',
    innovations: [
      'Invention du « Plissé Grès » : technique virtuose réduisant des laizes de jersey de soie de plusieurs mètres à quelques centimètres de drapé sans piqûre apparente',
      'Sculpture textile néoclassique rejetant les baleines, coussinets et doublures rigides au profit de la chute pure de la matière',
      'Exploration pionnière des découpes cut-out et asymétries anatomiques épurées dans les années 1970'
    ],
    iconicCreations: [
      'Robes du soir néoclassiques en jersey de soie ivoire drapées à l\'antique (conservées au Palais Galliera)',
      'Robes de défilé tricolores défiant l\'Occupation allemande (1944)',
      'Le parfum cuir-chypré Cabochard (1959)'
    ],
    historicalInfluence: 'Surnommée le « Sphinx de la mode », elle a élevé le drapé textile au rang de sculpture monumentale et inspiré des générations de créateurs dont Azzedine Alaïa et Haider Ackermann.',
    quote: 'Je voulais être sculpteur. Pour moi, c\'est la même chose de travailler le tissu ou la pierre.',
    images: [
      {
        id: 'IMG_DES_GRES',
        title: 'Robe du soir drapée en jersey de soie par Madame Grès',
        author: 'Maison Grès / Paris Musées',
        year: '1975',
        institution: 'Palais Galliera, musée de la Mode de Paris',
        license: 'CC BY-SA 4.0 / Paris Musées',
        sourceUrl: 'https://www.parismuseescollections.paris.fr',
        imageUrl: '/images/historical/madame_gres_creation.jpg',
        caption: 'Robe du soir sculptée par Madame Grès (1903-1993), chef-d\'œuvre de plissé en jersey de soie sans armature.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_BALENCIAGA',
    name: 'Cristóbal Balenciaga',
    birthYear: 1895,
    deathYear: 1972,
    nationality: 'Espagnole',
    fashionHouse: 'Maison Balenciaga (10 avenue George V, Paris)',
    activeDecades: ['1930s', '1940s', '1950s', '1960s'],
    periodIds: ['PER_XX_1930_1940', 'PER_XX_1940_1950', 'PER_XX_1950_1960', 'PER_XX_1960_1970'],
    biography: 'Fils d\'un pêcheur et d\'une couturière basque à Getaria, Cristóbal Balenciaga ouvre ses premiers ateliers en Espagne avant de fuir la guerre civile et d\'ouvrir sa maison au 10 avenue George V à Paris en 1937. Solitaire, exigeant, sachant couper, faufiler et coudre chaque pièce de ses propres mains, il est salué par Christian Dior comme « notre maître à tous ». Il bouleverse la silhouette féminine en la dégageant des contraintes anatomiques pour créer des volumes géométriques architecturaux d\'une pureté absolue.',
    innovations: [
      'Maîtrise manuelle intégrale du patronage, de la coupe et de la couture sans égale dans l\'histoire de la haute couture',
      'Création de silhouettes architecturales révolutionnaires affranchies du cintrage : ligne Tonneau (1947), veste Ballon (1953), robe Baby Doll (1957) et robe Sac (1957)',
      'Conception du gazar de soie avec la manufacture suisse Abraham pour soutenir des formes autoportantes pures',
      'Invention du col dégagé en arrière mettant en valeur le port de tête de la femme'
    ],
    iconicCreations: [
      'La robe Sac (1957) rompant radicalement avec le New Look cintré',
      'La robe trapèze Baby Doll (1957)',
      'La robe de mariée à une seule couture en gazar de soie blanc (1967)',
      'Le manteau cocon asymétrique et le tailleur semi-ajusté (1951)'
    ],
    historicalInfluence: 'Considéré par ses pairs comme le plus grand architecte du vêtement du XXe siècle, maître spirituel d\'Hubert de Givenchy et mentor d\'André Courrèges et Emanuel Ungaro.',
    quote: 'Un couturier doit être architecte pour les plans, sculpteur pour la forme, peintre pour la couleur, musicien pour l\'harmonie et philosophe pour la mesure.',
    images: [
      {
        id: 'IMG_DES_BALENCIAGA',
        title: 'Création architecturale en faille de soie par Cristóbal Balenciaga',
        author: 'Maison Balenciaga / Cristóbal Balenciaga Museoa',
        year: '1958',
        institution: 'Cristóbal Balenciaga Museoa / Palais Galliera',
        license: 'CC BY-SA 3.0 / Wikimedia Commons',
        sourceUrl: 'https://www.cristobalbalenciagamuseoa.com',
        imageUrl: '/images/historical/cristobal_balenciaga_creation.jpg',
        caption: 'Création haute couture de Cristóbal Balenciaga (1895-1972), « le maître de nous tous » selon Christian Dior.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS', 'SRC_MET_COSTUME']
  },
  {
    id: 'DES_AGHION',
    name: 'Gaby Aghion',
    birthYear: 1921,
    deathYear: 2014,
    nationality: 'Française',
    fashionHouse: 'Maison Chloé (fondée en 1952, Paris)',
    activeDecades: ['1950s', '1960s', '1970s', '1980s'],
    periodIds: ['PER_XX_1950_1960', 'PER_XX_1960_1970', 'PER_XX_1970_1980'],
    biography: 'Née Gabrielle Hanoka à Alexandrie en Égypte dans une famille francophile cultivée, elle s\'installe à Paris en 1945 avec son époux Raymond Aghion. Constatant le fossé entre la haute couture inabordable et les confections ordinaires médiocres, elle fonde en 1952 la maison Chloé (baptisée d\'après le prénom de son amie Chloé de Brumeaux). Elle invente le concept de « prêt-à-porter de luxe » : des vêtements féminins, fluides, jeunes, confectionnés dans des matières nobles et disponibles immédiatement. Visionnaire et découvreuse de génies, elle recrute Karl Lagerfeld dès 1964, propulsant Chloé au zénith du chic parisien décontracté.',
    innovations: [
      'Invention et théorisation du « Prêt-à-porter de luxe » (Luxury Ready-to-Wear) dès 1952',
      'Désacralisation des présentations de mode : premiers défilés décontractés au Café de Flore et à la brasserie Lipp à Saint-Germain-des-Prés',
      'Rejet des structures rigides au profit de coupes vaporeuses en popeline de coton et crêpe de soie',
      'Pépinière de directeurs artistiques légendaires (Karl Lagerfeld, Martine Sitbon, Stella McCartney, Phoebe Philo)'
    ],
    iconicCreations: [
      'Les robes chemisiers fluides en popeline de coton blanc à col souple (1952-1956)',
      'Les blouses bohèmes romantiques en soie à manches volantées',
      'Les robes drapées légères portées sans corset ni fond de robe rigide'
    ],
    historicalInfluence: 'Pionnière fondamentale de l\'émancipation vestimentaire féminine, elle a transformé le modèle économique de la mode en rendant le style créatif immédiatement portable sans essayages contraignants.',
    quote: 'Tout ce que je voulais, c\'était que Chloé ait un esprit jeune, joyeux et audacieux.',
    images: [],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_CARDIN',
    name: 'Pierre Cardin',
    birthYear: 1922,
    deathYear: 2020,
    nationality: 'Française',
    fashionHouse: 'Maison Pierre Cardin (rue du Faubourg Saint-Honoré, Paris)',
    activeDecades: ['1950s', '1960s', '1970s', '1980s'],
    periodIds: ['PER_XX_1950_1960', 'PER_XX_1960_1970', 'PER_XX_1970_1980'],
    biography: 'Né Pietro Costante Cardin en Vénétie, sa famille fuit le fascisme et s\'installe en France. Formé chez Paquin, Schiaparelli puis premier tailleur de Christian Dior pour le défilé historique du New Look en 1947, il fonde sa maison en 1950. En 1959, il provoque un séisme en lançant la première collection de prêt-à-porter vendue dans un grand magasin (Le Printemps), ce qui lui vaut d\'être temporairement exclu de la Chambre Syndicale. Visionnaire du « Space Age », passionné par la conquête spatiale et les formes géométriques pures (le cercle, la sphère), il bâtit un empire mondial pionnier des licences internationales.',
    innovations: [
      'Pionnier absolu de la démocratisation de la mode en lançant le prêt-à-porter en grand magasin en 1959',
      'Esthétique spatiale « Cosmocorps » : coupes géométriques circulaires, découpes hublot, chasubles trapèze et vinyle',
      'Invention de la matière synthétique thermoformée en relief 3D, la « Cardine » (1968)',
      'Développement avant-gardiste du modèle de licences mondiales et défilés pionniers en Chine (1979) et sur la Place Rouge à Moscou'
    ],
    iconicCreations: [
      'La robe Bulle (Bubble Dress, 1954)',
      'La collection futuriste Cosmocorps (1964) avec combinaisons unisexe et casques en plexiglas',
      'Les robes sculptées en Cardine à motifs géométriques thermoformés (1968)',
      'Le Palais Bulles d\'Antti Lovag à Théoule-sur-Mer'
    ],
    historicalInfluence: 'Titan de l\'ère spatiale et bâtisseur visionnaire de la mondialisation de la mode française.',
    quote: 'Le vêtement que je préfère est celui que j\'invente pour une vie qui n\'existe pas encore, le monde de demain.',
    images: [
      {
        id: 'IMG_DES_CARDIN',
        title: 'Portrait photographique de Pierre Cardin',
        author: 'ProstoSasha / Wikimedia Commons',
        year: '2010',
        institution: 'Archives Pierre Cardin / Wikimedia Commons',
        license: 'CC BY-SA 3.0',
        sourceUrl: 'https://commons.wikimedia.org',
        imageUrl: '/images/historical/pierre_cardin_portrait.jpg',
        caption: 'Pierre Cardin (1922-2020), visionnaire de l\'ère spatiale et pionnier du prêt-à-porter moderne.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_RABANNE',
    name: 'Paco Rabanne (Francisco Rabaneda Cuervo)',
    birthYear: 1934,
    deathYear: 2023,
    nationality: 'Espagnole',
    fashionHouse: 'Maison Paco Rabanne (rue Bergère, Paris)',
    activeDecades: ['1960s', '1970s', '1980s', '1990s'],
    periodIds: ['PER_XX_1960_1970', 'PER_XX_1970_1980'],
    biography: 'Né à Pasaia au Pays basque espagnol, fils d\'un général républicain fusillé sous Franco et d\'une première main chez Balenciaga, Francisco Rabaneda se réfugie en France et étudie l\'architecture aux Beaux-Arts de Paris. Le 1er février 1966, à l\'hôtel George V, il présente son défilé manifeste : « Douze robes importables en matériaux contemporains » au son d\'une musique concrète. Surnommé « le métallurgiste de la mode » par Coco Chanel, il remplace le fil et l\'aiguille par des pinces, anneaux d\'acier, plaques d\'aluminium et de rhodoïd fluorescent, incarnant l\'audace expérimentale la plus radicale des Sixties.',
    innovations: [
      'Bannissement radical de l\'aiguille et du fil traditionnel au profit du rivetage, du martelage et des anneaux d\'assemblage mécanique',
      'Utilisation de matériaux industriels inédits en couture : plaques de rhodoïd, métal martelé, fibre de verre, papier et plastique',
      'Création de vêtements cinétiques réfléchissant la lumière et sonorisant la démarche',
      'Pionnier des défilés en musique contemporaine avec mannequins pieds nus'
    ],
    iconicCreations: [
      'La robe en pastilles de rhodoïd fluorescent et anneaux d\'acier (1966)',
      'La robe cotte de mailles en plaques d\'or et diamants portée par Françoise Hardy (1968)',
      'Le costume vertigineux de Jane Fonda dans le film culte Barbarella (1968)',
      'Le parfum Calandre (1969) dans son flacon cerclé de métal chromé'
    ],
    historicalInfluence: 'Révolutionnaire matériel du vêtement, il a aboli la frontière entre mode, sculpture cinétique et architecture moderne.',
    quote: 'J\'ai toujours eu le sentiment d\'être un accélérateur de temps, quelqu\'un qui projette le futur dans le présent.',
    images: [
      {
        id: 'IMG_DES_RABANNE',
        title: 'Paco Rabanne lors d\'une rétrospective de ses créations métalliques',
        author: 'Victor Korostoyashevsky / Wikimedia Commons',
        year: '2006',
        institution: 'Archives Paco Rabanne / Wikimedia Commons',
        license: 'CC BY-SA 3.0',
        sourceUrl: 'https://commons.wikimedia.org',
        imageUrl: '/images/historical/paco_rabanne_portrait.jpg',
        caption: 'Paco Rabanne (1934-2023), le métallurgiste de la mode et architecte des matières industrielles.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_ALAIA',
    name: 'Azzedine Alaïa',
    birthYear: 1935,
    deathYear: 2017,
    nationality: 'Tunisienne',
    fashionHouse: 'Maison Azzedine Alaïa (rue de Bellechasse puis rue de Moussy, Le Marais, Paris)',
    activeDecades: ['1980s', '1990s', '2000s', '2010s'],
    periodIds: ['PER_XX_1980_1990', 'PER_XX_1990_2000', 'PER_XXI_2000_2010'],
    biography: 'Né à Tunis, formé à la sculpture à l\'Institut supérieur des Beaux-Arts de Tunis, Azzedine Alaïa arrive à Paris en 1957. Après de brefs passages chez Dior, Guy Laroche et Thierry Mugler, il ouvre son atelier secret rue de Bellechasse où il habille l\'aristocratie parisienne et Greta Garbo. Dans les années 1980, son atelier de la rue de Moussy devient le sanctuaire de la mode internationale. Surnommé « le sculpteur du corps féminin » (King of Cling), il coupe et ajuste chaque pièce directement sur les corps vivants de ses muses et amies (Grace Jones, Naomi Campbell, Tina Turner). Rejetant les diktats marketing, il n\'a jamais défilé que selon son propre rythme créatif.',
    innovations: [
      'Sculpture du corps féminin en trois dimensions sans croquis préalable, directement par la coupe et l\'épinglage sur modèle vivant',
      'Révolution du tricotage technique : utilisation inédite du fil stretch, de la rayonne bandage et du jacquard de maille sculptant les formes',
      'Travail virtuose du cuir perforé au laser et découpé en dentelle géométrique souple',
      'Indépendance radicale face au calendrier imposé des Fashion Weeks'
    ],
    iconicCreations: [
      'La robe fourreau en jersey bandage seconde peau (1986)',
      'La robe cagoule en jersey de soie portée par Grace Jones dans Dangereusement vôtre (1985)',
      'La robe drapée tricolore portée par la cantatrice Jessye Norman pour le Bicentenaire de la Révolution (1989)',
      'Les corsets sculpturaux en cuir perforé au laser'
    ],
    historicalInfluence: 'Maître artisan vénéré par ses pairs, il a incarné l\'intégrité absolue de la coupe et l\'hommage le plus sensuel à l\'anatomie de la femme.',
    quote: 'Je fais des vêtements, les femmes font la mode.',
    images: [
      {
        id: 'IMG_DES_ALAIA',
        title: 'Azzedine Alaïa jeune sculpteur aux Beaux-Arts de Tunis',
        author: 'Archives Fondation Azzedine Alaïa / Wikimedia Commons',
        year: 'vers 1955',
        institution: 'Fondation Azzedine Alaïa / Palais Galliera',
        license: 'Domaine Public',
        sourceUrl: 'https://fondationazzedinealaia.org',
        imageUrl: '/images/historical/azzedine_alaia_portrait.jpg',
        caption: 'Azzedine Alaïa (1935-2017), le sculpteur virtuose du corps féminin et maître de la coupe directe.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS', 'SRC_FONDATION_ALAIA']
  },
  {
    id: 'DES_LACROIX',
    name: 'Christian Lacroix',
    birthYear: 1951,
    nationality: 'Française',
    fashionHouse: 'Maison Jean Patou (1981-1987) puis Maison Christian Lacroix (73 rue du Faubourg Saint-Honoré, Paris)',
    activeDecades: ['1980s', '1990s', '2000s'],
    periodIds: ['PER_XX_1980_1990', 'PER_XX_1990_2000', 'PER_XXI_2000_2010'],
    biography: 'Né à Arles, diplômé d\'histoire de l\'art à l\'École du Louvre et à la Sorbonne, Christian Lacroix rêve d\'abord de devenir conservateur de musée de costume. Après avoir redonné vie à la Maison Jean Patou (où il remporte deux Dés d\'or), il fonde en 1987 sa propre maison de haute couture avec le soutien de Bernard Arnault. Son premier défilé est une déflagration de joie : à l\'opposé du minimalisme noir de l\'époque, il réveille Paris avec un baroque solaire flamboyant, des jupes poufs gonflantes, des broderies d\'or arlésiennes et des couleurs méditerranéennes éclatantes.',
    innovations: [
      'Invention de la jupe « Pouf » en taffetas court et gonflant dès 1987, emblème festif de la décennie',
      'Réconciliation de l\'érudition historique muséale et de la flamboyance haute couture contemporaine',
      'Mariages chromatiques audacieux et inédits : rouge garance et rose bonbon, jaune safran et violette épiscopale',
      'Célébration des savoir-faire artisanaux régionaux (costumes de corrida, piqué provençal, dentelles de Mirecourt)'
    ],
    iconicCreations: [
      'La robe courte « Pouf » en satin duchesse fuchsia à pois noirs (1987)',
      'Les vestes torero brodées de canetilles d\'or et de cabochons de verre par François Lesage',
      'La robe de mariée d\'Arlésienne en mousseline et dentelle d\'or couronnée d\'œillets rouges'
    ],
    historicalInfluence: 'Enchanteur solaire de la haute couture française, il a réinjecté le rêve, la théâtralité et l\'artisanat d\'art au cœur de la création parisienne.',
    quote: 'La haute couture doit être inutile, extravagante, féerique, faite pour donner du bonheur.',
    images: [
      {
        id: 'IMG_DES_LACROIX',
        title: 'Portrait de Christian Lacroix saluant lors d\'une présentation couture',
        author: 'Georges Biard / Wikimedia Commons',
        year: '2018',
        institution: 'Palais Galliera / BnF',
        license: 'CC BY-SA 2.0',
        sourceUrl: 'https://commons.wikimedia.org',
        imageUrl: '/images/historical/christian_lacroix_portrait.jpg',
        caption: 'Christian Lacroix (né en 1951), le magicien arlésien de la couleur baroque et de la jupe pouf.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_THOMASS',
    name: 'Chantal Thomass',
    birthYear: 1947,
    nationality: 'Française',
    fashionHouse: 'Ter et Bantine puis Maison Chantal Thomass (rue du Cherche-Midi puis rue Saint-Honoré, Paris)',
    activeDecades: ['1970s', '1980s', '1990s', '2000s'],
    periodIds: ['PER_XX_1970_1980', 'PER_XX_1980_1990', 'PER_XX_1990_2000'],
    biography: 'Née à Paris, Chantal Thomass débute en 1967 avec sa marque Ter et Bantine avant de fonder la maison éponyme Chantal Thomass en 1975. Reconnaissable entre toutes avec sa coupe au carré noir ébène à frange droite et sa bouche rouge carmin, elle accomplit une véritable révolution des mœurs : transformer les sous-vêtements et pièces intimes (guêpières, corsets, bas résille, porte-jarretelles) en vêtements de dessus assumés. À l\'encontre du conformisme unisexe des années 1970, elle réhabilite la séduction choisie par et pour les femmes elles-mêmes, mêlant humour, féminisme et dentelle de Calais.',
    innovations: [
      'Transformation du sous-vêtement en vêtement de dessus visible (lingerie en tant qu\'Outerwear)',
      'Réhabilitation ludique et féministe du corset, de la guêpière et du porte-jarretelles dans le prêt-à-porter de luxe',
      'Détournement des matières de corseterie noble (soie, dentelle de Calais, résille plumetis) avec des coupes contemporaines confortables',
      'Invention du défilé-cabaret insolent et joyeux célébrant toutes les féminités'
    ],
    iconicCreations: [
      'La guêpière en satin et dentelle noire portée sous une veste de tailleur ouverte (1978)',
      'Les collants trompe-l\'œil porte-jarretelles et coutures arrières graphiques',
      'Le soutien-gorge nœud papillon en satin rose bonbon et tulle noir'
    ],
    historicalInfluence: 'Pionnière incontournable de la corseterie moderne et du dessous-dessus, elle a réconcilié féminisme, pouvoir corporel et sensualité raffinée.',
    quote: 'La lingerie n\'est pas faite pour séduire les hommes, mais pour donner du pouvoir aux femmes.',
    images: [
      {
        id: 'IMG_DES_THOMASS',
        title: 'Portrait photographique de Chantal Thomass',
        author: 'Georges Biard / Wikimedia Commons',
        year: '2011',
        institution: 'Archives Chantal Thomass / Wikimedia Commons',
        license: 'CC BY-SA 3.0',
        sourceUrl: 'https://commons.wikimedia.org',
        imageUrl: '/images/historical/chantal_thomass_portrait.jpg',
        caption: 'Chantal Thomass (née en 1947), créatrice iconique qui a fait de la lingerie un vêtement de mode émancipateur.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  },
  {
    id: 'DES_ANDRE',
    name: 'Adeline André',
    birthYear: 1949,
    nationality: 'Française',
    fashionHouse: 'Maison Adeline André (5 rue du Perche, Le Marais, Paris)',
    activeDecades: ['1980s', '1990s', '2000s', '2010s'],
    periodIds: ['PER_XX_1980_1990', 'PER_XX_1990_2000', 'PER_XXI_2000_2010'],
    biography: 'Née à Bangui en Centrafrique de parents français, diplômée de l\'École de la Chambre Syndicale de la Couture Parisienne en 1970, Adeline André fait ses débuts chez Christian Dior aux côtés de Marc Bohan. En 1981, elle fonde sa maison avec Istvan Dohan et Nicolas Puech. En 1982, elle dépose au ministère de l\'Industrie son invention la plus célèbre : la « manche à trois emmanchures ». Membre officiel et permanent de la Chambre Syndicale de la Haute Couture depuis 2005, elle développe une œuvre d\'une poésie géométrique rare, fondée sur la fluidité des soies superposées, la noblesse des camaïeux de couleurs subtils et le refus de tout artifice éphémère.',
    innovations: [
      'Invention et brevetage officiel en 1982 de la « manche à trois emmanchures » permettant de moduler l\'aisance du vêtement selon le passage du bras',
      'Pionnière de la haute couture minimaliste et poétique française, privilégiant l\'épure absolue au spectaculaire tapageur',
      'Création de palettes chromatiques aquarellées complexes (teintes fanées, ocres d\'Orient, mastic, verts de gris)',
      'Technique du « Topo-Couture » adaptée à la gestuelle naturelle du corps'
    ],
    iconicCreations: [
      'Le manteau et le spencer à trois emmanchures brevetés (1982)',
      'Les tuniques impalpables en mousselines de soie superposées créant des vibrations de couleur',
      'Les robes longues tubulaires fluides en crêpe georgette'
    ],
    historicalInfluence: 'Figure de proue de la haute couture intellectuelle et géométrique, célébrée par les musées internationaux pour la rigueur poétique de ses coupes.',
    images: [],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS', 'SRC_FHCM']
  },
  {
    id: 'DES_MIYAKE',
    name: 'Issey Miyake',
    birthYear: 1938,
    deathYear: 2022,
    nationality: 'Japonaise',
    fashionHouse: 'Miyake Design Studio (défilant à Paris dès 1973)',
    activeDecades: ['1970s', '1980s', '1990s', '2000s'],
    periodIds: ['PER_XX_1970_1980', 'PER_XX_1980_1990', 'PER_XX_1990_2000'],
    biography: 'Survivant du bombardement d\'Hiroshima à l\'âge de sept ans, formé aux arts graphiques à Tokyo puis à l\'École de la Chambre Syndicale à Paris, il travaille comme assistant chez Guy Laroche et Hubert de Givenchy. En 1970, il fonde le Miyake Design Studio et commence à présenter ses collections à Paris dès 1973. Créateur d\'une synthèse révolutionnaire entre tradition ancestrale nippone (origami, papier washi, tissages sashimi) et haute technologie industrielle, il invente en 1993 la ligne universelle « Pleats Please » et en 1998 le procédé révolutionnaire « A-POC » (A Piece of Cloth), redéfinissant à jamais la relation entre le corps et le textile.',
    innovations: [
      'Révolution technologique du plissé permanent « Pleats Please » (1993) : vêtement d\'abord taillé et cousu à 2,5 fois sa taille puis plissé à chaud sous presse',
      'Invention du procédé révolutionnaire « A-POC » (A Piece of Cloth, 1998) générant un vêtement fini d\'un seul tenant à partir d\'un fil informatique continu',
      'Sublimation des matériaux pauvres et traditionnels (papier washi, bambou, crin, plastique moulé) combinés aux fibres synthétiques à mémoire de forme',
      'Vêtements universels, légers, infroissables et affranchis des contraintes de taille anatomique'
    ],
    iconicCreations: [
      'La collection permanente « Pleats Please » (1993) portée par des danseurs de William Forsythe',
      'Le bustier sculptural moulé en fibre de verre et plastique rouge (1980)',
      'Le manteau origami en papier washi (1982)',
      'Le flacon cône épuré du parfum L\'Eau d\'Issey (1992)'
    ],
    historicalInfluence: 'L\'un des plus grands maîtres du design textile mondial du XXe siècle, ayant aboli la distinction entre art contemporain, technologie et prêt-à-porter universel.',
    quote: 'Le design n\'est pas pour la philosophie ; il est pour la vie.',
    images: [
      {
        id: 'IMG_DES_MIYAKE',
        title: 'Issey Miyake lors de son exposition rétrospective à Tokyo',
        author: 'Archives Miyake / Wikimedia Commons',
        year: '2016',
        institution: 'The National Art Center Tokyo / Palais Galliera',
        license: 'CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org',
        imageUrl: '/images/historical/issey_miyake_portrait.jpg',
        caption: 'Issey Miyake (1938-2022), le génie japonais qui a révolutionné la mode parisienne avec Pleats Please et A-POC.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_MAD_PARIS', 'SRC_GALLIERA', 'SRC_MET_COSTUME']
  },
  {
    id: 'DES_CASTELBAJAC',
    name: 'Jean-Charles de Castelbajac',
    birthYear: 1949,
    nationality: 'Française',
    fashionHouse: 'Maison Jean-Charles de Castelbajac (Paris)',
    activeDecades: ['1970s', '1980s', '1990s', '2000s', '2010s'],
    periodIds: ['PER_XX_1970_1980', 'PER_XX_1980_1990', 'PER_XX_1990_2000'],
    biography: 'Issu d\'une ancienne lignée de la noblesse gasconne, Jean-Charles de Castelbajac commence sa carrière en 1968 en taillant sa première veste dans la couverture en laine de son pensionnat d\'enfance. Pionnier absolu de l\'Artwear, il fait collaborer des figures majeures de l\'art contemporain (Keith Haring, Jean-Michel Basquiat, Robert Mapplethorpe, Ben). Passionné d\'héraldique médiévale, il dynamite la haute couture avec ses couleurs primaires (bleu, jaune, rouge), ses détournements de personnages de dessins animés (Snoopy, Kermit la grenouille) et son goût pour les matériaux de récupération. En 1997, il habille le pape Jean-Paul II et 500 évêques avec des chasubles ornées de croix multicolores pour les JMJ de Paris.',
    innovations: [
      'Invention du concept d\'« Artwear » fusionnant les tableaux d\'artistes contemporains (Haring, Basquiat) avec le vêtement de couture',
      'Détournement pionnier d\'objets populaires et de matériaux pauvres : couvertures militaires, pansements, serpillières, nounours en peluche',
      'Chromatisme héraldique éclatant reposant sur la triade de couleurs primaires (rouge, jaune, bleu)',
      'Habilleur liturgique officiel du pape Jean-Paul II et de l\'épiscopat mondial pour les JMJ de 1997'
    ],
    iconicCreations: [
      'Le manteau mythique « Doudou » en ours en peluche Teddy Bear (1989), immortalisé par Diana Ross et Lady Gaga',
      'Le poncho de survie pour deux personnes confectionné en couverture de l\'armée',
      'La robe tableau peinte à quatre mains avec Keith Haring et Jean-Michel Basquiat (1984)',
      'Les chasubles aux croix arc-en-ciel pour le pape Jean-Paul II aux JMJ de Paris (1997)'
    ],
    historicalInfluence: 'Pape du pop art et de l\'artwear français, il a prouvé que la mode pouvait être espiègle, politique, subversive et poétique sans jamais perdre sa noblesse artisanale.',
    quote: 'Mon rôle a toujours été de détourner le quotidien pour en faire de la poésie.',
    images: [
      {
        id: 'IMG_DES_CASTELBAJAC',
        title: 'Portrait de Jean-Charles de Castelbajac par Nicola Pianalto',
        author: 'Nicola Pianalto / Wikimedia Commons',
        year: '2015',
        institution: 'Archives Castelbajac / Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org',
        imageUrl: '/images/historical/jean_charles_de_castelbajac_portrait.jpg',
        caption: 'Jean-Charles de Castelbajac (né en 1949), le pionnier du Pop Art vestimentaire et du manteau en peluches.',
        type: 'patrimoine'
      }
    ],
    sourceIds: ['SRC_GALLIERA', 'SRC_MAD_PARIS']
  }
];
