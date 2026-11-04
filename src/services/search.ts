import { HISTORICAL_PERIODS } from '../data/periods';
import { HISTORICAL_GARMENTS } from '../data/garments';
import { HISTORICAL_DESIGNERS } from '../data/designers';

export interface SearchResultItem {
  type: 'period' | 'garment' | 'designer';
  id: string;
  title: string;
  subtitle: string;
  century?: number;
  dates?: string;
  category?: string;
  snippet: string;
  slug?: string;
  score: number;
}

/**
 * Normalizes text: lowercase, trims, and strips diacritics / accents.
 */
export function normalizeSearchText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Historical synonyms and popular alternative terms mapping to canonical concepts
 */
export const HISTORICAL_SYNONYMS: Record<string, string[]> = {
  'faux-cul': ['tournure', 'pouf', 'cul de paris'],
  'faux cul': ['tournure', 'pouf', 'cul de paris'],
  'cul de paris': ['tournure', 'faux-cul'],
  'watteau': ['robe a la francaise', 'plis watteau'],
  'plis watteau': ['robe a la francaise'],
  'lbd': ['petite robe noire', 'chanel'],
  'petite robe noire': ['chanel', 'annees 1920'],
  'gibson': ['manche gigot', 'belle epoque'],
  'manche ballon': ['manche gigot', 'romantisme'],
  'vertugale': ['vertugadin', 'verdugado'],
  'verdugado': ['vertugadin', 'espagne'],
  'corps pique': ['corps a baleines', 'corset'],
  'baleines': ['corps a baleines', 'corset', 'panier'],
  'cage': ['crinoline', 'cage crinoline'],
  'crinoline cage': ['crinoline', 'second empire'],
  'tailleur bar': ['new look', 'christian dior', '1947'],
  'bar suit': ['tailleur bar', 'new look', 'christian dior'],
  'power dressing': ['tailleur annees 80', 'epaulettes', 'claude montana'],
  'smoking': ['le smoking', 'yves saint laurent'],
  'pattes d\'eph': ['pantalon patte d\'elephant', 'annees 70'],
  'patte d elephant': ['pantalon patte d\'elephant', 'annees 70'],
  'mini': ['mini-jupe', 'courreges', 'quant'],
  'robe chemise': ['mousseline', 'empire', 'directoire'],
  'fourreau': ['belle epoque', 'poiret', 'sirene'],
  'paniers': ['panier', 'siecle des lumieres', 'robe a la francaise']
};

export function searchEncyclopedia(query: string): SearchResultItem[] {
  const rawQuery = query.trim();
  if (!rawQuery) return [];

  const cleanQuery = normalizeSearchText(rawQuery);
  const queryTokens = cleanQuery.split(/\s+/).filter(Boolean);

  // Expand search query with historical synonyms
  const synonymExpansions: string[] = [];
  Object.entries(HISTORICAL_SYNONYMS).forEach(([synonym, targets]) => {
    const normSyn = normalizeSearchText(synonym);
    if (cleanQuery.includes(normSyn) || normSyn.includes(cleanQuery)) {
      synonymExpansions.push(...targets.map(normalizeSearchText));
    }
  });

  const allSearchTerms = Array.from(new Set([cleanQuery, ...queryTokens, ...synonymExpansions]));

  const scoredResults: SearchResultItem[] = [];

  function calculateScore(title: string, subtitle: string, body: string, keywords: string[]): number {
    const normTitle = normalizeSearchText(title);
    const normSubtitle = normalizeSearchText(subtitle);
    const normBody = normalizeSearchText(body);
    const normKeywords = keywords.map(normalizeSearchText).join(' ');

    let score = 0;

    // Exact query matches
    if (normTitle === cleanQuery) score += 100;
    else if (normTitle.includes(cleanQuery)) score += 50;

    if (normSubtitle.includes(cleanQuery)) score += 25;
    if (normKeywords.includes(cleanQuery)) score += 20;
    if (normBody.includes(cleanQuery)) score += 10;

    // Token & synonym matches
    allSearchTerms.forEach((term) => {
      if (term.length < 2) return;
      if (normTitle.includes(term)) score += 15;
      if (normKeywords.includes(term)) score += 10;
      if (normSubtitle.includes(term)) score += 8;
      if (normBody.includes(term)) score += 3;
    });

    return score;
  }

  // 1. Periods
  HISTORICAL_PERIODS.forEach((period) => {
    const keywords = [
      period.title,
      period.subtitle,
      `${period.startYear}`,
      `${period.endYear}`,
      `siecle ${period.century}`,
      ...period.notableFigures
    ];
    const body = [
      period.shortDescription,
      period.historicalContext,
      period.socialContext,
      period.silhouetteDescription,
      period.dressesDescription,
      period.clothingDescription,
      period.undergarmentsDescription,
      period.accessoriesDescription,
      period.hairstylesDescription,
      period.shoesDescription,
      period.materialsAndTechniques,
      period.colorsAndPatterns,
      period.clothingUses,
      period.socialDifferences
    ].join(' ');

    const score = calculateScore(period.title, period.subtitle, body, keywords);

    if (score > 0) {
      scoredResults.push({
        type: 'period',
        id: period.id,
        title: period.title,
        subtitle: `${period.subtitle} (${period.startYear}–${period.endYear})`,
        century: period.century,
        dates: `${period.startYear}–${period.endYear}`,
        snippet: period.shortDescription,
        slug: period.slug,
        score
      });
    }
  });

  // 2. Garments
  HISTORICAL_GARMENTS.forEach((garment) => {
    const keywords = [
      garment.name,
      garment.category,
      garment.eraDates,
      `siecle ${garment.century}`,
      ...garment.materials
    ];
    const body = [
      garment.definition,
      garment.anatomicalRole,
      garment.constructionDetails,
      garment.socialContext,
      garment.evolution,
      garment.silhouetteEffect
    ].join(' ');

    const score = calculateScore(garment.name, garment.category, body, keywords);

    if (score > 0) {
      scoredResults.push({
        type: 'garment',
        id: garment.id,
        title: garment.name,
        subtitle: `${garment.category.toUpperCase()} · ${garment.eraDates}`,
        century: garment.century,
        dates: garment.eraDates,
        category: garment.category,
        snippet: garment.definition,
        score
      });
    }
  });

  // 3. Designers
  HISTORICAL_DESIGNERS.forEach((designer) => {
    const keywords = [
      designer.name,
      designer.fashionHouse,
      `${designer.birthYear}`,
      designer.deathYear ? `${designer.deathYear}` : 'present',
      ...designer.innovations,
      ...designer.iconicCreations
    ];
    const body = [
      designer.biography,
      designer.historicalInfluence,
      designer.quote || ''
    ].join(' ');

    const score = calculateScore(designer.name, designer.fashionHouse, body, keywords);

    if (score > 0) {
      scoredResults.push({
        type: 'designer',
        id: designer.id,
        title: designer.name,
        subtitle: `${designer.fashionHouse} (${designer.birthYear}–${designer.deathYear || 'présent'})`,
        dates: `${designer.birthYear}–${designer.deathYear || 'présent'}`,
        snippet: designer.biography.slice(0, 160) + '...',
        score
      });
    }
  });

  // Sort descending by score
  return scoredResults.sort((a, b) => b.score - a.score);
}
