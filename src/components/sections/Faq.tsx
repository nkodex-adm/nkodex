import { Section, SectionHeader } from "@/components/ui/Section";
import { faq } from "@/lib/content/faq";

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Respostas diretas para quem está avaliando investir em mais controle e organização na operação."
      />

      <div className="mx-auto mt-8 max-w-3xl space-y-3">
        {faq.map((item, index) => (
          <details
            key={item.question}
            className="card-surface group p-5 [&_summary::-webkit-details-marker]:hidden"
            open={index === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="font-display text-base font-semibold sm:text-lg">
                {item.question}
              </span>
              <span
                aria-hidden
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-strong text-muted transition-transform group-open:rotate-45"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1v12M1 7h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
