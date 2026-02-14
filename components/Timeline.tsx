"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    icon: string;
}

const events: TimelineEvent[] = [
    {
        year: "2020",
        title: "The First Meeting",
        description: "We crossed paths at a local coffee shop. Simple, yet the start of something beautiful.",
        icon: "☕",
    },
    {
        year: "2021",
        title: "First Date",
        description: "Dinner at Marco's. We talked for hours until the restaurant closed.",
        icon: "🌹",
    },
    {
        year: "2023",
        title: "Moving In Together",
        description: "Decided to share a home and build our lives together in San Francisco.",
        icon: "🏡",
    },
    {
        year: "2024",
        title: "The Proposal",
        description: "A sunset walk on the beach, a knee, a ring, and a very happy 'Yes!'",
        icon: "💍",
    },
];

function TimelineCard({
    event,
    index,
    side,
}: {
    event: TimelineEvent;
    index: number;
    side: "left" | "right";
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            className={`relative mb-16 flex w-full items-center sm:mb-24 ${side === "left" ? "flex-row" : "flex-row-reverse"
                }`}
        >
            {/* Content Box */}
            <motion.div
                initial={{
                    opacity: 0,
                    x: side === "left" ? -60 : 60,
                    rotateY: side === "left" ? -5 : 5,
                }}
                animate={
                    isInView
                        ? { opacity: 1, x: 0, rotateY: 0 }
                        : {}
                }
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="glass-card w-[42%] rounded-xl p-6 transition-all duration-500 hover:border-wedding-gold/25 sm:p-8"
            >
                {/* Year badge */}
                <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
                    className="mb-3 inline-block rounded-full border border-wedding-gold/20 bg-wedding-gold/5 px-3 py-1 font-mono text-xs tracking-widest text-wedding-gold"
                >
                    {event.year}
                </motion.span>

                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mb-2 font-serif text-xl text-wedding-cream sm:text-2xl"
                >
                    {event.title}
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="text-sm leading-relaxed text-wedding-cream/50"
                >
                    {event.description}
                </motion.p>
            </motion.div>

            {/* Center Dot with glow */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.68, -0.55, 0.265, 1.55] }}
                className="absolute left-1/2 z-10 flex -translate-x-1/2 items-center justify-center"
            >
                <div className="animate-glow flex h-10 w-10 items-center justify-center rounded-full border border-wedding-gold/30 bg-wedding-navy text-lg sm:h-12 sm:w-12">
                    {event.icon}
                </div>
            </motion.div>

            {/* Empty space for the other side */}
            <div className="w-[42%]" />
        </motion.div>
    );
}

export function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="container mx-auto px-4">
            <div className="relative flex flex-col items-center">
                {/* Background line (track) */}
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-wedding-gold/10" />

                {/* Animated line (fills on scroll) */}
                <motion.div
                    className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-wedding-gold/60 via-wedding-gold to-wedding-gold/60"
                    style={{ height: lineHeight }}
                />

                {events.map((event, index) => (
                    <TimelineCard
                        key={index}
                        event={event}
                        index={index}
                        side={index % 2 === 0 ? "left" : "right"}
                    />
                ))}

                {/* End ring icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-wedding-gold/30 bg-wedding-navy animate-glow"
                >
                    <span className="text-2xl">💒</span>
                </motion.div>
            </div>
        </div>
    );
}
