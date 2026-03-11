"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const navItems = [
    { name: "Home", href: "#" },
    { name: "Our Story", href: "#story" },
    { name: "Details", href: "#details" },
    { name: "Gallery", href: "#gallery" },
    { name: "RSVP", href: "#rsvp" },
    { name: "Registry", href: "#registry" },
];

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div className="h-7 w-7" />;

    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-wedding-gold/30 text-wedding-gold/70 transition-all duration-300 hover:border-wedding-gold/70 hover:text-wedding-gold hover:bg-wedding-gold/10"
        >
            {theme === "dark"
                ? <Sun size={14} strokeWidth={1.5} />
                : <Moon size={14} strokeWidth={1.5} />
            }
        </motion.button>
    );
}

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
            if (isOpen) setIsOpen(false);
        };
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
                <div
                    className={`flex items-center justify-between border-b px-6 py-3 transition-all duration-500 sm:py-4 sm:px-10 ${
                        isScrolled
                            ? "border-wedding-gold/20 bg-background/90 backdrop-blur-xl"
                            : "border-transparent bg-transparent"
                    }`}
                >
                    {/* Logo / Monogram */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.8 }}
                        className="font-serif italic text-sm text-wedding-gold/80 tracking-wider select-none"
                    >
                        D&amp;L
                    </motion.span>

                    {/* Desktop Nav */}
                    <div className="hidden items-center gap-8 sm:flex md:gap-10">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.8 + index * 0.08 }}
                            >
                                <Link
                                    href={item.href}
                                    className="group relative font-sans text-[11px] uppercase tracking-[0.22em] text-foreground/60 transition-colors duration-300 hover:text-wedding-gold"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-wedding-gold transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side: theme toggle + mobile hamburger */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        {/* Mobile Hamburger */}
                        <button
                            className="relative z-[80] flex flex-col items-center gap-1.5 sm:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            <motion.span
                                className="block h-px w-5 bg-wedding-gold"
                                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="block h-px w-5 bg-wedding-gold"
                                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="block h-px w-5 bg-wedding-gold"
                                animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                className="fixed inset-0 z-[65] flex flex-col items-center justify-center gap-8 bg-background/97 backdrop-blur-xl sm:hidden"
                initial={false}
                animate={isOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
                transition={{ duration: 0.3 }}
            >
                {navItems.map((item, index) => (
                    <motion.div
                        key={item.name}
                        initial={false}
                        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: isOpen ? index * 0.08 : 0, duration: 0.3 }}
                    >
                        <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="font-sans text-xl tracking-[0.25em] uppercase text-foreground/70 transition-colors hover:text-wedding-gold"
                        >
                            {item.name}
                        </Link>
                    </motion.div>
                ))}

                <div className="mt-4">
                    <ThemeToggle />
                </div>
            </motion.div>
        </>
    );
}
