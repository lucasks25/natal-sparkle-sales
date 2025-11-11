import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    city: "São Paulo",
    text: "Meus filhos adoraram! Passamos horas colorindo juntos. Os desenhos são lindos e a variedade é incrível.",
    rating: 5,
  },
  {
    name: "João Santos",
    city: "Rio de Janeiro",
    text: "Perfeito para ensinar valores cristãos de forma divertida. Recomendo muito!",
    rating: 5,
  },
  {
    name: "Ana Costa",
    city: "Belo Horizonte",
    text: "Comprei o plano completo e não me arrependo. Minha filha usa todos os dias!",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    city: "Curitiba",
    text: "Qualidade excepcional! Os desenhos são bem detalhados e fáceis de imprimir.",
    rating: 5,
  },
  {
    name: "Juliana Ferreira",
    city: "Brasília",
    text: "Adorei a seção de presépios. Estou preparando decorações incríveis para o Natal!",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    city: "Salvador",
    text: "Melhor investimento para entreter as crianças de forma educativa. Vale cada centavo!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milhares de famílias já transformaram o Natal com Natal Color Kids
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 animate-fade-in relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-8 h-8 text-primary/20 animate-pulse" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Avatar className="border-2 border-primary/20">
                  <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.city}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
