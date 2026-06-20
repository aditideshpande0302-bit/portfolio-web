// Shared helpers and constants used by every route.
// csNextHTML reads window._lastWorkCat, set by openProject() in app.js.

const CS_PAGES = ['rightwall','pur','pathway','calmnest','hydration','genai','empowered','barriers','aidesign'];

const WORK_CS_PAGES = ['pathway','calmnest','genai','barriers','aidesign'];

const ALL_CATS = [
  { cat:'accessibility', label:'Accessibility', desc:'Inclusive design and WCAG-informed work',     icon:'Accessibility' },
  { cat:'all',      label:'UI/UX Projects',    desc:'Product and interface design work',              icon:'UI/UX'    },
  { cat:'research', label:'Research Projects', desc:'User research, studies, and insights',           icon:'Research' },
  { cat:'ai',       label:'AI Projects',       desc:'AI experiments and design workflows',            icon:'AI'       },
];

function navHTML(page) {
  const useHomeNav = true;
  const isWork = page === 'work' || CS_PAGES.includes(page);
  const resumeOpen = `onclick="window.open('https://drive.google.com/file/d/1b2L7Vvn1s3prbUwVxh2D3iPAAW4lQM2m/view?usp=drive_link','_blank')"`;
  const showHomeNav = page === 'work' || page === 'about' || WORK_CS_PAGES.includes(page);
  const homeNavLink = showHomeNav
    ? `<button class="nav-link" onclick="goTo('home')">Home</button>`
    : '';
  const homeLinks = `
    ${homeNavLink}
    <button class="nav-link ${page === 'work' || CS_PAGES.includes(page) ? 'active' : ''}" onclick="goTo('work')">Work</button>
    <button class="nav-link ${page === 'about' ? 'active' : ''}" onclick="goTo('about')">About</button>
    <button class="nav-link" ${resumeOpen}>Resume</button>`;
  const innerLinks = `
    <button class="nav-link ${isWork?'active':''}" onclick="goTo('work')">Work</button>
    <button class="nav-link ${page==='about'?'active':''}" onclick="goTo('about')">About</button>
    <button class="nav-link" onclick="scrollToFooter()">Contact</button>`;
  const logoMarkup = logoAdHTML();
  return `
    <div class="nav-inner">
      ${logoMarkup}
      <div class="nav-right">
        ${useHomeNav ? homeLinks : innerLinks}
        ${useHomeNav ? '' : `<button class="resume-btn" ${resumeOpen}>Resume</button>`}
        <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">
          <svg class="t-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg class="t-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>
      </div>
    </div>
`;
}

function csProjectNavHTML(active) {
  const items = [
    { key:'rightwall', label:'RightWall' },
    { key:'pur',       label:'PUR Water Purifier' },
    { key:'pathway',   label:'Pathway' },
  ];
  return `<div class="cs-project-nav">
    <span class="cs-project-nav-label">Case Studies</span>
    ${items.map(i => `<button class="cs-pnav-btn ${active===i.key?'active':''}" onclick="goTo('${i.key}')">${i.label}</button>`).join('')}
    <button class="cs-pnav-btn" onclick="goTo('work')" style="margin-left:auto;">← All Work</button>
  </div>`;
}

function csNextHTML(nextPage, nextTitle, nextTags) {
  const tagHtml = nextTags.map(t=>`<span class="tag">${t}</span>`).join('');

  // Show all cats except the one the user came from
  const sourceCat = window._lastWorkCat || 'accessibility';
  const visibleCats = ALL_CATS.filter(k => k.cat !== sourceCat);

  const catHtml = visibleCats.map(k=>`
    <button class="cs-other-card" onclick="goToWork('${k.cat}')">
      <span class="cs-other-icon">${k.icon}</span>
      <p class="cs-other-name">${k.label}</p>
      <p class="cs-other-desc">${k.desc}</p>
    </button>`).join('');

  return `
    <div class="cs-next-section">
      <p class="cs-next-label">Next Case Study</p>
      <button class="cs-next-card" onclick="goTo('${nextPage}')">
        <div class="cs-next-card-left">
          <div class="cs-next-card-tags">${tagHtml}</div>
          <p class="cs-next-title">${nextTitle}</p>
        </div>
        <span class="cs-next-arrow">→</span>
      </button>
      <p class="cs-other-projects-label">Explore by Category</p>
      <div class="cs-other-grid">${catHtml}</div>
    </div>`;
}

