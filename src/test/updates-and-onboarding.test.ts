import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { UpdateService, APP_VERSION, RELEASE_DATE } from '../services/updateService';
import { OnboardingService } from '../components/common/OnboardingModal';

// In-memory mock for environments lacking global localStorage
class MockLocalStorage {
  private store = new Map<string, string>();

  getItem(key: string): string | null {
    return this.store.get(key) || null;
  }
  setItem(key: string, value: string): void {
    this.store.set(key, String(value));
  }
  removeItem(key: string): void {
    this.store.delete(key);
  }
  clear(): void {
    this.store.clear();
  }
  get length(): number {
    return this.store.size;
  }
  key(index: number): string | null {
    return Array.from(this.store.keys())[index] || null;
  }
}

describe('UpdateService & System Settings', () => {
  const mockStorage = new MockLocalStorage();

  beforeEach(() => {
    mockStorage.clear();
    globalThis.localStorage = mockStorage as unknown as Storage;
    (globalThis as unknown as Record<string, unknown>).window = {
      localStorage: mockStorage as unknown as Storage,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    };
    vi.restoreAllMocks();
  });

  afterEach(() => {
    mockStorage.clear();
  });

  it('provides official app version and release date', () => {
    expect(APP_VERSION).toBe('1.1.0');
    expect(RELEASE_DATE).toBe('5 Novembre 2026');
  });

  it('records and retrieves the last update check date', () => {
    const initialCheck = UpdateService.getLastUpdateCheck();
    expect(typeof initialCheck).toBe('string');
    expect(initialCheck.length).toBeGreaterThan(0);
  });

  it('performs an update check and records new timestamp', async () => {
    const result = await UpdateService.checkForUpdates();
    expect(result).toHaveProperty('hasUpdate');
    expect(result).toHaveProperty('message');
    expect(typeof result.message).toBe('string');
  });

  it('registers background auto update handler without errors', () => {
    const callback = vi.fn();
    const cleanup = UpdateService.registerBackgroundAutoUpdate(callback);
    expect(typeof cleanup).toBe('function');
    cleanup();
  });
});

describe('OnboardingService', () => {
  const mockStorage = new MockLocalStorage();

  beforeEach(() => {
    mockStorage.clear();
    globalThis.localStorage = mockStorage as unknown as Storage;
    (globalThis as unknown as Record<string, unknown>).window = {
      localStorage: mockStorage as unknown as Storage,
    };
  });

  afterEach(() => {
    mockStorage.clear();
  });

  it('handles accepted state correctly with localStorage', () => {
    OnboardingService.reset();
    expect(OnboardingService.isAccepted()).toBe(false);

    OnboardingService.setAccepted();
    expect(OnboardingService.isAccepted()).toBe(true);

    OnboardingService.reset();
    expect(OnboardingService.isAccepted()).toBe(false);
  });
});
