import { TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cases } from "@/lib/content/cases";

export function Cases() {
  return (
    <Section id="cases">
      <SectionHeader
        eyebrow="Cases"
        title="Resultados que o software entrega"
        description="Uma amostra de projetos que combinaram engenharia bem feita com um problema de negócio claro."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {cases.map((item) => (
          <article key={item.client} className="card-surface group p-7">
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
                  Desafio
                </dt>
                <dd className="mt-1 text-foreground/90">{item.challenge}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  O que fizemos
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
          </article>
        ))}
      </div>
    </Section>
  );
}
