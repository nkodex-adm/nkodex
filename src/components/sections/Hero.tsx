import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { benefits } from "@/lib/content/benefits";
import { heroMockup } from "@/lib/content/placeholders";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const highlights = [
  "Diagnóstico gratuito e sem compromisso",
  "Resposta em até 24h úteis",
  "Feito para a realidade da sua operação",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid" />
      <div aria-hidden className="absolute inset-0 bg-radial-hero" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-8 pt-20 sm:px-8 sm:pb-10 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Controle e produtividade para empresas
          </div>

          <h1 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Sistemas personalizados para empresas que{" "}
            <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-white bg-clip-text text-transparent">
              cresceram além das planilhas.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg">
            Transforme processos manuais, controles espalhados e retrabalho em um
            sistema feito para a realidade da sua empresa.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contato" size="lg">
              Solicitar diagnóstico gratuito
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#cases" size="lg" variant="secondary">
              Ver aplicações
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted">
            {highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <div className="card-surface overflow-hidden p-1.5">
            <PlaceholderImage
              asset={heroMockup}
              className="aspect-video w-full rounded-2xl"
              imageClassName="rounded-2xl"
            />
          </div>
        </div>

        <BenefitsGrid />
      </div>
    </section>
  );
}

function BenefitsGrid() {
  return (
    <div className="mt-8">
      <p className="text-center text-xs uppercase tracking-widest text-muted">
        O que muda na sua operação
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {benefits.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="card-surface flex flex-col items-center gap-2.5 px-3 py-4 text-center"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600/15 text-brand-300 ring-1 ring-brand-500/30">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-xs font-medium leading-snug text-muted sm:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
