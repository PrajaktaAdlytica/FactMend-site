from pathlib import Path
import json,html,math,textwrap
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
P=Path('outputs/factmend-brand-kit')
C={'paper':'#F7F4EC','white':'#FFFFFF','ink':'#1F2617','muted':'#59634B','sage':'#DDE3D2','peach':'#F7C9A3','amber':'#F49A23','clay':'#A9482F','line':'#D7D2C5','strongLine':'#7B816F','link':'#8B4608','success':'#49683C'}
def write(n,s): (P/n).write_text(s)
def svg(body,w=1000,h=560,title='Factmend visual',desc='Editable concept illustration'):
 return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-labelledby="t d"><title id="t">{html.escape(title)}</title><desc id="d">{html.escape(desc)}</desc>{body}</svg>'
def text(x,y,s,size=20,color=C['ink'],serif=False):
 return f'<text x="{x}" y="{y}" fill="{color}" font-family="{("Instrument Serif" if serif else "Inter")}, {("serif" if serif else "sans-serif")}" font-size="{size}">{html.escape(s)}</text>'
def rect(x,y,w,h,fill=C['white'],stroke=C['line'],r=12):return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" stroke="{stroke}"/>'
def line(x,y,a,b,col=C['muted'],dash=''):return f'<path d="M{x} {y} L{a} {b}" fill="none" stroke="{col}" stroke-width="2" {("stroke-dasharray=\"6 6\"" if dash else "")}/>'
def box(x,y,w,h,label,sub='',fill=C['white']):
 return rect(x,y,w,h,fill)+''.join(text(x+20,y+30+j*24,t,22) for j,t in enumerate(textwrap.wrap(label,max(8,int((w-40)/12)))))+''.join(text(x+20,y+65+j*19,t,15,C['muted']) for j,t in enumerate(textwrap.wrap(sub,max(10,int((w-40)/8.5)))))
def badge():return text(40,40,'DEMO — SYNTHETIC DATA',13,C['muted'])
mark='<path d="M10 59 45 43 85 61 50 78Z" fill="{olive}"/><path d="M10 43 45 27 85 45 50 62Z" fill="{olive}"/><path d="M10 27 45 11 85 29 50 46Z" fill="{amber}"/>'
f=TTFont(P/'fonts/InstrumentSerif-Regular.ttf');gs=f.getGlyphSet();cmap=f.getBestCmap();x=0;paths=[]
for ch in 'Factmend':
 name=cmap[ord(ch)];pen=SVGPathPen(gs);gs[name].draw(pen);paths.append(f'<path transform="translate({x} 0)" d="{pen.getCommands()}"/>');x+=f['hmtx'][name][0]
word=''.join(paths)
for variant,olive,amber in [('primary',C['ink'],C['amber']),('reverse',C['paper'],C['amber']),('mono',C['ink'],C['ink'])]:
 m=mark.format(olive=olive,amber=amber)
 write(f'logos/mark-{variant}.svg',svg(m,96,90,'Factmend mended folio','Three layered records; amber identifies the revised leaf.'))
 write(f'logos/wordmark-{variant}.svg',svg(f'<g fill="{olive}" transform="translate(12 66) scale(.072 -.072)">{word}</g>',330,85,'Factmend wordmark'))
 write(f'logos/lockup-{variant}.svg',svg(m+f'<g fill="{olive}" transform="translate(106 66) scale(.072 -.072)">{word}</g>',430,90,'Factmend horizontal logo'))
 write(f'logos/stacked-{variant}.svg',svg(f'<g transform="translate(120 0)">{m}</g><g fill="{olive}" transform="translate(16 156) scale(.072 -.072)">{word}</g>',330,180,'Factmend stacked logo'))
