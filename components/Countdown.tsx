"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimeUnitProps {
    value: number;
    label: string;
}

function TimeUnit({ value, label }: TimeUnitProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/50 text-2xl font-bold backdrop-blur-sm dark:bg-black/20 sm:h-24 sm:w-24 sm:text-4xl shadow-sm border border-wedding-gold/20">
                {value.toString().padStart(2, "0")}
            </div>
            <span className="text-xs uppercase tracking-widest text-wedding-charcoal/80 dark:text-wedding-cream/80">
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

    useEffect(() => {
        const targetDate = new Date("2026-03-14T00:00:00");

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
        <section className="py-20 bg-wedding-cream/30 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-12"
                >
                    <h2 className="text-center font-serif text-3xl font-light text-wedding-charcoal dark:text-wedding-cream sm:text-4xl">
                        Counting Down the Days
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                        <TimeUnit value={timeLeft.days} label="Days" />
                        <TimeUnit value={timeLeft.hours} label="Hours" />
                        <TimeUnit value={timeLeft.minutes} label="Minutes" />
                        <TimeUnit value={timeLeft.seconds} label="Seconds" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
