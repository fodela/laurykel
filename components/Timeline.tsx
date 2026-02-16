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
        year: "The Beginning",
        title: "Study Partners",
        description: "It all began in the lecture halls of medical school. Particle asked Laura to be his study partner—a decision that would change the course of their lives forever.",
        icon: "📚",
    },
    {
        year: "The Spark",
        title: "First Impressions",
        description: "It only took three study sessions. Laura cooked Ampesi and Palava sauce—a dish Particle usually avoided. But that day, he knew: this was different.",
        icon: "🍲",
    },
    {
        year: "Growing Closer",
        title: "Inseparable",
        description: "Their friendship deepened over church programs, cooking, and chores. Laura became Particle’s number one fan on the football pitch, earning them the nickname \"Laurykel.\"",
        icon: "⚽",
    },
    {
        year: "Year 1 & 2",
        title: "Patience",
        description: "Particle asked Laura out twice in their first two years. Both times, she wasn't ready. But Particle wasn't worried; he knew it was only a matter of time.",
        icon: "⏳",
    },
    {
        year: "Year 3",
        title: "The Yes",
        description: "Everything finally aligned. Particle approached Laura with a customized jersey and asked the big question. This time, the answer was a resounding \"Yes.\"",
        icon: "👕",
    },
    {
        year: "The Proposal",
        title: "A Surprise Shoot",
        description: "Thinking it was a random photoshoot, Laura was surprised when Particle dropped to one knee. With a prayer in his heart, he asked, and she said yes!",
        icon: "💍",
    },
    {
        year: "Today",
        title: "House Officers",
        description: "They are both House Officers in the same hospital and department, living out their dream as colleagues and soulmates who truly do everything together.",
        icon: "🏥",
    },
];

