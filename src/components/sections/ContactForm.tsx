"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

const projectTypes = [
  "Sistema web",
  "Aplicativo mobile",
  "Integração / API",
  "Automação de processo",
  "Manutenção / evolução",
  "Outro",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const company = String(formData.get("company") ?? "");
    const type = String(formData.get("projectType") ?? "");
    const message = String(formData.get("message") ?? "");

    const text = [
      `Olá! Vim pelo site da ${siteConfig.name}.`,
      name && `Nome: ${name}`,
      company && `Empresa: ${company}`,
      type && `Tipo de projeto: ${type}`,
      message && `Mensagem: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      whatsappLink(siteConfig.contact.whatsapp.number, text),
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-surface flex h-full flex-col items-center justify-center p-8 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-600/15 text-brand-300 ring-1 ring-brand-500/30">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="font-display mt-4 text-xl font-semibold">
          Recebido. Já já voltamos.
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Se a janela do WhatsApp não abrir automaticamente, fale com a gente em{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-brand-300 underline-offset-2 hover:underline"
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-surface flex flex-col gap-4 p-6 sm:p-7"
    >
      <Field label="Nome" name="name" placeholder="Como te chamamos?" required />
      <Field
        label="Empresa"
        name="company"
        placeholder="Nome da sua empresa"
        required
      />
      <Field
        label="E-mail corporativo"
        name="email"
        type="email"
        placeholder="voce@empresa.com"
        required
      />

      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-wider text-muted">
          Tipo de projeto
        </label>
        <select
          name="projectType"
          required
          defaultValue=""
          className="h-11 rounded-xl border border-border-strong bg-white/[0.03] px-3 text-sm text-foreground outline-none transition-colors focus:border-brand-400/60 focus:bg-white/[0.05]"
        >
          <option value="" disabled>
            Selecione…
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-surface text-foreground">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-wider text-muted">
          Conte um pouco do desafio
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Qual problema você quer resolver?"
          required
          className="min-h-[110px] rounded-xl border border-border-strong bg-white/[0.03] px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand-400/60 focus:bg-white/[0.05]"
        />
      </div>

      <Button size="lg" className="mt-2">
        Enviar diagnóstico
        <ArrowRight className="h-4 w-4" />
      </Button>
      <p className="text-center text-xs text-muted">
        Ao enviar, você é redirecionado para o WhatsApp com sua mensagem pronta.
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

function Field({ label, name, placeholder, type = "text", required }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium uppercase tracking-wider text-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="h-11 rounded-xl border border-border-strong bg-white/[0.03] px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-brand-400/60 focus:bg-white/[0.05]"
      />
    </div>
  );
}
