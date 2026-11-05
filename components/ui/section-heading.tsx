import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  inverted?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted,
  className,
}: Props) {
  return (
    <div className={cn("max-w-[620px]", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-[13px] font-semibold tracking-[0.1em] uppercase",
            inverted ? "text-on-primary-muted" : "text-muted-foreground",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={inverted ? "text-white" : undefined}>{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg",
            inverted ? "text-on-primary-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
