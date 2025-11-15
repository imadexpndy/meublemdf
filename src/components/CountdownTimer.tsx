import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [time, setTime] = useState({
    hours: 2,
    minutes: 47,
    seconds: 20
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to initial values when countdown reaches 0
          return { hours: 2, minutes: 47, seconds: 20 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 my-4" dir="rtl">
      <div className="bg-[#8B5A2B] text-white px-4 py-3 rounded-lg min-w-[70px] text-center">
        <div className="text-2xl">{String(time.seconds).padStart(2, '0')}</div>
        <div className="text-xs opacity-90">ثانية</div>
      </div>
      <div className="text-xl">:</div>
      <div className="bg-[#8B5A2B] text-white px-4 py-3 rounded-lg min-w-[70px] text-center">
        <div className="text-2xl">{String(time.minutes).padStart(2, '0')}</div>
        <div className="text-xs opacity-90">دقيقة</div>
      </div>
      <div className="text-xl">:</div>
      <div className="bg-[#8B5A2B] text-white px-4 py-3 rounded-lg min-w-[70px] text-center">
        <div className="text-2xl">{String(time.hours).padStart(2, '0')}</div>
        <div className="text-xs opacity-90">ساعة</div>
      </div>
    </div>
  );
}
