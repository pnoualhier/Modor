import { HISTORICAL_PERIODS } from '../data/periods';
import { HISTORICAL_GARMENTS } from '../data/garments';
import { HISTORICAL_DESIGNERS } from '../data/designers';
import { HISTORICAL_SOURCES } from '../data/sources';
import { SILHOUETTE_DEFINITIONS } from '../data/silhouettes';
import { QUIZ_QUESTIONS } from '../data/quizzes';
import { ANATOMY_MODELS } from '../data/anatomy';
import { ImageCredit } from '../types';

export type IssueLevel = 'error' | 'warning' | 'info';

export interface ValidationIssue {
  code: string;
  level: IssueLevel;
  message: string;
  entityType?: 'period' | 'garment' | 'designer' | 'source' | 'silhouette' | 'quiz' | 'anatomy' | 'image';
  entityId?: string;
}

export interface ValidationReport {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  infos: string[];
  issues: ValidationIssue[];
  stats: {
    periodsCount: number;
    garmentsCount: number;
    designersCount: number;
    sourcesCount: number;
    silhouettesCount: number;
    quizzesCount: number;
    anatomyModelsCount: number;
    totalImagesReferenced: number;
    imagesWithCompleteProvenance: number;
  };
}

export function validateEncyclopediaIntegrity(): ValidationReport {
  const issues: ValidationIssue[] = [];

  function addIssue(
    level: IssueLevel,
    code: string,
    message: string,
    entityType?: ValidationIssue['entityType'],
    entityId?: string
  ) {
    issues.push({ level, code, message, entityType, entityId });
  }

  // Check unique IDs
  const periodIds = new Set<string>();
  const garmentIds = new Set<string>();
  const designerIds = new Set<string>();
  const sourceIds = new Set<string>();
  const silhouetteIds = new Set<string>();
  const quizIds = new Set<string>();
  const referencedImageUrls = new Set<string>();
  let imagesWithCompleteProvenance = 0;

  function validateImageMetadata(
    img: ImageCredit,
    parentType: ValidationIssue['entityType'],
    parentId: string
  ) {
    if (!img.id) {
      addIssue('error', 'MISSING_IMAGE_ID', `Image sans identifiant dans ${parentType} ${parentId}`, 'image', parentId);
    }

    if (!img.imageUrl) {
      addIssue('error', 'MISSING_IMAGE_URL', `Image ${img.id || 'sans id'} dans ${parentType} ${parentId} sans URL`, 'image', img.id || parentId);
      return;
    }

    referencedImageUrls.add(img.imageUrl);

    if (!img.imageUrl.startsWith('/images/')) {
      addIssue('warning', 'EXTERNAL_IMAGE_URL', `Image ${img.imageUrl} n'est pas dans le répertoire local /images/`, 'image', img.id);
    }

    const validExtensions = ['.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif'];
    const hasValidExt = validExtensions.some((ext) => img.imageUrl.toLowerCase().endsWith(ext));
    if (!hasValidExt) {
      addIssue('warning', 'UNRECOGNIZED_IMAGE_EXTENSION', `Format d'image non conventionnel : ${img.imageUrl}`, 'image', img.id);
    }

    if (!img.title || img.title.trim() === '') {
      addIssue('error', 'MISSING_IMAGE_TITLE', `Image ${img.id} sans titre descriptif`, 'image', img.id);
    }

    if (!img.institution || img.institution.trim() === '') {
      addIssue('error', 'MISSING_IMAGE_INSTITUTION', `Image ${img.id} sans institution de provenance`, 'image', img.id);
    }

    if (!img.license || img.license.trim() === '') {
      addIssue('error', 'MISSING_IMAGE_LICENSE', `Image ${img.id} sans statut juridique / licence explicite`, 'image', img.id);
    }

    if (!img.caption || img.caption.trim() === '') {
      addIssue('warning', 'MISSING_IMAGE_CAPTION', `Image ${img.id} sans légende historique détaillée`, 'image', img.id);
    }

    if (!img.type || !['patrimoine', 'schema', 'reconstitution'].includes(img.type)) {
      addIssue('warning', 'INVALID_IMAGE_TYPE', `Image ${img.id} type d'illustration non reconnu : ${img.type}`, 'image', img.id);
    }

    // Check complete provenance
    if (img.title && img.institution && img.license && img.caption && img.imageUrl) {
      imagesWithCompleteProvenance++;
    }
  }

  // 1. Sources check
  HISTORICAL_SOURCES.forEach((source) => {
    if (sourceIds.has(source.id)) {
      addIssue('error', 'DUPLICATE_SOURCE_ID', `Identifiant de source dupliqué : ${source.id}`, 'source', source.id);
    }
    sourceIds.add(source.id);
    if (!source.title || !source.institution) {
      addIssue('error', 'INCOMPLETE_SOURCE', `Source ${source.id} sans titre ou institution`, 'source', source.id);
    }
    if (source.url && !source.url.startsWith('http://') && !source.url.startsWith('https://')) {
      addIssue('warning', 'MALFORMED_SOURCE_URL', `Source ${source.id} possède une URL non HTTP(S) : ${source.url}`, 'source', source.id);
    }
  });

  // 2. Garments check
  HISTORICAL_GARMENTS.forEach((garment) => {
    if (garmentIds.has(garment.id)) {
      addIssue('error', 'DUPLICATE_GARMENT_ID', `Identifiant de vêtement dupliqué : ${garment.id}`, 'garment', garment.id);
    }
    garmentIds.add(garment.id);

    if (!garment.name || !garment.definition) {
      addIssue('error', 'INCOMPLETE_GARMENT', `Vêtement ${garment.id} sans nom ou définition`, 'garment', garment.id);
    }

    if (!garment.periodIds || garment.periodIds.length === 0) {
      addIssue('warning', 'ORPHAN_GARMENT', `Vêtement ${garment.id} n'est rattaché à aucune période`, 'garment', garment.id);
    }

    if (!garment.sourceIds || garment.sourceIds.length === 0) {
      addIssue('warning', 'UNREFERENCED_GARMENT_SOURCE', `Vêtement ${garment.id} sans source documentaire bibliographique rattachée`, 'garment', garment.id);
    } else {
      garment.sourceIds.forEach((srcId) => {
        if (!sourceIds.has(srcId)) {
          addIssue('warning', 'MISSING_SOURCE_REF', `Vêtement ${garment.id} référence une source inexistante : ${srcId}`, 'garment', garment.id);
        }
      });
    }

    if (!garment.images || garment.images.length === 0) {
      addIssue('warning', 'GARMENT_WITHOUT_IMAGE', `Vêtement ${garment.id} sans image d'illustration`, 'garment', garment.id);
    } else {
      garment.images.forEach((img) => validateImageMetadata(img, 'garment', garment.id));
    }
  });

  // 3. Designers check
  HISTORICAL_DESIGNERS.forEach((designer) => {
    if (designerIds.has(designer.id)) {
      addIssue('error', 'DUPLICATE_DESIGNER_ID', `Identifiant de créateur dupliqué : ${designer.id}`, 'designer', designer.id);
    }
    designerIds.add(designer.id);

    if (!designer.name || !designer.biography) {
      addIssue('error', 'INCOMPLETE_DESIGNER', `Créateur ${designer.id} sans nom ou biographie`, 'designer', designer.id);
    }

    if (designer.deathYear && designer.birthYear > designer.deathYear) {
      addIssue('error', 'INVALID_DATES', `Créateur ${designer.id} : date de naissance supérieure au décès`, 'designer', designer.id);
    }

    if (!designer.sourceIds || designer.sourceIds.length === 0) {
      addIssue('warning', 'UNREFERENCED_DESIGNER_SOURCE', `Créateur ${designer.id} sans source documentaire bibliographique rattachée`, 'designer', designer.id);
    } else {
      designer.sourceIds.forEach((srcId) => {
        if (!sourceIds.has(srcId)) {
          addIssue('warning', 'MISSING_SOURCE_REF', `Créateur ${designer.id} référence une source inexistante : ${srcId}`, 'designer', designer.id);
        }
      });
    }

    designer.images?.forEach((img) => validateImageMetadata(img, 'designer', designer.id));
  });

  // 4. Periods check
  HISTORICAL_PERIODS.forEach((period) => {
    if (periodIds.has(period.id)) {
      addIssue('error', 'DUPLICATE_PERIOD_ID', `Identifiant de période dupliqué : ${period.id}`, 'period', period.id);
    }
    periodIds.add(period.id);

    if (period.startYear > period.endYear) {
      addIssue('error', 'INVALID_PERIOD_YEARS', `Période ${period.id} : années incohérentes (${period.startYear} > ${period.endYear})`, 'period', period.id);
    }

    if (!period.title || !period.historicalContext || !period.socialContext) {
      addIssue('error', 'INCOMPLETE_PERIOD', `Période ${period.id} manque de champs historiques obligatoires`, 'period', period.id);
    }

    // Bidirectional check: garmentIds
    period.garmentIds.forEach((gId) => {
      if (!garmentIds.has(gId)) {
        addIssue('error', 'UNRESOLVED_GARMENT_REF', `Période ${period.id} référence un vêtement inexistant : ${gId}`, 'period', period.id);
      }
    });

    // Bidirectional check: designerIds
    period.designerIds.forEach((dId) => {
      if (!designerIds.has(dId)) {
        addIssue('error', 'UNRESOLVED_DESIGNER_REF', `Période ${period.id} référence un créateur inexistant : ${dId}`, 'period', period.id);
      }
    });

    period.sourceIds.forEach((sId) => {
      if (!sourceIds.has(sId)) {
        addIssue('warning', 'MISSING_SOURCE_REF', `Période ${period.id} référence une source inexistante : ${sId}`, 'period', period.id);
      }
    });

    period.images?.forEach((img) => validateImageMetadata(img, 'period', period.id));
  });

  // 5. Bidirectional garments -> periods check
  HISTORICAL_GARMENTS.forEach((garment) => {
    garment.periodIds.forEach((pId) => {
      if (!periodIds.has(pId)) {
        addIssue('error', 'UNRESOLVED_PERIOD_REF', `Vêtement ${garment.id} référence une période inexistante : ${pId}`, 'garment', garment.id);
      }
    });
  });

  // 6. Silhouettes check
  SILHOUETTE_DEFINITIONS.forEach((sil) => {
    if (silhouetteIds.has(sil.id)) {
      addIssue('error', 'DUPLICATE_SILHOUETTE_ID', `Identifiant de silhouette dupliqué : ${sil.id}`, 'silhouette', sil.id);
    }
    silhouetteIds.add(sil.id);

    if (!periodIds.has(sil.periodId)) {
      addIssue('error', 'UNRESOLVED_PERIOD_FOR_SILHOUETTE', `Silhouette ${sil.id} référence une période inexistante : ${sil.periodId}`, 'silhouette', sil.id);
    }

    if (!sil.svgModel || !sil.svgModel.understructureShape) {
      addIssue('error', 'MISSING_SILHOUETTE_MODEL', `Silhouette ${sil.id} manque du modèle vectoriel svgModel`, 'silhouette', sil.id);
    }
  });

  // 7. Quizzes check
  QUIZ_QUESTIONS.forEach((quiz) => {
    if (quizIds.has(quiz.id)) {
      addIssue('error', 'DUPLICATE_QUIZ_ID', `Identifiant de question de quiz dupliqué : ${quiz.id}`, 'quiz', quiz.id);
    }
    quizIds.add(quiz.id);

    if (quiz.correctIndex < 0 || quiz.correctIndex >= quiz.options.length) {
      addIssue('error', 'INVALID_QUIZ_ANSWER', `Quiz ${quiz.id} index de réponse valide incorrect : ${quiz.correctIndex}`, 'quiz', quiz.id);
    }

    if (!quiz.explanation) {
      addIssue('warning', 'QUIZ_WITHOUT_EXPLANATION', `Quiz ${quiz.id} sans explication historique`, 'quiz', quiz.id);
    }
  });

  // 8. Anatomy check
  ANATOMY_MODELS.forEach((model) => {
    if (!model.hotspots || model.hotspots.length === 0) {
      addIssue('error', 'EMPTY_ANATOMY_MODEL', `Modèle anatomique ${model.id} ne contient aucun point interactif`, 'anatomy', model.id);
    }
    if (!silhouetteIds.has(model.silhouetteSvgId)) {
      addIssue('error', 'UNRESOLVED_SILHOUETTE_FOR_ANATOMY', `Modèle anatomique ${model.id} référence une silhouette inexistante : ${model.silhouetteSvgId}`, 'anatomy', model.id);
    }
  });

  // Separation by level
  const errors = issues.filter((i) => i.level === 'error').map((i) => i.message);
  const warnings = issues.filter((i) => i.level === 'warning').map((i) => i.message);
  const infos = issues.filter((i) => i.level === 'info').map((i) => i.message);

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    infos,
    issues,
    stats: {
      periodsCount: HISTORICAL_PERIODS.length,
      garmentsCount: HISTORICAL_GARMENTS.length,
      designersCount: HISTORICAL_DESIGNERS.length,
      sourcesCount: HISTORICAL_SOURCES.length,
      silhouettesCount: SILHOUETTE_DEFINITIONS.length,
      quizzesCount: QUIZ_QUESTIONS.length,
      anatomyModelsCount: ANATOMY_MODELS.length,
      totalImagesReferenced: referencedImageUrls.size,
      imagesWithCompleteProvenance
    }
  };
}
