interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const heroBgImage =
    'https://private-us-east-1.manuscdn.com/sessionFile/7cFqLEfoBk3l0ZJZ85vJJq/sandbox/6WYOMX5kxiL9lb6H7HFItL-img-1_1770124519000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN2NGcUxFZm9CazNsMFpKWjg1dkpKcS9zYW5kYm94LzZXWU9NWDVreGlMOWxiNkg3SEZJdEwtaW1nLTFfMTc3MDEyNDUxOTAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oev6SZclWhpYmknwy7IBop5o7SQ-NYo-mmTgNFndZoQg9rfBNGuLhm4sepNnmV5ILHTVh0Hoyla9l2btfq~uWtQZaE2kDbSg0Yy6PPFBRz5WGdcCUOfpxeuu-QUnFsvjDpjyf4yBNPg8yPkNZzAswKjdi13dYreHgG-ovhX-HmRovOi21hm3ymo0hKPG8g9e-2o5irevHElr0PoLYZ~17Vv8w~uPNdRgCZVxVwe4j5pMbeA6ju5TRd21MhXKExWwHbMM0m2hXXGhYhP8Y34tuEiBf5urEYeP~PwfLc9kvMOfBmlRdpLUa-rGEBBzizgiXMFqgeAgoJTWDyUKnRgIsg__';

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${heroBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-2xl animate-slide-right">
        {/* بطاقة البداية */}
        <div className="bg-white rounded-lg shadow-2xl p-8 text-center">
          {/* العنوان الرئيسي */}
          <h1 className="heading-primary mb-4">مسابقة دينية إسلامية</h1>

          {/* الوصف */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            اختبر معلوماتك الإسلامية من خلال هذه المسابقة التفاعلية المميزة
          </p>

          {/* معلومات المسابقة */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-3xl font-bold text-primary">10</div>
                <div className="text-sm text-gray-600 mt-2">أسئلة</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-gray-600 mt-2">تفاعلي</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              كل إجابة صحيحة تحصل على تغذية راجعة فورية
            </p>
          </div>

          {/* الميزات */}
          <div className="mb-8 text-right space-y-3">
            <div className="flex items-center justify-end gap-3">
              <span className="text-gray-700">تصحيح فوري للإجابات</span>
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                ✓
              </div>
            </div>
            <div className="flex items-center justify-end gap-3">
              <span className="text-gray-700">عرض النتيجة النهائية</span>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                📊
              </div>
            </div>
            <div className="flex items-center justify-end gap-3">
              <span className="text-gray-700">إمكانية إعادة المحاولة</span>
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">
                🔄
              </div>
            </div>
          </div>

          {/* زر البداية */}
          <button
            onClick={onStart}
            className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-blue-800 hover:to-blue-900 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            ابدأ المسابقة الآن
          </button>

          {/* رسالة سفلية */}
          <p className="text-xs text-gray-500 mt-6">
            عمل الطالبة: زينب كارم الحضرمي | تحت إشراف الدكتور: ماجد الضراغمي
          </p>
        </div>
      </div>
    </div>
  );
}
