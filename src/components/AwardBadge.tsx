import { Trophy } from "lucide-react";

export const AwardBadge = () => {
  return (
    <div className="fixed top-20 md:top-36 right-4 z-30 animate-fade-in">
      <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-lg px-3 py-2 md:px-4 md:py-3 max-w-[140px] md:max-w-[160px] hover:scale-105 transition-transform duration-300">
        <div className="flex flex-col items-center gap-1 md:gap-2 text-center">
          <Trophy className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          <p className="text-[9px] md:text-[10px] font-bold leading-tight text-foreground uppercase">
            Eleito Melhor Plataforma 2024/2025
          </p>
        </div>
      </div>
    </div>
  );
};
