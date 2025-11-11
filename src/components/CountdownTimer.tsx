import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

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
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 px-4 animate-fade-in">
      <div className="bg-destructive/90 backdrop-blur-sm text-destructive-foreground px-4 py-2 rounded-full shadow-lg border border-destructive-foreground/20">
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4" />
          <span className="font-semibold">Oferta expira em:</span>
          <div className="flex gap-1">
            <span className="font-bold tabular-nums">{String(timeLeft.hours).padStart(2, "0")}</span>
            <span>:</span>
            <span className="font-bold tabular-nums">{String(timeLeft.minutes).padStart(2, "0")}</span>
            <span>:</span>
            <span className="font-bold tabular-nums">{String(timeLeft.seconds).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
