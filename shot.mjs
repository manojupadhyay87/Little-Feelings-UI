import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 2000 } });
await page.goto('http://localhost:5173/', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(800);
const el = await page.$('text=The Collection');
const box = await el.boundingBox();
await page.screenshot({ path: 'collection.png', clip: { x: 0, y: Math.max(0, box.y - 40), width: 1400, height: 950 } });
await browser.close();
