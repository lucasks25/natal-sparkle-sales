import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o acesso aos desenhos?",
    answer:
      "Após a confirmação do pagamento, você recebe instantaneamente por email o acesso à plataforma. Pode começar a baixar e imprimir os desenhos imediatamente!",
  },
  {
    question: "Os desenhos são realmente infinitos?",
    answer:
      "Sim! Temos uma biblioteca enorme e adicionamos novos desenhos toda semana. Você nunca vai ficar sem opções para as crianças colorirem.",
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer:
      "Claro! Você pode imprimir cada desenho quantas vezes precisar. Perfeito para várias crianças ou para fazer atividades repetidas.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer:
      "Se por qualquer motivo você não gostar do produto, basta enviar um email em até 7 dias e devolvemos 100% do seu dinheiro. Sem perguntas, sem complicação.",
  },
  {
    question: "O que vem no Combo Cristão?",
    answer:
      "Além de todos os desenhos da plataforma, você recebe estudos bíblicos infantis completos, vídeos educativos cristãos, o livro Boobie Goods para imprimir, histórias bíblicas e muito mais!",
  },
  {
    question: "Funciona no celular e computador?",
    answer:
      "Sim! A plataforma funciona em qualquer dispositivo - celular, tablet ou computador. Você acessa de onde estiver e baixa os desenhos que quiser.",
  },
  {
    question: "Os desenhos são de qualidade para impressão?",
    answer:
      "Todos os desenhos são em alta resolução, perfeitos para impressão. Podem ser impressos em casa ou em gráficas sem perder qualidade.",
  },
  {
    question: "Tem suporte se eu tiver dúvidas?",
    answer:
      "Sim! Todos os planos têm suporte por email. O Combo Cristão ainda inclui suporte direto pelo WhatsApp para responder suas dúvidas mais rapidamente.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Flocos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-accent/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${20 + Math.random() * 20}px`,
            }}
          >
            ❄️
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <HelpCircle className="w-16 h-16 text-primary mx-auto animate-bounce" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre os planos e a plataforma
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-2xl px-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0 animate-pulse" />
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground">
            Ainda tem dúvidas?{" "}
            <a
              href="#pricing"
              className="text-primary font-semibold hover:underline transition-all"
            >
              Entre em contato conosco
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
