# OpenAI DevDay 2026 — Full Announcements Dossier

- **Event:** OpenAI DevDay 2026, Fort Mason Center, San Francisco — September 29, 2026 (keynote 10:00 AM PT / 17:00 UTC)
- **Official recap:** https://openai.com/index/devday-2026-recap/
- **Research date:** September 29, 2026 (day of event)
- **Method:** Signed-out web research. Official OpenAI pages/docs/repos read via page reader (flagged "index" below); no browser sign-in, no personal data. No live in-product verification was possible (signed out); availability claims come from OpenAI's launch materials as reported.
- **Scale:** OpenAI claims "more than 20 major announcements across ChatGPT, Codex, our models, and entirely new forms of working with AI," framed as opening ChatGPT as "a shared surface where humans and agents can collaborate and where developers can directly launch new native experiences to our collective 1.2B weekly users."

## Summary

The keynote's headline was **Dots** — persistent, always-on agents (GPT-6 Astra-powered, each with its own cloud computer + browser, 4,000+ app connections via plugins), rolling out to Pro/Business Premium (eligible markets; excl. EEA/UK/CH at launch) with admin-gated beta for Enterprise/Edu/Healthcare. The other major pillars: **Codex in the cloud** (run on computer, phone, or cloud; reusable team dev environments), **plugin extensions** (full native apps inside ChatGPT: sidebar homes, interactive panels, file viewers — backed by the new public `openai/mcp-extensions` repo layering ChatGPT-specific capabilities on MCP, alongside the neutral MCP Apps/SEP-1865 standard), **ChatGPT Space + Pages** (shared team workspaces and a new collaborative document format), **plan-usage portability + Sign in with ChatGPT** (Plus/Pro allowance spendable in 16 partner tools; identity sign-in global), and **GPT-6.1 Sol** (near-Astra at 1/5 token price) plus an **Ultrafast** premium speed tier and a new **$500/mo Pro 500** plan. Developer/API news: **Agents API** public beta (managed Codex harness + computer use), new **Decisions API** (limited preview), **Bedrock Managed Agents** (OpenAI agents inside AWS), **Private Intelligence** (Zero Data Retention + Private Safety Processing; Private Inference preview this fall), **Codex Security Cloud**, and the **OpenAI Marketplace** (enterprise spend commitments applicable to 32 partner products). No new frontier model was announced — Astra shipped Sept 3; DevDay made it cheaper and faster to reach.

---

## Findings

### 1. Dots — always-on agents

**What:** Dots are "remarkably capable, always-on agents built to handle everything" — a persistent agent that takes on ongoing responsibilities rather than waiting for the next chat message. Powered by GPT-6 Astra. Each dot gets its own cloud computer and browser, learns preferences/standards from feedback over time, and connects to 4,000+ apps through OpenAI's plugin ecosystem. One dot keeps context across ChatGPT, Slack, and Teams (messages stay in their channels; the dot checks permission before sharing private-conversation info with others). Users can message or voice-call the dot; it proactively reaches out with results or decisions. Background "proactive research" uses read-only-restricted tools (can't send messages, change content, or control browser/computer). Controls: auto-review of consequential actions, Custom Rules (allow/require-approval/block), Activity View, Pause; user can open the dot's computer and "Take over"/"Return control"; optional connection to the user's own laptop (one machine, must be online with the ChatGPT app open). The dot can start background agents, cloud threads, and Work/Codex tasks; dots carry context across channels so a project started in ChatGPT continues in Slack without re-prompting. Illustrative use cases from OpenAI: dev dot monitoring feedback → bug fixes + PRs; scientist re-running analyses; sales proposal maintenance; launch-material updates.

**Availability:** Rolling out Sept 29 in ChatGPT to Pro (incl. Pro 100/200/500 per docs) and Business Premium in eligible markets — docs specify users over 18 outside the EEA, UK, and Switzerland. Enterprise, Edu, and Healthcare: admin-enabled beta, off by default; rolling out worldwide. First dot included at no extra cost; dot conversations don't count toward ChatGPT usage limits, but Work/Codex tasks a dot starts do. "Extended limits for the first month after launch" for deeper work; one report notes Dots usage is unmetered for a month with the post-launch allowance unpublished. Create the dot in the desktop app or desktop browser (mobile web not supported; mobile app after setup + supporting update). SMS/texting "coming soon." Teams of dots are a stated roadmap item ("Over time, we envision teams of dots working together on your behalf").

**Technical surface:** Docs at https://learn.chatgpt.com/docs/dots (Getting started, Messaging, Tasks and memory, Computers and apps, Controls); official post https://openai.com/index/introducing-dots/; safety blog + system card referenced (deploymentsafety.openai.com). Dots build on the plugin ecosystem and can use Codex cloud environments.

**How it differs:** Previously, persistent agent behavior required assembling Codex/agent harnesses yourself (or third-party tools like OpenClaw/Muse/Grok Bots, which run on your own hardware or per-session). Dots productize it: one named identity, one dedicated cloud machine, continuity across surfaces — though reviewers note much of the underlying capability existed via Codex.

**Citations:**
- Official post: https://openai.com/index/introducing-dots/ (index, Sept 29 2026)
- Docs: https://learn.chatgpt.com/docs/dots (index, Sept 29 2026)
- TechCrunch: https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/ (index, Sept 29 2026)

### 2. Specialist enterprise dots + Microsoft Agent 365 integration

