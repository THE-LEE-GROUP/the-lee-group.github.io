/* =====================================================================
   홈페이지 내용 파일 (data.js)
   ---------------------------------------------------------------------
   논문·구성원·소식은 이 파일만 고치면 홈페이지에 반영됩니다.
   항목을 추가할 때는 기존 항목 하나를 통째로 복사해서 내용만 바꾸세요.
   따옴표(" ")와 끝의 쉼표(,)를 지우지 않도록 주의하세요.
   ===================================================================== */

window.LAB = {
  name: "Membrane Separations Lab",
  nameKo: "분리막연구실",
  group: "The Lee Group",
  dept: "Department of Organic Materials and Fiber Engineering",
  deptKo: "전북대학교 유기소재섬유공학과",
  univ: "Jeonbuk National University",
  /* 스팸 수집 방지를 위해 이메일을 둘로 나눠 저장합니다 */
  emailUser: "yjlee",
  emailDomain: "jbnu.ac.kr",
  phone: "+82-63-270-2351",
  address: "Room 410, Engineering Building 2, 567 Baekje-daero, Deokjin-gu, Jeonju-si, Jeonbuk State 54896, Republic of Korea",
  addressKo: "54896 전북특별자치도 전주시 덕진구 백제대로 567 공과대학 2호관 410호",
  scholar: "https://scholar.google.com/citations?user=G1rYg8wAAAAJ&hl=ko"
};

/* ---------- 모집 안내 팝업 (국문/영문) ---------- */
window.RECRUIT = {
  ko: {
    title: "분리막연구실에서 함께할 사람을 찾습니다",
    hook: "",
    body: "학부연구생, 석사과정, 박사과정, 박사후연구원을 모집합니다. 새로운 분리소재와 막분리공정, 그 바탕이 되는 전달현상, 그리고 AI/ML로 소재 성능을 예측하는 연구에 관심이 있다면 환영합니다.",
    contact: "이영주 교수에게 편하게 메일 주세요. 연구실 문은 늘 열려 있습니다.",
    roles: ["학부연구생", "석사과정", "박사과정", "박사후연구원"],
    more: "모집 안내 자세히 보기",
    snooze: "24시간 동안 보지 않기",
    close: "닫기"
  },
  en: {
    title: "We are looking for new lab members",
    hook: "Our membranes select molecules. We select for curiosity.",
    body: "We welcome undergraduate researchers, M.S. and Ph.D. students, and postdoctoral researchers. If separation materials, membrane processes, the transport phenomena behind them, or AI/ML-driven materials prediction excite you, we would love to hear from you.",
    contact: "Drop Prof. Youngjoo Lee a line. Our door is always open.",
    roles: ["Undergraduate researcher", "M.S.", "Ph.D.", "Postdoc"],
    more: "See open positions",
    snooze: "Don't show for 24 hours",
    close: "Close"
  }
};

/* ---------- 연구 분야 ---------- */
window.RESEARCH = [
  {
    id: "data",
    art: "research-art-1.jpg",
    title: "Data-driven membrane design",
    ko: "데이터 기반 분리막 설계",
    summary: "We predict how complex liquid mixtures permeate polymer membranes using machine learning, starting from nothing more than the polymer structure and the feed composition.",
    points: [
      "Machine-learning models that map chemical structure to sorption and diffusion",
      "ML coupled with Maxwell–Stefan transport theory for mixture permeation without experimental input",
      "Prediction-driven screening of polymers for organic solvent reverse osmosis (OSRO)"
    ]
  },
  {
    id: "transport",
    art: "research-art-2.jpg",
    title: "Transport phenomena in polymer membranes",
    ko: "고분자 분리막 내 물질전달 · 열역학",
    summary: "We study how molecules dissolve in and move through dense and microporous polymers, and how coupling between penetrants changes separation performance.",
    points: [
      "Diffusion transitions of organic liquid mixtures in dense polymer membranes",
      "Polymer–solute affinity described by Hansen solubility parameters and Flory–Huggins theory",
      "Membrane cascades hybridized with distillation for aromatic hydrocarbon fractionation"
    ]
  },
  {
    id: "nano",
    art: "research-art-3.jpg",
    title: "Nanostructured materials for separations",
    ko: "물 · 유기용매 · 이온 분리용 나노구조 소재",
    summary: "We build polymeric and soft materials with precisely defined sub-nanometer pores to separate water, organic solvents and ions.",
    points: [
      "Self-assembled lyotropic membranes with hexagonal mesophases",
      "Ion-selective transport for recovering valuable ions from brines",
      "Microporous polymers for sustainable fuel and hydrocarbon separations"
    ]
  }
];

