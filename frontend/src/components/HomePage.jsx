import React from "react";
import HeroSection from "./HeroSection";
import GlobalBackground from "./GlobalBackground";
import TrustedSection from "./TrustedSection";
import EasierSmarterSection from "./EasierSmarterSection";
import FoundationSection from "./FoundationSection";
import OperationsSection from "./OperationsSection";
import SystemsSection from "./SystemsSection";
import ProductSlider from "./ProductSlider";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      {/* Global Animated Background - spans all sections after hero */}
      <GlobalBackground
        lineCount={4}
        dotCount={200}
        lineColors={[
          { start: "rgba(255, 77, 0, 0.18)", end: "rgba(255, 120, 50, 0.04)" },
          {
            start: "rgba(255, 100, 50, 0.14)",
            end: "rgba(255, 150, 80, 0.03)",
          },
          { start: "rgba(255, 60, 0, 0.12)", end: "rgba(255, 100, 40, 0.02)" },
          {
            start: "rgba(255, 90, 30, 0.10)",
            end: "rgba(255, 130, 60, 0.025)",
          },
        ]}
        dotColor="255, 255, 255"
        dotOpacityRange={[0.03, 0.12]}
        parallaxIntensity={0.25}
        motionSpeed={1.2}
      />

      <TrustedSection />
      <EasierSmarterSection />
      <FoundationSection />
      <OperationsSection />
      <SystemsSection />
      <ProductSlider />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;