**What:** Preview of company-configured "specialist dots" that take on well-defined organizational responsibilities (accounting, marketing, legal cited). Each gets its own identity, credentials, and access to the systems it needs; IT-provisioned hardware; deep integrations with systems of record. OpenAI cites early internal testing across procurement, invoice processing, email marketing, customer support, and commercial contracting. Starting as focused enterprise pilots where OpenAI engineering works directly with orgs to define responsibilities, tools, and review/approval flows.

**Availability:** Preview; enterprise pilots (no GA date announced). Microsoft Agent 365 integration is planned — the goal is managing specialist dots through Microsoft's enterprise governance/security controls.

**How it differs:** Extends dots from personal productivity into IT-governed enterprise agents with managed identities and system-of-record access.

**Citations:**
- https://openai.com/index/introducing-dots/ (index, Sept 29 2026) — specialist dots section + Agent 365 paragraph
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)

### 3. Codex in the cloud + reusable development environments

**What:** "Run Codex wherever they need it: on a computer, remotely from a phone, or in the cloud from any device." Tasks continue with the laptop closed/asleep and can be continued from desktop, web, or mobile. New **reusable development environments**: a project's repositories, dependencies, tools, and access settings are captured once so tasks start immediately with an approved setup; each task gets its own workspace while teams share the environment rather than rebuilding per developer; team-based settings and permissions.

**Availability:** Plus, Pro, Business, Healthcare, Education, and Enterprise — available now (Sept 29, 2026).

**Technical surface:** Codex Cloud docs referenced at learn.chatgpt.com; surfaced in ChatGPT desktop app/web/mobile.

**How it differs:** Previously Codex work was tied to local/IDE sessions or per-task cloud setup. Now the environment is a reusable, team-shared artifact and execution is device-independent.

**Citations:**
- https://openai.com/index/devday-2026-recap/ (index, Sept 29 2026)
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)

### 4. Refreshed Codex CLI (voice, /agents, worktrees)

**What:** Codex CLI refresh: start and steer tasks by two-way voice interaction; new `/agents` view to track delegated work and multiple tasks; improved prompt editing, session resumption, Git worktrees, and terminal interface.

**Availability:** Via Codex CLI (no plan gating reported beyond Codex availability).

**How it differs:** CLI gains voice steering and an explicit multi-agent tracking surface instead of single-session text interaction.

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)
- https://community.openai.com/t/join-us-for-the-openai-devday-2026-keynote/1401738 (index, Sept 29 2026)

### 5. Codex Security Cloud

**What:** Scans connected GitHub repositories on demand or on a schedule and monitors new commits; investigates findings, removes duplicates, and prepares fixes in the cloud. Includes access to models offered through **Daybreak Blue** without a separate Daybreak application.

**Availability:** Included for Pro, Business, Enterprise, and Edu (per launch table). Note: one availability table lists Codex Security Cloud for "Pro, Business, Enterprise, Edu" — not Plus.

**How it differs:** Moves security scanning from one-off agent runs to scheduled, continuously-monitored cloud scanning with deduplicated findings and prepared fixes.

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)
- https://andrewlauchner.com/notes/openai-devday-2026 (index, Sept 29 2026)

### 6. Redesigned Code Review (desktop app + automated cloud reviews)

**What:** New Code Review experience in the ChatGPT desktop app: pull request summaries, changed files, comments, and checks in one interface; inspect diffs and ask Codex to investigate issues before posting feedback. Automatic cloud reviews can run while a developer is away. GitHub support generally available; GitLab merge-request support in preview.

**Availability:** Reported as available to all plans ("Code Review … All plans … Included" per launch table).

**How it differs:** Code review moves from chat-based diff discussion into a dedicated review surface with automated first-pass cloud reviews.

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)
- https://andrewlauchner.com/notes/openai-devday-2026 (index, Sept 29 2026)

### 7. Plugin extensions

**What:** OpenAI is "opening the platform we use to build ChatGPT features" so developers build native experiences inside ChatGPT. Plugin extensions let a plugin have a **home in the sidebar** and build **interactive panels** where people work alongside the conversation, plus **viewers for the file types** the product supports. Keynote demos: Figma designs/comments alongside a conversation, Adobe Photoshop functionality inside ChatGPT, Canva, Shopify, and OpenAI's own Meetings app. Described onstage as plugins that are "essentially entire applications that feel native to ChatGPT," distributed through OpenAI to 1.2B weekly users. Extensions work in ChatGPT and Codex.

**Availability:** All plans. Docs note web extensions for Free and Go users are coming soon; composer mentions currently require the desktop app.

**Technical surface:** Developer docs at developers.openai.com (plugin extensions); spec + SDKs in the public repo https://github.com/openai/mcp-extensions (see §8). Builds on MCP; ChatGPT and Codex share a universal plugin directory.

**How it differs:** Plugins were previously tools/skills invoked in conversation (and the Apps SDK widget model). Extensions make them first-class UI: persistent sidebar destinations, interactive workspaces, custom file viewers.

**Citations:**
- https://openai.com/index/devday-2026-recap/ (index, Sept 29 2026)
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)
- https://www.europesays.com/ie/712119/ (CNBC live blog via europesays; index, Sept 29 2026) — Altman quotes

### 8. openai/mcp-extensions repo + MCP Apps (SEP-1865)

