import { ShoppingCart, Zap, Printer } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

const steps = [
  {
    icon: ShoppingCart,
    step: "1",
    title: "Escolha Seu Plano",
    description: "Selecione o combo perfeito para sua família e finalize a compra de forma segura.",
    color: "from-primary to-primary/80",
  },
  {
    icon: Zap,
    step: "2",
    title: "Acesso Instantâneo",
    description: "Receba o link de acesso imediatamente no seu email. Sem espera!",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Printer,
    step: "3",
    title: "Imprima Ilimitado",
    description: "Baixe e imprima quantos desenhos quiser, quando quiser. Para sempre!",
    color: "from-accent to-accent/80",
  },
];

export const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const parallaxSlow = useParallax(0.3);
  const parallaxFast = useParallax(0.6);
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden relative">
      {/* Elementos decorativos flutuantes com parallax */}
      <div className="absolute inset-0 pointer-events-none opacity-5 hidden md:block">
        <ShoppingCart 
          className="absolute top-20 right-20 w-32 h-32 text-primary" 
          style={{ transform: `translateY(${parallaxSlow}px) rotate(15deg)` }}
        />
        <Zap 
          className="absolute bottom-32 left-16 w-28 h-28 text-secondary" 
          style={{ transform: `translateY(${parallaxFast}px) rotate(-20deg)` }}
        />
        <Printer 
          className="absolute top-1/2 right-32 w-24 h-24 text-accent" 
          style={{ transform: `translateY(${parallaxSlow * 1.5}px) rotate(10deg)` }}
        />
      </div>
      
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Como Funciona?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Em apenas 3 passos simples você terá acesso a centenas de desenhos natalinos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            const delay = index * 120;
            return (
              <Card
                key={index}
                className={`relative p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group border-2 hover:border-primary/50 z-10 bg-card ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${delay}ms` }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>

                {/* Animated Icon Container */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground group-hover:animate-pulse" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Bottom Element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            );
          })}
        </div>

        {/* Infinite Scroll Animation */}
        <div className="mt-12 md:mt-16 relative overflow-hidden">
          <div className="flex gap-4 animate-scroll-infinite">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full text-sm font-semibold text-muted-foreground whitespace-nowrap"
              >
                {i % 3 === 0 && "✨ Acesso Imediato"}
                {i % 3 === 1 && "🎄 Desenhos Ilimitados"}
                {i % 3 === 2 && "🎁 Garantia de 7 Dias"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
