import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { prePrimary as p } from "@/content/pre-primary";

const card = "rounded-card border-line bg-surface-2 border p-6";

export function PrePrimary() {
  return (
    <>
      {/* Intro and approach */}
      <Section id="pre-primary">
        <SectionHeading eyebrow={p.hero.eyebrow} title={p.hero.title} />
        <div className="text-muted-foreground mt-8 max-w-[820px] space-y-4 text-lg">
          {p.hero.paragraphs.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <h3 className="mt-12 text-2xl">{p.approach.title}</h3>
        <div className="mt-6 grid gap-6 min-[900px]:grid-cols-3">
          {p.approach.items.map((a) => (
            <div key={a.title} className={card}>
              <h4 className="text-xl font-bold">{a.title}</h4>
              <p className="text-accent-text font-semibold">{a.subtitle}</p>
              <p className="text-muted-foreground mt-3 text-[15px]">{a.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Daily routine */}
      <Section tone="white">
        <SectionHeading eyebrow={p.routine.eyebrow} title={p.routine.title} />
        <div className="mt-10 grid gap-6 min-[900px]:grid-cols-2">
          {p.routine.items.map((r) => (
            <div key={r.title} className={card}>
              <h3 className="text-xl">{r.title}</h3>
              <p className="text-muted-foreground mt-3 text-[15px]">{r.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Five studios */}
      <Section>
        <SectionHeading eyebrow={p.studios.eyebrow} title={p.studios.title} />
        <p className="text-muted-foreground mt-6 max-w-[820px] text-lg">
          {p.studios.lead}
        </p>
        <ol className="mt-10 grid gap-6 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3">
          {p.studios.items.map((s, i) => (
            <li key={s.name} className={card}>
              <span className="bg-accent font-heading text-ink flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold">
                {i + 1}
              </span>
              <h4 className="mt-4 text-xl font-bold">{s.name}</h4>
              <p className="text-accent-text font-semibold">{s.subtitle}</p>
              <p className="text-muted-foreground mt-3 text-[15px]">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Learning and exploration */}
      <Section tone="white">
        <SectionHeading eyebrow={p.learning.eyebrow} title={p.learning.title} />
        <div className="mt-10 grid gap-6 min-[900px]:grid-cols-2">
          {p.learning.items.map((l) => (
            <div key={l.title} className={card}>
              <h3 className="text-xl">{l.title}</h3>
              <p className="text-muted-foreground mt-3 text-[15px]">{l.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Physical development */}
      <Section>
        <SectionHeading eyebrow={p.physical.eyebrow} title={p.physical.title} />
        <div className={`${card} mt-10`}>
          <h3 className="text-2xl">{p.physical.sportyBeans.title}</h3>
          <h4 className="text-accent-text mt-4 font-semibold">
            {p.physical.sportyBeans.aboutTitle}
          </h4>
          <div className="text-muted-foreground mt-2 space-y-3">
            {p.physical.sportyBeans.about.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <h4 className="text-accent-text mt-6 font-semibold">
            {p.physical.sportyBeans.methodologyTitle}
          </h4>
          <div className="text-muted-foreground mt-2 space-y-3">
            {p.physical.sportyBeans.methodology.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <h4 className="text-accent-text mt-6 font-semibold">
            {p.physical.sportyBeans.coachesTitle}
          </h4>
          <div className="text-muted-foreground mt-2 space-y-3">
            {p.physical.sportyBeans.coaches.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </div>
        <div className={`${card} mt-6`}>
          <h3 className="text-2xl">{p.physical.dance.title}</h3>
          <p className="text-muted-foreground mt-3">{p.physical.dance.text}</p>
        </div>
      </Section>

      {/* Events */}
      <Section tone="white">
        <SectionHeading eyebrow={p.events.eyebrow} title={p.events.title} />
        <p className="text-muted-foreground mt-4 text-lg">{p.events.note}</p>
        <div className="mt-8 grid gap-6 min-[900px]:grid-cols-2">
          {p.events.items.map((e) => (
            <div key={e.title} className={card}>
              <h3 className="text-xl">{e.title}</h3>
              <p className="text-muted-foreground mt-3 text-[15px]">{e.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Home-school partnership */}
      <Section>
        <SectionHeading
          eyebrow={p.homeSchool.eyebrow}
          title={p.homeSchool.title}
        />
        <p className="text-muted-foreground mt-4 max-w-[820px] text-lg">
          {p.homeSchool.lead}
        </p>
        <div className="mt-8 grid gap-6 min-[900px]:grid-cols-2">
          {p.homeSchool.items.map((h) => (
            <div key={h.title} className={card}>
              <h3 className="text-xl">{h.title}</h3>
              <p className="text-muted-foreground mt-3 text-[15px]">{h.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
