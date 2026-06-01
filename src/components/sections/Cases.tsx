import { TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cases } from "@/lib/content/cases";
import { caseMockups } from "@/lib/content/placeholders";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Cases() {
  return (
    <Section id="cases">
      <SectionHeader
        eyebrow="Aplicações"
        title="Onde um sistema personalizado faz diferença"
        description="Exemplos reais de situações que resolvemos — sem cases fictícios, foco no que importa para gestores e donos de negócio."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {cases.map((item, index) => {
          const mockup = caseMockups[index];
          return (
          <article key={item.client} className="card-surface group overflow-hidden">
            {mockup ? (
              <PlaceholderImage
                asset={mockup}
                className="aspect-[16/9] w-full border-b border-border-subtle"
                showBadge
              />
            ) : null}
            <div className="p-7">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-300">
                {item.industry}
              </span>
              {item.placeholder ? (
                <span className="rounded-full border border-border-strong px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                  Exemplo
                </span>
              ) : null}
            </div>

            <h3 className="font-display mt-3 text-xl font-semibold">
              {item.client}
            </h3>

            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  Situação comum
                </dt>
                <dd className="mt-1 text-foreground/90">{item.challenge}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  O que o sistema entrega
                </dt>
                <dd className="mt-1 text-foreground/90">{item.result}</dd>
              </div>
            </dl>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-border-subtle pt-5">
              <div className="inline-flex items-center gap-2 text-brand-300">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-semibold">{item.metric}</span>
              </div>
              <ul className="flex flex-wrap items-center justify-end gap-1.5">
                {item.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border-subtle bg-white/[0.03] px-2 py-0.5 text-[11px] text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </article>
          );
        })}
      </div>
    </Section>
  );
}
