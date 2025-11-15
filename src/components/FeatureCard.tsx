import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-[#8B5A2B]/10 text-center" dir="rtl">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4A574]/20 rounded-full mb-4">
        <Icon className="w-8 h-8 text-[#8B5A2B]" />
      </div>
      <h3 className="mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
