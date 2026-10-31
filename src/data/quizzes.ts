import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'QUIZ_01',
    century: 16,
    category: 'structures',
    difficulty: 'Facile',
    question: 'Quelle armature rigide en cerceaux d\'osier ou de jonc donnait à la jupe de la Renaissance sa forme conique caractéristique ?',
    options: ['La crinoline cage', 'Le vertugadin', 'Le panier à coudes', 'La tournure'],
    correctIndex: 1,
    explanation: 'Le vertugadin (de l\'espagnol verdugado, car confectionné à l\'origine avec de jeunes pousses de bois vertes) apparaît en Espagne au XVe siècle avant de conquérir la cour de France au XVIe siècle.',
    historicalFact: 'Sous Henri III, le vertugadin français en tambour formait un véritable plateau horizontal autour des hanches, sur lequel la robe s\'étendait perpendiculairement.'
  },
  {
    id: 'QUIZ_02',
    century: 16,
    category: 'accessoires',
    difficulty: 'Intermédiaire',
    question: 'Comment nommait-on la grande collerette plissée empesée à l\'amidon portée au XVIe siècle par Catherine de Médicis et sa cour ?',
    options: ['La berthe', 'La fraise', 'L\'engageante', 'Le rabat'],
    correctIndex: 1,
    explanation: 'La fraise, apparue sous forme d\'une petite ruche sous François Ier, s\'hypertrophie sous Henri III pour devenir une immense roue de meule plissée au fer chaud.',
    historicalFact: 'L\'amidonnage à l\'empoi de blé exigeait un tel savoir-faire que les blanchisseuses d\'élite flamandes étaient courtisées à prix d\'or par les aristocrates français.'
  },
  {
    id: 'QUIZ_03',
    century: 17,
    category: 'silhouettes',
    difficulty: 'Intermédiaire',
    question: 'Quelle célèbre coiffure verticale montée sur armature métallique domina la fin du règne de Louis XIV vers 1680–1700 ?',
    options: ['Le pouf à la Belle Poule', 'La coiffure à la Fontange', 'Le chignon à la Titus', 'La coiffure à la girafe'],
    correctIndex: 1,
    explanation: 'La coiffure à la Fontange tire son nom de Marie-Angélique de Scorailles, duchesse de Fontanges, favorite du Roi-Soleil, qui attacha ses cheveux avec un ruban après avoir perdu sa coiffe lors d\'une chasse royale.',
    historicalFact: 'À son apogée, la Fontange pouvait mesurer jusqu\'à 60 centimètres de haut et nécessitait une armature en fil de laiton appelée le « commode ».'
  },
  {
    id: 'QUIZ_04',
    century: 18,
    category: 'vêtements',
    difficulty: 'Facile',
    question: 'Quelle est la particularité anatomique la plus célèbre de la « Robe à la française » du XVIIIe siècle ?',
    options: ['Des manches gigot rembourrées', 'De grands plis Watteau doubles coulant librement au dos', 'Une mini-jupe asymétrique', 'Une traîne tenue par un petit singe'],
    correctIndex: 1,
    explanation: 'Les plis Watteau, nommés d\'après les toiles du peintre Antoine Watteau, naissent à l\'encolure dorsale et retombent en une cascade continue jusqu\'au sol sans couture à la taille.',
    historicalFact: 'La robe à la française était portée sur des paniers à coudes qui étendaient la jupe sur les flancs tout en gardant le devant strictement plat.'
  },
  {
    id: 'QUIZ_05',
    century: 18,
    category: 'créateurs',
    difficulty: 'Facile',
    question: 'Qui était la modiste attitrée de la reine Marie-Antoinette, souvent qualifiée de première « ministre de la Mode » ?',
    options: ['Jeanne Paquin', 'Rose Bertin', 'Gabrielle Chanel', 'Elsa Schiaparelli'],
    correctIndex: 1,
    explanation: 'Rose Bertin (1747-1813) tenait la boutique « Au Grand Mogol » rue Saint-Honoré à Paris. Elle fut la première marchande de modes à devenir une célébrité internationale.',
    historicalFact: 'Rose Bertin présentait ses créations aux cours étrangères en expédiant les « poupées de Pandore », mannequins vêtus des dernières modes parisiennes.'
  },
  {
    id: 'QUIZ_06',
    century: 18,
    category: 'chronologie',
    difficulty: 'Intermédiaire',
    question: 'Pourquoi les femmes de la Révolution et du Directoire (1795–1800) adoptèrent-elles la robe-chemise blanche en mousseline ?',
    options: ['Parce que la soie avait été totalement détruite par un parasite', 'Pour imiter la pureté démocratique et la statuaire de la Grèce antique', 'Parce que les lois religieuses imposaient le blanc', 'Pour dissimuler des armes sous les plis'],
    correctIndex: 1,
    explanation: 'La Révolution rejeta les soieries et corsets associés à l\'oppression monarchique pour s\'inspirer des idéaux républicains d\'Athènes et de Rome théorisés par le peintre David.',
    historicalFact: 'Certaines élégantes du Directoire, les « Merveilleuses », humidifiaient légèrement leur robe de mousseline pour qu\'elle colle au corps à la manière des statues grecques.'
  },
  {
    id: 'QUIZ_07',
    century: 19,
    category: 'vêtements',
    difficulty: 'Facile',
    question: 'Quelle manche volumineuse aux épaules, s\'étrécissant brutalement au poignet, triompha sous la Restauration vers 1830 puis dans les années 1890 ?',
    options: ['La manche pagode', 'La manche raglan', 'La manche gigot', 'La manche chauve-souris'],
    correctIndex: 2,
    explanation: 'La manche gigot, inspirée des costumes de la Renaissance, équilibrait la taille en sablier du romantisme en créant une carrure spectaculaire soutenue par des coussins d\'épaule en crin.',
    historicalFact: 'On l\'appelait aussi « manche à l\'éléphant » ou « manche à l\'imbécile » lorsqu\'elle tombait mollement sans armature.'
  },
  {
    id: 'QUIZ_08',
    century: 19,
    category: 'structures',
    difficulty: 'Facile',
    question: 'En quelle matière la crinoline cage brevetée en 1856 par Tavernier et adoptée par Charles Frederick Worth était-elle principalement fabriquée ?',
    options: ['En fanons de baleine lourds', 'En lames d\'acier flexible à ressorts', 'En bambou séché d\'Asie', 'En fils d\'or tressés'],
    correctIndex: 1,
    explanation: 'L\'utilisation de cerceaux d\'acier flexible laminé permit de supprimer les dix jupons de toile empesée tout en conférant à la jupe un diamètre majestueux et léger.',
    historicalFact: 'La crinoline cage permettait un balancement gracieux à la marche, mais était redoutée en cas de coup de vent soudain dans la rue !'
  },
  {
    id: 'QUIZ_09',
    century: 19,
    category: 'créateurs',
    difficulty: 'Intermédiaire',
    question: 'Quel couturier d\'origine britannique fonda la Maison Worth rue de la Paix et est reconnu comme le père de la Haute Couture parisienne ?',
    options: ['Paul Poiret', 'Charles Frederick Worth', 'Jacques Doucet', 'Redfern'],
    correctIndex: 1,
    explanation: 'Charles Frederick Worth (1825-1895) instaura le défilé sur mannequins vivants, la signature de ses pièces par une griffe textile et la Chambre Syndicale de la Haute Couture en 1868.',
    historicalFact: 'L\'impératrice Eugénie fut sa cliente la plus prestigieuse, lançant mondialement ses créations lors des bals des Tuileries.'
  },
  {
    id: 'QUIZ_10',
    century: 19,
    category: 'structures',
    difficulty: 'Intermédiaire',
    question: 'Quelle structure arrière mécanique remplaça la crinoline sphérique dans les années 1870–1880 pour projeter la traîne vers l\'arrière ?',
    options: ['Le panier à guéridon', 'La tournure (ou faux-cul)', 'Le vertugadin à tambour', 'La crinoline de guerre'],
    correctIndex: 1,
    explanation: 'La tournure, composée de demi-cerceaux d\'acier ou de coussins de crin lacés aux reins, créait une cambrure lombaire accentuée tout en maintenant le devant de la robe plat.',
    historicalFact: 'Vers 1885, la seconde tournure formait un plateau horizontal si saillant que la chronique mondaine prétendait qu\'on pouvait y poser un plateau de thé.'
  },
  {
    id: 'QUIZ_11',
    century: 20,
    category: 'créateurs',
    difficulty: 'Facile',
    question: 'Quel couturier parisien revendiqua avoir « libéré la femme du corset » dès 1906 avant d\'introduire l\'orientalisme des Ballets Russes ?',
    options: ['Christian Dior', 'Paul Poiret', 'Pierre Cardin', 'André Courrèges'],
    correctIndex: 1,
    explanation: 'Paul Poiret supprima le corset pour sa collection de 1906 avec la robe « Vague » et lança la jupe entravée, la robe abat-jour et les turbans orientaux.',
    historicalFact: 'Poiret fut aussi le premier couturier à lancer son propre parfum (Les Parfums de Rosine) et un atelier d\'arts décoratifs (Atelier Martine).'
  },
  {
    id: 'QUIZ_12',
    century: 20,
    category: 'vêtements',
    difficulty: 'Facile',
    question: 'En quelle année Gabrielle « Coco » Chanel créa-t-elle la célèbre Petite Robe Noire (LBD), saluée comme la « Ford de la mode » ?',
    options: ['1912', '1926', '1947', '1968'],
    correctIndex: 1,
    explanation: 'En octobre 1926, le magazine américain Vogue publie le croquis de la petite robe noire de Chanel en prédisant qu\'elle deviendrait l\'uniforme de toutes les femmes de goût.',
    historicalFact: 'Avant Chanel, le noir était strictement réservé au deuil familial et au personnel de maison (gouvernantes et serveuses).'
  },
  {
    id: 'QUIZ_13',
    century: 20,
    category: 'silhouettes',
    difficulty: 'Intermédiaire',
    question: 'Quelle prouesse technique de coupe géométrique inventée par Madeleine Vionnet permettait au tissu d\'épouser les courbes sans aucune fermeture ?',
    options: ['La coupe en plein biais (à 45 degrés)', 'Le pli Watteau', 'Le plissé Soleil', 'Le patronage laser'],
    correctIndex: 0,
    explanation: 'La coupe en biais utilise l\'élasticité naturelle de la trame du tissu coupée à 45° pour mouler le corps comme une seconde peau sans agrafe ni baleine.',
    historicalFact: 'Madeleine Vionnet concevait tous ses modèles directement en trois dimensions sur une poupée articulée en bois d\'environ 80 centimètres.'
  },
  {
    id: 'QUIZ_14',
    century: 20,
    category: 'silhouettes',
    difficulty: 'Facile',
    question: 'Comment la journaliste américaine Carmel Snow baptisa-t-elle le défilé triomphal de Christian Dior le 12 février 1947 ?',
    options: ['The French Touch', 'The New Look', 'The Belle Époque', 'The Golden Age'],
    correctIndex: 1,
    explanation: 'Après le défilé de la ligne Corolle présentant le Tailleur Bar, Carmel Snow s\'exclama : « It\'s quite a revolution, dear Christian, your dresses have such a new look ! »',
    historicalFact: 'Le New Look réintroduisit la guêpière, les hanches rembourrées et des métrages de tissu somptueux (jusqu\'à 12 mètres pour une jupe) après l\'austérité de la guerre.'
  },
  {
    id: 'QUIZ_15',
    century: 20,
    category: 'vêtements',
    difficulty: 'Facile',
    question: 'Quelle pièce maîtresse du vestiaire masculin de soirée Yves Saint Laurent offrit-il aux femmes pour la première fois en 1966 ?',
    options: ['Le chapeau haut-de-forme', 'Le smoking', 'Le kilt écossais', 'La redingote de chasseur'],
    correctIndex: 1,
    explanation: 'Le smoking d\'Yves Saint Laurent (Automne-Hiver 1966) en grain de poudre noir avec revers de satin devint l\'arme suprême d\'autorité et de séduction féminine.',
    historicalFact: 'Des clientes célèbres comme Nan Kempner se virent refuser l\'entrée de restaurants new-yorkais chics parce qu\'elles portaient le pantalon de smoking Saint Laurent.'
  },
  {
    id: 'QUIZ_16',
    century: 20,
    category: 'vêtements',
    difficulty: 'Facile',
    question: 'Quel couturier parisien associa la mini-jupe géométrique, les bottes plates en vinyle blanc et les lunettes hublot dans sa collection spatiale de 1964 ?',
    options: ['André Courrèges', 'Pierre Balmain', 'Hubert de Givenchy', 'Jacques Fath'],
    correctIndex: 0,
    explanation: 'André Courrèges, ancien élève de Balenciaga, introduisit la mini-jupe dans la haute couture française et créa une silhouette athlétique futuriste.',
    historicalFact: 'Courrèges refusa les talons hauts qu\'il jugeait contraires à la santé des femmes, leur préférant des bottines plates adaptées à la conduite automobile.'
  },
  {
    id: 'QUIZ_17',
    century: 20,
    category: 'créateurs',
    difficulty: 'Facile',
    question: 'Pour quelle chanteuse planétaire Jean Paul Gaultier conçut-il le célèbre corset en satin rose à seins coniques lors de sa tournée de 1990 ?',
    options: ['Céline Dion', 'Madonna', 'Cher', 'Whitney Houston'],
    correctIndex: 1,
    explanation: 'Jean Paul Gaultier créa les costumes du Blond Ambition Tour de Madonna en 1990, propulsant le corset aux seins coniques au rang d\'icône de la pop culture mondiale.',
    historicalFact: 'Gaultier avait déjà imaginé ce corset conique dans son enfance... en l\'essayant sur son ours en peluche nommé Nana !'
  },
  {
    id: 'QUIZ_18',
    century: 21,
    category: 'créateurs',
    difficulty: 'Intermédiaire',
    question: 'Quelle créatrice française, lauréate du Prix LVMH en 2017, a fait de l\'upcycling et de l\'imprimé croissant de lune sa signature mondiale ?',
    options: ['Marine Serre', 'Isabel Marant', 'Jeanne Damas', 'Chantal Thomass'],
    correctIndex: 0,
    explanation: 'Marine Serre régénère des draps anciens, des couvertures jacquard et des foulards de soie pour créer une haute couture éco-responsable et futuriste.',
    historicalFact: 'Son motif de croissant de lune imprimé sur des combinaisons seconde peau a été adopté par Beyoncé, Dua Lipa et Rosalia.'
  }
];
