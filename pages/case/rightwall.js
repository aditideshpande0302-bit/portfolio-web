import { csNextHTML, footerHTML } from '../shared.js';

function rightwallHTML() {
  return `
    <div class="cs-root cs-rw">
      <button class="cs-back" onclick="goToWork('auto')">
        <span class="cs-back-arrow">←</span> Back to Work
      </button>

      <!-- Hero -->
      <div class="cs-hero">
        <p class="cs-overline">Mobile App · Discovery · End-to-End UX</p>
        <h1 class="cs-title">RightWall — Helping artists find the right exhibition</h1>
        <p class="cs-subtitle">Designing a platform that helps emerging visual artists discover exhibitions that match their artistic style, reducing the guesswork and enabling them to quickly evaluate fit.</p>
      </div>

      <!-- Meta -->
      <div class="cs-meta">
        <div class="cs-meta-item">
          <p class="cs-meta-label">Role</p>
          <p class="cs-meta-value">Product Designer</p>
        </div>
        <div class="cs-meta-item">
          <p class="cs-meta-label">Timeline</p>
          <p class="cs-meta-value">8 Weeks</p>
        </div>
        <div class="cs-meta-item">
          <p class="cs-meta-label">Platform</p>
          <p class="cs-meta-value">Mobile, Web</p>
        </div>
        <div class="cs-meta-item">
          <p class="cs-meta-label">Tools</p>
          <p class="cs-meta-value">Figma · FigJam · Maze</p>
        </div>
      </div>

      <!-- Hero image -->
      <div class="cs-hero-img">
        <img src="/assets/img/work/work-11b74571-1226.webp" srcset="/assets/img/work/work-11b74571-800.webp 800w, /assets/img/work/work-11b74571-1226.webp 1226w" sizes="(max-width: 768px) 100vw, 900px" alt="RightWall app — exhibition matching platform" width="1226" height="652" loading="lazy" decoding="async" />
      </div>

      <!-- Overview -->
      <div class="cs-section">
        <p class="cs-section-label">Overview</p>
        <div class="cs-two-col">
          <div>
            <p class="cs-section-title">The Problem</p>
            <p class="cs-body">Emerging visual artists actively seek exhibition opportunities but struggle to identify which ones are relevant and worth applying to. A key challenge is the misalignment between artists' styles and the specific preferences of curators.</p>
          </div>
          <div>
            <p class="cs-section-title">The Solution</p>
            <p class="cs-body">RightWall helps emerging artists identify the right exhibitions before applying by showing style fit, eligibility, and match confidence upfront. It reduces guesswork so artists can focus on opportunities that truly align with their work.</p>
          </div>
        </div>

        <div class="cs-stats">
          <div class="cs-stat">
            <p class="cs-stat-num">80%</p>
            <p class="cs-stat-label">Task success rate — artists able to find and evaluate a relevant exhibition</p>
          </div>
          <div class="cs-stat">
            <p class="cs-stat-num">36.7%</p>
            <p class="cs-stat-label">Baseline — task success before the redesign, showing the gap that needed solving</p>
          </div>
          <div class="cs-stat">
            <p class="cs-stat-num">5/5</p>
            <p class="cs-stat-label">Users completed style profile setup successfully in usability testing</p>
          </div>
        </div>
      </div>

      <!-- Research -->
      <div class="cs-section">
        <p class="cs-section-label">Research</p>
        <p class="cs-section-title">Understanding the artist's frustration</p>
        <p class="cs-body">I conducted qualitative research with Philadelphia-based visual artists, starting with a screening survey followed by <strong>9 in-depth interviews</strong> to understand how they find, evaluate, and apply to exhibitions — including challenges before and after applying. I also reviewed existing platforms, grounding the problem in real behavior and identifying where uncertainty and misalignment occur.</p>

        <div class="cs-img-wrap" style="margin-bottom:0;"><img src="/assets/img/case/rightwall/rightwall-b001ec12-1600.webp" srcset="/assets/img/case/rightwall/rightwall-b001ec12-800.webp 800w, /assets/img/case/rightwall/rightwall-b001ec12-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="RightWall affinity mapping — research synthesis" width="1600" height="870" loading="lazy" decoding="async" /></div>

        <div class="cs-quote">
          <p class="cs-quote-text">"There is a real disconnect between what I love to make, what people want to buy, and what galleries want to show."</p>
          <p class="cs-quote-attr">Violet — Oil Painting</p>
        </div>

        <div class="cs-quote">
          <p class="cs-quote-text">"I avoid exhibiting because there's no centralized space to pitch artists that galleries trust or browse regularly."</p>
          <p class="cs-quote-attr">Amy — Multimedia Painting</p>
        </div>

        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Pain Point 01</p>
            <p class="cs-pain-title">Discovery is scattered</p>
            <p class="cs-pain-desc">Artists rely on multiple disconnected sources like Instagram, websites, and mailing lists, making the search process time-consuming and inefficient with no single source of truth.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Pain Point 02</p>
            <p class="cs-pain-title">Fit is invisible</p>
            <p class="cs-pain-desc">Artists struggle to determine if their work aligns with a venue's expectations, often spending significant time researching with little clarity or confidence.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Pain Point 03</p>
            <p class="cs-pain-title">Application process is fragmented</p>
            <p class="cs-pain-desc">Submission requirements vary widely across opportunities, forcing artists to constantly adapt formats and manage details, which leads to confusion and missed steps.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Pain Point 04</p>
            <p class="cs-pain-title">Feedback loops are broken</p>
            <p class="cs-pain-desc">Artists rarely receive feedback on rejections, leaving them unsure of what went wrong and unable to improve or refine their application strategy over time.</p>
          </div>
        </div>
      </div>

      <!-- Framing the problem -->
      <div class="cs-section">
        <p class="cs-section-label">Research</p>
        <p class="cs-section-title">Framing the right problem</p>

        <div class="cs-hmw">
          <p class="cs-hmw-label">How Might We</p>
          <p class="cs-hmw-text"><em>Misalignment between the artistic style of emerging artists</em> and the specific styles exhibitions are seeking is the core barrier to accessing exhibitions and getting their work seen.</p>
        </div>

        <div class="cs-persona">
          <div class="cs-persona-avatar">🎨</div>
          <div>
            <p class="cs-persona-name">Sophia</p>
            <p class="cs-persona-role">Emerging Artist</p>
            <div class="cs-persona-cols">
              <div>
                <p class="cs-persona-col-label">Goals</p>
                <ul class="cs-persona-list">
                  <li>Show her work in credible venues</li>
                  <li>Build a professional exhibition history</li>
                  <li>Find shows that match her aesthetic</li>
                </ul>
              </div>
              <div>
                <p class="cs-persona-col-label">Frustrations</p>
                <ul class="cs-persona-list">
                  <li>Wastes time on irrelevant opportunities</li>
                  <li>No signal on fit before applying</li>
                  <li>Application requirements are inconsistent</li>
                </ul>
              </div>
            </div>
            <p class="cs-persona-quote">"There's no clear guidance — where to look for exhibitions and events and whom to connect. You just figure it out by wasting time and money."</p>
          </div>
        </div>
      </div>

      <!-- Design -->
      <div class="cs-section">
        <p class="cs-section-label">Design</p>
        <p class="cs-section-title">From chaos to clarity</p>
        <p class="cs-body">The design focused on three core moments: onboarding that builds a style profile, a discovery feed that feels personal, and an application tracker that reduces cognitive load.</p>

        <div class="cs-features">
          <div class="cs-feature">
            <span class="cs-feature-num">01</span>
            <div>
              <p class="cs-feature-title">Style profiling onboarding</p>
              <p class="cs-feature-desc">Artists select visual style tiles instead of abstract categories, allowing the system to understand their work more accurately and personalize recommendations from the start.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">02</span>
            <div>
              <p class="cs-feature-title">Match score discovery feed</p>
              <p class="cs-feature-desc">Exhibitions are ranked by match score and show key requirements, helping users quickly evaluate fit and make confident decisions.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">03</span>
            <div>
              <p class="cs-feature-title">AI Coach</p>
              <p class="cs-feature-desc">Provides personalized guidance on where to apply, what to improve, and how to approach opportunities — helping artists make more informed decisions without taking control away from them.</p>
            </div>
          </div>
        </div>

<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/rightwall/rightwall-e66ed4a2-1600.webp" srcset="/assets/img/case/rightwall/rightwall-e66ed4a2-800.webp 800w, /assets/img/case/rightwall/rightwall-e66ed4a2-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="RightWall — style profiling onboarding screens" width="1600" height="851" loading="lazy" decoding="async" /></div>
<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/rightwall/rightwall-c82f498a-1600.webp" srcset="/assets/img/case/rightwall/rightwall-c82f498a-800.webp 800w, /assets/img/case/rightwall/rightwall-c82f498a-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="RightWall — discovery feed with match score cards" width="1600" height="851" loading="lazy" decoding="async" /></div>
<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/rightwall/rightwall-577fa039-1600.webp" srcset="/assets/img/case/rightwall/rightwall-577fa039-800.webp 800w, /assets/img/case/rightwall/rightwall-577fa039-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="RightWall — AI Coach feature screens" width="1600" height="851" loading="lazy" decoding="async" /></div>

        <div class="cs-quote" style="margin-top:32px;">
          <p class="cs-quote-text">"Match score — not just a number, but a reason. Every card explains why it's a match."</p>
        </div>

        <div class="cs-decision">
          <p class="cs-decision-num">Design Decision 01</p>
          <p class="cs-decision-title">Showing match and requirements upfront instead of post-click</p>
          <p class="cs-decision-desc">Artists were spending time exploring exhibitions only to later realize they weren't a good fit. By surfacing match score, key requirements, and similar artists directly in the discovery feed, the design reduces uncertainty early and helps users make faster, more confident decisions.</p>
        </div>
        <div class="cs-decision">
          <p class="cs-decision-num">Design Decision 02</p>
          <p class="cs-decision-title">Centralizing fragmented workflows into one system</p>
          <p class="cs-decision-desc">Artists were managing applications, deadlines, and materials across multiple tools. Bringing everything into a single tracker reduces cognitive load and helps them stay organized throughout the application process.</p>
        </div>
      </div>

      <!-- Usability Testing -->
      <div class="cs-section">
        <p class="cs-section-label">Design</p>
        <p class="cs-section-title">What I learned from users</p>
        <p class="cs-body">I conducted <strong>5 moderated usability sessions</strong> with emerging artists to understand how they interact with RightWall. During the sessions, I asked participants to complete key tasks like setting up their style profile, finding and shortlisting exhibitions, and tracking an application. This helped me observe how they navigate the product and identify where they faced confusion or missed important features.</p>

        <table class="cs-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Success</th>
              <th>Avg Time</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Set up style profile</td><td>5 / 5</td><td>2m 10s</td></tr>
            <tr><td>Find &amp; shortlist exhibition</td><td>4 / 5</td><td>3m 05s</td></tr>
            <tr><td>Use AI Coach</td><td>3 / 5</td><td>4m 30s</td></tr>
          </tbody>
        </table>

        <div class="cs-finding">
          <p class="cs-finding-label">Key Finding</p>
          <p class="cs-finding-text"><strong>Users didn't notice the AI Coach feature on the home screen.</strong> When participants were exploring the app, most of them skipped this feature because it blended in with other elements and didn't stand out.<br><br>Fix: I redesigned it as a prominent card on the home screen so users can easily see and access it.</p>
        </div>

        <div class="cs-img-wrap" style="margin-top:24px;margin-bottom:0;"><img src="/assets/img/case/rightwall/rightwall-2ab5e8f8-1600.webp" srcset="/assets/img/case/rightwall/rightwall-2ab5e8f8-800.webp 800w, /assets/img/case/rightwall/rightwall-2ab5e8f8-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="RightWall — before and after AI Coach redesign" width="1600" height="945" loading="lazy" decoding="async" /></div>
      </div>

      <!-- Reflections -->
      <div class="cs-section">
        <p class="cs-section-label">Reflections</p>
        <p class="cs-section-title">What I'd do differently</p>

        <div class="cs-reflections">
          <div class="cs-reflection">
            <span class="cs-reflection-icon">🚀</span>
            <div>
              <p class="cs-reflection-title">Strengthen curator side tools</p>
              <p class="cs-reflection-desc">I would focus on helping curators define clearer requirements — like style, theme, and eligibility — so artists can better understand what fits before applying.</p>
            </div>
          </div>
          <div class="cs-reflection">
            <span class="cs-reflection-icon">🤝</span>
            <div>
              <p class="cs-reflection-title">Validate with real institutions and galleries</p>
              <p class="cs-reflection-desc">Testing the product with galleries and organizations would help understand how it fits into real workflows and improve trust from both sides.</p>
            </div>
          </div>
          <div class="cs-reflection">
            <span class="cs-reflection-icon">💡</span>
            <div>
              <p class="cs-reflection-title">Explore better value models</p>
              <p class="cs-reflection-desc">Testing different value propositions and monetization approaches with real users and institutions would help surface what actually drives adoption and sustainability.</p>
            </div>
          </div>
        </div>
      </div>

      ${csNextHTML('pathway','Pathway — Accessible Transit for Color-Blind Commuters',['Research','Accessibility Design','WCAG Informed'])}
    </div>
    ${footerHTML()}`;
}

export default rightwallHTML;
