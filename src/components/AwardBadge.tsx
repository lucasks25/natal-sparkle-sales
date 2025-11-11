import { Trophy, Star } from "lucide-react";

export const AwardBadge = () => {
  return (
    <div className="fixed top-36 right-4 z-30 animate-slide-in-right">
      <div className="relative group cursor-pointer">
        {/* Badge principal */}
        <div className="bg-gradient-to-br from-accent via-primary to-secondary text-primary-foreground px-6 py-4 rounded-2xl shadow-2xl border-2 border-accent-foreground/30 transform transition-all duration-500 hover:scale-110 hover:rotate-3 animate-glow max-w-[200px]">
          <div className="flex flex-col items-center gap-2 text-center">
            <Trophy className="w-10 h-10 animate-bounce" />
            <p className="text-xs font-bold leading-tight uppercase">
              Eleita a Melhor Plataforma de Desenhos Coloridos
            </p>
            <div className="flex gap-1">
              <Star className="w-4 h-4 fill-current animate-pulse" />
              <Star className="w-4 h-4 fill-current animate-pulse" style={{ animationDelay: "0.1s" }} />
              <Star className="w-4 h-4 fill-current animate-pulse" style={{ animationDelay: "0.2s" }} />
              <Star className="w-4 h-4 fill-current animate-pulse" style={{ animationDelay: "0.3s" }} />
              <Star className="w-4 h-4 fill-current animate-pulse" style={{ animationDelay: "0.4s" }} />
            </div>
            <p className="text-lg font-black">2024/2025</p>
          </div>
        </div>

        {/* Brilhos decorativos */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full animate-ping" style={{ animationDelay: "0.5s" }}></div>
        
        {/* Efeito de brilho ao hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl transform -skew-x-12"></div>
      </div>
    </div>
  );
};
