import { csNextHTML, footerHTML } from '../shared.js';

function aidesignHTML() {
  return `
    <div class="cs-root">
      <button class="cs-back" onclick="goToWork('auto')"><span class="cs-back-arrow">←</span> Back to Work</button>

      <div class="cs-hero">
        <p class="cs-overline">AI · Comparison · Tools</p>
        <h1 class="cs-title">Can AI tools handle identity-driven products? A RightWall stress test.</h1>
        <p class="cs-subtitle">Five AI tools. Three screens. One identity-driven product. An evaluation of how well current AI design tools handle aesthetic specificity when given only text prompts.</p>
      </div>

      <div class="cs-meta">
        <div class="cs-meta-item"><p class="cs-meta-label">Duration</p><p class="cs-meta-value">1–2 Weeks</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Tools Tested</p><p class="cs-meta-value">5 AI tools</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Screens</p><p class="cs-meta-value">3 screens</p></div>
        <div class="cs-meta-item"><p class="cs-meta-label">Input</p><p class="cs-meta-value">Text prompts only</p></div>
      </div>

      <div class="cs-hero-img" style="margin-bottom:56px;"><img src="/assets/img/work/work-5c6230c9-1500.webp" srcset="/assets/img/work/work-5c6230c9-800.webp 800w, /assets/img/work/work-5c6230c9-1500.webp 1500w" sizes="(max-width: 768px) 100vw, 900px" alt="AI Design Tool Comparison — cover" width="1500" height="1000" loading="lazy" decoding="async" /></div>

      <div class="cs-section">
        <p class="cs-section-label">01 — The Product</p>
        <p class="cs-section-title">What is RightWall?</p>
        <p class="cs-body">A mobile app for emerging visual artists to discover exhibitions that match their artistic style. Already at high-fidelity — dark editorial palette, expressive typography, arts-world aesthetic. That specificity makes it a meaningful AI stress test.</p>

<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/aidesign/aidesign-e696f491-1600.webp" srcset="/assets/img/case/aidesign/aidesign-e696f491-800.webp 800w, /assets/img/case/aidesign/aidesign-e696f491-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="RightWall original designs — comparison baseline" width="1600" height="2108" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">02 — Approach</p>
        <p class="cs-section-title">How I scored</p>
        <p class="cs-body">Scoring rubrics were defined before any tool was tested — what a strong output looks like and what a weak one looks like for each criterion. This removes bias from the evaluation. All five tools received the same text prompt.</p>

        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Criterion 01</p>
            <p class="cs-pain-title">Output Quality</p>
            <p class="cs-pain-desc">Does the generated output preserve RightWall's exact aesthetic, type scale, and card hierarchy — or does it default to generic SaaS patterns?</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Criterion 02</p>
            <p class="cs-pain-title">Consistency</p>
            <p class="cs-pain-desc">Are button styles, type sizes, and color usage consistent across the home screen, listing view, and onboarding flow — or does each screen feel isolated?</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Criterion 03</p>
            <p class="cs-pain-title">Editability</p>
            <p class="cs-pain-desc">How easy is it to clean up, adjust, or continue working with the generated output in a normal design workflow?</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Criterion 04</p>
            <p class="cs-pain-title">Edge Cases</p>
            <p class="cs-pain-desc">How does the tool handle unprompted additions — irrelevant screens, incorrect components, or features not mentioned in the prompt?</p>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">03 — Findings</p>
        <p class="cs-section-title">What I found</p>

        <div class="cs-decision">
          <p class="cs-decision-num">Finding 01 — Output Quality</p>
          <p class="cs-decision-title">Every tool defaulted to bright SaaS aesthetics</p>
          <p class="cs-decision-desc">Every tool ignored RightWall's dark editorial aesthetic. AI defaults to the most common pattern in its training data — bright SaaS UIs — regardless of the prompt.</p>
        </div>
        <div class="cs-decision">
          <p class="cs-decision-num">Finding 02 — Consistency</p>
          <p class="cs-decision-title">Each screen was treated in isolation</p>
          <p class="cs-decision-desc">Every tool treated each screen independently. Button styles, type sizes, and color usage shifted between the home screen, listing, and onboarding flow — with no cross-screen coherence.</p>
        </div>
        <div class="cs-decision">
          <p class="cs-decision-num">Finding 03 — Editability</p>
          <p class="cs-decision-title">Ecosystem fit matters more than output quality</p>
          <p class="cs-decision-desc">Figma Make scored highest here — it outputs directly into Figma. Lovable and Google Stitch produced environments that were faster to redesign from scratch than to clean up.</p>
        </div>
        <div class="cs-decision">
          <p class="cs-decision-num">Finding 04 — Edge Cases</p>
          <p class="cs-decision-title">All tools used perfect placeholder data and added irrelevant screens</p>
          <p class="cs-decision-desc">Multiple tools added screens not mentioned in the prompt — social feeds, achievement badges, marketplace views. None of these were asked for and none fit the product.</p>
        </div>

        <div class="cs-finding">
          <p class="cs-finding-label">Key Insight</p>
          <p class="cs-finding-text">No tool performed well across every criterion. AI optimises for convention, not character — every tool defaulted to bright SaaS aesthetics. All outputs required significant manual rework.</p>
        </div>

        <div class="cs-img-wrap" style="margin-bottom:24px;"><img src="/assets/img/case/aidesign/aidesign-d504fcfc-1600.webp" srcset="/assets/img/case/aidesign/aidesign-d504fcfc-800.webp 800w, /assets/img/case/aidesign/aidesign-d504fcfc-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="Figma Make AI output — onboarding screens" width="1600" height="808" loading="lazy" decoding="async" /></div>
        <div class="cs-img-wrap" style="margin-bottom:24px;"><img src="/assets/img/case/aidesign/aidesign-589213af-1600.webp" srcset="/assets/img/case/aidesign/aidesign-589213af-800.webp 800w, /assets/img/case/aidesign/aidesign-589213af-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="Figma Make AI output — discovery and home screens" width="1600" height="1666" loading="lazy" decoding="async" /></div>
        <div class="cs-img-wrap" style="margin-bottom:0;"><img src="/assets/img/case/aidesign/aidesign-f897b13a-1536.webp" srcset="/assets/img/case/aidesign/aidesign-f897b13a-800.webp 800w, /assets/img/case/aidesign/aidesign-f897b13a-1536.webp 1536w" sizes="(max-width: 768px) 100vw, 900px" alt="Google Stitch AI output — comparison" width="1536" height="1377" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">04 — Tool Breakdown</p>
        <p class="cs-section-title">Tool by tool</p>

        <div class="tool-table">
          <div class="tool-row tool-best">
            <div class="tool-name-col">
              <p class="tool-name-label">Tool</p>
              <p class="tool-name">Figma Make</p>
              <span class="tool-badge badge-best">★ Best overall</span>
            </div>
            <div class="tool-verdict-col">
              <p class="tool-verdict">Best ecosystem fit</p>
            </div>
            <div class="tool-desc-col">
              <p class="tool-desc">Lives inside Figma — outputs are manageable and immediately accessible in the design workflow. Still defaulted to light, generic aesthetics. Strongest for workflow integration even if visual quality was off.</p>
            </div>
          </div>

          <div class="tool-row">
            <div class="tool-name-col">
              <p class="tool-name-label">Tool</p>
              <p class="tool-name">UX Pilot</p>
              <span class="tool-badge">Mid-performer</span>
            </div>
            <div class="tool-verdict-col">
              <p class="tool-verdict">Consistent mid-performer</p>
            </div>
            <div class="tool-desc-col">
              <p class="tool-desc">Good speed. Processed functional requirements but ignored aesthetic context — exhibition cards looked like real estate listings. Reliable but not identity-aware.</p>
            </div>
          </div>

          <div class="tool-row">
            <div class="tool-name-col">
              <p class="tool-name-label">Tool</p>
              <p class="tool-name">Visily AI</p>
              <span class="tool-badge">Speed penalty</span>
            </div>
            <div class="tool-verdict-col">
              <p class="tool-verdict">Fast to generate, slow to fix</p>
            </div>
            <div class="tool-desc-col">
              <p class="tool-desc">Added decorative elements with no relationship to RightWall's restrained style. Speed advantage was cancelled by the rework required to use the output.</p>
            </div>
          </div>

          <div class="tool-row">
            <div class="tool-name-col">
              <p class="tool-name-label">Tool</p>
              <p class="tool-name">Lovable</p>
              <span class="tool-badge">Wrong context</span>
            </div>
            <div class="tool-verdict-col">
              <p class="tool-verdict">Wrong context for this type of work</p>
            </div>
            <div class="tool-desc-col">
              <p class="tool-desc">A code generation tool — outputs are code environments, not design files. Weakest cross-screen consistency of all five tools tested.</p>
            </div>
          </div>

          <div class="tool-row tool-worst">
            <div class="tool-name-col">
              <p class="tool-name-label">Tool</p>
              <p class="tool-name">Google Stitch</p>
              <span class="tool-badge badge-worst">✗ Lowest overall</span>
            </div>
            <div class="tool-verdict-col">
              <p class="tool-verdict">Most generic output</p>
            </div>
            <div class="tool-desc-col">
              <p class="tool-desc">Applied Material Design defaults regardless of prompt. Generated irrelevant screens: social sharing, achievements, maps. Furthest from the product's actual identity.</p>
            </div>
          </div>
        </div>

      </div>

      <div class="cs-section">
        <p class="cs-section-label">05 — Recommendations</p>
        <p class="cs-section-title">What I would do differently</p>

        <div class="cs-features">
          <div class="cs-feature">
            <span class="cs-feature-num">01</span>
            <div>
              <p class="cs-feature-title">Use AI tools at wireframe stage only</p>
              <p class="cs-feature-desc">Not at high-fidelity where visual identity is the primary variable. AI performs best before design system constraints apply.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">02</span>
            <div>
              <p class="cs-feature-title">Figma Make is the only viable tool for Figma-based workflows</p>
              <p class="cs-feature-desc">Ecosystem fit beats output quality. If your workflow lives in Figma, Figma Make is the only tool that doesn't add a context switch.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">03</span>
            <div>
              <p class="cs-feature-title">Provide visual references alongside text prompts</p>
              <p class="cs-feature-desc">Mood boards, palette exports, annotated screenshots. Text alone is insufficient for identity-driven products.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">04</span>
            <div>
              <p class="cs-feature-title">Treat AI output as research signal, not design file</p>
              <p class="cs-feature-desc">Use it to quickly explore structural options or layout hypotheses — not as a file to clean up and ship.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">05</span>
            <div>
              <p class="cs-feature-title">Document your design system explicitly</p>
              <p class="cs-feature-desc">So AI tools can eventually read it. The more structured your system, the closer AI outputs will come to your actual product.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Conclusion</p>
        <p class="cs-section-title">AI tools are useful for speed — not for identity</p>

        <div class="cs-hmw" style="margin-bottom:32px;">
          <p class="cs-hmw-label">Core Finding</p>
          <p class="cs-hmw-text"><em>AI tools optimise for the average. When your product is built for the specific — for a community, a culture, a context — the average is the wrong answer every time.</em></p>
        </div>

        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Takeaway 01</p>
            <p class="cs-pain-title">Speed is conditional</p>
            <p class="cs-pain-desc">Real only at layout exploration — before design system constraints apply. At high-fidelity, the time saved generating is spent fixing.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Takeaway 02</p>
            <p class="cs-pain-title">Identity can't be prompted</p>
            <p class="cs-pain-desc">No tool came close to RightWall's aesthetic from text input alone. Visual identity requires visual reference, not just description.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Takeaway 03</p>
            <p class="cs-pain-title">Ecosystem fit wins</p>
            <p class="cs-pain-desc">Figma Make won because it lives where the work happens. The best tool is the one that doesn't break your workflow.</p>
          </div>
        </div>
      </div>

      ${csNextHTML('rightwall','RightWall — Exhibition Matching Platform',['Mobile App','Discovery','End-to-End UX'])}
    </div>
    ${footerHTML()}`;
}

export default aidesignHTML;
