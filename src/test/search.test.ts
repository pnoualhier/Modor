import { describe, it, expect } from 'vitest';
import { searchEncyclopedia, normalizeSearchText, HISTORICAL_SYNONYMS } from '../services/search';

describe('Modor — Moteur de recherche et normalisation', () => {
  it('doit normaliser les accents et caractères diacritiques correctement', () => {
    expect(normalizeSearchText('CRINOLINE')).toBe('crinoline');
    expect(normalizeSearchText('Épaulettes et frou-frous')).toBe('epaulettes et frou-frous');
    expect(normalizeSearchText('Robe à la française')).toBe('robe a la francaise');
    expect(normalizeSearchText('Courrèges')).toBe('courreges');
  });

  it('doit retrouver des éléments avec ou sans accents', () => {
    const resAccent = searchEncyclopedia('crinoline');
    const resNoAccent = searchEncyclopedia('crinoline');
    expect(resAccent.length).toBeGreaterThan(0);
    expect(resAccent.some(r => r.id === 'GAR_CRINOLINE')).toBe(true);

    const resCourreges1 = searchEncyclopedia('Courrèges');
    const resCourreges2 = searchEncyclopedia('courreges');
    expect(resCourreges1.length).toBeGreaterThan(0);
    expect(resCourreges2.length).toBeGreaterThan(0);
    expect(resCourreges1.some(r => r.id === 'DES_COURREGES')).toBe(true);
    expect(resCourreges2.some(r => r.id === 'DES_COURREGES')).toBe(true);
  });

  it('doit résoudre les synonymes historiques vers les bons termes d\'autorité', () => {
    // "faux-cul" doit ramener la Tournure
    const resFauxCul = searchEncyclopedia('faux-cul');
    const hasTournure = resFauxCul.some(r => r.id === 'GAR_TOURNURE' || r.title.toLowerCase().includes('tournure'));
    expect(hasTournure).toBe(true);

    // "cage" doit ramener la Crinoline
    const resCage = searchEncyclopedia('cage');
    const hasCrinoline = resCage.some(r => r.id === 'GAR_CRINOLINE');
    expect(hasCrinoline).toBe(true);

    // "smoking" doit ramener Le Smoking d'Yves Saint Laurent
    const resSmoking = searchEncyclopedia('smoking');
    const hasSmoking = resSmoking.some(r => r.id === 'GAR_SMOKING_FEMININ' || r.title.toLowerCase().includes('smoking'));
    expect(hasSmoking).toBe(true);
  });

  it('doit classer les correspondances exactes de titre en tête des résultats', () => {
    const results = searchEncyclopedia('Christian Dior');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].title).toBe('Christian Dior');
    expect(results[0].score).toBeGreaterThan(50);
  });

  it('doit renvoyer une liste vide pour des requêtes vides ou de purs espaces', () => {
    expect(searchEncyclopedia('')).toEqual([]);
    expect(searchEncyclopedia('   ')).toEqual([]);
  });
});
