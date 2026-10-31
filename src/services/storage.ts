import { UserFavorites } from '../types';

const STORAGE_KEY = 'modor_user_data_v1';

const DEFAULT_USER_DATA: UserFavorites = {
  periodIds: [],
  garmentIds: [],
  designerIds: [],
  quizScores: {},
  viewHistory: [],
  notes: {}
};

export class StorageService {
  private static isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  public static load(): UserFavorites {
    if (!this.isBrowser()) return DEFAULT_USER_DATA;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return DEFAULT_USER_DATA;
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_USER_DATA,
        ...parsed,
        periodIds: Array.isArray(parsed.periodIds) ? parsed.periodIds : [],
        garmentIds: Array.isArray(parsed.garmentIds) ? parsed.garmentIds : [],
        designerIds: Array.isArray(parsed.designerIds) ? parsed.designerIds : [],
        quizScores: parsed.quizScores || {},
        viewHistory: Array.isArray(parsed.viewHistory) ? parsed.viewHistory : [],
        notes: parsed.notes || {}
      };
    } catch {
      return DEFAULT_USER_DATA;
    }
  }

  public static save(data: UserFavorites): void {
    if (!this.isBrowser()) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      window.dispatchEvent(new Event('modor_storage_updated'));
    } catch (e) {
      console.warn('Storage save error:', e);
    }
  }

  public static toggleFavorite(type: 'period' | 'garment' | 'designer', id: string): boolean {
    const data = this.load();
    const key = type === 'period' ? 'periodIds' : type === 'garment' ? 'garmentIds' : 'designerIds';
    const list = data[key];
    const exists = list.includes(id);

    if (exists) {
      data[key] = list.filter((item) => item !== id);
    } else {
      data[key] = [...list, id];
    }

    this.save(data);
    return !exists;
  }

  public static isFavorite(type: 'period' | 'garment' | 'designer', id: string): boolean {
    const data = this.load();
    const list = type === 'period' ? data.periodIds : type === 'garment' ? data.garmentIds : data.designerIds;
    return list.includes(id);
  }

  public static recordVisit(type: 'period' | 'garment' | 'designer', id: string): void {
    const data = this.load();
    const filtered = data.viewHistory.filter((item) => !(item.type === type && item.id === id));
    data.viewHistory = [{ type, id, timestamp: Date.now() }, ...filtered].slice(0, 50);
    this.save(data);
  }

  public static saveQuizScore(quizId: string, score: number, total: number): void {
    const data = this.load();
    data.quizScores[quizId] = {
      score,
      total,
      date: new Date().toISOString()
    };
    this.save(data);
  }

  public static saveNote(targetId: string, text: string): void {
    const data = this.load();
    if (text.trim()) {
      data.notes[targetId] = text.trim();
    } else {
      delete data.notes[targetId];
    }
    this.save(data);
  }

  public static exportDataAsJSON(): string {
    const data = this.load();
    return JSON.stringify(
      {
        application: 'Modor — Mode & Mémoire',
        version: '1.0.0',
        exportedAt: new Date().toISOString(),
        data
      },
      null,
      2
    );
  }

  public static importDataFromJSON(jsonString: string): { success: boolean; error?: string } {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || typeof parsed !== 'object') {
        return { success: false, error: 'Format JSON invalide' };
      }
      const dataToImport: UserFavorites = parsed.data || parsed;
      if (
        !Array.isArray(dataToImport.periodIds) &&
        !Array.isArray(dataToImport.garmentIds) &&
        !Array.isArray(dataToImport.designerIds)
      ) {
        return { success: false, error: 'Structure de favoris non reconnue' };
      }

      this.save({
        periodIds: Array.isArray(dataToImport.periodIds) ? dataToImport.periodIds : [],
        garmentIds: Array.isArray(dataToImport.garmentIds) ? dataToImport.garmentIds : [],
        designerIds: Array.isArray(dataToImport.designerIds) ? dataToImport.designerIds : [],
        quizScores: dataToImport.quizScores || {},
        viewHistory: Array.isArray(dataToImport.viewHistory) ? dataToImport.viewHistory : [],
        notes: dataToImport.notes || {}
      });

      return { success: true };
    } catch {
      return { success: false, error: 'Erreur lors de la lecture du fichier JSON' };
    }
  }

  public static resetAll(): void {
    if (!this.isBrowser()) return;
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('modor_storage_updated'));
  }
}
