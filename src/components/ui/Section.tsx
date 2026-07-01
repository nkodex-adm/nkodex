import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-8 sm:py-12", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-6 sm:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

type SectionEyebrowProps = {
  children: ReactNode;
  className?: string;
  uppercase?: boolean;
};

export function SectionEyebrow({
  children,
  className,
  uppercase = true,
}: SectionEyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-3 py-1 text-xs font-medium tracking-wider text-brand-300",
        uppercase && "uppercase",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
      {children}
    </div>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
      <h2 className="font-display mt-3 text-balance text-3xl font-semibold sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-balance text-base text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
