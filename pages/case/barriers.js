import { homeFooterHTML, csBackToWorkHTML, csGoToTopHTML } from '../shared.js';

function barriersHTML() {
  return `
    <div class="home-root">
    <div class="cs-root cs-barriers">

      ${csBackToWorkHTML()}

      <div class="cs-rw-hero">
        <div class="cs-rw-hero__content">
          <p class="cs-overline">Qualitative Research · Arts · User Interviews</p>
          <h1 class="cs-title">Barriers in Exhibition Opportunities for Emerging Artists</h1>
          <p class="cs-subtitle">A research study examining the fragmented landscape for emerging visual artists in Philadelphia — understanding why access to exhibition opportunities remains difficult, and what artists actually need to move forward.</p>
          <div class="cs-meta cs-rw-hero__meta">
            <div class="cs-meta-item"><p class="cs-meta-label">Domain</p><p class="cs-meta-value">Emerging Visual Artists</p></div>
            <div class="cs-meta-item"><p class="cs-meta-label">Location</p><p class="cs-meta-value">Philadelphia, PA</p></div>
            <div class="cs-meta-item"><p class="cs-meta-label">Methods</p><p class="cs-meta-value">Interviews · Secondary Research</p></div>
            <div class="cs-meta-item"><p class="cs-meta-label">Participants</p><p class="cs-meta-value">9 Artists · 2 Stakeholders</p></div>
          </div>
        </div>
        <div class="cs-rw-hero__visual">
          <div class="cs-hero-img">
            <img src="/assets/img/work/work-270c3aa2-1500.webp" srcset="/assets/img/work/work-270c3aa2-800.webp 800w, /assets/img/work/work-270c3aa2-1500.webp 1500w" sizes="(max-width: 768px) 100vw, 900px" alt="Barriers in Exhibition Opportunities — gallery visitor" width="1500" height="1000" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">01 — Problem Space</p>
        <p class="cs-section-title">A fragmented landscape for artists</p>
        <p class="cs-body">The current landscape for artists in Philadelphia is scattered and difficult to navigate. Exhibition opportunities are spread across different platforms, organizations, and informal networks, which makes it hard to see what exists or what is relevant.</p>
        <p class="cs-body">Information moves in an unstructured way through social media posts, last-minute announcements, or personal circles rather than through clear, centralized channels. The process of finding opportunities feels inconsistent and unpredictable.</p>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">02 — Users</p>
        <p class="cs-section-title">Emerging visual artists in Philadelphia</p>
        <p class="cs-body">Neither beginners nor fully established — they're in that middle stage where they're making art consistently, actively looking for exhibitions, and trying to understand how the local art world works.</p>
        <p class="cs-body">Most are navigating everything on their own — searching for calls, updating portfolios, posting on Instagram, hoping something connects. Some are new to the city, some are international artists learning the system for the first time, and some have lived here for years but still feel disconnected.</p>
        <p class="cs-body">What emerged most was a shared sense of uncertainty — not about their art, but about the path forward. They want clarity, direction, and a better understanding of where their work fits.</p>

        <div class="cs-finding">
          <p class="cs-finding-label">Artist Profile</p>
          <p class="cs-finding-text"><strong>Talented, motivated artists who just need support navigating the opportunities around them.</strong> Less than 5 years experience · Actively seeking exhibitions · Based in Philadelphia · Struggling to connect with curators · Frustrated by vague calls · Painters, photographers, printmakers, illustrators</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">03 — Scale of the Problem</p>
        <p class="cs-section-title">How big is the problem?</p>
        <p class="cs-body">The difficulty is not isolated — it affects a major portion of the artist community, with structural inequality built into the system. Only a small fraction of working visual artists ever achieve gallery representation, and Philadelphia accounts for just a fraction of available exhibition opportunities nationally.</p>
<div class="cs-img-wrap" style="margin-bottom:32px;"><img src="/assets/img/case/barriers/barriers-ec08922d-1515.webp" srcset="/assets/img/case/barriers/barriers-ec08922d-800.webp 800w, /assets/img/case/barriers/barriers-ec08922d-1515.webp 1515w" sizes="(max-width: 768px) 100vw, 900px" alt="Exhibition distribution by city — statistics visual" width="1515" height="784" loading="lazy" decoding="async" /></div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">04 — User Journey</p>
        <p class="cs-section-title">Six stages, six pain points</p>
        <p class="cs-body">Artists consistently experienced friction at every stage of finding and applying to exhibitions.</p>

        <div class="cs-features">
          <div class="cs-feature">
            <span class="cs-feature-num">01</span>
            <div>
              <p class="cs-feature-title">Looking for opportunities</p>
              <p class="cs-feature-desc">Artists scan Instagram, newsletters, group chats. Nothing is centralized. Feels uncertain and inconsistent from the very start.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">02</span>
            <div>
              <p class="cs-feature-title">Navigating multiple sources</p>
              <p class="cs-feature-desc">Social media, email lists, spreadsheets — each offers incomplete info. Scattered and time-consuming search process.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">03</span>
            <div>
              <p class="cs-feature-title">Reaching out to connect</p>
              <p class="cs-feature-desc">Artists contact curators and galleries. Responses are inconsistent. Connecting depends entirely on existing networks.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">04</span>
            <div>
              <p class="cs-feature-title">Preparing submission</p>
              <p class="cs-feature-desc">Artists gather images, statements, bios, links — with unclear expectations. Many feel unsure how to present their work effectively.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">05</span>
            <div>
              <p class="cs-feature-title">Submitting application</p>
              <p class="cs-feature-desc">Artists submit and hope everything meets the organizer's expectations. Vague requirements lead to uncertainty.</p>
            </div>
          </div>
          <div class="cs-feature">
            <span class="cs-feature-num">06</span>
            <div>
              <p class="cs-feature-title">Waiting without feedback</p>
              <p class="cs-feature-desc">After submitting, artists wait with no updates or visibility. Lack of clarity leaves the process discouraging.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">05 — Participant Voices</p>
        <p class="cs-section-title">What artists said</p>

        <div class="cs-quote">
          <p class="cs-quote-text">"Financial is the biggest barrier. Many exhibition events have high fees and demand things like a CV."</p>
          <p class="cs-quote-attr">Participant 1</p>
        </div>
        <div class="cs-quote">
          <p class="cs-quote-text">"A lot of people didn't want to show my work because I wasn't part of the Philly art community. I feel like I'm trying to join the cool clique when I'm not the cool kid."</p>
          <p class="cs-quote-attr">Participant 3</p>
        </div>
        <div class="cs-quote">
          <p class="cs-quote-text">"I avoid exhibiting because there's no centralized space to pitch artists that galleries trust or browse regularly."</p>
          <p class="cs-quote-attr">Participant 7</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">06 — Affinity Mapping</p>
        <p class="cs-section-title">Four patterns emerged across interviews</p>
        <p class="cs-body">After grouping insights from all 9 interviews, four consistent themes shaped the direction of this project.</p>

        <div class="cs-pain-grid">
          <div class="cs-pain-card">
            <p class="cs-pain-num">Theme 01</p>
            <p class="cs-pain-title">Style alignment uncertainty</p>
            <p class="cs-pain-desc">Many artists hesitate to apply because exhibition calls feel vague or unclear about what style the curator is looking for. Without strong examples or clear direction, they end up guessing — and often skip opportunities.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Theme 02</p>
            <p class="cs-pain-title">Trust gap</p>
            <p class="cs-pain-desc">Artists expressed a clear lack of trust in how exhibitions select work and who gets considered. Many felt that not being part of the local art circle limits their chances significantly.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Theme 03</p>
            <p class="cs-pain-title">Many platforms, less focus</p>
            <p class="cs-pain-desc">Participants mentioned jumping between multiple websites, social media accounts, newsletters, and community posts just to stay updated. Information scattered everywhere makes it difficult to track what is relevant.</p>
          </div>
          <div class="cs-pain-card">
            <p class="cs-pain-num">Theme 04</p>
            <p class="cs-pain-title">Unclear how to present</p>
            <p class="cs-pain-desc">Several artists said they are unsure how to position or present their portfolio for different exhibitions. Without guidance on what curators look for, they struggle to tailor their submissions effectively.</p>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">07 — Competitive Analysis</p>
        <p class="cs-section-title">What exists today isn't enough</p>
        <p class="cs-body">Existing platforms help artists stay aware, but don't help them act with confidence. None of them bridge the gap between creating art and getting it shown. Platforms like CaFÉ, Art Jobs, and ZAPP provide listings but lack style matching, curator transparency, and meaningful feedback systems — all things artists said they need most.</p>

        <div class="cs-compare-wrap">
          <table class="cs-compare-table">
            <thead>
              <tr>
                <th scope="col">Features</th>
                <th scope="col" class="cs-compare-table__highlight">RightWall</th>
                <th scope="col">CaFÉ</th>
                <th scope="col">Art Jobs</th>
                <th scope="col">ZAPP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Curator &amp; Show Profile Transparency</td>
                <td class="cs-compare-table__highlight"><span class="cs-compare-status cs-compare-status--yes" aria-label="Available">✓</span></td>
                <td><span class="cs-compare-status cs-compare-status--no" aria-label="Not available"></span></td>
                <td><span class="cs-compare-status cs-compare-status--no" aria-label="Not available"></span></td>
                <td><span class="cs-compare-status cs-compare-status--no" aria-label="Not available"></span></td>
              </tr>
              <tr>
                <td>Style matching feature</td>
                <td class="cs-compare-table__highlight"><span class="cs-compare-status cs-compare-status--yes" aria-label="Available">✓</span></td>
                <td><span class="cs-compare-status cs-compare-status--no" aria-label="Not available"></span></td>
                <td><span class="cs-compare-status cs-compare-status--no" aria-label="Not available"></span></td>
                <td><span class="cs-compare-status cs-compare-status--no" aria-label="Not available"></span></td>
              </tr>
              <tr>
                <td>Verified exhibition calls</td>
                <td class="cs-compare-table__highlight"><span class="cs-compare-status cs-compare-status--yes" aria-label="Available">✓</span></td>
                <td><span class="cs-compare-status cs-compare-status--partial" aria-label="Partially available"></span></td>
                <td><span class="cs-compare-status cs-compare-status--partial" aria-label="Partially available"></span></td>
                <td><span class="cs-compare-status cs-compare-status--partial" aria-label="Partially available"></span></td>
              </tr>
              <tr>
                <td>Application feedback system</td>
                <td class="cs-compare-table__highlight"><span class="cs-compare-status cs-compare-status--yes" aria-label="Available">✓</span></td>
                <td><span class="cs-compare-status cs-compare-status--no" aria-label="Not available"></span></td>
                <td><span class="cs-compare-status cs-compare-status--no" aria-label="Not available"></span></td>
                <td><span class="cs-compare-status cs-compare-status--no" aria-label="Not available"></span></td>
              </tr>
            </tbody>
          </table>
          <div class="cs-compare-legend">
            <span><span class="cs-compare-status cs-compare-status--yes" aria-hidden="true">✓</span> Available</span>
            <span><span class="cs-compare-status cs-compare-status--partial" aria-hidden="true"></span> Partially Available</span>
            <span><span class="cs-compare-status cs-compare-status--no" aria-hidden="true"></span> Not Available</span>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">08 — User Needs</p>
        <p class="cs-section-title">What users actually need</p>

        <div class="cs-decision">
          <p class="cs-decision-num">Need 01</p>
          <p class="cs-decision-title">Clarity before commitment</p>
          <p class="cs-decision-desc">Artists want to understand whether an opportunity truly matches their artistic style before investing time, effort, and money into an application. They need visual cues and style indicators — screenshots, past selected works — to understand what a show is actually looking for.</p>
        </div>
        <div class="cs-decision">
          <p class="cs-decision-num">Need 02</p>
          <p class="cs-decision-title">A centralized, trustworthy space</p>
          <p class="cs-decision-desc">Artists need a single reliable place to find opportunities — not scattered across social media, newsletters, and word of mouth. They need to trust that what they're applying to is real, curated, and worth their time.</p>
        </div>
        <div class="cs-decision">
          <p class="cs-decision-num">Need 03</p>
          <p class="cs-decision-title">Submission guidance and feedback</p>
          <p class="cs-decision-desc">Without knowing what makes a strong submission, artists feel they're applying in the dark. They need direction on presentation, format, and what curators look for — and meaningful feedback after submitting.</p>
        </div>

        <div class="cs-hmw">
          <p class="cs-hmw-label">How Might We</p>
          <p class="cs-hmw-text">Reduce the misalignment between the artistic style of emerging artists and the specific styles curators are seeking — by making <em>curator preferences and show requirements more transparent</em>, so that emerging artists can focus on exhibitions that align with their work?</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="cs-section-label">Conclusion</p>
        <p class="cs-section-title">What this research revealed</p>
        <p class="cs-body">The barriers facing emerging visual artists are not about a lack of effort or talent — they are structural. Opportunities exist but are hidden inside fragmented, inconsistent systems that favor those already connected to the right networks.</p>
        <p class="cs-body">Artists need transparency above all else: clarity on what curators are looking for, honesty about selection criteria, and a reliable centralized space to find and evaluate opportunities without the anxiety of the unknown.</p>
        <p class="cs-body">This research directly shaped the design of RightWall — a platform built to surface style fit, reduce guesswork, and give emerging artists the confidence to apply to the right exhibitions.</p>
      </div>

      ${csGoToTopHTML()}
    </div>
    ${homeFooterHTML()}
    </div>`;
}

export default barriersHTML;
