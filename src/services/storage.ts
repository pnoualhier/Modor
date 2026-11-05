import { UserFavorites } from '../types';

const STORAGE_KEY = 'modor_user_data_v1';

export const DEFAULT_USER_DATA: UserFavorites = {
  periodIds: [],
  garmentIds: [],
  designerIds: [],
  quizScores: {},
  viewHistory: [],
  notes: {}
};

export const CURRENT_SCHEMA_VERSION = 1;

export interface ImportResult {
  success: boolean;
  error?: string;
  importedStats?: {
    periods: number;
    garments: number;
    designers: number;
    notes: number;
    quizScores: number;
  };
}

/**
 * Sanitizes plain text input by stripping dangerous tags and trimming.
 */
function sanitizeText(input: unknown, maxLength = 10000): string {
  if (typeof input !== 'string') return '';
  // Strip script tags and HTML elements for security
  const cleaned = input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .trim();
  return cleaned.slice(0, maxLength);
}

/**
 * Validates entity identifiers (alphanumeric, dash, underscore only).
 */
function isValidId(id: unknown): id is string {
  return typeof id === 'string' && id.trim().length > 0 && id.length <= 128 && /^[a-zA-Z0-9_-]+$/.test(id.trim());
}

/**
 * Sanitizes an array of entity IDs, eliminating duplicates and invalid characters.
 */
function sanitizeIdArray(arr: unknown): string[] {
  if (!Array.isArray(arr)) return [];
  const valid = arr
    .filter(isValidId)
    .map((id) => id.trim());
  return Array.from(new Set(valid));
}

/**
 * Sanitizes user notes dictionary.
 */
function sanitizeNotes(obj: unknown): Record<string, string> {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return {};
  const result: Record<string, string> = {};
  for (const [key, val] of Object.entries(obj)) {
    if (isValidId(key)) {
      const sanitized = sanitizeText(val);
      if (sanitized) {
        result[key] = sanitized;
      }
    }
  }
  return result;
}

/**
 * Sanitizes quiz scores object.
 */
function sanitizeQuizScores(
  obj: unknown
): Record<string, { score: number; total: number; date: string }> {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return {};
  const result: Record<string, { score: number; total: number; date: string }> = {};
  for (const [key, val] of Object.entries(obj)) {
    if (isValidId(key) && val && typeof val === 'object') {
      const v = val as { score?: unknown; total?: unknown; date?: unknown };
      const score = typeof v.score === 'number' && Number.isFinite(v.score) ? Math.max(0, Math.floor(v.score)) : 0;
      const total = typeof v.total === 'number' && Number.isFinite(v.total) ? Math.max(1, Math.floor(v.total)) : 1;
      let date = typeof v.date === 'string' ? v.date : '';
      if (!date || isNaN(Date.parse(date))) {
        date = new Date().toISOString();
      }
      result[key] = {
        score: Math.min(score, total),
        total,
        date
      };
    }
  }
  return result;
}

/**
 * Sanitizes view history array.
 */
function sanitizeViewHistory(
  arr: unknown
): Array<{ type: 'period' | 'garment' | 'designer'; id: string; timestamp: number }> {
  if (!Array.isArray(arr)) return [];
  const validTypes = new Set(['period', 'garment', 'designer']);
  const result: Array<{ type: 'period' | 'garment' | 'designer'; id: string; timestamp: number }> = [];

  for (const item of arr) {
    if (item && typeof item === 'object') {
      const t = item.type;
      const id = item.id;
      const ts = item.timestamp;
      if (
        validTypes.has(t) &&
        isValidId(id) &&
        typeof ts === 'number' &&
        Number.isFinite(ts) &&
        ts > 0
      ) {
        result.push({
          type: t as 'period' | 'garment' | 'designer',
          id: id.trim(),
          timestamp: Math.floor(ts)
        });
      }
    }
  }

  // Deduplicate and limit to 50 items
  return result.slice(0, 50);
}

let memoryStorage: Record<string, string> = {};

function getStorageItem(key: string): string | null {
  if (typeof localStorage !== 'undefined') {
    try {
      const val = localStorage.getItem(key);
      if (val !== null) return val;
    } catch {
      // fallback
    }
  }
  return memoryStorage[key] ?? null;
}

function setStorageItem(key: string, value: string): void {
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(key, value);
    } catch {
      // fallback
    }
  }
  memoryStorage[key] = value;
}

function removeStorageItem(key: string): void {
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.removeItem(key);
    } catch {
      // fallback
    }
  }
  delete memoryStorage[key];
}

export class StorageService {
  public static load(): UserFavorites {
    try {
      const raw = getStorageItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_USER_DATA };
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') {
        return { ...DEFAULT_USER_DATA };
      }

