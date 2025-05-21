
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import TestPage from './pages/TestPage';
import ResultsPage from './pages/ResultsPage';
import { APP_TITLE } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <header className="my-6">
          <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">{APP_TITLE}</h1>
        </header>
        <main className="w-full max-w-2xl">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <footer className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Personality Insights. Todos los derechos reservados.</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
