"use client";

import { motion } from "framer-motion";
import { Gift, Smartphone } from "lucide-react";

export function Registry() {
    return (
        <div className="container mx-auto px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-14 flex flex-col items-center justify-center gap-5"
            >
                <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                >
                    <Gift className="h-10 w-10 text-wedding-gold/60" />
                </motion.div>
                <p className="max-w-lg font-heading text-base leading-relaxed text-wedding-cream/40 sm:text-lg">
                    Your presence is enough of a present to us! But for those who wish to contribute, your gifts are better preferred as cash
                </p>
                <p className="max-w-lg font-heading text-base leading-relaxed text-wedding-cream/40 sm:text-lg">
                    For gifts in kind, a gift table will be set up at the venue
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex flex-col items-center justify-center"
            >
                <div className="glass-card group relative flex flex-col items-center justify-center gap-4 rounded-2xl px-8 py-6 transition-all duration-500 hover:border-wedding-gold/25 sm:px-12 sm:py-8">
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-wedding-gold/0 transition-all duration-500 group-hover:bg-wedding-gold/5" />

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10"
                    >
                        <Smartphone className="h-8 w-8 text-wedding-gold/60" />
                    </motion.div>

                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <span className="font-mono text-xs tracking-widest text-wedding-cream/30 sm:text-sm">
                            MOBILE MONEY
                        </span>
                        <span className="font-serif text-2xl font-bold text-wedding-cream/80 transition-colors duration-300 group-hover:text-wedding-gold sm:text-3xl">
                            0555304124
                        </span>
                    </div>

                    {/* Bottom glow line */}
                    <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-wedding-gold/40 transition-all duration-500 group-hover:w-3/4" />
                </div>
            </motion.div>
        </div>
    );
}
