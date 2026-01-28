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

  // Slide animation variants
  const slideFromLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.0,
      },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.0,
        delay: 0.2,
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#171717] overflow-hidden animate-on-scroll"
      style={{ minHeight: "578px" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Orange Glow Animation - Left Side with slide animation */}
          <motion.div
            className="relative w-full lg:w-1/2 h-[400px] lg:h-[578px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideFromLeft}
          >
            {/* Background gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255, 77, 0, 0.05) 0%, transparent 70%)",
              }}
            />
            <OrangeGlowAnimation />
          </motion.div>

          {/* Content - Right Side with slide animation */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-start justify-center px-6 lg:px-16 py-16 lg:py-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideFromRight}
          >
            <motion.div
              className="max-w-[500px]"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-[40px] font-medium text-white mb-6 leading-tight"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  letterSpacing: "-0.02em",
                }}
                variants={slideUp}
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
              </motion.h2>

              <motion.p
                className="text-gray-300 text-base md:text-lg leading-relaxed mb-8"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  opacity: 0.8,
                }}
                variants={slideUp}
              >
                This enables teams to simplify complex workflows, improve
                decision making, & operate with greater control.
              </motion.p>

              <motion.button
                variants={slideUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 text-[#171717] text-sm font-semibold px-6 py-3 rounded-full bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Learn More
                <span className="w-6 h-6 rounded-full bg-[#171717]/10 flex items-center justify-center group-hover:bg-[#171717]/20 group-hover:translate-x-1 transition-all duration-300">
                  <ArrowRight className="w-3 h-3 text-[#171717]" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EasierSmarterSection;
