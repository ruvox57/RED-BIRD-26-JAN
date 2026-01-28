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
      className="relative bg-[#171717] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Desktop Layout: 2-column asymmetric grid */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-4">
          {/* Left Column - Visuals stacked */}
          <div className="col-span-5 flex flex-col gap-4">
            {/* Stacked Cards Visualization */}
            <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group h-[280px]">
              <div className="relative h-full flex items-center justify-center">
                <div
                  className="relative"
                  style={{ width: "240px", height: "180px" }}
                >
                  {/* Card 1 - Back (darkest orange) */}
                  <div
                    className="absolute w-24 h-32 rounded-xl shadow-2xl transition-all duration-500 group-hover:-translate-x-2 group-hover:-rotate-12"
                    style={{
                      left: "10px",
                      top: "25px",
                      background:
                        "linear-gradient(135deg, #CC4400 0%, #993300 100%)",
                      transform: "rotate(-8deg)",
                    }}
                  >
                    <div className="absolute top-3 left-3 w-6 h-4 bg-black/20 rounded" />
                    <div className="absolute bottom-5 left-3">
                      <span
                        className="text-white/70 text-xl font-bold"
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                      >
                        80%
                      </span>
                    </div>
                  </div>

                  {/* Card 2 - Middle (medium orange) */}
                  <div
                    className="absolute w-24 h-32 rounded-xl shadow-2xl transition-all duration-500 group-hover:rotate-2"
                    style={{
                      left: "60px",
                      top: "12px",
                      background:
                        "linear-gradient(135deg, #FF6600 0%, #CC4400 100%)",
                      transform: "rotate(-2deg)",
                    }}
                  >
                    <div className="absolute top-3 left-3 w-6 h-4 bg-black/20 rounded" />
                    <div className="absolute top-3 right-3 w-4 h-4 bg-black/20 rounded" />
                    <div className="absolute bottom-5 left-3">
                      <span
                        className="text-white/80 text-xl font-bold"
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                      >
                        85%
                      </span>
                    </div>
                  </div>

                  {/* Card 3 - Front (white) */}
                  <div
                    className="absolute w-24 h-32 bg-white rounded-xl shadow-2xl transition-all duration-500 group-hover:translate-x-2 group-hover:rotate-10"
                    style={{
                      left: "110px",
                      top: "0px",
                      transform: "rotate(6deg)",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <div className="absolute top-3 left-3 w-6 h-4 bg-gray-200 rounded" />
                    <div className="absolute top-3 right-3 w-4 h-4 bg-gray-200 rounded" />
                    <div className="absolute bottom-5 left-3 flex items-baseline gap-1">
                      <span
                        className="text-gray-800 text-xl font-bold"
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                      >
                        95%
                      </span>
                      <span className="text-green-500 text-[10px] font-bold">
                        ↑8%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Bar Chart */}
            <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group h-[280px]">
              <div className="h-full flex items-end justify-center gap-5 pb-4">
                {[
                  { height: 45 },
                  { height: 65 },
                  { height: 85 },
                  { height: 100 },
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
                      className="w-12 h-full rounded-t-lg relative overflow-hidden"
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
                      className="absolute top-0 -right-2 w-2 h-full rounded-tr-lg"
                      style={{
                        background:
                          "linear-gradient(180deg, #CC4400 0%, #993300 100%)",
                        transform: "skewY(-45deg)",
                        transformOrigin: "top left",
                      }}
                    />
                    {/* 3D top */}
                    <div
                      className="absolute -top-1.5 left-0 w-12 h-3"
                      style={{
                        background:
                          "linear-gradient(90deg, #FFAA00 0%, #FF8800 100%)",
                        transform: "skewX(-45deg)",
                        transformOrigin: "bottom left",
                        borderRadius: "3px 3px 0 0",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Pattern */}
            <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group h-[280px]">
              <div className="h-full flex items-center justify-center">
                <div
                  className="grid gap-3"
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
                        className={`w-8 h-8 rounded-full transition-all duration-500 ${
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
          </div>

          {/* Right Column - Text content stacked */}
          <div className="col-span-7 flex flex-col gap-4">
            {/* Clear Financial Visibility */}
            <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group flex flex-col justify-center h-[280px]">
              <h3
                className="text-xl lg:text-2xl text-white mb-4"
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
                className="text-gray-400 text-sm mb-6 leading-relaxed max-w-md"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Gain a structured, real time view across financial workflows to
                improve accuracy, forecasting, and decision making.
              </p>
              <button className="group/btn inline-flex items-center gap-3 text-white text-sm font-medium px-5 py-2.5 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-orange-500/50 hover:bg-[#222] transition-all duration-300 w-fit">
                Learn More
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-orange-500/30 group-hover/btn:translate-x-1 transition-all duration-300">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </div>

            {/* Transparent Performance Tracking */}
            <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group flex flex-col justify-center h-[280px]">
              <h3
                className="text-xl lg:text-2xl text-white mb-4"
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
                className="text-gray-400 text-sm mb-6 leading-relaxed max-w-md"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Track operational and financial performance with clear metrics
                that are easy to understand, review, and act on.
              </p>
              <button className="group/btn inline-flex items-center gap-3 text-white text-sm font-medium px-5 py-2.5 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-orange-500/50 hover:bg-[#222] transition-all duration-300 w-fit">
                Learn More
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-orange-500/30 group-hover/btn:translate-x-1 transition-all duration-300">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </div>

            {/* Seamless Workflow Alignment */}
            <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group flex flex-col justify-center h-[280px]">
              <h3
                className="text-xl lg:text-2xl text-white mb-4"
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
                className="text-gray-400 text-sm mb-6 leading-relaxed max-w-md"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                Align teams, systems, and data across finance and operations
                reducing handoffs, rework, and delays.
              </p>
              <button className="group/btn inline-flex items-center gap-3 text-white text-sm font-medium px-5 py-2.5 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-orange-500/50 hover:bg-[#222] transition-all duration-300 w-fit">
                Learn More
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-orange-500/30 group-hover/btn:translate-x-1 transition-all duration-300">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Single column stacked */}
        <div className="lg:hidden flex flex-col gap-4">
          {/* Stacked Cards Visualization */}
          <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group min-h-[240px]">
            <div className="relative h-full flex items-center justify-center py-4">
              <div
                className="relative"
                style={{ width: "220px", height: "160px" }}
              >
                {/* Card 1 - Back (darkest orange) */}
                <div
                  className="absolute w-20 h-28 rounded-xl shadow-2xl"
                  style={{
                    left: "10px",
                    top: "20px",
                    background:
                      "linear-gradient(135deg, #CC4400 0%, #993300 100%)",
                    transform: "rotate(-8deg)",
                  }}
                >
                  <div className="absolute top-3 left-3 w-5 h-3 bg-black/20 rounded" />
                  <div className="absolute bottom-4 left-3">
                    <span
                      className="text-white/70 text-lg font-bold"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      80%
                    </span>
                  </div>
                </div>

                {/* Card 2 - Middle (medium orange) */}
                <div
                  className="absolute w-20 h-28 rounded-xl shadow-2xl"
                  style={{
                    left: "55px",
                    top: "10px",
                    background:
                      "linear-gradient(135deg, #FF6600 0%, #CC4400 100%)",
                    transform: "rotate(-2deg)",
                  }}
                >
                  <div className="absolute top-3 left-3 w-5 h-3 bg-black/20 rounded" />
                  <div className="absolute top-3 right-3 w-3 h-3 bg-black/20 rounded" />
                  <div className="absolute bottom-4 left-3">
                    <span
                      className="text-white/80 text-lg font-bold"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      85%
                    </span>
                  </div>
                </div>

                {/* Card 3 - Front (white) */}
                <div
                  className="absolute w-20 h-28 bg-white rounded-xl shadow-2xl"
                  style={{
                    left: "100px",
                    top: "0px",
                    transform: "rotate(6deg)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div className="absolute top-3 left-3 w-5 h-3 bg-gray-200 rounded" />
                  <div className="absolute top-3 right-3 w-3 h-3 bg-gray-200 rounded" />
                  <div className="absolute bottom-4 left-3 flex items-baseline gap-1">
                    <span
                      className="text-gray-800 text-lg font-bold"
                      style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                      95%
                    </span>
                    <span className="text-green-500 text-[8px] font-bold">
                      ↑8%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clear Financial Visibility */}
          <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group flex flex-col justify-center">
            <h3
              className="text-xl text-white mb-3"
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
              className="text-gray-400 text-sm mb-5 leading-relaxed"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Gain a structured, real time view across financial workflows to
              improve accuracy, forecasting, and decision making.
            </p>
            <button className="group/btn inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-orange-500/50 hover:bg-[#222] transition-all duration-300 w-fit">
              Learn More
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-orange-500/30 transition-all duration-300">
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          </div>

          {/* 3D Bar Chart */}
          <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group min-h-[200px]">
            <div className="h-full flex items-end justify-center gap-4 pb-4">
              {[
                { height: 45 },
                { height: 65 },
                { height: 85 },
                { height: 100 },
              ].map((bar, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center"
                  style={{ height: `${bar.height}%` }}
                >
                  {/* Bar face */}
                  <div
                    className="w-10 h-full rounded-t-lg relative overflow-hidden"
                    style={{
                      background: `linear-gradient(180deg, #FF8800 0%, #FF5500 100%)`,
                      boxShadow: "0 20px 60px rgba(255, 85, 0, 0.3)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent w-1/3" />
                  </div>
                  {/* 3D right side */}
                  <div
                    className="absolute top-0 -right-1.5 w-1.5 h-full rounded-tr-lg"
                    style={{
                      background:
                        "linear-gradient(180deg, #CC4400 0%, #993300 100%)",
                      transform: "skewY(-45deg)",
                      transformOrigin: "top left",
                    }}
                  />
                  {/* 3D top */}
                  <div
                    className="absolute -top-1 left-0 w-10 h-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #FFAA00 0%, #FF8800 100%)",
                      transform: "skewX(-45deg)",
                      transformOrigin: "bottom left",
                      borderRadius: "2px 2px 0 0",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Performance Tracking */}
          <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group flex flex-col justify-center">
            <h3
              className="text-xl text-white mb-3"
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
              className="text-gray-400 text-sm mb-5 leading-relaxed"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Track operational and financial performance with clear metrics
              that are easy to understand, review, and act on.
            </p>
            <button className="group/btn inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-orange-500/50 hover:bg-[#222] transition-all duration-300 w-fit">
              Learn More
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-orange-500/30 transition-all duration-300">
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          </div>

          {/* Dots Pattern */}
          <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group min-h-[200px]">
            <div className="h-full flex items-center justify-center py-4">
              <div
                className="grid gap-2"
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
                      className={`w-7 h-7 rounded-full transition-all duration-500 ${
                        color === "orange"
                          ? "bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/30"
                          : color === "gray"
                            ? "bg-gray-500"
                            : "bg-transparent"
                      }`}
                    />
                  ))}
              </div>
            </div>
          </div>

          {/* Seamless Workflow Alignment */}
          <div className="ops-card animate-on-scroll bg-[#111111] rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-500 group flex flex-col justify-center">
            <h3
              className="text-xl text-white mb-3"
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
              className="text-gray-400 text-sm mb-5 leading-relaxed"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              Align teams, systems, and data across finance and operations
              reducing handoffs, rework, and delays.
            </p>
            <button className="group/btn inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-orange-500/50 hover:bg-[#222] transition-all duration-300 w-fit">
              Learn More
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-orange-500/30 transition-all duration-300">
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
