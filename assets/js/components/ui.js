/* ============================================================
   ui.js — Interacciones de UI: scroll animations, password
           toggle, multi-step form, password strength,
           newsletter form prevention
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll animations (IntersectionObserver) ─────────────── */
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.08 });

  document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
    observer.observe(el);
  });

  /* ── Password visibility toggle ───────────────────────────── */
  // Uso: <button data-password-toggle="input-id" ...>
  document.querySelectorAll('[data-password-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var inputId = this.dataset.passwordToggle;
      var input   = document.getElementById(inputId);
      if (!input) return;
      var isText  = input.type === 'text';
      input.type  = isText ? 'password' : 'text';
      var svg = this.querySelector('svg');
      if (svg) svg.style.opacity = isText ? '1' : '0.4';
    });
  });

  /* ── Password strength indicator ──────────────────────────── */
  var pwInput = document.getElementById('signup-password');
  if (pwInput) {
    var bars   = ['bar1', 'bar2', 'bar3', 'bar4'];
    var colors = ['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-green-400'];

    pwInput.addEventListener('input', function () {
      var val   = this.value;
      var score = 0;
      if (val.length >= 8)           score++;
      if (/[A-Z]/.test(val))         score++;
      if (/[0-9]/.test(val))         score++;
      if (/[^A-Za-z0-9]/.test(val))  score++;

      bars.forEach(function (id, i) {
        var el = document.getElementById(id);
        if (!el) return;
        el.className = 'h-1 flex-1 rounded-full ' + (i < score ? colors[score - 1] : 'bg-gray-200');
      });
    });
  }

  /* ── Multi-step form (signup) ──────────────────────────────── */
  function goToStep(step) {
    ['step1', 'step2', 'step3'].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.classList.add('hidden');
      el.classList.remove('flex');
    });

    var target = document.getElementById('step' + step);
    if (target) {
      target.classList.remove('hidden');
      if (step !== 3) target.classList.add('flex');
    }

    for (var i = 1; i <= 3; i++) {
      var dot   = document.getElementById('step' + i + '-dot');
      var label = document.getElementById('step' + i + '-label');
      if (!dot || !label) continue;

      dot.className = 'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ';
      if (i < step) {
        dot.className  += 'step-done';
        dot.textContent = '✓';
        label.className = 'text-xs font-semibold text-green-600';
      } else if (i === step) {
        dot.className  += 'step-active';
        dot.textContent = i;
        label.className = 'text-xs font-semibold text-gray-800';
      } else {
        dot.className  += 'step-idle';
        dot.textContent = i;
        label.className = 'text-xs font-semibold text-gray-400';
      }
    }

    var hint = document.getElementById('login-hint');
    if (hint) hint.style.display = step === 3 ? 'none' : '';
  }

  // Wire up step forms
  var step1Form = document.getElementById('step1');
  var step2Form = document.getElementById('step2');
  if (step1Form) {
    step1Form.addEventListener('submit', function (e) {
      e.preventDefault();
      goToStep(2);
    });
  }
  if (step2Form) {
    step2Form.addEventListener('submit', function (e) {
      e.preventDefault();
      goToStep(3);
    });
  }

  // Wire up back button
  document.querySelectorAll('[data-goto-step]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      goToStep(parseInt(this.dataset.gotoStep, 10));
    });
  });

  /* ── Prevent default on demo/newsletter forms ──────────────── */
  // Uso: <form data-prevent-submit ...>
  document.querySelectorAll('[data-prevent-submit]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  });

})();
