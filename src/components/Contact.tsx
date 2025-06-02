
import React, { useState } from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully! 🚀",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-t from-gray-900/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimationWrapper animation="fade-in">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl gradient-text text-center mb-16 uppercase tracking-widest">
            Let's Connect
          </h2>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollAnimationWrapper animation="slide-in-left" delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="font-orbitron font-bold text-2xl neon-cyan mb-6 uppercase tracking-wide">
                  Get In Touch
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Ready to collaborate on your next project? Whether you need a complete digital 
                  solution or want to discuss innovative ideas, I'm here to help bring your vision to life.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan rounded-lg flex items-center justify-center">
                    <span className="text-cyber-cyan">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">Email</p>
                    <p className="text-white">alex.chen@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-purple/10 border border-neon-purple rounded-lg flex items-center justify-center">
                    <span className="text-neon-purple">📱</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan rounded-lg flex items-center justify-center">
                    <span className="text-cyber-cyan">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-in-right" delay={400}>
            <form onSubmit={handleSubmit} className="glass-strong p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-cyber-cyan font-orbitron text-sm uppercase tracking-wide mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-cyber-cyan font-orbitron text-sm uppercase tracking-wide mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-cyber-cyan font-orbitron text-sm uppercase tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="interactive w-full bg-gradient-to-r from-cyber-cyan to-neon-purple text-black font-orbitron font-bold uppercase tracking-wider py-4 rounded-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-glow-pulse"
              >
                Send Message
              </button>
            </form>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
