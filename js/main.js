/**
 * ELLYCARDIN TEKSTIL — Main application logic
 * All library usage is wrapped in availability checks.
 */
(function() {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================
  // LOADER
  // ============================================
  function initLoader() {
    var loader = document.getElementById('loader');
    if (!loader) return;

    if (reducedMotion) {
      loader.style.display = 'none';
      return;
    }

    // Skip on click
    loader.addEventListener('click', function() {
      hideLoader();
    });

    // Auto-hide after 1.4s
    setTimeout(hideLoader, 1400);
    // Failsafe: always remove after 2.5s
    setTimeout(function() {
      if (loader && loader.parentNode) {
        loader.classList.add('hidden');
        setTimeout(function() { if (loader.parentNode) loader.parentNode.removeChild(loader); }, 500);
      }
    }, 2500);

    function hideLoader() {
      if (!loader || loader.classList.contains('hidden')) return;
      loader.classList.add('hidden');
      setTimeout(function() { if (loader.parentNode) loader.parentNode.removeChild(loader); }, 500);
    }
  }

  // ============================================
  // NAVIGATION
  // ============================================
  function initNav() {
    var burger = document.getElementById('nav-burger');
    var mobileMenu = document.getElementById('mobile-menu');
    var navLinks = document.querySelectorAll('.mobile-menu__nav a, .nav-links a');

    if (burger && mobileMenu) {
      burger.addEventListener('click', function() {
        var isOpen = mobileMenu.classList.contains('open');
        mobileMenu.classList.toggle('open');
        burger.setAttribute('aria-expanded', !isOpen);
        mobileMenu.setAttribute('aria-hidden', isOpen);
        document.body.style.overflow = isOpen ? '' : 'hidden';
      });

      // Close on link click
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
          mobileMenu.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          mobileMenu.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        });
      }

      // Close on Escape
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          mobileMenu.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
          burger.focus();
        }
      });
    }

    // Back to top
    var btnTop = document.getElementById('btn-top');
    if (btnTop) {
      btnTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
      });
    }
  }

  // ============================================
  // SCROLL PROGRESS
  // ============================================
  function initScrollProgress() {
    var fill = document.getElementById('scroll-progress-fill');
    var needle = document.getElementById('scroll-needle');
    if (!fill || !needle) return;

    function update() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      fill.style.width = progress + '%';
      needle.style.left = progress + '%';
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // ============================================
  // CURSOR TRAIL
  // ============================================
  function initCursorTrail() {
    if (reducedMotion) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    var canvas = document.getElementById('cursor-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var dots = [];
    var mouseX = 0, mouseY = 0;
    var isOverLink = false;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dots.push({ x: mouseX, y: mouseY, life: 1 });
      if (dots.length > 20) dots.shift();
    });

    // Detect hover over links/buttons
    document.addEventListener('mouseover', function(e) {
      if (e.target.closest('a, button')) isOverLink = true;
    });
    document.addEventListener('mouseout', function(e) {
      if (e.target.closest('a, button')) isOverLink = false;
    });

    // Pause when tab hidden
    var paused = false;
    document.addEventListener('visibilitychange', function() {
      paused = document.hidden;
    });

    function animate() {
      if (paused) { requestAnimationFrame(animate); return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = dots.length - 1; i >= 0; i--) {
        dots[i].life -= 0.05;
        if (dots[i].life <= 0) { dots.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(dots[i].x, dots[i].y, 2 + (isOverLink ? 3 : 0) * dots[i].life, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(194, 165, 107, ' + (dots[i].life * 0.6) + ')';
        ctx.fill();
      }

      // Main dot
      ctx.beginPath();
      var radius = isOverLink ? 6 : 4;
      ctx.arc(mouseX, mouseY, radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(194, 165, 107, 0.8)';
      ctx.fill();

      requestAnimationFrame(animate);
    }
    animate();
  }

  // ============================================
  // LANGUAGE SWITCHER
  // ============================================
  function initLangSwitch() {
    var btns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function() {
        var lang = this.getAttribute('data-lang');
        if (lang) setLanguage(lang);
        // Re-render dynamic content
        renderProducts();
        renderFAQ();
        renderRequisites();
        populateProductSelect();
      });
    }
  }

  // ============================================
  // THREAD ANIMATIONS (GSAP ScrollTrigger)
  // ============================================
  function initThreads() {
    if (!window.gsap || !window.ScrollTrigger) return;
    if (reducedMotion) {
      // Show all threads fully drawn
      var paths = document.querySelectorAll('.section-thread path, .route-thread-line');
      for (var i = 0; i < paths.length; i++) {
        paths[i].style.strokeDashoffset = '0';
      }
      return;
    }

    window.gsap.registerPlugin(window.ScrollTrigger);

    // Animate each section's thread
    var threads = document.querySelectorAll('.section-thread path');
    for (var i = 0; i < threads.length; i++) {
      var section = threads[i].closest('.section, .hero');
      if (!section) continue;
      window.gsap.to(threads[i], {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      });
    }

    // Route threads
    var routeLines = document.querySelectorAll('.route-thread-line');
    for (var j = 0; j < routeLines.length; j++) {
      window.gsap.to(routeLines[j], {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#route',
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1
        }
      });
    }

    // Process line
    var processLine = document.querySelector('.process-line-fill');
    if (processLine) {
      window.gsap.to(processLine, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#process',
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1,
          onUpdate: function(self) {
            // Light up process steps sequentially
            var steps = document.querySelectorAll('.process-step');
            var progress = self.progress;
            for (var k = 0; k < steps.length; k++) {
              if (progress > (k / steps.length)) {
                steps[k].classList.add('lit');
              }
            }
          }
        }
      });
    }
  }

  // ============================================
  // PRODUCTS SLIDER (Embla)
  // ============================================
  var emblaApi = null;
  var autoplayActive = true;

  function renderProducts() {
    var container = document.getElementById('slider-container');
    if (!container) return;
    container.innerHTML = '';

    for (var i = 0; i < PRODUCTS.length; i++) {
      var p = PRODUCTS[i];
      var slide = document.createElement('div');
      slide.className = 'embla__slide';
      slide.innerHTML =
        '<div class="product-card" tabindex="0" data-product-id="' + p.id + '" role="button" aria-label="' + getProductTitle(p) + '">' +
          '<div class="product-card__image">' +
            '<img src="' + p.image + '" alt="' + getProductTitle(p) + '" loading="lazy" width="400" height="300" onerror="this.style.display=\'none\'">' +
            '<div class="product-card__placeholder">' +
              '<svg viewBox="0 0 100 100"><path d="M10,50 Q30,30 50,50 T90,50" fill="none" stroke="rgba(194,165,107,0.4)" stroke-width="1"/><path d="M10,60 Q30,40 50,60 T90,60" fill="none" stroke="rgba(194,165,107,0.3)" stroke-width="0.8"/><path d="M10,40 Q30,20 50,40 T90,40" fill="none" stroke="rgba(194,165,107,0.2)" stroke-width="0.6"/></svg>' +
            '</div>' +
            '<span class="product-card__tag">' + t('products.sample') + '</span>' +
          '</div>' +
          '<div class="product-card__info">' +
            '<h3 class="product-card__title">' + getProductTitle(p) + '</h3>' +
            '<p class="product-card__text">' + getProductText(p) + '</p>' +
          '</div>' +
          '<div class="product-card__underline"></div>' +
        '</div>';
      container.appendChild(slide);
    }

    // Init Embla
    initEmbla();
  }

  function initEmbla() {
    if (!window.EmblaCarousel) return;
    var container = document.getElementById('slider-container');
    if (!container) return;

    // Destroy previous
    if (emblaApi) { emblaApi.destroy(); emblaApi = null; }

    var opts = { loop: true, align: 'start' };
    var plugins = [];

    // Autoplay (if not reduced motion)
    if (!reducedMotion && window.EmblaCarouselAutoplay) {
      plugins.push(window.EmblaCarouselAutoplay({ delay: 4500, stopOnInteraction: false }));
    }

    emblaApi = window.EmblaCarousel(container, opts, plugins);

    // Navigation
    var prevBtn = document.getElementById('slider-prev');
    var nextBtn = document.getElementById('slider-next');
    if (prevBtn) prevBtn.addEventListener('click', function() { emblaApi.scrollPrev(); });
    if (nextBtn) nextBtn.addEventListener('click', function() { emblaApi.scrollNext(); });

    // Keyboard
    container.setAttribute('tabindex', '0');
    container.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') emblaApi.scrollPrev();
      if (e.key === 'ArrowRight') emblaApi.scrollNext();
    });

    // Product card click -> lightbox
    var cards = container.querySelectorAll('.product-card');
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', function() {
        var id = this.getAttribute('data-product-id');
        openLightbox(id);
      });
      cards[i].addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var id = this.getAttribute('data-product-id');
          openLightbox(id);
        }
      });
    }

    // Play/Pause button
    var playBtn = document.getElementById('slider-play');
    if (playBtn) {
      playBtn.addEventListener('click', function() {
        autoplayActive = !autoplayActive;
        var icons = this.querySelectorAll('svg');
        if (autoplayActive) {
          icons[0].style.display = '';
          icons[1].style.display = 'none';
          if (emblaApi && emblaApi.plugins().autoplay) emblaApi.plugins().autoplay.play();
        } else {
          icons[0].style.display = 'none';
          icons[1].style.display = '';
          if (emblaApi && emblaApi.plugins().autoplay) emblaApi.plugins().autoplay.stop();
        }
      });
    }

    // Stop autoplay on hover/focus
    var wrapper = container.closest('.slider-wrapper');
    if (wrapper) {
      wrapper.addEventListener('mouseenter', function() {
        if (emblaApi && emblaApi.plugins().autoplay) emblaApi.plugins().autoplay.stop();
      });
      wrapper.addEventListener('mouseleave', function() {
        if (autoplayActive && emblaApi && emblaApi.plugins().autoplay) emblaApi.plugins().autoplay.play();
      });
    }
  }

  // ============================================
  // LIGHTBOX
  // ============================================
  var lightboxTrigger = null;

  function openLightbox(productId) {
    var lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    var product = null;
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].id === productId) { product = PRODUCTS[i]; break; }
    }
    if (!product) return;

    lightboxTrigger = document.activeElement;

    var titleEl = document.getElementById('lightbox-title');
    var textEl = document.getElementById('lightbox-text');
    var imageEl = document.getElementById('lightbox-image');
    if (titleEl) titleEl.textContent = getProductTitle(product);
    if (textEl) textEl.textContent = getProductText(product);
    if (imageEl) {
      imageEl.innerHTML = '<img src="' + product.image + '" alt="' + getProductTitle(product) + '" onerror="this.style.display=\'none\'">';
    }

    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus trap
    var closeBtn = document.getElementById('lightbox-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lightboxTrigger) lightboxTrigger.focus();
  }

  function initLightbox() {
    var closeBtn = document.getElementById('lightbox-close');
    var overlay = document.getElementById('lightbox-overlay');
    var inquiryBtn = document.getElementById('lightbox-inquiry');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (overlay) overlay.addEventListener('click', closeLightbox);

    // Inquiry from lightbox
    if (inquiryBtn) {
      inquiryBtn.addEventListener('click', function() {
        closeLightbox();
        var productSelect = document.getElementById('inq-product');
        if (productSelect) {
          var title = document.getElementById('lightbox-title');
          if (title) {
            var options = productSelect.options;
            for (var i = 0; i < options.length; i++) {
              if (options[i].text === title.textContent) {
                productSelect.selectedIndex = i;
                break;
              }
            }
          }
        }
        setTimeout(function() {
          var inquiry = document.getElementById('inquiry');
          if (inquiry) inquiry.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
        }, 100);
      });
    }

    // Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        var lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.style.display !== 'none') closeLightbox();
      }
    });
  }

  // ============================================
  // FAQ
  // ============================================
  function renderFAQ() {
    var list = document.getElementById('faq-list');
    if (!list) return;

    var questions = ['faq.q1', 'faq.q2', 'faq.q3', 'faq.q4', 'faq.q5'];
    var answers = ['faq.a1', 'faq.a2', 'faq.a3', 'faq.a4', 'faq.a5'];

    list.innerHTML = '';
    for (var i = 0; i < questions.length; i++) {
      var details = document.createElement('details');
      details.className = 'faq-item';
      details.innerHTML =
        '<summary>' + t(questions[i]) + '</summary>' +
        '<div class="faq-item__answer">' + t(answers[i]) + '</div>';
      list.appendChild(details);
    }
  }

  // ============================================
  // REQUISITES
  // ============================================
  function renderRequisites() {
    var tbody = document.getElementById('req-tbody');
    if (!tbody) return;

    var lang = document.documentElement.lang || 'uz';
    var rows = [
      { label: t('req.company'), value: CONFIG.legalName },
      { label: t('req.taxId'), value: CONFIG.taxId },
      { label: t('req.account'), value: CONFIG.bank.usdAccount },
      { label: t('req.bank'), value: CONFIG.bank.name + ', ' + (CONFIG.bank.city[lang] || CONFIG.bank.city.uz) },
      { label: t('req.bankCode'), value: CONFIG.bank.bankCode },
      { label: t('req.swift'), value: CONFIG.bank.swift },
      { label: t('req.address'), value: CONFIG.address[lang] || CONFIG.address.uz }
    ];

    tbody.innerHTML = '';
    for (var i = 0; i < rows.length; i++) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<th>' + rows[i].label + '</th>' +
        '<td>' + rows[i].value +
          '<button class="copy-btn" data-copy="' + rows[i].value + '" aria-label="' + t('req.copy') + '">' +
            '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1"/><path d="M2 9V2h7" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>' +
            '<span>' + t('req.copy') + '</span>' +
          '</button>' +
        '</td>';
      tbody.appendChild(tr);
    }

    // Copy buttons
    var copyBtns = tbody.querySelectorAll('.copy-btn');
    for (var j = 0; j < copyBtns.length; j++) {
      copyBtns[j].addEventListener('click', handleCopy);
    }
  }

  function handleCopy(e) {
    var btn = e.currentTarget;
    var text = btn.getAttribute('data-copy');
    var statusEl = document.getElementById('copy-status');

    function onSuccess() {
      var span = btn.querySelector('span');
      if (span) span.textContent = t('req.copied');
      if (statusEl) statusEl.textContent = t('req.copied');
      setTimeout(function() {
        if (span) span.textContent = t('req.copy');
        if (statusEl) statusEl.textContent = '';
      }, 1600);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(function() {
        fallbackCopy(text);
        onSuccess();
      });
    } else {
      fallbackCopy(text);
      onSuccess();
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch(e) {}
    document.body.removeChild(ta);
  }

  // PDF download (uses print)
  function initPDF() {
    var btn = document.getElementById('btn-pdf');
    if (!btn) return;
    btn.addEventListener('click', function() {
      window.print();
    });
  }

  // ============================================
  // INQUIRY FORM
  // ============================================
  function populateProductSelect() {
    var select = document.getElementById('inq-product');
    if (!select) return;

    // Keep first and last option, rebuild middle
    var firstOption = select.options[0];
    var lastOption = select.querySelector('option[value="other"]');

    select.innerHTML = '';
    if (firstOption) {
      firstOption.textContent = t('inquiry.productPlaceholder');
      select.appendChild(firstOption);
    }

    for (var i = 0; i < PRODUCTS.length; i++) {
      var opt = document.createElement('option');
      opt.value = PRODUCTS[i].id;
      opt.textContent = getProductTitle(PRODUCTS[i]);
      select.appendChild(opt);
    }

    if (lastOption) {
      lastOption.textContent = t('inquiry.productOther');
      select.appendChild(lastOption);
    }
  }

  function initForm() {
    var phoneInput = document.getElementById('inq-phone');
    if (phoneInput) {
      phoneInput.addEventListener('input', function(e) {
        // Allow only digits and +
        var val = e.target.value.replace(/[^\d+]/g, '');
        // Ensure starts with +998
        if (val.length > 0 && val[0] !== '+') val = '+' + val;
        if (val.length > 1 && val.slice(0, 2) !== '+9') val = '+998' + val.replace(/^\+?998?/, '');
        e.target.value = val.slice(0, 13); // +998XXXXXXXXX
      });
    }

    var btnWA = document.getElementById('btn-whatsapp');
    var btnEmail = document.getElementById('btn-email');

    if (btnWA) btnWA.addEventListener('click', function() { sendInquiry('whatsapp'); });
    if (btnEmail) btnEmail.addEventListener('click', function() { sendInquiry('email'); });
  }

  function sendInquiry(channel) {
    // Honeypot check
    var hp = document.querySelector('.hp-field input');
    if (hp && hp.value) return; // Bot

    // Validate
    var name = document.getElementById('inq-name');
    var phone = document.getElementById('inq-phone');
    var consent = document.getElementById('inq-consent');
    var product = document.getElementById('inq-product');
    var quantity = document.getElementById('inq-quantity');
    var comment = document.getElementById('inq-comment');
    var status = document.getElementById('form-status');

    var valid = true;

    // Clear errors
    document.getElementById('err-name').textContent = '';
    document.getElementById('err-phone').textContent = '';
    document.getElementById('err-consent').textContent = '';

    if (!name || !name.value.trim()) {
      document.getElementById('err-name').textContent = t('inquiry.errName');
      valid = false;
    }

    var phoneDigits = (phone ? phone.value : '').replace(/[^\d]/g, '');
    if (!phone || phoneDigits.length < 12) {
      document.getElementById('err-phone').textContent = t('inquiry.errPhone');
      valid = false;
    }

    if (!consent || !consent.checked) {
      document.getElementById('err-consent').textContent = t('inquiry.errConsent');
      valid = false;
    }

    if (!valid) return;

    // Build message
    var lang = document.documentElement.lang || 'uz';
    var productName = product && product.value && product.value !== 'other'
      ? getProductTitle(PRODUCTS.find(function(p) { return p.id === product.value; }) || PRODUCTS[0])
      : (product ? product.value : '');

    var message = '';
    if (lang === 'uz') {
      message = "So'rov:\nIsm: " + name.value + "\nTelefon: " + phone.value + "\nMahsulot: " + (productName || '—') + "\nHajmi: " + (quantity ? quantity.value || '—' : '—') + "\nIzoh: " + (comment ? comment.value || '—' : '—');
    } else if (lang === 'ru') {
      message = 'Заявка:\nИмя: ' + name.value + '\nТелефон: ' + phone.value + '\nПродукт: ' + (productName || '—') + '\nОбъём: ' + (quantity ? quantity.value || '—' : '—') + '\nКомментарий: ' + (comment ? comment.value || '—' : '—');
    } else {
      message = 'Inquiry:\nName: ' + name.value + '\nPhone: ' + phone.value + '\nProduct: ' + (productName || '—') + '\nQuantity: ' + (quantity ? quantity.value || '—' : '—') + '\nComment: ' + (comment ? comment.value || '—' : '—');
    }

    if (status) {
      status.textContent = channel === 'whatsapp' ? t('inquiry.successWA') : t('inquiry.successEmail');
    }

    if (channel === 'whatsapp') {
      var url = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(message);
      window.open(url, '_blank');
    } else {
      var subject = encodeURIComponent('Inquiry from ' + name.value);
      var body = encodeURIComponent(message);
      window.location.href = 'mailto:' + CONFIG.email + '?subject=' + subject + '&body=' + body;
    }
  }

  // ============================================
  // LENIS SMOOTH SCROLL
  // ============================================
  function initLenis() {
    if (reducedMotion) return;
    if (!window.Lenis) return;

    var lenis = new window.Lenis({
      duration: 1.2,
      easing: function(t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Connect to ScrollTrigger
    if (window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
    }
  }

  // ============================================
  // TEAM COUNTER
  // ============================================
  function initTeamCounter() {
    if (!CONFIG.showTeam) return;
    var teamSection = document.getElementById('team');
    if (teamSection) teamSection.style.display = '';

    var counter = document.getElementById('team-counter');
    if (!counter) return;

    if (reducedMotion) {
      counter.textContent = '300+';
      return;
    }

    if (window.gsap && window.ScrollTrigger) {
      var obj = { val: 0 };
      window.gsap.to(obj, {
        val: 300,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#team',
          start: 'top 70%',
          once: true
        },
        onUpdate: function() {
          counter.textContent = Math.round(obj.val) + '+';
        }
      });
    }
  }

  // ============================================
  // VIDEO FALLBACK
  // ============================================
  function initVideo() {
    var video = document.querySelector('.hero__video');
    if (!video) return;

    // Don't play if saveData
    if (navigator.connection && navigator.connection.saveData) {
      video.style.display = 'none';
      return;
    }

    video.addEventListener('error', function() {
      video.style.display = 'none';
    });

    // If no sources load
    var sources = video.querySelectorAll('source');
    var loaded = false;
    for (var i = 0; i < sources.length; i++) {
      sources[i].addEventListener('error', function() {
        // Check if all failed
        var allFailed = true;
        var srcs = document.querySelectorAll('.hero__video source');
        for (var j = 0; j < srcs.length; j++) {
          if (srcs[j].error === null) allFailed = false;
        }
        if (allFailed) video.style.display = 'none';
      });
    }
  }

  // ============================================
  // INIT
  // ============================================
  function init() {
    initLanguage();
    initLoader();
    initNav();
    initScrollProgress();
    initCursorTrail();
    initLangSwitch();
    initVideo();
    renderProducts();
    renderFAQ();
    renderRequisites();
    populateProductSelect();
    initLightbox();
    initForm();
    initPDF();
    initTeamCounter();

    // Wait for fonts then init animations
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function() {
        initThreads();
        initLenis();
      });
    } else {
      setTimeout(function() {
        initThreads();
        initLenis();
      }, 500);
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
