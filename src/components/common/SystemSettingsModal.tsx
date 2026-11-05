import React from 'react';
import { useAppUpdates } from '../../hooks/useAppUpdates';
import {
  X,
  RefreshCw,
  Zap,
  CheckCircle2,
  Calendar,
  Clock,
  ShieldCheck,
  Server,
  Sparkles,
  AlertTriangle
} from 'lucide-react';

interface SystemSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SystemSettingsModal: React.FC<SystemSettingsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    releaseDate,
    appVersion,
    lastCheckDate,
    isChecking,
    statusMessage,
    hasUpdate,
    checkForUpdates,
    forceUpdate
  } = useAppUpdates();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Paramètres système et mises à jour"
    >
      <div
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#D9CBB7] p-6 md:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#D9CBB7]/40 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#242321] text-white flex items-center justify-center font-serif font-bold text-lg">
              M
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9A3412]">
                Système &amp; Maintenance
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#242321]">
                Paramètres de l'Application
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#77736D] hover:text-[#242321] rounded-full hover:bg-[#F7F4ED] transition-colors"
            title="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* System Information Card */}
        <div className="bg-[#F7F4ED] rounded-xl border border-[#D9CBB7]/60 p-5 space-y-3.5 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#D9CBB7]/40">
            <span className="text-[#77736D] flex items-center gap-1.5 font-medium">
              <Server className="w-4 h-4 text-[#9A3412]" />
              Version installée
            </span>
            <span className="font-mono font-bold text-[#242321] bg-white px-2 py-0.5 rounded border border-[#D9CBB7]/60">
              v{appVersion} (PWA Autonome)
            </span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-[#D9CBB7]/40">
            <span className="text-[#77736D] flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-[#9A3412]" />
              Date de sortie
            </span>
            <span className="font-medium text-[#242321]">{releaseDate}</span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-[#D9CBB7]/40">
            <span className="text-[#77736D] flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-[#9A3412]" />
              Dernière vérification
            </span>
            <span className="font-medium text-[#242321]">{lastCheckDate}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#77736D] flex items-center gap-1.5 font-medium">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Mise à jour en arrière-plan
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              <CheckCircle2 className="w-3 h-3" />
              Automatique (toutes les 15 min)
            </span>
          </div>
        </div>

        {/* Status Message / Notification */}
        {statusMessage && (
          <div
            className={`p-3 rounded-lg text-xs flex items-center gap-2 border ${
              hasUpdate
                ? 'bg-amber-50 text-amber-900 border-amber-200'
                : 'bg-emerald-50 text-emerald-900 border-emerald-200'
            }`}
          >
            {hasUpdate ? (
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            )}
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Check for updates button */}
            <button
              onClick={checkForUpdates}
              disabled={isChecking}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#242321] text-white text-xs font-semibold hover:bg-[#3A3835] transition-colors disabled:opacity-50 shadow-xs"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isChecking ? 'animate-spin' : ''}`} />
              <span>{isChecking ? 'Vérification...' : 'Vérifier les mises à jour'}</span>
            </button>

            {/* Force update button */}
            <button
              onClick={forceUpdate}
              disabled={isChecking}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#9A3412] border border-[#D9CBB7] hover:border-[#9A3412] hover:bg-[#F7F4ED] text-xs font-semibold transition-colors disabled:opacity-50"
              title="Purge tous les caches du navigateur et recharge immédiatement la version la plus récente"
            >
              <Zap className="w-3.5 h-3.5 text-[#9A3412]" />
              <span>Forcer la mise à jour</span>
            </button>
          </div>

          <p className="text-[11px] text-[#77736D] text-center leading-relaxed">
            Le bouton « Forcer la mise à jour » vide le cache local du navigateur et recharge l'application à neuf sans perdre vos notes ni vos favoris.
          </p>
        </div>

        {/* Security & Offline note */}
        <div className="border-t border-[#D9CBB7]/40 pt-4 flex items-center justify-between text-xs text-[#77736D]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Données 100% locales &amp; privées</span>
          </span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#242321] hover:underline"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
