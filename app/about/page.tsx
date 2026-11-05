import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ImageFrame } from "@/components/ui/image-frame";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { about } from "@/content/about";
import { faculty } from "@/content/faculty";
import { school } from "@/content/school";

export const metadata: Metadata = {
  title: "About us",
  description: `About ${school.fullName}: our story, vision, mission and leadership.`,
};

export default function AboutPage() {
  const principal = faculty.find((p) => p.id === "principal");
  const leaders = faculty.filter((p) => p.id !== "principal");

  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        lead={about.hero.lead}
      />

      {/* Our story */}
      <Section className="pt-8 min-[900px]:pt-12">
        <div className="grid items-center gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-14">
          <div>
            <SectionHeading
              eyebrow={about.story.eyebrow}
              title={about.story.title}
            />
            <div className="text-muted-foreground mt-6 space-y-4 text-lg">
              {about.story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <ImageFrame alt={about.story.imageAlt} ratio="4/3" />
        </div>
      </Section>

      {/* Vision and mission */}
      <Section tone="white">
        <SectionHeading
          eyebrow={about.beliefs.eyebrow}
          title={about.beliefs.title}
        />
        <div className="mt-10 grid gap-6 min-[900px]:grid-cols-2">
          {[about.vision, about.mission].map((b) => (
            <div key={b.label} className="rounded-card bg-surface p-8">
              <h3>{b.label}</h3>
              <p className="text-muted-foreground mt-3 text-lg">{b.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Principal's message */}
      <Section>
        <div className="grid items-start gap-10 min-[900px]:grid-cols-[360px_1fr] min-[900px]:gap-14">
          <ImageFrame
            alt={`Portrait of ${principal?.name ?? "the principal"}`}
            src={principal?.photo}
            ratio="3/4"
          />
          <div>
            <SectionHeading
              eyebrow={about.principal.eyebrow}
              title={about.principal.title}
            />
            <div className="text-muted-foreground mt-6 space-y-4 text-lg">
              {about.principal.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="text-ink mt-6 font-semibold">{principal?.name}</p>
            <p className="text-muted-foreground text-sm">{principal?.role}</p>
          </div>
        </div>
      </Section>

      {/* Leadership cards */}
      <Section tone="white">
        <SectionHeading
          eyebrow={about.leadership.eyebrow}
          title={about.leadership.title}
        />
        <div className="mt-10 grid gap-6 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3">
          {leaders.map((p) => (
            <div
              key={p.id}
              className="rounded-card bg-surface shadow-card overflow-hidden"
            >
              <ImageFrame
                alt={`Portrait of ${p.name}`}
                src={p.photo}
                ratio="3/4"
                className="rounded-none"
              />
              <div className="p-6">
                <h3 className="text-xl">{p.name}</h3>
                <p className="text-muted-foreground mt-1 text-sm font-semibold">
                  {p.role}
                </p>
                <p className="text-muted-foreground mt-3 text-[15px]">
                  {p.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Affiliations */}
      <Section>
        <SectionHeading
          eyebrow={about.affiliations.eyebrow}
          title={about.affiliations.title}
        />
        <ul className="mt-10 grid gap-4 min-[640px]:grid-cols-3">
          {about.affiliations.items.map((a) => (
            <li
              key={a.label}
              className="rounded-card border-line bg-surface-2 border p-6"
            >
              <p className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
                {a.label}
              </p>
              <p className="font-heading text-primary mt-2 text-xl font-bold">
                {a.value}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
