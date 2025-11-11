import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Users } from "lucide-react";

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
        <div className="fixed bottom-6 left-6 z-50 max-w-xs animate-fade-in">
          <Card className="bg-card/95 backdrop-blur-md border border-border/50 shadow-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">
                  {purchases[currentIndex].name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {purchases[currentIndex].city} • há {purchases[currentIndex].time}
                </p>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{visitors} online</span>
              </div>
              <span className="text-xs font-medium text-secondary">
                {purchases[currentIndex].plan}
              </span>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};
