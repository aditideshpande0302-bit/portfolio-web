import { csNextHTML, footerHTML } from '../shared.js';

function calmnestHTML() {
  return `
    <div class="cs-root">
      <button class="cs-back" onclick="goToWork('auto')"><span class="cs-back-arrow">←</span> Back to Work</button>

      <div class="cs-hero">
        <p class="cs-overline">Wellness · Mobile App · Habit Design</p>
        <h1 class="cs-title">CalmNest — Building a consistent meditation habit</h1>
        <p class="cs-subtitle">A meditation app designed to help individuals find peace, reduce stress, and establish a lasting daily meditation practice — built on habit-forming psychology and iterative usability testing.</p>
      </div>

      <div class="cs-meta">
        <div class="cs-meta-item"><p class="cs-meta-label">Role</p><p class="cs-meta-value">UI/UX Designer</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Duration</p><p class="cs-meta-value">8 Weeks</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Platform</p><p class="cs-meta-value">Mobile</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Tools</p><p class="cs-meta-value">Figma · Miro · FigJam</p></div>
      </div>

      <div class="cs-hero-img" style="margin-bottom:56px;"><img src="/assets/img/work/work-ed343775-1419.webp" srcset="/assets/img/work/work-ed343775-800.webp 800w, /assets/img/work/work-ed343775-1419.webp 1419w" sizes="(max-width: 768px) 100vw, 900px" alt="CalmNest meditation app — cover" width="1419" height="896" loading="lazy" decoding="async" /></div>

      <div class="cs-section">
        <p class="cs-section-label">Overview</p>
        <div class="cs-two-col">
          <div>
            <p class="cs-section-title">The Problem</p>
            <p class="cs-body">Many individuals struggle to develop and maintain a consistent meditation habit due to a lack of motivation, difficulty finding time, and an absence of engaging tools to track progress. Existing apps offer sessions but fail to address the psychological barriers to habit formation — leaving users unmotivated to continue.</p>
          </div>
          <div>
            <p class="cs-section-title">The Solution</p>
            <p class="cs-body">CalmNest provides an intuitive interface with quick access to sessions. Features like <strong>daily recommendations, streak rewards, and progress tracking</strong> keep users engaged. By combining simplicity with meaningful rewards, the app helps users build and sustain a consistent meditation habit over time.</p>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Strategy</p>
        <p class="cs-section-title">Habit-forming framework</p>
        <p class="cs-body">CalmNest was structured using a habit-forming framework centered on four components from the Hooked model: <strong>Trigger, Action, Reward, and Investment.</strong> This approach ensures users are consistently prompted to engage, experience accomplishment, and feel their efforts are building toward meaningful progress.</p>
        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Trigger</p>
            <p class="cs-pain-title">Daily notifications & streaks</p>
            <p class="cs-pain-desc">Prompt users to open the app and start their daily practice through reminders and streak continuity cues.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Action</p>
            <p class="cs-pain-title">Start a session</p>
            <p class="cs-pain-desc">The core behavior — selecting and completing a meditation session — made as frictionless as possible.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Reward</p>
            <p class="cs-pain-title">Streaks & unlockable content</p>
            <p class="cs-pain-desc">Completing sessions earns streak milestones and unlocks guided reward sessions, reinforcing the behavior loop.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Investment</p>
            <p class="cs-pain-title">Progress & personalization</p>
            <p class="cs-pain-desc">Users build a meditation history, mood log, and personal streak — making the app more valuable the longer they use it.</p>
          </div>
        </div>
        <p class="cs-body" style="margin-top:16px;">I began by creating a <strong>storyboard</strong> that visualized the user journey — mapping triggers that prompt app use, actions users take, and rewards that encourage return. I then applied the <strong>MoSCoW method</strong> to prioritize features into Must-Have, Should-Have, Could-Have, and Won't-Have categories, keeping the core focused while planning future enhancements.</p>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Scoping</p>
        <p class="cs-section-title">MoSCoW — prioritizing features</p>
        <p class="cs-body">I applied the MoSCoW method to organize features into Must-Have, Should-Have, Could-Have, and Won't-Have categories. This prioritization kept the core experience focused while leaving room for future enhancements.</p>
        <div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/calmnest/calmnest-991aaa8e-1436.webp" srcset="/assets/img/case/calmnest/calmnest-991aaa8e-800.webp 800w, /assets/img/case/calmnest/calmnest-991aaa8e-1436.webp 1436w" sizes="(max-width: 768px) 100vw, 900px" alt="CalmNest MoSCoW feature prioritization" width="1436" height="750" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Strategy</p>
        <p class="cs-section-title">Storyboard — mapping the user journey</p>
        <p class="cs-body">I began by creating a storyboard that visualizes the complete user journey — the trigger that prompts app use, the actions users take, and the rewards and investments that encourage them to return. Each frame ensured every step aligned with the habit-forming framework.</p>
        <div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/calmnest/calmnest-c174835c-577.webp" srcset="/assets/img/case/calmnest/calmnest-c174835c-577.webp 577w" sizes="(max-width: 768px) 100vw, 900px" alt="CalmNest storyboard — habit forming user journey" width="577" height="690" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Structure</p>
        <p class="cs-section-title">User Flow — mapping key paths</p>
        <p class="cs-body">I designed user flows to outline the paths users would take to complete key tasks — onboarding, starting a session, and tracking progress. These flows ensured efficient, barrier-free navigation throughout the app.</p>
        <div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/calmnest/calmnest-0787f7e0-1165.webp" srcset="/assets/img/case/calmnest/calmnest-0787f7e0-800.webp 800w, /assets/img/case/calmnest/calmnest-0787f7e0-1165.webp 1165w" sizes="(max-width: 768px) 100vw, 900px" alt="CalmNest user flow diagram" width="1165" height="750" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Skeleton</p>
        <p class="cs-section-title">Moodboard and style guide</p>
        <p class="cs-body">The CalmNest moodboard was designed to reflect a serene, calming atmosphere with soft pastels, minimalist elements, and smooth gradients — evoking feelings of peace and relaxation. The style guide established calming color tones, clean modern typography, and simple intuitive icons, ensuring a cohesive and tranquil experience throughout.</p>
        <div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/calmnest/calmnest-53d0be08-1600.webp" srcset="/assets/img/case/calmnest/calmnest-53d0be08-800.webp 800w, /assets/img/case/calmnest/calmnest-53d0be08-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="CalmNest moodboard and color palette" width="1600" height="813" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Surface</p>
        <p class="cs-section-title">High-fidelity visual design</p>
        <p class="cs-body">The hi-fidelity designs showcase the final, polished app interface with cohesive colors, typography, and icons. The layout prioritizes simplicity and ease of navigation, offering a seamless, visually calming experience for users.</p>
        <div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/calmnest/calmnest-8544e8a8-1600.webp" srcset="/assets/img/case/calmnest/calmnest-8544e8a8-800.webp 800w, /assets/img/case/calmnest/calmnest-8544e8a8-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="CalmNest hi-fidelity design screens" width="1600" height="1328" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Usability Testing</p>
        <p class="cs-section-title">Testing with 5 participants</p>
        <p class="cs-body">I ran usability tests with <strong>5 participants</strong> completing <strong>7 tasks</strong> over 30–40 minutes each. Users found the app intuitive and easy to navigate. The mood tracking feature was a favorite. While most felt confident, a few encountered minor challenges and suggested more customization options.</p>

        <div class="cs-stats">
          <div class="cs-stat"><p class="cs-stat-num">71.43%</p><p class="cs-stat-label">Overall task success rate across all 7 tasks and 5 participants</p></div>
          <div class="cs-stat"><p class="cs-stat-num">85.71%</p><p class="cs-stat-label">Confidence and ease ratings — users felt capable and comfortable with the interface</p></div>
          <div class="cs-stat"><p class="cs-stat-num">35</p><p class="cs-stat-label">Total tasks completed across all testing sessions (5 participants × 7 tasks)</p></div>
        </div>

        <div class="cs-finding">
          <p class="cs-finding-label">Key Findings</p>
          <p class="cs-finding-text">
            <strong>1. Reward visibility was unclear.</strong> No visual cue indicated that completing a task would unlock a reward, leaving users uncertain about starting.<br><br>
            <strong>2. Voice selection was overlooked.</strong> Users skipped the "Select Voice" button and went straight to "Play Session" without noticing the option.<br><br>
            <strong>3. Resume button caused confusion.</strong> The Resume button above the 14-day option led users to click it first before understanding the correct action.<br><br>
            <strong>4. Calendar navigation was hidden.</strong> Users were unaware that clicking the calendar would navigate to the monthly progress view.
          </p>
        </div>
<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/calmnest/calmnest-e8221a3f-1600.webp" srcset="/assets/img/case/calmnest/calmnest-e8221a3f-800.webp 800w, /assets/img/case/calmnest/calmnest-e8221a3f-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="CalmNest usability testing results — task success matrix" width="1600" height="615" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Iteration</p>
        <p class="cs-section-title">SCAMPER — refining based on findings</p>
        <p class="cs-body">After usability testing, I applied the <strong>SCAMPER method</strong> to identify and implement improvements.</p>
        <div class="cs-decision">
          <p class="cs-decision-num">Adapt — Reward Progress Bar</p>
          <p class="cs-decision-title">Added a visible progress bar for streak & reward tracking</p>
          <p class="cs-decision-desc">To address the unclear reward cue, a progress bar was added showing streak completion and reward unlocking status. This provides clarity and encourages consistency by visually showcasing progress toward earning rewards.</p>
        </div>
        <div class="cs-decision">
          <p class="cs-decision-num">Substitute — Remove Resume Button</p>
          <p class="cs-decision-title">Replaced Resume with descriptive text guidance</p>
          <p class="cs-decision-desc">The Resume button was removed and replaced with descriptive text to guide users effectively, eliminating confusion and providing a clear understanding of the correct next action.</p>
        </div>
        <div class="cs-decision">
          <p class="cs-decision-num">Adapt — View More for Calendar</p>
          <p class="cs-decision-title">Added a "View More" option for monthly progress</p>
          <p class="cs-decision-desc">To improve discoverability of the monthly view, a View More option was added, making it clear users can access deeper progress tracking and encouraging engagement with the feature.</p>
        </div>
<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/calmnest/calmnest-11d12175-1600.webp" srcset="/assets/img/case/calmnest/calmnest-11d12175-800.webp 800w, /assets/img/case/calmnest/calmnest-11d12175-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="CalmNest SCAMPER iterations — before and after improvements" width="1600" height="697" loading="lazy" decoding="async" /></div>
      </div>

      ${csNextHTML('hydration','Hydration App — Daily Intake Tracker',['Health','Mobile','Habit Design'])}
    </div>
    ${footerHTML()}`;
}

export default calmnestHTML;
