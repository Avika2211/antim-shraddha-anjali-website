
import React from 'react';
import FloatingPetals from '@/components/FloatingPetals';
import GlowingCandle from '@/components/GlowingCandle';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tribute from '@/components/Tribute';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Background elements */}
      <FloatingPetals />
      <GlowingCandle />
      
      <div className="container mx-auto px-4 py-10 relative z-10">
        {/* Header with main title */}
        <Header />
        
        {/* Main tribute content */}
        <main className="flex flex-col items-center justify-center py-8">
          <Tribute />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
