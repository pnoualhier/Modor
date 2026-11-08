import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Presentation } from './components/Presentation';
import { TimelinePreview } from './components/TimelinePreview';
import { UniversGrid } from './components/UniversGrid';
import { SilhouetteShowcase } from './components/SilhouetteShowcase';
import { WardrobeShowcase } from './components/WardrobeShowcase';
import { DesignersShowcase } from './components/DesignersShowcase';
import { GalleryShowcase } from './components/GalleryShowcase';
import { AppPreviewSection } from './components/AppPreviewSection';
import { Philosophy } from './components/Philosophy';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div id="top" className="min-h-screen bg-[#F7F4ED] text-[#242321] selection:bg-[#D9B8B3] selection:text-[#242321]">
      {/* 1. Navigation header */}
      <Header />

      <main id="main-content">
        {/* Section 1: Hero / Accueil */}
        <Hero />

        {/* Section 2: Présentation de Modor */}
        <Presentation />

        {/* Section 3: Cinq siècles à explorer (Frise chronologique) */}
        <TimelinePreview />

        {/* Section 4: Les 8 univers de Modor */}
        <UniversGrid />

        {/* Section 5: Comprendre la silhouette (Architecture & armatures) */}
        <SilhouetteShowcase />

        {/* Section 6: Le patrimoine du vestiaire (34 pièces décryptées) */}
        <WardrobeShowcase />

        {/* Section 7: Créateurs et maisons de mode (35 grands couturiers) */}
        <DesignersShowcase />

        {/* Section 8: Galerie et documents historiques (Fonds muséaux) */}
        <GalleryShowcase />

        {/* Section 9: Captures réelles de l'application (8 captures en HD) */}
        <AppPreviewSection />

        {/* Section 10: Philosophie du projet (Mémoire, Compréhension, Transmission) */}
        <Philosophy />

        {/* Section 11: Questions fréquentes (FAQ 10 questions/réponses) */}
        <FAQSection />

        {/* Section 12: Appel final à l'action */}
        <FinalCTA />
      </main>

      {/* Section 13: Footer patrimonial */}
      <Footer />
    </div>
  );
};

export default App;
