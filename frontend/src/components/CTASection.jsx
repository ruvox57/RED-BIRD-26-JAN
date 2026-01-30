import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            setIsVisible(true);
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
      className="relative bg-transparent py-28 lg:py-36 overflow-hidden animate-on-scroll"
    >
      {/* Animation Keyframes */}
      <style>{`
        @keyframes breathe {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, 0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1.05);
          }
        }
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .cta-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
        .cta-particle {
          animation: float-particle 3s ease-out infinite;
        }
        .cta-shimmer:hover::after {
          animation: shimmer 1.5s ease-in-out infinite;
        }
        .cta-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .cta-slide-up-delay-1 {
          animation: slide-up 0.8s ease-out 0.15s forwards;
          opacity: 0;
        }
        .cta-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
        .cta-fade-in {
          animation: fade-in 1s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Background Gradient Sphere - Enhanced with breathing animation */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none cta-breathe">
        {/* Outer glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgba(255,170,0,0.35) 0%, rgba(255,85,0,0.25) 30%, transparent 55%)",
            filter: "blur(80px)",
          }}
        />
        {/* Mid glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, #FF8800 0%, #FF5500 20%, #CC3300 35%, transparent 55%)",
            filter: "blur(40px)",
          }}
        />
        {/* Core glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, #FFCC00 0%, #FFAA00 10%, #FF8800 20%, transparent 40%)",
            filter: "blur(15px)",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full cta-particle"
            style={{
              left: `${15 + i * 10}%`,
              bottom: "0",
              animationDelay: `${i * 0.4}s`,
              opacity: 0.6 + (i % 3) * 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-8 leading-tight ${isVisible ? "cta-slide-up" : "opacity-0"}`}
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <span className="font-bold">Bring</span>{" "}
          <span className="font-medium">Clarity</span>
          <br />
          <span className="font-medium">to Enterprise</span>
          <br />
          <span className="font-bold">Financial Systems</span>
        </h2>

        <p
          className={`text-gray-400 text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed ${isVisible ? "cta-slide-up-delay-1" : "opacity-0"}`}
          style={{ fontFamily: "'Urbanist', sans-serif" }}
        >
          Equinio builds compliance first platforms and products that help
          enterprises gain control, visibility, and confidence across complex
          financial workflows.
        </p>

        <div className={isVisible ? "cta-slide-up-delay-2" : "opacity-0"}>
          <Link
            to="/contact"
            className="cta-shimmer group relative inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-black text-sm font-semibold px-8 py-4 rounded-full transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.4),0_0_100px_rgba(255,136,0,0.2)] hover:scale-105 overflow-hidden"
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            {/* Shimmer overlay */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s ease-in-out infinite",
              }}
            />
            <span className="relative z-10">Get Started</span>
            <span className="relative z-10 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-1 group-hover:bg-orange-500 transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
