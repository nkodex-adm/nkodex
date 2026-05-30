import { Code2, Smartphone, Plug, Workflow, ShieldCheck, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Sistemas Web & APIs",
    description:
      "Plataformas internas, portais B2B, dashboards e APIs robustas — construídas para escalar com o seu negócio.",
    bullets: ["Painéis administrativos", "APIs REST/GraphQL", "Multi-tenant e SSO"],
    icon: Code2,
  },
  {
    title: "Aplicativos Mobile",
    description:
      "Apps iOS e Android performáticos, com a mesma base de código quando faz sentido para o seu produto.",
    bullets: ["React Native & Flutter", "Publicação nas lojas", "Offline-first quando preciso"],
    icon: Smartphone,
  },
  {
    title: "Integrações & ERPs",
    description:
      "Conectamos ERPs, CRMs, gateways de pagamento e sistemas legados para eliminar trabalho manual.",
    bullets: ["ERP, CRM, e-commerce", "Webhooks e filas", "Migração de dados segura"],
    icon: Plug,
  },
  {
    title: "Automação de Processos",
    description:
      "Mapeamos o seu fluxo e automatizamos tarefas repetitivas, com regras de negócio claras e auditáveis.",
    bullets: ["Workflows internos", "Documentos e e-mails", "Aprovações e SLAs"],
    icon: Workflow,
  },
  {
    title: "Manutenção & Evolução",
    description:
      "Assumimos sistemas existentes, estabilizamos e evoluímos o produto com previsibilidade.",
    bullets: ["Squads dedicados", "SLA de atendimento", "Refatoração progressiva"],
    icon: ShieldCheck,
  },
  {
    title: "Consultoria Técnica",
    description:
      "Discovery de produto, definição de arquitetura e revisão de código para decisões mais seguras.",
    bullets: ["Discovery & roadmap", "Auditoria técnica", "Acompanhamento de squads"],
    icon: LineChart,
  },
];
