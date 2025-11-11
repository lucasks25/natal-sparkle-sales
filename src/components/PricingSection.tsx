import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";
import { Check, Sparkles, Gift } from "lucide-react";

const comboKids = {
  name: "Combo Kids",
  originalPrice: "R$ 289,90",
  price: "R$ 14,90",
  description: "🎄 SUPER BLACK FRIDAY DE NATAL 🎄",
  features: [
    "✨ Desenhos natalinos infinitos",
    "🎨 Desenhos infantis variados",
    "⭐ Tema cristão completo",
    "🎄 Acesso vitalício à plataforma",
    "📚 Livro PDF histórias infantis",
    "🎵 Playlist músicas para acalmar",
    "🖨️ Imprimir quantas vezes quiser",
    "🆕 Novos desenhos toda semana",
  ],
  discount: "95% OFF",
  bonuses: [
    { emoji: "🎨", title: "Lousa Digital Interativa", value: "R$ 49,90" },
    { emoji: "📚", title: "Livro de Histórias PDF", value: "R$ 39,90" },
    { emoji: "🎵", title: "Playlist Premium Acalmar", value: "R$ 29,90" },
    { emoji: "🎄", title: "+1000 Desenhos Exclusivos", value: "R$ 89,90" },
    { emoji: "🆕", title: "Atualizações Vitalícias", value: "R$ 59,90" },
    { emoji: "⚡", title: "Download Ilimitado", value: "R$ 19,90" },
  ],
  badges: [
    "📱 Acesso Mobile e Tablet",
    "🌟 Atualizações Semanais",
    "🎁 Conteúdo Exclusivo",
  ],
};

