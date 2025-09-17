// js/main.js

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
}

// Active nav link highlighting
document.addEventListener('DOMContentLoaded', () => {
  const links = Array.from(document.querySelectorAll('nav a'));
  links.forEach(a => {
    // Compare pathname to current location; helpful when deployed
    try {
      if (new URL(a.href).pathname === window.location.pathname) {
        a.classList.add('text-sky-400', 'font-semibold');
      }
    } catch (e) {
      // ignore any invalid links
    }
  });
});

// Simple hero carousel (index.html)
(function heroCarousel() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides || slides.length === 0) return;
  let idx = 0;
  slides.forEach((s,i) => {
    s.style.transition = 'opacity 800ms ease';
    s.style.opacity = i === 0 ? '1' : '0';
  });
  function show(n) {
    slides.forEach((s,i) => s.style.opacity = i === n ? '1' : '0');
    dots.forEach((d,i) => {
      d.classList.toggle('bg-white/80', i === n);
      d.classList.toggle('bg-white/30', i !== n);
    });
  }
  // dot click
  dots.forEach((d,i) => d.addEventListener('click', () => { idx = i; show(idx); }));
  // autoplay
  setInterval(() => {
    idx = (idx + 1) % slides.length;
    show(idx);
  }, 5000);
})();


scrollContainer.addEventListener("scroll", updateArrows);
window.addEventListener("resize", updateArrows);
updateArrows();

