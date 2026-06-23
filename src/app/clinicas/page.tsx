import type { Metadata } from "next";
import { ClinicasNavbar } from "@/components/layout/ClinicasNavbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ClinicasHero } from "@/components/sections/clinicas/Hero";
import { ClinicasDores } from "@/components/sections/clinicas/Dores";
import { ClinicasConsequencias } from "@/components/sections/clinicas/Consequencias";
import { ClinicasPosicionamento } from "@/components/sections/clinicas/Posicionamento";
import { ClinicasAutoridade } from "@/components/sections/clinicas/Autoridade";
import { ClinicasDiagnostico } from "@/components/sections/clinicas/Diagnostico";
import { ClinicasCtaFinal } from "@/components/sections/clinicas/CtaFinal";
import { clinicasLanding } from "@/lib/content/clinicas/landing";

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
    <>
      <ClinicasNavbar />
      <main className="flex-1">
        <ClinicasHero />
        <ClinicasDores />
        <ClinicasConsequencias />
        <ClinicasPosicionamento />
        <ClinicasAutoridade />
        <ClinicasDiagnostico />
        <ClinicasCtaFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
