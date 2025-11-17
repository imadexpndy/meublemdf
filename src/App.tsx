import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { CountdownTimer } from './components/CountdownTimer';
import { OrderForm } from './components/OrderForm';
import { TrustBadges } from './components/TrustBadges';
import { FeatureCard } from './components/FeatureCard';
import { TestimonialCard } from './components/TestimonialCard';
import { FAQ } from './components/FAQ';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { StickyBuyBar } from './components/StickyBuyBar';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';
import mainImageSrc from './main image.png';
import woodColorImg from './wood color.jpg';
import whiteColorImg from './white.png';
import brownColorImg from './brown.png';
import gallery1 from './51DIqM9wGRL._AC_UF1000,1000_QL80_.jpg';
import gallery2 from './WhatsApp-Image-2025-05-11-at-06.29.51_c6474f63.jpg';
import logoImg from './mdf logo@4x.png';
import { 
  Maximize2, 
  Award, 
  Sparkles, 
  TruckIcon,
  ChevronDown,
  MessageCircle,
  Users,
  Star,
  Package,
  CreditCard,
  X
} from 'lucide-react';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(mainImageSrc);
  const [selectedColor, setSelectedColor] = useState('wood');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsConditions, setShowTermsConditions] = useState(false);

  const colorGallery = [
    {
      id: 'wood',
      name: 'خشبي طبيعي',
      image: woodColorImg
    },
    {
      id: 'white',
      name: 'أبيض عصري',
      image: whiteColorImg
    },
    {
      id: 'brown',
      name: 'بني غامق',
      image: brownColorImg
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('order-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleImageClick = (image: string) => {
    setMainImage(image);
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  // Track form visibility with Intersection Observer
  useEffect(() => {
    const formSections = document.querySelectorAll('#order-form');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsFormVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 } // Form is considered visible if 30% is in viewport
    );

    formSections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24">
      <Toaster position="top-center" richColors />
      
      {/* Logo Header */}
      <div className="bg-white border-b border-border py-2">
        <div className="container mx-auto px-4 flex justify-center">
          <img 
            src={logoImg} 
            alt="MEUBLE MDF Logo" 
            className="h-10 md:h-12 object-contain"
          />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#8B5A2B]/5 to-background pb-8">
        <div className="container mx-auto px-4 pt-4">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl md:text-5xl mb-2" dir="rtl" style={{ fontWeight: 900 }}>
              مكتب قابل للطي - مصنوع من خشب MDF
            </h1>
            <Badge className="mt-3 bg-[#10B981] text-white border-0">
              ✅ التوصيل مجاني لجميع أنحاء المغرب
            </Badge>
          </div>

          {/* Product Image */}
          <div className="max-w-2xl mx-auto mb-6 relative">
            <div className="absolute top-4 left-4 bg-destructive text-white px-4 py-2 rounded-lg z-10 shadow-lg">
              <span>-31%</span>
            </div>
            <ImageWithFallback
              src={mainImage}
              alt="مكتب قابل للطي"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* Color Gallery */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="grid grid-cols-3 gap-3 px-4">
              {colorGallery.map((color) => (
                <button
                  key={color.id}
                  onClick={() => handleImageClick(color.image)}
                  className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border-2 ${
                    mainImage === color.image
                      ? 'border-[#8B5A2B] ring-2 ring-[#8B5A2B]'
                      : 'border-border hover:border-[#8B5A2B]/50'
                  }`}
                >
                  <ImageWithFallback
                    src={color.image}
                    alt={color.name}
                    className="w-full h-24 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                    <p className="text-white text-xs text-center">{color.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Pitch */}
          <div className="text-center mb-6" dir="rtl">
            <p className="text-lg mb-4">
              المكتب القابل للطي - الحل الذكي للمساحات الصغيرة! جودة ممتازة وسعر تنافسي
            </p>
            <p className="text-lg text-muted-foreground">
              الحل المثالي للشقق الصغيرة والبيوت العصرية
            </p>
            <div className="mt-4 mb-4 inline-block bg-gradient-to-r from-[#8B5A2B]/10 to-[#10B981]/10 px-6 py-3 rounded-lg border-2 border-[#8B5A2B]/30">
              <p className="text-base font-semibold text-[#8B5A2B]">
                📏 المقاسات: 120cm × 75cm × 55cm
              </p>
            </div>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-[#10B981]">
                <span>✓</span>
                <span>مقاوم للرطوبة</span>
              </div>
              <div className="flex items-center gap-1 text-[#10B981]">
                <span>✓</span>
                <span>سهل التخزين</span>
              </div>
              <div className="flex items-center gap-1 text-[#10B981]">
                <span>✓</span>
                <span>عملي جداً</span>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto mb-6 border-2 border-[#8B5A2B]">
            <div className="text-center" dir="rtl">
              <div className="text-muted-foreground line-through mb-2">
                السعر العادي: 1499 درهم
              </div>
              <div className="text-4xl mb-2 text-[#8B5A2B]">
                1029 درهم فقط
              </div>
              <div className="text-destructive mb-4">
                🔥 وفر 470 درهم (-31%)
              </div>
              <div className="text-sm text-muted-foreground">
                شامل التوصيل المجاني 🚚 + ضمان الجودة ✅
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-6">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-[#C17F3E] hover:bg-[#8B5A2B] text-white px-8 py-6 text-lg shadow-xl animate-pulse"
            >
              اطلب الآن - الدفع عند الاستلام
            </Button>
            <div className="flex items-center justify-center gap-6 mt-4 text-sm" dir="rtl">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[#8B5A2B]" />
                <span>الدفع عند التسليم</span>
              </div>
              <div className="flex items-center gap-2">
                <TruckIcon className="w-5 h-5 text-[#8B5A2B]" />
                <span>توصيل سريع</span>
              </div>
            </div>
          </div>

          {/* Urgency - Limited Offer */}
          <div className="bg-gradient-to-r from-destructive/10 via-[#F59E0B]/10 to-destructive/10 rounded-xl p-6 mb-6">
            <h3 className="text-center mb-2" dir="rtl">
              ⚡ عرض محدود - اطلب الآن
            </h3>
            <p className="text-center text-sm text-muted-foreground mb-2" dir="rtl">
              ⏰ العرض ينتهي خلال
            </p>
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-4 py-8">
        <TrustBadges />
      </section>

      {/* Order Form Section 1 */}
      <section id="order-form" className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6" dir="rtl">
            <h2 className="text-3xl md:text-4xl mb-2" style={{ fontWeight: 900 }}>اطلب المكتب ديالك دابا! 🎯</h2>
            <p className="text-muted-foreground">
              الدفع عند الاستلام - توصيل مجاني لجميع المدن
            </p>
          </div>
          <OrderForm preselectedColor={selectedColor} />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10" dir="rtl">
            <h2 className="mb-3">علاش تختار المكتب ديالنا؟</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <FeatureCard
              icon={Maximize2}
              title="قابل للطي بسهولة"
              description="كيتطوى فثواني معدودة ويتخزن فأي مكان ضيق"
            />
            <FeatureCard
              icon={Award}
              title="خشب MDF عالي الجودة"
              description="مقاوم للرطوبة ويتحمل حتى 30 كيلو"
            />
            <FeatureCard
              icon={Sparkles}
              title="تصميم عصري وأنيق"
              description="يناسب جميع أنواع الديكور المنزلي"
            />
            <FeatureCard
              icon={TruckIcon}
              title="توصيل سريع 1-2 أيام"
              description="نوصلوه ليك حتى لباب الدار ديالك"
            />
          </div>

          <div className="text-center mt-10">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-[#8B5A2B] hover:bg-[#6B4423] text-white px-8 py-6"
            >
              احصل على المكتب الآن 🎁
            </Button>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-10" dir="rtl">
          <h2 className="mb-3">شاهد المكتب من كل الزوايا</h2>
          <p className="text-muted-foreground">
            تصميم أنيق ومتعدد الاستخدامات
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {colorGallery.map(color => (
            <div key={color.id} className="relative group">
              <ImageWithFallback
                src={color.image}
                alt={color.name}
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform cursor-pointer"
                onClick={() => handleImageClick(color.image)}
              />
              <p className="text-center mt-3 text-sm" dir="rtl">{color.name}</p>
            </div>
          ))}
          
          {/* Additional Gallery Images */}
          <div className="relative group">
            <ImageWithFallback
              src={gallery1}
              alt="المكتب القابل للطي - عرض مفصل"
              className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform cursor-pointer"
              onClick={() => handleImageClick(gallery1)}
            />
            <p className="text-center mt-3 text-sm" dir="rtl">عرض مفصل</p>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="bg-gradient-to-r from-[#8B5A2B] to-[#C17F3E] py-12">
        <div className="container mx-auto px-4 text-center" dir="rtl">
          <h2 className="text-white mb-3">✨ عرض محدود - خصم خاص اليوم فقط</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            اطلب الآن واستفد من التوصيل المجاني + ضمان الجودة
          </p>
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-white text-[#8B5A2B] hover:bg-white/90 px-8 py-6 shadow-xl"
          >
            اطلب الآن 🚀
          </Button>
        </div>
      </section>

      {/* Video Section - Enhanced */}
      <section className="bg-gradient-to-br from-[#8B5A2B]/5 via-white to-[#10B981]/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header with Badges */}
            <div className="text-center mb-8" dir="rtl">
              <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] px-4 py-2 rounded-full mb-4">
                <span className="animate-pulse">🔴</span>
                <span className="font-bold">شاهد الفيديو</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                شوف كيفاش المكتب كيتطوى في ثانية واحدة! ⏱️
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                فيديو قصير يوريك سهولة الاستخدام والتخزين - ما تحتاجش لأي أدوات! 
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Video Player - Takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#8B5A2B]/20 bg-gradient-to-br from-[#8B5A2B]/10 to-[#D4A574]/10 p-3">
                  <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <iframe
                      src="https://player.vimeo.com/video/1137284339?badge=0&autopause=0&player_id=0&app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      className="rounded-lg"
                      title="Bureau Pliable - Demonstration"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Benefits Sidebar */}
              <div className="space-y-4">
                {/* Urgency Box */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 shadow-lg border-2 border-red-200" dir="rtl">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">⚡</span>
                    <h4 className="font-bold text-red-600">عرض محدود!</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    -31% غادي يخلص قريب - بقا معانا غير عدد محدود!
                  </p>
                  <Button
                    size="lg"
                    onClick={scrollToForm}
                    className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-6 text-base shadow-xl animate-pulse"
                  >
                    <span className="flex items-center justify-center gap-2">
                      عجبني! باغي نطلبو الآن 🔥
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#8B5A2B]/10 to-[#D4A574]/10 p-6 rounded-xl text-center border border-[#8B5A2B]/20">
            <Users className="w-10 h-10 text-[#8B5A2B] mx-auto mb-2" />
            <div className="text-3xl mb-1" dir="rtl">+500</div>
            <div className="text-sm text-muted-foreground" dir="rtl">عميل راضي</div>
          </div>
          <div className="bg-gradient-to-br from-[#8B5A2B]/10 to-[#D4A574]/10 p-6 rounded-xl text-center border border-[#8B5A2B]/20">
            <Star className="w-10 h-10 text-[#F59E0B] mx-auto mb-2" />
            <div className="text-3xl mb-1" dir="rtl">⭐ 4.9</div>
            <div className="text-sm text-muted-foreground" dir="rtl">تقييم ممتاز</div>
          </div>
          <div className="bg-gradient-to-br from-[#8B5A2B]/10 to-[#D4A574]/10 p-6 rounded-xl text-center border border-[#8B5A2B]/20">
            <TruckIcon className="w-10 h-10 text-[#8B5A2B] mx-auto mb-2" />
            <div className="text-3xl mb-1" dir="rtl">🚚</div>
            <div className="text-sm text-muted-foreground" dir="rtl">توصيل سريع</div>
          </div>
          <div className="bg-gradient-to-br from-[#8B5A2B]/10 to-[#D4A574]/10 p-6 rounded-xl text-center border border-[#8B5A2B]/20">
            <Package className="w-10 h-10 text-[#8B5A2B] mx-auto mb-2" />
            <div className="text-3xl mb-1" dir="rtl">💳</div>
            <div className="text-sm text-muted-foreground" dir="rtl">دفع آمن</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10" dir="rtl">
            <h2 className="mb-3">الأسئلة الشائعة</h2>
            <p className="text-muted-foreground">
              إجابات على جميع الأسئلة اللي ممكن تكون عندك
            </p>
          </div>
          <FAQ />
          <div className="text-center mt-8 p-6 bg-gradient-to-r from-[#8B5A2B]/5 to-[#D4A574]/5 rounded-xl border border-[#8B5A2B]/20">
            <p className="mb-4" dir="rtl">عندك سؤال آخر?</p>
            <p className="text-sm text-muted-foreground mb-4" dir="rtl">
              تواصل معانا على الواتساب وغادي نجاوبوك مباشرة
            </p>
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
              onClick={() => window.open('https://wa.me/212766770125', '_blank')}
            >
              <MessageCircle className="mr-2" />
              📱 تواصل عبر واتساب
            </Button>
          </div>
        </div>
      </section>

      {/* Final Order Form Section */}
      <section className="bg-gradient-to-b from-background to-[#8B5A2B]/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-destructive/10 via-[#F59E0B]/10 to-destructive/10 rounded-xl p-6 mb-6">
              <h3 className="text-center mb-2" dir="rtl">
                ⚡ عرض محدود - اطلب الآن
              </h3>
              <p className="text-center text-sm text-muted-foreground mb-2" dir="rtl">
                ⏰ العرض ينتهي خلال
              </p>
              <CountdownTimer />
            </div>

            <div className="text-center mb-6" dir="rtl">
              <h2 className="text-3xl md:text-4xl mb-2" style={{ fontWeight: 900 }}>اطلب المكتب ديالك دابا! 🎯</h2>
              <p className="text-muted-foreground">
                الدفع عند الاستلام - توصيل مجاني لجميع المدن
              </p>
            </div>

            {/* Pricing Reminder */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-2 border-[#8B5A2B]">
              <div className="text-center" dir="rtl">
                <div className="text-muted-foreground line-through mb-2">
                  السعر العادي: 1499 درهم
                </div>
                <div className="text-4xl mb-2 text-[#8B5A2B]">
                  1029 درهم فقط
                </div>
                <div className="text-destructive mb-4">
                  🔥 وفر 470 درهم (-31%)
                </div>
                <div className="text-sm text-muted-foreground">
                  شامل التوصيل المجاني 🚚 + ضمان الجودة ✅
                </div>
              </div>
            </div>

            <OrderForm preselectedColor={selectedColor} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2520] text-white py-10 relative z-[60]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div dir="rtl">
              <h3 className="mb-4 text-[#D4A574]">Meuble MDF</h3>
              <p className="text-sm text-white/80">
                نوفر لك أفضل الحلول العملية للمساحات الصغيرة. جودة عالية وأسعار تنافسية.
              </p>
            </div>
            <div dir="rtl" className="relative z-10">
              <h4 className="mb-4 text-[#D4A574]">روابط سريعة</h4>
              <ul className="space-y-2 text-sm text-white/80 relative z-10">
                <li className="relative z-10">
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Privacy Policy clicked!');
                      setShowPrivacyPolicy(true);
                    }}
                    className="hover:text-[#D4A574] hover:underline cursor-pointer transition-all text-right w-full bg-transparent border-none p-0 font-inherit text-white/80 pointer-events-auto relative z-10 block"
                  >
                    سياسة الخصوصية
                  </button>
                </li>
                <li className="relative z-10">
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Terms & Conditions clicked!');
                      setShowTermsConditions(true);
                    }}
                    className="hover:text-[#D4A574] hover:underline cursor-pointer transition-all text-right w-full bg-transparent border-none p-0 font-inherit text-white/80 pointer-events-auto relative z-10 block"
                  >
                    الشروط والأحكام
                  </button>
                </li>
                <li className="hover:text-[#D4A574] cursor-pointer transition-colors">اتصل بنا</li>
              </ul>
            </div>
            <div dir="rtl">
              <h4 className="mb-4 text-[#D4A574]">تواصل معنا</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+212 766 770 125</li>
                <li>contact@meublemdf.ma</li>
                <li>المغرب 🇲🇦</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="text-center mb-6" dir="rtl">
              <h4 className="mb-4 text-[#D4A574]">🇲🇦 نخدمو فجميع مدن المغرب</h4>
              <p className="text-sm text-white/80">
                الدار البيضاء • الرباط • مراكش • فاس • طنجة • أكادير • وجميع المدن
              </p>
            </div>
            <p className="text-center text-sm text-white/60" dir="rtl">
              © 2024 Bureau Pliable Maroc - Meuble MDF. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Buy Bar - Hide when form is visible */}
      {!isFormVisible && (
        <StickyBuyBar selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      )}

      {/* Privacy Policy Modal */}
      <PrivacyPolicy open={showPrivacyPolicy} onOpenChange={setShowPrivacyPolicy} />
      
      {/* Terms and Conditions Modal */}
      <TermsConditions open={showTermsConditions} onOpenChange={setShowTermsConditions} />

      {/* Full-Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[101]"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full size view"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e: any) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}