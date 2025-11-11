import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DeviceMockup } from "@/components/DeviceMockup";
import { Gift, Sparkles, Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import preview1 from "@/assets/preview-1.jpg";
import preview2 from "@/assets/preview-2.jpg";
import preview3 from "@/assets/preview-3.jpg";
import preview4 from "@/assets/preview-4.jpg";
import preview5 from "@/assets/preview-5.jpg";

export const LeadMagnetSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const previews = [
    { image: preview1, device: "desktop", alt: "Desenho de Árvore de Natal" },
    { image: preview2, device: "mobile", alt: "Desenho de Papai Noel" },
    { image: preview3, device: "desktop", alt: "Desenho de Presépio" },
    { image: preview4, device: "mobile", alt: "Desenho de Rena" },
    { image: preview5, device: "desktop", alt: "Desenho de Boneco de Neve" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Ops! 😅",
        description: "Por favor, preencha todos os campos",
        variant: "destructive",
      });
      return;
    }

    // Simular envio (integração será feita depois)
    console.log("Lead capturado:", { name, email });
    
    setSubmitted(true);
    toast({
      title: "🎉 Sucesso!",
      description: "Seus desenhos gratuitos estão chegando no seu email!",
    });
  };

  return (
    <section id="preview" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Flocos de neve decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/20 animate-snowfall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            ❄️
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 animate-bounce">
            <Gift className="w-16 h-16 text-primary mx-auto animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Ganhe 5 Desenhos Gratuitos!
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Veja a qualidade incrível dos nossos desenhos educativos
          </p>
        </div>

        {!submitted ? (
          <div className="max-w-2xl mx-auto mb-16 animate-slide-up">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                <h3 className="text-2xl font-bold">Receba Agora no Seu Email!</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-14 text-lg border-2 focus:border-primary transition-all duration-300 group-hover:border-primary/50"
                  />
                </div>
                
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Seu melhor email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 text-lg pl-12 border-2 focus:border-primary transition-all duration-300 group-hover:border-primary/50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:scale-105"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Quero Meus 5 Desenhos Grátis!
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-4">
                🔒 Seus dados estão seguros. Não enviamos spam.
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto mb-16 animate-scale-in">
            <div className="bg-secondary/10 border-2 border-secondary rounded-2xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold mb-2">Tudo Certo! 🎉</h3>
              <p className="text-lg text-muted-foreground">
                Verifique seu email agora e aproveite seus desenhos gratuitos!
              </p>
            </div>
          </div>
        )}

        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center mb-8 animate-fade-in">
            Veja os Desenhos em Ação
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previews.map((preview, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DeviceMockup
                  image={preview.image}
                  type={preview.device as "desktop" | "mobile"}
                  alt={preview.alt}
                />
                <p className="text-center mt-4 font-medium text-foreground">
                  {preview.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
