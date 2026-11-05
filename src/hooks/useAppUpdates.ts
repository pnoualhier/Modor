import { useState, useEffect, useCallback } from 'react';
import { UpdateService, APP_VERSION, RELEASE_DATE } from '../services/updateService';

export function useAppUpdates() {
  const [lastCheckDate, setLastCheckDate] = useState<string>(() => UpdateService.getLastUpdateCheck());
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [hasUpdate, setHasUpdate] = useState<boolean>(false);
  const [backgroundUpdated, setBackgroundUpdated] = useState<boolean>(false);

  // Background auto-update registration
  useEffect(() => {
    const cleanup = UpdateService.registerBackgroundAutoUpdate(() => {
      setBackgroundUpdated(true);
      setLastCheckDate(UpdateService.getLastUpdateCheck());
    });
    return cleanup;
  }, []);

  const checkForUpdates = useCallback(async () => {
    setIsChecking(true);
    setStatusMessage('Vérification de la disponibilité de nouvelles versions...');
    try {
      const res = await UpdateService.checkForUpdates();
      setLastCheckDate(UpdateService.getLastUpdateCheck());
      setHasUpdate(res.hasUpdate);
      setStatusMessage(res.message);
    } catch {
      setStatusMessage('Impossible de vérifier les mises à jour (vérifiez votre connexion).');
    } finally {
      setIsChecking(false);
    }
  }, []);

  const forceUpdate = useCallback(async () => {
    setIsChecking(true);
    setStatusMessage('Purge intégrale du cache et mise à jour forcée...');
    await UpdateService.forceUpdate();
  }, []);

  const dismissBackgroundNotification = useCallback(() => {
    setBackgroundUpdated(false);
  }, []);

  return {
    releaseDate: RELEASE_DATE,
    appVersion: APP_VERSION,
    lastCheckDate,
    isChecking,
    statusMessage,
    hasUpdate,
    backgroundUpdated,
    checkForUpdates,
    forceUpdate,
    dismissBackgroundNotification
  };
}
