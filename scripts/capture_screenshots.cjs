const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

async function run() {
  console.log('Starting screenshot capture...');
  const browser = await chromium.launch({
    executablePath: '/ms-playwright/chromium-1254/chrome-linux64/chrome',
    args: ['--no-sandbox', '--disable-gpu']
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5
  });

  const page = await context.newPage();

  fs.mkdirSync('public/screenshots', { recursive: true });
  fs.mkdirSync('docs/screenshots', { recursive: true });

  console.log('1. Capturing Onboarding modal...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'public/screenshots/08_onboarding_mentions.png' });
  console.log('Captured: 08_onboarding_mentions.png');

  // Accept onboarding & reload
  await page.evaluate(() => {
    localStorage.setItem('modor_onboarding_accepted', 'true');
    window.location.reload();
  });
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1200);

  // 1. Chronologie Frise
  console.log('2. Capturing Chronologie...');
  await page.screenshot({ path: 'public/screenshots/01_chronologie_frise.png' });
  console.log('Captured: 01_chronologie_frise.png');

  // 2. Silhouettes Comparateur
  console.log('3. Capturing Silhouettes...');
  await page.click('button[data-nav-id="comparator"]');
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'public/screenshots/02_silhouettes_comparateur.png' });
  console.log('Captured: 02_silhouettes_comparateur.png');

  // 3. Anatomie du Costume
  console.log('4. Capturing Anatomie...');
  await page.click('button[data-nav-id="anatomy"]');
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'public/screenshots/03_anatomie_costume.png' });
  console.log('Captured: 03_anatomie_costume.png');

  // 4. Catalogue Vestiaire (34 pièces)
  console.log('5. Capturing Vestiaire (34 pièces)...');
  await page.click('button[data-nav-id="garments"]');
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'public/screenshots/04_catalogue_vestiaire.png' });
  console.log('Captured: 04_catalogue_vestiaire.png');

  // 5. Panthéon des Créateurs (35 créateurs)
  console.log('6. Capturing Créateurs (35 créateurs)...');
  await page.click('button[data-nav-id="designers"]');
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'public/screenshots/05_pantheon_createurs.png' });
  console.log('Captured: 05_pantheon_createurs.png');

  // 6. Grand Quiz
  console.log('7. Capturing Quiz...');
  await page.click('button[data-nav-id="quiz"]');
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'public/screenshots/06_grand_quiz.png' });
  console.log('Captured: 06_grand_quiz.png');

  // 7. Menu Hamburger & Paramètres Système
  console.log('8. Capturing Menu Hamburger...');
  // Click hamburger in header
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('header button'));
    // Menu button usually has lucide-menu icon or aria-label
    const menu = btns.find(b => b.innerHTML.includes('lucide-menu') || (b.getAttribute('aria-label') || '').toLowerCase().includes('menu'));
    if (menu) menu.click();
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'public/screenshots/07_menu_navigation.png' });
  console.log('Captured: 07_menu_navigation.png');

  // Copy all screenshots to docs/screenshots
  const files = fs.readdirSync('public/screenshots');
  for (const f of files) {
    if (f.endsWith('.png')) {
      fs.copyFileSync(path.join('public/screenshots', f), path.join('docs/screenshots', f));
    }
  }
  console.log('All screenshots duplicated into docs/screenshots/');

  await browser.close();
  console.log('CAPTURE COMPLETE!');
}

run().catch(err => {
  console.error('ERROR:', err);
  process.exit(1);
});
