"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { ConfettiBurst } from "./ConfettiBurst";

export function RSVP() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            questions: formData.get("questions"),
        };

        try {
            const response = await fetch("/api/rsvp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit RSVP");
            }

            setSubmitted(true);
            setShowConfetti(true);
        } catch (err) {
            setError("Something went wrong. Please try again or contact us directly.");
            console.error("RSVP submission error:", err);
        } finally {
            setIsSubmitting(false);
        }
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
                {/* Intro text */}
                <div className="mb-2 text-center">
                    <p className="font-serif text-lg text-wedding-cream/80">
                        We&apos;d love to celebrate with you!
                    </p>
                    <p className="mt-2 text-sm text-wedding-cream/50">
                        Please fill in your details below to confirm your attendance.
                    </p>
                    <p className="mt-3 text-xs text-wedding-cream/40">
                        or contact: Samuel 0598436661 | Stephanie 0597136307
                    </p>
                </div>

                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-wedding-pale-gold/50"
                    >
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
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
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="input-glow w-full rounded-lg border border-wedding-gold/10 bg-wedding-navy/50 px-4 py-3 text-wedding-cream placeholder:text-wedding-cream/20 transition-all duration-300 focus:border-wedding-gold/30 focus:outline-none"
                        placeholder="jane@example.com"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label
                        htmlFor="phone"
                        className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-wedding-pale-gold/50"
                    >
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="input-glow w-full rounded-lg border border-wedding-gold/10 bg-wedding-navy/50 px-4 py-3 text-wedding-cream placeholder:text-wedding-cream/20 transition-all duration-300 focus:border-wedding-gold/30 focus:outline-none"
                        placeholder="+1 (555) 123-4567"
                    />
                </div>

                {/* Questions */}
                <div>
                    <label
                        htmlFor="questions"
                        className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-wedding-pale-gold/50"
                    >
                        Questions or Special Requests
                    </label>
                    <textarea
                        id="questions"
                        name="questions"
                        rows={4}
                        className="input-glow w-full resize-none rounded-lg border border-wedding-gold/10 bg-wedding-navy/50 px-4 py-3 text-wedding-cream placeholder:text-wedding-cream/20 transition-all duration-300 focus:border-wedding-gold/30 focus:outline-none"
                        placeholder="Any dietary restrictions, accessibility needs, or questions for us..."
                    />
                </div>

                {/* Error message */}
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                    >
                        {error}
                    </motion.div>
                )}

                {/* Submit */}
                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-wedding-gold/30 bg-wedding-gold/10 px-8 py-3.5 font-mono text-sm uppercase tracking-[0.2em] text-wedding-gold transition-all duration-300 hover:bg-wedding-gold/20 hover:border-wedding-gold/50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    {isSubmitting ? "Sending..." : "Confirm Attendance"}
                </motion.button>

                <p className="text-center text-xs text-wedding-cream/30">
                    * Required fields
                </p>
            </motion.form>
        </div>
    );
}
