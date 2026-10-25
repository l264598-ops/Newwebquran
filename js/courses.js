/**
 * Online Quran Academy — Teacher Bua Qasim Shigry
 * Courses Catalog & Filtering (js/courses.js)
 * Clean editable data array for all 14 Quran & Islamic courses
 */

const COURSES_DATA = [
  {
    id: "quran-nazira",
    title: "Quran Nazira",
    category: "recitation",
    categoryLabel: "Recitation & Reading",
    icon: "📖",
    level: "Beginner to Intermediate",
    audience: "Children & Adults",
    duration: "Flexible (Personalized pace)",
    schedule: "2 to 5 sessions / week",
    shortDesc: "Complete reading of the Holy Quran from cover to cover with correct Makharij, word pronunciation, and respectful etiquette.",
    fullDesc: "Quran Nazira focuses on fluent, accurate recitation of the entire Holy Quran directly from the Mus'haf. Under the personal guidance of Teacher Bua Qasim Shigry (16 years teaching experience), students master smooth recognition of Arabic script, proper pauses (Waqf), and uninterrupted recitation.",
    objectives: [
      "Master fluent reading of all 30 Paras (Juz)",
      "Correct pronunciation of similar-sounding Arabic letters",
      "Proper knowledge of recitation stops and symbols (Waqf)",
      "Daily practice with 1-on-1 teacher correction"
    ]
  },
  {
    id: "quran-tajweed",
    title: "Quran with Tajweed",
    category: "recitation",
    categoryLabel: "Tajweed Mastery",
    icon: "✨",
    level: "All Levels",
    audience: "Children, Youth & Adults",
    duration: "3 to 6 months per level",
    schedule: "3 to 4 sessions / week",
    shortDesc: "Master the rules of Tajweed including Noon Sakinah, Meem Sakinah, Madd, Ghunnah, and precise articulation points (Makharij).",
    fullDesc: "Reciting the Quran with Tajweed is an essential duty for every Muslim reciter. This course provides systematic, practical instruction covering classical Tajweed rules in a clear, digestible manner suited for beginners and advanced students alike.",
    objectives: [
      "Precise points of articulation (Makharij al-Huroof)",
      "Rules of Noon Sakinah, Tanween, and Meem Sakinah",
      "Types of elongation (Ahkam al-Madd) and qualities of letters (Sifaat)",
      "Practical recitation critique in every live session"
    ]
  },
  {
    id: "quran-reading-beginners",
    title: "Quran Reading for Beginners",
    category: "recitation",
    categoryLabel: "Beginners Foundation",
    icon: "🌱",
    level: "Absolute Beginner",
    audience: "Young Children & New Learners",
    duration: "2 to 3 months",
    schedule: "3 to 5 sessions / week",
    shortDesc: "Gentle step-by-step introduction starting from the Noorani / Madani Qaida, letter joining, harakaat, and word formation.",
    fullDesc: "Specially designed for young children and adult beginners starting from scratch. We build confidence with patient, supportive 1-on-1 coaching through foundational Qaida exercises before transitioning into the Holy Quran.",
    objectives: [
      "Recognition of individual Arabic letters and vocalization",
      "Understanding vowel marks (Fatha, Kasra, Damma, Sukoon)",
      "Joining letters into words and short Quranic verses",
      "Building patient, positive learning habits for children"
    ]
  },
  {
    id: "quran-memorization-hifz",
    title: "Quran Memorization & Hifz",
    category: "recitation",
    categoryLabel: "Memorization",
    icon: "💎",
    level: "Intermediate to Advanced",
    audience: "Dedicated Students & Children",
    duration: "Customized Memorization Plan",
    schedule: "4 to 6 sessions / week",
    shortDesc: "Structured memorization of selected Surahs or the complete Quran (Hifz) with regular revision (Dhor) and retention monitoring.",
    fullDesc: "A structured, disciplined Hifz program customized to the student's retention capability. Teacher Bua Qasim Shigry works closely with parents and students to establish steady daily targets (Sabaq), recent revision (Sabqi), and long-term revision (Manzil).",
    objectives: [
      "Structured daily Sabaq memorization",
      "Rigorous revision cycles (Dhor/Manzil) to ensure zero retention loss",
      "Recitation from memory with strict Tajweed application",
      "Spiritual encouragement and self-discipline cultivation"
    ]
  },
  {
    id: "quran-translation",
    title: "Quran Translation (Tarjuma)",
    category: "understanding",
    categoryLabel: "Quran Comprehension",
    icon: "🌍",
    level: "All Levels",
    audience: "Teens & Adults",
    duration: "Modular by Surah / Para",
    schedule: "2 to 3 sessions / week",
    shortDesc: "Word-by-word and contextual translation of Quranic verses in Urdu or English to understand the Divine Message deeply.",
    fullDesc: "Move beyond recitation to understand the direct meaning of Allah's words. This course breaks down Quranic sentences word by word, highlighting root words and grammatical structure for life-changing comprehension.",
    objectives: [
      "Word-for-word translation of essential and frequently recited Surahs",
      "Understanding common Quranic vocabulary (covers 80% of the text)",
      "Contextual translation in Urdu or English",
      "Reflecting upon commandments, wisdom, and moral teachings"
    ]
  },
  {
    id: "quran-tafseer",
    title: "Quran Tafseer",
    category: "understanding",
    categoryLabel: "Quran Exegesis",
    icon: "📜",
    level: "Intermediate to Advanced",
    audience: "Mature Students, Adults & Families",
    duration: "Ongoing thematic study",
    schedule: "2 sessions / week",
    shortDesc: "In-depth study of verse context (Asbab al-Nuzul), legal rulings, prophetic commentary, and practical spiritual application.",
    fullDesc: "Delve into authentic classical and contemporary Tafseer insights. Understand the historical background of revelations, wisdom behind rulings, and how the Quran speaks directly to modern ethical, personal, and familial life.",
    objectives: [
      "Context of revelation (Asbab al-Nuzul) for each chapter",
      "Analysis of core theological, legal, and ethical themes",
      "Insights from authentic classical Tafseer sources",
      "Practical life lessons and spiritual purification (Tazkiyah)"
    ]
  },
  {
    id: "arabic-language",
    title: "Arabic Language",
    category: "languages",
    categoryLabel: "Classical & Conversational Arabic",
    icon: "🗣️",
    level: "Beginner to Intermediate",
    audience: "Students, Professionals & Enthusiasts",
    duration: "6 months per level",
    schedule: "2 to 3 sessions / week",
    shortDesc: "Quranic Arabic grammar (Nahw & Sarf) and foundational conversational skills to unlock Arabic texts and prayer understanding.",
    fullDesc: "A systematic curriculum covering essential Arabic grammar, sentence construction, vocabulary acquisition, and reading comprehension, enabling students to read Islamic texts and understand prayers in their original language.",
    objectives: [
      "Foundational grammar rules (Nahw) and morphological patterns (Sarf)",
      "Essential Quranic and spoken Arabic vocabulary",
      "Reading comprehension of simple Arabic texts and supplications",
      "Direct understanding of Salah recitations and Adhan"
    ]
  },
  {
    id: "urdu-language",
    title: "Urdu Language",
    category: "languages",
    categoryLabel: "Language & Literature",
    icon: "✍️",
    level: "Beginner to Advanced",
    audience: "Overseas Pakistani Children & Adults",
    duration: "3 to 6 months",
    schedule: "2 to 3 sessions / week",
    shortDesc: "Learn to read, write, and speak fluent Urdu. Specially designed for overseas children and diaspora families seeking cultural roots.",
    fullDesc: "Tailored for expatriate children living abroad in the UK, USA, Canada, Europe, or the Gulf who wish to connect with their family heritage, read classical Urdu Islamic books, and speak comfortably with grandparents and relatives.",
    objectives: [
      "Urdu alphabet, Nastaliq script recognition, and writing",
      "Everyday conversational fluency and cultural vocabulary",
      "Reading foundational Urdu storybooks and Islamic primers",
      "Bridging the cultural connection between generations"
    ]
  },
  {
    id: "basic-islamic-education",
    title: "Basic Islamic Education",
    category: "foundations",
    categoryLabel: "Islamic Essentials",
    icon: "🕌",
    level: "Beginner",
    audience: "Children, Converts & Beginners",
    duration: "3 months",
    schedule: "2 to 3 sessions / week",
    shortDesc: "Foundational pillars of Islam, articles of faith (Iman), moral manners (Adab), and core beliefs every Muslim should know.",
    fullDesc: "A complete overview of Islamic belief and practice for newcomers, children, and anyone desiring a refreshed, clear understanding of Islamic fundamentals, pure monotheism (Tawheed), and prophetic moral character.",
    objectives: [
      "The Five Pillars of Islam and Six Articles of Faith",
      "Understanding Tawheed, Prophethood, and the Hereafter",
      "Islamic etiquette (Adab), honesty, respect for parents, and neighbors",
      "Clear guidance on Halal and Haram principles"
    ]
  },
  {
    id: "namaz-salah-learning",
    title: "Namaz and Salah Learning",
    category: "foundations",
    categoryLabel: "Worship & Practice",
    icon: "🤲",
    level: "All Levels",
    audience: "Children, Beginners & Adults",
    duration: "4 to 6 weeks",
    schedule: "2 to 3 sessions / week",
    shortDesc: "Complete practical guide to Salah: correct postures, Wudu, compulsory conditions, memorization of recitations, and Tashahhud.",
    fullDesc: "Salah is the cornerstone of a Muslim's daily life. This dedicated module teaches accurate physical postures (Qiyam, Ruku, Sajdah, Jalsah), perfect ritual purification (Wudu), and memorization with meaning of every prayer phrase.",
    objectives: [
      "Step-by-step practical Wudu and Ghusl demonstration",
      "Physical accuracy in every prayer posture according to Sunnah",
      "Complete memorization of Thana, Surah Al-Fatiha, Tashahhud, and Durood",
      "Differences in Fajr, Zuhr, Asr, Maghrib, Isha, Witr, and Eid prayers"
    ]
  },
  {
    id: "daily-duas",
    title: "Daily Duas & Supplications",
    category: "foundations",
    categoryLabel: "Masnoon Supplications",
    icon: "🕊️",
    level: "All Levels",
    audience: "Children & Families",
    duration: "4 to 8 weeks",
    schedule: "2 sessions / week",
    shortDesc: "Masnoon supplications for morning, evening, sleeping, eating, traveling, entering home/mosque, and seeking divine protection.",
    fullDesc: "Empower your daily routine with authentic Sunnah supplications. Students learn the Arabic words with correct pronunciation, understanding of meanings, and the appropriate daily contexts for each dua.",
    objectives: [
      "Authentic morning and evening supplications (Adhkar)",
      "Daily situational duas (eating, sleeping, leaving home, travel)",
      "Duas for protection against harm, anxiety, and distress",
      "Instilling conscious God-remembrance (Dhikr) in children"
    ]
  },
  {
    id: "hadith-studies",
    title: "Hadith Studies",
    category: "understanding",
    categoryLabel: "Prophetic Traditions",
    icon: "📚",
    level: "Intermediate",
    audience: "Youth & Adults",
    duration: "3 to 6 months",
    schedule: "2 sessions / week",
    shortDesc: "Study selected 40 Hadith of Imam Nawawi and Riyad us-Saliheen focusing on authentic character, compassion, and prophetic guidance.",
    fullDesc: "An inspiring exploration of prophetic wisdom. We examine authentic traditions regarding noble character, justice, patience, charity, and interpersonal relationships, accompanied by verified references and commentary.",
    objectives: [
      "Reading and reflection upon the famous 40 Hadith of Imam Nawawi",
      "Distinction of authentic chains and reliable collections",
      "Character building through the living example of the Prophet (ﷺ)",
      "Applying prophetic wisdom to contemporary family and social life"
    ]
  },
  {
    id: "islamic-history",
    title: "Islamic History",
    category: "understanding",
    categoryLabel: "Seerah & Civilizations",
    icon: "🏛️",
    level: "All Levels",
    audience: "Teens, Adults & Families",
    duration: "3 to 6 months",
    schedule: "2 sessions / week",
    shortDesc: "Comprehensive study of the life of Prophet Muhammad (ﷺ) (Seerah), the Rightly Guided Caliphs, and glorious Islamic civilization.",
    fullDesc: "Inspiring lessons from the transformative Seerah of Prophet Muhammad (ﷺ), the challenges faced in Makkah and Madinah, the leadership of Khulafa-e-Rashideen, and the intellectual and scientific flourishing of Islamic history.",
    objectives: [
      "Chronological journey through the blessed Seerah of the Prophet (ﷺ)",
      "Lives, sacrifices, and governance of the Four Rightly Guided Caliphs",
      "Golden Age achievements in medicine, astronomy, and ethics",
      "Instilling healthy identity and historical confidence in Muslim youth"
    ]
  },
  {
    id: "islamic-studies-children",
    title: "Islamic Studies for Children",
    category: "foundations",
    categoryLabel: "Kids Special Curriculum",
    icon: "🌟",
    level: "Beginner (Ages 5-14)",
    audience: "Young Children & Pre-teens",
    duration: "Year-round modular",
    schedule: "2 to 4 sessions / week",
    shortDesc: "Engaging, interactive lessons covering stories of the Prophets, Islamic morals, respect, kindness, and fun Quran learning activities.",
    fullDesc: "Specially designed for young minds to fall in love with Islam. Teacher Bua Qasim Shigry uses gentle, encouraging methods with captivating stories of the Prophets, lessons on honesty, kindness to parents, and good manners.",
    objectives: [
      "Inspiring stories of the Prophets (Adam, Nuh, Ibrahim, Musa, Isa, Muhammad ﷺ)",
      "Manners of speech, eating, greeting (Salam), and friendship",
      "Short Surah memorization with engaging explanations",
      "Interactive questions and encouraging feedback"
    ]
  }
];

