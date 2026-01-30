import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import HeroBackground from "./HeroBackground";

const HeroSection = () => {
  // Animation variants matching reference exactly
  const tagAnimation = {
    initial: {
      opacity: 0.001,
      scale: 1.3,
      y: 20,
      transformPerspective: 1200,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transformPerspective: 1200,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1.2,
        delay: 0.2,
      },
    },
  };

  const headlineAnimation = {
    initial: {
      opacity: 0.001,
      scale: 1,
      y: 35,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
        delay: 0.8,
      },
    },
  };

  const subtextAnimation = {
    initial: {
      opacity: 0.001,
      scale: 1,
      y: 35,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
        delay: 1.0,
      },
    },
  };

  const buttonsAnimation = {
    initial: {
      opacity: 0.001,
      scale: 1,
      y: 35,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1.0,
        delay: 1.2,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full bg-[#171717] overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Animated Background - Lines and Dots */}
      <HeroBackground
        lineCount={3}
        dotCount={100}
        lineColors={[
          { start: "rgba(255, 77, 0, 0.18)", end: "rgba(255, 120, 50, 0.04)" },
          {
            start: "rgba(255, 100, 50, 0.14)",
            end: "rgba(255, 150, 80, 0.03)",
          },
          { start: "rgba(255, 60, 0, 0.12)", end: "rgba(255, 100, 40, 0.02)" },
        ]}
        dotColor="255, 255, 255"
        dotOpacityRange={[0.02, 0.1]}
        enableParallax={true}
      />

      {/* Background Image Layer - Matching Reference (Fit, not Fill) */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 2 }}
      >
        {/* Background Image - Contained/Fit on desktop, Cover/Fill on mobile */}
        <div
          className="absolute inset-0 w-full h-full hero-bg"
          style={{
            backgroundImage: "url(/hero-bg.jpg)",
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            opacity: 0.6,
          }}
        />
      </div>

      {/* Floating Particles Animation - Ambient, slow, looped */}
      <FloatingParticles
        particleCount={60}
        minSize={1}
        maxSize={2.5}
        minSpeed={0.15}
        maxSpeed={0.5}
        minOpacity={0.08}
        maxOpacity={0.25}
        color="255, 255, 255"
      />

      {/* Content Container - Matching Reference Layout */}
      <div
        className="relative z-10 flex flex-col items-center justify-center w-full hero-content-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 100px",
          minHeight: "100vh",
        }}
      >
        {/* Inner Content Container */}
        <div
          className="flex flex-col items-center justify-center w-full"
          style={{ maxWidth: "900px" }}
        >
          {/* Content Box with padding */}
          <div
            className="flex flex-col items-center justify-center w-full hero-content-box"
            style={{
              gap: "18px",
              padding: "80px 60px 60px",
            }}
          >
            {/* Tag - Operational Impact */}
            <motion.div
              variants={tagAnimation}
              initial="initial"
              animate="animate"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                border: "1px solid rgba(255, 77, 0, 0.4)",
                backgroundColor: "rgba(255, 77, 0, 0.1)",
                fontFamily: "'Urbanist', sans-serif",
              }}
            >
              <span
                className="text-xs font-semibold tracking-wide"
                style={{ color: "#ff4d00" }}
              >
                Operational Impact
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={headlineAnimation}
              initial="initial"
              animate="animate"
              className="text-center hero-headline"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "52px",
                fontWeight: 500,
                color: "#ffffff",
                lineHeight: "1.15em",
                letterSpacing: "-0.02em",
                maxWidth: "700px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 700,
                }}
              >
                Clarity
              </span>{" "}
              For Enterprise Financial Workflows
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={subtextAnimation}
              initial="initial"
              animate="animate"
              className="text-center hero-subtext"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                color: "#ffffff",
                opacity: 0.8,
                lineHeight: "1.4em",
                whiteSpace: "nowrap",
              }}
            >
              Remove operational chaos. Gain control, compliance, and
              confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={buttonsAnimation}
              initial="initial"
              animate="animate"
              className="flex flex-row items-center gap-3 mt-2 hero-buttons"
            >
              {/* Get Started Button */}
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: "#ffffff",
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#000000",
                  }}
                >
                  Get Started
                  <span
                    className="flex items-center justify-center w-5 h-5 rounded-full transition-transform duration-300 group-hover:translate-x-0.5"
                    style={{ backgroundColor: "#000000" }}
                  >
                    <ArrowRight className="w-2.5 h-2.5 text-white" />
                  </span>
                </motion.button>
              </Link>

              {/* Learn More Button */}
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: "#E8E8E8",
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#171717",
                  }}
                >
                  Learn More
                  <span className="w-5 h-5 rounded-full bg-[#171717] flex items-center justify-center group-hover:translate-x-0.5 transition-all duration-300">
                    <ArrowRight className="w-2.5 h-2.5 text-white" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0.001, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1.0,
                delay: 1.4,
              },
            }}
            className="flex items-center gap-3 mt-6 hero-trust-badge"
          >
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full overflow-hidden"
                  style={{
                    border: "2px solid #171717",
                    backgroundColor: "#333333",
                  }}
                >
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt={`User ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              Trusted already by{" "}
              <span style={{ color: "#ffffff", fontWeight: 600 }}>1.2k+</span>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1199px) and (min-width: 810px) {
          #home .hero-content-container {
            padding: 100px 40px 60px !important;
          }
          #home .hero-headline {
            font-size: 42px !important;
            max-width: 90% !important;
          }
          #home .hero-subtext {
            white-space: normal !important;
            max-width: 80% !important;
            font-size: 16px !important;
          }
        }
        @media (max-width: 809px) {
          #home .hero-bg {
            background-size: cover !important;
          }
          #home .hero-content-container {
            padding: 100px 24px 60px !important;
          }
          #home .hero-content-box {
            padding: 40px 20px !important;
            gap: 16px !important;
            align-items: center !important;
          }
          #home .hero-headline {
            font-size: 32px !important;
            max-width: 100% !important;
            line-height: 1.2em !important;
            text-align: center !important;
          }
          #home .hero-subtext {
            font-size: 15px !important;
            white-space: normal !important;
            max-width: 280px !important;
            text-align: center !important;
            line-height: 1.5em !important;
          }
          #home .hero-buttons {
            flex-direction: column !important;
            width: 100% !important;
            max-width: 200px !important;
            gap: 12px !important;
            align-items: center !important;
          }
          #home .hero-buttons button {
            width: 100% !important;
            justify-content: center !important;
            padding: 12px 24px !important;
          }
          #home .hero-trust-badge {
            flex-direction: column !important;
            gap: 8px !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
        @media (max-width: 480px) {
          #home .hero-content-container {
            padding: 90px 20px 50px !important;
          }
          #home .hero-content-box {
            padding: 30px 16px !important;
            gap: 14px !important;
          }
          #home .hero-headline {
            font-size: 28px !important;
          }
          #home .hero-subtext {
            font-size: 14px !important;
            max-width: 260px !important;
          }
          #home .hero-buttons {
            max-width: 180px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
