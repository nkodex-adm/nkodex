const DEFAULT_SITE_URL = "https://www.nkodex.com.br";

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, "");
}

/** URL pública do site — definir NEXT_PUBLIC_SITE_URL em produção. */
export function getSiteUrl(): string {
  return normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
  );
}

export const siteConfig = {
  name: "Nkodex",
  logo: {
    /** PNG em public/logo.png — original em brand/originals/logo-original.png */
    full: "/logo.png",
    icon: "/logo-icon.png",
  },
  tagline:
    "Sistemas personalizados para empresas que precisam de mais controle, produtividade e organização.",
  description:
    "A Nkodex desenvolve sistemas sob medida para centralizar informações, automatizar processos e dar mais controle à operação da sua empresa — do diagnóstico à implantação e evolução contínua.",
  url: getSiteUrl(),
  contact: {
    email: "suporte@nkodex.com.br",
    whatsapp: {
      number: "5515996557064",
      display: "(15) 99655-7064",
      message: "Olá! Vim pelo site da Nkodex e quero conversar sobre um sistema personalizado.",
    },
  },
  nav: [{ label: "FAQ", href: "#faq" }],
} as const;

export type SiteConfig = typeof siteConfig;
