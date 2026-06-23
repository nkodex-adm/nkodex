import { Section, SectionHeader } from "@/components/ui/Section";
import { clinicasLanding } from "@/lib/content/clinicas/landing";

const { diagnostico } = clinicasLanding;

export function ClinicasDiagnostico() {
  return (
    <Section id="diagnostico">
      <SectionHeader
        eyebrow={diagnostico.eyebrow}
        title={diagnostico.title}
        description={diagnostico.description}
      />

      <ol className="mt-8 grid gap-4 sm:grid-cols-2">
        {diagnostico.steps.map((step) => (
          <li key={step.number} className="card-surface p-6">
            <span className="font-display text-sm font-semibold text-brand-300">
              {step.number}
            </span>
            <h3 className="font-display mt-3 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
