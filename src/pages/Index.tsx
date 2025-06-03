
import React from 'react';
import CustomCursor from '../components/CustomCursor';
import VisualEffects from '../components/VisualEffects';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden relative">
      <CustomCursor />
      <VisualEffects />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      
      <footer className="py-8 px-4 border-t border-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 font-montserrat">
            © 2024 Vineet Kumar Singh. Securing the digital frontier ⚡
          </p>
          <p className="text-xs text-gray-500 mt-2 font-orbitron uppercase tracking-wider">
            Building secure solutions, one line of code at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
