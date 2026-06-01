import { LayoutDashboard, Workflow, Smartphone, Plug } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Sistemas de Gestão",
    description:
      "Controle financeiro, estoque, produção, vendas e indicadores em um único lugar — sem depender de planilhas espalhadas.",
    bullets: [
      "Fluxo de caixa e financeiro",
      "Estoque e produção",
      "Indicadores do negócio",
    ],
    icon: LayoutDashboard,
  },
  {
    title: "Automação de Processos",
    description:
      "Reduza tarefas repetitivas, elimine controles paralelos e libere sua equipe para o que realmente gera valor.",
    bullets: [
      "Aprovações e fluxos internos",
      "Alertas e rotinas automáticas",
      "Menos erro manual",
    ],
    icon: Workflow,
  },
  {
    title: "Aplicativos e Portais",
    description:
      "Soluções para clientes, vendedores, técnicos e equipes externas — com informação na palma da mão, onde o trabalho acontece.",
    bullets: [
      "Equipes de campo",
      "Portais para clientes",
      "Acesso mobile e web",
    ],
    icon: Smartphone,
  },
  {
    title: "Integração entre Sistemas",
    description:
      "Conecte ferramentas que hoje trabalham separadas e tenha uma operação mais coerente, sem redigitar dados.",
    bullets: [
      "ERP, CRM e e-commerce",
      "Fim do retrabalho entre áreas",
      "Dados consistentes",
    ],
    icon: Plug,
  },
];
