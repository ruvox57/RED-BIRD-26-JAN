import React, { useEffect, useRef } from "react";
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

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight"
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

        {/* First Row: Stacked Cards (left) | Clear Financial Visibility (right) */}
        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {/* Stacked Cards Visualization */}
          <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-10 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group min-h-[320px]">
            <div className="relative h-full flex items-center justify-center">
              {/* Curved background line */}
              <div className="absolute inset-0 flex items-end justify-center overflow-hidden opacity-20">
                <svg viewBox="0 0 400 200" className="w-full h-32">
                  <path
                    d="M0,150 Q100,100 200,120 T400,80"
                    fill="none"
                    stroke="#666"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                  />
                </svg>
              </div>

              <div
                className="relative"
                style={{ width: "280px", height: "200px" }}
              >
                {/* Card 1 - Back (darkest orange) */}
                <div
                  className="absolute w-28 h-36 rounded-2xl shadow-2xl transition-all duration-500 group-hover:-translate-x-2 group-hover:-rotate-12"
                  style={{
                    left: "20px",
                    top: "30px",
                    background:
                      "linear-gradient(135deg, #CC4400 0%, #993300 100%)",
                    transform: "rotate(-8deg)",
                  }}
                >
                  <div className="absolute top-4 left-4 w-8 h-5 bg-black/20 rounded" />
                  <div className="absolute bottom-6 left-4">
                    <span
                      className="text-white/70 text-2xl font-bold"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      80%
                    </span>
                  </div>
                </div>

                {/* Card 2 - Middle (medium orange) */}
                <div
                  className="absolute w-28 h-36 rounded-2xl shadow-2xl transition-all duration-500 group-hover:rotate-2"
                  style={{
                    left: "80px",
                    top: "15px",
                    background:
                      "linear-gradient(135deg, #FF6600 0%, #CC4400 100%)",
                    transform: "rotate(-2deg)",
                  }}
                >
                  <div className="absolute top-4 left-4 w-8 h-5 bg-black/20 rounded" />
                  <div className="absolute top-4 right-4 w-5 h-5 bg-black/20 rounded" />
                  <div className="absolute bottom-6 left-4">
                    <span
                      className="text-white/80 text-2xl font-bold"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      85%
                    </span>
                  </div>
                </div>

                {/* Card 3 - Front (white) */}
                <div
                  className="absolute w-28 h-36 bg-white rounded-2xl shadow-2xl transition-all duration-500 group-hover:translate-x-2 group-hover:rotate-10"
                  style={{
                    left: "140px",
                    top: "0px",
                    transform: "rotate(6deg)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div className="absolute top-4 left-4 w-8 h-5 bg-gray-200 rounded" />
                  <div className="absolute top-4 right-4 w-5 h-5 bg-gray-200 rounded" />
                  <div className="absolute bottom-6 left-4 flex items-baseline gap-1">
                    <span
                      className="text-gray-800 text-2xl font-bold"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      95%
                    </span>
                    <span className="text-green-500 text-xs font-bold">
                      ↑8%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clear Financial Visibility */}
          <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-10 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group flex flex-col justify-center min-h-[320px]">
            <h3
              className="text-2xl lg:text-3xl text-white mb-5"
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
              className="text-gray-500 text-sm mb-8 leading-relaxed max-w-md"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Gain a structured, real time view across financial workflows to
              improve accuracy, forecasting, and decision making.
            </p>
            <button className="group/btn inline-flex items-center gap-3 text-white text-sm font-medium px-6 py-3 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-orange-500/50 hover:bg-[#222] transition-all duration-300 w-fit">
              Learn More
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-orange-500/30 group-hover/btn:translate-x-1 transition-all duration-300">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>

        {/* Second Row: Transparent Performance (left) | 3D Bar Chart (right) */}
        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {/* Transparent Performance Tracking */}
          <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-10 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group flex flex-col justify-center min-h-[320px]">
            <h3
              className="text-2xl lg:text-3xl text-white mb-5"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span
                className="font-bold"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Transparent
              </span>
              <br />
              Performance Tracking
            </h3>
            <p
              className="text-gray-500 text-sm mb-8 leading-relaxed max-w-md"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Track operational and financial performance with clear metrics
              that are easy to understand, review, and act on.
            </p>
            <button className="group/btn inline-flex items-center gap-3 text-white text-sm font-medium px-6 py-3 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-orange-500/50 hover:bg-[#222] transition-all duration-300 w-fit">
              Learn More
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-orange-500/30 group-hover/btn:translate-x-1 transition-all duration-300">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* 3D Bar Chart */}
          <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-10 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group min-h-[320px]">
            <div className="h-full flex items-end justify-center gap-6 lg:gap-10 pb-6">
              {[
                { height: 45, label: "Q1" },
                { height: 65, label: "Q2" },
                { height: 85, label: "Q3" },
                { height: 100, label: "Q4" },
              ].map((bar, i) => (
                <div
                  key={i}
                  className="relative transition-all duration-500 group-hover:scale-105 flex flex-col items-center"
                  style={{
                    height: `${bar.height}%`,
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  {/* Bar face */}
                  <div
                    className="w-14 lg:w-16 h-full rounded-t-xl relative overflow-hidden"
                    style={{
                      background: `linear-gradient(180deg, #FF8800 0%, #FF5500 100%)`,
                      boxShadow: "0 20px 60px rgba(255, 85, 0, 0.3)",
                    }}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent w-1/3" />
                  </div>
                  {/* 3D right side */}
                  <div
                    className="absolute top-0 -right-3 w-3 h-full rounded-tr-xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #CC4400 0%, #993300 100%)",
                      transform: "skewY(-45deg)",
                      transformOrigin: "top left",
                    }}
                  />
                  {/* 3D top */}
                  <div
                    className="absolute -top-2 left-0 w-14 lg:w-16 h-4"
                    style={{
                      background:
                        "linear-gradient(90deg, #FFAA00 0%, #FF8800 100%)",
                      transform: "skewX(-45deg)",
                      transformOrigin: "bottom left",
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Third Row: Dots Pattern (left) | Seamless Workflow (right) */}
        <div className="grid lg:grid-cols-2 gap-5">
          {/* Hexagon Dots Pattern */}
          <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-10 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group min-h-[320px]">
            <div className="h-full flex items-center justify-center">
              <div
                className="grid gap-4"
                style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
              >
                {[
                  [0, "gray", "orange", "gray", 0],
                  ["gray", "orange", "gray", "orange", "gray"],
                  ["orange", "gray", "orange", "gray", "orange"],
                  ["gray", "orange", "gray", "orange", "gray"],
                  [0, "gray", "orange", "gray", 0],
                ]
                  .flat()
                  .map((color, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full transition-all duration-500 ${
                        color === "orange"
                          ? "bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 group-hover:scale-110"
                          : color === "gray"
                            ? "bg-gray-500 group-hover:bg-gray-400"
                            : "bg-transparent"
                      }`}
                      style={{ transitionDelay: `${i * 30}ms` }}
                    />
                  ))}
              </div>
            </div>
          </div>

          {/* Seamless Workflow Alignment */}
          <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-10 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group flex flex-col justify-center min-h-[320px]">
            <h3
              className="text-2xl lg:text-3xl text-white mb-5"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span
                className="font-bold"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Seamless
              </span>{" "}
              Workflow
              <br />
              Alignment
            </h3>
            <p
              className="text-gray-500 text-sm mb-8 leading-relaxed max-w-md"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Align teams, systems, and data across finance and operations
              reducing handoffs, rework, and delays.
            </p>
            <button className="group/btn inline-flex items-center gap-3 text-white text-sm font-medium px-6 py-3 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-orange-500/50 hover:bg-[#222] transition-all duration-300 w-fit">
              Learn More
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-orange-500/30 group-hover/btn:translate-x-1 transition-all duration-300">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
