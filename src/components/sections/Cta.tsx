import { Clock, Mail, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export function Cta() {
  const { email, whatsapp, responseTime } = siteConfig.contact;
  return (
    <Section id="contato">
      <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface/60 p-6 sm:p-10 lg:p-14">
        <div aria-hidden className="absolute inset-0 bg-radial-hero opacity-70" />
        <div className="relative grid gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Vamos conversar
            </div>
            <h2 className="font-display mt-4 text-balance text-3xl font-semibold sm:text-4xl">
              Sua empresa está perdendo tempo com controles manuais?
            </h2>
            <p className="mt-4 max-w-md text-balance text-muted">
              Vamos conversar sobre como um sistema personalizado pode simplificar
              sua operação. Diagnóstico gratuito, sem compromisso.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600/15 text-brand-300 ring-1 ring-brand-500/30">
                  <Clock className="h-4 w-4" />
                </span>
                {responseTime}
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600/15 text-brand-300 ring-1 ring-brand-500/30">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href={`mailto:${email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600/15 text-brand-300 ring-1 ring-brand-500/30">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <a
                  href={whatsappLink(whatsapp.number, whatsapp.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {whatsapp.display}
                </a>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
