
import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const projects = [
  {
    title: 'Terminal-Based Encryption Tool',
    description: 'A command-line utility for secure data encryption using AES and RSA algorithms, designed with a modular interface for seamless file encryption and decryption.',
    tech: 'Python, Pycryptodome',
    image: 'https://images.unsplash.com/photo-1516321310762-97b3a76d7345?w=600&h=400&fit=crop',
    status: 'Completed'
  },
  {
    title: 'Wi-Fi Deauthentication Tool',
    description: 'A network vulnerability analysis tool built with ESP8266 to simulate Wi-Fi deauthentication attacks, studying impacts on network stability and device behavior.',
    tech: 'C, ESP8266, Arduino',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    status: 'Completed'
  },
  {
    title: 'Phishing Simulation Platform',
    description: 'A training platform mimicking real-world phishing attack vectors, used to educate users through interactive workshops on identifying phishing attempts.',
    tech: 'Python, Flask, HTML/CSS',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
    status: 'Live'
  },
  {
    title: 'Byte Me: NullByte Hacking Guide',
    description: 'A comprehensive Medium guide detailing exploitation techniques for the NullByte vulnerable machine, including privilege escalation and vulnerability analysis.',
    tech: 'Nmap, Metasploit, Linux',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600&h=400&fit=crop',
    status: 'Published'
  },
  {
    title: 'Credit Card Fraud Detection Machine',
    description: 'A machine learning model to detect fraudulent credit card transactions, utilizing anomaly detection and classification techniques to enhance financial security.',
    tech: 'Python, Scikit-learn, Pandas, SQL',
    image: 'https://images.unsplash.com/photo-1591696205602-2f2a61262b29?w=600&h=400&fit=crop',
    status: 'Completed'
  },
  {
    title: 'Internal Threat Analysis System',
    description: 'A system for identifying and mitigating insider threats, analyzing user behavior and network activity to detect potential security risks within organizations.',
    tech: 'Python, Wireshark, SQL, Elasticsearch',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop',
    status: 'Development'
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
              <div className="bg-gray-900/50 border border-gray-800 interactive group hover-lift cursor-pointer overflow-hidden rounded-lg">
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
