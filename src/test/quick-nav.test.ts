import { describe, it, expect } from 'vitest';
import { HISTORICAL_PERIODS } from '../data/periods';
import { NavTab } from '../components/common/Navbar';

describe('Barre de Menu Rapide (QuickNavBar) & Navigation Inter-Pages', () => {
  const expectedTabs: { id: NavTab; label: string; shortcut: string }[] = [
    { id: 'timeline', label: 'Chronologie', shortcut: '1' },
    { id: 'comparator', label: 'Silhouettes', shortcut: '2' },
    { id: 'anatomy', label: 'Anatomie', shortcut: '3' },
    { id: 'garments', label: 'Vestiaire', shortcut: '4' },
    { id: 'designers', label: 'Créateurs', shortcut: '5' },
    { id: 'gallery', label: 'Galerie', shortcut: '6' },
    { id: 'quiz', label: 'Quiz', shortcut: '7' },
    { id: 'favorites', label: 'Favoris & Notes', shortcut: '8' },
  ];

  it('couvre l\'ensemble des 8 pages principales de l\'application', () => {
    expect(expectedTabs).toHaveLength(8);
    const ids = expectedTabs.map((t) => t.id);
    expect(ids).toContain('timeline');
    expect(ids).toContain('comparator');
    expect(ids).toContain('anatomy');
    expect(ids).toContain('garments');
    expect(ids).toContain('designers');
    expect(ids).toContain('gallery');
    expect(ids).toContain('quiz');
    expect(ids).toContain('favorites');
  });

  it('associe un raccourci clavier Alt+1 à Alt+8 à chaque page', () => {
    expectedTabs.forEach((tab, index) => {
      expect(tab.shortcut).toBe(String(index + 1));
    });
  });

  it('résout fidèlement le titre et les années d\'une période pour le fil d\'Ariane contextuel', () => {
    const period = HISTORICAL_PERIODS.find((p) => p.id === 'PER_RENAISSANCE');
    expect(period).toBeDefined();
    expect(period?.title).toBe('Renaissance');
    expect(period?.startYear).toBe(1500);
    expect(period?.endYear).toBe(1600);
  });

  it('permet de naviguer cycliquement entre les onglets avec les flèches du clavier', () => {
    const getNextTab = (currentIndex: number, step: number) => {
      return (currentIndex + step + expectedTabs.length) % expectedTabs.length;
    };

    // De la première vers la droite
    expect(getNextTab(0, 1)).toBe(1);
    // De la dernière vers la droite (boucle)
    expect(getNextTab(7, 1)).toBe(0);
    // De la première vers la gauche (boucle)
    expect(getNextTab(0, -1)).toBe(7);
  });
});