function logoAdHTML() {
  return `<button class="logo logo-ad" onclick="goTo('home')"><svg class="logo-ad-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-4.8 -24.24 149.44 151.68" aria-hidden="true" focusable="false"><g class="logo-ad-base" fill="none" stroke="#ccc"><path fill="none" d="M2.80 63.28C3.04 63.36 3.28 63.36 3.60 63.36C5.04 63.36 6.96 62.64 8.32 62.16C16.32 59.36 24.48 57.04 32.72 55.20C33.04 55.12 33.44 54.96 33.76 54.96C33.92 54.96 34.08 55.04 34.32 55.12C34.16 55.84 33.76 56.32 33.44 56.80C30.24 62.08 18.96 81.04 17.20 86C17.04 86.48 16.96 86.88 16.96 87.28C16.96 89.20 18.56 90.40 20.16 90.40C20.96 90.40 21.68 90.16 22.32 89.60C24.08 87.92 25.52 86 26.16 83.60C26.32 83.12 26.32 82.72 26.32 82.48C26.32 81.28 25.44 81.44 25.44 80.56C25.44 80.32 25.52 80 25.76 79.44C28.56 73.20 35.92 60.48 39.44 54.96C40.08 53.92 40.88 53.52 42 53.28C46.40 52.40 74.72 47.44 79.12 47.44L79.44 47.44L79.44 47.60C79.44 48 79.28 48.32 79.12 48.64C67.68 72.96 61.44 85.28 50.16 109.68L45.04 118.32C44.80 118.72 44.32 119.68 44.32 120.40C44.32 120.80 44.48 121.12 44.80 121.28C45.04 121.36 45.20 121.44 45.44 121.44C46.16 121.44 46.40 120.64 46.80 119.84C47.92 117.36 49.20 115.28 50.40 112.88C62.24 87.20 69.12 74.08 81.28 48.56C81.76 47.52 83.12 46.80 84.24 46.72C90.72 46.08 97.20 45.36 103.76 45.28C104 45.28 104.32 45.36 104.64 45.36C105.12 45.36 105.44 45.20 105.44 44.64C105.36 44.08 104.96 44 104.48 44L102.24 44C96.80 44 91.44 44.40 86.08 44.80C85.68 44.88 85.20 44.96 84.72 44.96C84.48 44.96 84.16 44.88 83.84 44.80C89.68 31.60 103.92 4.48 103.92-10L103.92-11.04C103.76-14.56 102.08-18.24 98.40-18.24C98-18.24 97.60-18.16 97.20-18.08C89.60-16.80 75.44-1.36 71.12 3.76C58.96 18.16 47.60 33.20 38 49.44C37.44 50.40 36.80 50.88 35.68 51.12C25.28 52.88 15.12 55.68 5.20 59.20C4.80 59.36 4.48 59.44 4.16 59.44C3.92 59.44 3.68 59.36 3.44 59.28C3.20 59.20 3.04 59.12 2.80 59.12C1.84 59.12 1.20 60.16 1.20 61.12C1.20 62 1.68 62.88 2.80 63.28Z"/><path fill="none" d="M97.04 69.12C101.68 66.40 107.12 58.24 111.04 53.76C111.36 54.08 111.52 54.32 111.52 54.56C111.52 54.96 111.28 55.20 111.12 55.52C107.12 64.56 102.96 73.60 100.56 83.20C100.08 85.12 99.92 86.56 99.92 87.60C99.92 89.60 100.56 90.32 101.12 90.32C101.44 90.32 101.76 90 101.76 89.60L101.76 89.36C101.60 88.88 101.60 88.32 101.60 87.84C101.60 86.80 101.84 85.84 102.08 84.80C102.72 82.72 103.28 80.56 104.08 78.56C112.24 57.60 122.64 37.92 136.48 20.16C137.20 19.28 137.76 18.32 138.40 17.36C138.56 17.04 138.64 16.72 138.64 16.48C138.64 15.76 138.08 15.36 137.20 15.36C136.88 15.36 136.64 15.36 136.32 15.44C135.84 15.60 135.44 16.08 135.12 16.40C128.56 23.76 124.56 30.64 119.52 39.04C117.36 42.48 114.80 45.68 112.32 49.12C110.72 47.60 109.28 46.88 107.84 46.88C106.80 46.88 105.60 47.36 104.32 48.16C99.36 51.20 94.96 57.84 92.80 63.20C92.32 64.40 92.08 65.52 92.08 66.40C92.08 68.56 93.28 69.76 94.88 69.76C95.60 69.76 96.32 69.52 97.04 69.12Z"/></g><g class="logo-ad-ink" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"><path class="logo-ad-stroke-a logo-ad-stroke-a-1" fill="none" pathLength="1" d="M2.80 63.28C3.04 63.36 3.28 63.36 3.60 63.36C5.04 63.36 6.96 62.64 8.32 62.16C16.32 59.36 24.48 57.04 32.72 55.20C33.04 55.12 33.44 54.96 33.76 54.96C33.92 54.96 34.08 55.04 34.32 55.12C34.16 55.84 33.76 56.32 33.44 56.80C30.24 62.08 18.96 81.04 17.20 86C17.04 86.48 16.96 86.88 16.96 87.28C16.96 89.20 18.56 90.40 20.16 90.40C20.96 90.40 21.68 90.16 22.32 89.60C24.08 87.92 25.52 86 26.16 83.60C26.32 83.12 26.32 82.72 26.32 82.48C26.32 81.28 25.44 81.44 25.44 80.56C25.44 80.32 25.52 80 25.76 79.44C28.56 73.20 35.92 60.48 39.44 54.96C40.08 53.92 40.88 53.52 42 53.28C46.40 52.40 74.72 47.44 79.12 47.44L79.44 47.44L79.44 47.60C79.44 48 79.28 48.32 79.12 48.64C67.68 72.96 61.44 85.28 50.16 109.68L45.04 118.32C44.80 118.72 44.32 119.68 44.32 120.40C44.32 120.80 44.48 121.12 44.80 121.28C45.04 121.36 45.20 121.44 45.44 121.44C46.16 121.44 46.40 120.64 46.80 119.84C47.92 117.36 49.20 115.28 50.40 112.88C62.24 87.20 69.12 74.08 81.28 48.56C81.76 47.52 83.12 46.80 84.24 46.72C90.72 46.08 97.20 45.36 103.76 45.28C104 45.28 104.32 45.36 104.64 45.36C105.12 45.36 105.44 45.20 105.44 44.64C105.36 44.08 104.96 44 104.48 44L102.24 44C96.80 44 91.44 44.40 86.08 44.80C85.68 44.88 85.20 44.96 84.72 44.96C84.48 44.96 84.16 44.88 83.84 44.80C89.68 31.60 103.92 4.48 103.92-10L103.92-11.04C103.76-14.56 102.08-18.24 98.40-18.24C98-18.24 97.60-18.16 97.20-18.08C89.60-16.80 75.44-1.36 71.12 3.76C58.96 18.16 47.60 33.20 38 49.44C37.44 50.40 36.80 50.88 35.68 51.12C25.28 52.88 15.12 55.68 5.20 59.20C4.80 59.36 4.48 59.44 4.16 59.44C3.92 59.44 3.68 59.36 3.44 59.28C3.20 59.20 3.04 59.12 2.80 59.12C1.84 59.12 1.20 60.16 1.20 61.12C1.20 62 1.68 62.88 2.80 63.28Z"/><path class="logo-ad-stroke-d" fill="none" pathLength="1" d="M97.04 69.12C101.68 66.40 107.12 58.24 111.04 53.76C111.36 54.08 111.52 54.32 111.52 54.56C111.52 54.96 111.28 55.20 111.12 55.52C107.12 64.56 102.96 73.60 100.56 83.20C100.08 85.12 99.92 86.56 99.92 87.60C99.92 89.60 100.56 90.32 101.12 90.32C101.44 90.32 101.76 90 101.76 89.60L101.76 89.36C101.60 88.88 101.60 88.32 101.60 87.84C101.60 86.80 101.84 85.84 102.08 84.80C102.72 82.72 103.28 80.56 104.08 78.56C112.24 57.60 122.64 37.92 136.48 20.16C137.20 19.28 137.76 18.32 138.40 17.36C138.56 17.04 138.64 16.72 138.64 16.48C138.64 15.76 138.08 15.36 137.20 15.36C136.88 15.36 136.64 15.36 136.32 15.44C135.84 15.60 135.44 16.08 135.12 16.40C128.56 23.76 124.56 30.64 119.52 39.04C117.36 42.48 114.80 45.68 112.32 49.12C110.72 47.60 109.28 46.88 107.84 46.88C106.80 46.88 105.60 47.36 104.32 48.16C99.36 51.20 94.96 57.84 92.80 63.20C92.32 64.40 92.08 65.52 92.08 66.40C92.08 68.56 93.28 69.76 94.88 69.76C95.60 69.76 96.32 69.52 97.04 69.12Z"/></g></svg><span class="logo-ad-sr">Ad</span></button>`;
}

