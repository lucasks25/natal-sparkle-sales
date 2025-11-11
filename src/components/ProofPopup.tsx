import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, Eye } from "lucide-react";

const purchases = [
  { name: "Joana", city: "São Paulo", time: "15 minutos" },
  { name: "Carlos", city: "Bahia", time: "2 horas" },
  { name: "Mariana", city: "Curitiba", time: "30 minutos" },
  { name: "Ricardo", city: "Rio de Janeiro", time: "1 hora" },
  { name: "Ana Paula", city: "Belo Horizonte", time: "45 minutos" },
];

export const ProofPopup = () => {
  const [showPurchase, setShowPurchase] = useState(false);
  const [showVisitors, setShowVisitors] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState(0);
  const [visitorCount] = useState(Math.floor(Math.random() * 10) + 15);

  useEffect(() => {
    // Show first notification after 10 seconds
    const initialTimer = setTimeout(() => {
      setShowVisitors(true);
    }, 10000);

    // Show purchase notifications
    const purchaseInterval = setInterval(() => {
      setShowPurchase(true);
      setTimeout(() => setShowPurchase(false), 8000);
      setCurrentPurchase((prev) => (prev + 1) % purchases.length);
    }, 30000);

    // Toggle visitor notification
    const visitorInterval = setInterval(() => {
      setShowVisitors((prev) => !prev);
    }, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(purchaseInterval);
      clearInterval(visitorInterval);
    };
  }, []);

  const purchase = purchases[currentPurchase];

  return (
    <>
      {/* Visitors notification */}
      {showVisitors && (
        <div className="fixed top-24 right-4 z-40 animate-slide-up">
          <div className="bg-card border border-border rounded-lg shadow-lg p-4 max-w-sm backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-full">
                <Eye className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {visitorCount} pessoas navegando agora!
                </p>
                <p className="text-xs text-muted-foreground">
                  Não perca sua chance
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Purchase notification */}
      {showPurchase && (
        <div className="fixed bottom-4 right-4 z-40 animate-slide-up">
          <div className="bg-card border border-border rounded-lg shadow-lg p-4 max-w-sm backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Avatar className="border-2 border-primary">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  {purchase.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <p className="text-sm font-semibold text-foreground">
                    {purchase.name} de {purchase.city}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  Comprou há {purchase.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
