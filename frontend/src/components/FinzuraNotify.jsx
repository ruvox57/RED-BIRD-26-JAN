import React from "react";
import GlobalBackground from "./GlobalBackground";

const FinzuraNotify = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background for consistency */}
      <GlobalBackground
        lineCount={4}
        dotCount={200}
        lineColors={[
          { start: "rgba(255, 77, 0, 0.18)", end: "rgba(255, 120, 50, 0.04)" },
          { start: "rgba(255, 100, 50, 0.14)", end: "rgba(255, 150, 80, 0.03)" },
          { start: "rgba(255, 60, 0, 0.12)", end: "rgba(255, 100, 40, 0.02)" },
          { start: "rgba(255, 90, 30, 0.10)", end: "rgba(255, 130, 60, 0.025)" },
        ]}
        dotColor="255, 255, 255"
        dotOpacityRange={[0.03, 0.12]}
        parallaxIntensity={0.25}
        motionSpeed={1.2}
      />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl w-full mx-auto bg-black/70 rounded-3xl shadow-2xl p-8 md:p-14 border border-orange-500/30 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            FINZURA
          </h1>
          <span className="inline-block bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full text-base font-semibold mb-6 border border-orange-500/30">
            Coming Soon
          </span>
          <h2 className="text-2xl md:text-3xl text-white font-semibold mb-4 text-center">Next-Generation Treasury Platform</h2>
          <p className="text-gray-300 text-center max-w-2xl mb-8 text-lg" style={{ fontFamily: "'Urbanist', sans-serif" }}>
            Finzura is our next-generation financial platform, designed to bring unprecedented clarity and automation to enterprise treasury operations. Stay tuned for a new era in financial management, with real-time insights, intelligent automation, and enterprise-grade security at its core.
          </p>
          <div className="w-full grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <h3 className="text-lg font-bold text-white mb-2">Treasury Automation</h3>
              <p className="text-gray-400 text-base">Streamline complex workflows and reduce manual effort with intelligent automation.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <h3 className="text-lg font-bold text-white mb-2">Real-Time Insights</h3>
              <p className="text-gray-400 text-base">Gain instant visibility into cash, liquidity, and risk with advanced analytics.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <h3 className="text-lg font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400 text-base">Built with compliance and security at its core to protect your financial data.</p>
            </div>
          </div>
          <div className="w-full text-center mt-2">
            <span className="text-orange-400 text-lg font-semibold">Launching 2026</span>
            <p className="text-gray-400 mt-2">For updates, follow us on our official channels or check back soon!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinzuraNotify;
