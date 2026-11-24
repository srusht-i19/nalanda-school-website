import type { Metadata } from "next";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { galleryPage as g } from "@/content/gallery-page";
import { school } from "@/content/school";

export const metadata: Metadata = {
  title: "Gallery",
  alternates: { canonical: "/gallery" },
  description: `Photos of campus, classrooms, events and sports at ${school.fullName}.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow={g.hero.eyebrow}
        title={g.hero.title}
        lead={g.hero.lead}
      />
      <Section className="pt-8 min-[900px]:pt-12">
        <GalleryGrid />
      </Section>
    </>
  );
}
