import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-muted-foreground text-sm font-semibold tracking-[0.1em] uppercase">
        Error 404
      </p>
      <h1 className="mt-3">We could not find that page.</h1>
      <p className="text-muted-foreground mt-4 max-w-[520px] text-lg">
        The link may be old or mistyped. Try the home page or contact the school
        office.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href="/">Back to home</LinkButton>
        <LinkButton href="/contact" variant="outline">
          Contact us
        </LinkButton>
      </div>
    </Container>
  );
}
