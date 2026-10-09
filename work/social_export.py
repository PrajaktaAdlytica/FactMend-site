from pathlib import Path
import xml.etree.ElementTree as ET
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
p=Path('outputs/factmend-brand-kit'); ns='{http://www.w3.org/2000/svg}'
ET.register_namespace('','http://www.w3.org/2000/svg')
for name in ['factmend-open-graph','factmend-linkedin-banner']:
 f=p/'social'/f'{name}.svg';s=f.read_text().replace('Georgia,serif','Instrument Serif,serif').replace('Arial,sans-serif','Inter,sans-serif');f.write_text(s);r=ET.fromstring(s)
 for t in list(r.findall(ns+'text')):
  font=TTFont(p/'fonts'/('InstrumentSerif-Regular.ttf' if 'Instrument Serif' in t.get('font-family','') else 'Inter[opsz,wght].ttf')); gs=font.getGlyphSet();cm=font.getBestCmap();scale=float(t.get('font-size'))/font['head'].unitsPerEm
  g=ET.Element(ns+'g',{'fill':t.get('fill','#1F2617'),'transform':f'translate({t.get("x")} {t.get("y")}) scale({scale} {-scale})'});pos=0
  for ch in t.text:
   n=cm[ord(ch)];pen=SVGPathPen(gs);gs[n].draw(pen);ET.SubElement(g,ns+'path',{'d':pen.getCommands(),'transform':f'translate({pos} 0)'});pos+=font['hmtx'][n][0]
  idx=list(r).index(t);r.remove(t);r.insert(idx,g)
 (p/'social'/f'{name}-outlined.svg').write_text(ET.tostring(r,encoding='unicode'))
