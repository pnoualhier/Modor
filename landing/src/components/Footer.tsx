import React from 'react';
import { ExternalLink, Heart, Shield, Code2, BookOpen } from 'lucide-react';
import { METRICS } from '../data/landingData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const universLinks = [
    { label: 'Chronologie des 22 époques', href: `${METRICS.appUrl}#timeline` },
    { label: 'Comparateur de silhouettes', href: `${METRICS.appUrl}#silhouettes` },
    { label: 'Anatomie du costume en calques', href: `${METRICS.appUrl}#anatomy` },
    { label: 'Catalogue des 34 vêtements', href: `${METRICS.appUrl}#garments` },
    { label: 'Panthéon des 35 créateurs', href: `${METRICS.appUrl}#designers` },
    { label: 'Galerie iconographique (89 œuvres)', href: `${METRICS.appUrl}#gallery` },
    { label: 'Grand Quiz culturel (18 questions)', href: `${METRICS.appUrl}#quiz` },
    { label: 'Carnet de favoris & notes', href: `${METRICS.appUrl}#favorites` },
  ];

  const docsLinks = [
    { label: 'Dépôt GitHub officiel', href: METRICS.githubUrl, external: true },
    { label: 'Architecture & Données', href: 'https://github.com/pnoualhier/Modor/blob/main/docs/ARCHITECTURE.md', external: true },
    { label: 'Rapport d’accessibilité WCAG AA', href: 'https://github.com/pnoualhier/Modor/blob/main/docs/ACCESSIBILITE.md', external: true },
    { label: 'Sources historiques & Licences', href: 'https://github.com/pnoualhier/Modor/blob/main/docs/SOURCES_ET_LICENCES.md', external: true },
    { label: 'Guide éditorial & Charte', href: 'https://github.com/pnoualhier/Modor/blob/main/docs/GUIDE_EDITORIAL.md', external: true },
  ];

  const partnerInstitutions = [
    { label: 'Palais Galliera — Musée de la Mode', href: 'https://www.palaisgalliera.paris.fr/', external: true },
    { label: 'Bibliothèque nationale de France (Gallica)', href: 'https://gallica.bnf.fr/', external: true },
    { label: 'Musée Carnavalet — Histoire de Paris', href: 'https://www.carnavalet.paris.fr/', external: true },
    { label: 'The Metropolitan Museum of Art', href: 'https://www.metmuseum.org/', external: true },
    { label: 'Musée des Arts Décoratifs (MAD Paris)', href: 'https://madparis.fr/', external: true },
  ];

  return (
    <footer className="bg-[#1A1918] text-[#D9CBB7] pt-16 pb-12 border-t border-[#77736D]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#77736D]/20">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#D9CBB7] flex items-center justify-center bg-[#242321] text-[#D9CBB7]">
                <span className="font-serif font-bold text-xl">M</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                MODOR
              </span>
            </div>

            <p className="font-serif text-base text-[#FAF6F0] leading-snug">
              La mémoire de la mode féminine en France, du XVIe au XXIe siècle.
            </p>

            <p className="text-xs text-[#A6AA99] leading-relaxed max-w-sm font-light">
              Projet patrimonial à vocation éducative et culturelle. Conçu pour honorer cinq siècles
              d’artisanat d’art, d’inventions vestimentaires et d’émancipation féminine.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#D9CBB7]">
              <span className="inline-flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#5F6B58]" />
                <span>Domaine Public</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Code2 className="w-3.5 h-3.5 text-[#5F6B58]" />
                <span>Licence MIT</span>
              </span>
            </div>
          </div>

          {/* Column 1: Univers */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Les 8 Univers
            </p>
            <ul className="space-y-2 text-xs">
              {universLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Documentation */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Ressources & Études
            </p>
            <ul className="space-y-2 text-xs">
              {docsLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 py-0.5"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 text-[#77736D]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institutions */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Sources Muséales
            </p>
            <ul className="space-y-2 text-xs">
              {partnerInstitutions.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 py-0.5"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 text-[#77736D]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77736D]">
          <p>
            © {currentYear} Modor. Conçu avec rigueur et passion pour l'histoire du costume français.
          </p>

          <div className="flex items-center gap-4 text-[#A6AA99]">
            <a
              href={METRICS.appUrl}
              className="hover:text-white transition-colors"
            >
              Lancer l'application web
            </a>
            <span>•</span>
            <a
              href={METRICS.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Dépôt GitHub
            </a>
            <span>•</span>
            <a
              href="#top"
              className="hover:text-white transition-colors"
            >
              Haut de page ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