export const PricingSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const parallaxOffset = useParallax(0.3);
  
  return (
    <section id="pricing" className="py-12 md:py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements com parallax - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none opacity-10 hidden md:block">
        <Gift 
          className="absolute top-10 left-10 w-20 h-20 text-primary animate-float" 
          style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
        />
        <Sparkles 
          className="absolute bottom-20 right-20 w-16 h-16 text-accent animate-pulse" 
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Header - compacto em mobile */}
        <div className="text-center mb-6 md:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-destructive/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-4 border border-destructive/30">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-destructive animate-pulse" />
            <span className="text-xs md:text-sm font-bold text-destructive">
              SUPER BLACK FRIDAY DE NATAL
            </span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent px-4">
            Oferta Exclusiva!
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Todo o conteúdo premium em um único pacote 🎁
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className={`relative p-4 md:p-10 border-2 md:border-4 border-primary shadow-2xl hover:shadow-3xl transition-all duration-300 md:hover:-translate-y-2 group bg-gradient-to-br from-background via-background to-primary/5 overflow-visible ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            {/* Animated characters - desktop only */}
            <div className="hidden md:block absolute -top-12 -right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-12">
              <span className="text-7xl animate-bounce">🎅</span>
            </div>
            <div className="hidden md:block absolute -bottom-10 -left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:-rotate-12">
              <span className="text-7xl animate-float">🎄</span>
            </div>

            {/* Popular badge - compacto */}
            <div className="absolute -top-3 md:-top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground px-3 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-base font-bold shadow-xl animate-pulse z-20">
              🔥 PROMOÇÃO LIMITADA 🔥
            </div>

            {/* Icon - menor em mobile */}
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-gradient-to-br from-accent via-primary to-secondary flex items-center justify-center mb-3 md:mb-6 mx-auto animate-glow shadow-xl">
              <Gift className="w-8 h-8 md:w-12 md:h-12 text-primary-foreground animate-bounce" />
            </div>

            <h3 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {comboKids.name}
            </h3>
            <p className="text-sm md:text-lg font-semibold text-center mb-4 md:mb-6 text-foreground">
              {comboKids.description}
            </p>

            {/* Preço - compacto */}
            <div className="text-center mb-4 md:mb-8 bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl md:rounded-2xl p-3 md:p-6 border border-border/50">
              <div className="mb-2 md:mb-3">
                <span className="text-lg md:text-2xl text-muted-foreground line-through">
                  {comboKids.originalPrice}
                </span>
                <span className="ml-2 md:ml-3 inline-block px-2 py-1 md:px-4 md:py-2 bg-destructive text-destructive-foreground font-bold rounded-full text-xs md:text-lg animate-pulse shadow-lg">
                  {comboKids.discount}
                </span>
              </div>
              <div>
                <span className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  {comboKids.price}
                </span>
                <span className="text-muted-foreground block mt-1 md:mt-2 text-xs md:text-base font-medium">
                  pagamento único • acesso vitalício
                </span>
              </div>
            </div>

            {/* Scarcity - compacto */}
            <div className="bg-gradient-to-r from-destructive/20 via-destructive/30 to-destructive/20 rounded-lg md:rounded-xl p-2 md:p-4 mb-4 md:mb-6 border border-destructive/40 animate-pulse">
              <div className="text-center">
                <p className="text-xs md:text-base font-bold text-destructive mb-1 md:mb-2">
                  ⚠️ Apenas {Math.floor(Math.random() * 8) + 12} vagas restantes!
                </p>
                <p className="text-[10px] md:text-sm text-muted-foreground">
                  🔥 {Math.floor(Math.random() * 50) + 150} compraram nas últimas 24h
                </p>
              </div>
            </div>

            {/* Features - mais compacto */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl md:rounded-2xl p-3 md:p-6 mb-3 md:mb-6 border border-primary/20">
              <h4 className="text-base md:text-xl font-bold text-center mb-2 md:mb-4 text-foreground">
                🎁 Tudo Incluído:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-3">
                {comboKids.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-base text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bonus Stack - grid 2 colunas em mobile */}
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl md:rounded-2xl p-3 md:p-6 mb-4 md:mb-6 border border-accent/30">
              <div className="text-center mb-2 md:mb-4">
                <h4 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-1 md:mb-2">
                  🎁 BÔNUS GRÁTIS
                </h4>
                <p className="text-[10px] md:text-sm text-muted-foreground">
                  Valor: <span className="font-bold text-accent line-through">R$ 289,90</span>
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
                {comboKids.bonuses.map((bonus, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row items-center md:justify-between bg-background/50 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 border border-border/50 hover:border-accent/50 transition-all animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 text-center md:text-left">
                      <span className="text-xl md:text-3xl">{bonus.emoji}</span>
                      <span className="text-[10px] md:text-sm font-semibold text-foreground leading-tight">
                        {bonus.title}
                      </span>
                    </div>
                    <span className="text-[9px] md:text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 md:px-3 md:py-1 rounded-full mt-1 md:mt-0">
                      GRÁTIS
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2 md:mt-4 text-center p-2 md:p-3 bg-accent/20 rounded-lg border border-accent/30">
                <p className="text-xs md:text-base font-bold text-foreground">
                  💰 Economize: <span className="text-accent text-sm md:text-xl">R$ 275,00</span>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full text-sm md:text-xl py-5 md:py-8 bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 shadow-2xl animate-glow group/btn mb-2 md:mb-4"
            >
              <Sparkles className="w-4 h-4 md:w-6 md:h-6 mr-2 group-hover/btn:animate-spin" />
              🎄 Garantir Combo Kids Agora 🎄
            </Button>

            <p className="text-center text-[10px] md:text-sm text-muted-foreground">
              ⚡ Apenas {Math.floor(Math.random() * 15) + 25} unidades neste preço!
            </p>
          </Card>
        </div>

        {/* Footer - compacto */}
        <div className="mt-6 md:mt-12 text-center text-muted-foreground animate-fade-in px-4">
          <p className="text-[10px] md:text-base leading-relaxed">
            🔒 Seguro • ✅ Garantia 7 dias • 🎁 Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};
