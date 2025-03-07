
import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing stars
    container.innerHTML = '';

    // Create stars
    const stars = 200;
    const starSizes = [1, 1.5, 2];
    
    for (let i = 0; i < stars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random size
      const size = starSizes[Math.floor(Math.random() * starSizes.length)];
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random opacity
      star.style.opacity = `${0.1 + Math.random() * 0.9}`;
      
      // Random animation duration
      const duration = 60 + Math.random() * 90;
      star.style.animationDuration = `${duration}s`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 60}s`;
      
      container.appendChild(star);
    }
  }, []);

  return <div ref={containerRef} className="stars-container"></div>;
};

export default StarBackground;
