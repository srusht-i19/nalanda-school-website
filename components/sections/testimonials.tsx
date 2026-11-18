import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/home";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow={home.testimonials.eyebrow}
        title={home.testimonials.title}
      />
      <div
        role="region"
        aria-label="Parent testimonials"
        tabIndex={0}
        className="-mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-4 min-[900px]:mx-0 min-[900px]:mt-10 min-[900px]:grid min-[900px]:grid-cols-3 min-[900px]:gap-6 min-[900px]:overflow-visible min-[900px]:px-0 min-[900px]:py-0"
      >
        {testimonials.map((t) => (
          <blockquote
            key={t.id}
            className="rounded-card bg-surface-2 shadow-card flex w-[280px] shrink-0 snap-start flex-col gap-4 p-7 min-[900px]:w-auto"
          >
            <p className="text-[17px]">&ldquo;{t.quote}&rdquo;</p>
            <footer className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="bg-placeholder text-primary flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold"
              >
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-muted-foreground text-[13px]">
                  {t.relation}
                </div>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
