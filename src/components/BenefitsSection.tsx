import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
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
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Por Que Escolher Natal Color Kids?
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A plataforma completa para transformar o Natal das crianças em momentos inesquecíveis
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const delay = index * 80;
            return (
              <Card
                key={index}
                className={`p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 hover:border-primary/50 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${delay}ms` }}
              >
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-3 md:mb-4 group-hover:animate-bounce`}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>
                <h3 className="text-base md:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
