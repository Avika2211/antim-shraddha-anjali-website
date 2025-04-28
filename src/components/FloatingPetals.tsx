
import React, { useEffect, useRef } from 'react';

const FloatingPetals: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Create petals
    const petalCount = 10;
    const petalColors = ['#FFDEE2', '#FFB6C1', '#FFA8B5'];
    const petalShapes = [
      'M0,10 C0,4.5 4.5,0 10,0 C15.5,0 20,4.5 20,10 C20,15.5 15.5,20 10,20 C4.5,20 0,15.5 0,10 Z',
      'M0,0 C5,0 10,5 10,10 C10,15 5,20 0,20 C-5,20 -10,15 -10,10 C-10,5 -5,0 0,0 Z',
      'M0,0 C5,0 10,5 10,10 C10,15 5,20 0,20 C-5,20 -10,15 -10,10 C-10,5 -5,0 0,0 Z'
    ];
    
    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement('div');
      const colorIndex = Math.floor(Math.random() * petalColors.length);
      const shapeIndex = Math.floor(Math.random() * petalShapes.length);
      const size = Math.random() * 20 + 10; // Size between 10px and 30px
      
      // Create SVG petal
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("width", `${size}px`);
      svg.setAttribute("height", `${size}px`);
      svg.setAttribute("viewBox", "-10 -10 20 20");
      
      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", petalShapes[shapeIndex]);
      path.setAttribute("fill", petalColors[colorIndex]);
      
      svg.appendChild(path);
      petal.appendChild(svg);
      
      // Position the petal randomly within the container
      petal.style.position = 'absolute';
      petal.style.left = `${Math.random() * containerWidth}px`;
      petal.style.top = `${Math.random() * (containerHeight / 2)}px`;
      petal.style.zIndex = '-1';
      
      // Add animation
      petal.style.animation = `float ${Math.random() * 5 + 5}s ease-in-out infinite, sway ${Math.random() * 3 + 3}s ease-in-out infinite`;
      petal.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(petal);
    }
    
    // Cleanup on unmount
    return () => {
      while (container.lastChild && container.lastChild !== container.firstChild) {
        container.removeChild(container.lastChild);
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Petals will be added here dynamically */}
    </div>
  );
};

export default FloatingPetals;
