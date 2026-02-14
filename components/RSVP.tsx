"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { ConfettiBurst } from "./ConfettiBurst";

export function RSVP() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setShowConfetti(true);
    };

    const handleConfettiComplete = useCallback(() => {
        // Confetti cleanup handled internally
    }, []);

    if (submitted) {
        return (
            <>
                <ConfettiBurst trigger={showConfetti} onComplete={handleConfettiComplete} />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[400px] flex-col items-center justify-center text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-wedding-gold/30 bg-wedding-gold/5"
                    >
                        <span className="text-3xl">✨</span>
                    </motion.div>
                    <h3 className="mb-4 font-serif text-3xl text-wedding-cream">
                        Thank you!
                    </h3>
                    <p className="max-w-sm text-wedding-cream/50">
                        Your RSVP has been received. We can&apos;t wait to celebrate with you!
                    </p>
                    <button
                        onClick={() => { setSubmitted(false); setShowConfetti(false); }}
                        className="mt-8 font-mono text-xs tracking-widest text-wedding-gold/60 transition-colors hover:text-wedding-gold"
                    >
                        [ SEND ANOTHER RESPONSE ]
                    </button>
                </motion.div>
            </>
        );
    }

    return (
        <div className="container mx-auto max-w-md px-4">
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card flex flex-col gap-6 rounded-2xl p-8 sm:p-10"
            >
                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-wedding-pale-gold/50"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="input-glow w-full rounded-lg border border-wedding-gold/10 bg-wedding-navy/50 px-4 py-3 text-wedding-cream placeholder:text-wedding-cream/20 transition-all duration-300 focus:border-wedding-gold/30 focus:outline-none"
                        placeholder="Jane Doe"
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-wedding-pale-gold/50"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="input-glow w-full rounded-lg border border-wedding-gold/10 bg-wedding-navy/50 px-4 py-3 text-wedding-cream placeholder:text-wedding-cream/20 transition-all duration-300 focus:border-wedding-gold/30 focus:outline-none"
                        placeholder="jane@example.com"
                    />
                </div>

                {/* Attending */}
                <div>
                    <label className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-wedding-pale-gold/50">
                        Will you be attending?
                    </label>
                    <div className="flex gap-4">
                        <label className="group flex cursor-pointer items-center gap-3 rounded-lg border border-wedding-gold/10 px-4 py-3 transition-all duration-300 hover:border-wedding-gold/25 hover:bg-wedding-gold/5">
                            <input
                                type="radio"
                                name="attending"
                                value="yes"
                                required
                                className="sr-only peer"
                            />
                            <div className="flex h-4 w-4 items-center justify-center rounded-full border border-wedding-gold/30 peer-checked:border-wedding-gold peer-checked:bg-wedding-gold transition-all">
                                <div className="h-1.5 w-1.5 rounded-full bg-wedding-navy scale-0 peer-checked:scale-100 transition-transform" />
                            </div>
                            <span className="text-sm text-wedding-cream/70">Joyfully Accept</span>
                        </label>
                        <label className="group flex cursor-pointer items-center gap-3 rounded-lg border border-wedding-gold/10 px-4 py-3 transition-all duration-300 hover:border-wedding-gold/25 hover:bg-wedding-gold/5">
                            <input
                                type="radio"
                                name="attending"
                                value="no"
                                required
                                className="sr-only peer"
                            />
                            <div className="flex h-4 w-4 items-center justify-center rounded-full border border-wedding-gold/30 peer-checked:border-wedding-gold peer-checked:bg-wedding-gold transition-all">
                                <div className="h-1.5 w-1.5 rounded-full bg-wedding-navy scale-0 peer-checked:scale-100 transition-transform" />
                            </div>
                            <span className="text-sm text-wedding-cream/70">Regretfully Decline</span>
                        </label>
                    </div>
                </div>

                {/* Guests */}
                <div>
                    <label
                        htmlFor="guests"
                        className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-wedding-pale-gold/50"
                    >
                        Number of Guests
                    </label>
                    <select
                        id="guests"
                        className="input-glow w-full appearance-none rounded-lg border border-wedding-gold/10 bg-wedding-navy/50 px-4 py-3 text-wedding-cream transition-all duration-300 focus:border-wedding-gold/30 focus:outline-none"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>

                {/* Submit */}
                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-wedding-gold/30 bg-wedding-gold/10 px-8 py-3.5 font-mono text-sm uppercase tracking-[0.2em] text-wedding-gold transition-all duration-300 hover:bg-wedding-gold/20 hover:border-wedding-gold/50 disabled:opacity-50"
                >
                    {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    {isSubmitting ? "Sending..." : "Send RSVP"}
                </motion.button>
            </motion.form>
        </div>
    );
}
