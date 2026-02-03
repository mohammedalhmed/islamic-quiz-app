interface ResultsScreenProps {
  correctAnswers: number;
  incorrectAnswers: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function ResultsScreen({
  correctAnswers,
  incorrectAnswers,
  totalQuestions,
  onRestart,
}: ResultsScreenProps) {
  const score = (correctAnswers / totalQuestions) * 100;
  const successBgImage =
    'https://private-us-east-1.manuscdn.com/sessionFile/7cFqLEfoBk3l0ZJZ85vJJq/sandbox/6WYOMX5kxiL9lb6H7HFItL-img-3_1770124518000_na1fn_c3VjY2Vzcy1wYXR0ZXJu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN2NGcUxFZm9CazNsMFpKWjg1dkpKcS9zYW5kYm94LzZXWU9NWDVreGlMOWxiNkg3SEZJdEwtaW1nLTNfMTc3MDEyNDUxODAwMF9uYTFmbl9jM1ZqWTJWemN5MXdZWFIwWlhKdS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mKROtzXgP7Mg3BWrVyVngW8vzlJbD6TOUYLD~AWxEOWrpjVHb6FyxUz5IWuefJAZgM~KGm7rP6sQ4UgHzTxknHzGplXYYwVtw7ckkF5Q5rdauDubSZ9CHcotpJ4Pw3BAuC8GUPVlhOd~Z4WwhNoWJBr1GWKxMbyjO8OZYwoSXS~oetJqJYrUg3dFDRgsxnbVLJ9lkbQXVI5uP7VdpB2QKccZcVBQZEdSoUOXFRdEw4PP1aBD6OV2V4MSaZUfQHQWmKrieEEYbSNCXd~6QGns8aNxg5EGfNTuUQjCyUsG3i57n1BWw2Rd3jl-PXgjzgbCa~t3NB2m0nDXwy0l~hanqw__';

  const getPerformanceMessage = () => {
    if (score === 100) return 'ممتاز! أنت عالم إسلامي حقيقي!';
    if (score >= 80) return 'رائع! معلوماتك الإسلامية قوية جداً';
    if (score >= 60) return 'جيد! استمر في تعلم المزيد';
    if (score >= 40) return 'يمكنك تحسين معلوماتك الإسلامية';
    return 'حاول مرة أخرى وركز على الأسئلة';
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${successBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-2xl animate-slide-left">
        {/* بطاقة النتائج */}
        <div className="bg-white rounded-lg shadow-2xl p-8 text-center">
          {/* العنوان */}
          <h1 className="heading-primary mb-8">انتهت المسابقة</h1>

          {/* الدرجة الكبيرة */}
          <div className="mb-8">
            <div className="inline-block">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center mb-4"
                style={{
                  background: `conic-gradient(#27AE60 0deg ${
                    score * 3.6
                  }deg, #E8E8E8 ${score * 3.6}deg 360deg)`,
                }}
              >
                <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">
                    {Math.round(score)}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* رسالة الأداء */}
          <p className="text-xl font-semibold text-primary mb-8">
            {getPerformanceMessage()}
          </p>

          {/* إحصائيات التفاصيل */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">
                {totalQuestions}
              </div>
              <div className="text-sm text-gray-600 mt-2">إجمالي الأسئلة</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-600">
                {correctAnswers}
              </div>
              <div className="text-sm text-gray-600 mt-2">إجابات صحيحة</div>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-red-600">
                {incorrectAnswers}
              </div>
              <div className="text-sm text-gray-600 mt-2">إجابات خاطئة</div>
            </div>
          </div>

          {/* شريط التقدم البصري */}
          <div className="mb-8">
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-1000"
                style={{ width: `${score}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              نسبة النجاح: {Math.round(score)}%
            </p>
          </div>

          {/* زر إعادة المحاولة */}
          <button
            onClick={onRestart}
            className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-blue-800 hover:to-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            إعادة المسابقة
          </button>

          {/* رسالة تحفيزية */}
          <p className="text-sm text-gray-500 mt-6">
            شكراً لمشاركتك في المسابقة الدينية الإسلامية
          </p>
        </div>
      </div>
    </div>
  );
}
