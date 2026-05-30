import { Section, SectionHeader } from "@/components/ui/Section";
import { services } from "@/lib/content/services";

export function Services() {
  return (
    <Section id="servicos">
      <SectionHeader
        eyebrow="Serviços"
        title="O que construímos para empresas B2B"
        description="Combinamos engenharia, design de produto e operação para entregar software que resolve um problema real — e segue resolvendo depois do lançamento."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="card-surface group p-6"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/15 text-brand-300 ring-1 ring-brand-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-brand-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
