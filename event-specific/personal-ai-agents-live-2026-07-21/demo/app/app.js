const STORAGE_KEY = 'ecorp-command-center-state-v1';

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
  state.local = loadLocalState();
  wireTabs();
  loadSeedData();
});

function wireTabs() {
  document.querySelectorAll('.tab').forEach((button) => {
    button.addEventListener('click', () => setActiveTab(button.dataset.tab));
  });
}

function setActiveTab(tabName) {
  state.activeTab = tabName;
  document.querySelectorAll('.tab').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.tab === tabName);
  });
  document.querySelectorAll('.view').forEach((view) => {
    view.classList.toggle('is-active', view.id === tabName);
  });
  document.getElementById(tabName)?.focus({ preventScroll: true });
}

async function loadSeedData() {
  try {
    const response = await fetch('data/app-seed.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`Seed data request failed: ${response.status}`);
    state.data = await response.json();
    renderAll();
    setStatus('Seed data loaded', 'ready');
  } catch (error) {
    renderLoadError(error);
    setStatus('Data fallback', 'error');
  }
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
      <div>
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
        <h3>Top executive risks</h3>
        <div class="stack">${top.map(renderTopRisk).join('')}</div>
      </section>
      <section class="brief-card">
        <h3>Severity heatmap</h3>
        ${renderHeatmap(escalations)}
      </section>
      <section class="brief-card">
        <h3>Blockers</h3>
        <ul>${blockers.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </section>
      <section class="brief-card">
        <h3>Unresolved decisions</h3>
        <ul>${state.data.briefDefaults.unresolvedDecisions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </section>
      <section class="brief-card">
        <h3>Recommended next actions</h3>
        <ul>${state.data.briefDefaults.recommendedActions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </section>
    </div>
  `;
}

function renderRepoShell() {
  const artifacts = state.data.issueArtifacts;
  document.getElementById('repo-content').innerHTML = `
    <div class="notice">
      <strong>Fabricated local repo:</strong>
      <span>This view teaches issue breakdown. It does not call GitHub or create live issues, commits, or pull requests.</span>
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
      ${state.data.buildTrace.map((item) => `
        <li>
          <span>${escapeHtml(item.id)}</span>
          <h3>${escapeHtml(item.step)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <code>${escapeHtml(item.source)}</code>
        </li>
      `).join('')}
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
  const severities = ['critical', 'high', 'medium', 'low'];
  return `
    <table class="heatmap">
      <thead>
        <tr>
          <th>Division</th>
          ${severities.map((item) => `<th>${escapeHtml(item)}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${divisions.map((division) => `
          <tr>
            <td>${escapeHtml(division)}</td>
            ${severities.map((severity) => {
              const count = escalations.filter((item) => item.division === division && item.severity === severity).length;
              return `<td class="heat ${count ? severity : ''}">${count}</td>`;
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
        <span>${escapeHtml(item.id)}</span>
        <strong>${escapeHtml(item.title)}</strong>
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
  localStorage.removeItem(STORAGE_KEY);
  state.local = defaultLocalState();
  renderAll();
}

function loadLocalState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    return saved ? { ...defaultLocalState(), ...saved } : defaultLocalState();
  } catch {
    return defaultLocalState();
  }
}

function saveLocalState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.local));
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
  return `<div class="metric"><span>${escapeHtml(label)}</span><b>${escapeHtml(value)}</b></div>`;
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
      <p>Seed data was not available. Serve this directory locally to load <code>data/app-seed.json</code>.</p>
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
