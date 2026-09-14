from html import unescape
from pathlib import Path
import json
import re

event_dir = Path(__file__).resolve().parents[1]
slides = json.loads((event_dir / "authoring/slides.json").read_text())

css = r"""
:root {
  color-scheme: dark;
  --bg: #071016;
  --panel: #0d1821;
  --ink: #edf6fb;
  --muted: #a3bccd;
  --line: #294657;
  --accent: #5eead4;
  --blue: #60a5fa;
  --magenta: #f472b6;
  --gold: #e8c589;
}
* { box-sizing: border-box; }
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #050b10;
  color: var(--ink);
  font-family: Roboto, Inter, system-ui, sans-serif;
}
#stage {
  width: 1600px;
  height: 900px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(var(--scale, 1));
  transform-origin: center;
  background: var(--bg);
}
.slide {
  display: none;
  position: absolute;
  inset: 0;
  padding: 108px 88px 78px;
  overflow: hidden;
  background:
    radial-gradient(circle at 98% 2%, transparent 0 112px, rgba(96,165,250,.07) 114px 153px, transparent 155px),
    radial-gradient(circle at 98% 2%, transparent 0 178px, rgba(244,114,182,.05) 180px 220px, transparent 222px),
    var(--bg);
}
.slide::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 7px;
  background: linear-gradient(var(--accent), var(--blue), var(--magenta));
}
.slide.active { display: block; }
.kicker {
  margin: 0 0 20px;
  color: var(--accent);
  font-size: 17px;
  font-weight: 760;
  letter-spacing: 2.4px;
  text-transform: uppercase;
}
h1 {
  max-width: 1320px;
  margin: 0 0 34px;
  font-size: 72px;
  font-weight: 790;
  letter-spacing: -2.4px;
  line-height: 1.04;
}
h1 em {
  display: inline-block;
  padding-bottom: .16em;
  margin-bottom: -.16em;
  color: transparent;
  font-style: normal;
  background: linear-gradient(to right, var(--magenta), var(--blue), var(--accent));
  background-clip: text;
  -webkit-background-clip: text;
}
p { margin: 0; color: var(--muted); font-size: 28px; line-height: 1.42; }
a { color: var(--accent); }
.lead { max-width: 1040px; color: var(--ink); font-size: 37px; line-height: 1.4; }
.hero h1 { margin-top: 58px; font-size: 91px; }
.byline { margin-top: 68px; font-size: 29px; }
.byline span { display: block; margin-top: 9px; color: var(--muted); font-size: 20px; }
.story-grid { display: grid; grid-template-columns: 360px 1fr; gap: 68px; align-items: center; }
.portrait { text-align: center; }
.portrait img { width: 240px; height: 240px; border-radius: 50%; object-fit: cover; }
.portrait blockquote { margin: 22px 0 0; padding-left: 18px; border-left: 4px solid var(--gold); color: var(--ink); font-size: 28px; font-weight: 400; letter-spacing: normal; line-height: 1.42; text-align: left; }
.opportunity-trail { display: grid; }
.opportunity-trail div {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 24px;
  padding: 20px 0;
  border-top: 1px solid var(--line);
}
.opportunity-trail b { color: var(--accent); font-size: 29px; }
.opportunity-trail span { color: var(--muted); font-size: 24px; line-height: 1.35; }
.brand-question { max-width: 1180px; margin: 66px 0 70px; color: var(--ink); font-size: 54px; font-weight: 720; line-height: 1.2; }
.evidence-line { display: flex; gap: 0; border-top: 1px solid var(--line); }
.evidence-line span { flex: 1; padding: 26px 28px 0 0; color: var(--muted); font-size: 26px; }
.evidence-line span + span { padding-left: 28px; border-left: 1px solid var(--line); }
.failure-sequence { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; margin-top: 42px; }
.failure-sequence div { min-height: 215px; padding: 34px; border-top: 3px solid var(--line); background: var(--panel); }
.failure-sequence .highlight { border-color: var(--accent); }
.failure-sequence strong { display: block; color: var(--muted); font-size: 18px; letter-spacing: 2px; }
.failure-sequence b { display: block; margin-top: 58px; font-size: 34px; }
.statement { max-width: 1240px; margin-top: 42px; color: var(--ink); font-size: 32px; }
.community-slide .big-idea { color: var(--ink); font-size: 51px; font-weight: 730; line-height: 1.28; }
.community-slide .side-note { position: absolute; right: 90px; bottom: 118px; width: 600px; padding-left: 28px; border-left: 4px solid var(--gold); font-size: 27px; }
.book-lines { display: grid; margin-top: 18px; }
.book-lines div { display: grid; grid-template-columns: 440px 1fr 270px; align-items: center; padding: 20px 0; border-top: 1px solid var(--line); }
.book-lines b { font-size: 36px; }
.book-lines span { color: var(--muted); font-size: 24px; }
.book-lines strong { color: var(--accent); font-size: 31px; text-align: right; }
.process { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 42px; }
.process div { min-height: 275px; padding: 30px 26px; border-top: 3px solid var(--line); background: var(--panel); }
.process div:last-child { border-color: var(--accent); }
.process strong { display: block; min-height: 88px; font-size: 30px; line-height: 1.2; }
.process span { display: block; color: var(--muted); font-size: 23px; line-height: 1.45; }
blockquote { margin: 14px 0 46px; color: var(--ink); font-size: 54px; font-weight: 720; line-height: 1.2; }
.empathy-layout { display: grid; grid-template-columns: 1.2fr 1fr; gap: 62px; align-items: stretch; }
.empathy-layout > div { padding: 28px 32px; border-left: 4px solid var(--accent); background: var(--panel); }
.empathy-layout b { display: block; font-size: 31px; line-height: 1.25; }
.empathy-layout span { display: block; margin-top: 18px; color: var(--muted); font-size: 22px; line-height: 1.4; }
.case-flow { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 32px; }
.case-flow div { min-height: 265px; padding: 31px; border-top: 3px solid var(--line); background: var(--panel); }
.case-flow .highlight { border-color: var(--accent); }
.case-flow span { display: block; margin-bottom: 48px; color: var(--muted); font-size: 18px; letter-spacing: 1.8px; text-transform: uppercase; }
.case-flow b { font-size: 30px; line-height: 1.32; }
.proof { margin-top: 28px; color: var(--accent); font-size: 23px; }
.concept-icon { display: inline-flex; color: var(--accent); flex: 0 0 auto; }
.concept-icon svg { width: 54px; height: 54px; stroke-width: 1.5; }
.evidence-line > span { display: flex; align-items: center; gap: 18px; }
.evidence-line .concept-icon { display: flex; margin: 0; }
.evidence-line > span:nth-child(2) .concept-icon, .failure-sequence > div:nth-child(2) .concept-icon, .process > div:nth-child(2) .concept-icon { color: var(--blue); }
.evidence-line > span:nth-child(3) .concept-icon, .failure-sequence > div:nth-child(3) .concept-icon, .process > div:nth-child(3) .concept-icon { color: var(--magenta); }
.process > div:nth-child(4) .concept-icon { color: var(--gold); }
.failure-sequence > div { position: relative; }
.failure-sequence b { display: flex; align-items: center; gap: 18px; }
.failure-sequence .concept-icon { position: static; }
.community-visual { position: absolute; right: 160px; top: 310px; }
.community-visual svg { width: 220px; height: 220px; stroke-width: 1; }
.book-lines b { display: flex; align-items: center; gap: 20px; }
.book-lines .concept-icon svg { width: 44px; height: 44px; }
.process > div { min-height: 335px; }
.process strong { display: flex; align-items: center; gap: 18px; }
.process .concept-icon { margin: 0; }
.process .concept-icon svg, .failure-sequence .concept-icon svg { width: 44px; height: 44px; }
.aurelius-quote { margin: 26px 0 0; padding-left: 24px; border-left: 4px solid var(--gold); font-size: 32px; line-height: 1.3; }
.aurelius-quote cite { display: block; margin-top: 12px; color: var(--muted); font-size: 18px; font-style: normal; font-weight: 400; }
.sources { position: absolute; left: 88px; right: 88px; bottom: 55px; z-index: 6; color: var(--muted); font-size: 16px; }
.sources summary { cursor: pointer; width: fit-content; }
.sources[open] { background: var(--panel); padding: 10px 18px; border: 1px solid var(--line); }
.sources ul { margin: 8px 0 0; padding-left: 22px; line-height: 1.4; }
.sources a { text-decoration: underline; }
.empathy-layout .concept-icon { margin-bottom: 20px; }
.closing-visual { position: absolute; right: 130px; top: 400px; }
.closing-visual svg { width: 180px; height: 180px; stroke-width: 1; }
.bakery-visual { position: absolute; right: 130px; top: 170px; }
.bakery-visual svg { width: 160px; height: 160px; stroke-width: 1.2; color: var(--gold); }
.venn-slide h1 { display: none; }
.venn-wrap { position: absolute; inset: 0; display: grid; place-items: center; }
.venn-wrap canvas { width: 1350px; height: 705px; }
.quote-slide h1 { font-size: 59px; }
.big-quote { max-width: 1320px; margin-top: 54px; color: var(--ink); font-size: 54px; }
.quote-note { margin-top: 42px; padding-left: 26px; border-left: 4px solid var(--gold); font-size: 28px; }
.closing { max-width: 1100px; }
.closing p { padding: 13px 0; color: var(--muted); font-size: 31px; }
.closing strong { display: block; margin-top: 40px; color: var(--ink); font-size: 44px; line-height: 1.25; }
.links { position: absolute; right: 88px; bottom: 90px; display: grid; grid-template-columns: 1fr 1fr; gap: 36px; }
.link-label { margin-bottom: 10px; color: var(--muted); font-size: 14px; font-weight: 760; letter-spacing: 2px; text-transform: uppercase; }
.social-stack { display: grid; gap: 10px; }
.social-link { display: inline-flex; align-items: center; gap: 10px; color: var(--ink); font-size: 20px; font-weight: 400; text-decoration: none; }
.social-link svg { width: 26px; height: 26px; fill: currentColor; flex: 0 0 auto; }
.web-links { display: grid; gap: 10px; }
.web-links a { color: var(--ink); font-size: 20px; text-decoration: none; }
.social-link, .web-links a { display: flex; align-items: center; height: 26px; line-height: 26px; }
.links a:hover { color: var(--accent); }
.gift-layout { display: grid; grid-template-columns: 1.3fr 1fr; gap: 60px; align-items: center; }
.gift-layout p { font-size: 26px; margin: 22px 0; }
.gift-layout .gift-right { text-align: center; }
.gift-qr { width: 280px; border: 12px solid white; border-radius: 8px; }
.mini-label { font-size: 19px; color: var(--muted); }
.logo { position: absolute; top: 25px; left: 76px; width: 168px; z-index: 3; }
.footer { position: absolute; bottom: 23px; left: 88px; right: 88px; display: flex; justify-content: space-between; color: #87a3b5; font-size: 16px; z-index: 4; }
.controls { position: absolute; top: 24px; right: 44px; display: flex; gap: 8px; z-index: 5; }
button { display: grid; place-items: center; min-width: 42px; min-height: 42px; padding: 8px 12px; border: 1px solid var(--line); border-radius: 5px; background: var(--panel); color: var(--ink); cursor: pointer; font: 16px Roboto, system-ui, sans-serif; }
button:focus-visible, a:focus-visible { outline: 3px solid var(--gold); outline-offset: 4px; }
.progress { position: absolute; bottom: 0; height: 4px; background: var(--accent); z-index: 5; }
.export .controls { visibility: hidden; }
.theme-moon { display: none; }
:root[data-theme="light"] {
  color-scheme: light;
  --bg: #f1f6fa;
  --panel: #ffffff;
  --ink: #102331;
  --muted: #415c6e;
  --line: #bdccd6;
  --accent: #08766b;
  --blue: #225eb3;
  --magenta: #a33175;
  --gold: #805512;
}
:root[data-theme="light"] body { background: #dce7ee; }
:root[data-theme="light"] .logo { width: 180px; top: 19px; left: 70px; padding: 9px 12px; border-radius: 7px; background: #071016; }
:root[data-theme="light"] .theme-sun { display: none; }
:root[data-theme="light"] .theme-moon { display: block; }
:root[data-theme="light"] .footer { color: #4c687a; }
"""