/* ---------- 구성원 ----------
   role: "pi" | "postdoc" | "phd" | "ms" | "ug" | "alumni"  */
window.MEMBERS = [
  {
    role: "ug",
    name: "Min Wook Kim",
    nameKo: "김민욱",
    title: "Undergraduate Researcher",
    detail: "B.S. student, Organic Materials and Fiber Engineering (entered 2022)",
    hobbies: "Exercise, photography",
    photo: "member-kim-minwook.jpg"
  }
];

/* ---------- 소식 (최신이 위로) ---------- */
window.NEWS = [
  { date: "2026", text: "Min Wook Kim joins the lab as our first undergraduate researcher. Welcome!" },
  { date: "2026", text: "Prof. Youngjoo Lee starts as Assistant Professor at Jeonbuk National University and launches the Membrane Separations Lab." },
  { date: "2025", text: "Our paper on prediction-driven selection of microporous polymer membranes for OSRO is selected as an Editor's Choice in Journal of Membrane Science." },
  { date: "2025", text: "Fluorine-rich poly(arylene amine) membranes for the separation of liquid aliphatic compounds published in Science." }
];

/* ---------- 논문 (최신이 위로) ----------
   교수님 이름은 [Y. J. Lee]처럼 대괄호로 감싸면 굵게 표시됩니다.
   tag: 표시하고 싶은 강조 문구 (없으면 "")
   highlight: 1, 2, 3 … 처럼 번호를 붙이면 그 순서대로 홈 화면 Highlights에 표시됩니다  */
