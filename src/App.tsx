import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Specs from './components/Specs';
import Services from './components/Services';
import Interests from './components/Interests';
import Work from './components/Work';
import Collaborations from './components/Collaborations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#1E1E1C] text-[#D6CBB2] selection:bg-[#2E6BFF]/30 selection:text-[#D6CBB2] overflow-x-hidden font-sans">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Subtle Background Particles */}
      <ParticleBackground />

      {/* Floating Liquid Glass Navigation */}
      <Navigation />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Specs />
        <Services />
        <Interests />
        <Work />
        <Collaborations />
        <Contact />
      </main>

      {/* Elegant Footer */}
      <Footer />

      {/* Back to top interactive glass button */}
      <BackToTop />
    </div>
  );
}
