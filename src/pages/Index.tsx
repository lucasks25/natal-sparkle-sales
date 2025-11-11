import { Header } from "@/components/Header";
import { CountdownTimer } from "@/components/CountdownTimer";
import { AwardBadge } from "@/components/AwardBadge";
import { HeroSection } from "@/components/HeroSection";
import { ProofPopup } from "@/components/ProofPopup";
import { BenefitsSection } from "@/components/BenefitsSection";
import { LeadMagnetSection } from "@/components/LeadMagnetSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { BibleVersePopup } from "@/components/BibleVersePopup";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CountdownTimer />
      <AwardBadge />
      <HeroSection />
      <ProofPopup />
      <BibleVersePopup />
      <BenefitsSection />
      <LeadMagnetSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
