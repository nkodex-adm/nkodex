import Link from "next/link";
import { cn } from "@/lib/utils";

type ClinicasVariantToggleProps = {
  variant: "default" | "video";
};

export function ClinicasVariantToggle({ variant }: ClinicasVariantToggleProps) {
  const href = variant === "default" ? "/clinicas-video" : "/clinicas";
  const label =
    variant === "default" ? "Ver versão com vídeo" : "Voltar para versão atual";

  return (
    <Link
      href={href}
      className={cn(
        "fixed bottom-24 left-6 z-40 rounded-full border border-border-strong",
        "bg-background/80 px-4 py-2 text-xs font-medium text-muted backdrop-blur-sm",
        "transition-colors hover:border-brand-400/50 hover:text-foreground",
      )}
    >
      {label}
    </Link>
  );
}
