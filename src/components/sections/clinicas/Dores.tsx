import {
  AlertCircle,
  CalendarX2,
  ClipboardList,
  MessageSquareWarning,
  UserX,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { clinicasLanding } from "@/lib/content/clinicas/landing";

const icons: LucideIcon[] = [
  CalendarX2,
  ClipboardList,
  Wallet,
  MessageSquareWarning,
  UserX,
  AlertCircle,
];

const { dores } = clinicasLanding;

export function ClinicasDores() {
  return (
    <Section id="dores">
      <SectionHeader
        eyebrow={dores.eyebrow}
        title={dores.title}
        description={dores.description}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dores.items.map((item, index) => {
          const Icon = icons[index] ?? AlertCircle;
          return (
            <article key={item.title} className="card-surface p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/15 text-brand-300 ring-1 ring-brand-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
