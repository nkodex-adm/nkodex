import { XCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { clinicasLanding } from "@/lib/content/clinicas/landing";

const { consequencias } = clinicasLanding;

export function ClinicasConsequencias() {
  return (
    <Section id="consequencias" className="bg-surface/20">
      <SectionHeader
        eyebrow={consequencias.eyebrow}
        title={consequencias.title}
        description={consequencias.description}
      />

      <ul className="mx-auto mt-8 grid max-w-3xl gap-3">
        {consequencias.items.map((item) => (
          <li
            key={item}
            className="card-surface flex items-start gap-3 px-5 py-4 text-sm sm:text-base"
          >
            <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
            <span className="text-foreground/90">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
