
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUESTIONS, PERSONALITY_PROFILES } from '../constants';
import { Answers, Question, PersonalityDimension, PersonalityProfile, UserResult } from '../types';
import QuestionDisplay from '../components/QuestionDisplay';
import ProgressBar from '../components/ProgressBar';
import LoadingSpinner from '../components/LoadingSpinner';
import useLocalStorage from '../hooks/useLocalStorage';

const TestPage: React.FC = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useLocalStorage<Answers>('testAnswers', {});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useLocalStorage<number>('currentQuestionIndex', 0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // For transitions

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleAnswer = (questionId: string, value: number) => {
    setIsVisible(false); // Start fade out
    setTimeout(() => {
      setAnswers(prev => ({ ...prev, [questionId]: value }));
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        calculateResults();
      }
      setIsVisible(true); // Start fade in for next question or loading
    }, 300); // Duration of fade out animation
  };

  const calculateResults = useCallback(() => {
    setIsCalculating(true);

    // Simulate calculation delay for UX
    setTimeout(() => {
      const userDimensionScores: { [key in PersonalityDimension]: number[] } = Object.values(PersonalityDimension).reduce((acc, dim) => {
        acc[dim] = [];
        return acc;
      }, {} as { [key in PersonalityDimension]: number[] });

      QUESTIONS.forEach(q => {
        const answerValue = answers[q.id];
        if (answerValue !== undefined) {
          const score = q.isPositivePolarity ? answerValue : 8 - answerValue;
          userDimensionScores[q.dimension].push(score);
        }
      });
      
      const finalUserScores: { [key in PersonalityDimension]: number } = {} as any;
      for (const dim in userDimensionScores) {
        const scores = userDimensionScores[dim as PersonalityDimension];
        finalUserScores[dim as PersonalityDimension] = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 4; // Default to neutral 4 if no questions for dim
      }

      let bestMatchProfile: PersonalityProfile | null = null;
      let minDistance = Infinity;

      PERSONALITY_PROFILES.forEach(profile => {
        let distance = 0;
        Object.values(PersonalityDimension).forEach(dim => {
          distance += Math.abs(finalUserScores[dim] - profile.characteristicScores[dim]);
        });

        if (distance < minDistance) {
          minDistance = distance;
          bestMatchProfile = profile;
        }
      });
      
      if (bestMatchProfile) {
        const resultData: UserResult = { profile: bestMatchProfile, userDimensionScores: finalUserScores };
        localStorage.setItem('personalityResult', JSON.stringify(resultData));
        localStorage.setItem('personalityResultId', bestMatchProfile.id); // For quick check on welcome
        setIsCalculating(false);
        navigate('/results');
      } else {
        // Handle error case - though with current logic, a bestMatch should always be found
        setIsCalculating(false);
        alert("Error al calcular los resultados. Por favor, intenta de nuevo.");
        navigate('/');
      }
    }, 1500); // Calculation delay
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, navigate, setAnswers, setCurrentQuestionIndex]);


  useEffect(() => {
    // If all questions are answered (e.g. user reloads on last question and had answered it)
    if (Object.keys(answers).length === QUESTIONS.length && currentQuestionIndex === QUESTIONS.length -1 && !isCalculating) {
        const lastQuestionAnswered = answers[QUESTIONS[QUESTIONS.length-1].id] !== undefined;
        if(lastQuestionAnswered){
             calculateResults();
        }
    }
  }, [answers, currentQuestionIndex, isCalculating, calculateResults]);


  if (isCalculating) {
    return <LoadingSpinner />;
  }

  if (!currentQuestion) {
     // Should not happen if logic is correct, but as a fallback
    if (Object.keys(answers).length === QUESTIONS.length && !isCalculating) {
      calculateResults();
      return <LoadingSpinner />;
    }
    // If something went wrong, e.g. index out of bounds but not all answered.
    console.error("Current question is undefined, navigating to start.");
    navigate('/');
    return null; 
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <ProgressBar current={currentQuestionIndex + 1} total={QUESTIONS.length} />
      <div className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <QuestionDisplay
          question={currentQuestion}
          answer={answers[currentQuestion.id]}
          onAnswer={handleAnswer}
        />
      </div>
      {currentQuestionIndex > 0 && (
         <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentQuestionIndex(prev => prev -1);
                setIsVisible(true);
              }, 300);
            }}
            className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            &larr; Pregunta Anterior
          </button>
      )}
    </div>
  );
};

export default TestPage;
