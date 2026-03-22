/* ============================================================
   main.js — Initialization
   ============================================================ */

// CSS animation support class
document.documentElement.classList.add('js-loaded');

// ── Theme toggle ──────────────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentlyDark = current === 'dark' || (!current && systemDark);
  const next = currentlyDark ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('accuat-theme', next);
}
