import React, { useState } from 'react';
import { Period } from '../../types';
import { HISTORICAL_PERIODS } from '../../data/periods';
import { HISTORICAL_GARMENTS } from '../../data/garments';
import { HISTORICAL_DESIGNERS } from '../../data/designers';
import { HISTORICAL_SOURCES } from '../../data/sources';
import { SILHOUETTE_DEFINITIONS } from '../../data/silhouettes';
import { SilhouetteFigure } from '../silhouettes/SilhouetteFigure';
import { StorageService } from '../../services/storage';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Calendar,
  Layers,
  BookOpen,
  Sparkles,
  ExternalLink,
  Edit3,
  Check
} from 'lucide-react';

interface PeriodDetailViewProps {
  periodId: string;
  onBack: () => void;
  onSelectPeriod: (id: string) => void;
  onSelectGarment: (garmentId: string) => void;
  onSelectDesigner: (designerId: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const PeriodDetailView: React.FC<PeriodDetailViewProps> = ({
  periodId,
  onBack,
  onSelectPeriod,
  onSelectGarment,
  onSelectDesigner,
  isFavorite,
  onToggleFavorite,
}) => {
  const currentIndex = HISTORICAL_PERIODS.findIndex((p) => p.id === periodId);
  const period = HISTORICAL_PERIODS[currentIndex] || HISTORICAL_PERIODS[0];

  const prevPeriod = currentIndex > 0 ? HISTORICAL_PERIODS[currentIndex - 1] : null;
  const nextPeriod = currentIndex < HISTORICAL_PERIODS.length - 1 ? HISTORICAL_PERIODS[currentIndex + 1] : null;

  const associatedGarments = HISTORICAL_GARMENTS.filter((g) => period.garmentIds.includes(g.id));
  const associatedDesigners = HISTORICAL_DESIGNERS.filter((d) => period.designerIds.includes(d.id));
  const associatedSources = HISTORICAL_SOURCES.filter((s) => period.sourceIds.includes(s.id));
  const silhouetteDef = SILHOUETTE_DEFINITIONS.find((s) => s.periodId === period.id);

  // User notes
  const [noteText, setNoteText] = useState<string>(() => {
    const data = StorageService.load();
    return data.notes[period.id] || '';
  });
  const [isSavedNote, setIsSavedNote] = useState<boolean>(false);

  const handleSaveNote = () => {
    StorageService.saveNote(period.id, noteText);
    setIsSavedNote(true);
    setTimeout(() => setIsSavedNote(false), 2000);
  };

  return (
    <article className="space-y-10 max-w-5xl mx-auto pb-16">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between border-b border-[#D9CBB7]/40 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-[#77736D] hover:text-[#242321] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à la Chronologie</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onToggleFavorite(period.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              isFavorite
                ? 'bg-[#9A3412] text-white border-[#9A3412]'
                : 'bg-white text-[#77736D] border-[#D9CBB7] hover:text-[#242321]'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
            <span>{isFavorite ? 'Dans vos favoris' : 'Ajouter aux favoris'}</span>
          </button>
        </div>
      </div>

      {/* 1. Header & Hero Title */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#77736D]">
          <span className="font-semibold text-[#9A3412] uppercase tracking-wider">
            {period.century}e siècle
          </span>
          <span>·</span>
          <span className="font-mono font-medium text-[#242321]">
            {period.startYear} – {period.endYear}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#242321] tracking-tight">
          {period.title}
        </h1>

        <p className="text-lg md:text-xl font-serif italic text-[#77736D] max-w-3xl leading-relaxed">
          {period.subtitle}
        </p>
      </header>

      {/* 2. Visual Split: Hero Silhouette & Historical Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Silhouette Vector Presentation (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#D9CBB7]/60 shadow-sm flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-widest text-[#77736D] uppercase mb-3">
            Convention Morphologique Standard
          </span>

          <div className="w-full max-w-[280px]">
            {silhouetteDef ? (
              <SilhouetteFigure silhouette={silhouetteDef} showStructureLayer={true} showMeasurementGuides={true} />
            ) : (
              <div className="py-20 text-center text-xs text-[#77736D]">Silhouette vectorielle en cours de numérisation</div>
            )}
          </div>

          <div className="mt-4 w-full bg-[#F7F4ED] p-3 rounded-lg border border-[#D9CBB7]/40 text-xs">
            <div className="font-bold text-[#242321]">{period.silhouetteMetrics.internalStructures[0] || 'Structure de l\'époque'}</div>
            <div className="text-[#77736D] text-[11px] mt-0.5">
              Armature interne essentielle façonnant la silhouette visible.
            </div>
          </div>
        </div>

        {/* Historical & Social Context Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-6 bg-white p-6 md:p-8 rounded-xl border border-[#D9CBB7]/60 shadow-sm">
          {/* Section 3: Contexte historique */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#9A3412] mb-1 font-sans">
              01. Contexte Historique & Politique
            </h2>
            <p className="text-sm text-[#242321] leading-relaxed">
              {period.historicalContext}
            </p>
          </div>

          <div className="h-px bg-[#D9CBB7]/40" />

          {/* Section 4: Contexte social */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#9A3412] mb-1 font-sans">
              02. Contexte Social & Rôle Féminin
            </h2>
            <p className="text-sm text-[#242321] leading-relaxed">
              {period.socialContext}
            </p>
          </div>

          <div className="h-px bg-[#D9CBB7]/40" />

          {/* Section 5: Silhouette caractéristique */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#9A3412] mb-1 font-sans">
              03. La Silhouette Féminine Caractéristique
            </h2>
            <p className="text-sm text-[#242321] leading-relaxed">
              {period.silhouetteDescription}
            </p>
          </div>
        </div>
      </div>

      {/* 6 to 11. Detailed Garment Anatomy Grid */}
      <div className="bg-white rounded-xl border border-[#D9CBB7]/60 p-6 md:p-8 shadow-sm space-y-8">
        <h2 className="text-2xl font-serif font-bold text-[#242321] border-b border-[#D9CBB7]/40 pb-3">
          Analyse Détaillée de la Garde-Robe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          {/* Robes */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9A3412]">
              Description des Robes
            </h3>
            <p className="text-[#242321] leading-relaxed text-xs md:text-sm">
              {period.dressesDescription}
            </p>
          </div>

          {/* Autres Vêtements */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9A3412]">
              Vêtements, Manteaux & Vestes
            </h3>
            <p className="text-[#242321] leading-relaxed text-xs md:text-sm">
              {period.clothingDescription}
            </p>
          </div>

          {/* Sous-vêtements & structures */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9A3412]">
              Sous-Vêtements, Corsets & Structures
            </h3>
            <p className="text-[#242321] leading-relaxed text-xs md:text-sm">
              {period.undergarmentsDescription}
            </p>
          </div>

          {/* Accessoires */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9A3412]">
              Accessoires & Bijoux
            </h3>
            <p className="text-[#242321] leading-relaxed text-xs md:text-sm">
              {period.accessoriesDescription}
            </p>
          </div>

          {/* Coiffures */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9A3412]">
              Coiffures & Chapeaux
            </h3>
            <p className="text-[#242321] leading-relaxed text-xs md:text-sm">
              {period.hairstylesDescription}
            </p>
          </div>

          {/* Chaussures */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9A3412]">
              Chaussures & Souliers
            </h3>
            <p className="text-[#242321] leading-relaxed text-xs md:text-sm">
              {period.shoesDescription}
            </p>
          </div>
        </div>
      </div>

      {/* 12 to 15. Textiles, Usages et Différences Sociales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-[#D9CBB7]/60 p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-serif font-bold text-[#242321]">
            Matières, Couleurs & Usages
          </h2>
          <div>
            <span className="text-xs font-bold text-[#77736D] uppercase">Matières & Techniques textiles :</span>
            <p className="text-xs md:text-sm text-[#242321] mt-1 leading-relaxed">{period.materialsAndTechniques}</p>
          </div>
          <div>
            <span className="text-xs font-bold text-[#77736D] uppercase">Couleurs & Motifs privilégiés :</span>
            <p className="text-xs md:text-sm text-[#242321] mt-1 leading-relaxed">{period.colorsAndPatterns}</p>
          </div>
          <div>
            <span className="text-xs font-bold text-[#77736D] uppercase">Usages vestimentaires :</span>
            <p className="text-xs md:text-sm text-[#242321] mt-1 leading-relaxed">{period.clothingUses}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#D9CBB7]/60 p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-serif font-bold text-[#242321]">
            Société, Transition & Évolution
          </h2>
          <div>
            <span className="text-xs font-bold text-[#77736D] uppercase">Différences sociales :</span>
            <p className="text-xs md:text-sm text-[#242321] mt-1 leading-relaxed">{period.socialDifferences}</p>
          </div>
          <div>
            <span className="text-xs font-bold text-[#77736D] uppercase">Évolution vers la période suivante :</span>
            <p className="text-xs md:text-sm text-[#242321] mt-1 leading-relaxed">{period.evolutionToNext}</p>
          </div>
        </div>
      </div>

      {/* 16. Linked Garments & Designers in this period */}
      {(associatedGarments.length > 0 || associatedDesigners.length > 0) && (
        <div className="bg-white rounded-xl border border-[#D9CBB7]/60 p-6 md:p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-serif font-bold text-[#242321]">
            Vêtements & Créateurs Liés à cette Époque
          </h2>

          {associatedGarments.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#77736D] mb-3">
                Pièces emblématiques du catalogue :
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {associatedGarments.map((garment) => (
                  <button
                    key={garment.id}
                    onClick={() => onSelectGarment(garment.id)}
                    className="p-3 text-left bg-[#F7F4ED] hover:bg-[#D9CBB7]/30 rounded-lg border border-[#D9CBB7]/60 transition-colors group flex items-center gap-3"
                  >
                    {garment.images?.[0] && (
                      <img
                        src={garment.images[0].imageUrl}
                        alt={garment.name}
                        className="w-12 h-12 rounded-lg object-cover border border-[#D9CBB7] shrink-0"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-[#242321] group-hover:text-[#9A3412] truncate">
                        {garment.name}
                      </div>
                      <div className="text-[11px] text-[#77736D] mt-0.5 capitalize truncate">
                        {garment.category} · {garment.eraDates}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {associatedDesigners.length > 0 && (
            <div className="pt-4 border-t border-[#D9CBB7]/40">
              <div className="text-xs font-bold uppercase tracking-wider text-[#77736D] mb-3">
                Personnalités & Maisons de couture :
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {associatedDesigners.map((designer) => (
                  <button
                    key={designer.id}
                    onClick={() => onSelectDesigner(designer.id)}
                    className="p-3 text-left bg-[#F7F4ED] hover:bg-[#D9CBB7]/30 rounded-lg border border-[#D9CBB7]/60 transition-colors group flex items-center gap-3"
                  >
                    {designer.images && designer.images[0] && (
                      <img
                        src={designer.images[0].imageUrl}
                        alt={designer.name}
                        className="w-11 h-11 rounded-full object-cover border border-[#D9CBB7] shrink-0 shadow-2xs"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-[#242321] group-hover:text-[#9A3412] truncate">
                        {designer.name}
                      </div>
                      <div className="text-[11px] text-[#77736D] mt-0.5 truncate">
                        {designer.fashionHouse}
                      </div>
                      <div className="text-[10px] text-[#9A3412] font-mono">
                        {designer.birthYear}–{designer.deathYear || 'actuel'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 18 & 19. Sources & Historical Credits */}
      <div className="bg-[#F7F4ED] rounded-xl border border-[#D9CBB7]/60 p-6 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#242321]">
          Sources Documentaires & Provenance Institutionnelle
        </h2>
        <p className="text-xs text-[#77736D] leading-relaxed">
          Les données historiques de cette fiche sont rigoureusement issues des collections patrimoniales numérisées et des travaux universitaires :
        </p>
        <div className="space-y-2 text-xs">
          {associatedSources.map((src) => (
            <div key={src.id} className="bg-white p-3 rounded-lg border border-[#D9CBB7]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-[#242321]">{src.title}</span> —{' '}
                <span className="text-[#77736D]">{src.institution} ({src.year})</span>
                <div className="text-[11px] text-[#77736D] mt-0.5">Licence : {src.license}</div>
              </div>
              {src.url && (
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#9A3412] hover:underline whitespace-nowrap self-start sm:self-auto"
                >
                  <span>Consulter le fonds</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* User Notes Section */}
      <div className="bg-white rounded-xl border border-[#D9CBB7]/60 p-6 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#242321]">
            <Edit3 className="w-4 h-4 text-[#77736D]" />
            <span>Notes Personnelles de Recherche</span>
          </div>
          {isSavedNote && (
            <span className="text-xs text-emerald-700 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Enregistré
            </span>
          )}
        </div>
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Ajoutez vos observations, questions ou références bibliographiques personnelles sur cette période (sauvegardé localement sur cet appareil)..."
          className="w-full h-24 text-xs p-3 rounded-lg border border-[#D9CBB7] bg-[#F7F4ED]/40 text-[#242321] focus:outline-none focus:ring-1 focus:ring-[#242321]"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSaveNote}
            className="px-4 py-1.5 text-xs font-semibold bg-[#242321] text-white rounded-md hover:bg-[#3A3835] transition-colors"
          >
            Sauvegarder la note
          </button>
        </div>
      </div>

      {/* Bottom Chronological Pagination */}
      <nav className="flex items-center justify-between pt-6 border-t border-[#D9CBB7]/40">
        {prevPeriod ? (
          <button
            onClick={() => onSelectPeriod(prevPeriod.id)}
            className="flex items-center gap-2 text-left group"
          >
            <ChevronLeft className="w-5 h-5 text-[#77736D] group-hover:text-[#242321]" />
            <div>
              <span className="text-[10px] uppercase font-bold text-[#77736D] block">Époque précédente</span>
              <span className="text-xs font-bold text-[#242321] group-hover:text-[#9A3412] transition-colors">
                {prevPeriod.title} ({prevPeriod.startYear})
              </span>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextPeriod ? (
          <button
            onClick={() => onSelectPeriod(nextPeriod.id)}
            className="flex items-center gap-2 text-right group"
          >
            <div>
              <span className="text-[10px] uppercase font-bold text-[#77736D] block">Époque suivante</span>
              <span className="text-xs font-bold text-[#242321] group-hover:text-[#9A3412] transition-colors">
                {nextPeriod.title} ({nextPeriod.startYear})
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#77736D] group-hover:text-[#242321]" />
          </button>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
};
