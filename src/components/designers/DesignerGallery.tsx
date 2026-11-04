import React, { useState } from 'react';
import { HISTORICAL_DESIGNERS } from '../../data/designers';
import { Designer } from '../../types';
import { Sparkles, Heart, ExternalLink, X, Quote, Award, ShieldCheck, ZoomIn, Camera } from 'lucide-react';

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
  const [zoomedImage, setZoomedImage] = useState<{ url: string; title: string; institution: string; license: string } | null>(null);

  const filteredDesigners = HISTORICAL_DESIGNERS.filter((d) => {
    if (selectedNationality !== 'all' && d.nationality !== selectedNationality) {
      return false;
    }
    return true;
  });

  // Handle Escape key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
        } else if (selectedDesigner) {
          setSelectedDesigner(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedDesigner, zoomedImage]);

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="border-b border-[#D9CBB7]/40 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold tracking-widest text-[#77736D] uppercase font-sans">
                Panthéon de la Haute Couture
              </span>
              <span className="inline-flex items-center gap-1 bg-[#F4EDE1] text-[#77736D] border border-[#D9CBB7]/60 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                <Camera className="w-3 h-3 text-[#9A3412]" />
                Portraits d'archives
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242321] mt-1">
              Grands Créateurs & Maisons de Couture
            </h2>
            <p className="text-sm text-[#77736D] max-w-2xl mt-2 leading-relaxed">
              Découvrez les 23 visionnaires de la mode parisienne accompagnés de leurs portraits photographiques et gravures d'archives patrimoniales (Wikipédia, Gallica, Musées de la Mode).
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
          const primaryImage = designer.images && designer.images.length > 0 ? designer.images[0] : null;

          return (
            <div
              key={designer.id}
              onClick={() => setSelectedDesigner(designer)}
              className="bg-white rounded-xl border border-[#D9CBB7]/60 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group hover:border-[#D9CBB7]"
            >
              {/* Designer Archival Portrait Image */}
              {primaryImage && (
                <div className="relative aspect-4/3 w-full bg-[#F4EDE1] overflow-hidden border-b border-[#D9CBB7]/40">
                  <img
                    src={primaryImage.imageUrl}
                    alt={primaryImage.title || `Portrait de ${designer.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Institution provenance badge at bottom */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 text-white">
                    <p className="text-[10px] text-white/90 truncate font-serif italic">
                      {primaryImage.institution}
                    </p>
                  </div>
                </div>
              )}

              <div className="p-5 space-y-4">
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
                    <h3 className="text-xl font-serif font-bold text-[#242321] group-hover:text-[#9A3412] transition-colors">
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
                    title={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
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
                    Innovation majeure :
                  </span>
                  <div className="text-[11px] text-[#242321] truncate">
                    • {designer.innovations[0]}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-4 pt-2 border-t border-[#D9CBB7]/30 flex items-center justify-between text-xs bg-[#FAF8F5]/60">
                <span className="text-[10.5px] text-[#77736D]">
                  {designer.activeDecades.join(', ')}
                </span>
                <span className="font-semibold text-[#242321] group-hover:text-[#9A3412] flex items-center gap-1 text-[11px]">
                  <span>Fiche & Cliché</span>
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
          role="dialog"
          aria-modal="true"
          aria-label={`Détails du créateur : ${selectedDesigner.name}`}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-[#D9CBB7] p-6 md:p-8 space-y-6"
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
                  title={favorites.includes(selectedDesigner.id) ? "Retirer des favoris" : "Ajouter aux favoris"}
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
                  title="Fermer la fiche"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Prominent Archival Portrait Section in Modal */}
            {selectedDesigner.images && selectedDesigner.images.length > 0 && (
              <div className="bg-[#F7F4ED] rounded-xl border border-[#D9CBB7]/60 p-4 space-y-3">
                <div className="flex flex-col sm:flex-row gap-5 items-center">
                  <div className="relative w-full sm:w-56 aspect-3/4 shrink-0 rounded-lg overflow-hidden border border-[#D9CBB7] shadow-xs group bg-[#EFE8DC]">
                    <img
                      src={selectedDesigner.images[0].imageUrl}
                      alt={selectedDesigner.images[0].title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <button
                      onClick={() => {
                        const img = selectedDesigner.images[0];
                        setZoomedImage({
                          url: img.imageUrl,
                          title: img.title,
                          institution: img.institution,
                          license: img.license,
                        });
                      }}
                      className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 text-xs font-medium"
                    >
                      <ZoomIn className="w-4 h-4" />
                      <span>Agrandir</span>
                    </button>
                  </div>

                  <div className="space-y-2 text-xs flex-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 bg-[#F4EDE1] text-[#242321] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#D9CBB7]/80">
                        <Camera className="w-3 h-3 text-[#9A3412]" />
                        {selectedDesigner.images[0].institution}
                      </span>
                      <span className="text-[11px] font-mono text-[#77736D]">
                        {selectedDesigner.images[0].license}
                      </span>
                    </div>

                    <h4 className="text-sm font-serif font-bold text-[#242321] leading-snug">
                      {selectedDesigner.images[0].title}
                    </h4>

                    <p className="text-[#77736D] leading-relaxed text-[11.5px]">
                      {selectedDesigner.images[0].caption}
                    </p>

                    <div className="pt-2 border-t border-[#D9CBB7]/40 text-[11px] text-[#55524E]">
                      <span className="font-semibold text-[#242321]">Fonds de conservation : </span>
                      <span>{selectedDesigner.images[0].institution}</span>
                    </div>

                    <div className="text-[10px] text-[#77736D] font-mono">
                      Référence d'archive : {selectedDesigner.images[0].id}
                    </div>
                  </div>
                </div>
              </div>
            )}

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

      {/* Lightbox / Zoomed Image Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setZoomedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#D9CBB7]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center justify-between border-b border-[#D9CBB7]/40">
              <div>
                <h4 className="text-sm font-serif font-bold text-[#242321]">{zoomedImage.title}</h4>
                <p className="text-xs text-[#77736D]">{zoomedImage.institution} · {zoomedImage.license}</p>
              </div>
              <button
                onClick={() => setZoomedImage(null)}
                className="p-1.5 rounded-full hover:bg-[#F7F4ED] text-[#77736D] hover:text-[#242321]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-[#F4EDE1] flex items-center justify-center max-h-[70vh]">
              <img
                src={zoomedImage.url}
                alt={zoomedImage.title}
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
