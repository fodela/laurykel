"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const registries = [
    {
        name: "Crate & Barrel",
        url: "#",
        logo: "CB",
        color: "from-amber-500/5 to-amber-600/5",
    },
    {
        name: "Williams Sonoma",
        url: "#",
        logo: "WS",
        color: "from-emerald-500/5 to-emerald-600/5",
    },
    {
        name: "Amazon",
        url: "#",
        logo: "AM",
        color: "from-blue-500/5 to-blue-600/5",
    },
    {
        name: "Honeymoon Fund",
        url: "#",
        logo: "HF",
        color: "from-rose-500/5 to-rose-600/5",
    },
];

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
                    Your presence is enough of a present to us! But for those who wish to contribute, we have created registries at the following stores.
                </p>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                {registries.map((store, index) => (
                    <motion.a
                        key={store.name}
                        href={store.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.12,
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        whileHover={{
                            y: -8,
                            scale: 1.05,
                            transition: { duration: 0.3 },
                        }}
                        className="glass-card group relative flex h-32 w-32 flex-col items-center justify-center gap-3 rounded-2xl transition-all duration-500 hover:border-wedding-gold/25 sm:h-36 sm:w-36"
                    >
                        {/* Hover glow */}
                        <div className="absolute inset-0 rounded-2xl bg-wedding-gold/0 transition-all duration-500 group-hover:bg-wedding-gold/5" />

                        <span className="relative z-10 font-serif text-2xl font-bold text-wedding-cream/80 transition-colors duration-300 group-hover:text-wedding-gold sm:text-3xl">
                            {store.logo}
                        </span>
                        <span className="relative z-10 font-mono text-[10px] tracking-widest text-wedding-cream/30 transition-colors duration-300 group-hover:text-wedding-cream/60">
                            {store.name}
                        </span>

                        {/* Bottom glow line */}
                        <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-wedding-gold/40 transition-all duration-500 group-hover:w-3/4" />
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
