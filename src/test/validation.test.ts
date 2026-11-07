import { describe, it, expect } from 'vitest';
import { validateEncyclopediaIntegrity } from '../services/validation';

describe('Modor — Rapport de validation et audit d\'intégrité', () => {
  const report = validateEncyclopediaIntegrity();

  it('ne doit comporter aucune erreur bloquante (errors.length === 0)', () => {
    expect(report.isValid).toBe(true);
    expect(report.errors).toHaveLength(0);
  });

  it('doit rapporter les statistiques globales de l\'encyclopédie', () => {
    expect(report.stats.periodsCount).toBe(22);
    expect(report.stats.garmentsCount).toBe(34);
    expect(report.stats.designersCount).toBe(35);
    expect(report.stats.sourcesCount).toBe(9);
    expect(report.stats.silhouettesCount).toBe(13);
    expect(report.stats.quizzesCount).toBe(18);
    expect(report.stats.anatomyModelsCount).toBe(4);
    expect(report.stats.totalImagesReferenced).toBe(89);
  });

  it('doit catégoriser les avertissements et informations sans faire échouer isValid', () => {
    expect(Array.isArray(report.warnings)).toBe(true);
    expect(Array.isArray(report.infos)).toBe(true);
    expect(Array.isArray(report.issues)).toBe(true);
  });
});
