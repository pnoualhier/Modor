import { describe, it, expect, beforeEach } from 'vitest';
import { StorageService, DEFAULT_USER_DATA } from '../services/storage';

describe('StorageService — Persistance locale, validation et assainissement', () => {
  beforeEach(() => {
    StorageService.resetAll();
  });

  it('charge la structure par défaut lorsque le stockage est vide', () => {
    const data = StorageService.load();
    expect(data).toEqual(DEFAULT_USER_DATA);
    expect(data.periodIds).toEqual([]);
    expect(data.garmentIds).toEqual([]);
    expect(data.designerIds).toEqual([]);
  });

  it('gère l\'ajout et le retrait de favoris (toggleFavorite)', () => {
    expect(StorageService.isFavorite('period', 'renaissance-1500-1550')).toBe(false);

    // Ajout
    const added = StorageService.toggleFavorite('period', 'renaissance-1500-1550');
    expect(added).toBe(true);
    expect(StorageService.isFavorite('period', 'renaissance-1500-1550')).toBe(true);

    // Retrait
    const removed = StorageService.toggleFavorite('period', 'renaissance-1500-1550');
    expect(removed).toBe(false);
    expect(StorageService.isFavorite('period', 'renaissance-1500-1550')).toBe(false);
  });

  it('rejette les identifiants invalides lors du toggleFavorite', () => {
    const res = StorageService.toggleFavorite('period', '<script>alert(1)</script>');
    expect(res).toBe(false);
    expect(StorageService.load().periodIds).toHaveLength(0);
  });

  it('enregistre et assainit les notes personnelles', () => {
    StorageService.saveNote('period-1', 'Notes avec du code <script>evil()</script> et des <b>balises</b>.');
    const loaded = StorageService.load();
    expect(loaded.notes['period-1']).toBe('Notes avec du code  et des balises.');

    // Suppression de note avec texte vide
    StorageService.saveNote('period-1', '   ');
    expect(StorageService.load().notes['period-1']).toBeUndefined();
  });

  it('enregistre des scores de quiz avec bornes sécurisées', () => {
    StorageService.saveQuizScore('quiz-renaissance', 5, 5);
    const loaded = StorageService.load();
    expect(loaded.quizScores['quiz-renaissance']).toBeDefined();
    expect(loaded.quizScores['quiz-renaissance'].score).toBe(5);
    expect(loaded.quizScores['quiz-renaissance'].total).toBe(5);
    expect(new Date(loaded.quizScores['quiz-renaissance'].date).getTime()).toBeGreaterThan(0);

    // Score supérieur au total -> borné au total
    StorageService.saveQuizScore('quiz-renaissance', 10, 5);
    expect(StorageService.load().quizScores['quiz-renaissance'].score).toBe(5);
  });

  it('enregistre l\'historique de consultation avec limite à 50 éléments', () => {
    for (let i = 0; i < 60; i++) {
      StorageService.recordVisit('garment', `garment-${i}`);
    }
    const history = StorageService.load().viewHistory;
    expect(history.length).toBeLessThanOrEqual(50);
    expect(history[0].id).toBe('garment-59');
  });

  it('exporte les données au format JSON valide avec métadonnées d\'application', () => {
    StorageService.toggleFavorite('garment', 'robe-a-la-francaise');
    const jsonStr = StorageService.exportDataAsJSON();
    const parsed = JSON.parse(jsonStr);

    expect(parsed.application).toContain('Modor');
    expect(parsed.version).toBe('1.0.0');
    expect(parsed.data.garmentIds).toContain('robe-a-la-francaise');
  });

  it('importe avec succès un export JSON valide', () => {
    const validJson = JSON.stringify({
      application: 'Modor — Mode & Mémoire',
      data: {
        periodIds: ['renaissance-1500-1550', 'directoire-1795-1799'],
        garmentIds: ['vertugadin-roue'],
        designerIds: ['coco-chanel'],
        notes: { 'renaissance-1500-1550': 'Étudier les brocarts italiens.' },
        quizScores: {
          'quiz-1': { score: 3, total: 3, date: '2026-05-10T12:00:00.000Z' }
        }
      }
    });

    const res = StorageService.importDataFromJSON(validJson);
    expect(res.success).toBe(true);

    const loaded = StorageService.load();
    expect(loaded.periodIds).toContain('renaissance-1500-1550');
    expect(loaded.garmentIds).toContain('vertugadin-roue');
    expect(loaded.designerIds).toContain('coco-chanel');
    expect(loaded.notes['renaissance-1500-1550']).toBe('Étudier les brocarts italiens.');
    expect(loaded.quizScores['quiz-1'].score).toBe(3);
  });

  it('rejette les données JSON corrompues ou non conformes', () => {
    expect(StorageService.importDataFromJSON('{ invalid json').success).toBe(false);
    expect(StorageService.importDataFromJSON('').success).toBe(false);
    expect(StorageService.importDataFromJSON('{"unknownField": true}').success).toBe(false);
    expect(StorageService.importDataFromJSON('12345').success).toBe(false);
  });

  it('assainit et ignore les injections malveillantes lors de l\'import', () => {
    const maliciousJson = JSON.stringify({
      periodIds: ['valid-period', '<img src=x onerror=alert(1)>', 'safe_id_123'],
      notes: {
        'valid-period': '<script>stealCookie()</script>Mon observation historique <i>majeure</i>.'
      },
      quizScores: {
        'quiz-1': { score: -50, total: 0 }
      }
    });

    const res = StorageService.importDataFromJSON(maliciousJson);
    expect(res.success).toBe(true);

    const loaded = StorageService.load();
    expect(loaded.periodIds).toEqual(['valid-period', 'safe_id_123']);
    expect(loaded.notes['valid-period']).toBe('Mon observation historique majeure.');
    expect(loaded.quizScores['quiz-1'].score).toBe(0);
    expect(loaded.quizScores['quiz-1'].total).toBe(1);
  });
});
