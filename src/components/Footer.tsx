import { Sparkles, Mail, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Natal Color Kids
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando o Natal das crianças com desenhos infinitos e muita
              diversão! 🎄✨
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("benefits")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Planos
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("testimonials")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Depoimentos
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contato</h3>
            <div className="space-y-3">
              <a
                href="mailto:contato@natalcolorkids.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                contato@natalcolorkids.com
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © 2024 Natal Color Kids. Todos os direitos reservados. Feito com ❤️
            para famílias especiais.
          </p>
        </div>
      </div>
    </footer>
  );
};
