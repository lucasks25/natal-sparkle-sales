import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  badges: [
    "🎨 Lousa Digital Interativa",
    "🖍️ +1000 Desenhos Disponíveis",
    "📱 Acesso Mobile e Tablet",
    "🌟 Atualizações Semanais",
    "⚡ Download Instantâneo",
    "🎁 Conteúdo Exclusivo",
  ],
};

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Gift className="absolute top-10 left-10 w-20 h-20 text-primary animate-float" />
        <Sparkles className="absolute bottom-20 right-20 w-16 h-16 text-accent animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-destructive/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-destructive/30">
            <Sparkles className="w-5 h-5 text-destructive animate-pulse" />
            <span className="text-sm font-bold text-destructive">
              SUPER BLACK FRIDAY DE NATAL
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Oferta Exclusiva!
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo o conteúdo premium em um único pacote especial 🎁
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="relative p-6 md:p-10 border-4 border-primary shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in bg-gradient-to-br from-background via-background to-primary/5 overflow-visible">
            {/* Animated characters */}
            <div className="absolute -top-12 -right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-12">
              <span className="text-7xl animate-bounce">🎅</span>
            </div>
            <div className="absolute -bottom-10 -left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:-rotate-12">
              <span className="text-7xl animate-float">🎄</span>
            </div>

            {/* Popular badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground px-6 py-2 rounded-full text-sm md:text-base font-bold shadow-xl animate-pulse z-20">
              🔥 PROMOÇÃO LIMITADA 🔥
            </div>

            <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-accent via-primary to-secondary flex items-center justify-center mb-6 mx-auto animate-glow shadow-xl">
              <Gift className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground animate-bounce" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {comboKids.name}
            </h3>
            <p className="text-base md:text-lg font-semibold text-center mb-6 text-foreground">
              {comboKids.description}
            </p>

            <div className="text-center mb-8 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 border border-border/50">
              <div className="mb-3">
                <span className="text-xl md:text-2xl text-muted-foreground line-through">
                  {comboKids.originalPrice}
                </span>
                <span className="ml-3 inline-block px-4 py-2 bg-destructive text-destructive-foreground font-bold rounded-full text-base md:text-lg animate-pulse shadow-lg">
                  {comboKids.discount}
                </span>
              </div>
              <div>
                <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  {comboKids.price}
                </span>
                <span className="text-muted-foreground ml-2 block mt-2 text-sm md:text-base font-medium">
                  pagamento único • acesso vitalício
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-4 md:p-6 mb-6 border border-primary/20">
              <h4 className="text-lg md:text-xl font-bold text-center mb-4 text-foreground">
                🎁 Tudo Incluído:
              </h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {comboKids.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                    <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {comboKids.badges.map((badge, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 text-xs md:text-sm font-semibold text-foreground animate-fade-in hover:scale-105 transition-transform"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {badge}
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full text-base md:text-xl py-6 md:py-8 bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 shadow-2xl animate-glow group/btn"
            >
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover/btn:animate-spin" />
              🎄 Garantir Combo Kids Agora 🎄
            </Button>

            <p className="text-center text-xs md:text-sm text-muted-foreground mt-4">
              ⚡ Apenas {Math.floor(Math.random() * 15) + 25} unidades restantes neste preço!
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center text-muted-foreground animate-fade-in">
          <p className="text-sm md:text-base">
            🔒 Pagamento 100% seguro • ✅ Garantia de 7 dias • 🎁 Acesso imediato • 💳 Parcelamento disponível
          </p>
        </div>
      </div>
    </section>
  );
};
