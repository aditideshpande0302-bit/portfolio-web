import { homeFooterHTML } from './shared.js';

const aboutPhotos = [
  {
    src: '/assets/img/about/about-fa7bd9c9-1536.webp',
    srcset: '/assets/img/about/about-fa7bd9c9-800.webp 800w, /assets/img/about/about-fa7bd9c9-1536.webp 1536w',
    alt: 'Aditi Deshpande in a park with cherry blossoms',
    width: 1536,
    height: 2048,
    eager: true,
  },
  {
    src: '/assets/img/about/about-81aed2cd-1536.webp',
    srcset: '/assets/img/about/about-81aed2cd-800.webp 800w, /assets/img/about/about-81aed2cd-1536.webp 1536w',
    alt: 'Aditi Deshpande at graduation',
    width: 1536,
    height: 2048,
    eager: false,
  },
  {
    src: '/assets/img/about/about-ed4fb3f9-1536.webp',
    srcset: '/assets/img/about/about-ed4fb3f9-800.webp 800w, /assets/img/about/about-ed4fb3f9-1536.webp 1536w',
    alt: 'Aditi Deshpande in graduation regalia',
    width: 1536,
    height: 2048,
    eager: false,
  },
];

function photoImg(photo, index) {
  const active = index === 0 ? ' is-active' : '';
  const loading = photo.eager ? 'eager' : 'lazy';
  return `<img class="about-layout__photo-img${active}" src="${photo.src}" srcset="${photo.srcset}" sizes="(max-width: 768px) 100vw, 480px" alt="${photo.alt}" width="${photo.width}" height="${photo.height}" loading="${loading}" decoding="async" />`;
}

