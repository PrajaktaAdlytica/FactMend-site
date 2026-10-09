from pathlib import Path
import xml.etree.ElementTree as ET,json,re
from PIL import Image,ImageFont
p=Path('outputs/factmend-brand-kit');bad=[];over=[]
for f in p.rglob('*.svg'):
 root=ET.parse(f).getroot()
 if f.parent.name=='visuals' and not f.stem.startswith('bg-'):
  for t in root.findall('{http://www.w3.org/2000/svg}text'):
   size=int(t.get('font-size','20'));font=ImageFont.truetype(str(p/'fonts/Inter[opsz,wght].ttf'),size)
   end=float(t.get('x','0'))+font.getlength(t.text or '')
   if end>990:over.append((f.name,t.text,round(end)))
for src in re.findall(r'(?:src|href)="([^"#]+)"',(p/'index.html').read_text()):
 if not src.startswith(('http','mailto')) and not (p/src).exists():bad.append(src)
for f in p.joinpath('favicons').glob('*.png'):
 print(f.name,Image.open(f).size)
print('SVG outer bounds warnings',over)
print('Missing HTML refs',bad)
assert not bad
assert not over
print('SVG XML and file references verified')
