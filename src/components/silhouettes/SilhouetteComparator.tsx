import React, { useState } from 'react';
import { SILHOUETTE_DEFINITIONS } from '../../data/silhouettes';
import { SilhouetteFigure } from './SilhouetteFigure';
import { ArrowLeftRight, Layers, Ruler, Eye, Sparkles } from 'lucide-react';

const PRESETS = [
  { name: 'XVIIIe vs Empire', idA: 'SIL_ROCOCO', idB: 'SIL_DIRECTOIRE', label: 'Rupture néoclassique : des paniers à la robe chemise' },
  { name: 'Crinoline vs Tournure', idA: 'SIL_CRINOLINE', idB: 'SIL_TOURNURE', label: 'Du dôme sphérique au faux-cul arrière (1860 vs 1885)' },
  { name: 'Belle Époque vs 1920s', idA: 'SIL_BELLE_EPOQUE', idB: 'SIL_GARCONNE', label: 'De la ligne S corsetée à la robe garçonne libérée' },
  { name: '1920s vs New Look 1947', idA: 'SIL_GARCONNE', idB: 'SIL_NEW_LOOK', label: 'De l\'androgynie tubulaire à la femme corolle de Dior' },
  { name: '1950s vs 1960s', idA: 'SIL_NEW_LOOK', idB: 'SIL_TRAPEZE_MINI', label: 'Du carcan bourgeois à la mini-jupe spatiale' },
  { name: '1980s vs 2020s', idA: 'SIL_POWER_DRESSING', idB: 'SIL_CONTEMPORAINE', label: 'Du Power Dressing conquérant à la fluidité éco-responsable' },
  { name: 'Renaissance vs XVIIIe', idA: 'SIL_RENAISSANCE', idB: 'SIL_ROCOCO', label: 'Du cône vertugadin aux grands paniers à coudes' },
];