def plain_title(title):
    return unescape(re.sub(r"<[^>]+>", " ", title)).replace("  ", " ").strip()


sections = []
def icon(name):
    svg = (event_dir / f"assets/icons/{name}.svg").read_text()
    return f'<i class="concept-icon" aria-hidden="true">{svg}</i>'

for index, slide in enumerate(slides, start=1):
    title = plain_title(slide["title"])
    body = slide["body"]
    if index in (1, 12):
        body = re.sub(r'<div class="links">.*?</div>', (event_dir / "authoring/social-links.html").read_text(), body)
    icon_groups = {
        3: ('<span>', ['hammer', 'rotate-ccw', 'users']),
        4: ('<b>', ['flask-conical', 'triangle-alert', 'wrench']),
        6: ('<b>', ['book-open', 'plane', 'hand-heart']),
        7: ('<strong>', ['search', 'messages-square', 'flask-conical', 'check-check']),
    }
    if index in icon_groups:
        tag, names = icon_groups[index]
        icons = iter(names)
        body = re.sub(re.escape(tag), lambda match: tag + icon(next(icons)), body)
    if index == 5:
        body += f'<div class="community-visual">{icon("users")}</div>'
    if index == 8:
        body = body.replace('<div><b>', '<div>' + icon('ear') + '<b>')
    if index == 9:
        body += f'<div class="bakery-visual">{icon("croissant")}</div>'
    if index == 12:
        body += f'<div class="closing-visual">{icon("send")}</div>'
    if slide.get('sources'):
        body += '<details class="sources" open><summary>Sources</summary><ul>' + ''.join(
            f'<li><a href="{source["url"]}" target="_blank" rel="noopener noreferrer">{source["label"]}</a></li>'
            for source in slide['sources']) + '</ul></details>'
    sections.append(
        f'<section id="slide{index}" class="slide {slide["cls"]}" '
        f'aria-label="Slide {index}: {title}"><div class="kicker">'
        f'{slide["kicker"]}</div><h1>{slide["title"]}</h1>{body}</section>'
    )

