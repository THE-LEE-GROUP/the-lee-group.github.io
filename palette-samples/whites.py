def hx(h): h=h.lstrip('#'); return ", ".join(str(int(h[i:i+2],16)) for i in (0,2,4))
W = {
 "W1_Clean_Teal": dict(name="W1. 클린 화이트 & 딥 틸", ink="#0b1f2a", text="#2c3e4a", muted="#62727d", bg="#ffffff", surface="#ffffff", line="#e2e9ee",
    primary="#0b3b4a", psoft="#e7f2f5", accent="#0e7490", asoft="#e3f4f8", fill="#0e7490", fillh="#155e75",
    hero="#f1f7f9", heroline="#7fb8c6", herodot="#0e7490", eyebrow="#0e7490", card_top="#ffffff", card_bot="#f3f8fa", glow="#0e7490"),
 "W2_Paper_Navy": dict(name="W2. 페이퍼 화이트 & 네이비 블루", ink="#101b33", text="#33405a", muted="#67728a", bg="#fbfcfe", surface="#ffffff", line="#e3e8f2",
    primary="#1b2a4a", psoft="#e9eef8", accent="#1d4ed8", asoft="#e6edfd", fill="#1d4ed8", fillh="#1e3a8a",
    hero="#f2f5fb", heroline="#93a8d8", herodot="#1d4ed8", eyebrow="#1d4ed8", card_top="#ffffff", card_bot="#f4f7fc", glow="#1d4ed8"),
 "W3_Soft_Burgundy": dict(name="W3. 소프트 화이트 & 버건디", ink="#1d1416", text="#3d3234", muted="#76696b", bg="#fdfcfc", surface="#ffffff", line="#ece4e5",
    primary="#3a1f25", psoft="#f6eced", accent="#8f1d2f", asoft="#f7e7ea", fill="#8f1d2f", fillh="#6b1522",
    hero="#f8f3f4", heroline="#cfa2aa", herodot="#8f1d2f", eyebrow="#8f1d2f", card_top="#ffffff", card_bot="#faf5f6", glow="#8f1d2f"),
 "W4_Gray_Ink_Cyan": dict(name="W4. 쿨 그레이 화이트 & 잉크 블랙·시안 (현재 색 유지)", ink="#0b0e13", text="#2b313a", muted="#646b75", bg="#f7f9fb", surface="#ffffff", line="#e0e5ea",
    primary="#0b0e13", psoft="#e9eef2", accent="#0e7490", asoft="#dff4f8", fill="#0e7490", fillh="#155e75",
    hero="#eef2f5", heroline="#8fa3b3", herodot="#0e7490", eyebrow="#0e7490", card_top="#ffffff", card_bot="#f2f5f8", glow="#0e7490"),
}
def css(k):
    p=W[k]
    tok=(f"--ink:{p['ink']};--text:{p['text']};--muted:{p['muted']};--bg:{p['bg']};--surface:{p['surface']};--line:{p['line']};"
         f"--primary:{p['primary']};--primary-soft:{p['psoft']};--accent:{p['accent']};--accent-soft:{p['asoft']};--fill:{p['fill']};--fill-hover:{p['fillh']};--on-accent:#fff;"
         f"--hero-bg:{p['hero']};--hero-rgb:{hx(p['hero'])};--hero-line-rgb:{hx(p['heroline'])};--hero-dot-rgb:{hx(p['herodot'])};--hero-eyebrow:{p['eyebrow']};--hero-lead:{p['text']};"
         f"--card-top:{p['card_top']};--card-bot:{p['card_bot']};--glow-rgb:{hx(p['glow'])};--card-accent:{p['accent']};--card-text:{p['text']};--card-sub:{p['muted']};color-scheme:light;")
    return (f":root,:root:not([data-theme='light']),:root[data-theme='dark']{{{tok}}}"
            f"@media (prefers-color-scheme: dark){{:root:not([data-theme='light']){{{tok}}}}}"
            f".hero h1{{color:var(--ink)}}.hero .btn-ghost{{color:var(--ink);border-color:var(--line)}}.hero .btn-ghost:hover{{background:var(--primary-soft);color:var(--ink)}}"
            f".hero{{border-bottom:1px solid var(--line)}}.res-card h3{{color:var(--ink)}}.res-card p{{color:var(--text)}}"
            f".res-card{{box-shadow:0 1px 2px rgba(0,0,0,.05),0 10px 30px rgba(var(--glow-rgb),.10);border-color:rgba(var(--glow-rgb),.28)}}")
W2 = {
 "W5_White_Emerald": dict(name="W5. 화이트 & 딥 에메랄드", ink="#0f1f1a", text="#2f403a", muted="#66756f", bg="#fcfdfc", surface="#ffffff", line="#e1ebe6",
    primary="#103c30", psoft="#e8f3ee", accent="#047857", asoft="#e1f4ec", fill="#047857", fillh="#065f46",
    hero="#f1f7f4", heroline="#8fc2ad", herodot="#047857", eyebrow="#047857", card_top="#ffffff", card_bot="#f3f8f5", glow="#047857"),
 "W6_White_Charcoal_Gold": dict(name="W6. 화이트 & 차콜·골드", ink="#1a1a1c", text="#3a3a3e", muted="#707075", bg="#fcfcfb", surface="#ffffff", line="#e7e5e1",
    primary="#26262a", psoft="#f1efea", accent="#a16207", asoft="#f8efdc", fill="#26262a", fillh="#000000",
    hero="#f6f4ef", heroline="#c9b48a", herodot="#a16207", eyebrow="#a16207", card_top="#ffffff", card_bot="#f8f6f1", glow="#a16207"),
 "W7_White_Indigo": dict(name="W7. 화이트 & 인디고 바이올렛", ink="#16152b", text="#36354f", muted="#6b6a85", bg="#fcfcff", surface="#ffffff", line="#e5e4f2",
    primary="#2a2670", psoft="#ecebfa", accent="#4f46e5", asoft="#ebeafd", fill="#4f46e5", fillh="#3730a3",
    hero="#f3f2fc", heroline="#a5a1e6", herodot="#4f46e5", eyebrow="#4f46e5", card_top="#ffffff", card_bot="#f5f4fd", glow="#4f46e5"),
 "W8_White_Slate_Coral": dict(name="W8. 화이트 & 슬레이트·코랄", ink="#18212b", text="#36424f", muted="#6a7682", bg="#fcfcfd", surface="#ffffff", line="#e3e7ec",
    primary="#26354a", psoft="#ebeff4", accent="#c2410c", asoft="#fcebe2", fill="#c2410c", fillh="#9a3412",
    hero="#f2f4f7", heroline="#9fb0c2", herodot="#c2410c", eyebrow="#c2410c", card_top="#ffffff", card_bot="#f4f6f9", glow="#c2410c"),
}
W.update(W2)
