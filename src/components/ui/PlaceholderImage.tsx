import { cn } from "@/lib/utils";
import type { PlaceholderAsset } from "@/lib/content/placeholders";

type PlaceholderImageProps = {
  asset: PlaceholderAsset;
  className?: string;
  imageClassName?: string;
};

export function PlaceholderImage({
  asset,
  className,
  imageClassName,
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
    </figure>
  );
}
