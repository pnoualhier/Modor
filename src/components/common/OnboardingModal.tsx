import React, { useState } from 'react';
import {
  BookOpen,
  Layers,
  Sparkles,
  ShieldAlert,
  ShieldCheck,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  Smartphone
} from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSettings?: () => void;
}

const ONBOARDING_ACCEPTED_KEY = 'modor_onboarding_accepted';

export class OnboardingService {
  public static isAccepted(): boolean {
    if (typeof window === 'undefined' || !window.localStorage) return true;
    return localStorage.getItem(ONBOARDING_ACCEPTED_KEY) === 'true';
  }

  public static setAccepted(): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    localStorage.setItem(ONBOARDING_ACCEPTED_KEY, 'true');
  }

  public static reset(): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    localStorage.removeItem(ONBOARDING_ACCEPTED_KEY);
  }
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(0);

  if (!isOpen) return null;

  const handleAcceptAndStart = () => {
    OnboardingService.setAccepted();
    onClose();
  };

  const steps = [
    {
      title: 'Bienvenue sur Modor — Mode & Mémoire',
      subtitle: 'Encyclopédie de la mode féminine en France (XVIe – XXIe siècle)',
      icon: BookOpen,
      content: (
        <div className="space-y-4 text-xs md:text-sm text-[#242321] leading-relaxed">
          <p>
            <strong>Modor</strong> est une application web muséale consacrée à l'histoire des silhouettes, des sous-structures et des créateurs qui ont façonné le costume féminin en France, de la Renaissance au XXIe siècle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-[#F7F4ED] rounded-xl border border-[#D9CBB7]/60 space-y-1">
              <span className="font-serif font-bold text-[#9A3412] text-xs block">
                22 Périodes &amp; 19 Rubriques
              </span>
              <p className="text-[11px] text-[#77736D]">
                Du vertugadin Renaissance aux robes contemporaines, découvrez les contextes sociaux, techniques et morphologiques.
              </p>
            </div>
            <div className="p-3 bg-[#F7F4ED] rounded-xl border border-[#D9CBB7]/60 space-y-1">
              <span className="font-serif font-bold text-[#9A3412] text-xs block">
                100% Hors-Ligne &amp; Autonome
              </span>
              <p className="text-[11px] text-[#77736D]">
                Toutes les données, fiches et 67 planches d'archives sont embarquées localement pour une consultation fluide sans réseau.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Outils d\'Étude & Pédagogie',
      subtitle: 'Comparateur, anatomie, créateurs et quiz d\'érudition',
      icon: Layers,
      content: (
        <div className="space-y-3 text-xs md:text-sm text-[#242321] leading-relaxed">
          <p>
            Modor met à votre disposition des outils d'analyse morphologique et didactique conçus pour les étudiants, chercheurs et passionnés :
          </p>
          <ul className="space-y-2 pt-1 text-xs">
            <li className="flex items-start gap-2 bg-[#F7F4ED] p-2.5 rounded-lg border border-[#D9CBB7]/40">
              <Layers className="w-4 h-4 text-[#9A3412] shrink-0 mt-0.5" />
              <div>
                <strong>Comparateur de Silhouettes :</strong> Comparez deux époques côte à côte, activez les calques de structures internes (cages, paniers, corsets) et analysez les métriques.
              </div>
            </li>
            <li className="flex items-start gap-2 bg-[#F7F4ED] p-2.5 rounded-lg border border-[#D9CBB7]/40">
              <Sparkles className="w-4 h-4 text-[#9A3412] shrink-0 mt-0.5" />
              <div>
                <strong>Dissection Anatomique :</strong> Touchez les points d'intérêt pour comprendre le rôle, la coupe et les étoffes de chaque couche vestimentaire.
              </div>
            </li>
            <li className="flex items-start gap-2 bg-[#F7F4ED] p-2.5 rounded-lg border border-[#D9CBB7]/40">
              <Smartphone className="w-4 h-4 text-[#9A3412] shrink-0 mt-0.5" />
              <div>
                <strong>Infobulles Pédagogiques :</strong> Cliquez sur les boutons d'aide « ? » présents sur chaque écran pour afficher des explications claires.
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Mentions Légales & Non-Responsabilité',
      subtitle: 'Clause exonératoire et conditions d\'utilisation',
      icon: ShieldAlert,
      content: (
        <div className="space-y-3.5 text-xs text-[#242321] leading-relaxed">
          {/* Prominent Disclaimer Notice Box */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-300 text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wide text-amber-900">
              <ShieldAlert className="w-4 h-4 text-[#9A3412] shrink-0" />
              <span>Clause Exonératoire de Responsabilité</span>
            </div>
            <p className="text-[11.5px] leading-relaxed">
              <strong>L'auteur et éditeur de l'application décline expressément toute responsabilité</strong> quant aux informations, données historiques, dates, attributions, descriptions techniques, reconstitutions et illustrations fournies au sein de l'application.
            </p>
            <p className="text-[11px] text-amber-900/90 leading-relaxed">
              Ces contenus sont fournis exclusivement à titre informatif, culturel et pédagogique. Malgré les soins apportés aux rapprochements documentaires avec les institutions publiques, l'application ne saurait être tenue responsable des inexactitudes, omissions ou interprétations historiques éventuelles.
            </p>
          </div>

          <div className="space-y-2 text-[11px] text-[#77736D]">
            <p>
              • <strong>Sources patrimoniales :</strong> Les visuels proviennent des fonds publics ou libres de droit (BnF Gallica, Palais Galliera, MAD Paris, The MET).
            </p>
            <p>
              • <strong>Protection de la vie privée :</strong> Aucune donnée personnelle, statistique de tracking ou cookie publicitaire n'est collecté. Vos favoris et notes sont stockés localement sur votre terminal.
            </p>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[step];
  const StepIcon = currentStepData.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Guide de démarrage et mentions légales"
    >
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#D9CBB7] p-6 md:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Step Indicator & Header */}
        <div>
          <div className="flex items-center justify-between text-xs text-[#77736D] mb-3">
            <span className="font-mono text-[11px] font-semibold text-[#9A3412] uppercase tracking-wider">
              Étape {step + 1} sur {steps.length}
            </span>
            <div className="flex gap-1.5">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === step
                      ? 'w-6 bg-[#242321]'
                      : i < step
                      ? 'w-2 bg-[#9A3412]'
                      : 'w-2 bg-[#D9CBB7]'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F7F4ED] border border-[#D9CBB7] flex items-center justify-center text-[#9A3412] shrink-0 shadow-2xs">
              <StepIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#242321]">
                {currentStepData.title}
              </h3>
              <p className="text-xs text-[#77736D] mt-0.5">
                {currentStepData.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="min-h-[220px] flex flex-col justify-center border-y border-[#D9CBB7]/40 py-4">
          {currentStepData.content}
        </div>

        {/* Footer Navigation Controls */}
        <div className="flex items-center justify-between pt-2">
          {step > 0 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#77736D] hover:text-[#242321] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Précédent</span>
            </button>
          ) : (
            <div />
          )}

          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#242321] text-white text-xs font-semibold hover:bg-[#3A3835] transition-colors shadow-xs"
            >
              <span>Suivant</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleAcceptAndStart}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#9A3412] text-white text-xs font-semibold hover:bg-[#7C2D12] transition-colors shadow-md"
            >
              <Check className="w-4 h-4" />
              <span>J'accepte et je commence l'exploration</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
