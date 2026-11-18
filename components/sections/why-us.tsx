import { BookOpen, Bot, Trophy, Users, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home, type IconName } from "@/content/home";

const icons: Record<IconName, LucideIcon> = {
  users: Users,
  book: BookOpen,
  bot: Bot,
  trophy: Trophy,
};

export function WhyUs() {
  const { whyUs } = home;
  return (
    <Section className="pt-0">
      <SectionHeading eyebrow={whyUs.eyebrow} title={whyUs.title} />
      <div className="mt-10 grid gap-6 min-[640px]:grid-cols-2 min-[900px]:grid-cols-4">
        {whyUs.cards.map((c) => {
          const Icon = icons[c.icon];
          return (
            <div
              key={c.title}
              className="rounded-card bg-surface-2 shadow-card flex flex-col gap-3.5 p-7"
            >
              <Icon aria-hidden="true" className="text-primary h-8 w-8" />
              <h3>{c.title}</h3>
              <p className="text-muted-foreground text-[15px]">{c.text}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
