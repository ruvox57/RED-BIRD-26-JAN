import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const OperationsSection = () => {
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
      { threshold: 0.1 },
    );

    const cards = sectionRef.current?.querySelectorAll(".ops-card");
    cards?.forEach((card, i) => {
      card.style.transitionDelay = `${i * 100}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Visual components for enlarged imagery
  const StackedCardsVisual = ({ className = "" }) => (
    <div
      className={`relative h-full w-full flex items-center justify-center ${className}`}
    >
      <img
        src="/smart-finance-cards.jpg"
        alt="Clear Financial Visibility - Stacked Cards showing 80%, 85%, 95% progress"
        className="w-full h-full object-contain scale-110"
      />
    </div>
  );

  const BarChartVisual = ({ className = "" }) => (
    <div
      className={`relative h-full w-full flex items-center justify-center ${className}`}
    >
      {/* Main 3D bar chart image */}
      <img
        src="/performance-tracking-bars.jpg"
        alt="Transparent Performance Tracking - 3D Bar Chart"
        className="w-full h-full object-contain scale-110 relative z-10"
      />
    </div>
  );

  const DotsPatternVisual = ({ className = "" }) => (
    <div
      className={`h-full w-full flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Container for overlapping images - centered */}
      <div className="flex flex-col items-center justify-center">
        {/* Top part - orange and white dots */}
        <motion.img
          src="/image (6).jpg"
          alt="Workflow alignment dots pattern top"
          className="w-[280px] lg:w-[320px] h-auto object-contain relative z-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
        />
        {/* Bottom part - brown and gray dots */}
        <motion.img
          src="/image (7).jpg"
          alt="Workflow alignment dots pattern bottom"
          className="w-[280px] lg:w-[320px] h-auto object-contain relative z-5 -mt-[100px] lg:-mt-[120px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.15,
          }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative bg-transparent py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span
              className="font-bold"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Smarter
            </span>{" "}
            Financial Operations Start Here
          </h2>
        </div>

        {/* True Alternating Layout - Row by Row */}
        <div className="space-y-12 lg:space-y-20">
          {/* Row 1: Left IMAGE + Right TEXT */}
          <div className="ops-card animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Enlarged Visual */}
            <div className="bg-[#111111] rounded-2xl p-8 lg:p-12 border border-white/10 hover:border-orange-500/30 transition-all duration-500 min-h-[320px] lg:min-h-[400px]">
              <StackedCardsVisual className="min-h-[280px] lg:min-h-[350px]" />
            </div>
            {/* Right - Text Content */}
            <div className="flex flex-col justify-center py-4">
              <h3
                className="text-2xl lg:text-3xl xl:text-4xl text-white mb-4 lg:mb-6"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                <span
                  className="font-bold"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  Clear
                </span>{" "}
                Financial Visibility
              </h3>
              <p
                className="text-gray-400 text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed max-w-lg"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Gain a structured, real time view across financial workflows to
                improve accuracy, forecasting, and decision making.
              </p>
              <Link to="/contact">
                <button className="group/btn inline-flex items-center gap-2.5 text-[#171717] text-sm font-semibold px-5 py-2.5 rounded-full bg-[#E8E8E8] hover:bg-[#DCDCDC] transition-all duration-300 w-fit">
                  Learn More
                  <span className="w-6 h-6 rounded-full bg-[#171717] flex items-center justify-center group-hover/btn:translate-x-0.5 transition-all duration-300">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Row 2: Left TEXT + Right IMAGE (reversed) */}
          <div className="ops-card animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text Content (on mobile, image comes first via order) */}
            <div className="flex flex-col justify-center py-4 order-2 lg:order-1">
              <h3
                className="text-2xl lg:text-3xl xl:text-4xl text-white mb-4 lg:mb-6"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                <span
                  className="font-bold"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  Transparent
                </span>{" "}
                Performance Tracking
              </h3>
              <p
                className="text-gray-400 text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed max-w-lg"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Track operational and financial performance with clear metrics
                that are easy to understand, review, and act on.
              </p>
              <Link to="/contact">
                <button className="group/btn inline-flex items-center gap-2.5 text-[#171717] text-sm font-semibold px-5 py-2.5 rounded-full bg-[#E8E8E8] hover:bg-[#DCDCDC] transition-all duration-300 w-fit">
                  Learn More
                  <span className="w-6 h-6 rounded-full bg-[#171717] flex items-center justify-center group-hover/btn:translate-x-0.5 transition-all duration-300">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </span>
                </button>
              </Link>
            </div>
            {/* Right - Enlarged Visual */}
            <div className="bg-[#111111] rounded-2xl p-8 lg:p-12 border border-white/10 hover:border-orange-500/30 transition-all duration-500 min-h-[320px] lg:min-h-[400px] order-1 lg:order-2">
              <BarChartVisual className="min-h-[280px] lg:min-h-[350px]" />
            </div>
          </div>

          {/* Row 3: Left IMAGE + Right TEXT */}
          <div className="ops-card animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Enlarged Visual */}
            <div className="bg-[#111111] rounded-2xl p-8 lg:p-12 border border-white/10 hover:border-orange-500/30 transition-all duration-500 min-h-[320px] lg:min-h-[400px]">
              <DotsPatternVisual className="min-h-[280px] lg:min-h-[350px]" />
            </div>
            {/* Right - Text Content */}
            <div className="flex flex-col justify-center py-4">
              <h3
                className="text-2xl lg:text-3xl xl:text-4xl text-white mb-4 lg:mb-6"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                <span
                  className="font-bold"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  Seamless
                </span>{" "}
                Workflow Alignment
              </h3>
              <p
                className="text-gray-400 text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed max-w-lg"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Align teams, systems, and data across finance and operations
                reducing handoffs, rework, and delays.
              </p>
              <Link to="/contact">
                <button className="group/btn inline-flex items-center gap-2.5 text-[#171717] text-sm font-semibold px-5 py-2.5 rounded-full bg-[#E8E8E8] hover:bg-[#DCDCDC] transition-all duration-300 w-fit">
                  Learn More
                  <span className="w-6 h-6 rounded-full bg-[#171717] flex items-center justify-center group-hover/btn:translate-x-0.5 transition-all duration-300">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
