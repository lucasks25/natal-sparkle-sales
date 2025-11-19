import { Header } from "@/components/Header";
import { CountdownTimer } from "@/components/CountdownTimer";
import { AwardBadge } from "@/components/AwardBadge";
import { HeroSection } from "@/components/HeroSection";
import { ViewersPopup } from "@/components/ViewersPopup";
import { PurchasePopup } from "@/components/PurchasePopup";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FreeDrawingsSection } from "@/components/FreeDrawingsSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { UtmifyPixel } from "@/components/UtmifyPixel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <UtmifyPixel />
      <Header />
      <CountdownTimer />
      <AwardBadge />
      <HeroSection />
      <ViewersPopup />
      <PurchasePopup />
      <BenefitsSection />
      <HowItWorksSection />
      <FreeDrawingsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
