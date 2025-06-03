
import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const skills = [
  { name: 'Python', level: 'Advanced', icon: '🐍', color: 'neon-orange' },
  { name: 'SQL', level: 'Intermediate', icon: '🗄️', color: 'neon-cyan' },
  { name: 'C', level: 'Intermediate', icon: '⚙️', color: 'neon-purple' },
  { name: 'Nmap', level: 'Advanced', icon: '🔎', color: 'neon-pink' },
  { name: 'Metasploit', level: 'Advanced', icon: '🛡️', color: 'neon-orange' },
  { name: 'Wireshark', level: 'Intermediate', icon: '📡', color: 'neon-cyan' },
  { name: 'Linux', level: 'Advanced', icon: '🐧', color: 'neon-purple' },
  { name: 'Problem-Solving', level: 'Expert', icon: '💡', color: 'neon-pink' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimationWrapper animation="fade-in">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl gradient-text text-center mb-16 uppercase tracking-widest">
            Skills & Expertise
          </h2>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <ScrollAnimationWrapper
              key={skill.name}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="glass interactive group hover-lift hover-tilt p-6 text-center cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className={`font-orbitron font-bold ${skill.color} mb-2 uppercase tracking-wide text-sm`}>
                  {skill.name}
                </h3>
                <p className="text-gray-400 text-xs uppercase tracking-wider">
                  {skill.level}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper animation="fade-in" delay={800}>
          <div className="mt-16 text-center">
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Constantly evolving my skill set through continuous learning and hands-on experience 
              with the latest technologies. I believe in staying ahead of the curve to deliver 
              cutting-edge solutions that drive innovation.
            </p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Skills;