/**
 * Render course cards into a target container
 * @param {string} containerId 
 * @param {string} filterCategory 
 * @param {string} searchKeyword 
 * @param {number|null} limit 
 */
function renderCourses(containerId, filterCategory = 'all', searchKeyword = '', limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let filtered = COURSES_DATA.filter(course => {
    const matchesCategory = filterCategory === 'all' || course.category === filterCategory;
    const matchesSearch = !searchKeyword || 
      course.title.toLowerCase().includes(searchKeyword.toLowerCase()) || 
      course.shortDesc.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      course.categoryLabel.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (limit && typeof limit === 'number') {
    filtered = filtered.slice(0, limit);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--color-text-muted);">
        <p style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem;">No courses found matching your criteria</p>
        <p style="font-size: 0.85rem;">Try selecting a different category or clearing your search query.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(course => `
    <article class="course-card" data-category="${course.category}">
      <div class="course-card-top">
        <div class="course-icon-badge" aria-hidden="true">${course.icon}</div>
        <span class="course-meta-text">${course.level}</span>
      </div>
      <h3 class="course-title">${course.title}</h3>
      <p class="course-desc">${course.shortDesc}</p>
      <div class="course-details-list">
        <div class="course-details-item">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          <span>Audience: <strong>${course.audience}</strong></span>
        </div>
        <div class="course-details-item">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Pace: <strong>${course.schedule}</strong></span>
        </div>
      </div>
      <div class="course-actions">
        <button type="button" class="btn btn-outline btn-sm course-details-trigger" data-course-id="${course.id}">
          Learn More
        </button>
        <a href="demo.html?course=${encodeURIComponent(course.title)}" class="btn btn-primary btn-sm">
          Enroll / Demo
        </a>
      </div>
    </article>
  `).join('');

  // Attach Learn More modal listeners
  container.querySelectorAll('.course-details-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const courseId = btn.getAttribute('data-course-id');
      const course = COURSES_DATA.find(c => c.id === courseId);
      if (course) {
        openCourseModal(course);
      }
    });
  });
}

