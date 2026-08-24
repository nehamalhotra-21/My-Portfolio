/* ============================================================
   DATA
   ============================================================ */

const skillGroups = [
  {
    title: 'Programming',
    icon: 'code',
    tags: ['Python', 'Java', 'JavaScript']
  },
  {
    title: 'Web',
    icon: 'web',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Data & Analytics',
    icon: 'data',
    tags: ['NumPy', 'Pandas']
  },
  {
    title: 'Database',
    icon: 'db',
    tags: ['DBMS', 'SQL']
  },
  {
    title: 'Core CS',
    icon: 'core',
    tags: ['Operating Systems']
  },
  {
    title: 'Tools',
    icon: 'tools',
    tags: ['Git', 'GitHub']
  },
  {
    title: 'Cloud',
    icon: 'cloud',
    tags: ['Cloud Computing', 'Microsoft Azure']
  }
];

const skillIcons = {
  code: '<path d="M9.5 6 4 12l5.5 6M14.5 6 20 12l-5.5 6"/>',
  web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9Z"/>',
  data: '<path d="M4 19V10M10 19V5M16 19v-7M22 19H2"/>',
  db: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5V18c0 1.7 3.6 3 8 3s8-1.3 8-3V5.5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  core: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  tools: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.1 7.9 20 19M20 5 8.1 16.1"/>',
  cloud: '<path d="M6.5 19a4.5 4.5 0 0 1-.5-8.98A6 6 0 0 1 17.6 8.5 4.5 4.5 0 0 1 17 19H6.5Z"/>'
};

const projects = [
  {
    title: 'CarbonWise',
    status: 'Full-stack · Applied AI',
    description: "A full-stack vehicle emissions intelligence platform that lets car buyers, researchers, and curious users cut through automaker greenwashing to see the true lifecycle carbon cost of any vehicle, no code required. It accounts for manufacturing emissions, real-world fuel and energy use, battery disposal, and state grid intensity, for an honest, science-backed picture instead of tailpipe-only marketing numbers.",
    stack: ['React', 'Vite', 'D3.js', 'Chart.js', 'Django', 'Groq LLaMA'],
    github: 'https://github.com/nehamalhotra-21/carbonwise',
    demo: 'https://carbonwise-brown.vercel.app/',
    icon: 'leaf'
  },
  {
    title: 'EduMetrics',
    status: 'Academic Advisory Platform',
    description: "An academic advisory intelligence platform built for college advisors. It connects to a college's existing data, attendance, assignments, quizzes, library usage, and surfaces who needs attention this week, with plain-English explanations of why. Built around the belief that advisors have limited time and many students, so that time is spent on the students who need it most, with the right context to act effectively.",
    stack: ['Python', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/nehamalhotra-21/Edumetrics',
    demo: 'https://edu-metrics-seven.vercel.app/',
    icon: 'graph'
  },
  {
    title: 'Sales Dashboard',
    status: 'Single-page Web App',
    description: "A lightweight, single-page web app that gives sales teams an instant snapshot of business performance for any chosen day. Instead of digging through spreadsheets or a database console, a sales manager picks a report date and the dashboard pulls together today's numbers, month-to-date totals, comparisons with the previous month, per-representative performance, and monthly trends, all in one screen.",
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    github: 'https://github.com/nehamalhotra-21/Sales-Dashboard-',
    demo: 'https://sales-dashboard-khaki-chi.vercel.app/',
    icon: 'dashboard'
  },
  {
    title: 'Resume-to-Portfolio Generator',
    status: 'AI-generated Sites',
    description: 'Upload a resume as a PDF, DOCX, or TXT file and get back a ready-made portfolio website, populated automatically by Gemini, turning a static document into a shareable personal site in minutes.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Python'],
    github: 'https://github.com/nehamalhotra-21/Resume-Portfolio-Generator',
    demo: 'https://resume-portfolio-generator-sc.onrender.com/index.html',
    icon: 'sparkle'
  }
];

const projectIcons = {
  leaf: '<path d="M5 21c9 0 14-5 14-14V5h-2c-9 0-14 5-14 14v2Z"/><path d="M5 21c4-6 8-10 14-14"/>',
  graph: '<path d="M3 3v18h18"/><path d="m7 15 4-6 3 4 5-8"/>',
  dashboard: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/><circle cx="12" cy="12" r="2.5"/>'
};

const education = [
  {
    period: '2025 — 2029 · Currently pursuing',
    title: 'B.Tech, Computer Science (Hons.) — AI & Analytics',
    org: 'GLA University, Mathura',
    meta: ''
  },
  {
    period: '2024',
    title: 'Class XII — CBSE',
    org: 'PCMB, Science Stream',
    meta: '82.8%'
  },
  {
    period: '2022',
    title: 'Class X — CBSE',
    org: '',
    meta: '92%'
  }
];