**What:** Public repo https://github.com/openai/mcp-extensions ("Build plugins that feel like native, first-class features of ChatGPT"), created Sept 29, 2026, Apache-2.0. It adds **ChatGPT-specific (vendor) capabilities layered on MCP**, complementing the neutral **MCP Apps (SEP-1865)** standard (stable Jan 26, 2026; `ui://` URI scheme, `_meta.ui.resourceUri` tool→UI linking, HTML-first `text/html;profile=mcp-app`, sandboxed iframe, bidirectional JSON-RPC over postMessage; spec at modelcontextprotocol.io/extensions/apps/overview, repo github.com/modelcontextprotocol/ext-apps). The four vendor extension types: (1) **Sidebar entrypoints** — access your app from the sidebar; (2) **File extension handlers** — custom file viewers for supported file types; (3) **Composer mentions** — search plugin resources from the composer, add references to a message; (4) **Extended forms** — e.g., select a CAD part via thumbnail choices. Showcase example: "Bits & Bolts" plugin (Parts Library in sidebar, CAD file viewer). SDKs: TypeScript `@openai/mcp-extensions` (MCP servers and Apps), Python `openai-mcp-extensions` (MCP servers). README links a spec for supported extensions.

**Availability:** Public repo, day-one.

**How it differs:** Previously builders used the experimental `openai/outputTemplate` convention and OpenAI's Apps SDK. MCP Apps is now the official neutral standard (endorsed by Anthropic, OpenAI, Block, Microsoft, AWS; day-one clients include Claude, Goose, VS Code, ChatGPT), and OpenAI's vendor extensions add ChatGPT-native surfaces on top.

**Citations:**
- https://github.com/openai/mcp-extensions (index, Sept 29 2026)
- SEP-1865: https://github.com/modelcontextprotocol/modelcontextprotocol/blob/HEAD/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md (index, Sept 29 2026)

### 9. Plugin Creator, redesigned submission, directory ranking & discovery

**What:** **Plugin Creator** (learn.chatgpt.com): conversational builder — describe a workflow, add instructions and reference files, then build and refine a reusable plugin through conversation. **Redesigned submission flow**: track reviews, see what needs fixing, request human review, update tools without restarting the entire submission. **Discovery**: improved ranking and recommendations in the plugin directory; plugins can be recommended within conversations when ChatGPT identifies a relevant capability ("automatic recommendations in conversations"). Users control which plugins they use and what access they approve.

**Availability:** All plans.

**How it differs:** Building previously required manual MCP server + config work; submission was a black-box restart-heavy process; discovery was directory-only.

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)
- https://gadgetbond.com/openai-devday-2026-announcements/ (index, Sept 29 2026)

### 10. Plugins in Sites

**What:** Supported ChatGPT plugins can now run inside **Sites** (ChatGPT's shareable web apps; Simon Willison reports 8M sites hosted, launched earlier in 2026). A Site can display data personalized for the visiting user, imported from their plugins; teammates use the same app with their own accounts, data access, and permissions. Automations are easier to add/manage so Sites keep shared info current. New Sites capabilities announced alongside: **SQLite database** for Sites, **scheduled tasks** for Sites (launched today), **Sign in with ChatGPT** support; Sites default to private; add others as **editors** who can publish updates; WebMCP demoed as more efficient than Computer Use for Sites.

**Availability:** Business, Enterprise, Healthcare, and Education.

**How it differs:** Sites were static-ish generated web artifacts; now they're data-connected apps with per-user plugin data, databases, and scheduled updates.

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)
- https://simonwillison.net/2026/Sep/29/openai-devday-2026-live-blog/ (index, Sept 29 2026)
- https://www.unite.ai/openai-unveils-gpt-6-1-sol-at-devday-with-new-codex-and-chatgpt-tools/ (index, Sept 29 2026)

### 11. MCP Events

**What:** Support for the proposed **MCP Events specification**: connected apps notify ChatGPT when something changes (via webhooks; requires developer implementation — connecting an app alone doesn't create an automation). A new task, message, or content update can trigger an automation while the user is away. Users choose what ChatGPT monitors and what it does on arrival. Example: project-management system notifies ChatGPT of a new task → ChatGPT reads relevant docs and prepares a plan unprompted.

**Availability:** All plans.

**How it differs:** Plugins/automations were previously user-initiated; now external events can initiate them.

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026) (links spec at developers.openai.com)
- https://gadgetbond.com/openai-devday-2026-announcements/ (index, Sept 29 2026)

### 12. Shareable profiles

**What:** Profiles that showcase a user's Sites and activity (and plugins); can be kept private or shared. Rolling out gradually; Enterprise support coming soon. Availability reported as Business and Enterprise (one source: "most plans, with Enterprise, Edu, and Healthcare rolling out later").

**How it differs:** New public/private identity surface for what users build in ChatGPT.

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026) (help.openai.com)
- https://www.turingpost.com/p/dots-openai (index, Sept 29 2026)

### 13. Custom GPTs retirement → migration to plugins (related, announced Sept 11)

**What:** OpenAI is retiring **Custom GPTs** (launched late 2023) in favor of the plugin architecture. Timeline: announced Sept 11, 2026; creation of new Custom GPTs ends Oct 26, 2026 for Enterprise (migration tool targeted Sept 22 for Enterprise, rolling out by account); **retirement Dec 11, 2026** across all plans, when GPTs and their pages become inaccessible; qualifying Enterprise workspaces with approved deferral get until Feb 11, 2027. Migration via My GPTs ("Migrate to plugin"): GPT instructions → a **skill** inside the new plugin; knowledge files → plugin reference files; connected apps carried over as apps. Does NOT transfer: custom actions (must rebuild; may require a custom MCP server), selected model, past conversations, sharing settings, drafts/unpublished changes (only latest published version transfers). Migrated plugin starts private (public re-sharing needs a new submission); original GPT becomes read-only after migration. UI already de-emphasizes GPTs; choosing to create a GPT now suggests creating a plugin instead. (Context: Google is similarly converting Gemini Gems into skills from Nov 17.)

