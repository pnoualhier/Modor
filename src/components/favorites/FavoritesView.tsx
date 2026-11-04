import React, { useRef, useState } from 'react';
import { StorageService } from '../../services/storage';
import { HISTORICAL_PERIODS } from '../../data/periods';
import { HISTORICAL_GARMENTS } from '../../data/garments';
import { HISTORICAL_DESIGNERS } from '../../data/designers';
import { Heart, Download, Upload, Trash2, Clock, BookOpen, AlertCircle, CheckCircle2, History } from 'lucide-react';

interface FavoritesViewProps {
  onSelectPeriod: (id: string) => void;
  onSelectGarment: (id: string) => void;
  onSelectDesigner: (id: string) => void;
  onRefresh: () => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  onSelectPeriod,
  onSelectGarment,
  onSelectDesigner,
  onRefresh,
}) => {
  const [data, setData] = useState(() => StorageService.load());
  const [importStatus, setImportStatus] = useState<{ message: string; isError: boolean } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const reloadData = () => {
    const fresh = StorageService.load();
    setData(fresh);
    onRefresh();
  };

  const favoritePeriods = HISTORICAL_PERIODS.filter((p) => data.periodIds.includes(p.id));
  const favoriteGarments = HISTORICAL_GARMENTS.filter((g) => data.garmentIds.includes(g.id));
  const favoriteDesigners = HISTORICAL_DESIGNERS.filter((d) => data.designerIds.includes(d.id));

  // Export JSON
  const handleExport = () => {
    const jsonStr = StorageService.exportDataAsJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `modor_sauvegarde_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Import JSON
  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = StorageService.importDataFromJSON(content);
      if (res.success) {
        setImportStatus({ message: 'Données importées avec succès !', isError: false });
        reloadData();
      } else {
        setImportStatus({ message: res.error || 'Erreur lors de l\'import', isError: true });
      }
      setTimeout(() => setImportStatus(null), 4000);
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleReset = () => {
    if (window.confirm('Voulez-vous réinitialiser tous vos favoris et notes locales sur cet appareil ?')) {
      StorageService.resetAll();
      reloadData();
    }
  };

  const totalFavorites = favoritePeriods.length + favoriteGarments.length + favoriteDesigners.length;

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      {/* Editorial Header */}
      <div className="border-b border-[#D9CBB7]/40 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#77736D] uppercase font-sans">
              Espace Personnel & Confidentialité
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242321] mt-1">
              Vos Favoris & Sauvegardes
            </h2>
            <p className="text-sm text-[#77736D] max-w-2xl mt-2 leading-relaxed">
              Toutes vos données (périodes marquées, notes, progression de quiz) restent stockées exclusivement sur votre appareil, sans aucun compte ni serveur distant.
            </p>
          </div>

          {/* Backup Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-[#242321] text-white hover:bg-[#3A3835] transition-colors"
              title="Exporter un fichier JSON de sauvegarde"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exporter JSON</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-white text-[#242321] border border-[#D9CBB7] hover:bg-[#F7F4ED] transition-colors"
              title="Importer un fichier JSON de sauvegarde"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Importer JSON</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              onChange={handleImportFile}
              className="hidden"
            />
          </div>
        </div>

        {/* Import Feedback Toast */}
        {importStatus && (
          <div
            className={`mt-4 p-3 rounded-lg text-xs flex items-center gap-2 ${
              importStatus.isError
                ? 'bg-rose-50 text-rose-900 border border-rose-200'
                : 'bg-emerald-50 text-emerald-900 border border-emerald-200'
            }`}
          >
            {importStatus.isError ? (
              <AlertCircle className="w-4 h-4 text-rose-600" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            )}
            <span>{importStatus.message}</span>
          </div>
        )}
      </div>

      {/* Favorites Sections */}
      {totalFavorites > 0 ? (
        <div className="space-y-8">
          {/* 1. Favorite Periods */}
          {favoritePeriods.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9A3412] flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 fill-[#9A3412]" />
                <span>Périodes historiques enregistrées ({favoritePeriods.length})</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {favoritePeriods.map((period) => (
                  <div
                    key={period.id}
                    onClick={() => onSelectPeriod(period.id)}
                    className="p-4 bg-white rounded-xl border border-[#D9CBB7]/60 hover:border-[#242321] transition-all cursor-pointer flex justify-between items-center group shadow-xs"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#242321] group-hover:text-[#9A3412]">
                        {period.title}
                      </div>
                      <div className="text-[11px] text-[#77736D] mt-0.5">
                        {period.century}e siècle · {period.startYear}–{period.endYear}
                      </div>
                    </div>
                    <BookOpen className="w-4 h-4 text-[#77736D] group-hover:text-[#242321]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Favorite Garments */}
          {favoriteGarments.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9A3412] flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 fill-[#9A3412]" />
                <span>Vêtements & Structures ({favoriteGarments.length})</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {favoriteGarments.map((garment) => (
                  <div
                    key={garment.id}
                    onClick={() => onSelectGarment(garment.id)}
                    className="p-3 bg-white rounded-xl border border-[#D9CBB7]/60 hover:border-[#242321] transition-all cursor-pointer flex justify-between items-center group shadow-xs gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {garment.images && garment.images[0] && (
                        <img
                          src={garment.images[0].imageUrl}
                          alt={garment.name}
                          className="w-10 h-10 rounded-lg object-cover border border-[#D9CBB7] shrink-0"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                      )}
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-[#242321] group-hover:text-[#9A3412] truncate">
                          {garment.name}
                        </div>
                        <div className="text-[11px] text-[#77736D] mt-0.5 capitalize truncate">
                          {garment.category} · {garment.eraDates}
                        </div>
                      </div>
                    </div>
                    <BookOpen className="w-4 h-4 text-[#77736D] group-hover:text-[#242321] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Favorite Designers */}
          {favoriteDesigners.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9A3412] flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 fill-[#9A3412]" />
                <span>Créateurs & Maisons ({favoriteDesigners.length})</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {favoriteDesigners.map((designer) => (
                  <div
                    key={designer.id}
                    onClick={() => onSelectDesigner(designer.id)}
                    className="p-3 bg-white rounded-xl border border-[#D9CBB7]/60 hover:border-[#242321] transition-all cursor-pointer flex justify-between items-center group shadow-xs gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {designer.images && designer.images[0] && (
                        <img
                          src={designer.images[0].imageUrl}
                          alt={designer.name}
                          className="w-10 h-10 rounded-full object-cover border border-[#D9CBB7] shrink-0"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-[#242321] group-hover:text-[#9A3412] truncate">
                          {designer.name}
                        </div>
                        <div className="text-[11px] text-[#77736D] mt-0.5 truncate">
                          {designer.fashionHouse} ({designer.birthYear}–{designer.deathYear || 'actuel'})
                        </div>
                      </div>
                    </div>
                    <BookOpen className="w-4 h-4 text-[#77736D] group-hover:text-[#242321] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="py-16 text-center text-[#77736D] bg-white rounded-xl border border-[#D9CBB7]/60 p-8 space-y-2">
          <Heart className="w-8 h-8 mx-auto text-[#D9B8B3]" />
          <h3 className="text-base font-serif font-bold text-[#242321]">
            Aucun favori enregistré pour le moment
          </h3>
          <p className="text-xs text-[#77736D] max-w-sm mx-auto">
            Cliquez sur le cœur présent sur les fiches des époques, des vêtements ou des créateurs pour vous constituer votre bibliothèque d'étude.
          </p>
        </div>
      )}

      {/* User Notes List */}
      {Object.keys(data.notes).length > 0 && (
        <div className="bg-white rounded-xl border border-[#D9CBB7]/60 p-6 space-y-4 shadow-sm">
          <h3 className="text-sm font-serif font-bold text-[#242321]">
            Vos Notes de Recherche Personnelles
          </h3>
          <div className="space-y-3">
            {Object.entries(data.notes).map(([id, note]) => {
              const period = HISTORICAL_PERIODS.find((p) => p.id === id);
              return (
                <div key={id} className="p-3 bg-[#F7F4ED] rounded-lg border border-[#D9CBB7]/40 text-xs">
                  <div className="font-bold text-[#9A3412] mb-1">
                    {period ? period.title : id} :
                  </div>
                  <p className="text-[#242321] leading-relaxed whitespace-pre-wrap">{note}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Recent Reading History */}
      {data.viewHistory.length > 0 && (
        <div className="bg-white rounded-xl border border-[#D9CBB7]/60 p-6 space-y-3 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#77736D] flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>Historique récent de consultation</span>
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {data.viewHistory.slice(0, 10).map((item, idx) => {
              let label = item.id;
              if (item.type === 'period') {
                const p = HISTORICAL_PERIODS.find((x) => x.id === item.id);
                if (p) label = `${p.title} (${p.century}e s.)`;
              } else if (item.type === 'garment') {
                const g = HISTORICAL_GARMENTS.find((x) => x.id === item.id);
                if (g) label = g.name;
              } else if (item.type === 'designer') {
                const d = HISTORICAL_DESIGNERS.find((x) => x.id === item.id);
                if (d) label = d.name;
              }

              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (item.type === 'period') onSelectPeriod(item.id);
                    else if (item.type === 'garment') onSelectGarment(item.id);
                    else if (item.type === 'designer') onSelectDesigner(item.id);
                  }}
                  className="bg-[#F7F4ED] hover:bg-[#D9CBB7]/30 text-[#242321] px-2.5 py-1 rounded border border-[#D9CBB7]/40 transition-colors"
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Reset Local Storage Button */}
      <div className="pt-6 border-t border-[#D9CBB7]/40 flex justify-end">
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs text-[#77736D] hover:text-rose-600 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Effacer toutes les données locales</span>
        </button>
      </div>
    </div>
  );
};
