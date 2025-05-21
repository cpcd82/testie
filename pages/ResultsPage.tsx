
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserResult } from '../types';
import { WORLDS_DATA, CTA_TEXT } from '../constants';
import AvatarDisplay from '../components/AvatarDisplay';
import ResultChart from '../components/ResultChart';
import LoadingSpinner from '../components/LoadingSpinner';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<UserResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const resultsContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedResult = localStorage.getItem('personalityResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      // If no result, redirect to start. Maybe they landed here directly.
      navigate('/');
    }
    setIsLoading(false);
  }, [navigate]);

  const handleRetakeTest = () => {
    localStorage.removeItem('testAnswers');
    localStorage.removeItem('currentQuestionIndex');
    localStorage.removeItem('personalityResult');
    localStorage.removeItem('personalityResultId');
    navigate('/test');
  };

  const handleDownloadPdf = () => {
    if (resultsContentRef.current) {
      html2canvas(resultsContentRef.current, { 
        scale: 2, // Higher scale for better quality
        backgroundColor: null, // Use element's background
        useCORS: true // If using external images/fonts through CSS
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'pt', // points
          format: 'a4'
        });
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        
        // Calculate the aspect ratio
        const ratio = canvasWidth / canvasHeight;
        let newCanvasWidth = pdfWidth;
        let newCanvasHeight = newCanvasWidth / ratio;

        // If the new height is still too large, scale based on height instead
        if (newCanvasHeight > pdfHeight) {
          newCanvasHeight = pdfHeight;
          newCanvasWidth = newCanvasHeight * ratio;
        }
        
        // Center the image on the PDF page
        const x = (pdfWidth - newCanvasWidth) / 2;
        const y = (pdfHeight - newCanvasHeight) / 2;

        pdf.addImage(imgData, 'PNG', x, y, newCanvasWidth, newCanvasHeight);
        pdf.save(`${result?.profile.name.replace(/\s+/g, '_')}_Test_Resultado.pdf`);
      });
    }
  };
  
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!result) {
    return (
      <div className="text-center p-8 bg-slate-800 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-red-500">Error</h2>
        <p className="text-gray-300 mb-6">No se encontraron resultados. Por favor, completa el test primero.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        >
          Ir al Inicio
        </button>
      </div>
    );
  }

  const world = WORLDS_DATA[result.profile.worldId];

  return (
    <div className={`w-full p-4 sm:p-6 rounded-xl shadow-2xl ${world.backgroundColor} overflow-hidden`}>
      <div ref={resultsContentRef} className="p-2 sm:p-4 bg-opacity-50 backdrop-blur-sm rounded-lg"> {/* Inner div for PDF capture */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
          <div className="flex-shrink-0">
            <AvatarDisplay profile={result.profile} size="large" />
          </div>
          <div className="text-center md:text-left">
            <p className={`text-sm font-semibold ${world.textColor} uppercase tracking-wider`}>{world.name}</p>
            <h2 className={`text-3xl sm:text-4xl font-bold my-1 ${world.textColor}`}>{result.profile.name} <span className="text-2xl">{result.profile.avatarIcon}</span></h2>
            <p className={`text-md sm:text-lg ${world.textColor} leading-relaxed`}>{result.profile.description}</p>
          </div>
        </div>

        <ResultChart scores={result.profile.resultChartScores} profile={result.profile} />

        <div className="mt-8 bg-slate-800 p-6 rounded-lg shadow-xl">
          <h4 className="text-xl font-semibold mb-3 text-gray-100">Recomendaciones Prácticas:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {result.profile.recommendations.map((rec, index) => (
              <li key={index} className="leading-relaxed">{rec}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center bg-slate-800 p-6 rounded-lg shadow-xl">
          <p className="text-lg font-semibold text-purple-300 mb-3">{CTA_TEXT}</p>
          <button
            onClick={() => alert('Próximamente: ¡Agenda tu sesión de coaching!')}
            className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Agendar Sesión
          </button>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button
            onClick={handleDownloadPdf}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors  w-full sm:w-auto"
          >
            Descargar PDF
          </button>
        <button
          onClick={handleRetakeTest}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition-colors w-full sm:w-auto"
        >
          Realizar Test de Nuevo
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
