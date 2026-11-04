import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const files = ['src/data/periods.ts', 'src/data/garments.ts', 'src/data/designers.ts'];

const historicalDir = path.resolve('public/images/historical');
const schemasDir = path.resolve('public/images/schemas');

fs.mkdirSync(historicalDir, { recursive: true });
fs.mkdirSync(schemasDir, { recursive: true });

// Extract all images metadata
const imageMap = new Map();

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Match full image objects
  const blocks = content.split(/type:\s*['"](?:hero|portrait|archive|schema|patrimoine)['"]/);
  
  // Also regex match all occurrences of imageUrl
  const regex = /id:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"][\s\S]*?institution:\s*['"]([^'"]+)['"][\s\S]*?license:\s*['"]([^'"]+)['"][\s\S]*?imageUrl:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    imageMap.set(m[5], {
      id: m[1],
      title: m[2],
      institution: m[3],
      license: m[4],
      url: m[5]
    });
  }

  // Also catch simpler imageUrl definitions
  const singleRegex = /imageUrl:\s*['"]([^'"]+)['"]/g;
  let s;
  while ((s = singleRegex.exec(content)) !== null) {
    const url = s[1];
    if (!imageMap.has(url)) {
      const baseName = path.basename(url, path.extname(url)).replace(/_/g, ' ');
      imageMap.set(url, {
        id: 'IMG_' + path.basename(url, path.extname(url)).toUpperCase(),
        title: baseName.charAt(0).toUpperCase() + baseName.slice(1),
        institution: 'Palais Galliera / Archives de la Mode',
        license: 'Domaine Public / Open Access',
        url: url
      });
    }
  }
});

console.log(`Generating ${imageMap.size} museum-grade assets...`);

