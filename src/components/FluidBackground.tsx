
import React, { useEffect, useRef } from 'react';

const FluidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const colorA = { r: 255, g: 222, b: 226 }; // #FFDEE2 (Light pink)
    const colorB = { r: 255, g: 182, b: 193 }; // #FFB6C1 (Pink)
    
    let time = 0;
    const step = 0.01;
    
    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Mouse interaction variables
    const mouse = { x: width / 2, y: height / 2 };
    const mousePower = 0;
    const lastMouse = { x: width / 2, y: height / 2 };
    
    const handleMouseMove = (e: MouseEvent) => {
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation function
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      
      // Update time
      time += step;
      
      // Create fluid effect with sine waves
      for (let x = 0; x < width; x += 20) {
        for (let y = 0; y < height; y += 20) {
          // Calculate distance from mouse
          const distX = mouse.x - x;
          const distY = mouse.y - y;
          const distance = Math.sqrt(distX * distX + distY * distY);
          
          // Calculate wave effect
          const waveX = Math.sin(x * 0.01 + time) * 5;
          const waveY = Math.cos(y * 0.01 + time) * 5;
          
          // Mix colors based on position
          const ratio = (Math.sin(x * 0.01 + time) + Math.cos(y * 0.01 + time) + 2) / 4;
          
          // Interpolate between colors
          const r = Math.floor(colorA.r * (1 - ratio) + colorB.r * ratio);
          const g = Math.floor(colorA.g * (1 - ratio) + colorB.g * ratio);
          const b = Math.floor(colorA.b * (1 - ratio) + colorB.b * ratio);
          
          // Draw shape
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.05)`;
          ctx.beginPath();
          ctx.arc(x + waveX, y + waveY, 15 + Math.sin(time + x * 0.01) * 5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-pink-50/30 to-white/40" />
    </div>
  );
};

export default FluidBackground;
