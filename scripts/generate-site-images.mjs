import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outDir = path.join(root, "public", "images");

const force = process.argv.includes("--force");

function svgToBuffer(svg) {
  return Buffer.from(svg.trim());
}

async function writeWebp({ filename, svg, width, height, quality }) {
  const outPath = path.join(outDir, filename);

  if (!force) {
    try {
      await fs.access(outPath);
      return { outPath, skipped: true };
    } catch {
      // file does not exist yet
    }
  }

  await sharp(svgToBuffer(svg), { density: 200 })
    .resize(width, height)
    .webp({ quality })
    .toFile(outPath);
  return { outPath, skipped: false };
}

const heroSvg = ({ width, height }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#07142f"/>
      <stop offset="0.45" stop-color="#0a3a86"/>
      <stop offset="1" stop-color="#0b0d12"/>
    </linearGradient>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="60" />
    </filter>
    <filter id="noise" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.9  0 0 0 0 0.9  0 0 0 0 1  0 0 0 0.06 0"/>
    </filter>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#g)"/>

  <g filter="url(#blur)" opacity="0.75">
    <circle cx="${Math.round(width * 0.18)}" cy="${Math.round(height * 0.22)}" r="${Math.round(Math.min(width, height) * 0.22)}" fill="#56c0ff"/>
    <circle cx="${Math.round(width * 0.78)}" cy="${Math.round(height * 0.34)}" r="${Math.round(Math.min(width, height) * 0.26)}" fill="#3ba0ff"/>
    <circle cx="${Math.round(width * 0.65)}" cy="${Math.round(height * 0.80)}" r="${Math.round(Math.min(width, height) * 0.20)}" fill="#082567"/>
  </g>

  <rect width="${width}" height="${height}" filter="url(#noise)" opacity="0.35"/>

  <g opacity="0.25">
    <path d="M0 ${Math.round(height * 0.72)} C ${Math.round(width * 0.22)} ${Math.round(
  height * 0.60,
)} ${Math.round(width * 0.50)} ${Math.round(height * 0.84)} ${width} ${Math.round(
  height * 0.66,
)}" fill="none" stroke="#ffffff" stroke-width="2"/>
    <path d="M0 ${Math.round(height * 0.58)} C ${Math.round(width * 0.30)} ${Math.round(
  height * 0.42,
)} ${Math.round(width * 0.62)} ${Math.round(height * 0.76)} ${width} ${Math.round(
  height * 0.52,
)}" fill="none" stroke="#ffffff" stroke-width="2"/>
  </g>
</svg>
`;

const heroLightSvg = ({ width, height }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f7fafc"/>
      <stop offset="0.55" stop-color="#eaf2ff"/>
      <stop offset="1" stop-color="#ffffff"/>
    </linearGradient>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="70" />
    </filter>
    <filter id="noise" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0.02  0 0 0 0 0.08  0 0 0 0.05 0"/>
    </filter>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#g)"/>

  <g filter="url(#blur)" opacity="0.72">
    <circle cx="${Math.round(width * 0.22)}" cy="${Math.round(height * 0.30)}" r="${Math.round(Math.min(width, height) * 0.26)}" fill="#56c0ff" opacity="0.55"/>
    <circle cx="${Math.round(width * 0.74)}" cy="${Math.round(height * 0.28)}" r="${Math.round(Math.min(width, height) * 0.30)}" fill="#3ba0ff" opacity="0.40"/>
    <circle cx="${Math.round(width * 0.62)}" cy="${Math.round(height * 0.84)}" r="${Math.round(Math.min(width, height) * 0.24)}" fill="#0a3a86" opacity="0.16"/>
  </g>

  <rect width="${width}" height="${height}" filter="url(#noise)" opacity="0.40"/>

  <g opacity="0.14">
    <path d="M0 ${Math.round(height * 0.72)} C ${Math.round(width * 0.22)} ${Math.round(
  height * 0.60,
)} ${Math.round(width * 0.50)} ${Math.round(height * 0.84)} ${width} ${Math.round(
  height * 0.66,
)}" fill="none" stroke="#0b0d12" stroke-opacity="0.28" stroke-width="2"/>
    <path d="M0 ${Math.round(height * 0.58)} C ${Math.round(width * 0.30)} ${Math.round(
  height * 0.42,
)} ${Math.round(width * 0.62)} ${Math.round(height * 0.76)} ${width} ${Math.round(
  height * 0.52,
)}" fill="none" stroke="#0b0d12" stroke-opacity="0.22" stroke-width="2"/>
  </g>
</svg>
`;

