import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Sparkles, Shield, Zap, Gift } from "lucide-react";

export const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
        ))}
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-2xl animate-glow">
              <Gift className="w-12 h-12 text-primary-foreground animate-bounce" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Pronto Para Transformar
            </span>
            <br />
            <span className="text-foreground">o Natal da Sua Família?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de famílias que já estão criando memórias
            inesquecíveis com Natal Color Kids! 🎄✨
          </p>

          <Button
            size="lg"
            onClick={scrollToPricing}
            className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl hover:shadow-3xl animate-glow group mb-8"
          >
            <Sparkles className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Garantir Acesso Agora
            <Sparkles className="w-6 h-6 ml-3 group-hover:animate-bounce" />
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span>Acesso Instantâneo</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-primary" />
              <span>Garantia de 7 Dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
