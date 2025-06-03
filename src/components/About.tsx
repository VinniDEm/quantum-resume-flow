
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
                Currently pursuing a Bachelor's in Computer Application at Birla Institute of Technology, Mesra, 
                I am passionate about safeguarding digital environments through innovative cybersecurity solutions. 
                My expertise lies in leveraging tools like Nmap, Metasploit, Wireshark, and Burp Suite to identify 
                and mitigate vulnerabilities.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I thrive at the intersection of technology and security, applying my skills in Python, SQL, and C to 
                develop tools like a terminal-based encryption utility using AES and RSA. My projects, such as a Wi-Fi 
                deauthentication tool and phishing simulation platform, reflect my commitment to understanding and 
                combating real-world cyber threats.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not exploring cybersecurity, you'll find me contributing to Stray Army NGO, where I enhance 
                website security and conduct awareness sessions, or volunteering to support animal welfare initiatives.
              </p>
            </div>
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
