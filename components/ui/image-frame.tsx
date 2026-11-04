import Image from "next/image";
import { cn } from "@/lib/utils";

const ratios = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
};

type Props = {
  alt: string;
  src?: string;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  className?: string;
};

export function ImageFrame({
  alt,
  src,
  ratio = "4/3",
  priority,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-card bg-placeholder relative overflow-hidden",
        ratios[ratio],
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 900px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="text-muted-foreground flex h-full items-center justify-center p-4 text-center text-sm font-medium"
        >
          {alt}
        </div>
      )}
    </div>
  );
}
