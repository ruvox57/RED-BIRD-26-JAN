import React, { useEffect, useRef, useCallback } from "react";

const HeroBackground = ({
  lineCount = 3,
  dotCount = 80,
  lineColors = [
    { start: "rgba(255, 77, 0, 0.15)", end: "rgba(255, 120, 50, 0.05)" },
    { start: "rgba(255, 100, 50, 0.12)", end: "rgba(255, 150, 80, 0.03)" },
    { start: "rgba(255, 60, 0, 0.1)", end: "rgba(255, 100, 40, 0.02)" },
  ],
  dotColor = "255, 255, 255",
  dotOpacityRange = [0.03, 0.12],
  enableParallax = true,
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const scrollRef = useRef(0);
  const linesRef = useRef([]);
  const dotsRef = useRef([]);
  const timeRef = useRef(0);

  // Initialize flowing lines with bezier control points
  const initLines = useCallback((width, height) => {
    const lines = [];
    for (let i = 0; i < lineCount; i++) {
      const yBase = height * (0.25 + (i * 0.25));
      const amplitude = 30 + Math.random() * 40;
      const frequency = 0.0008 + Math.random() * 0.0004;
      const speed = 0.0003 + Math.random() * 0.0002;
      const phase = Math.random() * Math.PI * 2;
      const thickness = 1 + Math.random() * 1.5;
      
      lines.push({
        yBase,
        amplitude,
        frequency,
        speed,
        phase,
        thickness,
        colorIndex: i % lineColors.length,
      });
    }
    return lines;
  }, [lineCount, lineColors.length]);

  // Initialize dot field
  const initDots = useCallback((width, height) => {
    const dots = [];
    const cols = Math.ceil(width / 40);
    const rows = Math.ceil(height / 40);
    
    for (let i = 0; i < dotCount; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols) % rows;
      
      dots.push({
        baseX: (col / cols) * width + (Math.random() - 0.5) * 30,
        baseY: (row / rows) * height + (Math.random() - 0.5) * 30,
        size: 1 + Math.random() * 1.5,
        opacity: dotOpacityRange[0] + Math.random() * (dotOpacityRange[1] - dotOpacityRange[0]),
        phase: Math.random() * Math.PI * 2,
        shimmerSpeed: 0.005 + Math.random() * 0.01,
        parallaxFactor: 0.02 + Math.random() * 0.03,
      });
    }
    return dots;
  }, [dotCount, dotOpacityRange]);

  // Draw a flowing line using sine wave
  const drawLine = useCallback((ctx, line, width, height, time, parallaxOffset) => {
    const { yBase, amplitude, frequency, speed, phase, thickness, colorIndex } = line;
    const color = lineColors[colorIndex];
    
    ctx.beginPath();
    ctx.lineWidth = thickness;
    
    // Create gradient along the line
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, color.start);
    gradient.addColorStop(0.5, color.end);
    gradient.addColorStop(1, color.start);
    ctx.strokeStyle = gradient;
    
    // Draw smooth flowing curve
    const timeOffset = time * speed;
    const parallaxY = parallaxOffset.y * 20;
    
    for (let x = 0; x <= width; x += 2) {
      const y = yBase + 
        Math.sin(x * frequency + timeOffset + phase) * amplitude +
        Math.sin(x * frequency * 0.5 + timeOffset * 0.7) * (amplitude * 0.3) +
        parallaxY;
      
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }, [lineColors]);

  // Draw dots with shimmer effect
  const drawDots = useCallback((ctx, dots, time, parallaxOffset) => {
    dots.forEach((dot) => {
      const shimmer = 0.5 + 0.5 * Math.sin(time * dot.shimmerSpeed + dot.phase);
      const currentOpacity = dot.opacity * (0.4 + shimmer * 0.6);
      
      const px = dot.baseX + parallaxOffset.x * dot.parallaxFactor * 100;
      const py = dot.baseY + parallaxOffset.y * dot.parallaxFactor * 100;
      
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
    let width, height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      linesRef.current = initLines(width, height);
      dotsRef.current = initDots(width, height);
    };

    const handleMouseMove = (e) => {
      if (!enableParallax) return;
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    const handleScroll = () => {
      if (!enableParallax) return;
      scrollRef.current = window.scrollY / window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      timeRef.current += 16;
      ctx.clearRect(0, 0, width, height);

      const parallaxOffset = enableParallax
        ? { x: mouseRef.current.x * 0.3, y: mouseRef.current.y * 0.3 - scrollRef.current * 0.1 }
        : { x: 0, y: 0 };

      // Draw dots first (behind lines)
      drawDots(ctx, dotsRef.current, timeRef.current, parallaxOffset);
      
      // Draw flowing lines
      linesRef.current.forEach((line) => {
        drawLine(ctx, line, width, height, timeRef.current, parallaxOffset);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [initLines, initDots, drawLine, drawDots, enableParallax]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default HeroBackground;

