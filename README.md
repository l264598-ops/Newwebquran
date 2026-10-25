# Online Quran Academy — Teacher Bua Qasim Shigry
### Premium, Pure HTML5 / CSS3 / Vanilla JavaScript Static Website

A beautiful, responsive, and trustworthy website built for **Online Quran Academy — Teacher Bua Qasim Shigry** (16 years of Quran teaching experience).

Designed using pure **HTML5**, **CSS3**, and **Vanilla JavaScript** without heavy frameworks, Node dependencies, or complex build requirements. Can be hosted directly on any static web hosting provider (GitHub Pages, Cloudflare Pages, Netlify, Vercel, Apache, Nginx, or cPanel).

---

## 📁 File Structure

```text
├── index.html              # Homepage with Hero, Trust Stats, Courses, Teacher Bio, FAQ
├── about.html              # Comprehensive Teacher Biography & Pedagogical Framework
├── courses.html            # All 14 Quran & Islamic Courses with Category Filtering & Modal
├── pricing.html            # 4 Flexible Learning Packages & Billing Policies
├── demo.html               # Free 30-Minute Demo Booking Form with Direct WhatsApp Dispatch
├── contact.html            # Academy Inquiry Form & Direct Contact Channels
├── resources.html          # Digital Tasbeeh, Prayer Times Engine, Daily Duas & Hadith
├── books.html              # Searchable Islamic Book Library with Category Filters
├── shop.html               # Islamic Study Supplies Showcase (Mus'haf, Mats, Tasbeeh)
├── login.html              # Student Portal Login Interface (Frontend Demo)
├── register.html           # Student Account Registration (Frontend Demo)
├── privacy.html            # Transparent Student & Minor Data Protection Policy
├── terms.html              # Academy Enrollment & Attendance Terms
├── sitemap.xml             # XML Sitemap for Search Engine Crawlers
├── robots.txt              # Search Engine Crawler Guidance
│
├── css/
│   ├── style.css           # Core Design System, Variables, Layout & Components
│   └── responsive.css      # Breakpoints for Mobile, Tablet, Accessibility & Print
│
├── js/
│   ├── main.js             # Global Academy Configuration, Sticky Nav, FAQs, Toast Utility
│   ├── courses.js          # Editable 14-Course Data Array, Filtering & Detail Modals
│   ├── tasbeeh.js          # Interactive Digital Tasbeeh with Web Audio & Dhikr Presets
│   ├── prayer-times.js     # Live Prayer Times with Aladhan API & Offline Estimation
│   └── forms.js            # Client-side Validation & Instant WhatsApp Formatting
│
└── assets/
    ├── images/             # High-Fidelity Studio Photographs & Portraits
    │   ├── hero_quran_study.jpg
    │   ├── teacher_bua_qasim.jpg
    │   ├── quran_student_study.jpg
    │   ├── islamic_arabesque_bg.jpg
    │   └── islamic_books_shelf.jpg
    ├── icons/              # Vector Icons & Favicons
    └── books/              # Authorized Study Literature
```

---

## ⚙️ Configuration & Customization Guide

### 1. How to Update WhatsApp Number
All WhatsApp inquiry buttons, demo bookings, course questions, and floating links are centrally configured in **`js/main.js`**:

Open `js/main.js` and locate:
```javascript
window.ACADEMY_CONFIG = {
  academyName: "Online Quran Academy — Teacher Bua Qasim Shigry",
  teacherName: "Bua Qasim Shigry",
  teacherExperience: "16 Years",
  // Replace with your verified international phone number (digits only, with country code)
  whatsappNumber: "923000000000",
  contactEmail: "info@quranacademyshigry.com"
};
```
Replace `"923000000000"` with your actual WhatsApp number (e.g., `"923001234567"` or `"447911123456"`).

---

### 2. How to Add or Edit Courses
All 14 courses are stored in the clean data array in **`js/courses.js`**:
```javascript
const COURSES_DATA = [
  {
    id: "quran-nazira",
    title: "Quran Nazira",
    category: "recitation", // 'recitation', 'understanding', 'languages', or 'foundations'
    categoryLabel: "Recitation & Reading",
    icon: "📖",
    level: "Beginner to Intermediate",
    audience: "Children & Adults",
    schedule: "2 to 5 sessions / week",
    shortDesc: "...",
    fullDesc: "...",
    objectives: [...]
  },
  // Add new course objects here
];
```

---

### 3. How to Add New Books or Authorized PDFs
Open **`books.html`** and locate the `BOOKS_CATALOG` array:
```javascript
const BOOKS_CATALOG = [
  {
    id: "noorani-qaida",
    title: "Noorani Qaida (Color-Coded)",
    author: "Shaykh Noor Muhammad Haqqani",
    category: "quran", // 'quran', 'tajweed', 'hadith', 'arabic', 'children'
    categoryName: "Quran & Recitation",
    language: "Arabic / Urdu / English",
    desc: "...",
    isAuthorizedDownload: true,
    downloadNote: "Standard open-source pedagogical text."
  }
];
```

---

### 4. How to Deploy to Any Static Web Host
This website contains **no build steps or server-side runtimes required for static hosting**. You can deploy it in 3 ways:

1. **GitHub Pages**:
   - Push this repository to GitHub.
   - Go to **Settings > Pages > Branch: `main` / root (`/`)**.
   - Your website is live immediately.

2. **Netlify or Vercel**:
   - Drag and drop this folder directly into the Netlify or Vercel web console.
   - Publish directory: `.` (workspace root).

3. **cPanel / Apache / Nginx**:
   - Upload all files and folders (`index.html`, `css/`, `js/`, `assets/`, etc.) into your `public_html` directory via FTP or File Manager.

---

## 🔒 Static Architecture & Future Backend Enhancements

In accordance with web security best practices, a purely static website does not execute server-side database authentication or private file storage.

The frontend is architected so you can effortlessly attach external services when ready:
- **Authentication**: Connect `login.html` and `register.html` to Firebase Authentication or Supabase Auth.
- **Form Delivery**: Connect `contactForm` and `demoBookingForm` to a free form gateway (e.g., Formspree, Formkeep, or Google Sheets Webhook).
- **Payment Processing**: Integrate Stripe Checkout or direct international wire transfer details.
