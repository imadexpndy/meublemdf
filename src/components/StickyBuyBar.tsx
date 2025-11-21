import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import woodColorImg from '../wood color.jpg';
import whiteColorImg from '../white.png';
import brownColorImg from '../brown.png';

interface StickyBuyBarProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export function StickyBuyBar({ selectedColor, setSelectedColor }: StickyBuyBarProps) {

  const colors = [
    { id: 'wood', name: 'خشبي', image: woodColorImg, hex: '#D4A574', borderColor: '#D4A574' },
    { id: 'white', name: 'أبيض', image: whiteColorImg, hex: '#FFFFFF', borderColor: '#E5E7EB' },
    { id: 'dark', name: 'بني', image: brownColorImg, hex: '#6B4423', borderColor: '#6B4423' }
  ];

  const selectedColorData = colors.find(c => c.id === selectedColor);

  const handleBuyNow = () => {
    const formElement = document.getElementById('order-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Sticky Bottom Bar - Always Visible */}
      <div 
        className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] border-t-2 z-50 transition-colors"
        style={{ borderColor: selectedColorData?.borderColor || '#8B5A2B' }}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-2">
            {/* Color Picker */}
            <div className="flex gap-2">
              {colors.map((color) => (
                <div key={color.id} className="relative group">
                  <button
                    onClick={() => setSelectedColor(color.id)}
                    className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedColor === color.id
                        ? 'ring-2 scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{
                      borderColor: selectedColor === color.id ? color.borderColor : undefined,
                      ringColor: selectedColor === color.id ? color.borderColor : undefined
                    }}
                  >
                    <img
                      src={color.image}
                      alt={color.name}
                      className="w-full h-full object-cover"
                    />
                    {selectedColor === color.id && (
                      <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: `${color.borderColor}20` }}>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    )}
                  </button>
                  {/* Hover Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {color.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Buy Now Button */}
            <Button
              onClick={handleBuyNow}
              size="lg"
              className="flex-1 !bg-[#10B981] !text-white !py-4 !h-auto text-sm md:text-base font-bold shadow-lg !hover:bg-[#10B981]"
            >
              <ShoppingCart className="w-4 h-4" />
              <span dir="rtl" className="text-white">اطلب الآن - 1050 درهم</span>
            </Button>
          </div>
        </div>
      </div>

    </>
  );
}
