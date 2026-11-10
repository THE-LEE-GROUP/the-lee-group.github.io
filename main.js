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
      var top = window.PUBS.filter(function (p) { return p.tag; }).slice(0, 3);
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
        newsList(4) + '<p style="margin-top:16px"><a class="link-arrow" href="#news">All news →</a></p></div>' +
        '<div><div class="section-head"><span class="eyebrow">Selected work</span><h2>Highlights</h2></div><ul class="pubs">' +
        top.map(pubItem).join("") + '</ul><p style="margin-top:16px"><a class="link-arrow" href="#publications">All publications →</a></p></div></div></section>' +
        '<section class="section"><div class="wrap"><div class="join-box"><span class="eyebrow">Join us · 연구실 모집</span><h2>' + esc(R.en.title) + '</h2><p class="hook">' + esc(R.en.hook) +
        '</p><p>' + esc(R.en.body) + '</p><p><a class="btn btn-primary" href="#join">Open positions</a></p></div></div></section>';
    },

    research: function () {
      return '<div class="wrap"><header class="page-head"><span class="eyebrow">Research</span><h1>Research</h1>' +
        "<p>Our group asks a practical question: given a polymer and a mixture, can we predict the separation before we make the membrane? We answer it with experiments, transport theory and data.</p></header>" +
        '<section class="section">' + researchCards(true) + "</section></div>";
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

    members: function () {
      var P = window.PI;
      var groups = [["pi", "Principal Investigator"], ["postdoc", "Postdoctoral Researchers"], ["phd", "Ph.D. Students"], ["ms", "M.S. Students"], ["ug", "Undergraduate Researchers"], ["alumni", "Alumni"]];
      var card = function (m) {
        var initials = m.name.split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2);
        return '<article class="member">' + (m.photo ? '<img class="avatar" src="' + esc(m.photo) + '" alt="">' : '<div class="avatar" aria-hidden="true">' + esc(initials) + "</div>") +
          '<p class="name">' + esc(m.name) + (m.nameKo ? "<span>" + esc(m.nameKo) + "</span>" : "") + '</p><p class="title">' + esc(m.title) + "</p>" +
          (m.detail ? '<p class="small">' + esc(m.detail) + "</p>" : "") + (m.hobbies ? '<p class="small">Off the bench: ' + esc(m.hobbies) + "</p>" : "") + "</article>";
      };
      var all = [{ role: "pi", name: "Youngjoo Lee", nameKo: "이영주", title: "Assistant Professor", detail: "Ph.D., Georgia Institute of Technology", photo: P.photo }].concat(window.MEMBERS);
      var html = groups.map(function (g) {
        var list = all.filter(function (m) { return m.role === g[0]; });
        if (!list.length) return "";
        return '<div class="member-group"><h3>' + g[1] + '</h3><div class="members">' + list.map(card).join("") + "</div></div>";
      }).join("");
      html += '<div class="member-group"><h3>Graduate Students &amp; Postdocs</h3><div class="members"><article class="member open"><p class="name">This could be you</p><p class="small">We are recruiting M.S., Ph.D. students and postdocs.</p><a class="link-arrow" href="#join">See open positions →</a></article></div></div>';
      return '<div class="wrap"><header class="page-head"><span class="eyebrow">People</span><h1>Members</h1></header><section class="section">' + html + "</section></div>";
    },

    publications: function () {
      return '<div class="wrap"><header class="page-head"><span class="eyebrow">Publications</span><h1>Publications</h1>' +
        '<p>Peer-reviewed journal articles, newest first. Bold marks Prof. Lee. For citation counts, see <a href="' + esc(L.scholar) + '" target="_blank" rel="noopener noreferrer">Google Scholar</a>.</p></header>' +
        '<section class="section"><div class="pub-tools"><label for="pubSearch" class="skip">Search publications</label><input id="pubSearch" type="search" placeholder="Search by title, author or journal">' +
        '<div class="chip-row" role="group" aria-label="Filter"><button class="chip" data-f="all" aria-pressed="true">All</button><button class="chip" data-f="mem" aria-pressed="false">Membranes &amp; separations</button><button class="chip" data-f="first" aria-pressed="false">First author</button></div>' +
        '<span class="pub-count" id="pubCount"></span></div><div id="pubList"></div>' +
        '<h2 style="margin-top:48px;font-size:1.4rem">Patents</h2><ul class="pubs">' + window.PATENTS.map(function (p) { return '<li class="pub"><span>' + esc(p) + "</span></li>"; }).join("") + "</ul>" +
        '<h2 style="margin-top:40px;font-size:1.4rem">Dissertation</h2><ul class="pubs"><li class="pub"><span>' + esc(window.THESIS).replace(/\[([^\]]+)\]/g, "<b>$1</b>") + "</span></li></ul></section></div>";
    },

    news: function () {
      return '<div class="wrap"><header class="page-head"><span class="eyebrow">News</span><h1>News</h1></header><section class="section">' + newsList() + "</section></div>";
    },

    join: function () {
      var box = function (x, lang) {
        return '<div class="join-box" lang="' + lang + '"' + (lang === "ko" ? ' style="word-break:keep-all"' : "") + '><h2>' + esc(x.title) + '</h2><p class="hook">' + esc(x.hook) + '</p><ul class="role-chips">' +
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
        '<div><dt>주소 (국문)</dt><dd class="ko">54896 전북특별자치도 전주시 덕진구 백제대로 567<br>' + esc(L.deptKo) + "</dd></div></dl></section></div>";
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
      ctx.clearRect(0, 0, W, H);
      var mx = memX();
      ctx.fillStyle = "rgba(143,188,232,0.22)"; ctx.fillRect(mx - 7, 0, 14, H);
      ctx.fillStyle = "rgba(15,39,66,1)";
      for (var y = 18; y < H; y += 36) ctx.fillRect(mx - 7, y, 14, 5);
      parts.forEach(function (p) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        if (p.small) { ctx.fillStyle = "rgba(76,195,223,0.85)"; ctx.fill(); }
        else { ctx.strokeStyle = "rgba(143,188,232,0.55)"; ctx.lineWidth = 1.4; ctx.stroke(); }
      });
      var g = ctx.createLinearGradient(0, 0, W * 0.75, 0);
      g.addColorStop(0, "rgba(15,39,66,0.92)"); g.addColorStop(0.55, "rgba(15,39,66,0.55)"); g.addColorStop(1, "rgba(15,39,66,0)");
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
    if (!pages[name]) name = "home";
    view.innerHTML = pages[name]();
    document.querySelectorAll(".site-nav a").forEach(function (a) {
      if (a.getAttribute("data-route") === name) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.getElementById("siteNav").classList.remove("open");
    document.getElementById("navToggle").setAttribute("aria-expanded", "false");
    document.title = (name === "home" ? "" : name.charAt(0).toUpperCase() + name.slice(1) + " · ") + "The Lee Group · MSL";
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
    document.getElementById("rHook").textContent = x.hook;
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
