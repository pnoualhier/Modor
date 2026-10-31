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
}

export function searchEncyclopedia(query: string): SearchResultItem[] {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return [];

  const results: SearchResultItem[] = [];

  // Search in periods
  HISTORICAL_PERIODS.forEach((period) => {
    const haystack = [
      period.title,
      period.subtitle,
      period.shortDescription,
      period.historicalContext,
      period.socialContext,
      period.silhouetteDescription,
      period.materialsAndTechniques,
      period.clothingUses,
      ...period.notableFigures
    ]
      .join(' ')
      .toLowerCase();

    if (haystack.includes(cleanQuery)) {
      results.push({
        type: 'period',
        id: period.id,
        title: period.title,
        subtitle: `${period.subtitle} (${period.startYear}–${period.endYear})`,
        century: period.century,
        dates: `${period.startYear}–${period.endYear}`,
        snippet: period.shortDescription,
        slug: period.slug
      });
    }
  });

  // Search in garments
  HISTORICAL_GARMENTS.forEach((garment) => {
    const haystack = [
      garment.name,
      garment.definition,
      garment.anatomicalRole,
      garment.constructionDetails,
      garment.socialContext,
      garment.silhouetteEffect,
      garment.category,
      ...garment.materials
    ]
      .join(' ')
      .toLowerCase();

    if (haystack.includes(cleanQuery)) {
      results.push({
        type: 'garment',
        id: garment.id,
        title: garment.name,
        subtitle: `${garment.category.toUpperCase()} · ${garment.eraDates}`,
        century: garment.century,
        dates: garment.eraDates,
        category: garment.category,
        snippet: garment.definition
      });
    }
  });

  // Search in designers
  HISTORICAL_DESIGNERS.forEach((designer) => {
    const haystack = [
      designer.name,
      designer.fashionHouse,
      designer.biography,
      designer.historicalInfluence,
      ...designer.innovations,
      ...designer.iconicCreations
    ]
      .join(' ')
      .toLowerCase();

    if (haystack.includes(cleanQuery)) {
      results.push({
        type: 'designer',
        id: designer.id,
        title: designer.name,
        subtitle: `${designer.fashionHouse} (${designer.birthYear}–${designer.deathYear || 'présent'})`,
        dates: `${designer.birthYear}–${designer.deathYear || 'présent'}`,
        snippet: designer.biography.slice(0, 160) + '...'
      });
    }
  });

  return results;
}
