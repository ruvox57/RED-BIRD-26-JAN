import React, { useEffect, useRef } from "react";

const OrangeGlowAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    // Particles for ambient effect
    const particles = [];
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: 80 + Math.random() * 120,
        size: 1 + Math.random() * 2,
        speed: 0.002 + Math.random() * 0.003,
        opacity: 0.2 + Math.random() * 0.4,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      time += 0.01;

      // Draw concentric glowing rings
      const rings = [
        { radius: 140, opacity: 0.08, blur: 60 },
        { radius: 120, opacity: 0.12, blur: 50 },
        { radius: 100, opacity: 0.18, blur: 40 },
        { radius: 80, opacity: 0.25, blur: 30 },
        { radius: 60, opacity: 0.35, blur: 20 },
        { radius: 40, opacity: 0.5, blur: 15 },
        { radius: 25, opacity: 0.7, blur: 10 },
        { radius: 15, opacity: 0.9, blur: 5 },
      ];

      rings.forEach((ring, i) => {
        const pulse = Math.sin(time * 2 + i * 0.5) * 0.15 + 1;
        const radius = ring.radius * pulse;

        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          radius,
        );

        gradient.addColorStop(0, `rgba(255, 100, 0, ${ring.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 77, 0, ${ring.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(255, 50, 0, 0)`);

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw core glow
      const coreGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        30,
      );
      coreGradient.addColorStop(0, "rgba(255, 150, 50, 0.9)");
      coreGradient.addColorStop(0.3, "rgba(255, 100, 0, 0.7)");
      coreGradient.addColorStop(0.6, "rgba(255, 77, 0, 0.4)");
      coreGradient.addColorStop(1, "rgba(255, 50, 0, 0)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();

      // Draw orbiting particles
      particles.forEach((p) => {
        p.angle += p.speed;
        const pulseOpacity =
          p.opacity *
          (0.5 + 0.5 * Math.sin(time * p.pulseSpeed * 100 + p.pulseOffset));

        const x = centerX + Math.cos(p.angle) * p.radius;
        const y = centerY + Math.sin(p.angle) * p.radius;

        const particleGradient = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          p.size * 3,
        );
        particleGradient.addColorStop(0, `rgba(255, 150, 50, ${pulseOpacity})`);
        particleGradient.addColorStop(
          0.5,
          `rgba(255, 100, 0, ${pulseOpacity * 0.5})`,
        );
        particleGradient.addColorStop(1, "rgba(255, 77, 0, 0)");

        ctx.beginPath();
        ctx.arc(x, y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = particleGradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default OrangeGlowAnimation;
