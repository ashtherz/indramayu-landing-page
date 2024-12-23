import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const InteractiveBackground = () => {
    const containerRef = useRef(null);
  const particlesRef = useRef([]);
  
  useEffect(() => {
    const particles = [];
    const particleCount = 50;
    const colors = ['#dbeafe', '#bfdbfe', '#93c5fd'];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.width = '15px';
      particle.style.height = '15px';
      particle.style.opacity = `${Math.random() * 0.2 + 0.1}`;
      
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.8,
      });
      
      containerRef.current.appendChild(particle);
      particles.push(particle);
      particlesRef.current.push(particle);
      
      animateParticle(particle);
    }
 
    return () => {
      particlesRef.current.forEach(particle => {
        if (particle && particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);
  
  const animateParticle = (particle) => {
    // Float animation
    gsap.to(particle, {
      duration: 'random(3, 6)',
      y: '+=30',
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });

    // Twinkle animation
    gsap.to(particle, {
      duration: 'random(1, 3)',
      opacity: 'random(0.1, 0.3)',
      scale: 'random(0.8, 1.2)',
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 'random(0, 2)',
    });
  };

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Optional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
    </div>
  );
};

export default InteractiveBackground;