write('favicons/favicon.svg',svg(rect(0,0,96,96,C['paper'],C['paper'],20)+mark.format(olive=C['ink'],amber=C['amber']),96,96,'Factmend'))
write('favicons/maskable.svg',svg(rect(0,0,160,160,C['paper'],C['paper'],0)+f'<g transform="translate(40 38) scale(.85)">{mark.format(olive=C["ink"],amber=C["amber"])}</g>',160,160,'Factmend maskable app icon'))
icons={
'archive':'M4 8h16v12H4z M3 4h18v4H3z M9 12h6',
'record':'M6 3h9l4 4v14H6z M14 3v5h5 M9 12h7 M9 16h5',
'scope':'M3 3h7v7H3z M14 14h7v7h-7z M14 3h7v7h-7z M3 14h7v7H3z',
'review':'M4 4h12v16H4z M8 8h4 M8 12h4 M15 15l3 3 4-5',
'proof':'M12 3l8 3v6c0 5-8 9-8 9s-8-4-8-9V6z M8 11l3 3 5-6',
'signal':'M4 5h16 M6 9h12 M8 13h8 M10 17h4 M11 21h2',
'report':'M4 3h12v18H4z M8 16v-4 M12 16V8 M16 10h5 M18 7l3 3-3 3',
'lock':'M7 10V7a5 5 0 0 1 10 0v3 M5 10h14v11H5z M12 14v3',
'unlock':'M7 10V7a5 5 0 0 1 9-3 M5 10h14v11H5z M12 14v3',
'key':'M9 14a5 5 0 1 1 3-4l9 0v4h-3v3h-3v-3z',
'branch':'M6 4v12a4 4 0 0 0 4 4h7 M6 9h8a4 4 0 0 0 4-4 M4 3h4v3H4z M16 2h4v4h-4z M16 18h4v4h-4z',
'history':'M3 12a9 9 0 1 0 3-7 M3 3v5h5 M12 7v5l3 2',
'clock':'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18 M12 7v5l4 2',
'consent':'M5 4h14v17H5z M9 3h6v3H9z M8 13l3 3 5-6',
'erase':'M4 14l8-10 8 6-8 10H8z M8 9l8 6 M12 20h9',
'export':'M4 10v11h16V10 M12 16V3 M7 8l5-5 5 5',
'import':'M4 14v7h16v-7 M12 3v13 M7 11l5 5 5-5',
'map':'M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2z M9 3v16 M15 5v16',
'network':'M4 5l8 7 8-7 M4 19l8-7 8 7 M2 3h4v4H2z M18 3h4v4h-4z M2 17h4v4H2z M18 17h4v4h-4z',
'database':'M4 6c0-4 16-4 16 0s-16 4-16 0v12c0 4 16 4 16 0V6 M4 12c0 4 16 4 16 0',
'check':'M4 12l5 5L20 6','close':'M5 5l14 14 M19 5 5 19','arrow-right':'M3 12h18 M15 6l6 6-6 6','arrow-left':'M21 12H3 M9 6l-6 6 6 6','chevron-down':'M5 9l7 7 7-7',
'warning':'M12 3 22 21H2z M12 9v5 M12 17v1','info':'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18 M12 10v7 M12 7v1',
'search':'M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14 M15 15l6 6','filter':'M3 4h18l-7 8v8l-4-2v-6z','refresh':'M20 9a8 8 0 0 0-14-4 M20 3v6h-6 M4 15a8 8 0 0 0 14 4 M4 21v-6h6',
'copy':'M8 8h13v13H8z M16 8V3H3v13h5','download':'M4 16v5h16v-5 M12 3v13 M7 11l5 5 5-5','mail':'M3 5h18v14H3z M3 5l9 8 9-8',
'calendar':'M4 5h16v16H4z M8 3v4 M16 3v4 M4 10h16','user':'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M4 21v-3c0-7 16-7 16 0v3',
'menu':'M3 6h18 M3 12h18 M3 18h18','external':'M14 3h7v7 M21 3 10 14 M10 4H3v17h17v-7','settings':'M12 4v3 M12 17v3 M4 12h3 M17 12h3 M6 6l2 2 M16 16l2 2 M18 6l-2 2 M8 16l-2 2 M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8','eye':'M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12 M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6'}
symbols=[]
for n,d in icons.items():
 b=f'<path d="{d}" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>'
 write(f'icons/{n}.svg',svg(b,24,24,n.replace('-',' ')))
 symbols.append(f'<symbol id="{n}" viewBox="0 0 24 24">{b}</symbol>')
write('icons/sprite.svg','<svg xmlns="http://www.w3.org/2000/svg">'+''.join(symbols)+'</svg>')
# Unique diagrams. Meaning, status and scope are explicit.
visuals={}
b=badge()+text(40,95,'One fact. Five responsibilities.',44,serif=True)
for i,(label,sub) in enumerate([('Desk','Scope'),('Review','Correction'),('Proof','Retention'),('Signal','Erasure'),('Report','Export')]):
 x=40+i*186;b+=box(x,170,164,104,label,sub,C['sage'] if i%2==0 else C['peach'])
 if i<4:b+=line(x+164,222,x+184,222)