const dashboardSvg = ({ width, height }) => {
  const pad = Math.round(width * 0.07);
  const winX = pad;
  const winY = Math.round(height * 0.10);
  const winW = width - pad * 2;
  const winH = height - Math.round(height * 0.16);
  const radius = 46;
  const topBarH = Math.round(winH * 0.12);
  const sidebarW = Math.round(winW * 0.23);

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f7f7f5"/>
      <stop offset="1" stop-color="#ffffff"/>
    </linearGradient>
    <linearGradient id="ink" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0b0d12"/>
      <stop offset="1" stop-color="#121521"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3ba0ff"/>
      <stop offset="1" stop-color="#56c0ff"/>
    </linearGradient>
    <linearGradient id="accentSoft" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#56c0ff" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#56c0ff" stop-opacity="0"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#020617" flood-opacity="0.22"/>
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#020617" flood-opacity="0.12"/>
    </filter>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0"/>
    </filter>
  </defs>

  <rect width="${width}" height="${height}" rx="48" fill="url(#bg)"/>

  <g filter="url(#shadow)">
    <rect x="${winX}" y="${winY}" width="${winW}" height="${winH}" rx="${radius}" fill="#ffffff"/>
    <rect x="${winX}" y="${winY}" width="${winW}" height="${winH}" rx="${radius}" fill="none" stroke="#0b0d12" stroke-opacity="0.10" stroke-width="2"/>

    <rect x="${winX}" y="${winY}" width="${winW}" height="${topBarH}" rx="${radius}" fill="#ffffff"/>
    <line x1="${winX}" y1="${winY + topBarH}" x2="${winX + winW}" y2="${winY + topBarH}" stroke="#0b0d12" stroke-opacity="0.10" stroke-width="2"/>

    <g transform="translate(${winX + Math.round(winW * 0.04)}, ${winY + Math.round(topBarH * 0.52)})">
      <circle cx="0" cy="0" r="7" fill="#ff5f57"/>
      <circle cx="22" cy="0" r="7" fill="#febc2e"/>
      <circle cx="44" cy="0" r="7" fill="#28c840"/>
    </g>

    <rect x="${winX + Math.round(winW * 0.32)}" y="${winY + Math.round(topBarH * 0.30)}" width="${Math.round(
      winW * 0.36,
    )}" height="${Math.round(topBarH * 0.46)}" rx="18" fill="#f2f3f5" stroke="#0b0d12" stroke-opacity="0.08"/>
    <circle cx="${winX + winW - Math.round(winW * 0.06)}" cy="${winY + Math.round(topBarH * 0.52)}" r="16" fill="#f2f3f5" stroke="#0b0d12" stroke-opacity="0.08"/>

    <rect x="${winX}" y="${winY + topBarH}" width="${sidebarW}" height="${winH - topBarH}" rx="${radius}" fill="url(#ink)"/>
    <g opacity="0.90" fill="#ffffff">
      <rect x="${winX + Math.round(sidebarW * 0.18)}" y="${winY + topBarH + Math.round(winH * 0.08)}" width="${Math.round(
        sidebarW * 0.64,
      )}" height="14" rx="7" opacity="0.70"/>
      <rect x="${winX + Math.round(sidebarW * 0.18)}" y="${winY + topBarH + Math.round(winH * 0.15)}" width="${Math.round(
        sidebarW * 0.52,
      )}" height="14" rx="7" opacity="0.55"/>
      <rect x="${winX + Math.round(sidebarW * 0.18)}" y="${winY + topBarH + Math.round(winH * 0.22)}" width="${Math.round(
        sidebarW * 0.58,
      )}" height="14" rx="7" opacity="0.55"/>
      <rect x="${winX + Math.round(sidebarW * 0.18)}" y="${winY + topBarH + Math.round(winH * 0.33)}" width="${Math.round(
        sidebarW * 0.46,
      )}" height="14" rx="7" opacity="0.45"/>
    </g>

    <g transform="translate(${winX + sidebarW + Math.round(winW * 0.035)}, ${winY + topBarH + Math.round(winH * 0.06)})">
      <!-- Ops heading + filter chips -->
      <text x="10" y="-14" font-family="ui-sans-serif, system-ui" font-size="18" fill="#0b0d12" opacity="0.72">Operations</text>
      <g transform="translate(${Math.round(winW * 0.34)}, -28)">
        <rect width="${Math.round(winW * 0.16)}" height="26" rx="13" fill="#f2f3f5" stroke="#0b0d12" stroke-opacity="0.08"/>
        <text x="${Math.round(winW * 0.08)}" y="18" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="#0b0d12" opacity="0.55">Last 30 days</text>
      </g>
      <g transform="translate(${Math.round(winW * 0.52)}, -28)">
        <rect width="${Math.round(winW * 0.12)}" height="26" rx="13" fill="#f2f3f5" stroke="#0b0d12" stroke-opacity="0.08"/>
        <text x="${Math.round(winW * 0.06)}" y="18" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="#0b0d12" opacity="0.55">Region</text>
      </g>

      <rect width="${Math.round(winW * 0.22)}" height="${Math.round(winH * 0.20)}" rx="24" fill="#ffffff" stroke="#0b0d12" stroke-opacity="0.10"/>
      <rect x="${Math.round(winW * 0.24)}" width="${Math.round(winW * 0.22)}" height="${Math.round(winH * 0.20)}" rx="24" fill="#ffffff" stroke="#0b0d12" stroke-opacity="0.10"/>
      <rect x="${Math.round(winW * 0.48)}" width="${Math.round(winW * 0.22)}" height="${Math.round(winH * 0.20)}" rx="24" fill="#ffffff" stroke="#0b0d12" stroke-opacity="0.10"/>

      <g fill="#0b0d12" opacity="0.55">
        <text x="24" y="30" font-family="ui-sans-serif, system-ui" font-size="12" fill="#0b0d12" opacity="0.55">Open tickets</text>
        <text x="24" y="60" font-family="ui-sans-serif, system-ui" font-size="20" fill="#0b0d12" opacity="0.78">148</text>
        <rect x="24" y="76" width="86" height="10" rx="5" fill="#0b0d12" opacity="0.10"/>

        <text x="${Math.round(winW * 0.24) + 24}" y="30" font-family="ui-sans-serif, system-ui" font-size="12" fill="#0b0d12" opacity="0.55">SLA breaches</text>
        <text x="${Math.round(winW * 0.24) + 24}" y="60" font-family="ui-sans-serif, system-ui" font-size="20" fill="#0b0d12" opacity="0.78">7</text>
        <rect x="${Math.round(winW * 0.24) + 24}" y="76" width="92" height="10" rx="5" fill="#0b0d12" opacity="0.10"/>

        <text x="${Math.round(winW * 0.48) + 24}" y="30" font-family="ui-sans-serif, system-ui" font-size="12" fill="#0b0d12" opacity="0.55">Technicians on duty</text>
        <text x="${Math.round(winW * 0.48) + 24}" y="60" font-family="ui-sans-serif, system-ui" font-size="20" fill="#0b0d12" opacity="0.78">12</text>
        <rect x="${Math.round(winW * 0.48) + 24}" y="76" width="74" height="10" rx="5" fill="#0b0d12" opacity="0.10"/>
      </g>

      <rect y="${Math.round(winH * 0.25)}" width="${Math.round(winW * 0.70)}" height="${Math.round(winH * 0.46)}" rx="28" fill="#ffffff" stroke="#0b0d12" stroke-opacity="0.10"/>

      <g transform="translate(34, ${Math.round(winH * 0.30)})">
        <rect width="${Math.round(winW * 0.62)}" height="14" rx="7" fill="#0b0d12" opacity="0.14"/>
        <rect y="28" width="${Math.round(winW * 0.32)}" height="10" rx="5" fill="#0b0d12" opacity="0.10"/>
        <rect y="56" width="${Math.round(winW * 0.62)}" height="220" rx="18" fill="#f7f7f5"/>

        <!-- Dispatch volume chart panel -->
        <g transform="translate(24, 84)">
          <rect width="${Math.round(winW * 0.54)}" height="144" rx="16" fill="#ffffff" stroke="#0b0d12" stroke-opacity="0.08"/>

          <g transform="translate(18, 18)" opacity="0.22" stroke="#0b0d12" stroke-width="1">
            <line x1="0" y1="20" x2="${Math.round(winW * 0.50)}" y2="20"/>
            <line x1="0" y1="52" x2="${Math.round(winW * 0.50)}" y2="52"/>
            <line x1="0" y1="84" x2="${Math.round(winW * 0.50)}" y2="84"/>
          </g>

          <path d="M18 116 C 64 88, 106 104, 150 66 S 250 70, 300 50 S 356 58, 404 46" fill="none" stroke="url(#accent)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18 116 C 64 88, 106 104, 150 66 S 250 70, 300 50 S 356 58, 404 46 L 404 140 L 18 140 Z" fill="url(#accentSoft)"/>

          <g fill="url(#accent)">
            <circle cx="18" cy="116" r="7"/>
            <circle cx="150" cy="66" r="7"/>
            <circle cx="300" cy="50" r="7"/>
            <circle cx="404" cy="46" r="7"/>
          </g>

          <!-- Legend pill -->
          <g transform="translate(18, 10)">
            <rect width="92" height="20" rx="10" fill="#f2f3f5" stroke="#0b0d12" stroke-opacity="0.08"/>
            <circle cx="14" cy="10" r="5" fill="url(#accent)"/>
            <text x="28" y="14" font-family="ui-sans-serif, system-ui" font-size="11" fill="#0b0d12" opacity="0.55">Dispatch</text>
          </g>
        </g>

        <!-- Work orders list -->
        <g transform="translate(${Math.round(winW * 0.56)}, 84)">
          <rect width="${Math.round(winW * 0.18)}" height="144" rx="16" fill="#ffffff" stroke="#0b0d12" stroke-opacity="0.08"/>
          <text x="18" y="30" font-family="ui-sans-serif, system-ui" font-size="12" fill="#0b0d12" opacity="0.55">Work orders</text>
          <g transform="translate(18, 46)" fill="#0b0d12" opacity="0.12">
            <rect width="${Math.round(winW * 0.14)}" height="10" rx="5"/>
            <rect y="22" width="${Math.round(winW * 0.12)}" height="10" rx="5"/>
            <rect y="44" width="${Math.round(winW * 0.13)}" height="10" rx="5"/>
            <rect y="66" width="${Math.round(winW * 0.11)}" height="10" rx="5"/>
          </g>
          <g transform="translate(18, 112)">
            <rect width="86" height="22" rx="11" fill="url(#accent)" opacity="0.18"/>
            <text x="43" y="15" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="#0b0d12" opacity="0.55">On track</text>
          </g>
        </g>
      </g>
    </g>
  </g>

  <rect width="${width}" height="${height}" filter="url(#grain)" opacity="0.35"/>
