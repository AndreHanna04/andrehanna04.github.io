// ============================================================
//  MAIN.JS — nav, scroll, filters, modal, contact form
// ============================================================

// ---- HERO BACKGROUND SLIDESHOW ----
(function initHeroBg() {
  const bg = document.getElementById('heroBg');
  if (!bg || typeof PROJECTS === 'undefined') return;

  const images = [];
  PROJECTS.forEach(p => {
    (p.gallery || []).forEach(g => {
      if (!g.src.match(/\.gif$/i)) images.push(g.src);
    });
  });
  if (images.length === 0) return;

  images.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'hero-bg-slide' + (i === 0 ? ' active' : '');
    slide.style.backgroundImage = `url('${src}')`;
    bg.appendChild(slide);
  });

  let current = 0;
  setInterval(() => {
    const slides = bg.querySelectorAll('.hero-bg-slide');
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 7000);
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
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
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
  if (e.key === 'Escape') closeModal();
});

// ---- SCROLL REVEAL ----
const reveals = document.querySelectorAll('.section-header, .skill-group, .about-grid, .contact-form, .social-links, .contact-intro');

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

// ---- CONTACT FORM ----
// Uses Formspree — sign up free at formspree.io, create a form,
// then replace the URL below with your own endpoint.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    formStatus.textContent = '';

    const data = {
      name:    document.getElementById('name').value,
      email:   document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        formStatus.textContent = '✓ Message sent — I\'ll get back to you soon!';
        contactForm.reset();
      } else {
        formStatus.textContent = 'Something went wrong. Try emailing me directly.';
      }
    } catch {
      formStatus.textContent = 'Network error. Try emailing me directly.';
    }

    btn.textContent = 'Send Message';
    btn.disabled = false;
  });
}
