"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeUnitProps {
    value: number;
    label: string;
}

function TimeUnit({ value, label }: TimeUnitProps) {
    const display = value.toString().padStart(2, "0");

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="glass-card glow-border relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl sm:h-28 sm:w-28">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={value}
                        initial={{ y: -30, opacity: 0, filter: "blur(4px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        exit={{ y: 30, opacity: 0, filter: "blur(4px)" }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="font-mono text-3xl font-bold text-wedding-gold sm:text-5xl"
                    >
                        {display}
                    </motion.span>
                </AnimatePresence>

                {/* Subtle shine overlay */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-5"
                    style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)",
                    }}
                />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-wedding-pale-gold/50 sm:text-xs">
                {label}
            </span>
        </div>
    );
}

export function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const targetDate = new Date("2026-03-14T07:00:00");

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative overflow-hidden py-24 sm:py-32">
            {/* Subtle gradient background */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    background: "radial-gradient(ellipse at 50% 50%, rgba(26, 58, 58, 0.5) 0%, transparent 70%)",
                }}
            />

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-12"
                >
                    <div className="text-center">
                        <h2 className="font-heading text-lg font-light tracking-[0.3em] text-wedding-pale-gold/60 sm:text-xl">
                            COUNTING DOWN TO
                        </h2>
                        <p className="mt-2 font-serif text-3xl text-wedding-cream sm:text-4xl">
                            Our Special Day
                        </p>
                    </div>

                    {isMounted && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
                        >
                            <TimeUnit value={timeLeft.days} label="Days" />
                            <TimeUnit value={timeLeft.hours} label="Hours" />
                            <TimeUnit value={timeLeft.minutes} label="Minutes" />
                            <TimeUnit value={timeLeft.seconds} label="Seconds" />
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="gold-line"
                        style={{ height: 1 }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
