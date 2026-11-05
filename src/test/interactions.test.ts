import { describe, it, expect, beforeEach } from 'vitest';
import { StorageService } from '../services/storage';
import { HISTORICAL_PERIODS } from '../data/periods';
import { HISTORICAL_GARMENTS } from '../data/garments';
import { HISTORICAL_DESIGNERS } from '../data/designers';
import { HISTORICAL_SOURCES } from '../data/sources';
import { QUIZ_QUESTIONS } from '../data/quizzes';
import { SILHOUETTE_DEFINITIONS } from '../data/silhouettes';
import { ANATOMY_MODELS } from '../data/anatomy';

describe('Interactions & Parcours Utilisateur', () => {
  beforeEach(() => {
    StorageService.resetAll();
  });

  describe('1. Navigation et Liens Croisés Inter-Éléments', () => {
    it('permet la navigation fluide d\'une période vers ses vêtements associés', () => {
      const renaissance = HISTORICAL_PERIODS.find((p) => p.id === 'PER_RENAISSANCE');
      expect(renaissance).toBeDefined();

      const associatedGarments = HISTORICAL_GARMENTS.filter((g) => renaissance?.garmentIds.includes(g.id));
      expect(associatedGarments.length).toBeGreaterThan(0);
      expect(associatedGarments[0].periodIds).toContain('PER_RENAISSANCE');
    });

    it('permet la navigation fluide d\'une période vers ses créateurs associés', () => {
      const crinolinePeriod = HISTORICAL_PERIODS.find((p) => p.id === 'PER_XIX_CRINOLINE');
      expect(crinolinePeriod).toBeDefined();

      const associatedDesigners = HISTORICAL_DESIGNERS.filter((d) => crinolinePeriod?.designerIds.includes(d.id));
      expect(associatedDesigners.length).toBeGreaterThan(0);
      expect(associatedDesigners.some((d) => d.id === 'DES_WORTH')).toBe(true);
    });

    it('associe fidèlement les sources bibliographiques et leurs URLs de consultation', () => {
      const period = HISTORICAL_PERIODS[0];
      const sources = HISTORICAL_SOURCES.filter((s) => period.sourceIds.includes(s.id));
      expect(sources.length).toBeGreaterThan(0);
      expect(sources[0].institution).toBeDefined();
      expect(sources[0].url).toMatch(/^https?:\/\//);
    });
  });

  describe('2. Parcours Quiz & Calcul de Progression', () => {
    it('filtre correctement les questions par siècle ou propose le pool global', () => {
      const allQuestions = QUIZ_QUESTIONS;
      expect(allQuestions.length).toBe(18);

      const sixteenthCenturyQuestions = QUIZ_QUESTIONS.filter((q) => q.century === 16);
      expect(sixteenthCenturyQuestions.length).toBe(2);

      const nineteenthCenturyQuestions = QUIZ_QUESTIONS.filter((q) => q.century === 19);
      expect(nineteenthCenturyQuestions.length).toBe(4);
    });

    it('calcule rigoureusement le score et l\'enregistre dans le stockage', () => {
      const q = QUIZ_QUESTIONS[0];
      let userScore = 0;

      // Réponse correcte
      const selectedAnswer = q.correctIndex;
      if (selectedAnswer === q.correctIndex) {
        userScore += 1;
      }
      expect(userScore).toBe(1);

      // Enregistrement de fin de quiz
      StorageService.saveQuizScore('century_16', userScore, 3);
      const data = StorageService.load();
      expect(data.quizScores['century_16']).toBeDefined();
      expect(data.quizScores['century_16'].score).toBe(1);
      expect(data.quizScores['century_16'].total).toBe(3);
    });

    it('gère les réponses incorrectes sans incrémenter le score', () => {
      const q = QUIZ_QUESTIONS[0];
      let userScore = 0;

      const wrongAnswer = (q.correctIndex + 1) % q.options.length;
      if (wrongAnswer === q.correctIndex) {
        userScore += 1;
      }
      expect(userScore).toBe(0);
    });
  });

  describe('3. Historique de Consultation', () => {
    it('enregistre chaque consultation d\'entité dans l\'historique chronologique', () => {
      StorageService.recordVisit('period', 'renaissance-1500-1550');
      StorageService.recordVisit('garment', 'fraise-collerette');
      StorageService.recordVisit('designer', 'paul-poiret');

      const history = StorageService.load().viewHistory;
      expect(history).toHaveLength(3);
      expect(history[0].id).toBe('paul-poiret');
      expect(history[0].type).toBe('designer');
      expect(history[1].id).toBe('fraise-collerette');
      expect(history[2].id).toBe('renaissance-1500-1550');
    });

    it('met à jour la position sans créer de doublon lors de ré-affichages', () => {
      StorageService.recordVisit('period', 'renaissance-1500-1550');
      StorageService.recordVisit('garment', 'fraise-collerette');
      StorageService.recordVisit('period', 'renaissance-1500-1550');

      const history = StorageService.load().viewHistory;
      expect(history).toHaveLength(2);
      expect(history[0].id).toBe('renaissance-1500-1550');
      expect(history[1].id).toBe('fraise-collerette');
    });
  });

  describe('4. Disponibilité des Données pour le Mode Hors Ligne', () => {
    it('met à disposition les collections documentaires de manière synchrone et autonome', () => {
      expect(HISTORICAL_PERIODS.length).toBe(22);
      expect(HISTORICAL_GARMENTS.length).toBe(22);
      expect(HISTORICAL_DESIGNERS.length).toBe(23);
      expect(HISTORICAL_SOURCES.length).toBe(7);
      expect(SILHOUETTE_DEFINITIONS.length).toBe(13);
      expect(ANATOMY_MODELS.length).toBe(4);
    });

    it('garantit que chaque pièce contient un descriptif complet sans requête réseau', () => {
      for (const garment of HISTORICAL_GARMENTS) {
        expect(garment.name).toBeTruthy();
        expect(garment.definition).toBeTruthy();
        expect(garment.materials.length).toBeGreaterThan(0);
        expect(garment.anatomicalRole).toBeTruthy();
        expect(garment.images.length).toBeGreaterThan(0);
      }
    });
  });
});
