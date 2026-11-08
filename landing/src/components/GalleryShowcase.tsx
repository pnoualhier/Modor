import React from 'react';
import { Landmark, ExternalLink, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { METRICS } from '../data/landingData';

export const GalleryShowcase: React.FC = () => {
  const sampleArchives = [
    {
      title: 'Marguerite de Valois en robe de cour',
      source: 'Musée Carnavalet / BnF',
      date: 'vers 1572',
      type: 'Peinture de cour — Époque Renaissance',
      image: '/images/historical/marguerite_valois_portrait.jpg',
    },
    {
      title: 'Planche de robe à la française en soie façonnée',
      source: 'Palais Galliera, musée de la Mode de la Ville de Paris',
      date: 'vers 1765',
      type: 'Textile d’apparat — Siècle des Lumières',
      image: '/images/historical/robe_francaise_soie.jpg',
    },
    {
      title: 'Brevet technique de la crinoline cage',
      source: 'INPI / Archives nationales',
      date: '1856',
      type: 'Schéma industriel & brevet métallurgique',
      image: '/images/historical/crinoline_cage_brevet.jpg',
    },
    {
      title: 'Silhouette New Look — Tailleur Bar de Christian Dior',
      source: 'Fonds Dior Héritage / Palais Galliera',
      date: '1947',
      type: 'Photographie d’archive de haute couture',
      image: '/images/historical/tailleur_bar_dior.jpg',
    },
  ];

  const institutions = [
    { name: 'Palais Galliera', desc: 'Musée de la Mode de la Ville de Paris' },
    { name: 'BnF Gallica', desc: 'Bibliothèque nationale de France' },
    { name: 'Musée Carnavalet', desc: 'Histoire de Paris & du costume civil' },
    { name: 'Metropolitan Museum of Art', desc: 'The Costume Institute (New York)' },
    { name: 'Musée des Arts Décoratifs', desc: 'Collections mode & textile (Paris)' },
  ];

  return (
    <section id="galerie" className="py-24 bg-[#FAF6F0] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9A3412]">
            Iconographie & Fonds Muséaux
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-semibold tracking-tight">
            Un trésor documentaire au service du patrimoine
          </h2>
          <p className="text-lg text-[#77736D] leading-relaxed font-light">
            Chaque visuel de Modor est minutieusement documenté. Pas d'images générées artificiellement :
            uniquement des œuvres authentiques issues des plus prestigieuses institutions muséales.
          </p>
        </div>

        {/* 4 Key Museum Archival Plates Preview */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleArchives.map((arch, idx) => (
            <div
              key={idx}
              className="bg-[#F7F4ED] rounded-sm border border-[#D9CBB7] overflow-hidden flex flex-col justify-between group hover:border-[#9A3412] hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-[#EFE9DF]">
                <img
                  src={arch.image}
                  alt={arch.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#242321]/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-xs">
                  {arch.date}
                </div>
              </div>

              <div className="p-4 space-y-2">
                <p className="text-[10px] uppercase font-semibold text-[#9A3412] tracking-wider">
                  {arch.type}
                </p>
                <h3 className="font-serif text-base font-semibold text-[#242321] leading-snug">
                  {arch.title}
                </h3>
                <div className="pt-2 border-t border-[#E5DFD5] flex items-center gap-1.5 text-xs text-[#77736D]">
                  <Landmark className="w-3.5 h-3.5 shrink-0 text-[#5F6B58]" />
                  <span className="truncate">{arch.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Museum Institutions List */}
        <div className="mt-14 bg-[#EFE9DF] border border-[#D9CBB7] rounded-sm p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D9CBB7]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#5F6B58]" />
              <h3 className="font-serif text-xl font-semibold text-[#242321]">
                Fonds patrimoniaux & sources publiques de référence
              </h3>
            </div>
            <span className="text-xs text-[#77736D]">
              Licences Open Access & Domaine Public
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {institutions.map((inst, index) => (
              <div key={index} className="bg-[#FAF6F0] p-4 rounded-xs border border-[#D9CBB7]">
                <p className="font-serif text-base font-bold text-[#242321]">
                  {inst.name}
                </p>
                <p className="text-xs text-[#77736D] mt-1 font-light">
                  {inst.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href={METRICS.appUrl}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#9A3412] hover:text-[#7C2D12]"
            >
              <span>Explorer la galerie iconographique complète (89 reproductions)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
