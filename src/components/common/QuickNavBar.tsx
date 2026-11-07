import React, { useRef, useState, useEffect } from 'react';
import { NavTab } from './Navbar';
import {
  BookOpen,
  Layers,
  Sparkles,
  Scissors,
  Award,
  Image,
  HelpCircle,
  Heart,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Compass,
  Command
} from 'lucide-react';
import { HISTORICAL_PERIODS } from '../../data/periods';

interface QuickNavBarProps {
  activeTab: NavTab;
  onNavigate: (tab: NavTab) => void;
  selectedPeriodId?: string | null;
  onBackToTimeline?: () => void;
  favoritesCount: number;
  onOpenSearch?: () => void;
}

interface NavItemConfig {
  id: NavTab;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  count?: number;
  shortcut?: string;
  hint: string;
}

export const QuickNavBar: React.FC<QuickNavBarProps> = ({
  activeTab,
  onNavigate,
  selectedPeriodId,
  onBackToTimeline,
  favoritesCount,
  onOpenSearch
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [showQuickJump, setShowQuickJump] = useState(false);

  const navItems: NavItemConfig[] = [
    {
      id: 'timeline',
      label: 'Chronologie',
      shortLabel: 'Frise',
      icon: BookOpen,
      shortcut: '1',
      badge: '22',
      hint: 'Frise chronologique de 1500 à 2026'
    },
    {
      id: 'comparator',
      label: 'Silhouettes',
      shortLabel: 'Silhouettes',
      icon: Layers,
      shortcut: '2',
      hint: 'Comparateur morphologique & lignes'
    },
    {
      id: 'anatomy',
      label: 'Anatomie',
      shortLabel: 'Anatomie',
      icon: Sparkles,
      shortcut: '3',
      hint: 'Dissection interactive des sous-structures'
    },
    {
      id: 'garments',
      label: 'Vestiaire',
      shortLabel: 'Vestiaire',
      icon: Scissors,
      shortcut: '4',
      badge: '22',
      hint: 'Catalogue des vêtements historiques'
    },
    {
      id: 'designers',
      label: 'Créateurs',
      shortLabel: 'Créateurs',
      icon: Award,
      shortcut: '5',
      badge: '23',
      hint: 'Panthéon des grands couturiers et modistes'
    },
    {
      id: 'gallery',
      label: 'Galerie',
      shortLabel: 'Galerie',
      icon: Image,
      shortcut: '6',
      badge: '67',
      hint: 'Iconographie et archives visuelles'
    },
    {
      id: 'quiz',
      label: 'Quiz',
      shortLabel: 'Quiz',
      icon: HelpCircle,
      shortcut: '7',
      badge: '18 Q',
      hint: 'Grand quiz historique'
    },
    {
      id: 'favorites',
      label: 'Favoris & Notes',
      shortLabel: 'Favoris',
      icon: Heart,
      shortcut: '8',
      count: favoritesCount,
      hint: 'Sélections sauvegardées et notes personnelles'
    }
  ];

  // Check scroll capability for overflow gradient and buttons
  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const hasScrollLeft = el.scrollLeft > 4;
    const hasScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 4;
    setCanScrollLeft(hasScrollLeft);
    setCanScrollRight(hasScrollRight);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [activeTab, selectedPeriodId]);

  // Scroll active tab into view when activeTab changes
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const activeButton = el.querySelector<HTMLElement>(`[data-nav-id="${activeTab}"]`);
    if (activeButton) {
      const containerRect = el.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      if (buttonRect.left < containerRect.left || buttonRect.right > containerRect.right) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
    checkScroll();
  }, [activeTab]);

  const scrollBy = (offset: number) => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    setTimeout(checkScroll, 250);
  };

  // Keyboard navigation for tablist (Arrow keys, Home, End, number shortcuts 1-8)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % navItems.length;
      onNavigate(navItems[nextIndex].id);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + navItems.length) % navItems.length;
      onNavigate(navItems[prevIndex].id);
    } else if (e.key === 'Home') {
      e.preventDefault();
      onNavigate(navItems[0].id);
    } else if (e.key === 'End') {
      e.preventDefault();
      onNavigate(navItems[navItems.length - 1].id);
    }
  };

  // Global numeric shortcut navigation (Alt+1 through Alt+8)
  useEffect(() => {
    const handleGlobalShortcuts = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.altKey && !e.ctrlKey && !e.metaKey) {
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= navItems.length) {
          e.preventDefault();
          onNavigate(navItems[num - 1].id);
        }
      }
    };
    window.addEventListener('keydown', handleGlobalShortcuts);
    return () => window.removeEventListener('keydown', handleGlobalShortcuts);
  }, [onNavigate, navItems]);

  const selectedPeriod = selectedPeriodId
    ? HISTORICAL_PERIODS.find((p) => p.id === selectedPeriodId)
    : null;

  return (
    <nav
      className="sticky top-16 z-30 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#D9CBB7]/70 shadow-2xs transition-all select-none"
      aria-label="Barre de menu de navigation rapide"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Contextual Breadcrumb if viewing a single Period */}
        {selectedPeriod && (
          <div className="py-2 border-b border-[#D9CBB7]/40 flex items-center justify-between text-xs text-[#77736D] animate-in fade-in duration-200">
            <div className="flex items-center gap-2 truncate">
              <button
                onClick={onBackToTimeline}
                className="flex items-center gap-1.5 font-medium text-[#9A3412] hover:text-[#7C2D12] transition-colors hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9A3412] rounded px-1"
                title="Retourner à la frise chronologique"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Frise Chronologique</span>
              </button>
              <span className="text-[#D9CBB7]">/</span>
              <span className="font-serif font-semibold text-[#242321] truncate">
                {selectedPeriod.title} ({selectedPeriod.startYear}–{selectedPeriod.endYear})
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 shrink-0 text-[11px]">
              <span className="text-[#77736D]">Naviguer vers une autre page ci-dessous :</span>
            </div>
          </div>
        )}

        {/* Horizontal Navigation Menu Strip */}
        <div className="relative flex items-center py-2 gap-1 sm:gap-2">
          {/* Scroll Left Button */}
          {canScrollLeft && (
            <button
              onClick={() => scrollBy(-180)}
              className="hidden md:flex absolute left-0 z-20 w-7 h-7 rounded-full bg-white/95 border border-[#D9CBB7] shadow-sm items-center justify-center text-[#242321] hover:bg-[#F7F4ED] transition-colors"
              aria-label="Faire défiler le menu vers la gauche"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {/* Left Gradient Scrim when scrolled */}
          {canScrollLeft && (
            <div
              className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#FBF9F5] to-transparent pointer-events-none z-10"
              aria-hidden="true"
            />
          )}

          {/* Scrollable Tabs Track */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            role="tablist"
            aria-label="Sections principales de l'application"
            className="flex-1 flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id && !selectedPeriod;

              return (
                <button
                  key={item.id}
                  data-nav-id={item.id}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => onNavigate(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  title={`${item.hint} (Alt+${item.shortcut})`}
                  className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#9A3412] ${
                    isActive
                      ? 'bg-[#242321] text-white shadow-2xs font-semibold'
                      : 'text-[#5A564F] hover:text-[#242321] hover:bg-black/[0.04]'
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 transition-colors shrink-0 ${
                      isActive
                        ? item.id === 'favorites' && (item.count || 0) > 0
                          ? 'fill-[#F7B0A0] text-[#F7B0A0]'
                          : 'text-white'
                        : item.id === 'favorites' && (item.count || 0) > 0
                        ? 'fill-[#9A3412] text-[#9A3412]'
                        : 'text-[#9A3412] group-hover:text-[#7C2D12]'
                    }`}
                  />
                  <span>{item.label}</span>

                  {/* Quantitative or item count indicator */}
                  {item.count !== undefined && item.count > 0 && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[#9A3412] text-white'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}

                  {/* Curatorial item counts (unboxed subtle metadata) */}
                  {item.badge && item.count === undefined && (
                    <span
                      className={`hidden xl:inline text-[10px] font-mono transition-opacity ${
                        isActive ? 'text-white/70' : 'text-[#77736D]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Gradient Scrim when scrollable */}
          {canScrollRight && (
            <div
              className="absolute right-10 md:right-12 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FBF9F5] to-transparent pointer-events-none z-10"
              aria-hidden="true"
            />
          )}

          {/* Scroll Right Button */}
          {canScrollRight && (
            <button
              onClick={() => scrollBy(180)}
              className="hidden md:flex absolute right-10 z-20 w-7 h-7 rounded-full bg-white/95 border border-[#D9CBB7] shadow-sm items-center justify-center text-[#242321] hover:bg-[#F7F4ED] transition-colors"
              aria-label="Faire défiler le menu vers la droite"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          {/* Fast Quick-Jump / Dropdown Affordance */}
          <div className="relative shrink-0 pl-1 border-l border-[#D9CBB7]/50">
            <button
              onClick={() => setShowQuickJump(!showQuickJump)}
              className={`flex items-center gap-1 px-2 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                showQuickJump
                  ? 'bg-[#242321] text-white border-[#242321]'
                  : 'bg-white text-[#5A564F] border-[#D9CBB7] hover:text-[#242321] hover:border-[#242321]'
              }`}
              title="Menu de saut rapide vers toutes les pages"
              aria-expanded={showQuickJump}
              aria-haspopup="true"
            >
              <Compass className="w-3.5 h-3.5 text-[#9A3412]" />
              <span className="hidden sm:inline">Saut rapide</span>
            </button>

            {/* Quick Jump Dropdown Menu */}
            {showQuickJump && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowQuickJump(false)}
                  aria-hidden="true"
                />
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#D9CBB7] p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-2 py-1.5 border-b border-[#D9CBB7]/40 mb-1 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#77736D]">
                      Navigation Immédiate
                    </span>
                    <span className="text-[10px] text-[#77736D] font-mono">Alt + 1..8</span>
                  </div>
                  <div className="space-y-0.5">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isCurrent = activeTab === item.id && !selectedPeriod;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            onNavigate(item.id);
                            setShowQuickJump(false);
                          }}
                          className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-colors text-xs ${
                            isCurrent
                              ? 'bg-[#242321] text-white'
                              : 'hover:bg-[#F7F4ED] text-[#242321]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <Icon
                              className={`w-3.5 h-3.5 shrink-0 ${
                                isCurrent ? 'text-white' : 'text-[#9A3412]'
                              }`}
                            />
                            <div className="truncate">
                              <span className="font-semibold">{item.label}</span>
                              <span
                                className={`block text-[10px] truncate ${
                                  isCurrent ? 'text-white/70' : 'text-[#77736D]'
                                }`}
                              >
                                {item.hint}
                              </span>
                            </div>
                          </div>
                          <kbd
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded ml-2 shrink-0 ${
                              isCurrent
                                ? 'bg-white/20 text-white'
                                : 'bg-[#F7F4ED] text-[#77736D] border border-[#D9CBB7]/60'
                            }`}
                          >
                            Alt+{item.shortcut}
                          </kbd>
                        </button>
                      );
                    })}
                  </div>
                  {onOpenSearch && (
                    <div className="pt-1.5 mt-1 border-t border-[#D9CBB7]/40">
                      <button
                        onClick={() => {
                          setShowQuickJump(false);
                          onOpenSearch();
                        }}
                        className="w-full flex items-center justify-between p-2 rounded-lg text-left text-xs text-[#77736D] hover:text-[#242321] hover:bg-[#F7F4ED] transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Command className="w-3.5 h-3.5 text-[#9A3412]" />
                          <span>Rechercher une pièce ou créateur</span>
                        </div>
                        <kbd className="text-[9px] font-mono px-1 py-0.5 rounded bg-[#F7F4ED] border border-[#D9CBB7]/60">
                          Ctrl+K
                        </kbd>
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
