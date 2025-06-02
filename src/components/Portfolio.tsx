
import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const projects = [
  {
    title: 'NeuroLink Dashboard',
    description: 'AI-powered analytics platform with real-time data visualization and machine learning insights.',
    tech: 'React, Python, TensorFlow',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    status: 'Live'
  },
  {
    title: 'Quantum Commerce',
    description: 'Next-generation e-commerce platform with AR product visualization and blockchain payments.',
    tech: 'Next.js, WebGL, Solidity',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
    status: 'Beta'
  },
  {
    title: 'CyberSpace Social',
    description: 'Immersive 3D social platform for virtual collaboration and digital communities.',
    tech: 'Three.js, WebRTC, Node.js',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop',
    status: 'Development'
  },
  {
    title: 'CodeMatrix IDE',
    description: 'Cloud-based development environment with AI-assisted coding and collaborative features.',
    tech: 'TypeScript, Monaco, Docker',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
    status: 'Live'
  },
  {
    title: 'HoloDesign Studio',
    description: 'Advanced design tool for creating holographic interfaces and immersive experiences.',
    tech: 'WebGL, React, Blender API',
    image: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=600&h=400&fit=crop',
    status: 'Concept'
  },
  {
    title: 'DataFlow Nexus',
    description: 'Enterprise data management platform with automated workflows and predictive analytics.',
    tech: 'Vue.js, GraphQL, PostgreSQL',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop',
    status: 'Live'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimationWrapper animation="slide-in-left">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl gradient-text text-center mb-16 uppercase tracking-widest">
            Portfolio
          </h2>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimationWrapper
              key={project.title}
              animation="scale-in"
              delay={index * 150}
            >
              <div className="glass-strong interactive group hover-lift cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-orbitron uppercase tracking-wide rounded-full ${
                      project.status === 'Live' 
                        ? 'bg-cyber-cyan text-black' 
                        : project.status === 'Beta'
                        ? 'bg-neon-purple text-white'
                        : project.status === 'Development'
                        ? 'bg-yellow-500 text-black'
                        : 'bg-gray-600 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-orbitron font-bold text-xl neon-cyan mb-3 uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-neon-purple font-montserrat uppercase tracking-wider">
                      {project.tech}
                    </span>
                    <div className="w-8 h-8 border border-cyber-cyan rounded-full flex items-center justify-center group-hover:bg-cyber-cyan group-hover:text-black transition-all duration-300">
                      <span className="text-xs">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
