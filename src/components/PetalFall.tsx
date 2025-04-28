
import React, { useEffect, useRef, useState } from 'react';

interface PetalFallProps {
  isActive: boolean;
}

const PetalFall: React.FC<PetalFallProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [petals, setPetals] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    if (!isActive || !containerRef.current) return;
    
    // Colors for petals
    const petalColors = ['#FFDEE2', '#FFB6C1', '#FFA8B5', '#FFE6EA'];
    
    // Create petals
    const createPetals = () => {
      const newPetals = [];
      
      for (let i = 0; i < 30; i++) {
        const id = `petal-${Date.now()}-${i}`;
        const size = Math.random() * 15 + 10; // Size between 10px and 25px
        const left = Math.random() * 100; // Position randomly across width
        const animationDuration = Math.random() * 6 + 8; // Between 8s and 14s
        const delay = Math.random() * 5; // Random delay up to 5s
        const rotate = Math.random() * 360; // Random rotation
        const color = petalColors[Math.floor(Math.random() * petalColors.length)];
        
        const petalStyle = {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          backgroundColor: color,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${delay}s`,
          transform: `rotate(${rotate}deg)`,
          borderRadius: '50% 0 50% 0',
        };
        
        newPetals.push(
          <div 
            key={id}
            className="absolute top-0 animate-fall"
            style={petalStyle}
          />
        );
      }
      
      setPetals(prevPetals => [...prevPetals, ...newPetals]);
    };
    
    // Initial petals
    createPetals();
    
    // Add more petals every 3 seconds
    const interval = setInterval(createPetals, 3000);
    
    // Clean up petals and interval on unmount
    return () => {
      clearInterval(interval);
      setPetals([]);
    };
  }, [isActive]);
  
  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      {petals}
    </div>
  );
};

export default PetalFall;
