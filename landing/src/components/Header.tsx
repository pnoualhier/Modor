import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { METRICS } from '../data/landingData';

interface HeaderProps {
  onOpenApp?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Présentation', href: '#presentation' },
    { label: 'Chronologie', href: '#chronologie' },
    { label: 'Univers', href: '#univers' },
    { label: 'Silhouettes', href: '#silhouettes' },
    { label: 'Vestiaire', href: '#vestiaire' },
    { label: 'Créateurs', href: '#createurs' },
    { label: 'Interface', href: '#interface' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F4ED]/95 backdrop-blur-md border-b border-[#D9CBB7]/60 py-3 shadow-xs'
          : 'bg-[#F7F4ED]/80 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#242321]"
            aria-label="Modor — Accueil de la landing page"
          >
            <div className="w-10 h-10 rounded-full border border-[#9A3412] flex items-center justify-center bg-[#FAF6F0] text-[#9A3412] transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif font-bold text-xl tracking-tight">M</span>
            </div>
            <div>
              <span className="font-serif text-2xl font-semibold tracking-wider text-[#242321] block leading-none">
                MODOR
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#77736D] font-medium block mt-0.5">
                La mémoire de la mode
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#77736D] hover:text-[#242321] transition-colors relative py-1 hover:border-b-2 hover:border-[#9A3412]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={METRICS.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#77736D] hover:text-[#242321] px-3 py-2 rounded-sm border border-[#D9CBB7] hover:border-[#242321] transition-colors flex items-center gap-1.5"
              title="Consulter le code source libre sur GitHub"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <a
              href={METRICS.appUrl}
              className="inline-flex items-center gap-2 bg-[#9A3412] hover:bg-[#7C2D12] text-white text-xs font-semibold px-4 py-2.5 rounded-sm transition-all shadow-xs hover:shadow-md"
              aria-label="Ouvrir l'application Modor dans un nouvel onglet"
            >
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>Ouvrir l'application</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={METRICS.appUrl}
              className="inline-flex sm:hidden items-center gap-1 bg-[#9A3412] text-white text-xs font-medium px-2.5 py-1.5 rounded-sm"
              aria-label="Ouvrir l'application Modor"
            >
              <span>Lancer</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#242321] hover:text-[#9A3412] transition-colors focus-visible:outline-2"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F4ED] border-b border-[#D9CBB7] px-4 pt-4 pb-6 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#242321] hover:text-[#9A3412] py-1 border-b border-[#E5DFD5]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={METRICS.appUrl}
                className="flex items-center justify-center gap-2 bg-[#9A3412] text-white font-medium py-3 rounded-sm shadow-xs"
              >
                <Compass className="w-4 h-4" />
                <span>Ouvrir l'application Modor</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={METRICS.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#D9CBB7] text-[#242321] font-medium py-2.5 rounded-sm"
              >
                <span>Code source GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
