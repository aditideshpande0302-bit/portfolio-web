// Shared helpers and constants used by every route.
// csNextHTML reads window._lastWorkCat, set by openProject() in app.js.

const CS_PAGES = ['rightwall','pur','pathway','calmnest','hydration','genai','empowered','barriers','aidesign'];

const ALL_CATS = [
  { cat:'featured', label:'Featured Work',     desc:'Selected case studies and highlighted projects', icon:'Featured' },
  { cat:'all',      label:'UI/UX Projects',    desc:'Product and interface design work',              icon:'UI/UX'    },
  { cat:'research', label:'Research Projects', desc:'User research, studies, and insights',           icon:'Research' },
  { cat:'ai',       label:'AI Projects',       desc:'AI experiments and design workflows',            icon:'AI'       },
];

function navHTML(page) {
  const isHome = page === 'home';
  const isWork = page === 'work' || CS_PAGES.includes(page);
  const innerLinks = isHome ? '' : `
    <button class="nav-link ${isWork?'active':''}" onclick="goTo('work')">Work</button>
    <button class="nav-link ${page==='about'?'active':''}" onclick="goTo('about')">About</button>
    <button class="nav-link" onclick="scrollToFooter()">Contact</button>`;
  // Homepage: show Contact only (no Work/About)
  const homeContact = '';
  return `
    <div class="nav-inner">
      <button class="logo" onclick="goTo('home')">
        <span class="logo-a">a</span>
        <div class="logo-gap"><div class="logo-dot"></div></div>
        <span class="logo-d">d</span>
      </button>
      <div class="nav-right">
        ${isHome ? homeContact : innerLinks}
        <button class="resume-btn" onclick="window.open('https://drive.google.com/file/d/1fPzEONrtjJCbjkJK1fO4UbxTC8Oh8dmU/view?usp=drive_link','_blank')">Resume</button>
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
  const sourceCat = window._lastWorkCat || 'featured';
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
            <button class="footer-link-value" onclick="window.open('https://drive.google.com/file/d/1fPzEONrtjJCbjkJK1fO4UbxTC8Oh8dmU/view?usp=drive_link','_blank')">Download <span class="f-arr">↓</span></button>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">© 2026 Aditi Deshpande</span>
        <span class="footer-dot"></span>
      </div>
    </footer>`;
}

export { CS_PAGES, ALL_CATS, navHTML, csProjectNavHTML, csNextHTML, footerHTML };
