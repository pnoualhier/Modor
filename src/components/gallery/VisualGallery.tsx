import React, { useState } from 'react';
import { HISTORICAL_PERIODS } from '../../data/periods';
import { HISTORICAL_GARMENTS } from '../../data/garments';
import { HISTORICAL_DESIGNERS } from '../../data/designers';
import { ImageCredit } from '../../types';
import { ExternalLink, X, ZoomIn, Image as ImageIcon, Filter, BookOpen, Camera } from 'lucide-react';

interface VisualGalleryProps {
  onSelectPeriod: (periodId: string) => void;
  onSelectGarment: (garmentId: string) => void;
  onSelectDesigner?: (designerId: string) => void;
}

interface GalleryItem {
  image: ImageCredit;
  originType: 'period' | 'garment' | 'designer';
  originId: string;
  originTitle: string;
  century?: number;
}

export const VisualGallery: React.FC<VisualGalleryProps> = ({
  onSelectPeriod,
  onSelectGarment,
  onSelectDesigner,
}) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Aggregate all images with origin metadata
  const galleryItems: GalleryItem[] = [];

  HISTORICAL_PERIODS.forEach((p) => {
    p.images.forEach((img) => {
      galleryItems.push({
        image: img,
        originType: 'period',
        originId: p.id,
        originTitle: p.title,
        century: p.century,
      });
    });
  });

  HISTORICAL_GARMENTS.forEach((g) => {
    g.images.forEach((img) => {
      galleryItems.push({
        image: img,
        originType: 'garment',
        originId: g.id,
        originTitle: g.name,
        century: g.century,
      });
    });
  });

  HISTORICAL_DESIGNERS.forEach((d) => {
    d.images.forEach((img) => {
      galleryItems.push({
        image: img,
        originType: 'designer',
        originId: d.id,
        originTitle: d.name,
      });
    });
  });

  const filteredItems = galleryItems.filter((item) => {
    if (selectedType === 'portraits') {
      return item.originType === 'designer';
    }
    if (selectedType !== 'all' && item.image.type !== selectedType) {
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
              Iconographie Patrimoniale
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242321] mt-1">
              Galerie Visuelle des Collections
            </h2>
            <p className="text-sm text-[#77736D] max-w-2xl mt-2 leading-relaxed">
              Consultez l'ensemble des gravures de mode, estampes, tableaux de cour et schémas techniques conservés dans les musées nationaux (Palais Galliera, BnF, Met Museum, MAD Paris).
            </p>
          </div>

          <div className="text-xs text-[#77736D] bg-white px-3 py-1.5 rounded-lg border border-[#D9CBB7]/60 whitespace-nowrap self-start md:self-auto">
            <span className="font-semibold text-[#242321]">{filteredItems.length}</span> œuvres indexées
          </div>
        </div>

        {/* Filter Type Pills */}
        <div className="mt-5 flex items-center gap-2 flex-wrap">
          <span className="text-xs text-[#77736D]">Nature de l'image :</span>
          {[
            { value: 'all', label: 'Toutes les illustrations' },
            { value: 'portraits', label: 'Portraits de créateurs (23)' },
            { value: 'patrimoine', label: 'Œuvres & Estampes authentiques' },
            { value: 'schema', label: 'Schémas pédagogiques originaux' },
          ].map((t) => (
            <button
              key={t.value}
              onClick={() => setSelectedType(t.value)}
              className={`px-3 py-1 text-xs rounded-md transition-colors ${
                selectedType === t.value
                  ? 'bg-[#242321] text-white font-medium'
                  : 'bg-white text-[#77736D] hover:text-[#242321] border border-[#D9CBB7]/40'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => {
          const { image } = item;
          return (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="bg-white rounded-xl border border-[#D9CBB7]/60 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              {/* Image Preview Box */}
              <div className="relative aspect-4/3 w-full bg-[#F4EDE1] overflow-hidden border-b border-[#D9CBB7]/40">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                <div className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-xs text-[#F7F4ED] text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1 border border-white/20">
                  <Camera className="w-3 h-3 text-amber-300" />
                  <span className="truncate max-w-[140px]">{image.license}</span>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2 text-white">
                  <p className="text-[10px] truncate text-white/90 font-serif italic">
                    {image.institution}
                  </p>
                </div>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium gap-1.5 backdrop-blur-[1px]">
                  <ZoomIn className="w-4 h-4" />
                  <span>Agrandir & Crédits</span>
                </div>
              </div>

              {/* Caption and Provenance */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold text-[#9A3412] uppercase tracking-wider">
                    {item.originType === 'period'
                      ? 'Période'
                      : item.originType === 'designer'
                      ? 'Créateur'
                      : 'Vêtement'}{' '}
                    : {item.originTitle}
                  </div>
                  <div className="text-xs font-medium text-[#242321] mt-1 line-clamp-2">
                    {image.caption}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#D9CBB7]/30 flex items-center justify-between text-[11px] text-[#77736D]">
                  <span className="truncate max-w-[160px]">{image.institution}</span>
                  <span className="text-emerald-700 font-semibold">{image.license}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Zoom & Full Metadata */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-[#D9CBB7] p-6 md:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#D9CBB7]/40 pb-4">
              <div>
                <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider">
                  Fiche Iconographique & Crédits Patrimoniaux
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#242321] mt-1">
                  {selectedImage.image.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 text-[#77736D] hover:text-[#242321] rounded-full hover:bg-[#F7F4ED]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Artwork Canvas */}
            <div className="w-full bg-[#F4EDE1] rounded-xl border border-[#D9CBB7] overflow-hidden p-4 flex flex-col items-center justify-center text-center space-y-3">
              <img
                src={selectedImage.image.imageUrl}
                alt={selectedImage.image.title}
                className="max-h-[50vh] w-auto object-contain rounded-lg shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="text-xs text-[#77736D] max-w-md pt-2 italic">
                {selectedImage.image.caption}
              </div>
            </div>

            {/* Accession Details */}
            <div className="space-y-3 bg-[#F7F4ED]/50 p-4 rounded-xl border border-[#D9CBB7]/40 text-xs text-[#242321]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="font-bold text-[#77736D] uppercase text-[10px] block">Auteur / Atelier :</span>
                  <span>{selectedImage.image.author || 'Atelier documentaire d\'époque'}</span>
                </div>
                <div>
                  <span className="font-bold text-[#77736D] uppercase text-[10px] block">Date de création :</span>
                  <span>{selectedImage.image.year || 'Non daté précisément'}</span>
                </div>
                <div>
                  <span className="font-bold text-[#77736D] uppercase text-[10px] block">Institution conservatrice :</span>
                  <span>{selectedImage.image.institution}</span>
                </div>
                <div>
                  <span className="font-bold text-[#77736D] uppercase text-[10px] block">Statut juridique :</span>
                  <span className="font-semibold text-[#242321]">{selectedImage.image.license}</span>
                </div>
              </div>
            </div>

            {/* Linked Entity Action */}
            <div className="pt-4 border-t border-[#D9CBB7]/40 flex items-center justify-between">
              <button
                onClick={() => {
                  const item = selectedImage;
                  setSelectedImage(null);
                  if (item.originType === 'period') {
                    onSelectPeriod(item.originId);
                  } else if (item.originType === 'designer' && onSelectDesigner) {
                    onSelectDesigner(item.originId);
                  } else {
                    onSelectGarment(item.originId);
                  }
                }}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#9A3412] hover:underline"
              >
                <BookOpen className="w-4 h-4" />
                <span>Consulter la fiche : {selectedImage.originTitle}</span>
              </button>

              <button
                onClick={() => setSelectedImage(null)}
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
