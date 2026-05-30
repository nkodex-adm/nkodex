export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Quanto tempo leva um projeto?",
    answer:
      "Depende do escopo: temos entregas de MVP em cerca de 1 semana e sistemas completos que evoluem em fases ao longo de meses. No discovery definimos um cronograma realista por entrega.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "O primeiro diagnóstico é gratuito. Depois, apresentamos uma proposta fechada por fase, com escopo, prazo e investimento claros. Sem cobranças surpresa no meio do projeto.",
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer:
      "Trabalhamos principalmente com TypeScript, Next.js, Node.js, React Native, Flutter, PostgreSQL e MongoDB. A escolha da stack é feita em função do problema, não da moda.",
  },
  {
    question: "Vocês prestam manutenção após a entrega?",
    answer:
      "Sim. Oferecemos planos de suporte com SLA, correções, evoluções e acompanhamento da operação após o go-live.",
  },
  {
    question: "Quem é o dono do código?",
    answer:
      "Você. Todo o código-fonte, repositórios e credenciais ficam sob a sua propriedade desde o primeiro dia.",
  },
  {
    question: "Vocês assumem sistemas legados?",
    answer:
      "Sim. Fazemos auditoria técnica, estabilizamos o que está em produção e evoluímos o sistema de forma incremental, sem big bang.",
  },
];
