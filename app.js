'use strict';
import { navHTML, CS_PAGES } from './pages/shared.js';

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

    let _transitionBusy = false;

    function routeDepth(page) {
      if (page === 'home') return 0;
      if (CS_PAGES.includes(page)) return 2;
      return 1;
    }

    function shouldPageTransition(from, to) {
      if (from === to) return false;
      if (document.body.classList.contains('intro-active')) return false;
      if (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
      return true;
    }

    function getTransitionDirection(from, to) {
      return routeDepth(to) >= routeDepth(from) ? 'forward' : 'back';
    }

    function setRouteHash(page) {
      window.location.hash = page === 'home' ? '' : page;
    }

    function waitPanelAnimation(panel, ms) {
      return new Promise(function(resolve) {
        if (!panel) {
          resolve();
          return;
        }
        var done = false;
        function finish() {
          if (done) return;
          done = true;
          panel.removeEventListener('animationend', onEnd);
          clearTimeout(fallback);
          resolve();
        }
        function onEnd(e) {
          if (e.target !== panel) return;
          finish();
        }
        panel.addEventListener('animationend', onEnd);
        var fallback = setTimeout(finish, ms || 700);
      });
    }

    function transitionCover(direction) {
      var el = document.getElementById('page-transition');
      if (!el) return Promise.resolve();
      el.hidden = false;
      el.setAttribute('aria-hidden', 'false');
      el.className = 'page-transition page-transition--' + direction;
      el.classList.remove('is-covering', 'is-revealing');
      document.body.classList.add('transition-active');
      void el.offsetWidth;
      el.classList.add('is-covering');
      return waitPanelAnimation(el.querySelector('.page-transition__panel'), 700);
    }

    function transitionReveal(direction) {
      var el = document.getElementById('page-transition');
      if (!el) return Promise.resolve();
      el.className = 'page-transition page-transition--' + direction;
      el.classList.remove('is-covering');
      void el.offsetWidth;
      el.classList.add('is-revealing');
      return waitPanelAnimation(el.querySelector('.page-transition__panel'), 700).then(function() {
        el.hidden = true;
        el.setAttribute('aria-hidden', 'true');
        el.className = 'page-transition';
        document.body.classList.remove('transition-active');
      });
    }

    function goTo(page) {
      var target = page === 'home' ? 'home' : page;
      var from = currentRoute();
      if (from === target) return;
      if (!shouldPageTransition(from, target)) {
        setRouteHash(target);
        return;
      }
      if (_transitionBusy) return;
      _transitionBusy = true;
      var direction = getTransitionDirection(from, target);
      transitionCover(direction)
        .then(function() {
          setRouteHash(target);
          return render(target);
        })
        .then(function() {
          return transitionReveal(direction);
        })
        .finally(function() {
          _transitionBusy = false;
        });
    }

    // Track which Work category the user came from before opening a case study
    window._lastWorkCat = 'accessibility';

    function goToWork(cat) {
      var activeCat = (cat === 'auto') ? window._lastWorkCat : cat;
      if (activeCat === 'featured') activeCat = 'accessibility';
      window._pendingWorkCat = activeCat || 'ai';
      goTo('work');
    }

    function setWorkCatActive(cat) {
      document.querySelectorAll('.work-cat-nav__item').forEach(function(btn) {
        btn.classList.toggle('is-active', btn.dataset.cat === cat);
      });
    }

    let _currentWorkCat = null;
    let _workSwitchTimer = null;

    function reindexVisibleFigures() {
      var visible = document.querySelectorAll('.work-card-figure.is-visible');
      visible.forEach(function(fig, i) {
        fig.style.zIndex = String(i + 1);
        if (fig.classList.contains('is-entering')) {
          fig.style.animationDelay = (prefersReducedMotion() ? 0 : i * 100) + 'ms';
        } else {
          fig.style.animationDelay = '';
        }
        var card = fig.querySelector('.project-card');
        if (!card) return;
        if (i === 0) card.style.transform = 'rotate(0deg)';
        else if ((i + 1) % 2 === 0) card.style.transform = 'rotate(-1deg)';
        else card.style.transform = 'rotate(1deg)';
      });
    }

    function updateWorkStackHeight() {
      var stack = document.querySelector('.work-stack');
      if (!stack) return;
      var count = document.querySelectorAll('.work-card-figure.is-visible').length;
      stack.style.setProperty('--work-card-count', String(Math.max(count, 1)));
      document.documentElement.style.setProperty('--work-card-count', String(Math.max(count, 1)));
    }

    function applyWorkCat(cat, animate) {
      var stack = document.querySelector('.work-stack');
      var figures = document.querySelectorAll('.work-card-figure');
      if (!stack || !figures.length) return;

      figures.forEach(function(fig) {
        var show = fig.dataset.cat === cat;
        fig.classList.remove('is-exiting', 'is-entering', 'is-visible');
        if (show) {
          fig.classList.add('is-visible');
          if (animate) fig.classList.add('is-entering');
        }
      });
      reindexVisibleFigures();
      updateWorkStackHeight();
      setWorkCatActive(cat);
      _currentWorkCat = cat;
      window._lastWorkCat = cat;

      if (animate) {
        setTimeout(function() {
          figures.forEach(function(fig) { fig.classList.remove('is-entering'); });
        }, 600);
      }
    }

    function switchWorkCat(cat) {
      if (cat === _currentWorkCat) return;
      var stack = document.querySelector('.work-stack');
      var figures = document.querySelectorAll('.work-card-figure');
      if (!stack || !figures.length) return;

      var reduced = prefersReducedMotion();
      var outgoing = document.querySelectorAll('.work-card-figure.is-visible');

      if (reduced || !outgoing.length) {
        applyWorkCat(cat, false);
        return;
      }

      stack.classList.add('work-stack--switching');
      outgoing.forEach(function(fig) { fig.classList.add('is-exiting'); });

      clearTimeout(_workSwitchTimer);
      _workSwitchTimer = setTimeout(function() {
        applyWorkCat(cat, true);
        stack.classList.remove('work-stack--switching');
      }, 280);
    }

    var _aboutRevealObserver = null;
    var _aboutPhotoObserver = null;
    var _certLightboxKeyHandler = null;
    var _lightboxClickHandler = null;
    var _lightboxInitialized = false;
    var _aboutGalleryObserver = null;
    var _aboutGallerySpreadTimer = null;
    var _aboutGalleryResizeHandler = null;
    var _aboutGalleryResizeTimer = null;

    function teardownAboutScroll() {
      if (_aboutRevealObserver) {
        _aboutRevealObserver.disconnect();
        _aboutRevealObserver = null;
      }
      if (_aboutPhotoObserver) {
        _aboutPhotoObserver.disconnect();
        _aboutPhotoObserver = null;
      }
      if (_aboutGalleryObserver) {
        _aboutGalleryObserver.disconnect();
        _aboutGalleryObserver = null;
      }
      if (_aboutGallerySpreadTimer) {
        clearTimeout(_aboutGallerySpreadTimer);
        _aboutGallerySpreadTimer = null;
      }
      if (_aboutGalleryResizeHandler) {
        window.removeEventListener('resize', _aboutGalleryResizeHandler);
        _aboutGalleryResizeHandler = null;
      }
      if (_aboutGalleryResizeTimer) {
        clearTimeout(_aboutGalleryResizeTimer);
        _aboutGalleryResizeTimer = null;
      }
      if (_certLightboxKeyHandler) {
        document.removeEventListener('keydown', _certLightboxKeyHandler);
        _certLightboxKeyHandler = null;
      }
      var certLightbox = document.getElementById('cert-lightbox');
      if (certLightbox) {
        certLightbox.hidden = true;
        certLightbox.setAttribute('aria-hidden', 'true');
        certLightbox.classList.remove('is-open');
        document.body.style.overflow = '';
      }
      var photoGallery = document.getElementById('about-photo-gallery');
      if (photoGallery) {
        photoGallery.classList.remove('is-visible', 'is-spread');
      }
      document.querySelectorAll('.about-reveal.is-visible').forEach(function(el) {
        el.classList.remove('is-visible');
        el.style.animationDelay = '';
      });
    }

    function initAboutRevealObserver() {
      if (_aboutRevealObserver) _aboutRevealObserver.disconnect();

      var reveals = document.querySelectorAll('.about-reveal');
      if (!reveals.length) return;

      var prefersReduced = typeof matchMedia !== 'undefined'
        && matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReduced || window.innerWidth <= 768) {
        reveals.forEach(function(el) { el.classList.add('is-visible'); });
        return;
      }

      var revealIndex = {};
      reveals.forEach(function(el, index) {
        revealIndex[el] = index;
      });

      _aboutRevealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var idx = revealIndex[entry.target];
            if (typeof idx === 'number') {
              entry.target.style.animationDelay = (idx * 0.12) + 's';
            }
            entry.target.classList.add('is-visible');
            _aboutRevealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

      reveals.forEach(function(el) { _aboutRevealObserver.observe(el); });
    }

    function initAboutPhotoSwap() {
      if (_aboutPhotoObserver) _aboutPhotoObserver.disconnect();

      var frame = document.querySelector('.about-layout__frame');
      var photos = frame ? frame.querySelectorAll('.about-layout__photo-img') : null;
      var sections = document.querySelectorAll('[data-about-photo]');
      if (!photos || !photos.length || !sections.length) return;

      var prefersReduced = typeof matchMedia !== 'undefined'
        && matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      function setActivePhoto(index) {
        photos.forEach(function(img, i) {
          img.classList.toggle('is-active', i === index);
        });
      }

      _aboutPhotoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var idx = parseInt(entry.target.getAttribute('data-about-photo'), 10);
            if (!isNaN(idx)) setActivePhoto(idx);
          }
        });
      }, { threshold: 0.35, rootMargin: '-20% 0px -35% 0px' });

      sections.forEach(function(section) { _aboutPhotoObserver.observe(section); });
    }

    function initImageLightbox() {
      var lightbox = document.getElementById('cert-lightbox');
      if (!lightbox) return;

      var backdrop = lightbox.querySelector('.cert-lightbox__backdrop');
      var closeBtn = lightbox.querySelector('.cert-lightbox__close');
      var lightboxImg = lightbox.querySelector('.cert-lightbox__img');
      if (!backdrop || !closeBtn || !lightboxImg) return;

      function closeLightbox() {
        lightbox.classList.remove('is-open', 'cert-lightbox--wide');
        lightbox.hidden = true;
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        lightboxImg.removeAttribute('src');
        lightboxImg.alt = '';
      }

      function openLightbox(fullSrc, alt, isWide) {
        lightbox.classList.toggle('cert-lightbox--wide', !!isWide);
        lightboxImg.src = fullSrc;
        lightboxImg.alt = alt || 'Image preview';
        lightbox.hidden = false;
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(function() {
          lightbox.classList.add('is-open');
        });
      }

      if (!_lightboxClickHandler) {
        _lightboxClickHandler = function(e) {
          var certThumb = e.target.closest('.cert-row__thumb[data-cert-full]');
          var csZoom = e.target.closest('.cs-img-zoom[data-full]');
          var trigger = certThumb || csZoom;
          if (!trigger) return;
          var fullSrc = trigger.getAttribute('data-cert-full') || trigger.getAttribute('data-full');
          if (!fullSrc) return;
          var img = trigger.querySelector('img');
          openLightbox(fullSrc, img ? img.alt : '', !!csZoom);
        };
        document.addEventListener('click', _lightboxClickHandler);
      }

      if (!_lightboxInitialized) {
        backdrop.addEventListener('click', closeLightbox);
        closeBtn.addEventListener('click', closeLightbox);
        if (_certLightboxKeyHandler) {
          document.removeEventListener('keydown', _certLightboxKeyHandler);
        }
        _certLightboxKeyHandler = function(e) {
          if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
        };
        document.addEventListener('keydown', _certLightboxKeyHandler);
        _lightboxInitialized = true;
      }
    }

    function initAboutCertLightbox() {
      initImageLightbox();
    }

    function applyGallerySpread(gallery) {
      var stage = gallery.querySelector('.about-photo-gallery__stage');
      if (!stage || window.innerWidth <= 768) return;

      var items = Array.prototype.slice.call(gallery.querySelectorAll('.about-photo-gallery__item'));
      if (!items.length) return;

      var tileW = 172;
      var landscapeW = 218;
      var stagePad = 12;
      // ~42% overlap between neighbors — fanned deck like reference, all cards visible
      var step = Math.round(tileW * 0.58);
      var stageW = stage.offsetWidth;
      var neededW = step * 4 + landscapeW;
      var scale = Math.min(1, (stageW - stagePad * 2) / neededW);
      var yOffsets = [10, -8, 12, -10, 8];
      var rotations = [-3, 2, -1, 3, -2];

      items.sort(function(a, b) {
        return (parseFloat(a.getAttribute('data-x')) || 0) - (parseFloat(b.getAttribute('data-x')) || 0);
      });

      items.forEach(function(item, i) {
        var slot = i - 2;
        var x = slot * step * scale;
        var y = (yOffsets[i] || 0) * scale;
        item.style.setProperty('--x', x + 'px');
        item.style.setProperty('--y', y + 'px');
        item.style.setProperty('--order', String(i));
        item.style.setProperty('--z', String(10 + i * 10));
        if (item.dataset.rotSet !== '1') {
          item.style.setProperty('--rot', rotations[i] + 'deg');
          item.dataset.rotSet = '1';
        }
      });
    }

    function initAboutPhotoGallery() {
      if (_aboutGalleryObserver) _aboutGalleryObserver.disconnect();
      if (_aboutGallerySpreadTimer) {
        clearTimeout(_aboutGallerySpreadTimer);
        _aboutGallerySpreadTimer = null;
      }
      if (_aboutGalleryResizeHandler) {
        window.removeEventListener('resize', _aboutGalleryResizeHandler);
        _aboutGalleryResizeHandler = null;
      }
      if (_aboutGalleryResizeTimer) {
        clearTimeout(_aboutGalleryResizeTimer);
        _aboutGalleryResizeTimer = null;
      }

      var gallery = document.getElementById('about-photo-gallery');
      if (!gallery) return;

      var prefersReduced = typeof matchMedia !== 'undefined'
        && matchMedia('(prefers-reduced-motion: reduce)').matches;
      var isMobile = window.innerWidth <= 768;

      function activateGallery() {
        applyGallerySpread(gallery);
        gallery.classList.add('is-visible', 'is-spread');
      }

      if (!isMobile) {
        _aboutGalleryResizeHandler = function() {
          clearTimeout(_aboutGalleryResizeTimer);
          _aboutGalleryResizeTimer = setTimeout(function() {
            var g = document.getElementById('about-photo-gallery');
            if (g && window.innerWidth > 768) applyGallerySpread(g);
          }, 150);
        };
        window.addEventListener('resize', _aboutGalleryResizeHandler);
      }

      if (prefersReduced || isMobile) {
        activateGallery();
        return;
      }

      gallery.classList.remove('is-visible', 'is-spread');

      _aboutGalleryObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            setTimeout(activateGallery, 500);
            _aboutGalleryObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25, rootMargin: '0px 0px -5% 0px' });

      _aboutGalleryObserver.observe(gallery);
    }

    function initPrototypeVideos() {
      document.querySelectorAll('.cs-phone-mockup__video').forEach(function(video) {
        if (video.dataset.playInit) return;
        video.dataset.playInit = '1';
        var play = function() {
          video.play().catch(function() {});
        };
        play();
        if ('IntersectionObserver' in window) {
          var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) play();
              else video.pause();
            });
          }, { threshold: 0.35 });
          observer.observe(video);
        }
      });
    }

    function onCaseStudyRendered() {
      setHomeNavHeight();
      requestAnimationFrame(function() {
        initImageLightbox();
        initPrototypeVideos();
      });
    }

    function onAboutRendered() {
      teardownAboutScroll();
      setHomeNavHeight();
      requestAnimationFrame(function() {
        initAboutRevealObserver();
        initAboutPhotoSwap();
        initAboutCertLightbox();
        initAboutPhotoGallery();
        initAboutGalleryDotGrid();
      });
    }

    function onWorkRendered() {
      setHomeNavHeight();
      var stack = document.querySelector('.work-stack');
      var figures = document.querySelectorAll('.work-card-figure');
      if (!stack || !figures.length) return;

      clearTimeout(_workSwitchTimer);
      _currentWorkCat = null;
      figures.forEach(function(fig) {
        fig.classList.remove('is-exiting', 'is-entering', 'is-visible');
        fig.style.zIndex = '';
        fig.style.animationDelay = '';
      });
      if (window._pendingWorkCat) {
        var cat = window._pendingWorkCat;
        window._pendingWorkCat = null;
        setTimeout(function() {
          switchWorkCat(cat);
        }, 80);
      } else {
        applyWorkCat('ai', false);
      }
    }

    // Store source category when a project card is clicked from the Work page
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

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
      window._lastWorkCat = sourceCat || 'accessibility';
      goTo(page);
    }

    window.addEventListener('hashchange', function() {
      if (_transitionBusy) return;
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
      empowered: 'Empowered Essentials - Case Study - Aditi Deshpande',
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
      if (page === 'home') {
        onHomeRendered();
      } else if (page === 'work') {
        onWorkRendered();
      } else if (page === 'about') {
        onAboutRendered();
      } else if (CS_PAGES.includes(page)) {
        teardownAboutScroll();
        onCaseStudyRendered();
      } else {
        teardownAboutScroll();
        setHomeNavHeight();
      }
    }


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

    const HOVER='.card,.resume-btn,.nav-link,.project-card,.cert-card,.cat-tab,.logo,.skill-group,.contact-card,.cs-next-card,.cs-other-card,.cs-back,.cs-go-top';

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
        cdot.style.background = '#C4502A';
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
      cdot.style.background = '#C4502A';
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
      cdot.style.background = '#C4502A';
      cring.style.borderColor = '#C4502A';
    }
    // Expose callbacks referenced by inline onclick="..." handlers in the
    // generated HTML. (Module-mode declarations don't auto-attach to window.)
    Object.assign(window, { goTo, openProject, goToWork, switchWorkCat, scrollToTop, scrollToFooter, toggleTheme });

    // ── Page intro (home, once per session)
    function prefersReducedMotion() {
      return typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function fixAppVisibility() {
      const app = document.getElementById('app');
      if (!app) return;
      app.style.opacity = '1';
      app.style.visibility = 'visible';
      app.style.transform = 'none';
    }

    function ensureHeroShellVisible(root) {
      if (!root) return;
      root.style.opacity = '1';
      root.style.visibility = 'visible';
      const hero = root.querySelector('.hero');
      if (hero) {
        hero.style.opacity = '1';
        hero.style.visibility = 'visible';
        hero.style.position = 'relative';
        hero.style.zIndex = '2';
        hero.style.transform = 'none';
      }
    }

    function ensureHeadlineVisible(root) {
      if (!root) return;
      root.classList.add('hero-reveal-done');
      root.querySelectorAll('.headline, .subtext, .hero-cta, .hero-btn').forEach(function (el) {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.transform = 'none';
        if (el.classList.contains('hero-cta')) {
          el.style.display = 'flex';
        }
      });
    }

    function startHeroEntrance() {
      const root = document.querySelector('.home-root');
      if (!root || prefersReducedMotion()) return;
      root.classList.add('hero-entrance-active');
    }

    function ensureHeroVisible() {
      fixAppVisibility();
      const root = document.querySelector('.home-root');
      if (!root) return;
      root.classList.remove('hero-reveal-pending');
      root.classList.remove('hero-reveal-active');
      root.classList.add('hero-reveal-done');
      ensureHeroShellVisible(root);
      const skipAnimated = root.classList.contains('hero-entrance-active');
      root.querySelectorAll(
        '.headline, .subtext, .hero-cta, .hero-btn, .hero-btn-primary, .hero-btn-ghost, .accent'
      ).forEach(function (el) {
        if (skipAnimated && (el.classList.contains('headline') || el.classList.contains('subtext') || el.classList.contains('hero-cta'))) {
          return;
        }
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.transform = 'none';
        if (el.classList.contains('hero-cta')) {
          el.style.display = 'flex';
        }
      });
    }

    function initDotGridOverlay(container, overlay) {
      if (!container || !overlay || overlay.dataset.initialized === '1') return;
      overlay.dataset.initialized = '1';
      if (prefersReducedMotion()) return;

      let spotX = -999;
      let spotY = -999;
      let targetX = -999;
      let targetY = -999;
      let spotRaf = null;

      function applySpotPosition() {
        overlay.style.setProperty('--spot-x', spotX + 'px');
        overlay.style.setProperty('--spot-y', spotY + 'px');
      }

      function tickSpotlight() {
        const step = 1 - Math.pow(1 - 0.03, 2);
        spotX += (targetX - spotX) * step;
        spotY += (targetY - spotY) * step;
        applySpotPosition();
        if (overlay.classList.contains('is-active')) {
          spotRaf = requestAnimationFrame(tickSpotlight);
        } else {
          spotRaf = null;
        }
      }

      function startSpotlightLoop() {
        if (!spotRaf) {
          spotRaf = requestAnimationFrame(tickSpotlight);
        }
      }

      function updateSpotlight(e) {
        const rect = container.getBoundingClientRect();
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;
        startSpotlightLoop();
      }

      function hideSpotlight() {
        overlay.classList.remove('is-active');
        targetX = -999;
        targetY = -999;
        spotX = -999;
        spotY = -999;
        applySpotPosition();
        if (spotRaf) {
          cancelAnimationFrame(spotRaf);
          spotRaf = null;
        }
      }

      container.addEventListener('mouseenter', function (e) {
        overlay.classList.add('is-active');
        updateSpotlight(e);
      });
      container.addEventListener('mousemove', updateSpotlight);
      container.addEventListener('mouseleave', hideSpotlight);
    }

    function initHeroDotGrid() {
      const heroBlock = document.querySelector('.home-root .home-hero-block');
      const overlay = heroBlock && heroBlock.querySelector('.hero-grid-overlay');
      initDotGridOverlay(heroBlock, overlay);
    }

    function initAboutGalleryDotGrid() {
      const gallery = document.getElementById('about-photo-gallery');
      const overlay = gallery && gallery.querySelector('.about-gallery-grid-overlay');
      initDotGridOverlay(gallery, overlay);
    }

    function setHomeNavHeight() {
      const nav = document.getElementById('nav');
      if (!nav) return;
      document.documentElement.style.setProperty('--home-nav-h', nav.offsetHeight + 'px');
    }

    function onHomeRendered() {
      fixAppVisibility();
      const root = document.querySelector('.home-root');
      if (!root) return;
      setHomeNavHeight();
      initHeroDotGrid();
      ensureHeroShellVisible(root);
      if (prefersReducedMotion()) {
        ensureHeadlineVisible(root);
        return;
      }
      const introEl = document.getElementById('page-intro');
      const introRunning = introEl && !introEl.hidden;
      if (!introRunning && !root.classList.contains('hero-entrance-active')) {
        requestAnimationFrame(function () {
          root.classList.add('hero-entrance-active');
        });
      }
      window.setTimeout(function () {
        ensureHeadlineVisible(root);
      }, 2600);
    }

    function finishPageIntro(intro) {
      // Guard against double-invocation: the animationend listener and a
      // fallback timer can both fire for the same step on the same tick.
      if (intro && intro.dataset.finished === '1') return;
      if (intro) {
        intro.dataset.finished = '1';
        intro.remove();
      }
      document.body.classList.remove('intro-active');
      try { sessionStorage.setItem('introPlayed', '1'); } catch (e) {}
      if (currentRoute() === 'home') {
        onHomeRendered();
      }
    }

    function initPageIntro() {
      const intro = document.getElementById('page-intro');
      if (!intro) return;
      if (sessionStorage.getItem('introPlayed')) {
        finishPageIntro(intro);
        return;
      }
      if (currentRoute() !== 'home') {
        finishPageIntro(intro);
        return;
      }
      if (prefersReducedMotion()) {
        finishPageIntro(intro);
        return;
      }

      intro.hidden = false;
      document.body.classList.add('intro-active');

      const title = intro.querySelector('.page-intro__title');
      const progressFill = intro.querySelector('.page-intro__progress-fill');
      const wipe = intro.querySelector('.page-intro__wipe');

      // Each CSS animation in the chain is driven by an animationend
      // listener. Browsers occasionally drop or coalesce these events when
      // multiple animations end on the same tick, which would leave the
      // overlay stuck on screen (opacity:0 but still capturing clicks).
      // Each step is paired with a setTimeout fallback slightly longer
      // than its CSS duration, plus a final safety net that force-finishes
      // the intro after the maximum chain length + buffer.
      let finished = false;
      const stepTimers = [];
      const safetyTimer = window.setTimeout(function () {
        forceFinish();
      }, 6000);

      function clearStepTimers() {
        while (stepTimers.length) {
          window.clearTimeout(stepTimers.pop());
        }
      }

      function forceFinish() {
        if (finished) return;
        finished = true;
        clearStepTimers();
        window.clearTimeout(safetyTimer);
        finishPageIntro(intro);
      }

      function advance(step) {
        if (finished) return;
        if (step === 'progress' && !intro.classList.contains('page-intro--progress')) {
          intro.classList.add('page-intro--progress');
        } else if (step === 'expand' && !intro.classList.contains('page-intro--expand')) {
          intro.classList.add('page-intro--expand');
        } else if (step === 'fadeOut' && !intro.classList.contains('page-intro--fadeOut')) {
          intro.classList.add('page-intro--fadeOut');
          startHeroEntrance();
        } else if (step === 'finish') {
          forceFinish();
        }
      }

      requestAnimationFrame(function () {
        intro.classList.add('page-intro--zoom');
      });

      title.addEventListener('animationend', function onZoomEnd(e) {
        if (e.animationName !== 'introZoom') return;
        title.removeEventListener('animationend', onZoomEnd);
        advance('progress');
      });
      stepTimers.push(window.setTimeout(function () { advance('progress'); }, 1200));

      progressFill.addEventListener('animationend', function onProgressEnd(e) {
        if (e.animationName !== 'introProgressFill') return;
        progressFill.removeEventListener('animationend', onProgressEnd);
        advance('expand');
      });
      stepTimers.push(window.setTimeout(function () { advance('expand'); }, 3000));

      wipe.addEventListener('animationend', function onWipeEnd(e) {
        if (e.animationName !== 'introWipeExpand') return;
        wipe.removeEventListener('animationend', onWipeEnd);
        advance('fadeOut');
      });
      stepTimers.push(window.setTimeout(function () { advance('fadeOut'); }, 4000));

      intro.addEventListener('animationend', function onFadeOutEnd(e) {
        if (e.animationName !== 'introFadeOut') return;
        intro.removeEventListener('animationend', onFadeOutEnd);
        advance('finish');
      });
      stepTimers.push(window.setTimeout(function () { advance('finish'); }, 4800));
    }

    // ── Boot
    initPageIntro();
    render(currentRoute());
