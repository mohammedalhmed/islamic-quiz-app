import { useState, useMemo } from 'react';
import { quizQuestions, getShuffledQuestion, ShuffledQuestion } from '@/lib/quizData';
import WelcomeScreen from '@/components/WelcomeScreen';
import QuestionCard from '@/components/QuestionCard';
import ResultsScreen from '@/components/ResultsScreen';

type AppState = 'welcome' | 'quiz' | 'results';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  // إنشاء الأسئلة المرتبة عشوائياً مرة واحدة
  const shuffledQuestions = useMemo(() => {
    return quizQuestions.map(q => getShuffledQuestion(q));
  }, []);

  const handleStartQuiz = () => {
    setAppState('quiz');
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    // الانتقال للسؤال التالي أو النتائج
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setAppState('results');
    }
  };

  const handleHome = () => {
    setAppState('welcome');
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
  };

  const handleRestart = () => {
    setAppState('welcome');
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
  };

  const handleSkipQuestion = () => {
    // الانتقال للسؤال التالي دون حساب الإجابة
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setAppState('results');
    }
  };

  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {appState === 'welcome' && <WelcomeScreen onStart={handleStartQuiz} />}
      {appState === 'quiz' && (
        <div className="min-h-screen flex items-center justify-center p-4 py-12">
          <QuestionCard
            question={shuffledQuestions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onHome={handleHome}
            onSkipQuestion={handleSkipQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={quizQuestions.length}
            isLastQuestion={isLastQuestion}
          />
        </div>
      )}
      {appState === 'results' && (
        <ResultsScreen
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
          totalQuestions={quizQuestions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
