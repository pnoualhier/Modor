import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { PERIOD_HIGHLIGHTS, METRICS } from '../data/landingData';
import { ImageWithFallback } from './ImageWithFallback';

export const TimelinePreview: React.FC = () => {
  const [selectedEraIndex, setSelectedEraIndex] = useState(0);
  const currentEra = PERIOD_HIGHLIGHTS[selectedEraIndex];

  return (
    <section id="chronologie" className="py-24 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9A3412]">
            Exploration Chronologique
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-semibold tracking-tight">
            Cinq siècles à explorer
          </h2>
          <p className="text-lg text-[#77736D] leading-relaxed font-light">
            De la Renaissance maniériste au minimalisme contemporain, chaque époque a inventé ses
            formes, ses censures et ses émancipations.
          </p>
        </div>

        {/* Period Selector Tabs */}
        <div className="mt-12 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex sm:justify-center items-center gap-2 min-w-max px-2">
            {PERIOD_HIGHLIGHTS.map((era, index) => {
              const isSelected = index === selectedEraIndex;
              return (
                <button
                  key={era.id}
                  onClick={() => setSelectedEraIndex(index)}
                  className={`px-4 py-3 rounded-sm text-sm font-medium transition-all duration-200 border text-left ${
                    isSelected
                      ? 'bg-[#242321] text-[#F7F4ED] border-[#242321] shadow-md scale-102'
                      : 'bg-[#FAF6F0] text-[#77736D] border-[#D9CBB7] hover:border-[#242321] hover:text-[#242321]'
                  }`}
                  aria-selected={isSelected}
                  role="tab"
                >
                  <span className="block text-[11px] uppercase tracking-wider opacity-70">
                    {era.century}
                  </span>
                  <span className="font-serif font-semibold text-base block mt-0.5">
                    {era.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Era Showcase Card */}
        <div className="mt-8 bg-[#FAF6F0] border border-[#D9CBB7] rounded-sm p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Historical Context & Metadata */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-[#EFE9DF] border border-[#D9CBB7] text-xs font-semibold text-[#9A3412] tracking-wider uppercase rounded-xs">
                  {currentEra.century}
                </span>
                <span className="font-mono text-sm text-[#77736D]">
                  {currentEra.years}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#242321]">
                {currentEra.name}
              </h3>

              <p className="text-base sm:text-lg text-[#77736D] leading-relaxed font-light">
                {currentEra.description}
              </p>

              {/* Data points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E5DFD5]">
                <div className="bg-[#F7F4ED] p-3.5 rounded-xs border border-[#E5DFD5]">
                  <p className="text-[11px] uppercase font-semibold text-[#77736D] tracking-wider">
                    Ligne de silhouette
                  </p>
                  <p className="font-serif text-base font-medium text-[#242321] mt-0.5">
                    {currentEra.silhouette}
                  </p>
                </div>

                <div className="bg-[#F7F4ED] p-3.5 rounded-xs border border-[#E5DFD5]">
                  <p className="text-[11px] uppercase font-semibold text-[#77736D] tracking-wider">
                    Vêtement emblématique
                  </p>
                  <p className="font-serif text-base font-medium text-[#242321] mt-0.5">
                    {currentEra.keyGarment}
                  </p>
                </div>

                <div className="bg-[#F7F4ED] p-3.5 rounded-xs border border-[#E5DFD5] sm:col-span-2">
                  <p className="text-[11px] uppercase font-semibold text-[#77736D] tracking-wider">
                    Figures d’influence & couturiers
                  </p>
                  <p className="font-serif text-base font-medium text-[#242321] mt-0.5">
                    {currentEra.emblematicFigure}
                  </p>
                </div>
              </div>

              {/* Direct action link */}
              <div className="pt-2">
                <a
                  href={METRICS.appUrl}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#9A3412] hover:text-[#7C2D12] group"
                >
                  <Compass className="w-4 h-4" />
                  <span>Consulter cette époque dans la frise de l’application</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right: Museum Artwork / Archive Plate */}
            <div className="lg:col-span-5">
              <div className="relative rounded-sm overflow-hidden border border-[#D9CBB7] bg-[#EFE9DF] aspect-4/5 shadow-md group">
                <ImageWithFallback
                  src={currentEra.imageUrl}
                  alt={`Illustration patrimoniale pour la période ${currentEra.name}`}
                  fallbackTitle={currentEra.name}
                  fallbackSubtitle={currentEra.century}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242321]/90 via-[#242321]/20 to-transparent flex flex-col justify-end p-5 text-white pointer-events-none">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#D9CBB7] uppercase tracking-wider font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Archive patrimoniale d’époque</span>
                  </div>
                  <p className="font-serif text-xl font-medium mt-1">
                    {currentEra.name}
                  </p>
                  <p className="text-xs text-[#E5DFD5] mt-0.5 font-light">
                    Reproduction documentaire haute résolution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