**How it differs:** From standalone customized chatbots (GPT Store model) to modular plugins packaging skills + MCP servers + connected apps, usable across ChatGPT and Codex via a universal plugin directory.

**Citations:**
- https://www.absolutegeeks.com/tech-news/chatgpt-is-killing-custom-gpts-and-the-deadline-is-closer-than-you-think/ (index, Sept 29 2026)
- https://virtualizationreview.com/articles/2026/09/28/openai-to-retire-custom-gpts-replace-them-with-plugins.aspx (index, Sept 29 2026)
- https://adtmag.com/articles/2026/09/28/openai-custom-gpt-retirement-puts-integrations-on-the-migration-checklist.aspx (index, Sept 29 2026)

### 14. Meetings plugin

**What:** Calendar-connected notes and collaborative follow-up: captures online or in-person meetings, saves personalized summaries and action items in Space; connect a calendar, share notes, ask ChatGPT to do follow-up work. Audio is deleted once notes are ready. Demoed onstage as built with plugin extensions.

**Availability:** Beta in the macOS desktop app for Pro and Business; Enterprise in limited testing with wider support later; Windows, iOS, Android planned.

**How it differs:** First-party plugin-extension showcase turning meetings into Space artifacts with agent follow-up.

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026) (help.openai.com)
- https://www.turingpost.com/p/dots-openai (index, Sept 29 2026)

### 15. ChatGPT Space

**What:** "A new home for your team to collaborate with AI." Dedicated shared spaces where teammates, ChatGPT, and your dot build on shared knowledge; tag colleagues and agents; ChatGPT keeps the space organized per your instructions so you can find things and pick up where you left off. Demonstrated: building interactive visualizations, using connected Slack context to update work. Replaces ChatGPT's existing Library for Pro, Business, and Enterprise users; home for Pages, files, presentations, spreadsheets, team materials.

**Availability:** All Pro, Business, and Enterprise plans; desktop app and web. On mobile: finding, reading, and sharing pages available; mobile creation and editing coming soon.

**How it differs:** From private per-user chats/Library to a shared team surface where people and agents co-work on the same context.

**Citations:**
- https://openai.com/index/devday-2026-recap/ (index, Sept 29 2026)
- https://venturebeat.com/technology/openai-launches-dots-always-on-ai-agent-coworkers-and-chatgpt-space-where-they-can-collaborate-with-human-teams (index, Sept 29 2026)

### 16. Pages

**What:** A new document type "built for human and agent collaboration": write, research, generate charts, create images, visualize information — anything you can do in ChatGPT, on a page. Supports comments and real-time editing; connected tools keep pages updated.

**Availability:** Announced at DevDay; launches Q4 2026 (per early reporting); Pro, Business, Enterprise.

**How it differs:** From chat transcripts/canvas to persistent collaborative documents that agents can also author and maintain.

**Citations:**
- https://www.europesays.com/ie/712119/ (CNBC live blog via europesays; index, Sept 29 2026)
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)

### 17. Collaborative presentations (+ spreadsheets)

**What:** Shared AI-assisted slide creation: teammates and agents edit together, with comments; start from a conversation or template; present in ChatGPT or export to PowerPoint and Google Slides. Collaborative spreadsheets also listed as "coming soon" on the Space product page.

**Availability:** Pro, Business, Enterprise — "in the coming weeks."

**How it differs:** ChatGPT becomes a Google-Workspace-like suite (Every.to: "an office suite… ChatGPT-native apps for documents, slides, and spreadsheets").

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)
- https://www.turingpost.com/p/dots-openai (index, Sept 29 2026)

### 18. Teams and shared/team tasks

**What:** Teams and Team Tasks let coworkers organize shared work and jointly manage recurring instructions; share pages and plugins as a team; tasks run on a schedule or respond to events (e.g., an email or Slack message); company-managed connections let teams use shared external accounts.

**Availability:** Business and Enterprise (per availability tables).

**How it differs:** Scheduled/recurring work moves from per-user to team-managed with shared connections.

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026) (learn.chatgpt.com)
- https://madrobot.blog/2026/09/29/openai-devday-2026-everything-announced-dots-gpt-6-1-sol-pro-500/ (index, Sept 29 2026)

### 19. @ChatGPT in Slack and Microsoft Teams

**What:** Mention @ChatGPT in a Slack or Teams channel, thread, or DM to request work; ChatGPT uses authorized connected tools; teammates contribute context and refine results in the conversation. Colleagues can participate without each needing an individual ChatGPT license.

**Availability:** Business and Enterprise.

**How it differs:** ChatGPT enters team messaging surfaces as a mentionable collaborator rather than a separate app.

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026) (chatgpt.com)
- https://madrobot.blog/2026/09/29/openai-devday-2026-everything-announced-dots-gpt-6-1-sol-pro-500/ (index, Sept 29 2026)

### 20. Sign in with ChatGPT + plan usage portability (16 partners)

