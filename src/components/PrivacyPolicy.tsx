import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';

interface PrivacyPolicyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyPolicy({ open, onOpenChange }: PrivacyPolicyProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-right" dir="rtl">سياسة الخصوصية</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-right" dir="rtl">
            <section>
              <p className="text-sm text-muted-foreground mb-4">
                آخر تحديث: نوفمبر 2024
              </p>
              <p className="text-sm leading-relaxed">
                نحن في Meuble MDF نلتزم بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">1. المعلومات التي نجمعها</h3>
              <p className="text-sm leading-relaxed mb-2">
                عند تقديم طلب على موقعنا، قد نجمع المعلومات التالية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm mr-4">
                <li>الاسم الكامل</li>
                <li>البريد الإلكتروني</li>
                <li>رقم الهاتف</li>
                <li>عنوان التوصيل (المدينة والعنوان بالتفصيل)</li>
                <li>تفاصيل الطلب (اللون، الكمية)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">2. كيفية استخدام معلوماتك</h3>
              <p className="text-sm leading-relaxed mb-2">
                نستخدم المعلومات التي نجمعها للأغراض التالية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm mr-4">
                <li>معالجة وتنفيذ طلباتك</li>
                <li>التواصل معك بخصوص طلبك</li>
                <li>توصيل المنتجات إلى عنوانك</li>
                <li>تحسين خدماتنا ومنتجاتنا</li>
                <li>إرسال تحديثات حول طلبك</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">3. حماية معلوماتك</h3>
              <p className="text-sm leading-relaxed">
                نحن نتخذ تدابير أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الاستخدام غير السليم. يتم تشفير بياناتك أثناء النقل وتخزينها بشكل آمن.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">4. مشاركة المعلومات</h3>
              <p className="text-sm leading-relaxed">
                لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض تسويقية. قد نشارك معلوماتك فقط مع:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm mr-4 mt-2">
                <li>شركات التوصيل لإتمام عملية التوصيل</li>
                <li>معالجات الدفع لمعالجة المدفوعات</li>
                <li>عند الضرورة القانونية أو الامتثال للوائح</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">5. ملفات تعريف الارتباط (Cookies)</h3>
              <p className="text-sm leading-relaxed">
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك تعطيل ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك، ولكن قد يؤثر ذلك على بعض وظائف الموقع.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">6. حقوقك</h3>
              <p className="text-sm leading-relaxed mb-2">
                لديك الحق في:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm mr-4">
                <li>الوصول إلى معلوماتك الشخصية</li>
                <li>تصحيح أي معلومات غير دقيقة</li>
                <li>طلب حذف معلوماتك</li>
                <li>الاعتراض على معالجة بياناتك</li>
                <li>سحب موافقتك في أي وقت</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">7. التسويق عبر Facebook Pixel</h3>
              <p className="text-sm leading-relaxed">
                نستخدم Facebook Pixel لتتبع فعالية إعلاناتنا وتحسين تجربة المستخدم. يتم تجميع هذه البيانات وتشفيرها ولا تحتوي على معلومات شخصية محددة.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">8. الأطفال</h3>
              <p className="text-sm leading-relaxed">
                خدماتنا غير موجهة للأطفال دون سن 18 عامًا. لا نجمع عن عمد معلومات شخصية من الأطفال.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">9. التغييرات على سياسة الخصوصية</h3>
              <p className="text-sm leading-relaxed">
                قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإخطارك بأي تغييرات من خلال نشر السياسة الجديدة على هذه الصفحة.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 text-[#8B5A2B]">10. اتصل بنا</h3>
              <p className="text-sm leading-relaxed">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا:
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <p>📧 البريد الإلكتروني: contact@meublemdf.ma</p>
                <p>📱 الهاتف: +212 766 770 125</p>
                <p>🇲🇦 الموقع: المغرب</p>
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
