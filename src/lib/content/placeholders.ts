export type PlaceholderAsset = {
  src: string;
  alt: string;
  /** Nome do arquivo final sugerido ao substituir */
  fileName: string;
  /** O que produzir para trocar este placeholder */
  replaceWith: string;
  /** Dimensão recomendada (px) */
  size: string;
};

export const heroMockup: PlaceholderAsset = {
  src: "/placeholders/hero-dashboard.jpg",
  alt: "Painel de gestão com indicadores e gráficos",
  fileName: "hero-dashboard.jpg",
  replaceWith:
    "Print ou mockup do painel principal da Nkodex — dashboard escuro com KPIs reais da operação.",
  size: "1400×788 (16:9)",
};

export const serviceMockups: PlaceholderAsset[] = [
  {
    src: "/placeholders/service-gestao.jpg",
    alt: "Tela de gestão financeira e indicadores",
    fileName: "service-gestao.jpg",
    replaceWith:
      "Print do módulo de gestão: financeiro, estoque ou indicadores consolidados.",
    size: "800×450",
  },
  {
    src: "/placeholders/service-automacao.jpg",
    alt: "Fluxo de automação de processos",
    fileName: "service-automacao.jpg",
    replaceWith:
      "Print de fluxo automatizado, aprovações ou rotina que substitui trabalho manual.",
    size: "800×450",
  },
  {
    src: "/placeholders/service-app.jpg",
    alt: "Aplicativo mobile para equipe externa",
    fileName: "service-app.jpg",
    replaceWith:
      "Mockup de app ou portal — tela mobile/web para vendedores, técnicos ou clientes.",
    size: "800×450",
  },
  {
    src: "/placeholders/service-integracao.jpg",
    alt: "Integração entre sistemas empresariais",
    fileName: "service-integracao.jpg",
    replaceWith:
      "Diagrama ou print mostrando sistemas conectados (ERP, CRM, e-commerce, etc.).",
    size: "800×450",
  },
];

export const caseMockups: PlaceholderAsset[] = [
  {
    src: "/placeholders/case-financeiro.jpg",
    alt: "Controle financeiro e fluxo de caixa",
    fileName: "case-financeiro.jpg",
    replaceWith: "Print da tela de fluxo de caixa, recebimentos e pagamentos.",
    size: "800×450",
  },
  {
    src: "/placeholders/case-estoque.jpg",
    alt: "Gestão de estoque em tempo real",
    fileName: "case-estoque.jpg",
    replaceWith: "Print do controle de estoque com saldos, entradas e alertas.",
    size: "800×450",
  },
  {
    src: "/placeholders/case-producao.jpg",
    alt: "Acompanhamento de produção",
    fileName: "case-producao.jpg",
    replaceWith: "Print do acompanhamento de ordens e produção.",
    size: "800×450",
  },
  {
    src: "/placeholders/case-atendimento.jpg",
    alt: "Histórico de atendimento ao cliente",
    fileName: "case-atendimento.jpg",
    replaceWith: "Print de CRM ou histórico centralizado de clientes.",
    size: "800×450",
  },
];

/** Lista completa para substituição — consulte ao produzir assets */
export const allPlaceholders: PlaceholderAsset[] = [
  heroMockup,
  ...serviceMockups,
  ...caseMockups,
];
