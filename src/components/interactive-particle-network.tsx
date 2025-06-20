"use client";

import type React from "react";
import { useCallback, useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  originalRadius: number;
}

const InteractiveParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesArray = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const mousePosition = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });

  const particleColor = "rgba(255, 255, 255, 0.3)";
  const lineColor = "rgba(255, 255, 255, 0.08)";
  const interactionRadius = 150;
  const connectDistance = 100;

  const createParticles = useCallback((canvas: HTMLCanvasElement) => {
    particlesArray.current = [];
    const numberOfParticles = Math.floor(
      (canvas.width * canvas.height) / 15000,
    );
    for (let i = 0; i < numberOfParticles; i++) {
      const radius = Math.random() * 1 + 0.5;
      particlesArray.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: radius,
        originalRadius: radius,
      });
    }
  }, []);

  const animateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.current.forEach((p) => {
      if (
        mousePosition.current.x !== null &&
        mousePosition.current.y !== null
      ) {
        const dxMouse = p.x - mousePosition.current.x;
        const dyMouse = p.y - mousePosition.current.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < interactionRadius) {
          p.radius = Math.min(
            p.originalRadius *
              (1 + ((interactionRadius - distMouse) / interactionRadius) * 2),
            p.originalRadius * 3,
          );
        } else {
          p.radius = p.originalRadius;
        }
      } else {
        p.radius = p.originalRadius;
      }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = particleColor;
      ctx.fill();
    });

    for (let i = 0; i < particlesArray.current.length; i++) {
      for (let j = i + 1; j < particlesArray.current.length; j++) {
        const p1 = particlesArray.current[i];
        const p2 = particlesArray.current[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectDistance) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 0.3;
          ctx.stroke();
        }
      }
    }

    animationFrameId.current = requestAnimationFrame(animateParticles);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles(canvas);
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };
    const handleMouseLeave = () => {
      mousePosition.current = { x: null, y: null };
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    animationFrameId.current = requestAnimationFrame(animateParticles);

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [createParticles, animateParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default InteractiveParticleNetwork;
