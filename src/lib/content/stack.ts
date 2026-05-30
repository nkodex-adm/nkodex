export type TechItem = {
  name: string;
  category: "frontend" | "backend" | "mobile" | "data" | "cloud";
};

export const stack: TechItem[] = [
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "React Native", category: "mobile" },
  { name: "Flutter", category: "mobile" },
  { name: "Node.js", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "PostgreSQL", category: "data" },
  { name: "MongoDB", category: "data" },
  { name: "Redis", category: "data" },
  { name: "AWS", category: "cloud" },
  { name: "Vercel", category: "cloud" },
];
