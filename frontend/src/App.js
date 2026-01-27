import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GlobalBackground from "./components/GlobalBackground";
import TrustedSection from "./components/TrustedSection";
import EasierSmarterSection from "./components/EasierSmarterSection";
import FoundationSection from "./components/FoundationSection";
import OperationsSection from "./components/OperationsSection";
import SystemsSection from "./components/SystemsSection";
import ProductSlider from "./components/ProductSlider";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* Global Animated Background - spans all sections after hero */}
      <GlobalBackground
        lineCount={3}
        dotCount={150}
        lineColors={[
          { start: "rgba(255, 77, 0, 0.08)", end: "rgba(255, 120, 50, 0.02)" },
          {
            start: "rgba(255, 100, 50, 0.06)",
            end: "rgba(255, 150, 80, 0.015)",
          },
          { start: "rgba(255, 60, 0, 0.05)", end: "rgba(255, 100, 40, 0.01)" },
        ]}
        dotColor="255, 255, 255"
        dotOpacityRange={[0.015, 0.06]}
        parallaxIntensity={0.15}
        motionSpeed={0.5}
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
    </div>
  );
}

export default App;
