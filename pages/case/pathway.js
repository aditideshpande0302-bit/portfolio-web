import { csNextHTML, footerHTML } from '../shared.js';

function pathwayHTML() {
  return `
    <div class="cs-root">
      <button class="cs-back" onclick="goToWork('auto')">
        <span class="cs-back-arrow">←</span> Back to Work
      </button>

      <div class="cs-hero">
        <p class="cs-overline">Research · Accessibility Design · WCAG Informed</p>
        <h1 class="cs-title">Pathway — Accessible transit for color-blind commuters</h1>
        <p class="cs-subtitle">Physical transit maps rely on red–green color coding that's nearly invisible to color-blind commuters. Pathway is an app + smart glasses concept that highlights your route on physical station maps using patterns, not color.</p>
      </div>

      <div class="cs-meta">
        <div class="cs-meta-item"><p class="cs-meta-label">Role</p><p class="cs-meta-value">UI/UX Designer</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Timeline</p><p class="cs-meta-value">15 Weeks</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Platform</p><p class="cs-meta-value">iOS + Smart Glasses</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Tools</p><p class="cs-meta-value">Figma</p></div>
      </div>

      <div class="cs-hero-img"><img src="/assets/img/work/work-aecbbef3-1224.webp" srcset="/assets/img/work/work-aecbbef3-800.webp 800w, /assets/img/work/work-aecbbef3-1224.webp 1224w" sizes="(max-width: 768px) 100vw, 900px" alt="Pathway — accessible transit companion app" width="1224" height="650" loading="lazy" decoding="async" /></div>

      <div class="cs-section">
        <p class="cs-section-label">Overview</p>
        <div class="cs-two-col">
          <div>
            <p class="cs-section-title">The Problem</p>
            <p class="cs-body">Physical transit maps use red–green color coding to distinguish routes. For red–green color-blind commuters, these routes appear nearly identical, creating confusion, missed transfers, and travel anxiety.</p>
          </div>
          <div>
            <p class="cs-section-title">The Solution</p>
            <p class="cs-body">A companion app lets commuters select their route before reaching the station. Smart glasses then highlight that specific route on the physical map using patterns and emphasis — no color required.</p>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Research</p>
        <p class="cs-section-title">How deuteranopia breaks transit maps</p>
        <p class="cs-body">I began by researching deuteranopia — a common form of red–green color blindness. Under this condition, red and green route lines that are clearly distinct in normal vision shift toward similar muted tones, making it nearly impossible to follow a specific route at a glance.</p>

<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/pathway/pathway-2870444e-1226.webp" srcset="/assets/img/case/pathway/pathway-2870444e-800.webp 800w, /assets/img/case/pathway/pathway-2870444e-1226.webp 1226w" sizes="(max-width: 768px) 100vw, 900px" alt="Color vision simulation — normal vision vs deuteranopia comparison" width="1226" height="272" loading="lazy" decoding="async" /></div>

        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Existing Apps — Gap</p>
            <p class="cs-pain-title">Color ID apps (ColorADD, Color Blind Pal)</p>
            <p class="cs-pain-desc">Help identify colors but aren't built for navigation. They don't help you follow a route under time pressure.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Existing Apps — Gap</p>
            <p class="cs-pain-title">Tinted glasses (EnChroma)</p>
            <p class="cs-pain-desc">Affect the entire visual field. Not tailored to transit map reading and don't selectively highlight routes.</p>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Define</p>
        <p class="cs-section-title">Framing the design space</p>

        <div class="cs-hmw">
          <p class="cs-hmw-label">How Might We</p>
          <p class="cs-hmw-text">Help <em>red–green color-blind commuters</em> interpret physical transit maps in stations more clearly and confidently during their journey?</p>
        </div>

        <div class="cs-finding">
          <p class="cs-finding-label">Key Design Constraint</p>
          <p class="cs-finding-text">Redesigning physical transit maps is not realistic — they are regulated, standardized, and embedded across city infrastructure. <strong>The solution must work with existing maps, not replace them.</strong></p>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Design</p>
        <p class="cs-section-title">Separating planning from navigation</p>
        <p class="cs-body">The core insight: separate planning (app) from navigation (glasses). This prevents users from staring at their phone in a crowded station and keeps attention on the physical environment.</p>

        <div class="cs-features">
          <div class="cs-feature">
            <span class="cs-feature-num">01</span>
            <div>
              <p class="cs-feature-title">Companion app — plan before you go</p>
              <p class="cs-feature-desc">Select destination, preview route, connect to glasses. All setup happens before reaching the station — reducing cognitive load at the critical moment.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">02</span>
            <div>
              <p class="cs-feature-title">Smart glasses — real-world overlay</p>
              <p class="cs-feature-desc">Glasses highlight the selected route on the physical station map using patterns (solid, dashed, thick lines) — not color. The correct line pops, everything else recedes.</p>
            </div>
          </div>
        </div>

<div class="cs-img-wrap" style="margin-bottom:28px;"><img src="/assets/img/case/pathway/pathway-2137a237-1600.webp" srcset="/assets/img/case/pathway/pathway-2137a237-800.webp 800w, /assets/img/case/pathway/pathway-2137a237-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="Pathway companion app — onboarding and route selection screens" width="1600" height="1034" loading="lazy" decoding="async" /></div>
<div class="cs-img-wrap" style="margin-bottom:28px;"><img src="/assets/img/case/pathway/pathway-1da78821-1600.webp" srcset="/assets/img/case/pathway/pathway-1da78821-800.webp 800w, /assets/img/case/pathway/pathway-1da78821-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="Pathway — smart glasses route display and active navigation screens" width="1600" height="1034" loading="lazy" decoding="async" /></div>

        <div class="cs-stat" style="margin:28px 0; max-width:280px;">
          <p class="cs-stat-num">7.24:1</p>
          <p class="cs-stat-label">WCAG 2.1 contrast compliance — blue/yellow palette validated at AA and AAA levels</p>
        </div>

        <div class="cs-finding">
          <p class="cs-finding-label">WCAG Accessibility Check</p>
          <p class="cs-finding-text">The blue/yellow palette was validated against WCAG 2.1 guidelines. Both primary and accent colors achieve the highest contrast category — <strong>7.24:1 contrast ratio, AA + AAA compliant.</strong></p>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Usability Testing</p>
        <p class="cs-section-title">Testing the concept with users</p>
        <p class="cs-body">To validate the core interaction model, I conducted concept testing sessions with participants who self-identified as red-green color-blind. The goal was not to test a finished product, but to evaluate whether the separation of planning (app) from navigation (glasses) made intuitive sense — and whether the pattern-based route highlighting was legible under simulated station conditions.</p>

        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">What was tested</p>
            <p class="cs-pain-title">Core interaction model</p>
            <p class="cs-pain-desc">Participants were asked to complete a route setup task using the companion app, then describe how they would expect the glasses overlay to behave at the station map.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Key observation 01</p>
            <p class="cs-pain-title">Planning ahead felt natural</p>
            <p class="cs-pain-desc">All participants preferred setting up their route before arriving at the station — reducing the need to interact with their phone in a crowded, time-pressured environment.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Key observation 02</p>
            <p class="cs-pain-title">Pattern differentiation was effective</p>
            <p class="cs-pain-desc">When shown the solid, dashed, and thick line pattern options, participants could clearly distinguish between them without relying on color — validating the core accessibility approach.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">What improved</p>
            <p class="cs-pain-title">Onboarding flow simplified</p>
            <p class="cs-pain-desc">Initial testing revealed that the glasses pairing step felt unfamiliar. The onboarding was restructured into three clear steps — Connect, Choose, Follow — reducing perceived complexity before the first use.</p>
          </div>
        </div>

        <div class="cs-finding">
          <p class="cs-finding-label">Validation</p>
          <p class="cs-finding-text">The blue/yellow palette was validated against WCAG 2.1 guidelines achieving a <strong>7.24:1 contrast ratio — AA and AAA compliant</strong>. Pattern-based differentiation proved more reliable than color alone across all participants tested.</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Reflections</p>
        <p class="cs-section-title">What I'd explore next</p>
        <div class="cs-reflections">
          <div class="cs-reflection">
            <span class="cs-reflection-icon">🧪</span>
            <div>
              <p class="cs-reflection-title">Test with real commuters in station environments</p>
              <p class="cs-reflection-desc">Simulated testing is a starting point. Real-world conditions — lighting, crowds, time pressure — would reveal friction points invisible in prototypes.</p>
            </div>
          </div>
          <div class="cs-reflection">
            <span class="cs-reflection-icon">🔍</span>
            <div>
              <p class="cs-reflection-title">Explore real-time map recognition on smart glasses</p>
              <p class="cs-reflection-desc">The core technical challenge: can AR glasses reliably recognise a station map in varying lighting? Feasibility research is the critical next step.</p>
            </div>
          </div>
          <div class="cs-reflection">
            <span class="cs-reflection-icon">🤝</span>
            <div>
              <p class="cs-reflection-title">Partner with transit authorities</p>
              <p class="cs-reflection-desc">Working within a regulated system means partnerships matter. Transit authorities could provide map data and testing environments unavailable to independent designers.</p>
            </div>
          </div>
        </div>
      </div>

      ${csNextHTML('pur','PUR Water Purifier — Ecommerce Redesign',['Ecommerce','Web','Responsive'])}
    </div>
    ${footerHTML()}`;
}

export default pathwayHTML;
