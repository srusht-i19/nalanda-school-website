import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  tone?: "surface" | "white" | "primary";
};

const tones = {
  surface: "bg-surface",
  white: "bg-surface-2",
  primary: "bg-primary text-white",
};

export function Section({
  tone = "surface",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 min-[900px]:py-24", tones[tone], className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
