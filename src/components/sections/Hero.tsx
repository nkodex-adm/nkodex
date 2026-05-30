import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { stack } from "@/lib/content/stack";

const highlights = [
  "Entregas desde 1 semana",
  "Foco 100% B2B",
  "Suporte contínuo pós go-live",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid" />
      <div aria-hidden className="absolute inset-0 bg-radial-hero" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-20 sm:px-8 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Software sob medida para empresas
          </div>

          <h1 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Sistemas e apps sob medida{" "}
            <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-white bg-clip-text text-transparent">
              para empresas que não cabem
            </span>{" "}
            em software de prateleira.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg">
            Do MVP em 1 semana ao ecossistema completo — projetamos, desenvolvemos
            e operamos software B2B com processo claro e código que você leva pra casa.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contato" size="lg">
              Solicitar diagnóstico
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#cases" size="lg" variant="secondary">
              Ver cases
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted">
            {highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <StackStrip />
      </div>
    </section>
  );
}

function StackStrip() {
  const visible = stack.slice(0, 8);
  return (
    <div className="mt-16">
      <p className="text-center text-xs uppercase tracking-widest text-muted">
        Stack que utilizamos no dia a dia
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {visible.map((tech) => (
          <span
            key={tech.name}
            className="text-sm font-medium text-muted/80 transition-colors hover:text-foreground"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
