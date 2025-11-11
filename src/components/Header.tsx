import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 animate-float">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
            <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-primary-foreground" />
          </div>
          <span className="text-sm md:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Natal Color Kids
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("benefits")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Planos
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Depoimentos
          </button>
        </nav>

        <Button
          onClick={() => scrollToSection("pricing")}
          size="sm"
          className="animate-pulse hover:animate-glow text-xs md:text-sm px-3 md:px-6"
        >
          <span className="hidden sm:inline">Quero Acesso Agora</span>
          <span className="sm:hidden">Acessar</span>
        </Button>
      </div>
    </header>
  );
};
