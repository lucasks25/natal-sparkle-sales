import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Natal Color Kids
            </span>
          </div>
          
          <p className="text-muted-foreground mb-6 text-sm md:text-base">
            Transforme o Natal das crianças com desenhos infinitos para colorir
          </p>

          <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
            <p>© 2024 Natal Color Kids. Todos os direitos reservados.</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span>🔒 Pagamento Seguro</span>
              <span>✅ Garantia de 7 dias</span>
              <span>🎁 Acesso Instantâneo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
