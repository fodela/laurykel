"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface TextShimmerProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    as?: "h1" | "h2" | "h3" | "p" | "span";
    id?: string;
    [key: string]: any;
}

export function TextShimmer({
    children,
    className = "",
    delay = 0,
    as: Component = "h2",
    id,
    ...rest
}: TextShimmerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <Component id={id} className={`text-shimmer ${className}`} {...rest}>
                    {children}
                </Component>
            </motion.div>
        </div>
    );
}
