import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";
import { ClinicasLogo } from "@/components/ui/ClinicasLogo";
import { clinicasLanding } from "@/lib/content/clinicas/landing";

export function ClinicasFooter() {
  const year = new Date().getFullYear();
  const { email, whatsapp } = siteConfig.contact;

  return (
    <footer className="border-t border-border-subtle/70 bg-surface/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <Link href="/" className="inline-flex" aria-label={siteConfig.name}>
            <ClinicasLogo variant="full" className="h-7 w-auto" />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted">{siteConfig.tagline}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Navegação
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {clinicasLanding.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Contato
          </p>
          <ul className="mt-4 space-y-3 text-sm">
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
      <div className="border-t border-border-subtle/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-6 py-5 text-xs text-muted sm:flex-row sm:items-center sm:px-8">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>{clinicasLanding.footerTagline}</p>
        </div>
      </div>
    </footer>
  );
}
