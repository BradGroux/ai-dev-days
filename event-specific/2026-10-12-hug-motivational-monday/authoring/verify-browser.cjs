const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const base = process.env.HUG_BASE_URL || 'http://127.0.0.1:4178/event-specific/2026-10-12-hug-motivational-monday';
const out = process.env.HUG_RENDER_DIR || '/tmp/hug-motivational-monday-render';
fs.mkdirSync(out, { recursive: true });

async function makeContactSheet(files, output) {
  const columns = 4;
  const width = 480;
  const height = 270;
  const rows = Math.ceil(files.length / columns);
  const images = [];
  for (let index = 0; index < files.length; index++) {
    images.push({
      input: await sharp(files[index]).resize(width, height).png().toBuffer(),
      left: (index % columns) * width,
      top: Math.floor(index / columns) * height,
    });
  }
  await sharp({ create: { width: columns * width, height: rows * height, channels: 3, background: '#071016' } })
    .composite(images)
    .png()
    .toFile(output);
}

(async () => {
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: Number(process.env.HUG_RENDER_SCALE || 1) });
  const pageErrors = [];
  const consoleErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });

  await page.goto(`${base}/slides.html?export=1#slide1`);
  const count = await page.locator('.slide').count();
  if (count !== 13) throw new Error(`Expected 13 slides, found ${count}`);
  if (await page.locator('#slide13 .gift-right a').first().getAttribute('href') !== 'https://go.sstb.ai/hug2026') throw new Error('Gift QR must use the tracked shortlink');
  const introLinks = await page.locator('#slide1 .links a').evaluateAll(links => links.map(link => link.href));
  const closingLinks = await page.locator('#slide12 .links a').evaluateAll(links => links.map(link => link.href));
  if (introLinks.length !== 6 || JSON.stringify(introLinks) !== JSON.stringify(closingLinks)) throw new Error('Opening and closing social links must match the prior deck');
  if (await page.locator('#slide1 .social-link svg').count() !== 3 || await page.locator('#slide12 .social-link svg').count() !== 3) throw new Error('Social profiles must retain platform icons');
  if (await page.locator('#slide6 .sources a').count() !== 3 || await page.locator('#slide11 .sources a').count() !== 2) throw new Error('Book and speech sources are incomplete');
  if (await page.locator('.sources:not([open])').count()) throw new Error('Sources must be expanded by default');
  if (!await page.locator('#slide6 .aurelius-quote').count()) throw new Error('Marcus Aurelius quote is missing');

  await page.goto(`${base}/slides.html?export=1#slide10`);
  const centered = await page.locator('#focus-venn').evaluate(canvas => {
    const rect = canvas.getBoundingClientRect();
    const stage = document.querySelector('#stage').getBoundingClientRect();
    return Math.abs(rect.left + rect.width / 2 - stage.left - stage.width / 2) < 1
      && Math.abs(rect.top + rect.height / 2 - stage.top - stage.height / 2) < 1
      && canvas.clientWidth === 1350;
  });
  if (!centered) throw new Error('Venn diagram must be enlarged and centered on the stage');

  const themeReports = [];
  for (const theme of ['dark', 'light']) {
    const screenshots = [];
    const links = [];
    const overflow = [];
    for (let slideNumber = 1; slideNumber <= count; slideNumber++) {
      await page.goto(`${base}/slides.html?export=1#slide${slideNumber}`);
      await page.locator('.slide.active').waitFor();
      await page.evaluate(value => { document.documentElement.dataset.theme = value; window.drawVenn?.(); }, theme);
      if ([1, 12].includes(slideNumber)) {
        const aligned = await page.locator('.slide.active .links').evaluate(links => {
          const social = [...links.querySelectorAll('.social-link')];
          return [...links.querySelectorAll('.web-links a')].every((link, index) => {
            const a = link.getBoundingClientRect(), b = social[index].getBoundingClientRect();
            return Math.abs(a.top - b.top) < 1 && Math.abs(a.height - b.height) < 1;
          });
        });
        if (!aligned) throw new Error(`Slide ${slideNumber} Follow and Visit rows must align`);
      }
      if ([3, 4, 7].includes(slideNumber)) {
        const colors = await page.locator('.slide.active .concept-icon').evaluateAll(icons => icons.map(icon => getComputedStyle(icon).color));
        if (new Set(colors).size !== colors.length) throw new Error(`Slide ${slideNumber} icons must use distinct palette colors`);
      }
      const bad = await page.locator('.slide.active').evaluate(slide => {
        const stage = document.querySelector('#stage').getBoundingClientRect();
        return [...slide.querySelectorAll('h1,p,blockquote,img,canvas,.story-grid,.opportunity-trail,.evidence-line,.failure-sequence,.book-lines,.process,.empathy-layout,.case-flow,.closing,.links')]
          .filter(element => {
            const rect = element.getBoundingClientRect();
            return rect.left < stage.left - 2 || rect.right > stage.right + 2 || rect.top < stage.top - 2 || rect.bottom > stage.bottom + 2;
          })
          .map(element => `${element.tagName}.${element.className}: ${element.textContent.slice(0, 60)}`);
      });
      if (bad.length) overflow.push({ slide: slideNumber, elements: bad });
      const file = path.join(out, `${theme}-${String(slideNumber).padStart(2, '0')}.png`);
      await page.evaluate(() => document.fonts.ready);
      links.push(await page.locator('.slide.active a[href]').evaluateAll(anchors => anchors.map(a => {
        const r = a.getBoundingClientRect();
        return { url: a.href, x: r.x, y: r.y, w: r.width, h: r.height };
      }).filter(a => a.w && a.h && a.url.startsWith('https://'))));
      await page.screenshot({ path: file });
      screenshots.push(file);
    }
    const sheet = path.join(out, `${theme}-contact-sheet.png`);
    fs.writeFileSync(path.join(out, `${theme}-links.json`), JSON.stringify(links));
    await makeContactSheet(screenshots, sheet);
    themeReports.push({ theme, overflow, contactSheet: sheet });
  }

  await page.goto(`${base}/slides.html#slide1`);
  await page.getByRole('button', { name: 'Next slide' }).click();
  if (!page.url().endsWith('#slide2')) throw new Error('Next button did not navigate to slide 2');
  await page.evaluate(() => document.activeElement?.blur());
  await page.keyboard.press('ArrowRight');
  if (!page.url().endsWith('#slide3')) throw new Error('Arrow key did not navigate to slide 3');
  const beforeTheme = await page.locator('html').getAttribute('data-theme');
  await page.getByRole('button', { name: /Switch to/ }).click();
  const afterTheme = await page.locator('html').getAttribute('data-theme');
  if (beforeTheme === afterTheme) throw new Error('Theme toggle did not change theme');

  const report = { slides: count, pageErrors, consoleErrors, themes: themeReports, output: out };
  fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
  if (pageErrors.length || consoleErrors.length || themeReports.some(theme => theme.overflow.length)) {
    throw new Error('Browser verification failed');
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
