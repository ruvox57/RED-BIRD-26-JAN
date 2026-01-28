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
      className="relative bg-[#0a0a0a] py-24"
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header with Orange Border on Desktop */}
        <div className="text-center mb-16">
          <div
            className="inline-block px-8 py-6 rounded-2xl lg:border-2 lg:border-orange-500/60"
            style={{
              background: "transparent",
            }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight"
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

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
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
              <div className="hidden lg:block absolute bottom-0 left-0 p-6 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent w-1/2">
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
              {/* Lightning bolt icon with animations (Desktop Only) */}
              <div
                className={`hidden lg:block absolute bottom-6 right-1/4 ${isChartVisible ? "lightning-animated" : ""}`}
              >
                <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
                  <defs>
                    <linearGradient
                      id="boltGradient"
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
                      id="boltGlow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path
                    d="M45 0L0 70H30L25 120L80 45H45L45 0Z"
                    fill="url(#boltGradient)"
                    filter="url(#boltGlow)"
                  />
                </svg>
              </div>
            </div>

            {/* Built for Fast Adoption - Mobile Only Card */}
            <div className="lg:hidden feature-card animate-on-scroll bg-[#111111] rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500 relative overflow-hidden">
              {/* Lightning bolt positioned to the right, not overlapping text */}
              <div className="flex items-start gap-4">
                {/* Text content */}
                <div className="flex-1 pr-16">
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
              </div>
              {/* Lightning bolt icon - positioned to the right */}
              <div
                className={`absolute right-4 top-1/2 -translate-y-1/2 ${isChartVisible ? "lightning-animated" : ""}`}
              >
                <svg width="50" height="75" viewBox="0 0 80 120" fill="none">
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
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
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
                className="text-gray-500 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Equinio builds modular products like Ruvox on a shared platform
                for consistent, scalable clarity.
              </p>

              {/* Orbital/Circular Design */}
              <div className="relative h-48 flex items-center justify-center">
                {/* Outer ring */}
                <div className="absolute w-44 h-44 rounded-full border border-gray-700" />
                {/* Middle ring */}
                <div className="absolute w-32 h-32 rounded-full border border-gray-600" />
                {/* Inner ring with gradient */}
                <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                {/* Orbiting icons */}
                <div
                  className="absolute w-8 h-8 rounded-full bg-[#1a1a1a] border border-gray-600 flex items-center justify-center"
                  style={{ top: "10%", left: "20%" }}
                >
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                  </svg>
                </div>
                <div
                  className="absolute w-8 h-8 rounded-full bg-[#1a1a1a] border border-gray-600 flex items-center justify-center"
                  style={{ top: "10%", right: "20%" }}
                >
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
                  </svg>
                </div>
                <div
                  className="absolute w-8 h-8 rounded-full bg-[#1a1a1a] border border-gray-600 flex items-center justify-center"
                  style={{ bottom: "15%", left: "15%" }}
                >
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  className="absolute w-8 h-8 rounded-full bg-[#1a1a1a] border border-gray-600 flex items-center justify-center"
                  style={{ bottom: "15%", right: "15%" }}
                >
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
