import { Section, SectionHeader } from "@/components/ui/Section";
import { services } from "@/lib/content/services";
import { serviceMockups } from "@/lib/content/placeholders";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Services() {
  return (
    <Section id="servicos">
      <SectionHeader
        eyebrow="Serviços"
        title="Soluções para organizar e escalar sua operação"
        description="O sistema que se adapta à sua empresa. Não o contrário. Centralizamos informações, automatizamos tarefas e eliminamos controles paralelos — do financeiro ao dia a dia da equipe."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          const mockup = serviceMockups[index];
          return (
            <article
              key={service.title}
              className="card-surface group overflow-hidden"
            >
              {mockup ? (
                <PlaceholderImage
                  asset={mockup}
                  className="aspect-[16/9] w-full border-b border-border-subtle"
                  showBadge
                />
              ) : null}
              <div className="p-6">
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
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
