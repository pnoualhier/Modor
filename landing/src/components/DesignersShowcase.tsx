import React from 'react';
import { Award, Quote, ArrowRight, Compass } from 'lucide-react';
import { DESIGNER_HIGHLIGHTS, METRICS } from '../data/landingData';

export const DesignersShowcase: React.FC = () => {
  return (
    <section id="createurs" className="py-24 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9A3412]">
            Panthéon des Grands Couturiers
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-semibold tracking-tight">
            Les orfèvres de la haute couture
          </h2>
          <p className="text-lg text-[#77736D] leading-relaxed font-light">
            De la « Ministre des modes » de Versailles aux créateurs avant-gardistes contemporains,
            35 biographies d’exception pour comprendre comment Paris est devenue la capitale mondiale du style.
          </p>
        </div>

        {/* Designers Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESIGNER_HIGHLIGHTS.map((d) => (
            <article
              key={d.id}
              className="bg-[#FAF6F0] rounded-sm border border-[#D9CBB7] overflow-hidden flex flex-col justify-between hover:border-[#9A3412] hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#EFE9DF] border-b border-[#E5DFD5]">
                  <img
                    src={d.imageUrl}
                    alt={d.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#242321]/85 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-xs">
                    {d.lifespan}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#FAF6F0] border border-[#D9CBB7] text-[#9A3412] text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-xs">
                    {d.era}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9A3412]">
                    {d.house}
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-[#242321]">
                    {d.name}
                  </h3>
                  <p className="text-sm text-[#77736D] leading-relaxed font-light">
                    {d.significance}
                  </p>

                  {d.quote && (
                    <div className="mt-4 pt-3 border-t border-[#E5DFD5] flex items-start gap-2 text-xs italic text-[#242321] font-serif">
                      <Quote className="w-4 h-4 text-[#9A3412] shrink-0 mt-0.5" />
                      <span>{d.quote}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <a
                  href={METRICS.appUrl}
                  className="w-full py-2.5 px-3 bg-[#F7F4ED] hover:bg-[#242321] hover:text-white text-[#242321] border border-[#D9CBB7] text-xs font-semibold rounded-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Voir la fiche créateur</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* 35 Designers Honor Banner */}
        <div className="mt-14 bg-[#242321] text-[#F7F4ED] rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-serif text-2xl font-semibold text-[#D9CBB7]">
              35 créateurs et créatrices répertoriés
            </p>
            <p className="text-xs text-[#A6AA99] max-w-2xl font-light">
              Lanvin, Grès, Balenciaga, Cardin, Rabanne, Courrèges, Mugler, Alaïa, Lacroix, Castelbajac,
              Gaultier, Margiela, Jacquemus... Découvrez l'histoire intime de chaque maison.
            </p>
          </div>
          <a
            href={METRICS.appUrl}
            className="shrink-0 bg-[#9A3412] hover:bg-[#7C2D12] text-white text-xs font-semibold px-6 py-3.5 rounded-xs transition-all shadow-sm flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Consulter le panthéon complet</span>
          </a>
        </div>
      </div>
    </section>
  );
};
