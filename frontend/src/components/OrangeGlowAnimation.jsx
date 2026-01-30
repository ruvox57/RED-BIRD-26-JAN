import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const OrangeGlowAnimation = () => {
  const [slidePosition, setSlidePosition] = useState(0);

  // Auto-sliding animation - orb moves back and forth along the track
  useEffect(() => {
    const duration = 1500; // 1.5 seconds for full cycle (faster)
    let startTime = Date.now();
    let animationId;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;

      // Smooth ease-in-out using sine wave (0 to 1 to 0)
      const position = Math.sin(progress * Math.PI);
      setSlidePosition(position);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Background ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 100, 0, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Slider Container - Pill shaped track */}
      <div className="relative flex items-center w-full max-w-[420px] px-4">
        {/* Main Track/Bar - Pill shaped container */}
        <div
          className="relative flex items-center w-full h-16 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(80, 40, 20, 0.9) 0%, rgba(120, 60, 30, 0.8) 30%, rgba(60, 30, 15, 0.6) 70%, rgba(40, 20, 10, 0.4) 100%)",
            border: "1px solid rgba(255, 120, 50, 0.3)",
            boxShadow:
              "inset 0 2px 10px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 100, 0, 0.15)",
          }}
        >
          {/* Inner gradient overlay for glass effect */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%, rgba(0, 0, 0, 0.2) 100%)",
            }}
          />

          {/* Left Icon - Star/Sparkle - Inside the track */}
          <div
            className="relative flex items-center justify-center w-12 h-12 ml-2 rounded-full"
            style={{
              background: "transparent",
              border: "1.5px solid #FF6B00",
              zIndex: 20,
            }}
          >
            {/* 4-pointed star sparkle icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.5 9.5L12 10.5L10.5 9.5L12 2Z" fill="#FF6B00" />
              <path
                d="M12 22L10.5 14.5L12 13.5L13.5 14.5L12 22Z"
                fill="#FF6B00"
              />
              <path d="M2 12L9.5 10.5L10.5 12L9.5 13.5L2 12Z" fill="#FF6B00" />
              <path
                d="M22 12L14.5 13.5L13.5 12L14.5 10.5L22 12Z"
                fill="#FF6B00"
              />
              {/* Small diagonal points */}
              <path
                d="M5 5L9 10L10 10L10 9L5 5Z"
                fill="#FF6B00"
                opacity="0.6"
              />
              <path
                d="M19 5L14 9L14 10L15 10L19 5Z"
                fill="#FF6B00"
                opacity="0.6"
              />
              <path
                d="M5 19L10 14L10 15L9 15L5 19Z"
                fill="#FF6B00"
                opacity="0.6"
              />
              <path
                d="M19 19L15 14L14 14L14 15L19 19Z"
                fill="#FF6B00"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Sliding white orb - moves between the two icons, goes behind them */}
          <div
            className="absolute z-5 flex items-center justify-center"
            style={{
              left: `calc(28px + ${slidePosition} * (100% - 56px))`,
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 5,
            }}
          >
            {/* Outer glow */}
            <div
              className="absolute w-16 h-16 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 220, 180, 0.6) 0%, rgba(255, 180, 120, 0.3) 40%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />
            {/* Middle glow */}
            <div
              className="absolute w-12 h-12 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 240, 220, 0.7) 0%, rgba(255, 200, 150, 0.4) 50%, transparent 80%)",
                filter: "blur(4px)",
              }}
            />
            {/* White orb core */}
            <div
              className="relative w-10 h-10 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, #FFFFFF 0%, #FFF5EB 40%, #FFE4D0 70%, #FFD4B8 100%)",
                boxShadow:
                  "0 0 25px rgba(255, 200, 150, 0.9), 0 0 50px rgba(255, 150, 100, 0.5), inset 0 -2px 6px rgba(255, 180, 130, 0.3)",
              }}
            />
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right Icon - Globe with glow - Fixed at the edge */}
          <div
            className="relative flex items-center justify-center w-14 h-14 mr-1"
            style={{ zIndex: 20 }}
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 150, 50, 0.6) 0%, rgba(255, 100, 0, 0.3) 50%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />
            {/* Middle glow */}
            <div
              className="absolute inset-1 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 180, 100, 0.5) 0%, rgba(255, 120, 50, 0.3) 60%, transparent 80%)",
                filter: "blur(4px)",
              }}
            />
            {/* Icon container */}
            <div
              className="relative flex items-center justify-center w-12 h-12 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255, 200, 150, 0.9) 0%, rgba(255, 150, 80, 0.8) 50%, rgba(255, 100, 50, 0.7) 100%)",
                boxShadow:
                  "0 0 20px rgba(255, 120, 50, 0.8), 0 0 40px rgba(255, 100, 0, 0.4)",
              }}
            >
              {/* Globe icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="9" />
                <ellipse cx="12" cy="12" rx="3.5" ry="9" />
                <path d="M3 12H21" />
                <path d="M4.5 7H19.5" />
                <path d="M4.5 17H19.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-orange-500/20"
            initial={{
              x: `${20 + Math.random() * 60}%`,
              y: `${30 + Math.random() * 40}%`,
              opacity: 0,
            }}
            animate={{
              y: [`${30 + Math.random() * 40}%`, `${25 + Math.random() * 30}%`],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OrangeGlowAnimation;
