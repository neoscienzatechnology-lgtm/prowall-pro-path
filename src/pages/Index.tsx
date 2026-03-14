import HeroSection from "@/components/landing/HeroSection";
import ForWhoSection from "@/components/landing/ForWhoSection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import WhatYouLearnSection from "@/components/landing/WhatYouLearnSection";
import TransformationSection from "@/components/landing/TransformationSection";
import MarketOpportunitySection from "@/components/landing/MarketOpportunitySection";
import ScheduleSection from "@/components/landing/ScheduleSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import OfferSection from "@/components/landing/OfferSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FloatingCTA from "@/components/landing/FloatingCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ForWhoSection />
      <WhatIsSection />
      <WhatYouLearnSection />
      <TransformationSection />
      <MarketOpportunitySection />
      <ScheduleSection />
      <ExperienceSection />
      <TestimonialsSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
