import { csNextHTML, footerHTML } from '../shared.js';

function genaiHTML() {
  return `
    <div class="cs-root">
      <button class="cs-back" onclick="goToWork('auto')"><span class="cs-back-arrow">←</span> Back to Work</button>

      <div class="cs-hero">
        <p class="cs-overline">Generative AI · User Research · Education</p>
        <h1 class="cs-title">Gen AI Study Buddy — Understanding how students trust AI</h1>
        <p class="cs-subtitle">As AI tools increasingly influence how students study, this project examined how GenAI can support learning without replacing human understanding — making AI-driven study experiences more adaptive, personalized, and trustworthy.</p>
      </div>

      <div class="cs-meta">
        <div class="cs-meta-item"><p class="cs-meta-label">Role</p><p class="cs-meta-value">UX Researcher</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Year</p><p class="cs-meta-value">2024</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Timeframe</p><p class="cs-meta-value">14 Weeks</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Type</p><p class="cs-meta-value">Research · AI Education</p></div>
      </div>

      <div class="cs-hero-img" style="margin-bottom:56px;"><img src="/assets/img/work/work-5058dc6c-1600.webp" srcset="/assets/img/work/work-5058dc6c-800.webp 800w, /assets/img/work/work-5058dc6c-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="Gen AI Study Buddy — cover" width="1600" height="1200" loading="lazy" decoding="async" /></div>

      <div class="cs-section">
        <p class="cs-section-label">Problem</p>
        <p class="cs-section-title">Why students struggle to rely on GenAI</p>
        <p class="cs-body">Students actively use generative AI tools for studying but struggle to trust them for deeper understanding. <strong>Unclear accuracy, weak guidance, and uncertainty around ethical use</strong> prevent GenAI from becoming a reliable study companion — making it a quick shortcut rather than a genuine learning tool.</p>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Research Scope</p>
        <p class="cs-section-title">Defining how GenAI fits into academic life</p>
        <p class="cs-body">Before starting research, the problem space was defined by examining how GenAI fits into students' academic lives. The study was framed around three guiding questions:</p>
        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Question 01</p>
            <p class="cs-pain-title">Current usage</p>
            <p class="cs-pain-desc">How do students currently use GenAI tools for studying?</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Question 02</p>
            <p class="cs-pain-title">Benefits & frustrations</p>
            <p class="cs-pain-desc">What benefits do they experience, and what frustrations limit trust?</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Question 03</p>
            <p class="cs-pain-title">Responsible integration</p>
            <p class="cs-pain-desc">How can AI systems be integrated responsibly into academic learning?</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Focus Group</p>
            <p class="cs-pain-title">Management students at TJU</p>
            <p class="cs-pain-desc">Research focused on management students at Thomas Jefferson University — tech-savvy, academically engaged, and frequently exposed to digital study platforms.</p>
          </div>
        </div>
<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/genai/genai-3a60a5f7-1167.webp" srcset="/assets/img/case/genai/genai-3a60a5f7-800.webp 800w, /assets/img/case/genai/genai-3a60a5f7-1167.webp 1167w" sizes="(max-width: 768px) 100vw, 900px" alt="Gen AI Study Buddy — Users, Goals, Environments Venn diagram" width="1167" height="826" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Secondary Research</p>
        <p class="cs-section-title">Understanding existing knowledge and gaps</p>
        <p class="cs-body">I began with secondary research, reviewing academic journals and case studies related to AI tutoring, personalized learning, and engagement models. I used the <strong>Known–Unknown framework</strong> to organize what was already understood and where gaps existed:</p>
        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Known Knowns</p>
            <p class="cs-pain-title">Existing AI tutoring features</p>
            <p class="cs-pain-desc">Established understanding of what AI tutoring tools currently offer and how they function.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Known Unknowns</p>
            <p class="cs-pain-title">Student perceptions of reliability</p>
            <p class="cs-pain-desc">Student trust and perception of AI accuracy had not been deeply studied in academic contexts.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Unknown Knowns</p>
            <p class="cs-pain-title">Hidden behavioral patterns</p>
            <p class="cs-pain-desc">Behavioral patterns around AI use that surfaced only through qualitative interviews — not visible in existing literature.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Unknown Unknowns</p>
            <p class="cs-pain-title">Insights discovered through inquiry</p>
            <p class="cs-pain-desc">Deeper insights yet to be uncovered — requiring open-ended exploration rather than hypothesis testing.</p>
          </div>
        </div>
<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/genai/genai-f8e15bd7-1382.webp" srcset="/assets/img/case/genai/genai-f8e15bd7-800.webp 800w, /assets/img/case/genai/genai-f8e15bd7-1382.webp 1382w" sizes="(max-width: 768px) 100vw, 900px" alt="Gen AI Study Buddy — Known/Unknown secondary research synthesis framework" width="1382" height="1155" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Primary Research</p>
        <p class="cs-section-title">12 in-depth interviews</p>
        <p class="cs-body">I conducted <strong>12 detailed interviews</strong> focused on how students use AI tools to study, validate answers, and complete assignments. Each conversation captured benefits and frustrations, prompting habits, expectations from AI tutors, and direct quotes reflecting emotions and concerns.</p>

        <div class="cs-quote">
          <p class="cs-quote-text">"I'm scared of relying on it too much and losing my own thinking."</p>
          <p class="cs-quote-attr">Interview participant — concern around critical thinking</p>
        </div>
        <div class="cs-quote">
          <p class="cs-quote-text">"Sometimes I know what I want to ask, but I don't know how to phrase it."</p>
          <p class="cs-quote-attr">Interview participant — prompting difficulty</p>
        </div>

        <div class="cs-finding">
          <p class="cs-finding-label">Pattern from interviews</p>
          <p class="cs-finding-text">A consistent pattern emerged: students found GenAI helpful for <strong>quick information</strong> but unreliable for <strong>deeper understanding</strong>. Many double-checked responses through traditional methods, and several struggled to phrase prompts that produced accurate results.</p>
        </div>

<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/genai/genai-01e9125e-1600.webp" srcset="/assets/img/case/genai/genai-01e9125e-800.webp 800w, /assets/img/case/genai/genai-01e9125e-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="Gen AI Study Buddy — interview synthesis and affinity mapping" width="1600" height="1026" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Define</p>
        <p class="cs-section-title">Framing the opportunity</p>
        <div class="cs-hmw">
          <p class="cs-hmw-label">How Might We</p>
          <p class="cs-hmw-text">Empower management students and faculty to efficiently leverage <em>AI models for time-saving, effective learning, and ethical academic support</em> — considering GenAI's limitations — to improve learning outcomes and overall academic success?</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Recommendations</p>
        <p class="cs-section-title">Guidelines for ethical and effective GenAI use</p>
        <p class="cs-body">Based on research findings, I proposed practical steps for both students and faculty to use GenAI responsibly and effectively:</p>

        <div class="cs-features">
          <div class="cs-feature">
            <span class="cs-feature-num">01</span>
            <div><p class="cs-feature-title">Research and understand current usage</p><p class="cs-feature-desc">Analyze how students interact with GenAI tools across different subjects to identify patterns and gaps.</p></div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">02</span>
            <div><p class="cs-feature-title">Identify common use cases</p><p class="cs-feature-desc">Document where GenAI adds genuine value — summarizing notes, test prep, ideation — versus where it falls short.</p></div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">03</span>
            <div><p class="cs-feature-title">Organize workshops and seminars</p><p class="cs-feature-desc">Train students and faculty on prompt engineering, ethical use, and fact-checking techniques.</p></div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">04</span>
            <div><p class="cs-feature-title">Provide ongoing support</p><p class="cs-feature-desc">Offer guidance through campus learning centers or online communities for continued skill development.</p></div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">05</span>
            <div><p class="cs-feature-title">Monitor and evaluate impact</p><p class="cs-feature-desc">Regularly assess how AI integration influences study habits, trust, and academic outcomes through feedback and analytics.</p></div>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Conclusion</p>
        <p class="cs-section-title">Trust is the biggest barrier</p>
        <p class="cs-body">This study showed that while students actively use GenAI tools, <strong>trust remains the biggest barrier</strong> to deeper reliance. Convenience alone is not enough — students need clarity, guidance, and confidence to use AI as meaningful learning support rather than a risky shortcut.</p>
        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Finding 01</p>
            <p class="cs-pain-title">Starting point, not authority</p>
            <p class="cs-pain-desc">Students use GenAI mainly as a starting point, not a final authority on information.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Finding 02</p>
            <p class="cs-pain-title">Constant double-checking</p>
            <p class="cs-pain-desc">Lack of trust leads to constant verification through traditional sources, reducing efficiency.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Finding 03</p>
            <p class="cs-pain-title">Prompting limits quality</p>
            <p class="cs-pain-desc">Difficulty formulating prompts limits the quality and usefulness of AI responses.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Finding 04</p>
            <p class="cs-pain-title">Ethical anxiety</p>
            <p class="cs-pain-desc">Unclear ethical boundaries create anxiety and inconsistent usage patterns among students.</p>
          </div>
        </div>
      </div>

      ${csNextHTML('rightwall','RightWall — Exhibition Matching Platform',['Mobile App','Discovery','End-to-End UX'])}
    </div>
    ${footerHTML()}`;
}

export default genaiHTML;