**What:** Two related but separate capabilities: (a) **Identity** — sign in to a range of tools with your ChatGPT account (OAuth-style; partners receive name/email/profile picture; plugin data access separately approved); available globally, launched in beta July 2026 with Airtable, GitLab, HubSpot, Notion, Supabase, Vercel. (b) **Plan usage portability** — Plus and Pro subscribers can spend their existing Work/Codex allowance inside participating third-party products; eligible OpenAI usage counts toward plan limits; per-app usage controls. 16 launch partners: Devin (Cognition), Notion, Vercel, T3, OpenClaw, Dactyl, plus OpenCode, Pi, Hyperagent, Hermes Agent, Vorflux, Amp, Kilo Code, Warp, Conductor (15 named + Lovable "coming soon" = 16). Partner's own subscription/infrastructure charges may still apply; identity sign-in vs allowance sharing are separable (some products support login without token sharing). OpenAI: "We're starting with these 16 launch partners today, and we'll expand quickly."

**Availability:** Identity global; plan usage for Plus and Pro users in participating tools.

**Technical surface:** Docs: developers.openai.com/siwc/quickstart (per OpenAI video description); help.openai.com sign-in article.

**How it differs:** In July it was identity-only; now the subscription allowance itself travels — the ChatGPT plan becomes spendable compute inside third-party dev tools.

**Citations:**
- https://openai.com/index/devday-2026-recap/ (index, Sept 29 2026)
- https://bitcomme.com/openai-makes-sign-in-with-chatgpt-a-way-to-use-your-subscription-in-third-party-developer-tools/ (index, Sept 29 2026) — The New Stack reporting via bitcomme; full partner list
- https://runtimewire.com/article/openai-sign-in-with-chatgpt-identity-partner-apps (index, Sept 29 2026) — July beta background

### 21. GPT-6.1 Sol (new model)

**What:** Upgrade to GPT-6 Sol (which shipped Sept 22). "Nearly matches GPT-6 Astra's intelligence on agentic coding, computer use, and professional work at one-fifth of Astra's standard input and output token prices." API pricing: $2/1M input, $0.10/1M cached input (95% below standard input; 50% below GPT-6 Sol's cached rate), $10/1M output. Benchmarks (OpenAI-reported): DeepSWE v1.1 matched Astra (+6.4pp vs GPT-6 Sol); GDP.pdf beat Opus 5.5 w/ fallbacks at <half cost/task; AutomationBench +2.2pp vs Opus 5.5 at ~1/3 cost; OSWorld 2.0 +7pp vs GPT-6 Sol, within 2.1 of Astra at ~1/7 cost; Terminal-Bench Science more than doubled GPT-6 Sol ($5.47/task vs $23.80 Astra); factual-error rate at low reasoning 7.7% vs 11.4%. Context: OpenAI pulled planned GPT-6.1 Astra a week earlier — announced Sept 28 it "did not meet its safety standards" (reporting cites deceptive behaviors); GPT-6.1 Sol is positioned as the safer, budget alternative. Note: GPT-6.1 Sol costs the same as GPT-6 Sol did — it is not a price cut on Sol; the "1/5" is vs Astra.

**Availability:** Sept 29: API as `gpt-6.1-sol`; in ChatGPT Work and Codex for Plus, Pro, Business, Enterprise, Edu. NOT yet in ordinary Chat. GPT-6.1 Sol Ultrafast coming in the next few days.

**How it differs:** First model explicitly pitched as "Astra-class for agent loops at 1/5 price" with aggressive cached-input pricing for long-running agents.

**Citations:**
- https://www.unite.ai/openai-unveils-gpt-6-1-sol-at-devday-with-new-codex-and-chatgpt-tools/ (index, Sept 29 2026)
- https://venturebeat.com/technology/openais-gpt-6-1-sol-offers-astra-like-performance-at-1-5th-price-a-new-ultrafast-tier-clocks-at-300-tokens-per-second (index, Sept 29 2026)
- https://www.europesays.com/ie/712119/ (CNBC live blog via europesays; index, Sept 29 2026) — Astra 6.1 pullback

### 22. Ultrafast (premium speed tier)

**What:** Premium inference lane: up to 300 tokens/sec; up to 8x faster token generation in Codex, up to 6x faster in the API (generation speed; total task time still depends on tools). API pricing at 6x standard: Astra Ultrafast $60/$6/$300 per 1M input/cached/output; Sol Ultrafast $12/$0.60/$60. More aggressive than existing Fast mode (2x price, ~2–2.5x speed; Fast was formerly "Priority processing"). Spotted in OpenAI's public OpenAPI spec Sept 25 before launch.

**Availability:** Astra Ultrafast live today in the API and in ChatGPT Work + Codex on **Pro 500** and Enterprise. GPT-6.1 Sol Ultrafast coming soon.

**How it differs:** Speed becomes a third pricing axis alongside intelligence and cost.

**Citations:**
- https://venturebeat.com/technology/openais-gpt-6-1-sol-offers-astra-like-performance-at-1-5th-price-a-new-ultrafast-tier-clocks-at-300-tokens-per-second (index, Sept 29 2026)
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)
- https://the-decoder.com/openai-expands-codex-and-its-api-at-devday-with-security-scans-a-decisions-api-and-ultrafast/ (index, Sept 29 2026)

### 23. Pro 500 (new) + Pro 200 changes

**What:** New **Pro 500** tier at **$500/month**: OpenAI's highest usage allowance (25x the Plus allowance), includes GPT-6 Astra Ultrafast across ChatGPT and Codex, plus Pro-level reasoning (Astra), Codex, deep research, image creation, memory, file uploads, and Dots access. (Wccftech notes Dots is accessible via all Pro-tier plans incl. Pro 100.) **Pro 200** ($200/mo) reopened to new subscribers, but with reduced terms: new subscriptions get 10x Plus usage in ChatGPT Work/Codex (down from 20x); GPT-6 Pro messages in ChatGPT cut 200→100/week. Existing Pro 200 subscribers keep old limits through Oct 29/30, 2026, then move to reduced allowance at the same price, with a one-time transition credit (reported as $2,500). The five-hour usage window was dropped — weekly caps usable anytime.

