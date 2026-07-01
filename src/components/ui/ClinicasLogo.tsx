import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Logo para fundo claro — exclusiva da landing /clinicas */
const clinicasLogo = {
  full: "/logo-fundo-branco.png",
  icon: "/icone-fundo-branco.png",
} as const;

type ClinicasLogoProps = {
  variant?: "full" | "icon";
  className?: string;
  priority?: boolean;
};

export function ClinicasLogo({
  variant = "full",
  className,
  priority,
}: ClinicasLogoProps) {
  const src = variant === "icon" ? clinicasLogo.icon : clinicasLogo.full;

  return (
    // eslint-disable-next-line @next/next/no-img-element
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
