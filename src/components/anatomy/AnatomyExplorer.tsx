import React, { useState } from 'react';
import { ANATOMY_MODELS, AnatomyEraModel } from '../../data/anatomy';
import { SILHOUETTE_DEFINITIONS } from '../../data/silhouettes';
import { SilhouetteFigure } from '../silhouettes/SilhouetteFigure';
import { AnatomyHotspot } from '../../types';
import { Info, Sparkles, Layers, Scissors, History, CheckCircle2 } from 'lucide-react';
import { HelpTooltip } from '../common/HelpTooltip';

export const AnatomyExplorer: React.FC = () => {
  const [selectedModelId, setSelectedModelId] = useState<string>('ANAT_ROCOCO');
  const [activeZone, setActiveZone] = useState<string>('structure');

  const currentModel: AnatomyEraModel =
    ANATOMY_MODELS.find((m) => m.id === selectedModelId) || ANATOMY_MODELS[0];

  const currentSilhouette =
    SILHOUETTE_DEFINITIONS.find((s) => s.id === currentModel.silhouetteSvgId) ||
    SILHOUETTE_DEFINITIONS[0];

  const activeHotspot: AnatomyHotspot | undefined =
    currentModel.hotspots.find((h) => h.zone === activeZone) || currentModel.hotspots[0];

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="border-b border-[#D9CBB7]/40 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest text-[#77736D] uppercase font-sans">
            Dissection Pédagogique du Costume
          </span>
          <HelpTooltip
            title="Comment explorer l'anatomie ?"
            content="Cliquez sur les puces circulaires sur le mannequin ou dans la liste en bas pour décortiquer chaque pièce vestimentaire (matière, armature, fonction anatomique)."
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242321] mt-1">
          Anatomie d'une Silhouette
        </h2>
        <p className="text-sm text-[#77736D] max-w-2xl mt-2 leading-relaxed">
          Sélectionnez une époque et touchez les différentes zones interactives de la silhouette pour explorer la construction, les matériaux et le rôle historique de chaque pièce maîtresse du costume.
        </p>

        {/* Era selector tabs */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {ANATOMY_MODELS.map((model) => (
            <button
              key={model.id}
              onClick={() => {
                setSelectedModelId(model.id);
                // reset or keep zone if exists
                if (!model.hotspots.some((h) => h.zone === activeZone)) {
                  setActiveZone(model.hotspots[0].zone);
                }
              }}
              className={`px-3.5 py-1.5 text-xs rounded-full whitespace-nowrap transition-all border ${
                selectedModelId === model.id
                  ? 'bg-[#242321] text-[#F7F4ED] border-[#242321] font-medium shadow-sm'
                  : 'bg-white text-[#77736D] border-[#D9CBB7]/60 hover:text-[#242321] hover:border-[#D9CBB7]'
              }`}
            >
              {model.name} ({model.dates})
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Figure with Interactive Hotspot Buttons (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#D9CBB7]/60 shadow-sm flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-4 border-b border-[#D9CBB7]/30 pb-2">
            <span className="text-xs font-semibold text-[#77736D] uppercase tracking-wider">
              Silhouette & Couches Internes
            </span>
            <span className="text-xs text-[#242321] font-serif font-bold">
              {currentModel.dates}
            </span>
          </div>

          {/* Interactive Silhouette with Hotspot Badges Overlay */}
          <div className="relative w-full max-w-[280px]">
            <SilhouetteFigure
              silhouette={currentSilhouette}
              showStructureLayer={true}
              showMeasurementGuides={false}
              highlightZone={activeZone}
            />

            {/* Interactive Pins over SVG */}
            {currentModel.hotspots.map((hotspot) => {
              const isSelected = activeZone === hotspot.zone;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveZone(hotspot.zone)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveZone(hotspot.zone);
                    }
                  }}
                  style={{
                    left: `${hotspot.xPercent}%`,
                    top: `${hotspot.yPercent}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all shadow-md focus-visible:ring-2 focus-visible:ring-black ${
                    isSelected
                      ? 'bg-[#242321] text-white ring-4 ring-[#D9B8B3] scale-110 z-20'
                      : 'bg-white/95 text-[#242321] border border-[#D9CBB7] hover:scale-105 z-10'
                  }`}
                  title={hotspot.name}
                  aria-pressed={isSelected}
                  aria-label={`Inspecter l'élément anatomique : ${hotspot.name}`}
                >
                  <span className="sr-only">{hotspot.name}</span>
                  <span className="w-2 h-2 rounded-full bg-current" aria-hidden="true" />
                </button>
              );
            })}
          </div>

          {/* Quick Zone Picker Chips below figure */}
          <div className="mt-6 w-full pt-4 border-t border-[#D9CBB7]/40">
            <div className="text-[11px] font-semibold text-[#77736D] mb-2 uppercase tracking-wider">
              Points d'anatomie interactifs :
            </div>
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Points d'intérêt du costume">
              {currentModel.hotspots.map((h) => {
                const isSelected = activeZone === h.zone;
                return (
                  <button
                    key={h.id}
                    onClick={() => setActiveZone(h.zone)}
                    aria-pressed={isSelected}
                    className={`px-2.5 py-1 text-xs rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-black ${
                      isSelected
                        ? 'bg-[#242321] text-white font-medium'
                        : 'bg-[#F7F4ED] text-[#77736D] hover:text-[#242321] hover:bg-[#D9CBB7]/30'
                    }`}
                  >
                    {h.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Educational Anatomy Card (7 cols) */}
        <div 
          className="lg:col-span-7 bg-white rounded-xl border border-[#D9CBB7]/60 p-6 md:p-8 shadow-sm"
          aria-live="polite"
        >
          {activeHotspot ? (
            <div className="space-y-6">
              {/* Card Title & Zone Tag */}
              <div className="border-b border-[#D9CBB7]/40 pb-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#77736D]">
                  <span className="text-[#9A3412] font-bold">Zone : {activeHotspot.zone}</span>
                  <span>·</span>
                  <span>{currentModel.name}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#242321] mt-1">
                  {activeHotspot.name}
                </h3>
              </div>

              {/* Section 1: Historical Role */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#242321] uppercase tracking-wide">
                  <Info className="w-4 h-4 text-[#9A3412]" />
                  <span>Rôle & Fonction Anatomique</span>
                </div>
                <p className="text-sm text-[#242321] leading-relaxed pl-6">
                  {activeHotspot.historicalRole}
                </p>
              </div>

              {/* Section 2: Construction & Technique */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#242321] uppercase tracking-wide">
                  <Scissors className="w-4 h-4 text-[#77736D]" />
                  <span>Construction, Coupe & Architecture</span>
                </div>
                <p className="text-sm text-[#77736D] leading-relaxed pl-6">
                  {activeHotspot.construction}
                </p>
              </div>

              {/* Section 3: Materials */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#242321] uppercase tracking-wide">
                  <Layers className="w-4 h-4 text-[#A6AA99]" />
                  <span>Matériaux & Étoffes Historiques</span>
                </div>
                <div className="pl-6 flex flex-wrap gap-1.5 mt-2">
                  {activeHotspot.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="inline-block bg-[#F7F4ED] text-[#242321] text-xs px-2.5 py-1 rounded border border-[#D9CBB7]/60"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Section 4: History & Evolution */}
              <div className="space-y-1.5 pt-2 border-t border-[#D9CBB7]/30">
                <div className="flex items-center gap-2 text-xs font-bold text-[#242321] uppercase tracking-wide">
                  <History className="w-4 h-4 text-[#77736D]" />
                  <span>Évolution & Périodes Associées</span>
                </div>
                <p className="text-sm text-[#77736D] leading-relaxed pl-6">
                  {activeHotspot.usageEvolutions}
                </p>
                <div className="pl-6 flex flex-wrap gap-2 pt-1 text-xs text-[#77736D]">
                  <span className="font-semibold text-[#242321]">Usage historique :</span>
                  {activeHotspot.periodsUsed.join(', ')}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-16 text-center text-[#77736D]">
              <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p>Sélectionnez une zone sur la silhouette pour afficher son anatomie détaillée.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
