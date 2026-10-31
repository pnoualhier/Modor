import React, { useState } from 'react';
import { HISTORICAL_DESIGNERS } from '../../data/designers';
import { Designer } from '../../types';
import { Sparkles, Heart, ExternalLink, X, Quote, Award } from 'lucide-react';

interface DesignerGalleryProps {
  onSelectPeriod: (periodId: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const DesignerGallery: React.FC<DesignerGalleryProps> = ({
  onSelectPeriod,
  favorites,
  onToggleFavorite,
}) => {
  const [selectedNationality, setSelectedNationality] = useState<string>('all');
  const [selectedDesigner, setSelectedDesigner] = useState<Designer | null>(null);

  const filteredDesigners = HISTORICAL_DESIGNERS.filter((d) => {
    if (selectedNationality !== 'all' && d.nationality !== selectedNationality) {
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
            <span className="text-xs font-semibold tracking-widest text-[#77736D] uppercase font-sans">
              Panthéon de la Haute Couture
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242321] mt-1">
              Grands Créateurs & Maisons de Couture
            </h2>
            <p className="text-sm text-[#77736D] max-w-2xl mt-2 leading-relaxed">
              Découvrez les visionnaires qui ont révolutionné la silhouette féminine à Paris, de Rose Bertin à Versailles aux créateurs éco-responsables du XXIe siècle.
            </p>
          </div>

          <div className="text-xs text-[#77736D] bg-white px-3 py-1.5 rounded-lg border border-[#D9CBB7]/60 whitespace-nowrap self-start md:self-auto">
            <span className="font-semibold text-[#242321]">{filteredDesigners.length}</span> créateurs documentés
          </div>
        </div>

        {/* Filter Nationality Tabs */}
        <div className="mt-5 flex items-center gap-2">
          <span className="text-xs text-[#77736D]">Origine :</span>
          {['all', 'Française', 'Britannique', 'Italienne', 'Allemande'].map((nat) => (
            <button
              key={nat}
              onClick={() => setSelectedNationality(nat)}
              className={`px-3 py-1 text-xs rounded-md transition-colors ${
                selectedNationality === nat
                  ? 'bg-[#242321] text-white font-medium'
                  : 'bg-white text-[#77736D] hover:text-[#242321] border border-[#D9CBB7]/40'
              }`}
            >
              {nat === 'all' ? 'Tous les créateurs' : nat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Designers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDesigners.map((designer) => {
          const isFav = favorites.includes(designer.id);
          return (
            <div
              key={designer.id}
              onClick={() => setSelectedDesigner(designer)}
              className="bg-white rounded-xl border border-[#D9CBB7]/60 p-6 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group hover:border-[#D9CBB7]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#77736D]">
                  <span className="font-bold text-[#9A3412] uppercase tracking-wider text-[10px]">
                    {designer.nationality}
                  </span>
                  <span className="font-mono text-[#242321]">
                    {designer.birthYear} – {designer.deathYear || 'présent'}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#242321] group-hover:text-[#9A3412] transition-colors">
                      {designer.name}
                    </h3>
                    <div className="text-xs font-medium text-[#77736D] mt-0.5">
                      {designer.fashionHouse}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(designer.id);
                    }}
                    className="text-[#77736D] hover:text-[#9A3412] p-1 -mr-1"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-[#9A3412] text-[#9A3412]' : ''}`} />
                  </button>
                </div>

                {designer.quote && (
                  <div className="text-xs font-serif italic text-[#77736D] border-l-2 border-[#D9B8B3] pl-3 py-0.5">
                    « {designer.quote} »
                  </div>
                )}

                <p className="text-xs text-[#242321]/90 line-clamp-3 leading-relaxed">
                  {designer.biography}
                </p>

                {/* Innovations List Teaser */}
                <div className="space-y-1 pt-2 border-t border-[#D9CBB7]/30 text-xs">
                  <span className="text-[10px] font-bold text-[#77736D] uppercase tracking-wider block">
                    Innovations phares :
                  </span>
                  <div className="text-[11px] text-[#242321] truncate">
                    • {designer.innovations[0]}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-[#D9CBB7]/30 flex items-center justify-between text-xs">
                <span className="text-[10.5px] text-[#77736D]">
                  {designer.activeDecades.join(', ')}
                </span>
                <span className="font-semibold text-[#242321] group-hover:text-[#9A3412] flex items-center gap-1 text-[11px]">
                  <span>Biographie & Œuvres</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Designer Detail Modal */}
      {selectedDesigner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          onClick={() => setSelectedDesigner(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-[#D9CBB7] p-6 md:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#D9CBB7]/40 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#77736D]">
                  <span className="font-bold text-[#9A3412] uppercase tracking-wider">
                    {selectedDesigner.nationality}
                  </span>
                  <span>·</span>
                  <span className="font-mono text-[#242321]">
                    {selectedDesigner.birthYear} – {selectedDesigner.deathYear || 'présent'}
                  </span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-[#242321] mt-1">
                  {selectedDesigner.name}
                </h3>
                <div className="text-xs font-semibold text-[#77736D] mt-0.5">
                  {selectedDesigner.fashionHouse}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onToggleFavorite(selectedDesigner.id)}
                  className={`p-2 rounded-full border transition-colors ${
                    favorites.includes(selectedDesigner.id)
                      ? 'bg-[#9A3412] text-white border-[#9A3412]'
                      : 'bg-[#F7F4ED] text-[#77736D] border-[#D9CBB7] hover:text-[#242321]'
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes(selectedDesigner.id) ? 'fill-current' : ''
                    }`}
                  />
                </button>
                <button
                  onClick={() => setSelectedDesigner(null)}
                  className="p-2 text-[#77736D] hover:text-[#242321] rounded-full hover:bg-[#F7F4ED]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quote if available */}
            {selectedDesigner.quote && (
              <div className="bg-[#F7F4ED] p-4 rounded-xl border border-[#D9CBB7]/40 flex gap-3 text-xs italic font-serif text-[#242321] text-base leading-relaxed">
                <Quote className="w-6 h-6 text-[#D9B8B3] shrink-0" />
                <div>« {selectedDesigner.quote} »</div>
              </div>
            )}

            {/* Biography */}
            <div className="space-y-2 text-xs md:text-sm">
              <span className="font-bold text-[#9A3412] uppercase tracking-wide text-xs block">
                Biographie & Trajectoire :
              </span>
              <p className="text-[#242321] leading-relaxed">{selectedDesigner.biography}</p>
            </div>

            {/* Innovations list */}
            <div className="space-y-2 text-xs bg-[#F7F4ED]/50 p-4 rounded-xl border border-[#D9CBB7]/30">
              <span className="font-bold text-[#242321] uppercase tracking-wide flex items-center gap-1.5 text-xs">
                <Award className="w-4 h-4 text-[#9A3412]" />
                <span>Innovations & Révolutions Stylistiques :</span>
              </span>
              <ul className="space-y-1.5 pl-5 list-disc text-[#242321]">
                {selectedDesigner.innovations.map((inn, i) => (
                  <li key={i} className="leading-relaxed">
                    {inn}
                  </li>
                ))}
              </ul>
            </div>

            {/* Iconic Creations */}
            <div className="space-y-2 text-xs">
              <span className="font-bold text-[#77736D] uppercase tracking-wide text-xs block">
                Créations Emblématiques :
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedDesigner.iconicCreations.map((c, i) => (
                  <span
                    key={i}
                    className="inline-block bg-white text-[#242321] border border-[#D9CBB7] px-2.5 py-1 rounded text-xs"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Historical Influence */}
            <div className="space-y-1 text-xs pt-2 border-t border-[#D9CBB7]/40">
              <span className="font-bold text-[#242321] uppercase tracking-wide block">
                Héritage & Postérité :
              </span>
              <p className="text-[#77736D] leading-relaxed">{selectedDesigner.historicalInfluence}</p>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#D9CBB7]/40 flex items-center justify-between">
              {selectedDesigner.periodIds.length > 0 ? (
                <div className="text-xs text-[#77736D]">
                  <span>Période associée : </span>
                  {selectedDesigner.periodIds.map((pId) => (
                    <button
                      key={pId}
                      onClick={() => {
                        setSelectedDesigner(null);
                        onSelectPeriod(pId);
                      }}
                      className="underline text-[#9A3412] font-semibold hover:text-[#242321] ml-1"
                    >
                      Consulter l'époque
                    </button>
                  ))}
                </div>
              ) : (
                <div />
              )}

              <button
                onClick={() => setSelectedDesigner(null)}
                className="px-4 py-2 bg-[#242321] text-white text-xs font-semibold rounded-lg hover:bg-[#3A3835] transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
