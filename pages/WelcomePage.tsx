
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import { UserResult } from '../types'; // UserResult is not directly used here but good to have type for LS
import { WORLDS_DATA, PERSONALITY_PROFILES } from '../constants'; // For avatar examples

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [previousResultId] = useLocalStorage<string | null>('personalityResultId', null);

  const handleStartTest = () => {
    // Clear previous partial answers if any to start fresh
    localStorage.removeItem('testAnswers');
    localStorage.removeItem('currentQuestionIndex');
    navigate('/test');
  };

  const handleViewPreviousResult = () => {
    navigate('/results');
  };

  return (
    <div className="flex flex-col items-center justify-center text-center bg-slate-800 p-8 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">¡Bienvenido/a al Test de Personalidad!</h2>
      <p className="text-lg text-gray-300 mb-6 max-w-md">
        Descubre tu arquetipo único en menos de 5 minutos. Responde con sinceridad para obtener el resultado más preciso.
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {PERSONALITY_PROFILES.slice(0, 4).map(profile => {
          const world = WORLDS_DATA[profile.worldId];
          return (
            <div key={profile.id} className={`p-3 rounded-lg ${world.backgroundColor} flex flex-col items-center shadow-md`}>
              <span className="text-3xl" style={{color: profile.avatarColor}}>{profile.avatarIcon}</span>
              <p className={`text-xs mt-1 font-semibold ${world.textColor}`}>{profile.name}</p>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleStartTest}
        className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-300"
      >
        Comenzar Test
      </button>
      {previousResultId && (
        <button
          onClick={handleViewPreviousResult}
          className="mt-4 bg-transparent hover:bg-purple-500 text-purple-400 font-semibold hover:text-white py-2 px-6 border border-purple-400 hover:border-transparent rounded-lg transition-all duration-300 ease-in-out"
        >
          Ver Mi Último Resultado
        </button>
      )}
      <p className="text-sm text-gray-400 mt-8">
        Este test está diseñado para el autoconocimiento y desarrollo personal.
      </p>
    </div>
  );
};

export default WelcomePage;