</svg>
`;
};

const automationSvg = ({ width, height }) => {
  const pad = Math.round(width * 0.08);
  const cardW = width - pad * 2;
  const cardH = height - Math.round(height * 0.20);
  const cardX = pad;
  const cardY = Math.round(height * 0.10);

  const leftPanelW = Math.round(cardW * 0.22);
  const rightPanelW = Math.round(cardW * 0.24);
  const canvasW = cardW - leftPanelW - rightPanelW - 48;
  const canvasX = cardX + leftPanelW + 24;
  const canvasY = cardY + 90;

  const node = (x, y, label) => `
    <g transform="translate(${x}, ${y})">
      <rect x="-170" y="-46" width="340" height="92" rx="22" fill="#ffffff" stroke="#0b0d12" stroke-opacity="0.10"/>
      <circle cx="-122" cy="0" r="20" fill="url(#accent)"/>
      <rect x="-86" y="-14" width="180" height="12" rx="6" fill="#0b0d12" opacity="0.28"/>
      <rect x="-86" y="10" width="140" height="10" rx="5" fill="#0b0d12" opacity="0.18"/>
      <text x="110" y="6" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="16" fill="#0b0d12" opacity="0.55">${label}</text>
    </g>
  `;

  const appRow = (y, label, sub, active = false) => `
    <g transform="translate(${cardX + 24}, ${y})">
      <rect width="${leftPanelW - 48}" height="48" rx="16" fill="${active ? "rgba(86,192,255,0.18)" : "rgba(255,255,255,0.00)"}"/>
      <circle cx="24" cy="24" r="14" fill="url(#accent)" opacity="${active ? "0.95" : "0.55"}"/>
      <rect x="48" y="14" width="${Math.round(leftPanelW * 0.50)}" height="10" rx="5" fill="#ffffff" opacity="0.55"/>
      <rect x="48" y="30" width="${Math.round(leftPanelW * 0.40)}" height="8" rx="4" fill="#ffffff" opacity="0.35"/>
      <text x="48" y="18" font-family="ui-sans-serif, system-ui" font-size="11" fill="#ffffff" opacity="0.0">${label}</text>
      <text x="48" y="34" font-family="ui-sans-serif, system-ui" font-size="10" fill="#ffffff" opacity="0.0">${sub}</text>
    </g>
  `;

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#f7f7f5"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a3a86"/>
      <stop offset="1" stop-color="#56c0ff"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#020617" flood-opacity="0.18"/>
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#020617" flood-opacity="0.10"/>
    </filter>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0"/>
    </filter>
  </defs>

  <rect width="${width}" height="${height}" rx="48" fill="url(#bg)"/>

  <g filter="url(#shadow)">
    <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="44" fill="#ffffff"/>
    <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="44" fill="none" stroke="#0b0d12" stroke-opacity="0.10" stroke-width="2"/>

    <!-- Top bar -->
    <rect x="${cardX + 28}" y="${cardY + 26}" width="${Math.round(cardW * 0.22)}" height="14" rx="7" fill="#0b0d12" opacity="0.16"/>
    <rect x="${cardX + 28}" y="${cardY + 50}" width="${Math.round(cardW * 0.36)}" height="10" rx="5" fill="#0b0d12" opacity="0.10"/>
    <rect x="${cardX + cardW - 220}" y="${cardY + 28}" width="180" height="30" rx="15" fill="#f2f3f5" stroke="#0b0d12" stroke-opacity="0.08"/>
    <rect x="${cardX + cardW - 200}" y="${cardY + 40}" width="140" height="8" rx="4" fill="#0b0d12" opacity="0.10"/>

    <!-- Left app panel -->
    <rect x="${cardX + 18}" y="${cardY + 82}" width="${leftPanelW}" height="${cardH - 100}" rx="28" fill="#0b0d12" opacity="0.92"/>
    <g opacity="0.90">
      <rect x="${cardX + 40}" y="${cardY + 104}" width="${Math.round(leftPanelW * 0.55)}" height="12" rx="6" fill="#ffffff" opacity="0.55"/>
      ${appRow(cardY + 134, "Webhook", "Incoming", true)}
      ${appRow(cardY + 192, "Validate", "Schema", false)}
      ${appRow(cardY + 250, "Google Sheets", "Append row", false)}
      ${appRow(cardY + 308, "Slack", "Notify", false)}
    </g>

    <!-- Right properties panel -->
    <rect x="${cardX + cardW - rightPanelW - 18}" y="${cardY + 82}" width="${rightPanelW}" height="${cardH - 100}" rx="28" fill="#ffffff" stroke="#0b0d12" stroke-opacity="0.10"/>
    <g transform="translate(${cardX + cardW - rightPanelW}, ${cardY + 110})">
      <rect width="${Math.round(rightPanelW * 0.66)}" height="12" rx="6" fill="#0b0d12" opacity="0.16"/>
      <rect y="28" width="${Math.round(rightPanelW * 0.52)}" height="10" rx="5" fill="#0b0d12" opacity="0.10"/>
      <g opacity="0.10" fill="#0b0d12">
        <rect y="60" width="${Math.round(rightPanelW * 0.78)}" height="10" rx="5"/>
        <rect y="82" width="${Math.round(rightPanelW * 0.70)}" height="10" rx="5"/>
        <rect y="104" width="${Math.round(rightPanelW * 0.74)}" height="10" rx="5"/>
      </g>
      <rect y="140" width="${Math.round(rightPanelW * 0.70)}" height="34" rx="17" fill="url(#accent)" opacity="0.18"/>
      <rect x="14" y="156" width="${Math.round(rightPanelW * 0.44)}" height="8" rx="4" fill="#0b0d12" opacity="0.14"/>
    </g>

    <!-- Canvas background -->
    <rect x="${canvasX}" y="${canvasY}" width="${canvasW}" height="${Math.round(cardH * 0.68)}" rx="30" fill="#f7f7f5"/>
    <g opacity="0.22" stroke="#0b0d12" stroke-width="1">
      <path d="M${canvasX + 28} ${canvasY + 40} H ${canvasX + canvasW - 28}"/>
      <path d="M${canvasX + 28} ${canvasY + 88} H ${canvasX + canvasW - 28}"/>
      <path d="M${canvasX + 28} ${canvasY + 136} H ${canvasX + canvasW - 28}"/>
      <path d="M${canvasX + 28} ${canvasY + 184} H ${canvasX + canvasW - 28}"/>
    </g>

    <g stroke="#0b0d12" stroke-opacity="0.18" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M${canvasX + Math.round(canvasW * 0.24)} ${canvasY + Math.round(cardH * 0.18)} C ${canvasX + Math.round(
    canvasW * 0.38,
  )} ${canvasY + Math.round(cardH * 0.10)} ${canvasX + Math.round(canvasW * 0.54)} ${canvasY + Math.round(
    cardH * 0.26,
  )} ${canvasX + Math.round(canvasW * 0.70)} ${canvasY + Math.round(cardH * 0.18)}"/>
      <path d="M${canvasX + Math.round(canvasW * 0.70)} ${canvasY + Math.round(cardH * 0.18)} C ${canvasX + Math.round(
    canvasW * 0.84,
  )} ${canvasY + Math.round(cardH * 0.32)} ${canvasX + Math.round(canvasW * 0.78)} ${canvasY + Math.round(
    cardH * 0.52,
  )} ${canvasX + Math.round(canvasW * 0.62)} ${canvasY + Math.round(cardH * 0.44)}"/>
      <path d="M${canvasX + Math.round(canvasW * 0.62)} ${canvasY + Math.round(cardH * 0.44)} C ${canvasX + Math.round(
    canvasW * 0.46,
  )} ${canvasY + Math.round(cardH * 0.58)} ${canvasX + Math.round(canvasW * 0.40)} ${canvasY + Math.round(
    cardH * 0.68,
  )} ${canvasX + Math.round(canvasW * 0.30)} ${canvasY + Math.round(cardH * 0.58)}"/>
    </g>

    ${node(canvasX + Math.round(canvasW * 0.24), canvasY + Math.round(cardH * 0.18), "Incident")}
    ${node(canvasX + Math.round(canvasW * 0.70), canvasY + Math.round(cardH * 0.18), "Triage")}
    ${node(canvasX + Math.round(canvasW * 0.62), canvasY + Math.round(cardH * 0.44), "Work order")}
    ${node(canvasX + Math.round(canvasW * 0.30), canvasY + Math.round(cardH * 0.58), "Notify crew")}

    <!-- Status toast -->
    <g transform="translate(${cardX + cardW - 340}, ${cardY + cardH - 78})">
      <rect width="312" height="44" rx="22" fill="#0b0d12" opacity="0.90"/>
      <circle cx="24" cy="22" r="7" fill="#28c840"/>
      <rect x="44" y="16" width="164" height="10" rx="5" fill="#ffffff" opacity="0.45"/>
      <rect x="220" y="14" width="74" height="16" rx="8" fill="url(#accent)" opacity="0.25"/>
    </g>

    <g fill="#0b0d12" opacity="0.10">
      <rect x="${cardX + 32}" y="${cardY + Math.round(cardH * 0.80)}" width="${Math.round(
    cardW * 0.56,
  )}" height="10" rx="5"/>
      <rect x="${cardX + 32}" y="${cardY + Math.round(cardH * 0.80) + 18}" width="${Math.round(
    cardW * 0.40,
  )}" height="10" rx="5"/>
    </g>
  </g>

  <rect width="${width}" height="${height}" filter="url(#grain)" opacity="0.30"/>
</svg>
`;
};

