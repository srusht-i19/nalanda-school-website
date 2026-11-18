import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "cta" | "outline" | "outline-light";
  className?: string;
};

const styles = {
  cta: "bg-accent text-ink hover:bg-accent-hover",
  outline:
    "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
  "outline-light":
    "border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary",
};

export function LinkButton({
  href,
  children,
  variant = "cta",
  className,
}: Props) {
  const internal = href.startsWith("/");
  return (
    <Button
      asChild
      className={cn(
        "h-12 rounded-full px-6 text-base font-semibold",
        styles[variant],
        className,
      )}
    >
      {internal ? (
        <Link href={href}>{children}</Link>
      ) : (
        <a href={href}>{children}</a>
      )}
    </Button>
  );
}