**Availability:** Now; Pro 500 includes Ultrafast.

**How it differs:** First $500 consumer/prosumer tier; existing $200 tier quietly devalued for new and (after grace) old subscribers.

**Citations:**
- https://www.androidheadlines.com/2026/09/openai-launches-500-pro-plan-reduces-200-tier.html (index, Sept 29 2026)
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)
- https://andrewlauchner.com/notes/openai-devday-2026 (index, Sept 29 2026)

### 24. Decisions API (new, limited preview)

**What:** New API that focuses GPT-6 **Luna** on questions with predefined possible answers — developers supply text or images and get back fast decisions for classification, request routing, or choosing an agent's next action. "Responses arriving in a fraction of a second"; vision inputs discussed for hardware/quick reactions. Positioned as an answer to TypeSafe's Jev. Reported 10x faster than GPT-6 Luna through the regular API.

**Availability:** Limited preview starting Sept 29; broader availability in the coming days.

**How it differs:** A purpose-built decision/classification endpoint instead of prompting a general model for structured choices.

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)
- https://the-decoder.com/openai-expands-codex-and-its-api-at-devday-with-security-scans-a-decisions-api-and-ultrafast/ (index, Sept 29 2026)
- https://dev.to/aniruddhaadak5/i-watched-all-20-openai-devday-2026-launches-here-are-the-5-that-change-what-i-build-1g8p (index, Sept 29 2026)

### 25. Agents API — public beta (+ computer use)

**What:** Managed agent runtime: gives developers the **Codex harness** as a service. OpenAI handles sessions, orchestration, context compaction, and recovery; developers supply tools and choose execution environments. Agents can execute code, edit files, connect to MCP servers, and delegate to other agents. Capabilities: environments, sessions, tools, MCP, context management, **multi-agent**. **Computer use** in the Agents API: agents navigate websites and operate applications through an OpenAI-hosted browser; developers can follow session events as the agent observes the UI and decides. Computer use also listed in ChatGPT Work and Codex for Pro 500 and Enterprise.

**Availability:** Public beta (Sept 29).

**Technical surface:** developers.openai.com (Agents API docs; computer-use docs).

**How it differs:** Previously builders assembled their own harness (Agent Builder workflow product); now OpenAI runs the infrastructure. Note: Agent Builder (launched DevDay 2025) reportedly loses access **Nov 30, 2026** — migration path is the Agents SDK and Workspace Agents (single-source: dev.to; treat as unconfirmed by OpenAI in these sources).

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026)
- https://www.worthview.com/openai-devday-2026-all-the-biggest-announcements-from-dots-and-gpt-6-1-sol-to-the-agents-api/ (index, Sept 29 2026)
- https://dev.to/aniruddhaadak5/i-watched-all-20-openai-devday-2026-launches-here-are-the-5-that-change-what-i-build-1g8p (index, Sept 29 2026)

### 26. Bedrock Managed Agents (powered by OpenAI, on AWS)

**What:** OpenAI + Amazon: OpenAI's agent harness combined with AWS infrastructure. Agents run in the customer's AWS environment; inference runs on Bedrock; data stays within AWS. Service handles inference, memory, and skills; works with Bedrock AgentCore. Pricing matches OpenAI's rates and counts toward AWS commits. AWS's page still labels it a preview.

**Availability:** AWS customers (preview).

**How it differs:** First-party OpenAI agents that run natively inside a customer's cloud boundary.

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026) (links aws.amazon.com)
- https://andrewlauchner.com/notes/openai-devday-2026 (index, Sept 29 2026)

### 27. Private Intelligence (Private Safety Processing + Private Inference preview)

**What:** For businesses handling sensitive data. **Zero Data Retention with Private Safety Processing**: automated safety reviews without human access to protected content; encrypted safety records kept in customer-controlled storage, reviewed in a hardware-attested runtime. Separately, **Private Inference** preview coming **this fall**: confidential computing + strict verifiable controls — "privacy at the time of inference." Design partners: Cisco, Databricks, Snowflake. Altman: the two together "set a new standard for privacy and frontier AI."

**Availability:** Preview; Enterprise, by contact (pricing not published).

**How it differs:** Frontier-model safety without OpenAI ever storing content, plus verifiable confidential inference — aimed at regulated-enterprise blockers.

**Citations:**
- https://www.europesays.com/ie/712119/ (CNBC live blog via europesays; index, Sept 29 2026) — Altman quotes
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026) (links developers.openai.com)
- https://www.unite.ai/openai-unveils-gpt-6-1-sol-at-devday-with-new-codex-and-chatgpt-tools/ (index, Sept 29 2026)

### 28. API performance improvements

**What:** Reported reductions in initial response latency and tool/workflow execution time (listed in keynote; details thin in coverage).

**Availability:** API-wide (as reported).

**Citations:**
- https://community.openai.com/t/join-us-for-the-openai-devday-2026-keynote/1401738 (index, Sept 29 2026) — community-compiled list only

### 29. OpenAI Marketplace

