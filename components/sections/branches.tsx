import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { branches, branchesIntro as b } from "@/content/branches";

export function Branches() {
  return (
    <Section tone="white">
      <SectionHeading eyebrow={b.eyebrow} title={b.title} />
      <p className="font-heading text-primary mt-4 text-xl font-bold">
        {b.tagline}
      </p>
      <div className="text-muted-foreground mt-4 max-w-[820px] space-y-3 text-lg">
        {b.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="mt-10 grid gap-6 min-[900px]:grid-cols-2">
        {branches.map((br) => (
          <div
            key={br.name}
            className="rounded-card border-line bg-surface-2 border p-6"
          >
            <h3 className="text-xl">{br.name}</h3>
            <p className="text-muted-foreground mt-2">{br.address}</p>
            <p className="mt-2 font-semibold">
              {br.phones.map((ph, i) => (
                <span key={ph.tel}>
                  {i > 0 && " | "}
                  <a href={`tel:${ph.tel}`} className="underline">
                    {ph.label}
                  </a>
                </span>
              ))}
            </p>
            <p className="text-muted-foreground mt-3 text-[15px]">{br.text}</p>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground mt-8 max-w-[820px] text-lg">
        {b.common}
      </p>
    </Section>
  );
}