      return {
        periodIds: sanitizeIdArray(parsed.periodIds),
        garmentIds: sanitizeIdArray(parsed.garmentIds),
        designerIds: sanitizeIdArray(parsed.designerIds),
        quizScores: sanitizeQuizScores(parsed.quizScores),
        viewHistory: sanitizeViewHistory(parsed.viewHistory),
        notes: sanitizeNotes(parsed.notes)
      };
    } catch {
      return { ...DEFAULT_USER_DATA };
    }
  }

  public static save(data: UserFavorites): void {
    try {
      const sanitized: UserFavorites = {
        periodIds: sanitizeIdArray(data.periodIds),
        garmentIds: sanitizeIdArray(data.garmentIds),
        designerIds: sanitizeIdArray(data.designerIds),
        quizScores: sanitizeQuizScores(data.quizScores),
        viewHistory: sanitizeViewHistory(data.viewHistory),
        notes: sanitizeNotes(data.notes)
      };
      setStorageItem(STORAGE_KEY, JSON.stringify(sanitized));
      if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
        window.dispatchEvent(new Event('modor_storage_updated'));
      }
    } catch (e) {
      console.warn('Storage save error:', e);
    }
  }

  public static toggleFavorite(type: 'period' | 'garment' | 'designer', id: string): boolean {
    if (!isValidId(id)) return false;
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
    if (!isValidId(id)) return false;
    const data = this.load();
    const list = type === 'period' ? data.periodIds : type === 'garment' ? data.garmentIds : data.designerIds;
    return list.includes(id);
  }

  public static recordVisit(type: 'period' | 'garment' | 'designer', id: string): void {
    if (!isValidId(id)) return;
    const data = this.load();
    const filtered = data.viewHistory.filter((item) => !(item.type === type && item.id === id));
    data.viewHistory = [{ type, id, timestamp: Date.now() }, ...filtered].slice(0, 50);
    this.save(data);
  }

  public static saveQuizScore(quizId: string, score: number, total: number): void {
    if (!isValidId(quizId)) return;
    const data = this.load();
    const safeTotal = typeof total === 'number' && Number.isFinite(total) && total > 0 ? Math.floor(total) : 1;
    const safeScore = typeof score === 'number' && Number.isFinite(score) ? Math.max(0, Math.min(Math.floor(score), safeTotal)) : 0;

    data.quizScores[quizId] = {
      score: safeScore,
      total: safeTotal,
      date: new Date().toISOString()
    };
    this.save(data);
  }

  public static saveNote(targetId: string, text: string): void {
    if (!isValidId(targetId)) return;
    const data = this.load();
    const cleaned = sanitizeText(text);
    if (cleaned) {
      data.notes[targetId] = cleaned;
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
        schemaVersion: CURRENT_SCHEMA_VERSION,
        exportedAt: new Date().toISOString(),
        data
      },
      null,
      2
    );
  }

  public static importDataFromJSON(jsonString: string): ImportResult {
    try {
      if (typeof jsonString !== 'string' || !jsonString.trim()) {
        return { success: false, error: 'Fichier vide ou chaîne invalide' };
      }
      if (jsonString.length > 5 * 1024 * 1024) {
        return { success: false, error: 'Le fichier dépasse la taille maximale autorisée (5 Mo)' };
      }

      let parsed: unknown;
      try {
        parsed = JSON.parse(jsonString);
      } catch {
        return { success: false, error: 'Format JSON invalide ou corrompu' };
      }

      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        return { success: false, error: 'Format de fichier non reconnu (objet attendu)' };
      }

      const rawObj = parsed as Record<string, unknown>;

      // Check schema version if specified
      if ('schemaVersion' in rawObj) {
        const ver = rawObj.schemaVersion;
        if (typeof ver !== 'number' || !Number.isInteger(ver) || ver < 1) {
          return { success: false, error: 'Numéro de version de schéma invalide' };
        }
        if (ver > CURRENT_SCHEMA_VERSION) {
          return {
            success: false,
            error: `Version de schéma ${ver} non supportée par cette version de Modor (version actuelle: ${CURRENT_SCHEMA_VERSION}). Veuillez mettre à jour l'application.`
          };
        }
      }

      // Support both versioned wrapper { schemaVersion, data: {...} } and legacy root data
      let dataToImport: Record<string, unknown>;
      if (rawObj.data && typeof rawObj.data === 'object' && !Array.isArray(rawObj.data)) {
        dataToImport = rawObj.data as Record<string, unknown>;
      } else {
        // Legacy v0 format without 'data' envelope
        dataToImport = rawObj;
      }

      const hasValidKeys =
        Array.isArray(dataToImport.periodIds) ||
        Array.isArray(dataToImport.garmentIds) ||
        Array.isArray(dataToImport.designerIds) ||
        (dataToImport.notes && typeof dataToImport.notes === 'object') ||
        (dataToImport.quizScores && typeof dataToImport.quizScores === 'object');

      if (!hasValidKeys) {
        return { success: false, error: 'Structure de données Modor non reconnue' };
      }

      // Pure in-memory sanitization (atomic: store is not touched until validation succeeds)
      const sanitized: UserFavorites = {
        periodIds: sanitizeIdArray(dataToImport.periodIds),
        garmentIds: sanitizeIdArray(dataToImport.garmentIds),
        designerIds: sanitizeIdArray(dataToImport.designerIds),
        quizScores: sanitizeQuizScores(dataToImport.quizScores),
        viewHistory: sanitizeViewHistory(dataToImport.viewHistory),
        notes: sanitizeNotes(dataToImport.notes)
      };

      // Atomic commit to storage
      this.save(sanitized);

      return {
        success: true,
        importedStats: {
          periods: sanitized.periodIds.length,
          garments: sanitized.garmentIds.length,
          designers: sanitized.designerIds.length,
          notes: Object.keys(sanitized.notes).length,
          quizScores: Object.keys(sanitized.quizScores).length
        }
      };
    } catch {
      return { success: false, error: 'Erreur inattendue lors de la lecture du fichier JSON' };
    }
  }

  public static resetAll(): void {
    removeStorageItem(STORAGE_KEY);
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(new Event('modor_storage_updated'));
    }
  }
}
