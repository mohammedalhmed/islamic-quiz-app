export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ShuffledQuestion extends QuizQuestion {
  shuffledOptions: string[];
  correctAnswerIndex: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "في أي غزوة كسرت رباعية الرسول ﷺ؟",
    options: ["غزوة أحد", "غزوة بدر", "غزوة تبوك", "غزوة حنين"],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "ما هي السورة التي تسمى عروس القرآن؟",
    options: ["سورة الرحمن", "سورة يس", "سورة الملك", "سورة آل عمران"],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "من هو الصحابي الذي ذكر اسمه صراحة في القرآن الكريم؟",
    options: ["زيد بن الحارثة", "عمر بن الخطاب", "أبو بكر الصديق", "عثمان بن عفان"],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "ما هي السورة التي تخلو من البسملة في بدايتها؟",
    options: ["سورة التوبة", "سورة النمل", "سورة الأنفال", "سورة الفاتحة"],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "ما هي أطول آية في القرآن الكريم؟",
    options: ["آية الدين (في سورة البقرة)", "آية الكرسي", "آخر آية في سورة الفتح", "آية الرحمن"],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "كم عدد أبواب الجنة؟",
    options: ["8 أبواب", "7 أبواب", "10 أبواب", "12 باب"],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "من هو أول من أذن في الإسلام؟",
    options: ["بلال بن رباح", "عبد الله بن زيد", "عمار بن ياسر", "عثمان بن عفان"],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "من هو الذي لقب بذي النورين؟",
    options: ["عثمان بن عفان", "عمر بن الخطاب", "علي بن أبي طالب", "أبو بكر الصديق"],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "من هي التي لقبت بذات النطاقين؟",
    options: ["أسماء بنت أبي بكر", "عائشة رضي الله عنها", "فاطمة الزهراء", "نسيبة بنت كعب"],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "ما هي السورة التي بدأت بتسبيح وانتهت بتسبيح؟",
    options: ["سورة الحشر", "سورة الطلاق", "سورة الصف", "التغابن"],
    correctAnswer: 0,
  },
];

// دالة لترتيب عشوائي للمصفوفة
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// دالة لإنشاء سؤال مع خيارات مرتبة عشوائياً
export function getShuffledQuestion(question: QuizQuestion): ShuffledQuestion {
  const shuffledOptions = shuffleArray(question.options);
  const correctAnswerIndex = shuffledOptions.indexOf(question.options[question.correctAnswer]);

  return {
    ...question,
    shuffledOptions,
    correctAnswerIndex,
  };
}
