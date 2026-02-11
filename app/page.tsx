import Image from "next/image";

import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { Navigation } from "@/components/Navigation";
import { Timeline } from "@/components/Timeline";
import { RSVP } from "@/components/RSVP";
import { Registry } from "@/components/Registry";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Countdown />

      <section id="story" className="min-h-screen py-20 flex flex-col items-center justify-center bg-wedding-cream dark:bg-zinc-800">
        <h2 className="mb-16 text-4xl font-serif text-wedding-charcoal dark:text-wedding-cream">Our Story</h2>
        <Timeline />
      </section>

      <section id="details" className="min-h-screen py-20 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-12 text-4xl font-serif text-wedding-charcoal dark:text-wedding-cream">The Details</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-wedding-gold/20 p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-medium">Ceremony</h3>
              <p className="text-zinc-600 dark:text-zinc-400">4:00 PM</p>
              <p className="text-zinc-600 dark:text-zinc-400">Grace Cathedral</p>
              <p className="text-zinc-600 dark:text-zinc-400">San Francisco, CA</p>
            </div>
            <div className="rounded-lg border border-wedding-gold/20 p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-medium">Reception</h3>
              <p className="text-zinc-600 dark:text-zinc-400">6:00 PM</p>
              <p className="text-zinc-600 dark:text-zinc-400">The Julia Morgan Ballroom</p>
              <p className="text-zinc-600 dark:text-zinc-400">Cocktails, Dinner & Dancing</p>
            </div>
            <div className="rounded-lg border border-wedding-gold/20 p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-medium">Accommodations</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Fairmont San Francisco</p>
              <p className="text-sm text-wedding-gold mt-2">Mention Laura & Kyle Wedding</p>
            </div>
          </div>
        </div>
      </section>

      <section id="rsvp" className="min-h-screen py-20 flex flex-col items-center justify-center bg-wedding-sage/10">
        <h2 className="mb-12 text-4xl font-serif text-wedding-charcoal dark:text-wedding-cream">RSVP</h2>
        <RSVP />
      </section>

      <section id="registry" className="min-h-screen py-20 flex flex-col items-center justify-center">
        <h2 className="mb-12 text-4xl font-serif text-wedding-charcoal dark:text-wedding-cream">Registry</h2>
        <Registry />
      </section>

      <footer className="py-12 text-center text-sm text-wedding-charcoal/60 dark:text-wedding-cream/60">
        <p>&copy; 2026 Laura & Kyle. All rights reserved.</p>
      </footer>
    </main>
  );
}
