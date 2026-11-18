import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/home";
import { eventParts, upcomingEvents } from "@/lib/events";

export function EventsList() {
  const items = upcomingEvents(3);
  return (
    <Section tone="white">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow={home.events.eyebrow}
          title={home.events.title}
        />
        <Link href="/news" className="font-semibold">
          {home.events.linkLabel}
        </Link>
      </div>
      {items.length === 0 ? (
        <p className="text-muted-foreground mt-10">{home.events.empty}</p>
      ) : (
        <div className="mt-10 grid gap-6 min-[900px]:grid-cols-3">
          {items.map((e) => {
            const { day, month } = eventParts(e.date);
            return (
              <article
                key={e.id}
                className="rounded-card border-line bg-surface-2 flex items-start gap-5 border p-6"
              >
                <div className="bg-surface min-w-16 rounded-[12px] px-3.5 py-2.5 text-center">
                  <div className="font-heading text-primary text-[28px] leading-none font-bold">
                    {day}
                  </div>
                  <div className="text-muted-foreground text-xs font-semibold uppercase">
                    {month}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl">{e.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {e.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </Section>
  );
}
