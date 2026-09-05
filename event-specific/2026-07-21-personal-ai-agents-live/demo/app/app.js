const STORAGE_KEY = 'ecorp-command-center-state-v1';

const ICONS = {
  alert: '<path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>',
  brief: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  command: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8"/><path d="M12 18v4"/>',
  evidence: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  export: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  repo: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h10"/>',
  scope: '<path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.5a1.3 1.3 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  signal: '<path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h7"/><path d="M15 3h6v6"/><path d="m21 3-7 7"/>',
  trace: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  workflow: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>'
};

const VIEW_ICONS = {
  command: ['command', 'amber'],
  evidence: ['evidence', 'blue'],
  brief: ['brief', 'red'],
  repo: ['repo', 'green'],
  trace: ['trace', 'pink']
};

const METRIC_ICONS = {
  'At risk': ['alert', 'amber'],
  Blocked: ['alert', 'red'],
  Critical: ['alert', 'red'],
  Decisions: ['brief', 'blue'],
  Issues: ['repo', 'green'],
  Milestones: ['trace', 'blue'],
  Open: ['repo', 'green'],
  Reviewed: ['check', 'green'],
  'Reviewed evidence': ['check', 'green'],
  Shown: ['workflow', 'blue'],
  'Simulated activity': ['code', 'pink'],
  Types: ['evidence', 'blue']
};

const TRACE_ICONS = [
  ['trace', ''],
  ['signal', 'blue'],
  ['evidence', ''],
  ['repo', 'green'],
  ['code', 'pink'],
  ['command', 'amber'],
  ['export', 'green']
];

const state = {
  data: null,
  activeTab: 'command',
  filters: {
    search: '',
    division: 'all',
    severity: 'all',
    status: 'all',
    owner: 'all',
    slaRisk: 'all'
  },
  evidenceFilters: {
    type: 'all',
    escalation: 'all'
  },
  local: {
    escalations: {},
    evidence: {},
    showSimulatedActivity: true
  }
};

document.addEventListener('DOMContentLoaded', () => {
  decorateStaticIcons();
  state.local = loadLocalState();
  wireTabs();
  loadSeedData();
});

function decorateStaticIcons() {
  document.querySelectorAll('.tab').forEach((button) => {
    const [name, tone] = VIEW_ICONS[button.dataset.tab] || VIEW_ICONS.command;
    if (!button.querySelector('.icon-badge')) {
      button.insertAdjacentHTML('afterbegin', iconBadge(name, tone));
    }
  });

  document.querySelectorAll('.view').forEach((view) => {
    const [name, tone] = VIEW_ICONS[view.id] || VIEW_ICONS.command;
    const heading = view.querySelector('.view-header h2');
    if (heading && !heading.querySelector('.icon-badge')) {
      heading.insertAdjacentHTML('afterbegin', iconBadge(name, tone));
    }
  });
}

function wireTabs() {
  const tabList = document.querySelector('[role="tablist"]');
  const tabs = [...document.querySelectorAll('[role="tab"]')];

  tabs.forEach((button) => {
    button.addEventListener('click', () => setActiveTab(button.dataset.tab));
  });

  tabList?.addEventListener('keydown', (event) => {
    const currentTab = event.target.closest?.('[role="tab"]');
    if (!currentTab) return;

    const currentIndex = tabs.indexOf(currentTab);
    let nextIndex = null;
    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;
    if (nextIndex === null) return;

    event.preventDefault();
    const nextTab = tabs[nextIndex];
    setActiveTab(nextTab.dataset.tab);
    nextTab.focus({ preventScroll: true });
  });
}