b+=box(40,345,918,125,'C-012 · Helio Helpdesk · support purpose','Current preference: portal only. Backup erasure boundary remains unverified.')
visuals['system-overview']=b
b=badge()+text(40,95,'Scope is a boundary.',44,serif=True)+rect(40,135,550,320,C['sage'])+text(65,180,'Tenant: Helio · Purpose: support',22)+box(75,215,230,110,'C-012','portal only')+box(345,215,210,110,'Read request','Scoped allow')+line(305,270,345,270)+rect(640,135,320,320,C['paper'],C['clay'])+text(665,180,'Other tenant',24)+box(665,250,265,100,'Cross-tenant read','Denied',C['peach'])+line(590,350,640,350,C['clay'],'dashed')
visuals['desk-scope-map']=b
b=badge()+text(40,95,'A correction keeps its history.',44,serif=True)+box(40,180,390,160,'Version 1 · Oct 6, 2026','email invoices · Superseded',C['paper'])+box(560,180,390,160,'Version 2 · Oct 8, 2026','portal only · Current',C['sage'])+line(430,260,560,260,C['amber'])+box(40,400,910,95,'Source: synthetic support conversation','Correction is distinct from erasure. Prior state remains in this history example.')
visuals['review-version-history']=b
b=badge()+text(40,95,'Policy changes travel with the fact.',44,serif=True)+line(95,260,910,260)
for i,(a,s) in enumerate([('Capture','Consent: support'),('Policy','Retention: 30 days'),('Update','Purpose restricted'),('Expiry','Queue for review')]):
 x=90+i*260;b+=f'<circle cx="{x}" cy="260" r="10" fill="{C["amber"]}"/>'+text(x-35,210,a,23)+text(max(40,x-35),310,s,17)
b+=box(40,405,910,95,'Illustrative policy timeline','30 days is a synthetic fixture, not a recommended retention period.')
visuals['proof-retention-timeline']=b
b=badge()+text(40,95,'A receipt states its limits.',44,serif=True)+box(40,145,270,100,'Erase request','C-012 · local simulation')
for i,(a,s,col) in enumerate([('Index A','Simulated clear',C['sage']),('Cache B','Simulated clear',C['sage']),('Backup','Unverified',C['peach'])]):
 y=150+i*110;b+=line(310,195,510,y+40,C['muted'],'dashed' if i==2 else '')+box(510,y,430,86,a,s,col)
b+=text(40,490,'Overall result: Partial · no permanent deletion guarantee',20,C['clay'])
visuals['signal-destination-map']=b
b=badge()+text(40,95,'Move memory with context intact.',44,serif=True)+box(40,190,270,155,'Scoped source','Helio · support',C['sage'])+box(380,170,250,190,'Export bundle','Facts / versions / policy',C['paper'])+box(710,190,250,155,'Destination','Evaluation required',C['peach'])+line(310,265,380,265)+line(630,265,710,265)+text(40,440,'Sample portable manifest. No live integration or migration claim.',20)
visuals['report-export-manifest']=b
for slug,stages in [('correction-user-flow',['Select record','Open source','Compare versions','Confirm correction','Review current value']),('erasure-user-flow',['Select scope','Inspect destinations','Simulate request','Review checks','Export partial receipt']),('assessment-user-flow',['Describe assistant','Map stores','Mark backups','Review unknowns','Request conversation'])]:
 b=badge()+text(40,95,slug.replace('-',' ').capitalize(),42,serif=True)
 for i,s in enumerate(stages):
  x=40+i*186;b+=box(x,190,164,145,f'0{i+1}',s,C['sage'] if i%2==0 else C['white'])
  if i<4:b+=line(x+164,255,x+184,255)
 b+=text(40,430,'Keyboard and touch follow the same order; each step can be reviewed.',20)
 visuals[slug]=b
