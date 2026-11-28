import asyncio, pathlib
from playwright.async_api import async_playwright

W = pathlib.Path('.').resolve()  # folder roboczy: node_modules (@fontsource), logo-t.png (= logo-zlote.png), logo-navy.png (= logo-granat.png)
F = 'node_modules/@fontsource'
Z = str(pathlib.Path(__file__).resolve().parent.parent / 'zdjecia')

CSS = f"""
@font-face{{font-family:PF;src:url({F}/playfair-display/files/playfair-display-latin-600-normal.woff2);font-weight:600}}
@font-face{{font-family:PF;src:url({F}/playfair-display/files/playfair-display-latin-ext-600-normal.woff2);font-weight:600;unicode-range:U+0100-024F}}
@font-face{{font-family:FG;src:url({F}/figtree/files/figtree-latin-400-normal.woff2);font-weight:400}}
@font-face{{font-family:FG;src:url({F}/figtree/files/figtree-latin-ext-400-normal.woff2);font-weight:400;unicode-range:U+0100-024F}}
@font-face{{font-family:FG;src:url({F}/figtree/files/figtree-latin-600-normal.woff2);font-weight:600}}
@font-face{{font-family:FG;src:url({F}/figtree/files/figtree-latin-ext-600-normal.woff2);font-weight:600;unicode-range:U+0100-024F}}
html,body{{margin:0;width:1080px;height:1350px;overflow:hidden;background:#1A2942;position:relative}}
.ph{{position:absolute;inset:0 0 280px 0;background-size:cover;background-position:center 20%}}
.sh{{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(26,41,66,0) 30%,rgba(26,41,66,.85) 58%,#1A2942 68%)}}
.n{{position:absolute;top:62px;right:86px;font:600 26px FG;letter-spacing:3px;color:#A0B2C6}}
.box{{position:absolute;left:86px;right:86px;top:260px}}
.box.low{{top:auto;bottom:250px}}
.k{{font:600 26px FG;letter-spacing:7px;color:#FFD23F;text-transform:uppercase}}
h1{{font:600 74px/1.12 PF;color:#FFFFFF;margin:22px 0 30px}}
h1 em{{font-style:normal;color:#FFD23F}}
.big{{font:600 230px/1 PF;color:#FFD23F;margin:20px 0 10px}}
p{{font:400 38px/1.42 FG;color:#E7EDF4;margin:0 0 22px}} p b{{color:#FFD23F;font-weight:600}}
.s{{font:400 27px/1.4 FG;color:#A0B2C6;margin-top:18px}}
table{{border-collapse:collapse;width:100%;margin:10px 0 20px}}
td{{font:400 38px FG;color:#E7EDF4;padding:22px 0;border-bottom:1px solid rgba(160,178,198,.35)}}
td.v{{text-align:right;font-weight:600}} tr.g td{{color:#FFD23F;font-weight:600;border-bottom:none}}
.cta{{display:inline-block;background:#FFD23F;color:#1A2942;font:600 36px FG;padding:22px 32px;border-radius:10px;margin-top:10px}}
.foot{{position:absolute;left:86px;right:86px;bottom:56px;display:flex;align-items:center;gap:26px}}
.foot img{{width:60px;height:60px}} .foot span{{font:600 24px FG;letter-spacing:3.5px;color:#FFD23F;white-space:nowrap}}
.foot i{{flex:1;height:1px;background:rgba(198,161,91,.55)}}
"""+"""
body.y{background:#FFD23F} body.y .k{color:#1A2942;opacity:.75} body.y h1,body.y p,body.y td{color:#1A2942}
body.y h1 em,body.y p b,body.y .big,body.y tr.g td{color:#2B59A8} body.y .s,body.y .n{color:#5A4A10}
body.y td{border-bottom-color:rgba(26,41,66,.25)} body.y .foot span{color:#1A2942} body.y .foot i{background:rgba(26,41,66,.45)}
body.y .cta{background:#1A2942;color:#FFD23F}
"""

