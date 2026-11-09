import React, { useState } from 'react';
import { BookOpen, Sparkles, ArrowRight, Tag } from 'lucide-react';
import { GARMENT_HIGHLIGHTS, METRICS } from '../data/landingData';
import { ImageWithFallback } from './ImageWithFallback';

export const WardrobeShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les pièces' },
    { id: 'armature', label: 'Armatures & Structures' },
    { id: 'robe', label: 'Robes & Ensembles' },
    { id: 'emancipation', label: 'Émancipation & Pouvoir' },
  ];

  const filteredGarments = selectedCategory === 'all'
    ? GARMENT_HIGHLIGHTS
    : GARMENT_HIGHLIGHTS.filter((g) => g.category === selectedCategory);

  return (
    <section id="vestiaire" className="py-24 bg-[#FAF6F0] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9A3412]">
            Catalogue Raisonné du Vestiaire
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-semibold tracking-tight">
            Le patrimoine du vestiaire féminin
          </h2>
          <p className="text-lg text-[#77736D] leading-relaxed font-light">
            34 pièces et armatures emblématiques disséquées : matériaux d’époque, patrons, étymologie
            et impact sur les gestes et la démarche quotidienne des femmes.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-12 flex justify-center items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xs text-xs font-semibold tracking-wide uppercase transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#242321] text-white shadow-xs'
                  : 'bg-[#EFE9DF] text-[#77736D] hover:bg-[#E5DFD5] hover:text-[#242321]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Garment Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGarments.map((item) => (
            <article
              key={item.id}
              className="bg-[#F7F4ED] rounded-sm border border-[#D9CBB7] overflow-hidden flex flex-col justify-between hover:border-[#9A3412] hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#EFE9DF] border-b border-[#E5DFD5]">
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={item.name}
                    fallbackTitle={item.name}
                    fallbackSubtitle={item.period}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#242321]/80 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-xs z-20">
                    {item.century}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#FAF6F0] border border-[#D9CBB7] text-[#9A3412] text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-xs">
                    {item.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <p className="text-xs font-mono text-[#77736D]">
                    {item.period}
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-[#242321] group-hover:text-[#9A3412] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#77736D] leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-[#E5DFD5] text-xs">
                    <p className="font-semibold text-[#9A3412] uppercase tracking-wider text-[10px]">
                      Innovation & portée
                    </p>
                    <p className="text-[#242321] mt-0.5 leading-snug">
                      {item.innovation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <a
                  href={METRICS.appUrl}
                  className="w-full py-2.5 px-3 bg-[#FAF6F0] hover:bg-[#242321] hover:text-white text-[#242321] border border-[#D9CBB7] text-xs font-semibold rounded-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Consulter la notice complète</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Callout box to visit full 34 garments */}
        <div className="mt-14 p-6 bg-[#EFE9DF] border border-[#D9CBB7] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#9A3412] shrink-0" />
            <div>
              <p className="font-serif text-lg font-semibold text-[#242321]">
                34 notices patrimoniales complètes dans l'application
              </p>
              <p className="text-xs text-[#77736D]">
                Fraises, manches gigots, jupons, corsets, mini-jupes Courrèges, tailleurs Power Dressing...
              </p>
            </div>
          </div>
          <a
            href={METRICS.appUrl}
            className="shrink-0 bg-[#242321] text-white hover:bg-[#9A3412] text-xs font-semibold px-5 py-3 rounded-xs transition-colors flex items-center gap-2"
          >
            <span>Explorer le vestiaire complet</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
