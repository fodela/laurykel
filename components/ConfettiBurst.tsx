"use client";

import { useEffect, useRef, useCallback } from "react";

interface ConfettiParticle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    rotation: number;
    rotationSpeed: number;
    color: string;
    opacity: number;
    shape: "circle" | "rect" | "diamond";
}

interface ConfettiBurstProps {
    trigger: boolean;
    onComplete?: () => void;
}

const GOLD_COLORS = [
    "#C8A951",
    "#E8D5A3",
    "#D4B86A",
    "#F5E6B8",
    "#B8941F",
    "#F0E0C0",
    "#FFFFFF",
];

export function ConfettiBurst({ trigger, onComplete }: ConfettiBurstProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const hasTriggeredRef = useRef(false);

    const createConfetti = useCallback((): ConfettiParticle[] => {
        const particles: ConfettiParticle[] = [];
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        for (let i = 0; i < 120; i++) {
            const angle = (Math.random() * Math.PI * 2);
            const speed = Math.random() * 12 + 4;
            particles.push({
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - Math.random() * 6,
                size: Math.random() * 8 + 3,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                color: GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)],
                opacity: 1,
                shape: (["circle", "rect", "diamond"] as const)[Math.floor(Math.random() * 3)],
            });
        }
        return particles;
    }, []);

    useEffect(() => {
        if (!trigger || hasTriggeredRef.current) return;
        hasTriggeredRef.current = true;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            onComplete?.();
            return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = createConfetti();
        let frame = 0;

        const animate = () => {
            if (!ctx || !canvas) return;
            frame++;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let allDone = true;

            for (const p of particles) {
                // Physics
                p.vy += 0.15; // gravity
                p.vx *= 0.99; // air resistance
                p.vy *= 0.99;
                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotationSpeed;

                // Fade out after frame 60
                if (frame > 60) {
                    p.opacity -= 0.015;
                }

                if (p.opacity <= 0) continue;
                allDone = false;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;

                if (p.shape === "circle") {
                    ctx.beginPath();
                    ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                    ctx.fill();
                } else if (p.shape === "rect") {
                    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
                } else {
                    ctx.beginPath();
                    ctx.moveTo(0, -p.size / 2);
                    ctx.lineTo(p.size / 3, 0);
                    ctx.lineTo(0, p.size / 2);
                    ctx.lineTo(-p.size / 3, 0);
                    ctx.closePath();
                    ctx.fill();
                }

                ctx.restore();
            }

            if (allDone || frame > 200) {
                cancelAnimationFrame(animationRef.current);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                onComplete?.();
                return;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, [trigger, createConfetti, onComplete]);

    if (!trigger) return null;

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-[100]"
            style={{ width: "100vw", height: "100vh" }}
            aria-hidden="true"
        />
    );
}
