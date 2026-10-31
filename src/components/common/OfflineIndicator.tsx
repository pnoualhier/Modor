import React from 'react';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-lg bg-[#242321] text-[#F7F4ED] px-3.5 py-2 text-xs font-medium shadow-xl border border-[#D9CBB7]/40 animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <WifiOff className="w-4 h-4 text-[#D9B8B3]" />
      <span>Mode Hors Ligne — Consultation intégrale depuis le cache local</span>
    </div>
  );
};
