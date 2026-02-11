"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "#story" },
    { name: "The Details", href: "#details" },
    { name: "RSVP", href: "#rsvp" },
    { name: "Registry", href: "#registry" },
];

export function Navigation() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4"
        >
            <div className="flex items-center gap-1 rounded-full border border-white/20 bg-white/70 px-4 py-2 backdrop-blur-md shadow-sm dark:bg-black/70 dark:border-white/10 sm:gap-6 sm:px-8">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-xs font-medium uppercase tracking-widest text-wedding-charcoal transition-colors hover:text-wedding-gold dark:text-wedding-cream sm:text-sm"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
}
