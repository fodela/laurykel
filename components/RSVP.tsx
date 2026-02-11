"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function RSVP() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[400px] flex-col items-center justify-center text-center"
            >
                <h3 className="mb-4 font-serif text-3xl text-wedding-charcoal dark:text-wedding-cream">
                    Thank you!
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Your RSVP has been received. We can't wait to celebrate with you!
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm text-wedding-gold hover:underline"
                >
                    Send another response
                </button>
            </motion.div>
        );
    }

    return (
        <div className="container mx-auto max-w-md px-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-wedding-charcoal dark:text-wedding-cream">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-wedding-charcoal focus:border-wedding-gold focus:outline-none focus:ring-1 focus:ring-wedding-gold dark:border-zinc-800 dark:bg-zinc-900 dark:text-wedding-cream"
                        placeholder="Jane Doe"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-wedding-charcoal dark:text-wedding-cream">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-wedding-charcoal focus:border-wedding-gold focus:outline-none focus:ring-1 focus:ring-wedding-gold dark:border-zinc-800 dark:bg-zinc-900 dark:text-wedding-cream"
                        placeholder="jane@example.com"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-wedding-charcoal dark:text-wedding-cream">
                        Will you be attending?
                    </label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 rounded-md border border-zinc-200 px-4 py-3 dark:border-zinc-800">
                            <input type="radio" name="attending" value="yes" required className="accent-wedding-gold" />
                            <span className="text-sm">Joyfully Accept</span>
                        </label>
                        <label className="flex items-center gap-2 rounded-md border border-zinc-200 px-4 py-3 dark:border-zinc-800">
                            <input type="radio" name="attending" value="no" required className="accent-wedding-gold" />
                            <span className="text-sm">Regretfully Decline</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor="guests" className="mb-2 block text-sm font-medium text-wedding-charcoal dark:text-wedding-cream">
                        Number of Guests
                    </label>
                    <select
                        id="guests"
                        className="w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-wedding-charcoal focus:border-wedding-gold focus:outline-none focus:ring-1 focus:ring-wedding-gold dark:border-zinc-800 dark:bg-zinc-900 dark:text-wedding-cream"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 flex w-full items-center justify-center rounded-md bg-wedding-charcoal px-8 py-3 font-medium text-white transition-colors hover:bg-wedding-charcoal/90 disabled:opacity-50 dark:bg-wedding-gold dark:text-wedding-charcoal dark:hover:bg-wedding-gold/90"
                >
                    {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    {isSubmitting ? "Sending..." : "Send RSVP"}
                </button>
            </form>
        </div>
    );
}
