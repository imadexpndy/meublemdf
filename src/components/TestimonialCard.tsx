import { Star, Check } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  city: string;
  text: string;
}

export function TestimonialCard({ name, city, text }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-[#8B5A2B]/10" dir="rtl">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>
      <p className="mb-4 text-foreground">{text}</p>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#D4A574] rounded-full flex items-center justify-center">
              <span className="text-white">{name.charAt(0)}</span>
            </div>
            <div>
              <p className="text-sm">{name}</p>
              <p className="text-xs text-muted-foreground">{city}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-[#10B981]">
          <Check className="w-4 h-4" />
          <span>عميل موثق</span>
        </div>
      </div>
    </div>
  );
}
