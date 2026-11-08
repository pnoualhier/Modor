import React from 'react';
import { Compass, ExternalLink, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { METRICS } from '../data/landingData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#242321] text-[#F7F4ED] relative overflow-hidden">
      {/* Decorative background aura */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#9A3412]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#D9CBB7]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#D9CBB7] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Accès Ouvert & Universel</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
          L’histoire de la mode vous attend.
        </h2>

        <p className="text-lg sm:text-xl text-[#D9CBB7] max-w-2xl mx-auto font-light leading-relaxed">
          Ouvrez l’encyclopédie interactive, parcourez les armatures d’époque et découvrez
          les secrets de fabrication des plus grands maîtres de l’élégance française.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={METRICS.appUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#9A3412] hover:bg-[#7C2D12] text-white px-8 py-4 rounded-sm font-semibold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 group focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Lancer l'application Modor dans le navigateur"
          >
            <Compass className="w-5 h-5 transition-transform group-hover:rotate-45" />
            <span>Lancer l’application web</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={METRICS.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-[#77736D] hover:border-white px-7 py-4 rounded-sm font-semibold text-base transition-colors"
          >
            <span>Consulter le code sur GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Micro reassurance checklist */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#A6AA99]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D9CBB7]" />
            <span>100% gratuit & sans publicité</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D9CBB7]" />
            <span>Aucune inscription requise</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D9CBB7]" />
            <span>Compatible mobile, tablette & bureau</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D9CBB7]" />
            <span>Fonctionne hors ligne (PWA)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
