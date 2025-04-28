import React, { useState } from 'react';
import PetalFall from './PetalFall';
import CommentSection from './CommentSection';

const Tribute: React.FC = () => {
  const [showPetals, setShowPetals] = useState(false);
  
  const handleTributeClick = () => {
    setShowPetals(true);
    
    // Play soft music (in production, you would replace this with an actual audio file)
    const audio = new Audio('/path/to/music.mp3');
    audio.volume = 0.3; // Set volume to 30%
    // audio.play(); // Commented for now as there's no actual audio file
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="glass-card p-8 md:p-12 mb-10 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center mb-8">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/lovable-uploads/1bc8eaf9-bbdc-4385-a863-f71f1ce3d8e4.png" 
                alt="श्रीमती मोहिनी देवी काण्डपाल" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 border-8 border-white opacity-20 rounded-full"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 lg:pl-10">
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-center lg:text-left">
              पीपल पानी (तेरहवी)
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              बड़े दुःख के साथ सूचित किया जाता है कि हमारी पूज्य माता श्रीमती मोहिनी देवी काण्डपाल, 
              पत्नी स्व. श्री पद्मा दत्त काण्डपाल जी का दिनांक 25 अप्रैल 2025, 
              प्रातः 3:00 बजे (हिन्दू पंचांग अनुसार 24 अप्रैल रात्रि 3:00 बजे) दुखद निधन हो गया।
            </p>
          </div>
        </div>
        
        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg mb-8">
          <h3 className="text-xl font-medium mb-4 text-gray-800">
            उनकी आत्मा की शांति हेतु तेहरवी संस्कार एवं भोज का आयोजन:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-petal flex items-center justify-center mr-4 mt-1">
                <span className="text-primary-foreground font-bold">📅</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">दिनांक:</h4>
                <p>5 मई 2025 (सोमवार)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-petal flex items-center justify-center mr-4 mt-1">
                <span className="text-primary-foreground font-bold">⏰</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">समय:</h4>
                <p>दोपहर 1:00 बजे से 3:00 बजे तक</p>
              </div>
            </div>
            
            <div className="flex items-start md:col-span-2">
              <div className="w-8 h-8 rounded-full bg-petal flex items-center justify-center mr-4 mt-1">
                <span className="text-primary-foreground font-bold">📍</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">स्थान:</h4>
                <p>E-2/99-100, भूतल, सेक्टर-16, रोहिणी, दिल्ली-110089</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2 text-gray-800">लैंडमार्क:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>आद्याशक्ति मंदिर से 100 मीटर</li>
            <li>जैन भारती पब्लिक स्कूल से 100 मीटर</li>
          </ul>
        </div>
        
        <p className="text-center text-lg mb-8">
          आप सपरिवार पधारकर दिवंगत आत्मा को अपनी श्रद्धांजलि अर्पित करें तथा प्रसाद ग्रहण कर हमें कृतज्ञ करें।
        </p>
        
        <div className="text-center mb-8">
          <h3 className="text-xl font-medium mb-4">भावभीनी श्रद्धांजलि सहित,</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-700">
            <div>
              <p className="font-medium">गिरीश काण्डपाल</p>
              <p className="text-sm">(9811582344)</p>
            </div>
            <div>
              <p className="font-medium">चन्द्र शेखर काण्डपाल</p>
              <p className="text-sm">(9811578857)</p>
            </div>
            <div>
              <p className="font-medium">कृष्णा कौल काण्डपाल</p>
              <p className="text-sm">(9999183253)</p>
            </div>
            <div>
              <p className="font-medium">किशोर चन्द्र काण्डपाल</p>
              <p className="text-sm">(7536023644)</p>
            </div>
          </div>
          
          <p className="mt-4 font-medium">एवं समस्त शोकाकुल परिवार</p>
        </div>
        
        <div className="flex justify-center mt-10">
          <button 
            onClick={handleTributeClick} 
            className="px-8 py-3 bg-petal text-primary-foreground rounded-full font-medium transition-all duration-300 hover:bg-petal-dark transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-petal focus:ring-opacity-50"
          >
            श्रद्धांजलि अर्पित करें
          </button>
        </div>
      </div>
      
      <CommentSection />
      
      <PetalFall isActive={showPetals} />
    </div>
  );
};

export default Tribute;
