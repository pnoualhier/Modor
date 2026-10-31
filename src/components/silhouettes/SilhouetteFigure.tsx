import React from 'react';
import { SilhouetteDefinition } from '../../types';

interface SilhouetteFigureProps {
  silhouette: SilhouetteDefinition;
  showStructureLayer?: boolean;
  showMeasurementGuides?: boolean;
  highlightZone?: string | null;
  onHotspotClick?: (zone: string) => void;
  scale?: number;
  className?: string;
}

export const SilhouetteFigure: React.FC<SilhouetteFigureProps> = ({
  silhouette,
  showStructureLayer = true,
  showMeasurementGuides = false,
  highlightZone = null,
  onHotspotClick,
  className = '',
}) => {
  const { svgModel } = silhouette;
  const { shouldersWidth, waistWidth, waistY, hipsWidth, skirtBottomWidth, skirtBottomY, understructureShape } = svgModel;

  // ViewBox is 0 0 200 320.
  // Center is x = 100.
  const cx = 100;
  const headCy = 30;
  const neckY = 48;
  const shouldersY = 62;
  const bustY = 78;
  const pelvisY = 120;
  const kneeY = 180;
  const feetY = 285;

  const halfShoulders = (shouldersWidth / 100) * 45;
  const halfWaist = (waistWidth / 100) * 28;
  const actualWaistY = 65 + (waistY / 100) * 60; // Map waistY (0-100) to actual coordinate 65..125
  const halfHips = (hipsWidth / 100) * 55;
  const halfSkirtBottom = (skirtBottomWidth / 100) * 75;
  const actualSkirtBottomY = 160 + (skirtBottomY / 100) * 125; // Map to 160..285

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 220 320"
        className="w-full h-auto max-h-[460px] drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="neutralBackdrop" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F7F4ED" stopOpacity="0.3" />
          </radialGradient>
          <linearGradient id="fabricShading" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#242321" stopOpacity="0.92" />
            <stop offset="50%" stopColor="#3A3835" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#242321" stopOpacity="0.92" />
          </linearGradient>
          <linearGradient id="structureCage" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D9B8B3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#A6AA99" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Backdrop vignette */}
        <rect x="5" y="5" width="210" height="310" rx="12" fill="url(#neutralBackdrop)" stroke="#E5DEC9" strokeWidth="0.75" />

        {/* Subtle grid reference lines (museum catalog style) */}
        <line x1="20" y1={neckY} x2="200" y2={neckY} stroke="#EBE4D5" strokeWidth="0.5" strokeDasharray="2,2" />
        <line x1="20" y1={actualWaistY} x2="200" y2={actualWaistY} stroke="#EBE4D5" strokeWidth="0.5" strokeDasharray="2,2" />
        <line x1="20" y1={actualSkirtBottomY} x2="200" y2={actualSkirtBottomY} stroke="#EBE4D5" strokeWidth="0.5" strokeDasharray="2,2" />
        <line x1={cx} y1="15" x2={cx} y2="305" stroke="#E5DEC9" strokeWidth="0.5" strokeDasharray="3,3" />

        {/* 1. LAYER: ANATOMICAL BASE BODY (Subtle neutral silhouette) */}
        <g id="anatomical-base" opacity="0.35">
          {/* Head & Neck */}
          <ellipse cx={cx} cy={headCy} rx="10" ry="14" fill="#77736D" />
          <path d={`M ${cx - 4} ${headCy + 13} L ${cx - 5} ${neckY} L ${cx + 5} ${neckY} L ${cx + 4} ${headCy + 13} Z`} fill="#77736D" />
          {/* Bare arms & legs guide */}
          <path d={`M ${cx - 18} ${feetY - 90} L ${cx - 8} ${feetY} L ${cx - 2} ${feetY} L ${cx - 6} ${feetY - 90} Z`} fill="#77736D" opacity="0.4" />
          <path d={`M ${cx + 6} ${feetY - 90} L ${cx + 2} ${feetY} L ${cx + 8} ${feetY} L ${cx + 18} ${feetY - 90} Z`} fill="#77736D" opacity="0.4" />
        </g>

        {/* 2. LAYER: INTERNAL UNDERSTRUCTURE (Cages, hoops, corsets) */}
        {showStructureLayer && (
          <g id="understructure-layer" stroke="url(#structureCage)" fill="none" strokeWidth="1.25">
            {understructureShape === 'conic_vertugadin' && (
              <g id="struct-vertugadin">
                <path d={`M ${cx - halfWaist} ${actualWaistY} L ${cx - halfSkirtBottom + 4} ${actualSkirtBottomY} L ${cx + halfSkirtBottom - 4} ${actualSkirtBottomY} L ${cx + halfWaist} ${actualWaistY} Z`} strokeDasharray="3,2" strokeWidth="1" />
                <ellipse cx={cx} cy={actualWaistY + 25} rx={halfWaist + 14} ry="5" strokeDasharray="2,2" />
                <ellipse cx={cx} cy={actualWaistY + 55} rx={halfWaist + 28} ry="7" strokeDasharray="2,2" />
                <ellipse cx={cx} cy={actualWaistY + 85} rx={halfSkirtBottom - 10} ry="9" strokeDasharray="2,2" />
                {/* French drum vertugadin shelf */}
                <ellipse cx={cx} cy={actualWaistY + 6} rx={halfHips - 4} ry="6" stroke="#D9B8B3" strokeWidth="1.5" />
              </g>
            )}

            {understructureShape === 'baroque_mantua' && (
              <g id="struct-baroque">
                {/* Heavy stays / Grand corps baleiné */}
                <path d={`M ${cx - halfShoulders + 8} ${shouldersY} L ${cx - halfWaist} ${actualWaistY} L ${cx} ${actualWaistY + 12} L ${cx + halfWaist} ${actualWaistY} L ${cx + halfShoulders - 8} ${shouldersY} Z`} strokeDasharray="2,2" />
                <line x1={cx} y1={shouldersY} x2={cx} y2={actualWaistY + 10} stroke="#D9B8B3" strokeWidth="2" />
                {/* Stiffened petticoats */}
                <ellipse cx={cx} cy={actualWaistY + 35} rx="36" ry="6" strokeDasharray="2,2" />
                <ellipse cx={cx} cy={actualWaistY + 75} rx="50" ry="8" strokeDasharray="2,2" />
              </g>
            )}

            {understructureShape === 'rococo_panier' && (
              <g id="struct-panier">
                {/* Wide side hoops */}
                <path d={`M ${cx - halfWaist} ${actualWaistY} C ${cx - halfHips} ${actualWaistY + 5}, ${cx - halfHips + 4} ${actualWaistY + 45}, ${cx - halfSkirtBottom + 8} ${actualSkirtBottomY}`} strokeWidth="1.5" />
                <path d={`M ${cx + halfWaist} ${actualWaistY} C ${cx + halfHips} ${actualWaistY + 5}, ${cx + halfHips - 4} ${actualWaistY + 45}, ${cx + halfSkirtBottom - 8} ${actualSkirtBottomY}`} strokeWidth="1.5" />
                {/* Lateral ribs */}
                <line x1={cx - halfHips} y1={actualWaistY + 15} x2={cx - halfWaist} y2={actualWaistY + 15} strokeWidth="1.5" />
                <line x1={cx + halfWaist} y1={actualWaistY + 15} x2={cx + halfHips} y2={actualWaistY + 15} strokeWidth="1.5" />
                <ellipse cx={cx} cy={actualWaistY + 30} rx={halfHips - 6} ry="6" strokeDasharray="3,2" />
                <ellipse cx={cx} cy={actualWaistY + 65} rx={halfHips + 8} ry="7" strokeDasharray="3,2" />
                {/* Stiff corset cone */}
                <path d={`M ${cx - 18} ${shouldersY + 6} L ${cx - halfWaist} ${actualWaistY} L ${cx} ${actualWaistY + 14} L ${cx + halfWaist} ${actualWaistY} L ${cx + 18} ${shouldersY + 6} Z`} stroke="#A6AA99" strokeWidth="1" strokeDasharray="2,2" />
              </g>
            )}

            {understructureShape === 'neoclassic_column' && (
              <g id="struct-neoclassic">
                {/* High underbust support band */}
                <ellipse cx={cx} cy={actualWaistY} rx={halfWaist + 2} ry="4" stroke="#D9B8B3" strokeWidth="1.5" />
                <line x1={cx - halfWaist} y1={actualWaistY} x2={cx - 15} y2={actualSkirtBottomY} strokeDasharray="2,2" />
                <line x1={cx + halfWaist} y1={actualWaistY} x2={cx + 15} y2={actualSkirtBottomY} strokeDasharray="2,2" />
              </g>
            )}

            {understructureShape === 'crinoline_dome' && (
              <g id="struct-crinoline">
                {/* Steel cage dome rings */}
                <ellipse cx={cx} cy={actualWaistY + 12} rx="26" ry="5" />
                <ellipse cx={cx} cy={actualWaistY + 32} rx="44" ry="7" />
                <ellipse cx={cx} cy={actualWaistY + 56} rx="60" ry="9" />
                <ellipse cx={cx} cy={actualWaistY + 84} rx="76" ry="11" />
                <ellipse cx={cx} cy={actualSkirtBottomY - 4} rx={halfSkirtBottom - 4} ry="13" strokeWidth="1.75" />
                {/* Vertical suspension tapes */}
                <line x1={cx - halfWaist} y1={actualWaistY} x2={cx - halfSkirtBottom + 6} y2={actualSkirtBottomY} strokeDasharray="3,2" />
                <line x1={cx - halfWaist + 12} y1={actualWaistY} x2={cx - 25} y2={actualSkirtBottomY} strokeDasharray="3,2" />
                <line x1={cx + halfWaist - 12} y1={actualWaistY} x2={cx + 25} y2={actualSkirtBottomY} strokeDasharray="3,2" />
                <line x1={cx + halfWaist} y1={actualWaistY} x2={cx + halfSkirtBottom - 6} y2={actualSkirtBottomY} strokeDasharray="3,2" />
              </g>
            )}

            {understructureShape === 'tournure_bustle' && (
              <g id="struct-tournure">
                {/* Front is strictly flat */}
                <line x1={cx - 16} y1={actualWaistY} x2={cx - 14} y2={actualSkirtBottomY} stroke="#A6AA99" strokeWidth="1.5" />
                {/* Back projection shelf hoops */}
                <path d={`M ${cx + 10} ${actualWaistY + 6} C ${cx + halfHips + 8} ${actualWaistY + 8}, ${cx + halfHips + 4} ${actualWaistY + 45}, ${cx + halfSkirtBottom - 6} ${actualSkirtBottomY}`} strokeWidth="1.75" />
                <ellipse cx={cx + 18} cy={actualWaistY + 18} rx="22" ry="5" strokeDasharray="2,2" />
                <ellipse cx={cx + 20} cy={actualWaistY + 38} rx="28" ry="6" strokeDasharray="2,2" />
                <ellipse cx={cx + 16} cy={actualWaistY + 65} rx="34" ry="8" strokeDasharray="2,2" />
              </g>
            )}

            {understructureShape === 'hour_glass_s' && (
              <g id="struct-s-corset">
                {/* S-curve corset lines and arm cushions */}
                <path d={`M ${cx - halfShoulders + 4} ${shouldersY - 4} C ${cx - halfShoulders - 10} ${shouldersY + 10}, ${cx - halfWaist} ${shouldersY + 20}, ${cx - halfWaist} ${actualWaistY}`} strokeDasharray="2,2" />
                <path d={`M ${cx + halfShoulders - 4} ${shouldersY - 4} C ${cx + halfShoulders + 10} ${shouldersY + 10}, ${cx + halfWaist} ${shouldersY + 20}, ${cx + halfWaist} ${actualWaistY}`} strokeDasharray="2,2" />
                <ellipse cx={cx} cy={actualWaistY} rx={halfWaist + 2} ry="4" stroke="#D9B8B3" strokeWidth="1.5" />
                <ellipse cx={cx} cy={actualWaistY + 40} rx={halfHips - 4} ry="6" strokeDasharray="3,2" />
              </g>
            )}

            {understructureShape === 'new_look_corolle' && (
              <g id="struct-new-look">
                {/* Waspie cincher (guêpière) */}
                <rect x={cx - halfWaist - 2} y={actualWaistY - 8} width={halfWaist * 2 + 4} height="20" rx="3" stroke="#D9B8B3" strokeWidth="1.5" />
                {/* Crinoline-like nylon petticoat dome */}
                <ellipse cx={cx} cy={actualWaistY + 25} rx="34" ry="6" strokeDasharray="2,2" />
                <ellipse cx={cx} cy={actualWaistY + 48} rx="50" ry="8" strokeDasharray="2,2" />
                <ellipse cx={cx} cy={actualSkirtBottomY - 4} rx={halfSkirtBottom - 6} ry="10" strokeWidth="1.5" />
              </g>
            )}

            {understructureShape === 'power_shoulder' && (
              <g id="struct-power-shoulder">
                {/* Giant foam shoulder pads */}
                <path d={`M ${cx - halfShoulders - 4} ${shouldersY - 8} L ${cx - halfShoulders + 12} ${shouldersY - 2} L ${cx - halfShoulders + 4} ${shouldersY + 8} Z`} fill="#D9B8B3" opacity="0.6" />
                <path d={`M ${cx + halfShoulders + 4} ${shouldersY - 8} L ${cx + halfShoulders - 12} ${shouldersY - 2} L ${cx + halfShoulders - 4} ${shouldersY + 8} Z`} fill="#D9B8B3" opacity="0.6" />
                {/* Broad cincher belt */}
                <rect x={cx - halfWaist - 3} y={actualWaistY - 6} width={halfWaist * 2 + 6} height="16" fill="#A6AA99" opacity="0.4" stroke="#242321" strokeWidth="1" />
              </g>
            )}
          </g>
        )}

        {/* 3. LAYER: OUTER GARMENT SILHOUETTE (Hero Dress Outline) */}
        <g id="outer-dress" fill="url(#fabricShading)" stroke="#1C1B19" strokeWidth="1.5">
          {/* Main dress path */}
          <path
            d={`
              M ${cx - 5} ${neckY}
              C ${cx - halfShoulders * 0.5} ${neckY + 2}, ${cx - halfShoulders} ${shouldersY - 6}, ${cx - halfShoulders} ${shouldersY}
              C ${cx - halfShoulders + 4} ${shouldersY + 20}, ${cx - halfWaist - 6} ${actualWaistY - 10}, ${cx - halfWaist} ${actualWaistY}
              C ${cx - halfHips} ${actualWaistY + 15}, ${cx - halfSkirtBottom * 0.8} ${actualSkirtBottomY - 20}, ${cx - halfSkirtBottom} ${actualSkirtBottomY}
              C ${cx - halfSkirtBottom * 0.4} ${actualSkirtBottomY + 6}, ${cx + halfSkirtBottom * 0.4} ${actualSkirtBottomY + 6}, ${cx + halfSkirtBottom} ${actualSkirtBottomY}
              C ${cx + halfSkirtBottom * 0.8} ${actualSkirtBottomY - 20}, ${cx + halfHips} ${actualWaistY + 15}, ${cx + halfWaist} ${actualWaistY}
              C ${cx + halfWaist + 6} ${actualWaistY - 10}, ${cx + halfShoulders - 4} ${shouldersY + 20}, ${cx + halfShoulders} ${shouldersY}
              C ${cx + halfShoulders} ${shouldersY - 6}, ${cx + halfShoulders * 0.5} ${neckY + 2}, ${cx + 5} ${neckY}
              Z
            `}
          />

          {/* Sleeves / Arms detail */}
          <path
            d={`
              M ${cx - halfShoulders} ${shouldersY}
              C ${cx - halfShoulders - 10} ${shouldersY + 25}, ${cx - halfWaist - 16} ${actualWaistY - 5}, ${cx - halfWaist - 12} ${actualWaistY + 12}
              L ${cx - halfWaist - 6} ${actualWaistY + 10}
              C ${cx - halfWaist - 10} ${actualWaistY - 5}, ${cx - halfShoulders + 6} ${shouldersY + 20}, ${cx - halfShoulders + 8} ${shouldersY + 8}
              Z
            `}
            fill="#2D2B28"
          />
          <path
            d={`
              M ${cx + halfShoulders} ${shouldersY}
              C ${cx + halfShoulders + 10} ${shouldersY + 25}, ${cx + halfWaist + 16} ${actualWaistY - 5}, ${cx + halfWaist + 12} ${actualWaistY + 12}
              L ${cx + halfWaist + 6} ${actualWaistY + 10}
              C ${cx + halfWaist + 10} ${actualWaistY - 5}, ${cx + halfShoulders - 6} ${shouldersY + 20}, ${cx + halfShoulders - 8} ${shouldersY + 8}
              Z
            `}
            fill="#2D2B28"
          />

          {/* Bodice seam / Décolleté */}
          <path
            d={`M ${cx - halfShoulders * 0.4} ${neckY + 4} Q ${cx} ${neckY + 16} ${cx + halfShoulders * 0.4} ${neckY + 4}`}
            fill="none"
            stroke="#D9CBB7"
            strokeWidth="1.25"
          />

          {/* Waist seam line */}
          <path
            d={`M ${cx - halfWaist} ${actualWaistY} Q ${cx} ${actualWaistY + 5} ${cx + halfWaist} ${actualWaistY}`}
            fill="none"
            stroke="#D9B8B3"
            strokeWidth="1.25"
          />
        </g>

        {/* 4. LAYER: MEASUREMENT GUIDES (Caliper lines for comparative analysis) */}
        {showMeasurementGuides && (
          <g id="measurement-guides" stroke="#C25E5E" strokeWidth="1" opacity="0.9">
            {/* Shoulders width bar */}
            <g>
              <line x1={cx - halfShoulders} y1={shouldersY - 10} x2={cx + halfShoulders} y2={shouldersY - 10} />
              <line x1={cx - halfShoulders} y1={shouldersY - 14} x2={cx - halfShoulders} y2={shouldersY - 6} />
              <line x1={cx + halfShoulders} y1={shouldersY - 14} x2={cx + halfShoulders} y2={shouldersY - 6} />
              <text x={cx} y={shouldersY - 13} fontSize="7" fill="#C25E5E" textAnchor="middle" fontFamily="monospace">
                Épaules: {shouldersWidth}%
              </text>
            </g>

            {/* Waist width & height indicator */}
            <g>
              <line x1={cx - halfWaist} y1={actualWaistY} x2={cx + halfWaist} y2={actualWaistY} stroke="#9A3412" strokeWidth="1.25" />
              <line x1="8" y1={actualWaistY} x2="35" y2={actualWaistY} stroke="#9A3412" strokeDasharray="2,2" />
              <text x="10" y={actualWaistY - 3} fontSize="6.5" fill="#9A3412" fontWeight="bold">
                Taille: {waistWidth}%
              </text>
            </g>

            {/* Hips / Skirt base width */}
            <g>
              <line x1={cx - halfSkirtBottom} y1={actualSkirtBottomY + 12} x2={cx + halfSkirtBottom} y2={actualSkirtBottomY + 12} stroke="#1E3A8A" />
              <line x1={cx - halfSkirtBottom} y1={actualSkirtBottomY + 8} x2={cx - halfSkirtBottom} y2={actualSkirtBottomY + 16} stroke="#1E3A8A" />
              <line x1={cx + halfSkirtBottom} y1={actualSkirtBottomY + 8} x2={cx + halfSkirtBottom} y2={actualSkirtBottomY + 16} stroke="#1E3A8A" />
              <text x={cx} y={actualSkirtBottomY + 22} fontSize="7" fill="#1E3A8A" textAnchor="middle" fontFamily="monospace">
                Envergure Jupe: {skirtBottomWidth}%
              </text>
            </g>
          </g>
        )}

        {/* 5. HOTSPOTS CLICK ZONES IF ACTIVE */}
        {highlightZone && (
          <g id="highlight-overlay">
            {highlightZone === 'coiffure' && (
              <ellipse cx={cx} cy={headCy} rx="16" ry="18" fill="none" stroke="#D97706" strokeWidth="2.5" className="animate-pulse" />
            )}
            {highlightZone === 'col' && (
              <ellipse cx={cx} cy={neckY + 6} rx="20" ry="8" fill="none" stroke="#D97706" strokeWidth="2.5" className="animate-pulse" />
            )}
            {highlightZone === 'manches' && (
              <ellipse cx={cx - halfShoulders * 0.7} cy={shouldersY + 15} rx="14" ry="22" fill="none" stroke="#D97706" strokeWidth="2.5" className="animate-pulse" />
            )}
            {highlightZone === 'taille' && (
              <rect x={cx - halfWaist - 4} y={actualWaistY - 6} width={halfWaist * 2 + 8} height="12" rx="3" fill="none" stroke="#D97706" strokeWidth="2.5" className="animate-pulse" />
            )}
            {highlightZone === 'jupe' && (
              <path d={`M ${cx - halfWaist} ${actualWaistY + 15} L ${cx - halfSkirtBottom} ${actualSkirtBottomY} L ${cx + halfSkirtBottom} ${actualSkirtBottomY} L ${cx + halfWaist} ${actualWaistY + 15} Z`} fill="rgba(217, 119, 6, 0.15)" stroke="#D97706" strokeWidth="2" />
            )}
          </g>
        )}
      </svg>

      {/* Epoch Legend */}
      <div className="mt-2 text-center w-full px-2">
        <div className="text-xs font-semibold text-[#242321] tracking-wide">{silhouette.eraName}</div>
        <div className="text-[11px] text-[#77736D] italic">{silhouette.yearLabel}</div>
      </div>
    </div>
  );
};
