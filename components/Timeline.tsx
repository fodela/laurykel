"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    side: "left" | "right";
}

const events: TimelineEvent[] = [
    {
        year: "2020",
        title: "The First Meeting",
        description: "We crossed paths at a local coffee shop. Simple, yet the start of something beautiful.",
        side: "left",
    },
    {
        year: "2021",
        title: "First Date",
        description: "Dinner at Marco's. We talked for hours until the restaurant closed.",
        side: "right",
    },
    {
        year: "2023",
        title: "Moving In Together",
        description: "Decided to share a home and build our lives together in San Francisco.",
        side: "left",
    },
    {
        year: "2024",
        title: "The Proposal",
        description: "A sunset walk on the beach, a knee, a ring, and a very happy 'Yes!'",
        side: "right",
    },
];

export function Timeline() {
    return (
        <div className="container mx-auto px-4">
            <div className="relative flex flex-col items-center">
                {/* Center Line */}
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-wedding-gold/30" />

                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: event.side === "left" ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={cn(
                            "relative mb-12 flex w-full items-center justify-between sm:mb-24",
                            event.side === "left" ? "flex-row" : "flex-row-reverse"
                        )}
                    >
                        {/* Content Box */}
                        <div className="w-[45%] rounded-lg border border-wedding-gold/20 bg-white p-6 shadow-sm dark:bg-zinc-900/50">
                            <span className="mb-2 block font-mono text-sm text-wedding-gold">
                                {event.year}
                            </span>
                            <h3 className="mb-2 font-serif text-xl text-wedding-charcoal dark:text-wedding-cream">
                                {event.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {event.description}
                            </p>
                        </div>

                        {/* Dot on Line */}
                        <div className="absolute left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-wedding-gold shadow-[0_0_0_4px_rgba(212,175,55,0.2)]"></div>

                        {/* Empty space for the other side */}
                        <div className="w-[45%]" />
                    </motion.div>
                ))}

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-wedding-gold text-white shadow-lg"
                >
                    <span className="font-serif text-2xl">💍</span>
                </motion.div>
            </div>
        </div>
    );
}
