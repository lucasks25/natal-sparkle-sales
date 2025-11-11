import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Gift, Sparkles } from "lucide-react";
import { toast } from "sonner";
import arvoreNatal from "@/assets/desenho-arvore-natal.jpg";
import presepio from "@/assets/desenho-presepio.jpg";
import papaiNoel from "@/assets/desenho-papai-noel.jpg";
import anjinho from "@/assets/desenho-anjinho.jpg";
import canvasScreenshot from "@/assets/drawing-canvas-screenshot.png";

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
  const handleDownload = async (imageUrl: string, title: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      
      // Garantir que seja reconhecido como imagem JPEG
      const imageBlob = new Blob([blob], { type: 'image/jpeg' });
      const fileName = `natal-color-kids-${title.toLowerCase().replace(/\s+/g, "-")}.jpg`;
      
      // Tentar usar Web Share API primeiro (melhor para mobile/galeria)
      if (navigator.share && navigator.canShare) {
        const file = new File([imageBlob], fileName, { type: 'image/jpeg' });
        
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: title,
            text: `Desenho ${title} - Natal Color Kids`
          });
          
          toast.success(`"${title}" compartilhado! 🎁`, {
            description: "Salve na galeria através do menu de compartilhamento!",
          });
          return;
        }
      }
      
      // Fallback: download tradicional
      const url = window.URL.createObjectURL(imageBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast.success(`"${title}" salvo! 🎁`, {
        description: "Desenho pronto para colorir!",
      });
    } catch (error) {
      toast.error("Erro ao baixar desenho", {
        description: "Tente novamente em instantes.",
      });
    }
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
            onClick={() => {
              document.getElementById('pricing')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <Gift className="w-5 h-5" />
            Ver Todos os Planos
          </Button>
        </div>

        {/* Platform Preview Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-primary/30">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-bold text-primary">
                LOUSA DIGITAL INTERATIVA
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Desenhe Direto na Plataforma! 🎨
            </h3>
            <p className="text-base md:text-lg text-muted-foreground">
              Ferramenta profissional de desenho incluída
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Mobile Preview */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-background to-muted/30 p-4 rounded-3xl border-8 border-foreground/20 shadow-2xl transform group-hover:scale-105 transition-transform">
                <img
                  src={canvasScreenshot}
                  alt="Lousa Digital Mobile"
                  className="w-[280px] h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-xs font-bold">
                📱 iPhone
              </div>
            </div>

            {/* Tablet Preview */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-background to-muted/30 p-6 rounded-3xl border-8 border-foreground/20 shadow-2xl transform group-hover:scale-105 transition-transform">
                <img
                  src={canvasScreenshot}
                  alt="Lousa Digital Tablet"
                  className="w-[380px] h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-xs font-bold">
                📱 iPad
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm md:text-base text-muted-foreground">
              ✨ Cores ilimitadas • 🖍️ Ferramentas profissionais • 💾 Salve suas criações
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