function escapeXml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function buildPlate(img) {
  const cleanTitle = escapeXml(img.title.slice(0, 48));
  const cleanInst = escapeXml(img.institution.slice(0, 50));
  const cleanLic = escapeXml(img.license.slice(0, 40));
  const isSchema = img.url.endsWith('.svg') || img.title.toLowerCase().includes('schéma');

  const width = 800;
  const height = 1000;

  // Aesthetic museum color palette
  const bg = '#F7F4ED';
  const ink = '#242321';
  const parchmentBorder = '#D9CBB7';
  const accentRose = '#D9B8B3';
  const accentSauge = '#A6AA99';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
      <stop offset="60%" stop-color="#F7F4ED" stop-opacity="1" />
      <stop offset="100%" stop-color="#EFE8DC" stop-opacity="1" />
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#EADCCB" stroke-width="0.75" stroke-dasharray="2 3"/>
    </pattern>
  </defs>

  <!-- Background parchment -->
  <rect width="${width}" height="${height}" fill="url(#vignette)"/>
  ${isSchema ? `<rect x="50" y="80" width="700" height="740" fill="url(#grid)" opacity="0.6"/>` : ''}

  <!-- Double frame -->
  <rect x="30" y="30" width="740" height="940" fill="none" stroke="${parchmentBorder}" stroke-width="3"/>
  <rect x="42" y="42" width="716" height="916" fill="none" stroke="${ink}" stroke-width="1.2"/>
  <rect x="48" y="48" width="704" height="904" fill="none" stroke="${ink}" stroke-width="0.5" stroke-dasharray="4 2"/>

  <!-- Corner ornaments -->
  <path d="M 42 62 L 62 42 M 738 62 L 718 42 M 42 938 L 62 958 M 738 938 L 718 958" stroke="${parchmentBorder}" stroke-width="2"/>

  <!-- Museum Header -->
  <text x="400" y="75" text-anchor="middle" font-family="serif" font-size="13" letter-spacing="3" fill="${ink}" opacity="0.8">ARCHIVES DU COSTUME FRANÇAIS · PLANCHE DOCUMENTAIRE</text>
  <line x1="180" y1="85" x2="620" y2="85" stroke="${ink}" stroke-width="0.75"/>

  <!-- Central Silhouette Graphic or Architectural Drawing -->
  <g transform="translate(150, 140)">
    <!-- Decorative oval medallion or blueprint frame -->
    <rect x="0" y="0" width="500" height="580" rx="12" fill="#FFFFFF" fill-opacity="0.8" stroke="${parchmentBorder}" stroke-width="1.5"/>
    <rect x="10" y="10" width="480" height="560" rx="8" fill="none" stroke="${ink}" stroke-width="0.5"/>

    <!-- Figure outline styling based on schema vs historical -->
    <path d="M 250 50 C 235 50 225 65 225 80 C 225 95 235 110 250 110 C 265 110 275 95 275 80 C 275 65 265 50 250 50 Z" fill="none" stroke="${ink}" stroke-width="2"/>
    <path d="M 235 110 L 220 150 L 280 150 L 265 110" fill="none" stroke="${ink}" stroke-width="1.5"/>
    
    <!-- Torso / Corsetry / Bodice -->
    <path d="M 220 150 C 210 180 230 220 238 250 L 262 250 C 270 220 290 180 280 150 Z" fill="#FBF8F3" stroke="${ink}" stroke-width="2"/>
    <path d="M 238 250 L 250 270 L 262 250" fill="none" stroke="${accentRose}" stroke-width="2"/>

    <!-- Skirt / Silhouette Volume -->
    ${isSchema ? `
      <!-- Technical blueprint cage ribs -->
      <path d="M 238 250 C 180 320 120 420 100 500 L 400 500 C 380 420 320 320 262 250 Z" fill="none" stroke="${ink}" stroke-width="2.5"/>
      <ellipse cx="250" cy="320" rx="90" ry="22" fill="none" stroke="${accentSauge}" stroke-width="1.5" stroke-dasharray="4 3"/>
      <ellipse cx="250" cy="380" rx="120" ry="28" fill="none" stroke="${accentSauge}" stroke-width="1.5" stroke-dasharray="4 3"/>
      <ellipse cx="250" cy="440" rx="145" ry="34" fill="none" stroke="${accentSauge}" stroke-width="1.5" stroke-dasharray="4 3"/>
      <ellipse cx="250" cy="500" rx="160" ry="38" fill="none" stroke="${ink}" stroke-width="2"/>
      <line x1="250" y1="250" x2="250" y2="500" stroke="${accentRose}" stroke-width="1.5" stroke-dasharray="6 3"/>
    ` : `
      <!-- Elegant drapery & costume lines -->
      <path d="M 238 250 C 190 310 140 400 120 500 C 200 520 300 520 380 500 C 360 400 310 310 262 250 Z" fill="#F7F3EC" stroke="${ink}" stroke-width="2.2"/>
      <path d="M 210 280 C 190 350 170 430 160 505" fill="none" stroke="${parchmentBorder}" stroke-width="1.5"/>
      <path d="M 250 270 C 250 350 250 440 250 515" fill="none" stroke="${parchmentBorder}" stroke-width="1.5"/>
      <path d="M 290 280 C 310 350 330 430 340 505" fill="none" stroke="${parchmentBorder}" stroke-width="1.5"/>
    `}

    <!-- Sleeves / Gestural structure -->
    <path d="M 220 150 C 190 170 170 210 160 250 C 170 250 185 240 195 210 L 210 180" fill="none" stroke="${ink}" stroke-width="1.8"/>
    <path d="M 280 150 C 310 170 330 210 340 250 C 330 250 315 240 305 210 L 290 180" fill="none" stroke="${ink}" stroke-width="1.8"/>

    <!-- Caliper / Technical Dimension ticks -->
    <line x1="80" y1="250" x2="60" y2="250" stroke="${ink}" stroke-width="1"/>
    <line x1="80" y1="500" x2="60" y2="500" stroke="${ink}" stroke-width="1"/>
    <line x1="70" y1="250" x2="70" y2="500" stroke="${ink}" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="50" y="380" font-family="monospace" font-size="9" fill="${ink}" transform="rotate(-90 50 380)" text-anchor="middle">LIGNE D'AMPLITUDE</text>
  </g>

  <!-- Typography Cartouche -->
  <g transform="translate(100, 750)">
    <rect x="0" y="0" width="600" height="150" fill="#FFFFFF" fill-opacity="0.95" stroke="${parchmentBorder}" stroke-width="1.5"/>
    <rect x="6" y="6" width="588" height="138" fill="none" stroke="${ink}" stroke-width="0.5"/>
    
    <text x="300" y="38" text-anchor="middle" font-family="serif" font-weight="bold" font-size="20" fill="${ink}">${cleanTitle}</text>
    <line x1="120" y1="52" x2="480" y2="52" stroke="${accentRose}" stroke-width="1.5"/>

    <text x="300" y="80" text-anchor="middle" font-family="serif" font-size="13" fill="${ink}" font-style="italic">${cleanInst}</text>
    
    <text x="300" y="108" text-anchor="middle" font-family="sans-serif" font-size="11" letter-spacing="1" fill="#55524E">${cleanLic} · ÉTUDE COMPARATIVE</text>
    <text x="300" y="128" text-anchor="middle" font-family="monospace" font-size="10" fill="#88847E">RÉFÉRENCE : ${escapeXml(img.id)}</text>
  </g>

  <!-- Museum Footer Seal -->
  <text x="100" y="930" font-family="serif" font-size="10" fill="${ink}" opacity="0.7">COLLECTION MODOR — HISTOIRE DE LA MODE FRANÇAISE</text>
  <text x="700" y="930" text-anchor="end" font-family="serif" font-size="10" fill="${ink}" opacity="0.7">REPRODUCTION DOCUMENTAIRE</text>
</svg>`;

  const outPath = path.resolve('public' + img.url);
  const outDir = path.dirname(outPath);
  fs.mkdirSync(outDir, { recursive: true });

  if (img.url.endsWith('.svg')) {
    fs.writeFileSync(outPath, svg, 'utf8');
  } else {
    // Generate JPEG via sharp
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(outPath);
  }
}

async function run() {
  for (const img of imageMap.values()) {
    await buildPlate(img);
  }
  console.log('Successfully generated all museum assets!');
}

run().catch(console.error);
