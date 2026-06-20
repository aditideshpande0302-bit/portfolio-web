import { homeFooterHTML } from './shared.js';

function workHTML() {
  return `
    <div class="home-root">
    <div class="work-root">
      <div class="work-layout">
        <aside class="work-sidebar">
          <h2 class="work-page__heading">More Projects</h2>
          <p class="work-page__subtext">A collection of projects across accessibility, UI/UX design, research, and AI, showcasing different challenges, ideas, and design solutions.</p>
          <nav class="work-cat-nav" aria-label="Project categories">
            <button type="button" class="work-cat-nav__item is-active" data-cat="ai" onclick="switchWorkCat('ai')">AI</button>
            <button type="button" class="work-cat-nav__item" data-cat="all" onclick="switchWorkCat('all')">UI UX Design</button>
            <button type="button" class="work-cat-nav__item" data-cat="research" onclick="switchWorkCat('research')">Research</button>
            <button type="button" class="work-cat-nav__item" data-cat="accessibility" onclick="switchWorkCat('accessibility')">Accessibility</button>
          </nav>
        </aside>

        <div class="work-stack" data-card-count="8">
          <!-- AI -->
          <figure class="work-card-figure" data-cat="ai">
            <div class="project-card" onclick="openProject('aidesign','ai')">
              <div class="project-thumb t2"><img src="/assets/img/work/work-5c6230c9-1500.webp" srcset="/assets/img/work/work-5c6230c9-800.webp 800w, /assets/img/work/work-5c6230c9-1500.webp 1500w" sizes="(max-width: 768px) 100vw, 900px" alt="AI Design Tool Comparison" width="1500" height="1000" loading="lazy" decoding="async" /></div>
              <div class="project-info">
                <div class="project-tags"><span class="tag">AI</span><span class="tag">Comparison</span><span class="tag">Tools</span></div>
                <p class="project-name">AI Design Tool Comparison</p>
                <p class="project-desc">Evaluated AI-powered design tools across output quality, workflow fit, and designer control — to inform smarter adoption decisions.</p>
                <button class="project-card__link" onclick="event.stopPropagation(); openProject('aidesign','ai')">View case study</button>
              </div>
            </div>
          </figure>
          <figure class="work-card-figure" data-cat="ai">
            <div class="project-card project-card--soon">
              <div class="project-thumb t1"><img src="/assets/img/work/ai-rightwall-mockup-1600.webp" srcset="/assets/img/work/ai-rightwall-mockup-800.webp 800w, /assets/img/work/ai-rightwall-mockup-1600.webp 1024w" sizes="(max-width: 768px) 100vw, 900px" alt="AI-Integrated RightWall — AI call generator mockup" width="1024" height="768" loading="lazy" decoding="async" /><span class="coming-soon-chip">Coming soon</span></div>
              <div class="project-info">
                <div class="project-tags"><span class="tag">AI</span><span class="tag">RightWall</span><span class="tag">Experiment</span></div>
                <p class="project-name">AI-Integrated RightWall</p>
                <p class="project-desc">Explored AI-powered curation to enhance exhibition discovery within RightWall — balancing algorithmic suggestions with artist intent and control.</p>
              </div>
            </div>
          </figure>
          <figure class="work-card-figure" data-cat="ai">
            <div class="project-card project-card--soon">
              <div class="project-thumb t3"><img src="/assets/img/work/work-02eb2a6f-1500.webp" srcset="/assets/img/work/work-02eb2a6f-800.webp 800w, /assets/img/work/work-02eb2a6f-1500.webp 1500w" sizes="(max-width: 768px) 100vw, 900px" alt="AI Workflow Exploration" width="1500" height="870" loading="lazy" decoding="async" /><span class="coming-soon-chip">Coming soon</span></div>
              <div class="project-info">
                <div class="project-tags"><span class="tag">AI</span><span class="tag">Workflow</span><span class="tag">Process</span></div>
                <p class="project-name">AI Workflow Exploration</p>
                <p class="project-desc">Documented and refined an AI-integrated UX design workflow — testing where AI accelerates without replacing design judgment.</p>
              </div>
            </div>
          </figure>

          <!-- UI/UX -->
          <figure class="work-card-figure" data-cat="all">
            <div class="project-card" onclick="openProject('calmnest','all')">
              <div class="project-thumb t5"><img src="/assets/img/work/calmnest-mockup-1600.webp" srcset="/assets/img/work/calmnest-mockup-800.webp 800w, /assets/img/work/calmnest-mockup-1600.webp 1024w" sizes="(max-width: 768px) 100vw, 900px" alt="CalmNest Meditation App" width="1024" height="768" loading="lazy" decoding="async" /></div>
              <div class="project-info">
                <div class="project-tags"><span class="tag">Wellness</span><span class="tag">Mobile</span><span class="tag">Habit Design</span></div>
                <p class="project-name">CalmNest Meditation App</p>
                <p class="project-desc">Mindfulness app built on habit-forming principles — streak rewards, daily recommendations, and progress tracking to build a consistent practice.</p>
                <button class="project-card__link" onclick="event.stopPropagation(); openProject('calmnest','all')">View case study</button>
              </div>
            </div>
          </figure>
          <figure class="work-card-figure" data-cat="all">
            <div class="project-card project-card--soon">
              <div class="project-thumb t2"><img src="/assets/img/work/work-2eea364d-1600.webp" srcset="/assets/img/work/work-2eea364d-800.webp 800w, /assets/img/work/work-2eea364d-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="Gamification App" width="1600" height="971" loading="lazy" decoding="async" /><span class="coming-soon-chip">Coming soon</span></div>
              <div class="project-info">
                <div class="project-tags"><span class="tag">Engagement</span><span class="tag">Mobile</span><span class="tag">Gamification</span></div>
                <p class="project-name">Gamification App</p>
                <p class="project-desc">Explored gamification mechanics to drive habit engagement and sustained user motivation.</p>
              </div>
            </div>
          </figure>

          <!-- Research -->
          <figure class="work-card-figure" data-cat="research">
            <div class="project-card" onclick="openProject('genai','research')">
              <div class="project-thumb t6"><img src="/assets/img/work/work-5058dc6c-1600.webp" srcset="/assets/img/work/work-5058dc6c-800.webp 800w, /assets/img/work/work-5058dc6c-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="Gen AI Study Buddy" width="1600" height="1200" loading="lazy" decoding="async" /></div>
              <div class="project-info">
                <div class="project-tags"><span class="tag">Generative AI</span><span class="tag">User Research</span><span class="tag">Education</span></div>
                <p class="project-name">Gen AI Study Buddy</p>
                <p class="project-desc">12 in-depth interviews exploring how students use, trust, and struggle with GenAI tools for academic learning — with recommendations for ethical integration.</p>
                <button class="project-card__link" onclick="event.stopPropagation(); openProject('genai','research')">View case study</button>
              </div>
            </div>
          </figure>
          <figure class="work-card-figure" data-cat="research">
            <div class="project-card" onclick="openProject('barriers','research')">
              <div class="project-thumb t4"><img src="/assets/img/work/work-270c3aa2-1500.webp" srcset="/assets/img/work/work-270c3aa2-800.webp 800w, /assets/img/work/work-270c3aa2-1500.webp 1500w" sizes="(max-width: 768px) 100vw, 900px" alt="Barriers in Exhibition Opportunities" width="1500" height="1000" loading="lazy" decoding="async" /></div>
              <div class="project-info">
                <div class="project-tags"><span class="tag">Qualitative Research</span><span class="tag">Arts</span><span class="tag">Discovery</span></div>
                <p class="project-name">Barriers in Exhibition Opportunities</p>
                <p class="project-desc">Investigated systemic and informational barriers preventing emerging visual artists from accessing exhibition opportunities — the foundational research behind RightWall.</p>
                <button class="project-card__link" onclick="event.stopPropagation(); openProject('barriers','research')">View case study</button>
              </div>
            </div>
          </figure>

          <!-- Accessibility -->
          <figure class="work-card-figure" data-cat="accessibility">
            <div class="project-card" onclick="openProject('pathway','accessibility')">
              <div class="project-thumb t2"><img src="/assets/img/work/pathway-mockup-1600.webp" srcset="/assets/img/work/pathway-mockup-800.webp 800w, /assets/img/work/pathway-mockup-1600.webp 1024w" sizes="(max-width: 768px) 100vw, 900px" alt="Pathway" width="1024" height="682" loading="lazy" decoding="async" /></div>
              <div class="project-info">
                <div class="project-tags"><span class="tag">Research</span><span class="tag">Accessibility Design</span><span class="tag">WCAG Informed</span></div>
                <p class="project-name">Pathway</p>
                <p class="project-desc">Accessibility-first transit companion for red-green color-blind commuters, achieving 7.24:1 contrast compliance through WCAG-guided color validation.</p>
                <button class="project-card__link" onclick="event.stopPropagation(); openProject('pathway','accessibility')">View case study</button>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
    ${homeFooterHTML()}
    </div>`;
}

export default workHTML;
