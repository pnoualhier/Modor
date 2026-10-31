import React, { useState } from 'react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { Download, Smartphone, X } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 rounded-lg bg-[#242321] px-3 py-1.5 text-xs font-medium text-[#F7F4ED] shadow-xs hover:bg-[#3A3835] transition-colors whitespace-nowrap shrink-0"
        title="Installer Modor sur votre appareil pour consultation hors-ligne"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Installer l'application</span>
      </button>
    );
  }

  // iOS Safari flow (beforeinstallprompt is not supported by WebKit)
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 rounded-lg border border-[#D9CBB7] px-2.5 py-1.5 text-xs font-medium text-[#242321] hover:bg-[#F7F4ED] transition-colors whitespace-nowrap shrink-0"
          title="Installer sur iPhone ou iPad"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Installer sur iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-[#D9CBB7] space-y-4">
              <div className="flex items-center justify-between border-b border-[#D9CBB7]/40 pb-3">
                <h3 className="text-base font-serif font-bold text-[#242321]">
                  Installer Modor sur iPhone &amp; iPad
                </h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="text-[#77736D] hover:text-[#242321] p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-[#242321] space-y-2 leading-relaxed">
                <p>
                  1. Touchez le bouton de <strong>Partage</strong> (l'icône carrée avec la flèche vers le haut) dans la barre de Safari.
                </p>
                <p>
                  2. Faites défiler vers le bas et touchez <strong>« Sur l'écran d'accueil »</strong>.
                </p>
                <p>
                  3. L'application s'installera comme une application native autonome avec accès hors-ligne complet.
                </p>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-4 w-full rounded-lg bg-[#242321] py-2 text-xs font-semibold text-white hover:bg-[#3A3835] transition-colors"
              >
                Compris
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
