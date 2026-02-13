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
              <h3 className="mb-4 text-xl font-medium">Traditional Wedding</h3>
              <p className="text-zinc-600 dark:text-zinc-400">7:00 AM</p>
              <p className="text-zinc-600 dark:text-zinc-400">Kokotuasi, Obuasi</p>
              <p className="text-zinc-600 dark:text-zinc-400">Mr. Bosompem's House</p>
            </div>
            <div className="rounded-lg border border-wedding-gold/20 p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-medium">Reception</h3>
              <p className="text-zinc-600 dark:text-zinc-400">12:00 PM</p>
              <p className="text-zinc-600 dark:text-zinc-400">PIWC, Obuasi</p>
              <p className="text-zinc-600 dark:text-zinc-400">Kunka New Site</p>
            </div>
            <div className="rounded-lg border border-wedding-gold/20 p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-medium">Thanks Giving</h3>
              <p className="text-zinc-600 dark:text-zinc-400">8:00 AM</p>
              <p className="text-zinc-600 dark:text-zinc-400">PIWC, Obuasi</p>
              <p className="text-zinc-600 dark:text-zinc-400">Kunka New Site</p>
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
        <p>&copy; 2026 Delali & Laura. All rights reserved.</p>
      </footer>
    </main>
  );
}
