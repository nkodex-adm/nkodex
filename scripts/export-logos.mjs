import { readFileSync, writeFileSync, mkdirSync, copyFileSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const originalsDir = join(root, "brand", "originals");
const appDir = join(root, "src", "app");

mkdirSync(originalsDir, { recursive: true });

/** Fallback: recorte do logo horizontal (viewBox 2401×754). */
const ICON_CROP = { left: 133, top: 129, right: 686, bottom: 625 };

function readFirstExisting(paths) {
  for (const path of paths) {
    try {
      return { path, svg: readFileSync(path) };
    } catch {
      /* try next */
    }
  }
  return null;
}

function renderPng(svg, options) {
  const resvg = new Resvg(svg, {
    background: "transparent",
    ...options,
  });
  return resvg.render().asPng();
}

function resolveFullLogo() {
  const found = readFirstExisting([
    join(publicDir, "logo.svg"),
    join(originalsDir, "logo-original.svg"),
  ]);
  if (!found) {
    throw new Error(
      "Coloque logo.svg em public/ ou brand/originals/logo-original.svg",
    );
  }
  return found;
}

function resolveIconLogo(fullSvg) {
  const dedicated = readFirstExisting([
    join(publicDir, "logo-icon.svg"),
    join(originalsDir, "logo-icon-original.svg"),
  ]);

  if (dedicated) {
    writeFileSync(join(originalsDir, "logo-icon-original.svg"), dedicated.svg);
    return { svg: dedicated.svg, label: dedicated.path, crop: false };
  }

  return {
    svg: fullSvg,
    label: "recorte do logo horizontal",
    crop: true,
  };
}

const { path: fullSourcePath, svg: fullSvg } = resolveFullLogo();
const archiveFull = join(originalsDir, "logo-original.svg");
writeFileSync(archiveFull, fullSvg);
if (fullSourcePath !== archiveFull) {
  copyFileSync(fullSourcePath, archiveFull);
}

const icon = resolveIconLogo(fullSvg);
const iconRenderOptions = {
  fitTo: { mode: "width", value: 128 },
  ...(icon.crop ? { crop: ICON_CROP } : {}),
};

writeFileSync(
  join(publicDir, "logo-icon.png"),
  renderPng(icon.svg, iconRenderOptions),
);
console.log(`logo-icon.png: ${icon.label}`);

writeFileSync(
  join(publicDir, "logo.png"),
  renderPng(fullSvg, { fitTo: { mode: "width", value: 320 } }),
);
console.log(`logo.png: ${fullSourcePath}`);

const faviconOptions = {
  fitTo: { mode: "width", value: 32 },
  ...(icon.crop ? { crop: ICON_CROP } : {}),
};
writeFileSync(join(appDir, "icon.png"), renderPng(icon.svg, faviconOptions));
console.log(`src/app/icon.png: favicon (${icon.label})`);

for (const file of ["logo.svg", "logo-icon.svg"]) {
  try {
    rmSync(join(publicDir, file));
    console.log(`public/${file} removido (arquivado em brand/originals/)`);
  } catch {
    /* ok */
  }
}
