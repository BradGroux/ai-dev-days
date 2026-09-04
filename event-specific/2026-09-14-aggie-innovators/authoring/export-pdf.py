"""Assemble screenshots produced by verify-browser.cjs; never print-to-PDF."""
from pathlib import Path
import json,sys
from reportlab.pdfgen import canvas
from reportlab import rl_config
from pypdf import PdfReader
rl_config.useA85=0
if "--slides-approved" not in sys.argv:
 raise SystemExit("PDF export is blocked until Brad explicitly signs off on the current slides. After approval, pass --slides-approved.")
sys.argv.remove("--slides-approved")
root=Path(__file__).resolve().parents[1]
source=Path(sys.argv[1]) if len(sys.argv)>1 else Path('/tmp/aggie-render')
images=sorted(source.glob('slide-*.png'))
assert len(images)==31, f'Expected 31 screenshots, got {len(images)}'
links=json.loads((source/'links.json').read_text())
out=root/'slides.pdf'
c=canvas.Canvas(str(out),pagesize=(960,540),pageCompression=1)
c.setTitle('Own your operating model, rent your tools')
c.setAuthor('Brad Groux | Digital Meld')
for index,img in enumerate(images):
 c.drawImage(str(img),0,0,width=960,height=540)
 for a in links[index]:
  c.linkURL(a['url'],(a['x']/2,540-(a['y']+a['h'])/2,(a['x']+a['w'])/2,540-a['y']/2),relative=0,thickness=0)
 c.showPage()
c.save()
r=PdfReader(out)
assert len(r.pages)==31
urls=[a.get_object()['/A']['/URI'] for pg in r.pages for a in pg.get('/Annots',[])]
assert urls and all(str(u).startswith('https://') for u in urls)
print(json.dumps({'pages':len(r.pages),'https_annotations':len(urls),'bytes':out.stat().st_size}))
