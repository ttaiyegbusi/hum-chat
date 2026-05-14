#!/usr/bin/env node
/**
 * Generates simple, attractive SVG avatar placeholders that work without any
 * external CDN. Each avatar is a soft gradient circle with the person's
 * initials overlaid. Saved to /public/avatars/<slug>.svg.
 *
 * Run: node scripts/generate-avatars.js
 */
const fs = require("fs");
const path = require("path");

const people = [
  { slug: "anthony-w", name: "Anthony Williams", hue: 20 },
  { slug: "anthony-s", name: "Anthony Sodunke", hue: 215 },
  { slug: "aisha", name: "Aisha Bello", hue: 340 },
  { slug: "sofiat", name: "Sofiat Bello", hue: 280 },
  { slug: "adebayo", name: "Adebayo Oladipo", hue: 195 },
  { slug: "natasha", name: "Natasha Ivanka", hue: 35 },
  { slug: "shola", name: "Shola Williams", hue: 165 },
  { slug: "jessica", name: "Jessica Levi", hue: 305 },
  { slug: "joshua", name: "Joshua Destiny", hue: 250 },
  { slug: "amelia", name: "Amelia Carter", hue: 12 },
  { slug: "samuel", name: "Samuel Johnson", hue: 145 },
  { slug: "lily", name: "Lily Harper", hue: 325 },
  { slug: "ethan", name: "Ethan Parker", hue: 200 },
  { slug: "lena", name: "Lena Kim", hue: 50 },
];

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function svgFor({ name, hue }) {
  const lightL = 78;
  const darkL = 58;
  const c1 = `hsl(${hue}, 55%, ${lightL}%)`;
  const c2 = `hsl(${(hue + 25) % 360}, 50%, ${darkL}%)`;
  const ini = initials(name);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <defs>
    <radialGradient id="g" cx="35%" cy="30%" r="80%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </radialGradient>
  </defs>
  <rect width="120" height="120" fill="url(#g)"/>
  <text x="60" y="60" text-anchor="middle" dominant-baseline="central"
        font-family="IBM Plex Sans, system-ui, sans-serif"
        font-size="46" font-weight="500" fill="white" letter-spacing="-1">${ini}</text>
</svg>`;
}

const outDir = path.join(__dirname, "..", "public", "avatars");
fs.mkdirSync(outDir, { recursive: true });
for (const p of people) {
  fs.writeFileSync(path.join(outDir, `${p.slug}.svg`), svgFor(p));
}

// Livestream thumbnail — a soft warm gradient with subtle shapes
const thumb = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d4a574"/>
      <stop offset="100%" stop-color="#8b6f47"/>
    </linearGradient>
    <filter id="blur"><feGaussianBlur stdDeviation="20"/></filter>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <g filter="url(#blur)">
    <ellipse cx="600" cy="380" rx="220" ry="280" fill="#e8c9a0" opacity="0.9"/>
    <rect x="100" y="500" width="1000" height="250" fill="#6b4f2a"/>
    <rect x="50" y="80" width="280" height="200" fill="#5a4a3a" opacity="0.6"/>
    <rect x="850" y="350" width="120" height="180" fill="#f5e8d0" opacity="0.8"/>
    <rect x="980" y="320" width="100" height="220" fill="#f5e8d0" opacity="0.7"/>
  </g>
</svg>`;
fs.writeFileSync(path.join(outDir, "..", "stream-thumb.svg"), thumb);

console.log(`Generated ${people.length} avatars + 1 stream thumbnail in /public`);
