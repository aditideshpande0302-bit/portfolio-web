import { homeFooterHTML, csBackHTML, csGoToTopHTML, csMacbookMockupHTML } from '../shared.js';

function empoweredHTML() {
  return `
    <div class="home-root">
    <div class="cs-root cs-ev">

      ${csBackHTML()}

      <div class="cs-rw-hero">
        <div class="cs-rw-hero__content">
          <p class="cs-overline">Civic Tech · Web · Product Design</p>
          <h1 class="cs-title">Empowered Essentials — Helping citizens find and understand their representatives</h1>
          <p class="cs-subtitle">Non-partisan tools to see who represents you from city council to federal level — no login, no partisan framing.</p>
          <div class="cs-meta cs-rw-hero__meta">
            <div class="cs-meta-item"><p class="cs-meta-label">Role</p><p class="cs-meta-value">UI/UX Designer</p></div>
            <div class="cs-meta-item"><p class="cs-meta-label">Timeline</p><p class="cs-meta-value">Jan 2026 – Present</p></div>
            <div class="cs-meta-item"><p class="cs-meta-label">Platform</p><p class="cs-meta-value">Web (mobile-first)</p></div>
            <div class="cs-meta-item"><p class="cs-meta-label">Tools</p><p class="cs-meta-value">Figma · FigJam · Maze</p></div>
          </div>
        </div>
        <div class="cs-rw-hero__visual">
          <div class="cs-hero-img">
            <img src="./assets/img/featured/empoweredvault-mockup.png" alt="Empowered Essentials app mockup" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Overview</p>
        <div class="cs-two-col">
          <div>
            <p class="cs-section-title">The Problem</p>
            <p class="cs-body">Most people don't know who represents them. Civic information is scattered across government sites and news — often written for an informed audience or filtered through partisan lenses.</p>
          </div>
          <div>
            <p class="cs-section-title">The Solution</p>
            <p class="cs-body">Empowered Essentials is the platform entry point: enter a ZIP code and instantly see every representative — from city council to federal — with voting records, funding sources, and policy positions. No login required.</p>
          </div>
        </div>

        <div class="cs-pain-grid" style="margin-top:32px;">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Constraint 01</p>
            <p class="cs-pain-title">No login required</p>
            <p class="cs-pain-desc">Deliver value to anonymous users immediately — authentication only for deeper actions like messaging or saving.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Constraint 02</p>
            <p class="cs-pain-title">Data completeness</p>
            <p class="cs-pain-desc">Many profiles had incomplete policy data — the design had to work with partial information, not assume full coverage.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Constraint 03</p>
            <p class="cs-pain-title">Near-instant lookup</p>
            <p class="cs-pain-desc">ZIP code search needed to feel immediate, with profile pages loading progressively rather than all at once.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Constraint 04</p>
            <p class="cs-pain-title">State-to-state variation</p>
            <p class="cs-pain-desc">Different states have different elected offices — structure and UI needed to flex by location.</p>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Research</p>
        <p class="cs-section-title">What stops people from engaging</p>
        <p class="cs-body">Before designing screens, the team focused on trust and time — the two barriers that matter most for a busy user who wants to vote responsibly without wading through biased sources.</p>

        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Finding 01</p>
            <p class="cs-pain-title">Trust is the biggest barrier</p>
            <p class="cs-pain-desc">Users assumed civic information would be biased and disengaged rather than try to verify it.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Finding 02</p>
            <p class="cs-pain-title">Time is the second barrier</p>
            <p class="cs-pain-desc">People would engage only if useful information appeared in seconds, not minutes.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Finding 03</p>
            <p class="cs-pain-title">Local reps are least understood</p>
            <p class="cs-pain-desc">Awareness dropped sharply for local offices — most users could name a senator but not a city council member.</p>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Design</p>
        <p class="cs-section-title">Speed, clarity, and neutrality</p>

        <div class="cs-split cs-split--reverse cs-ev-design">
          <div class="cs-split__text">
            <div class="cs-decision">
              <p class="cs-decision-num">01</p>
              <p class="cs-decision-title">Design for responsible voting, faster</p>
              <p class="cs-decision-desc">Every decision was filtered through one question: does this help our user vote responsibly faster, or slow her down?</p>
            </div>

            <div class="cs-decision">
              <p class="cs-decision-num">02</p>
              <p class="cs-decision-title">Progressive disclosure on profiles</p>
              <p class="cs-decision-desc">Surface three essentials immediately — who they are, what they stand for, how to reach them — and move everything else one tap deeper.</p>
            </div>

            <div class="cs-decision">
              <p class="cs-decision-num">03</p>
              <p class="cs-decision-title">A visual trust layer</p>
              <p class="cs-decision-desc">No party color-coding, no loaded language — a calm, consistent tone applied equally across every profile. Compass integration includes thoughtful empty states when stance data is missing.</p>
            </div>
          </div>
          <div class="cs-split__media">
            ${csMacbookMockupHTML({
              videoSrc: '/assets/img/case/empowered/empowered-prototype.mp4',
              poster: '/assets/img/case/empowered/empowered-prototype-screen-800.webp',
              alt: 'Empowered Essentials — web prototype demo'
            })}
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Collaboration</p>
        <p class="cs-section-title">Built with engineering from day one</p>
        <p class="cs-body">Before designing profiles, engineering built a Data Explorer listing every backend field — I used it to decide what to surface instead of designing around assumptions. I stayed involved through QA, catching issues like an FAQ expand button that scrolled users back to the top. I also built the Compass Graph as a reusable design-system component for the wider team.</p>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Testing</p>
        <p class="cs-section-title">Validated with real citizens</p>
        <p class="cs-body">Usability sessions with citizens in Bloomington, Indiana — the platform's pilot city — included the full cross-functional squad. Findings shaped the information hierarchy, Compass onboarding, and authentication prompts.</p>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Impact</p>
        <div class="cs-stats">
          <div class="cs-stat">
            <p class="cs-stat-num">0 sec</p>
            <p class="cs-stat-label">Login required to get value</p>
          </div>
          <div class="cs-stat">
            <p class="cs-stat-num">3</p>
            <p class="cs-stat-label">Core data points surfaced instantly on every profile</p>
          </div>
          <div class="cs-stat">
            <p class="cs-stat-num">100%</p>
            <p class="cs-stat-label">Non-partisan visual treatment across all profiles</p>
          </div>
          <div class="cs-stat">
            <p class="cs-stat-num">Live</p>
            <p class="cs-stat-label">In active development and testing on the Empowered Vote platform</p>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Reflection</p>
        <p class="cs-section-title">Designing for trust as a material</p>
        <p class="cs-body">Trust had to be earned in every visual and content choice — there was no assumed goodwill. Incomplete politician data reinforced designing for what exists, not what we wished we had.</p>
        <p class="cs-body">Next up: extending the same principles of speed, neutrality, and trust into a native mobile app.</p>
      </div>

      ${csGoToTopHTML()}

    </div>
    ${homeFooterHTML()}
    </div>`;
}

export default empoweredHTML;
