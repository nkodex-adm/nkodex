# Projeto Nkodex — Contexto para continuidade

> **Última atualização:** 29 de maio de 2026  
> **Pasta do projeto (disco):** `C:\Users\mari_\Projects\nkodex`  
> **Marca definitiva:** Nkodex  
> **Nome do pacote npm:** `nkodex`

Este documento consolida decisões, estrutura e pendências para que qualquer pessoa (ou agente de IA) possa retomar o projeto sem perder contexto.

---

## 1. Objetivo do site

Construir um **site institucional B2B** para divulgar uma empresa de **desenvolvimento de sistemas, aplicativos e soluções personalizadas**.

### Objetivos de negócio

- Comunicar **o que a empresa faz** em linguagem clara (não excessivamente técnica).
- Posicionar o público como **empresas B2B** que precisam de software sob medida.
- Gerar **leads qualificados** via formulário de contato e WhatsApp.
- Transmitir **credibilidade técnica** (stack moderna, processo estruturado, cases com métricas).
- Cobrir o espectro de prazo: **MVP em ~1 semana** até **projetos completos em fases**.

### Objetivos técnicos

- Site **rápido**, **estático** na build, fácil de hospedar na Vercel.
- Código **modular**: conteúdo separado de apresentação.
- Tema **dark premium** (azul + preto), alinhado a referências B2B/SaaS (Vercel, Linear, Stripe dark).
- Base pronta para evoluir com páginas internas, blog e integração real de e-mail.

---

## 2. Estrutura de páginas

### Implementado hoje

| Rota | Tipo | Descrição |
|------|------|-----------|
| `/` | Single Page (landing) | Home completa com âncoras internas |

A home funciona como **one-page** com navegação por âncoras:

| Âncora | Seção |
|--------|--------|
| `#servicos` | Serviços |
| `#processo` | Como trabalhamos |
| `#cases` | Cases / portfólio |
| `#faq` | Perguntas frequentes |
| `#contato` | Formulário + CTA |

### Planejado (não implementado)

| Rota | Prioridade | Descrição |
|------|------------|-----------|
| `/sobre` | Média | História, equipe, valores |
| `/cases` ou `/cases/[slug]` | Média | Listagem e detalhe de cases reais |
| `/blog` | Baixa | Conteúdo SEO (artigos técnicos/comerciais) |
| `sitemap.xml` / `robots.txt` | Média | Quando domínio final estiver definido |

---

## 3. Conceito visual escolhido

**Conceito A — "Enterprise Dark"**

Características:

- Fundo escuro predominante (preto azulado).
- Azul como cor de marca e destaque (CTAs, ícones, gradientes).
- Tipografia forte nos títulos, corpo legível e espaçamento generoso.
- Cards com borda sutil e **glow azul no hover**.
- Hero com **grid de fundo** + **gradientes radiais** discretos.
- Estética B2B/SaaS: profissional, técnica, sem parecer agência genérica colorida.

Conceitos B (split hero com mockup) e C (minimal tipográfico) foram discutidos mas **não implementados**.

---

## 4. Cores

Definidas em `src/app/globals.css` via CSS variables.

### Fundos e superfícies

| Token | Hex / valor | Uso |
|-------|-------------|-----|
| `--background` | `#06080f` | Fundo principal da página |
| `--surface` | `#0b101a` | Blocos, footer, cards escuros |
| `--surface-2` | `#111827` | Variação de superfície |

### Texto

| Token | Valor | Uso |
|-------|-------|-----|
| `--foreground` | `#e6edf7` | Texto principal |
| `--muted` | `#94a3b8` | Subtítulos, descrições |

### Marca (azul)

| Token | Hex | Uso |
|-------|-----|-----|
| `--brand-300` | `#93c5fd` | Eyebrows, acentos leves |
| `--brand-400` | `#60a5fa` | Ícones, highlights |
| `--brand-500` | `#3b82f6` | Gradientes |
| `--brand-600` | `#2563eb` | Botões primários, logo |
| `--brand-700` | `#1d4ed8` | Hover escuro |

### Bordas

| Token | Valor |
|-------|-------|
| `--border` | `rgba(148, 163, 184, 0.12)` |
| `--border-strong` | `rgba(148, 163, 184, 0.22)` |

