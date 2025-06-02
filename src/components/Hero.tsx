
import React from 'react';
import { ArrowDown } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative animated-bg overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyber-cyan rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <ScrollAnimationWrapper animation="scale-in">
          <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6 neon-cyan tracking-wider uppercase">
            Alex Chen
          </h1>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation="fade-in" delay={300}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide">
            SOFTWARE DEVELOPER <span className="neon-purple">|</span> DESIGNER
          </p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation="fade-in" delay={600}>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technology and innovative design. 
            Specializing in web development, UI/UX, and creating immersive digital solutions.
          </p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation="scale-in" delay={900}>
          <button
            onClick={scrollToAbout}
            className="interactive group relative px-8 py-4 bg-transparent border-2 border-cyber-cyan text-cyber-cyan font-orbitron font-bold uppercase tracking-wider rounded-lg hover:bg-cyber-cyan hover:text-black transition-all duration-300 animate-glow-pulse"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-cyber-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
          </button>
        </ScrollAnimationWrapper>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ScrollAnimationWrapper animation="fade-in" delay={1200}>
          <div className="flex flex-col items-center text-cyber-cyan animate-bounce">
            <span className="text-sm font-montserrat mb-2 tracking-wide">SCROLL</span>
            <ArrowDown size={20} />
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Hero;