def page(i, body, photo=None):
    y = (not photo) and i % 2 == 1
    logo = "logo-navy.png" if y else "logo-t.png"
    ph = f'<div class="ph" style="background-image:url({Z}/{photo});background-position:{"78%" if i==1 else "center"} 20%"></div><div class="sh"></div>' if photo else ''
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style></head><body class="{'y' if y else ''}">{ph}
<div class="n">{i}/8</div>{body}
<div class="foot"><img src="{logo}"><span>PRIVATE.AGENT · ANDRZEJ GONCZAR</span><i></i></div></body></html>"""

S = [
 page(1, '<div class="box low"><div class="k">Niezdolność do pracy</div><h1>Pół roku na L4.<br>Ile zostaje <em>z pensji</em>?</h1><p>Na etacie zwykle 80%.<br>Przy własnej firmie czasem nic.</p></div>', 'biurowiec-granatowy-garnitur.jpg'),
 page(2, '<div class="box"><div class="k">Scenariusz</div><h1>„Powrót do sprawności zajmie pół roku.”</h1><p>Tak mówi lekarz.</p><p>A rachunki, rata i zajęcia dzieci przychodzą <b>co miesiąc</b>. Jak zawsze.</p></div>'),
 page(3, '<div class="box"><div class="k">Zasiłek chorobowy</div><div class="big">80%</div><h1>Tyle zwykle wynosi zasiłek.<br>Nie 100%.</h1><p class="s">100% m.in. w ciąży i po wypadku w drodze do pracy lub z pracy.</p></div>'),
 page(4, '<div class="box"><div class="k">Przykład</div><h1>Ile brakuje co miesiąc?</h1><table><tr><td>Podstawa wymiaru</td><td class="v">6 000 zł</td></tr><tr><td>Zasiłek (80%)</td><td class="v">ok. 4 800 zł</td></tr><tr><td>Brakuje miesięcznie</td><td class="v">ok. 1 200 zł</td></tr><tr class="g"><td>Przez pół roku</td><td class="v">ok. 7 200 zł</td></tr></table><p class="s">Przykład uproszczony, kwoty brutto.</p></div>'),
 page(5, '<div class="box"><div class="k">Limit</div><div class="big">182 dni</div><h1>Tyle maksymalnie trwa zasiłek chorobowy.</h1><p class="s">W ciąży i przy gruźlicy do 270 dni.</p></div>'),
 page(6, '<div class="box"><div class="k">Własna firma</div><h1>Chorobowe jest <em>dobrowolne</em>.</h1><p>Bez tej składki nie ma zasiłku.</p><p>Ze składką prawo do niego masz dopiero po <b>90 dniach</b> ubezpieczenia.</p></div>'),
 page(7, '<div class="box"><div class="k">Zanim wybierzesz ochronę</div><h1>Policz swoją lukę.</h1><table><tr><td>Ile wydajesz miesięcznie</td><td class="v">A</td></tr><tr><td>minus ile dostaniesz na L4</td><td class="v">B</td></tr><tr class="g"><td>= kwota, której zabraknie</td><td class="v">A − B</td></tr></table></div>'),
 page(8, '<div class="box low"><div class="k">Policzmy razem</div><h1>Pomogę Ci policzyć tę lukę.</h1><div class="cta">Napisz L4 w komentarzu</div><p class="s">Andrzej Gonczar, agent ubezpieczeniowy PZU. Zakres ochrony w OWU.</p></div>', 'portret-granatowy-garnitur.jpg'),
]

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={'width':1080,'height':1350})
        for i, h in enumerate(S, 1):
            f = W / f'n-{i:02d}.html'; f.write_text(h)
            await pg.goto(f.as_uri()); await pg.evaluate('document.fonts.ready'); await pg.wait_for_timeout(300)
            await pg.screenshot(path=str(W/f'n-{i:02d}.png'))
        await b.close()
asyncio.run(main())
