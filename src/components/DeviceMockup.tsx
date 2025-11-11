import { Monitor, Smartphone } from "lucide-react";

interface DeviceMockupProps {
  image: string;
  type: "desktop" | "mobile";
  alt: string;
}

export const DeviceMockup = ({ image, type, alt }: DeviceMockupProps) => {
  if (type === "desktop") {
    return (
      <div className="relative group animate-fade-in hover:scale-105 transition-transform duration-300">
        <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl p-4 shadow-2xl border-4 border-border">
          <div className="bg-background rounded-lg overflow-hidden shadow-inner">
            <div className="h-8 bg-muted/50 flex items-center px-3 gap-2 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              </div>
              <Monitor className="w-4 h-4 text-muted-foreground ml-auto" />
            </div>
            <img src={image} alt={alt} className="w-full h-auto" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    );
  }

  return (
    <div className="relative group animate-fade-in hover:scale-105 transition-transform duration-300">
      <div className="bg-gradient-to-br from-muted to-muted/50 rounded-3xl p-3 shadow-2xl border-4 border-border max-w-[280px] mx-auto">
        <div className="bg-background rounded-2xl overflow-hidden shadow-inner">
          <div className="h-6 bg-muted/50 flex items-center justify-center border-b border-border/50 relative">
            <div className="w-16 h-4 bg-muted rounded-full"></div>
            <Smartphone className="w-3 h-3 text-muted-foreground absolute right-2" />
          </div>
          <img src={image} alt={alt} className="w-full h-auto" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};
