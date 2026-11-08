import React from 'react';
import {
  Clock,
  Maximize2,
  Layers,
  BookOpen,
  Award,
  Image as ImageIcon,
  HelpCircle,
  Bookmark,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import { UNIVERS_MODULES, METRICS } from '../data/landingData';

export const UniversGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return Clock;
      case 'Maximize2':
        return Maximize2;
      case 'Layers':
        return Layers;
      case 'BookOpen':
        return BookOpen;
      case 'Award':
        return Award;
      case 'Image':
        return ImageIcon;
      case 'HelpCircle':
        return HelpCircle;
      case 'Bookmark':
        return Bookmark;
      default:
        return BookOpen;
    }
  };

  return (
    <section id="univers" className="py-24 bg-[#FAF6F0] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9A3412]">
            Architecture Encyclopédique
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-semibold tracking-tight">
            Huit univers pour explorer la mode
          </h2>
          <p className="text-lg text-[#77736D] leading-relaxed font-light">
            Chaque module répond à une curiosité différente : comprendre la structure invisible,
            mesurer l’évolution des silhouettes, ou tester son érudition.
          </p>
        </div>

        {/* 8 Univers Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UNIVERS_MODULES.map((u) => {
            const Icon = getIcon(u.icon);
            return (
              <div
                key={u.id}
                className="bg-[#F7F4ED] rounded-sm border border-[#D9CBB7] p-6 flex flex-col justify-between hover:border-[#9A3412] transition-all duration-300 hover:shadow-md group"
              >
                <div>
                  {/* Top Bar with Icon & Action */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-sm bg-[#EFE9DF] border border-[#D9CBB7] flex items-center justify-center text-[#9A3412] group-hover:bg-[#9A3412] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <a
                      href={METRICS.appUrl}
                      className="text-[#77736D] hover:text-[#9A3412] p-1 transition-colors"
                      aria-label={`Ouvrir le module ${u.name} dans Modor`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-xl font-semibold text-[#242321] mt-5">
                    {u.name}
                  </h3>
                  <p className="text-xs font-medium text-[#9A3412] mt-0.5 tracking-wide">
                    {u.tagline}
                  </p>

                  {/* Narrative */}
                  <p className="text-sm text-[#77736D] leading-relaxed mt-3 font-light">
                    {u.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="mt-4 pt-4 border-t border-[#E5DFD5] space-y-2 text-xs text-[#242321]">
                    {u.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#5F6B58] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Link */}
                <div className="mt-6 pt-3 border-t border-[#E5DFD5]">
                  <a
                    href={METRICS.appUrl}
                    className="text-xs font-semibold text-[#242321] group-hover:text-[#9A3412] flex items-center justify-between"
                  >
                    <span>Explorer ce module</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