**What:** Eligible **enterprise** customers can apply part of their existing OpenAI spending commitment toward approved partner products — a procurement channel tied to budgets already committed to OpenAI. 32 launch partners including Adobe, Figma, Sierra, Decagon, Salesforce, ServiceNow, Harvey, Legora, Palo Alto Networks, CrowdStrike, Baseten; others self-announced: DevRev, ElevenLabs, CodeRabbit, Datadog, Canva, Notion, Vercel, Zendesk. Enterprise customers can express interest; the directory is live, buying through it is "soon."

**Availability:** Eligible enterprise customers.

**Technical surface:** openai.com marketplace page.

**How it differs:** Turns OpenAI commits into a software procurement budget — a new enterprise distribution lever for partners.

**Citations:**
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote (index, Sept 29 2026) (links openai.com)
- https://andrewlauchner.com/notes/openai-devday-2026 (index, Sept 29 2026)
- https://every.to/vibe-check/vibe-check-openai-devday-2026 (index, Sept 29 2026)

### 30. Open-source models through Baseten (via Marketplace)

**What:** Open-source models served through Baseten available through the Marketplace (listed among announcements).

**Availability:** Via Marketplace (enterprise).

**Citations:**
- https://community.openai.com/t/join-us-for-the-openai-devday-2026-keynote/1401738 (index, Sept 29 2026) — community-compiled list only; thinly covered elsewhere

### 31. OpenClaw enterprise harness (tease)

**What:** Briefly announced onstage; details reserved for a later session.

**Citations:**
- https://community.openai.com/t/join-us-for-the-openai-devday-2026-keynote/1401738 (index, Sept 29 2026) — community-compiled list only

### 32. Worldwide usage / rate-limit reset

**What:** During the closing segment Altman triggered a **worldwide usage/rate-limit reset** live in the room — affecting all users globally, not just attendees. Attendees were also each given a dot (plus a "banked reset").

**Citations:**
- https://simonwillison.net/2026/Sep/29/openai-devday-2026-live-blog/ (index, Sept 29 2026)
- https://community.openai.com/t/join-us-for-the-openai-devday-2026-keynote/1401738 (index, Sept 29 2026)

---

## Ecosystem reaction

**Press framing:**
- **TechCrunch** frames Dots as OpenAI's answer to Meta's Muse (launched earlier in September) — bubbly, cartoonish personas as the industry's latest attempt "to make AI more relatable"; notes the functionality largely existed via Codex/agent harnesses, repackaged around independent action. https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/
- **Barron's/Evercore ISI**: Dots positioned as enterprise/power-user vs Meta Muse's consumer pitch; Meta's distribution advantage vs OpenAI's business relationships. https://www.barrons.com/articles/openai-devday-2026-meta-muse-54f3d24f
- **CNBC live blog**: straight keynote coverage — Dots (GPT-6 Astra, 4,000+ apps, Slack/Teams, texting soon), GPT-6.1 Sol a week after GPT-6 Sol, Ultrafast, Space + Pages, plugin extensions, Private Intelligence, Pro 500. https://www.europesays.com/ie/712119/
- **VentureBeat**: Dots + Space as "moving beyond the familiar chatbot model"; Space replaces Library for Pro/Business/Enterprise. https://venturebeat.com/technology/openai-launches-dots-always-on-ai-agent-coworkers-and-chatgpt-space-where-they-can-collaborate-with-human-teams
- **The Deep View**: notes the quiet Pro 200 devaluation alongside the $500 tier. https://www.thedeepview.com/articles/openai-rolls-out-deluge-of-new-tools-for-ai-builders
- **Andrew Lauchner** ("what the keynote did not say"): no new frontier model; Dots desktop-first and geo-restricted at launch; two live demos failed (dot voice call, Codex voice); GPT-6.1 Sol isn't a price cut; Dots unmetered only for a month; Pro 200 halved for new subs. https://andrewlauchner.com/notes/openai-devday-2026

**Builder/community reaction:**
- **Every.to (hands-on)**: Dots genuinely change usage patterns (reviewer reached for the dot over new Codex threads; proactive Slack/email triage, e.g., catching a flight/meeting conflict) but the launch build is buggy — permissions issues, dropped messages, in-app browser connection failures, confusion over which surface work runs on. Verdict: wait a week or two; not worth switching from Grok Bots/Muse/Instinct unless you're a heavy ChatGPT/Codex user. Framing: "ChatGPT as your operating system for work"; plugin extensions as the distribution play ("a directory and automatic recommendations in conversations to help users find you"). https://every.to/vibe-check/vibe-check-openai-devday-2026
- **dev.to builder take**: the five that change building — dots, GPT-6.1 Sol ("the model most of us will actually be able to afford to leave running"), Codex fully in the cloud, Agents/Decisions APIs (+ the Nov 30 Agent Builder shutdown deadline), and plugin extensions + Sign in with ChatGPT as the platform move. https://dev.to/aniruddhaadak5/i-watched-all-20-openai-devday-2026-launches-here-are-the-5-that-change-what-i-build-1g8p
- **Simon Willison (live blog)**: notes the live global rate-limit reset; Sites momentum (8M sites); create-your-dot link required desktop. https://simonwillison.net/2026/Sep/29/openai-devday-2026-live-blog/
- **TuringPost**: Dots vs self-hosted OpenClaw tradeoff (managed convenience vs control/cost); OpenAI's Tibo confirmed Dots run on Astra with no announced model routing ("we're working on routing"). https://www.turingpost.com/p/dots-openai
- **OpenAI developer forum**: community-compiled 30+ item checklist; sentiment is mostly checklist-style excitement at the volume ("most things announced in the shortest amount of time"). https://community.openai.com/t/join-us-for-the-openai-devday-2026-keynote/1401738

