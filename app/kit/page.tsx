import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageFrame } from "@/components/ui/image-frame";
import { LinkButton } from "@/components/ui/link-button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { admissions } from "@/content/admissions";
import { programs } from "@/content/programs";

export const metadata: Metadata = { title: "UI kit", robots: { index: false } };

export default function KitPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="UI kit"
          title="Buttons, badges and cards"
          description="Temporary page. Delete before launch."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="/">Primary CTA</LinkButton>
          <LinkButton href="/" variant="outline">
            Outline
          </LinkButton>
          <Button>shadcn default</Button>
          <Button variant="outline">shadcn outline</Button>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge>Ages 3–6</Badge>
          <Badge variant="secondary">Classes 1–5</Badge>
          <Badge variant="outline">New</Badge>
        </div>
        <div className="mt-10 grid gap-6 min-[900px]:grid-cols-3">
          {programs.slice(0, 3).map((p) => (
            <Card key={p.id} className="rounded-card shadow-card">
              <CardHeader>
                <Badge className="w-fit">{p.ages}</Badge>
                <CardTitle className="font-heading text-primary text-2xl">
                  {p.label}
                </CardTitle>
                <CardDescription>{p.intro}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading title="Tabs, accordion and dialog" />
        <Tabs defaultValue={programs[0].id} className="mt-8">
          <TabsList className="h-auto flex-wrap">
            {programs.map((p) => (
              <TabsTrigger key={p.id} value={p.id}>
                {p.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {programs.map((p) => (
            <TabsContent key={p.id} value={p.id} className="mt-4">
              <h3>{p.title}</h3>
              <p className="text-muted-foreground mt-2">{p.intro}</p>
            </TabsContent>
          ))}
        </Tabs>

        <Accordion type="single" collapsible className="mt-10">
          {admissions.faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="mt-10">
              Open dialog
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog check</DialogTitle>
              <DialogDescription>
                Escape closes it and focus stays inside.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </Section>

      <Section tone="primary">
        <div className="grid gap-8 min-[900px]:grid-cols-4">
          <StatCard value="20+" label="Years in Kolhapur (placeholder)" />
          <StatCard value="1,000+" label="Students (placeholder)" />
          <StatCard
            value="1:15"
            label="Teacher to student ratio (placeholder)"
          />
          <StatCard value="95%" label="Board pass rate (placeholder)" />
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 min-[900px]:grid-cols-2">
          <ImageFrame alt="Placeholder photo, 4:3" ratio="4/3" />
          <ImageFrame alt="Placeholder photo, 16:9" ratio="16/9" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