export const SilhouetteComparator: React.FC = () => {
  const [selectedIdA, setSelectedIdA] = useState<string>('SIL_ROCOCO');
  const [selectedIdB, setSelectedIdB] = useState<string>('SIL_DIRECTOIRE');
  const [showStructures, setShowStructures] = useState<boolean>(true);
  const [showMeasurements, setShowMeasurements] = useState<boolean>(true);
  const [mode, setMode] = useState<'duo' | 'multi'>('duo');
  const [multiIds, setMultiIds] = useState<string[]>(['SIL_RENAISSANCE', 'SIL_ROCOCO', 'SIL_CRINOLINE', 'SIL_GARCONNE']);

  const silA = SILHOUETTE_DEFINITIONS.find((s) => s.id === selectedIdA) || SILHOUETTE_DEFINITIONS[0];
  const silB = SILHOUETTE_DEFINITIONS.find((s) => s.id === selectedIdB) || SILHOUETTE_DEFINITIONS[1];

  const handleSwap = () => {
    setSelectedIdA(selectedIdB);
    setSelectedIdB(selectedIdA);
  };

  const handleSelectPreset = (idA: string, idB: string) => {
    setSelectedIdA(idA);
    setSelectedIdB(idB);
    setMode('duo');
  };

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="border-b border-[#D9CBB7]/40 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#77736D] uppercase font-sans">
              Module d'Analyse Morphologique
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242321] mt-1">
              Comparateur de Silhouettes
            </h2>
            <p className="text-sm text-[#77736D] max-w-2xl mt-2 leading-relaxed">
              Observez les transformations de la morphologie féminine sous l'effet des artifices mécaniques. 
              Toutes les silhouettes sont dessinées selon une même convention graphique : même échelle, vue de face et posture uniforme.
            </p>
          </div>

          {/* Mode Switch & Layer Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowStructures(!showStructures)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                showStructures
                  ? 'bg-[#242321] text-[#F7F4ED] border-[#242321]'
                  : 'bg-white text-[#242321] border-[#D9CBB7] hover:bg-[#F7F4ED]'
              }`}
              title="Afficher/masquer les armatures internes (cages, paniers, corsets)"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Structures internes</span>
            </button>

            <button
              onClick={() => setShowMeasurements(!showMeasurements)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                showMeasurements
                  ? 'bg-[#242321] text-[#F7F4ED] border-[#242321]'
                  : 'bg-white text-[#242321] border-[#D9CBB7] hover:bg-[#F7F4ED]'
              }`}
              title="Afficher les repères métriques comparatifs"
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>Repères métriques</span>
            </button>

            <div className="h-5 w-px bg-[#D9CBB7]/60 hidden sm:block mx-1" />

            <div className="inline-flex rounded-md border border-[#D9CBB7] bg-white p-0.5">
              <button
                onClick={() => setMode('duo')}
                className={`px-3 py-1 text-xs font-medium rounded ${
                  mode === 'duo' ? 'bg-[#242321] text-[#F7F4ED]' : 'text-[#77736D] hover:text-[#242321]'
                }`}
              >
                Duo (2 époques)
              </button>
              <button
                onClick={() => setMode('multi')}
                className={`px-3 py-1 text-xs font-medium rounded ${
                  mode === 'multi' ? 'bg-[#242321] text-[#F7F4ED]' : 'text-[#77736D] hover:text-[#242321]'
                }`}
              >
                Galerie (4 époques)
              </button>
            </div>
          </div>
        </div>

        {/* Quick Presets Strip */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs text-[#77736D] whitespace-nowrap shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#D9B8B3]" /> Préréglages historiques :
          </span>
          {PRESETS.map((p) => {
            const isActive = mode === 'duo' && selectedIdA === p.idA && selectedIdB === p.idB;
            return (
              <button
                key={p.name}
                onClick={() => handleSelectPreset(p.idA, p.idB)}
                className={`px-2.5 py-1 text-xs rounded-full whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#D9B8B3]/30 border-[#D9B8B3] text-[#242321] font-medium'
                    : 'bg-white/80 border-[#D9CBB7]/60 text-[#77736D] hover:text-[#242321] hover:border-[#D9CBB7]'
                }`}
                title={p.label}
              >
                {p.name}
              </button>
            );
          })}
        </div>
      </div>

      {mode === 'duo' ? (
        <>
          {/* Duo Comparison Controls & Visual Viewport */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Period A Column */}
            <div className="bg-white/90 p-5 rounded-xl border border-[#D9CBB7]/60 shadow-sm flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#77736D] tracking-wide uppercase">Époque A</span>
                <select
                  value={selectedIdA}
                  onChange={(e) => setSelectedIdA(e.target.value)}
                  className="text-xs bg-[#F7F4ED] border border-[#D9CBB7] rounded-md px-2.5 py-1.5 font-medium text-[#242321] focus:outline-none focus:ring-1 focus:ring-[#242321]"
                >
                  {SILHOUETTE_DEFINITIONS.map((s) => (
                    <option key={s.id} value={s.id} disabled={s.id === selectedIdB}>
                      {s.century}e s. — {s.eraName} ({s.yearLabel})
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full max-w-[280px]">
                <SilhouetteFigure
                  silhouette={silA}
                  showStructureLayer={showStructures}
                  showMeasurementGuides={showMeasurements}
                />
              </div>

              <div className="mt-4 w-full bg-[#F7F4ED] p-3.5 rounded-lg border border-[#D9CBB7]/40 text-left">
                <div className="text-xs font-bold text-[#242321] uppercase tracking-wide">
                  {silA.svgModel.structureName}
                </div>
                <p className="text-xs text-[#77736D] mt-1 leading-relaxed">
                  {silA.svgModel.description}
                </p>
                <div className="mt-2.5 pt-2 border-t border-[#D9CBB7]/40 flex flex-wrap gap-1 text-[11px] text-[#242321]">
                  <span className="font-semibold text-[#77736D]">Clés :</span>
                  {silA.keyFeatures.slice(0, 2).map((f, i) => (
                    <span key={i} className="inline-block bg-white px-2 py-0.5 rounded border border-[#D9CBB7]/40 text-[10.5px]">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Swap Button for mobile & desktop */}
            <div className="lg:hidden flex justify-center -my-4 z-10">
              <button
                onClick={handleSwap}
                className="bg-[#242321] text-[#F7F4ED] p-2.5 rounded-full shadow hover:scale-105 transition-transform"
                title="Échanger les deux époques"
              >
                <ArrowLeftRight className="w-4 h-4" />
              </button>
            </div>

            {/* Period B Column */}
            <div className="bg-white/90 p-5 rounded-xl border border-[#D9CBB7]/60 shadow-sm flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#77736D] tracking-wide uppercase">Époque B</span>
                <select
                  value={selectedIdB}
                  onChange={(e) => setSelectedIdB(e.target.value)}
                  className="text-xs bg-[#F7F4ED] border border-[#D9CBB7] rounded-md px-2.5 py-1.5 font-medium text-[#242321] focus:outline-none focus:ring-1 focus:ring-[#242321]"
                >
                  {SILHOUETTE_DEFINITIONS.map((s) => (
                    <option key={s.id} value={s.id} disabled={s.id === selectedIdA}>
                      {s.century}e s. — {s.eraName} ({s.yearLabel})
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full max-w-[280px]">
                <SilhouetteFigure
                  silhouette={silB}
                  showStructureLayer={showStructures}
                  showMeasurementGuides={showMeasurements}
                />
              </div>

              <div className="mt-4 w-full bg-[#F7F4ED] p-3.5 rounded-lg border border-[#D9CBB7]/40 text-left">
                <div className="text-xs font-bold text-[#242321] uppercase tracking-wide">
                  {silB.svgModel.structureName}
                </div>
                <p className="text-xs text-[#77736D] mt-1 leading-relaxed">
                  {silB.svgModel.description}
                </p>
                <div className="mt-2.5 pt-2 border-t border-[#D9CBB7]/40 flex flex-wrap gap-1 text-[11px] text-[#242321]">
                  <span className="font-semibold text-[#77736D]">Clés :</span>
                  {silB.keyFeatures.slice(0, 2).map((f, i) => (
                    <span key={i} className="inline-block bg-white px-2 py-0.5 rounded border border-[#D9CBB7]/40 text-[10.5px]">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Morphological Comparison Table */}
          <div className="bg-white rounded-xl border border-[#D9CBB7]/60 overflow-hidden shadow-sm">
            <div className="bg-[#242321] text-[#F7F4ED] px-6 py-3.5 flex items-center justify-between">
              <h3 className="text-base font-serif font-bold tracking-wide">
                Tableau Différentiel Morphologique
              </h3>
              <button
                onClick={handleSwap}
                className="hidden lg:flex items-center gap-1.5 text-xs text-[#D9CBB7] hover:text-white transition-colors"
              >
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>Intervertir les époques</span>
              </button>
            </div>

            <div className="divide-y divide-[#D9CBB7]/30 text-xs">
              {/* Row 1: General Silhouette */}
              <div className="grid grid-cols-1 md:grid-cols-3 p-4 hover:bg-[#F7F4ED]/30 transition-colors">
                <div className="font-semibold text-[#242321] mb-1 md:mb-0">Forme générale</div>
                <div className="text-[#77736D] md:pr-4">{silA.summary}</div>
                <div className="text-[#77736D] border-t md:border-t-0 md:border-l border-[#D9CBB7]/30 pt-2 md:pt-0 md:pl-4 mt-2 md:mt-0">
                  {silB.summary}
                </div>
              </div>

              {/* Row 2: Waist Position & Girth */}
              <div className="grid grid-cols-1 md:grid-cols-3 p-4 hover:bg-[#F7F4ED]/30 transition-colors bg-[#F7F4ED]/20">
                <div className="font-semibold text-[#242321] mb-1 md:mb-0">Position & finesse de la taille</div>
                <div className="text-[#77736D] md:pr-4">
                  Hauteur Y : {silA.svgModel.waistY}% · Largeur : {silA.svgModel.waistWidth}%
                  <br />
                  <span className="text-[11px] text-[#242321] font-medium">
                    {silA.svgModel.waistY < 40 ? 'Taille haute sous-gorge (Empire)' : silA.svgModel.waistY > 58 ? 'Taille basse sur les hanches' : 'Taille anatomique naturelle'}
                  </span>
                </div>
                <div className="text-[#77736D] border-t md:border-t-0 md:border-l border-[#D9CBB7]/30 pt-2 md:pt-0 md:pl-4 mt-2 md:mt-0">
                  Hauteur Y : {silB.svgModel.waistY}% · Largeur : {silB.svgModel.waistWidth}%
                  <br />
                  <span className="text-[11px] text-[#242321] font-medium">
                    {silB.svgModel.waistY < 40 ? 'Taille haute sous-gorge (Empire)' : silB.svgModel.waistY > 58 ? 'Taille basse sur les hanches' : 'Taille anatomique naturelle'}
                  </span>
                </div>
              </div>

              {/* Row 3: Hips & Skirt Volume */}
              <div className="grid grid-cols-1 md:grid-cols-3 p-4 hover:bg-[#F7F4ED]/30 transition-colors">
                <div className="font-semibold text-[#242321] mb-1 md:mb-0">Hanches & Envergure de la jupe</div>
                <div className="text-[#77736D] md:pr-4">
                  Envergure base : {silA.svgModel.skirtBottomWidth}%
                  <br />
                  <span className="text-[11px] text-[#242321]">
                    {silA.svgModel.understructureShape === 'rococo_panier' ? 'Évasement latéral extrême' : silA.svgModel.understructureShape === 'crinoline_dome' ? 'Dôme sphérique monumental' : silA.svgModel.understructureShape === 'tournure_bustle' ? 'Projection dorsale en angle droit' : 'Tombé fluide naturel'}
                  </span>
                </div>
                <div className="text-[#77736D] border-t md:border-t-0 md:border-l border-[#D9CBB7]/30 pt-2 md:pt-0 md:pl-4 mt-2 md:mt-0">
                  Envergure base : {silB.svgModel.skirtBottomWidth}%
                  <br />
                  <span className="text-[11px] text-[#242321]">
                    {silB.svgModel.understructureShape === 'rococo_panier' ? 'Évasement latéral extrême' : silB.svgModel.understructureShape === 'crinoline_dome' ? 'Dôme sphérique monumental' : silB.svgModel.understructureShape === 'tournure_bustle' ? 'Projection dorsale en angle droit' : 'Tombé fluide naturel'}
                  </span>
                </div>
              </div>

              {/* Row 4: Shoulders & Carrure */}
              <div className="grid grid-cols-1 md:grid-cols-3 p-4 hover:bg-[#F7F4ED]/30 transition-colors bg-[#F7F4ED]/20">
                <div className="font-semibold text-[#242321] mb-1 md:mb-0">Carrure des épaules & Manches</div>
                <div className="text-[#77736D] md:pr-4">
                  Largeur épaules : {silA.svgModel.shouldersWidth}%
                  <br />
                  <span className="text-[11px] text-[#242321]">
                    {silA.svgModel.shouldersWidth > 75 ? 'Manches gigot ou épaulettes XXL' : 'Épaules douces naturelles'}
                  </span>
                </div>
                <div className="text-[#77736D] border-t md:border-t-0 md:border-l border-[#D9CBB7]/30 pt-2 md:pt-0 md:pl-4 mt-2 md:mt-0">
                  Largeur épaules : {silB.svgModel.shouldersWidth}%
                  <br />
                  <span className="text-[11px] text-[#242321]">
                    {silB.svgModel.shouldersWidth > 75 ? 'Manches gigot ou épaulettes XXL' : 'Épaules douces naturelles'}
                  </span>
                </div>
              </div>

              {/* Row 5: Internal Understructures */}
              <div className="grid grid-cols-1 md:grid-cols-3 p-4 hover:bg-[#F7F4ED]/30 transition-colors">
                <div className="font-semibold text-[#242321] mb-1 md:mb-0">Artifices & Structures internes</div>
                <div className="text-[#77736D] md:pr-4">
                  <ul className="list-disc list-inside space-y-0.5 text-[11.5px]">
                    {silA.undergarmentStructures.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-[#77736D] border-t md:border-t-0 md:border-l border-[#D9CBB7]/30 pt-2 md:pt-0 md:pl-4 mt-2 md:mt-0">
                  <ul className="list-disc list-inside space-y-0.5 text-[11.5px]">
                    {silB.undergarmentStructures.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Multi-Gallery (4 Epochs) */
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#77736D]">
              Sélectionnez jusqu'à 4 époques pour observer la métamorphose continue des corps :
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {multiIds.map((id, index) => {
              const sil = SILHOUETTE_DEFINITIONS.find((s) => s.id === id) || SILHOUETTE_DEFINITIONS[index];
              return (
                <div key={id} className="bg-white p-4 rounded-xl border border-[#D9CBB7]/60 shadow-sm flex flex-col">
                  <select
                    value={id}
                    onChange={(e) => {
                      const newIds = [...multiIds];
                      newIds[index] = e.target.value;
                      setMultiIds(newIds);
                    }}
                    className="text-xs bg-[#F7F4ED] border border-[#D9CBB7] rounded p-1 mb-3 font-medium text-[#242321]"
                  >
                    {SILHOUETTE_DEFINITIONS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.eraName} ({s.yearLabel})
                      </option>
                    ))}
                  </select>

                  <div className="w-full flex-1">
                    <SilhouetteFigure
                      silhouette={sil}
                      showStructureLayer={showStructures}
                      showMeasurementGuides={showMeasurements}
                    />
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#D9CBB7]/40 text-center">
                    <div className="text-[11px] font-semibold text-[#242321]">{sil.svgModel.structureName}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
