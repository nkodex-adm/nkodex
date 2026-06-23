import type { Metadata } from "next";
import { ClinicasNavbar } from "@/components/layout/ClinicasNavbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ClinicasHeroVideo } from "@/components/sections/clinicas/HeroVideo";
import { ClinicasVariantToggle } from "@/components/sections/clinicas/VariantToggle";
import { ClinicasDores } from "@/components/sections/clinicas/Dores";
import { ClinicasConsequencias } from "@/components/sections/clinicas/Consequencias";
import { ClinicasPosicionamento } from "@/components/sections/clinicas/Posicionamento";
import { ClinicasAutoridade } from "@/components/sections/clinicas/Autoridade";
import { ClinicasDiagnostico } from "@/components/sections/clinicas/Diagnostico";
import { ClinicasCtaFinal } from "@/components/sections/clinicas/CtaFinal";
import { clinicasLanding } from "@/lib/content/clinicas/landing";

export const metadata: Metadata = {
  title: `${clinicasLanding.meta.title} (vídeo)`,
  description: clinicasLanding.heroVideo.description,
  openGraph: {
    title: `${clinicasLanding.meta.title} (vídeo)`,
    description: clinicasLanding.heroVideo.description,
  },
};

export default function ClinicasVideoPage() {
  return (
    <>
      <ClinicasNavbar />
      <main className="flex-1">
        <ClinicasVariantToggle variant="video" />
        <ClinicasHeroVideo />
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