window.PUBS = [
  { year: 2025, authors: "[Y. J. Lee], J. Nistane, R. Ramprasad, R. P. Lively", title: "Prediction-based trade-off analysis of polymer membranes for organic solvent reverse osmosis of hydrocarbons", venue: "Polymer", ref: "339, 129153", tag: "Special Topics", highlight: 5 },
  { year: 2025, authors: "W. J. Jang, [Y. J. Lee], V. Perez, B. Payero, M. G. Finn, R. P. Lively", title: "The unusual transport of phenolic compounds through poly(triazole) membranes", venue: "Journal of Membrane Science", ref: "125092", tag: "" },
  { year: 2025, authors: "[Y. J. Lee], A. M. Robinson, W. J. Jang, Z. Ye, Y. Ren, Y. Xia, R. P. Lively", title: "Prediction-driven selection of microporous polymer membranes for organic solvent reverse osmosis", venue: "Journal of Membrane Science", ref: "734, 124475", tag: "Editor's Choice", highlight: 4 },
  { year: 2025, authors: "J. Nistane, R. Datta, [Y. J. Lee], H. Sahu, S. S. Jang, R. P. Lively, R. Ramprasad", title: "Polymer design for solvent separations by integrating simulations, experiments and known physics via machine learning", venue: "npj Computational Materials", ref: "11, 187", tag: "" },
  { year: 2025, authors: "Y. Ren, H. Ma, J. Kim, M. Al Otmi, P. Lin, C. Dai, [Y. J. Lee], Z. Zhai, W. J. Jang, S. Yang, A. Sarswat, Y. Felliachi, J. Sampath, M. Realff, R. P. Lively, S. Guo", title: "Fluorine-rich poly(arylene amine) membranes for the separation of liquid aliphatic compounds", venue: "Science", ref: "387 (6730), 208–214", tag: "Science" },
  { year: 2025, authors: "[Y. J. Lee], R. P. Lively", title: "A transition in diffusion behaviors of organic liquid mixtures in dense polymer membranes", venue: "Journal of Membrane Science", ref: "713, 123346", tag: "", highlight: 3 },
  { year: 2025, authors: "[Y. J. Lee], H. Y. Jang, B. D. Marshall, M. I. L. Abutaqiya, N. Rangnekar, N. C. Bruno, M. G. Finn, R. P. Lively", title: "Fractionation of complex aromatic hydrocarbon mixtures using membrane cascades hybridized with distillation", venue: "Chemical Engineering Journal", ref: "503, 158170", tag: "", highlight: 2 },
  { year: 2024, authors: "B. D. Marshall, J. R. Johnson, [Y. J. Lee], D. Moser, R. P. Lively", title: "Organic solvent reverse osmosis separations of hydrocarbon-alcohol mixtures using Matrimid membranes", venue: "Journal of Membrane Science", ref: "689, 122168", tag: "" },
  { year: 2023, authors: "Y. Ren, B. C. Jean, W. J. Jang, A. Sarswat, [Y. J. Lee], E. K. McGuinness, K. Dhavala, M. D. Losego, R. P. Lively", title: "Engineering organic solvent reverse osmosis in hybrid AlOxHy/polymer of intrinsic microporosity 1 (PIM-1) membranes using vapor phase infiltration", venue: "Journal of Membrane Science Letters", ref: "3 (2), 100064", tag: "" },
  { year: 2023, authors: "N. C. Bruno, R. Mathias, [Y. J. Lee], G. Zhu, Y.-H. Ahn, N. D. Rangnekar, J. R. Johnson, S. Hoy, I. Bechis, A. Tarzia, K. E. Jelfs, B. A. McCool, R. P. Lively, M. G. Finn", title: "Solution-processable polytriazoles from spirocyclic monomers for membrane-based hydrocarbon separations", venue: "Nature Materials", ref: "22 (12), 1540–1547", tag: "Nature Materials" },
  { year: 2023, authors: "[Y. J. Lee], L. Chen, J. Nistane, H. Y. Jang, D. J. Weber, J. K. Scott, N. D. Rangnekar, B. D. Marshall, W. Li, J. R. Johnson, et al., R. Ramprasad, R. P. Lively", title: "Data-driven predictions of complex organic mixture permeation in polymer membranes", venue: "Nature Communications", ref: "14, 4931", tag: "Nature Communications", highlight: 1 },
  { year: 2022, authors: "J. Nistane, L. Chen, [Y. J. Lee], R. P. Lively, R. Ramprasad", title: "Estimation of the Flory-Huggins interaction parameter of polymer-solvent mixtures using machine learning", venue: "MRS Communications", ref: "12 (6), 1096–1102", tag: "" },
  { year: 2020, authors: "J. Shin, [Y. J. Lee], A. Jan, S. M. Choi, M. Y. Park, S. Choi, J. Y. Hwang, S. Hong, S. G. Park, H. J. Chang, et al.", title: "Highly active and thermally stable single-atom catalysts for high-temperature electrochemical devices", venue: "Energy & Environmental Science", ref: "13 (12), 4903–4920", tag: "" },
  { year: 2019, authors: "S. H. Park, Y. J. Cheon, [Y. J. Lee], K. H. Shin, Y. Y. Hwang, Y. S. Jeong, Y. J. Lee", title: "Maximal utilization of a high-loading cathode in Li–O2 batteries: A double oxygen supply system", venue: "ACS Applied Materials & Interfaces", ref: "11 (34), 30872–30879", tag: "" },
  { year: 2018, authors: "N.-I. Kim, S.-H. Cho, S. H. Park, [Y. J. Lee], R. A. Afzal, J. Yoo, Y.-S. Seo, Y. J. Lee, J.-Y. Park", title: "B-site doping effects of NdBa0.75Ca0.25Co2O5+δ double perovskite catalysts for oxygen evolution and reduction reactions", venue: "Journal of Materials Chemistry A", ref: "6 (36), 17807–17818", tag: "" },
  { year: 2018, authors: "S. H. Park, T. H. Lee, [Y. J. Lee], H. B. Park, Y. J. Lee", title: "Graphene oxide sieving membrane for improved cycle life in high-efficiency redox-mediated Li–O2 batteries", venue: "Small", ref: "14 (34), 1801456", tag: "" },
  { year: 2018, authors: "[Y. J. Lee], S. H. Park, S. H. Kim, Y. Ko, K. Kang, Y. J. Lee", title: "High-rate and high-areal-capacity air cathodes with enhanced cycle life based on RuO2/MnO2 bifunctional electrocatalysts supported on CNT for pragmatic Li–O2 batteries", venue: "ACS Catalysis", ref: "8 (4), 2923–2934", tag: "" },
  { year: 2018, authors: "[Y. J. Lee], W.-J. Kwak, Y.-K. Sun, Y. J. Lee", title: "Clarification of solvent effects on discharge products in Li–O2 batteries through a titration method", venue: "ACS Applied Materials & Interfaces", ref: "10 (1), 526–533", tag: "" },
  { year: 2018, authors: "S. H. Kim, [Y. J. Lee], D. H. Kim, Y. J. Lee", title: "Bimetallic metal–organic frameworks as efficient cathode catalysts for Li–O2 batteries", venue: "ACS Applied Materials & Interfaces", ref: "10 (1), 660–667", tag: "" },
  { year: 2017, authors: "[Y. J. Lee], D. H. Kim, T.-G. Kang, Y. Ko, K. Kang, Y. J. Lee", title: "Bifunctional MnO2-coated Co3O4 hetero-structured catalysts for reversible Li–O2 batteries", venue: "Chemistry of Materials", ref: "29 (24), 10542–10550", tag: "" },
  { year: 2017, authors: "H.-H. Wang, Y. J. Lee, R. S. Assary, C. Zhang, X. Luo, P. C. Redfern, J. Lu, [Y. J. Lee], D. H. Kim, T.-G. Kang, E. Indacochea, K. C. Lau, K. Amine, L. A. Curtiss", title: "Lithium superoxide hydrolysis and relevance to Li–O2 batteries", venue: "The Journal of Physical Chemistry C", ref: "121 (18), 9657–9661", tag: "" }
];

