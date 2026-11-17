import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ImageFrame } from "@/components/ui/image-frame";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { campusPage as c } from "@/content/campus-page";
import { school } from "@/content/school";

export const metadata: Metadata = {
  title: "Campus and facilities",
  description: `Classrooms, labs, library, sports and safety at ${school.fullName}.`,
};

export default function CampusPage() {
  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        lead={c.hero.lead}
      />

      <Section className="pt-8 min-[900px]:pt-12">
        <SectionHeading
          eyebrow={c.facilitiesHeading.eyebrow}
          title={c.facilitiesHeading.title}
        />
        <div className="mt-10 grid gap-6 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3">
          {c.facilities.map((f) => (
            <div
              key={f.id}
              className="rounded-card bg-surface-2 shadow-card overflow-hidden"
            >
              <ImageFrame
                alt={`Placeholder photo: ${f.title}`}
                ratio="4/3"
                className="rounded-none"
              />
              <div className="p-6">
                <h3 className="text-xl">{f.title}</h3>
                <p className="text-muted-foreground mt-2 text-[15px]">
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow={c.safety.eyebrow} title={c.safety.title} />
        <ul className="mt-8 grid gap-4 min-[640px]:grid-cols-2">
          {c.safety.items.map((s) => (
            <li
              key={s}
              className="rounded-card bg-surface text-muted-foreground flex gap-3 p-5 text-lg"
            >
              <span aria-hidden="true" className="text-accent-text">
                ✓
              </span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
