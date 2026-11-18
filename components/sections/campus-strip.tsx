import Link from "next/link";
import { ImageFrame } from "@/components/ui/image-frame";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { clubs, facilities } from "@/content/facilities";
import { home } from "@/content/home";

export function CampusStrip() {
  const items = [...facilities, ...clubs].slice(0, 4);
  return (
    <Section>
      <SectionHeading eyebrow={home.campus.eyebrow} title={home.campus.title} />
      <div className="mt-10 grid grid-cols-2 gap-4 min-[900px]:grid-cols-4">
        {items.map((f) => (
          <ImageFrame key={f.id} src={f.image} alt={f.title} ratio="3/4" />
        ))}
      </div>
      <Link href="/campus" className="mt-8 inline-block font-semibold">
        {home.campus.linkLabel}
      </Link>
    </Section>
  );
}
