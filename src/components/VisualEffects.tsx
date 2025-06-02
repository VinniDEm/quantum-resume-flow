
import React, { useEffect, useState } from 'react';

const VisualEffects = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);
  const [matrixChars, setMatrixChars] = useState<Array<{ id: number; x: number; char: string; duration: number }>>([]);
  const [techParticles, setTechParticles] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          delay: Math.random() * 2,
        });
      }
      setStars(newStars);
    };

    // Generate matrix characters
    const generateMatrixChars = () => {
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|';
      const newChars = [];
      for (let i = 0; i < 8; i++) {
        newChars.push({
          id: i,
          x: Math.random() * 100,
          char: chars[Math.floor(Math.random() * chars.length)],
          duration: Math.random() * 10 + 10,
        });
      }
      setMatrixChars(newChars);
    };

    // Generate tech particles
    const generateTechParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 8,
        });
      }
      setTechParticles(newParticles);
    };

    generateStars();
    generateMatrixChars();
    generateTechParticles();

    // Regenerate matrix chars periodically
    const interval = setInterval(() => {
      generateMatrixChars();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Starfield */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Matrix background */}
      <div className="matrix-bg">
        {matrixChars.map((char) => (
          <div
            key={char.id}
            className="matrix-char"
            style={{
              left: `${char.x}%`,
              animationDuration: `${char.duration}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Tech particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {techParticles.map((particle) => (
          <div
            key={particle.id}
            className="tech-particle"
            style={{
              left: `${particle.x}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default VisualEffects;
