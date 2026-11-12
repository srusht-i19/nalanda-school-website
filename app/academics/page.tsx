import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { academics } from "@/content/academics";
import { school } from "@/content/school";

export const metadata: Metadata = {
  title: "Academics",
  description: `Curriculum, learning stages and assessment at ${school.fullName}.`,
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow={academics.hero.eyebrow}
        title={academics.hero.title}
        lead={academics.hero.lead}
      />

      {/* Curriculum overview */}
      <Section className="pt-8 min-[900px]:pt-12">
        <SectionHeading
          eyebrow={academics.intro.eyebrow}
          title={academics.intro.title}
        />
        <p className="bg-surface text-ink mt-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold">
          {academics.intro.board}
        </p>
        <div className="text-muted-foreground mt-6 max-w-[760px] space-y-4 text-lg">
          {academics.intro.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Stage tabs */}
      <Section tone="white">
        <SectionHeading
          eyebrow={academics.stagesHeading.eyebrow}
          title={academics.stagesHeading.title}
        />
        <Tabs defaultValue={academics.stages[0].id} className="mt-10">
          <TabsList className="flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
            {academics.stages.map((s) => (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className="border-line data-[state=active]:bg-accent data-[state=active]:text-ink min-h-11 rounded-full border px-5"
              >
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {academics.stages.map((s) => (
            <TabsContent key={s.id} value={s.id} className="mt-6">
              <div className="rounded-card bg-surface p-8">
                <h3>{s.label}</h3>
                <p className="text-muted-foreground mt-1 text-sm font-semibold">
                  {s.age}
                </p>
                <h4 className="text-ink mt-6 font-semibold">Subjects</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {s.subjects.map((sub) => (
                    <li
                      key={sub}
                      className="border-line bg-surface-2 rounded-full border px-3 py-1 text-sm"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
                <h4 className="text-ink mt-6 font-semibold">Our approach</h4>
                <p className="text-muted-foreground mt-2 max-w-[680px]">
                  {s.approach}
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Section>

      {/* Assessment / languages / support */}
      <Section>
        <SectionHeading
          eyebrow={academics.supportHeading.eyebrow}
          title={academics.supportHeading.title}
        />
        <div className="mt-10 grid gap-6 min-[900px]:grid-cols-3">
          {academics.support.map((c) => (
            <div
              key={c.title}
              className="rounded-card border-line bg-surface-2 border p-6"
            >
              <h3 className="text-xl">{c.title}</h3>
              <p className="text-muted-foreground mt-3">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Beyond academics */}
      <Section tone="white">
        <SectionHeading
          eyebrow={academics.beyondHeading.eyebrow}
          title={academics.beyondHeading.title}
        />
        <div className="mt-10 grid gap-6 min-[640px]:grid-cols-2 min-[900px]:grid-cols-4">
          {academics.beyond.map((b) => (
            <div key={b.title} className="rounded-card bg-surface p-6">
              <h3 className="text-xl">{b.title}</h3>
              <p className="text-muted-foreground mt-3 text-[15px]">{b.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
