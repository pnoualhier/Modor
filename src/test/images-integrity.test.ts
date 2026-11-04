import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { HISTORICAL_PERIODS } from '../data/periods';
import { HISTORICAL_GARMENTS } from '../data/garments';
import { HISTORICAL_DESIGNERS } from '../data/designers';
import { ImageCredit } from '../types';

describe('Audit automatisé des ressources visuelles & provenance historique', () => {
  const allImages: { parent: string; image: ImageCredit }[] = [
    ...HISTORICAL_PERIODS.flatMap((p) => (p.images || []).map((img) => ({ parent: `Period ${p.id}`, image: img }))),
    ...HISTORICAL_GARMENTS.flatMap((g) => (g.images || []).map((img) => ({ parent: `Garment ${g.id}`, image: img }))),
    ...HISTORICAL_DESIGNERS.flatMap((d) => (d.images || []).map((img) => ({ parent: `Designer ${d.id}`, image: img }))),
  ];

  it('doit référencer au moins 60 images historiques', () => {
    expect(allImages.length).toBeGreaterThanOrEqual(60);
  });

  it('chaque image référencée doit exister physiquement dans /public', () => {
    const missingFiles: string[] = [];

    allImages.forEach(({ parent, image }) => {
      const relativePath = image.imageUrl.replace(/^\//, '');
      const fullPath = path.resolve(process.cwd(), 'public', relativePath);

      if (!fs.existsSync(fullPath)) {
        missingFiles.push(`${parent} -> ${image.imageUrl} (id: ${image.id})`);
      } else {
        const stats = fs.statSync(fullPath);
        if (stats.size < 100) {
          missingFiles.push(`${parent} -> ${image.imageUrl} (fichier vide ou trop petit: ${stats.size}b)`);
        }
      }
    });

    expect(missingFiles).toEqual([]);
  });

  it('chaque image doit posséder des métadonnées de provenance complètes (titre, institution, licence, légende)', () => {
    const incompleteMetadata: string[] = [];

    allImages.forEach(({ parent, image }) => {
      if (!image.id || !image.title?.trim() || !image.institution?.trim() || !image.license?.trim() || !image.caption?.trim()) {
        incompleteMetadata.push(
          `${parent} (id: ${image.id}) manque de: ${[
            !image.id && 'id',
            !image.title?.trim() && 'title',
            !image.institution?.trim() && 'institution',
            !image.license?.trim() && 'license',
            !image.caption?.trim() && 'caption',
          ].filter(Boolean).join(', ')}`
        );
      }
    });

    expect(incompleteMetadata).toEqual([]);
  });

  it('chaque image doit avoir un type éditorial valide', () => {
    allImages.forEach(({ image }) => {
      expect(['patrimoine', 'schema', 'reconstitution']).toContain(image.type);
    });
  });

  it('les URL d\'images doivent toutes être locales et pointer vers /images/', () => {
    allImages.forEach(({ image }) => {
      expect(image.imageUrl.startsWith('/images/')).toBe(true);
    });
  });
});
