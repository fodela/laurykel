"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-wedding-cream text-wedding-charcoal dark:bg-zinc-900 dark:text-wedding-cream">
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=3415&auto=format&fit=crop')] bg-cover bg-center" />

            <div className="z-10 flex flex-col items-center gap-6 p-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg uppercase tracking-[0.3em] text-wedding-gold"
                >
                    The Wedding Of
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-serif text-6xl font-light tracking-tight sm:text-8xl md:text-9xl"
                >
                    Delali & Laura
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col items-center gap-2 font-mono text-xl text-wedding-sage sm:flex-row sm:gap-6"
                >
                    <span>March 14th, 2026</span>
                    <span className="hidden h-2 w-2 rounded-full bg-wedding-gold sm:block" />
                    <span>PIWC, Obuasi | Kunka New Site</span>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-wedding-gold"
            >
                <ArrowDown className="h-8 w-8" />
            </motion.div>
        </section>
    );
}
