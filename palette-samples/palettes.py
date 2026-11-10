def hx(h): h=h.lstrip('#'); return ", ".join(str(int(h[i:i+2],16)) for i in (0,2,4))
P = {
 "A_Petrol_Teal": dict(name="A. 페트롤 틸 (깊은 청록)", hero="#0b3436", line="#8fd3c8", dot="#3cc2ae", eyebrow="#8fe0d2", lead="#c6dedb",
   light=dict(ink="#0e2224",text="#2a3f41",muted="#5b6f71",bg="#f6faf9",surface="#ffffff",line="#d7e5e3",primary="#0e5a57",psoft="#e3f1ef",accent="#14907f",asoft="#dff3ef"),
   dark=dict(ink="#e6f2f0",text="#bfd3d0",muted="#8aa3a0",bg="#0a1615",surface="#10201f",line="#203635",primary="#7fd0c4",psoft="#14302e",accent="#3cc2ae",asoft="#123230"),
   card=("#0e3233","#0a2122","#3cc2ae","#c6dedb","#93b3af")),
 "B_Graphite_Amber": dict(name="B. 그래파이트 & 앰버", hero="#1b1e23", line="#c9b58a", dot="#e5a93b", eyebrow="#f0c470", lead="#d2d4d8",
   light=dict(ink="#16181c",text="#33373d",muted="#6a6f77",bg="#f7f7f6",surface="#ffffff",line="#e2e1dd",primary="#2b2f36",psoft="#efede8",accent="#b7791f",asoft="#f7ecd8"),
   dark=dict(ink="#efefee",text="#c9cbce",muted="#92969c",bg="#111214",surface="#1a1c20",line="#2c2f35",primary="#e5c27f",psoft="#2a2722",accent="#e5a93b",asoft="#2e2616"),
   card=("#24272d","#16181c","#e5a93b","#d2d4d8","#a3a7ad")),
 "C_Aubergine": dict(name="C. 오베르진 (짙은 자주)", hero="#26172f", line="#c9a8dc", dot="#d88bd0", eyebrow="#e6b8ef", lead="#d9cde0",
   light=dict(ink="#1d1222",text="#3a2f40",muted="#6e6475",bg="#faf8fb",surface="#ffffff",line="#e6dfea",primary="#4b2a63",psoft="#f0e8f5",accent="#9b3d8f",asoft="#f6e6f3"),
   dark=dict(ink="#f1ebf4",text="#d0c5d6",muted="#9d91a4",bg="#140d18",surface="#1d1423",line="#33263b",primary="#d1a8ea",psoft="#2b1d34",accent="#d88bd0",asoft="#33192f"),
   card=("#2e1b38","#1c1022","#d88bd0","#d9cde0","#ab9bb4")),
 "D_Oxblood_Sand": dict(name="D. 옥스블러드 & 샌드 (버건디)", hero="#2c1014", line="#e0b9a0", dot="#e6a868", eyebrow="#f0c9a0", lead="#e3d2cc",
   light=dict(ink="#221214",text="#40302f",muted="#766563",bg="#faf8f6",surface="#ffffff",line="#ebe0dc",primary="#6e1d27",psoft="#f5e8e6",accent="#b35a2a",asoft="#f7e9df"),
   dark=dict(ink="#f4ecea",text="#d6c8c4",muted="#a39491",bg="#150c0d",surface="#1f1314",line="#382426",primary="#eab2a6",psoft="#33191c",accent="#e6a868",asoft="#38241a"),
   card=("#38151b","#210c10","#e6a868","#e3d2cc","#b39f9a")),
}
def css(k):
    p=P[k]
    def blk(m):
        return f"--ink:{m['ink']};--text:{m['text']};--muted:{m['muted']};--bg:{m['bg']};--surface:{m['surface']};--line:{m['line']};--primary:{m['primary']};--primary-soft:{m['psoft']};--accent:{m['accent']};--accent-soft:{m['asoft']};"
    c=p['card']
    common=f"--hero-bg:{p['hero']};--hero-rgb:{hx(p['hero'])};--hero-line-rgb:{hx(p['line'])};--hero-dot-rgb:{hx(p['dot'])};--hero-eyebrow:{p['eyebrow']};--hero-lead:{p['lead']};--card-top:{c[0]};--card-bot:{c[1]};--glow-rgb:{hx(c[2])};--card-accent:{c[2]};--card-text:{c[3]};--card-sub:{c[4]};"
    return f":root{{{common}{blk(p['light'])}}}\n@media (prefers-color-scheme: dark){{:root:not([data-theme=\"light\"]){{{common}{blk(p['dark'])}}}}}\n:root[data-theme=\"dark\"]{{{common}{blk(p['dark'])}}}\n.btn-primary{{color:#fff}}"
