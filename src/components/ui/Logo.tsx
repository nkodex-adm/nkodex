import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "icon";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "full", className, priority }: LogoProps) {
  const src =
    variant === "icon" ? siteConfig.logo.icon : siteConfig.logo.full;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- PNG exportado do SVG original
    <img
      src={src}
      alt={siteConfig.name}
      width={variant === "icon" ? 32 : 140}
      height={32}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={cn(
        variant === "icon" ? "h-8 w-8" : "h-8 w-auto sm:h-9",
        className,
      )}
    />
  );
}
