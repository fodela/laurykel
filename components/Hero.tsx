"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
    const [showMarquee, setShowMarquee] = useState(false);

    useEffect(() => {
        // Defer marquee mounting until after initial render
        const timer = setTimeout(() => setShowMarquee(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-wedding-charcoal">
            {/* Corner-positioned Portrait Backgrounds */}
            <div className="absolute inset-0 z-0">
                {showMarquee && (
                    <>
                        {/* Delali Portrait - Left Center */}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1, x: -50 }}
                            animate={{ opacity: 0.65, scale: 1, x: 0 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.3,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="absolute top-1/2 left-0 -translate-y-1/2 h-[40vh] w-[25vw] sm:h-[50vh] sm:w-[30vw] lg:h-[70vh] lg:w-[28vw]"
                        >
                            <div className="relative h-full w-full">
                                <Image
                                    src="/delali.jpg"
                                    alt="Delali Dogbevi"
                                    fill
                                    loading="eager"
                                    priority={false}
                                    quality={85}
                                    sizes="(max-width: 640px) 25vw, (max-width: 1024px) 30vw, 28vw"
                                    className="object-cover object-center"
                                />
                                {/* Gradient overlay - fade from left toward center-right */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-wedding-charcoal/30 to-wedding-charcoal/80" />
                            </div>
                        </motion.div>

                        {/* Laura Portrait - Right Center */}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1, x: 50 }}
                            animate={{ opacity: 0.65, scale: 1, x: 0 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.5,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="absolute top-1/2 right-0 -translate-y-1/2 h-[40vh] w-[25vw] sm:h-[50vh] sm:w-[30vw] lg:h-[70vh] lg:w-[28vw]"
                        >
                            <div className="relative h-full w-full">
                                <Image
                                    src="/laura.jpg"
                                    alt="Laura Bosompem"
                                    fill
                                    loading="eager"
                                    priority={false}
                                    quality={85}
                                    sizes="(max-width: 640px) 25vw, (max-width: 1024px) 30vw, 28vw"
                                    className="object-cover object-center"
                                />
                                {/* Gradient overlay - fade from right toward center-left */}
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-wedding-charcoal/30 to-wedding-charcoal/80" />
                            </div>
                        </motion.div>
                    </>
                )}
                {/* Dark gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-wedding-charcoal/70 via-wedding-navy/80 to-wedding-charcoal/90" />
                {/* Radial vignette */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(10, 15, 26, 0.7) 100%)",
                    }}
                />
            </div>

            {/* Subtle radial gold glow */}
            <div
                className="absolute inset-0 z-[1] opacity-30"
                style={{
                    background: "radial-gradient(ellipse at 50% 40%, rgba(200, 169, 81, 0.12) 0%, transparent 70%)",
                }}
            />

            {/* Decorative corner flourishes */}
            <motion.div
                className="absolute top-8 left-8 z-[2] h-20 w-20 opacity-20 sm:h-32 sm:w-32"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.2, scale: 1 }}
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
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
            >
                <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
                    <path d="M0 0 L50 0 C30 10, 10 30, 0 50 Z" stroke="var(--wedding-gold)" strokeWidth="0.5" fill="none" />
                    <path d="M0 0 L30 0 C15 8, 8 15, 0 30 Z" stroke="var(--wedding-gold)" strokeWidth="0.3" fill="none" />
                </svg>
            </motion.div>

            {/* Main content */}
            <div className="z-10 flex flex-col items-center gap-5 p-4 pt-16 text-center sm:gap-8 sm:pt-20">
                {/* "Together with their families" */}
                <p className="hero-fade-up delay-0 font-heading text-base font-light tracking-[0.25em] text-wedding-pale-gold/70 sm:text-lg">
                    Together with their families
                </p>

                {/* Gold ornamental line */}
                <div className="hero-line-grow delay-100 gold-line" style={{ height: 1, width: 100 }} />

                {/* Names */}
                <h1 className="hero-scale-in delay-150 text-shimmer font-serif text-5xl font-light leading-tight tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                    Delali
                </h1>

                <span className="hero-fade-in delay-200 font-serif text-3xl text-wedding-gold sm:text-4xl">
                    &
                </span>

                <h1 className="hero-scale-in delay-150 text-shimmer font-serif text-5xl font-light leading-tight tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                    Laura
                </h1>

                {/* Gold ornamental line */}
                <div className="hero-line-grow delay-250 gold-line" style={{ height: 1, width: 150 }} />

                {/* Date & Venue */}
                <div className="hero-fade-up delay-250 flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
                    <span className="font-mono text-sm tracking-[0.2em] text-wedding-pale-gold/80 sm:text-base">
                        SAT &middot; MARCH 14 &middot; 2026
                    </span>
                    <span className="hidden h-1.5 w-1.5 rounded-full bg-wedding-gold sm:block" />
                    <span className="font-mono text-sm tracking-[0.2em] text-wedding-pale-gold/80 sm:text-base">
                        PIWC, OBUASI
                    </span>
                </div>

                {/* Bible Verse */}
                <blockquote className="hero-fade-up delay-300 mt-4 max-w-md text-center">
                    <p className="font-heading text-sm italic leading-relaxed text-wedding-cream/50 sm:text-base">
                        &ldquo;He who finds a wife finds a good thing and obtains favor from the LORD&rdquo;
                    </p>
                    <cite className="mt-2 block font-mono text-xs tracking-widest text-wedding-gold/60 not-italic">
                        PROVERBS 18:22
                    </cite>
                </blockquote>
            </div>

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
