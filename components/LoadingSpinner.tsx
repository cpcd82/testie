
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      <p className="ml-3 text-lg">Calculando resultados...</p>
    </div>
  );
};

export default LoadingSpinner;
