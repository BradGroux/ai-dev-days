const state = {
  data: null,
  activeTab: 'command'
};

const tabSummaries = {
  command: 'Queue shell ready. Filters and workflow controls land in the next implementation batch.',
  evidence: 'Evidence feed shell ready. Linked corpus records load from the local seed data.',
  brief: 'Executive brief shell ready. Heatmap and decision summaries land after queue data is live.',
  repo: 'Fabricated repo shell ready. Simulated issues, commits, and pull requests stay local-only.',
  trace: 'Build Trace shell ready. The artifact chain uses repo-relative source references.'
};

document.addEventListener('DOMContentLoaded', () => {
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
    renderShell();
    setStatus('Seed data loaded', 'ready');
  } catch (error) {
    renderLoadError(error);
    setStatus('Data fallback', 'error');
  }
}

function setStatus(text, status) {
  const el = document.getElementById('data-status');
  el.textContent = text;
  el.classList.toggle('is-ready', status === 'ready');
  el.classList.toggle('is-error', status === 'error');
}

function renderShell() {
  const data = state.data;
  document.getElementById('escalation-count').textContent = data.escalations.length;
  renderPlaceholder('command-content', 'Command Center', [
    metric('Escalations', data.escalations.length),
    metric('Critical', data.escalations.filter((item) => item.severity === 'critical').length),
    metric('At risk', data.escalations.filter((item) => item.slaRisk !== 'on-track').length)
  ]);
  renderPlaceholder('evidence-content', 'Evidence Feed', [
    metric('Evidence', data.evidence.length),
    metric('Reviewed', data.evidence.filter((item) => item.status === 'reviewed').length),
    metric('Types', new Set(data.evidence.map((item) => item.type)).size)
  ]);
  renderPlaceholder('brief-content', 'Executive Brief', [
    metric('Blockers', data.briefDefaults.blockers.length),
    metric('Decisions', data.briefDefaults.unresolvedDecisions.length),
    metric('Actions', data.briefDefaults.recommendedActions.length)
  ]);
  renderPlaceholder('repo-content', 'Fabricated Repo', [
    metric('Issues', data.issueArtifacts.length),
    metric('Milestones', new Set(data.issueArtifacts.map((item) => item.milestone)).size),
    metric('Local only', 'Yes')
  ]);
  renderPlaceholder('trace-content', 'Build Trace', [
    metric('Steps', data.buildTrace.length),
    metric('Source root', 'Local'),
    metric('Exportable', 'Soon')
  ]);
}

function renderPlaceholder(targetId, heading, metrics) {
  document.getElementById(targetId).innerHTML = `
    <strong>${heading} loaded</strong>
    <p>${tabSummaries[targetId.replace('-content', '')]}</p>
    <div class="metric-row">${metrics.join('')}</div>
  `;
}

function metric(label, value) {
  return `<div class="metric"><span>${label}</span><b>${value}</b></div>`;
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