const certifications = [
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    meta: '',
    image: 'https://drive.google.com/thumbnail?id=1zLFE1JXmVQfAr_mPQUcveJVUhCYbt73O&sz=w1000',
    link: 'https://drive.google.com/file/d/1zLFE1JXmVQfAr_mPQUcveJVUhCYbt73O/view?usp=drive_link'
  },
  {
    title: 'AI Algorithm Development with Python: Essentials & Implementation',
    issuer: 'Intel® Unnati / Edulateral Foundation / GLA University',
    meta: '27–31 October 2025',
    image: 'https://drive.google.com/thumbnail?id=12n6-Y1hcm0GEHvF5UtNZ1oR6Un9T_Ivd&sz=w1000',
    link: 'https://drive.google.com/file/d/12n6-Y1hcm0GEHvF5UtNZ1oR6Un9T_Ivd/view?usp=drive_link'
  },
  {
    title: 'AI Mastery: Unlocking the Power of Artificial Intelligence',
    issuer: 'NEC Corporation India / Edulateral Foundation / GLA University',
    meta: '27–31 October 2025 · Certificate No. NEC1180',
    image: 'https://drive.google.com/thumbnail?id=1_ILNivhex7frelWsE49iGM1TLVWNKrNr&sz=w1000',
    link: 'https://drive.google.com/file/d/1_ILNivhex7frelWsE49iGM1TLVWNKrNr/view'
  }
];

const achievements = [
  {
    rank: 'Top 20 Finalist',
    title: 'Praxis 2.0 Hackathon',
    org: 'Google Developer Group',
    link: 'https://drive.google.com/file/d/1N5LbmMlcBLrvxhHSJlS8QT1XQeWlZ4kO/view?usp=drive_link'
  },
  {
    rank: 'Top 100 Participant',
    title: 'Confluence 2.0',
    org: 'International Innovation Hackathon',
    link: 'https://drive.google.com/file/d/1cYYx1juyq4SBbMSMxVZR9GSbBUG3TMJo/view'
  },
  {
    rank: 'Top 12 Finalist',
    title: 'Hack It Out',
    org: 'IIT BHU',
    link: 'https://drive.google.com/file/d/1nDrzci8gSLS36TFZEiNJC9NslfICumEr/view'
  }
];

/* ============================================================
   HELPERS
   ============================================================ */

function driveIdFromLink(url) {
  const m = url.match(/\/d\/([^/]+)/);
  return m ? m[1] : null;
}

function driveEmbedUrl(url) {
  const id = driveIdFromLink(url);
  return id ? `https://drive.google.com/file/d/${id}/preview` : url;
}

const svgNS = 'http://www.w3.org/2000/svg';
function icon(pathInner, cls) {
  return `<svg class="${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${pathInner}</svg>`;
}

const externalIcon = '<path d="M7 17 17 7M9 7h8v8"/>';
const githubIcon = '<path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.11.82-.27.82-.6 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.66-4.04-1.66-.55-1.42-1.34-1.8-1.34-1.8-1.1-.77.08-.75.08-.75 1.21.09 1.85 1.27 1.85 1.27 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.67-.31-5.47-1.36-5.47-6.03 0-1.33.46-2.42 1.22-3.27-.12-.31-.53-1.55.12-3.23 0 0 1-.33 3.3 1.24a11.2 11.2 0 0 1 6 0c2.3-1.57 3.3-1.24 3.3-1.24.65 1.68.24 2.92.12 3.23.76.85 1.22 1.94 1.22 3.27 0 4.68-2.8 5.72-5.48 6.02.43.38.81 1.13.81 2.28 0 1.65-.02 2.98-.02 3.38 0 .33.22.72.83.6C20.57 22.34 24 17.74 24 12.3 24 5.5 18.63 0 12 0Z"/>';

