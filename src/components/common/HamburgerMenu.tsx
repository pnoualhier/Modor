import React, { useEffect } from 'react';
import { NavTab } from './Navbar';
import {
  X,
  BookOpen,
  Image,
  Layers,
  Sparkles,
  Scissors,
  Award,
  HelpCircle,
  Search,
  Heart,
  Settings,
  ShieldAlert,
  Download,
  Smartphone,
  ChevronRight,
  RefreshCw
} from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { HISTORICAL_GARMENTS } from '../../data/garments';
import { HISTORICAL_DESIGNERS } from '../../data/designers';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: NavTab;
  onNavigate: (tab: NavTab) => void;
  onOpenSearch: () => void;
  onOpenSettings: () => void;
  onOpenOnboarding: () => void;
  favoritesCount: number;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onClose,
  activeTab,
  onNavigate,
  onOpenSearch,
  onOpenSettings,
  onOpenOnboarding,
  favoritesCount,
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  // Close with Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectTab = (tab: NavTab) => {
    onNavigate(tab);
    onClose();
  };

  const categories = [
    {
      name: 'Histoire & Époques',
      items: [
        {
          id: 'timeline' as NavTab,
          label: 'Frise Chronologique',
          desc: '22 périodes historiques de 1500 à 2026',
          icon: BookOpen,
          badge: '22 époques'
        },
        {
          id: 'gallery' as NavTab,
          label: 'Galerie Iconographique',
          desc: '67 planches, portraits et gravures d\'archives',
          icon: Image,
          badge: '67 œuvres'
        }
      ]
    },
    {
      name: 'Morphologie & Silhouettes',
      items: [
        {
          id: 'comparator' as NavTab,
          label: 'Comparateur de Silhouettes',
          desc: 'Analyse vectorielle normalisée et calques d\'armature',
          icon: Layers,
          badge: 'Mode Duo'
        },
        {
          id: 'anatomy' as NavTab,
          label: 'Anatomie du Costume',
          desc: 'Dissection interactive couche par couche',
          icon: Sparkles,
          badge: 'Hotspots'
        }
      ]
    },
    {
      name: 'Vestiaire & Haute Couture',
      items: [
        {
          id: 'garments' as NavTab,
          label: 'Catalogue des Vêtements',
          desc: 'Crinolines, paniers, corsets, robes et structures',
          icon: Scissors,
          badge: `${HISTORICAL_GARMENTS.length} pièces`
        },
        {
          id: 'designers' as NavTab,
          label: 'Panthéon des Créateurs',
          desc: `${HISTORICAL_DESIGNERS.length} visionnaires de Rose Bertin à Jacquemus`,
          icon: Award,
          badge: `${HISTORICAL_DESIGNERS.length} créateurs`
        }
      ]
    },
    {
      name: 'Pédagogie & Recherche',
      items: [
        {
          id: 'quiz' as NavTab,
          label: 'Grand Quiz de la Mode',
          desc: 'Testez votre érudition avec 18 questions d\'époque',
          icon: HelpCircle,
          badge: '18 questions'
        }
      ]
    },
    {
      name: 'Espace Personnel',
      items: [
        {
          id: 'favorites' as NavTab,
          label: 'Favoris & Notes Locales',
          desc: 'Vos sélections sauvegardées et export JSON',
          icon: Heart,
          badge: favoritesCount > 0 ? `${favoritesCount} favoris` : undefined
        }
      ]
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Menu principal par catégories"
    >
      <div
        className="w-full max-w-md bg-[#F7F4ED] h-full shadow-2xl border-l border-[#D9CBB7] flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#D9CBB7]/60 bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#242321] text-white flex items-center justify-center font-serif font-bold text-base shadow-xs">
              M
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9A3412] block">
                Menu Général
              </span>
              <h2 className="text-xl font-serif font-bold text-[#242321]">
                Modor — Mode &amp; Mémoire
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#77736D] hover:text-[#242321] rounded-full hover:bg-[#F7F4ED] transition-colors"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Categories Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Quick Search Shortcut Bar inside Menu */}
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-white border border-[#D9CBB7]/80 hover:border-[#242321] shadow-xs transition-all text-left group"
          >
            <div className="flex items-center gap-2.5 text-xs text-[#77736D] group-hover:text-[#242321]">
              <Search className="w-4 h-4 text-[#9A3412]" />
              <span className="font-medium">Rechercher une pièce, un créateur...</span>
            </div>
            <kbd className="hidden sm:inline text-[10px] bg-[#F7F4ED] px-2 py-0.5 rounded border border-[#D9CBB7]/60 text-[#77736D] font-mono">
              Ctrl+K
            </kbd>
          </button>

          {/* Categorized Modules */}
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#77736D] px-1 font-sans">
                {cat.name}
              </span>
              <div className="space-y-1 bg-white rounded-xl border border-[#D9CBB7]/60 p-1.5 shadow-2xs">
                {cat.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectTab(item.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-colors ${
                        isActive
                          ? 'bg-[#242321] text-white'
                          : 'hover:bg-[#F7F4ED] text-[#242321]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#D9B8B3]' : 'text-[#9A3412]'}`} />
                        <div className="truncate">
                          <div className={`text-xs font-semibold ${isActive ? 'text-white' : 'text-[#242321]'}`}>
                            {item.label}
                          </div>
                          <div className={`text-[11px] truncate ${isActive ? 'text-white/70' : 'text-[#77736D]'}`}>
                            {item.desc}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0 ml-2">
                        {item.badge && (
                          <span
                            className={`text-[9px] px-2 py-0.5 rounded-full font-mono font-medium ${
                              isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-[#F7F4ED] text-[#77736D] border border-[#D9CBB7]/60'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                        <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#77736D]'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Category: Système & Maintenance */}
          <div className="space-y-2 pt-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#77736D] px-1 font-sans">
              Système &amp; Application
            </span>
            <div className="space-y-1 bg-white rounded-xl border border-[#D9CBB7]/60 p-1.5 shadow-2xs">
              {/* System Settings & Updates */}
              <button
                onClick={() => {
                  onClose();
                  onOpenSettings();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-left hover:bg-[#F7F4ED] text-[#242321] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Settings className="w-4 h-4 text-[#9A3412]" />
                  <div>
                    <div className="text-xs font-semibold text-[#242321]">
                      Paramètres Système &amp; Mises à Jour
                    </div>
                    <div className="text-[11px] text-[#77736D]">
                      Version, date de sortie et purge du cache
                    </div>
                  </div>
                </div>
                <RefreshCw className="w-3.5 h-3.5 text-[#77736D]" />
              </button>

              {/* Onboarding & Legal Disclaimer */}
              <button
                onClick={() => {
                  onClose();
                  onOpenOnboarding();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-left hover:bg-[#F7F4ED] text-[#242321] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-4 h-4 text-[#9A3412]" />
                  <div>
                    <div className="text-xs font-semibold text-[#242321]">
                      Guide d'Accueil &amp; Mentions Légales
                    </div>
                    <div className="text-[11px] text-[#77736D]">
                      Clause de non-responsabilité et aide novice
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-[#77736D]" />
              </button>

              {/* Landing Page Link */}
              <a
                href="/landing/"
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-left hover:bg-[#F7F4ED] text-[#242321] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-[#9A3412]" />
                  <div>
                    <div className="text-xs font-semibold text-[#242321]">
                      Présentation Officielle (Landing Page)
                    </div>
                    <div className="text-[11px] text-[#77736D]">
                      Vitrine culturelle, métriques et aperçu du projet
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-[#77736D]" />
              </a>
            </div>
          </div>
        </div>

        {/* Drawer Bottom Bar with Install App action */}
        <div className="p-4 bg-white border-t border-[#D9CBB7]/60 space-y-3">
          {isInstallable && (
            <button
              onClick={install}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#242321] text-white text-xs font-semibold hover:bg-[#3A3835] transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Installer l'application sur l'appareil</span>
            </button>
          )}

          {isIOS && (
            <div className="p-2.5 rounded-lg bg-[#F7F4ED] border border-[#D9CBB7]/60 text-[11px] text-[#242321] flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#9A3412] shrink-0" />
              <span>Pour installer sur iPhone : bouton Partager ➔ « Sur l'écran d'accueil ».</span>
            </div>
          )}

          <div className="flex items-center justify-between text-[11px] text-[#77736D] pt-1">
            <span>Modor v1.1.0 • 100% Hors-ligne</span>
            <button
              onClick={() => {
                onClose();
                onOpenSettings();
              }}
              className="underline hover:text-[#242321]"
            >
              Vérifier version
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
