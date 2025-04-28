
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 text-center text-gray-600">
      <div className="container mx-auto">
        <p className="text-sm">
          श्रीमती मोहिनी देवी काण्डपाल जी की पावन स्मृति में
        </p>
        <p className="text-xs mt-2">
          © {new Date().getFullYear()} - काण्डपाल परिवार द्वारा
        </p>
      </div>
    </footer>
  );
};

export default Footer;
