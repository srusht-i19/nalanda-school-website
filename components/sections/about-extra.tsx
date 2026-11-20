import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutExtra as x } from "@/content/about-extra";

const card = "rounded-card border-line bg-surface-2 border p-6";

export function AboutExtra() {
  return (
    <>
      {/* Welcome */}
      <Section>
        <SectionHeading eyebrow={x.welcome.eyebrow} title={x.welcome.title} />
        <div className="text-muted-foreground mt-8 max-w-[820px] space-y-4 text-lg">
          {x.welcome.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="font-heading text-primary mt-6 max-w-[820px] text-xl font-bold">
          {x.welcome.closing}
        </p>
      </Section>

      {/* Vision and mission */}
      <Section tone="white">
        <SectionHeading
          eyebrow={x.visionMission.eyebrow}
          title={x.visionMission.title}
        />
        <div className="mt-10 grid gap-6 min-[900px]:grid-cols-2">
          <div className={card}>
            <h3 className="text-2xl">{x.visionMission.visionTitle}</h3>
            <div className="text-muted-foreground mt-4 space-y-3">
              {x.visionMission.vision.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className={card}>
            <h3 className="text-2xl">{x.visionMission.missionTitle}</h3>
            <p className="text-muted-foreground mt-4">
              {x.visionMission.mission}
            </p>
            <p className="mt-4 font-semibold">{x.visionMission.missionLead}</p>
            <ul className="text-muted-foreground mt-3 space-y-2">
              {x.visionMission.missionPoints.map((m) => (
                <li key={m} className="flex gap-3">
                  <span aria-hidden="true" className="text-accent-text mt-1">
                    ✓
                  </span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground mt-8 max-w-[820px] text-lg">
          {x.visionMission.closing}
        </p>
      </Section>

      {/* Philosophy */}
      <Section>
        <SectionHeading
          eyebrow={x.philosophy.eyebrow}
          title={x.philosophy.title}
        />
        <p className="text-muted-foreground mt-6 max-w-[820px] text-lg">
          {x.philosophy.lead}
        </p>
        <div className="mt-10 grid gap-6 min-[900px]:grid-cols-3">
          {x.philosophy.pillars.map((p) => (
            <div key={p.title} className={card}>
              <h3 className="text-2xl">{p.title}</h3>
              <p className="text-accent-text mt-1 font-semibold">{p.tagline}</p>
              <div className="text-muted-foreground mt-4 space-y-3">
                {p.text.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h3 className="mt-12 text-2xl">{x.philosophy.closingTitle}</h3>
        <div className="text-muted-foreground mt-4 max-w-[820px] space-y-3 text-lg">
          {x.philosophy.closing.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="font-heading text-primary mt-6 text-xl font-bold">
          {x.philosophy.tagline}
        </p>
      </Section>

      {/* Panchakosha */}
      <Section tone="white">
        <SectionHeading
          eyebrow={x.panchakosha.eyebrow}
          title={x.panchakosha.title}
        />
        <div className="text-muted-foreground mt-6 max-w-[820px] space-y-3 text-lg">
          {x.panchakosha.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <h3 className="mt-10 text-2xl">{x.panchakosha.itemsTitle}</h3>
        <ol className="mt-6 grid gap-6 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3">
          {x.panchakosha.items.map((it, i) => (
            <li key={it.name} className={card}>
              <span className="bg-accent font-heading text-ink flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold">
                {i + 1}
              </span>
              <h4 className="mt-4 text-xl font-bold">{it.name}</h4>
              <p className="text-accent-text font-semibold">{it.theme}</p>
              <p className="text-muted-foreground mt-3 text-[15px]">
                {it.text}
              </p>
            </li>
          ))}
        </ol>
        <h3 className="mt-12 text-2xl">{x.panchakosha.closingTitle}</h3>
        <p className="text-muted-foreground mt-4 max-w-[820px] text-lg">
          {x.panchakosha.closing}
        </p>
        <p className="font-heading text-primary mt-6 text-xl font-bold">
          {x.panchakosha.tagline}
        </p>
      </Section>

      {/* Recognition */}
      <Section>
        <SectionHeading
          eyebrow={x.recognition.eyebrow}
          title={x.recognition.title}
        />
        <div className="text-muted-foreground mt-8 max-w-[820px] space-y-4 text-lg">
          {x.recognition.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="font-heading text-primary mt-6 max-w-[820px] text-xl font-bold">
          {x.recognition.closing}
        </p>
      </Section>

      {/* CBSE */}
      <Section tone="white">
        <SectionHeading eyebrow={x.cbse.eyebrow} title={x.cbse.title} />
        <div className="text-muted-foreground mt-8 max-w-[820px] space-y-4 text-lg">
          {x.cbse.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>
    </>
  );
}
