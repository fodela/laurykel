"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
    variant?: "flourish" | "simple" | "botanical";
    className?: string;
}

function FlourishDivider() {
    const ref = useRef<SVGSVGElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <svg
            ref={ref}
            viewBox="0 0 600 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto w-full max-w-lg"
            aria-hidden="true"
        >
            {/* Center diamond */}
            <motion.path
                d="M300 10 L310 30 L300 50 L290 30 Z"
                stroke="var(--wedding-gold)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
            {/* Left flourish */}
            <motion.path
                d="M280 30 C250 30, 220 15, 180 25 C140 35, 120 20, 80 30 C60 35, 40 25, 20 30"
                stroke="var(--wedding-gold)"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
            {/* Left flourish lower */}
            <motion.path
                d="M270 35 C240 40, 210 50, 170 40 C130 30, 100 45, 60 35"
                stroke="var(--wedding-gold)"
                strokeWidth="0.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
            {/* Right flourish */}
            <motion.path
                d="M320 30 C350 30, 380 15, 420 25 C460 35, 480 20, 520 30 C540 35, 560 25, 580 30"
                stroke="var(--wedding-gold)"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
            {/* Right flourish lower */}
            <motion.path
                d="M330 35 C360 40, 390 50, 430 40 C470 30, 500 45, 540 35"
                stroke="var(--wedding-gold)"
                strokeWidth="0.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
        </svg>
    );
}

function SimpleDivider() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="flex items-center justify-center gap-4">
            <motion.div
                className="h-px bg-gradient-to-r from-transparent to-wedding-gold"
                initial={{ width: 0 }}
                animate={isInView ? { width: 120 } : {}}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.div
                className="h-2 w-2 rotate-45 border border-wedding-gold"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 0.6 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
            />
            <motion.div
                className="h-px bg-gradient-to-l from-transparent to-wedding-gold"
                initial={{ width: 0 }}
                animate={isInView ? { width: 120 } : {}}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
        </div>
    );
}

function BotanicalDivider() {
    const ref = useRef<SVGSVGElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <svg
            ref={ref}
            viewBox="0 0 400 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto w-full max-w-sm"
            aria-hidden="true"
        >
            {/* Left leaf */}
            <motion.path
                d="M160 20 C150 10, 130 5, 120 15 C110 25, 130 30, 160 20"
                stroke="var(--wedding-gold)"
                strokeWidth="0.8"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
            />
            {/* Right leaf */}
            <motion.path
                d="M240 20 C250 10, 270 5, 280 15 C290 25, 270 30, 240 20"
                stroke="var(--wedding-gold)"
                strokeWidth="0.8"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
            />
            {/* Left stem */}
            <motion.path
                d="M190 20 L120 20"
                stroke="var(--wedding-gold)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
            />
            {/* Right stem */}
            <motion.path
                d="M210 20 L280 20"
                stroke="var(--wedding-gold)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
            />
            {/* Center dot */}
            <motion.circle
                cx="200"
                cy="20"
                r="3"
                stroke="var(--wedding-gold)"
                strokeWidth="0.8"
                fill="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 0.6 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
            />
        </svg>
    );
}

export function SectionDivider({ variant = "flourish", className = "" }: SectionDividerProps) {
    return (
        <div className={`py-8 ${className}`}>
            {variant === "flourish" && <FlourishDivider />}
            {variant === "simple" && <SimpleDivider />}
            {variant === "botanical" && <BotanicalDivider />}
        </div>
    );
}