P2 = {
 "E_Black_Burgundy": dict(name="E. 블랙 & 버건디", hero="#0c0b0c", line="#c98a95", dot="#b8283f", eyebrow="#e08a98", lead="#d6d0d1",
   light=dict(ink="#111011",text="#2f2c2d",muted="#6b6667",bg="#fafafa",surface="#ffffff",line="#e5e2e2",primary="#111011",psoft="#f2eeee",accent="#9e1b32",asoft="#f6e4e7"),
   dark=dict(ink="#f2f0f0",text="#cfc9ca",muted="#958e8f",bg="#09090a",surface="#141314",line="#2a2627",primary="#e6a3ae",psoft="#2a1519",accent="#c7334c",asoft="#2e1218"),
   card=("#161214","#0a090a","#c7334c","#d6d0d1","#a39b9c")),
 "F_DarkGray_Burgundy": dict(name="F. 다크 그레이 & 버건디", hero="#2a2c30", line="#c7a2a8", dot="#a8243a", eyebrow="#e3a1ac", lead="#d4d5d8",
   light=dict(ink="#1f2124",text="#3a3d42",muted="#6d7076",bg="#f6f6f7",surface="#ffffff",line="#e1e2e5",primary="#3a3d42",psoft="#ececef",accent="#8f1d2f",asoft="#f4e3e6"),
   dark=dict(ink="#eeeff1",text="#c8cacf",muted="#91949a",bg="#1a1b1e",surface="#232529",line="#363940",primary="#e3a1ac",psoft="#3a2529",accent="#c2344b",asoft="#3c1d23"),
   card=("#33363b","#222428","#c2344b","#d4d5d8","#a1a4aa")),
 "G_Slate_Copper": dict(name="G. 다크 슬레이트 & 코퍼(구리)", hero="#1f2a33", line="#d3b39a", dot="#d0844d", eyebrow="#f0b78c", lead="#cfd7de",
   light=dict(ink="#17212a",text="#33414c",muted="#66737e",bg="#f6f8f9",surface="#ffffff",line="#dfe4e8",primary="#24343f",psoft="#e8edf0",accent="#b4622d",asoft="#f6e8dd"),
   dark=dict(ink="#eef2f5",text="#c6d0d7",muted="#8f9ba5",bg="#121a20",surface="#1a242c",line="#2c3a45",primary="#e8b48f",psoft="#2e2822",accent="#d0844d",asoft="#33231a"),
   card=("#24323c","#151e25","#d0844d","#cfd7de","#9eabb5")),
 "H_Ink_Cyan": dict(name="H. 잉크 블랙 & 일렉트릭 시안", hero="#07090d", line="#7fd8ec", dot="#22d3ee", eyebrow="#67e8f9", lead="#cdd6df",
   light=dict(ink="#0b0e13",text="#2b313a",muted="#646b75",bg="#f7f9fb",surface="#ffffff",line="#e0e5ea",primary="#0b0e13",psoft="#e9eef2",accent="#0891b2",asoft="#dff4f8"),
   dark=dict(ink="#eef3f7",text="#c6ced6",muted="#8a939d",bg="#06080b",surface="#0f1318",line="#1f262e",primary="#67e8f9",psoft="#0f2a30",accent="#22d3ee",asoft="#0c2a31"),
   card=("#0f151c","#06080b","#22d3ee","#cdd6df","#94a0ab")),
}
P.update(P2)
