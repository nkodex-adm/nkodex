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
  url: "https://nkodex.com.br",
  contact: {
    email: "suporte@nkodex.com.br",
    whatsapp: {
      number: "5500000000000",
      display: "+55 (00) 00000-0000",
      message: "Olá! Vim pelo site da Nkodex e quero conversar sobre um sistema personalizado.",
    },
    responseTime: "Respondemos em até 24h úteis",
  },
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "Aplicações", href: "#cases" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
