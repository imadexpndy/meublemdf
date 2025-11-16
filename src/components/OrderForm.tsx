import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';
import { Check } from 'lucide-react';
import { sendFacebookPurchaseEvent } from '../utils/facebookConversionsApi';

interface OrderFormProps {
  scrollToForm?: boolean;
  preselectedColor?: string;
}

export function OrderForm({ scrollToForm, preselectedColor }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    color: preselectedColor || '',
    quantity: '1'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // IMPORTANT: Replace this URL with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx-W3Dup10trriUqcHHbVTYNs6-JwhMqHWCw7OoQ7rOi-0Teq23IYrDmAAJ6a59LeQq/exec';

  // Handle input focus - scroll into view when keyboard appears
  const handleInputFocus = (e: any) => {
    // Small delay to let keyboard animation start
    setTimeout(() => {
      e.target.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' // Center the input in viewport
      });
    }, 300);
  };

  // Update color when preselectedColor changes
  useEffect(() => {
    if (preselectedColor) {
      setFormData(prev => ({ ...prev, color: preselectedColor }));
    }
  }, [preselectedColor]);

  const colors = [
    { id: 'wood', name: 'خشبي طبيعي', hex: '#D4A574' },
    { id: 'white', name: 'أبيض عصري', hex: '#FFFFFF' },
    { id: 'dark', name: 'بني غامق', hex: '#6B4423' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.city || !formData.address) {
      toast.error('المرجو ملء جميع الحقول', {
        duration: 3000,
      });
      return;
    }

    if (!formData.color) {
      toast.error('المرجو اختيار اللون', {
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Get color name in Arabic
      const colorName = colors.find(c => c.id === formData.color)?.name || formData.color;
      
      // Prepare data with Arabic color name
      const orderData = {
        ...formData,
        color: colorName
      };

      console.log('🚀 Sending order to Google Script:', orderData);
      console.log('📡 Script URL:', GOOGLE_SCRIPT_URL);

      // Send request in background with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout

      // Fire and forget - don't wait for response
      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
        signal: controller.signal
      })
        .then(() => {
          clearTimeout(timeoutId);
          console.log('✅ Request sent successfully');
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          if (error.name !== 'AbortError') {
            console.error('Error submitting order:', error);
          }
        });

      // Send Facebook Conversion Event
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      sendFacebookPurchaseEvent({
        phone: formData.phone,
        firstName: firstName,
        lastName: lastName,
        city: formData.city,
        currency: 'MAD',
        value: 299 * parseInt(formData.quantity), // Assuming 299 MAD per unit
        eventSourceUrl: window.location.href,
      });

      // Show success immediately (optimistic UI)
      // Since we use no-cors, we can't verify the response anyway
      setTimeout(() => {
        toast.success('تم استلام طلبك بنجاح! سنتصل بك قريباً 🎉', {
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          city: '',
          address: '',
          color: '',
          quantity: '1'
        });
        
        setIsSubmitting(false);
      }, 800); // Show success after 800ms for better UX

    } catch (error) {
      console.error('Error submitting order:', error);
      toast.error('حدث خطأ. المرجو المحاولة مرة أخرى', {
        duration: 3000,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-xl shadow-lg border border-[#8B5A2B]/10">
      <div className="space-y-2" dir="rtl">
        <Label htmlFor="name" className="text-right block">
          الاسم الكامل <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="مثال: محمد الحسني"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onFocus={handleInputFocus}
          className="text-right bg-input-background border-border"
          required
        />
      </div>

      <div className="space-y-2" dir="rtl">
        <Label htmlFor="phone" className="text-right block">
          رقم الهاتف <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="مثال: 0612345678"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          onFocus={handleInputFocus}
          className="text-right bg-input-background border-border"
          required
        />
      </div>

      <div className="space-y-2" dir="rtl">
        <Label htmlFor="city" className="text-right block">
          المدينة <span className="text-destructive">*</span>
        </Label>
        <Input
          id="city"
          type="text"
          placeholder="مثال: الدار البيضاء"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          onFocus={handleInputFocus}
          className="text-right bg-input-background border-border"
          required
        />
      </div>

      <div className="space-y-2" dir="rtl">
        <Label htmlFor="address" className="text-right block">
          العنوان بالتفصيل <span className="text-destructive">*</span>
        </Label>
        <Input
          id="address"
          type="text"
          placeholder="مثال: حي المحاميد، شارع محمد الخامس، رقم 123"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          onFocus={handleInputFocus}
          className="text-right bg-input-background border-border"
          required
        />
      </div>

      <div className="space-y-2" dir="rtl">
        <Label className="text-right block text-sm">اختر اللون (إختياري):</Label>
        <div className="flex gap-3 items-center">
          {colors.map((color) => (
            <button
              key={color.id}
              type="button"
              onClick={() => setFormData({ ...formData, color: color.id })}
              className="flex flex-col items-center gap-1"
            >
              <div
                className={`w-10 h-10 rounded-full border-2 transition-all ${
                  formData.color === color.id
                    ? 'border-[#8B5A2B] ring-2 ring-[#8B5A2B]/30 scale-110'
                    : 'border-gray-300 hover:border-[#8B5A2B]/50'
                }`}
                style={{ backgroundColor: color.hex }}
              >
                {formData.color === color.id && (
                  <div className="w-full h-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white drop-shadow-md" />
                  </div>
                )}
              </div>
              <span className="text-xs text-muted-foreground">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3" dir="rtl">
        <Label className="text-right block">الكمية</Label>
        <Input
          id="quantity"
          type="number"
          min="1"
          max="10"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          className="text-right bg-input-background border-border"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-[#10B981] hover:bg-[#059669] text-white text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span>جاري إرسال الطلب... ⏳</span>
        ) : (
          <span>أكد طلبك الآن - الدفع عند الاستلام 💳</span>
        )}
      </Button>

      <div className="grid grid-cols-3 gap-3 pt-2" dir="rtl">
        <div className="text-center text-xs">
          <div className="text-muted-foreground">ضمان الجودة</div>
        </div>
        <div className="text-center text-xs">
          <div className="text-muted-foreground">توصيل مجاني</div>
        </div>
        <div className="text-center text-xs">
          <div className="text-muted-foreground">دفع آمن</div>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-4" dir="rtl">
        🔒 معلوماتك محمية ومؤمنة بالكامل
      </p>
    </form>
  );
}