script = r"""
const slides = [...document.querySelectorAll('.slide')];
let current = 0;
const byId = id => document.getElementById(id);
const themeKey = 'hug-motivational-monday-theme';
let savedTheme;
try { savedTheme = localStorage.getItem(themeKey); } catch {}

function drawVenn() {
  const canvas = byId('focus-venn');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = 2700;
  canvas.height = 1410;
  ctx.setTransform(3, 0, 0, 3, 0, 0);
  const styles = getComputedStyle(document.documentElement);
  const ink = styles.getPropertyValue('--ink').trim();
  const accent = styles.getPropertyValue('--accent').trim();
  const muted = styles.getPropertyValue('--muted').trim();
  const left = { x: 335, y: 190, r: 160 };
  const right = { x: 565, y: 190, r: 160 };
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.beginPath(); ctx.arc(left.x, left.y, left.r, 0, Math.PI * 2); ctx.clip();
  ctx.beginPath(); ctx.arc(right.x, right.y, right.r, 0, Math.PI * 2); ctx.clip();
  ctx.strokeStyle = accent; ctx.lineWidth = 3;
  for (let x = 250; x < 660; x += 18) {
    ctx.beginPath(); ctx.moveTo(x, 30); ctx.lineTo(x - 220, 390); ctx.stroke();
  }
  ctx.restore();
  ctx.strokeStyle = ink; ctx.lineWidth = 5;
  [left, right].forEach(circle => { ctx.beginPath(); ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2); ctx.stroke(); });
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = ink; ctx.font = '700 24px Roboto, system-ui, sans-serif';
  const labels = [['THINGS THAT', 'MATTER'], ['THINGS YOU', 'CAN CONTROL']];
  const metrics = labels.flat().map(text => ctx.measureText(text));
  const ascent = Math.max(...metrics.map(metric => metric.actualBoundingBoxAscent));
  const descent = Math.max(...metrics.map(metric => metric.actualBoundingBoxDescent));
  const firstBaseline = left.y - 19 + (ascent - descent) / 2;
  const centers = [(left.x - left.r + right.x - right.r) / 2, (left.x + left.r + right.x + right.r) / 2];
  labels.forEach((lines, column) => lines.forEach((text, row) => ctx.fillText(text, centers[column], firstBaseline + row * 38)));
  ctx.strokeStyle = accent; ctx.fillStyle = accent; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.moveTo(450, 330); ctx.lineTo(450, 370); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(438, 332); ctx.lineTo(450, 316); ctx.lineTo(462, 332); ctx.fill();
  ctx.font = '800 25px Roboto, system-ui, sans-serif';
  ctx.textBaseline = 'middle';
  ctx.fillText('WHAT YOU SHOULD FOCUS ON', 450, 420);
}

function setTheme(theme, persist = false) {
  document.documentElement.dataset.theme = theme;
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  byId('theme-toggle').setAttribute('aria-label', label);
  byId('theme-toggle').title = label;
  if (persist) {
    savedTheme = theme;
    try { localStorage.setItem(themeKey, theme); } catch {}
  }
  drawVenn();
}

const systemTheme = matchMedia('(prefers-color-scheme: light)');
setTheme(['light', 'dark'].includes(savedTheme) ? savedTheme : (systemTheme.matches ? 'light' : 'dark'));
byId('theme-toggle').onclick = () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true);
systemTheme.addEventListener('change', () => { if (!['light', 'dark'].includes(savedTheme)) setTheme(systemTheme.matches ? 'light' : 'dark'); });

function scale() {
  document.documentElement.style.setProperty('--scale', Math.min(innerWidth / 1600, innerHeight / 900));
}
function show(index) {
  current = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === current);
    slide.setAttribute('aria-hidden', slideIndex !== current);
  });
  byId('counter').textContent = `${current + 1} / ${slides.length}`;
  byId('progress').style.width = `${(current + 1) / slides.length * 100}%`;
  history.replaceState(null, '', `#slide${current + 1}`);
  drawVenn();
}
function fromHash() {
  const match = location.hash.match(/^#slide(\d+)$/);
  show(match ? Number(match[1]) - 1 : 0);
}
byId('prev').onclick = () => show(current - 1);
byId('next').onclick = () => show(current + 1);
byId('fullscreen').onclick = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(() => {});
addEventListener('keydown', event => {
  if (event.target.closest('button,a,input,textarea,summary')) return;
  if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); show(current + 1); }
  if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); show(current - 1); }
  if (event.key === 'Home') show(0);
  if (event.key === 'End') show(slides.length - 1);
});
addEventListener('resize', scale);
addEventListener('hashchange', fromHash);
if (new URLSearchParams(location.search).has('export')) document.body.classList.add('export');
scale();
fromHash();
"""

