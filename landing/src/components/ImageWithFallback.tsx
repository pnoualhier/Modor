import React, { useState } from 'react';
import { Camera, ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  className?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  fallbackSubtitle,
  className = '',
  containerClassName = '',
  loading = 'lazy',
  ...props
}) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full bg-[#EFE9DF] border border-[#D9CBB7] flex flex-col items-center justify-center p-4 text-center select-none ${containerClassName}`}
        role="img"
        aria-label={alt || fallbackTitle || "Illustration d'archive non disponible"}
      >
        <div className="w-9 h-9 rounded-full bg-[#E5DFD5] flex items-center justify-center text-[#9A3412] mb-1.5 shadow-2xs">
          <ImageOff className="w-4 h-4 text-[#9A3412]/80" aria-hidden="true" />
        </div>
        <span className="font-serif font-semibold text-xs text-[#242321] line-clamp-1 max-w-[90%]">
          {fallbackTitle || alt || "Document d'archive"}
        </span>
        {fallbackSubtitle && (
          <span className="text-[10px] text-[#77736D] mt-0.5 line-clamp-1 font-mono">
            {fallbackSubtitle}
          </span>
        )}
        <span className="text-[9px] uppercase tracking-wider text-[#9A3412] font-semibold mt-1 px-2 py-0.5 bg-white/80 rounded-full border border-[#D9CBB7]/40">
          Archive muséale
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden w-full h-full ${containerClassName}`}>
      {isLoading && (
        <div
          className="absolute inset-0 bg-[#EFE9DF] animate-pulse flex items-center justify-center z-10"
          aria-hidden="true"
        >
          <Camera className="w-5 h-5 text-[#D9CBB7] animate-pulse" />
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
        {...props}
      />
    </div>
  );
};
