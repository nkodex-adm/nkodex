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
    client: "Controle Financeiro e Operacional",
    industry: "Financeiro",
    challenge:
      "Recebimentos, pagamentos e fluxo de caixa espalhados em planilhas e anotações que não conversam entre si.",
    result:
      "Centralização de recebimentos, pagamentos, fluxo de caixa e indicadores em um único painel de gestão.",
    metric: "Visão clara do caixa e do negócio",
    stack: ["Fluxo de caixa", "Contas a pagar", "Indicadores"],
  },
  {
    client: "Gestão de Estoque",
    industry: "Operações",
    challenge:
      "Falta de visibilidade do que entra, sai e onde está cada item — gerando perdas, rupturas e compras no escuro.",
    result:
      "Controle de entradas, saídas e saldos com alertas e histórico para decisões mais seguras no dia a dia.",
    metric: "Menos perdas e mais previsibilidade",
    stack: ["Estoque", "Alertas", "Reposição"],
  },
  {
    client: "Produção e Operações",
    industry: "Indústria",
    challenge:
      "Ordens, apontamentos e acompanhamento do chão de fábrica feitos manualmente, sem visão do andamento real.",
    result:
      "Acompanhamento completo do processo produtivo, do pedido à entrega, com status visível para toda a equipe.",
    metric: "Operação organizada ponta a ponta",
    stack: ["Produção", "Ordens", "Acompanhamento"],
  },
  {
    client: "Atendimento e Relacionamento",
    industry: "Comercial",
    challenge:
      "Histórico de clientes fragmentado entre WhatsApp, e-mail e anotações — lentidão e respostas inconsistentes.",
    result:
      "Histórico centralizado, mais agilidade para a equipe e atendimento mais profissional em cada contato.",
    metric: "Equipe alinhada e cliente bem atendido",
    stack: ["CRM", "Histórico", "Atendimento"],
  },
];