controls = r"""
<nav class="controls" aria-label="Presentation controls">
  <button id="prev" aria-label="Previous slide">←</button>
  <button id="next" aria-label="Next slide">→</button>
  <button id="theme-toggle" aria-label="Switch to light mode" title="Switch to light mode">
    <svg class="theme-sun" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>
    <svg class="theme-moon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z"/></svg>
  </button>
  <button id="fullscreen" aria-label="Enter fullscreen" title="Fullscreen"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/></svg></button>
</nav>
"""

html = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="data:,">
<title>Build in public and trust yourself to figure it out · H.U.G. Motivational Monday</title><style>{css}</style></head>
<body><main id="stage"><img class="logo" src="assets/digital-meld-logo.png" alt="Digital Meld">{''.join(sections)}{controls}
<footer class="footer"><span>H.U.G. Motivational Monday</span><span id="counter"></span></footer><div class="progress" id="progress"></div></main>
<script>{script}</script></body></html>"""

(event_dir / "slides.html").write_text(html)
notes = "# Speaker Notes: 20-Minute Version\n\n" + "\n\n".join(
    f"## {index}. {plain_title(slide['title'])}\n\n{slide['notes']}" +
    ('\n\nSources:\n' + '\n'.join(f'- [{source["label"]}]({source["url"]})' for source in slide['sources']) if slide.get('sources') else '')
    for index, slide in enumerate(slides, start=1)
) + "\n"
(event_dir / "speaker-notes-20-minute.md").write_text(notes)
print(f"Built {len(slides)} slides and speaker notes")
