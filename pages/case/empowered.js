import { csNextHTML, footerHTML } from '../shared.js';

function empoweredHTML() {
  return `
    <div class="cs-root">
      <button class="cs-back" onclick="goToWork('auto')"><span class="cs-back-arrow">←</span> Back to Work</button>

      <div class="cs-hero">
        <p class="cs-overline">Civic Tech · UI/UX Design · Product Redesign</p>
        <h1 class="cs-title">Empowered Vote — Redesigning civic discovery for first-time voters</h1>
        <p class="cs-subtitle">How I reimagined the onboarding and browsing experience at Empowered Vote — a civic-tech platform — to reduce overwhelm and make political information feel approachable.</p>
      </div>

      <div class="cs-meta">
        <div class="cs-meta-item"><p class="cs-meta-label">Role</p><p class="cs-meta-value">UI/UX Designer</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Timeline</p><p class="cs-meta-value">Ongoing</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Platform</p><p class="cs-meta-value">Empowered Vote</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Tools</p><p class="cs-meta-value">Figma · FigJam</p></div>
      </div>

<div class="cs-hero-img" style="margin-bottom:56px;"><img src="/assets/img/work/work-972f2aa7-1226.webp" srcset="/assets/img/work/work-972f2aa7-800.webp 800w, /assets/img/work/work-972f2aa7-1226.webp 1226w" sizes="(max-width: 768px) 100vw, 900px" alt="Empowered Vote — civic engagement platform redesign hero" width="1226" height="648" loading="lazy" decoding="async" /></div>

      <div class="cs-section">
        <p class="cs-section-label">The Problem</p>
        <p class="cs-section-title">Civic information is hard to navigate</p>
        <p class="cs-body">First-time users arriving at Empowered Vote were immediately confronted with dense lists, unclear filtering, and no clear entry point. The platform had powerful data — but no onboarding to ease new users into it. People were leaving before finding their own representatives.</p>

        <div class="cs-quote">
          <p class="cs-quote-text">"I didn't know where to start. There were so many names and I didn't know who represented me."</p>
          <p class="cs-quote-attr">First-time voter — usability session</p>
        </div>

<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/empowered/empowered-a21cba44-924.webp" srcset="/assets/img/case/empowered/empowered-a21cba44-800.webp 800w, /assets/img/case/empowered/empowered-a21cba44-924.webp 924w" sizes="(max-width: 768px) 100vw, 900px" alt="Empowered Vote — original design before redesign" width="924" height="648" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Research</p>
        <p class="cs-section-title">What we learned from users</p>
        <p class="cs-body">Through user interviews and usability sessions with first-time voters, four recurring pain points emerged.</p>

        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Pain Point 01</p>
            <p class="cs-pain-title">No clear starting point</p>
            <p class="cs-pain-desc">Users didn't know where to begin. The homepage lacked a clear call to action or orientation step.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Pain Point 02</p>
            <p class="cs-pain-title">Filter overload</p>
            <p class="cs-pain-desc">The sidebar presented too many filters upfront, creating decision paralysis before users had explored anything.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Pain Point 03</p>
            <p class="cs-pain-title">Trust gap</p>
            <p class="cs-pain-desc">Candidate listings felt like raw data dumps. Users wanted context and a human summary before engaging further.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Pain Point 04</p>
            <p class="cs-pain-title">Visual hierarchy missing</p>
            <p class="cs-pain-desc">Federal, state, and local roles were displayed with equal visual weight, making it hard to orient by relevance.</p>
          </div>
        </div>

      </div>



      <div class="cs-section">
        <p class="cs-section-label">Key Design Changes</p>
        <p class="cs-section-title">From cluttered to clear</p>
        <p class="cs-body">I restructured the experience around a simple entry point: find your representatives first, then explore from a position of familiarity. Three changes had the most impact.</p>

        <div class="cs-decision">
          <p class="cs-decision-num">Change 01</p>
          <p class="cs-decision-title">A dedicated entry point instead of a filter panel</p>
          <p class="cs-decision-desc">Before, users landed on a dense filter panel with an undifferentiated candidate list. After, they land on a dedicated "Find Your Representatives" step with a simple address input — a clear, focused action.</p>
        </div>
        <div class="cs-decision">
          <p class="cs-decision-num">Change 02</p>
          <p class="cs-decision-title">Clear government-level hierarchy</p>
          <p class="cs-decision-desc">Before, all government levels were displayed with equal visual weight and no grouping logic. After, a clear hierarchy — Local → State → Federal — organises representatives into collapsible sections the user can navigate with context.</p>
        </div>
        <div class="cs-decision">
          <p class="cs-decision-num">Change 03</p>
          <p class="cs-decision-title">Human summary before data</p>
          <p class="cs-decision-desc">Before, the profile page immediately led with policy data and tag clouds. After, it opens with a plain-language summary of the representative, then surfaces issue tags and comparative views — reducing cognitive load at the most critical moment.</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Final Designs</p>
        <p class="cs-section-title">The redesigned experience</p>
        <p class="cs-body">The final screens cover three key moments in the user journey: landing and discovery, the representatives browse view, and the representative profile page.</p>

<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/empowered/empowered-acd48b2f-924.webp" srcset="/assets/img/case/empowered/empowered-acd48b2f-800.webp 800w, /assets/img/case/empowered/empowered-acd48b2f-924.webp 924w" sizes="(max-width: 768px) 100vw, 900px" alt="Empowered Vote — Screen 1: Landing and Find Your Representatives" width="924" height="648" loading="lazy" decoding="async" /></div>
<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/empowered/empowered-fd673c46-924.webp" srcset="/assets/img/case/empowered/empowered-fd673c46-800.webp 800w, /assets/img/case/empowered/empowered-fd673c46-924.webp 924w" sizes="(max-width: 768px) 100vw, 900px" alt="Empowered Vote — Screen 2: Browse representatives by government level" width="924" height="814" loading="lazy" decoding="async" /></div>
<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/empowered/empowered-84e5b99b-924.webp" srcset="/assets/img/case/empowered/empowered-84e5b99b-800.webp 800w, /assets/img/case/empowered/empowered-84e5b99b-924.webp 924w" sizes="(max-width: 768px) 100vw, 900px" alt="Empowered Vote — Screen 3: Representative profile page" width="924" height="1074" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Visual Direction</p>
        <p class="cs-section-title">Approachable, not sterile</p>
        <p class="cs-body">The original design used a muted palette that felt unfinished. The redesign shifts to a clean teal-and-white system — trustworthy and civic without being stiff. Typography and spacing were opened up to reduce cognitive load per page.</p>

        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Direction 01</p>
            <p class="cs-pain-title">Teal and white system</p>
            <p class="cs-pain-desc">A clean, trustworthy color palette that feels civic without being government-stiff.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Direction 02</p>
            <p class="cs-pain-title">Generous whitespace</p>
            <p class="cs-pain-desc">Spacing was opened up across all views to reduce the visual density that was causing overwhelm.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Direction 03</p>
            <p class="cs-pain-title">Card-based grouping</p>
            <p class="cs-pain-desc">Representatives are grouped into cards with consistent structure, making scanning and comparison faster.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Direction 04</p>
            <p class="cs-pain-title">Collapsible sections</p>
            <p class="cs-pain-desc">Government levels are collapsible, letting users control the complexity they engage with at any moment.</p>
          </div>
        </div>

      </div>

      <div class="cs-section">
        <p class="cs-section-label">Outcome</p>
        <p class="cs-section-title">Results and reflection</p>
        <p class="cs-body">The redesign reduced the first-time user path from a confusing multi-panel experience to a single focused entry point. Structured hierarchy across government levels made browsing significantly more intuitive. Replacing data-first profiles with human summaries lowered the cognitive barrier at the most critical decision moment.</p>
        <p class="cs-body">If I were to continue this work, I'd focus on mobile-first refinements, localization for non-English speakers, and deeper exploration of the candidate comparison flow.</p>
      </div>

      ${csNextHTML('rightwall','RightWall — Exhibition Matching Platform',['Mobile App','Discovery','End-to-End UX'])}
    </div>
    ${footerHTML()}`;
}

export default empoweredHTML;