/* ============================================================
   RENDER: SKILLS
   ============================================================ */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = skillGroups.map(group => `
    <div class="skill-card reveal">
      <div class="skill-card-head">
        <span class="skill-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${skillIcons[group.icon]}</svg>
        </span>
        <span class="skill-card-title">${group.title}</span>
      </div>
      <div class="skill-tags">
        ${group.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ============================================================
   RENDER: PROJECTS
   ============================================================ */
function renderProjects() {
  const list = document.getElementById('projects-list');
  list.innerHTML = projects.map((p, i) => `
    <article class="project-card reveal">
      <span class="project-index">${String(i + 1).padStart(2, '0')}</span>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <span class="project-status">${p.status}</span>
        <p class="project-desc">${p.description}</p>
        <div class="project-stack">
          ${p.stack.map(s => `<span>${s}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
            ${icon(githubIcon, 'btn-icon')}
            GitHub
          </a>
          <a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
            ${icon(externalIcon, 'btn-icon')}
            Live Demo
          </a>
        </div>
      </div>
      <div class="project-thumb">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${projectIcons[p.icon]}</svg>
      </div>
    </article>
  `).join('');
}

/* ============================================================
   RENDER: EDUCATION TIMELINE
   ============================================================ */
function renderTimeline() {
  const wrap = document.getElementById('timeline');
  wrap.innerHTML = education.map(e => `
    <div class="timeline-item reveal">
      <span class="timeline-period">${e.period}</span>
      <h3 class="timeline-title">${e.title}</h3>
      ${e.org ? `<p class="timeline-org">${e.org}</p>` : ''}
      ${e.meta ? `<p class="timeline-meta">${e.meta}</p>` : ''}
    </div>
  `).join('');
}

/* ============================================================
   RENDER: CERTIFICATIONS
   ============================================================ */
function renderCertifications() {
  const grid = document.getElementById('cert-grid');
  grid.innerHTML = certifications.map((c, i) => `
    <div class="cert-card reveal" data-index="${i}" tabindex="0" role="button" aria-label="Preview certificate: ${c.title}">
      <div class="cert-thumb">
        <img src="${c.image}" alt="${c.title} certificate" loading="lazy" onerror="this.style.display='none'; this.parentElement.querySelector('.cert-thumb-icon').style.display='flex';">
        <span class="cert-thumb-icon" style="display:none;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 3 7v6c0 5 4 8.5 9 9 5-.5 9-4 9-9V7l-9-5Z"/><path d="m9 12 2 2 4-4"/></svg>
        </span>
        <span class="cert-view-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          View
        </span>
      </div>
      <div class="cert-body">
        <h3 class="cert-title">${c.title}</h3>
        <p class="cert-issuer">${c.issuer}</p>
        ${c.meta ? `<p class="cert-meta">${c.meta}</p>` : ''}
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.cert-card').forEach(card => {
    const open = () => {
      const c = certifications[Number(card.dataset.index)];
      openModal({
        title: c.title,
        sub: [c.issuer, c.meta].filter(Boolean).join(' · '),
        embedUrl: driveEmbedUrl(c.link),
        openUrl: c.link
      });
    };
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
}

/* ============================================================
   RENDER: ACHIEVEMENTS
   ============================================================ */
function renderAchievements() {
  const grid = document.getElementById('achieve-grid');
  grid.innerHTML = achievements.map((a, i) => `
    <div class="achieve-card reveal" data-index="${i}" tabindex="0" role="button" aria-label="View certificate: ${a.title}">
      <span class="achieve-rank">${a.rank}</span>
      <h3 class="achieve-title">${a.title}</h3>
      <p style="color:#B9C2E2; font-size:0.92rem;">${a.org}</p>
      <span class="achieve-cta">
        View certificate
        ${icon(externalIcon)}
      </span>
    </div>
  `).join('');

  grid.querySelectorAll('.achieve-card').forEach(card => {
    const open = () => {
      const a = achievements[Number(card.dataset.index)];
      openModal({
        title: a.title,
        sub: `${a.rank} · ${a.org}`,
        embedUrl: driveEmbedUrl(a.link),
        openUrl: a.link
      });
    };
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
}

/* ============================================================
   MODAL
   ============================================================ */
const modal = document.getElementById('modal');
const modalFrame = document.getElementById('modal-frame');
const modalTitle = document.getElementById('modal-title');
const modalSub = document.getElementById('modal-sub');
const modalOpen = document.getElementById('modal-open');
let lastFocused = null;

function openModal({ title, sub, embedUrl, openUrl }) {
  lastFocused = document.activeElement;
  modalTitle.textContent = title;
  modalSub.textContent = sub;
  modalFrame.src = embedUrl;
  modalOpen.href = openUrl;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-close').focus();
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  modalFrame.src = '';
  if (lastFocused) lastFocused.focus();
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-backdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

/* ============================================================
   NAV: scroll state + mobile toggle + active link
   ============================================================ */
const navEl = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

function onScroll() {
  navEl.classList.toggle('scrolled', window.scrollY > 12);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  items.forEach(item => io.observe(item));
}

/* ============================================================
   HERO PHOTO FALLBACK
   ============================================================ */
const heroPhoto = document.getElementById('hero-photo');
const heroFallback = document.getElementById('hero-photo-fallback');
if (heroPhoto) {
  heroPhoto.addEventListener('error', () => {
    heroPhoto.style.display = 'none';
    if (heroFallback) heroFallback.style.display = 'flex';
  });
}

/* ============================================================
   HERO NETWORK SVG (signature ambient graphic)
   ============================================================ */
function initHeroNetwork() {
  const svg = document.getElementById('hero-network');
  if (!svg) return;
  const W = 1200, H = 800;
  const count = window.innerWidth < 720 ? 16 : 28;
  const points = [];
  for (let i = 0; i < count; i++) {
    points.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 1.6 + Math.random() * 2.2
    });
  }

  let linesHtml = '';
  const maxDist = 220;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        linesHtml += `<line x1="${points[i].x.toFixed(1)}" y1="${points[i].y.toFixed(1)}" x2="${points[j].x.toFixed(1)}" y2="${points[j].y.toFixed(1)}" />`;
      }
    }
  }

  let dotsHtml = '';
  points.forEach((p, i) => {
    const pulse = i % 5 === 0 ? 'pulse' : '';
    dotsHtml += `<circle class="${pulse}" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${p.r.toFixed(1)}" style="animation-delay:${(i * 0.3).toFixed(1)}s"/>`;
  });

  svg.innerHTML = linesHtml + dotsHtml;
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderTimeline();
  renderCertifications();
  renderAchievements();
  initHeroNetwork();
  initReveal();
});