// Spring animation config for smooth, natural motion
const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1,
};

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
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className={`group relative mb-16 flex w-full items-center sm:mb-24 ${side === "left" ? "flex-row" : "flex-row-reverse"
                }`}
        >
            {/* Connection line from card to center */}
            <motion.svg
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`absolute top-1/2 z-0 h-2 -translate-y-1/2 ${side === "left" ? "left-[42%]" : "right-[42%]"
                    }`}
                width="8%"
                height="4"
                style={{ overflow: "visible" }}
            >
                <motion.line
                    x1={side === "left" ? "0" : "100%"}
                    y1="2"
                    x2={side === "left" ? "100%" : "0"}
                    y2="2"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.8 }}
                />
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(212 175 55 / 0.1)" />
                        <stop offset="50%" stopColor="rgb(212 175 55 / 0.4)" />
                        <stop offset="100%" stopColor="rgb(212 175 55 / 0.1)" />
                    </linearGradient>
                </defs>
            </motion.svg>

            {/* Content Box */}
            <motion.div
                initial={{
                    opacity: 0,
                    x: side === "left" ? -80 : 80,
                    rotateY: side === "left" ? -8 : 8,
                }}
                animate={
                    isInView
                        ? { opacity: 1, x: 0, rotateY: 0 }
                        : {}
                }
                transition={{
                    duration: 0.9,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="glass-card group relative w-[42%] overflow-hidden rounded-2xl p-6 backdrop-blur-xl transition-all duration-500 hover:border-wedding-gold/40 hover:shadow-2xl hover:shadow-wedding-gold/10 sm:p-8"
                style={{
                    background: "rgba(15, 23, 42, 0.6)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.1)",
                }}
            >
                {/* Decorative corner accent */}
                <div className="absolute right-0 top-0 h-20 w-20 opacity-30">
                    <div className="absolute right-4 top-4 h-12 w-12 rounded-full bg-wedding-gold/5 blur-xl" />
                </div>

                {/* Year badge */}
                <motion.span
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
                    className="relative z-10 mb-4 inline-block rounded-full border border-wedding-gold/30 bg-gradient-to-br from-wedding-gold/10 to-wedding-gold/5 px-4 py-1.5 font-mono text-xs tracking-widest text-wedding-gold shadow-lg shadow-wedding-gold/10 backdrop-blur-sm"
                >
                    {event.year}
                </motion.span>

                <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mb-3 font-serif text-xl font-semibold leading-tight text-wedding-cream transition-colors duration-300 group-hover:text-wedding-gold/90 sm:text-2xl"
                >
                    {event.title}
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-sm leading-relaxed text-wedding-cream/60 transition-colors duration-300 group-hover:text-wedding-cream/80 sm:text-base"
                >
                    {event.description}
                </motion.p>

                {/* Subtle gradient overlay on hover */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-wedding-gold/5 via-transparent to-transparent"
                />
            </motion.div>

            {/* Center Dot with enhanced glow */}
            <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.68, -0.55, 0.265, 1.55] }}
                className="absolute left-1/2 z-20 flex -translate-x-1/2 items-center justify-center"
            >
                {/* Outer glow ring */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute h-16 w-16 rounded-full bg-wedding-gold/20 blur-xl sm:h-20 sm:w-20"
                />

                {/* Main icon container */}
                <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-wedding-gold/40 bg-gradient-to-br from-wedding-navy via-wedding-navy to-wedding-gold/10 text-2xl shadow-xl shadow-wedding-gold/20 sm:h-16 sm:w-16 sm:text-3xl"
                    style={{
                        boxShadow: "0 0 30px rgba(212, 175, 55, 0.3), inset 0 2px 4px rgba(212, 175, 55, 0.1)",
                    }}
                >
                    <motion.span
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {event.icon}
                    </motion.span>
                </motion.div>
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
    const lineGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

    return (
        <div ref={containerRef} className="container mx-auto px-4 py-8">
            <div className="relative flex flex-col items-center">
                {/* Background line (track) with glow */}
                <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2">
                    <div className="absolute inset-0 rounded-full bg-wedding-gold/5" />
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-wedding-gold/15" />
                </div>

                {/* Animated line (fills on scroll) with enhanced glow */}
                <motion.div
                    className="absolute left-1/2 top-0 -translate-x-1/2"
                    style={{ height: lineHeight }}
                >
                    {/* Glow effect */}
                    <motion.div
                        className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 bg-gradient-to-b from-transparent via-wedding-gold/30 to-transparent blur-xl"
                        style={{ opacity: lineGlow }}
                    />

                    {/* Main line with gradient */}
                    <div className="relative h-full w-1">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-wedding-gold/40 via-wedding-gold/80 to-wedding-gold/40" />
                        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-wedding-gold/60 via-wedding-gold to-wedding-gold/60" />
                    </div>

                    {/* Animated traveling light */}
                    <motion.div
                        animate={{
                            y: ["-20px", "20px", "-20px"],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 rounded-full bg-wedding-gold/30 blur-xl"
                    />
                </motion.div>

                {/* Timeline events */}
                {events.map((event, index) => (
                    <TimelineCard
                        key={index}
                        event={event}
                        index={index}
                        side={index % 2 === 0 ? "left" : "right"}
                    />
                ))}

                {/* End ring icon - enhanced */}
                <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
                    className="relative z-20 mt-4 flex flex-col items-center"
                >
                    {/* Glow ring */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute h-28 w-28 rounded-full bg-wedding-gold/20 blur-2xl"
                    />

                    {/* Main end icon */}
                    <motion.div
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ duration: 0.4 }}
                        className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-wedding-gold/40 bg-gradient-to-br from-wedding-navy via-wedding-navy to-wedding-gold/20 text-4xl shadow-2xl shadow-wedding-gold/30"
                        style={{
                            boxShadow: "0 0 40px rgba(212, 175, 55, 0.4), inset 0 2px 8px rgba(212, 175, 55, 0.15)",
                        }}
                    >
                        <motion.span
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            💒
                        </motion.span>
                    </motion.div>

                    {/* Optional: "Our Wedding Day" text */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-6 max-w-md text-center font-serif text-base italic leading-relaxed text-wedding-gold/80"
                    >
                        One mystery remains: Will Particle go for the kiss, or will it be a classic hug? Find out on March 14, 2026.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}
