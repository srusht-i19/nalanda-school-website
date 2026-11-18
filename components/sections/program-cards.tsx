import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ImageFrame } from "@/components/ui/image-frame";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/home";
import { programs } from "@/content/programs";

export function ProgramCards() {
  return (
    <Section tone="white">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow={home.programs.eyebrow}
          title={home.programs.title}
        />
        <Link href="/academics" className="font-semibold">
          {home.programs.linkLabel}
        </Link>
      </div>
      <div className="mt-10 grid gap-6 min-[900px]:grid-cols-2">
        {programs.map((p) => (
          <Link
            key={p.id}
            href="/academics"
            className="rounded-card bg-surface-2 text-ink shadow-card hover:text-ink flex flex-col overflow-hidden"
          >
            <ImageFrame
              alt={`${p.label} photo`}
              ratio="4/3"
              className="rounded-none"
            />
            <div className="flex flex-col gap-2 p-6">
              <Badge className="w-fit">{p.ages}</Badge>
              <h3>{p.label}</h3>
              <p className="text-muted-foreground text-[15px]">{p.intro}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
