import HeroSection from "@/components/landing/HeroSection";
import VSLSection from "@/components/landing/VSLSection";
import MarketOpportunitySection from "@/components/landing/MarketOpportunitySection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import TransformationSection from "@/components/landing/TransformationSection";
import MethodSection from "@/components/landing/MethodSection";
import VideoTestimonialsSection from "@/components/landing/VideoTestimonialsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import InstructorSection from "@/components/landing/InstructorSection";
import ForWhoSection from "@/components/landing/ForWhoSection";
import PricingSection from "@/components/landing/PricingSection";
import OfferSection from "@/components/landing/OfferSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import StorySection from "@/components/landing/StorySection";
import FloatingCTA from "@/components/landing/FloatingCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <HeroSection />
      <VSLSection />
      <MarketOpportunitySection />
      <WhatIsSection />
      <TransformationSection />
      <MethodSection />
      <VideoTestimonialsSection />
      <TestimonialsSection />
      <InstructorSection />
      <ForWhoSection />
      <PricingSection />
      <OfferSection />
      <GuaranteeSection />
      <StorySection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
