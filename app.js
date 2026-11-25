(function () {
  'use strict';
  const T = window.TRAINING;
  const view = document.getElementById('view');
  const tabsEl = document.getElementById('tabs');
  const xpEl = document.getElementById('xp');

  // ── Progress (saved on this device only) ───────────────────
  const KEY = 'flagship-training-v1';
  const blank = { pts: 0, done: {}, best: {}, seen: {} };
  let S;
  try { S = Object.assign({}, blank, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { S = Object.assign({}, blank); }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} renderXp(); }
  function addPts(n) { S.pts += n; save(); }
  function renderXp() { xpEl.textContent = S.pts + ' pts'; }

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const money = (n) => '$' + Math.round(n).toLocaleString('en-US');

  // ── Routing ────────────────────────────────────────────────
  const tabs = [
    ['/', 'Home'],
    ['/playbook', 'Call Playbook'],
    ['/roleplay', 'Role-Play'],
    ['/objections', 'Objections'],
    ['/drill', 'Drill'],
    ['/industries', 'Industries'],
    ['/services', 'Services'],
    ['/pricing', 'Pricing'],
    ['/stats', 'Stats'],
    ['/calculator', 'Calculator'],
    ['/quiz', 'Quiz'],
  ];
  const routes = {
    '/': home, '/industries': industries, '/services': services, '/pricing': pricing, '/stats': stats, '/playbook': playbook,
    '/objections': objections, '/drill': drill, '/roleplay': roleplayList, '/quiz': quiz, '/calculator': calculator,
  };

  function route() {
    const parts = location.hash.replace(/^#/, '').split('/').filter(Boolean);
    const base = '/' + (parts[0] || '');
    const arg = parts[1] || null;
    tabsEl.innerHTML = tabs.map(([h, l]) => `<a href="#${h}"${h === base ? ' aria-current="page"' : ''}>${l}</a>`).join('');
    const cur = tabsEl.querySelector('[aria-current]');
    if (cur) cur.scrollIntoView({ block: 'nearest', inline: 'center' });
    if (base === '/roleplay' && arg) roleplay(arg);
    else (routes[base] || home)();
    window.scrollTo(0, 0);
    view.focus({ preventScroll: true });
  }
  window.addEventListener('hashchange', route);

  // ── Home ───────────────────────────────────────────────────
  const steps = [
    ['services', 'Learn the services', '#/services'],
    ['pricing', 'Know the pricing cold', '#/pricing'],
    ['playbook', 'Read the call playbook', '#/playbook'],
    ['objections', 'Study every objection', '#/objections'],
    ['stats', 'Learn which stats to use (and how)', '#/stats'],
    ['quiz', 'Score 90%+ on the quiz', '#/quiz'],
    ['rp-hvac', 'Book the audit with Dave (HVAC)', '#/roleplay/hvac'],
    ['rp-roofer', 'Book the audit with Mike (roofer)', '#/roleplay/roofer'],
    ['rp-plumber', 'Get past Linda (office manager)', '#/roleplay/plumber'],
    ['industries', 'Learn the other industries we serve', '#/industries'],
    ['rp-auto', 'Book the audit with Tony (auto shop)', '#/roleplay/auto'],
    ['rp-dental', 'Handle Karen’s privacy question (dental)', '#/roleplay/dental'],
    ['rp-salon', 'Book the audit with Jess (salon)', '#/roleplay/salon'],
    ['rp-groomer', 'Book the audit with Sam (groomer)', '#/roleplay/groomer'],
    ['drill', 'Drill 10 objections out loud', '#/drill'],
  ];
  function home() {
    const done = steps.filter(([k]) => S.done[k]).length;
    view.innerHTML = `
      <section class="hero">
        <span class="eyebrow" style="color:var(--orange)">Ty’s training hub</span>
        <h1>Book the free audit. That’s the whole job on a call.</h1>
        <p class="lead">${esc(T.company.goal)} Practice here until the answers come out naturally.</p>
        <div class="bar" aria-label="Training progress"><span style="width:${(done / steps.length) * 100}%"></span></div>
        <p class="small" style="margin:8px 0 0;color:#c9d2df">${done} of ${steps.length} training steps done</p>
      </section>

      <div class="card checklist">
        <h2>Your training path</h2>
        ${steps.map(([k, l, h]) => `
          <label><input type="checkbox" data-k="${k}"${S.done[k] ? ' checked' : ''}>
          <span>${l} · <a href="${h}">Open</a></span></label>`).join('')}
      </div>

      <h2 class="section-title">Practice</h2>
      <div class="grid g3">
        <a class="tile" href="#/roleplay"><h3>Role-play calls</h3><p>${T.scenarios.length} practice calls: contractors, an auto shop, a dental office, a salon and a groomer.</p></a>
        <a class="tile" href="#/drill"><h3>Objection drill</h3><p>Random objection. Say your answer out loud, then compare.</p></a>
        <a class="tile" href="#/quiz"><h3>Quiz</h3><p>${T.quiz.length} questions on pricing, services and technique.</p></a>
      </div>

      <h2 class="section-title">Know it cold</h2>
      <div class="grid g3">
        <a class="tile" href="#/playbook"><h3>Call playbook</h3><p>Opener, reason, question, the ask. Voicemail and gatekeepers.</p></a>
        <a class="tile" href="#/industries"><h3>Industries</h3><p>Auto shops, dental, salons, groomers: what hurts, what to say, what to watch for.</p></a>
        <a class="tile" href="#/services"><h3>Services</h3><p>What each one does and how to say it in one line.</p></a>
        <a class="tile" href="#/pricing"><h3>Pricing</h3><p>Plans, setup, guarantee, contract, and how to talk price.</p></a>
        <a class="tile" href="#/stats"><h3>Stats</h3><p>Researched numbers, how solid each one is, and safe wording.</p></a>
        <a class="tile" href="#/objections"><h3>Objections</h3><p>${T.objections.length} objections with answers that go back to the audit.</p></a>
        <a class="tile" href="#/calculator"><h3>Missed-call calculator</h3><p>Run a prospect’s own numbers live on the call.</p></a>
      </div>

      <div class="card" style="margin-top:18px">
        <h2>Who you’re calling</h2>
        <p><b>Who:</b> ${esc(T.company.who)}</p>
        <p><b>The buyer:</b> ${esc(T.company.buyer)}</p>
        <p><b>Where:</b> ${esc(T.company.area)}</p>
        <p class="say" style="margin-bottom:0">${esc(T.company.tagline)} ${esc(T.company.promise)}</p>
      </div>
      <p class="small muted"><button class="btn" id="reset" style="min-height:36px;padding:4px 12px;font-size:13px">Reset my progress</button></p>`;
    view.querySelectorAll('input[data-k]').forEach((cb) => cb.addEventListener('change', () => {
      S.done[cb.dataset.k] = cb.checked; save(); home();
    }));
    view.querySelector('#reset').addEventListener('click', () => {
      if (confirm('Reset all points and progress on this device?')) { S = Object.assign({}, blank, { done: {}, best: {}, seen: {} }); save(); home(); }
    });
  }
  function markDone(k) { if (!S.done[k]) { S.done[k] = true; save(); } }

  // ── Services ───────────────────────────────────────────────
  function services() {
    markDone('services');
    view.innerHTML = `
      <span class="eyebrow">Product knowledge</span>
      <h1>What we sell, in plain words</h1>
      <p class="lead">Everything is delivered on GoHighLevel, white-labeled, and set up for the client. They keep their number. We do the work.</p>
      ${T.services.map((s) => `
        <article class="card">
          <h2>${esc(s.name)} <span class="tag">${esc(s.plan)}</span></h2>
          <p><b>What it is:</b> ${esc(s.what)}</p>
          <p><b>Why they care:</b> ${esc(s.why)}</p>
          <p class="say">${esc(s.say)}</p>
        </article>`).join('')}
      <div class="card">
        <h2>How a call gets sorted (Front Desk)</h2>
        <ul class="clean">
          <li><b>Emergency</b> → rings the owner’s cell right away</li>
          <li><b>New job or quote</b> → books it, or texts the owner a summary</li>
          <li><b>Existing customer or vendor</b> → takes a message</li>
          <li><b>Spam</b> → dropped</li>
        </ul>
      </div>`;
  }

  // ── Industries ─────────────────────────────────────────────
  function industries() {
    markDone('industries');
    view.innerHTML = `
      <span class="eyebrow">Who we call</span>
      <h1>Contractors first. Any business that runs on the phone.</h1>
      <p class="lead">Same pitch, same goal (book the free audit). Change the picture: a roof, a car lift, a dental chair, a salon chair, a dog on the table.</p>
      <p class="small muted">Dollar figures are ballparks from the sources named. Always ask for their number: “What’s a typical job or visit worth to you?”</p>
      ${T.industries.map((x) => `
        <article class="card">
          <h2>${esc(x.name)}</h2>
          <p class="small muted" style="margin-top:-4px">${esc(x.who)}</p>
          <p><b>What hurts:</b> ${esc(x.pain)}</p>
          <p class="say">${esc(x.hook)}</p>
          <p><b>The money:</b> ${esc(x.value)}</p>
          <p><b>Best fit:</b> ${esc(x.fit)}</p>
          <p style="margin-bottom:0"><b>Watch out:</b> ${esc(x.watch)}</p>
        </article>`).join('')}
      <div class="btn-row"><a class="btn btn--primary" href="#/roleplay">Practice these calls</a></div>`;
  }

  // ── Pricing ────────────────────────────────────────────────
  function pricing() {
    markDone('pricing');
    view.innerHTML = `
      <span class="eyebrow">Pricing</span>
      <h1>One missed job pays for it</h1>
      <div class="grid g3">
        ${T.plans.map((p, i) => `
          <article class="card plan${i === 1 ? ' plan--pop' : ''}">
            <h3>${esc(p.name)}</h3>
            <p class="price">${esc(p.price)}</p>
            <p class="muted small">${esc(p.setup)}</p>
            <ul class="clean small">${p.includes.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
            <p class="small" style="margin-top:10px"><b>Best for:</b> ${esc(p.fit)}</p>
          </article>`).join('')}
      </div>
      <div class="card" style="margin-top:14px">
        <h2>Terms to know</h2>
        <ul class="clean">${T.terms.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </div>
      <div class="card">
        <h2>How to talk price</h2>
        <ul class="clean">${T.pricingTips.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </div>
      <div class="btn-row"><a class="btn btn--primary" href="#/calculator">Practice with the calculator</a><a class="btn" href="#/quiz">Test yourself</a></div>`;
  }

  // ── Stats ──────────────────────────────────────────────────
  const strengthLabel = { solid: 'Solid research', vendor: 'Vendor study', claim: 'Use carefully' };
  function stats() {
    markDone('stats');
    view.innerHTML = `
      <span class="eyebrow">Stats</span>
      <h1>Numbers that help, and how to say them</h1>
      <p class="lead">I checked where each number comes from. Some popular stats don’t have a traceable original study, so each one is labeled. Using a number carefully makes you more believable, not less.</p>
      <div class="card">
        <h2>Rules for using stats</h2>
        <ul class="clean">${T.statRules.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
        <p class="small" style="margin:10px 0 0">
          <span class="tag tag--solid">Solid research</span> independent or well documented ·
          <span class="tag tag--vendor">Vendor study</span> from a company in this industry, say “one study found” ·
          <span class="tag tag--claim">Use carefully</span> widely repeated, original source not found
        </p>
      </div>
      ${T.stats.map((s) => `
        <article class="card">
          <p style="margin-bottom:8px"><span class="tag tag--${s.strength}">${strengthLabel[s.strength]}</span></p>
          <h3>${esc(s.stat)}</h3>
          <p class="small muted">Source: <a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.source)}</a></p>
          <p class="say">${esc(s.say)}</p>
        </article>`).join('')}`;
  }

  // ── Playbook ───────────────────────────────────────────────
  function playbook() {
    markDone('playbook');
    view.innerHTML = `
      <span class="eyebrow">Cold-call playbook</span>
      <h1>The call, step by step</h1>
      <p class="lead">Short, local, honest. One question at a time. Always land on the free audit.</p>
      ${T.callFlow.map((s) => `
        <article class="card">
          <h2>${esc(s.step)}</h2>
          <p class="say">${esc(s.script)}</p>
          <p class="small muted" style="margin:0"><b>Why:</b> ${esc(s.why)}</p>
        </article>`).join('')}
      <h2 class="section-title">When you get voicemail</h2>
      <div class="card"><p class="say" style="margin:0">${esc(T.voicemail)}</p></div>
      <h2 class="section-title">Gatekeepers (spouse, office manager)</h2>
      <div class="card"><ul class="clean">${T.gatekeeper.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></div>
      <h2 class="section-title">Techniques</h2>
      <div class="grid g2">${T.techniques.map((t) => `<div class="card"><h3>${esc(t.name)}</h3><p class="muted small" style="margin:0">${esc(t.tip)}</p></div>`).join('')}</div>
      <h2 class="section-title">Stay on the right side of the rules</h2>
      <div class="card"><ul class="clean">${T.compliance.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></div>
      <p class="small muted">Gong figures come from Gong’s published analyses of recorded sales calls (<a href="https://www.gong.io/blog/the-best-and-worst-cold-call-openers-backed-by-data-from-300m-calls" target="_blank" rel="noopener">openers</a>, <a href="https://www.gong.io/blog/cold-call-stats" target="_blank" rel="noopener">cold-call stats</a>, <a href="https://www.gong.io/blog/handling-sales-objections" target="_blank" rel="noopener">objections</a>). Gong sells sales software, so treat them as one company’s data.</p>
      <div class="btn-row"><a class="btn btn--primary" href="#/roleplay">Practice a call</a></div>`;
  }

  // ── Objections ─────────────────────────────────────────────
  function methodHtml() {
    return `<div class="method">${T.objectionMethod.map((m, i) => `<div><b>${i + 1}. ${esc(m.k)}</b><span>${esc(m.v)}</span></div>`).join('')}</div>`;
  }
  function objections() {
    markDone('objections');
    view.innerHTML = `
      <span class="eyebrow">Objection handling</span>
      <h1>Every “no” has a next step</h1>
      <p class="lead">Use the same five moves every time. Most objections are reflexes, not decisions.</p>
      ${methodHtml()}
      ${T.objections.map((o) => `
        <details class="obj">
          <summary>“${esc(o.o.replace(/^“|”$/g, ''))}”</summary>
          <div class="body">
            <p class="small muted"><b>What’s really going on:</b> ${esc(o.real)}</p>
            <p class="say" style="margin-bottom:0">${esc(o.r)}</p>
          </div>
        </details>`).join('')}
      <div class="btn-row"><a class="btn btn--primary" href="#/drill">Drill these</a></div>`;
  }

  // ── Drill ──────────────────────────────────────────────────
  let drillDeck = [], drillCount = 0;
  function drill() {
    if (!drillDeck.length) drillDeck = shuffle(T.objections);
    const o = drillDeck[0];
    view.innerHTML = `
      <span class="eyebrow">Objection drill · ${drillCount} done this session</span>
      <h1>Say it out loud</h1>
      <p class="lead">Read the objection. Answer it out loud like you’re on the call (or type it). Then reveal and compare.</p>
      <div class="card flash">
        <p class="muted small" style="margin-bottom:6px">The prospect says:</p>
        <p class="q">“${esc(o.o.replace(/^“|”$/g, ''))}”</p>
      </div>
      <label for="mine" class="small" style="font-weight:700">Your answer (optional)</label>
      <textarea id="mine" placeholder="Type what you'd say..."></textarea>
      <div class="btn-row"><button class="btn btn--primary" id="reveal">Reveal a strong answer</button></div>
      <div id="ans"></div>`;
    view.querySelector('#reveal').addEventListener('click', () => {
      view.querySelector('#ans').innerHTML = `
        <div class="card" style="margin-top:14px">
          <p class="small muted"><b>What’s really going on:</b> ${esc(o.real)}</p>
          <p class="say">${esc(o.r)}</p>
          <p class="small muted">Did you: pause, acknowledge, ask a question, answer short, and go back to the audit?</p>
          <div class="btn-row"><button class="btn btn--primary" id="next">Next objection</button></div>
        </div>`;
      view.querySelector('#reveal').disabled = true;
      addPts(2); drillCount++;
      if (drillCount >= 10) markDone('drill');
      view.querySelector('#next').addEventListener('click', () => { drillDeck.shift(); drill(); });
      view.querySelector('#next').focus();
    });
  }

  // ── Role-play ──────────────────────────────────────────────
  function roleplayList() {
    view.innerHTML = `
      <span class="eyebrow">Role-play</span>
      <h1>Practice real calls</h1>
      <p class="lead">Pick a call. Read their line, choose what you’d say, and get feedback on every choice. Goal: book the audit.</p>
      <p class="small muted">Tip: read your choice out loud before you tap it. Saying it is the practice.</p>
      <div class="grid">${T.scenarios.map((s) => {
        const b = S.best['rp-' + s.id];
        return `<a class="tile" href="#/roleplay/${s.id}"><h3>${esc(s.title)}</h3><p>${esc(s.setup)}</p>${b != null ? `<p style="margin-top:8px"><span class="tag">Best: ${b}%</span></p>` : ''}</a>`;
      }).join('')}</div>`;
  }
  function roleplay(id) {
    const sc = T.scenarios.find((s) => s.id === id);
    if (!sc) return roleplayList();
    let node = sc.start, got = 0, max = 0;
    const log = [];
    function draw() {
      const n = sc.nodes[node];
      const ended = !n;
      const chat = log.map((l) => l.html).join('');
      if (ended) {
        const pct = max ? Math.round((got / max) * 100) : 0;
        const outcome = T.endings[node] || '';
        const good = node === 'end_good';
        if (good) markDone('rp-' + sc.id);
        const prev = S.best['rp-' + sc.id];
        if (prev == null || pct > prev) S.best['rp-' + sc.id] = pct;
        addPts(got * 5);
        view.innerHTML = `
          <span class="eyebrow">${esc(sc.title)}</span>
          <h1>${good ? 'Audit booked' : 'Call over'}</h1>
          <div class="chat">${chat}</div>
          <div class="card" style="text-align:center">
            <p class="score">${pct}%</p>
            <p>${esc(outcome)}</p>
            <p class="muted small">+${got * 5} pts</p>
            <div class="btn-row" style="justify-content:center">
              <a class="btn btn--primary" href="#/roleplay/${sc.id}" id="again">Try again</a>
              <a class="btn" href="#/roleplay">Other calls</a>
            </div>
          </div>`;
        view.querySelector('#again').addEventListener('click', (e) => { e.preventDefault(); roleplay(sc.id); });
        return;
      }
      const choices = shuffle(n.choices);
      view.innerHTML = `
        <span class="eyebrow">${esc(sc.title)}</span>
        ${log.length ? '' : `<div class="card"><p style="margin:0">${esc(sc.setup)}</p></div>`}
        <div class="chat">${chat}<div class="msg msg--them"><small>${esc(sc.who || 'Contractor')}</small>${esc(n.line)}</div></div>
        <p class="small" style="font-weight:700">What do you say?</p>
        <div class="choices">${choices.map((c, i) => `<button class="choice" data-i="${i}">${esc(c.t)}</button>`).join('')}</div>`;
      view.querySelectorAll('.choice').forEach((b) => b.addEventListener('click', () => {
        const c = choices[+b.dataset.i];
        got += c.p; max += 2;
        log.push({ html:
          `<div class="msg msg--them"><small>${esc(sc.who || 'Contractor')}</small>${esc(n.line)}</div>` +
          `<div class="msg msg--me"><small>You</small>${esc(c.t)}</div>` +
          `<div class="fb fb--${c.p}">${c.p === 2 ? 'Strong. ' : c.p === 1 ? 'Okay. ' : 'Weak. '}${esc(c.f)}</div>` });
        node = c.n;
        draw();
        const last = view.querySelector('.chat').lastElementChild;
        if (last) last.scrollIntoView({ block: 'center' });
      }));
    }
    draw();
  }

  // ── Quiz ───────────────────────────────────────────────────
  function quiz() {
    const qs = shuffle(T.quiz).map((q) => {
      const order = shuffle(q.a.map((_, i) => i));
      return Object.assign({}, q, { order });
    });
    let i = 0, right = 0;
    function draw() {
      if (i >= qs.length) {
        const pct = Math.round((right / qs.length) * 100);
        if (pct >= 90) markDone('quiz');
        if (S.best.quiz == null || pct > S.best.quiz) { S.best.quiz = pct; save(); }
        view.innerHTML = `
          <span class="eyebrow">Quiz</span><h1>Done</h1>
          <div class="card" style="text-align:center">
            <p class="score">${pct}%</p>
            <p>${right} of ${qs.length} right. ${pct >= 90 ? 'You know this cold.' : 'Aim for 90%. Review Pricing and Services, then go again.'}</p>
            <p class="muted small">Best: ${S.best.quiz}%</p>
            <div class="btn-row" style="justify-content:center"><button class="btn btn--primary" id="again">Take it again</button></div>
          </div>`;
        view.querySelector('#again').addEventListener('click', quiz);
        return;
      }
      const q = qs[i];
      view.innerHTML = `
        <span class="eyebrow">Question ${i + 1} of ${qs.length} · ${right} right</span>
        <div class="bar" style="margin-bottom:16px"><span style="width:${(i / qs.length) * 100}%"></span></div>
        <div class="card">
          <h2>${esc(q.q)}</h2>
          ${q.order.map((k) => `<button class="opt" data-k="${k}">${esc(q.a[k])}</button>`).join('')}
          <div id="why"></div>
        </div>`;
      view.querySelectorAll('.opt').forEach((b) => b.addEventListener('click', () => {
        const k = +b.dataset.k;
        const ok = k === q.c;
        if (ok) { right++; addPts(10); }
        view.querySelectorAll('.opt').forEach((x) => {
          x.disabled = true;
          if (+x.dataset.k === q.c) x.classList.add('right');
          else if (x === b) x.classList.add('wrong');
        });
        view.querySelector('#why').innerHTML = `
          <p style="margin-top:10px"><b>${ok ? 'Right.' : 'Not quite.'}</b> ${esc(q.why)}</p>
          <button class="btn btn--primary" id="next">${i + 1 < qs.length ? 'Next question' : 'See score'}</button>`;
        const nx = view.querySelector('#next');
        nx.addEventListener('click', () => { i++; draw(); });
        nx.focus();
      }));
    }
    draw();
  }

  // ── Calculator ─────────────────────────────────────────────
  function calculator() {
    const v = Object.assign({ calls: 150, missed: 20, real: 37, close: 45, job: 800 }, S.calc || {});
    view.innerHTML = `
      <span class="eyebrow">Missed-call calculator</span>
      <h1>Run their numbers on the call</h1>
      <p class="lead">Ask for their numbers, plug them in, read the result back. Their numbers beat any statistic.</p>
      <div class="card calc grid g2">
        <div><label for="c-calls">Calls per month</label><input id="c-calls" type="number" inputmode="numeric" min="0" value="${v.calls}"></div>
        <div><label for="c-missed">% of calls missed</label><input id="c-missed" type="number" inputmode="numeric" min="0" max="100" value="${v.missed}"></div>
        <div><label for="c-real">% of missed calls that are real new-job leads</label><input id="c-real" type="number" inputmode="numeric" min="0" max="100" value="${v.real}"></div>
        <div><label for="c-close">% of leads they’d normally win</label><input id="c-close" type="number" inputmode="numeric" min="0" max="100" value="${v.close}"></div>
        <div><label for="c-job">Average job value ($)</label><input id="c-job" type="number" inputmode="numeric" min="0" value="${v.job}"></div>
      </div>
      <div class="card result" id="out" aria-live="polite"></div>
      <div class="card">
        <h3>How to say it</h3>
        <p class="say" id="sayit" style="margin-bottom:0"></p>
      </div>
      <p class="small muted">Defaults match the example on our website (150 calls, 20% missed → about 11 real leads → about 5 lost jobs). Change them to the prospect’s real numbers. This is an estimate, not a promise.</p>`;
    const ids = ['calls', 'missed', 'real', 'close', 'job'];
    function calc() {
      const n = {};
      ids.forEach((k) => { n[k] = Math.max(0, parseFloat(view.querySelector('#c-' + k).value) || 0); });
      S.calc = n; save();
      const missed = n.calls * n.missed / 100;
      const leads = missed * n.real / 100;
      const jobs = leads * n.close / 100;
      const lost = jobs * n.job;
      const lc = n.job ? Math.ceil(397 / n.job * 10) / 10 : 0;
      const fd = n.job ? Math.ceil(997 / n.job * 10) / 10 : 0;
      view.querySelector('#out').innerHTML = `
        <p class="muted" style="margin-bottom:4px">Estimated work lost every month</p>
        <p class="big">${money(lost)}</p>
        <p class="muted" style="margin-bottom:12px">${money(lost * 12)} a year</p>
        <p style="margin:0">${Math.round(missed)} missed calls → about ${leads.toFixed(1)} real leads → about ${jobs.toFixed(1)} lost jobs</p>
        <p class="muted small" style="margin:10px 0 0">Jobs needed to cover the plan: Lead Catcher ${lc} · Front Desk ${fd}</p>`;
      view.querySelector('#sayit').textContent =
        `“So if you’re getting about ${n.calls} calls a month and missing ${n.missed}%, that’s around ${Math.round(missed)} missed calls. Even if only some are real jobs, that’s roughly ${jobs.toFixed(0)} jobs and about ${money(lost)} a month going to someone else. The free audit will show us your real numbers.”`;
    }
    ids.forEach((k) => view.querySelector('#c-' + k).addEventListener('input', calc));
    calc();
  }

  renderXp();
  route();
})();
