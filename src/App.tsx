import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { OfflineIndicator } from './components/common/OfflineIndicator';
import { SearchModal } from './components/common/SearchModal';
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

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('timeline');
  const [selectedPeriodId, setSelectedPeriodId] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  const { favorites, toggleFavorite, isFavorite, refresh } = useFavorites();

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
    <div className="min-h-screen flex flex-col bg-[#F7F4ED] text-[#242321] font-sans">
      {/* PWA Offline Status Toast */}
      <OfflineIndicator />

      {/* Global Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        favoritesCount={totalFavoritesCount}
      />

      {/* Main Reading Stage */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
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
