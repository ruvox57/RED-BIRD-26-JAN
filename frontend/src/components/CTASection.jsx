import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
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
      className="relative bg-[#0a0a0a] py-32 overflow-hidden animate-on-scroll"
    >
      {/* Background Gradient Sphere */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none">
        {/* Outer glow */}
        <div
          className="absolute inset-0 animate-pulse-slow"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgba(255,170,0,0.3) 0%, rgba(255,85,0,0.2) 30%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        {/* Inner glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, #FF8800 0%, #FF5500 25%, #CC3300 40%, transparent 60%)",
            filter: "blur(30px)",
          }}
        />
        {/* Core */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, #FFAA00 0%, #FF8800 15%, transparent 40%)",
            filter: "blur(10px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          Bring <span className="font-light">Clarity</span> to Enterprise
          <br />
          Financial Systems
        </h2>

        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Equinio builds compliance first platforms and products that help
          enterprises gain control, visibility, and confidence across complex
          financial workflows.
        </p>

        <button className="group inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105">
          Get Started
          <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
