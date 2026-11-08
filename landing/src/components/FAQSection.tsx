import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS, METRICS } from '../data/landingData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'Toutes les questions' },
    { id: 'projet', label: 'Le projet Modor' },
    { id: 'contenu', label: 'Ressources & Données' },
    { id: 'technique', label: 'PWA & Technique' },
    { id: 'usage', label: 'Pédagogie & Usage' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === selectedFilter);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F7F4ED]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9A3412]">
            Questions & Éclairages
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-semibold tracking-tight">
            Foire aux questions
          </h2>
          <p className="text-lg text-[#77736D] leading-relaxed font-light">
            Découvrez comment fonctionne l’encyclopédie, d’où proviennent les données
            et comment l’utiliser dans vos cours ou vos recherches.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setSelectedFilter(f.id);
                setOpenIndex(null);
              }}
              className={`px-3.5 py-1.5 rounded-xs text-xs font-semibold uppercase tracking-wide transition-all ${
                selectedFilter === f.id
                  ? 'bg-[#242321] text-white shadow-xs'
                  : 'bg-[#FAF6F0] text-[#77736D] border border-[#D9CBB7] hover:text-[#242321]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 space-y-3">
          {filteredItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FAF6F0] rounded-sm border border-[#D9CBB7] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-[#9A3412]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-semibold text-[#242321]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-[#D9CBB7] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#242321] text-white border-[#242321]' : 'text-[#77736D]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm sm:text-base text-[#77736D] leading-relaxed border-t border-[#E5DFD5] pt-4 font-light animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-12 text-center text-sm text-[#77736D] flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Une question spécifique ou une contribution à proposer ?</span>
          <a
            href={METRICS.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9A3412] hover:underline font-semibold"
          >
            Ouvrir une discussion sur le dépôt GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};
