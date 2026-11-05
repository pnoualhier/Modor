import React, { useState } from 'react';
import { HISTORICAL_PERIODS } from '../../data/periods';
import { Period, Century } from '../../types';
import { Calendar, ChevronRight, BookOpen, Layers, Filter } from 'lucide-react';
import { HelpTooltip } from '../common/HelpTooltip';

interface TimelineViewProps {
  onSelectPeriod: (periodId: string) => void;
}

const CENTURIES: { value: Century | 'all'; label: string }[] = [
  { value: 'all', label: 'Tous les siècles' },
  { value: 16, label: 'XVIe siècle' },
  { value: 17, label: 'XVIIe siècle' },
  { value: 18, label: 'XVIIIe siècle' },
  { value: 19, label: 'XIXe siècle' },
  { value: 20, label: 'XXe siècle' },
  { value: 21, label: 'XXIe siècle' },
];

export const TimelineView: React.FC<TimelineViewProps> = ({ onSelectPeriod }) => {
  const [selectedCentury, setSelectedCentury] = useState<Century | 'all'>('all');

  const filteredPeriods = HISTORICAL_PERIODS.filter((p) => {
    if (selectedCentury !== 'all' && p.century !== selectedCentury) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="border-b border-[#D9CBB7]/40 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold tracking-widest text-[#77736D] uppercase font-sans">
                Chronologie Interactive
              </span>
              <HelpTooltip
                title="Comment lire la chronologie ?"
                content="Chaque carte représente une séquence stylistique majeure de la mode française. Cliquez sur une époque pour ouvrir son dossier encyclopédique complet avec ses 19 rubriques."
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242321] mt-1">
              La Grande Frise de la Mode Française
            </h2>
            <p className="text-sm text-[#77736D] max-w-2xl mt-2 leading-relaxed">
              Explorez six siècles de transformations vestimentaires, des somptueuses cours des Valois aux innovations éco-responsables contemporaines.
            </p>
          </div>

          <div className="text-xs text-[#77736D] bg-white px-3 py-1.5 rounded-lg border border-[#D9CBB7]/60 whitespace-nowrap self-start md:self-auto">
            <span className="font-semibold text-[#242321]">{filteredPeriods.length}</span> périodes documentées
          </div>
        </div>

        {/* Century Filter Tabs */}
        <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <HelpTooltip
            title="Filtre par siècle"
            content="Sélectionnez un siècle pour restreindre l'affichage (ex. XVIe pour la Renaissance, XIXe pour la crinoline et la Belle Époque, XXe pour l'émancipation)."
            className="mr-1 shrink-0"
          />
          {CENTURIES.map((c) => (
            <button
              key={c.label}
              onClick={() => setSelectedCentury(c.value)}
              className={`px-3 py-1.5 text-xs rounded-md transition-colors whitespace-nowrap ${
                selectedCentury === c.value
                  ? 'bg-[#242321] text-[#F7F4ED] font-medium shadow-sm'
                  : 'bg-white text-[#77736D] hover:text-[#242321] hover:bg-[#D9CBB7]/20 border border-[#D9CBB7]/40'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Rail & Period Cards */}
      <div className="relative pl-6 md:pl-10 space-y-8 before:absolute before:left-2 md:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#D9CBB7]">
        {filteredPeriods.map((period, index) => {
          return (
            <div key={period.id} className="relative group">
              {/* Timeline chronological bullet node */}
              <div className="absolute -left-[27px] md:-left-[35px] top-6 w-5 h-5 rounded-full bg-[#F7F4ED] border-2 border-[#242321] flex items-center justify-center group-hover:scale-125 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-[#242321]" />
              </div>

              {/* Card Container */}
              <div className="bg-white rounded-xl border border-[#D9CBB7]/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-6 items-start">
                  {/* Left Column: Metadata & Core Text */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#77736D]">
                      <span className="font-semibold text-[#9A3412] uppercase tracking-wider">
                        {period.century}e siècle
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 font-mono font-medium text-[#242321]">
                        <Calendar className="w-3.5 h-3.5 text-[#77736D]" />
                        {period.startYear} – {period.endYear}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-[#242321] group-hover:text-[#9A3412] transition-colors">
                      {period.title}
                    </h3>

                    <div className="text-xs font-serif italic text-[#77736D]">
                      {period.subtitle}
                    </div>

                    <p className="text-sm text-[#242321]/90 leading-relaxed pt-1">
                      {period.shortDescription}
                    </p>

                    {/* Silhouette Metrics Tag Pills */}
                    <div className="pt-3 border-t border-[#D9CBB7]/30 flex flex-wrap items-center gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-[#77736D] font-medium text-[11px]">Silhouette :</span>
                        <HelpTooltip
                          title="Analyse morphologique"
                          content="Indicateurs normalisés du corps féminin contraint ou libéré : hauteur de taille, projection des hanches et longueur de jupe."
                        />
                      </div>
                      <span className="bg-[#F7F4ED] text-[#242321] px-2 py-0.5 rounded border border-[#D9CBB7]/40 text-[11px]">
                        Taille : {period.silhouetteMetrics.waistPosition}
                      </span>
                      <span className="bg-[#F7F4ED] text-[#242321] px-2 py-0.5 rounded border border-[#D9CBB7]/40 text-[11px]">
                        Hanches : {period.silhouetteMetrics.hipsVolume}
                      </span>
                      <span className="bg-[#F7F4ED] text-[#242321] px-2 py-0.5 rounded border border-[#D9CBB7]/40 text-[11px]">
                        Jupe : {period.silhouetteMetrics.skirtLength}
                      </span>
                    </div>

                    {/* Historical Figures */}
                    {period.notableFigures.length > 0 && (
                      <div className="pt-2 text-xs text-[#77736D]">
                        <span className="font-semibold text-[#242321]">Personnalités : </span>
                        {period.notableFigures.join(' · ')}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Action Button & Visual Teaser */}
                  <div className="w-full lg:w-64 shrink-0 flex flex-col justify-between self-stretch bg-[#F7F4ED]/50 p-4 rounded-lg border border-[#D9CBB7]/40">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#77736D] uppercase tracking-wider">
                          Structures &amp; Dessous
                        </span>
                        <HelpTooltip
                          title="Armatures & Sous-vêtements"
                          content="Structures mécaniques sous-jacentes (paniers, cerceaux de crinoline, baleines d'acier, tournures) qui donnent au vêtement sa forme externe."
                        />
                      </div>
                      <ul className="text-xs text-[#242321] space-y-1 list-disc list-inside">
                        {period.silhouetteMetrics.internalStructures.map((st, i) => (
                          <li key={i} className="truncate" title={st}>
                            {st}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => onSelectPeriod(period.id)}
                      className="mt-4 w-full flex items-center justify-center gap-2 bg-[#242321] text-[#F7F4ED] hover:bg-[#3A3835] px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-colors shadow-sm"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Consulter la fiche complète</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
