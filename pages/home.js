import { homeFooterHTML } from './shared.js';

function homeHTML() {
  return `
    <div class="home-root">
      <div class="home-hero-block">
        <div class="hero-grid-overlay" aria-hidden="true"></div>
        <div class="hero">
          <div class="hero-opportunities-badge">
            <span class="hero-opportunities-badge__dot" aria-hidden="true"></span>
            <span class="hero-opportunities-badge__text">Open to opportunities</span>
          </div>
          <h1 class="headline"><strong class="accent">Product Designer</strong> turning complex systems into experiences shaped by how users actually behave.</h1>
          <p class="subtext" style="font-weight: 300; font-style: normal;">Driven by curiosity about user behavior, I design the flows, edge cases, and details that turn complexity into clarity.</p>
          <div class="hero-cta">
            <button class="hero-btn hero-btn-primary" onclick="goTo('work')">View my work</button>
            <button class="hero-btn hero-btn-ghost" onclick="goTo('about')">About me</button>
          </div>
          <div class="hero-scroll-indicator" aria-hidden="true">
            <div class="hero-scroll-indicator__mouse">
              <span class="hero-scroll-indicator__wheel"></span>
            </div>
            <span class="hero-scroll-indicator__label">Scroll to explore</span>
          </div>
        </div>
      </div>

      <section class="featured-work" aria-labelledby="featured-work-heading">
        <h2 id="featured-work-heading" class="featured-work__heading">Featured Work</h2>
        <div class="featured-work__stack">
          <figure class="featured-work__figure">
            <article class="featured-work__card" onclick="goTo('rightwall')">
              <div class="featured-work__visual featured-work__visual--rightwall">
                <img src="./assets/img/featured/rightwall-mockup.png" alt="" class="featured-work__media" />
              </div>
              <div class="featured-work__body">
                <span class="featured-work__number">01</span>
                <h3 class="featured-work__title">Rightwall</h3>
                <p class="featured-work__desc">Designed an app for emerging visual artists to discover exhibitions that fit their artistic style, enabling them to quickly evaluate fit and achieve 80% task success.</p>
                <div class="featured-work__tags">
                  <span class="featured-work__tag">Mobile app</span>
                  <span class="featured-work__tag">Discovery</span>
                  <span class="featured-work__tag">End-to-End Ux</span>
                </div>
                <button class="featured-work__link" onclick="goTo('rightwall')">View case study</button>
              </div>
            </article>
          </figure>
          <figure class="featured-work__figure">
            <article class="featured-work__card">
              <div class="featured-work__visual featured-work__visual--pathway">
                <img src="./assets/img/featured/empoweredvault-mockup.png" alt="" class="featured-work__media" />
              </div>
              <div class="featured-work__body">
                <span class="featured-work__number">02</span>
                <h3 class="featured-work__title">Empowered Essentials</h3>
                <p class="featured-work__desc">Non-partisan tools to see who represents you from city council to federal level — enter a ZIP code for voting records, funding, and policy positions. No login required.</p>
                <div class="featured-work__tags">
                  <span class="featured-work__tag">Civic Tech</span>
                  <span class="featured-work__tag">Web</span>
                  <span class="featured-work__tag">Product Design</span>
                </div>
                <button class="featured-work__link" onclick="goTo('empowered')">View case study</button>
              </div>
            </article>
          </figure>
          <figure class="featured-work__figure">
            <article class="featured-work__card">
              <div class="featured-work__visual featured-work__visual--pur">
                <img src="./assets/img/featured/water-purifier-mockup.png" alt="" class="featured-work__media" />
              </div>
              <div class="featured-work__body">
                <span class="featured-work__number">03</span>
                <h3 class="featured-work__title">PUR Water purifier</h3>
                <p class="featured-work__desc">Redesigned the PUR desktop experience by streamlining navigation and key purchase flows, improving overall performance from 9% to 56%.</p>
                <div class="featured-work__tags">
                  <span class="featured-work__tag">Ecommerce</span>
                  <span class="featured-work__tag">web</span>
                  <span class="featured-work__tag">responsive</span>
                </div>
                <button class="featured-work__link" onclick="goTo('pur')">View case study</button>
              </div>
            </article>
          </figure>
        </div>
        <div class="featured-work__cta">
          <button class="featured-work__cta-btn" onclick="goTo('work')">View all projects</button>
        </div>
      </section>

      ${homeFooterHTML()}
    </div>`;
}

export default homeHTML;