/**
 * Opens Course Detail Modal
 * @param {object} course 
 */
function openCourseModal(course) {
  let modal = document.getElementById('courseModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'courseModal';
    modal.className = 'modal-overlay';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
      <div class="modal-box">
        <button type="button" class="modal-close-btn" aria-label="Close dialog">&times;</button>
        <div id="courseModalContent"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.modal-close-btn').addEventListener('click', () => {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  }

  const content = document.getElementById('courseModalContent');
  const waMsg = `Assalamu Alaikum Teacher Bua Qasim Shigry, I would like to inquire about the course: "${course.title}".`;
  const waUrl = typeof getWhatsAppUrl === 'function' ? getWhatsAppUrl(waMsg) : `https://wa.me/923000000000?text=${encodeURIComponent(waMsg)}`;

  content.innerHTML = `
    <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
      <span style="font-size:2rem;">${course.icon}</span>
      <div>
        <span style="font-size:0.75rem; color:var(--color-gold); font-weight:700; text-transform:uppercase;">${course.categoryLabel}</span>
        <h3 style="font-size:1.4rem; font-weight:800; color:var(--color-primary-dark);">${course.title}</h3>
      </div>
    </div>
    <p style="font-size:0.92rem; color:var(--color-text-muted); line-height:1.6; margin-bottom:1.25rem;">
      ${course.fullDesc}
    </p>
    <div style="background:var(--color-canvas-alt); border:1px solid var(--color-border); border-radius:var(--radius-sm); padding:1rem; margin-bottom:1.25rem;">
      <h4 style="font-size:0.88rem; font-weight:700; color:var(--color-primary-dark); margin-bottom:0.5rem;">Key Learning Objectives:</h4>
      <ul style="display:flex; flex-direction:column; gap:0.4rem; font-size:0.82rem; color:var(--color-text-muted); padding-left:0.5rem;">
        ${course.objectives.map(obj => `<li style="display:flex; align-items:flex-start; gap:0.5rem;"><span style="color:var(--color-primary);font-weight:700;">✓</span><span>${obj}</span></li>`).join('')}
      </ul>
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; font-size:0.82rem; color:var(--color-text-muted); margin-bottom:1.5rem;">
      <div>Target Audience: <strong>${course.audience}</strong></div>
      <div>Experience Level: <strong>${course.level}</strong></div>
      <div>Session Frequency: <strong>${course.schedule}</strong></div>
      <div>Instruction: <strong>1-on-1 Personal Live Class</strong></div>
    </div>
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
      <a href="demo.html?course=${encodeURIComponent(course.title)}" class="btn btn-primary" style="flex:1;">
        Book Free Demo Class
      </a>
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="flex:1;">
        Ask on WhatsApp
      </a>
    </div>
  `;

  modal.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

// Initialize Course Filters on Page
document.addEventListener('DOMContentLoaded', () => {
  // If preview container exists on Home
  const homeContainer = document.getElementById('featuredCoursesGrid');
  if (homeContainer) {
    renderCourses('featuredCoursesGrid', 'all', '', 6);
  }

  // If full courses grid exists on courses.html
  const allCoursesContainer = document.getElementById('allCoursesGrid');
  if (allCoursesContainer) {
    let activeFilter = 'all';
    let searchQuery = '';

    renderCourses('allCoursesGrid', activeFilter, searchQuery);

    // Setup Category Tabs
    const filterButtons = document.querySelectorAll('.filter-btn[data-category]');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.getAttribute('data-category');
        renderCourses('allCoursesGrid', activeFilter, searchQuery);
      });
    });

    // Setup Search Input
    const searchInput = document.getElementById('courseSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderCourses('allCoursesGrid', activeFilter, searchQuery);
      });
    }
  }
});
