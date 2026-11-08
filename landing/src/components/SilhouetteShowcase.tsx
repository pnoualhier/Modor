import React, { useState } from 'react';
import { Layers, Compass, ArrowRight, Eye } from 'lucide-react';
import { METRICS } from '../data/landingData';

interface SilhouetteCompareItem {
  id: string;
  name: string;
  era: string;
  shape: string;
  shoulderHipRatio: string;
  waistCircumference: string;
  understructure: string;
  keyInnovation: string;
  image: string;
}

export const SilhouetteShowcase: React.FC = () => {
  const comparisonItems: SilhouetteCompareItem[] = [
    {
      id: 'renaissance',
      name: 'Silhouette Conique',
      era: 'Renaissance (vers 1575)',
      shape: 'Buste en triangle inversé & base circulaire',
      shoulderHipRatio: 'Épaules étroites / Hanches moyennes',
      waistCircumference: 'Comprimée par busc rigide en bois ou fer',
      understructure: 'Vertugadin en tambour & corps piqué',
      keyInnovation: 'Géométrisation rigide masquant les formes naturelles',
      image: '/images/historical/marguerite_valois_portrait.jpg',
    },
    {
      id: 'rococo',
      name: 'Silhouette Sablier à Paniers',
      era: 'Siècle des Lumières (vers 1750)',
      shape: 'Expansion latérale extrême (paniers à coudes)',
      shoulderHipRatio: 'Envergure des hanches pouvant dépasser 2 m',
      waistCircumference: 'Taille pincée en V descendant sur le ventre',
      understructure: 'Paniers d’osier ou fanons de baleine & corps à baleines',
      keyInnovation: 'Projection architecturale latérale pour l’apparat de cour',
      image: '/images/historical/robe_francaise_soie.jpg',
    },
    {
      id: 'new-look',
      name: 'Silhouette New Look (Ligne Corolle)',
      era: 'Après-Guerre (1947)',
      shape: 'Poitrine haute, taille fine & jupe corolle ample',
      shoulderHipRatio: 'Épaules douces et arrondies, hanches rembourrées',
      waistCircumference: 'Guêpière resserrant la taille à ~50 cm',
      understructure: 'Guêpière de tulle baleiné & jupons de crin ou nylon',
      keyInnovation: 'Renaissance de la féminité théâtrale après les privations',
      image: '/images/historical/tailleur_bar_dior.jpg',
    },
    {
      id: 'power-dressing',
      name: 'Silhouette Triangle Inversé (Power Dressing)',
      era: 'Années 1980',
      shape: 'Épaulettes monumentales & hanches effilées',
      shoulderHipRatio: 'Carrure surdimensionnée / Bas étroit',
      waistCircumference: 'Taille ceinturée large, sans compression osseuse',
      understructure: 'Épaulettes de mousse synthétique thermoformée',
      keyInnovation: 'Appropriation de l’autorité masculine dans le monde du travail',
      image: '/images/historical/smoking_ysl_1966.jpg',
    },
  ];

  const [activeItem, setActiveItem] = useState(0);
  const current = comparisonItems[activeItem];

  return (
    <section id="silhouettes" className="py-24 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9A3412]">
            Morphologie & Mécanique du Corps
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-semibold tracking-tight">
            Comprendre l'architecture de la silhouette
          </h2>
          <p className="text-lg text-[#77736D] leading-relaxed font-light">
            À travers les siècles, la silhouette féminine n'a jamais été un simple constat anatomique,
            mais une construction savante d'armatures, de ressorts, de rembourrages et de tensions textiles.
          </p>
        </div>

        {/* 3-Tier Layering Explanation */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF6F0] p-6 rounded-sm border border-[#D9CBB7]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#9A3412] text-white flex items-center justify-center text-xs font-bold">
                1
              </span>
              <h3 className="font-serif text-lg font-semibold text-[#242321]">
                L'armature invisible
              </h3>
            </div>
            <p className="text-sm text-[#77736D] mt-3 leading-relaxed">
              Fanons de baleines boréales, cercles d'acier trempé, osier tressé ou guêpières de nylon :
              la structure interne contraint la chair et impose la ligne maîtresse.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-sm border border-[#D9CBB7]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#B45309] text-white flex items-center justify-center text-xs font-bold">
                2
              </span>
              <h3 className="font-serif text-lg font-semibold text-[#242321]">
                Le volume intermédiaire
              </h3>
            </div>
            <p className="text-sm text-[#77736D] mt-3 leading-relaxed">
              Jupons empilés, crinolines légères, coussins de hanches et poufs de tournure créent
              l'effet de masse et soutiennent le poids des étoffes nobles.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-sm border border-[#D9CBB7]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#242321] text-white flex items-center justify-center text-xs font-bold">
                3
              </span>
              <h3 className="font-serif text-lg font-semibold text-[#242321]">
                La parure visible
              </h3>
            </div>
            <p className="text-sm text-[#77736D] mt-3 leading-relaxed">
              Damas de soie lyonnais, mousselines vaporeuses, broderies d'or ou coupes au laser :
              l'enveloppe extérieure sublime l'architecture sous-jacente.
            </p>
          </div>
        </div>

        {/* Interactive Silhouette Comparator Card */}
        <div className="mt-12 bg-[#FAF6F0] border border-[#D9CBB7] rounded-sm p-6 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5DFD5] pb-5">
            <div>
              <span className="text-xs uppercase font-semibold text-[#9A3412] tracking-wider">
                Comparateur normalisé (13 silhouettes dans l'application)
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#242321] mt-0.5">
                {current.name} — <span className="font-normal italic text-[#77736D]">{current.era}</span>
              </h3>
            </div>

            {/* Quick Switch Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
              {comparisonItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(index)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors shrink-0 ${
                    index === activeItem
                      ? 'bg-[#242321] text-white'
                      : 'bg-[#EFE9DF] text-[#77736D] hover:text-[#242321]'
                  }`}
                >
                  {item.name.replace('Silhouette ', '')}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual plate */}
            <div className="lg:col-span-5">
              <div className="rounded-sm overflow-hidden border border-[#D9CBB7] bg-[#EFE9DF] aspect-4/5 relative shadow-inner">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#242321]/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-1 rounded-xs uppercase tracking-wider">
                  Normalisation Modor
                </div>
              </div>
            </div>

            {/* Detailed technical breakdown */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F7F4ED] p-4 rounded-xs border border-[#E5DFD5]">
                  <p className="text-[11px] uppercase font-semibold text-[#77736D]">
                    Forme géométrique dominante
                  </p>
                  <p className="font-serif text-base font-semibold text-[#242321] mt-1">
                    {current.shape}
                  </p>
                </div>

                <div className="bg-[#F7F4ED] p-4 rounded-xs border border-[#E5DFD5]">
                  <p className="text-[11px] uppercase font-semibold text-[#77736D]">
                    Rapport Épaules / Hanches
                  </p>
                  <p className="font-serif text-base font-semibold text-[#242321] mt-1">
                    {current.shoulderHipRatio}
                  </p>
                </div>

                <div className="bg-[#F7F4ED] p-4 rounded-xs border border-[#E5DFD5]">
                  <p className="text-[11px] uppercase font-semibold text-[#77736D]">
                    Contrainte de la taille
                  </p>
                  <p className="font-serif text-base font-semibold text-[#242321] mt-1">
                    {current.waistCircumference}
                  </p>
                </div>

                <div className="bg-[#F7F4ED] p-4 rounded-xs border border-[#E5DFD5]">
                  <p className="text-[11px] uppercase font-semibold text-[#77736D]">
                    Armatures & Sous-vêtements
                  </p>
                  <p className="font-serif text-base font-semibold text-[#242321] mt-1">
                    {current.understructure}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#EFE9DF] rounded-xs border border-[#D9CBB7]">
                <p className="text-[11px] uppercase font-semibold text-[#9A3412] tracking-wider">
                  Révolution stylistique majeure
                </p>
                <p className="text-sm text-[#242321] mt-1 leading-relaxed">
                  {current.keyInnovation}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={METRICS.appUrl}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#9A3412] hover:text-[#7C2D12] group"
                >
                  <Compass className="w-4 h-4" />
                  <span>Tester le comparateur morphologique complet dans Modor</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
