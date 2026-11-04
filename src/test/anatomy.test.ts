import { describe, it, expect } from 'vitest';
import { ANATOMY_MODELS } from '../data/anatomy';
import { SILHOUETTE_DEFINITIONS } from '../data/silhouettes';

describe('Modor — Données anatomiques et silhouettes', () => {
  it('chaque modèle anatomique doit posséder des coordonnées de hotspots valides entre 0 et 100%', () => {
    ANATOMY_MODELS.forEach((model) => {
      expect(model.hotspots.length).toBeGreaterThanOrEqual(4);
      model.hotspots.forEach((spot) => {
        expect(spot.xPercent).toBeGreaterThanOrEqual(0);
        expect(spot.xPercent).toBeLessThanOrEqual(100);
        expect(spot.yPercent).toBeGreaterThanOrEqual(0);
        expect(spot.yPercent).toBeLessThanOrEqual(100);
        expect(spot.name).toBeTruthy();
        expect(spot.historicalRole).toBeTruthy();
      });
    });
  });

  it('chaque silhouette vectorielle doit posséder des dimensions et des descripteurs valides', () => {
    SILHOUETTE_DEFINITIONS.forEach((sil) => {
      expect(sil.svgModel.waistWidth).toBeGreaterThan(0);
      expect(sil.svgModel.hipsWidth).toBeGreaterThan(0);
      expect(sil.svgModel.skirtBottomWidth).toBeGreaterThan(0);
      expect(sil.svgModel.understructureShape).toBeTruthy();
      expect(sil.keyFeatures.length).toBeGreaterThanOrEqual(3);
      expect(sil.undergarmentStructures.length).toBeGreaterThanOrEqual(2);
    });
  });
});
