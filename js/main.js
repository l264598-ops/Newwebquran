/**
 * Online Quran Academy — Teacher Bua Qasim Shigry
 * Main Global JavaScript (js/main.js)
 * Clean, lightweight vanilla JS for navigation, interactions, and WhatsApp helpers
 */

// Global Configuration (easily editable by academy owner)
window.ACADEMY_CONFIG = {
  academyName: "Online Quran Academy — Teacher Bua Qasim Shigry",
  teacherName: "Bua Qasim Shigry",
  teacherExperience: "16 Years",
  // Owner: Replace this WhatsApp number with your verified international phone number before launch
  // Format: digits only with country code, e.g. "923001234567"
  whatsappNumber: "923000000000",
  // Email placeholder for inquiries
  contactEmail: "info@quranacademyshigry.com",
  // Verification notice for demo static mode
  isStaticDemo: true
};

/**
 * Constructs a valid WhatsApp URL with a prefilled message
 * @param {string} messageText 
 * @returns {string} WhatsApp URL
 */
function getWhatsAppUrl(messageText) {
  const number = window.ACADEMY_CONFIG.whatsappNumber;
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${number}?text=${encodedText}`;
}

/**
 * Displays a toast notification on the page
 * @param {string} message 
 * @param {'success'|'error'|'info'} type 
 */
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button type="button" aria-label="Close notification" style="margin-left:auto;opacity:0.6;font-size:1.1rem;">&times;</button>
  `;

  const closeBtn = toast.querySelector('button');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => toast.remove());
  }

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 250);
    }
  }, 4000);
}

// DOM Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  // 1. Update Dynamic Copyright Year
  const yearElements = document.querySelectorAll('.dynamic-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });

  // 2. Setup Sticky Header on Scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  // 3. Mobile Navigation Drawer Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-active');

      if (!isExpanded) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close mobile menu when clicking outside or pressing Escape
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('is-active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('is-active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
        navMenu.classList.remove('is-active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // 4. Mark Active Navigation Link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 5. Setup Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 6. Setup Accessible FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Close other items for single-open behavior
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('is-open');
            const otherTrigger = otherItem.querySelector('.faq-trigger');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 7. Update all WhatsApp trigger buttons with configured phone number
  const waButtons = document.querySelectorAll('[data-wa-type]');
  waButtons.forEach(btn => {
    const type = btn.getAttribute('data-wa-type') || 'general';
    let msg = `Assalamu Alaikum Teacher Bua Qasim Shigry, I am visiting your Online Quran Academy website and would like to ask a question.`;

    if (type === 'demo') {
      msg = `Assalamu Alaikum Teacher Bua Qasim Shigry, I would like to request a Free Demo Class for Quran learning.`;
    } else if (type === 'course') {
      const courseName = btn.getAttribute('data-course-name') || 'Quran learning';
      msg = `Assalamu Alaikum Teacher Bua Qasim Shigry, I am interested in enrolling in the course: ${courseName}. Please share details.`;
    } else if (type === 'pricing') {
      const planName = btn.getAttribute('data-plan-name') || 'a learning plan';
      msg = `Assalamu Alaikum Teacher Bua Qasim Shigry, I would like to inquire about the ${planName} package fees and schedule.`;
    }

    btn.setAttribute('href', getWhatsAppUrl(msg));
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  // Floating WhatsApp link
  const floatingWa = document.querySelector('.floating-whatsapp');
  if (floatingWa) {
    floatingWa.setAttribute('href', getWhatsAppUrl("Assalamu Alaikum Teacher Bua Qasim Shigry, I would like to inquire about Online Quran classes."));
    floatingWa.setAttribute('target', '_blank');
    floatingWa.setAttribute('rel', 'noopener noreferrer');
  }
});
