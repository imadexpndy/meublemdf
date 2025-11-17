import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

interface TermsConditionsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TermsConditions({ open, onOpenChange }: TermsConditionsProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-right" dir="rtl">الشروط والأحكام</DialogTitle>
          <DialogDescription className="sr-only">
            Terms and conditions for MEUBLE MDF
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[65vh] pr-4">
          <div className="space-y-6 text-right" dir="rtl">
            <section>
              <p className="text-sm text-muted-foreground mb-4">
                آخر تحديث: نوفمبر 2024
              </p>
              <p className="text-sm leading-relaxed">
                مرحبًا بك في Meuble MDF. باستخدامك لموقعنا وخدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">1. قبول الشروط</h3>
              <p className="text-sm leading-relaxed">
                باستخدام موقعنا الإلكتروني أو تقديم طلب، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">2. المنتجات والأسعار</h3>
              <p className="text-sm leading-relaxed mb-2">
                نبذل قصارى جهدنا لضمان دقة المعلومات على موقعنا:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm mr-4">
                <li>جميع الأسعار المعروضة بالدرهم المغربي (MAD)</li>
                <li>الأسعار شاملة لضريبة القيمة المضافة (إن وجدت)</li>
                <li>نحتفظ بالحق في تغيير الأسعار دون إشعار مسبق</li>
                <li>الألوان المعروضة قد تختلف قليلاً عن المنتج الفعلي</li>
                <li>المنتج كما هو موضح في الصور الرئيسية</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">3. تقديم الطلبات</h3>
              <p className="text-sm leading-relaxed mb-2">
                عند تقديم طلب على موقعنا:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm mr-4">
                <li>يجب تقديم معلومات صحيحة وكاملة</li>
                <li>سيتم الاتصال بك لتأكيد الطلب</li>
                <li>نحتفظ بالحق في رفض أو إلغاء أي طلب</li>
                <li>الطلب غير مؤكد حتى يتم التواصل معك</li>
                <li>يجب تأكيد الطلب خلال 24 ساعة</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">4. الدفع</h3>
              <p className="text-sm leading-relaxed mb-2">
                طرق الدفع المتاحة:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm mr-4">
                <li><strong>الدفع عند الاستلام:</strong> يمكنك الدفع نقدًا عند استلام المنتج</li>
                <li>يجب فحص المنتج قبل الدفع</li>
                <li>الدفع يكون بالدرهم المغربي فقط</li>
                <li>يجب دفع المبلغ الكامل عند الاستلام</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">5. التوصيل</h3>
              <p className="text-sm leading-relaxed mb-2">
                معلومات التوصيل:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm mr-4">
                <li>نوفر توصيل مجاني لجميع مدن المغرب</li>
                <li>مدة التوصيل: 3-7 أيام عمل (حسب المدينة)</li>
                <li>سيتم الاتصال بك قبل التوصيل بـ 24 ساعة</li>
                <li>يجب توفر شخص لاستلام الطلب</li>
                <li>نحتفظ بالحق في تعديل مواعيد التوصيل</li>
                <li>قد تتأخر بعض الطلبات بسبب ظروف خارجة عن إرادتنا</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">6. الفحص والاستلام</h3>
              <p className="text-sm leading-relaxed mb-2">
                عند استلام المنتج:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm mr-4">
                <li>افحص المنتج بعناية قبل الدفع</li>
                <li>تأكد من عدم وجود أضرار في الشحن</li>
                <li>تأكد من مطابقة المواصفات المطلوبة</li>
                <li>أي مشكلة يجب الإبلاغ عنها فورًا</li>
                <li>بعد الدفع والاستلام، لا يمكن الإرجاع إلا في حالات محددة</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">7. سياسة الإرجاع والاستبدال</h3>
              <p className="text-sm leading-relaxed mb-2">
                يمكن إرجاع أو استبدال المنتج في الحالات التالية فقط:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm mr-4">
                <li>وجود عيب في التصنيع</li>
                <li>تلف المنتج أثناء الشحن (مع إثبات)</li>
                <li>استلام منتج مختلف عن الطلب</li>
                <li>يجب الإبلاغ خلال 24 ساعة من الاستلام</li>
                <li>يجب أن يكون المنتج في حالته الأصلية</li>
                <li>لا يمكن الإرجاع بعد التركيب أو الاستخدام</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">8. الضمان</h3>
              <p className="text-sm leading-relaxed">
                نوفر ضمان محدود على منتجاتنا يغطي عيوب التصنيع فقط. الضمان لا يشمل:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm mr-4 mt-2">
                <li>الأضرار الناتجة عن سوء الاستخدام</li>
                <li>التركيب غير الصحيح</li>
                <li>التآكل الطبيعي</li>
                <li>الأضرار المتعمدة</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">9. المسؤولية</h3>
              <p className="text-sm leading-relaxed">
                لن نكون مسؤولين عن أي أضرار غير مباشرة أو عرضية تنتج عن استخدام منتجاتنا. مسؤوليتنا القصوى محدودة بقيمة المنتج المشترى.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">10. الملكية الفكرية</h3>
              <p className="text-sm leading-relaxed">
                جميع المحتويات على موقعنا، بما في ذلك النصوص والصور والشعارات، هي ملكية خاصة بـ Meuble MDF. لا يجوز نسخها أو استخدامها دون إذن كتابي.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">11. إلغاء الطلب</h3>
              <p className="text-sm leading-relaxed mb-2">
                يمكنك إلغاء طلبك:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm mr-4">
                <li>قبل شحن المنتج بالاتصال بنا</li>
                <li>بعد الشحن، لا يمكن الإلغاء ولكن يمكن رفض الاستلام</li>
                <li>في حالة رفض الاستلام، قد تطبق رسوم شحن</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">12. القانون المعمول به</h3>
              <p className="text-sm leading-relaxed">
                تخضع هذه الشروط والأحكام لقوانين المملكة المغربية. أي نزاع ينشأ عن هذه الشروط يخضع للاختصاص القضائي للمحاكم المغربية.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">13. تعديل الشروط</h3>
              <p className="text-sm leading-relaxed">
                نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة. استمرارك في استخدام خدماتنا بعد التعديلات يعني موافقتك عليها.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">14. اتصل بنا</h3>
              <p className="text-sm leading-relaxed">
                لأي استفسارات حول الشروط والأحكام، يرجى الاتصال بنا:
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <p>📧 البريد الإلكتروني: contact@meublemdf.ma</p>
                <p>📱 الهاتف: +212 766 770 125</p>
                <p>🇲🇦 الموقع: المغرب</p>
                <p className="mt-4 text-xs text-muted-foreground">
                  شكرًا لاختيارك Meuble MDF. نتطلع لخدمتك!
                </p>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
