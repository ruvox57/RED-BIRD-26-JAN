import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import OrangeGlowAnimation from "./OrangeGlowAnimation";

const EasierSmarterSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#171717] overflow-hidden animate-on-scroll"
      style={{ minHeight: "578px" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Orange Glow Animation - Left Side */}
          <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[578px]">
            {/* Background gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255, 77, 0, 0.05) 0%, transparent 70%)",
              }}
            />
            <OrangeGlowAnimation />
          </div>

          {/* Content - Right Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center px-6 lg:px-16 py-16 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-[500px]"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-[40px] font-medium text-white mb-6 leading-tight"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                <span
                  className="font-bold"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  Easier
                </span>
                {" & "}
                <span
                  className="font-bold"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  Smarter
                </span>
              </h2>

              <p
                className="text-gray-300 text-base md:text-lg leading-relaxed mb-8"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  opacity: 0.8,
                }}
              >
                This enables teams to simplify complex workflows, improve
                decision making, & operate with greater control.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 text-white text-sm font-medium px-6 py-3 rounded-full border border-white/20 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Learn More
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:translate-x-1 transition-all duration-300">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasierSmarterSection;
