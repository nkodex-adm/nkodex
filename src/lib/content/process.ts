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
    title: "Entendemos sua operação",
    description:
      "Mapeamos como sua empresa trabalha hoje, onde estão os gargalos e o que mais consome tempo da equipe.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Desenhamos a solução",
    description:
      "Planejamos um sistema alinhado aos seus processos, com escopo, prazo e investimento claros — sem surpresas.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Desenvolvemos",
    description:
      "Transformamos o plano em um sistema funcional, com acompanhamento em cada etapa para você validar o caminho.",
    icon: Code,
  },
  {
    number: "04",
    title: "Implantamos",
    description:
      "Treinamos sua equipe, colocamos tudo em operação e garantimos que a transição seja segura e organizada.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Evoluímos junto com você",
    description:
      "O sistema acompanha o crescimento da empresa: ajustes, melhorias e suporte contínuo conforme a operação muda.",
    icon: LifeBuoy,
  },
];
