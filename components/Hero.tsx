"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
    const [showMarquee, setShowMarquee] = useState(false);

    useEffect(() => {
        // Defer marquee mounting until after initial render
        const timer = setTimeout(() => setShowMarquee(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-[#0A1128]">
            {/* Corner-positioned Portrait Backgrounds */}
            <div className="absolute inset-0 z-0">
                {showMarquee && (
                    <>
                        {/* Delali Portrait - Left Full Height */}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1, x: -50 }}
                            animate={{ opacity: 0.85, scale: 1, x: 0 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.3,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="absolute top-0 left-0 max-h-[98vh] h-full w-[30vw] sm:w-[32vw] lg:w-[30vw]"
                        >
                            <div className="relative h-full w-full">
                                <picture>
                                    <source
                                        media="(max-width: 640px)"
                                        srcSet="/delali-mobile.webp"
                                        type="image/webp"
                                    />
                                    <source
                                        srcSet="/delali-optimized.webp"
                                        type="image/webp"
                                    />
                                    <img
                                        src="/delali-optimized.jpg"
                                        alt="Delali Dogbevi"
                                        loading="eager"
                                        decoding="async"
                                        className="absolute inset-0 w-full h-full object-cover object-center animate-ken-burns"
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </picture>
                                {/* Gradient overlay - fade from left toward center with smooth blend */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent from-30% via-transparent via-50% to-[#0A1128]/90" />
                            </div>
                        </motion.div>

                        {/* Laura Portrait - Right Full Height */}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1, x: 50 }}
                            animate={{ opacity: 0.85, scale: 1, x: 0 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.5,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="absolute top-0 right-0 max-h-[98vh] h-full w-[30vw] sm:w-[32vw] lg:w-[30vw]"
                        >
                            <div className="relative h-full w-full">
                                <picture>
                                    <source
                                        media="(max-width: 640px)"
                                        srcSet="/laura-mobile.webp"
                                        type="image/webp"
                                    />
                                    <source
                                        srcSet="/laura-optimized.webp"
                                        type="image/webp"
                                    />
                                    <img
                                        src="/laura-optimized.jpg"
                                        alt="Laura Bosompem"
                                        loading="eager"
                                        decoding="async"
                                        className="absolute inset-0 w-full h-full object-cover object-center animate-ken-burns"
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </picture>
                                {/* Gradient overlay - fade from right toward center with smooth blend */}
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent from-30% via-transparent via-50% to-[#0A1128]/90" />
                            </div>
                        </motion.div>
                    </>
                )}
                {/* Dark gradient overlay to ensure text readability */}
                {/* Radial vignette */}

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
                    <path d="M0 0 L50 0 C30 10, 10 30, 0 50 Z" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
                    <path d="M0 0 L30 0 C15 8, 8 15, 0 30 Z" stroke="#D4AF37" strokeWidth="0.3" fill="none" />
                </svg>
            </motion.div>
            <motion.div
                className="absolute right-8 bottom-8 z-[2] h-20 w-20 rotate-180 opacity-20 sm:h-32 sm:w-32"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
            >
                <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
                    <path d="M0 0 L50 0 C30 10, 10 30, 0 50 Z" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
                    <path d="M0 0 L30 0 C15 8, 8 15, 0 30 Z" stroke="#D4AF37" strokeWidth="0.3" fill="none" />
                </svg>
            </motion.div>

            {/* Main content */}
            <div className="z-10 flex flex-col items-center gap-5 p-4 pt-8 text-center sm:gap-8 sm:pt-12">
                {/* "You are invited to the wedding of" */}
                <p className="hero-fade-up delay-0 font-sans text-xs uppercase tracking-[0.3em] font-medium text-[#FFFFFF]/80 sm:text-sm">
                    You are invited to the wedding of
                </p>

                {/* Gold ornamental line */}
                <div className="hero-line-grow delay-100 gold-line" style={{ height: 1, width: 100 }} />

                {/* Names */}
                <h1 className="hero-scale-in delay-150 text-[#D4AF37] font-serif italic text-6xl font-light leading-tight tracking-tighter sm:text-8xl md:text-9xl lg:text-[10rem]">
                    Delali
                </h1>

                <span className="hero-fade-in delay-200 font-serif text-3xl text-[#D4AF37]/80 sm:text-4xl">
                    &
                </span>

                <h1 className="hero-scale-in delay-150 text-[#D4AF37] font-serif italic text-6xl font-light leading-tight tracking-tighter sm:text-8xl md:text-9xl lg:text-[10rem]">
                    Laura.
                </h1>

                {/* Gold ornamental line */}
                <div className="hero-line-grow delay-250 gold-line" style={{ height: 1, width: 150 }} />

                {/* Date & Venue */}
                <div className="hero-fade-up delay-250 flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
                    <span className="font-sans font-medium uppercase text-sm tracking-[0.2em] text-[#FFFFFF]/80 sm:text-base">
                        SAT &middot; MARCH 14 &middot; 2026
                    </span>
                    <span className="hidden h-1.5 w-1.5 rounded-full bg-[#D4AF37] sm:block" />
                    <span className="font-sans font-medium uppercase text-sm tracking-[0.2em] text-[#FFFFFF]/80 sm:text-base">
                        PIWC, OBUASI
                    </span>
                </div>

                {/* Bible Verse */}
                <blockquote className="hero-fade-up delay-300 mt-4 max-w-md text-center">
                    <p className="font-serif italic text-lg leading-relaxed text-[#FFFFFF]/70 sm:text-xl">
                        &ldquo;He who finds a wife finds a good thing and obtains favor from the LORD&rdquo;
                    </p>
                    <cite className="mt-2 block font-sans text-xs uppercase tracking-widest text-[#D4AF37]/80 not-italic">
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
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/40">
                    Scroll
                </span>
                <div className="flex h-8 w-5 items-start justify-center rounded-full border border-[#D4AF37]/30 p-1">
                    <motion.div
                        className="h-1.5 w-1 rounded-full bg-[#D4AF37]/60"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
