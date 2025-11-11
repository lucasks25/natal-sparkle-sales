import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Palette, Download, Eraser, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const colors = [
  "#EF4444", // red
  "#F59E0B", // orange
  "#FBBF24", // yellow
  "#10B981", // green
  "#3B82F6", // blue
  "#8B5CF6", // purple
  "#EC4899", // pink
  "#6B7280", // gray
];

export const ColoringPreview = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Desenha o contorno da árvore de Natal
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";

    // Árvore simples
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(100, 120);
    ctx.lineTo(110, 120);
    ctx.lineTo(70, 180);
    ctx.lineTo(80, 180);
    ctx.lineTo(50, 240);
    ctx.lineTo(250, 240);
    ctx.lineTo(220, 180);
    ctx.lineTo(230, 180);
    ctx.lineTo(190, 120);
    ctx.lineTo(200, 120);
    ctx.closePath();
    ctx.stroke();

    // Estrela no topo
    ctx.beginPath();
    ctx.moveTo(150, 20);
    ctx.lineTo(160, 45);
    ctx.lineTo(185, 50);
    ctx.lineTo(165, 65);
    ctx.lineTo(170, 90);
    ctx.lineTo(150, 75);
    ctx.lineTo(130, 90);
    ctx.lineTo(135, 65);
    ctx.lineTo(115, 50);
    ctx.lineTo(140, 45);
    ctx.closePath();
    ctx.stroke();

    // Tronco
    ctx.beginPath();
    ctx.rect(130, 240, 40, 30);
    ctx.stroke();

    setContext(ctx);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!context) return;
    setIsDrawing(true);
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.nativeEvent.offsetX;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.nativeEvent.offsetY;

    context.beginPath();
    context.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.nativeEvent.offsetX;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.nativeEvent.offsetY;

    context.strokeStyle = currentColor;
    context.lineWidth = 15;
    context.lineCap = "round";
    context.lineTo(x, y);
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !context) return;
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Redesenha o contorno
    useEffect(() => {}, []);
    window.location.reload();
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "meu-desenho-natal.png";
    link.href = canvas.toDataURL();
    link.click();

    toast({
      title: "✨ Desenho salvo!",
      description: "Continue explorando nossa plataforma!",
    });
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <Palette className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto animate-bounce" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Experimente Gratuitamente!
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Pinte esta árvore de Natal e veja a qualidade dos nossos desenhos
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl shadow-2xl p-4 md:p-6 border-2 border-primary/20 animate-slide-up">
            {/* Canvas */}
            <div className="bg-white rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <canvas
                ref={canvasRef}
                width={300}
                height={300}
                className="cursor-crosshair touch-none"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
              />
            </div>

            {/* Paleta de cores */}
            <div className="flex gap-2 mb-4 justify-center flex-wrap">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setCurrentColor(color)}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full transition-all hover:scale-110 ${
                    currentColor === color ? "ring-4 ring-primary scale-110" : ""
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Botões */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={clearCanvas}
                className="flex-1"
              >
                <Eraser className="w-4 h-4 mr-2" />
                Limpar
              </Button>
              <Button
                size="sm"
                onClick={downloadImage}
                className="flex-1 bg-gradient-to-r from-primary to-accent"
              >
                <Download className="w-4 h-4 mr-2" />
                Baixar
              </Button>
            </div>
          </div>

          <div className="text-center mt-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 shadow-lg animate-pulse"
              onClick={() => {
                const element = document.getElementById("pricing");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Quero Acesso a Centenas de Desenhos!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
