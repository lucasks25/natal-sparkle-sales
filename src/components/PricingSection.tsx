import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Sparkles, Crown } from "lucide-react";

const plans = [
  {
    name: "Plataforma",
    originalPrice: "R$ 89,90",
    price: "R$ 14,90",
    description: "Acesso completo à plataforma",
    features: [
      "Desenhos natalinos infinitos",
      "Acesso vitalício",
      "Imprimir quantas vezes quiser",
      "Novos desenhos toda semana",
      "Suporte por email",
    ],
    icon: Star,
    color: "from-primary/20 to-primary/10",
    buttonVariant: "outline" as const,
    discount: "83% OFF",
  },
  {
    name: "Combo Família",
    originalPrice: "R$ 129,90",
    price: "R$ 19,90",
    description: "Mais vendido! 🔥",
    features: [
      "Tudo da Plataforma +",
      "Livro PDF histórias infantis",
      "Playlist músicas para acalmar",
      "Histórias educativas prontas",
      "Suporte prioritário",
    ],
    icon: Crown,
    color: "from-accent via-primary to-secondary",
    buttonVariant: "default" as const,
    popular: true,
    discount: "85% OFF",
  },
  {
    name: "Combo Cristão",
    originalPrice: "R$ 289,90",
    price: "R$ 49,00",
    description: "Experiência completa cristã",
    features: [
      "Tudo do Combo Família +",
      "Estudo bíblico infantil completo",
      "Vídeos de ensinamentos cristãos",
      "Livro Boobie Goods para imprimir",
      "Conteúdo cristão exclusivo",
      "Suporte WhatsApp direto",
    ],
    icon: Sparkles,
    color: "from-secondary/20 to-accent/10",
    buttonVariant: "outline" as const,
    discount: "83% OFF",
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Escolha Seu Plano Perfeito
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acesso imediato após a compra. Garantia de 7 dias!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={index}
                className={`relative p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group ${
                  plan.popular
                    ? "border-2 border-primary shadow-xl scale-105"
                    : "border-2 hover:border-primary/50"
                } animate-fade-in overflow-visible`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Personagens animados */}
                <div className="absolute -top-10 -right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                  <span className="text-6xl animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                    {index === 0 && "🎄"}
                    {index === 1 && "🎅"}
                    {index === 2 && "⭐"}
                  </span>
                </div>
                <div className="absolute -bottom-8 -left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                  <span className="text-5xl animate-float" style={{ animationDelay: `${index * 0.15}s` }}>
                    {index === 0 && "🎁"}
                    {index === 1 && "🌟"}
                    {index === 2 && "✨"}
                  </span>
                </div>

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    Mais Popular 🔥
                  </div>
                )}

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 mx-auto ${
                    plan.popular ? "animate-glow" : ""
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      plan.popular
                        ? "text-primary-foreground"
                        : "text-primary"
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-bold text-center mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  {plan.description}
                </p>

                <div className="text-center mb-6">
                  <div className="mb-2">
                    <span className="text-lg text-muted-foreground line-through">
                      {plan.originalPrice}
                    </span>
                    <span className="ml-2 inline-block px-3 py-1 bg-destructive/20 text-destructive font-bold rounded-full text-sm animate-pulse">
                      {plan.discount}
                    </span>
                  </div>
                  <div>
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2 block mt-1">
                      pagamento único
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  size="lg"
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg animate-glow"
                      : ""
                  }`}
                >
                  {plan.popular ? (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Garantir Acesso Agora
                    </>
                  ) : (
                    "Começar Agora"
                  )}
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          <p className="text-sm">
            🔒 Pagamento 100% seguro • ✅ Garantia de 7 dias • 🎁 Acesso
            imediato
          </p>
        </div>
      </div>
    </section>
  );
};
