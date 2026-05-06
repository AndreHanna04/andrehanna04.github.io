// ============================================================
//  MAIN.JS — nav, scroll, filters, modal, contact form
// ============================================================

// ---- HERO BACKGROUND SLIDESHOW ----
(function initHeroBg() {
  const bg = document.getElementById('heroBg');
  if (!bg || typeof PROJECTS === 'undefined') return;

  // One representative image per project — keeps the browser from downloading
  // every gallery asset on page load
  const images = PROJECTS
    .map(p => (p.gallery || []).find(g => !g.src.match(/\.gif$/i)))
    .filter(Boolean)
    .map(g => g.src);

  if (images.length === 0) return;

  images.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'hero-bg-slide' + (i === 0 ? ' active' : '');
    slide.style.backgroundImage = `url('${src}')`;
    bg.appendChild(slide);
  });

  const slides = bg.querySelectorAll('.hero-bg-slide'); // cached once
  let current = 0;
  let intervalId = null;

  function advance() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  // Pause when hero is scrolled out of view — no wasted ticks
  const heroSection = bg.closest('section') || bg.parentElement;
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (!intervalId) intervalId = setInterval(advance, 7000);
    } else {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, { threshold: 0.1 }).observe(heroSection);
})();

// ---- NAV SCROLL STATE ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mm-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ---- YEAR ----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- FILTER BUTTONS ----
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// ---- MODAL CLOSE ----
const overlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  // stop any autoplay video/iframe
  const media = document.getElementById('modalMedia');
  media.innerHTML = '';
}

modalClose.addEventListener('click', closeModal);

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (lightbox.classList.contains('open')) closeLightbox();
    else closeModal();
  }
});

// ---- LIGHTBOX ----
const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxImg.src = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Delegate gallery clicks — scoped to the modal so every page click isn't checked
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  const item = e.target.closest('.gallery-item');
  if (!item) return;
  const img = item.querySelector('img');
  if (img) openLightbox(img.src, img.alt);
});

// ---- SCROLL REVEAL ----
const reveals = document.querySelectorAll('.section-header, .skill-group, .experience-item, .about-grid, .social-links, .contact-intro, .contact-email-btn');

reveals.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));

