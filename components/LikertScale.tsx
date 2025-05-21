
import React from 'react';
import { LIKERT_SCALE_OPTIONS } from '../constants';

interface LikertScaleProps {
  selectedValue: number | undefined;
  onChange: (value: number) => void;
}

const LikertScale: React.FC<LikertScaleProps> = ({ selectedValue, onChange }) => {
  return (
    <div className="my-6">
      <div className="flex justify-between text-xs text-gray-400 mb-2 px-1">
        <span>Totalmente en desacuerdo</span>
        <span>Totalmente de acuerdo</span>
      </div>
      <div className="flex justify-between items-center space-x-1 sm:space-x-2 bg-gray-700 p-2 rounded-lg shadow-md">
        {LIKERT_SCALE_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={selectedValue === option.value}
            title={option.label}
            className={`
              w-8 h-8 sm:w-10 sm:h-10 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out
              flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-pink-500
              ${selectedValue === option.value 
                ? 'bg-pink-500 text-white scale-110 shadow-lg' 
                : 'bg-gray-500 hover:bg-gray-400 text-gray-200 hover:scale-105'}
            `}
          >
            {option.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LikertScale;
