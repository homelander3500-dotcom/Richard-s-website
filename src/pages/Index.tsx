import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import PhilosophySection from "@/components/PhilosophySection";
import WhatYoullSeeSection from "@/components/WhatYoullSeeSection";
import MissionSection from "@/components/MissionSection";
import BackgroundSection from "@/components/BackgroundSection";
import RiskWarningSection from "@/components/RiskWarningSection";
import TheDifferenceSection from "@/components/TheDifferenceSection";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      
      <WhatYoullSeeSection />
      <MissionSection />
      <BackgroundSection />
      <TheDifferenceSection />
      <RiskWarningSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Index;
