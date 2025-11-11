import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Gift } from "lucide-react";
import { toast } from "sonner";
import arvoreNatal from "@/assets/desenho-arvore-natal.jpg";
import presepio from "@/assets/desenho-presepio.jpg";
import papaiNoel from "@/assets/desenho-papai-noel.jpg";
import anjinho from "@/assets/desenho-anjinho.jpg";

const freeDrawings = [
  {
    title: "Árvore de Natal",
    category: "Clássico",
    image: arvoreNatal,
  },
  {
    title: "Presépio",
    category: "Tema Cristão",
    image: presepio,
  },
  {
    title: "Papai Noel",
    category: "Personagens",
    image: papaiNoel,
  },
  {
    title: "Anjinho",
    category: "Tema Cristão",
    image: anjinho,
  },
];

export const FreeDrawingsSection = () => {
  const handleDownload = (imageUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${title.toLowerCase().replace(/\s+/g, "-")}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success(`Baixando "${title}"! 🎁`, {
      description: "Seu desenho gratuito está pronto para colorir!",
    });
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-4">
            <Gift className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold text-secondary">
              Presente Exclusivo
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Baixe 4 Desenhos Grátis!
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experimente a qualidade dos nossos desenhos antes de comprar
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-8">
          {freeDrawings.map((drawing, index) => (
            <Card
              key={index}
              className="p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleDownload(drawing.image, drawing.title)}
            >
              <div className="aspect-square bg-background rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden border-2 border-border">
                <img 
                  src={drawing.image} 
                  alt={drawing.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full mb-2">
                  {drawing.category}
                </span>
                <h3 className="text-sm md:text-base font-bold text-foreground mb-2">
                  {drawing.title}
                </h3>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(drawing.image, drawing.title);
                  }}
                >
                  <Download className="w-4 h-4" />
                  Baixar
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Estes são apenas 4 exemplos! Temos centenas de desenhos esperando por você 🎨
          </p>
          <Button
            size="lg"
            className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Gift className="w-5 h-5" />
            Ver Todos os Planos
          </Button>
        </div>
      </div>
    </section>
  );
};
