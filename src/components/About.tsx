
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
                Digital Architect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With over 5 years of experience in software development, I specialize in creating 
                innovative digital solutions that push the boundaries of what's possible on the web. 
                My passion lies in combining cutting-edge technology with intuitive design to deliver 
                exceptional user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I thrive in the intersection of creativity and technology, constantly exploring new 
                frameworks, design patterns, and emerging technologies. My approach to development 
                is holistic—considering not just the code, but the entire user journey and business impact.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me experimenting with new design tools, contributing 
                to open-source projects, or exploring the latest trends in AI and machine learning.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-in-right" delay={400}>
            <div className="glass p-6 hover-tilt">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-orbitron neon-cyan uppercase tracking-wide">Frontend</span>
                  <span className="neon-orange">95%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyber-cyan to-neon-orange h-2 rounded-full w-[95%] glow-cyan"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-orbitron neon-purple uppercase tracking-wide">Backend</span>
                  <span className="neon-pink">88%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-neon-purple to-neon-pink h-2 rounded-full w-[88%] glow-purple"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-orbitron neon-pink uppercase tracking-wide">UI/UX Design</span>
                  <span className="neon-cyan">92%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-neon-pink to-cyber-cyan h-2 rounded-full w-[92%] glow-pink"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-orbitron neon-orange uppercase tracking-wide">DevOps</span>
                  <span className="neon-purple">85%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-neon-orange to-neon-purple h-2 rounded-full w-[85%] glow-orange"></div>
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