### Outros

- **WhatsApp flutuante:** `#25D366` (verde oficial).
- **Selection:** fundo `brand-600`, texto branco.

---

## 5. Tipografia

| Papel | Fonte | Variável CSS | Uso |
|-------|-------|--------------|-----|
| Corpo | **Inter** | `--font-inter` | Parágrafos, labels, UI |
| Títulos | **Plus Jakarta Sans** | `--font-jakarta` | Headlines, `font-display` |

Carregadas via `next/font/google` em `src/app/layout.tsx`.

- Títulos: `letter-spacing: -0.02em` (classe `.font-display`).
- `text-wrap: balance` em headlines (classe `.text-balance`).

---

## 6. Seções da home (ordem na página)

1. **Navbar** — Logo + nome Nkodex, links âncora, CTA "Falar com especialista".
2. **Hero** — Headline, subtítulo, 2 CTAs, 3 bullets de credibilidade, faixa de tecnologias.
3. **Serviços** (`#servicos`) — Grid 3×2 com 6 cards.
4. **Processo** (`#processo`) — 5 etapas em timeline horizontal (responsivo empilha).
5. **Cases** (`#cases`) — Grid 2×2, 4 cases fictícios com tag "Exemplo".
6. **FAQ** (`#faq`) — Accordion nativo (`<details>`), 6 perguntas.
7. **CTA / Contato** (`#contato`) — Bloco grande + formulário.
8. **Footer** — Marca, navegação, contato, copyright.
9. **WhatsApp flutuante** — Fixo canto inferior direito.

---

## 7. Componentes criados

### Layout (`src/components/layout/`)

| Componente | Arquivo | Responsabilidade |
|------------|---------|------------------|
| Navbar | `Navbar.tsx` | Header sticky, navegação, CTA |
| Footer | `Footer.tsx` | Rodapé com links e contato |

### Seções (`src/components/sections/`)

| Componente | Arquivo | Responsabilidade |
|------------|---------|------------------|
| Hero | `Hero.tsx` | Hero + strip de stack |
| Services | `Services.tsx` | Grid de serviços |
| Process | `Process.tsx` | Etapas do processo |
| Cases | `Cases.tsx` | Cards de portfólio |
| Faq | `Faq.tsx` | Accordion FAQ |
| Cta | `Cta.tsx` | Bloco de contato |
| ContactForm | `ContactForm.tsx` | Formulário (Client Component) |

### UI (`src/components/ui/`)

| Componente | Arquivo | Responsabilidade |
|------------|---------|------------------|
| Button | `Button.tsx` | Botão/link com variantes primary/secondary/ghost |
| Section | `Section.tsx` | Wrapper de seção + `SectionHeader` |
| WhatsAppButton | `WhatsAppButton.tsx` | FAB WhatsApp |

### Página

| Arquivo | Responsabilidade |
|---------|------------------|
| `src/app/page.tsx` | Composição de todas as seções |

---

## 8. Arquivos criados (detalhamento)

### Arquivos escritos/reescritos manualmente (site + docs)

```
src/app/globals.css
src/app/layout.tsx
src/app/page.tsx
src/lib/site.ts
src/lib/utils.ts
src/lib/content/services.ts
src/lib/content/process.ts
src/lib/content/cases.ts
src/lib/content/faq.ts
src/lib/content/stack.ts
src/components/layout/Navbar.tsx
src/components/layout/Footer.tsx
src/components/sections/Hero.tsx
src/components/sections/Services.tsx
src/components/sections/Process.tsx
src/components/sections/Cases.tsx
src/components/sections/Faq.tsx
src/components/sections/Cta.tsx
src/components/sections/ContactForm.tsx
src/components/ui/Button.tsx
src/components/ui/Section.tsx
src/components/ui/WhatsAppButton.tsx
README.md
PROJETO_NKODEX_CONTEXTO.md          ← este arquivo
PROJETO_NKODEX_CONTEXTO.pdf         ← gerado a partir deste MD
```

**Total de arquivos de código/conteúdo custom:** 22 em `src/` + 2–3 na raiz.

