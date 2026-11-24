import type { Metadata } from "next";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactPage as c } from "@/content/contact-page";
import { school } from "@/content/school";
import { Branches } from "@/components/sections/branches";

export const metadata: Metadata = {
  title: "Contact us",
  alternates: { canonical: "/contact" },
  description: `Address, phone, email, office hours and enquiry form of ${school.fullName}.`,
};

// Turns a string, a list, or an object of text into readable lines.
function lines(value: unknown, sep: string): string[] {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap((v) => lines(v, sep));
  if (typeof value === "object") {
    return [
      Object.values(value as Record<string, unknown>)
        .filter(Boolean)
        .map(String)
        .join(sep),
    ];
  }
  return [String(value)];
}

function socialLinks(): { label: string; href: string }[] {
  const s: unknown = school.social;
  if (Array.isArray(s)) {
    return s.map((x) => {
      const o = x as Record<string, unknown>;
      return {
        label: String(o.label ?? o.name ?? o.platform ?? "Link"),
        href: String(o.href ?? o.url ?? "#"),
      };
    });
  }
  if (s && typeof s === "object") {
    return Object.entries(s as Record<string, unknown>).map(
      ([label, href]) => ({
        label,
        href: String(href),
      }),
    );
  }
  return [];
}

export default function ContactPage() {
  const phoneHref = `tel:${school.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${school.email}`;
  const social = socialLinks();
  const cardClass = "rounded-card border border-line bg-surface-2 p-6";
  const linkClass =
    "font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        lead={c.hero.lead}
      />
      <Section className="pt-8 min-[900px]:pt-12">
        <SectionHeading
          eyebrow={c.detailsHeading.eyebrow}
          title={c.detailsHeading.title}
        />
        <div className="mt-10 grid gap-6 min-[640px]:grid-cols-2 min-[900px]:grid-cols-4">
          <div className={cardClass}>
            <h3 className="text-lg">Address</h3>
            {lines(school.address, ", ").map((l) => (
              <p key={l} className="text-muted-foreground mt-2">
                {l}
              </p>
            ))}
          </div>
          <div className={cardClass}>
            <h3 className="text-lg">Phone</h3>
            <p className="mt-2">
              <a href={phoneHref} className={linkClass}>
                {school.phone}
              </a>
            </p>
          </div>
          <div className={cardClass}>
            <h3 className="text-lg">Email</h3>
            <p className="mt-2 break-words">
              <a href={emailHref} className={linkClass}>
                {school.email}
              </a>
            </p>
          </div>
          <div className={cardClass}>
            <h3 className="text-lg">Office hours</h3>
            {lines(school.hours, ": ").map((l) => (
              <p key={l} className="text-muted-foreground mt-2">
                {l}
              </p>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="white">
        <SectionHeading
          eyebrow={c.mapHeading.eyebrow}
          title={c.mapHeading.title}
        />
        <div className="rounded-card border-line mt-10 overflow-hidden border">
          <iframe
            src={c.mapSrc}
            title={c.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full min-[900px]:h-[420px]"
          />
        </div>
      </Section>
      <Section>
        <SectionHeading
          eyebrow={c.formHeading.eyebrow}
          title={c.formHeading.title}
        />
        <div className="mt-8 max-w-[820px]">
          <EnquiryForm source="Contact page" variant="contact" />
        </div>
        {social.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg">{c.socialHeading}</h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="border-line hover:bg-surface focus-visible:outline-primary inline-flex min-h-11 items-center rounded-full border px-5 text-sm font-semibold capitalize focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>{" "}
      <Branches />
    </>
  );
}
