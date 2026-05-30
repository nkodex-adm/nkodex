import { Compass, FileText, Code, Rocket, LifeBuoy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Entendemos o problema, mapeamos o fluxo atual e validamos hipóteses antes de uma única linha de código.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Proposta",
    description:
      "Escopo claro, prazo realista e investimento por fase. Sem surpresas no meio do projeto.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Entregas iterativas em sprints curtas, com ambiente de homologação disponível para testes.",
    icon: Code,
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Deploy em produção, transferência de conhecimento e documentação do que foi construído.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Suporte",
    description:
      "Acompanhamos a operação, evoluímos o produto e ficamos disponíveis para o que vier depois.",
    icon: LifeBuoy,
  },
];
