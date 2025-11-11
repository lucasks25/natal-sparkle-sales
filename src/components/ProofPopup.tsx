import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Eye, TrendingUp, Users } from "lucide-react";

const purchases = [
  { name: "Maria Silva", city: "São Paulo", time: "5 minutos", plan: "Combo Cristão" },
  { name: "João Santos", city: "Rio de Janeiro", time: "12 minutos", plan: "Combo Família" },
  { name: "Ana Costa", city: "Belo Horizonte", time: "18 minutos", plan: "Plataforma" },
  { name: "Pedro Oliveira", city: "Brasília", time: "25 minutos", plan: "Combo Família" },
  { name: "Julia Ferreira", city: "Curitiba", time: "32 minutos", plan: "Combo Cristão" },
  { name: "Carlos Mendes", city: "Salvador", time: "40 minutos", plan: "Plataforma" },
  { name: "Fernanda Lima", city: "Fortaleza", time: "48 minutos", plan: "Combo Família" },
  { name: "Roberto Dias", city: "Porto Alegre", time: "55 minutos", plan: "Combo Cristão" },
];

export const ProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visitors, setVisitors] = useState(Math.floor(Math.random() * 20) + 15);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(10, Math.min(35, prev + change));
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const showPopup = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 10000);
      setCurrentIndex((prev) => (prev + 1) % purchases.length);
    };

    const initialTimer = setTimeout(showPopup, 10000);
    const interval = setInterval(showPopup, 35000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 left-6 z-50 max-w-md animate-slide-up">
          <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/30 shadow-2xl p-5 hover:scale-105 transition-transform duration-300 animate-glow">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-full animate-pulse">
                <ShoppingBag className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-secondary animate-bounce" />
                  <p className="font-bold text-foreground text-lg">
                    Nova Compra!
                  </p>
                </div>
                <p className="text-sm text-foreground font-semibold">
                  {purchases[currentIndex].name}
                </p>
                <p className="text-xs text-muted-foreground">
                  📍 {purchases[currentIndex].city}
                </p>
                <div className="mt-2 inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-bold">
                  {purchases[currentIndex].plan}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  ⏱️ Há {purchases[currentIndex].time}
                </p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-sm font-bold text-foreground">{visitors} pessoas</span>
                </div>
                <span className="text-xs text-muted-foreground">navegando agora</span>
              </div>
              <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary via-accent to-secondary animate-shimmer"
                  style={{ width: `${(visitors / 35) * 100}%` }}
                ></div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};
