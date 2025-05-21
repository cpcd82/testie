
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full bg-gray-600 rounded-full h-4 mb-6 shadow-inner">
      <div
        className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
      <p className="text-xs text-center mt-1 text-gray-300">{`Pregunta ${current} de ${total}`}</p>
    </div>
  );
};

export default ProgressBar;
