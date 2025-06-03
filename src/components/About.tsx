
import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimationWrapper animation="slide-in-left">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl gradient-text text-center mb-16 uppercase tracking-widest">
            About Me
          </h2>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper animation="slide-in-left" delay={200}>
            <div className="glass-strong p-8 hover-lift">
              <h3 className="font-orbitron font-bold text-2xl neon-pink mb-6 uppercase tracking-wide">
                Aspiring Cybersecurity Professional
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a first-year Bachelor's in Computer Application student at Birla Institute of Technology, Mesra 
                (2024–2028), passionate about safeguarding digital environments. I specialize in cybersecurity tools 
                like Nmap, Metasploit, and Wireshark, and programming in Python, SQL, and C.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My projects, such as encryption tools and phishing simulations, reflect my commitment to combating 
                cyber threats. I thrive at the intersection of technology and security, with strong problem-solving 
                skills honed through internships and volunteer work at Stray Army NGO.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When not coding, I contribute to animal welfare and explore AI and machine learning trends. Currently 
                working as a Cybersecurity and Website Development Intern at Stray Army NGO, where I implement security 
                measures and conduct awareness sessions.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-in-right" delay={400}>
            <div className="glass p-6 hover-tilt">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-orbitron neon-cyan uppercase tracking-wide">Python</span>
                  <span className="neon-orange">95%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyber-cyan to-neon-orange h-2 rounded-full w-[95%] glow-cyan"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-orbitron neon-purple uppercase tracking-wide">Cybersecurity</span>
                  <span className="neon-pink">92%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-neon-purple to-neon-pink h-2 rounded-full w-[92%] glow-purple"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-orbitron neon-pink uppercase tracking-wide">Network Security</span>
                  <span className="neon-cyan">90%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-neon-pink to-cyber-cyan h-2 rounded-full w-[90%] glow-pink"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-orbitron neon-orange uppercase tracking-wide">Problem Solving</span>
                  <span className="neon-purple">98%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-neon-orange to-neon-purple h-2 rounded-full w-[98%] glow-orange"></div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;
