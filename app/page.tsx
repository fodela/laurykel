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
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Delali Dogbevi & Laura Bosompem Wedding Celebration",
    alternateName: "Delali & Laura Wedding",
    description:
      "Join us in celebrating the union of Delali Dogbevi and Laura Bosompem. The celebration includes a traditional Ghanaian wedding ceremony, white wedding service, and thanksgiving at PIWC Obuasi.",
    startDate: "2026-03-14T07:00:00+00:00",
    endDate: "2026-03-14T18:00:00+00:00",
    doorTime: "2026-03-14T07:00:00+00:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: [
      {
        "@type": "Place",
        name: "Mr. Bosompem's House",
        description: "Traditional Wedding Ceremony Venue",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kokotuasi",
          addressLocality: "Obuasi",
          addressRegion: "Ashanti Region",
          addressCountry: "GH",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "6.2023",
          longitude: "-1.6735",
        },
      },
      {
        "@type": "Place",
        name: "PIWC Obuasi",
        description: "White Wedding and Thanksgiving Venue",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kunka New Site",
          addressLocality: "Obuasi",
          addressRegion: "Ashanti Region",
          addressCountry: "GH",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "6.2023",
          longitude: "-1.6735",
        },
      },
    ],
    image: [
      "https://laurykel.pages.dev/images/Save the Date DL.jpg",
      "https://laurykel.pages.dev/images/logo.png",
    ],
    organizer: [
      {
        "@type": "Person",
        name: "Delali Dogbevi",
        familyName: "Dogbevi",
        givenName: "Delali",
      },
      {
        "@type": "Person",
        name: "Laura Bosompem",
        familyName: "Bosompem",
        givenName: "Laura",
      },
    ],
    performer: [
      {
        "@type": "Person",
        name: "Delali Dogbevi",
        roleName: "Groom",
      },
      {
        "@type": "Person",
        name: "Laura Bosompem",
        roleName: "Bride",
      },
    ],
    url: "https://laurykel.pages.dev",
    about: {
      "@type": "Thing",
      name: "Wedding",
      description: "Marriage Ceremony",
    },
    inLanguage: "en",
    isAccessibleForFree: false,
    maximumAttendeeCapacity: 500,
    subEvent: [
      {
        "@type": "Event",
        name: "Traditional Wedding Ceremony",
        startDate: "2026-03-14T07:00:00+00:00",
        endDate: "2026-03-14T11:00:00+00:00",
        location: {
          "@type": "Place",
          name: "Mr. Bosompem's House",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kokotuasi",
            addressLocality: "Obuasi",
            addressCountry: "GH",
          },
        },
        description: "Traditional Ghanaian wedding ceremony",
      },
      {
        "@type": "Event",
        name: "White Wedding Service",
        startDate: "2026-03-14T12:30:00+00:00",
        endDate: "2026-03-14T15:00:00+00:00",
        location: {
          "@type": "Place",
          name: "PIWC Obuasi",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kunka New Site",
            addressLocality: "Obuasi",
            addressCountry: "GH",
          },
        },
        description: "Christian wedding ceremony at PIWC Obuasi",
      },
      {
        "@type": "Event",
        name: "Thanksgiving Service",
        startDate: "2026-03-15T08:00:00+00:00",
        endDate: "2026-03-15T11:00:00+00:00",
        location: {
          "@type": "Place",
          name: "PIWC Obuasi",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kunka New Site",
            addressLocality: "Obuasi",
            addressCountry: "GH",
          },
        },
        description: "Thanksgiving service following the wedding",
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://laurykel.pages.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our Story",
        item: "https://laurykel.pages.dev/#story",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Wedding Details",
        item: "https://laurykel.pages.dev/#details",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "RSVP",
        item: "https://laurykel.pages.dev/#rsvp",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Registry",
        item: "https://laurykel.pages.dev/#registry",
      },
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Delali & Laura Wedding",
    url: "https://laurykel.pages.dev",
    logo: "https://laurykel.pages.dev/images/logo.png",
    sameAs: [],
  };

  return (
    <main className="relative min-h-screen bg-wedding-navy" role="main" aria-label="Wedding celebration website">
      {/* JSON-LD Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
      <section id="story" className="relative py-24 sm:py-32" aria-labelledby="story-heading">
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
              id="story-heading"
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
      <section id="details" className="relative py-24 sm:py-32" aria-labelledby="details-heading">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16">
            <TextShimmer
              as="h2"
              id="details-heading"
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
      <section id="rsvp" className="relative py-24 sm:py-32" aria-labelledby="rsvp-heading">
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
              id="rsvp-heading"
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
      <section id="registry" className="relative py-24 sm:py-32" aria-labelledby="registry-heading">
        <div className="mb-16 text-center">
          <TextShimmer
            as="h2"
            id="registry-heading"
            className="font-serif text-4xl font-light sm:text-5xl"
          >
            Registry
          </TextShimmer>
        </div>
        <Registry />
      </section>

      {/* Footer */}
      <footer className="relative border-t border-wedding-gold/5 py-16 text-center" role="contentinfo">
        <div className="mb-4 font-serif text-lg text-wedding-cream/20">
          Delali & Laura
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-wedding-cream/15">
          &copy; 2026 &middot; March 14th &middot; Obuasi, Ghana
        </p>
        <div className="mx-auto mt-6 gold-line" style={{ width: 60, height: 1 }} aria-hidden="true" />
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
    <article className="group">
      <div
        className="glass-card glow-border rounded-2xl p-8 transition-all duration-500 hover:border-wedding-gold/25"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="mb-4 text-3xl" role="img" aria-label={`${title} icon`}>
          {icon}
        </div>
        <h3 className="mb-4 font-serif text-xl text-wedding-cream">
          {title}
        </h3>
        <div className="space-y-1">
          <p className="font-mono text-sm text-wedding-gold">
            <time dateTime={time}>{time}</time>
          </p>
          <p className="text-sm text-wedding-cream/50" itemProp="addressLocality">
            {location}
          </p>
          <p className="text-sm text-wedding-cream/40" itemProp="name">
            {venue}
          </p>
        </div>
      </div>
    </article>
  );
}
