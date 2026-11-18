import type { Metadata } from "next";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { admissionsPage as a } from "@/content/admissions-page";
import { school } from "@/content/school";

export const metadata: Metadata = {
  title: "Admissions",
  description: `Admissions for ${school.session} at ${school.fullName}: process, eligibility, documents and enquiry form.`,
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        lead={a.hero.lead}
      />

      {/* Open banner */}
      <section className="pb-4">
        <div className="mx-auto max-w-[1200px] px-4 min-[900px]:px-6">
          <div className="rounded-card bg-primary text-on-primary-muted px-6 py-5">
            <p className="font-heading text-xl font-bold text-white">
              Admissions for {school.session} are open.
            </p>
          </div>
        </div>
      </section>

      {/* 4 steps */}
      <Section>
        <SectionHeading eyebrow={a.steps.eyebrow} title={a.steps.title} />
        <ol className="mt-10 grid gap-6 min-[640px]:grid-cols-2 min-[900px]:grid-cols-4">
          {a.steps.items.map((s, i) => (
            <li
              key={s.title}
              className="rounded-card border-line bg-surface-2 border p-6"
            >
              <span className="bg-accent font-heading text-ink flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold">
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="text-muted-foreground mt-2 text-[15px]">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Age eligibility */}
      <Section tone="white">
        <SectionHeading eyebrow={a.ageTable.eyebrow} title={a.ageTable.title} />
        <div className="rounded-card border-line mt-10 overflow-x-auto border">
          <table className="w-full text-left">
            <caption className="sr-only">Age eligibility by class</caption>
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="px-5 py-3 text-sm font-semibold">
                  Class
                </th>
                <th scope="col" className="px-5 py-3 text-sm font-semibold">
                  Age requirement
                </th>
              </tr>
            </thead>
            <tbody>
              {a.ageTable.rows.map((r) => (
                <tr key={r.className} className="border-line border-t">
                  <th scope="row" className="px-5 py-3 font-semibold">
                    {r.className}
                  </th>
                  <td className="text-muted-foreground px-5 py-3">{r.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground mt-3 text-sm">{a.ageTable.note}</p>
      </Section>

      {/* Documents and fees */}
      <Section>
        <div className="grid gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-14">
          <div>
            <SectionHeading
              eyebrow={a.documents.eyebrow}
              title={a.documents.title}
            />
            <ul className="text-muted-foreground mt-6 space-y-3 text-lg">
              {a.documents.items.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden="true" className="text-accent-text mt-1">
                    ✓
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow={a.fees.eyebrow} title={a.fees.title} />
            <p className="text-muted-foreground mt-6 text-lg">{a.fees.text}</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <SectionHeading eyebrow={a.faq.eyebrow} title={a.faq.title} />
        <Accordion type="single" collapsible className="mt-10 max-w-[820px]">
          {a.faq.items.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="min-h-11 text-left text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* Enquiry form */}
      <Section tone="surface">
        <div id="enquire" className="scroll-mt-24">
          <SectionHeading eyebrow={a.form.eyebrow} title={a.form.title} />
          <p className="text-muted-foreground mt-4 max-w-[620px] text-lg">
            {a.form.lead}
          </p>
          <div className="mt-8 max-w-[820px]">
            <EnquiryForm source="Admissions page" />
          </div>
        </div>
      </Section>
    </>
  );
}
