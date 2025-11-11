import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProofPopup } from "@/components/ProofPopup";
import { BenefitsSection } from "@/components/BenefitsSection";
import { LeadMagnetSection } from "@/components/LeadMagnetSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProofPopup />
      <BenefitsSection />
      <LeadMagnetSection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