### Arquivos gerados pelo scaffold (`create-next-app`)

```
package.json
package-lock.json
next.config.ts
tsconfig.json
eslint.config.mjs
postcss.config.mjs
next-env.d.ts
.gitignore
AGENTS.md
CLAUDE.md
src/app/favicon.ico
public/file.svg
public/globe.svg
public/next.svg
public/vercel.svg
public/window.svg
```

### Dependência adicionada manualmente

- `lucide-react` — ícones em todo o site.

### Pastas geradas automaticamente (não versionar conteúdo)

- `node_modules/`
- `.next/`
- `.git/`

---

## 9. Estrutura completa de pastas

```
nkodex/
├── .git/
├── .gitignore
├── .next/                          # build (gerado)
├── node_modules/                   # dependências (gerado)
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── PROJETO_NKODEX_CONTEXTO.md      # contexto para continuidade
├── PROJETO_NKODEX_CONTEXTO.pdf     # export PDF do contexto
├── README.md                       # documentação técnica completa
├── tsconfig.json
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── layout/
    │   │   ├── Footer.tsx
    │   │   └── Navbar.tsx
    │   ├── sections/
    │   │   ├── Cases.tsx
    │   │   ├── ContactForm.tsx
    │   │   ├── Cta.tsx
    │   │   ├── Faq.tsx
    │   │   ├── Hero.tsx
    │   │   ├── Process.tsx
    │   │   └── Services.tsx
    │   └── ui/
    │       ├── Button.tsx
    │       ├── Section.tsx
    │       └── WhatsAppButton.tsx
    └── lib/
        ├── site.ts
        ├── utils.ts
        └── content/
            ├── cases.ts
            ├── faq.ts
            ├── process.ts
            ├── services.ts
            └── stack.ts
```

---

## 10. Decisões tomadas

### Produto e marca

| Decisão | Detalhe |
|---------|---------|
| Público-alvo | **B2B** exclusivo |
| Nome da marca | **Nkodex** (centralizado em `src/lib/site.ts`) |
| Cases | 4 **fictícios** com `placeholder: true` + tag "Exemplo" na UI |
| Prazo comercial | De **~1 semana** (MVP) a projetos **completos em fases** |
| Propriedade do código | Mensagem no FAQ: código pertence ao cliente |

### Stack técnica

| Decisão | Detalhe |
|---------|---------|
| Framework | **Next.js 16.2.6** (App Router) |
| React | **19.2.4** |
| Linguagem | **TypeScript** |
| CSS | **Tailwind CSS v4** + variáveis CSS em `globals.css` |
| Ícones | **lucide-react** |
| Fontes | Google Fonts: Inter + Plus Jakarta Sans |
| Deploy recomendado | **Vercel** |
| Build | Página `/` **100% estática** (SSG) |

### UX e conversão

| Decisão | Detalhe |
|---------|---------|
| Layout | **Single-page** com âncoras (Conceito A) |
| Formulário | Redireciona para **WhatsApp** com mensagem pré-formatada |
| CTA principal | "Solicitar diagnóstico" |
| WhatsApp | Botão flutuante fixo + link no footer |
| FAQ | Primeira pergunta aberta por padrão (`open={index === 0}`) |

### Arquitetura de código

| Decisão | Detalhe |
|---------|---------|
| Conteúdo | Arrays em `src/lib/content/*.ts` |
| Config global | `src/lib/site.ts` |
| Componentes | Separados em `layout/`, `sections/`, `ui/` |
| Client Component | Apenas `ContactForm.tsx` (estado de envio) |
| Sem CMS | Conteúdo em código por simplicidade no MVP |

### SEO

| Decisão | Detalhe |
|---------|---------|
| Idioma | `lang="pt-BR"` |
| Metadata | title template, description, keywords, OpenGraph, Twitter |
| URL base | `https://nkodex.com.br` (placeholder) |

---

## 11. Conteúdo seed (resumo)

### Serviços (6)

1. Sistemas Web & APIs  
2. Aplicativos Mobile  
3. Integrações & ERPs  
4. Automação de Processos  
5. Manutenção & Evolução  
6. Consultoria Técnica  

### Processo (5 etapas)