function setActiveTab(tabName) {
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  if (!tabs.some((button) => button.dataset.tab === tabName)) return;

  state.activeTab = tabName;
  tabs.forEach((button) => {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-selected', String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });
  document.querySelectorAll('.view').forEach((view) => {
    const isActive = view.id === tabName;
    view.classList.toggle('is-active', isActive);
    view.hidden = !isActive;
  });
}

async function loadSeedData() {
  try {
    state.data = location.protocol === 'file:' ? embeddedSeedData() : await fetchSeedData();
    renderAll();
    setStatus('Seed data loaded', 'ready');
  } catch (error) {
    try {
      state.data = embeddedSeedData();
      renderAll();
      setStatus('Seed data loaded', 'ready');
    } catch {
      renderLoadError(error);
      setStatus('Data unavailable', 'error');
    }
  }
}

async function fetchSeedData() {
  const response = await fetch('data/app-seed.json', { cache: 'no-store' });
  if (!response.ok) throw new Error(`Seed data request failed: ${response.status}`);
  return response.json();
}

function embeddedSeedData() {
  if (!window.ECORP_APP_SEED) throw new Error('Embedded seed data was not available.');
  return typeof structuredClone === 'function'
    ? structuredClone(window.ECORP_APP_SEED)
    : JSON.parse(JSON.stringify(window.ECORP_APP_SEED));
}

function renderAll() {
  const escalations = getEscalations();
  document.getElementById('escalation-count').textContent = escalations.length;
  renderCommandCenter(escalations);
  renderEvidenceFeed(getEvidence(), escalations);
  renderBriefShell(escalations);
  renderRepoShell();
  renderTraceShell();
}

function renderCommandCenter(escalations) {
  const filtered = filterEscalations(escalations);
  document.getElementById('command-content').innerHTML = `
    <div class="toolbar">
      <label>Search <input id="filter-search" type="search" value="${escapeAttr(state.filters.search)}" placeholder="division, owner, impact"></label>
      ${selectControl('division', 'Division', unique(escalations.map((item) => item.division)), state.filters.division)}
      ${selectControl('severity', 'Severity', unique(escalations.map((item) => item.severity)), state.filters.severity)}
      ${selectControl('status', 'Status', unique(escalations.map((item) => item.status)), state.filters.status)}
      ${selectControl('owner', 'Owner', unique(escalations.map((item) => item.owner)), state.filters.owner)}
      ${selectControl('slaRisk', 'SLA risk', unique(escalations.map((item) => item.slaRisk)), state.filters.slaRisk)}
    </div>
    <div class="action-row">
      <label class="inline-check"><input id="toggle-simulated" type="checkbox" ${state.local.showSimulatedActivity ? 'checked' : ''}> Show simulated commits and PRs</label>
      <button id="export-state" class="ghost-button" type="button">Export JSON</button>
      <button id="reset-state" class="ghost-button danger" type="button">Reset local state</button>
    </div>
    <div class="metric-row">
      ${metric('Shown', filtered.length)}
      ${metric('Critical', filtered.filter((item) => item.severity === 'critical').length)}
      ${metric('At risk', filtered.filter((item) => item.slaRisk !== 'on-track').length)}
      ${metric('Reviewed evidence', reviewedEvidenceCount())}
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Escalation</th>
            <th>Division</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Owner</th>
            <th>SLA</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map(renderEscalationRow).join('')}
        </tbody>
      </table>
    </div>
  `;
  wireCommandControls();
}

function renderEscalationRow(item) {
  return `
    <tr>
      <td>
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.category)} · ${escapeHtml(item.businessImpact)}</span>
        <em>${escapeHtml(item.nextAction)}</em>
      </td>
      <td>${escapeHtml(item.division)}</td>
      <td><span class="severity ${escapeAttr(item.severity)}">${escapeHtml(item.severity)}</span></td>
      <td>${statusSelect(item.id, item.status)}</td>
      <td>${ownerSelect(item.id, item.owner)}</td>
      <td>${escapeHtml(item.slaRisk)}</td>
      <td><textarea data-note="${escapeAttr(item.id)}" rows="2" placeholder="Local note">${escapeHtml(item.note || '')}</textarea></td>
    </tr>
  `;
}

function renderEvidenceFeed(evidence, escalations) {
  const filtered = filterEvidence(evidence);
  document.getElementById('evidence-content').innerHTML = `
    <div class="toolbar">
      ${selectControl('evidence-type', 'Evidence type', unique(evidence.map((item) => item.type)), state.evidenceFilters.type)}
      <label>Escalation
        <select id="evidence-escalation">
          <option value="all">All</option>
          ${escalations.map((item) => `<option value="${escapeAttr(item.id)}" ${state.evidenceFilters.escalation === item.id ? 'selected' : ''}>${escapeHtml(item.id)} · ${escapeHtml(item.title)}</option>`).join('')}
        </select>
      </label>
    </div>
    <div class="metric-row">
      ${metric('Shown', filtered.length)}
      ${metric('Reviewed', filtered.filter((item) => item.reviewed).length)}
      ${metric('Types', unique(evidence.map((item) => item.type)).length)}
    </div>
    <div class="evidence-grid">
      ${filtered.map(renderEvidenceCard).join('')}
    </div>
  `;
  wireEvidenceControls();
}

function renderEvidenceCard(item) {
  return `
    <article class="evidence-card">
      <div class="card-kicker">
        ${iconBadge('evidence', 'blue')}
        <span class="tag">${escapeHtml(item.type)}</span>
        <span class="tag muted">${escapeHtml(item.status)}</span>
      </div>
      <h3>${escapeHtml(item.summary)}</h3>
      <p>${escapeHtml(item.excerpt)}</p>
      <footer>
        <span>${escapeHtml(item.division)} · ${escapeHtml(item.source)}</span>
        <label><input type="checkbox" data-reviewed="${escapeAttr(item.id)}" ${item.reviewed ? 'checked' : ''}> reviewed</label>
      </footer>
    </article>
  `;
}

function renderBriefShell(escalations) {
  const top = [...escalations].sort((a, b) => severityRank(b.severity) - severityRank(a.severity)).slice(0, 4);
  const blockers = [
    ...new Set([
      ...state.data.briefDefaults.blockers,
      ...escalations.filter((item) => item.status === 'blocked').map((item) => item.title)
    ])
  ];
  document.getElementById('brief-content').innerHTML = `
    <div class="metric-row">
      ${metric('Critical', escalations.filter((item) => item.severity === 'critical').length)}
      ${metric('Open', escalations.filter((item) => item.status === 'open').length)}
      ${metric('Blocked', escalations.filter((item) => item.status === 'blocked').length)}
      ${metric('Decisions', state.data.briefDefaults.unresolvedDecisions.length)}
    </div>
    <div class="brief-layout">
      <section class="brief-card wide">
        ${sectionHeading('Top executive risks', 'brief', 'red')}
        <div class="stack">${top.map(renderTopRisk).join('')}</div>
      </section>
      <section class="brief-card heatmap-card">
        ${sectionHeading('Severity heatmap', 'scope', 'amber')}
        ${renderHeatmap(escalations)}
      </section>
      <section class="brief-card">
        ${sectionHeading('Blockers', 'alert', 'red')}
        <ul>${blockers.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </section>
      <section class="brief-card">
        ${sectionHeading('Unresolved decisions', 'signal', 'blue')}
        <ul>${state.data.briefDefaults.unresolvedDecisions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </section>
      <section class="brief-card">
        ${sectionHeading('Recommended next actions', 'check', 'green')}
        <ul>${state.data.briefDefaults.recommendedActions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </section>
    </div>
  `;
}

function renderRepoShell() {
  const artifacts = state.data.issueArtifacts;
  document.getElementById('repo-content').innerHTML = `
    <div class="notice">
      ${iconBadge('repo', 'green')}
      <div>
        <strong>Fabricated local repo:</strong>
        <span>This view teaches issue breakdown. It does not call GitHub or create live issues, commits, or pull requests.</span>
      </div>
    </div>
    <div class="metric-row">
      ${metric('Issues', artifacts.length)}
      ${metric('Milestones', unique(artifacts.map((item) => item.milestone)).length)}
      ${metric('Simulated activity', state.local.showSimulatedActivity ? 'Shown' : 'Hidden')}
    </div>
    <div class="repo-grid">
      ${artifacts.map(renderIssueArtifact).join('')}
    </div>
  `;
}

function renderTraceShell() {
  document.getElementById('trace-content').innerHTML = `
    <ol class="trace-list">
      ${state.data.buildTrace.map((item, index) => {
        const [iconName, tone] = TRACE_ICONS[index % TRACE_ICONS.length];
        return `
        <li>
          ${iconBadge(iconName, tone)}
          <span>${escapeHtml(item.id)}</span>
          <h3>${escapeHtml(item.step)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <code>${escapeHtml(item.source)}</code>
        </li>
      `;
      }).join('')}
    </ol>
  `;
}

function renderTopRisk(item) {
  return `
    <article class="risk-line">
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.division)} · owner ${escapeHtml(item.owner)} · decision ${escapeHtml(item.decisionOwner)}</span>
      </div>
      <span class="severity ${escapeAttr(item.severity)}">${escapeHtml(item.severity)}</span>
      <p>${escapeHtml(item.businessImpact)}</p>
      <em>${escapeHtml(item.nextAction)}</em>
    </article>
  `;
}

function renderHeatmap(escalations) {
  const divisions = unique(escalations.map((item) => item.division));
  const severities = [
    { key: 'critical', label: 'Crit', title: 'Critical' },
    { key: 'high', label: 'High', title: 'High' },
    { key: 'medium', label: 'Med', title: 'Medium' },
    { key: 'low', label: 'Low', title: 'Low' }
  ];
  return `
    <table class="heatmap">
      <colgroup>
        <col class="division-col">
        ${severities.map((item) => `<col class="severity-col ${escapeAttr(item.key)}-col">`).join('')}
      </colgroup>
      <thead>
        <tr>
          <th scope="col">Division</th>
          ${severities.map((item) => `<th scope="col" class="threshold ${escapeAttr(item.key)}"><abbr title="${escapeAttr(item.title)}">${escapeHtml(item.label)}</abbr></th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${divisions.map((division) => `
          <tr>
            <td class="division-name">${escapeHtml(division)}</td>
            ${severities.map((severity) => {
              const count = escalations.filter((item) => item.division === division && item.severity === severity.key).length;
              return `<td class="heat ${count ? severity.key : ''}"><span>${count}</span></td>`;
            }).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderIssueArtifact(item) {
  return `
    <article class="issue-card">
      <header>
        ${iconBadge('repo', 'green')}
        <div>
          <span>${escapeHtml(item.id)}</span>
          <strong>${escapeHtml(item.title)}</strong>
        </div>
      </header>
      <p>${escapeHtml(item.implementationNotes)}</p>
      <div class="tag-row">${item.labels.map((label) => `<span class="tag">${escapeHtml(label)}</span>`).join('')}</div>
      <dl>
        <dt>Milestone</dt>
        <dd>${escapeHtml(item.milestone)}</dd>
        <dt>Acceptance</dt>
        <dd><ul>${item.acceptanceCriteria.map((criterion) => `<li>${escapeHtml(criterion)}</li>`).join('')}</ul></dd>
        <dt>Evidence needed</dt>
        <dd>${item.evidenceNeeded.map(escapeHtml).join(', ')}</dd>
      </dl>
      ${state.local.showSimulatedActivity ? `
        <div class="simulated">
          <strong>${escapeHtml(item.simulatedPr)}</strong>
          <ul>${item.simulatedCommits.map((commit) => `<li>${escapeHtml(commit)}</li>`).join('')}</ul>
        </div>
      ` : ''}
    </article>
  `;
}

function wireCommandControls() {
  document.getElementById('filter-search').addEventListener('input', (event) => {
    state.filters.search = event.target.value;
    renderAll();
  });
  for (const key of ['division', 'severity', 'status', 'owner', 'slaRisk']) {
    document.getElementById(`filter-${key}`).addEventListener('change', (event) => {
      state.filters[key] = event.target.value;
      renderAll();
    });
  }
  document.querySelectorAll('[data-owner]').forEach((select) => {
    select.addEventListener('change', (event) => updateEscalation(event.target.dataset.owner, { owner: event.target.value }));
  });
  document.querySelectorAll('[data-status]').forEach((select) => {
    select.addEventListener('change', (event) => updateEscalation(event.target.dataset.status, { status: event.target.value }));
  });
  document.querySelectorAll('[data-note]').forEach((textarea) => {
    textarea.addEventListener('input', (event) => updateEscalation(event.target.dataset.note, { note: event.target.value }, false));
  });
  document.getElementById('toggle-simulated').addEventListener('change', (event) => {
    state.local.showSimulatedActivity = event.target.checked;
    saveLocalState();
    renderAll();
  });
  document.getElementById('export-state').addEventListener('click', exportState);
  document.getElementById('reset-state').addEventListener('click', resetState);
}

function wireEvidenceControls() {
  document.getElementById('filter-evidence-type').addEventListener('change', (event) => {
    state.evidenceFilters.type = event.target.value;
    renderAll();
  });
  document.getElementById('evidence-escalation').addEventListener('change', (event) => {
    state.evidenceFilters.escalation = event.target.value;
    renderAll();
  });
  document.querySelectorAll('[data-reviewed]').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      state.local.evidence[event.target.dataset.reviewed] = { reviewed: event.target.checked };
      saveLocalState();
      renderAll();
    });
  });
}

function updateEscalation(id, patch, rerender = true) {
  state.local.escalations[id] = { ...(state.local.escalations[id] || {}), ...patch };
  saveLocalState();
  if (rerender) renderAll();
}

function getEscalations() {
  return state.data.escalations.map((item) => ({ ...item, ...(state.local.escalations[item.id] || {}) }));
}

function getEvidence() {
  return state.data.evidence.map((item) => {
    const local = state.local.evidence[item.id];
    const reviewed = local?.reviewed ?? item.status === 'reviewed';
    return { ...item, reviewed, status: reviewed ? 'reviewed' : item.status === 'reviewed' ? 'unreviewed' : item.status };
  });
}

function filterEscalations(items) {
  const search = state.filters.search.trim().toLowerCase();
  return items.filter((item) => {
    const haystack = [item.title, item.division, item.owner, item.status, item.businessImpact, item.nextAction].join(' ').toLowerCase();
    return (!search || haystack.includes(search))
      && matches(item.division, state.filters.division)
      && matches(item.severity, state.filters.severity)
      && matches(item.status, state.filters.status)
      && matches(item.owner, state.filters.owner)
      && matches(item.slaRisk, state.filters.slaRisk);
  });
}

function filterEvidence(items) {
  return items.filter((item) => matches(item.type, state.evidenceFilters.type)
    && (state.evidenceFilters.escalation === 'all' || item.escalationIds.includes(state.evidenceFilters.escalation)));
}

function exportState() {
  const exportData = {
    exportedAt: new Date().toISOString(),
    appName: state.data.meta.appName,
    localState: state.local,
    visibleFilters: {
      commandCenter: state.filters,
      evidenceFeed: state.evidenceFilters
    }
  };
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'ecorp-command-center-state.json';
  link.click();
  URL.revokeObjectURL(url);
}

function resetState() {
  try { localStorage.removeItem(STORAGE_KEY); } catch {
    setStatus("Storage unavailable; reset applies to this tab only. Saved state may return after reload.", "error");
  }
  state.local = defaultLocalState();
  renderAll();
}

function loadLocalState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    const clean = defaultLocalState();
    if (!saved || typeof saved !== 'object') return clean;
    if (typeof saved.showSimulatedActivity === 'boolean') clean.showSimulatedActivity = saved.showSimulatedActivity;
    for (const [id, item] of Object.entries(saved.escalations || {})) {
      if (['__proto__', 'constructor', 'prototype'].includes(id) || !item || typeof item !== 'object') continue;
      const patch = {};
      for (const field of ['owner', 'status', 'note']) if (typeof item[field] === 'string') patch[field] = item[field];
      clean.escalations[id] = patch;
    }
    for (const [id, item] of Object.entries(saved.evidence || {})) {
      if (!['__proto__', 'constructor', 'prototype'].includes(id) && typeof item?.reviewed === 'boolean') clean.evidence[id] = {reviewed:item.reviewed};
    }
    return clean;
  } catch {
    return defaultLocalState();
  }
}

function saveLocalState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.local)); }
  catch { setStatus('Storage unavailable; changes stay in this tab. Export before closing.', 'error'); }
}

function defaultLocalState() {
  return {
    escalations: {},
    evidence: {},
    showSimulatedActivity: true
  };
}

function selectControl(id, label, options, value) {
  return `
    <label>${escapeHtml(label)}
      <select id="filter-${escapeAttr(id)}">
        <option value="all">All</option>
        ${options.map((option) => `<option value="${escapeAttr(option)}" ${value === option ? 'selected' : ''}>${escapeHtml(option)}</option>`).join('')}
      </select>
    </label>
  `;
}

function ownerSelect(id, owner) {
  return `
    <select data-owner="${escapeAttr(id)}" aria-label="Owner for ${escapeAttr(id)}">
      ${state.data.people.map((name) => `<option value="${escapeAttr(name)}" ${owner === name ? 'selected' : ''}>${escapeHtml(name)}</option>`).join('')}
    </select>
  `;
}

function statusSelect(id, status) {
  const statuses = ['open', 'triage', 'monitoring', 'blocked', 'resolved'];
  return `
    <select data-status="${escapeAttr(id)}" aria-label="Status for ${escapeAttr(id)}">
      ${statuses.map((option) => `<option value="${escapeAttr(option)}" ${status === option ? 'selected' : ''}>${escapeHtml(option)}</option>`).join('')}
    </select>
  `;
}

function metric(label, value) {
  const [name, tone] = METRIC_ICONS[label] || ['workflow', ''];
  return `<div class="metric">${iconBadge(name, tone)}<span>${escapeHtml(label)}</span><b>${escapeHtml(value)}</b></div>`;
}

function sectionHeading(text, iconName, tone = '') {
  return `<h3 class="section-title">${iconBadge(iconName, tone)}${escapeHtml(text)}</h3>`;
}

function iconBadge(name, tone = '') {
  const toneClass = tone ? ` ${tone}` : '';
  return `<span class="icon-badge${toneClass}" aria-hidden="true"><svg viewBox="0 0 24 24">${ICONS[name] || ICONS.workflow}</svg></span>`;
}

function reviewedEvidenceCount() {
  return getEvidence().filter((item) => item.reviewed).length;
}

function unique(values) {
  return [...new Set(values)].filter(Boolean).sort((a, b) => String(a).localeCompare(String(b)));
}

function matches(value, selected) {
  return selected === 'all' || value === selected;
}

function severityRank(value) {
  return { low: 1, medium: 2, high: 3, critical: 4 }[value] || 0;
}

function setStatus(text, status) {
  const el = document.getElementById('data-status');
  el.textContent = text;
  el.classList.toggle('is-ready', status === 'ready');
  el.classList.toggle('is-error', status === 'error');
}

function renderLoadError(error) {
  document.getElementById('escalation-count').textContent = '0';
  document.querySelectorAll('.placeholder').forEach((el) => {
    el.innerHTML = `
      <strong>App shell loaded</strong>
      <p>Seed data was not available. Reload the checked-in demo folder or serve this directory locally.</p>
      <p>${escapeHtml(error.message)}</p>
    `;
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function escapeAttr(value) {
  return escapeHtml(value);
}
