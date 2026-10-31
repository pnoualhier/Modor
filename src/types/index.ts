export type Century = 16 | 17 | 18 | 19 | 20 | 21;

export type GarmentCategory =
  | 'robes'
  | 'jupes'
  | 'corsages'
  | 'corsets'
  | 'sous-vetements'
  | 'structures'
  | 'vestes'
  | 'manteaux'
  | 'pantalons'
  | 'accessoires'
  | 'chaussures'
  | 'coiffures'
  | 'jupons';

export interface ImageCredit {
  id: string;
  title: string;
  author?: string;
  year?: string;
  institution: string;
  license: string;
  sourceUrl?: string;
  imageUrl: string;
  svgFallback?: string;
  caption: string;
  type: 'patrimoine' | 'schema' | 'reconstitution';
}

export interface SilhouetteMetrics {
  waistPosition: 'naturelle' | 'haute (Empire)' | 'basse (Années 20)' | 'très cintrée (Sablier)' | 'floue / libérée';
  waistGirth: 'très fine' | 'ajustée' | 'droite' | 'ample';
  hipsVolume: 'naturel' | 'élargi latéralement (panier)' | 'sphérique (crinoline)' | 'projeté en arrière (tournure)' | 'étroit';
  shouldersLine: 'naturelle' | 'dégagée / décolleté bateau' | 'gigot / ballonnée' | 'épaules larges / rembourrées' | 'fluide';
  skirtLength: 'au sol / traîne' | 'aux chevilles' | 'mi-mollet' | 'au genou' | 'mini (au-dessus du genou)';
  internalStructures: string[];
}

export interface Period {
  id: string;
  slug: string;
  century: Century;
  title: string;
  subtitle: string;
  startYear: number;
  endYear: number;
  shortDescription: string;
  historicalContext: string;
  socialContext: string;
  silhouetteDescription: string;
  silhouetteMetrics: SilhouetteMetrics;
  dressesDescription: string;
  clothingDescription: string;
  undergarmentsDescription: string;
  accessoriesDescription: string;
  hairstylesDescription: string;
  shoesDescription: string;
  materialsAndTechniques: string;
  colorsAndPatterns: string;
  clothingUses: string;
  socialDifferences: string;
  notableFigures: string[];
  evolutionToNext: string;
  images: ImageCredit[];
  garmentIds: string[];
  designerIds: string[];
  sourceIds: string[];
}

export interface Garment {
  id: string;
  name: string;
  category: GarmentCategory;
  periodIds: string[];
  century: Century;
  eraDates: string;
  definition: string;
  anatomicalRole: string;
  constructionDetails: string;
  materials: string[];
  socialContext: string;
  evolution: string;
  silhouetteEffect: string;
  images: ImageCredit[];
  sourceIds: string[];
}

export interface Designer {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  nationality: 'Française' | 'Britannique' | 'Espagnole' | 'Italienne' | 'Allemande';
  fashionHouse: string;
  activeDecades: string[];
  periodIds: string[];
  biography: string;
  innovations: string[];
  iconicCreations: string[];
  historicalInfluence: string;
  quote?: string;
  images: ImageCredit[];
  sourceIds: string[];
}

export interface HistoricalSource {
  id: string;
  title: string;
  author: string;
  institution: string;
  year: string;
  url?: string;
  license: string;
  notes: string;
}

export interface SilhouetteDefinition {
  id: string;
  periodId: string;
  periodTitle: string;
  eraName: string;
  century: Century;
  yearLabel: string;
  summary: string;
  svgModel: {
    headProfile: string;
    shouldersWidth: number; // 0-100 scale
    waistWidth: number;
    waistY: number;
    hipsWidth: number;
    skirtBottomWidth: number;
    skirtBottomY: number;
    understructureShape: 'conic_vertugadin' | 'baroque_mantua' | 'rococo_panier' | 'neoclassic_column' | 'crinoline_dome' | 'tournure_bustle' | 'hour_glass_s' | 'tubular_flapper' | 'bias_cut' | 'new_look_corolle' | 'trapeze_mini' | 'flare_trouser' | 'power_shoulder' | 'contemporary_fluid';
    structureName: string;
    description: string;
  };
  keyFeatures: string[];
  undergarmentStructures: string[];
}

export interface AnatomyHotspot {
  id: string;
  name: string;
  zone: 'coiffure' | 'col' | 'manches' | 'corsage' | 'corset' | 'taille' | 'jupe' | 'jupon' | 'structure' | 'chaussures';
  yPercent: number; // 0 to 100 on model
  xPercent: number;
  historicalRole: string;
  construction: string;
  materials: string[];
  usageEvolutions: string;
  periodsUsed: string[];
}

export interface QuizQuestion {
  id: string;
  century?: Century;
  category: 'chronologie' | 'vêtements' | 'structures' | 'créateurs' | 'silhouettes' | 'accessoires';
  difficulty: 'Facile' | 'Intermédiaire' | 'Érudit';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  historicalFact: string;
  image?: ImageCredit;
}

export interface UserFavorites {
  periodIds: string[];
  garmentIds: string[];
  designerIds: string[];
  quizScores: Record<string, { score: number; total: number; date: string }>;
  viewHistory: { type: 'period' | 'garment' | 'designer'; id: string; timestamp: number }[];
  notes: Record<string, string>;
}
