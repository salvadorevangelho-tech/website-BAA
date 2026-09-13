const { chromium } = require('playwright');

const pages = [
  ['/', 'home'],
  ['/about', 'about'],
  ['/newsletter', 'newsletter'],
  ['/planner', 'planner'],
  ['/time-stack', 'time-stack'],
  ['/life-os', 'life-os'],
  ['/privacy-policy', 'privacy-policy'],
];

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  for (const [path, name] of pages) {
    await page.goto(`http://localhost:3939${path}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `/home/claude/baa-site/shots/${name}.png`, fullPage: true });
    console.log('captured', name);
  }
  // mobile shot of home
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto('http://localhost:3939/', { waitUntil: 'networkidle' });
  await mobile.waitForTimeout(500);
  await mobile.screenshot({ path: '/home/claude/baa-site/shots/home-mobile.png', fullPage: true });
  console.log('captured home-mobile');
  await browser.close();
})();
