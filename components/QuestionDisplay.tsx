
import React from 'react';
import { Question } from '../types';
import LikertScale from './LikertScale';

interface QuestionDisplayProps {
  question: Question;
  answer: number | undefined;
  onAnswer: (questionId: string, value: number) => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question, answer, onAnswer }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-2xl mb-6 transition-opacity duration-500 ease-in-out">
      <p className="text-lg sm:text-xl font-semibold text-center text-gray-100 mb-6">{question.text}</p>
      <LikertScale 
        selectedValue={answer} 
        onChange={(value) => onAnswer(question.id, value)} 
      />
    </div>
  );
};

export default QuestionDisplay;