function homeFooterHTML() {
  return `
      <footer class="home-footer" id="home-footer">
        <div class="home-footer__top">
          ${logoAdHTML()}
          <p class="home-footer__tagline">Designing with curiosity, shipping with clarity.</p>
        </div>
        <nav class="home-footer__nav" aria-label="Footer navigation">
          <button class="home-footer__nav-link" onclick="goTo('home')">Home</button>
          <button class="home-footer__nav-link" onclick="goTo('work')">Work</button>
          <button class="home-footer__nav-link" onclick="goTo('about')">About</button>
        </nav>
        <div class="home-footer__divider" aria-hidden="true"></div>
        <div class="home-footer__bottom">
          <span class="home-footer__copy">© 2026 Aditi Deshpande</span>
          <div class="home-footer__social">
            <a class="home-footer__social-link" href="https://www.linkedin.com/in/aditi-deshpandepd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i class="ph ph-linkedin-logo"></i>
            </a>
            <a class="home-footer__social-link" href="mailto:aditideshpande0302@gmail.com" aria-label="Email">
              <i class="ph ph-envelope"></i>
            </a>
          </div>
        </div>
      </footer>`;
}

function footerHTML() {
  return `
    <footer class="site-footer" id="site-footer">
      <span class="footer-top-label">Get in touch</span>
      <div class="footer-inner">
        <div class="footer-left">
          <p class="footer-bio-name">Aditi Deshpande</p>
          <p class="footer-bio-desc">Product Designer focused on interaction design, user behavior, accessibility, and AI-integrated workflows. Open to full-time roles and select collaborations.</p>
        </div>
        <div class="footer-right">
          <div class="footer-link-row">
            <span class="footer-link-label">Email</span>
            <a class="footer-link-value" href="mailto:aditideshpande0302@gmail.com">aditideshpande0302@gmail.com <span class="f-arr">↗</span></a>
          </div>
          <div class="footer-link-row">
            <span class="footer-link-label">LinkedIn</span>
            <a class="footer-link-value" href="https://www.linkedin.com/in/aditi-deshpandepd/" target="_blank">linkedin.com/in/aditi <span class="f-arr">↗</span></a>
          </div>
          <div class="footer-link-row">
            <span class="footer-link-label">Resume</span>
            <button class="footer-link-value" onclick="window.open('https://drive.google.com/file/d/1b2L7Vvn1s3prbUwVxh2D3iPAAW4lQM2m/view?usp=drive_link','_blank')">Download <span class="f-arr">↓</span></button>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">© 2026 Aditi Deshpande</span>
        <span class="footer-dot"></span>
      </div>
    </footer>`;
}

