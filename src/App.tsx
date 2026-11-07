import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/common/Navbar';
import { QuickNavBar } from './components/common/QuickNavBar';
import { Footer } from './components/common/Footer';
import { OfflineIndicator } from './components/common/OfflineIndicator';
import { SearchModal } from './components/common/SearchModal';
import { HamburgerMenu } from './components/common/HamburgerMenu';
import { SystemSettingsModal } from './components/common/SystemSettingsModal';
import { OnboardingModal, OnboardingService } from './components/common/OnboardingModal';
import { useAppUpdates } from './hooks/useAppUpdates';
import { TimelineView } from './components/timeline/TimelineView';
import { PeriodDetailView } from './components/periods/PeriodDetailView';
import { SilhouetteComparator } from './components/silhouettes/SilhouetteComparator';
import { AnatomyExplorer } from './components/anatomy/AnatomyExplorer';
import { GarmentCatalog } from './components/garments/GarmentCatalog';
import { DesignerGallery } from './components/designers/DesignerGallery';
import { VisualGallery } from './components/gallery/VisualGallery';
import { QuizView } from './components/quiz/QuizView';
import { FavoritesView } from './components/favorites/FavoritesView';
import { useFavorites } from './hooks/useFavorites';
import { StorageService } from './services/storage';
import { Sparkles, RefreshCw, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('timeline');
  const [selectedPeriodId, setSelectedPeriodId] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [onboardingOpen, setOnboardingOpen] = useState<boolean>(() => !OnboardingService.isAccepted());

  const { favorites, toggleFavorite, isFavorite, refresh } = useFavorites();
  const { backgroundUpdated, dismissBackgroundNotification, forceUpdate } = useAppUpdates();

  // Scroll to top upon view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedPeriodId]);

  // Global Keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectPeriod = (id: string) => {
    setSelectedPeriodId(id);
    setActiveTab('timeline');
    StorageService.recordVisit('period', id);
    refresh();
  };

  const handleSelectGarment = (id: string) => {
    setSelectedPeriodId(null);
    setActiveTab('garments');
    StorageService.recordVisit('garment', id);
    refresh();
  };

  const handleSelectDesigner = (id: string) => {
    setSelectedPeriodId(null);
    setActiveTab('designers');
    StorageService.recordVisit('designer', id);
    refresh();
  };

  const handleNavigate = (tab: NavTab) => {
    setSelectedPeriodId(null);
    setActiveTab(tab);
  };

  const totalFavoritesCount =
    favorites.periodIds.length + favorites.garmentIds.length + favorites.designerIds.length;

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4ED] text-[#242321] font-sans pb-16 md:pb-0">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#242321] focus:text-[#F7F4ED] focus:rounded-md focus:shadow-lg focus:outline-none text-xs font-semibold"
      >
        Aller au contenu principal
      </a>

      {/* PWA Offline Status Toast */}
      <OfflineIndicator />

      {/* Background Update Notification Toast */}
      {backgroundUpdated && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-16 md:bottom-6 right-4 z-50 max-w-sm bg-[#242321] text-white p-4 rounded-2xl shadow-2xl border border-white/20 flex items-start gap-3 animate-in slide-in-from-bottom duration-300"
        >
          <div className="p-2 bg-emerald-500/20 text-emerald-300 rounded-xl shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0 text-xs space-y-1">
            <p className="font-semibold text-white">Mise à jour prête</p>
            <p className="text-white/80 text-[11px] leading-relaxed">
              Une nouvelle version de Modor a été installée en arrière-plan.
            </p>
            <div className="flex items-center gap-2 pt-1.5">
              <button
                onClick={forceUpdate}
                className="flex items-center gap-1.5 px-3 py-1 bg-white text-[#242321] rounded-lg font-semibold text-[11px] hover:bg-white/90 transition-colors shadow-2xs"
              >
                <RefreshCw className="w-3 h-3" />
                Actualiser
              </button>
              <button
                onClick={dismissBackgroundNotification}
                className="text-white/60 hover:text-white text-[11px] px-2 py-1"
              >
                Plus tard
              </button>
            </div>
          </div>
          <button
            onClick={dismissBackgroundNotification}
            className="text-white/50 hover:text-white p-1 rounded"
            aria-label="Fermer la notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {/* Global Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenHamburger={() => setHamburgerOpen(true)}
        onOpenSettings={() => setSettingsOpen(true)}
        onOpenOnboarding={() => setOnboardingOpen(true)}
        favoritesCount={totalFavoritesCount}
      />

      {/* Barre de Menu & Navigation Rapide entre Pages */}
      <QuickNavBar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        selectedPeriodId={selectedPeriodId}
        onBackToTimeline={() => setSelectedPeriodId(null)}
        favoritesCount={totalFavoritesCount}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Reading Stage */}
      <main id="main-content" tabIndex={-1} className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 outline-none">
        {selectedPeriodId ? (
          <PeriodDetailView
            periodId={selectedPeriodId}
            onBack={() => setSelectedPeriodId(null)}
            onSelectPeriod={handleSelectPeriod}
            onSelectGarment={handleSelectGarment}
            onSelectDesigner={handleSelectDesigner}
            isFavorite={isFavorite('period', selectedPeriodId)}
            onToggleFavorite={() => toggleFavorite('period', selectedPeriodId)}
          />
        ) : (
          <>
            {activeTab === 'timeline' && (
              <TimelineView onSelectPeriod={handleSelectPeriod} />
            )}

            {activeTab === 'comparator' && (
              <SilhouetteComparator />
            )}

            {activeTab === 'anatomy' && (
              <AnatomyExplorer />
            )}

            {activeTab === 'garments' && (
              <GarmentCatalog
                onSelectPeriod={handleSelectPeriod}
                favorites={favorites.garmentIds}
                onToggleFavorite={(id) => toggleFavorite('garment', id)}
              />
            )}

            {activeTab === 'designers' && (
              <DesignerGallery
                onSelectPeriod={handleSelectPeriod}
                favorites={favorites.designerIds}
                onToggleFavorite={(id) => toggleFavorite('designer', id)}
              />
            )}

            {activeTab === 'gallery' && (
              <VisualGallery
                onSelectPeriod={handleSelectPeriod}
                onSelectGarment={handleSelectGarment}
                onSelectDesigner={handleSelectDesigner}
              />
            )}

            {activeTab === 'quiz' && (
              <QuizView />
            )}

            {activeTab === 'favorites' && (
              <FavoritesView
                onSelectPeriod={handleSelectPeriod}
                onSelectGarment={handleSelectGarment}
                onSelectDesigner={handleSelectDesigner}
                onRefresh={refresh}
              />
            )}
          </>
        )}
      </main>

      {/* Global Museum Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Categorized Hamburger Menu */}
      <HamburgerMenu
        isOpen={hamburgerOpen}
        onClose={() => setHamburgerOpen(false)}
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenSettings={() => setSettingsOpen(true)}
        onOpenOnboarding={() => setOnboardingOpen(true)}
        favoritesCount={totalFavoritesCount}
      />

      {/* System Settings & Updates Modal */}
      <SystemSettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />

      {/* Onboarding & Legal Disclaimer Modal */}
      <OnboardingModal
        isOpen={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      {/* Instant Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectPeriod={handleSelectPeriod}
        onSelectGarment={handleSelectGarment}
        onSelectDesigner={handleSelectDesigner}
      />
    </div>
  );
}
