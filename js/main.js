/* ============================================
   ASAP STUDIO — JS
   GSAP fromTo() only, never from()
   ============================================ */
(function () {
  'use strict';
  gsap.registerPlugin(ScrollTrigger);

  /* --- HEADER SCROLL --- */
  var header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    header.classList.toggle('header--scrolled', window.scrollY > 80);
  }, { passive: true });

  /* --- MOBILE MENU --- */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var on = hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      mobileMenu.setAttribute('aria-hidden', !on);
      hamburger.setAttribute('aria-expanded', on);
      document.body.style.overflow = on ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- SMOOTH SCROLL --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    });
  });

  /* --- STATS COUNTER --- */
  document.querySelectorAll('[data-count]').forEach(function (el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var obj = { v: 0 };
    gsap.fromTo(obj, { v: 0 }, {
      v: target,
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      onUpdate: function () { el.textContent = Math.round(obj.v).toLocaleString(); }
    });
  });

  /* --- HERO ENTRANCE --- */
  var heroH = document.querySelector('.hero__heading');
  if (heroH) {
    gsap.fromTo(heroH,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: 'power4.out' }
    );
  }

  /* --- SECTION REVEALS --- */
  var revealSections = [
    '.specialising__inner', '.stats__inner',
    '.services__label', '.services__heading', '.services__cta',
    '.voicebank h2', '.voicebank__sub', '.voicebank__filters',
    '.workflow__heading', '.workflow__sub',
    '.projects__label', '.projects__heading', '.projects__cta',
    '.team__heading', '.clients__heading', '.clients__cta',
    '.languages__heading', '.footer__title', '.footer__grid'
  ];
  revealSections.forEach(function (sel) {
    var el = document.querySelector(sel);
    if (el) {
      gsap.fromTo(el, { opacity: 0, y: 35 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
      });
    }
  });

  /* --- SERVICE CARDS STAGGER --- */
  var serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length) {
    gsap.fromTo(serviceCards,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.services__grid', start: 'top 82%', toggleActions: 'play none none none' } }
    );
  }

  /* --- SERVICE GLASS BUBBLE PARALLAX --- */
  document.querySelectorAll('.service-card__hover').forEach(function (el) {
    gsap.fromTo(el, { '--bubble-y': '8px' }, {
      '--bubble-y': '-8px',
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  });

  /* --- WORKFLOW CARDS --- */
  var wCards = document.querySelectorAll('.workflow__card');
  if (wCards.length) {
    gsap.fromTo(wCards,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.07, ease: 'power3.out',
        scrollTrigger: { trigger: '.workflow__grid', start: 'top 82%', toggleActions: 'play none none none' } }
    );
  }

  /* --- CLIENT LOGOS --- */
  var cLogos = document.querySelectorAll('.client-logo');
  if (cLogos.length) {
    gsap.fromTo(cLogos,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.35, stagger: 0.025, ease: 'power2.out',
        scrollTrigger: { trigger: '.clients__grid', start: 'top 82%', toggleActions: 'play none none none' } }
    );
  }

  /* --- TEAM MEMBERS --- */
  var teamM = document.querySelectorAll('.team__member');
  if (teamM.length) {
    gsap.fromTo(teamM,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: 'power3.out',
        scrollTrigger: { trigger: '.team__grid', start: 'top 82%', toggleActions: 'play none none none' } }
    );
  }

  /* --- PROJECT ITEMS --- */
  var pItems = document.querySelectorAll('.projects__item');
  if (pItems.length) {
    gsap.fromTo(pItems,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: '.projects__list', start: 'top 82%', toggleActions: 'play none none none' } }
    );
  }

  /* --- LANGUAGE LIST --- */
  var langItems = document.querySelectorAll('.list-column li');
  if (langItems.length) {
    gsap.fromTo(langItems,
      { opacity: 0 },
      { opacity: 1, duration: 0.2, stagger: 0.008, ease: 'power2.out',
        scrollTrigger: { trigger: '.list-column', start: 'top 85%', toggleActions: 'play none none none' } }
    );
  }

  /* --- STATS DIRECTIONAL SLIDE SWITCHER --- */
  var statsPanels = document.querySelectorAll('.stats__slide-panel');
  var statsDots = document.querySelectorAll('.stats__dot');
  var currentSlide = 0;
  var totalSlides = statsPanels.length;
  var isAnimating = false;

  // Lock wrapper height — measure tallest panel
  var slidesWrap = document.querySelector('.stats__slides-wrap');
  function setWrapHeight() {
    if (!slidesWrap) return;
    var maxH = 0;
    statsPanels.forEach(function(p) {
      // Temporarily make visible to measure
      var wasHidden = p.style.opacity;
      p.style.opacity = '1';
      p.style.position = 'relative';
      var h = p.offsetHeight;
      p.style.opacity = '';
      p.style.position = '';
      if (h > maxH) maxH = h;
    });
    slidesWrap.style.height = maxH + 'px';
  }
  setWrapHeight();
  window.addEventListener('resize', setWrapHeight);

  function goToSlide(idx) {
    if (isAnimating || idx === currentSlide) return;
    isAnimating = true;

    var outPanel = statsPanels[currentSlide];
    var inPanel = statsPanels[idx];

    // Fade out current
    outPanel.classList.remove('stats__slide-panel--active');
    outPanel.classList.add('stats__slide-panel--exit');

    // Fade in new
    inPanel.classList.add('stats__slide-panel--enter');

    // Update dots
    statsDots.forEach(function (d) { d.classList.remove('stats__dot--active'); });
    var activeDot = document.querySelector('[data-goto="' + idx + '"]');
    if (activeDot) activeDot.classList.add('stats__dot--active');

    // Cleanup after animation
    setTimeout(function () {
      outPanel.classList.remove('stats__slide-panel--exit');
      inPanel.classList.remove('stats__slide-panel--enter');
      inPanel.classList.add('stats__slide-panel--active');
      currentSlide = idx;
      isAnimating = false;
    }, 900);
  }

  // Auto-switch every 4s
  if (statsPanels.length > 1) {
    setInterval(function () {
      goToSlide((currentSlide + 1) % totalSlides);
    }, 4000);

    // Click dots to switch
    statsDots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        goToSlide(parseInt(this.getAttribute('data-goto'), 10));
      });
    });
  }

  /* --- BRIDGE ORB — drift to center between sections at stats midpoint --- */
  var orb = document.querySelector('.bridge-orb');
  if (orb) {
    gsap.fromTo(orb,
      { yPercent: 45, y: 0 },
      { yPercent: 55, y: 0, ease: 'none',
        scrollTrigger: {
          trigger: '.stats',
          start: 'top bottom',
          end: 'center center',
          scrub: 1
        }
      }
    );
  }

  /* --- PREVENT HORIZONTAL SCROLL (iOS fix) --- */
  window.addEventListener('scroll', function () {
    if (window.scrollX !== 0) {
      window.scrollTo(0, window.scrollY);
    }
  });

})();