function csBackHTML() {
  return `<button class="cs-back" onclick="goTo('home')" aria-label="Back to home"><span class="cs-back-arrow">←</span> Back</button>`;
}

function csBackToWorkHTML() {
  return `<button class="cs-back" onclick="goToWork('auto')" aria-label="Back to Selected Projects"><span class="cs-back-arrow">←</span> Back</button>`;
}

function csGoToTopHTML() {
  return `<button class="cs-go-top" onclick="scrollToTop()" aria-label="Go to top">
    <svg class="cs-go-top__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>
    <span>Go to top</span>
  </button>`;
}

function csZoomImgHTML(opts) {
  const src = opts.src || '';
  const srcset = opts.srcset || '';
  const sizes = opts.sizes || '(max-width: 768px) 100vw, 900px';
  const alt = opts.alt || '';
  const width = opts.width || '';
  const height = opts.height || '';
  const fullSrc = opts.fullSrc || src;
  const wrapClass = opts.wrapClass || '';
  const margin = opts.margin != null ? opts.margin : 'margin-bottom:0;';
  return `<button type="button" class="cs-img-wrap cs-img-zoom ${wrapClass}" style="${margin}" data-full="${fullSrc}" aria-label="View full image: ${alt}">
    <img src="${src}" srcset="${srcset}" sizes="${sizes}" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async" />
    <span class="cs-img-zoom__icon" aria-hidden="true"><i class="ph ph-magnifying-glass-plus"></i></span>
  </button>`;
}

