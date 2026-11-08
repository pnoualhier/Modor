import React from 'react';
import { Archive, Brain, Share2, Sparkles } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      icon: Archive,
      number: '01',
      title: 'Mémoire & Préservation',
      subtitle: 'Sauvegarder le vocabulaire et les savoir-faire oubliés',
      description:
        'Des noms d’étoffes disparues (droguet, camelot, faille de soie) aux brevets mécaniques de crinoline, Modor documente avec précision l’héritage matériel et linguistique des ateliers français.',
    },
    {
      icon: Brain,
      number: '02',
      title: 'Compréhension & Esprit Critique',
      subtitle: 'Dépasser la surface pour analyser les tensions sociologiques',
      description:
        'Le vêtement n’est jamais innocent : il matérialise les hiérarchies de classe, les injonctions faites au corps féminin, les pénuries de guerre et les conquêtes d’autonomie citoyenne.',
    },
    {
      icon: Share2,
      number: '03',
      title: 'Transmission & Partage Libre',
      subtitle: 'Un bien commun culturel accessible à tous',
      description:
        'Créé sans logique commerciale, sans cookies publicitaires et sans abonnement payant, Modor entend mettre le patrimoine de la haute couture à la disposition des étudiants, des chercheurs et des curieux.',
    },
  ];

  return (
    <section className="py-24 bg-[#FAF6F0] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9A3412]">
            Démarche & Éthique Culturelle
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-semibold tracking-tight">
            Les trois engagements de Modor
          </h2>
          <p className="text-lg text-[#77736D] leading-relaxed font-light">
            Une approche engagée pour redonner au costume sa dignité d'objet d'étude historique
            et de vecteur d'émancipation humaine.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F4ED] p-8 rounded-sm border border-[#D9CBB7] flex flex-col justify-between hover:border-[#9A3412] transition-colors group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#D9CBB7] group-hover:text-[#9A3412] transition-colors">
                      {p.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#EFE9DF] border border-[#D9CBB7] flex items-center justify-center text-[#9A3412]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#242321]">
                    {p.title}
                  </h3>

                  <p className="text-xs font-medium text-[#9A3412] uppercase tracking-wider">
                    {p.subtitle}
                  </p>

                  <p className="text-sm text-[#77736D] leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5DFD5]">
                  <span className="text-xs italic font-serif text-[#77736D]">
                    Engagement non-lucratif
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
