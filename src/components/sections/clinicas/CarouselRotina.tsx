"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionEyebrow, SectionHeader } from "@/components/ui/Section";
import { clinicasLanding } from "@/lib/content/clinicas/landing";

const { carousel } = clinicasLanding;

export function ClinicasCarouselRotina() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.85;
    track.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <Section className="overflow-hidden bg-surface/80">
      <div className="flex items-end justify-between gap-4">
        <SectionHeader
          eyebrow={carousel.eyebrow}
          title={carousel.title}
          description={carousel.description}
          align="left"
        />
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-surface text-muted transition-colors hover:border-brand-400/50 hover:text-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Próximo"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-surface text-muted transition-colors hover:border-brand-400/50 hover:text-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="clinicas-carousel mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {carousel.items.map((item) => (
          <article
            key={item.title}
            className="card-surface w-[min(100%,280px)] shrink-0 snap-start overflow-hidden sm:w-[320px]"
          >
            <figure className="relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <SectionEyebrow
                uppercase={false}
                className="absolute top-3 right-3 border-border-strong/60 bg-white/95 text-foreground shadow-sm backdrop-blur-sm"
              >
                {item.chip}
              </SectionEyebrow>
            </figure>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
