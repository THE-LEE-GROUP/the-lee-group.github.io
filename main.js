/* 화면 구성 코드입니다. 내용 수정은 data.js에서 하세요. */
(function () {
  "use strict";
  var L = window.LAB, R = window.RECRUIT;
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var email = function () { return L.emailUser + "@" + L.emailDomain; };
  var mailLink = function () {
    var e = email();
    return '<a class="mail" href="mailto:' + esc(e) + '">' + esc(e) + "</a>";
  };
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }
  };

  function crewPage(alumni) {
    var P = window.PI;
    var groups = alumni ? [["alumni", "Alumni"]] : [["pi", "Principal Investigator"], ["postdoc", "Postdoctoral Researchers"], ["phd", "Ph.D. Students"], ["ms", "M.S. Students"], ["ug", "Undergraduate Researchers"]];
    var card = function (m) {
      var initials = m.name.split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2);
      return '<article class="member">' + (m.photo ? '<img class="avatar" src="' + esc(m.photo) + '" alt="">' : '<div class="avatar" aria-hidden="true">' + esc(initials) + "</div>") +
        '<p class="name">' + esc(m.name) + (m.nameKo ? "<span>" + esc(m.nameKo) + "</span>" : "") + '</p><p class="title">' + esc(m.title) + "</p>" +
        (m.detail ? '<p class="small">' + esc(m.detail) + "</p>" : "") + (m.hobbies ? '<p class="small">Off the bench: ' + esc(m.hobbies) + "</p>" : "") +
        (m.now ? '<p class="small">Now: ' + esc(m.now) + "</p>" : "") + "</article>";
    };
    var all = [{ role: "pi", name: "Youngjoo Lee", nameKo: "이영주", title: "Assistant Professor", detail: "Ph.D., Georgia Institute of Technology", photo: P.photo }].concat(window.MEMBERS);
    var html = groups.map(function (g) {
      var list = all.filter(function (m) { return m.role === g[0]; });
      if (!list.length) return "";
      return '<div class="member-group"><h3>' + g[1] + '</h3><div class="members">' + list.map(card).join("") + "</div></div>";
    }).join("");
    if (alumni && !html) html = '<div class="empty"><p class="name" style="font:700 1.1rem var(--font-display);color:var(--ink)">No alumni yet</p><p>Our first members are still in the lab. Their next steps will be listed here.</p></div>';
    if (!alumni) html += '<div class="member-group"><h3>Graduate Students &amp; Postdocs</h3><div class="members"><article class="member open"><p class="name">This could be you</p><p class="small">We are recruiting M.S., Ph.D. students and postdocs.</p><a class="link-arrow" href="#join">See open positions →</a></article></div></div>';
    var tabs = '<div class="chip-row" style="margin-top:8px"><a class="chip" href="#crew" aria-pressed="' + !alumni + '" style="text-decoration:none">Current</a><a class="chip" href="#alumni" aria-pressed="' + alumni + '" style="text-decoration:none">Alumni</a></div>';
    return '<div class="wrap"><header class="page-head"><span class="eyebrow">The Crew</span><h1>' + (alumni ? "Alumni" : "Current members") + "</h1>" + tabs + '</header><section class="section">' + html + "</section></div>";
  }

  /* ---------- pages ---------- */
  function researchCards(full) {
    return '<div class="grid-3">' + window.RESEARCH.map(function (r, i) {
      return '<article class="card"><span class="num">0' + (i + 1) + '</span><h3>' + esc(r.title) +
        '</h3><span class="ko-sub">' + esc(r.ko) + '</span><p>' + esc(r.summary) + '</p>' +
        (full ? '<ul>' + r.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "") +
        "</article>";
    }).join("") + "</div>";
  }

  function newsList(n) {
    var items = window.NEWS.slice(0, n || window.NEWS.length);
    return '<ul class="news-list">' + items.map(function (x) {
      return '<li><span class="when">' + esc(x.date) + "</span><span>" + esc(x.text) + "</span></li>";
    }).join("") + "</ul>";
  }

  function pubItem(p) {
    var authors = esc(p.authors).replace(/\[([^\]]+)\]/g, "<b>$1</b>");
    return '<li class="pub"><span class="t">' + esc(p.title) + (p.tag ? '<span class="tag">' + esc(p.tag) + "</span>" : "") +
      '</span><span class="a">' + authors + '</span><span class="v"><i>' + esc(p.venue) + "</i>" +
      (p.ref ? ", " + esc(p.ref) : "") + " (" + esc(p.year) + ")</span></li>";
  }

  var pages = {
    home: function () {
      /* Highlights: papers with a highlight number in data.js, in that order */
      var top = window.PUBS.filter(function (p) { return p.highlight; }).sort(function (a, b) { return a.highlight - b.highlight; });
      return '<section class="hero"><canvas id="heroCanvas" aria-hidden="true"></canvas><div class="wrap"><div class="hero-inner">' +
        '<span class="eyebrow">The Lee Group · Membrane Separations Lab</span>' +
        "<h1>Designing membranes that know which molecules to let through.</h1>" +
        '<p class="lead">We study how molecules move through membranes at a fundamental level. Building on that transport theory, we design materials and processes for energy-efficient separations of water, organic solvents and ions, and validate them through rigorous experiments.</p>' +
        '<div class="hero-actions"><a class="btn btn-primary" href="#research">Explore our research</a><a class="btn btn-ghost" href="#join">Join the lab</a></div>' +
        "</div></div></section>" +
        '<section class="section"><div class="wrap"><div class="section-head"><span class="eyebrow">Research</span><h2>What we work on</h2>' +
        "<p>Separations account for a large share of industrial energy use. Membranes can cut that cost, if we can predict and engineer how mixtures move through them.</p></div>" +
        researchCards(false) + '<p style="margin-top:20px"><a class="link-arrow" href="#research">Read more about our research →</a></p></div></section>' +
        '<section class="section"><div class="wrap split"><div><div class="section-head"><span class="eyebrow">News</span><h2>Latest from the lab</h2></div>' +
        newsList(4) + '<p style="margin-top:16px"><a class="link-arrow" href="#news">All news →</a></p>' +
        '<div class="join-box" style="margin-top:40px"><span class="eyebrow">Join us · 연구실 모집</span><h3 style="font-size:1.35rem">' + esc(R.en.title) + '</h3>' +
        (R.en.hook ? '<p class="hook">' + esc(R.en.hook) + '</p>' : '') + '<p>' + esc(R.en.body) + '</p><p><a class="btn btn-primary" href="#join">Open positions</a></p></div></div>' +
        '<div><div class="section-head"><span class="eyebrow">Selected work</span><h2>Highlights</h2></div><ul class="pubs">' +
        top.map(pubItem).join("") + '</ul><p style="margin-top:16px"><a class="link-arrow" href="#publications">All publications →</a></p></div></div></section>' +
        '';
    },

    research: function () {
      var cards = window.RESEARCH.map(function (r, i) {
        return '<article class="res-card">' + (r.art ? '<div class="res-art"><img src="' + esc(r.art) + '" alt="" loading="lazy"></div>' : '') +
          '<div class="res-body"><span class="res-num">0' + (i + 1) + '</span><h3>' + esc(r.title) + '</h3><span class="res-ko">' + esc(r.ko) + '</span>' +
          '<p>' + esc(r.summary) + '</p><ul>' + r.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + '</ul></div></article>';
      }).join("");
      return '<div class="wrap"><header class="res-head"><div><span class="eyebrow">Research</span><h1>Research</h1></div><span class="res-divider" aria-hidden="true"></span>' +
        '<p>We aim to make industrial separations cleaner and more energy-efficient. From the physics of molecular transport to new materials and working membranes, we connect <strong>fundamental understanding with real-world separation technology</strong> for the energy and environmental industries.</p></header>' +
        '<section class="section"><div class="res-grid">' + cards + '</div></section></div>';
    },

    pi: function () {
      var P = window.PI;
      var tl = function (rows) { return '<ul class="timeline">' + rows.map(function (r) { return '<li><span class="when">' + esc(r[0]) + "</span><span>" + esc(r[1]) + "</span></li>"; }).join("") + "</ul>"; };
      return '<div class="wrap"><header class="page-head"><span class="eyebrow">Principal Investigator</span><h1>Prof. Youngjoo Lee</h1></header>' +
        '<section class="section"><div class="pi-card"><img src="' + esc(P.photo) + '" alt="Portrait of Prof. Youngjoo Lee" width="640" height="800">' +
        '<div class="pi-meta"><h2>' + esc(P.name) + ' <span class="ko" style="font-size:1rem;color:var(--muted);font-weight:500">' + esc(P.nameKo) + "</span></h2>" +
        '<p class="role">' + esc(P.title) + ", " + esc(L.dept) + ", " + esc(L.univ) + "</p>" +
        "<p>" + esc(P.bio) + "</p><p>Email: " + mailLink() + ' · <a href="' + esc(L.scholar) + '" target="_blank" rel="noopener noreferrer">Google Scholar</a></p></div></div></section>' +
        '<section class="section split"><div><h3 style="margin-bottom:12px">Education &amp; Training</h3>' + tl(P.education) + "</div>" +
        '<div><h3 style="margin-bottom:12px">Professional Service</h3><ul class="timeline">' + P.service.map(function (s) { return "<li><span class=\"when\">Now</span><span>" + esc(s) + "</span></li>"; }).join("") + "</ul>" +
        '<h3 style="margin:28px 0 12px">Honors &amp; Awards</h3>' + tl(P.awards) + "</div></section></div>";
    },

    crew: function () { return crewPage(false); },
    alumni: function () { return crewPage(true); },

    publications: function () {
      return '<div class="wrap"><header class="page-head"><span class="eyebrow">Publications</span><h1>Publications</h1>' +
        '<p>Peer-reviewed journal articles, newest first. Bold marks Prof. Lee. For citation counts, see <a href="' + esc(L.scholar) + '" target="_blank" rel="noopener noreferrer">Google Scholar</a>.</p></header>' +
        '<section class="section"><div class="pub-tools"><label for="pubSearch" class="skip">Search publications</label><input id="pubSearch" type="search" placeholder="Search by title, author or journal">' +
        '<div class="chip-row" role="group" aria-label="Filter"><button class="chip" data-f="all" aria-pressed="true">All</button><button class="chip" data-f="mem" aria-pressed="false">Membranes &amp; separations</button><button class="chip" data-f="first" aria-pressed="false">First author</button></div>' +
        '<span class="pub-count" id="pubCount"></span></div><div id="pubList"></div>' +
        '<h2 style="margin-top:48px;font-size:1.4rem">Patents</h2><ul class="pubs">' + window.PATENTS.map(function (p) { return '<li class="pub"><span>' + esc(p) + "</span></li>"; }).join("") + "</ul>" +
        '<h2 style="margin-top:40px;font-size:1.4rem">Dissertation</h2><ul class="pubs"><li class="pub"><span>' + esc(window.THESIS).replace(/\[([^\]]+)\]/g, "<b>$1</b>") + "</span></li></ul></section></div>";
    },

    osro: function () {
      return '<div class="wrap"><header class="page-head"><span class="eyebrow">Resources</span><h1>OSRO Trade-Off Curve</h1>' +
        '<p>A shared benchmark for comparing membranes in organic solvent reverse osmosis.</p></header><section class="section prose">' +
        '<p>Upper-bound plots gave the gas separation community a common yardstick: one chart where any new membrane can be placed next to everything that came before. Organic solvent reverse osmosis (OSRO), which separates liquid hydrocarbons of similar size under pressure, has lacked an equivalent. The OSRO trade-off curve fills that gap by comparing materials on one standardized separation.</p>' +
        '<h2>The test mixture</h2>' +
        '<p>The benchmark uses toluene and 1,3,5-triisopropylbenzene (TIPB). The pair is a practical choice: both molecules are rigid, close in polarity and viscosity, liquid at room temperature, and easy to quantify by gas chromatography. Differences in performance therefore come mainly from the membrane rather than from the mixture.</p>' +
        '<div class="facts"><div class="fact"><b>Mode</b><span>Cross-flow permeation</span></div><div class="fact"><b>Pressure</b><span>8–60 bar</span></div><div class="fact"><b>Temperature</b><span>293 K</span></div><div class="fact"><b>Feed</b><span>1–10 mol% TIPB in toluene</span></div></div>' +
        '<figure class="figure"><img src="osro-tradeoff-curve.png" alt="OSRO trade-off curve: toluene/TIPB separation factor versus permeance for polymer and composite membranes, with a dashed upper-bound line" width="2040" height="1412" loading="lazy">' +
        '<figcaption>Toluene/TIPB separation factor versus permeance (cross-flow, 8–60 bar, 293 K, 1–10 mol% TIPB). Figure compiled by Yi Ren and Woo Jin Jang, Lively Lab, Georgia Tech (updated November 2025); used with permission. Numbered references in the legend are listed on the Lively Lab page.</figcaption></figure>' +
        '<h2>Latest curve and data</h2>' +
        '<p class="source-note">The curve and its master data sheet are compiled and periodically updated by the Lively Lab at Georgia Tech, where Prof. Lee completed his Ph.D. Please use their page for the current figure and data.</p>' +
        '<p class="btn-row"><a class="btn btn-primary" href="https://lively.chbe.gatech.edu/osro-upper-bound" target="_blank" rel="noopener noreferrer">View the curve at the Lively Lab →</a></p>' +
        '<h2>Our related work</h2><ul class="ref-list">' +
        window.PUBS.filter(function (p) { return /reverse osmosis|aliphatic/i.test(p.title); }).map(function (p) {
          return "<li>" + esc(p.authors).replace(/\[([^\]]+)\]/g, "<b>$1</b>") + ", " + esc(p.title) + ", <i>" + esc(p.venue) + "</i> (" + esc(p.year) + ")</li>";
        }).join("") + "</ul></section></div>";
    },

    "polymer-genome": function () {
      return '<div class="wrap"><header class="page-head"><span class="eyebrow">Resources</span><h1>Polymer Genome</h1>' +
        '<p>Machine-learned polymer properties, and a transport model that turns them into membrane predictions.</p></header><section class="section prose wide">' +
        '<div class="side-split"><div class="prose"><h2>Polymer Genome</h2>' +
        '<p>Polymer Genome is an online platform that predicts polymer properties from chemical structure using machine learning. A polymer can be entered by drawing its repeat unit or by typing a SMILES string, and the platform returns property estimates within seconds. It grew out of work in Prof. Rampi Ramprasad\'s group, a long-time collaborator.</p>' +
        '<p class="btn-row"><a class="btn btn-primary" href="https://www.polymergenome.org" target="_blank" rel="noopener noreferrer">Open Polymer Genome →</a></p>' +
        '</div><figure class="figure"><img src="polymer-genome-diffusion-lab.png" alt="Polymer Genome Diffusion Lab: predicted diffusivity of a solvent in a polymer from SMILES inputs, plotted against the training data" width="1750" height="1065" loading="lazy">' +
        '<figcaption>Diffusion Lab on Polymer Genome: enter the polymer and solvent as SMILES, and the platform predicts the solvent diffusivity and places it against the training data.</figcaption></figure></div>' +
        '<p class="ref-inline">Reference: C. Kim et al., <i>The Journal of Physical Chemistry C</i> (2018). <a href="https://doi.org/10.1021/acs.jpcc.8b02913" target="_blank" rel="noopener noreferrer">Read the paper →</a></p>' +
        '<div class="side-split" style="margin-top:28px"><div class="prose"><h2>Membrane transport modeling</h2>' +
        '<p>The membrane transport model simulates the permeation of complex mixtures through polymer membranes utilizing transport parameters predicted by Polymer Genome. The integration of machine learning predictors for diffusion and sorption properties of molecules with the transport simulation enables the rapid screening of polymer membranes prior to physical experimentation for the separation of complex liquid mixtures.</p>' +
        '<h3 style="font-size:1.05rem;margin-top:6px">Read the relevant publications</h3><ul class="ref-list">' +
        '<li><b>Y. J. Lee</b> et al., Data-driven predictions of complex organic mixture permeation in polymer membranes, <i>Nature Communications</i> 14, 4931 (2023). <a href="https://www.nature.com/articles/s41467-023-40257-2" target="_blank" rel="noopener noreferrer">Read →</a></li>' +
        '<li><i>Journal of Membrane Science</i> (2024). <a href="https://www.sciencedirect.com/science/article/pii/S0376738824009402" target="_blank" rel="noopener noreferrer">Read →</a></li>' +
        '<li><i>Journal of Membrane Science</i> (2021). <a href="https://www.sciencedirect.com/science/article/pii/S0376738821007110" target="_blank" rel="noopener noreferrer">Read →</a></li>' +
        '</ul></div><figure class="figure"><img src="membrane-transport-modeling.png" alt="Workflow: polymer and mixture structures feed Polymer Genome ML diffusion and sorption models, which with solvent parameters and operating conditions drive transport modeling to predict partial fluxes and permeate composition" width="1503" height="1307" loading="lazy"></figure></div>' +
        '<p class="source-note">Adapted from the Polymer Genome resource page of the Lively Lab at Georgia Tech. <a href="https://lively.chbe.gatech.edu/polymer-genome" target="_blank" rel="noopener noreferrer">Original page →</a></p></section></div>';
    },

    "lab-life": function () {
      var items = window.LABLIFE || [];
      var body = items.length ? '<div class="life-grid">' + items.map(function (x) {
        var img = (x.photos && x.photos.length) ? '<img src="' + esc(x.photos[0]) + '" alt="' + esc(x.title) + '" loading="lazy">' : "";
        return '<article class="life-card">' + img + '<div class="body"><span class="when">' + esc(x.date) + "</span><h3>" + esc(x.title) + "</h3><p>" + esc(x.text) + "</p></div></article>";
      }).join("") + "</div>" :
        '<div class="empty"><p style="font:700 1.1rem var(--font-display);color:var(--ink)">Our story starts here</p><p>Photos from conferences, lab outings and everyday moments in the lab will appear here as we make them.</p></div>';
      return '<div class="wrap"><header class="page-head"><span class="eyebrow">Lab Life</span><h1>Lab Life</h1><p>Research is a team sport. Here is what the crew gets up to, in the lab and beyond it.</p></header><section class="section">' + body + "</section></div>";
    },

    news: function () {
      return '<div class="wrap"><header class="page-head"><span class="eyebrow">News</span><h1>News</h1></header><section class="section">' + newsList() + "</section></div>";
    },

    join: function () {
      var box = function (x, lang) {
        return '<div class="join-box" lang="' + lang + '"' + (lang === "ko" ? ' style="word-break:keep-all"' : "") + '><h2>' + esc(x.title) + '</h2>' + (x.hook ? '<p class="hook">' + esc(x.hook) + '</p>' : '') + '<ul class="role-chips">' +
          x.roles.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul><p>" + esc(x.body) + "</p><p>" + esc(x.contact) + " " + mailLink() + "</p></div>";
      };
      return '<div class="wrap"><header class="page-head"><span class="eyebrow">Join Us · 연구실 모집</span><h1>Open positions</h1></header><section class="section" style="display:grid;gap:24px">' +
        box(R.en, "en") + box(R.ko, "ko") +
        '<div class="card"><h3>What to send</h3><p>A short email introducing yourself, your CV, and a few lines on which of our research directions interests you. Transcripts are welcome but optional at the first contact.</p></div></section></div>';
    },

    contact: function () {
      return '<div class="wrap"><header class="page-head"><span class="eyebrow">Contact</span><h1>Contact</h1></header><section class="section"><dl class="contact-grid">' +
        "<div><dt>Email</dt><dd>" + mailLink() + "</dd></div>" +
        "<div><dt>Office phone</dt><dd>" + esc(L.phone) + "</dd></div>" +
        "<div><dt>Address</dt><dd>" + esc(L.dept) + "<br>" + esc(L.univ) + "<br>" + esc(L.address) + "</dd></div>" +
        '<div><dt>주소 (국문)</dt><dd class="ko">' + esc(L.addressKo) + '<br>' + esc(L.deptKo) + "</dd></div></dl></section></div>";
    }
  };

  /* ---------- publications filter ---------- */
  function bindPubs() {
    var input = document.getElementById("pubSearch"), list = document.getElementById("pubList"), count = document.getElementById("pubCount");
    if (!input) return;
    var mode = "all";
    var memRe = /membrane|permeation|polymer|separation|solvent|flory/i;
    function render() {
      var q = input.value.trim().toLowerCase();
      var rows = window.PUBS.filter(function (p) {
        if (mode === "mem" && !memRe.test(p.title)) return false;
        if (mode === "first" && p.authors.indexOf("[Y. J. Lee]") !== 0) return false;
        return !q || (p.title + " " + p.authors + " " + p.venue).toLowerCase().indexOf(q) > -1;
      });
      var years = [];
      rows.forEach(function (p) { if (years.indexOf(p.year) < 0) years.push(p.year); });
      list.innerHTML = years.map(function (y) {
        return '<div class="pub-year">' + y + '</div><ul class="pubs">' + rows.filter(function (p) { return p.year === y; }).map(pubItem).join("") + "</ul>";
      }).join("") || "<p>No publications match this search.</p>";
      count.textContent = rows.length + " of " + window.PUBS.length;
    }
    input.addEventListener("input", render);
    document.querySelectorAll(".chip[data-f]").forEach(function (b) {
      b.addEventListener("click", function () {
        mode = b.getAttribute("data-f");
        document.querySelectorAll(".chip[data-f]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        render();
      });
    });
    render();
  }

  /* ---------- hero canvas: molecules meeting a membrane ---------- */
  var anim = null;
  function hero() {
    var c = document.getElementById("heroCanvas");
    if (anim) { cancelAnimationFrame(anim); anim = null; }
    if (!c) return;
    var ctx = c.getContext("2d"), dpr = Math.min(window.devicePixelRatio || 1, 2), W, H, parts = [], pores = [];
    var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function size() {
      W = c.clientWidth; H = c.clientHeight; c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pores = []; for (var x = 30; x < W; x += 46) pores.push(x);
      parts = [];
      var n = Math.round(W / 14);
      for (var i = 0; i < n; i++) {
        var small = Math.random() < 0.55;
        parts.push({ x: W * 0.42 + Math.random() * W * 0.58, y: Math.random() * H, r: small ? 2.2 : 5, small: small, vy: (Math.random() - .5) * .35, vx: .25 + Math.random() * .35 });
      }
    }
    function memX() { return W * 0.4; }
    function draw() {
      var cs = getComputedStyle(document.documentElement);
      var HR = cs.getPropertyValue("--hero-rgb").trim() || "15,39,66", HL = cs.getPropertyValue("--hero-line-rgb").trim() || "143,188,232", HD = cs.getPropertyValue("--hero-dot-rgb").trim() || "76,195,223";
      ctx.clearRect(0, 0, W, H);
      var mx = memX();
      ctx.fillStyle = "rgba(" + HL + ",0.22)"; ctx.fillRect(mx - 7, 0, 14, H);
      ctx.fillStyle = "rgba(" + HR + ",1)";
      for (var y = 18; y < H; y += 36) ctx.fillRect(mx - 7, y, 14, 5);
      parts.forEach(function (p) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        if (p.small) { ctx.fillStyle = "rgba(" + HD + ",0.85)"; ctx.fill(); }
        else { ctx.strokeStyle = "rgba(" + HL + ",0.55)"; ctx.lineWidth = 1.4; ctx.stroke(); }
      });
      var g = ctx.createLinearGradient(0, 0, W * 0.75, 0);
      g.addColorStop(0, "rgba(" + HR + ",0.92)"); g.addColorStop(0.55, "rgba(" + HR + ",0.55)"); g.addColorStop(1, "rgba(" + HR + ",0)");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    }
    function step() {
      var mx = memX();
      parts.forEach(function (p) {
        /* vx > 0: moving left toward the membrane; vx < 0: rejected, moving back right */
        p.x -= p.vx; p.y += p.vy;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        if (!p.small && p.vx > 0 && p.x - p.r <= mx + 8) { p.vx = -p.vx; }
        if (p.vx < 0 && p.x > W + 10) { p.vx = -p.vx; p.y = Math.random() * H; }
        if (p.x < -10) { p.x = W + 5; p.y = Math.random() * H; }
      });
      draw(); anim = requestAnimationFrame(step);
    }
    size(); draw();
    if (!still) anim = requestAnimationFrame(step);
    window.onresize = function () { size(); draw(); };
  }

  /* ---------- router ---------- */
  var view = document.getElementById("view");
  function route() {
    var name = (location.hash || "#home").slice(1);
    if (name === "members") name = "crew";
    if (name === "resources") name = "osro";
    if (!pages[name]) name = "home";
    view.innerHTML = pages[name]();
    document.querySelectorAll(".site-nav a").forEach(function (a) {
      var on = a.getAttribute("data-route") === name || (a.getAttribute("data-group") && (a.getAttribute("data-group") === name || document.querySelector('.submenu a[data-route="' + name + '"][data-parent="' + a.getAttribute("data-group") + '"]')));
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.getElementById("siteNav").classList.remove("open");
    document.getElementById("navToggle").setAttribute("aria-expanded", "false");
    var titles = { research: "Research", pi: "Prof. Lee", crew: "The Crew", alumni: "Alumni", publications: "Publications", osro: "OSRO Trade-Off Curve", "polymer-genome": "Polymer Genome", news: "News", "lab-life": "Lab Life", join: "Join Us", contact: "Contact" };
    document.title = (titles[name] ? titles[name] + " · " : "") + "The Lee Group · MSL";
    window.scrollTo(0, 0);
    hero(); bindPubs();
  }
  window.addEventListener("hashchange", route);

  document.getElementById("navToggle").addEventListener("click", function () {
    var nav = document.getElementById("siteNav"), open = nav.classList.toggle("open");
    this.setAttribute("aria-expanded", String(open));
  });
  document.getElementById("footAddr").textContent = L.address;
  document.getElementById("footScholar").href = L.scholar;
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- recruiting popup (24h snooze) ---------- */
  var KEY = "msl_recruit_snooze_until";
  var back = document.getElementById("recruit"), modal = back.querySelector(".modal");
  function fill(lang) {
    var x = R[lang];
    modal.setAttribute("lang", lang);
    document.getElementById("rTitle").textContent = x.title;
    var hk = document.getElementById("rHook"); hk.textContent = x.hook; hk.hidden = !x.hook;
    document.getElementById("rBody").textContent = x.body;
    document.getElementById("rContact").textContent = x.contact;
    document.getElementById("rMail").textContent = email();
    document.getElementById("rRoles").innerHTML = x.roles.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("");
    document.getElementById("rMore").textContent = x.more;
    document.getElementById("rSnooze").textContent = x.snooze;
    document.getElementById("rClose").textContent = x.close;
    document.getElementById("rKo").setAttribute("aria-pressed", String(lang === "ko"));
    document.getElementById("rEn").setAttribute("aria-pressed", String(lang === "en"));
  }
  var lastFocus = null;
  function openModal() { lastFocus = document.activeElement; back.hidden = false; document.getElementById("rX").focus(); }
  function closeModal() { back.hidden = true; if (lastFocus && lastFocus.focus) lastFocus.focus(); }
  document.getElementById("rKo").addEventListener("click", function () { fill("ko"); });
  document.getElementById("rEn").addEventListener("click", function () { fill("en"); });
  document.getElementById("rX").addEventListener("click", closeModal);
  document.getElementById("rClose").addEventListener("click", closeModal);
  document.getElementById("rMore").addEventListener("click", closeModal);
  document.getElementById("rSnooze").addEventListener("click", function () { store.set(KEY, String(Date.now() + 24 * 3600 * 1000)); closeModal(); });
  back.addEventListener("click", function (e) { if (e.target === back) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !back.hidden) closeModal(); });

  route();
  var until = parseInt(store.get(KEY) || "0", 10);
  var firstLang = (navigator.language || "").toLowerCase().indexOf("ko") === 0 ? "ko" : "en";
  fill(firstLang);
  if (!(until > Date.now()) && (location.hash === "" || location.hash === "#home")) openModal();
})();