---

## Could not verify / open questions

- **Recap page scope:** The official recap text fetched on Sept 29 shows 5 summary cards (Dots, Codex, plugin extensions, Space, usage portability). The developer-forum list asserts the recap also covers redesigned Code Review, CLI improvements, Plugin Creator improvements, MCP events, Teams/shared tasks, @ChatGPT in Slack/Teams, and shareable profiles — likely via linked sub-pages not captured in the fetched text. Treated as announced (they were covered in the keynote per multiple outlets) but the recap's full structure couldn't be confirmed from the fetched copy.
- **Agent Builder shutdown (Nov 30, 2026):** single-sourced to one dev.to post; not confirmed in OpenAI materials reviewed.
- **OpenClaw enterprise harness:** only a brief onstage mention; no details published in sources reviewed.
- **Open-source models via Baseten:** only appears in the community checklist; no detail on which models or terms.
- **API performance improvements:** announced onstage; no numbers in coverage reviewed.
- **Dots post-launch allowance:** "extended limits for the first month," then unpublished (per Lauchner).
- **Partner counts:** official recap says 16 usage partners; Every.to says "about 15"; dev.to says 18 — 15 named + Lovable "coming soon" reconciles to 16. Marketplace: 32 partners (12 named by OpenAI; others self-announced).
- **Pro 200 transition credit:** reported as $2,500 (Lauchner) vs "one-time credit" (RuntimeWire); grace through Oct 29/30, 2026.
- **Daybreak Blue** (referenced in Codex Security Cloud): not independently researched.
- **GPT-6.1 Astra pullback details:** reported as safety-related (deceptive behaviors); sourced to CNBC/everyday coverage, not an OpenAI post in these sources.

## Sources

Primary (official):
- https://openai.com/index/devday-2026-recap/ — DevDay 2026 recap (read Sept 29, 2026; index)
- https://openai.com/index/introducing-dots/ — Introducing dots (read Sept 29, 2026; index)
- https://learn.chatgpt.com/docs/dots — Dots docs (read Sept 29, 2026; index)
- https://github.com/openai/mcp-extensions — OpenAI MCP Extensions repo (read Sept 29, 2026; index)
- https://github.com/modelcontextprotocol/modelcontextprotocol/blob/HEAD/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md — SEP-1865 (read Sept 29, 2026; index)

Press/secondary (all read Sept 29, 2026; index):
- https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/
- https://www.barrons.com/articles/openai-devday-2026-meta-muse-54f3d24f
- https://www.europesays.com/ie/712119/ (CNBC live updates via europesays)
- https://venturebeat.com/technology/openai-launches-dots-always-on-ai-agent-coworkers-and-chatgpt-space-where-they-can-collaborate-with-human-teams
- https://venturebeat.com/technology/openais-gpt-6-1-sol-offers-astra-like-performance-at-1-5th-price-a-new-ultrafast-tier-clocks-at-300-tokens-per-second
- https://runtimewire.com/article/everything-openai-announced-at-the-devday-2026-keynote
- https://runtimewire.com/article/openai-sign-in-with-chatgpt-identity-partner-apps
- https://bitcomme.com/openai-makes-sign-in-with-chatgpt-a-way-to-use-your-subscription-in-third-party-developer-tools/ (The New Stack)
- https://www.unite.ai/openai-unveils-gpt-6-1-sol-at-devday-with-new-codex-and-chatgpt-tools/
- https://www.thedeepview.com/articles/openai-rolls-out-deluge-of-new-tools-for-ai-builders
- https://the-decoder.com/openai-expands-codex-and-its-api-at-devday-with-security-scans-a-decisions-api-and-ultrafast/
- https://www.androidheadlines.com/2026/09/openai-launches-500-pro-plan-reduces-200-tier.html
- https://gadgetbond.com/openai-devday-2026-announcements/
- https://madrobot.blog/2026/09/29/openai-devday-2026-everything-announced-dots-gpt-6-1-sol-pro-500/
- https://www.worthview.com/openai-devday-2026-all-the-biggest-announcements-from-dots-and-gpt-6-1-sol-to-the-agents-api/
- https://www.turingpost.com/p/dots-openai
- https://www.absolutegeeks.com/tech-news/chatgpt-is-killing-custom-gpts-and-the-deadline-is-closer-than-you-think/
- https://virtualizationreview.com/articles/2026/09/28/openai-to-retire-custom-gpts-replace-them-with-plugins.aspx
- https://adtmag.com/articles/2026/09/28/openai-custom-gpt-retirement-puts-integrations-on-the-migration-checklist.aspx

Community/hands-on (all read Sept 29, 2026; index):
- https://community.openai.com/t/join-us-for-the-openai-devday-2026-keynote/1401738
- https://every.to/vibe-check/vibe-check-openai-devday-2026
- https://andrewlauchner.com/notes/openai-devday-2026
- https://simonwillison.net/2026/Sep/29/openai-devday-2026-live-blog/
- https://dev.to/aniruddhaadak5/i-watched-all-20-openai-devday-2026-launches-here-are-the-5-that-change-what-i-build-1g8p

Working notes: notes/source-01-official-recap.md, notes/source-02-community-list.md, notes/source-03-runtimewire-everything.md, notes/source-04-techcrunch-dots.md, notes/source-05-mcp-extensions-repo.md, notes/source-07-dots-docs.md, notes/source-09-official-dots-post.md
