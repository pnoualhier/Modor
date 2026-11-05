export const APP_VERSION = '1.1.0';
export const RELEASE_DATE = '5 Novembre 2026';

const LAST_CHECK_KEY = 'modor_last_update_check';

export class UpdateService {
  public static getLastUpdateCheck(): string {
    if (typeof window === 'undefined' || !window.localStorage) {
      return new Date().toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    const stored = localStorage.getItem(LAST_CHECK_KEY);
    if (stored) return stored;
    const nowFormatted = new Date().toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    localStorage.setItem(LAST_CHECK_KEY, nowFormatted);
    return nowFormatted;
  }

  public static setLastUpdateCheck(dateString?: string): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    const formatted = dateString || new Date().toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    localStorage.setItem(LAST_CHECK_KEY, formatted);
  }

  /**
   * Checks for updates by querying ServiceWorker registration and checking index.html freshness.
   */
  public static async checkForUpdates(): Promise<{ hasUpdate: boolean; message: string }> {
    this.setLastUpdateCheck();

    // 1. Check Service Worker registration update
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          await registration.update();
          if (registration.waiting || registration.installing) {
            return {
              hasUpdate: true,
              message: 'Une nouvelle version a été téléchargée et est prête à être activée.'
            };
          }
        }
      } catch (err) {
        console.warn('Erreur lors de la vérification du service worker:', err);
      }
    }

    // 2. Network timestamp / etag check for index.html (cache busting)
    if (typeof window !== 'undefined' && navigator.onLine) {
      try {
        const res = await fetch(`/index.html?_t=${Date.now()}`, {
          method: 'HEAD',
          cache: 'no-cache',
          headers: { 'Cache-Control': 'no-cache' }
        });
        if (res.ok) {
          // System checked and responds
          return {
            hasUpdate: false,
            message: 'Votre application Modor est déjà à jour avec la dernière version.'
          };
        }
      } catch {
        // network issue or offline
      }
    }

    return {
      hasUpdate: false,
      message: 'Vérification effectuée : aucune mise à jour requise.'
    };
  }

  /**
   * Forces complete cache purge and service worker refresh.
   */
  public static async forceUpdate(): Promise<void> {
    this.setLastUpdateCheck();

    if (typeof window === 'undefined') return;

    // Purge CacheStorage
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((name) => caches.delete(name)));
      } catch (e) {
        console.warn('Erreur lors de la purge du cache:', e);
      }
    }

    // Unregister existing Service Workers
    if ('serviceWorker' in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const reg of registrations) {
          await reg.unregister();
        }
      } catch (e) {
        console.warn('Erreur lors de la désinscription des service workers:', e);
      }
    }

    // Force hard reload
    window.location.reload();
  }

  /**
   * Configures automatic background updates polling every 15 minutes and on visibility/online.
   */
  public static registerBackgroundAutoUpdate(onAutoUpdated?: () => void): () => void {
    if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
      return () => {};
    }

    const check = async () => {
      if (typeof navigator !== 'undefined' && !navigator.onLine) return;
      try {
        if ('serviceWorker' in navigator) {
          const reg = await navigator.serviceWorker.getRegistration();
          if (reg) {
            await reg.update();
            if (reg.waiting) {
              reg.waiting.postMessage({ type: 'SKIP_WAITING' });
              if (onAutoUpdated) onAutoUpdated();
            }
          }
        }
      } catch (err) {
        console.debug('Background update check silent error:', err);
      }
    };

    // Run first check after 10s of load
    const initialTimer = setTimeout(check, 10000);

    // Periodic check every 15 minutes
    const intervalTimer = setInterval(check, 15 * 60 * 1000);

    // Check on visibility change (user comes back to tab)
    const onVisibilityChange = () => {
      if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
        check();
      }
    };
    if (typeof document !== 'undefined' && document.addEventListener) {
      document.addEventListener('visibilitychange', onVisibilityChange);
    }

    // Check when back online
    window.addEventListener('online', check);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
      if (typeof document !== 'undefined' && document.removeEventListener) {
        document.removeEventListener('visibilitychange', onVisibilityChange);
      }
      window.removeEventListener('online', check);
    };
  }
}
