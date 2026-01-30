import React, { useEffect, useRef, useState } from "react";

const FoundationSection = () => {
  const sectionRef = useRef(null);
  const chartRef = useRef(null);
  const [isChartVisible, setIsChartVisible] = useState(false);

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

    const cards = sectionRef.current?.querySelectorAll(".feature-card");
    cards?.forEach((card) => observer.observe(card));

    // Separate observer for chart animation
    const chartObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsChartVisible(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (chartRef.current) {
      chartObserver.observe(chartRef.current);
    }

    return () => {
      observer.disconnect();
      chartObserver.disconnect();
    };
  }, []);

  // Chart path for animation
  const chartLinePath =
    "M0,250 L50,220 L100,180 L150,200 L200,150 L250,170 L300,120 L350,140 L400,80 L450,100 L500,60 L550,80 L600,40";
  const chartAreaPath =
    "M0,250 L50,220 L100,180 L150,200 L200,150 L250,170 L300,120 L350,140 L400,80 L450,100 L500,60 L550,80 L600,40 L600,300 L0,300 Z";

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="relative bg-transparent py-24"
    >
      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(255, 136, 0, 0.4));
            opacity: 0.9;
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(255, 136, 0, 0.8)) drop-shadow(0 0 50px rgba(255, 136, 0, 0.4));
            opacity: 1;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes draw-line {
          0% { stroke-dashoffset: 1200; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-flow {
          0% { stop-color: #FF6B00; }
          50% { stop-color: #FF8800; }
          100% { stop-color: #FF6B00; }
        }
        @keyframes data-point-pulse {
          0%, 100% {
            r: 6;
            opacity: 1;
          }
          50% {
            r: 10;
            opacity: 0.7;
          }
        }
        .chart-line-animated {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: draw-line 2s ease-out forwards;
        }
        .chart-area-animated {
          opacity: 0;
          animation: fade-in-up 1.5s ease-out 0.5s forwards;
        }
        .shimmer-overlay {
          animation: shimmer 3s ease-in-out infinite;
        }
        .lightning-animated {
          animation: pulse-glow 2s ease-in-out infinite, float 3s ease-in-out infinite;
        }
        .data-point-animated {
          animation: data-point-pulse 2s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Orange Border on Desktop */}
        <div className="text-center mb-10 md:mb-16">
          <div
            className="inline-block px-4 sm:px-8 py-4 sm:py-6 rounded-2xl lg:border-2 lg:border-orange-500/60"
            style={{
              background: "transparent",
            }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span
                className="font-bold"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                One clear
              </span>{" "}
              foundation.
              <br />
              Total financial control.
            </h2>
          </div>
        </div>

        {/* Asymmetric Grid Layout - Better mobile spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
            {/* Enterprise Financial Foundation - Top Left */}
            <div className="feature-card animate-on-scroll bg-[#111111] rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500">
              <h3
                className="text-lg font-semibold text-white mb-2"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Enterprise Financial Foundation
              </h3>
              <p
                className="text-gray-500 text-sm leading-relaxed"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Equinio designs the core foundation that brings structure,
                visibility, and control to complex financial workflows across
                the enterprise.
              </p>
            </div>

            {/* Chart Visualization - Large Card */}
            <div
              ref={chartRef}
              className="feature-card animate-on-scroll bg-[#111111] rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-all duration-500 group relative flex-1 min-h-[280px]"
            >
              {/* Orange gradient chart background */}
              <div className="absolute inset-0">
                <svg
                  viewBox="0 0 600 300"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.9">
                        {isChartVisible && (
                          <animate
                            attributeName="stop-color"
                            values="#FF6B00;#FF8800;#FF6B00"
                            dur="4s"
                            repeatCount="indefinite"
                          />
                        )}
                      </stop>
                      <stop offset="100%" stopColor="#FF3D00" stopOpacity="0.3">
                        {isChartVisible && (
                          <animate
                            attributeName="stop-opacity"
                            values="0.3;0.5;0.3"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        )}
                      </stop>
                    </linearGradient>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FF8800" />
                      <stop offset="50%" stopColor="#FFAA00" />
                      <stop offset="100%" stopColor="#FF5500" />
                    </linearGradient>
                    <linearGradient
                      id="shimmerGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                    <clipPath id="chartClip">
                      <path d={chartAreaPath} />
                    </clipPath>
                  </defs>

                  {/* Area chart with animation */}
                  <path
                    d={chartAreaPath}
                    fill="url(#chartGradient)"
                    className={
                      isChartVisible ? "chart-area-animated" : "opacity-0"
                    }
                  />

                  {/* Shimmer overlay on chart */}
                  {isChartVisible && (
                    <g clipPath="url(#chartClip)">
                      <rect
                        x="-600"
                        y="0"
                        width="600"
                        height="300"
                        fill="url(#shimmerGradient)"
                        className="shimmer-overlay"
                      />
                    </g>
                  )}

                  {/* Line on top with draw animation */}
                  <path
                    d={chartLinePath}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={isChartVisible ? "chart-line-animated" : ""}
                    style={{ opacity: isChartVisible ? 1 : 0 }}
                  />

                  {/* Data point with pulse animation */}
                  <circle
                    cx="450"
                    cy="100"
                    r="6"
                    fill="white"
                    className={isChartVisible ? "data-point-animated" : ""}
                    style={{
                      opacity: isChartVisible ? 1 : 0,
                      transition: "opacity 0.5s ease-out 1.5s",
                    }}
                  />
                  <circle
                    cx="450"
                    cy="100"
                    r="12"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeOpacity="0.3"
                    style={{
                      opacity: isChartVisible ? 1 : 0,
                      transition: "opacity 0.5s ease-out 1.5s",
                    }}
                  >
                    {isChartVisible && (
                      <animate
                        attributeName="r"
                        values="12;20;12"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    )}
                    {isChartVisible && (
                      <animate
                        attributeName="stroke-opacity"
                        values="0.3;0;0.3"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    )}
                  </circle>
                  <line
                    x1="450"
                    y1="100"
                    x2="450"
                    y2="0"
                    stroke="white"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                    strokeDasharray="4,4"
                    style={{
                      opacity: isChartVisible ? 1 : 0,
                      transition: "opacity 0.5s ease-out 1.5s",
                    }}
                  />
                </svg>
              </div>
              {/* Built for Fast Adoption - Overlay text (Desktop Only) */}
              <div className="hidden lg:block absolute bottom-0 left-0 p-6 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent w-1/2 z-10">
                <h3
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  Built for Fast Adoption
                </h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "'Urbanist', sans-serif" }}
                >
                  Equinio platforms are designed to be adopted quickly,
                  integrate cleanly, and deliver value without disrupting
                  existing systems.
                </p>
              </div>
              {/* Large 3D Lightning bolt - extends beyond card (Desktop Only) */}
              <div
                className={`hidden lg:block absolute -bottom-8 right-8 z-20 ${isChartVisible ? "lightning-animated" : ""}`}
                style={{ transform: "rotate(-5deg)" }}
              >
                <svg width="180" height="280" viewBox="0 0 180 280" fill="none">
                  <defs>
                    <linearGradient
                      id="boltGradientLarge"
                      x1="90"
                      y1="0"
                      x2="90"
                      y2="280"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFFFFF" />
                      <stop offset="0.3" stopColor="#FFF5E6" />
                      <stop offset="0.6" stopColor="#FFCC80" />
                      <stop offset="1" stopColor="#FF8800" />
                    </linearGradient>
                    <filter
                      id="boltGlowLarge"
                      x="-100%"
                      y="-100%"
                      width="300%"
                      height="300%"
                    >
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    {/* Drop shadow for 3D effect */}
                    <filter
                      id="boltShadow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feDropShadow
                        dx="5"
                        dy="8"
                        stdDeviation="6"
                        floodColor="#000000"
                        floodOpacity="0.4"
                      />
                    </filter>
                  </defs>
                  {/* Shadow layer */}
                  <path
                    d="M100 0L10 160H70L55 280L180 100H100L100 0Z"
                    fill="rgba(0,0,0,0.3)"
                    transform="translate(8, 12)"
                  />
                  {/* Main bolt */}
                  <path
                    d="M100 0L10 160H70L55 280L180 100H100L100 0Z"
                    fill="url(#boltGradientLarge)"
                    filter="url(#boltGlowLarge)"
                  />
                  {/* Highlight edge for 3D effect */}
                  <path
                    d="M100 0L10 160H70"
                    fill="none"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            {/* Built for Fast Adoption - Mobile Only Card */}
            <div className="lg:hidden feature-card animate-on-scroll bg-[#111111] rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500 relative overflow-hidden min-h-[120px]">
              {/* Lightning bolt positioned to the right, not overlapping text */}
              <div className="flex items-start gap-4">
                {/* Text content - adjusted padding for smaller screens */}
                <div className="flex-1 pr-12 sm:pr-16">
                  <h3
                    className="text-base sm:text-lg font-semibold text-white mb-2"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    Built for Fast Adoption
                  </h3>
                  <p
                    className="text-gray-400 text-xs sm:text-sm leading-relaxed"
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  >
                    Equinio platforms are designed to be adopted quickly,
                    integrate cleanly, and deliver value without disrupting
                    existing systems.
                  </p>
                </div>
              </div>
              {/* Lightning bolt icon - positioned to the right with better mobile sizing */}
              <div
                className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 ${isChartVisible ? "lightning-animated" : ""}`}
              >
                <svg
                  width="40"
                  height="60"
                  viewBox="0 0 80 120"
                  fill="none"
                  className="sm:w-[50px] sm:h-[75px]"
                >
                  <defs>
                    <linearGradient
                      id="boltGradientMobile"
                      x1="40"
                      y1="0"
                      x2="40"
                      y2="120"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFFFFF" />
                      <stop offset="1" stopColor="#FF8800" />
                    </linearGradient>
                    <filter
                      id="boltGlowMobile"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path
                    d="M45 0L0 70H30L25 120L80 45H45L45 0Z"
                    fill="url(#boltGradientMobile)"
                    filter="url(#boltGlowMobile)"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
            {/* Compliance First by Design */}
            <div className="feature-card animate-on-scroll bg-[#111111] rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500">
              <h3
                className="text-lg font-semibold text-white mb-2"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Compliance First by Design
              </h3>
              <p
                className="text-gray-500 text-sm leading-relaxed"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Every Equinio product is built with governance, controls, and
                audit readiness at its core not added later.
              </p>
            </div>

            {/* Products Built on One Platform */}
            <div className="feature-card animate-on-scroll bg-[#111111] rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500 flex-1">
              <h3
                className="text-lg font-semibold text-white mb-1"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Products Built on
              </h3>
              <h3
                className="text-lg font-semibold text-white mb-2"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                One Platform
              </h3>
              <p
                className="text-gray-500 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Equinio builds modular products like Ruvox on a shared platform
                for consistent, scalable clarity.
              </p>

              {/* Orbital Design - Using Image */}
              <div className="relative flex items-center justify-center w-full">
                <img
                  src="/one-clear-foundation.jpg"
                  alt="Products Built on One Platform - Orbital Design"
                  className="w-full h-auto object-contain scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
