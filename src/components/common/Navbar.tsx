import React, { useState } from 'react';
import { PWAInstallButton } from './PWAInstallButton';
import { Search, Heart, HelpCircle, Layers, Sparkles, Menu, X, BookOpen } from 'lucide-react';

export type NavTab = 'timeline' | 'comparator' | 'anatomy' | 'garments' | 'designers' | 'gallery' | 'quiz' | 'favorites';

interface NavbarProps {
  activeTab: NavTab;
  onNavigate: (tab: NavTab) => void;
  onOpenSearch: () => void;
  favoritesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenSearch,
  favoritesCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavTab; label: string }[] = [
    { id: 'timeline', label: 'Chronologie' },
    { id: 'comparator', label: 'Silhouettes' },
    { id: 'anatomy', label: 'Anatomie' },
    { id: 'garments', label: 'Vêtements' },
    { id: 'designers', label: 'Créateurs' },
    { id: 'quiz', label: 'Quiz' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Header compliant with Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#F7F4ED]/95 backdrop-blur-md border-b border-[#D9CBB7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element wordmark) */}
          <button
            onClick={() => handleNavClick('timeline')}
            className="text-left whitespace-nowrap shrink-0 group flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-[#242321] text-[#F7F4ED] flex items-center justify-center font-serif font-bold text-sm">
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

          {/* Zone 2: Clean 4–5 single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#77736D]">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#242321]'
                      : 'hover:text-[#242321]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#242321] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Utility Action & Search & PWA Install */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#D9CBB7] bg-white text-xs font-medium text-[#77736D] hover:text-[#242321] hover:border-[#242321] transition-colors whitespace-nowrap"
              title="Rechercher dans toute l'encyclopédie"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Recherche</span>
            </button>

            {/* Favorites Icon */}
            <button
              onClick={() => handleNavClick('favorites')}
              className={`relative p-2 rounded-lg border transition-colors ${
                activeTab === 'favorites'
                  ? 'bg-[#242321] text-white border-[#242321]'
                  : 'bg-white text-[#77736D] border-[#D9CBB7] hover:text-[#242321]'
              }`}
              title="Mes favoris"
              aria-label="Voir mes favoris"
            >
              <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'fill-[#9A3412] text-[#9A3412]' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#9A3412] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* PWA Install Button */}
            <div className="hidden sm:block">
              <PWAInstallButton />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#242321] rounded-lg border border-[#D9CBB7] bg-white"
              aria-label="Menu de navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#D9CBB7]/40 bg-[#F7F4ED] p-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider ${
                  activeTab === link.id
                    ? 'bg-[#242321] text-white'
                    : 'text-[#242321] hover:bg-[#D9CBB7]/30'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#D9CBB7]/40 flex items-center justify-between">
              <button
                onClick={() => handleNavClick('gallery')}
                className="text-xs font-semibold text-[#77736D] hover:text-[#242321]"
              >
                Galerie iconographique
              </button>
              <PWAInstallButton />
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Fixed Nav Rail (Thumb zone friendly for Mobile-First PWA) */}
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
