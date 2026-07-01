import { Section, SectionHeader } from "@/components/ui/Section";
import { clinicasLanding } from "@/lib/content/clinicas/landing";

const { provaSocial } = clinicasLanding;

export function ClinicasProvaSocial() {
  return (
    <Section className="border-b border-border-subtle/80 bg-surface py-10 sm:py-12">
      <SectionHeader
        title={provaSocial.title}
        description={provaSocial.description}
        align="center"
      />

      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
        {provaSocial.logos.map((logo) => (
          <figure
            key={logo.fileName}
            className="card-surface group flex items-center justify-center px-6 py-8"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-full max-w-[200px] object-contain opacity-75 brightness-0 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </Section>
  );
}
