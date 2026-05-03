import { footerHTML } from './shared.js';

function workHTML() {
  return `
    <div class="work-root">
      <h2 class="page-heading">Selected Projects</h2>
      <div class="cat-tabs">
        <button class="cat-tab active" onclick="switchCat('featured',this)">Featured Work</button>
        <button class="cat-tab" onclick="switchCat('all',this)">UI/UX Projects</button>
        <button class="cat-tab" onclick="switchCat('research',this)">Research Projects</button>
        <button class="cat-tab" onclick="switchCat('ai',this)">AI Projects</button>
      </div>

      <!-- ── Featured Work ── -->
      <div class="cat-panel active" id="cat-featured">
        <div class="work-grid">
          <div class="project-card" onclick="openProject('rightwall','featured')">
            <div class="project-thumb t1"><img src="/assets/img/work/work-11b74571-1226.webp" srcset="/assets/img/work/work-11b74571-800.webp 800w, /assets/img/work/work-11b74571-1226.webp 1226w" sizes="(max-width: 768px) 100vw, 900px" alt="RightWall" width="1226" height="652" fetchpriority="high" decoding="async" /></div>
            <div class="project-info">
              <div class="project-tags"><span class="tag">Mobile App</span><span class="tag">Discovery</span><span class="tag">End-to-End UX</span></div>
              <p class="project-name">RightWall</p>
              <p class="project-desc">Designed an app for emerging visual artists to discover exhibitions that fit their artistic style, enabling them to quickly evaluate fit and achieve 80% task success.</p>
            </div>
          </div>
          <div class="project-card" onclick="openProject('pathway','featured')">
            <div class="project-thumb t2"><img src="/assets/img/work/work-aecbbef3-1224.webp" srcset="/assets/img/work/work-aecbbef3-800.webp 800w, /assets/img/work/work-aecbbef3-1224.webp 1224w" sizes="(max-width: 768px) 100vw, 900px" alt="Pathway" width="1224" height="650" loading="lazy" decoding="async" /></div>
            <div class="project-info">
              <div class="project-tags"><span class="tag">Research</span><span class="tag">Accessibility Design</span><span class="tag">WCAG Informed</span></div>
              <p class="project-name">Pathway</p>
              <p class="project-desc">Accessibility-first transit companion for red-green color-blind commuters, achieving 7.24:1 contrast compliance through WCAG-guided color validation.</p>
            </div>
          </div>
          <div class="project-card" onclick="openProject('pur','featured')">
            <div class="project-thumb t3"><img src="/assets/img/work/work-071c820c-1226.webp" srcset="/assets/img/work/work-071c820c-800.webp 800w, /assets/img/work/work-071c820c-1226.webp 1226w" sizes="(max-width: 768px) 100vw, 900px" alt="PUR Water Purifier" width="1226" height="648" loading="lazy" decoding="async" /></div>
            <div class="project-info">
              <div class="project-tags"><span class="tag">Ecommerce</span><span class="tag">Web</span><span class="tag">Responsive</span></div>
              <p class="project-name">PUR Water Purifier</p>
              <p class="project-desc">Redesigned the PUR desktop experience by streamlining navigation and key purchase flows, improving overall performance from 9% to 56%.</p>
            </div>
          </div>
          <div class="project-card" onclick="openProject('empowered','featured')" style="cursor:pointer;">
            <div class="project-thumb t4"><img src="/assets/img/work/work-972f2aa7-1226.webp" srcset="/assets/img/work/work-972f2aa7-800.webp 800w, /assets/img/work/work-972f2aa7-1226.webp 1226w" sizes="(max-width: 768px) 100vw, 900px" alt="Empowered Vote" width="1226" height="648" loading="lazy" decoding="async" /></div>
            <div class="project-info">
              <div class="project-tags"><span class="tag">Civic Tech</span><span class="tag">UI/UX Design</span><span class="tag">Product Redesign</span></div>
              <p class="project-name">Empowered Vote</p>
              <p class="project-desc">Redesigned civic engagement experiences — representative discovery, feature introduction, and issue-based decision flows — making political information easier to understand and act on.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ── UI/UX Projects ── -->
      <div class="cat-panel" id="cat-all">
        <div class="work-grid">
          <div class="project-card" onclick="openProject('calmnest','all')">
            <div class="project-thumb t5"><img src="/assets/img/work/work-ed343775-1419.webp" srcset="/assets/img/work/work-ed343775-800.webp 800w, /assets/img/work/work-ed343775-1419.webp 1419w" sizes="(max-width: 768px) 100vw, 900px" alt="CalmNest Meditation App" width="1419" height="896" loading="lazy" decoding="async" /></div>
            <div class="project-info">
              <div class="project-tags"><span class="tag">Wellness</span><span class="tag">Mobile</span><span class="tag">Habit Design</span></div>
              <p class="project-name">CalmNest Meditation App</p>
              <p class="project-desc">Mindfulness app built on habit-forming principles — streak rewards, daily recommendations, and progress tracking to build a consistent practice.</p>
            </div>
          </div>
          <div class="project-card" onclick="openProject('hydration','all')">
            <div class="project-thumb t6"><img src="/assets/img/work/work-1f1d13a6-1419.webp" srcset="/assets/img/work/work-1f1d13a6-800.webp 800w, /assets/img/work/work-1f1d13a6-1419.webp 1419w" sizes="(max-width: 768px) 100vw, 900px" alt="Hydration App" width="1419" height="896" loading="lazy" decoding="async" /></div>
            <div class="project-info">
              <div class="project-tags"><span class="tag">Health</span><span class="tag">Mobile</span><span class="tag">Habit Design</span></div>
              <p class="project-name">Hydration App</p>
              <p class="project-desc">Daily water intake tracker validated through pretotyping — risky assumption testing, Fake Door experiments, and an MVP rerun to confirm user engagement.</p>
            </div>
          </div>
          <div class="project-card" style="cursor:default;">
            
            <div class="project-thumb t2"><img src="/assets/img/work/work-2eea364d-1600.webp" srcset="/assets/img/work/work-2eea364d-800.webp 800w, /assets/img/work/work-2eea364d-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="Gamification App" width="1600" height="971" loading="lazy" decoding="async" /><span class="coming-soon-chip">Coming soon</span></div>
            <div class="project-info">
              <div class="project-tags"><span class="tag">Engagement</span><span class="tag">Mobile</span><span class="tag">Gamification</span></div>
              <p class="project-name">Gamification App</p>
              <p class="project-desc">Explored gamification mechanics to drive habit engagement and sustained user motivation.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Research Projects ── -->
      <div class="cat-panel" id="cat-research">
        <div class="work-grid">
          <div class="project-card" onclick="openProject('genai','research')">
            <div class="project-thumb t6"><img src="/assets/img/work/work-5058dc6c-1600.webp" srcset="/assets/img/work/work-5058dc6c-800.webp 800w, /assets/img/work/work-5058dc6c-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="Gen AI Study Buddy" width="1600" height="1200" loading="lazy" decoding="async" /></div>
            <div class="project-info">
              <div class="project-tags"><span class="tag">Generative AI</span><span class="tag">User Research</span><span class="tag">Education</span></div>
              <p class="project-name">Gen AI Study Buddy</p>
              <p class="project-desc">12 in-depth interviews exploring how students use, trust, and struggle with GenAI tools for academic learning — with recommendations for ethical integration.</p>
            </div>
          </div>
          <div class="project-card" onclick="openProject('barriers','research')" style="cursor:pointer;">
            <div class="project-thumb t4"><img src="/assets/img/work/work-270c3aa2-1500.webp" srcset="/assets/img/work/work-270c3aa2-800.webp 800w, /assets/img/work/work-270c3aa2-1500.webp 1500w" sizes="(max-width: 768px) 100vw, 900px" alt="Barriers in Exhibition Opportunities" width="1500" height="1000" loading="lazy" decoding="async" /></div>
            <div class="project-info">
              <div class="project-tags"><span class="tag">Qualitative Research</span><span class="tag">Arts</span><span class="tag">Discovery</span></div>
              <p class="project-name">Barriers in Exhibition Opportunities</p>
              <p class="project-desc">Investigated systemic and informational barriers preventing emerging visual artists from accessing exhibition opportunities — the foundational research behind RightWall.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ── AI Projects ── -->
      <div class="cat-panel" id="cat-ai">
        <div class="work-grid">
          <div class="project-card" onclick="openProject('aidesign','ai')" style="cursor:pointer;">
            <div class="project-thumb t2"><img src="/assets/img/work/work-5c6230c9-1500.webp" srcset="/assets/img/work/work-5c6230c9-800.webp 800w, /assets/img/work/work-5c6230c9-1500.webp 1500w" sizes="(max-width: 768px) 100vw, 900px" alt="AI Design Tool Comparison" width="1500" height="1000" loading="lazy" decoding="async" /></div>
            <div class="project-info">
              <div class="project-tags"><span class="tag">AI</span><span class="tag">Comparison</span><span class="tag">Tools</span></div>
              <p class="project-name">AI Design Tool Comparison</p>
              <p class="project-desc">Evaluated AI-powered design tools across output quality, workflow fit, and designer control — to inform smarter adoption decisions.</p>
            </div>
          </div>
          <div class="project-card">
            
            <div class="project-thumb t1"><img src="/assets/img/work/work-d754ab5b-1600.webp" srcset="/assets/img/work/work-d754ab5b-800.webp 800w, /assets/img/work/work-d754ab5b-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="AI-Integrated RightWall" width="1600" height="971" loading="lazy" decoding="async" /><span class="coming-soon-chip">Coming soon</span></div>
            <div class="project-info">
              <div class="project-tags"><span class="tag">AI</span><span class="tag">RightWall</span><span class="tag">Experiment</span></div>
              <p class="project-name">AI-Integrated RightWall</p>
              <p class="project-desc">Explored AI-powered curation to enhance exhibition discovery within RightWall — balancing algorithmic suggestions with artist intent and control.</p>
            </div>
          </div>
          <div class="project-card">
            
            <div class="project-thumb t3"><img src="/assets/img/work/work-02eb2a6f-1500.webp" srcset="/assets/img/work/work-02eb2a6f-800.webp 800w, /assets/img/work/work-02eb2a6f-1500.webp 1500w" sizes="(max-width: 768px) 100vw, 900px" alt="AI Workflow Exploration" width="1500" height="870" loading="lazy" decoding="async" /><span class="coming-soon-chip">Coming soon</span></div>
            <div class="project-info">
              <div class="project-tags"><span class="tag">AI</span><span class="tag">Workflow</span><span class="tag">Process</span></div>
              <p class="project-name">AI Workflow Exploration</p>
              <p class="project-desc">Documented and refined an AI-integrated UX design workflow — testing where AI accelerates without replacing design judgment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    ${footerHTML()}`;
}

export default workHTML;
