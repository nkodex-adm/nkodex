import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-500 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.6)]",
  secondary:
    "bg-white/5 text-foreground border border-border-strong hover:bg-white/10 hover:border-brand-400/50",
  ghost:
    "text-muted hover:text-foreground hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ComponentProps<"button"> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http");
    return (
      <Link
        href={props.href}
        target={props.target ?? (isExternal ? "_blank" : undefined)}
        rel={props.rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  const rest = omitStyleProps(props as ButtonAsButton);
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

const OMITTED_KEYS = new Set(["variant", "size", "className", "children", "href"]);

function omitStyleProps(
  props: ButtonAsButton,
): Omit<ComponentProps<"button">, "className" | "children"> {
  const source = props as unknown as Record<string, unknown>;
  const result: Record<string, unknown> = {};
  for (const key of Object.keys(source)) {
    if (OMITTED_KEYS.has(key)) continue;
    result[key] = source[key];
  }
  return result as Omit<ComponentProps<"button">, "className" | "children">;
}
