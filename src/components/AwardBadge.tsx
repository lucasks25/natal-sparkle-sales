import { Trophy } from "lucide-react";

export const AwardBadge = () => {
  return (
    <div className="hidden md:block fixed top-36 right-4 z-30 animate-fade-in">
      <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-lg px-4 py-3 max-w-[160px] hover:scale-105 transition-transform duration-300">
        <div className="flex flex-col items-center gap-2 text-center">
          <Trophy className="w-6 h-6 text-primary" />
          <p className="text-[10px] font-bold leading-tight text-foreground uppercase">
            Melhor Plataforma de Desenhos 2024/2025
          </p>
        </div>
      </div>
    </div>
  );
};
