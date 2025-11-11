import { Button } from "@/components/ui/button";
import { Snowflake, Sparkles, Gift } from "lucide-react";

export const HeroSection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 md:pt-20">
      {/* Animated snowflakes - menos em mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Snowflake
            key={i}
            className="absolute text-primary/20 animate-snowfall hidden md:block"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              fontSize: `${1 + Math.random() * 1.5}rem`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated character - menor em mobile */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="relative animate-float">
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent via-primary to-secondary flex items-center justify-center shadow-2xl animate-glow">
                <Sparkles className="w-12 h-12 md:w-20 md:h-20 text-primary-foreground animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center animate-bounce">
                <Gift className="w-4 h-4 md:w-6 md:h-6 text-secondary-foreground" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Transforme o Natal
            </span>
            <br />
            <span className="text-foreground">das Crianças com</span>
            <br />
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Desenhos Infinitos!
            </span>
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto animate-slide-up px-2">
            Acesso ilimitado a centenas de desenhos natalinos para colorir.
            Diversão garantida para toda a família! 🎄✨
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-slide-up px-4">
            <Button
              size="lg"
              onClick={scrollToPricing}
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl animate-glow group"
            >
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:animate-bounce" />
              Começar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("benefits");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-2 hover:bg-primary/5"
            >
              Ver Benefícios
            </Button>
          </div>

          <div className="mt-8 md:mt-12 flex items-center justify-center gap-4 md:gap-8 flex-wrap text-xs md:text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-accent" />
              <span>Desenhos Ilimitados</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
              <span>Acesso Instantâneo</span>
            </div>
            <div className="flex items-center gap-2">
              <Snowflake className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>100% Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
