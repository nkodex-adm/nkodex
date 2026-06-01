import {
  BarChart3,
  Layers,
  RefreshCw,
  Settings2,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Benefit = {
  label: string;
  icon: LucideIcon;
};

export const benefits: Benefit[] = [
  { label: "Mais controle das operações", icon: BarChart3 },
  { label: "Menos retrabalho", icon: RefreshCw },
  { label: "Informações centralizadas", icon: Layers },
  { label: "Processos automatizados", icon: Settings2 },
  { label: "Indicadores em tempo real", icon: TrendingUp },
  { label: "Equipe mais produtiva", icon: Users },
];
