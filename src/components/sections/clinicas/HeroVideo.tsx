"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clinicasLanding } from "@/lib/content/clinicas/landing";

const { heroVideo } = clinicasLanding;

export function ClinicasHeroVideo() {
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
          <source src={heroVideo.videoSrc} type="video/mp4" />
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
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            {heroVideo.eyebrow}
          </div>

          <h1 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Sua clínica cresceu, mas o controle da operação{" "}
            <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-white bg-clip-text text-transparent">
              {heroVideo.titleHighlight}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-foreground/85 sm:text-lg">
            {heroVideo.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contato" size="lg">
              {heroVideo.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={heroVideo.secondaryHref} size="lg" variant="secondary">
              {heroVideo.secondaryCta}
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-foreground/75">
            {heroVideo.highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