const mobileWebSvg = ({ width, height }) => {
  const pad = Math.round(width * 0.08);
  const desktopX = pad;
  const desktopY = Math.round(height * 0.18);
  const desktopW = Math.round(width * 0.62);
  const desktopH = Math.round(height * 0.62);
  const phoneW = Math.round(width * 0.22);
  const phoneH = Math.round(height * 0.52);
  const phoneX = Math.round(width * 0.70);
  const phoneY = Math.round(height * 0.24);

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#f7f7f5"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3ba0ff"/>
      <stop offset="1" stop-color="#56c0ff"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#020617" flood-opacity="0.18"/>
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#020617" flood-opacity="0.10"/>
    </filter>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0"/>
    </filter>
  </defs>

  <rect width="${width}" height="${height}" rx="48" fill="url(#bg)"/>

  <g filter="url(#shadow)">
    <rect x="${desktopX}" y="${desktopY}" width="${desktopW}" height="${desktopH}" rx="40" fill="#ffffff"/>
    <rect x="${desktopX}" y="${desktopY}" width="${desktopW}" height="${desktopH}" rx="40" fill="none" stroke="#0b0d12" stroke-opacity="0.10" stroke-width="2"/>

    <!-- Desktop top nav (dispatch board) -->
    <rect x="${desktopX + 24}" y="${desktopY + 22}" width="${desktopW - 48}" height="42" rx="18" fill="#f2f3f5" stroke="#0b0d12" stroke-opacity="0.08"/>
    <circle cx="${desktopX + 52}" cy="${desktopY + 43}" r="10" fill="url(#accent)" opacity="0.75"/>
    <rect x="${desktopX + 72}" y="${desktopY + 36}" width="${Math.round(desktopW * 0.22)}" height="14" rx="7" fill="#0b0d12" opacity="0.12"/>
    <text x="${desktopX + 72}" y="${desktopY + 12}" font-family="ui-sans-serif, system-ui" font-size="0" fill="#0b0d12">Dispatch</text>
    <rect x="${desktopX + Math.round(desktopW * 0.54)}" y="${desktopY + 32}" width="${Math.round(
      desktopW * 0.24,
    )}" height="20" rx="10" fill="#ffffff" stroke="#0b0d12" stroke-opacity="0.08"/>
    <rect x="${desktopX + Math.round(desktopW * 0.56)}" y="${desktopY + 39}" width="${Math.round(
      desktopW * 0.18,
    )}" height="6" rx="3" fill="#0b0d12" opacity="0.10"/>
    <circle cx="${desktopX + desktopW - 52}" cy="${desktopY + 43}" r="12" fill="#ffffff" stroke="#0b0d12" stroke-opacity="0.08"/>

    <!-- Desktop content area (kanban-like jobs) -->
    <rect x="${desktopX + 24}" y="${desktopY + 78}" width="${desktopW - 48}" height="${Math.round(
      desktopH * 0.48,
    )}" rx="26" fill="#f7f7f5"/>

    <!-- Cards: job columns -->
    <g transform="translate(${desktopX + 48}, ${desktopY + 110})">
      <rect width="${Math.round(desktopW * 0.46)}" height="${Math.round(desktopH * 0.34)}" rx="18" fill="#ffffff" stroke="#0b0d12" stroke-opacity="0.08"/>
      <rect x="18" y="18" width="${Math.round(desktopW * 0.22)}" height="12" rx="6" fill="#0b0d12" opacity="0.14"/>
      <g transform="translate(18, 46)">
        <rect width="${Math.round(desktopW * 0.20)}" height="88" rx="14" fill="#f2f3f5"/>
        <rect x="${Math.round(desktopW * 0.22)}" width="${Math.round(desktopW * 0.20)}" height="88" rx="14" fill="#f2f3f5"/>
        <rect y="102" width="${Math.round(desktopW * 0.42)}" height="10" rx="5" fill="#0b0d12" opacity="0.10"/>
        <rect y="124" width="${Math.round(desktopW * 0.34)}" height="10" rx="5" fill="#0b0d12" opacity="0.08"/>
        <rect y="148" width="${Math.round(desktopW * 0.18)}" height="28" rx="14" fill="url(#accent)" opacity="0.18"/>
      </g>
    </g>

    <g transform="translate(${desktopX + Math.round(desktopW * 0.56)}, ${desktopY + 110})">
      <rect width="${Math.round(desktopW * 0.34)}" height="${Math.round(desktopH * 0.34)}" rx="18" fill="#ffffff" stroke="#0b0d12" stroke-opacity="0.08"/>
      <rect x="18" y="18" width="${Math.round(desktopW * 0.18)}" height="12" rx="6" fill="#0b0d12" opacity="0.14"/>
      <g transform="translate(18, 46)">
        <rect width="${Math.round(desktopW * 0.30)}" height="10" rx="5" fill="#0b0d12" opacity="0.10"/>
        <rect y="22" width="${Math.round(desktopW * 0.26)}" height="10" rx="5" fill="#0b0d12" opacity="0.08"/>
        <rect y="44" width="${Math.round(desktopW * 0.28)}" height="10" rx="5" fill="#0b0d12" opacity="0.08"/>
        <rect y="66" width="${Math.round(desktopW * 0.22)}" height="10" rx="5" fill="#0b0d12" opacity="0.08"/>
        <rect y="92" width="${Math.round(desktopW * 0.20)}" height="28" rx="14" fill="url(#accent)" opacity="0.16"/>
      </g>
    </g>

    <!-- Phone (technician job detail) -->
    <rect x="${phoneX}" y="${phoneY}" width="${phoneW}" height="${phoneH}" rx="48" fill="#0b0d12" opacity="0.92"/>
    <rect x="${phoneX + 10}" y="${phoneY + 10}" width="${phoneW - 20}" height="${phoneH - 20}" rx="40" fill="#ffffff"/>
    <rect x="${phoneX + 24}" y="${phoneY + 30}" width="${phoneW - 48}" height="14" rx="7" fill="#0b0d12" opacity="0.12"/>
    <rect x="${phoneX + 24}" y="${phoneY + 54}" width="${Math.round(phoneW * 0.52)}" height="10" rx="5" fill="#0b0d12" opacity="0.08"/>

    <rect x="${phoneX + 24}" y="${phoneY + 78}" width="${phoneW - 48}" height="104" rx="18" fill="#f2f3f5"/>
    <rect x="${phoneX + 36}" y="${phoneY + 92}" width="${phoneW - 72}" height="10" rx="5" fill="#0b0d12" opacity="0.10"/>
    <rect x="${phoneX + 36}" y="${phoneY + 112}" width="${Math.round(phoneW * 0.44)}" height="10" rx="5" fill="#0b0d12" opacity="0.08"/>
    <g transform="translate(${phoneX + 36}, ${phoneY + 134})" fill="#0b0d12" opacity="0.10">
      <rect width="${phoneW - 72}" height="10" rx="5"/>
      <rect y="18" width="${Math.round((phoneW - 72) * 0.78)}" height="10" rx="5"/>
      <rect y="36" width="${Math.round((phoneW - 72) * 0.64)}" height="10" rx="5"/>
    </g>
    <rect x="${phoneX + 36}" y="${phoneY + 164}" width="${Math.round(phoneW * 0.38)}" height="28" rx="14" fill="url(#accent)" opacity="0.18"/>

    <!-- Bottom tabs -->
    <rect x="${phoneX + 18}" y="${phoneY + phoneH - 72}" width="${phoneW - 36}" height="52" rx="18" fill="#f2f3f5"/>
    <g transform="translate(${phoneX + 34}, ${phoneY + phoneH - 46})" fill="#0b0d12" opacity="0.16">
      <circle cx="0" cy="0" r="7"/>
      <circle cx="${Math.round((phoneW - 68) * 0.33)}" cy="0" r="7"/>
      <circle cx="${Math.round((phoneW - 68) * 0.66)}" cy="0" r="7"/>
      <circle cx="${Math.round(phoneW - 68)}" cy="0" r="7"/>
    </g>
  </g>

  <rect width="${width}" height="${height}" filter="url(#grain)" opacity="0.28"/>
</svg>
`;
};

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  const heroSize = { width: 2400, height: 1350 };
  const cardSize = { width: 1400, height: 900 };

  const outputs = await Promise.all([
    writeWebp({
      filename: "hero-bg-light.webp",
      svg: heroLightSvg(heroSize),
      ...heroSize,
      quality: 74,
    }),
    writeWebp({
      filename: "hero-bg.webp",
      svg: heroSvg(heroSize),
      ...heroSize,
      quality: 72,
    }),
    writeWebp({
      filename: "benefit-dashboard.webp",
      svg: dashboardSvg(cardSize),
      ...cardSize,
      quality: 78,
    }),
    writeWebp({
      filename: "benefit-automation.webp",
      svg: automationSvg(cardSize),
      ...cardSize,
      quality: 78,
    }),
    writeWebp({
      filename: "benefit-mobile-web.webp",
      svg: mobileWebSvg(cardSize),
      ...cardSize,
      quality: 78,
    }),
  ]);

  console.log(force ? "Generated images (--force):" : "Generated images (skip existing):");
  for (const result of outputs) {
    console.log(" -", result.skipped ? "(skipped)" : "(wrote)", result.outPath);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
