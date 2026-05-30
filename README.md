# Nkodex — Site institucional B2B

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

Site institucional para empresa de **desenvolvimento de sistemas, aplicativos e soluções personalizadas**, com foco em clientes **B2B**. O projeto usa **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** e visual **Enterprise Dark** (azul + preto).

> **Marca:** Nkodex (configurável em um único arquivo: `src/lib/site.ts`).  
> **Documentação de continuidade:** [`PROJETO_NKODEX_CONTEXTO.md`](./PROJETO_NKODEX_CONTEXTO.md)  
> **Export PDF:** [`PROJETO_NKODEX_CONTEXTO.pdf`](./PROJETO_NKODEX_CONTEXTO.pdf)

---

## Sumário

- [Visão geral](#visão-geral)
- [Decisões estratégicas](#decisões-estratégicas)
- [Decisões técnicas](#decisões-técnicas)
- [Arquitetura](#arquitetura)
- [Design system](#design-system)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Arquivos do projeto](#arquivos-do-projeto)
- [Como rodar](#como-rodar)
- [Personalização](#personalização)
- [Deploy](#deploy)
- [Roadmap](#roadmap)
- [Licença](#licença)

---

## Visão geral

### Problema que o site resolve

Empresas B2B que precisam de software sob medida costumam avaliar fornecedores pelo site. Este projeto entrega uma landing page que:

1. Explica **serviços** e **processo** de forma clara.
2. Mostra **prova social** (cases com métricas).
3. Responde **objeções** (FAQ).
4. Converte visitantes em **leads** (formulário + WhatsApp).

### Escopo atual (MVP)

- Uma página (`/`) com 7 seções + navbar + footer + FAB WhatsApp.
- Conteúdo editável via arquivos TypeScript (sem CMS).
- Build estática, pronta para Vercel.

### Fora do escopo (por enquanto)

- Blog, páginas internas, painel admin, autenticação, multi-idioma.

---

## Decisões estratégicas

| Tema | Decisão | Motivo |
|------|---------|--------|
| **Público** | B2B apenas | Alinhado ao posicionamento de sistemas custom para empresas |
| **Proposta de valor** | Software sob medida, não SaaS de prateleira | Diferenciação clara no hero |
| **Prazo comercial** | MVP ~1 semana até projetos em fases | Reflete operação real do negócio |
| **Conversão primária** | Diagnóstico gratuito → WhatsApp | Baixa fricção, sem backend no MVP |
| **Conversão secundária** | E-mail no footer | Canal alternativo |
| **Cases** | 4 exemplos fictícios no lançamento | Permitir go-live antes dos cases reais; tag "Exemplo" transparente |
| **Tom de voz** | Profissional, direto, sem jargão excessivo | Credibilidade com decisores não-técnicos |
| **Nome da marca** | Nkodex | Centralizado em `src/lib/site.ts` |
| **Conceito visual** | Enterprise Dark (Conceito A) | Premium B2B; azul + preto pedidos pelo cliente |
| **Referências visuais** | Vercel, Linear, Stripe (dark) | Padrão reconhecido de produto/SaaS B2B |
| **Deploy** | Vercel | Integração nativa com Next.js, custo baixo |
| **Propriedade do código** | Comunicada no FAQ | Reduz objeção comum em contratos B2B |

---

## Decisões técnicas

| Tema | Decisão | Motivo |
|------|---------|--------|
| **Framework** | Next.js 16 App Router | Credibilidade técnica, SEO, SSG, ecossistema |
| **React** | 19.x | Versão instalada pelo `create-next-app@latest` |
| **Linguagem** | TypeScript strict | Manutenção e refactor seguros |
| **Estilos** | Tailwind v4 + CSS variables | Utilitários + tema centralizado em `globals.css` |
| **Ícones** | lucide-react | Leve, consistente, tree-shakeable |
| **Fontes** | Inter + Plus Jakarta Sans (`next/font`) | Performance (sem layout shift), Google Fonts |
| **Arquitetura de conteúdo** | Arrays em `lib/content/*.ts` | Simples no MVP; migrável para CMS depois |
| **Config da marca** | `lib/site.ts` único | Uma fonte de verdade para nome, contatos, nav |
| **Client Components** | Apenas `ContactForm` | Mínimo de JS no cliente |
| **Formulário** | `window.open` → WhatsApp | Zero backend; mensagem estruturada |
| **Roteamento** | Single page + âncoras | Entrega rápida do Conceito A |
| **Renderização** | SSG (`○` na build) | Performance e custo de hospedagem |
| **SEO** | Metadata API em `layout.tsx` | OG + Twitter + keywords em pt-BR |
| **Acessibilidade** | Focus rings, labels, `aria-label` no FAB | Base para auditoria futura |
| **Lint** | ESLint + `eslint-config-next` | Padrão oficial Next |
| **Sem shadcn/ui** | Componentes próprios mínimos | Menos dependências no MVP |

### Versões instaladas (referência)

```json
{
  "next": "16.2.6",
  "react": "19.2.4",
  "tailwindcss": "^4",
  "lucide-react": "^1.16.0",
  "typescript": "^5"
}
```

---

## Arquitetura

```
┌─────────────────────────────────────────────────────────┐
│  src/app/page.tsx          (composição da home)         │
└───────────────────────────┬─────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ layout/       │   │ sections/     │   │ ui/           │
│ Navbar        │   │ Hero, etc.    │   │ Button, etc.  │
│ Footer        │   │               │   │               │
└───────────────┘   └───────┬───────┘   └───────────────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ lib/content/  │  ← dados (serviços, cases…)
                    │ lib/site.ts   │  ← config global
                    │ lib/utils.ts  │  ← helpers
                    └───────────────┘
```

### Fluxo do formulário de contato

1. Usuário preenche nome, empresa, e-mail, tipo de projeto, mensagem.
2. `ContactForm` monta texto e abre `wa.me` em nova aba.
3. UI exibe estado de sucesso ("Recebido. Já já voltamos.").

---

## Design system

### Conceito: Enterprise Dark

- Fundo `#06080f`, superfícies em tons de slate escuro.
- Azul `#2563eb` para ações primárias.
- Cards com `.card-surface` (borda + hover glow).
- Hero com `.bg-grid` e `.bg-radial-hero`.

### Componentes UI

| Componente | Variantes / props |
|------------|-------------------|
| `Button` | `primary` \| `secondary` \| `ghost`; `md` \| `lg`; `href` opcional |
| `Section` | `id`, padding vertical padrão |
| `SectionHeader` | `eyebrow`, `title`, `description`, `align` |

Detalhes completos de cores e tipografia: [`PROJETO_NKODEX_CONTEXTO.md`](./PROJETO_NKODEX_CONTEXTO.md#4-cores).

---

## Estrutura de pastas

```
nkodex/
├── PROJETO_NKODEX_CONTEXTO.md
├── PROJETO_NKODEX_CONTEXTO.pdf
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── public/
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── layout/
    │   ├── sections/
    │   └── ui/
    └── lib/
        ├── site.ts
        ├── utils.ts
        └── content/
```

---

## Arquivos do projeto

### Criados/reescritos para o site (22 arquivos em `src/`)

| Caminho | Descrição |
|---------|-----------|
| `src/app/globals.css` | Tema e utilitários CSS |
| `src/app/layout.tsx` | Layout, fontes, SEO |
| `src/app/page.tsx` | Home |
| `src/lib/site.ts` | Config da marca |
| `src/lib/utils.ts` | Helpers |
| `src/lib/content/services.ts` | Serviços |
| `src/lib/content/process.ts` | Processo |
| `src/lib/content/cases.ts` | Cases |
| `src/lib/content/faq.ts` | FAQ |
| `src/lib/content/stack.ts` | Stack do hero |
| `src/components/layout/Navbar.tsx` | Navbar |
| `src/components/layout/Footer.tsx` | Footer |
| `src/components/sections/Hero.tsx` | Hero |
| `src/components/sections/Services.tsx` | Serviços |
| `src/components/sections/Process.tsx` | Processo |
| `src/components/sections/Cases.tsx` | Cases |
| `src/components/sections/Faq.tsx` | FAQ |
| `src/components/sections/Cta.tsx` | CTA contato |
| `src/components/sections/ContactForm.tsx` | Formulário |
| `src/components/ui/Button.tsx` | Botão |
| `src/components/ui/Section.tsx` | Seção |
| `src/components/ui/WhatsAppButton.tsx` | FAB WhatsApp |

### Gerados pelo scaffold Next.js

`package.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `next-env.d.ts`, `.gitignore`, `AGENTS.md`, `CLAUDE.md`, `src/app/favicon.ico`, `public/*.svg`.

---

## Como rodar

### Pré-requisitos

- Node.js 20+ (testado com v22)
- npm 10+

### Instalação e desenvolvimento

```bash
git clone <seu-repositorio>
cd C:\Users\mari_\Projects\nkodex
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Produção local

```bash
npm run build
npm run start
```

### Qualidade

```bash
npm run lint
```

### Regenerar PDF de contexto

```bash
npm run docs:pdf
```

Gera `PROJETO_NKODEX_CONTEXTO.pdf` a partir do markdown (requer Microsoft Edge instalado).

---

## Personalização

### 1. Marca e contatos (obrigatório antes do go-live)

Edite `src/lib/site.ts`:

```ts
export const siteConfig = {
  name: "Nkodex",
  url: "https://seu-dominio.com.br",
  contact: {
    email: "contato@empresa.com.br",
    whatsapp: {
      number: "5511999999999", // DDI + DDD + número, sem símbolos
      display: "+55 (11) 99999-9999",
      message: "Olá! Vim pelo site...",
    },
  },
};
```

### 2. Cases reais

Em `src/lib/content/cases.ts`, substitua os objetos e **remova** `placeholder: true` para ocultar a tag "Exemplo".

### 3. Cores

Variáveis em `src/app/globals.css` (`:root` e `@theme inline`).

### 4. Nova seção na home

1. Crie componente em `src/components/sections/`.
2. Importe em `src/app/page.tsx`.
3. Adicione link em `siteConfig.nav` se precisar de âncora.

---

## Deploy

### Vercel (recomendado)

1. Push para GitHub/GitLab/Bitbucket.
2. Importe em [vercel.com/new](https://vercel.com/new).
3. Framework detectado: **Next.js** (sem config extra).
4. Configure domínio customizado nas settings do projeto.

Variáveis de ambiente: **nenhuma obrigatória** no estado atual.

### Build

A rota `/` é gerada como conteúdo estático (`○ Static`).

---

## Roadmap

| Prioridade | Item | Status |
|------------|------|--------|
| Alta | Contatos e WhatsApp reais | Pendente |
| Alta | Cases reais no portfólio | Pendente |
| Alta | Nome final da empresa | Pendente |
| Alta | Deploy Vercel + domínio | Pendente |
| Média | E-mail via API (Resend) | Pendente |
| Média | Menu mobile (hamburger) | Pendente |
| Média | Página `/sobre` | Pendente |
| Média | `sitemap` + `robots` | Pendente |
| Baixa | Blog | Pendente |
| Baixa | Analytics | Pendente |
| Baixa | OG image custom | Pendente |

Detalhamento: [`PROJETO_NKODEX_CONTEXTO.md` § Pendências](./PROJETO_NKODEX_CONTEXTO.md#12-pendências).

---

## Licença

Projeto privado (`"private": true` no `package.json`). Definir licença quando o repositório for publicado.

---

## Contato do projeto

Configurado em código — atualizar antes do go-live:

- E-mail: `contato@nkodex.com.br` (placeholder)
- WhatsApp: placeholder em `site.ts`

---

*README mantido junto com `PROJETO_NKODEX_CONTEXTO.md`. Atualizar ambos em entregas relevantes.*
