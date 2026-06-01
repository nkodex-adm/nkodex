import { Section, SectionHeader } from "@/components/ui/Section";
import { processSteps } from "@/lib/content/process";

export function Process() {
  return (
    <Section id="processo">
      <SectionHeader
        eyebrow="Como trabalhamos"
        title="Um caminho claro, do diagnóstico à evolução"
        description="Você acompanha cada etapa com transparência — entendemos a operação, implantamos com segurança e seguimos evoluindo junto com o negócio."
      />

      <div className="mt-8">
        <ol className="grid gap-4 md:grid-cols-5">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.number} className="relative">
                <div className="card-surface flex h-full flex-col p-5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/15 text-brand-300 ring-1 ring-brand-500/30">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm font-semibold text-muted">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-base font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
