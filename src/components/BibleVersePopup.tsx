import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { BookOpen, X } from "lucide-react";

const verses = [
  {
    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    reference: "João 3:16",
  },
  {
    text: "Hoje, na cidade de Davi, nasceu o Salvador, que é Cristo, o Senhor.",
    reference: "Lucas 2:11",
  },
  {
    text: "E o Verbo se fez carne e habitou entre nós, cheio de graça e de verdade.",
    reference: "João 1:14",
  },
  {
    text: "Glória a Deus nas alturas, e paz na terra aos homens de boa vontade.",
    reference: "Lucas 2:14",
  },
  {
    text: "Instrui o menino no caminho em que deve andar, e até quando envelhecer não se desviará dele.",
    reference: "Provérbios 22:6",
  },
];

export const BibleVersePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentVerse, setCurrentVerse] = useState(verses[0]);

  useEffect(() => {
    const showVerse = () => {
      const randomVerse = verses[Math.floor(Math.random() * verses.length)];
      setCurrentVerse(randomVerse);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 8000);
    };

    // Primeira aparição após 15 segundos
    const initialTimer = setTimeout(showVerse, 15000);

    // Reaparece a cada 45 segundos
    const interval = setInterval(showVerse, 45000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 max-w-sm animate-slide-up">
      <Card className="bg-gradient-to-br from-accent/95 to-secondary/95 backdrop-blur-sm border-2 border-primary/30 shadow-2xl p-6 relative animate-glow">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-accent-foreground/60 hover:text-accent-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3 mb-3">
          <BookOpen className="w-6 h-6 text-primary animate-pulse flex-shrink-0" />
          <h4 className="font-bold text-accent-foreground">Versículo do Dia</h4>
        </div>

        <p className="text-accent-foreground/90 italic mb-3 text-sm leading-relaxed">
          "{currentVerse.text}"
        </p>

        <p className="text-primary font-semibold text-sm text-right">
          {currentVerse.reference}
        </p>
      </Card>
    </div>
  );
};
