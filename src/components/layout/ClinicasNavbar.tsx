import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { ClinicasLogo } from "@/components/ui/ClinicasLogo";
import { clinicasLanding } from "@/lib/content/clinicas/landing";

export function ClinicasNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label={siteConfig.name}>
          <ClinicasLogo variant="full" priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          {clinicasLanding.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#contato" size="md" className="hidden sm:inline-flex">
            Diagnóstico Gratuito
          </Button>
          <Button href="#contato" size="md" className="sm:hidden">
            Contato
          </Button>
        </div>
      </div>
    </header>
  );
}
