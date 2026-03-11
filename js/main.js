// =============================================
// ARTISTRAY SALON — MAIN JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- LOADER ---
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('done'), 1600);
  }

  // --- HEADER SCROLL ---
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // --- HAMBURGER MENU ---
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // --- SET YEAR ---
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- SET MIN DATE ON BOOKING FORMS ---
  document.querySelectorAll('input[type="date"]').forEach(input => {
    input.min = new Date().toISOString().split('T')[0];
  });

  // --- LOAD UPDATES on home page ---
  if (document.getElementById('updates-container')) {
    renderUpdates('updates-container', 3);
  }

  // --- LOAD UPDATES on updates page ---
  if (document.getElementById('all-updates-container')) {
    renderUpdates('all-updates-container', null);
  }

  // --- SCROLL REVEAL ---
  const revealEls = document.querySelectorAll('.service-card, .product-card, .update-card, .gallery-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

});

// --- QUICK BOOK FORM HANDLER ---
function handleQuickBook(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[type="text"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  const service = form.querySelector('select').value;
  const date = form.querySelector('input[type="date"]').value;
  const time = form.querySelector('input[type="time"]').value;

  if (!service) { alert('Please select a service.'); return; }

  const msg = `Hi Artistray! I'd like to book an appointment.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0ADate: ${encodeURIComponent(date)}%0ATime: ${encodeURIComponent(time)}`;
  window.open(`https://wa.me/919510881863?text=${msg}`, '_blank');
}

// --- ORDER FORM HANDLER ---
function handleOrder(productName) {
  const msg = `Hi Artistray! I'd like to order: ${encodeURIComponent(productName)}`;
  window.open(`https://wa.me/919510881863?text=${msg}`, '_blank');
}