function aboutHTML() {
  const photoStack = aboutPhotos.map(photoImg).join('');

  return `
    <div class="home-root home-root--about">
    <div class="about-root" id="about-root">
      <div class="about-layout" id="about-layout">
        <aside class="about-layout__photo">
          <div class="about-layout__sticky">
            <div class="about-layout__frame">${photoStack}</div>
          </div>
        </aside>
        <div class="about-layout__content">
          <section class="about-block about-reveal" data-about-photo="0">
            <h2 class="about-block__title">About Me</h2>
            <div class="about-text">
              <p>I'm Aditi, a product designer with a foundation in Fine Arts. Before moving into digital products, I spent years studying composition, color, and visual storytelling.</p>
              <p>That background continues to shape how I design today. I focus on understanding problems clearly and turning them into structured, usable experiences.</p>
              <p>I work end-to-end, from exploring ambiguous problems and conducting user research to designing, testing, and refining solutions. My work spans <strong>e-commerce, accessibility, civic tech, and AI-driven products.</strong></p>
            </div>
          </section>

          <section class="about-block about-reveal" data-about-photo="1">
            <h2 class="about-block__title">My Journey</h2>
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
          </section>

          <section class="about-block about-reveal" data-about-photo="2">
            <h2 class="about-block__title">My Experience</h2>
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
              <div class="exp-item">
                <div>
                  <p class="exp-role">Graphic Designer</p>
                  <p class="exp-company">Zica Institute of Creative Arts</p>
                  <p class="exp-desc">Freelance graphic designer responsible for creating branding assets, exhibition templates, and brochures for Zica Institute of Creative Arts. Designed cohesive visual materials to support their creative showcases and presentations.</p>
                </div>
                <p class="exp-date">July 2021</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section class="about-certs about-reveal">
        <div class="about-certs__layout">
          <div class="about-certs__intro">
            <h2 class="about-block__title">Certifications</h2>
            <p class="about-certs__desc">Continuous learning in UX design, AI, and emerging technologies through industry-recognized programs.</p>
          </div>
          <div class="about-certs__list">
            <div class="cert-row">
              <a class="cert-row__link" href="https://coursera.org/verify/QIVZ7D8X7AVU" target="_blank" rel="noopener noreferrer">
                <div class="cert-row__text">
                  <p class="cert-issuer">SkillUp · Coursera</p>
                  <p class="cert-name">Generative AI: The Future of UX UI Design</p>
                </div>
              </a>
              <button type="button" class="cert-row__thumb" data-cert-full="/assets/img/about/about-2bd59827-1600.webp" aria-label="View full certificate: Generative AI: The Future of UX UI Design">
                <img src="/assets/img/about/about-2bd59827-800.webp" alt="Generative AI: The Future of UX UI Design certificate" width="800" height="618" loading="lazy" decoding="async" />
              </button>
            </div>
            <div class="cert-row">
              <a class="cert-row__link" href="https://coursera.org/verify/MZJXJA475R5R" target="_blank" rel="noopener noreferrer">
                <div class="cert-row__text">
                  <p class="cert-issuer">Coursera</p>
                  <p class="cert-name">GenAI for UX Designers</p>
                </div>
              </a>
              <button type="button" class="cert-row__thumb" data-cert-full="/assets/img/about/about-0a66a753-1600.webp" aria-label="View full certificate: GenAI for UX Designers">
                <img src="/assets/img/about/about-0a66a753-800.webp" alt="GenAI for UX Designers certificate" width="800" height="618" loading="lazy" decoding="async" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="about-beyond about-reveal">
        <div class="about-beyond__layout">
          <div class="about-beyond__content">
            <p class="about-hobbies-quote">When I'm not designing, I'm usually doing something creative.</p>
            <div class="about-text">
              <p>I sing, and it's one of those things I've done for as long as I can remember. I paint when I need to get out of my head. Photography is how I pay attention to the world around me.</p>
              <p>And food, I'm genuinely obsessed. Trying new restaurants and cuisines is how I explore a city. There's always a place I'm excited to visit next.</p>
            </div>
          </div>
          <div class="about-photo-gallery" id="about-photo-gallery">
            <div class="hero-grid-overlay about-gallery-grid-overlay" aria-hidden="true"></div>
            <div class="about-photo-gallery__fade">
              <div class="about-photo-gallery__stage">
                <div class="about-photo-gallery__item" data-x="110" data-y="44" data-order="4" data-z="10" data-direction="left">
                  <div class="about-photo-gallery__item-inner">
                    <img src="/assets/img/about/hobbies/hobbies-resin-800.webp" srcset="/assets/img/about/hobbies/hobbies-resin-800.webp 800w, /assets/img/about/hobbies/hobbies-resin-1600.webp 1600w" sizes="172px" alt="Resin art with birthday photo" width="800" height="800" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div class="about-photo-gallery__item" data-x="55" data-y="22" data-order="3" data-z="20" data-direction="right">
                  <div class="about-photo-gallery__item-inner">
                    <img src="/assets/img/about/hobbies/hobbies-city-800.webp" srcset="/assets/img/about/hobbies/hobbies-city-800.webp 800w, /assets/img/about/hobbies/hobbies-city-1600.webp 1600w" sizes="172px" alt="City street photography at dusk" width="800" height="800" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div class="about-photo-gallery__item about-photo-gallery__item--landscape" data-x="0" data-y="8" data-order="2" data-z="30" data-direction="right">
                  <div class="about-photo-gallery__item-inner">
                    <img src="/assets/img/about/hobbies/hobbies-painting-800.webp" srcset="/assets/img/about/hobbies/hobbies-painting-800.webp 800w, /assets/img/about/hobbies/hobbies-painting-1600.webp 1600w" sizes="218px" alt="Painting with Tamil script" width="800" height="618" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div class="about-photo-gallery__item" data-x="-55" data-y="32" data-order="1" data-z="40" data-direction="left">
                  <div class="about-photo-gallery__item-inner">
                    <img src="/assets/img/about/hobbies/hobbies-sketch-800.webp" srcset="/assets/img/about/hobbies/hobbies-sketch-800.webp 800w, /assets/img/about/hobbies/hobbies-sketch-1600.webp 1600w" sizes="172px" alt="Pencil sketch portrait" width="800" height="800" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div class="about-photo-gallery__item" data-x="-110" data-y="15" data-order="0" data-z="50" data-direction="left">
                  <div class="about-photo-gallery__item-inner">
                    <img src="/assets/img/about/hobbies/hobbies-lippan-800.webp" srcset="/assets/img/about/hobbies/hobbies-lippan-800.webp 800w, /assets/img/about/hobbies/hobbies-lippan-1600.webp 1600w" sizes="172px" alt="Lippan mirror art" width="800" height="800" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    ${homeFooterHTML()}
    </div>`;
}

export default aboutHTML;
