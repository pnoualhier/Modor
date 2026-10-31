import { AnatomyHotspot } from '../types';

export interface AnatomyEraModel {
  id: string;
  name: string;
  century: number;
  dates: string;
  description: string;
  silhouetteSvgId: string;
  hotspots: AnatomyHotspot[];
}

export const ANATOMY_MODELS: AnatomyEraModel[] = [
  {
    id: 'ANAT_RENAISSANCE',
    name: 'Dame de la cour des Valois (XVIe siècle)',
    century: 16,
    dates: 'vers 1580',
    description: 'Architecture rigide géométrisée de la fin de la Renaissance française sous Catherine de Médicis et Henri III.',
    silhouetteSvgId: 'SIL_RENAISSANCE',
    hotspots: [
      {
        id: 'HOT_REN_COIFFURE',
        name: 'Coiffe en cœur & perles fines',
        zone: 'coiffure',
        xPercent: 50,
        yPercent: 8,
        historicalRole: 'Dégage le front (symbole d\'intelligence humaniste) et rehausse le rang par la profusion de pierreries.',
        construction: 'Armature métallique légère arquée en forme de cœur ou de raquette, tendue de velours et semée de perles d\'eau douce.',
        materials: ['Fil de laiton', 'Velours de soie', 'Perles fines', 'Orfèvrerie émaillée'],
        usageEvolutions: 'Remplacée sous Henri IV par de petits rouleaux de cheveux relevés sur des arceaux.',
        periodsUsed: ['Renaissance (1500–1600)']
      },
      {
        id: 'HOT_REN_COL',
        name: 'Fraise tuyautée à godrons',
        zone: 'col',
        xPercent: 50,
        yPercent: 18,
        historicalRole: 'Isole la tête sur un piédestal immaculé, interdisant tout mouvement de tête brusque et imposant un port altier.',
        construction: 'Bande de fine batiste d\'Hollande de plusieurs mètres, tuyautée au fer à godronner après trempage dans l\'amidon de froment.',
        materials: ['Batiste de lin', 'Amidon de blé (empoi)', 'Fils de soie'],
        usageEvolutions: 'Passe de la discrète ruche sous François Ier à la gigantesque meule de moulin sous Henri III.',
        periodsUsed: ['Renaissance (1550–1620)']
      },
      {
        id: 'HOT_REN_MANCHES',
        name: 'Manches à crevés & bouillonné',
        zone: 'manches',
        xPercent: 26,
        yPercent: 32,
        historicalRole: 'Élargit la carrure et expose ostensiblement la blancheur et la propreté du linge de corps sous-jacent.',
        construction: 'Manches indépendantes amovibles laçées aux épaules par des aiguillettes, avec fentes longitudinales doublées de satin contrasté.',
        materials: ['Velours de Gênes', 'Satin de soie', 'Toile de lin fine', 'Aiguillettes en argent'],
        usageEvolutions: 'Très prisées sous François Ier et Henri II, elles cèdent la place aux manches à pagode au XVIIe siècle.',
        periodsUsed: ['Renaissance (1500–1600)']
      },
      {
        id: 'HOT_REN_CORSAGE',
        name: 'Corsage à pointe & pièce d\'estomac',
        zone: 'corsage',
        xPercent: 50,
        yPercent: 36,
        historicalRole: 'Crée un plastron protecteur et somptueux aplatissant les seins et attirant le regard vers le nombril.',
        construction: 'Structure trapézoïdale rigide renforcée de toiles cirées et baleines, achevée en pointe aiguë sur l\'abdomen.',
        materials: ['Brocart lamé d\'or', 'Toile forte', 'Pierres fines cousues', 'Galons d\'or'],
        usageEvolutions: 'Perdure sous forme de pièce d\'estomac épinglée jusqu\'à la fin du XVIIIe siècle.',
        periodsUsed: ['Renaissance', 'Grand Siècle', 'Rococo']
      },
      {
        id: 'HOT_REN_CORSET',
        name: 'Corps piqué et busc d\'acier',
        zone: 'corset',
        xPercent: 50,
        yPercent: 44,
        historicalRole: 'Comprime le diaphragme et redresse la colonne vertébrale pour maintenir le torse impassible.',
        construction: 'Épaisseurs de coutil assemblées à points serrés avec fente centrale pour glisser une lame de fer ou de bois gravé (le busc).',
        materials: ['Coutil fort', 'Busc d\'acier trempé ou buis', 'Cordelettes de chanvre'],
        usageEvolutions: 'Ancêtre direct du grand corps baleiné de Versailles et du corset du XIXe siècle.',
        periodsUsed: ['Renaissance (1530–1600)']
      },
      {
        id: 'HOT_REN_TAILLE',
        name: 'Taille naturelle étranglée',
        zone: 'taille',
        xPercent: 50,
        yPercent: 48,
        historicalRole: 'Point de bascule articulant le triangle supérieur du corsage et la pyramide inférieure de la jupe.',
        construction: 'Ceinture d\'orfèvrerie articulée pendant le long de la robe avec pomander (pomme de senteur parfumée).',
        materials: ['Orfèvrerie d\'or et vermeil', 'Ambre gris et musc', 'Chaînettes'],
        usageEvolutions: 'La position de la taille remontera sous le coude au Directoire avant de revenir à sa base.',
        periodsUsed: ['Renaissance', 'Baroque', 'Romantisme']
      },
      {
        id: 'HOT_REN_STRUCTURE',
        name: 'Vertugadin en cerceaux de jonc',
        zone: 'structure',
        xPercent: 68,
        yPercent: 62,
        historicalRole: 'Supporte le poids écrasant des soieries et des broderies d\'or sans qu\'elles n\'entravent la marche.',
        construction: 'Jupe de coutil intégrant des cerceaux concentriques en osier ou canne de jonc cousus dans des coulisses.',
        materials: ['Coutils', 'Osier', 'Joncs de rivière', 'Tresses de lin'],
        usageEvolutions: 'Évolue du cône espagnol vers le tambour horizontal français avant d\'être abandonné vers 1615.',
        periodsUsed: ['Renaissance (1530–1615)']
      },
      {
        id: 'HOT_REN_JUPE',
        name: 'Robe ouverte sur la cotte de soie',
        zone: 'jupe',
        xPercent: 38,
        yPercent: 74,
        historicalRole: 'Présente deux soieries précieuses coordonnées : le manteau de dessus sombre et la cotte de dessous chatoyante.',
        construction: 'Jupe coupée en trapèze, ouverte en triangle inversé sur le devant pour dévoiler le panneau de la cotte.',
        materials: ['Velours rasé', 'Damas de soie', 'Satin lourd', 'Passementeries'],
        usageEvolutions: 'Le principe de la robe ouverte sur la jupe de dessous dominera jusqu\'à la Révolution.',
        periodsUsed: ['Renaissance', 'Baroque', 'Rococo']
      },
      {
        id: 'HOT_REN_CHAUSSURES',
        name: 'Escarpins en velours et patins de liège',
        zone: 'chaussures',
        xPercent: 50,
        yPercent: 96,
        historicalRole: 'Protège les pieds des souillures du sol urbain et surélève la silhouette des nobles dames.',
        construction: 'Chaussons sans talon en cuir ou velours brodé, reposant dans des surchaussures amovibles à semelle de liège (chopines ou patins).',
        materials: ['Cuir de chevreau souple', 'Velours', 'Liège naturel', 'Feuille d\'argent'],
        usageEvolutions: 'Les talons hauts naîtront au début du XVIIe siècle sous Henri IV et Louis XIII.',
        periodsUsed: ['Renaissance (1500–1600)']
      }
    ]
  },
  {
    id: 'ANAT_ROCOCO',
    name: 'Dame de la cour de Louis XV (XVIIIe siècle)',
    century: 18,
    dates: 'vers 1765',
    description: 'La quintessence de l\'élégance rococo : robe à la française sur paniers doubles et corps à baleines.',
    silhouetteSvgId: 'SIL_ROCOCO',
    hotspots: [
      {
        id: 'HOT_ROC_COIFFURE',
        name: 'Coiffure poudrée & aigrettes',
        zone: 'coiffure',
        xPercent: 50,
        yPercent: 8,
        historicalRole: 'Maintient une petite tête harmonieuse pour équilibrer la prodigieuse largeur des hanches.',
        construction: 'Cheveux montés sur de petits postiches de crin, crantés et saupoudrés de farine de froment ou de riz parfumée.',
        materials: ['Poudre de riz parfumée', 'Fleurs artificielles de soie', 'Plumes d\'aigrette', 'Rubans'],
        usageEvolutions: 'S\'élèvera démesurément sous Marie-Antoinette avec les poufs monumentaux des années 1770.',
        periodsUsed: ['Rococo (1720–1775)']
      },
      {
        id: 'HOT_ROC_COL',
        name: 'Décolleté carré à ruché de gaze',
        zone: 'col',
        xPercent: 50,
        yPercent: 22,
        historicalRole: 'Met en valeur la blancheur de la gorge et le port d\'un collier de velours ou ruban noué.',
        construction: 'Encolure basse rectangulaire bordée d\'une fine ruche de linon ou de gaze tuyautée.',
        materials: ['Gaze de soie', 'Dentelle de Valenciennes', 'Ruban de velours noir'],
        usageEvolutions: 'Remplacé à la veille de 1789 par le grand fichu menteur croisé sur la poitrine.',
        periodsUsed: ['XVIIIe siècle']
      },
      {
        id: 'HOT_ROC_MANCHES',
        name: 'Manchettes à pagode étagées',
        zone: 'manches',
        xPercent: 22,
        yPercent: 36,
        historicalRole: 'Anime le geste des mains et souligne la préciosité des dentelles de cour.',
        construction: 'Deux ou trois volants superposés de dentelle à l\'aiguille froncés sous un brassard de soie garni de nœuds.',
        materials: ['Dentelle d\'Alençon', 'Dentelle d\'Argentan', 'Rubans de satin'],
        usageEvolutions: 'Disparaît sous la Révolution au profit des manches droites ou ballons.',
        periodsUsed: ['Rococo (1730–1780)']
      },
      {
        id: 'HOT_ROC_CORSAGE',
        name: 'Pièce d\'estomac & échelle de rubans',
        zone: 'corsage',
        xPercent: 50,
        yPercent: 34,
        historicalRole: 'Focalise le regard sur le buste par une rangée dégressive de nœuds de soie (nœuds parfaits).',
        construction: 'Triangle de soie cartonnée baleiné, épinglé au devant du corps à baleines entre les deux bords de la robe.',
        materials: ['Carton fort', 'Rubans de soie changeante', 'Broderies de cannetille d\'argent'],
        usageEvolutions: 'Intégrée directement dans le corsage avec la robe à l\'anglaise.',
        periodsUsed: ['Rococo (1715–1775)']
      },
      {
        id: 'HOT_ROC_STRUCTURE',
        name: 'Paniers doubles à coudes',
        zone: 'structure',
        xPercent: 78,
        yPercent: 56,
        historicalRole: 'Élargit la silhouette sur les flancs jusqu\'à 1,20 m sans épaissir le profil.',
        construction: 'Deux armatures latérales composées de fanons de baleine horizontaux cousus dans du coutil avec fentes de poches.',
        materials: ['Fanons de baleine boréale', 'Coutil de lin', 'Tresse de coton pour la ceinture'],
        usageEvolutions: 'Remplace le panier en cloche vers 1730 et disparaît totalement en 1789.',
        periodsUsed: ['XVIIIe siècle (1730–1789)']
      },
      {
        id: 'HOT_ROC_JUPE',
        name: 'Robe à la française (plis Watteau)',
        zone: 'jupe',
        xPercent: 32,
        yPercent: 68,
        historicalRole: 'Offre une draperie flottante au dos et déploie les soieries lyonnaises fleuries sur les paniers.',
        construction: 'Manteau de robe taillé avec deux plis doubles au dos coulant des épaules à la traîne sans couture à la taille.',
        materials: ['Pékin de soie de Lyon', 'Gros de Tours', 'Taffetas broché'],
        usageEvolutions: 'Costume universel de cérémonie dans toutes les cours européennes du XVIIIe siècle.',
        periodsUsed: ['Rococo (1720–1780)']
      },
      {
        id: 'HOT_ROC_CHAUSSURES',
        name: 'Mules à talon Louis XV en brocart',
        zone: 'chaussures',
        xPercent: 50,
        yPercent: 96,
        historicalRole: 'Affine la cambrure du cou-de-pied et accentue la démarche chaloupée sur les parquets des salons.',
        construction: 'Souliers en soie brochée avec talon incurvé en bois peint et grande boucle amovible en strass.',
        materials: ['Soie brochée', 'Bois de hêtre sculpté', 'Boucle de strass ou pierres du Rhin'],
        usageEvolutions: 'Les talons disparaîtront complètement sous la Révolution pour des sandales plates.',
        periodsUsed: ['XVIIIe siècle']
      }
    ]
  },
  {
    id: 'ANAT_CRINOLINE',
    name: 'Élégante du Second Empire (XIXe siècle)',
    century: 19,
    dates: 'vers 1860',
    description: 'La crinoline cage d\'acier flexible sous le règne de Napoléon III et de l\'impératrice Eugénie.',
    silhouetteSvgId: 'SIL_CRINOLINE',
    hotspots: [
      {
        id: 'HOT_CRI_COIFFURE',
        name: 'Bandeaux lissés & résille de velours',
        zone: 'coiffure',
        xPercent: 50,
        yPercent: 8,
        historicalRole: 'Adoucit le visage et exprime la modestie et la vertu bourgeoise victorienne et impériale.',
        construction: 'Cheveux séparés par une raie médiane nette, collés sur les oreilles à la brillantine et retenus en chignon bas.',
        materials: ['Huile de macassar', 'Chenille de velours', 'Perles de jais'],
        usageEvolutions: 'Se relèvera en chignon haut avec l\'avènement de la tournure dans les années 1870.',
        periodsUsed: ['Second Empire (1850–1868)']
      },
      {
        id: 'HOT_CRI_COL',
        name: 'Décolleté berthe en dentelle pour le bal',
        zone: 'col',
        xPercent: 50,
        yPercent: 24,
        historicalRole: 'Dégage entièrement les épaules et la nuque pour les grands bals officiels des Tuileries.',
        construction: 'Large col rabattu circulaire en dentelle ou tulle drapé encadrant l\'encolure bateau.',
        materials: ['Dentelle de Chantilly', 'Tulle de soie', 'Fleurs artificielles de camélia'],
        usageEvolutions: 'Le corsage de jour au contraire monte jusqu\'au ras du cou avec col chemisier boutonné.',
        periodsUsed: ['Second Empire (1845–1870)']
      },
      {
        id: 'HOT_CRI_MANCHES',
        name: 'Manches pagode & engageantes amovibles',
        zone: 'manches',
        xPercent: 24,
        yPercent: 40,
        historicalRole: 'S\'évase vers le bas pour laisser paraître la fraîcheur d\'une sous-manche blanche immaculée.',
        construction: 'Manche en entonnoir évasée au coude, d\'où jaillit une sous-manche de lingerie de coton amovible lavable.',
        materials: ['Taffetas de soie', 'Broderie anglaise sur batiste', 'Rubans de velours'],
        usageEvolutions: 'Remplacée par les manches droites sous la tournure.',
        periodsUsed: ['Second Empire (1850–1865)']
      },
      {
        id: 'HOT_CRI_CORSET',
        name: 'Corset Second Empire à busc métallique',
        zone: 'corset',
        xPercent: 50,
        yPercent: 38,
        historicalRole: 'Comprime la taille et modèle le buste en pointe plongeante sur l\'immensité de la jupe.',
        construction: 'Panneaux de coutil armés de baleines d\'acier trempé, busc avant s\'ouvrant par des crochets brevetés.',
        materials: ['Coutil anglais', 'Baleines d\'acier à ressorts', 'Busc métallique'],
        usageEvolutions: 'S\'allongera sur les hanches sous la forme du corset cuirasse dès 1876.',
        periodsUsed: ['Second Empire (1850–1870)']
      },
      {
        id: 'HOT_CRI_STRUCTURE',
        name: 'Crinoline cage métallique brevetée Tavernier',
        zone: 'structure',
        xPercent: 78,
        yPercent: 64,
        historicalRole: 'Révolutionne le confort : allège la jupe de 10 kg par rapport aux anciens jupons de crin superposés.',
        construction: '20 à 30 cerceaux d\'acier flexible à ressorts suspendus par des bandes verticales de tresse rivetées.',
        materials: ['Acier trempé flexible laminé', 'Tresse de coton solide', 'Rivets métalliques'],
        usageEvolutions: 'S\'aplatit sur le devant dès 1867 et concentre tout son volume en arrière pour former la tournure.',
        periodsUsed: ['Second Empire (1856–1868)']
      },
      {
        id: 'HOT_CRI_JUPE',
        name: 'Jupe à volants festonnés de taffetas',
        zone: 'jupe',
        xPercent: 30,
        yPercent: 75,
        historicalRole: 'Déploie jusqu\'à 20 mètres de tissu en une cascade de volants ondulant au gré de la marche.',
        construction: 'Jupe circulaire montée à plis tuyautés sur la ceinture, garnie de trois à cinq volants superposés.',
        materials: ['Taffetas changeant', 'Moire antique', 'Colorants d\'aniline mauve ou magenta'],
        usageEvolutions: 'Rejetée en arrière sous la tournure puis resserrée au début du XXe siècle.',
        periodsUsed: ['Second Empire (1850–1868)']
      },
      {
        id: 'HOT_CRI_CHAUSSURES',
        name: 'Bottines à boutons en chevreau verni',
        zone: 'chaussures',
        xPercent: 50,
        yPercent: 96,
        historicalRole: 'Maintient la cheville lors des mouvements amples de la crinoline et protège les pieds.',
        construction: 'Bottine montante fermée sur le côté externe par une rangée de 10 à 14 petits boutons de nacre.',
        materials: ['Cuir de chevreau verni', 'Boutons de nacre', 'Semelle de cuir fin'],
        usageEvolutions: 'Deviendra la bottine classique de toute la seconde moitié du XIXe siècle.',
        periodsUsed: ['XIXe siècle (1850–1900)']
      }
    ]
  },
  {
    id: 'ANAT_NEW_LOOK',
    name: 'Femme Corolle de Christian Dior (1947–1955)',
    century: 20,
    dates: '1947',
    description: 'La renaissance spectaculaire de la Haute Couture d\'après-guerre : taille de guêpe, hanches capitonnées et jupe corolle.',
    silhouetteSvgId: 'SIL_NEW_LOOK',
    hotspots: [
      {
        id: 'HOT_NEW_COIFFURE',
        name: 'Chapeau tambourin penché & capeline',
        zone: 'coiffure',
        xPercent: 50,
        yPercent: 8,
        historicalRole: 'Équilibre la silhouette avec raffinement et souligne la netteté du profil féminin.',
        construction: 'Feutre de poil ras ou paille fine moulée sur forme de bois, piqué de voilette en plumetis.',
        materials: ['Feutre taupé', 'Voilette de crin', 'Paille d\'Italie'],
        usageEvolutions: 'Laissera la place aux coiffures choucroute et brushings laqués des années 1960.',
        periodsUsed: ['Années 1950']
      },
      {
        id: 'HOT_NEW_COL',
        name: 'Col cranté souple de la veste Bar',
        zone: 'col',
        xPercent: 50,
        yPercent: 22,
        historicalRole: 'Adoucit la ligne du cou et met en valeur un rang de perles de culture blanches.',
        construction: 'Col tailleur arrondi non rigide taillé d\'une seule pièce avec le revers supérieur.',
        materials: ['Shantung de soie grège', 'Entoilage souple'],
        usageEvolutions: 'Opposé aux cols stricts et pointus de la mode militaire des années 1940.',
        periodsUsed: ['New Look (1947–1955)']
      },
      {
        id: 'HOT_NEW_CORSAGE',
        name: 'Veste Bar cintrée à basques capitonnées',
        zone: 'corsage',
        xPercent: 50,
        yPercent: 36,
        historicalRole: 'Construit artificiellement des hanches rondes même sur les corps les plus minces.',
        construction: 'Veste en soie sauvage avec matelassage de crin et ouate à l\'intérieur des basques.',
        materials: ['Shantung de soie', 'Crin de cheval de rembourrage', 'Boutons recouverts de tissu'],
        usageEvolutions: 'Remplacée par les vestes droites de Coco Chanel en 1954 et la robe sac de Balenciaga.',
        periodsUsed: ['New Look (1947–1955)']
      },
      {
        id: 'HOT_NEW_CORSET',
        name: 'Guêpière corsetée de Marcel Rochas',
        zone: 'corset',
        xPercent: 50,
        yPercent: 44,
        historicalRole: 'Ressert impitoyablement la taille naturelle à moins de 50 cm pour recréer la femme sablier.',
        construction: 'Bandeau élastique de coutil et satin baleiné fermant par des agrafes au dos avec jarretelles intégrées.',
        materials: ['Tissu élastique', 'Baleines d\'acier souples', 'Satin de rayonne'],
        usageEvolutions: 'Dernier sursaut de la corseterie rigide avant la libération totale des années 1960.',
        periodsUsed: ['Années 1945–1958']
      },
      {
        id: 'HOT_NEW_STRUCTURE',
        name: 'Jupon corolle raide en nylon',
        zone: 'structure',
        xPercent: 74,
        yPercent: 62,
        historicalRole: 'Soutient le drap de laine lourd de la jupe sans nécessiter d\'armature métallique de crinoline.',
        construction: 'Volants étagés en nylon rigide ou organdi empesé montés sur une ceinture élastique.',
        materials: ['Nylon synthétique raide', 'Organdi de coton'],
        usageEvolutions: 'Adopté par les jeunes femmes dans les années 1950 pour danser le rock\'n\'roll.',
        periodsUsed: ['Années 1950']
      },
      {
        id: 'HOT_NEW_JUPE',
        name: 'Jupe corolle plissée de 12 mètres',
        zone: 'jupe',
        xPercent: 32,
        yPercent: 72,
        historicalRole: 'Célèbre la fin des restrictions textiles de la guerre par un tourbillon d\'étoffe.',
        construction: 'Jupe taillée en cercle complet (jupe parapluie ou corolle), plissée à la taille et tombant à 30 cm du sol.',
        materials: ['Drap de laine peignée noire', 'Faille de soie'],
        usageEvolutions: 'Concurrencée par la jupe droite fourreau avant l\'avènement de la mini-jupe en 1965.',
        periodsUsed: ['Années 1947–1955']
      },
      {
        id: 'HOT_NEW_CHAUSSURES',
        name: 'Escarpins fins à talon aiguille stiletto',
        zone: 'chaussures',
        xPercent: 50,
        yPercent: 96,
        historicalRole: 'Affine la cheville et étire la ligne de la jambe sous la jupe à mi-mollet.',
        construction: 'Escarpin très décolleté sur le cou-de-pied avec talon fin métallique inventé par Roger Vivier.',
        materials: ['Cuir de veau box-calf noir', 'Aiguille d\'acier interne au talon'],
        usageEvolutions: 'Remplacera définitivement les lourdes semelles compensées en liège de la guerre.',
        periodsUsed: ['Années 1950 à aujourd\'hui']
      }
    ]
  }
];
