import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Sparkles, Crown } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "R$ 27",
    description: "Perfeito para começar",
    features: [
      "50 desenhos natalinos",
      "Acesso por 30 dias",
      "Imprimir quantas vezes quiser",
      "Suporte por email",
    ],
    icon: Star,
    color: "from-primary/20 to-primary/10",
    buttonVariant: "outline" as const,
  },
  {
    name: "Completo",
    price: "R$ 47",
    description: "Mais vendido!",
    features: [
      "Desenhos ilimitados",
      "Acesso vitalício",
      "Temas cristãos exclusivos",
      "Novos desenhos toda semana",
      "Suporte prioritário",
      "Bônus: Guia de atividades",
    ],
    icon: Crown,
    color: "from-accent via-primary to-secondary",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Premium",
    price: "R$ 67",
    description: "Experiência completa",
    features: [
      "Tudo do Completo +",
      "Kit de stickers digitais",
      "Vídeos tutoriais exclusivos",
      "Acesso a comunidade VIP",
      "Certificado de participação",
      "Suporte WhatsApp direto",
    ],
    icon: Sparkles,
    color: "from-secondary/20 to-accent/10",
    buttonVariant: "outline" as const,
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
                className={`relative p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-2 border-primary shadow-xl scale-105"
                    : "border-2 hover:border-primary/50"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
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
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    pagamento único
                  </span>
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