b=badge()+text(40,95,'Review queue',44,serif=True)+rect(40,135,920,355)
for i,(a,s) in enumerate([('C-012 · preference','Corrected · portal only'),('C-013 · backup boundary','Unverified'),('C-014 · source mismatch','Needs review'),('C-015 · other tenant','Denied'),('C-016 · destination check','Error')]):
 y=180+i*60;b+=text(65,y,a,20)+text(560,y,s,20,C['clay'] if i>0 else C['success'])+line(65,y+18,935,y+18,C['line'])
visuals['dashboard-review-queue']=b
b=badge()+text(40,95,'Coverage across known destinations',44,serif=True)
for i,(a,v,lab) in enumerate([('Index A',100,'Simulated clear'),('Cache B',100,'Simulated clear'),('Backup',0,'Unverified')]):
 y=175+i*105;b+=text(40,y,a,21)+rect(220,y-20,500,30,C['sage'])
 if v:b+=rect(220,y-20,500*v/100,30,C['muted'],C['muted'],4)
 b+=text(750,y,lab,17)
b+=text(40,490,'Categorical fixture states, not benchmark performance or production coverage.',18)
visuals['coverage-chart']=b
b=badge()+text(40,95,'Architecture with explicit boundaries',44,serif=True)
for x,y,a,s in [(40,180,'Assistant','Application boundary'),(380,110,'Factmend','Proposed memory boundary'),(720,180,'Index / cache','Adapter boundary'),(380,355,'Backup store','Unverified boundary')]:b+=box(x,y,250,95,a,s,C['sage'] if a=='Factmend' else C['white'])
b+=line(290,220,380,155)+line(630,155,720,220)+line(505,205,505,355,C['clay'],'dashed')
visuals['architecture-boundaries']=b
b=badge()+text(40,95,'Source → fact → current version',44,serif=True)+box(40,190,260,150,'Source excerpt','Synthetic support chat',C['peach'])+box(365,190,260,150,'Extracted fact','Preference · C-012',C['paper'])+box(690,190,270,150,'Current version','portal only',C['sage'])+line(300,265,365,265)+line(625,265,690,265)+text(40,440,'Every connection needs a source ID, timestamp and scope label.',20)
visuals['provenance-chain']=b
b=badge()+text(40,95,'A deliberately limited comparison',44,serif=True)
for i,(a,l,r) in enumerate([('Criterion','Native memory tools','Factmend concept'),('Primary role','Storage / retrieval varies','Governance evidence layer'),('Deployment','Provider dependent','Unvalidated'),('Erasure boundary','Verify each provider','Show unknown backups'),('Status','Consult vendor docs','Concept preview')]):
 y=165+i*62;b+=rect(40,y-30,920,62,C['sage'] if i==0 else C['white'],C['line'],0)+text(60,y,a,18)+text(300,y,l,17)+text(640,y,r,17)
