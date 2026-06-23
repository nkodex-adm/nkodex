import { Section, SectionHeader } from "@/components/ui/Section";
import { clinicasLanding } from "@/lib/content/clinicas/landing";

const { autoridade } = clinicasLanding;

export function ClinicasAutoridade() {
  return (
    <Section id="autoridade">
      <SectionHeader
        eyebrow={autoridade.eyebrow}
        title={autoridade.title}
        description={autoridade.description}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {autoridade.items.map((item) => (
          <article key={item.title} className="card-surface p-6">
            <h3 className="font-display text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
