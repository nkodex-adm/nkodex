export type Case = {
  client: string;
  industry: string;
  challenge: string;
  result: string;
  metric: string;
  stack: string[];
  placeholder?: boolean;
};

export const cases: Case[] = [
  {
    client: "Portal Logística Norte",
    industry: "Transporte & Logística",
    challenge:
      "Operação atendia clientes via planilhas e ligações para checar status de entregas.",
    result:
      "Portal com rastreamento em tempo real, integrado a três transportadoras.",
    metric: "−35% em ligações de suporte",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    placeholder: true,
  },
  {
    client: "Clínica Integrada SA",
    industry: "Saúde",
    challenge:
      "Agendamento manual fragmentado entre WhatsApp, telefone e planilha por profissional.",
    result:
      "Plataforma unificada de agendamento e prontuário com confirmações automáticas.",
    metric: "+28% de ocupação na agenda",
    stack: ["React", "NestJS", "PostgreSQL"],
    placeholder: true,
  },
  {
    client: "Indústria Metal Prime",
    industry: "Indústria",
    challenge:
      "Apontamentos de produção no papel, sem visibilidade do chão de fábrica em tempo real.",
    result:
      "App para apontamento e dashboards com relatórios diários automatizados.",
    metric: "Relatórios diários em minutos",
    stack: ["React Native", "Node.js", "MongoDB"],
    placeholder: true,
  },
  {
    client: "Rede Varejo Hub",
    industry: "Varejo",
    challenge:
      "Estoque desencontrado entre 14 lojas e o e-commerce gerava cancelamentos.",
    result:
      "Integração PDV + ERP + e-commerce com sincronização contínua de estoque.",
    metric: "Sincronização em menos de 2s",
    stack: ["TypeScript", "Redis", "RabbitMQ"],
    placeholder: true,
  },
];
