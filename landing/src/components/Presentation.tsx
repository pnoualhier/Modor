import React from 'react';
import { Layers, Calendar, Landmark, HeartHandshake, CheckCircle } from 'lucide-react';
import { METRICS } from '../data/landingData';

export const Presentation: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: 'L’architecture du corps',
      description:
        'Du vertugadin espagnol à la crinoline cage d’acier, découvrez comment l’ingénierie invisible des dessous a modelé la silhouette des femmes avant que la modernité ne libère le mouvement.',
    },
    {
      icon: Calendar,
      title: 'Une chronologie rigoureuse',
      description:
        'Cinq siècles découpés en 22 périodes méthodiquement sourcées. Chaque époque replace le vêtement dans son contexte politique, des cours royales aux guerres mondiales.',
    },
    {
      icon: Landmark,
      title: 'Des sources muséales d’excellence',
      description:
        'Toutes les iconographies proviennent de fonds patrimoniaux publics : Palais Galliera, Musée Carnavalet, Bibliothèque nationale de France, Metropolitan Museum of Art.',
    },
    {
      icon: HeartHandshake,
      title: 'Un bien commun ouvert à tous',
      description:
        'Conçu pour les étudiants, chercheurs, modélistes, costumiers et passionnés. Modor est une ressource culturelle libre, sans publicité et respectueuse de vos données.',
    },
  ];

  const counters = [
    { value: '22', label: 'Époques documentées', sub: 'Du XVIe siècle à 2026' },
    { value: '34', label: 'Pièces de vestiaire', sub: 'Armatures, robes & coupes' },
    { value: '35', label: 'Créateurs & modistes', sub: 'De Rose Bertin à Margiela' },
    { value: '8', label: 'Univers interactifs', sub: 'Chronologie, anatomie, quiz...' },
    { value: '100%', label: 'Libre & gratuit', sub: 'Sans compte ni abonnement' },
  ];

  return (
    <section id="presentation" className="py-24 bg-[#FAF6F0] border-t border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9A3412]">
            Manifeste & Ambition Culturelle
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-semibold tracking-tight">
            La mode raconte notre histoire.
          </h2>
          <p className="text-lg text-[#77736D] leading-relaxed font-light">
            Bien plus qu’une suite d’artifices futiles, le vêtement féminin est un sismographe politique,
            économique, technique et anatomique. Modor réunit ces mémoires dans une encyclopédie
            visuelle, accessible à tous les esprits curieux.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-[#F7F4ED] p-7 rounded-sm border border-[#D9CBB7] hover:border-[#9A3412]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-sm bg-[#EFE9DF] border border-[#D9CBB7] flex items-center justify-center text-[#9A3412] group-hover:bg-[#9A3412] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#242321]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#77736D] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E5DFD5]/70 flex items-center gap-1.5 text-xs text-[#5F6B58] font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Rigueur historique</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Numerical Metrics Counter Bar */}
        <div className="mt-16 bg-[#242321] text-[#F7F4ED] rounded-sm p-8 lg:p-10 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#77736D]/30">
            {counters.map((c, i) => (
              <div key={i} className={`pt-4 md:pt-0 ${i > 0 ? 'md:pl-4' : ''}`}>
                <p className="font-serif text-4xl sm:text-5xl font-bold text-[#D9CBB7]">
                  {c.value}
                </p>
                <p className="text-sm font-semibold text-white mt-1">
                  {c.label}
                </p>
                <p className="text-xs text-[#A6AA99] mt-0.5 font-light">
                  {c.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
