import type { Metadata } from "next";
import { ClinicasNavbar } from "@/components/layout/ClinicasNavbar";
import { ClinicasFooter } from "@/components/layout/ClinicasFooter";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ClinicasHero } from "@/components/sections/clinicas/Hero";
import { ClinicasProvaSocial } from "@/components/sections/clinicas/ProvaSocial";
import { ClinicasDores } from "@/components/sections/clinicas/Dores";
import { ClinicasConsequencias } from "@/components/sections/clinicas/Consequencias";
import { ClinicasOperacaoAreas } from "@/components/sections/clinicas/OperacaoAreas";
import { ClinicasCarouselRotina } from "@/components/sections/clinicas/CarouselRotina";
import { ClinicasPosicionamento } from "@/components/sections/clinicas/Posicionamento";
import { ClinicasAutoridade } from "@/components/sections/clinicas/Autoridade";
import { ClinicasDiagnostico } from "@/components/sections/clinicas/Diagnostico";
import { ClinicasCtaFinal } from "@/components/sections/clinicas/CtaFinal";
import { clinicasLanding } from "@/lib/content/clinicas/landing";
import "./clinicas-theme.css";

export const metadata: Metadata = {
  title: clinicasLanding.meta.title,
  description: clinicasLanding.meta.description,
  openGraph: {
    title: clinicasLanding.meta.title,
    description: clinicasLanding.meta.description,
  },
};

export default function ClinicasPage() {
  return (
    <div className="clinicas-theme flex min-h-full flex-col">
      <ClinicasNavbar />
      <main className="flex-1">
        <ClinicasHero />
        <ClinicasProvaSocial />
        <ClinicasDores />
        <ClinicasConsequencias />
        <ClinicasOperacaoAreas />
        <ClinicasCarouselRotina />
        <ClinicasPosicionamento />
        <ClinicasAutoridade />
        <ClinicasDiagnostico />
        <ClinicasCtaFinal />
      </main>
      <ClinicasFooter />
      <WhatsAppButton />
    </div>
  );
}
