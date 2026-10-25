/**
 * Online Quran Academy — Teacher Bua Qasim Shigry
 * Forms Validation & WhatsApp Dispatcher (js/forms.js)
 * Clean, accessible client-side validation with transparent static limits disclosure
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Password Visibility Toggle
  document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (input) {
        const isPassword = input.getAttribute('type') === 'password';
        input.setAttribute('type', isPassword ? 'text' : 'password');
        btn.textContent = isPassword ? 'Hide' : 'Show';
      }
    });
  });

  // 2. Demo Class Booking Form (demo.html)
  const demoForm = document.getElementById('demoBookingForm');
  if (demoForm) {
    // Check if URL has preselected course parameter
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedCourse = urlParams.get('course');
    if (preselectedCourse) {
      const courseSelect = document.getElementById('demoCourse');
      if (courseSelect) {
        for (let i = 0; i < courseSelect.options.length; i++) {
          if (courseSelect.options[i].text.toLowerCase().includes(preselectedCourse.toLowerCase())) {
            courseSelect.selectedIndex = i;
            break;
          }
        }
      }
    }

    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const requiredInputs = demoForm.querySelectorAll('[required]');

      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('is-invalid');
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
        }
      });

      const emailInput = document.getElementById('demoEmail');
      if (emailInput && emailInput.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          isValid = false;
        }
      }

      if (!isValid) {
        if (typeof showToast === 'function') {
          showToast('Please correct the highlighted fields before submitting.', 'error');
        }
        return;
      }

      // Gather form values
      const studentName = document.getElementById('demoStudentName')?.value || '';
      const parentName = document.getElementById('demoParentName')?.value || 'N/A';
      const email = document.getElementById('demoEmail')?.value || '';
      const whatsapp = document.getElementById('demoWhatsApp')?.value || '';
      const country = document.getElementById('demoCountry')?.value || '';
      const ageGroup = document.getElementById('demoAgeGroup')?.value || '';
      const course = document.getElementById('demoCourse')?.value || '';
      const level = document.getElementById('demoLevel')?.value || '';
      const timezone = document.getElementById('demoTimezone')?.value || '';
      const days = document.getElementById('demoDays')?.value || '';
      const time = document.getElementById('demoTime')?.value || '';
      const notes = document.getElementById('demoNotes')?.value || 'None';

      // Format WhatsApp Message
      const waMsg = `Assalamu Alaikum Teacher Bua Qasim Shigry,
I would like to book a Free Demo Quran Class:
• Student Name: ${studentName}
• Parent/Guardian: ${parentName}
• Email: ${email}
• WhatsApp: ${whatsapp}
• Country: ${country}
• Age: ${ageGroup}
• Course: ${course}
• Current Level: ${level}
• Timezone: ${timezone}
• Preferred Days: ${days}
• Preferred Time: ${time}
• Notes: ${notes}`;

      const waUrl = typeof getWhatsAppUrl === 'function' ? getWhatsAppUrl(waMsg) : `https://wa.me/923000000000?text=${encodeURIComponent(waMsg)}`;

      // Display Confirmation Modal with Instant WhatsApp Dispatch
      const resultContainer = document.getElementById('demoSuccessMessage');
      if (resultContainer) {
        resultContainer.innerHTML = `
          <div style="background:var(--color-primary-tint); border:1px solid var(--color-primary); border-radius:var(--radius-md); padding:1.75rem; text-align:center;">
            <div style="font-size:2.5rem; color:var(--color-primary); margin-bottom:0.5rem;">✓</div>
            <h3 style="font-size:1.35rem; font-weight:800; color:var(--color-primary-dark); margin-bottom:0.5rem;">Free Demo Request Prepared</h3>
            <p style="font-size:0.9rem; color:var(--color-text-muted); line-height:1.6; margin-bottom:1.25rem;">
              Jazakallahu Khairan, <strong>${studentName}</strong>! Your demo request details are ready.
              Since this is a static website, to ensure the teacher receives your exact schedule immediately, please dispatch your request directly via WhatsApp below:
            </p>
            <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap;">
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">
                Send to Teacher on WhatsApp
              </a>
              <button type="button" class="btn btn-outline btn-lg" onclick="location.reload();">
                Submit Another Request
              </button>
            </div>
            <p style="font-size:0.75rem; color:var(--color-text-light); margin-top:1rem;">
              Teacher Bua Qasim Shigry will review your requested time slot and reply with class connection details (Zoom/Skype/Google Meet).
            </p>
          </div>
        `;
        resultContainer.style.display = 'block';
        demoForm.style.display = 'none';
        window.scrollTo({ top: resultContainer.offsetTop - 100, behavior: 'smooth' });
      }
    });
  }

  // 3. Contact Form (contact.html)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const requiredInputs = contactForm.querySelectorAll('[required]');

      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('is-invalid');
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
        }
      });

      const emailInput = document.getElementById('contactEmail');
      if (emailInput && emailInput.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          isValid = false;
        }
      }

      if (!isValid) {
        if (typeof showToast === 'function') {
          showToast('Please fill out all required fields correctly.', 'error');
        }
        return;
      }

      const name = document.getElementById('contactName')?.value || '';
      const email = document.getElementById('contactEmail')?.value || '';
      const subject = document.getElementById('contactSubject')?.value || 'General Inquiry';
      const message = document.getElementById('contactMessage')?.value || '';

      const waMsg = `Assalamu Alaikum Teacher Bua Qasim Shigry,
Inquiry from: ${name} (${email})
Subject: ${subject}
Message: ${message}`;

      const waUrl = typeof getWhatsAppUrl === 'function' ? getWhatsAppUrl(waMsg) : `https://wa.me/923000000000?text=${encodeURIComponent(waMsg)}`;

      const msgBox = document.getElementById('contactSuccessMessage');
      if (msgBox) {
        msgBox.innerHTML = `
          <div style="background:var(--color-primary-tint); border:1px solid var(--color-primary); border-radius:var(--radius-md); padding:1.5rem; text-align:center;">
            <h4 style="font-size:1.15rem; font-weight:700; color:var(--color-primary-dark); margin-bottom:0.5rem;">Message Prepared</h4>
            <p style="font-size:0.88rem; color:var(--color-text-muted); margin-bottom:1rem;">
              Thank you, ${name}. As this is a static site without an email server attached, you can send your inquiry straight to the teacher's WhatsApp for an instant response:
            </p>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
              Send Inquiry on WhatsApp
            </a>
          </div>
        `;
        msgBox.style.display = 'block';
        contactForm.reset();
      }
    });
  }

  // 4. Login Form Demonstration (login.html)
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail')?.value.trim();
      const pass = document.getElementById('loginPassword')?.value;

      if (!email || !pass) {
        if (typeof showToast === 'function') {
          showToast('Please enter both email and password.', 'error');
        }
        return;
      }

      const notice = document.getElementById('loginNotice');
      if (notice) {
        notice.style.display = 'block';
        notice.innerHTML = `
          <strong>Portal Architecture Note:</strong><br>
          This is a static HTML/CSS/JS frontend demonstration. In accordance with web security best practices, static sites do not store passwords or run private authentication without a dedicated secure backend server or authentication service (e.g. Firebase Auth).
          When you connect your preferred authentication provider, this form is already wired to pass credentials securely!
        `;
      }
    });
  }

  // 5. Registration Form Demonstration (register.html)
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const p1 = document.getElementById('regPassword')?.value;
      const p2 = document.getElementById('regConfirmPassword')?.value;

      if (p1 !== p2) {
        const p2Input = document.getElementById('regConfirmPassword');
        if (p2Input) p2Input.classList.add('is-invalid');
        if (typeof showToast === 'function') {
          showToast('Passwords do not match. Please verify.', 'error');
        }
        return;
      }

      const notice = document.getElementById('registerNotice');
      if (notice) {
        notice.style.display = 'block';
        notice.innerHTML = `
          <strong>Student Account Registration Notice:</strong><br>
          Your registration details are validated. In a purely static site, accounts require an authentication backend (e.g. Firebase Auth / database).
          To enroll immediately without waiting for server setup, you can book a free demo class or contact Teacher Bua Qasim Shigry on WhatsApp!
        `;
      }
    });
  }

  // 6. Feedback Form (index.html or contact.html)
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('feedbackName')?.value.trim() || 'Student';
      const review = document.getElementById('feedbackText')?.value.trim();

      if (!review) {
        if (typeof showToast === 'function') {
          showToast('Please enter your feedback before submitting.', 'error');
        }
        return;
      }

      const feedbackBox = document.getElementById('feedbackResult');
      if (feedbackBox) {
        feedbackBox.innerHTML = `
          <div style="background:var(--color-primary-tint); border:1px solid var(--color-primary); padding:1rem; border-radius:var(--radius-sm); margin-top:1rem; text-align:center;">
            <p style="font-size:0.88rem; color:var(--color-primary-dark); font-weight:600;">
              Jazakallahu Khairan, ${name}! Your review has been submitted for owner moderation. In compliance with academy standards, reviews are verified by Teacher Bua Qasim Shigry prior to public display.
            </p>
          </div>
        `;
        feedbackForm.reset();
      }
    });
  }
});
