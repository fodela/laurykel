import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { Navigation } from "@/components/Navigation";
import { Timeline } from "@/components/Timeline";
import { RSVP } from "@/components/RSVP";
import { Registry } from "@/components/Registry";
import { FloatingParticles } from "@/components/FloatingParticles";
import { SectionDivider } from "@/components/SectionDivider";
import { TextShimmer } from "@/components/TextShimmer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Delali & Laura Wedding Celebration",
    description:
      "The wedding celebration of Delali Dogbevi and Laura Bosompem.",
    startDate: "2026-03-14T07:00:00+00:00",
    endDate: "2026-03-14T18:00:00+00:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "PIWC, Obuasi",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Obuasi",
        addressCountry: "GH",
      },
    },
    image: "https://laurykel.pages.dev/images/Save the Date DL.jpg",
    organizer: {
      "@type": "Person",
      name: "Delali Dogbevi & Laura Bosompem",
    },
  };

  return (
    <main className="relative min-h-screen bg-wedding-navy">
      {/* JSON-LD Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global floating gold particles */}
      <FloatingParticles />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Divider */}
      <SectionDivider variant="flourish" />

      {/* Countdown */}
      <Countdown />

      {/* Divider */}
      <SectionDivider variant="simple" />

      {/* Our Story / Timeline */}
      <section id="story" className="relative py-24 sm:py-32">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(26, 58, 58, 0.3) 50%, transparent 100%)",
          }}
        />
        <div className="relative z-10">
          <div className="mb-16 text-center sm:mb-20">
            <TextShimmer
              as="h2"
              className="font-serif text-4xl font-light sm:text-5xl"
            >
              Our Story
            </TextShimmer>
            <p className="mt-4 font-heading text-base text-wedding-cream/30">
              The moments that led us here
            </p>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Divider */}
      <SectionDivider variant="botanical" />

      {/* The Details */}
      <section id="details" className="relative py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16">
            <TextShimmer
              as="h2"
              className="font-serif text-4xl font-light sm:text-5xl"
            >
              The Details
            </TextShimmer>
            <p className="mt-4 font-heading text-base text-wedding-cream/30">
              Everything you need to know
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Traditional Wedding */}
            <DetailCard
              title="Traditional Wedding"
              time="7:00 AM"
              location="Kokotuasi, Obuasi"
              venue="Mr. Bosompem's House"
              icon="🎊"
              delay={0}
            />
            {/* White Wedding */}
            <DetailCard
              title="White Wedding"
              time="12:30 PM"
              location="PIWC, Obuasi"
              venue="Kunka New Site"
              icon="💒"
              delay={0.15}
            />
            {/* Thanks Giving */}
            <DetailCard
              title="Thanks Giving"
              time="8:00 AM"
              location="PIWC, Obuasi"
              venue="Kunka New Site"
              icon="🙏"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <SectionDivider variant="simple" />

      {/* RSVP */}
      <section id="rsvp" className="relative py-24 sm:py-32">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(200, 169, 81, 0.05) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <div className="mb-16 text-center">
            <TextShimmer
              as="h2"
              className="font-serif text-4xl font-light sm:text-5xl"
            >
              RSVP
            </TextShimmer>
            <p className="mt-4 font-heading text-base text-wedding-cream/30">
              Let us know if you can make it
            </p>
          </div>
          <RSVP />
        </div>
      </section>

      {/* Divider */}
      <SectionDivider variant="botanical" />

      {/* Registry */}
      <section id="registry" className="relative py-24 sm:py-32">
        <div className="mb-16 text-center">
          <TextShimmer
            as="h2"
            className="font-serif text-4xl font-light sm:text-5xl"
          >
            Registry
          </TextShimmer>
        </div>
        <Registry />
      </section>

      {/* Footer */}
      <footer className="relative border-t border-wedding-gold/5 py-16 text-center">
        <div className="mb-4 font-serif text-lg text-wedding-cream/20">
          Delali & Laura
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-wedding-cream/15">
          &copy; 2026 &middot; March 14th &middot; Obuasi, Ghana
        </p>
        <div className="mx-auto mt-6 gold-line" style={{ width: 60, height: 1 }} />
      </footer>
    </main>
  );
}

/* Detail Card Component (inline since it's page-specific) */
function DetailCard({
  title,
  time,
  location,
  venue,
  icon,
  delay,
}: {
  title: string;
  time: string;
  location: string;
  venue: string;
  icon: string;
  delay: number;
}) {
  return (
    <div className="group">
      <div
        className="glass-card glow-border rounded-2xl p-8 transition-all duration-500 hover:border-wedding-gold/25"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="mb-4 text-3xl">{icon}</div>
        <h3 className="mb-4 font-serif text-xl text-wedding-cream">
          {title}
        </h3>
        <div className="space-y-1">
          <p className="font-mono text-sm text-wedding-gold">{time}</p>
          <p className="text-sm text-wedding-cream/50">{location}</p>
          <p className="text-sm text-wedding-cream/40">{venue}</p>
        </div>
      </div>
    </div>
  );
}
