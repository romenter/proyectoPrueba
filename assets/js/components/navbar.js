/* ============================================================
   navbar.js — Hamburger menu & scroll behavior
   ============================================================ */

(function () {
  'use strict';

  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');

  // Scroll: add class when scrolled
  function onScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on init

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', isOpen);

      const lines = hamburger.querySelectorAll('.navbar__hamburger-line');
      if (isOpen) {
        lines[0].style.transform = 'translateY(6px) rotate(45deg)';
        lines[1].style.opacity   = '0';
        lines[2].style.transform = 'translateY(-6px) rotate(-45deg)';
      } else {
        lines[0].style.transform = '';
        lines[1].style.opacity   = '';
        lines[2].style.transform = '';
      }
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        const lines = hamburger.querySelectorAll('.navbar__hamburger-line');
        lines.forEach(l => { l.style.transform = ''; l.style.opacity = ''; });
      }
    });
  }
})();
