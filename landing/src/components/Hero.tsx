import React from 'react';
import { Compass, BookOpen, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { METRICS } from '../data/landingData';
import { ImageWithFallback } from './ImageWithFallback';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#F7F4ED] to-[#F7F4ED]">
      {/* Decorative architectural background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#D9CBB7 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Museum Heritage Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFE9DF] border border-[#D9CBB7] text-[#7C2D12] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Patrimoine & Culture du Costume Français</span>
            </div>

            {/* Main Editorial Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#242321] font-semibold leading-[1.12] tracking-tight">
              Cinq siècles de mode féminine.{' '}
              <span className="italic font-normal block text-[#9A3412]">
                Une histoire à explorer.
              </span>
            </h1>

            {/* Subtitle / Pitch */}
            <p className="text-lg sm:text-xl text-[#77736D] leading-relaxed max-w-2xl font-light">
              De la fraise tuyautée Renaissance aux révolutions contemporaines du vestiaire,
              découvrez l’évolution des silhouettes, des armatures cachées et des maîtres
              couturiers qui ont façonné l’art de vivre français.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={METRICS.appUrl}
                className="inline-flex items-center justify-center gap-3 bg-[#9A3412] hover:bg-[#7C2D12] text-white px-7 py-4 rounded-sm font-medium text-base shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-0.5 group focus-visible:outline-2"
                aria-label="Lancer l'application interactive Modor"
              >
                <Compass className="w-5 h-5 transition-transform group-hover:rotate-45" />
                <span>Explorer l'application</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#univers"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#FAF6F0] text-[#242321] border border-[#D9CBB7] hover:border-[#242321] px-6 py-4 rounded-sm font-medium text-base transition-colors"
              >
                <BookOpen className="w-4 h-4 text-[#77736D]" />
                <span>Découvrir les 8 univers</span>
              </a>
            </div>

            {/* Trust and Provenance micro-bar */}
            <div className="pt-6 border-t border-[#E5DFD5] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#77736D]">
              <div className="flex items-center gap-1.5 font-medium text-[#242321]">
                <ShieldCheck className="w-4 h-4 text-[#5F6B58]" />
                <span>Édition patrimoniale libre & gratuite</span>
              </div>
              <span className="hidden sm:inline text-[#D9CBB7]" aria-hidden="true">•</span>
              <span>22 époques (1515 – 2026)</span>
              <span className="hidden sm:inline text-[#D9CBB7]" aria-hidden="true">•</span>
              <span>34 pièces analysées</span>
              <span className="hidden sm:inline text-[#D9CBB7]" aria-hidden="true">•</span>
              <span>35 maîtres couturiers</span>
            </div>
          </div>

          {/* Right Column: Visual Showcase & App Sneak Peek */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back Card: Archival Plate */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#EFE9DF] rounded-md border border-[#D9CBB7] transform -rotate-2 pointer-events-none" />

              {/* Main App Preview Card */}
              <div className="relative bg-[#FAF6F0] p-4 rounded-md border border-[#D9CBB7] shadow-xl transform rotate-1 transition-transform hover:rotate-0 duration-500">
                {/* Browser top-bar illusion */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5DFD5] text-[11px] text-[#77736D]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D9B8B3]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D9CBB7]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A6AA99]" />
                  </div>
                  <span className="font-mono tracking-tight text-[10px] text-[#242321]">modor.pages.dev</span>
                  <span className="text-[10px] uppercase font-semibold text-[#9A3412]">Direct</span>
                </div>

                {/* Real screenshot embed */}
                <div className="relative rounded-xs overflow-hidden border border-[#E5DFD5] bg-[#242321]/5 aspect-4/3 group">
                  <ImageWithFallback
                    src="/screenshots/01_chronologie_frise.png"
                    alt="Capture d'écran réelle de la chronologie interactive Modor"
                    fallbackTitle="Frise chronologique Modor"
                    fallbackSubtitle="22 périodes historiques"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242321]/80 via-transparent to-transparent flex items-end p-4 pointer-events-none">
                    <div className="text-white">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D9CBB7]">
                        Chronologie dynamique
                      </p>
                      <p className="font-serif text-lg font-medium">
                        La frise des 22 périodes historiques
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating caption under card */}
                <div className="mt-3 flex items-center justify-between text-xs text-[#77736D]">
                  <span className="italic font-serif">Modor — v1.0 Production</span>
                  <a
                    href={METRICS.appUrl}
                    className="text-[#9A3412] hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>Tester en direct</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Floating badge bottom right */}
              <div className="absolute -bottom-5 -right-3 bg-white/95 backdrop-blur-xs border border-[#D9CBB7] p-3 rounded-md shadow-md text-left max-w-[210px] hidden sm:block animate-in fade-in slide-in-from-bottom-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A3412]">
                  Anatomie du costume
                </p>
                <p className="text-xs font-serif text-[#242321] mt-0.5 leading-snug">
                  Calques superposés : dessous, armatures, jupons & parures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