function csPhoneMockupHTML(opts) {
  const videoSrc = opts.videoSrc || '';
  const poster = opts.poster || '';
  const src = opts.src || '';
  const srcset = opts.srcset || '';
  const alt = opts.alt || 'Prototype demo';

  const media = videoSrc
    ? `<video class="cs-phone-mockup__video" src="${videoSrc}"${poster ? ` poster="${poster}"` : ''} autoplay muted loop playsinline aria-label="${alt}"></video>`
    : `<img src="${src}" srcset="${srcset}" sizes="(max-width: 768px) 220px, 240px" alt="${alt}" loading="lazy" decoding="async" />`;

  return `<div class="cs-phone-mockup cs-phone-mockup--14-pro-max">
    <div class="cs-phone-mockup__shell">
      <span class="cs-phone-mockup__btn cs-phone-mockup__btn--silent" aria-hidden="true"></span>
      <span class="cs-phone-mockup__btn cs-phone-mockup__btn--vol-up" aria-hidden="true"></span>
      <span class="cs-phone-mockup__btn cs-phone-mockup__btn--vol-down" aria-hidden="true"></span>
      <span class="cs-phone-mockup__btn cs-phone-mockup__btn--power" aria-hidden="true"></span>
      <div class="cs-phone-mockup__bezel">
        <div class="cs-phone-mockup__screen">
          ${media}
          <div class="cs-phone-mockup__island" aria-hidden="true">
            <span class="cs-phone-mockup__camera"></span>
          </div>
          <span class="cs-phone-mockup__glare" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  </div>`;
}

function csMacbookMockupHTML(opts) {
  const videoSrc = opts.videoSrc || '';
  const poster = opts.poster || '';
  const src = opts.src || '';
  const srcset = opts.srcset || '';
  const alt = opts.alt || 'Prototype demo';

  const media = videoSrc
    ? `<video class="cs-macbook-mockup__video" src="${videoSrc}"${poster ? ` poster="${poster}"` : ''} autoplay muted loop playsinline aria-label="${alt}"></video>`
    : `<img src="${src}" srcset="${srcset}" sizes="(max-width: 768px) 100vw, 720px" alt="${alt}" loading="lazy" decoding="async" />`;

  return `<div class="cs-macbook-mockup">
    <div class="cs-macbook-mockup__lid">
      <div class="cs-macbook-mockup__bezel">
        <div class="cs-macbook-mockup__screen">
          ${media}
          <span class="cs-macbook-mockup__glare" aria-hidden="true"></span>
        </div>
      </div>
    </div>
    <div class="cs-macbook-mockup__base" aria-hidden="true">
      <span class="cs-macbook-mockup__notch"></span>
    </div>
  </div>`;
}

export { CS_PAGES, WORK_CS_PAGES, ALL_CATS, navHTML, csProjectNavHTML, csNextHTML, footerHTML, homeFooterHTML, logoAdHTML, csBackHTML, csBackToWorkHTML, csGoToTopHTML, csZoomImgHTML, csPhoneMockupHTML, csMacbookMockupHTML };
