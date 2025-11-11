import { useState, useEffect } from "react";
import { Clock, Zap } from "lucide-react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Define o tempo final (24 horas a partir de agora)
    const endTime = new Date();
    endTime.setHours(23, 59, 59, 999);

    const updateTimer = () => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-20 left-0 right-0 z-40 flex justify-center px-4 animate-slide-up">
      <div className="bg-gradient-to-r from-destructive via-destructive/90 to-destructive text-destructive-foreground px-6 py-3 rounded-full shadow-2xl border-2 border-destructive-foreground/20 animate-pulse max-w-2xl w-full">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Zap className="w-5 h-5 animate-bounce" />
          <span className="font-bold text-sm md:text-base">
            OFERTA EXPIRA EM:
          </span>
          <div className="flex gap-2 items-center">
            <div className="bg-destructive-foreground/20 px-3 py-1 rounded-lg backdrop-blur-sm">
              <span className="text-xl md:text-2xl font-bold tabular-nums">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-xs block">HORAS</span>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="bg-destructive-foreground/20 px-3 py-1 rounded-lg backdrop-blur-sm">
              <span className="text-xl md:text-2xl font-bold tabular-nums">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-xs block">MIN</span>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="bg-destructive-foreground/20 px-3 py-1 rounded-lg backdrop-blur-sm">
              <span className="text-xl md:text-2xl font-bold tabular-nums">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-xs block">SEG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
