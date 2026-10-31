import React from 'react';
import { NavTab } from './Navbar';
import { ShieldCheck, Wifi, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#242321] text-[#F7F4ED] pt-14 pb-20 md:pb-12 border-t border-[#3A3835]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top 3-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Wordmark & Manifesto */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#F7F4ED] text-[#242321] flex items-center justify-center font-serif font-bold text-xs">
                M
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">
                Modor — Mode &amp; Mémoire
              </span>
            </div>
            <p className="text-xs text-[#D9CBB7]/80 max-w-md leading-relaxed">
              Encyclopédie patrimoniale consacrée à l'histoire et à l'évolution des vêtements féminins en France, de la Renaissance au XXIe siècle. Réalisée pour les étudiants, chercheurs et passionnés d'histoire du costume.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#A6AA99] pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Hors-Ligne &amp; Respect de la vie privée</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Wifi className="w-4 h-4 text-[#D9B8B3]" />
                <span>PWA autonome</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3 text-xs">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#D9CBB7]">
              Modules Interactifs
            </div>
            <ul className="space-y-1.5 text-[#D9CBB7]/80">
              <li>
                <button onClick={() => onNavigate('timeline')} className="hover:text-white transition-colors">
                  Frise chronologique (1500–2026)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('comparator')} className="hover:text-white transition-colors">
                  Comparateur de silhouettes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('anatomy')} className="hover:text-white transition-colors">
                  Anatomie &amp; dessous d'époque
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('garments')} className="hover:text-white transition-colors">
                  Catalogue des vêtements
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('designers')} className="hover:text-white transition-colors">
                  Maisons de couture &amp; créateurs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">
                  Galerie iconographique
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quiz')} className="hover:text-white transition-colors">
                  Quiz &amp; Apprentissage
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Sources & Collections */}
          <div className="space-y-3 text-xs">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#D9CBB7]">
              Fonds Documentaires
            </div>
            <ul className="space-y-1.5 text-[#D9CBB7]/80">
              <li>
                <a
                  href="https://www.palaisgalliera.paris.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <span>Palais Galliera (Paris)</span>
                  <ExternalLink className="w-3 h-3 text-[#A6AA99]" />
                </a>
              </li>
              <li>
                <a
                  href="https://gallica.bnf.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <span>Bibliothèque nationale de France (Gallica)</span>
                  <ExternalLink className="w-3 h-3 text-[#A6AA99]" />
                </a>
              </li>
              <li>
                <a
                  href="https://madparis.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <span>Musée des Arts Décoratifs de Paris</span>
                  <ExternalLink className="w-3 h-3 text-[#A6AA99]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.metmuseum.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <span>The Costume Institute (Met Museum)</span>
                  <ExternalLink className="w-3 h-3 text-[#A6AA99]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Hairline & Legal */}
        <div className="pt-8 border-t border-[#3A3835] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A6AA99] gap-4">
          <div>
            © {new Date().getFullYear()} Modor — Projet encyclopédique sous licences libres (Domaine Public &amp; CC0).
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('favorites')} className="hover:text-white">
              Gestion des données locales
            </button>
            <span>·</span>
            <span>Hébergement Cloudflare Pages statique</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
