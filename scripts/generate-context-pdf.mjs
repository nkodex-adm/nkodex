import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const mdPath = join(root, "PROJETO_NKODEX_CONTEXTO.md");
const htmlPath = join(root, "PROJETO_NKODEX_CONTEXTO.html");
const pdfPath = join(root, "PROJETO_NKODEX_CONTEXTO.pdf");

const { marked } = await import("marked");

const md = readFileSync(mdPath, "utf8");
const body = marked.parse(md);

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Projeto Nkodex — Contexto</title>
  <style>
    @page { margin: 18mm 16mm; }
    body {
      font-family: "Segoe UI", system-ui, sans-serif;
      font-size: 11pt;
      line-height: 1.5;
      color: #111827;
      max-width: 100%;
      padding: 0;
      margin: 0;
    }
    h1 { font-size: 22pt; color: #1d4ed8; border-bottom: 2px solid #2563eb; padding-bottom: 8px; margin-top: 0; }
    h2 { font-size: 14pt; color: #1e40af; margin-top: 24px; page-break-after: avoid; }
    h3 { font-size: 12pt; color: #334155; margin-top: 16px; }
    blockquote { border-left: 4px solid #2563eb; margin: 12px 0; padding: 8px 16px; background: #eff6ff; color: #1e3a8a; }
    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 9pt; }
    pre {
      background: #0f172a;
      color: #e2e8f0;
      padding: 12px 14px;
      border-radius: 8px;
      font-size: 8.5pt;
      line-height: 1.4;
      overflow-x: auto;
      white-space: pre-wrap;
      word-break: break-word;
    }
    pre code { background: transparent; color: inherit; padding: 0; }
    table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 9.5pt; }
    th, td { border: 1px solid #cbd5e1; padding: 6px 8px; text-align: left; vertical-align: top; }
    th { background: #2563eb; color: #fff; }
    tr:nth-child(even) td { background: #f8fafc; }
    ul, ol { padding-left: 22px; }
    li { margin: 4px 0; }
    hr { border: none; border-top: 1px solid #e2e8f0; margin: 20px 0; }
    a { color: #2563eb; }
  </style>
</head>
<body>
${body}
</body>
</html>`;

writeFileSync(htmlPath, html, "utf8");

const edgePaths = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
];

const edge = edgePaths.find((p) => {
  try {
    readFileSync(p);
    return true;
  } catch {
    return false;
  }
});

if (!edge) {
  console.error("Microsoft Edge não encontrado. HTML salvo em:", htmlPath);
  process.exit(1);
}

const fileUrl = new URL(`file:///${htmlPath.replace(/\\/g, "/")}`).href;

execSync(
  `"${edge}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`,
  { stdio: "inherit" },
);

console.log("PDF gerado:", pdfPath);
