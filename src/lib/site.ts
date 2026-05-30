export const siteConfig = {
  name: "Nkodex",
  logo: {
    /** Rode `npm run logos:export` após colocar logo.svg e logo-icon.svg em public/ */
    full: "/logo.png",
    icon: "/logo-icon.png",
  },
  tagline: "Sistemas e apps sob medida para empresas que não cabem em software de prateleira.",
  description:
    "A Nkodex desenvolve sistemas web, aplicativos e integrações personalizadas para empresas B2B. Do MVP em 1 semana ao ecossistema completo — com processo claro e suporte contínuo.",
  url: "https://nkodex.com.br",
  contact: {
    email: "contato@nkodex.com.br",
    whatsapp: {
      number: "5500000000000",
      display: "+55 (00) 00000-0000",
      message: "Olá! Vim pelo site da Nkodex e quero conversar sobre um projeto.",
    },
    responseTime: "Respondemos em até 24h úteis",
  },
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "Cases", href: "#cases" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
