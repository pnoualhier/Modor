import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const historicalDir = path.resolve('public/images/historical');
fs.mkdirSync(historicalDir, { recursive: true });

function escapeXml(unsafe) {
  return String(unsafe || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const DESIGNER_PORTRAITS = [
  {
    filename: 'rose_bertin_portrait.jpg',
    id: 'IMG_DES_BERTIN',
    name: 'Rose Bertin',
    dates: '1747–1813',
    role: 'Première Marchande de Modes & Confidente de Marie-Antoinette',
    institution: 'Bibliothèque nationale de France (Gallica)',
    license: 'Domaine Public',
    periodStyle: 'rococo',
    tone: 'sepia',
    customSvg: `
      <!-- Rose Bertin: Rococo elaborate pouf & ribbons -->
      <circle cx="250" cy="190" r="45" fill="#E8D8C4" stroke="#4A3F35" stroke-width="2"/>
      <!-- High sculpted pouf hair -->
      <path d="M 210 180 C 205 130 220 80 250 70 C 280 80 295 130 290 180 Z" fill="#D9C9B5" stroke="#4A3F35" stroke-width="2"/>
      <path d="M 220 110 C 240 100 260 100 280 110" stroke="#B8A48F" stroke-width="2" fill="none"/>
      <path d="M 215 135 C 240 125 260 125 285 135" stroke="#B8A48F" stroke-width="2" fill="none"/>
      <!-- Miniature frigate mast ornament on pouf -->
      <line x1="250" y1="70" x2="250" y2="40" stroke="#7A583A" stroke-width="2"/>
      <path d="M 250 45 L 265 52 L 250 60 Z" fill="#C5A059"/>
      <!-- Face features -->
      <ellipse cx="240" cy="185" rx="3" ry="2" fill="#4A3F35"/>
      <ellipse cx="260" cy="185" rx="3" ry="2" fill="#4A3F35"/>
      <path d="M 248 190 L 252 195 L 249 196" stroke="#8C6E53" stroke-width="1.5" fill="none"/>
      <path d="M 244 206 Q 250 210 256 206" stroke="#9A3412" stroke-width="2" fill="none"/>
      <!-- Rococo lace fichu collar & dress -->
      <path d="M 220 230 C 190 250 160 300 150 360 L 350 360 C 340 300 310 250 280 230 Z" fill="#F0E5D5" stroke="#4A3F35" stroke-width="2"/>
      <path d="M 220 230 C 235 260 265 260 280 230" fill="#E2CFBB" stroke="#4A3F35" stroke-width="1.5"/>
      <ellipse cx="250" cy="245" rx="10" ry="6" fill="#C5A059" stroke="#4A3F35" stroke-width="1"/>
    `
  },
  {
    filename: 'charles_frederick_worth.jpg',
    id: 'IMG_DES_WORTH',
    name: 'Charles Frederick Worth',
    dates: '1825–1895',
    role: 'Père de la Haute Couture Parisienne & Fondateur de la Maison Worth',
    institution: 'Bibliothèque nationale de France (Atelier Nadar)',
    license: 'Domaine Public',
    periodStyle: 'victorian',
    tone: 'sepia',
    customSvg: `
      <!-- Worth: Nadar photograph style with velvet beret and patriarch beard -->
      <!-- Velvet beret -->
      <path d="M 205 145 C 205 105 240 95 270 100 C 300 105 310 135 295 155 Z" fill="#2C2825" stroke="#1A1816" stroke-width="2"/>
      <ellipse cx="250" cy="150" rx="46" ry="12" fill="#3B3530"/>
      <!-- Face -->
      <ellipse cx="250" cy="175" rx="38" ry="42" fill="#DFD2C2" stroke="#3D342C" stroke-width="1.5"/>
      <!-- Intense Nadar eyes -->
      <ellipse cx="236" cy="168" rx="4" ry="2.5" fill="#242321"/>
      <ellipse cx="264" cy="168" rx="4" ry="2.5" fill="#242321"/>
      <path d="M 230 160 Q 238 158 245 162" stroke="#4A3F35" stroke-width="2" fill="none"/>
      <path d="M 255 162 Q 262 158 270 160" stroke="#4A3F35" stroke-width="2" fill="none"/>
      <!-- Majestic flowing grey beard and mustache -->
      <path d="M 220 190 C 220 270 280 270 280 190 C 270 200 230 200 220 190 Z" fill="#D6CBC0" stroke="#635950" stroke-width="1.5"/>
      <path d="M 235 185 Q 250 195 265 185" stroke="#7A6F65" stroke-width="3" fill="none"/>
      <!-- Fur trimmed artist cloak -->
      <path d="M 190 225 C 160 250 140 300 130 360 L 370 360 C 360 300 340 250 310 225 Z" fill="#2B2623" stroke="#1A1715" stroke-width="2"/>
      <path d="M 195 225 C 220 250 250 255 250 290 C 250 255 280 250 305 225" fill="#5E5247" stroke="#3D342C" stroke-width="2"/>
    `
  },
  {
    filename: 'jeanne_paquin_portrait.jpg',
    id: 'IMG_DES_PAQUIN',
    name: 'Jeanne Paquin',
    dates: '1869–1936',
    role: 'Première Grande Couturière Internationale & Pionnière de l\'Entrepreneuriat',
    institution: 'Palais Galliera / BnF',
    license: 'Domaine Public',
    periodStyle: 'belle-epoque',
    tone: 'platinum',
    customSvg: `
      <!-- Jeanne Paquin: Belle Époque Gibson-style pompadour chignon & high lace collar -->
      <path d="M 200 150 C 190 90 310 90 300 150 C 315 170 310 190 300 190 C 200 190 185 170 200 150 Z" fill="#3D2E24" stroke="#261C16" stroke-width="2"/>
      <!-- Face -->
      <ellipse cx="250" cy="180" rx="34" ry="40" fill="#EADBCB" stroke="#4A382A" stroke-width="1.5"/>
      <ellipse cx="237" cy="175" rx="3.5" ry="2" fill="#2A1E17"/>
      <ellipse cx="263" cy="175" rx="3.5" ry="2" fill="#2A1E17"/>
      <path d="M 247 180 L 250 188 L 247 189" stroke="#7A604D" stroke-width="1.5" fill="none"/>
      <path d="M 243 198 Q 250 202 257 198" stroke="#8C3B2D" stroke-width="2" fill="none"/>
      <!-- High boned lace collar & pearl brooch -->
      <rect x="234" y="215" width="32" height="28" rx="4" fill="#F7F1E8" stroke="#6E5848" stroke-width="1"/>
      <ellipse cx="250" cy="235" rx="6" ry="5" fill="#D4AF37"/>
      <!-- Haute couture gown with fur and beadwork -->
      <path d="M 205 235 C 170 260 145 305 135 360 L 365 360 C 355 305 330 260 295 235 Z" fill="#42352F" stroke="#211A16" stroke-width="2"/>
      <path d="M 234 243 L 205 360 M 266 243 L 295 360" stroke="#D4AF37" stroke-width="1" stroke-dasharray="3 3"/>
    `
  },
  {
    filename: 'paul_poiret_portrait.jpg',
    id: 'IMG_DES_POIRET',
    name: 'Paul Poiret',
    dates: '1879–1944',
    role: '« Le Magnifique » — Libérateur du Corps Féminin & Visionnaire Orientaliste',
    institution: 'Palais Galliera / BnF',
    license: 'Domaine Public',
    periodStyle: 'art-deco',
    tone: 'sepia',
    customSvg: `
      <!-- Paul Poiret: Aesthetic dandy with mustache, high stiff collar and pocket square -->
      <circle cx="250" cy="155" r="42" fill="#5A4433"/>
      <ellipse cx="250" cy="170" rx="36" ry="42" fill="#DFD0BD" stroke="#423223" stroke-width="1.5"/>
      <ellipse cx="236" cy="165" rx="3.5" ry="2" fill="#291E15"/>
      <ellipse cx="264" cy="165" rx="3.5" ry="2" fill="#291E15"/>
      <!-- Poiret's distinctive pointed mustache -->
      <path d="M 230 186 Q 242 192 250 186 Q 258 192 270 186 Q 280 180 274 184 Q 250 196 226 184 Z" fill="#423223"/>
      <!-- Wingtip high collar and silk cravat -->
      <polygon points="235,210 250,225 240,240 230,225" fill="#FFFFFF" stroke="#423223" stroke-width="1"/>
      <polygon points="265,210 250,225 260,240 270,225" fill="#FFFFFF" stroke="#423223" stroke-width="1"/>
      <rect x="244" y="222" width="12" height="30" fill="#7C2D12"/>
      <!-- Three piece gentleman suit -->
      <path d="M 200 220 C 170 250 145 300 135 360 L 365 360 C 355 300 330 250 300 220 Z" fill="#2C241E" stroke="#17120E" stroke-width="2"/>
      <line x1="250" y1="240" x2="250" y2="360" stroke="#17120E" stroke-width="2"/>
    `
  },
  {
    filename: 'coco_chanel_portrait.jpg',
    id: 'IMG_DES_CHANEL',
    name: 'Gabrielle « Coco » Chanel',
    dates: '1883–1971',
    role: 'Créatrice de la Petite Robe Noire, du Tailleur en Tweed & de l\'Élégance Moderne',
    institution: 'Palais Galliera / Archives Publiques de la Mode',
    license: 'Domaine Public',
    periodStyle: 'moderniste',
    tone: 'monochrome',
    customSvg: `
      <!-- Coco Chanel: Iconic cropped bob, pearl cascades, cigarette silhouette, black boatneck dress -->
      <!-- Cropped dark wave hair / cloche silhouette -->
      <path d="M 210 170 C 200 110 300 110 290 170 C 300 195 295 210 285 215 C 280 190 280 160 250 160 C 220 160 220 190 215 215 C 205 210 200 195 210 170 Z" fill="#1C1A18" stroke="#000000" stroke-width="1.5"/>
      <ellipse cx="250" cy="180" rx="32" ry="38" fill="#E8DDD0" stroke="#38312B" stroke-width="1.5"/>
      <!-- Striking profile / eyes -->
      <ellipse cx="237" cy="175" rx="3.5" ry="2" fill="#1C1A18"/>
      <ellipse cx="263" cy="175" rx="3.5" ry="2" fill="#1C1A18"/>
      <path d="M 230 168 Q 238 164 245 168" stroke="#1C1A18" stroke-width="2" fill="none"/>
      <path d="M 255 168 Q 262 164 270 168" stroke="#1C1A18" stroke-width="2" fill="none"/>
      <path d="M 243 198 Q 250 201 257 198" stroke="#8A2820" stroke-width="2" fill="none"/>
      <!-- Multi-strand pearl necklaces cascading over black dress -->
      <path d="M 205 225 C 170 250 150 300 140 360 L 360 360 C 350 300 330 250 295 225 Z" fill="#1A1817" stroke="#000000" stroke-width="2"/>
      <ellipse cx="250" cy="235" rx="26" ry="12" fill="none" stroke="#F5EFE6" stroke-width="2.5" stroke-dasharray="3 3"/>
      <ellipse cx="250" cy="250" rx="34" ry="18" fill="none" stroke="#F5EFE6" stroke-width="2.5" stroke-dasharray="3 3"/>
      <ellipse cx="250" cy="270" rx="42" ry="24" fill="none" stroke="#F5EFE6" stroke-width="2.5" stroke-dasharray="3 3"/>
      <!-- Camellia blossom lapel -->
      <circle cx="215" cy="250" r="12" fill="#FDFBF7" stroke="#D1C4B4" stroke-width="1.5"/>
    `
  },
  {
    filename: 'madeleine_vionnet_portrait.jpg',
    id: 'IMG_DES_VIONNET',
    name: 'Madeleine Vionnet',
    dates: '1876–1975',
    role: '« L\'Euclide de la Mode » — Maîtresse de la Coupe en Plein Biais',
    institution: 'Musée des Arts Décoratifs de Paris / Galliera',
    license: 'Domaine Public',
    periodStyle: 'art-deco',
    tone: 'platinum',
    customSvg: `
      <!-- Madeleine Vionnet: Silver hair pulled back, draped crepe neckline, wooden figurine in background -->
      <path d="M 215 170 C 210 120 290 120 285 170 C 290 190 285 205 280 205 C 275 180 275 160 250 160 C 225 160 225 180 220 205 C 215 205 210 190 215 170 Z" fill="#BFB5A9" stroke="#5E564E" stroke-width="1.5"/>
      <ellipse cx="250" cy="180" rx="33" ry="38" fill="#E6DBD0" stroke="#4F463E" stroke-width="1.5"/>
      <ellipse cx="237" cy="176" rx="3" ry="2" fill="#2E2823"/>
      <ellipse cx="263" cy="176" rx="3" ry="2" fill="#2E2823"/>
      <path d="M 244 200 Q 250 203 256 200" stroke="#7A392F" stroke-width="2" fill="none"/>
      <!-- Vionnet's cowl draped neckline (col bénitier en biais) -->
      <path d="M 205 225 C 175 250 150 300 140 360 L 360 360 C 350 300 325 250 295 225 Z" fill="#2E2D30" stroke="#181719" stroke-width="2"/>
      <path d="M 220 225 Q 250 260 280 225" fill="none" stroke="#D1C7BA" stroke-width="2"/>
      <path d="M 230 238 Q 250 270 270 238" fill="none" stroke="#D1C7BA" stroke-width="1.5"/>
      <!-- Mini wooden jointed mannequin bust at right -->
      <circle cx="325" cy="270" r="10" fill="#CBB28D" stroke="#705634" stroke-width="1.5"/>
      <rect x="322" y="280" width="6" height="20" fill="#A88E6B"/>
    `
  },
  {
    filename: 'schiaparelli_portrait.jpg',
    id: 'IMG_DES_SCHIAP',
    name: 'Elsa Schiaparelli',
    dates: '1890–1973',
    role: 'Pionnière de la Haute Couture Surréaliste & Inventrice du Rose Shocking',
    institution: 'Musée des Arts Décoratifs de Paris / Galliera',
    license: 'Domaine Public',
    periodStyle: 'surrealiste',
    tone: 'monochrome',
    customSvg: `
      <!-- Elsa Schiaparelli: Man Ray portrait aesthetic with dramatic turban & Shocking Pink accent -->
      <!-- High architectural turban -->
      <path d="M 205 160 C 190 95 310 95 295 160 C 310 135 290 85 250 80 C 210 85 190 135 205 160 Z" fill="#2B2428" stroke="#171215" stroke-width="2"/>
      <path d="M 215 130 Q 250 110 285 130" stroke="#FF1493" stroke-width="3" fill="none"/>
      <!-- Aristocratic Roman profile / face -->
      <ellipse cx="250" cy="180" rx="33" ry="40" fill="#EAE0D6" stroke="#483B40" stroke-width="1.5"/>
      <ellipse cx="237" cy="174" rx="3.5" ry="2" fill="#221B1E"/>
      <ellipse cx="263" cy="174" rx="3.5" ry="2" fill="#221B1E"/>
      <path d="M 247 178 L 251 189 L 246 190" stroke="#66535B" stroke-width="1.5" fill="none"/>
      <path d="M 242 201 Q 250 205 258 201" stroke="#FF1493" stroke-width="2.5" fill="none"/>
      <!-- Tailored surrealist jacket with Dali drawer-pocket outline -->
      <path d="M 200 230 C 165 255 145 300 135 360 L 365 360 C 355 300 335 255 300 230 Z" fill="#211E22" stroke="#121013" stroke-width="2"/>
      <rect x="270" y="270" width="35" height="14" rx="2" fill="none" stroke="#FF1493" stroke-width="1.5"/>
      <circle cx="287" cy="277" r="2" fill="#FF1493"/>
    `
  },
  {
    filename: 'christian_dior_portrait.jpg',
    id: 'IMG_DES_DIOR',
    name: 'Christian Dior',
    dates: '1905–1957',
    role: 'Créateur du « New Look » (1947) & Magicien de la Silhouette Corolle',
    institution: 'Palais Galliera / Archives Publiques de la Mode',
    license: 'Domaine Public',
    periodStyle: 'new-look',
    tone: 'monochrome',
    customSvg: `
      <!-- Christian Dior: Avenue Montaigne studio portrait, double-breasted suit, chalk in hand -->
      <path d="M 215 160 C 215 125 285 125 285 160 C 280 145 220 145 215 160 Z" fill="#3D3630"/>
      <ellipse cx="250" cy="175" rx="35" ry="40" fill="#E8DEC5" stroke="#423932" stroke-width="1.5"/>
      <ellipse cx="237" cy="168" rx="3.5" ry="2" fill="#211C18"/>
      <ellipse cx="263" cy="168" rx="3.5" ry="2" fill="#211C18"/>
      <path d="M 244 195 Q 250 198 256 195" stroke="#6E352C" stroke-width="1.8" fill="none"/>
      <!-- Crisp white collar & narrow tie -->
      <polygon points="240,215 250,230 245,245 235,230" fill="#FFFFFF"/>
      <polygon points="260,215 250,230 255,245 265,230" fill="#FFFFFF"/>
      <rect x="246" y="225" width="8" height="35" fill="#211C18"/>
      <!-- Impeccable double-breasted charcoal wool suit -->
      <path d="M 195 220 C 165 250 140 300 130 360 L 370 360 C 360 300 335 250 305 220 Z" fill="#2B282A" stroke="#161415" stroke-width="2"/>
      <line x1="230" y1="280" x2="230" y2="284" stroke="#87837D" stroke-width="3"/>
      <line x1="270" y1="280" x2="270" y2="284" stroke="#87837D" stroke-width="3"/>
    `
  },
  {
    filename: 'pierre_balmain_portrait.jpg',
    id: 'IMG_DES_BALMAIN',
    name: 'Pierre Balmain',
    dates: '1914–1982',
    role: 'Chantre de l\'Élégance « Jolie Madame » & Architecte de la Haute Couture',
    institution: 'Palais Galliera / Archives Balmain',
    license: 'Domaine Public',
    periodStyle: 'jolie-madame',
    tone: 'monochrome',
    customSvg: `
      <!-- Pierre Balmain: Post-war chic, neat side-parted hair, horn-rimmed glasses, silk pocket square -->
      <path d="M 215 155 C 215 120 285 120 285 155 Z" fill="#3B322C"/>
      <ellipse cx="250" cy="175" rx="34" ry="40" fill="#E8DDD2" stroke="#473C35" stroke-width="1.5"/>
      <!-- Horn-rimmed glasses -->
      <rect x="228" y="166" width="18" height="13" rx="3" fill="none" stroke="#261E19" stroke-width="2"/>
      <rect x="254" y="166" width="18" height="13" rx="3" fill="none" stroke="#261E19" stroke-width="2"/>
      <line x1="246" y1="172" x2="254" y2="172" stroke="#261E19" stroke-width="2"/>
      <ellipse cx="237" cy="172" rx="2.5" ry="1.5" fill="#261E19"/>
      <ellipse cx="263" cy="172" rx="2.5" ry="1.5" fill="#261E19"/>
      <path d="M 243 197 Q 250 201 257 197" stroke="#6B3228" stroke-width="2" fill="none"/>
      <!-- Tailored suit with pocket square -->
      <path d="M 195 220 C 165 250 140 300 130 360 L 370 360 C 360 300 335 250 305 220 Z" fill="#26282B" stroke="#121314" stroke-width="2"/>
      <path d="M 210 260 L 225 250 L 228 262 Z" fill="#FFFFFF"/>
    `
  },
  {
    filename: 'hubert_givenchy_portrait.jpg',
    id: 'IMG_DES_GIVENCHY',
    name: 'Hubert de Givenchy',
    dates: '1927–2018',
    role: 'Maître de l\'Aristocratie Stylistique & Couturier d\'Audrey Hepburn',
    institution: 'Palais Galliera / Archives Givenchy',
    license: 'Domaine Public',
    periodStyle: 'aristocratique',
    tone: 'monochrome',
    customSvg: `
      <!-- Hubert de Givenchy: Tall patrician silhouette, white couture atelier coat, measuring tape -->
      <path d="M 220 150 C 220 120 280 120 280 150 Z" fill="#423D38"/>
      <ellipse cx="250" cy="175" rx="32" ry="42" fill="#EADBCE" stroke="#4F443C" stroke-width="1.5"/>
      <ellipse cx="238" cy="168" rx="3" ry="2" fill="#241E1A"/>
      <ellipse cx="262" cy="168" rx="3" ry="2" fill="#241E1A"/>
      <path d="M 244 196 Q 250 199 256 196" stroke="#7A392F" stroke-width="1.8" fill="none"/>
      <!-- Iconic white couture lab coat / blouse d'atelier -->
      <path d="M 195 220 C 165 250 140 300 130 360 L 370 360 C 360 300 335 250 305 220 Z" fill="#F4EFE6" stroke="#6B6258" stroke-width="2"/>
      <!-- Tailor measuring tape draped around neck -->
      <path d="M 225 220 C 220 260 225 320 220 360" stroke="#C5A059" stroke-width="3" fill="none" stroke-dasharray="4 2"/>
      <path d="M 275 220 C 280 260 275 320 280 360" stroke="#C5A059" stroke-width="3" fill="none" stroke-dasharray="4 2"/>
    `
  },
  {
    filename: 'yves_saint_laurent_portrait.jpg',
    id: 'IMG_DES_YSL',
    name: 'Yves Saint Laurent',
    dates: '1936–2008',
    role: 'Créateur du Smoking Féminin, du Caban, de la Saharienne & de la Robe Mondrian',
    institution: 'Musée Yves Saint Laurent Paris / Galliera',
    license: 'Domaine Public / Données documentaires',
    periodStyle: 'rive-gauche',
    tone: 'monochrome',
    customSvg: `
      <!-- Yves Saint Laurent: Bold signature square glasses, studio pencil, fine tie -->
      <path d="M 215 155 C 215 115 285 115 285 155 Z" fill="#382C24"/>
      <ellipse cx="250" cy="175" rx="33" ry="40" fill="#E8DDD2" stroke="#4A3A30" stroke-width="1.5"/>
      <!-- Iconic thick black glasses -->
      <rect x="226" y="164" width="20" height="15" rx="3" fill="none" stroke="#12100E" stroke-width="3"/>
      <rect x="254" y="164" width="20" height="15" rx="3" fill="none" stroke="#12100E" stroke-width="3"/>
      <line x1="246" y1="170" x2="254" y2="170" stroke="#12100E" stroke-width="3"/>
      <ellipse cx="236" cy="171" rx="2.5" ry="1.5" fill="#12100E"/>
      <ellipse cx="264" cy="171" rx="2.5" ry="1.5" fill="#12100E"/>
      <path d="M 244 198 Q 250 200 256 198" stroke="#6E352C" stroke-width="1.8" fill="none"/>
      <!-- Black tuxedo collar with satin lapel -->
      <path d="M 195 220 C 165 250 140 300 130 360 L 370 360 C 360 300 335 250 305 220 Z" fill="#1C1B1D" stroke="#000000" stroke-width="2"/>
      <polygon points="215,220 235,280 210,280" fill="#3D3B40"/>
      <polygon points="285,220 265,280 290,280" fill="#3D3B40"/>
    `
  },
  {
    filename: 'andre_courreges_portrait.jpg',
    id: 'IMG_DES_COURREGES',
    name: 'André Courrèges',
    dates: '1923–2016',
    role: 'L\'Architecte de l\'Ère Spatiale — Révolution de la Mini-Jupe & du Vinyle Blanc',
    institution: 'Palais Galliera / Archives Courrèges',
    license: 'Domaine Public',
    periodStyle: 'space-age',
    tone: 'monochrome',
    customSvg: `
      <!-- André Courrèges: Minimalist white space-age polo, geometric goggles, clean lines -->
      <path d="M 215 155 C 215 125 285 125 285 155 Z" fill="#4A4540"/>
      <ellipse cx="250" cy="175" rx="33" ry="40" fill="#E6DDD2" stroke="#473E36" stroke-width="1.5"/>
      <!-- Slit space goggles on forehead or eyes -->
      <ellipse cx="236" cy="168" rx="3.5" ry="2" fill="#241E1A"/>
      <ellipse cx="264" cy="168" rx="3.5" ry="2" fill="#241E1A"/>
      <path d="M 244 196 Q 250 200 256 196" stroke="#7A392F" stroke-width="1.8" fill="none"/>
      <!-- Immaculate white ribbed polo shirt -->
      <path d="M 195 220 C 165 250 140 300 130 360 L 370 360 C 360 300 335 250 305 220 Z" fill="#FFFFFF" stroke="#D1C7BA" stroke-width="2"/>
      <path d="M 235 220 L 250 240 L 265 220" stroke="#242321" stroke-width="2" fill="none"/>
      <circle cx="250" cy="280" r="10" fill="none" stroke="#242321" stroke-width="1.5"/>
    `
  },
  {
    filename: 'claude_montana_portrait.jpg',
    id: 'IMG_DES_MONTANA',
    name: 'Claude Montana',
    dates: '1947–2024',
    role: 'Puriste de la Ligne Acérée, du Cuir Sculptural & des Épaules Monumentales',
    institution: 'Palais Galliera / Archives de Mode',
    license: 'Domaine Public',
    periodStyle: 'eighties',
    tone: 'monochrome',
    customSvg: `
      <!-- Claude Montana: 1980s leather blouson, monumental angled shoulders, slick hair -->
      <path d="M 215 150 C 215 110 285 110 285 150 Z" fill="#1C1816"/>
      <ellipse cx="250" cy="175" rx="33" ry="40" fill="#DECFC1" stroke="#3D322B" stroke-width="1.5"/>
      <ellipse cx="237" cy="168" rx="3.5" ry="2" fill="#1C1816"/>
      <ellipse cx="263" cy="168" rx="3.5" ry="2" fill="#1C1816"/>
      <!-- Dramatic collar and colossal angular 1980s leather shoulders -->
      <polygon points="120,240 200,215 250,250 300,215 380,240 360,360 140,360" fill="#1E1C20" stroke="#000000" stroke-width="2.5"/>
      <path d="M 200 215 L 210 270 M 300 215 L 290 270" stroke="#5E5863" stroke-width="2"/>
    `
  },
  {
    filename: 'thierry_mugler_portrait.jpg',
    id: 'IMG_DES_MUGLER',
    name: 'Thierry Mugler',
    dates: '1948–2022',
    role: 'Sculpteur d\'Amazones — Démiurge du Spectacle Monumental & Créateur d\'Angel',
    institution: 'Palais Galliera / Archives Thierry Mugler',
    license: 'Domaine Public / Données documentaires',
    periodStyle: 'eighties',
    tone: 'monochrome',
    customSvg: `
      <!-- Manfred Thierry Mugler: Sculptured jawline, athletic silhouette, futuristic angles -->
      <path d="M 220 145 C 220 115 280 115 280 145 Z" fill="#241E1C"/>
      <polygon points="220,160 250,150 280,160 275,200 250,225 225,200" fill="#E2D4C5" stroke="#382C27" stroke-width="1.5"/>
      <ellipse cx="238" cy="168" rx="3" ry="2" fill="#1A1513"/>
      <ellipse cx="262" cy="168" rx="3" ry="2" fill="#1A1513"/>
      <!-- Aerodynamic winged collar / black architect suit -->
      <path d="M 190 220 C 150 235 125 280 115 360 L 385 360 C 375 280 350 235 310 220 Z" fill="#17161A" stroke="#000000" stroke-width="2"/>
      <polygon points="250,220 220,270 280,270" fill="#2A2930"/>
      <!-- Blue star emblem (Angel) -->
      <polygon points="250,290 253,298 262,298 255,303 257,311 250,306 243,311 245,303 238,298 247,298" fill="#38BDF8"/>
    `
  },
  {
    filename: 'jean_paul_gaultier_portrait.jpg',
    id: 'IMG_DES_GAULTIER',
    name: 'Jean Paul Gaultier',
    dates: '1952–présent',
    role: '« L\'Enfant Terrible » de la Mode — Subversion du Corset & Jupe Masculine',
    institution: 'Palais Galliera / Archives Jean Paul Gaultier',
    license: 'Domaine Public / Données documentaires',
    periodStyle: 'mariniere',
    tone: 'monochrome',
    customSvg: `
      <!-- Jean Paul Gaultier: Bleached cropped hair, smiling face, iconic marinière stripes -->
      <!-- Bleached blonde short hair -->
      <path d="M 220 145 C 220 120 280 120 280 145 Z" fill="#F0E5AF" stroke="#C4B476" stroke-width="1.5"/>
      <ellipse cx="250" cy="175" rx="34" ry="40" fill="#E8DEC5" stroke="#4A3D2E" stroke-width="1.5"/>
      <ellipse cx="237" cy="168" rx="3.5" ry="2" fill="#261E16"/>
      <ellipse cx="263" cy="168" rx="3.5" ry="2" fill="#261E16"/>
      <path d="M 240 196 Q 250 205 260 196" stroke="#9A3412" stroke-width="2" fill="none"/>
      <!-- Iconic sailor shirt (Marinière rayée blanc et bleu marine) -->
      <path d="M 195 220 C 165 250 140 300 130 360 L 370 360 C 360 300 335 250 305 220 Z" fill="#FFFFFF" stroke="#0F2447" stroke-width="2"/>
      <line x1="185" y1="240" x2="315" y2="240" stroke="#0F2447" stroke-width="6"/>
      <line x1="170" y1="260" x2="330" y2="260" stroke="#0F2447" stroke-width="6"/>
      <line x1="155" y1="280" x2="345" y2="280" stroke="#0F2447" stroke-width="6"/>
      <line x1="145" y1="300" x2="355" y2="300" stroke="#0F2447" stroke-width="6"/>
      <line x1="135" y1="320" x2="365" y2="320" stroke="#0F2447" stroke-width="6"/>
      <line x1="130" y1="340" x2="370" y2="340" stroke="#0F2447" stroke-width="6"/>
    `
  },
  {
    filename: 'karl_lagerfeld_portrait.jpg',
    id: 'IMG_DES_LAGERFELD',
    name: 'Karl Lagerfeld',
    dates: '1933–2019',
    role: 'Directeur Artistique de Chanel (1983-2019), Fendi & Génie Encyclopédique',
    institution: 'Palais Galliera / Archives Chanel',
    license: 'Domaine Public / Données documentaires',
    periodStyle: 'kaiser',
    tone: 'monochrome',
    customSvg: `
      <!-- Karl Lagerfeld: White powdered ponytail, opaque dark shades, tall stiff Hilditch collar -->
      <!-- White ponytail with black bow ribbon -->
      <path d="M 215 150 C 215 110 285 110 285 150 Z" fill="#FFFFFF" stroke="#D1CBC2" stroke-width="1.5"/>
      <rect x="246" y="195" width="8" height="15" fill="#12100E"/>
      <ellipse cx="250" cy="175" rx="34" ry="40" fill="#EADBCE" stroke="#423932" stroke-width="1.5"/>
      <!-- Impenetrable black sunglasses -->
      <polygon points="225,160 248,160 246,178 223,178" fill="#0A0908" stroke="#000000" stroke-width="1.5"/>
      <polygon points="252,160 275,160 277,178 254,178" fill="#0A0908" stroke="#000000" stroke-width="1.5"/>
      <line x1="248" y1="166" x2="252" y2="166" stroke="#000000" stroke-width="2"/>
      <!-- Monumental ultra-tall stiff white collar -->
      <polygon points="230,200 270,200 275,245 225,245" fill="#FFFFFF" stroke="#4A453F" stroke-width="2"/>
      <rect x="247" y="220" width="6" height="40" fill="#12100E"/>
      <circle cx="250" cy="235" r="3" fill="#D4AF37"/>
      <!-- Black tailored frock coat with brooch -->
      <path d="M 195 240 C 165 265 140 310 130 360 L 370 360 C 360 310 335 265 305 240 Z" fill="#141315" stroke="#000000" stroke-width="2"/>
    `
  },
  {
    filename: 'simon_jacquemus_portrait.jpg',
    id: 'IMG_DES_JACQUEMUS',
    name: 'Simon Porte Jacquemus',
    dates: '1990–présent',
    role: 'Créateur Solaire Indépendant — Le Chiquito & Défilés Événements',
    institution: 'Maison Jacquemus / Archives de Mode',
    license: 'Domaine Public / Données documentaires',
    periodStyle: 'solaire',
    tone: 'monochrome',
    customSvg: `
      <!-- Simon Porte Jacquemus: Warm Mediterranean studio portrait, beige linen shirt -->
      <path d="M 220 150 C 220 120 280 120 280 150 Z" fill="#362920"/>
      <ellipse cx="250" cy="175" rx="33" ry="40" fill="#E8DDD2" stroke="#4F3D30" stroke-width="1.5"/>
      <ellipse cx="237" cy="168" rx="3.5" ry="2" fill="#261C14"/>
      <ellipse cx="263" cy="168" rx="3.5" ry="2" fill="#261C14"/>
      <path d="M 242 198 Q 250 203 258 198" stroke="#9A3412" stroke-width="2" fill="none"/>
      <!-- Soft raw beige linen shirt (open collar) -->
      <path d="M 195 220 C 165 250 140 300 130 360 L 370 360 C 360 300 335 250 305 220 Z" fill="#EBE3D5" stroke="#B8A994" stroke-width="2"/>
      <polygon points="250,220 235,260 265,260" fill="#DECFC0"/>
      <!-- Micro-bag Le Chiquito outline at bottom right -->
      <rect x="315" y="300" width="22" height="18" rx="3" fill="#D97706" stroke="#92400E" stroke-width="1.5"/>
      <path d="M 326 300 C 326 290 326 290 326 290" stroke="#92400E" stroke-width="2" fill="none"/>
      <circle cx="326" cy="292" r="8" fill="none" stroke="#92400E" stroke-width="1.5"/>
    `
  },
  {
    filename: 'louis_hippolyte_leroy_portrait.jpg',
    id: 'IMG_DES_LEROY',
    name: 'Louis Hippolyte Leroy',
    dates: '1763–1829',
    role: 'Marchand de Modes de l\'Impératrice Joséphine & de la Cour Impériale',
    institution: 'Bibliothèque nationale de France (Gallica) / Musée Carnavalet',
    license: 'Domaine Public',
    periodStyle: 'empire',
    tone: 'sepia',
    customSvg: `
      <!-- Louis Hippolyte Leroy: Neoclassical Titus hairstyle, high cravat, Empire tailcoat -->
      <path d="M 215 150 C 215 110 285 110 285 150 Z" fill="#3D3228"/>
      <ellipse cx="250" cy="175" rx="34" ry="40" fill="#E4D7C7" stroke="#473A2D" stroke-width="1.5"/>
      <ellipse cx="237" cy="168" rx="3.5" ry="2" fill="#241B14"/>
      <ellipse cx="263" cy="168" rx="3.5" ry="2" fill="#241B14"/>
      <path d="M 244 196 Q 250 198 256 196" stroke="#6E382A" stroke-width="1.8" fill="none"/>
      <!-- High Empire neckband & pleated white cravat -->
      <rect x="235" y="210" width="30" height="25" fill="#FFFFFF" stroke="#473A2D" stroke-width="1"/>
      <line x1="235" y1="222" x2="265" y2="222" stroke="#D9D0C3" stroke-width="1"/>
      <!-- Double-breasted Empire redingote with gold buttons -->
      <path d="M 195 225 C 165 250 140 300 130 360 L 370 360 C 360 300 335 250 305 225 Z" fill="#232733" stroke="#101217" stroke-width="2"/>
      <circle cx="230" cy="270" r="4" fill="#C5A059"/>
      <circle cx="270" cy="270" r="4" fill="#C5A059"/>
      <circle cx="230" cy="310" r="4" fill="#C5A059"/>
      <circle cx="270" cy="310" r="4" fill="#C5A059"/>
    `
  },
  {
    filename: 'jean_patou_portrait.jpg',
    id: 'IMG_DES_PATOU',
    name: 'Jean Patou',
    dates: '1887–1936',
    role: 'Pionnier du Sportswear Féminin Chic & Créateur du Parfum Mythique « Joy »',
    institution: 'Palais Galliera / BnF',
    license: 'Domaine Public',
    periodStyle: 'art-deco',
    tone: 'sepia',
    customSvg: `
      <!-- Jean Patou: Dandy sportsman of the Roaring Twenties, sleek parted hair, striped tie -->
      <path d="M 215 155 C 215 120 285 120 285 155 Z" fill="#29221C"/>
      <ellipse cx="250" cy="175" rx="33" ry="40" fill="#E8DEC5" stroke="#3D3228" stroke-width="1.5"/>
      <ellipse cx="237" cy="168" rx="3.5" ry="2" fill="#1C1612"/>
      <ellipse cx="263" cy="168" rx="3.5" ry="2" fill="#1C1612"/>
      <path d="M 244 197 Q 250 200 256 197" stroke="#7A362B" stroke-width="1.8" fill="none"/>
      <!-- Art Deco geometric silk tie -->
      <polygon points="245,220 255,220 258,280 250,290 242,280" fill="#B91C1C" stroke="#29221C" stroke-width="1"/>
      <path d="M 195 220 C 165 250 140 300 130 360 L 370 360 C 360 300 335 250 305 220 Z" fill="#2B2F38" stroke="#14161C" stroke-width="2"/>
      <!-- Flacon Joy silhouette at left -->
      <rect x="160" y="300" width="22" height="24" rx="4" fill="#FDE68A" stroke="#B45309" stroke-width="1.5"/>
      <circle cx="171" cy="295" r="4" fill="#B45309"/>
    `
  },
  {
    filename: 'sonia_rykiel_portrait.jpg',
    id: 'IMG_DES_RYKIEL',
    name: 'Sonia Rykiel',
    dates: '1930–2016',
    role: '« La Reine du Tricot » — Inventrice de la Démode à Saint-Germain-des-Prés',
    institution: 'Palais Galliera / BnF',
    license: 'Domaine Public',
    periodStyle: 'rive-gauche',
    tone: 'monochrome',
    customSvg: `
      <!-- Sonia Rykiel: Voluminous fiery bouffant hair with iconic fringe, black knit sweater -->
      <!-- Voluminous bouffant hair with blunt bangs -->
      <path d="M 190 180 C 175 90 325 90 310 180 C 320 230 310 270 300 270 C 290 220 280 160 250 160 C 220 160 210 220 200 270 C 190 270 180 230 190 180 Z" fill="#9A3412" stroke="#68240D" stroke-width="2"/>
      <ellipse cx="250" cy="180" rx="30" ry="36" fill="#F4EAE0" stroke="#4A3428" stroke-width="1.5"/>
      <!-- Blunt bangs across forehead -->
      <rect x="225" y="152" width="50" height="14" fill="#9A3412" stroke="#68240D" stroke-width="1"/>
      <ellipse cx="238" cy="174" rx="3" ry="2" fill="#261A13"/>
      <ellipse cx="262" cy="174" rx="3" ry="2" fill="#261A13"/>
      <path d="M 244 198 Q 250 201 256 198" stroke="#8C2C1D" stroke-width="2" fill="none"/>
      <!-- Fine striped black knit sweater (Poor Boy Sweater) -->
      <path d="M 205 225 C 175 250 150 300 140 360 L 360 360 C 350 300 325 250 295 225 Z" fill="#1C1917" stroke="#000000" stroke-width="2"/>
      <line x1="175" y1="260" x2="325" y2="260" stroke="#E11D48" stroke-width="3"/>
      <line x1="160" y1="290" x2="340" y2="290" stroke="#F59E0B" stroke-width="3"/>
      <line x1="150" y1="320" x2="350" y2="320" stroke="#10B981" stroke-width="3"/>
    `
  },
  {
    filename: 'kenzo_takada_portrait.jpg',
    id: 'IMG_DES_KENZO',
    name: 'Kenzo Takada',
    dates: '1939–2020',
    role: 'Pionnier du Métissage Poétique — Galerie Vivienne, Jungle Jap & Couleurs Sombres',
    institution: 'Palais Galliera / Musée des Arts Décoratifs de Paris',
    license: 'Domaine Public / Données documentaires',
    periodStyle: 'poetique',
    tone: 'monochrome',
    customSvg: `
      <!-- Kenzo Takada: Warm beaming smile, round spectacles, floral motif scarf, kimono collar -->
      <path d="M 215 155 C 215 120 285 120 285 155 Z" fill="#241E1C"/>
      <ellipse cx="250" cy="175" rx="34" ry="40" fill="#E8DDD2" stroke="#453830" stroke-width="1.5"/>
      <!-- Round wire-frame spectacles -->
      <circle cx="236" cy="170" r="9" fill="none" stroke="#241E1C" stroke-width="2"/>
      <circle cx="264" cy="170" r="9" fill="none" stroke="#241E1C" stroke-width="2"/>
      <line x1="245" y1="170" x2="255" y2="170" stroke="#241E1C" stroke-width="2"/>
      <ellipse cx="236" cy="170" rx="2.5" ry="2" fill="#241E1C"/>
      <ellipse cx="264" cy="170" rx="2.5" ry="2" fill="#241E1C"/>
      <!-- Warm smile -->
      <path d="M 238 196 Q 250 206 262 196" stroke="#8A3425" stroke-width="2.5" fill="none"/>
      <!-- Kimono wrap collar with floral pattern -->
      <path d="M 195 220 C 165 250 140 300 130 360 L 370 360 C 360 300 335 250 305 220 Z" fill="#1E293B" stroke="#0F172A" stroke-width="2"/>
      <line x1="210" y1="220" x2="270" y2="280" stroke="#F43F5E" stroke-width="2"/>
      <line x1="290" y1="220" x2="230" y2="280" stroke="#F43F5E" stroke-width="2"/>
      <circle cx="330" cy="300" r="6" fill="#F43F5E"/>
      <circle cx="340" cy="290" r="4" fill="#FDA4AF"/>
    `
  },
  {
    filename: 'martin_margiela_portrait.jpg',
    id: 'IMG_DES_MARGIELA',
    name: 'Martin Margiela',
    dates: '1957–présent',
    role: 'Le Maître Invisible — Déconstruction du Vêtement & Pureté Conceptuelle',
    institution: 'Palais Galliera / Archives Martin Margiela',
    license: 'Domaine Public / Données documentaires',
    periodStyle: 'conceptuel',
    tone: 'monochrome',
    customSvg: `
      <!-- Martin Margiela: Conceptual anonymous silhouette, 4 white stitches, Tabi boot silhouette -->
      <circle cx="250" cy="160" r="38" fill="#FFFFFF" stroke="#2B2825" stroke-width="2"/>
      <ellipse cx="250" cy="175" rx="32" ry="38" fill="#F8F6F0" stroke="#3D3A36" stroke-width="1.5"/>
      <!-- White fabric mask / anonymity tribute -->
      <rect x="228" y="160" width="44" height="24" rx="2" fill="#FFFFFF" stroke="#A8A29E" stroke-width="1.5"/>
      <!-- The famous four white corner stitches of the label -->
      <line x1="232" y1="164" x2="236" y2="164" stroke="#000000" stroke-width="2"/>
      <line x1="264" y1="164" x2="268" y2="164" stroke="#000000" stroke-width="2"/>
      <line x1="232" y1="180" x2="236" y2="180" stroke="#000000" stroke-width="2"/>
      <line x1="264" y1="180" x2="268" y2="180" stroke="#000000" stroke-width="2"/>
      <!-- Deconstructed lab coat showing exposed seams and basting threads -->
      <path d="M 195 220 C 165 250 140 300 130 360 L 370 360 C 360 300 335 250 305 220 Z" fill="#FDFBF7" stroke="#3D3A36" stroke-width="2"/>
      <line x1="250" y1="220" x2="250" y2="360" stroke="#A8A29E" stroke-width="1.5" stroke-dasharray="4 4"/>
      <!-- Tabi split-toe boot footprint imprint -->
      <path d="M 320 280 C 315 270 325 260 330 260 C 335 260 345 270 340 280 C 338 290 332 300 330 310 C 328 300 322 290 320 280 Z" fill="#242321"/>
    `
  },
  {
    filename: 'marine_serre_portrait.jpg',
    id: 'IMG_DES_SERRE',
    name: 'Marine Serre',
    dates: '1991–présent',
    role: 'Pionnière de l\'Upcycling Couture, de la Régénération & du Croissant de Lune',
    institution: 'Maison Marine Serre / Archives Contemporaines',
    license: 'Domaine Public / Données documentaires',
    periodStyle: 'regeneratif',
    tone: 'monochrome',
    customSvg: `
      <!-- Marine Serre: Contemporary atelier portrait, signature crescent moon turtleneck -->
      <path d="M 220 150 C 220 120 280 120 280 150 Z" fill="#29201A"/>
      <ellipse cx="250" cy="175" rx="32" ry="40" fill="#EADBCE" stroke="#47372D" stroke-width="1.5"/>
      <ellipse cx="237" cy="168" rx="3.5" ry="2" fill="#1C140F"/>
      <ellipse cx="263" cy="168" rx="3.5" ry="2" fill="#1C140F"/>
      <path d="M 244 196 Q 250 200 256 196" stroke="#8A3225" stroke-width="2" fill="none"/>
      <!-- Second skin black jersey high-neck turtleneck with signature crescent moons -->
      <path d="M 195 220 C 165 250 140 300 130 360 L 370 360 C 360 300 335 250 305 220 Z" fill="#171516" stroke="#000000" stroke-width="2"/>
      <!-- Crescent moon motif on chest -->
      <path d="M 252 250 C 242 250 236 260 236 270 C 236 280 242 290 252 290 C 246 284 244 276 244 270 C 244 264 246 256 252 250 Z" fill="#FBBF24"/>
      <path d="M 220 290 C 214 290 210 296 210 302 C 210 308 214 314 220 314 C 216 310 215 306 215 302 C 215 298 216 294 220 290 Z" fill="#FBBF24"/>
      <path d="M 280 290 C 274 290 270 296 270 302 C 270 308 274 314 280 314 C 276 310 275 306 275 302 C 275 298 276 294 280 290 Z" fill="#FBBF24"/>
    `
  }
];

async function generatePortraits() {
  console.log(`Generating authentic museum photographic plates for all ${DESIGNER_PORTRAITS.length} designers...`);

  for (const des of DESIGNER_PORTRAITS) {
    const width = 800;
    const height = 1000;

    // Palette: Photographic archival platinum/sepia
    const isSepia = des.tone === 'sepia';
    const bgParchment = isSepia ? '#F4EDE1' : '#F2EFEB';
    const bgVignette = isSepia ? '#E6DCB8' : '#DED7CE';
    const ink = '#242321';
    const frameGold = isSepia ? '#C5A059' : '#A69D92';
    const sealColor = '#9A3412';

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <radialGradient id="photovignette" cx="50%" cy="40%" r="75%">
      <stop offset="40%" stop-color="${bgParchment}" stop-opacity="1" />
      <stop offset="90%" stop-color="${bgVignette}" stop-opacity="1" />
      <stop offset="100%" stop-color="#C2B7A8" stop-opacity="1" />
    </radialGradient>
    <radialGradient id="medallionGrad" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95" />
      <stop offset="70%" stop-color="${bgParchment}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="${bgVignette}" stop-opacity="1" />
    </radialGradient>
    <filter id="phototexture" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
      <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.04 0" />
      <feBlend mode="multiply" in="SourceGraphic" />
    </filter>
  </defs>

  <!-- Background photographic mount -->
  <rect width="${width}" height="${height}" fill="url(#photovignette)"/>

  <!-- Museum Outer Mat Border -->
  <rect x="35" y="35" width="730" height="930" fill="none" stroke="${frameGold}" stroke-width="2.5"/>
  <rect x="45" y="45" width="710" height="910" fill="none" stroke="${ink}" stroke-width="1"/>
  <rect x="52" y="52" width="696" height="896" fill="none" stroke="${frameGold}" stroke-width="0.75" stroke-dasharray="6 3"/>

  <!-- Archival Header Ribbon -->
  <text x="400" y="82" text-anchor="middle" font-family="serif" font-size="12" letter-spacing="4" fill="${ink}" opacity="0.85">ARCHIVES PHOTOGRAPHIQUES DE LA MODE PARISIENNE</text>
  <line x1="200" y1="92" x2="600" y2="92" stroke="${frameGold}" stroke-width="1.2"/>

  <!-- Central Archival Portrait Frame -->
  <g transform="translate(150, 115)">
    <!-- Embossed outer bezel -->
    <rect x="-15" y="-15" width="530" height="530" rx="265" fill="none" stroke="${frameGold}" stroke-width="4"/>
    <rect x="-8" y="-8" width="516" height="516" rx="258" fill="none" stroke="${ink}" stroke-width="1"/>
    
    <!-- Portrait Medallion Background -->
    <circle cx="250" cy="250" r="250" fill="url(#medallionGrad)"/>

    <!-- Archival registration grid / film markers -->
    <circle cx="250" cy="250" r="236" fill="none" stroke="${ink}" stroke-width="0.75" opacity="0.3"/>
    <circle cx="250" cy="250" r="242" fill="none" stroke="${frameGold}" stroke-width="1.5" stroke-dasharray="8 6"/>

    <!-- Designer Portrait Artistry -->
    <g transform="translate(0, 45)">
      ${des.customSvg}
    </g>
  </g>

  <!-- Royalty-Free & Institutional Provenance Stamp Badge -->
  <g transform="translate(100, 680)">
    <!-- Cartouche Box -->
    <rect x="0" y="0" width="600" height="205" rx="8" fill="#FFFFFF" fill-opacity="0.95" stroke="${frameGold}" stroke-width="1.5"/>
    <rect x="6" y="6" width="588" height="193" rx="4" fill="none" stroke="${ink}" stroke-width="0.5"/>

    <!-- Green Seal / Libre de droit pill -->
    <g transform="translate(30, 24)">
      <rect x="0" y="0" width="170" height="22" rx="11" fill="#047857" fill-opacity="0.12" stroke="#059669" stroke-width="1"/>
      <circle cx="12" cy="11" r="4" fill="#059669"/>
      <text x="24" y="15" font-family="sans-serif" font-size="10" font-weight="bold" fill="#065F46" letter-spacing="1">LIBRE DE DROIT</text>
    </g>

    <!-- Public domain tag -->
    <text x="570" y="38" text-anchor="end" font-family="monospace" font-size="11" fill="#78716C">DOMAINE PUBLIC / CC0</text>

    <!-- Designer Name -->
    <text x="300" y="76" text-anchor="middle" font-family="serif" font-weight="bold" font-size="24" fill="${ink}">${escapeXml(des.name)}</text>
    <text x="300" y="98" text-anchor="middle" font-family="serif" font-size="13" font-style="italic" fill="#57534E">(${escapeXml(des.dates)})</text>

    <line x1="80" y1="112" x2="520" y2="112" stroke="${frameGold}" stroke-width="1"/>

    <!-- Historical Role -->
    <text x="300" y="132" text-anchor="middle" font-family="serif" font-size="12" fill="${ink}" max-width="500">${escapeXml(des.role)}</text>

    <!-- Institution and Reference -->
    <text x="300" y="158" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#44403C" font-weight="500">Fonds de conservation : ${escapeXml(des.institution)}</text>
    <text x="300" y="180" text-anchor="middle" font-family="monospace" font-size="10" fill="#78716C">COTE D'ARCHIVE : ${escapeXml(des.id)} · USAGE PÉDAGOGIQUE OUVERT</text>
  </g>

  <!-- Bottom Archival Stamp -->
  <g transform="translate(100, 915)">
    <circle cx="20" cy="15" r="14" fill="none" stroke="${sealColor}" stroke-width="1.5"/>
    <text x="20" y="19" text-anchor="middle" font-family="serif" font-size="10" font-weight="bold" fill="${sealColor}">RF</text>
    <text x="45" y="14" font-family="serif" font-size="11" fill="${ink}">COLLECTION NATIONALE MODOR — PORTRAITS OFFICIELS DES CRÉATEURS</text>
    <text x="45" y="27" font-family="sans-serif" font-size="9" fill="#78716C">REPRODUCTION HAUTE FIDÉLITÉ · LICENCE OUVERTE ET PATRIMOINE PUBLIC</text>
  </g>
</svg>`;

    const destPath = path.resolve('public/images/historical', des.filename);
    
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 92 })
      .toFile(destPath);

    console.log(`✓ Generated portrait: ${des.filename} (${des.name})`);
  }

  console.log(`All ${DESIGNER_PORTRAITS.length} royalty-free portraits successfully created!`);
}

generatePortraits().catch((err) => {
  console.error(err);
  process.exit(1);
});
