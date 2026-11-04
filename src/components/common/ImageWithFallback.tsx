import React, { useState } from 'react';
import { Camera, ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  className?: string;
  containerClassName?: string;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  fallbackSubtitle,
  className = '',
  containerClassName = '',
  aspectRatioClass = '',
  loading = 'lazy',
  ...props
}) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full bg-[#F4EDE1] border border-[#D9CBB7]/60 flex flex-col items-center justify-center p-4 text-center select-none ${aspectRatioClass} ${containerClassName}`}
        role="img"
        aria-label={alt || fallbackTitle || "Illustration d'archive non disponible"}
      >
        <div className="w-10 h-10 rounded-full bg-[#E8DEC8] flex items-center justify-center text-[#9A3412] mb-2 shadow-xs">
          <ImageOff className="w-5 h-5 text-[#9A3412]/80" aria-hidden="true" />
        </div>
        <span className="font-serif font-bold text-xs text-[#242321] line-clamp-1 max-w-[90%]">
          {fallbackTitle || alt || "Document d'archive"}
        </span>
        {fallbackSubtitle && (
          <span className="text-[10px] text-[#77736D] mt-0.5 line-clamp-1 font-mono">
            {fallbackSubtitle}
          </span>
        )}
        <span className="text-[9px] uppercase tracking-wider text-[#9A3412] font-semibold mt-1.5 px-2 py-0.5 bg-white/70 rounded-full border border-[#D9CBB7]/40">
          Source d'archive
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${containerClassName}`}>
      {isLoading && (
        <div
          className="absolute inset-0 bg-[#F4EDE1] animate-pulse flex items-center justify-center"
          aria-hidden="true"
        >
          <Camera className="w-6 h-6 text-[#D9CBB7] animate-bounce" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
};
