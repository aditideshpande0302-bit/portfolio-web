'use strict';
import { navHTML } from './pages/shared.js';

// ══════════════════════════════════════════
    //  HASH ROUTER  (#home | #work | #about)
    //  Works in every environment — local file,
    //  CDN, iframe, server — no pathname needed.
    // ══════════════════════════════════════════

    function currentRoute() {
      const h = window.location.hash;
      if (h === '#work')      return 'work';
      if (h === '#about')     return 'about';
      if (h === '#rightwall') return 'rightwall';
      if (h === '#pur')       return 'pur';
      if (h === '#pathway')   return 'pathway';
      if (h === '#calmnest')  return 'calmnest';
      if (h === '#hydration') return 'hydration';
      if (h === '#genai')     return 'genai';
      if (h === '#contact')   return 'contact';
      if (h === '#empowered')  return 'empowered';
      if (h === '#barriers')    return 'barriers';
      if (h === '#aidesign')    return 'aidesign';
      return 'home';
    }

    function goTo(page) {
      window.location.hash = page === 'home' ? '' : page;
      // hashchange event fires render() automatically
    }

    // Track which Work category the user came from before opening a case study
    window._lastWorkCat = 'featured';

    function goToWork(cat) {
      // Use stored source category if 'auto', otherwise use explicit cat
      var activeCat = (cat === 'auto') ? window._lastWorkCat : cat;
      window.location.hash = 'work';
      setTimeout(function() {
        var tabs = document.querySelectorAll('.cat-tab');
        var catKey = activeCat;
        var target = null;
        if (catKey === 'all')      target = [...tabs].find(b => b.textContent.includes('UI/UX'));
        else if (catKey === 'research') target = [...tabs].find(b => b.textContent.includes('Research'));
        else if (catKey === 'ai')  target = [...tabs].find(b => b.textContent.includes('AI'));
        else                       target = [...tabs].find(b => b.textContent.includes('Featured'));
        if (target) window.switchCat(catKey, target);
      }, 80);
    }

    // Store source category when a project card is clicked from the Work page
    function scrollToFooter() {
      // If not on a page that has a footer, go to about page first then scroll
      const footer = document.getElementById('site-footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Navigate to about page which has footer
        goTo('about');
        setTimeout(() => {
          const f = document.getElementById('site-footer');
          if (f) f.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    }

    function openProject(page, sourceCat) {
      window._lastWorkCat = sourceCat || 'featured';
      goTo(page);
    }

    window.addEventListener('hashchange', function() {
      render(currentRoute());
    });

    // ── NAV HTML ──────────────────────────────


    // ── HOME HTML ─────────────────────────────

    // ── WORK HTML ─────────────────────────────


    // ── ABOUT HTML ────────────────────────────

    // ══════════════════════════════════════════
    //  RENDER — wipes and replaces both nav + app
    // ══════════════════════════════════════════

    // ── RIGHTWALL CASE STUDY ──────────────────



    // ── PUR WATER PURIFIER CASE STUDY ─────────


    // ── PATHWAY CASE STUDY ────────────────────


    // ── CALMNEST CASE STUDY ───────────────────


    // ── HYDRATION APP CASE STUDY ──────────────


    // ── GEN AI CASE STUDY ────────────────────



    // ── EMPOWERED VOTE CASE STUDY ──────────────


    // ── BARRIERS IN EXHIBITION OPPORTUNITIES ──


    // ── AI DESIGN TOOL COMPARISON ─────────────


    // ── AI DESIGN TOOL COMPARISON ─────────────


    // ── AI DESIGN TOOL COMPARISON ─────────────


    // ── AI DESIGN TOOL COMPARISON ─────────────

    // ── CONTACT PAGE ─────────────────────────

    // ── Case study next/other nav ──────────────
    // All possible categories
    // ── Lazy route registry. Each value is a () => Promise<Module>; the
    // resolved module's default export is the HTML generator. Modules are
    // cached after first load so back/forward navigation is instant.
    const pages = {
      home:      () => import('./pages/home.js'),
      work:      () => import('./pages/work.js'),
      about:     () => import('./pages/about.js'),
      contact:   () => import('./pages/contact.js'),
      rightwall: () => import('./pages/case/rightwall.js'),
      pur:       () => import('./pages/case/pur.js'),
      pathway:   () => import('./pages/case/pathway.js'),
      calmnest:  () => import('./pages/case/calmnest.js'),
      hydration: () => import('./pages/case/hydration.js'),
      genai:     () => import('./pages/case/genai.js'),
      empowered: () => import('./pages/case/empowered.js'),
      barriers:  () => import('./pages/case/barriers.js'),
      aidesign:  () => import('./pages/case/aidesign.js'),
    };
    const _modCache = new Map();
    async function loadPage(page) {
      const loader = pages[page] || pages.home;
      let mod = _modCache.get(loader);
      if (!mod) { mod = await loader(); _modCache.set(loader, mod); }
      return mod.default;
    }

    const PAGE_TITLES = {
      home:      'Aditi Deshpande - Product Designer',
      work:      'Selected Work - Aditi Deshpande',
      about:     'About - Aditi Deshpande',
      contact:   'Contact - Aditi Deshpande',
      rightwall: 'RightWall - Case Study - Aditi Deshpande',
      pur:       'PUR Water Purifier - Case Study - Aditi Deshpande',
      pathway:   'Pathway - Case Study - Aditi Deshpande',
      calmnest:  'CalmNest - Case Study - Aditi Deshpande',
      hydration: 'Hydration - Case Study - Aditi Deshpande',
      genai:     'GenAI - Case Study - Aditi Deshpande',
      empowered: 'Empowered Vote - Case Study - Aditi Deshpande',
      barriers:  'Barriers - Case Study - Aditi Deshpande',
      aidesign:  'AI Design - Case Study - Aditi Deshpande',
    };

    let _renderToken = 0;
    async function render(page) {
      const token = ++_renderToken;
      const navEl = document.getElementById('nav');
      const app = document.getElementById('app');
      navEl.innerHTML = navHTML(page);
      const generate = await loadPage(page);
      if (token !== _renderToken) return; // a newer navigation superseded us
      app.innerHTML = generate();
      document.title = PAGE_TITLES[page] || PAGE_TITLES.home;
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    }


    // ── Work category tabs
    window.switchCat = function(cat, btn) {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.cat-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('cat-' + cat).classList.add('active');
    };

    // ══════════════════════════════════════════
    //  CURSOR
    // ══════════════════════════════════════════
    const cdot = document.getElementById('cdot');
    const cring = document.getElementById('cring');
    let mx=0,my=0,rx=0,ry=0;

    // Skip the cursor effect on touch devices and when the user prefers reduced motion.
    const _wantsCursor = (typeof matchMedia !== 'undefined')
      && matchMedia('(prefers-reduced-motion: no-preference)').matches
      && matchMedia('(pointer: fine)').matches;
    if (_wantsCursor) {
    document.addEventListener('mousemove', e => {
      mx=e.clientX; my=e.clientY;
      cdot.style.left=mx+'px'; cdot.style.top=my+'px';
      cdot.style.opacity='1'; cring.style.opacity='1';
    });
    (function loop(){ rx+=(mx-rx)*.12; ry+=(my-ry)*.12; cring.style.left=rx+'px'; cring.style.top=ry+'px'; requestAnimationFrame(loop); })();
    document.addEventListener('mouseleave',()=>{ cdot.style.opacity='0'; cring.style.opacity='0'; });

    const HOVER='.card,.resume-btn,.nav-link,.project-card,.cert-card,.cat-tab,.logo,.skill-group,.contact-card,.cs-next-card,.cs-other-card,.cs-back';

    // Keep dot at a smaller size on hover (never hide it), expand ring
    function onHoverEnter() {
      cdot.style.width='6px'; cdot.style.height='6px';
      cdot.style.opacity='1';
      cring.style.width='48px'; cring.style.height='48px';
    }
    function onHoverLeave() {
      cdot.style.width='10px'; cdot.style.height='10px';
      cring.style.width='38px'; cring.style.height='38px';
    }

    // Change cursor color for contrast when over orange elements
    function updateCursorColor(el) {
      const dark = document.body.classList.contains('dark');
      const style = window.getComputedStyle(el);
      const isOrangeBg = style.backgroundColor === 'rgb(196, 80, 42)';
      if (isOrangeBg) {
        // On filled orange backgrounds — dot goes white for contrast, ring goes light
        cdot.style.background = '#ffffff';
        cring.style.borderColor = dark ? '#F0EDE6' : '#ffffff';
      } else {
        // Default: ring always orange, dot is cream in dark mode / orange in light mode
        cring.style.borderColor = '#C4502A';
        cdot.style.background = dark ? '#F0EDE6' : '#C4502A';
      }
    }

    document.addEventListener('mouseover', e => {
      if (e.target.closest(HOVER)) onHoverEnter();
      updateCursorColor(e.target);
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(HOVER)) onHoverLeave();
      // Reset color when leaving any element
      const isDark = document.body.classList.contains('dark');
      cdot.style.background = isDark ? '#F0EDE6' : '#C4502A';
      cring.style.borderColor = '#C4502A';
    });
    } // end if(_wantsCursor)


    window.addEventListener('scroll',()=>{ document.getElementById('nav').classList.toggle('scrolled', window.scrollY>40); });

    // ══════════════════════════════════════════
    //  TOAST
    // ══════════════════════════════════════════
    let tt;
    window.toast = function(msg) {
      const t = document.getElementById('toast');
      t.textContent=msg; t.classList.add('show');
      clearTimeout(tt); tt=setTimeout(()=>t.classList.remove('show'),2800);
    };

    // ── Theme toggle
    function toggleTheme() {
      document.body.classList.toggle('dark');
      document.documentElement.classList.toggle('dark', document.body.classList.contains('dark'));
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
      // Refresh cursor color for current mode
      const isDark = document.body.classList.contains('dark');
      cdot.style.background = isDark ? '#F0EDE6' : '#C4502A';
      cring.style.borderColor = '#C4502A';
    }
    // Expose callbacks referenced by inline onclick="..." handlers in the
    // generated HTML. (Module-mode declarations don't auto-attach to window.)
    Object.assign(window, { goTo, openProject, goToWork, scrollToFooter, toggleTheme });

    // ── Boot
    render(currentRoute());
