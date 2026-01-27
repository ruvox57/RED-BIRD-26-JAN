import React, { useEffect, useRef, useCallback } from "react";

const FloatingParticles = ({
  particleCount = 50,
  minSize = 1,
  maxSize = 3,
  minSpeed = 0.2,
  maxSpeed = 0.8,
  minOpacity = 0.1,
  maxOpacity = 0.4,
  color = "255, 255, 255", // RGB format
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  // Initialize particles
  const initParticles = useCallback(
    (width, height) => {
      // Responsive particle count based on screen size
      let count = particleCount;
      if (typeof window !== "undefined") {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640)
          count = Math.floor(particleCount * 0.4); // Mobile
        else if (screenWidth < 1024) count = Math.floor(particleCount * 0.7); // Tablet
      }

      const particles = [];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: minSize + Math.random() * (maxSize - minSize),
          speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
          opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
          // Slight horizontal drift
          drift: (Math.random() - 0.5) * 0.3,
          // Phase offset for opacity pulsing
          phase: Math.random() * Math.PI * 2,
        });
      }

      return particles;
    },
    [
      particleCount,
      minSize,
      maxSize,
      minSpeed,
      maxSpeed,
      minOpacity,
      maxOpacity,
    ],
  );

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

      // Reinitialize particles on resize
      particlesRef.current = initParticles(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particlesRef.current.forEach((particle) => {
        // Update position - move upward
        particle.y -= particle.speed;
        particle.x += particle.drift;

        // Update phase for subtle opacity pulsing
        particle.phase += 0.01;

        // Reset particle when it goes off screen (top)
        if (particle.y < -10) {
          particle.y = height + 10;
          particle.x = Math.random() * width;
        }

        // Wrap horizontally
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;

        // Calculate pulsing opacity
        const pulsingOpacity =
          particle.opacity * (0.7 + 0.3 * Math.sin(particle.phase));

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${pulsingOpacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 1,
        opacity: 0.8,
      }}
    />
  );
};

export default FloatingParticles;
