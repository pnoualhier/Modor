import { useEffect, useState, useCallback } from 'react';
import { StorageService } from '../services/storage';
import { UserFavorites } from '../types';

export function useFavorites() {
  const [data, setData] = useState<UserFavorites>(() => StorageService.load());

  const refresh = useCallback(() => {
    setData(StorageService.load());
  }, []);

  useEffect(() => {
    window.addEventListener('modor_storage_updated', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener('modor_storage_updated', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, [refresh]);

  const toggleFavorite = useCallback(
    (type: 'period' | 'garment' | 'designer', id: string) => {
      const isNowFav = StorageService.toggleFavorite(type, id);
      refresh();
      return isNowFav;
    },
    [refresh]
  );

  const isFavorite = useCallback(
    (type: 'period' | 'garment' | 'designer', id: string) => {
      return StorageService.isFavorite(type, id);
    },
    []
  );

  return {
    favorites: data,
    toggleFavorite,
    isFavorite,
    refresh
  };
}
