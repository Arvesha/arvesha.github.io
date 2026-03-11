/* =============================================
   Arvesha Intelligence — JavaScript
   ============================================= */

(function () {
  'use strict';

  // ---- Navbar scroll behaviour ----
  const navbar = document.getElementById('navbar');
  function handleNavbarScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });

  // ---- Particle system ----
  const particlesContainer = document.getElementById('particles');
  const PARTICLE_COUNT = 30;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');

    const x = Math.random() * 100;
    const duration = 6 + Math.random() * 10;
    const delay = Math.random() * 8;
    const travel = 120 + Math.random() * 200;

    p.style.cssText = [
      'left:' + x + '%',
      'bottom:' + (Math.random() * 40) + '%',
      '--duration:' + duration + 's',
      '--delay:' + delay + 's',
      '--travel:' + travel + 'px',
      'opacity:0'
    ].join(';');

    particlesContainer.appendChild(p);
  }

  // ---- Scroll-reveal animation ----
  const revealElements = document.querySelectorAll(
    '.tech-card, .product-card, .about-card, .founder-card, ' +
    '.section-title, .section-subtitle, .section-label, .hero-stats'
  );

  revealElements.forEach(function (el) {
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(function (el) {
    observer.observe(el);
  });

  // ---- Staggered reveal for grids ----
  function applyStagger(selector, delayStep) {
    document.querySelectorAll(selector).forEach(function (el, i) {
      el.style.transitionDelay = (i * delayStep) + 's';
    });
  }

  applyStagger('.tech-card', 0.08);
  applyStagger('.product-card', 0.08);
  applyStagger('.about-card', 0.1);

  // ---- Smooth anchor scrolling with offset for fixed navbar ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
        10
      ) || 72;

      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // ---- Active nav link highlight on scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveLink() {
    const scrollY = window.scrollY;
    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
      10
    ) || 72;

    let currentSection = '';
    sections.forEach(function (section) {
      const top = section.offsetTop - navHeight - 40;
      if (scrollY >= top) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinkItems.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // ---- Tech card tilt effect (subtle, desktop only) ----
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.tech-card, .product-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = [
          'translateY(-4px)',
          'rotateX(' + (-y * 5) + 'deg)',
          'rotateY(' + (x * 5) + 'deg)'
        ].join(' ');
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }
}());
