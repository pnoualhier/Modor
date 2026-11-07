import React from 'react';
import { PWAInstallButton } from './PWAInstallButton';
import {
  Search,
  Heart,
  Settings,
  HelpCircle,
  Menu,
  Layers,
  Sparkles,
  BookOpen
} from 'lucide-react';

export type NavTab = 'timeline' | 'comparator' | 'anatomy' | 'garments' | 'designers' | 'gallery' | 'quiz' | 'favorites';

interface NavbarProps {
  activeTab: NavTab;
  onNavigate: (tab: NavTab) => void;
  onOpenSearch: () => void;
  onOpenHamburger: () => void;
  onOpenSettings: () => void;
  onOpenOnboarding: () => void;
  favoritesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenSearch,
  onOpenHamburger,
  onOpenSettings,
  onOpenOnboarding,
  favoritesCount,
}) => {
  return (
    <>
      {/* Top Header compliant with Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#F7F4ED]/95 backdrop-blur-md border-b border-[#D9CBB7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 md:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => onNavigate('timeline')}
            className="text-left whitespace-nowrap shrink-0 group flex items-center gap-2.5"
            aria-label="Retour à l'accueil Modor"
          >
            <div className="w-9 h-9 rounded-xl bg-[#242321] text-[#F7F4ED] flex items-center justify-center font-serif font-bold text-base shadow-xs group-hover:bg-[#9A3412] transition-colors">
              M
            </div>
            <div>
              <span className="text-xl font-serif font-bold tracking-tight text-[#242321] group-hover:text-[#9A3412] transition-colors">
                Modor
              </span>
              <span className="hidden sm:inline text-[11px] text-[#77736D] font-sans ml-2 tracking-widest uppercase">
                Mode &amp; Mémoire
              </span>
            </div>
          </button>

          {/* Zone 2: Curatorial Heritage Anchor (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-[#77736D]">
            <span>Histoire de la mode féminine en France</span>
            <span aria-hidden="true">·</span>
            <span>1500–2026</span>
          </div>

          {/* Zone 3: Utility Controls & Hamburger Button */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#D9CBB7] bg-white text-xs font-medium text-[#77736D] hover:text-[#242321] hover:border-[#242321] transition-colors whitespace-nowrap"
              title="Recherche globale (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#9A3412]" />
              <span className="hidden md:inline">Recherche</span>
            </button>

            {/* Favorites Icon */}
            <button
              onClick={() => onNavigate('favorites')}
              className={`relative p-2 rounded-lg border transition-colors ${
                activeTab === 'favorites'
                  ? 'bg-[#242321] text-white border-[#242321]'
                  : 'bg-white text-[#77736D] border-[#D9CBB7] hover:text-[#242321]'
              }`}
              title="Mes favoris et notes"
              aria-label="Voir mes favoris"
            >
              <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'fill-[#9A3412] text-[#9A3412]' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#9A3412] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Guide & Mentions Légales Button */}
            <button
              onClick={onOpenOnboarding}
              className="p-2 rounded-lg border border-[#D9CBB7] bg-white text-[#77736D] hover:text-[#242321] hover:bg-[#F7F4ED] transition-colors hidden sm:flex items-center justify-center"
              title="Guide d'accueil et mentions légales"
              aria-label="Guide d'accueil et mentions légales"
            >
              <HelpCircle className="w-4 h-4" />
            </button>

            {/* System Settings & Updates Button */}
            <button
              onClick={onOpenSettings}
              className="p-2 rounded-lg border border-[#D9CBB7] bg-white text-[#77736D] hover:text-[#242321] hover:bg-[#F7F4ED] transition-colors hidden sm:flex items-center justify-center"
              title="Paramètres système et mises à jour"
              aria-label="Paramètres système et mises à jour"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* PWA Install Button */}
            <div className="hidden sm:block">
              <PWAInstallButton />
            </div>

            {/* Categorized Hamburger Menu Trigger */}
            <button
              onClick={onOpenHamburger}
              className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 text-[#242321] rounded-xl border border-[#D9CBB7] bg-white hover:bg-[#F7F4ED] hover:border-[#242321] transition-all shadow-2xs"
              aria-label="Ouvrir le menu complet par catégories"
              title="Menu complet par catégories"
            >
              <Menu className="w-4 h-4 text-[#9A3412]" />
              <span className="text-xs font-semibold hidden md:inline">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Fixed Nav Rail (Thumb-friendly for mobile devices) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F7F4ED]/95 backdrop-blur-md border-t border-[#D9CBB7]/60 h-14 flex items-center justify-around px-2 shadow-lg">
        {[
          { id: 'timeline' as NavTab, label: 'Frise', icon: BookOpen },
          { id: 'comparator' as NavTab, label: 'Silhouettes', icon: Layers },
          { id: 'anatomy' as NavTab, label: 'Anatomie', icon: Sparkles },
          { id: 'garments' as NavTab, label: 'Vêtements', icon: Search },
          { id: 'favorites' as NavTab, label: 'Favoris', icon: Heart },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 text-[10px] font-medium transition-colors ${
                isActive ? 'text-[#9A3412] font-bold' : 'text-[#77736D] hover:text-[#242321]'
              }`}
            >
              <Icon className={`w-4 h-4 mb-0.5 ${isActive && item.id === 'favorites' ? 'fill-current' : ''}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
