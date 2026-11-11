export function renderAgentWorkbenchHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <title>ASCALON // AGENT SYNC CONTROL PLANE</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg-chassis: #0d0e11;
      --bg-recessed: #121419;
      --bg-elevated: #181b22;
      --bg-active: #1f2430;
      --border-hairline: #272c38;
      --border-strong: #3a4254;
      --text-primary: #f2f4f8;
      --text-secondary: #a2adbe;
      --text-muted: #687387;
      --signal-orange: #ff4f00;
      --signal-amber: #ffb000;
      --phosphor-green: #4af626;
      --steel-blue: #58a6ff;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: var(--bg-chassis);
      color: var(--text-primary);
      font-family: 'Space Grotesk', sans-serif;
      font-size: 13px;
      line-height: 1.45;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .mono {
      font-family: 'IBM Plex Mono', monospace;
      font-variant-numeric: tabular-nums;
    }

    /* Top Hardware Telemetry Strip */
    .topbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 10px 16px;
      background: var(--bg-recessed);
      border-bottom: 1px solid var(--border-hairline);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .led {
      width: 9px;
      height: 9px;
      background: var(--phosphor-green);
      box-shadow: 0 0 8px rgba(74, 246, 38, 0.65);
    }
    .led.drift {
      background: var(--signal-orange);
      box-shadow: 0 0 8px rgba(255, 79, 0, 0.75);
    }

    .brand-title {
      font-weight: 700;
      font-size: 13.5px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .brand-sub {
      color: var(--text-muted);
      font-size: 11px;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }

    button {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11.5px;
      font-weight: 600;
      color: var(--text-primary);
      background: var(--bg-elevated);
      border: 1px solid var(--border-strong);
      border-bottom-width: 2px;
      padding: 6px 12px;
      cursor: pointer;
      transition: background 0.12s, transform 0.06s;
    }
    button:hover:not(:disabled) {
      background: var(--bg-active);
    }
    button:active:not(:disabled) {
      transform: translateY(1px);
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    button.primary {
      background: var(--signal-orange);
      border-color: #ff7733;
      border-bottom-color: #b33600;
      color: #0b0c0e;
      font-weight: 700;
    }
    button.primary:hover:not(:disabled) {
      background: #ff621a;
    }
    button.green {
      border-color: rgba(74, 246, 38, 0.55);
      color: var(--phosphor-green);
    }

    /* Metric Readout Bar */
    .telemetry-strip {
      display: grid;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      border-bottom: 1px solid var(--border-hairline);
      background: #0f1116;
    }
    @media (max-width: 960px) {
      .telemetry-strip { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    }
    @media (max-width: 560px) {
      .telemetry-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }

    .metric-cell {
      padding: 9px 14px;
      border-right: 1px solid var(--border-hairline);
      border-bottom: 1px solid var(--border-hairline);
    }
    .metric-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .metric-val {
      margin-top: 2px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 15px;
      font-weight: 700;
      color: var(--text-primary);
    }

    /* Split-Pane Workbench */
    .workbench {
      flex: 1;
      display: grid;
      grid-template-columns: 420px minmax(0, 1fr);
      min-height: 0;
    }
    @media (max-width: 960px) {
      .workbench { grid-template-columns: 1fr; }
    }

    .queue-pane {
      border-right: 1px solid var(--border-hairline);
      background: var(--bg-recessed);
      display: flex;
      flex-direction: column;
    }

    .filter-bar {
      display: flex;
      gap: 4px;
      padding: 8px 12px;
      border-bottom: 1px solid var(--border-hairline);
      background: #0f1116;
    }
    .filter-tab {
      padding: 4px 8px;
      font-size: 10.5px;
      border-bottom-width: 1px;
    }
    .filter-tab.active {
      background: var(--text-primary);
      color: #0b0c0e;
      border-color: var(--text-primary);
      font-weight: 700;
    }

    .queue-list {
      flex: 1;
      overflow-y: auto;
    }

    .queue-row {
      padding: 11px 14px;
      border-bottom: 1px solid var(--border-hairline);
      cursor: pointer;
      transition: background 0.1s;
    }
    .queue-row:hover { background: var(--bg-elevated); }
    .queue-row.selected {
      background: var(--bg-active);
      border-left: 3px solid var(--signal-orange);
      padding-left: 11px;
    }
    .queue-row.selected.synced {
      border-left-color: var(--phosphor-green);
    }

    .row-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      margin-bottom: 4px;
    }

    .badge {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      padding: 1px 6px;
      border: 1px solid var(--border-strong);
      text-transform: uppercase;
    }
    .badge.p0 { color: #ff854d; border-color: var(--signal-orange); background: rgba(255, 79, 0, 0.14); }
    .badge.p1 { color: var(--signal-amber); border-color: var(--signal-amber); background: rgba(255, 176, 0, 0.12); }
    .badge.p2 { color: var(--steel-blue); border-color: var(--steel-blue); background: rgba(88, 166, 255, 0.12); }
    .badge.sync { color: var(--phosphor-green); border-color: rgba(74, 246, 38, 0.5); background: rgba(74, 246, 38, 0.09); }
    .badge.applied { color: #58a6ff; border-color: #58a6ff; }
    .badge.ignored { color: var(--text-muted); border-color: var(--border-hairline); }
    .badge.i18n { color: #0b0c0e; background: var(--signal-amber); border-color: var(--signal-amber); }

    .row-title {
      font-weight: 600;
      font-size: 12.5px;
      color: var(--text-primary);
    }
    .row-meta {
      margin-top: 4px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10.5px;
      color: var(--text-muted);
      display: flex;
      justify-content: space-between;
    }

    /* Right Inspector Pane */
    .inspector-pane {
      padding: 18px 22px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .panel {
      border: 1px solid var(--border-hairline);
      background: var(--bg-recessed);
    }
    .panel-header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 8px 12px;
      background: #0f1116;
      border-bottom: 1px solid var(--border-hairline);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .panel-body {
      padding: 12px 14px;
    }

    .kv-grid {
      display: grid;
      grid-template-columns: 150px minmax(0, 1fr);
      gap: 6px 12px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11.5px;
    }
    .kv-key { color: var(--text-muted); }
    .kv-val a { color: var(--steel-blue); text-decoration: none; }
    .kv-val a:hover { text-decoration: underline; }

    .diff-list {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11.5px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .diff-add { color: var(--phosphor-green); background: rgba(74, 246, 38, 0.06); padding: 4px 8px; border-left: 2px solid var(--phosphor-green); word-break: break-all; }
    .diff-rem { color: #ff7b54; background: rgba(255, 79, 0, 0.08); padding: 4px 8px; border-left: 2px solid var(--signal-orange); word-break: break-all; }
    .diff-chg { color: var(--signal-amber); background: rgba(255, 176, 0, 0.08); padding: 4px 8px; border-left: 2px solid var(--signal-amber); word-break: break-all; }

    pre.prompt-box {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      line-height: 1.5;
      color: #dce3ee;
      background: #090a0d;
      border: 1px solid var(--border-hairline);
      padding: 12px;
      overflow-x: auto;
      white-space: pre-wrap;
      max-height: 340px;
    }

    .toast {
      position: fixed;
      bottom: 16px;
      right: 16px;
      background: var(--text-primary);
      color: #0b0c0e;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11.5px;
      font-weight: 700;
      padding: 8px 14px;
      border: 1px solid var(--signal-orange);
      display: none;
    }
  </style>
</head>
<body>
  <header class="topbar">
    <div class="brand">
      <div id="statusLed" class="led"></div>
      <div>
        <div class="brand-title">ASCALON.GG // AGENT SYNC CONTROL PLANE</div>
        <div class="brand-sub mono">Machine-First Upstream AppMedia Diff Queue · Zero Blind Overwrites</div>
      </div>
    </div>
    <div class="actions">
      <button id="btnScan" class="primary" onclick="triggerLiveScan()">[SCAN APPMEDIA NOW]</button>
      <button onclick="copyFullAgentBrief()">[COPY FULL AGENT BRIEF]</button>
      <a href="/api/agent/queue" target="_blank" style="text-decoration:none"><button>[RAW JSON API ↗]</button></a>
      <a href="/api/agent/brief" target="_blank" style="text-decoration:none"><button>[AGENT BRIEF .MD ↗]</button></a>
    </div>
  </header>

  <section class="telemetry-strip">
    <div class="metric-cell">
      <div class="metric-label">01 // PENDING AGENT TASKS</div>
      <div id="mPending" class="metric-val">--</div>
    </div>
    <div class="metric-cell">
      <div class="metric-label">02 // SAVIORS & ARCANA</div>
      <div id="mEntities" class="metric-val">--</div>
    </div>
    <div class="metric-cell">
      <div class="metric-label">03 // GUIDES & CODES</div>
      <div id="mGuides" class="metric-val">--</div>
    </div>
    <div class="metric-cell">
      <div class="metric-label">04 // UPCOMING GAMES</div>
      <div id="mUpcoming" class="metric-val">--</div>
    </div>
    <div class="metric-cell">
      <div class="metric-label">05 // LIVE JST TIMERS</div>
      <div id="mTimers" class="metric-val">--</div>
    </div>
    <div class="metric-cell">
      <div class="metric-label">06 // LAST UPSTREAM SCAN</div>
      <div id="mLastScan" class="metric-val" style="font-size:11.5px">--</div>
    </div>
  </section>

  <main class="workbench">
    <aside class="queue-pane">
      <div class="filter-bar">
        <button class="filter-tab active" data-filter="ALL" onclick="setFilter('ALL')">ALL (6)</button>
        <button class="filter-tab" data-filter="PENDING" onclick="setFilter('PENDING')">PENDING AGENT</button>
        <button class="filter-tab" data-filter="I18N" onclick="setFilter('I18N')">BANNER AI</button>
        <button class="filter-tab" data-filter="SYNCED" onclick="setFilter('SYNCED')">IN SYNC</button>
      </div>
      <div id="queueList" class="queue-list"></div>
    </aside>

    <section id="inspectorPane" class="inspector-pane">
      <div class="mono" style="color:var(--text-muted)">Loading Agent Sync Queue…</div>
    </section>
  </main>

  <div id="toast" class="toast">COPIED TO CLIPBOARD</div>

  <script>
    let syncState = null;
    let selectedId = null;
    let currentFilter = 'ALL';

    function showToast(msg) {
      const el = document.getElementById('toast');
      el.textContent = msg;
      el.style.display = 'block';
      setTimeout(() => { el.style.display = 'none'; }, 2200);
    }

    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    async function fetchQueue() {
      const res = await fetch('/api/agent/queue');
      const json = await res.json();
      if (json.success) {
        syncState = json.data;
        if (!selectedId && syncState.queue.length > 0) {
          selectedId = syncState.queue[0].id;
        }
        renderAll();
      }
    }

    async function triggerLiveScan() {
      const btn = document.getElementById('btnScan');
      btn.disabled = true;
      btn.textContent = '[SCANNING 6 SURFACES…]';
      try {
        const res = await fetch('/api/agent/scan', { method: 'POST' });
        const json = await res.json();
        if (json.success) {
          syncState = json.data;
          if (!selectedId && syncState.queue.length > 0) {
            selectedId = syncState.queue[0].id;
          }
          renderAll();
          showToast('LIVE APPMEDIA SCAN COMPLETE');
        } else {
          showToast('SCAN ERROR: ' + json.error.message);
        }
      } finally {
        btn.disabled = false;
        btn.textContent = '[SCAN APPMEDIA NOW]';
      }
    }

    async function copyFullAgentBrief() {
      const res = await fetch('/api/agent/brief');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      showToast('FULL AGENT BRIEF COPIED');
    }

    async function submitDecision(id, status) {
      const note = status === 'IGNORED'
        ? 'Marked as non-actionable noise via Agent Workbench'
        : status === 'APPLIED'
        ? 'Verified & applied to gacha-meta-engine'
        : 'Reopened for Agent inspection';
      const res = await fetch('/api/agent/decision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status, note })
      });
      const json = await res.json();
      if (json.success) {
        syncState = json.data;
        renderAll();
        showToast('UPDATED -> ' + status);
      }
    }

    function setFilter(f) {
      currentFilter = f;
      document.querySelectorAll('.filter-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === f);
      });
      renderQueueList();
    }

    function selectItem(id) {
      selectedId = id;
      renderQueueList();
      renderInspector();
    }

    function buildSinglePrompt(item) {
      const lines = [
        '# AGENT SYNC TASK: ' + item.id,
        '- Surface: ' + item.surface + ' (' + item.priority + ')',
        '- Upstream URL: ' + item.sourceUrl,
        '- Target Repo: ' + item.targetRepoPath,
        '- Target Files: ' + item.targetFiles.join(', '),
        '- Requires English Banner AI Localization: ' + (item.requiresBannerTranslation ? 'YES' : 'NO'),
        '',
        '## Diff Summary',
        item.diff.summary,
      ];
      if (item.diff.addedItems.length) {
        lines.push('', '### Added on AppMedia:');
        item.diff.addedItems.forEach(x => lines.push('  + ' + x));
      }
      if (item.diff.removedOrExpiredItems.length) {
        lines.push('', '### Expired / Retired Locally:');
        item.diff.removedOrExpiredItems.forEach(x => lines.push('  - ' + x));
      }
      if (item.diff.rawJapaneseAssetUrls.length) {
        lines.push('', '### Raw Japanese Banner URLs to Localize to English:');
        item.diff.rawJapaneseAssetUrls.forEach(x => lines.push('  * ' + x));
      }
      lines.push('', '## Execution Steps:');
      item.agentExecutionSteps.forEach((s, i) => lines.push((i + 1) + '. ' + s));
      return lines.join('\\n');
    }

    async function copySelectedPrompt() {
      const item = syncState?.queue.find(q => q.id === selectedId);
      if (!item) return;
      await navigator.clipboard.writeText(buildSinglePrompt(item));
      showToast('TASK PROMPT COPIED FOR AGENT');
    }

    function renderAll() {
      if (!syncState) return;
      const pendingCount = syncState.queue.filter(q => q.status === 'PENDING_AGENT').length;
      const led = document.getElementById('statusLed');
      led.className = pendingCount > 0 ? 'led drift' : 'led';

      const mPending = document.getElementById('mPending');
      mPending.textContent = pendingCount + ' / ' + syncState.queue.length;
      mPending.style.color = pendingCount > 0 ? 'var(--signal-orange)' : 'var(--phosphor-green)';

      const inv = syncState.localInventory;
      document.getElementById('mEntities').textContent = inv.saviorsCount + ' / ' + inv.arcanaCount;
      document.getElementById('mGuides').textContent = inv.guidesCount + ' / ' + inv.promoCodesCount + ' CODES';
      document.getElementById('mUpcoming').textContent = inv.upcomingGamesCount + ' TITLES';
      document.getElementById('mTimers').textContent = inv.activeCountdownTimersCount + ' ACTIVE';
      document.getElementById('mLastScan').textContent = syncState.lastFullScanIso
        ? syncState.lastFullScanIso.replace('T', ' ').slice(0, 19) + 'Z'
        : 'NOT SCANNED YET';

      renderQueueList();
      renderInspector();
    }

    function renderQueueList() {
      const container = document.getElementById('queueList');
      if (!syncState || syncState.queue.length === 0) {
        container.innerHTML = '<div style="padding:18px" class="mono">Queue empty. Click [SCAN APPMEDIA NOW] to compare Ascalon.gg against live AppMedia.</div>';
        return;
      }

      const filtered = syncState.queue.filter(item => {
        if (currentFilter === 'PENDING') return item.status === 'PENDING_AGENT';
        if (currentFilter === 'I18N') return item.requiresBannerTranslation;
        if (currentFilter === 'SYNCED') return item.status === 'IN_SYNC' || item.status === 'APPLIED';
        return true;
      });

      container.innerHTML = filtered.map(item => {
        const isSel = item.id === selectedId;
        const isSynced = item.status === 'IN_SYNC' || item.status === 'APPLIED';
        const prioClass = item.status === 'IN_SYNC'
          ? 'sync'
          : item.status === 'APPLIED'
          ? 'applied'
          : item.status === 'IGNORED'
          ? 'ignored'
          : item.priority === 'P0_CRITICAL'
          ? 'p0'
          : item.priority === 'P1_HIGH'
          ? 'p1'
          : 'p2';

        return \`
          <div class="queue-row \${isSel ? 'selected' : ''} \${isSynced ? 'synced' : ''}" onclick="selectItem('\${escapeHtml(item.id)}')">
            <div class="row-top">
              <div style="display:flex;gap:5px;align-items:center">
                <span class="badge \${prioClass}">\${escapeHtml(item.status === 'PENDING_AGENT' ? item.priority : item.status)}</span>
                \${item.requiresBannerTranslation ? '<span class="badge i18n">BANNER AI</span>' : ''}
              </div>
              <span class="mono" style="font-size:10px;color:var(--text-muted)">#\${escapeHtml(item.upstreamHash.slice(0, 8))}</span>
            </div>
            <div class="row-title">\${escapeHtml(item.title)}</div>
            <div class="row-meta">
              <span>\${escapeHtml(item.surface)}</span>
              <span>+\${item.diff.addedItems.length} / -\${item.diff.removedOrExpiredItems.length}</span>
            </div>
          </div>
        \`;
      }).join('');
    }

    function renderInspector() {
      const pane = document.getElementById('inspectorPane');
      if (!syncState || syncState.queue.length === 0) {
        pane.innerHTML = '<div class="panel"><div class="panel-header">00 // READY FOR INITIAL SCAN</div><div class="panel-body mono">Click [SCAN APPMEDIA NOW] in the top bar (or run <code>npm run scan</code>) to populate the Agent Queue.</div></div>';
        return;
      }

      const item = syncState.queue.find(q => q.id === selectedId) || syncState.queue[0];
      const diffRows = [
        ...item.diff.addedItems.map(x => \`<div class="diff-add">+ \${escapeHtml(x)}</div>\`),
        ...item.diff.removedOrExpiredItems.map(x => \`<div class="diff-rem">- \${escapeHtml(x)}</div>\`),
        ...item.diff.changedFields.map(c => \`<div class="diff-chg">~ \${escapeHtml(c.key)}: "\${escapeHtml(c.localValue)}" → "\${escapeHtml(c.upstreamValue)}"</div>\`),
      ];

      pane.innerHTML = \`
        <div class="panel">
          <div class="panel-header">
            <span>TASK INSPECTOR // \${escapeHtml(item.id)}</span>
            <div style="display:flex;gap:6px">
              <button onclick="copySelectedPrompt()">[COPY TASK PROMPT]</button>
              <button class="green" onclick="submitDecision('\${escapeHtml(item.id)}', 'APPLIED')">[MARK APPLIED]</button>
              <button onclick="submitDecision('\${escapeHtml(item.id)}', 'IGNORED')">[IGNORE NOISE]</button>
              \${item.status !== 'PENDING_AGENT' ? \`<button onclick="submitDecision('\${escapeHtml(item.id)}', 'PENDING_AGENT')">[REOPEN]</button>\` : ''}
            </div>
          </div>
          <div class="panel-body">
            <div class="kv-grid">
              <div class="kv-key">STATUS / PRIORITY</div>
              <div class="kv-val">\${escapeHtml(item.status)} · \${escapeHtml(item.priority)}</div>
              <div class="kv-key">APPMEDIA SOURCE</div>
              <div class="kv-val"><a href="\${escapeHtml(item.sourceUrl)}" target="_blank" rel="noreferrer">\${escapeHtml(item.sourceUrl)} ↗</a></div>
              <div class="kv-key">UPSTREAM SHA-256</div>
              <div class="kv-val">\${escapeHtml(item.upstreamHash)} (auto-reopens if AppMedia edits again)</div>
              <div class="kv-key">TARGET FILES</div>
              <div class="kv-val">\${escapeHtml(item.targetFiles.join(' · '))}</div>
              <div class="kv-key">BANNER AI EDIT</div>
              <div class="kv-val" style="color:\${item.requiresBannerTranslation ? 'var(--signal-amber)' : 'var(--phosphor-green)'}">\${item.requiresBannerTranslation ? 'REQUIRED — Translate Japanese text on new banner(s) to English WebP' : 'NOT REQUIRED — Text / Structured Data Only'}</div>
              \${item.decisionNote ? \`<div class="kv-key">AGENT NOTE</div><div class="kv-val">\${escapeHtml(item.decisionNote)}</div>\` : ''}
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="panel-header">
            <span>SEMANTIC DIFF (LOCAL COUNT: \${item.diff.localCount} vs UPSTREAM: \${item.diff.upstreamCount})</span>
          </div>
          <div class="panel-body">
            <p style="margin-bottom:10px;color:var(--text-secondary)">\${escapeHtml(item.diff.summary)}</p>
            \${diffRows.length > 0
              ? \`<div class="diff-list">\${diffRows.join('')}</div>\`
              : '<div class="mono" style="color:var(--phosphor-green)">✓ Zero drift detected — Ascalon.gg matches live AppMedia ground truth.</div>'}
          </div>
        </div>

        <div class="panel">
          <div class="panel-header">
            <span>READY-TO-RUN AGENT EXECUTION PROMPT</span>
            <button onclick="copySelectedPrompt()">[COPY PROMPT]</button>
          </div>
          <div class="panel-body">
            <pre class="prompt-box">\${escapeHtml(buildSinglePrompt(item))}</pre>
          </div>
        </div>
      \`;
    }

    fetchQueue();
  </script>
</body>
</html>`;
}
