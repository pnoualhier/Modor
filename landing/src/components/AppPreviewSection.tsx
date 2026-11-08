import React, { useState } from 'react';
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Compass,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { APPLICATION_SCREENSHOTS, METRICS } from '../data/landingData';

export const AppPreviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const current = APPLICATION_SCREENSHOTS[activeTab];

  const handlePrev = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : APPLICATION_SCREENSHOTS.length - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev < APPLICATION_SCREENSHOTS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="interface" className="py-24 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9A3412]">
            Expérience & Ergonomie
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-semibold tracking-tight">
            Découvrez l'interface de Modor
          </h2>
          <p className="text-lg text-[#77736D] leading-relaxed font-light">
            Une interface épurée, conçue selon les codes de l’édition muséale de prestige :
            typographies équilibrées, contrastes soignés et navigation fluide.
          </p>
        </div>

        {/* Tab Selector Buttons for the 8 real screenshots */}
        <div className="mt-12 overflow-x-auto pb-2 no-scrollbar">
          <div className="flex items-center gap-2 min-w-max px-2 sm:justify-center">
            {APPLICATION_SCREENSHOTS.map((screen, idx) => {
              const isSelected = idx === activeTab;
              return (
                <button
                  key={screen.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3.5 py-2 rounded-xs text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-[#242321] text-white shadow-xs'
                      : 'bg-[#FAF6F0] text-[#77736D] border border-[#D9CBB7] hover:text-[#242321]'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-60 mr-1.5">0{idx + 1}</span>
                  <span>{screen.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Screenshot Stage Card */}
        <div className="mt-8 bg-[#FAF6F0] border border-[#D9CBB7] rounded-sm p-6 sm:p-8 shadow-sm">
          {/* Top Stage Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E5DFD5]">
            <div>
              <span className="text-[11px] uppercase font-semibold text-[#9A3412] tracking-wider">
                Capture d'écran n° {activeTab + 1} / {APPLICATION_SCREENSHOTS.length}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#242321]">
                {current.title}
              </h3>
              <p className="text-xs text-[#77736D] mt-0.5">
                {current.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2 rounded-xs border border-[#D9CBB7] bg-[#F7F4ED] hover:bg-[#242321] hover:text-white transition-colors"
                aria-label="Capture précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2 rounded-xs border border-[#D9CBB7] bg-[#F7F4ED] hover:bg-[#242321] hover:text-white transition-colors"
                aria-label="Capture suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xs border border-[#9A3412] text-[#9A3412] hover:bg-[#9A3412] hover:text-white text-xs font-semibold transition-colors"
                aria-label="Agrandir la capture en plein écran"
              >
                <ZoomIn className="w-4 h-4" />
                <span className="hidden sm:inline">Plein écran</span>
              </button>
            </div>
          </div>

          {/* Screenshot Display Frame */}
          <div className="mt-6 relative rounded-sm overflow-hidden border border-[#D9CBB7] bg-[#242321]/5 shadow-inner">
            <div className="relative group cursor-pointer" onClick={() => setLightboxOpen(true)}>
              <img
                src={current.imagePath}
                alt={current.title}
                className="w-full h-auto max-h-[640px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#242321]/0 group-hover:bg-[#242321]/15 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#242321]/90 text-white text-xs font-medium px-4 py-2 rounded-sm flex items-center gap-2 shadow-lg">
                  <ZoomIn className="w-4 h-4" />
                  <span>Cliquer pour agrandir en haute définition</span>
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Narrative & Action */}
          <div className="mt-6 pt-4 border-t border-[#E5DFD5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[#77736D] max-w-2xl font-light">
              {current.description}
            </p>
            <a
              href={METRICS.appUrl}
              className="inline-flex items-center gap-2 bg-[#9A3412] hover:bg-[#7C2D12] text-white text-xs font-semibold px-4 py-2.5 rounded-xs transition-colors shrink-0 shadow-xs"
            >
              <Compass className="w-4 h-4" />
              <span>Ouvrir dans l'application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-8 grid grid-cols-4 sm:grid-cols-8 gap-2">
          {APPLICATION_SCREENSHOTS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(idx)}
              className={`rounded-xs overflow-hidden border transition-all aspect-4/3 relative ${
                idx === activeTab
                  ? 'border-[#9A3412] ring-2 ring-[#9A3412]/40 scale-105 z-10'
                  : 'border-[#D9CBB7] opacity-60 hover:opacity-100'
              }`}
              title={s.title}
            >
              <img
                src={s.imagePath}
                alt={s.title}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#242321]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
            <div>
              <p className="font-serif text-lg sm:text-xl font-semibold">
                {current.title}
              </p>
              <p className="text-xs text-[#D9CBB7]">
                {current.subtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Fermer le plein écran"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="my-auto flex items-center justify-center relative overflow-hidden py-4">
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={current.imagePath}
              alt={current.title}
              className="max-h-[80vh] max-w-full object-contain rounded-xs shadow-2xl"
            />

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Footer */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#D9CBB7]">
            <span>Capture authentique de l'application Modor</span>
            <div className="flex items-center gap-3">
              <a
                href={METRICS.appUrl}
                className="text-white hover:text-[#D9CBB7] underline font-medium flex items-center gap-1"
              >
                <span>Accéder à Modor en direct</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
