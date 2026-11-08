import { describe, it, expect } from 'vitest';
import {
  METRICS,
  PERIOD_HIGHLIGHTS,
  UNIVERS_MODULES,
  GARMENT_HIGHLIGHTS,
  DESIGNER_HIGHLIGHTS,
  APPLICATION_SCREENSHOTS,
  FAQ_ITEMS,
} from '../../landing/src/data/landingData';
import { HISTORICAL_PERIODS } from '../data/periods';
import { HISTORICAL_GARMENTS } from '../data/garments';
import { HISTORICAL_DESIGNERS } from '../data/designers';
import { QUIZ_QUESTIONS } from '../data/quizzes';
import { SILHOUETTE_DEFINITIONS } from '../data/silhouettes';
import { ANATOMY_MODELS } from '../data/anatomy';

describe('Landing Page Metrics & Integrity', () => {
  it('should match exact counts of historical periods', () => {
    expect(METRICS.periodsCount).toBe(22);
    expect(HISTORICAL_PERIODS.length).toBe(22);
  });

  it('should match exact counts of garments and structures', () => {
    expect(METRICS.garmentsCount).toBe(34);
    expect(HISTORICAL_GARMENTS.length).toBe(34);
  });

  it('should match exact counts of historical designers', () => {
    expect(METRICS.designersCount).toBe(35);
    expect(HISTORICAL_DESIGNERS.length).toBe(35);
  });

  it('should match exact counts of quizzes, silhouettes and anatomy models', () => {
    expect(METRICS.quizQuestionsCount).toBe(18);
    expect(QUIZ_QUESTIONS.length).toBe(18);
    expect(METRICS.silhouettesCount).toBe(13);
    expect(SILHOUETTE_DEFINITIONS.length).toBe(13);
    expect(METRICS.anatomyModelsCount).toBe(4);
    expect(ANATOMY_MODELS.length).toBe(4);
  });

  it('should list all 8 interactive univers modules', () => {
    expect(UNIVERS_MODULES.length).toBe(8);
    const ids = UNIVERS_MODULES.map((u) => u.id);
    expect(ids).toEqual([
      'chronologie',
      'silhouettes',
      'anatomie',
      'vestiaire',
      'createurs',
      'galerie',
      'quiz',
      'favoris',
    ]);
  });

  it('should include 8 authentic application screenshots', () => {
    expect(APPLICATION_SCREENSHOTS.length).toBe(8);
    for (const screen of APPLICATION_SCREENSHOTS) {
      expect(screen.id).toBeTruthy();
      expect(screen.title).toBeTruthy();
      expect(screen.imagePath).toMatch(/^\/screenshots\/.+\.png$/);
    }
  });

  it('should include 10 verified FAQ questions across 4 categories', () => {
    expect(FAQ_ITEMS.length).toBe(10);
    const categories = new Set(FAQ_ITEMS.map((f) => f.category));
    expect(categories.has('projet')).toBe(true);
    expect(categories.has('contenu')).toBe(true);
    expect(categories.has('technique')).toBe(true);
    expect(categories.has('usage')).toBe(true);
  });

  it('should point to valid production app and repository URLs', () => {
    expect(METRICS.appUrl).toBe('/');
    expect(METRICS.productionUrl).toBe('https://modor.pages.dev/');
    expect(METRICS.githubUrl).toBe('https://github.com/pnoualhier/Modor');
  });

  it('should provide complete period highlights with valid historical images', () => {
    expect(PERIOD_HIGHLIGHTS.length).toBe(6);
    for (const p of PERIOD_HIGHLIGHTS) {
      expect(p.id).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.years).toBeTruthy();
      expect(p.imageUrl).toMatch(/^\/images\/historical\/.+\.jpg$/);
    }
  });
});
