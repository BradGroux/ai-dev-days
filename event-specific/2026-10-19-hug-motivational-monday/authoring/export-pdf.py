"""Assemble approved high-resolution slide screenshots, not browser printing."""
from pathlib import Path
import json
import sys
from reportlab.pdfgen import canvas
from reportlab import rl_config
from pypdf import PdfReader

if '--slides-approved' not in sys.argv:
    raise SystemExit('Current slides require approval before PDF export.')
sys.argv.remove('--slides-approved')
source = Path(sys.argv[1])
images = sorted(source.glob('dark-??.png'))
assert len(images) == 13, f'Expected 13 slides, got {len(images)}'
links = json.loads((source / 'dark-links.json').read_text())
assert len(links) == 13
out = Path(__file__).resolve().parents[1] / 'slides.pdf'
rl_config.useA85 = 0
c = canvas.Canvas(str(out), pagesize=(960, 540), pageCompression=1)
c.setTitle('Build in public. Trust yourself to figure it out.')
c.setAuthor('Brad Groux')
for image, anchors in zip(images, links):
    c.drawImage(str(image), 0, 0, width=960, height=540)
    for a in anchors:
        c.linkURL(a['url'], (a['x']/2, 540-(a['y']+a['h'])/2,
                            (a['x']+a['w'])/2, 540-a['y']/2), thickness=0)
    c.showPage()
c.save()
pdf = PdfReader(out)
assert len(pdf.pages) == 13
assert all(tuple(page.mediabox) == (0, 0, 960, 540) for page in pdf.pages)
urls = [a.get_object()['/A']['/URI'] for page in pdf.pages for a in page.get('/Annots', [])]
assert 'https://go.sstb.ai/hug2026' in urls
print(json.dumps({'pages': len(pdf.pages), 'links': len(urls), 'bytes': out.stat().st_size}))
