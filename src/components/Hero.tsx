
import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative animated-bg overflow-hidden">
      {/* Enhanced floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              background: ['#00ffcc', '#cc00ff', '#ff0080', '#ff8000'][Math.floor(Math.random() * 4)],
              boxShadow: `0 0 ${10 + Math.random() * 10}px ${['rgba(0, 255, 204, 0.6)', 'rgba(204, 0, 255, 0.6)', 'rgba(255, 0, 128, 0.6)', 'rgba(255, 128, 0, 0.6)'][Math.floor(Math.random() * 4)]}`,
            }}
          />
        ))}
      </div>

      {/* Additional glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              background: `radial-gradient(circle, ${['#00ffcc', '#cc00ff', '#ff0080', '#ff8000'][Math.floor(Math.random() * 4)]} 0%, transparent 70%)`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <ScrollAnimationWrapper animation="scale-in">
          <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wider uppercase relative">
            <span className="gradient-text bg-gradient-to-r from-cyber-cyan via-neon-purple via-neon-pink to-neon-orange bg-clip-text text-transparent animate-gradient-x filter drop-shadow-2xl">
              Alex Chen
            </span>
            <div className="absolute inset-0 gradient-text bg-gradient-to-r from-cyber-cyan via-neon-purple via-neon-pink to-neon-orange bg-clip-text text-transparent blur-sm opacity-50 -z-10">
              Alex Chen
            </div>
          </h1>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation="fade-in" delay={300}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide drop-shadow-lg">
            SOFTWARE DEVELOPER <span className="neon-pink">|</span> DESIGNER
          </p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation="fade-in" delay={600}>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Crafting digital experiences with cutting-edge technology and innovative design. 
            Specializing in web development, UI/UX, and creating immersive digital solutions.
          </p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation="scale-in" delay={900}>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="interactive group relative px-8 py-4 bg-transparent border-2 border-cyber-cyan text-cyber-cyan font-orbitron font-bold uppercase tracking-wider rounded-lg hover:bg-cyber-cyan hover:text-black transition-all duration-300 animate-glow-pulse shadow-2xl hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-cyber-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"></div>
          </button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Hero;
