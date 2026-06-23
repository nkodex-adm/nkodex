import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clinicasLanding } from "@/lib/content/clinicas/landing";
import { ClinicasVariantToggle } from "@/components/sections/clinicas/VariantToggle";

const { hero } = clinicasLanding;

export function ClinicasHero() {
  return (
    <>
      <ClinicasVariantToggle variant="default" />
      <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid" />
      <div aria-hidden className="absolute inset-0 bg-radial-hero" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-8 pt-20 sm:px-8 sm:pb-10 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            {hero.eyebrow}
          </div>

          <h1 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Sua clínica cresceu, mas o controle da operação{" "}
            <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-white bg-clip-text text-transparent">
              não acompanhou?
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contato" size="lg">
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={hero.secondaryHref} size="lg" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted">
            {hero.highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}
