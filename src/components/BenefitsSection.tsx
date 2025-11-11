import { Card } from "@/components/ui/card";
import { Sparkles, Home, Gift, Church, Palette, Shield } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Desenhos Infinitos",
    description:
      "Acesso ilimitado a centenas de desenhos natalinos para toda a família.",
    color: "from-primary to-primary/80",
  },
  {
    icon: Church,
    title: "Tema Cristão",
    description:
      "Presépios, anjos e temas religiosos para ensinar valores cristãos.",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Gift,
    title: "Acesso Instantâneo",
    description:
      "Comece a usar imediatamente após a compra. Sem espera, sem complicação.",
    color: "from-accent to-accent/80",
  },
  {
    icon: Home,
    title: "Use em Casa",
    description:
      "Imprima quantas vezes quiser. Perfeito para toda a família se divertir.",
    color: "from-primary/80 to-secondary",
  },
  {
    icon: Palette,
    title: "Desenvolve Criatividade",
    description:
      "Estimula coordenação motora, concentração e expressão artística.",
    color: "from-secondary/80 to-accent",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description:
      "Pagamento seguro e garantia de 7 dias. Sua satisfação é garantida.",
    color: "from-accent/80 to-primary",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Por Que Escolher Natal Color Kids?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A plataforma completa para transformar o Natal das crianças em
            momentos inesquecíveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:animate-bounce`}
                >
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
