import { Shield, Truck, RotateCcw, Lock, CheckCircle2, Headphones } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    { icon: Shield, text: 'ضمان الجودة' },
    { icon: Truck, text: 'توصيل مجاني' },
    { icon: RotateCcw, text: 'إرجاع سهل' },
    { icon: Lock, text: 'دفع آمن' },
    { icon: CheckCircle2, text: 'منتج أصلي' },
    { icon: Headphones, text: 'دعم 24/7' }
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 my-8">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-border shadow-sm"
            dir="rtl"
          >
            <Icon className="w-8 h-8 text-[#8B5A2B] mb-2" />
            <p className="text-xs text-center">{badge.text}</p>
          </div>
        );
      })}
    </div>
  );
}
