"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
    { name: "Home", href: "#" },
    { name: "Our Story", href: "#story" },
    { name: "Details", href: "#details" },
    { name: "RSVP", href: "#rsvp" },
    { name: "Registry", href: "#registry" },
];

export function Navigation() {
    const { scrollY } = useScroll();
    const [isOpen, setIsOpen] = useState(false);

    const navBg = useTransform(
        scrollY,
        [0, 200],
        ["rgba(15, 27, 45, 0)", "rgba(15, 27, 45, 0.85)"]
    );

    const navBlur = useTransform(
        scrollY,
        [0, 200],
        ["blur(0px)", "blur(20px)"]
    );

    const borderOpacity = useTransform(
        scrollY,
        [0, 200],
        ["rgba(200, 169, 81, 0)", "rgba(200, 169, 81, 0.12)"]
    );

    // Close mobile menu on scroll
    useEffect(() => {
        const handleScroll = () => isOpen && setIsOpen(false);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 2.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="fixed top-0 right-0 left-0 z-[70]"
            >
                <motion.div
                    className="flex items-center justify-center border-b px-4 py-3 sm:py-4"
                    style={{
                        backgroundColor: navBg,
                        backdropFilter: navBlur,
                        WebkitBackdropFilter: navBlur,
                        borderColor: borderOpacity,
                    }}
                >
                    {/* Desktop Nav */}
                    <div className="hidden items-center gap-8 sm:flex md:gap-12">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.8 + index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    className="group relative font-mono text-[11px] uppercase tracking-[0.25em] text-wedding-cream/60 transition-colors duration-300 hover:text-wedding-gold"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-wedding-gold transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="relative z-[80] flex flex-col items-center gap-1.5 sm:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <motion.span
                            className="block h-px w-6 bg-wedding-gold"
                            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block h-px w-6 bg-wedding-gold"
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="block h-px w-6 bg-wedding-gold"
                            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </button>
                </motion.div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                className="fixed inset-0 z-[65] flex flex-col items-center justify-center gap-8 bg-wedding-charcoal/95 backdrop-blur-xl sm:hidden"
                initial={false}
                animate={isOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
                transition={{ duration: 0.3 }}
            >
                {navItems.map((item, index) => (
                    <motion.div
                        key={item.name}
                        initial={false}
                        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: isOpen ? index * 0.1 : 0, duration: 0.3 }}
                    >
                        <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="font-heading text-2xl tracking-[0.2em] text-wedding-cream/80 transition-colors hover:text-wedding-gold"
                        >
                            {item.name}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
}
