from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json
root=Path(__file__).resolve().parents[1]/'dist'
class Parser(HTMLParser):
 def __init__(self): super().__init__();self.refs=[];self.h1=0;self.text=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='h1':self.h1+=1
  for k in ['href','src']:
   if k in a:self.refs.append(a[k])
 def handle_data(self,data):self.text.append(data)
errors=[];routes=[]
for p in root.rglob('*.html'):
 parser=Parser();parser.feed(p.read_text());route='/'+str(p.relative_to(root).parent).replace('.','')
 if parser.h1!=1:errors.append(f'{route}: {parser.h1} H1s')
 if '\\n' in ''.join(parser.text):errors.append(f'{route}: literal newline escape in rendered copy')
 for ref in parser.refs:
  u=urlsplit(ref)
  if not u.path.startswith('/') or u.netloc:continue
  target=root/unquote(u.path.lstrip('/'))
  if not target.is_file() and not (target/'index.html').is_file():errors.append(f'{route}: missing {ref}')
 routes.append(route)
result={'htmlDocuments':len(routes),'checkedInternalLinksAndAssets':True,'errors':list(dict.fromkeys(errors))}
print(json.dumps(result,indent=2));(root.parent/'qa/build-audit.json').write_text(json.dumps(result,indent=2))
raise SystemExit(bool(errors))
