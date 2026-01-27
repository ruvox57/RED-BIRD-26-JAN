import React, { useEffect, useRef, useCallback } from "react";

const GlobalBackground = ({
  lineCount = 3,
  dotCount = 150,
  lineColors = [
    { start: "rgba(255, 77, 0, 0.08)", end: "rgba(255, 120, 50, 0.02)" },
    { start: "rgba(255, 100, 50, 0.06)", end: "rgba(255, 150, 80, 0.015)" },
    { start: "rgba(255, 60, 0, 0.05)", end: "rgba(255, 100, 40, 0.01)" },
  ],
  dotColor = "255, 255, 255",
  dotOpacityRange = [0.015, 0.06],
  parallaxIntensity = 0.15,
  motionSpeed = 0.5,
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const scrollRef = useRef(0);
  const linesRef = useRef([]);
  const dotsRef = useRef([]);
  const timeRef = useRef(0);
  const dimensionsRef = useRef({ width: 0, height: 0, pageHeight: 0 });

  // Initialize vertical/diagonal flowing lines
  const initLines = useCallback((width, pageHeight) => {
    const lines = [];
    for (let i = 0; i < lineCount; i++) {
      const xBase = width * (0.2 + i * 0.3);
      const angle = (Math.random() - 0.5) * 0.3; // Slight diagonal angle
      const amplitude = 60 + Math.random() * 80;
      const frequency = 0.0003 + Math.random() * 0.0002;
      const speed = (0.0002 + Math.random() * 0.0001) * motionSpeed;
      const phase = Math.random() * Math.PI * 2;
      const thickness = 1.5 + Math.random() * 1;

      lines.push({
        xBase,
        angle,
        amplitude,
        frequency,
        speed,
        phase,
        thickness,
        colorIndex: i % lineColors.length,
      });
    }
    return lines;
  }, [lineCount, lineColors.length, motionSpeed]);

  // Initialize dot field across entire page height
  const initDots = useCallback((width, pageHeight) => {
    const dots = [];
    const cols = Math.ceil(width / 60);
    const rows = Math.ceil(pageHeight / 60);

    for (let i = 0; i < dotCount; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols) % rows;

      dots.push({
        baseX: (col / cols) * width + (Math.random() - 0.5) * 40,
        baseY: (row / rows) * pageHeight + (Math.random() - 0.5) * 40,
        size: 0.8 + Math.random() * 1.2,
        opacity: dotOpacityRange[0] + Math.random() * (dotOpacityRange[1] - dotOpacityRange[0]),
        phase: Math.random() * Math.PI * 2,
        shimmerSpeed: (0.003 + Math.random() * 0.005) * motionSpeed,
        jitterX: 0,
        jitterY: 0,
        jitterSpeed: 0.001 + Math.random() * 0.002,
      });
    }
    return dots;
  }, [dotCount, dotOpacityRange, motionSpeed]);

  // Draw a vertical/diagonal flowing line
  const drawLine = useCallback((ctx, line, width, pageHeight, time, scrollY) => {
    const { xBase, angle, amplitude, frequency, speed, phase, thickness, colorIndex } = line;
    const color = lineColors[colorIndex];
    const scrollOffset = scrollY * parallaxIntensity;

    ctx.beginPath();
    ctx.lineWidth = thickness;

    // Create gradient along the line
    const gradient = ctx.createLinearGradient(0, scrollY, 0, scrollY + pageHeight);
    gradient.addColorStop(0, color.start);
    gradient.addColorStop(0.3, color.end);
    gradient.addColorStop(0.7, color.end);
    gradient.addColorStop(1, color.start);
    ctx.strokeStyle = gradient;

    const timeOffset = time * speed;

    for (let y = 0; y <= pageHeight; y += 3) {
      const x = xBase +
        Math.sin(y * frequency + timeOffset + phase) * amplitude +
        Math.sin(y * frequency * 0.4 + timeOffset * 0.6) * (amplitude * 0.4) +
        Math.tan(angle) * y -
        scrollOffset * 0.5;

      if (y === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }, [lineColors, parallaxIntensity]);

  // Draw dots with shimmer and jitter
  const drawDots = useCallback((ctx, dots, time, scrollY, viewportHeight) => {
    dots.forEach((dot) => {
      // Only draw dots that are visible or near viewport
      const dotY = dot.baseY;
      if (dotY < scrollY - 100 || dotY > scrollY + viewportHeight + 100) return;

      const shimmer = 0.4 + 0.6 * Math.sin(time * dot.shimmerSpeed + dot.phase);
      const currentOpacity = dot.opacity * shimmer;

      // Subtle jitter
      const jitterX = Math.sin(time * dot.jitterSpeed) * 2;
      const jitterY = Math.cos(time * dot.jitterSpeed * 1.3) * 2;

      const px = dot.baseX + jitterX;
      const py = dotY + jitterY - scrollY; // Adjust for scroll

      ctx.beginPath();
      ctx.arc(px, py, dot.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${dotColor}, ${currentOpacity})`;
      ctx.fill();
    });
  }, [dotColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const pageHeight = Math.max(document.body.scrollHeight, height * 5);

      canvas.width = width;
      canvas.height = height;

      dimensionsRef.current = { width, height, pageHeight };
      linesRef.current = initLines(width, pageHeight);
      dotsRef.current = initDots(width, pageHeight);
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      timeRef.current += 16;
      const { width, height, pageHeight } = dimensionsRef.current;
      const scrollY = scrollRef.current;

      ctx.clearRect(0, 0, width, height);

      // Draw dots (behind lines)
      drawDots(ctx, dotsRef.current, timeRef.current, scrollY, height);

      // Draw flowing lines (translated for scroll)
      ctx.save();
      ctx.translate(0, -scrollY * (1 - parallaxIntensity));
      linesRef.current.forEach((line) => {
        drawLine(ctx, line, width, pageHeight, timeRef.current, scrollY);
      });
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    // Delay initialization to get accurate page height
    setTimeout(() => {
      resize();
      animate();
    }, 100);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [initLines, initDots, drawLine, drawDots, parallaxIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, top: 0, left: 0 }}
    />
  );
};

export default GlobalBackground;

