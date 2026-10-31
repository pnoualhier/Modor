import { describe, it, expect } from 'vitest';
import { validateEncyclopediaIntegrity } from '../services/validation';
import { searchEncyclopedia } from '../services/search';
import { HISTORICAL_PERIODS } from '../data/periods';
import { HISTORICAL_GARMENTS } from '../data/garments';
import { HISTORICAL_DESIGNERS } from '../data/designers';
import { SILHOUETTE_DEFINITIONS } from '../data/silhouettes';
import { QUIZ_QUESTIONS } from '../data/quizzes';
import { ANATOMY_MODELS } from '../data/anatomy';

describe('Modor — Intégrité des données historiques', () => {
  it('doit valider l\'intégrité documentaire globale sans erreurs critiques', () => {
    const report = validateEncyclopediaIntegrity();
    expect(report.isValid).toBe(true);
    expect(report.errors).toHaveLength(0);
  });

  it('doit couvrir tous les siècles du XVIe au XXIe siècle', () => {
    const centuries = new Set(HISTORICAL_PERIODS.map((p) => p.century));
    expect(centuries.has(16)).toBe(true);
    expect(centuries.has(17)).toBe(true);
    expect(centuries.has(18)).toBe(true);
    expect(centuries.has(19)).toBe(true);
    expect(centuries.has(20)).toBe(true);
    expect(centuries.has(21)).toBe(true);
  });

  it('doit comporter au moins 15 périodes historiques détaillées', () => {
    expect(HISTORICAL_PERIODS.length).toBeGreaterThanOrEqual(15);
  });

  it('doit posséder des dates chronologiques cohérentes pour chaque période', () => {
    HISTORICAL_PERIODS.forEach((period) => {
      expect(period.startYear).toBeLessThanOrEqual(period.endYear);
      expect(period.title).toBeTruthy();
      expect(period.silhouetteDescription).toBeTruthy();
      expect(period.dressesDescription).toBeTruthy();
    });
  });

  it('doit inclure tous les vêtements indispensables demandés', () => {
    const garmentIds = HISTORICAL_GARMENTS.map((g) => g.id);
    expect(garmentIds).toContain('GAR_VERTUGADIN');
    expect(garmentIds).toContain('GAR_FRAISE');
    expect(garmentIds).toContain('GAR_ROBE_FRANCAISE');
    expect(garmentIds).toContain('GAR_PANIER');
    expect(garmentIds).toContain('GAR_CORPS_BALEINE');
    expect(garmentIds).toContain('GAR_ROBE_EMPIRE');
    expect(garmentIds).toContain('GAR_MANCHE_GIGOT');
    expect(garmentIds).toContain('GAR_CRINOLINE');
    expect(garmentIds).toContain('GAR_TOURNURE');
    expect(garmentIds).toContain('GAR_CORSET');
    expect(garmentIds).toContain('GAR_NEW_LOOK');
    expect(garmentIds).toContain('GAR_TAILLEUR_FEMININ');
    expect(garmentIds).toContain('GAR_SMOKING_FEMININ');
    expect(garmentIds).toContain('GAR_MINI_JUPE');
    expect(garmentIds).toContain('GAR_PANTALON_PATTE_ELEPHANT');
    expect(garmentIds).toContain('GAR_TAILLEUR_ANNEES_80');
  });

  it('doit inclure les créateurs majeurs de la mode française', () => {
    const designerNames = HISTORICAL_DESIGNERS.map((d) => d.name);
    expect(designerNames).toContain('Rose Bertin');
    expect(designerNames).toContain('Charles Frederick Worth');
    expect(designerNames).toContain('Jeanne Paquin');
    expect(designerNames).toContain('Paul Poiret');
    expect(designerNames).toContain('Coco Chanel (Gabrielle Chanel)');
    expect(designerNames).toContain('Madeleine Vionnet');
    expect(designerNames).toContain('Christian Dior');
    expect(designerNames).toContain('Yves Saint Laurent');
    expect(designerNames).toContain('André Courrèges');
    expect(designerNames).toContain('Jean Paul Gaultier');
    expect(designerNames).toContain('Simon Porte Jacquemus');
    expect(designerNames).toContain('Marine Serre');
  });

  it('doit avoir des modèles anatomiques avec points d\'intérêt interactifs', () => {
    expect(ANATOMY_MODELS.length).toBeGreaterThanOrEqual(4);
    ANATOMY_MODELS.forEach((model) => {
      expect(model.hotspots.length).toBeGreaterThanOrEqual(5);
    });
  });

  it('doit comporter des questions de quiz avec index de réponse valide', () => {
    expect(QUIZ_QUESTIONS.length).toBeGreaterThanOrEqual(15);
    QUIZ_QUESTIONS.forEach((q) => {
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(q.options.length);
      expect(q.explanation).toBeTruthy();
    });
  });

  it('le moteur de recherche doit trouver des résultats pertinents', () => {
    const resCrinoline = searchEncyclopedia('crinoline');
    expect(resCrinoline.length).toBeGreaterThan(0);

    const resDior = searchEncyclopedia('Dior');
    expect(resDior.length).toBeGreaterThan(0);

    const resPanier = searchEncyclopedia('panier');
    expect(resPanier.length).toBeGreaterThan(0);
  });
});