visuals['alternatives-table']=b
b=badge()+text(40,95,'What the pilot would test',44,serif=True)
for i,(a,s) in enumerate([('Scope','Cross-tenant requests denied'),('Correction','Current value and prior version'),('Evidence','Index / cache / backup distinction')]):b+=box(40+i*310,180,280,180,a,s,C['sage'] if i==0 else C['white'])
b+=text(40,470,'Pilot hypotheses: $5k pilot / $2k monthly. No validated commercial offer.',19)
visuals['pilot-hypothesis']=b
b=badge()+text(40,95,'Learning from one record',44,serif=True)+rect(60,155,330,300,C['peach'])+rect(450,155,470,300,C['sage'])+text(90,220,'C-012',48,serif=True)+text(90,270,'Synthetic example',20)+text(480,220,'Source',24)+line(480,250,870,250)+text(480,305,'Scope',24)+line(480,335,870,335)+text(480,390,'Evidence boundary',24)
visuals['editorial-record-plate']=b
b=badge()+text(40,95,'Contact starts with a map.',44,serif=True)+box(40,180,320,200,'Your assistant','Tenant / purpose / stores',C['sage'])+box(500,180,450,200,'Memory deletion paths','Index → cache → backup',C['peach'])+line(360,280,500,280)+text(40,475,'Collect minimum business context; never ask for real customer memory.',20)
visuals['contact-map']=b
b=badge()+text(40,95,'Authentication presentation',44,serif=True)+rect(250,145,500,340)+text(290,205,'Return to your workspace',32,serif=True)+rect(290,240,420,54,C['paper'])+text(310,272,'Business email',18)+rect(290,315,420,54,C['sage'])+text(310,347,'Production sign-in unavailable',18)+text(290,425,'Concept preview · no password collection',17)
visuals['auth-presentation']=b
for n,b in visuals.items():write(f'visuals/{n}.svg',svg(b,title=n.replace('-',' '),desc='Factmend concept illustration. Synthetic data, not a working product.'))
# Pattern tiles, not dominant decoration.
patterns={'paper-grid':'<path d="M0 0H80V80H0Z" fill="none" stroke="#D7D2C5" stroke-width=".6"/>','registration-dots':'<circle cx="4" cy="4" r="1" fill="#7B816F" opacity=".24"/>','folio-lines':'<path d="M0 8h80 M0 24h80 M0 40h80 M0 56h80 M0 72h80" stroke="#D7D2C5" stroke-width=".5"/>','contour':'<path d="M-20 80Q40-60 100 80 M-20 100Q40-40 100 100 M-20 120Q40-20 100 120" fill="none" stroke="#59634B" opacity=".15"/>','linen':'<path d="M0 4h80 M4 0v80 M0 12h80 M12 0v80 M0 20h80 M20 0v80 M0 28h80 M28 0v80 M0 36h80 M36 0v80 M0 44h80 M44 0v80 M0 52h80 M52 0v80 M0 60h80 M60 0v80 M0 68h80 M68 0v80 M0 76h80 M76 0v80" stroke="#59634B" opacity=".04" stroke-width=".5"/>'}
for n,b in patterns.items():write(f'visuals/bg-{n}.svg',svg(b,80,80,n+' texture'))
roles={'surface-page':'paper','surface-card':'white','surface-muted':'sage','surface-warm':'peach','surface-inverse':'ink','text-primary':'ink','text-secondary':'muted','text-inverse':'paper','action-primary':'amber','action-primary-text':'ink','border-subtle':'line','border-control':'strongLine','focus-light':'ink','focus-dark':'amber','link':'link','status-error':'clay','status-success':'success'}
css='\n'.join(f'  --{k}: {v};' for k,v in C.items())+'\n'+'\n'.join(f'  --{k}: var(--{v});' for k,v in roles.items())
write('tokens/tokens.css',':root {\n'+css+'\n  --font-display: "Instrument Serif", serif;\n  --font-ui: "Inter", sans-serif;\n  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-5:24px; --space-6:32px; --space-7:48px; --space-8:64px; --space-9:96px; --space-10:128px;\n  --radius-control:8px; --radius-card:16px; --radius-feature:24px;\n  --shadow-card:0 8px 24px #1f26170a; --shadow-hover:0 16px 40px #1f261714; --shadow-panel:0 24px 64px #1f26171f;\n  --duration-fast:160ms; --duration-normal:260ms; --duration-flip:420ms; --ease: cubic-bezier(.2,.7,.2,1);\n}\n')
write('tokens/tokens.json',json.dumps({'primitives':C,'semantic':roles,'fonts':{'display':'Instrument Serif','ui':'Inter'},'space':[4,8,12,16,24,32,48,64,96,128],'radii':{'control':8,'card':16,'feature':24},'motionMs':[160,260,420]},indent=2))
def luminance(h):
 v=[int(h[i:i+2],16)/255 for i in (1,3,5)];v=[x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in v];return sum(x*y for x,y in zip(v,[.2126,.7152,.0722]))
contrast=[]
for a,b in [('ink','paper'),('muted','paper'),('ink','amber'),('paper','ink'),('clay','paper'),('link','paper'),('ink','peach'),('strongLine','white'),('white','amber')]:
 l=sorted([luminance(C[a]),luminance(C[b])]);contrast.append({'foreground':a,'background':b,'ratio':round((l[1]+.05)/(l[0]+.05),2)})
write('tokens/contrast.json',json.dumps(contrast,indent=2))
write('favicons/site.webmanifest',json.dumps({'name':'Factmend','short_name':'Factmend','start_url':'/','display':'standalone','background_color':C['paper'],'theme_color':C['ink'],'icons':[{'src':'icon-192.png','sizes':'192x192','type':'image/png'},{'src':'icon-512.png','sizes':'512x512','type':'image/png'},{'src':'maskable-512.png','sizes':'512x512','type':'image/png','purpose':'maskable'}]},indent=2))
print(f'Created {len(icons)} UI icons and {len(visuals)} explanatory SVG plates.')
