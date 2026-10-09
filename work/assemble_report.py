from pathlib import Path
from html.parser import HTMLParser

root = Path(__file__).resolve().parent.parent
body = (root / 'work/report-body.html').read_text()
body = body.replace('<div id="competition-slot"></div>', (root / 'work/report-competition.html').read_text())
body = body.replace('<div id="scroll-slot"></div>', (root / 'work/report-scroll.html').read_text())
style = '''
:root{color-scheme:light;--ink:#24232a;--muted:#62606a;--paper:#faf9f6;--line:#dcd9d4;--accent:#694856}
*{box-sizing:border-box}html{scroll-behavior:auto;scroll-padding-top:24px}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.65 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}main{max-width:1200px;margin:auto;padding:64px 40px 100px}header{max-width:920px}h1{font:500 clamp(32px,4.2vw,54px)/1.12 Georgia,serif;letter-spacing:-.025em;margin:16px 0 24px}h2{font:500 32px/1.22 Georgia,serif;margin:12px 0 22px;letter-spacing:-.015em}h3{font-size:20px;line-height:1.35;margin:32px 0 12px}p{margin:0 0 18px}section{border-top:1px solid var(--line);padding-top:48px;margin-top:56px}section>p,section>ul,section>ol{max-width:940px}.eyebrow{font-size:11px;font-weight:700;letter-spacing:.12em;color:var(--accent);line-height:1.4}.lead{font-size:23px;line-height:1.45;max-width:780px}.note{background:#eee9e8;border-left:3px solid var(--accent);padding:20px 24px;margin:26px 0}.contents{display:flex;gap:12px 25px;flex-wrap:wrap;padding:24px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-top:38px;font-size:14px}a{color:#694052;text-decoration-thickness:1px;text-underline-offset:3px}a:hover{color:#2d1922}a:focus-visible{outline:3px solid #694052;outline-offset:4px}.table-wrap{width:100%;overflow-x:auto;margin:24px 0 28px;border:1px solid var(--line);border-radius:4px}table{border-collapse:collapse;width:100%;font-size:14px;line-height:1.55;table-layout:fixed}th,td{padding:17px 18px;text-align:left;vertical-align:top;overflow-wrap:anywhere}th{font-size:12px;background:#eeeae7;border-bottom:1px solid var(--line);letter-spacing:.02em}td{border-bottom:1px solid var(--line)}tr:last-child td{border-bottom:0}th:first-child{width:23%}tbody tr:nth-child(even){background:#f4f2ee}#ia th:nth-child(2){width:55%}#ia th:nth-child(3){width:22%}.small{font-size:13px;color:var(--muted)}.territories{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin:24px 0}.territories article{border-top:3px solid #8e7781;padding:18px 0}.territories h3{margin-top:12px}.territories p{font-size:15px}.tag{font-size:11px;letter-spacing:.06em;text-transform:uppercase;background:#e9e1e4;padding:5px 8px}.flow{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin:28px 0}.flow span{border:1px solid #c9bdc1;border-radius:5px;padding:9px 15px;background:#fff}.flow b{color:#8b7480}li{margin-bottom:12px;padding-left:5px}code{font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:.88em;overflow-wrap:anywhere}footer{font-size:13px;color:var(--muted);border-top:1px solid var(--line);padding-top:28px;margin-top:60px}
@media(max-width:760px){main{padding:32px 20px 60px}h2{font-size:28px}.territories{grid-template-columns:1fr;gap:8px}table{min-width:650px}.contents{gap:12px 18px}.lead{font-size:20px}.note{padding:16px}.flow{gap:8px}.flow span{padding:7px 10px;font-size:14px}section{padding-top:32px;margin-top:38px}}
@media print{body{background:white;font-size:10pt}main{padding:0;max-width:none}.contents{display:none}h1{font-size:30pt}h2{font-size:21pt}h3{break-after:avoid}section{margin-top:24px;padding-top:20px}table{font-size:9pt}th,td{padding:8px}tr{break-inside:avoid}.table-wrap{overflow:visible;border:none}.territories{display:block}a{color:inherit}header .note{font-size:10pt}}
'''
doc = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Factmend website research and information architecture</title><style>'+style+'</style></head><body><main>'+body+'<footer>Factmend research and IA · 8 October 2026 · Planning deliverable, not a website prototype or live product. Research used Perplexity high, official documentation, three focused research agents and live browser reference inspection.</footer></main></body></html>'
out = root / 'outputs/factmend-research-and-ia.html'
out.write_text(doc)

class Check(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=[]; self.anchors=[]; self.titles=[]
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if 'id' in attrs:self.ids.append(attrs['id'])
        if tag=='a' and attrs.get('href','').startswith('#'):self.anchors.append(attrs['href'][1:])
c=Check();c.feed(doc)
assert len(c.ids)==len(set(c.ids)), 'Duplicate IDs'
assert all(a in c.ids for a in c.anchors), 'Broken contents link'
assert '-slot' not in doc, 'Unfilled research slot'
for name in ['Memory Desk','Memory Review','Memory Proof','Memory Signal','Memory Report']:
    assert name in doc
print(f'Created {out.name}: {len(doc):,} characters; contents anchors and five-module coverage checked.')
