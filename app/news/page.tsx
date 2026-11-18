import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { events } from "@/content/events";
import { newsPage as n } from "@/content/news-page";
import { school } from "@/content/school";

export const metadata: Metadata = {
  title: "News and events",
  description: `Upcoming events, past highlights and the annual calendar of ${school.fullName}.`,
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function NewsPage() {
  // Events are split when the site is built. Redeploy after changing events.ts.
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events
    .filter((e) => e.date.slice(0, 10) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = events
    .filter((e) => e.date.slice(0, 10) < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        eyebrow={n.hero.eyebrow}
        title={n.hero.title}
        lead={n.hero.lead}
      />

      <Section className="pt-8 min-[900px]:pt-12">
        <SectionHeading eyebrow={n.upcoming.eyebrow} title={n.upcoming.title} />
        {upcoming.length === 0 ? (
          <p className="text-muted-foreground mt-8 text-lg">
            {n.upcoming.empty}
          </p>
        ) : (
          <ul className="mt-8 space-y-4">
            {upcoming.map((e) => (
              <li
                key={`${e.title}-${e.date}`}
                className="rounded-card border-line bg-surface-2 border p-6"
              >
                <p className="text-accent-text text-sm font-semibold">
                  {formatDate(e.date)}
                </p>
                <h3 className="mt-1 text-xl">{e.title}</h3>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow={n.past.eyebrow} title={n.past.title} />
        {past.length === 0 ? (
          <p className="text-muted-foreground mt-8 text-lg">{n.past.empty}</p>
        ) : (
          <ul className="mt-8 space-y-4">
            {past.map((e) => (
              <li
                key={`${e.title}-${e.date}`}
                className="rounded-card bg-surface p-6"
              >
                <p className="text-muted-foreground text-sm font-semibold">
                  {formatDate(e.date)}
                </p>
                <h3 className="mt-1 text-xl">{e.title}</h3>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section>
        <SectionHeading eyebrow={n.calendar.eyebrow} title={n.calendar.title} />
        {n.calendar.href ? (
          <a
            href={n.calendar.href}
            download
            className="bg-accent text-ink hover:bg-accent-hover focus-visible:outline-primary mt-8 inline-flex min-h-11 items-center rounded-full px-8 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {n.calendar.label}
          </a>
        ) : (
          <p className="text-muted-foreground mt-8 text-lg">
            {n.calendar.comingSoon}
          </p>
        )}
      </Section>
    </>
  );
}
