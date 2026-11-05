import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { LinkButton } from "@/components/ui/link-button";
import { home } from "@/content/home";

export function HomeHero() {
  const { hero } = home;
  return (
    <section className="py-16 min-[900px]:py-24">
      <Container className="grid items-center gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-14">
        <div className="flex flex-col gap-6">
          <p className="text-muted-foreground text-[13px] font-semibold tracking-[0.1em] uppercase">
            {hero.eyebrow}
          </p>
          <h1>{hero.title}</h1>
          <p className="text-muted-foreground max-w-[520px] text-lg">
            {hero.lead}
          </p>
          <div className="flex flex-wrap gap-3">
            <LinkButton href="/admissions">Start admission</LinkButton>
            <LinkButton href="/contact" variant="outline">
              Book a campus visit
            </LinkButton>
          </div>
          <p className="text-muted-foreground flex items-start gap-2 text-sm">
            <Check
              aria-hidden="true"
              className="text-primary mt-0.5 h-[18px] w-[18px] shrink-0"
            />
            {hero.check}
          </p>
        </div>
        <ImageFrame
          src={hero.image}
          alt={hero.imageAlt}
          ratio="4/3"
          fit="contain"
          priority
          className="bg-secondary"
        />
      </Container>
    </section>
  );
}
