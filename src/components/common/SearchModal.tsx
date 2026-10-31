import React, { useEffect, useState, useRef } from 'react';
import { Search, X, BookOpen, Layers, User, ArrowRight } from 'lucide-react';
import { searchEncyclopedia, SearchResultItem } from '../../services/search';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPeriod: (id: string) => void;
  onSelectGarment: (id: string) => void;
  onSelectDesigner: (id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPeriod,
  onSelectGarment,
  onSelectDesigner,
}) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length >= 2) {
      setResults(searchEncyclopedia(query));
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-16 md:pt-24 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#D9CBB7] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#D9CBB7]/40 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#77736D] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une époque, un vêtement, un créateur, une matière..."
            className="w-full text-sm text-[#242321] placeholder-[#77736D]/70 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#77736D] hover:text-[#242321] p-1"
            >
              ✕
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs text-[#77736D] hover:text-[#242321] px-2 py-1 bg-[#F7F4ED] rounded border border-[#D9CBB7]/60"
          >
            Échap
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-[#D9CBB7]/20">
          {query.trim().length < 2 && (
            <div className="py-12 text-center text-xs text-[#77736D] space-y-2">
              <p>Tapez au moins 2 lettres pour lancer la recherche.</p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2 text-[11px]">
                {['Crinoline', 'Chanel', 'Paniers', 'New Look', 'Poiret', 'Fraise', 'Mousseline'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="bg-[#F7F4ED] text-[#242321] px-2.5 py-1 rounded border border-[#D9CBB7]/40 hover:border-[#242321]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim().length >= 2 && results.length === 0 && (
            <div className="py-12 text-center text-xs text-[#77736D]">
              Aucun résultat pour « {query} ». Essayez avec un autre terme ou matière.
            </div>
          )}

          {results.map((item) => (
            <button
              key={`${item.type}_${item.id}`}
              onClick={() => {
                onClose();
                if (item.type === 'period') onSelectPeriod(item.id);
                else if (item.type === 'garment') onSelectGarment(item.id);
                else if (item.type === 'designer') onSelectDesigner(item.id);
              }}
              className="w-full p-3 text-left hover:bg-[#F7F4ED] rounded-lg transition-colors flex items-center justify-between group"
            >
              <div className="space-y-1 pr-4">
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-[#77736D]">
                  {item.type === 'period' && (
                    <span className="text-[#9A3412] flex items-center gap-1">
                      <BookOpen className="w-3 h-3" /> Période
                    </span>
                  )}
                  {item.type === 'garment' && (
                    <span className="text-[#1E3A8A] flex items-center gap-1">
                      <Layers className="w-3 h-3" /> Vêtement
                    </span>
                  )}
                  {item.type === 'designer' && (
                    <span className="text-emerald-800 flex items-center gap-1">
                      <User className="w-3 h-3" /> Créateur
                    </span>
                  )}
                  <span>·</span>
                  <span>{item.subtitle}</span>
                </div>

                <div className="text-sm font-bold text-[#242321] group-hover:text-[#9A3412] transition-colors">
                  {item.title}
                </div>

                <p className="text-xs text-[#77736D] line-clamp-1 leading-relaxed">
                  {item.snippet}
                </p>
              </div>

              <ArrowRight className="w-4 h-4 text-[#77736D] group-hover:text-[#242321] group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
