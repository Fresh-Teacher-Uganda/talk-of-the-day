
import React from 'react';
import { Star } from 'lucide-react';

export const SchoolHeader = () => {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center space-x-2">
        <div className="relative bg-white rounded-full p-3 shadow-lg">
          <img 
            src="https://springingstars.ac.ug/wp-content/uploads/2023/04/logo.png" 
            alt="Glorious Schools Logo" 
            className="h-12 w-12 object-contain"
          />
          <Star className="h-5 w-5 text-orange-500 absolute -top-1 -right-1" />
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Glorious Schools</h1>
      </div>
    </div>
  );
};
