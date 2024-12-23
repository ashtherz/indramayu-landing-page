import React, { useState } from 'react';

const ProgramCard = ({ title, description, Icon, summary }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-64 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-all duration-300 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="bg-white rounded-lg h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center justify-center h-full px-6">
              <Icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-base font-bold text-center mb-3">{title}</h3>
              <p className="text-sm text-gray-600 text-center tracking-wide">
                {description.split(' ').join('\u00A0')}
              </p>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="bg-white rounded-lg p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-full overflow-y-auto">
              <p className="text-sm text-gray-600 leading-relaxed">
                {summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;