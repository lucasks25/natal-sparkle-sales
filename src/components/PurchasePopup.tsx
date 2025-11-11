import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";

const purchases = [
  { name: "Maria S.", city: "SP", plan: "Combo Cristão" },
  { name: "João P.", city: "RJ", plan: "Combo Família" },
  { name: "Ana L.", city: "MG", plan: "Plataforma" },
  { name: "Pedro M.", city: "DF", plan: "Combo Família" },
  { name: "Julia R.", city: "PR", plan: "Combo Cristão" },
  { name: "Carlos A.", city: "BA", plan: "Plataforma" },
  { name: "Fernanda O.", city: "CE", plan: "Combo Família" },
  { name: "Roberto S.", city: "RS", plan: "Combo Cristão" },
];

export const PurchasePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const showPopup = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000);
      setCurrentIndex((prev) => (prev + 1) % purchases.length);
    };

    const initialTimer = setTimeout(showPopup, 15000);
    const interval = setInterval(showPopup, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-slide-up max-w-[280px]">
      <div className="bg-card/95 backdrop-blur-sm border border-secondary/30 rounded-lg shadow-lg p-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
            <ShoppingBag className="w-4 h-4 text-secondary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">
              {purchases[currentIndex].name} • {purchases[currentIndex].city}
            </p>
            <p className="text-xs text-secondary font-medium">
              {purchases[currentIndex].plan}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