window.THESIS = "[Y. J. Lee], Predicting complex mixture permeation in polymer membranes, Ph.D. Dissertation, Georgia Institute of Technology (2024)";

window.PATENTS = [
  "Highly efficient bi-functional catalysts for Li-air batteries, KR Patent 10-2017-0117421 (issued)",
  "Manufacturing process of active materials–separator monolith electrodes for high-capacity and high-rate Li-air batteries, KR Patent 10-2018-0134300 (issued)"
];

/* ---------- 교수 소개 ---------- */
window.PI = {
  name: "Youngjoo Lee (Young Joo Lee), Ph.D.",
  nameKo: "이영주 교수",
  title: "Assistant Professor",
  photo: "profile.jpg",
  bio: "Youngjoo Lee is an Assistant Professor in the Department of Organic Materials and Fiber Engineering at Jeonbuk National University. He received his Ph.D. in Chemical and Biomolecular Engineering from the Georgia Institute of Technology under Prof. Ryan P. Lively, where he developed an integrated transport framework that predicts complex mixture permeation in polymer membranes from chemical structures alone, with no experimental input required. He then worked as a postdoctoral associate with Prof. Chinedum Osuji at the University of Pennsylvania on ion-selective transport through self-assembled membranes with sub-nanometer pores.",
  education: [
    ["2024–2026", "Postdoctoral Associate, Chemical and Biomolecular Engineering, University of Pennsylvania (Advisor: Prof. Chinedum Osuji)"],
    ["2024", "Ph.D., Chemical and Biomolecular Engineering, Georgia Institute of Technology (Advisor: Prof. Ryan P. Lively)"],
    ["2019", "M.S., Energy Engineering, Hanyang University (Advisor: Prof. Yun Jung Lee)"],
    ["2016", "B.S., Energy Engineering, Hanyang University, Summa Cum Laude"]
  ],
  service: [
    "Director of International Cooperation, The Membrane Society of Korea",
    "AI Coordinator, Department of Organic Materials and Fiber Engineering, JBNU"
  ],
  awards: [
    ["2026–2031", "Sejong Science Fellowship, National Research Foundation of Korea (세종과학펠로우십)"],
    ["2023", "Student Fellowship Award, 32nd North American Membrane Society Annual Meeting"],
    ["2019–2023", "Graduate Study Fellowship, Kwanjeong Educational Foundation"],
    ["2019", "Fulbright Graduate Study Fellowship (declined)"]
  ]
};

/* ---------- Lab Life (최신이 위로) ----------
   photos: 사진 파일 이름 목록. 사진은 저장소에 먼저 올려야 합니다.
   예: { date: "2027.03", title: "봄 MT", text: "설명", photos: ["life-2027-mt-1.jpg"] }  */
window.LABLIFE = [];
