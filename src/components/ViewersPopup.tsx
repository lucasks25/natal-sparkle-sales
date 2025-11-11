import { useState, useEffect } from "react";
import { Eye } from "lucide-react";

export const ViewersPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [viewers, setViewers] = useState(Math.floor(Math.random() * 15) + 12);

  useEffect(() => {
    // Atualiza número de visitantes
    const updateInterval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(8, Math.min(28, prev + change));
      });
    }, 8000);

    // Mostra e esconde o popup
    const showPopup = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 6000);
    };

    const initialTimer = setTimeout(showPopup, 5000);
    const interval = setInterval(showPopup, 25000);

    return () => {
      clearInterval(updateInterval);
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 md:bottom-4 left-4 z-50 animate-fade-in">
      <div className="bg-card/95 backdrop-blur-sm border border-primary/30 rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">
        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
        <Eye className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-semibold text-foreground">{viewers}</span>
        <span className="text-xs text-muted-foreground">online</span>
      </div>
    </div>
  );
};
