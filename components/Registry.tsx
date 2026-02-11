"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const registries = [
    {
        name: "Crate & Barrel",
        url: "#",
        logo: "CB",
    },
    {
        name: "Williams Sonoma",
        url: "#",
        logo: "WS",
    },
    {
        name: "Amazon",
        url: "#",
        logo: "AM",
    },
    {
        name: "Honeymoon Fund",
        url: "#",
        logo: "HF",
    },
];

export function Registry() {
    return (
        <div className="container mx-auto px-4 text-center">
            <div className="mb-12 flex flex-col items-center justify-center gap-4">
                <Gift className="h-10 w-10 text-wedding-gold" />
                <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
                    Your presence is enough of a present to us! But for those who wish to contribute, we have created registries at the following stores.
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8">
                {registries.map((store, index) => (
                    <motion.a
                        key={store.name}
                        href={store.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white p-4 shadow-sm transition-transform hover:scale-105 hover:border-wedding-gold hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                    >
                        <span className="text-2xl font-bold text-wedding-charcoal dark:text-wedding-cream">{store.logo}</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">{store.name}</span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