Discovery → Proposta → Desenvolvimento → Entrega → Suporte

### Cases fictícios (4)

| Cliente | Setor | Métrica |
|---------|-------|---------|
| Portal Logística Norte | Transporte | −35% ligações de suporte |
| Clínica Integrada SA | Saúde | +28% ocupação na agenda |
| Indústria Metal Prime | Indústria | Relatórios diários em minutos |
| Rede Varejo Hub | Varejo | Sync em menos de 2s |

### FAQ (6 perguntas)

Prazo, orçamento, tecnologias, manutenção, propriedade do código, sistemas legados.

---

## 12. Pendências

### Conteúdo e marca

- [x] Definir **nome da marca** — **Nkodex** (aplicado em `site.ts` e textos).
- [ ] Criar **logo** definitivo (hoje: SVG "N" em gradiente azul).
- [ ] Substituir **cases fictícios** por cases reais em `src/lib/content/cases.ts`.
- [ ] Atualizar **e-mail**, **WhatsApp** (número real) e **domínio** em `site.ts`.
- [ ] Revisar copy (tom de voz, cidade no footer, CNPJ se aplicável).

### Funcionalidades

- [ ] Integrar formulário com **backend de e-mail** (Resend, Formspree ou API Route).
- [ ] Criar páginas `/sobre` e `/cases/[slug]`.
- [ ] Adicionar `sitemap.ts` e `robots.ts` (App Router).
- [ ] Analytics (Plausible, Umami ou GA4).
- [ ] Imagem Open Graph customizada (`opengraph-image.tsx`).

### Design

- [ ] Remover assets padrão do Next em `public/` (SVGs de template).
- [ ] Favicon personalizado.
- [ ] Menu mobile (hamburger) — hoje nav some em telas pequenas, só CTA "Contato".
- [ ] Fotos reais da equipe ou ilustrações de marca.

### DevOps

- [ ] Configurar repositório remoto e deploy na Vercel.
- [ ] Variáveis de ambiente quando houver API de e-mail.
- [ ] Resolver avisos `npm audit` (2 moderate — avaliar antes de `--force`).

---

## 13. Próximos passos (ordem sugerida)

1. **Configurar contatos reais** — `src/lib/site.ts` (WhatsApp, e-mail, URL).
2. **Trocar cases** — editar `src/lib/content/cases.ts`, remover `placeholder: true`.
3. ~~**Definir nome da marca**~~ — concluído: **Nkodex**.
4. **Deploy Vercel** — conectar repo, apontar domínio.
5. **Formulário com e-mail** — API Route + Resend (ou Formspree).
6. **Menu mobile** — Navbar responsiva com drawer.
7. **Página Sobre** — reutilizar `Section` + `SectionHeader`.
8. **SEO** — sitemap, robots, OG image.
9. **Analytics** — após go-live.
10. **Blog** — quando houver estratégia de conteúdo.

---

## 14. Comandos úteis

```bash
cd C:\Users\mari_\Projects\nkodex
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

---

## 15. Pontos de edição rápida

| O que mudar | Arquivo |
|-------------|---------|
| Nome, contatos, nav | `src/lib/site.ts` |
| Serviços | `src/lib/content/services.ts` |
| Processo | `src/lib/content/process.ts` |
| Cases | `src/lib/content/cases.ts` |
| FAQ | `src/lib/content/faq.ts` |
| Stack no hero | `src/lib/content/stack.ts` |
| Cores / tema | `src/app/globals.css` |
| SEO global | `src/app/layout.tsx` |
| Ordem das seções | `src/app/page.tsx` |

---

## 16. Histórico da conversa (contexto humano)

- Usuário queria site para empresa de dev (sistemas, apps, soluções custom B2B).
- Escolheu **Next.js** (credibilidade técnica) em vez de site estático puro.
- Paleta **azul + preto**, público **B2B**, prazos de **1 semana a projetos longos**.
- Marca definitiva: **Nkodex**.
- Conceito visual: **A — Enterprise Dark**.
- Formulário via WhatsApp foi decisão de MVP (sem backend ainda).

---

*Documento gerado para continuidade do projeto. Manter atualizado a cada entrega relevante.*
