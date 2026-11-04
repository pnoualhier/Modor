import React, { useState } from 'react';
import { HISTORICAL_GARMENTS } from '../../data/garments';
import { Garment, GarmentCategory } from '../../types';
import { Search, Heart, Layers, ExternalLink, X, Scissors, Info, Sparkles } from 'lucide-react';
import { StorageService } from '../../services/storage';

interface GarmentCatalogProps {
  onSelectPeriod: (periodId: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const CATEGORIES: { value: 'all' | GarmentCategory; label: string }[] = [
  { value: 'all', label: 'Toutes les catégories' },
  { value: 'robes', label: 'Robes' },
  { value: 'structures', label: 'Structures & Cages' },
  { value: 'corsets', label: 'Corsets' },
  { value: 'vestes', label: 'Vestes & Tailleurs' },
  { value: 'jupes', label: 'Jupes' },
  { value: 'pantalons', label: 'Pantalons' },
  { value: 'accessoires', label: 'Accessoires & Fraises' },
  { value: 'jupons', label: 'Jupons' },
];

export const GarmentCatalog: React.FC<GarmentCatalogProps> = ({
  onSelectPeriod,
  favorites,
  onToggleFavorite,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | GarmentCategory>('all');
  const [selectedCentury, setSelectedCentury] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGarment, setSelectedGarment] = useState<Garment | null>(null);

  const filteredGarments = HISTORICAL_GARMENTS.filter((garment) => {
    if (selectedCategory !== 'all' && garment.category !== selectedCategory) {
      return false;
    }
    if (selectedCentury !== 'all' && garment.century !== selectedCentury) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        garment.name.toLowerCase().includes(q) ||
        garment.definition.toLowerCase().includes(q) ||
        garment.materials.some((m) => m.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  // Handle Escape key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedGarment) {
        setSelectedGarment(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGarment]);

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="border-b border-[#D9CBB7]/40 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#77736D] uppercase font-sans">
              Encyclopédie des Pièces Historiques
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242321] mt-1">
              Catalogue des Vêtements & Structures
            </h2>
            <p className="text-sm text-[#77736D] max-w-2xl mt-2 leading-relaxed">
              Explorez l'inventaire typologique des vêtements féminins : robes d'apparat, armatures métalliques, corsets, crinolines et tailleurs émancipateurs.
            </p>
          </div>

          <div className="text-xs text-[#77736D] bg-white px-3 py-1.5 rounded-lg border border-[#D9CBB7]/60 whitespace-nowrap self-start md:self-auto">
            <span className="font-semibold text-[#242321]">{filteredGarments.length}</span> pièces répertoriées
          </div>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#77736D] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un vêtement, matière (soie, acier, baleine)..."
              className="w-full text-xs pl-9 pr-4 py-2 rounded-lg bg-white border border-[#D9CBB7] text-[#242321] placeholder-[#77736D]/70 focus:outline-none focus:ring-1 focus:ring-[#242321]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#77736D] hover:text-[#242321]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Century Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#77736D] whitespace-nowrap">Siècle :</span>
            <select
              value={selectedCentury}
              onChange={(e) => setSelectedCentury(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="text-xs bg-white border border-[#D9CBB7] rounded-lg px-2.5 py-1.5 text-[#242321] focus:outline-none focus:ring-1 focus:ring-[#242321]"
            >
              <option value="all">Tous les siècles</option>
              <option value="16">XVIe siècle</option>
              <option value="17">XVIIe siècle</option>
              <option value="18">XVIIIe siècle</option>
              <option value="19">XIXe siècle</option>
              <option value="20">XXe siècle</option>
              <option value="21">XXIe siècle</option>
            </select>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3 py-1.5 text-xs rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === cat.value
                  ? 'bg-[#242321] text-[#F7F4ED] font-medium shadow-sm'
                  : 'bg-white text-[#77736D] hover:text-[#242321] hover:bg-[#D9CBB7]/20 border border-[#D9CBB7]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Garments Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGarments.map((garment) => {
          const isFav = favorites.includes(garment.id);
          return (
            <div
              key={garment.id}
              onClick={() => setSelectedGarment(garment)}
              className="bg-white rounded-xl border border-[#D9CBB7]/60 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group hover:border-[#D9CBB7]"
            >
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#77736D]">
                  <span className="font-semibold text-[#9A3412] uppercase tracking-wider text-[10px]">
                    {garment.category}
                  </span>
                  <span className="font-mono text-[11px] text-[#242321]">{garment.eraDates}</span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-serif font-bold text-[#242321] group-hover:text-[#9A3412] transition-colors">
                    {garment.name}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(garment.id);
                    }}
                    className="text-[#77736D] hover:text-[#9A3412] p-1 -mr-1"
                    title={isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-[#9A3412] text-[#9A3412]' : ''}`} />
                  </button>
                </div>

                <p className="text-xs text-[#77736D] line-clamp-3 leading-relaxed">
                  {garment.definition}
                </p>

                {/* Materials Tags */}
                <div className="pt-2 flex flex-wrap gap-1">
                  {garment.materials.slice(0, 3).map((mat, i) => (
                    <span
                      key={i}
                      className="bg-[#F7F4ED] text-[#242321] text-[10.5px] px-2 py-0.5 rounded border border-[#D9CBB7]/40"
                    >
                      {mat}
                    </span>
                  ))}
                  {garment.materials.length > 3 && (
                    <span className="text-[10px] text-[#77736D] self-center">
                      +{garment.materials.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3 bg-[#F7F4ED]/50 border-t border-[#D9CBB7]/30 flex items-center justify-between text-xs text-[#242321]">
                <span className="text-[11px] font-medium text-[#77736D]">
                  {garment.century}e siècle
                </span>
                <span className="font-semibold text-[#242321] group-hover:text-[#9A3412] flex items-center gap-1 text-[11px]">
                  <span>Fiche détaillée</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredGarments.length === 0 && (
        <div className="py-16 text-center text-[#77736D] bg-white rounded-xl border border-[#D9CBB7]/40 p-8">
          <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-40" />
          <p className="text-sm">Aucun vêtement ne correspond à vos filtres actuels.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedCentury('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-semibold text-[#9A3412] hover:underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}

      {/* Detailed Modal for Selected Garment */}
      {selectedGarment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          onClick={() => setSelectedGarment(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Détails du vêtement : ${selectedGarment.name}`}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-[#D9CBB7] p-6 md:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#D9CBB7]/40 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#77736D]">
                  <span className="font-bold text-[#9A3412] uppercase tracking-wider">
                    {selectedGarment.category}
                  </span>
                  <span>·</span>
                  <span className="font-mono text-[#242321]">{selectedGarment.eraDates}</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-[#242321] mt-1">
                  {selectedGarment.name}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onToggleFavorite(selectedGarment.id)}
                  className={`p-2 rounded-full border transition-colors ${
                    favorites.includes(selectedGarment.id)
                      ? 'bg-[#9A3412] text-white border-[#9A3412]'
                      : 'bg-[#F7F4ED] text-[#77736D] border-[#D9CBB7] hover:text-[#242321]'
                  }`}
                  title="Ajouter aux favoris"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes(selectedGarment.id) ? 'fill-current' : ''
                    }`}
                  />
                </button>
                <button
                  onClick={() => setSelectedGarment(null)}
                  className="p-2 text-[#77736D] hover:text-[#242321] rounded-full hover:bg-[#F7F4ED]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Definition */}
            <div className="text-sm text-[#242321] leading-relaxed font-serif italic text-base border-l-2 border-[#D9B8B3] pl-4">
              {selectedGarment.definition}
            </div>

            {/* Construction & Materials */}
            <div className="space-y-3 bg-[#F7F4ED]/60 p-4 rounded-xl border border-[#D9CBB7]/40 text-xs">
              <div>
                <span className="font-bold text-[#242321] uppercase tracking-wide block mb-1">
                  Architecture & Construction :
                </span>
                <p className="text-[#77736D] leading-relaxed">{selectedGarment.constructionDetails}</p>
              </div>

              <div className="pt-2 border-t border-[#D9CBB7]/30">
                <span className="font-bold text-[#242321] uppercase tracking-wide block mb-1">
                  Rôle anatomique & Effet sur la silhouette :
                </span>
                <p className="text-[#77736D] leading-relaxed">{selectedGarment.anatomicalRole}</p>
                <p className="text-[#242321] font-medium mt-1">{selectedGarment.silhouetteEffect}</p>
              </div>

              <div className="pt-2 border-t border-[#D9CBB7]/30">
                <span className="font-bold text-[#242321] uppercase tracking-wide block mb-1">
                  Matériaux d'époque :
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {selectedGarment.materials.map((m, i) => (
                    <span
                      key={i}
                      className="bg-white text-[#242321] px-2 py-0.5 rounded border border-[#D9CBB7]/60 text-[11px]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Context & Evolution */}
            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-[#9A3412] uppercase tracking-wide block mb-1">
                  Contexte Social & Usages :
                </span>
                <p className="text-[#242321] leading-relaxed">{selectedGarment.socialContext}</p>
              </div>

              <div>
                <span className="font-bold text-[#77736D] uppercase tracking-wide block mb-1">
                  Évolution Historique :
                </span>
                <p className="text-[#77736D] leading-relaxed">{selectedGarment.evolution}</p>
              </div>
            </div>

            {/* Associated Period Links */}
            <div className="pt-4 border-t border-[#D9CBB7]/40 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-[#77736D]">
                <span>Périodes associées : </span>
                {selectedGarment.periodIds.map((pId) => (
                  <button
                    key={pId}
                    onClick={() => {
                      setSelectedGarment(null);
                      onSelectPeriod(pId);
                    }}
                    className="underline text-[#9A3412] hover:text-[#242321] font-semibold ml-1"
                  >
                    Voir l'époque
                  </button>
                ))}
              </div>

              <button
                onClick={() => setSelectedGarment(null)}
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
