import { homeFooterHTML, csBackHTML, csGoToTopHTML } from '../shared.js';

function purHTML() {
  return `
    <div class="home-root">
    <div class="cs-root cs-pur">

      ${csBackHTML()}

      <div class="cs-rw-hero">
        <div class="cs-rw-hero__content">
          <p class="cs-overline">Ecommerce · Web · Responsive</p>
          <h1 class="cs-title">PUR Water Purifier — Ecommerce Redesign</h1>
          <p class="cs-subtitle">Redesigning the PUR desktop experience to enable direct purchasing, drive first-time conversions, and build retention through a filter reminder system.</p>
          <div class="cs-meta cs-rw-hero__meta">
            <div class="cs-meta-item"><p class="cs-meta-label">Role</p><p class="cs-meta-value">UI/UX Designer</p></div>
            <div class="cs-meta-item"><p class="cs-meta-label">Timeline</p><p class="cs-meta-value">15 Weeks</p></div>
            <div class="cs-meta-item"><p class="cs-meta-label">Platform</p><p class="cs-meta-value">Web, Responsive</p></div>
            <div class="cs-meta-item"><p class="cs-meta-label">Tools</p><p class="cs-meta-value">Figma</p></div>
          </div>
        </div>
        <div class="cs-rw-hero__visual">
          <div class="cs-hero-img">
            <img src="./assets/img/featured/water-purifier-mockup.png" alt="PUR Water Purifier — ecommerce redesign" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Overview</p>
        <div class="cs-two-col">
          <div>
            <p class="cs-section-title">The broken journey</p>
            <p class="cs-body">PUR's website was purely informational. Users explored products, then got redirected to Amazon or Target to buy. Every sale left the PUR ecosystem — taking retention and customer data with it.</p>
          </div>
          <div>
            <p class="cs-section-title">Three-part Solution</p>
            <p class="cs-body">E-commerce integration for direct purchasing. SaaS-style onboarding with a 20% first-purchase offer. And a filter reminder system that keeps customers coming back.</p>
          </div>
        </div>

<div class="cs-img-wrap cs-img-wrap--sm" style="margin-bottom:32px;"><img src="/assets/img/case/pur/pur-d86c4e6a-1180.webp" srcset="/assets/img/case/pur/pur-d86c4e6a-800.webp 800w, /assets/img/case/pur/pur-d86c4e6a-1180.webp 1180w" sizes="(max-width: 768px) 100vw, 900px" alt="PUR — broken purchase flow diagram" width="1180" height="379" loading="lazy" decoding="async" /></div>

        <div class="cs-stats">
          <div class="cs-stat">
            <p class="cs-stat-num">37%</p>
            <p class="cs-stat-label">Baymard heuristic evaluation score before redesign</p>
          </div>
          <div class="cs-stat">
            <p class="cs-stat-num">87%</p>
            <p class="cs-stat-label">After redesign — 50-point improvement across key e-commerce flows</p>
          </div>
          <div class="cs-stat">
            <p class="cs-stat-num">+50pt</p>
            <p class="cs-stat-label">Overall heuristic score improvement from poor-to-mediocre to consistently good</p>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Research</p>
        <p class="cs-section-title">Heuristic evaluation using Baymard guidelines</p>
        <p class="cs-body">I evaluated the existing PUR website against Baymard's e-commerce usability guidelines — a structured framework used to identify friction across the shopping journey.</p>

        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Issue 01 — Critical</p>
            <p class="cs-pain-title">No direct purchase flow</p>
            <p class="cs-pain-desc">Users can only view products on PUR.com and are redirected to external retailers (Amazon, Walmart) to complete the purchase.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Issue 02 — High</p>
            <p class="cs-pain-title">Limited user engagement</p>
            <p class="cs-pain-desc">No logged-in experience, no saved orders, no personalization. Zero reasons to return to PUR.com after a purchase.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Issue 03 — Medium</p>
            <p class="cs-pain-title">Ineffective product pages</p>
            <p class="cs-pain-desc">Pages highlight technical details but lack clear calls to action. Users know what the product does but don't know how to buy it here.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Issue 04 — Medium</p>
            <p class="cs-pain-title">No filter tracking</p>
            <p class="cs-pain-desc">Users forget when to replace filters — the product's core consumable. No touchpoint to remind them, creating churn to competitors.</p>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Design</p>
        <p class="cs-section-title">Three solutions for the broken journey</p>

        <div class="cs-features">
          <div class="cs-feature">
            <span class="cs-feature-num">01</span>
            <div>
              <p class="cs-feature-title">E-commerce integration — Buy direct</p>
              <p class="cs-feature-desc">Product pages now have Add to Cart and Buy Now actions. A cart review page lets users edit quantities and see totals. A full checkout flow (shipping → payment → review) keeps everything on PUR.com.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">02</span>
            <div>
              <p class="cs-feature-title">SaaS onboarding — First-purchase offer</p>
              <p class="cs-feature-desc">New visitors see a welcome pop-up offering 20% off their first purchase and an email subscription option. The homepage highlights a Best Offers section to accelerate conversion without a search.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">03</span>
            <div>
              <p class="cs-feature-title">Filter Reminder — Built-in retention</p>
              <p class="cs-feature-desc">Users set a reminder for their filter replacement cycle via email or SMS. A dedicated reminder page explains the value. The setup form appears on the order confirmation page — one click after purchase.</p>
            </div>
          </div>
        </div>

<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/pur/pur-5ce1467f-1600.webp" srcset="/assets/img/case/pur/pur-5ce1467f-800.webp 800w, /assets/img/case/pur/pur-5ce1467f-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="PUR — ecommerce integration: cart and checkout screens" width="1600" height="851" loading="lazy" decoding="async" /></div>
<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/pur/pur-3f926a27-1600.webp" srcset="/assets/img/case/pur/pur-3f926a27-800.webp 800w, /assets/img/case/pur/pur-3f926a27-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="PUR — SaaS onboarding: 20% welcome offer and product page" width="1600" height="851" loading="lazy" decoding="async" /></div>
<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/pur/pur-bd176912-1600.webp" srcset="/assets/img/case/pur/pur-bd176912-800.webp 800w, /assets/img/case/pur/pur-bd176912-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="PUR — filter reminder: homepage and filter reminder page" width="1600" height="851" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Results</p>
        <p class="cs-section-title">From 9% to 56%</p>
        <p class="cs-body">Heuristic evaluation scores across product discovery, product pages, and checkout shifted from poor-to-mediocre to consistently good performance after redesign.</p>
        <p class="cs-body">Before vs after heuristic evaluation score — showing improvement in usability across all key areas.</p>
        <div class="cs-img-wrap" style="margin-top:16px;margin-bottom:0;padding:20px;"><img src="/assets/img/case/pur/pur-c94ebefc-1600.webp" srcset="/assets/img/case/pur/pur-c94ebefc-800.webp 800w, /assets/img/case/pur/pur-c94ebefc-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="PUR Water Purifier — before and after heuristic evaluation score" width="1600" height="557" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Reflections</p>
        <p class="cs-section-title">Thinking beyond visual design</p>
        <div class="cs-reflections">
          <div class="cs-reflection">
            <span class="cs-reflection-icon">🧪</span>
            <div>
              <p class="cs-reflection-title">System-level thinking matters</p>
              <p class="cs-reflection-desc">Adding a cart is not just a UI decision — it touches inventory, payment processing, tax calculation, and fulfilment. Understanding these dependencies shaped every design decision.</p>
            </div>
          </div>
          <div class="cs-reflection">
            <span class="cs-reflection-icon">🔍</span>
            <div>
              <p class="cs-reflection-title">The filter reminder is the real retention play</p>
              <p class="cs-reflection-desc">E-commerce is table stakes. The filter reminder is what makes PUR different — it creates a recurring relationship. I'd push this feature further in a V2.</p>
            </div>
          </div>
          <div class="cs-reflection">
            <span class="cs-reflection-icon">🤝</span>
            <div>
              <p class="cs-reflection-title">Heuristic evaluation is a start, not a conclusion</p>
              <p class="cs-reflection-desc">Baymard gave a structured baseline, but real usability testing with actual PUR shoppers would reveal the friction points heuristics can't predict.</p>
            </div>
          </div>
        </div>
      </div>

      ${csGoToTopHTML()}

    </div>
    ${homeFooterHTML()}
    </div>`;
}

export default purHTML;
