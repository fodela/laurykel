"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    opacitySpeed: number;
    hue: number;
}

export function FloatingParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);
    const scrollRef = useRef(0);

    const createParticle = useCallback((width: number, height: number): Particle => {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: -(Math.random() * 0.2 + 0.05),
            opacity: Math.random() * 0.5 + 0.1,
            opacitySpeed: (Math.random() - 0.5) * 0.005,
            hue: Math.random() * 30 + 35, // 35-65 range for gold variations
        };
    }, []);

    useEffect(() => {
        // Respect reduced motion
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
        };

        resize();

        // Initialize particles
        const particleCount = Math.min(60, Math.floor(window.innerWidth / 20));
        particlesRef.current = Array.from({ length: particleCount }, () =>
            createParticle(canvas.width, canvas.height)
        );

        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const viewTop = scrollRef.current;
            const viewBottom = viewTop + window.innerHeight;

            for (const particle of particlesRef.current) {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Update opacity (twinkle)
                particle.opacity += particle.opacitySpeed;
                if (particle.opacity <= 0.05 || particle.opacity >= 0.6) {
                    particle.opacitySpeed *= -1;
                }

                // Wrap around
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Only render particles near the viewport (performance)
                const buffer = 200;
                if (particle.y < viewTop - buffer || particle.y > viewBottom + buffer) continue;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

                // Gold color with varying hue
                const r = 200;
                const g = 169 + Math.floor(particle.hue - 50);
                const b = 51 + Math.floor(particle.hue - 35);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity})`;
                ctx.fill();

                // Glow effect for larger particles
                if (particle.size > 1.5) {
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity * 0.15})`;
                    ctx.fill();
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", resize);
        animate();

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", resize);
        };
    }, [createParticle]);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-[60]"
            style={{ width: "100vw", height: "100vh" }}
            aria-hidden="true"
        />
    );
}
