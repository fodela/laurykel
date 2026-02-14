"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-wedding-charcoal">
            {/* Background gradient layers */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-wedding-charcoal via-wedding-navy to-wedding-dark-teal" />

            {/* Subtle radial glow */}
            <div
                className="absolute inset-0 z-[1] opacity-30"
                style={{
                    background: "radial-gradient(ellipse at 50% 40%, rgba(200, 169, 81, 0.15) 0%, transparent 70%)",
                }}
            />

            {/* Decorative corner flourishes */}
            <motion.div
                className="absolute top-8 left-8 z-[2] h-20 w-20 opacity-20 sm:h-32 sm:w-32"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isLoaded ? { opacity: 0.2, scale: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.5 }}
            >
                <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
                    <path d="M0 0 L50 0 C30 10, 10 30, 0 50 Z" stroke="var(--wedding-gold)" strokeWidth="0.5" fill="none" />
                    <path d="M0 0 L30 0 C15 8, 8 15, 0 30 Z" stroke="var(--wedding-gold)" strokeWidth="0.3" fill="none" />
                </svg>
            </motion.div>
            <motion.div
                className="absolute right-8 bottom-8 z-[2] h-20 w-20 rotate-180 opacity-20 sm:h-32 sm:w-32"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isLoaded ? { opacity: 0.2, scale: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.5 }}
            >
                <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
                    <path d="M0 0 L50 0 C30 10, 10 30, 0 50 Z" stroke="var(--wedding-gold)" strokeWidth="0.5" fill="none" />
                    <path d="M0 0 L30 0 C15 8, 8 15, 0 30 Z" stroke="var(--wedding-gold)" strokeWidth="0.3" fill="none" />
                </svg>
            </motion.div>

            {/* Main content */}
            <AnimatePresence>
                {isLoaded && (
                    <div className="z-10 flex flex-col items-center gap-5 p-4 text-center sm:gap-8">
                        {/* "Together with their families" */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="font-heading text-base font-light tracking-[0.25em] text-wedding-pale-gold/70 sm:text-lg"
                        >
                            Together with their families
                        </motion.p>

                        {/* Gold ornamental line */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 100, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="gold-line"
                            style={{ height: 1 }}
                        />

                        {/* Names */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-shimmer font-serif text-5xl font-light leading-tight tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
                        >
                            Delali
                        </motion.h1>

                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.2, ease: [0.68, -0.55, 0.265, 1.55] }}
                            className="font-serif text-3xl text-wedding-gold sm:text-4xl"
                        >
                            &
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-shimmer font-serif text-5xl font-light leading-tight tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
                        >
                            Laura
                        </motion.h1>

                        {/* Gold ornamental line */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 150, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.6 }}
                            className="gold-line"
                            style={{ height: 1 }}
                        />

                        {/* Date & Venue */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                            className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6"
                        >
                            <span className="font-mono text-sm tracking-[0.2em] text-wedding-pale-gold/80 sm:text-base">
                                SAT &middot; MARCH 14 &middot; 2026
                            </span>
                            <span className="hidden h-1.5 w-1.5 rounded-full bg-wedding-gold sm:block" />
                            <span className="font-mono text-sm tracking-[0.2em] text-wedding-pale-gold/80 sm:text-base">
                                PIWC, OBUASI
                            </span>
                        </motion.div>

                        {/* Bible Verse */}
                        <motion.blockquote
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2.2 }}
                            className="mt-4 max-w-md text-center"
                        >
                            <p className="font-heading text-sm italic leading-relaxed text-wedding-cream/50 sm:text-base">
                                &ldquo;He who finds a wife finds a good thing and obtains favor from the LORD&rdquo;
                            </p>
                            <cite className="mt-2 block font-mono text-xs tracking-widest text-wedding-gold/60 not-italic">
                                PROVERBS 18:22
                            </cite>
                        </motion.blockquote>
                    </div>
                )}
            </AnimatePresence>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="animate-scroll absolute bottom-10 left-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-wedding-gold/40">
                    Scroll
                </span>
                <div className="flex h-8 w-5 items-start justify-center rounded-full border border-wedding-gold/30 p-1">
                    <motion.div
                        className="h-1.5 w-1 rounded-full bg-wedding-gold/60"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
