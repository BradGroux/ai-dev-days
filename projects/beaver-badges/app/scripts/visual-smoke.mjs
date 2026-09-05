#!/usr/bin/env node
import { chromium } from '@playwright/test'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { createServer } from 'vite'

const appRoot = process.cwd()
const repoRoot = path.resolve(appRoot, '../../..')
const appUrl = 'http://127.0.0.1:5173/'
const screenshotDir = process.env.VISUAL_SMOKE_ARTIFACT_DIR || path.join(os.tmpdir(), 'ai-dev-days-visual-smoke')

async function assertNoHorizontalOverflow(page, label) {
  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }))

  if (metrics.scrollWidth > metrics.clientWidth + 2) {
    throw new Error(`${label} has horizontal overflow: ${metrics.scrollWidth}px > ${metrics.clientWidth}px`)
  }
}

async function smokeBeaverBadges(browser) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto(appUrl)
  await page.getByRole('heading', { name: "Track your Buc-ee's stops and earn badges." }).waitFor()
  await page.getByRole('button', { name: 'Gulf Coast' }).click()
  await page.getByText('1 showing').waitFor()
  await page.getByText("Buc-ee's Wharton").waitFor()
  await page.getByRole('button', { name: 'All' }).click()

  const checkboxes = page.locator('input[type="checkbox"]')
  const checkboxCount = await checkboxes.count()
  if (checkboxCount !== 5) {
    throw new Error(`Expected 5 location checkboxes, found ${checkboxCount}`)
  }

  for (let index = 0; index < checkboxCount; index += 1) {
    await checkboxes.nth(index).check()
  }

  await page.locator('.status-card').getByText('Demo route complete').waitFor()
  await page.locator('.badge-stack').getByText('Roadmap').first().waitFor()
  await page.getByRole('button', { name: 'Export JSON' }).click()
  const exportTextarea = page.getByLabel('Exported progress JSON')
  await exportTextarea.waitFor()
  const exportValue = await exportTextarea.inputValue()
  if (!exportValue.includes('"visitedCount": 5')) {
    throw new Error('Export did not include the expected visited count')
  }
  await page.getByRole('button', { name: 'Reset progress' }).click()
  await page.getByText('0 of 5 stops visited').waitFor()
  await assertNoHorizontalOverflow(page, 'Beaver Badges desktop')
  await page.screenshot({ path: path.join(screenshotDir, 'beaver-badges-desktop.png'), fullPage: false })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.reload()
  await page.getByRole('heading', { name: "Track your Buc-ee's stops and earn badges." }).waitFor()
  await assertNoHorizontalOverflow(page, 'Beaver Badges mobile')
  await page.screenshot({ path: path.join(screenshotDir, 'beaver-badges-mobile.png'), fullPage: false })
  await page.close()
}

async function smokeStorageFailure(browser) {
  const page = await browser.newPage({viewport:{width:390,height:844}})
  const errors=[]
  page.on('pageerror', error=>errors.push(error.message))
  await page.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw new Error('storage denied')}})})
  await page.goto(appUrl)
  await page.getByRole('status').waitFor()
  await page.locator('input[type="checkbox"]').first().check()
  await page.getByRole('button',{name:'Reset progress'}).click()
  await page.getByText('0 of 5 stops visited').waitFor()
  await assertNoHorizontalOverflow(page,'storage notice mobile')
  await page.screenshot({path:path.join(screenshotDir,'storage-unavailable-mobile.png'),fullPage:true})
  if(errors.length) throw new Error(errors.join('; '))
  await page.close()
  const demo=await browser.newPage()
  demo.on('pageerror',error=>errors.push(error.message))
  await demo.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw new Error('storage denied')}})})
  await demo.goto(pathToFileURL(path.join(repoRoot,'event-specific/2026-07-21-personal-ai-agents-live/demo/app/index.html')).href)
  await demo.getByText('Seed data loaded',{exact:true}).waitFor()
  await demo.locator('#toggle-simulated').uncheck()
  await demo.getByText('Storage unavailable; changes stay in this tab. Export before closing.',{exact:true}).waitFor()
  await demo.screenshot({path:path.join(screenshotDir,'personal-ai-storage-unavailable.png'),fullPage:false})
  if(errors.length) throw new Error(errors.join('; '))
  await demo.close()
}

async function smokeArchitectureShowcase(browser) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  const architectureUrl = pathToFileURL(path.join(repoRoot, 'docs/openclaw-architecture-showcase.html')).href

  await page.goto(architectureUrl)
  await page.getByText('Gateway-centric map').waitFor()
  await page.getByRole('heading', { name: 'Agent Loop' }).waitFor()
  await page.getByText('Context assembles').waitFor()
  await assertNoHorizontalOverflow(page, 'Architecture showcase desktop')
  await page.screenshot({ path: path.join(screenshotDir, 'architecture-desktop.png'), fullPage: false })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.reload()
  await page.getByText('Gateway-centric map').waitFor()
  await assertNoHorizontalOverflow(page, 'Architecture showcase mobile')
  await page.screenshot({ path: path.join(screenshotDir, 'architecture-mobile.png'), fullPage: false })
  await page.close()
}

await fs.mkdir(screenshotDir, { recursive: true })

const server = await createServer({
  root: appRoot,
  logLevel: 'error',
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
})
await server.listen()

let browser
try {
  browser = await chromium.launch()
  await smokeBeaverBadges(browser)
  await smokeArchitectureShowcase(browser)
  await smokeStorageFailure(browser)
  console.log(`Visual smoke passed. Screenshots: ${screenshotDir}`)
} catch (error) {
  throw error
} finally {
  if (browser) await browser.close()
  await server.close()
}
