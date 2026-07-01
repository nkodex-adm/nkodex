import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { clinicasLanding } from "@/lib/content/clinicas/landing";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

const { cta } = clinicasLanding;

export function ClinicasCtaFinal() {
  const { email, whatsapp } = siteConfig.contact;

  return (
    <Section id="contato">
      <div className="relative overflow-hidden rounded-3xl clinicas-highlight-card p-6 sm:p-10 lg:p-14">
        <div aria-hidden className="absolute inset-0 bg-radial-hero opacity-70" />
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            {cta.eyebrow}
          </div>

          <h2 className="font-display mt-4 text-balance text-3xl font-semibold sm:text-4xl">
            {cta.title}
          </h2>
          <p className="mt-4 text-balance text-muted">{cta.description}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contato" size="lg">
              {cta.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted">{cta.note}</p>

          <ul className="mt-8 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-8">
            <li>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                {email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(whatsapp.number, whatsapp.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                {whatsapp.display}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
