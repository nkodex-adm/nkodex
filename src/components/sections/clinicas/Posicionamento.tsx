import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { clinicasLanding } from "@/lib/content/clinicas/landing";

const { posicionamento } = clinicasLanding;

export function ClinicasPosicionamento() {
  return (
    <Section id="solucao">
      <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface/60 p-6 sm:p-10 lg:p-14">
        <div aria-hidden className="absolute inset-0 bg-radial-hero opacity-70" />
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow={posicionamento.eyebrow}
            title={posicionamento.title}
            description={posicionamento.description}
          />

          <ul className="mt-8 space-y-3 text-left sm:mx-auto sm:max-w-xl">
            {posicionamento.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <span className="text-foreground/90">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
