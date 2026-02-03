import { useState, useEffect } from 'react';
import { ShuffledQuestion } from '@/lib/quizData';
import { Home, ChevronRight, Lightbulb, Users, SkipForward } from 'lucide-react';

interface QuestionCardProps {
  question: ShuffledQuestion;
  onAnswer: (isCorrect: boolean) => void;
  onHome: () => void;
  onSkipQuestion: () => void;
  questionNumber: number;
  totalQuestions: number;
  isLastQuestion: boolean;
}

type AnswerState = 'idle' | 'correct' | 'incorrect';

type HelpState = 'none' | 'remove_two' | 'friend_hint' | 'skip';

export default function QuestionCard({
  question,
  onAnswer,
  onHome,
  onSkipQuestion,
  questionNumber,
  totalQuestions,
  isLastQuestion,
}: QuestionCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [removedIndices, setRemovedIndices] = useState<Set<number>>(new Set());
  const [friendHintActive, setFriendHintActive] = useState(false);
  const [usedHelps, setUsedHelps] = useState<Set<HelpState>>(new Set());

  // إعادة تعيين الحالة عند تغيير السؤال
  useEffect(() => {
    setSelectedIndex(null);
    setAnswerState('idle');
    setRemovedIndices(new Set());
    setFriendHintActive(false);
    setUsedHelps(new Set());
  }, [question.id]);

  const handleSelectAnswer = (index: number) => {
    if (answerState !== 'idle' || removedIndices.has(index)) return;

    setSelectedIndex(index);
    const isCorrect = index === question.correctAnswerIndex;
    setAnswerState(isCorrect ? 'correct' : 'incorrect');
  };

  const handleRemoveTwoAnswers = () => {
    if (usedHelps.has('remove_two') || answerState !== 'idle') return;

    const availableIndices = question.shuffledOptions
      .map((_, i) => i)
      .filter(i => i !== question.correctAnswerIndex && !removedIndices.has(i));

    if (availableIndices.length >= 2) {
      const toRemove = new Set<number>();
      for (let i = 0; i < 2 && availableIndices.length > 0; i++) {
        const randomIdx = Math.floor(Math.random() * availableIndices.length);
        toRemove.add(availableIndices[randomIdx]);
        availableIndices.splice(randomIdx, 1);
      }
      setRemovedIndices(new Set([...removedIndices, ...toRemove]));
      setUsedHelps(new Set([...usedHelps, 'remove_two']));
    }
  };

  const handleFriendHint = () => {
    if (usedHelps.has('friend_hint') || answerState !== 'idle') return;
    setFriendHintActive(true);
    setUsedHelps(new Set([...usedHelps, 'friend_hint']));
  };

  const handleSkipQuestion = () => {
    if (usedHelps.has('skip') || answerState !== 'idle') return;
    setUsedHelps(new Set([...usedHelps, 'skip']));
    onSkipQuestion();
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      const isCorrect = selectedIndex === question.correctAnswerIndex;
      onAnswer(isCorrect);
    }
  };

  const cardBgImage =
    'https://private-us-east-1.manuscdn.com/sessionFile/7cFqLEfoBk3l0ZJZ85vJJq/sandbox/6WYOMX5kxiL9lb6H7HFItL-img-2_1770124505000_na1fn_cXVlc3Rpb24tY2FyZC1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN2NGcUxFZm9CazNsMFpKWjg1dkpKcS9zYW5kYm94LzZXWU9NWDVreGlMOWxiNkg3SEZJdEwtaW1nLTJfMTc3MDEyNDUwNTAwMF9uYTFmbl9jWFZsYzNScGIyNHRZMkZ5WkMxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=l5gI8j24kDNtoptQdIV1h9xWOgqwvpmrBWxkr87Ak4GKZbOBz0UidGICjKLUWvBkEgGVDeLf95CPCFQ6Mfg3mhv4CoNLStjTSZEs5QOuaX6oh9dZzXW2Nd4p5mH6wOho1WpRemmHfxMd1rhlDRfcmJFdlKu7xaaXWDCG81fGOcjz3mCacW7sO2sbIAvMJwiLkq2B4dbV4YCJbkiSFsLurbGIWed0MRoPJdqURkNnaYc5c60itYmJdwZP8E4zJ2ivyluSfI1mxsdYfTodza1dTsfrz6LzX-jaf~VN9vsD4YNMUlHvRp4NWyvaITbkKNHF4jShVnaXG24cyVnytl0BMw__';

  return (
    <div className="w-full max-w-2xl mx-auto animate-slide-right">
      {/* شريط التحكم العلوي */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onHome}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-primary font-semibold transition-all duration-300"
          title="العودة للبداية"
        >
          <Home size={20} />
          <span className="hidden sm:inline">البداية</span>
        </button>

        <div className="flex justify-between items-center flex-1 mx-4">
          <span className="text-sm font-semibold text-primary">
            السؤال {questionNumber} من {totalQuestions}
          </span>
          <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-secondary to-primary transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        <div className="text-sm font-semibold text-primary">
          {Math.round((questionNumber / totalQuestions) * 100)}%
        </div>
      </div>

      {/* بطاقة السؤال الرئيسية */}
      <div
        className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary"
        style={{
          backgroundImage: `url(${cardBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* نص السؤال */}
        <h2 className="text-2xl font-bold text-primary mb-8 text-right leading-relaxed">
          {question.question}
        </h2>

        {/* خيارات الإجابة */}
        <div className="space-y-4">
          {question.shuffledOptions.map((option, index) => {
            // إذا تم حذف هذا الخيار، لا نعرضه
            if (removedIndices.has(index)) {
              return null;
            }

            let bgColor = 'bg-white hover:bg-gray-50';
            let borderColor = 'border-2 border-gray-300';
            let textColor = 'text-primary';
            let animationClass = '';

            if (selectedIndex === index) {
              if (answerState === 'correct') {
                bgColor = 'bg-green-50';
                borderColor = 'border-2 border-green-500 animate-pulse-glow';
                textColor = 'text-green-700';
              } else if (answerState === 'incorrect') {
                bgColor = 'bg-red-50 animate-shake';
                borderColor = 'border-2 border-red-500';
                textColor = 'text-red-700';
              }
            } else if (
              answerState === 'incorrect' &&
              index === question.correctAnswerIndex
            ) {
              bgColor = 'bg-green-50';
              borderColor = 'border-2 border-green-500';
              textColor = 'text-green-700';
            }

            // إضافة حركة دوران للإجابة الصحيحة عند تفعيل تلميح الصديق
            if (friendHintActive && index === question.correctAnswerIndex) {
              animationClass = 'animate-spin-highlight';
              bgColor = 'bg-yellow-50';
              borderColor = 'border-2 border-yellow-400 animate-pulse';
            }

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={answerState !== 'idle'}
                className={`w-full p-4 rounded-lg text-right transition-all duration-300 ${bgColor} ${borderColor} ${textColor} font-semibold text-lg cursor-pointer disabled:cursor-not-allowed ${animationClass}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* رسالة التغذية الراجعة */}
        {answerState !== 'idle' && (
          <div
            className={`mt-6 p-4 rounded-lg text-center font-bold text-lg transition-all duration-300 ${
              answerState === 'correct'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {answerState === 'correct' ? '✓ إجابة صحيحة!' : '✗ إجابة خاطئة'}
          </div>
        )}

        {/* رسالة تلميح الصديق */}
        {friendHintActive && answerState === 'idle' && (
          <div className="mt-6 p-4 rounded-lg bg-blue-100 text-blue-700 text-center font-semibold">
            💡 يقول صديقك: انظر للخيار المميز بالأصفر!
          </div>
        )}

        {/* أزرار المساعدة */}
        {answerState === 'idle' && (
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {/* زر حذف إجابتين */}
            <button
              onClick={handleRemoveTwoAnswers}
              disabled={usedHelps.has('remove_two')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                usedHelps.has('remove_two')
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-red-100 hover:bg-red-200 text-red-700 hover:shadow-lg'
              }`}
              title="حذف إجابتين خاطئتين"
            >
              <SkipForward size={18} />
              <span className="hidden sm:inline">حذف إجابتين</span>
            </button>

            {/* زر الاستعانة بصديق */}
            <button
              onClick={handleFriendHint}
              disabled={usedHelps.has('friend_hint')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                usedHelps.has('friend_hint')
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-100 hover:bg-blue-200 text-blue-700 hover:shadow-lg'
              }`}
              title="استعانة بصديق - تلميح"
            >
              <Users size={18} />
              <span className="hidden sm:inline">استعانة بصديق</span>
            </button>

            {/* زر تغيير السؤال */}
            <button
              onClick={handleSkipQuestion}
              disabled={usedHelps.has('skip')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                usedHelps.has('skip')
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-yellow-100 hover:bg-yellow-200 text-yellow-700 hover:shadow-lg'
              }`}
              title="تغيير السؤال"
            >
              <Lightbulb size={18} />
              <span className="hidden sm:inline">تغيير السؤال</span>
            </button>
          </div>
        )}

        {/* زر المتابعة */}
        {answerState !== 'idle' && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-blue-700 hover:from-blue-800 hover:to-blue-900 text-white font-bold transition-all duration-300 transform hover:scale-105"
            >
              <span>{isLastQuestion ? 'عرض النتائج' : 'السؤال التالي'}</span>
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
