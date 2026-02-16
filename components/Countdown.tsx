"use client";

import React, { useEffect, useState } from "react";

interface TimeUnitProps {
    value: number;
    label: string;
}

const TimeUnit = React.memo(({ value, label }: TimeUnitProps) => {
    const display = value.toString().padStart(2, "0");
    const [prevValue, setPrevValue] = useState(value);
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        if (value !== prevValue) {
            setIsFlipping(true);
            const timer = setTimeout(() => {
                setPrevValue(value);
                setIsFlipping(false);
            }, 400); // Match animation duration
            return () => clearTimeout(timer);
        }
    }, [value, prevValue]);

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="glass-card glow-border relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl sm:h-28 sm:w-28">
                <div className="relative h-full w-full">
                    {/* Exit animation - old value */}
                    {isFlipping && (
                        <span className="countdown-flip-exit absolute inset-0 flex items-center justify-center font-mono text-3xl font-bold text-wedding-gold sm:text-5xl">
                            {prevValue.toString().padStart(2, "0")}
                        </span>
                    )}
                    {/* Enter animation - new value */}
                    <span
                        key={value}
                        className={`${isFlipping ? 'countdown-flip-enter' : ''} absolute inset-0 flex items-center justify-center font-mono text-3xl font-bold text-wedding-gold sm:text-5xl`}
                    >
                        {display}
                    </span>
                </div>

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
});

TimeUnit.displayName = "TimeUnit";

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
        const targetDate = new Date("2026-03-14T13:00:00");

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const newTime = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };

                // Only update state if values actually changed
                setTimeLeft(prev => {
                    if (
                        prev.days !== newTime.days ||
                        prev.hours !== newTime.hours ||
                        prev.minutes !== newTime.minutes ||
                        prev.seconds !== newTime.seconds
                    ) {
                        return newTime;
                    }
                    return prev; // No change, prevent re-render
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
                <div className="hero-fade-up flex flex-col items-center gap-12">
                    <div className="text-center">
                        <h2 className="font-heading text-lg font-light tracking-[0.3em] text-wedding-pale-gold/60 sm:text-xl">
                            COUNTING DOWN TO
                        </h2>
                        <p className="mt-2 font-serif text-3xl text-wedding-cream sm:text-4xl">
                            Our Special Day
                        </p>
                    </div>

                    {isMounted && (
                        <div className="countdown-fade-scale delay-200 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                            <TimeUnit value={timeLeft.days} label="Days" />
                            <TimeUnit value={timeLeft.hours} label="Hours" />
                            <TimeUnit value={timeLeft.minutes} label="Minutes" />
                            <TimeUnit value={timeLeft.seconds} label="Seconds" />
                        </div>
                    )}

                    <div
                        className="hero-line-grow delay-300 gold-line"
                        style={{ height: 1, width: 60 }}
                    />
                </div>
            </div>
        </section>
    );
}
