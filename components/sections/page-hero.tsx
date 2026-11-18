import { Container } from "@/components/ui/container";

type Props = { eyebrow: string; title: string; lead?: string };

export function PageHero({ eyebrow, title, lead }: Props) {
  return (
    <section className="pt-16 pb-8 min-[900px]:pt-24 min-[900px]:pb-12">
      <Container>
        <p className="text-muted-foreground mb-3 text-[13px] font-semibold tracking-[0.1em] uppercase">
          {eyebrow}
        </p>
        <h1 className="max-w-[820px]">{title}</h1>
        {lead && (
          <p className="text-muted-foreground mt-5 max-w-[620px] text-lg">
            {lead}
          </p>
        )}
      </Container>
    </section>
  );
}
