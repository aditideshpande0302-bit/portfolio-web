import { csNextHTML, footerHTML } from '../shared.js';

function hydrationHTML() {
  return `
    <div class="cs-root">
      <button class="cs-back" onclick="goToWork('auto')"><span class="cs-back-arrow">←</span> Back to Work</button>

      <div class="cs-hero">
        <p class="cs-overline">Health · Mobile · Habit Design</p>
        <h1 class="cs-title">Hydration App — Building lasting daily water habits</h1>
        <p class="cs-subtitle">A solution to help users effortlessly integrate a daily water intake routine into their lives — targeting students and young professionals who neglect hydration due to busy schedules.</p>
      </div>

      <div class="cs-meta">
        <div class="cs-meta-item"><p class="cs-meta-label">Role</p><p class="cs-meta-value">UI/UX Designer</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Duration</p><p class="cs-meta-value">8 Weeks</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Platform</p><p class="cs-meta-value">Mobile</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Tools</p><p class="cs-meta-value">Figma · Miro · FigJam</p></div>
      </div>

      <div class="cs-hero-img" style="margin-bottom:56px;"><img src="/assets/img/work/work-1f1d13a6-1419.webp" srcset="/assets/img/work/work-1f1d13a6-800.webp 800w, /assets/img/work/work-1f1d13a6-1419.webp 1419w" sizes="(max-width: 768px) 100vw, 900px" alt="Hydration App (AquaTrack) — cover" width="1419" height="896" loading="lazy" decoding="async" /></div>

      <div class="cs-section">
        <p class="cs-section-label">Problem</p>
        <p class="cs-section-title">The hydration gap</p>
        <p class="cs-body">Many individuals struggle to drink enough water daily, leading to fatigue, difficulty concentrating, and long-term health consequences. Despite widespread awareness, people fail to follow through due to two core reasons: <strong>forgetfulness</strong> (busy schedules override hydration goals) and <strong>lack of motivation</strong> (drinking water doesn't produce immediate, tangible rewards).</p>

        <div class="cs-stats">
          <div class="cs-stat"><p class="cs-stat-num">40%</p><p class="cs-stat-label">of people don't drink enough water daily</p></div>
          <div class="cs-stat"><p class="cs-stat-num">45%</p><p class="cs-stat-label">forget to drink water due to busy schedules</p></div>
          <div class="cs-stat"><p class="cs-stat-num">15%</p><p class="cs-stat-label">drink the recommended daily amount</p></div>
        </div>

        <div class="cs-finding">
          <p class="cs-finding-label">Survey Insight</p>
          <p class="cs-finding-text">22% reported drinking 8+ cups daily · 35% drink 4–7 cups · 36% drink only 1–3 cups · 7% reported no daily water consumption at all.</p>
        </div>

        <div class="cs-hmw">
          <p class="cs-hmw-label">How Might We</p>
          <p class="cs-hmw-text">Help users <em>seamlessly integrate hydration</em> into their daily routine, ensuring they remember to drink enough water and maintain optimal hydration levels throughout the day?</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Solution</p>
        <p class="cs-section-title">A habit-forming hydration companion</p>
        <p class="cs-body">The proposed solution incorporates four key features to make hydration engaging and sustainable:</p>
        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Feature 01</p>
            <p class="cs-pain-title">Progress tracking</p>
            <p class="cs-pain-desc">Monitor daily water intake with visual progress indicators that make the goal tangible and achievable.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Feature 02</p>
            <p class="cs-pain-title">Gamification elements</p>
            <p class="cs-pain-desc">Motivate and reward consistent hydration behavior through streaks, milestones, and achievement unlocks.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Feature 03</p>
            <p class="cs-pain-title">Personalized tips</p>
            <p class="cs-pain-desc">Hydration recommendations tailored to user behavior, activity level, and daily intake patterns.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Feature 04</p>
            <p class="cs-pain-title">Wearable integration</p>
            <p class="cs-pain-desc">Connect with wearable technology for seamless, ambient reminders and passive intake tracking.</p>
          </div>
        </div>
<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/hydration/hydration-4a579a60-1600.webp" srcset="/assets/img/case/hydration/hydration-4a579a60-800.webp 800w, /assets/img/case/hydration/hydration-4a579a60-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="AquaTrack — hi-fidelity solution screens: splash, home, progress, wearable" width="1600" height="971" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Process & Methodology</p>
        <p class="cs-section-title">Validating through pretotyping</p>
        <p class="cs-body">Rather than building a full product immediately, I used the <strong>Business Model Canvas</strong> to map the app's critical elements — target audience, value propositions, key activities, and revenue streams. I then identified and tested three <strong>risky assumptions</strong> using pretotype experiments to validate before investing in full development.</p>
<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/hydration/hydration-06b8bf6e-1460.webp" srcset="/assets/img/case/hydration/hydration-06b8bf6e-800.webp 800w, /assets/img/case/hydration/hydration-06b8bf6e-1460.webp 1460w" sizes="(max-width: 768px) 100vw, 900px" alt="AquaTrack — Business Model Canvas" width="1460" height="899" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Validation</p>
        <p class="cs-section-title">Three risky assumptions tested</p>

        <div class="cs-decision">
          <p class="cs-decision-num">Assumption 01 — Mechanical Turk</p>
          <p class="cs-decision-title">"Users will follow personalized hydration recommendations"</p>
          <p class="cs-decision-desc">Hypothesis: At least 50% of health-conscious individuals will follow recommendations delivered via email. Result: <strong>60% followed the recommendations</strong> — showing engagement but falling short of the 70% target, revealing a gap in driving consistent action.</p>
        </div>

        <div class="cs-decision">
          <p class="cs-decision-num">Assumption 02 — Fake Door</p>
          <p class="cs-decision-title">"Users will purchase affiliate products when offered personalized discounts"</p>
          <p class="cs-decision-desc">A product page with a "30% off!" label and Get Offer button linked to a Google Form. Result: <strong>4 out of 5 users provided their email</strong> — strong engagement that validated the discount strategy as an effective motivator.</p>
        </div>

        <div class="cs-decision">
          <p class="cs-decision-num">Assumption 03 — Pinocchio → MVP</p>
          <p class="cs-decision-title">"Users will consistently engage with hydration tracking"</p>
          <p class="cs-decision-desc">Initial Google Form simulation revealed low adherence — only 3/5 users completed all check-ins. A re-run with a functional <strong>MVP prototype</strong> showed improvement: <strong>4 out of 5 users</strong> engaged consistently, validating the concept with a more realistic experience.</p>
        </div>

        <div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/hydration/hydration-ba31c4c7-1219.webp" srcset="/assets/img/case/hydration/hydration-ba31c4c7-800.webp 800w, /assets/img/case/hydration/hydration-ba31c4c7-1219.webp 1219w" sizes="(max-width: 768px) 100vw, 900px" alt="Hydration App — pretotype experiment results" width="1219" height="691" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Conclusion</p>
        <p class="cs-section-title">Design validated, habit proven</p>
        <p class="cs-body">This project demonstrated a systematic approach to solving a real-world problem by combining design and business frameworks. Through the Business Model Canvas, risky assumption validation, and pretotyping techniques, the hydration app was validated as <strong>both user-centric and commercially viable</strong>.</p>
        <p class="cs-body">The iterative approach — moving from Pinocchio simulation to functional MVP — confirmed that realistic, engaging experiences are critical to driving consistent user behavior. The experience underscores the importance of <strong>iterative design and market validation</strong> in creating impactful digital solutions.</p>
      </div>

      ${csNextHTML('genai','Gen AI Study Buddy — UX Research',['Generative AI','User Research','Education'])}
    </div>
    ${footerHTML()}`;
}

export default hydrationHTML;
