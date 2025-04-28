
import React from 'react';

const GlowingCandle: React.FC = () => {
  return (
    <div className="absolute w-full h-full pointer-events-none overflow-hidden">
      <div className="candle-container absolute bottom-8 left-8 opacity-70">
        <div className="candle w-4 h-16 bg-gradient-to-b from-amber-100 to-amber-200 rounded-sm relative">
          <div className="flame w-4 h-8 absolute -top-8 left-0">
            <div className="absolute w-4 h-8 bg-orange-300 rounded-full blur-md animate-flicker"></div>
            <div className="absolute w-2 h-6 bg-yellow-200 rounded-full left-1 blur-xs animate-flicker" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        <div className="candle-glow absolute w-20 h-20 rounded-full -top-5 -left-8"></div>
      </div>
      
      <div className="candle-container absolute bottom-8 right-8 opacity-70">
        <div className="candle w-4 h-16 bg-gradient-to-b from-amber-100 to-amber-200 rounded-sm relative">
          <div className="flame w-4 h-8 absolute -top-8 left-0">
            <div className="absolute w-4 h-8 bg-orange-300 rounded-full blur-md animate-flicker"></div>
            <div className="absolute w-2 h-6 bg-yellow-200 rounded-full left-1 blur-xs animate-flicker" style={{ animationDelay: '0.3s' }}></div>
          </div>
        </div>
        <div className="candle-glow absolute w-20 h-20 rounded-full -top-5 -left-8"></div>
      </div>
      
      <div className="candle-container absolute top-8 right-8 opacity-70">
        <div className="candle w-4 h-16 bg-gradient-to-b from-amber-100 to-amber-200 rounded-sm relative">
          <div className="flame w-4 h-8 absolute -top-8 left-0">
            <div className="absolute w-4 h-8 bg-orange-300 rounded-full blur-md animate-flicker"></div>
            <div className="absolute w-2 h-6 bg-yellow-200 rounded-full left-1 blur-xs animate-flicker" style={{ animationDelay: '0.7s' }}></div>
          </div>
        </div>
        <div className="candle-glow absolute w-20 h-20 rounded-full -top-5 -left-8"></div>
      </div>
      
      <div className="candle-container absolute top-8 left-8 opacity-70">
        <div className="candle w-4 h-16 bg-gradient-to-b from-amber-100 to-amber-200 rounded-sm relative">
          <div className="flame w-4 h-8 absolute -top-8 left-0">
            <div className="absolute w-4 h-8 bg-orange-300 rounded-full blur-md animate-flicker"></div>
            <div className="absolute w-2 h-6 bg-yellow-200 rounded-full left-1 blur-xs animate-flicker" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        <div className="candle-glow absolute w-20 h-20 rounded-full -top-5 -left-8"></div>
      </div>
    </div>
  );
};

export default GlowingCandle;
