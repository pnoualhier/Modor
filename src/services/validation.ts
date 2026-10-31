import { HISTORICAL_PERIODS } from '../data/periods';
import { HISTORICAL_GARMENTS } from '../data/garments';
import { HISTORICAL_DESIGNERS } from '../data/designers';
import { HISTORICAL_SOURCES } from '../data/sources';
import { SILHOUETTE_DEFINITIONS } from '../data/silhouettes';
import { QUIZ_QUESTIONS } from '../data/quizzes';
import { ANATOMY_MODELS } from '../data/anatomy';

export interface ValidationReport {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    periodsCount: number;
    garmentsCount: number;
    designersCount: number;
    sourcesCount: number;
    silhouettesCount: number;
    quizzesCount: number;
    anatomyModelsCount: number;
  };
}

export function validateEncyclopediaIntegrity(): ValidationReport {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check unique IDs
  const periodIds = new Set<string>();
  const garmentIds = new Set<string>();
  const designerIds = new Set<string>();
  const sourceIds = new Set<string>();
  const silhouetteIds = new Set<string>();
  const quizIds = new Set<string>();

  // 1. Sources check
  HISTORICAL_SOURCES.forEach((source) => {
    if (sourceIds.has(source.id)) {
      errors.push(`Identifiant de source dupliqué : ${source.id}`);
    }
    sourceIds.add(source.id);
    if (!source.title || !source.institution) {
      errors.push(`Source ${source.id} sans titre ou institution`);
    }
  });

  // 2. Garments check
  HISTORICAL_GARMENTS.forEach((garment) => {
    if (garmentIds.has(garment.id)) {
      errors.push(`Identifiant de vêtement dupliqué : ${garment.id}`);
    }
    garmentIds.add(garment.id);
    if (!garment.name || !garment.definition) {
      errors.push(`Vêtement ${garment.id} sans nom ou définition`);
    }
    garment.sourceIds.forEach((srcId) => {
      if (!sourceIds.has(srcId)) {
        warnings.push(`Vêtement ${garment.id} référence une source inexistante : ${srcId}`);
      }
    });
  });

  // 3. Designers check
  HISTORICAL_DESIGNERS.forEach((designer) => {
    if (designerIds.has(designer.id)) {
      errors.push(`Identifiant de créateur dupliqué : ${designer.id}`);
    }
    designerIds.add(designer.id);
    if (!designer.name || !designer.biography) {
      errors.push(`Créateur ${designer.id} sans nom ou biographie`);
    }
    designer.sourceIds.forEach((srcId) => {
      if (!sourceIds.has(srcId)) {
        warnings.push(`Créateur ${designer.id} référence une source inexistante : ${srcId}`);
      }
    });
  });

  // 4. Periods check
  HISTORICAL_PERIODS.forEach((period) => {
    if (periodIds.has(period.id)) {
      errors.push(`Identifiant de période dupliqué : ${period.id}`);
    }
    periodIds.add(period.id);

    if (period.startYear > period.endYear) {
      errors.push(`Période ${period.id} : années incohérentes (${period.startYear} > ${period.endYear})`);
    }

    if (!period.title || !period.historicalContext || !period.socialContext) {
      errors.push(`Période ${period.id} manque de champs historiques obligatoires`);
    }

    period.garmentIds.forEach((gId) => {
      if (!garmentIds.has(gId)) {
        errors.push(`Période ${period.id} référence un vêtement inexistant : ${gId}`);
      }
    });

    period.designerIds.forEach((dId) => {
      if (!designerIds.has(dId)) {
        errors.push(`Période ${period.id} référence un créateur inexistant : ${dId}`);
      }
    });

    period.sourceIds.forEach((sId) => {
      if (!sourceIds.has(sId)) {
        warnings.push(`Période ${period.id} référence une source inexistante : ${sId}`);
      }
    });
  });

  // 5. Silhouettes check
  SILHOUETTE_DEFINITIONS.forEach((sil) => {
    if (silhouetteIds.has(sil.id)) {
      errors.push(`Identifiant de silhouette dupliqué : ${sil.id}`);
    }
    silhouetteIds.add(sil.id);
    if (!periodIds.has(sil.periodId)) {
      errors.push(`Silhouette ${sil.id} référence une période inexistante : ${sil.periodId}`);
    }
  });

  // 6. Quizzes check
  QUIZ_QUESTIONS.forEach((quiz) => {
    if (quizIds.has(quiz.id)) {
      errors.push(`Identifiant de question de quiz dupliqué : ${quiz.id}`);
    }
    quizIds.add(quiz.id);
    if (quiz.correctIndex < 0 || quiz.correctIndex >= quiz.options.length) {
      errors.push(`Quiz ${quiz.id} index de réponse valide incorrect : ${quiz.correctIndex}`);
    }
  });

  // 7. Anatomy check
  ANATOMY_MODELS.forEach((model) => {
    if (!model.hotspots || model.hotspots.length === 0) {
      errors.push(`Modèle anatomique ${model.id} ne contient aucun point interactif`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    stats: {
      periodsCount: HISTORICAL_PERIODS.length,
      garmentsCount: HISTORICAL_GARMENTS.length,
      designersCount: HISTORICAL_DESIGNERS.length,
      sourcesCount: HISTORICAL_SOURCES.length,
      silhouettesCount: SILHOUETTE_DEFINITIONS.length,
      quizzesCount: QUIZ_QUESTIONS.length,
      anatomyModelsCount: ANATOMY_MODELS.length
    }
  };
}
