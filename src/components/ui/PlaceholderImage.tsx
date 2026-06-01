import { cn } from "@/lib/utils";
import type { PlaceholderAsset } from "@/lib/content/placeholders";

type PlaceholderImageProps = {
  asset: PlaceholderAsset;
  className?: string;
  imageClassName?: string;
  showBadge?: boolean;
};

export function PlaceholderImage({
  asset,
  className,
  imageClassName,
  showBadge = true,
}: PlaceholderImageProps) {
  return (
    <figure className={cn("relative overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset.src}
        alt={asset.alt}
        className={cn("h-full w-full object-cover object-center", imageClassName)}
        loading="lazy"
        decoding="async"
      />
      {showBadge ? (
        <figcaption className="absolute bottom-2 left-2 rounded-md border border-border-strong bg-background/80 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted backdrop-blur-sm">
          Preview · {asset.fileName}
        </figcaption>
      ) : null}
    </figure>
  );
}
