import { describe, it, expect } from 'vitest';
import { searchEncyclopedia } from '../services/search';
import { StorageService } from '../services/storage';
import { HISTORICAL_PERIODS } from '../data/periods';

describe('États d\'Interface, Contenus Vides et Robustesse', () => {
  describe('1. États de Recherche (Empty & Special Queries)', () => {
    it('renvoie un tableau vide pour les requêtes sans résultat', () => {
      const results = searchEncyclopedia('motinexistant123xyz');
      expect(results).toEqual([]);
    });

    it('gère proprement les requêtes composées uniquement d\'espaces ou de symboles', () => {
      expect(searchEncyclopedia('   ')).toEqual([]);
      expect(searchEncyclopedia('???')).toEqual([]);
      expect(searchEncyclopedia('$$$')).toEqual([]);
    });

    it('trouve des résultats pertinents même avec des accents ou casse mixte', () => {
      const accented = searchEncyclopedia('crinoline');
      const upper = searchEncyclopedia('CRINOLINE');
      expect(accented.length).toBeGreaterThan(0);
      expect(accented.length).toBe(upper.length);
    });
  });

  describe('2. États de Favoris Vides & Initialisation', () => {
    it('renvoie des listes vides sans erreur lors de la première consultation', () => {
      StorageService.resetAll();
      const userState = StorageService.load();
      expect(userState.periodIds).toHaveLength(0);
      expect(userState.garmentIds).toHaveLength(0);
      expect(userState.designerIds).toHaveLength(0);
      expect(Object.keys(userState.notes)).toHaveLength(0);
      expect(userState.viewHistory).toHaveLength(0);
    });
  });

  describe('3. Messages d\'Erreur Explicites pour l\'Import', () => {
    it('fournit un message clair en cas de fichier JSON vide', () => {
      const res = StorageService.importDataFromJSON('');
      expect(res.success).toBe(false);
      expect(res.error).toBe('Fichier vide ou chaîne invalide');
    });

    it('fournit un message clair en cas de syntaxe JSON corrompue', () => {
      const res = StorageService.importDataFromJSON('{ data: [1, 2, ');
      expect(res.success).toBe(false);
      expect(res.error).toBe('Format JSON invalide ou corrompu');
    });

    it('fournit un message clair en cas de version de schéma future non supportée', () => {
      const res = StorageService.importDataFromJSON(
        JSON.stringify({ schemaVersion: 42, data: { periodIds: [] } })
      );
      expect(res.success).toBe(false);
      expect(res.error).toContain('Version de schéma 42 non supportée');
    });

    it('fournit un message clair en cas de données non reconnues', () => {
      const res = StorageService.importDataFromJSON(
        JSON.stringify({ randomField: 12345 })
      );
      expect(res.success).toBe(false);
      expect(res.error).toBe('Structure de données Modor non reconnue');
    });
  });

  describe('4. Couverture des Données et Cohérence Chronologique', () => {
    it('vérifie que toutes les périodes ont des dates croissantes et valides', () => {
      for (const period of HISTORICAL_PERIODS) {
        expect(period.startYear).toBeLessThanOrEqual(period.endYear);
        expect(period.century).toBeGreaterThanOrEqual(16);
        expect(period.century).toBeLessThanOrEqual(21);
      }
    });
  });
});
