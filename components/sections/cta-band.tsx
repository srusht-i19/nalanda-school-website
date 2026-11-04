import { LinkButton } from "@/components/ui/link-button";
import { Section } from "@/components/ui/section";
import { phoneHref, school } from "@/content/school";

export function CtaBand({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section tone="primary">
      <div className="flex flex-col gap-6 min-[900px]:flex-row min-[900px]:items-center min-[900px]:justify-between">
        <div className="max-w-[620px]">
          <h2 className="text-white">
            {title ?? `Admissions for ${school.session} are open.`}
          </h2>
          <p className="text-on-primary-muted mt-3 text-lg">
            {description ??
              "Limited seats. Enquire today and we will call you back within one working day."}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/admissions">Enquire now</LinkButton>
          <LinkButton href={phoneHref} variant="outline-light">
            Call {school.phone}
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
