"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clinicasLanding } from "@/lib/content/clinicas/landing";
import { cn } from "@/lib/utils";

const { hero } = clinicasLanding;

export function ClinicasHero() {
  const [preferReducedMotion, setPreferReducedMotion] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPreferReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const showVideo = preferReducedMotion === false;

  return (
    <section className="relative min-h-[85vh] overflow-hidden sm:min-h-[90vh]">
      {showVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={hero.videoSrc} type="video/mp4" />
        </video>
      ) : (
        <>
          <div aria-hidden className="absolute inset-0 bg-background" />
          <div aria-hidden className="absolute inset-0 bg-grid" />
          <div aria-hidden className="absolute inset-0 bg-radial-hero" />
        </>
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,14,28,0.88)_0%,rgba(10,14,28,0.72)_45%,rgba(10,14,28,0.45)_100%)] sm:bg-[linear-gradient(90deg,rgba(10,14,28,0.82)_0%,rgba(10,14,28,0.62)_45%,rgba(10,14,28,0.35)_100%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-[rgba(43,47,66,0.25)]" />
      <div
        aria-hidden
        className="absolute inset-0 bg-background/35 sm:bg-background/15 md:bg-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[85vh] w-full max-w-6xl items-center px-6 py-20 sm:min-h-[90vh] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-200" />
            {hero.eyebrow}
          </div>

          <h1 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Sua clínica cresceu, mas o controle da operação{" "}
            <span className="bg-gradient-to-r from-brand-300 via-brand-200 to-white bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-white/85 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contato" size="lg">
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link
              href={hero.secondaryHref}
              className={cn(
                "inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-base font-medium",
                "border-2 border-white/80 bg-white/15 text-white backdrop-blur-sm",
                "transition-all duration-200 hover:border-white hover:bg-white/25",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
              )}
            >
              {hero.secondaryCta}
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/80">
            {hero.highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
