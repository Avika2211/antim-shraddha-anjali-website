
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full py-12 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 px-6 text-gray-800 leading-relaxed">
        आपकी यादें हमारे दिलों में हमेशा जीवित रहेंगी।
      </h1>
      <div className="w-24 h-1 bg-petal rounded-full mb-6"></div>
    </header>
  );
};

export default Header;
