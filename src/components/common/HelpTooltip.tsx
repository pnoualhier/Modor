import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, X } from 'lucide-react';

interface HelpTooltipProps {
  title?: string;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  badgeText?: string;
}

export const HelpTooltip: React.FC<HelpTooltipProps> = ({
  title,
  content,
  position = 'top',
  className = '',
  badgeText,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }[position];

  return (
    <div ref={containerRef} className={`relative inline-flex items-center align-middle ${className}`}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => setIsOpen(true)}
        className="p-1 text-[#77736D] hover:text-[#9A3412] rounded-full hover:bg-[#D9CBB7]/30 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#242321]"
        aria-label={title ? `Aide contextuelle : ${title}` : "Aide contextuelle pour utilisateur"}
        aria-expanded={isOpen}
      >
        <HelpCircle className="w-3.5 h-3.5" />
      </button>

      {isOpen && (
        <div
          role="tooltip"
          onClick={(e) => e.stopPropagation()}
          className={`absolute z-50 w-64 md:w-72 bg-white text-[#242321] text-xs rounded-xl shadow-xl border border-[#D9CBB7] p-3 animate-in fade-in zoom-in-95 duration-150 ${positionClasses}`}
        >
          <div className="flex items-start justify-between gap-2 pb-1 border-b border-[#D9CBB7]/30 mb-1.5">
            <span className="font-serif font-bold text-xs text-[#9A3412] flex items-center gap-1">
              {badgeText && (
                <span className="text-[9px] font-sans uppercase tracking-wider bg-[#F7F4ED] border border-[#D9CBB7]/60 px-1.5 py-0.2 rounded text-[#77736D]">
                  {badgeText}
                </span>
              )}
              <span>{title || 'Guide Novice'}</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#77736D] hover:text-[#242321] p-0.5 rounded"
              aria-label="Fermer l'infobulle"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          <p className="text-[11px] leading-relaxed text-[#55524E]">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};
