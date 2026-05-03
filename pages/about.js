import { footerHTML } from './shared.js';

function aboutHTML() {
  return `
    <div class="about-root">
      <h2 class="page-heading">My journey into design</h2>

      <!-- About Me -->
      <div class="about-section">
        <p class="section-cat-label">About Me</p>
        <div class="about-intro-grid">
          <div class="photo-block">
            <div class="photo-frame" style="padding:0;overflow:hidden;"><img src="/assets/img/about/about-fa7bd9c9-1536.webp" srcset="/assets/img/about/about-fa7bd9c9-800.webp 800w, /assets/img/about/about-fa7bd9c9-1536.webp 1536w" sizes="(max-width: 768px) 100vw, 900px" alt="Aditi Deshpande" width="1536" height="2048" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block;" /></div>
          </div>
          <div class="about-text">
            <p>I'm Aditi, a product designer with a foundation in Fine Arts. Before moving into digital products, I spent years studying composition, color, and visual storytelling.</p>
            <p>That background continues to shape how I design today. I focus on understanding problems clearly and turning them into structured, usable experiences.</p>
            <p>I work end-to-end, from exploring ambiguous problems and conducting user research to designing, testing, and refining solutions. My work spans <strong>e-commerce, accessibility, civic tech, and AI-driven products.</strong></p>
          </div>
        </div>
      </div>

      <!-- My Journey -->
      <div class="about-section">
        <p class="section-cat-label">My Journey</p>
        <div class="timeline">
          <div class="tl-item">
            <p class="tl-year">Bachelor's</p>
            <div>
              <p class="tl-title">Bachelor's in Fine Arts</p>
              <p class="tl-desc">Completed my Bachelor's in Fine Arts, building a strong foundation in visual thinking and storytelling. During this time, I also worked on a campaign for a spice brand, applying design in a real-world context.</p>
              <a class="campaign-cta" href="#" onclick="toast('Campaign coming soon'); return false;">View campaign design →</a>
            </div>
          </div>
          <div class="tl-item">
            <p class="tl-year">Master's</p>
            <div>
              <p class="tl-title">Thomas Jefferson University</p>
              <p class="tl-desc">Completed my Master's in User Experience and Interaction Design, where I transitioned from visual design to solving product problems. I learned to apply research, usability, and structured thinking to design decisions.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- Experience -->
      <div class="about-section">
        <p class="section-cat-label">Experience</p>
        <div class="exp-list">
          <div class="exp-item">
            <div>
              <p class="exp-role">UI/UX Designer</p>
              <p class="exp-company">Empowered Vote</p>
              <p class="exp-desc">Designing end-to-end product experiences that help users access and understand civic information. Working closely with the team to structure features, improve user flows, and refine interactions based on feedback and usability insights.</p>
            </div>
            <p class="exp-date">Current</p>
          </div>
          <div class="exp-item">
            <div>
              <p class="exp-role">UX Researcher</p>
              <p class="exp-company">Generative AI Study</p>
              <p class="exp-desc">Led exploratory research to understand how users adopt and interact with generative AI tools. Conducted 12 in-depth semi-structured interviews and analyzed qualitative data using thematic analysis to identify patterns in user behavior, mental models, and pain points across multi-step workflows. Synthesized findings into actionable insights and collaborated with stakeholders to translate them into product requirements.</p>
            </div>
            <p class="exp-date">Jan – May 2024</p>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="about-section">
        <p class="section-cat-label">Certifications</p>
        <div class="cert-grid">
          <div class="cert-card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="window.open('https://coursera.org/verify/QIVZ7D8X7AVU','_blank')">
            <img src="/assets/img/about/about-2bd59827-1600.webp" srcset="/assets/img/about/about-2bd59827-800.webp 800w, /assets/img/about/about-2bd59827-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="Certificate: Generative AI: The Future of UX UI Design — SkillUp / Coursera" width="1600" height="1236" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;" />
            <div class="cert-card-body">
              <p class="cert-issuer">SkillUp · Coursera</p>
              <p class="cert-name">Generative AI: The Future of UX UI Design</p>
            </div>
          </div>
          <div class="cert-card" style="padding:0;overflow:hidden;cursor:pointer;" onclick="window.open('https://coursera.org/verify/MZJXJA475R5R','_blank')">
            <img src="/assets/img/about/about-0a66a753-1600.webp" srcset="/assets/img/about/about-0a66a753-800.webp 800w, /assets/img/about/about-0a66a753-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="Certificate: GenAI for UX Designers — Coursera" width="1600" height="1236" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;" />
            <div class="cert-card-body">
              <p class="cert-issuer">Coursera</p>
              <p class="cert-name">GenAI for UX Designers</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Hobbies -->
      <div class="about-section">
        <p class="section-cat-label">Beyond the screen</p>
        <p style="font-family:'Playfair Display',serif;font-size:20px;font-weight:500;font-style:italic;color:var(--ink);line-height:1.2;margin-bottom:20px;">When I'm not designing, I'm usually doing something creative.</p>
        <div class="about-text">
          <p>I sing, and it's one of those things I've done for as long as I can remember. I paint when I need to get out of my head. Photography is how I pay attention to the world around me.</p>
          <p>And food, I'm genuinely obsessed. Trying new restaurants and cuisines is how I explore a city. There's always a place I'm excited to visit next.</p>
        </div>
        <div class="cs-img-wrap" style="margin-top:24px;margin-bottom:0;"><img src="/assets/img/about/about-476508f7-1600.webp" srcset="/assets/img/about/about-476508f7-800.webp 800w, /assets/img/about/about-476508f7-1600.webp 1600w" sizes="(max-width: 768px) 100vw, 900px" alt="Aditi's hobbies — drawing, painting, photography, craft" width="1600" height="1400" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;" /></div>
      </div>

    </div>
    ${footerHTML()}`;
}

export default aboutHTML;
