import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { school } from "@/content/school";

export default function Home() {
  return (
    <Container className="py-16">
      <h1>{school.name}</h1>
      <p className="text-muted-foreground mt-4 text-lg">
        Shell check: header, footer and mobile menu. The real Home page comes on
        Day 3.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <LinkButton href="/admissions">Enquire now</LinkButton>
        <LinkButton href="/kit" variant="outline">
          See the UI kit
        </LinkButton>
      </div>
    </Container>
  );
}
