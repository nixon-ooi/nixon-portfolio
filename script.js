// Navigate to page (global function)
function navigateToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(pageId + 'Page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update nav links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });

    // Close mobile menu
    if (mobileNav) {
        mobileNav.classList.add('hidden');
        if (menuIcon) menuIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
    }

    if (pageId === 'portfolio') {
        renderProjects();
        setTimeout(() => { attachProjectCardHandlers(); }, 0);
    }

    if (pageId === 'observations') {
        renderObservations();
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, [data-page]');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.page;
            if (pageId) {
                navigateToPage(pageId);
            }
        });
    });

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }
}


//
// Portfolio page
//
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map((project, index) => {
        const isEven = index % 2 === 1;

        return `
            <div class="portfolio-list-card" data-project-id="${project.id}">
                ${isEven ? `
                    <div class="portfolio-card-content">
                        <div>
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                        </div>
                        <div class="portfolio-card-cta">
                            <span>View case study</span>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </div>
                    <div class="portfolio-card-image">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                        <span class="portfolio-category-badge">${project.category}</span>
                    </div>
                ` : `
                    <div class="portfolio-card-image">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                        <span class="portfolio-category-badge">${project.category}</span>
                    </div>
                    <div class="portfolio-card-content">
                        <div>
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                        </div>
                        <div class="portfolio-card-cta">
                            <span>View case study</span>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </div>
                `}
            </div>
        `;
    }).join('');

    attachProjectCardHandlers();
}

function attachProjectCardHandlers() {
    document.querySelectorAll('.portfolio-list-card[data-project-id]').forEach(card => {
        card.addEventListener('click', () => {
            showProjectDetail(parseInt(card.dataset.projectId));
        });
    });
}


//
// Gallery rendering
//
function createCarousel(gallery, galleryIndex) {
    const carouselId = `carousel-${galleryIndex}`;
    const hasRationale = gallery.images.some(img => img.rationale);

    const imagesHtml = gallery.images.map((img, i) => `
        <div class="carousel-slide ${i === 0 ? 'active' : ''}" data-slide="${i}" data-rationale="${img.rationale ? img.rationale.replace(/"/g, '&quot;') : ''}">
            <img src="${img.url}" alt="${img.caption || ''}" class="carousel-image" data-gallery="${galleryIndex}" data-index="${i}">
            ${img.caption ? `<div class="carousel-caption">${img.caption}</div>` : ''}
        </div>
    `).join('');

    const dotsHtml = gallery.images.map((_, i) => `
        <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></button>
    `).join('');

    const firstRationale = gallery.images[0]?.rationale || '';

    return `
        <div class="gallery-section">
            ${gallery.title ? `<h3 class="gallery-title">${gallery.title}</h3>` : ''}
            <div class="carousel" id="${carouselId}" data-gallery-index="${galleryIndex}">
                <div class="carousel-container">
                    <button class="carousel-btn carousel-prev">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <div class="carousel-slides">
                        ${imagesHtml}
                    </div>
                    <button class="carousel-btn carousel-next">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
                <div class="carousel-dots">
                    ${dotsHtml}
                </div>
                ${hasRationale ? `<div class="carousel-rationale"><p>${firstRationale}</p></div>` : ''}
            </div>
        </div>
        ${gallery.description ? `<p class="gallery-description">${gallery.description}</p>` : ''}
    `;
}

function createColumnGallery(gallery, galleryIndex, columns) {
    const imagesHtml = gallery.images.map((img, i) => `
        <div class="gallery-image-wrapper">
            <img src="${img.url}" alt="${img.caption || ''}" class="gallery-image" data-gallery="${galleryIndex}" data-index="${i}">
            ${img.caption ? `<div class="gallery-image-caption">${img.caption}</div>` : ''}
        </div>
    `).join('');

    return `
        <div class="gallery-section">
            ${gallery.title ? `<h3 class="gallery-title">${gallery.title}</h3>` : ''}
            <div class="gallery-grid gallery-${columns}-column">
                ${imagesHtml}
            </div>
        </div>
    `;
}

function createGridGallery(gallery, galleryIndex) {
    const imagesHtml = gallery.images.map((img, i) => `
        <div class="gallery-image-wrapper" data-gallery="${galleryIndex}" data-index="${i}" style="cursor:pointer;">
            <img src="${img.url}" alt="${img.caption || ''}" class="gallery-image" data-gallery="${galleryIndex}" data-index="${i}">
            ${img.caption ? `<div class="gallery-image-caption">${img.caption}</div>` : ''}
        </div>
    `).join('');

    return `
        <div class="gallery-section">
            ${gallery.title ? `<h3 class="gallery-title">${gallery.title}</h3>` : ''}
            <div class="gallery-grid gallery-2x2">
                ${imagesHtml}
            </div>
            ${gallery.subtitle ? `<h3 class="gallery-subtitle">${gallery.subtitle}</h3>` : ''}
            ${gallery.description ? `<p class="gallery-description">${gallery.description}</p>` : ''}
        </div>
    `;
}

function renderGallery(gallery, galleryIndex) {
    const galleryType = gallery.galleryType || gallery.type;
    switch (galleryType) {
        case 'carousel':      return createCarousel(gallery, galleryIndex);
        case 'two-column':    return createColumnGallery(gallery, galleryIndex, 'two');
        case 'three-column':  return createColumnGallery(gallery, galleryIndex, 'three');
        case 'grid-2x2':      return createGridGallery(gallery, galleryIndex);
        default:              return '';
    }
}


//
// Section rendering
//
function renderSections(sections) {
    if (!sections) return '';
    return sections.map((section, index) => renderSection(section, index)).join('');
}

function renderSection(section, index) {
    switch (section.type) {
        case 'gallery':          return renderGallery(section, index);
        case 'brief':            return renderBriefSection(section);
        case 'image-text':       return renderImageTextSection(section);
        case 'tabs':             return renderTabsSection(section);
        case 'accordion':        return renderAccordionSection(section);
        case 'learning-points':  return renderLearningPoints(section);
        case 'storyboard':       return renderStoryboard(section);
        case 'user-voices':      return renderUserVoices(section);
        default:                 return '';
    }
}

function renderUserVoices(section) {
    const { title, quotes = [], stats = [], insight } = section;
    return `
    <section class="project-detail-content user-voices-section">
        <div class="container">
            <h2 class="section-title">${title}</h2>
            <div class="user-voices-inner">
                <div class="user-voices-quotes">
                    ${quotes.map((q, i) => `
                        <blockquote class="user-voice-quote ${i === 0 ? 'user-voice-quote--primary' : ''}">
                            <p>"${q.text}"</p>
                            <cite>— ${q.source}</cite>
                        </blockquote>
                    `).join('')}
                </div>
                <div class="user-voices-stats">
                    ${stats.map(s => `
                        <div class="user-voice-stat">
                            <span class="user-voice-stat-value">${s.value}</span>
                            <span class="user-voice-stat-label">${s.label}</span>
                        </div>
                    `).join('')}
                </div>
                ${insight ? `
                <div class="user-voices-insight">
                    <p>${insight}</p>
                </div>` : ''}
            </div>
        </div>
    </section>`;
}

function getEcoParkPanels() {
    return [
        { num: '01', label: 'The Setup',       caption: '"I need to find parking before I get there."',                          svg: sbPanel1() },
        { num: '02', label: 'The Chaos',        caption: '"Which app? Which code? How much is this going to cost?"',              svg: sbPanel2() },
        { num: '03', label: 'The Frustration',  caption: '"I\'ve been circling for 10 minutes. I\'m going to be late."',         svg: sbPanel3() },
        { num: '04', label: 'Discovery',        caption: '"Park + Tram — £2.50, 0.80kg CO₂ saved. I\'ll take that."',           svg: sbPanel4() },
        { num: '05', label: 'The Resolution',   caption: 'On time. Stress-free. 12kg CO₂ saved this month.',                    svg: sbPanel5() },
    ];
}

function getHealthBuddyPanels() {
    return [
        { num: '01', label: 'The Prescription', caption: 'A new medication has been prescribed. Time to log it in the app.',             svg: sbHBPanel1() },
        { num: '02', label: 'The Overwhelm',    caption: '"Which medicine is this? Why is the list so long?"',                           svg: sbHBPanel2() },
        { num: '03', label: 'Lost Mid-Flow',    caption: '"What step am I on? How do I go back?"',                                       svg: sbHBPanel3() },
        { num: '04', label: 'The Consequence',  caption: 'Three doses missed. The app was meant to help.',                               svg: sbHBPanel4() },
        { num: '05', label: 'Resolution',       caption: 'Clear steps, QR scanner, task done. Medication logged with confidence.',       svg: sbHBPanel5() },
    ];
}

function sbHBPanel1() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#F2E8D2"/>
      <rect y="165" width="280" height="45" fill="#E0D0B8"/>
      <rect x="30" y="130" width="220" height="12" rx="4" fill="#C8A878"/>
      <rect x="55" y="142" width="10" height="23" fill="#B89868"/>
      <rect x="215" y="142" width="10" height="23" fill="#B89868"/>
      <rect x="60" y="106" width="18" height="26" rx="4" fill="#E05A80"/>
      <rect x="60" y="103" width="18" height="7" rx="2" fill="#C04060"/>
      <rect x="84" y="110" width="16" height="22" rx="3" fill="#5A8AE0"/>
      <rect x="84" y="107" width="16" height="6" rx="2" fill="#3A6AC0"/>
      <rect x="110" y="99" width="16" height="22" rx="3" fill="#60B878"/>
      <rect x="110" y="96" width="16" height="6" rx="2" fill="#40987A"/>
      <rect x="152" y="97" width="62" height="34" rx="3" fill="white" stroke="#C8C0B0" stroke-width="1.5"/>
      <text x="157" y="108" fill="#888" font-size="6" font-family="sans-serif" font-weight="bold">Rx Prescription</text>
      <line x1="157" y1="114" x2="206" y2="114" stroke="#E0D8C8" stroke-width="1"/>
      <line x1="157" y1="120" x2="200" y2="120" stroke="#E0D8C8" stroke-width="1"/>
      <line x1="157" y1="126" x2="204" y2="126" stroke="#E0D8C8" stroke-width="1"/>
      <rect x="88" y="94" width="36" height="38" rx="8" fill="#8090A8"/>
      <circle cx="106" cy="80" r="17" fill="#E8C090"/>
      <path d="M90 78 Q106 65 122 78" fill="#C8C0B8"/>
      <ellipse cx="97" cy="73" rx="5" ry="4" fill="#C8C0B8"/>
      <ellipse cx="115" cy="73" rx="5" ry="4" fill="#C8C0B8"/>
      <circle cx="101" cy="81" r="2" fill="#3C2A1A"/>
      <circle cx="111" cy="81" r="2" fill="#3C2A1A"/>
      <path d="M100 88 Q106 92 112 88" stroke="#3C2A1A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <rect x="168" y="84" width="36" height="50" rx="8" fill="#5C4A38"/>
      <circle cx="186" cy="71" r="17" fill="#E8B878"/>
      <circle cx="181" cy="69" r="2" fill="#3C2A1A"/>
      <circle cx="191" cy="69" r="2" fill="#3C2A1A"/>
      <path d="M180 76 Q186 80 192 76" stroke="#3C2A1A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <circle cx="128" cy="62" r="3" fill="white" opacity="0.9"/>
      <circle cx="138" cy="52" r="4.5" fill="white" opacity="0.92"/>
      <rect x="142" y="28" width="54" height="28" rx="10" fill="white" opacity="0.95"/>
      <rect x="150" y="36" width="12" height="16" rx="3" fill="#2A1808"/>
      <rect x="152" y="39" width="8" height="11" rx="1.5" fill="#8090A8"/>
      <rect x="152" y="39" width="8" height="4" rx="1" fill="#6A1A42"/>
      <circle cx="178" cy="44" r="9" fill="#E05A80" opacity="0.85"/>
      <text x="178" y="48" text-anchor="middle" fill="white" font-size="10" font-family="sans-serif">+</text>
    </svg>`;
}

function sbHBPanel2() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#F2E8D2"/>
      <rect y="165" width="280" height="45" fill="#E0D0B8"/>
      <rect x="20" y="148" width="240" height="50" rx="10" fill="#C8B898"/>
      <rect x="30" y="138" width="55" height="28" rx="8" fill="#D8C8A8"/>
      <rect x="195" y="138" width="55" height="28" rx="8" fill="#D8C8A8"/>
      <rect x="112" y="118" width="56" height="40" rx="10" fill="#8090A8"/>
      <circle cx="140" cy="102" r="19" fill="#E8C090"/>
      <path d="M90 78 Q140 65 190 78" fill="#C8C0B8" opacity="0.5"/>
      <circle cx="133" cy="100" r="3" fill="#3C2A1A"/>
      <circle cx="147" cy="100" r="3" fill="#3C2A1A"/>
      <circle cx="134.5" cy="98.5" r="1" fill="white"/>
      <circle cx="148.5" cy="98.5" r="1" fill="white"/>
      <line x1="133" y1="110" x2="147" y2="110" stroke="#3C2A1A" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="112" y1="130" x2="82" y2="148" stroke="#8090A8" stroke-width="9" stroke-linecap="round"/>
      <line x1="168" y1="130" x2="198" y2="148" stroke="#8090A8" stroke-width="9" stroke-linecap="round"/>
      <rect x="78" y="128" width="30" height="52" rx="6" fill="#2A1808"/>
      <rect x="81" y="132" width="24" height="44" rx="4" fill="#6A1A42"/>
      <rect x="81" y="132" width="24" height="9" rx="3" fill="#4A0A2A"/>
      <text x="93" y="139" text-anchor="middle" fill="white" font-size="4" font-family="sans-serif">HealthBuddy</text>
      <rect x="82" y="143" width="22" height="3" rx="1" fill="white" opacity="0.6"/>
      <rect x="82" y="148" width="22" height="3" rx="1" fill="white" opacity="0.55"/>
      <rect x="82" y="153" width="18" height="3" rx="1" fill="white" opacity="0.5"/>
      <rect x="82" y="158" width="22" height="3" rx="1" fill="white" opacity="0.45"/>
      <rect x="82" y="163" width="20" height="3" rx="1" fill="white" opacity="0.4"/>
      <rect x="82" y="168" width="22" height="3" rx="1" fill="white" opacity="0.35"/>
      <rect x="82" y="173" width="18" height="3" rx="1" fill="white" opacity="0.3"/>
      <text x="58" y="98" fill="#C0392B" font-size="22" font-family="sans-serif" font-weight="900" opacity="0.85">?</text>
      <text x="188" y="106" fill="#C0392B" font-size="17" font-family="sans-serif" font-weight="900" opacity="0.75">?</text>
      <text x="68" y="128" fill="#C0392B" font-size="12" font-family="sans-serif" font-weight="900" opacity="0.65">?</text>
      <path d="M155 88 Q157 82 159 88 Q159 92 157 92 Q155 92 155 88Z" fill="#A8C8E8" opacity="0.7"/>
    </svg>`;
}

function sbHBPanel3() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#EEE4CE"/>
      <rect y="165" width="280" height="45" fill="#DDD0B8"/>
      <rect x="112" y="118" width="56" height="48" rx="10" fill="#8090A8"/>
      <circle cx="140" cy="102" r="20" fill="#E8C090"/>
      <path d="M128 95 Q133 91 138 95" stroke="#3C2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M142 95 Q147 91 152 95" stroke="#3C2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="133" cy="99" r="2.5" fill="#3C2A1A"/>
      <circle cx="147" cy="99" r="2.5" fill="#3C2A1A"/>
      <path d="M131 110 Q140 107 149 110" stroke="#3C2A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <line x1="112" y1="132" x2="82" y2="152" stroke="#8090A8" stroke-width="9" stroke-linecap="round"/>
      <line x1="168" y1="132" x2="198" y2="152" stroke="#8090A8" stroke-width="9" stroke-linecap="round"/>
      <rect x="190" y="128" width="30" height="52" rx="6" fill="#2A1808"/>
      <rect x="193" y="132" width="24" height="44" rx="4" fill="#F5F5F5"/>
      <rect x="193" y="132" width="24" height="8" rx="3" fill="#6A1A42"/>
      <text x="205" y="138" text-anchor="middle" fill="white" font-size="3.5" font-family="sans-serif">Set Dosage</text>
      <rect x="194" y="142" width="22" height="5" rx="1.5" fill="#E8E0E0"/>
      <rect x="194" y="149" width="22" height="5" rx="1.5" fill="#E8E0E0"/>
      <rect x="194" y="156" width="22" height="5" rx="1.5" fill="#E8E0E0"/>
      <rect x="194" y="163" width="22" height="5" rx="1.5" fill="#E8E0E0"/>
      <rect x="196" y="170" width="18" height="5" rx="2" fill="#6A1A42" opacity="0.6"/>
      <path d="M48 108 A26 26 0 1 1 36 132" fill="none" stroke="#C0392B" stroke-width="2.5" stroke-dasharray="8 5" opacity="0.7"/>
      <polygon points="31,124 36,136 46,128" fill="#C0392B" opacity="0.7"/>
      <text x="48" y="103" fill="#C0392B" font-size="16" font-family="sans-serif" font-weight="900" opacity="0.8">?</text>
      <text x="26" y="148" fill="#C0392B" font-size="12" font-family="sans-serif" font-weight="900" opacity="0.65">?</text>
    </svg>`;
}

function sbHBPanel4() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#EDE0CC"/>
      <rect x="20" y="118" width="240" height="12" rx="4" fill="#C0A070"/>
      <rect x="45" y="130" width="10" height="35" fill="#B09060"/>
      <rect x="225" y="130" width="10" height="35" fill="#B09060"/>
      <rect x="68" y="70" width="32" height="50" rx="8" fill="#D0C0B0"/>
      <rect x="68" y="67" width="32" height="10" rx="4" fill="#B0A090"/>
      <text x="84" y="101" text-anchor="middle" fill="#9A8A7A" font-size="20" font-family="sans-serif" font-weight="bold">?</text>
      <circle cx="84" cy="60" r="14" fill="none" stroke="#C0392B" stroke-width="2" opacity="0.5"/>
      <text x="84" y="65" text-anchor="middle" fill="#C0392B" font-size="14" font-family="sans-serif" font-weight="bold" opacity="0.7">!</text>
      <rect x="142" y="62" width="96" height="76" rx="6" fill="white" stroke="#C8C0B0" stroke-width="1.5"/>
      <rect x="142" y="62" width="96" height="16" rx="6" fill="#8090A8"/>
      <text x="190" y="74" text-anchor="middle" fill="white" font-size="7" font-family="sans-serif" font-weight="bold">MEDICATION LOG</text>
      <text x="158" y="92" fill="#C0392B" font-size="11" font-family="sans-serif" font-weight="bold">✗</text>
      <text x="178" y="92" fill="#C0392B" font-size="11" font-family="sans-serif" font-weight="bold">✗</text>
      <text x="198" y="92" fill="#C0392B" font-size="11" font-family="sans-serif" font-weight="bold">✗</text>
      <text x="218" y="92" fill="#C8C0B0" font-size="11" font-family="sans-serif">–</text>
      <text x="158" y="110" fill="#C8C0B0" font-size="11" font-family="sans-serif">–</text>
      <text x="178" y="110" fill="#C8C0B0" font-size="11" font-family="sans-serif">–</text>
      <text x="198" y="110" fill="#C8C0B0" font-size="11" font-family="sans-serif">–</text>
      <text x="218" y="110" fill="#C8C0B0" font-size="11" font-family="sans-serif">–</text>
      <text x="190" y="130" text-anchor="middle" fill="#C0392B" font-size="6.5" font-family="sans-serif">3 doses missed</text>
      <rect x="88" y="140" width="104" height="38" rx="10" fill="#8090A8"/>
      <circle cx="140" cy="126" r="19" fill="#E8C090"/>
      <path d="M90 78 Q140 65 190 78" fill="#C8C0B8" opacity="0.4"/>
      <path d="M126 120 Q131 116 136 120" stroke="#3C2A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M144 120 Q149 116 154 120" stroke="#3C2A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <circle cx="131" cy="123" r="2" fill="#3C2A1A"/>
      <circle cx="149" cy="123" r="2" fill="#3C2A1A"/>
      <path d="M130 133 Q140 129 150 133" stroke="#3C2A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    </svg>`;
}

function sbHBPanel5() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#F5F0E8"/>
      <rect y="165" width="280" height="45" fill="#E8DDD0"/>
      <rect x="20" y="148" width="240" height="50" rx="10" fill="#D0C0A8"/>
      <rect x="30" y="138" width="55" height="28" rx="8" fill="#DDD0B8"/>
      <rect x="195" y="138" width="55" height="28" rx="8" fill="#DDD0B8"/>
      <rect x="112" y="118" width="56" height="40" rx="10" fill="#8090A8"/>
      <circle cx="140" cy="102" r="20" fill="#E8C090"/>
      <path d="M88 78 Q140 65 192 78" fill="#C8C0B8" opacity="0.4"/>
      <path d="M131 99 Q134 96 137 99" stroke="#3C2A1A" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M143 99 Q146 96 149 99" stroke="#3C2A1A" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M130 110 Q140 118 150 110" stroke="#3C2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
      <line x1="112" y1="130" x2="82" y2="148" stroke="#8090A8" stroke-width="9" stroke-linecap="round"/>
      <line x1="168" y1="130" x2="198" y2="148" stroke="#8090A8" stroke-width="9" stroke-linecap="round"/>
      <rect x="188" y="122" width="30" height="54" rx="6" fill="#2A1808"/>
      <rect x="191" y="126" width="24" height="46" rx="4" fill="#F5F5F5"/>
      <rect x="191" y="126" width="24" height="9" rx="3" fill="#3A6ABB"/>
      <text x="203" y="133" text-anchor="middle" fill="white" font-size="4" font-family="sans-serif" font-weight="bold">HealthBuddy</text>
      <rect x="192" y="137" width="22" height="3" rx="1.5" fill="#E0E0E0"/>
      <rect x="192" y="137" width="6" height="3" rx="1.5" fill="#3A6ABB"/>
      <text x="203" y="145" text-anchor="middle" fill="#3A6ABB" font-size="3.5" font-family="sans-serif">Step 1 of 4</text>
      <rect x="194" y="148" width="18" height="14" rx="2" fill="#E8F0F8"/>
      <rect x="196" y="150" width="6" height="5" rx="1" fill="none" stroke="#3A6ABB" stroke-width="1"/>
      <rect x="204" y="150" width="6" height="5" rx="1" fill="none" stroke="#3A6ABB" stroke-width="1"/>
      <rect x="196" y="157" width="6" height="4" rx="1" fill="none" stroke="#3A6ABB" stroke-width="1"/>
      <rect x="204" y="157" width="6" height="4" rx="1" fill="none" stroke="#3A6ABB" stroke-width="1"/>
      <rect x="193" y="165" width="20" height="5" rx="2" fill="#3A6ABB"/>
      <circle cx="82" cy="140" r="16" fill="#4A7A3A"/>
      <path d="M74 140 L80 146 L91 132" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="55" y1="114" x2="59" y2="104" stroke="#F5C518" stroke-width="2" stroke-linecap="round"/>
      <line x1="51" y1="109" x2="63" y2="109" stroke="#F5C518" stroke-width="2" stroke-linecap="round"/>
      <line x1="232" y1="110" x2="236" y2="100" stroke="#F5C518" stroke-width="2" stroke-linecap="round"/>
      <line x1="228" y1="105" x2="240" y2="105" stroke="#F5C518" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
}

function getOlioPanels() {
    return [
        { num: '01', label: 'The Surplus',     caption: '"There\'s too much food here. Someone nearby should have this..."',       svg: sbOlioPanel1() },
        { num: '02', label: 'The Confusion',   caption: '"What are gems? How do I even earn these?"',                              svg: sbOlioPanel2() },
        { num: '03', label: 'The No-Show',     caption: 'No pickup time set. They waited at home. Nobody came.',                  svg: sbOlioPanel3() },
        { num: '04', label: 'The Aha Moment',  caption: '"Oh — I earn points by sharing food and playing games. Got it."',        svg: sbOlioPanel4() },
        { num: '05', label: 'The Impact',      caption: 'Food gone. 3 meals rescued. A neighbour found nearby.',                  svg: sbOlioPanel5() },
    ];
}

function sbOlioPanel1() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#FFF3E8"/>
      <rect y="148" width="280" height="62" fill="#E8D5B0"/>
      <rect y="136" width="280" height="16" fill="#C8A060"/>
      <rect x="15" y="18" width="72" height="62" fill="#D4B080" rx="3"/>
      <rect x="18" y="21" width="30" height="56" fill="#C8A060" rx="2"/>
      <rect x="52" y="21" width="30" height="56" fill="#C8A060" rx="2"/>
      <rect x="108" y="12" width="64" height="52" fill="#B8D4F0" rx="4" stroke="#A0B8C8" stroke-width="1.5"/>
      <line x1="140" y1="12" x2="140" y2="64" stroke="#A0B8C8" stroke-width="1"/>
      <line x1="108" y1="38" x2="172" y2="38" stroke="#A0B8C8" stroke-width="1"/>
      <circle cx="105" cy="131" r="11" fill="#E74C3C"/>
      <rect x="104" y="119" width="3" height="7" fill="#27AE60" rx="1"/>
      <ellipse cx="148" cy="132" rx="19" ry="9" fill="#E0B850"/>
      <ellipse cx="148" cy="125" rx="15" ry="6" fill="#F5D88A"/>
      <rect x="183" y="110" width="26" height="30" fill="#7FB3D3" rx="2"/>
      <polygon points="183,110 196,103 209,110" fill="#5F93B3"/>
      <rect x="185" y="118" width="22" height="11" fill="white" rx="1"/>
      <text x="196" y="127" text-anchor="middle" fill="#C0392B" font-size="7.5" font-family="sans-serif" font-weight="bold">EXP!</text>
      <circle cx="58" cy="93" r="15" fill="#6D4C41"/>
      <rect x="45" y="108" width="26" height="30" fill="#6D4C41" rx="3"/>
      <rect x="28" y="111" width="19" height="8" fill="#6D4C41" rx="4" transform="rotate(-12 28 111)"/>
      <rect x="71" y="114" width="19" height="8" fill="#6D4C41" rx="4" transform="rotate(12 71 114)"/>
      <path d="M51 90 Q58 87 65 90" stroke="#FDE8D0" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="53" cy="94" r="2" fill="#3C2A1A"/>
      <circle cx="63" cy="94" r="2" fill="#3C2A1A"/>
      <path d="M52 101 Q58 98 64 101" stroke="#3C2A1A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <rect x="76" y="62" width="88" height="28" fill="white" rx="8" stroke="#E0D0C0" stroke-width="1"/>
      <polygon points="80,90 90,90 85,97" fill="white"/>
      <text x="120" y="76" text-anchor="middle" fill="#666" font-size="7" font-family="sans-serif">Someone nearby</text>
      <text x="120" y="86" text-anchor="middle" fill="#C0392B" font-size="7" font-family="sans-serif">should have this!</text>
    </svg>`;
}

function sbOlioPanel2() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#F0EDE8"/>
      <rect y="165" width="280" height="45" fill="#E0D8C8"/>
      <rect x="108" y="115" width="64" height="50" rx="10" fill="#7A6A5A"/>
      <circle cx="140" cy="99" r="20" fill="#E8B870"/>
      <path d="M128 94 Q133 90 138 94" stroke="#3C2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M142 94 Q147 90 152 94" stroke="#3C2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="133" cy="98" r="2.5" fill="#3C2A1A"/>
      <circle cx="147" cy="98" r="2.5" fill="#3C2A1A"/>
      <path d="M132 108 Q140 105 148 108" stroke="#3C2A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <line x1="108" y1="128" x2="78" y2="148" stroke="#7A6A5A" stroke-width="9" stroke-linecap="round"/>
      <line x1="172" y1="128" x2="202" y2="148" stroke="#7A6A5A" stroke-width="9" stroke-linecap="round"/>
      <rect x="78" y="130" width="28" height="48" rx="5" fill="#2A1808"/>
      <rect x="81" y="134" width="22" height="40" rx="3" fill="#F5F0E8"/>
      <rect x="81" y="134" width="22" height="8" rx="3" fill="#5A2D8A"/>
      <text x="92" y="141" text-anchor="middle" fill="white" font-size="4" font-family="sans-serif">olio</text>
      <polygon points="92,148 97,153 92,158 87,153" fill="#E8B830" stroke="#D0A020" stroke-width="1"/>
      <text x="92" y="164" text-anchor="middle" fill="#5A2D8A" font-size="5" font-family="sans-serif">50 gems</text>
      <rect x="83" y="167" width="18" height="5" rx="2" fill="#5A2D8A" opacity="0.7"/>
      <text x="46" y="90" fill="#C0392B" font-size="30" font-family="sans-serif" font-weight="900" opacity="0.85">?</text>
      <text x="186" y="98" fill="#C0392B" font-size="22" font-family="sans-serif" font-weight="900" opacity="0.75">?</text>
      <text x="170" y="140" fill="#C0392B" font-size="16" font-family="sans-serif" font-weight="900" opacity="0.65">?</text>
      <circle cx="112" cy="72" r="4" fill="white" opacity="0.9" stroke="#DDD" stroke-width="1"/>
      <circle cx="105" cy="63" r="6" fill="white" opacity="0.9" stroke="#DDD" stroke-width="1"/>
      <rect x="64" y="40" width="90" height="26" fill="white" rx="8" stroke="#DDD" stroke-width="1"/>
      <text x="109" y="53" text-anchor="middle" fill="#666" font-size="7" font-family="sans-serif">What are gems?</text>
      <text x="109" y="63" text-anchor="middle" fill="#C0392B" font-size="7" font-family="sans-serif">What do I do with them?</text>
    </svg>`;
}

function sbOlioPanel3() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#E8E0D8"/>
      <rect y="160" width="280" height="50" fill="#D0C0A8"/>
      <rect y="152" width="280" height="12" fill="#B8A880"/>
      <rect x="183" y="62" width="78" height="98" fill="#C4A878" rx="3"/>
      <rect x="186" y="65" width="72" height="92" fill="#D8BC90" rx="2"/>
      <circle cx="194" cy="112" r="4" fill="#C8A830"/>
      <rect x="200" y="70" width="52" height="28" fill="#B8D4F0" rx="2"/>
      <circle cx="70" cy="70" r="28" fill="white" stroke="#C8B8A0" stroke-width="2"/>
      <circle cx="70" cy="70" r="3" fill="#4A3828"/>
      <line x1="70" y1="70" x2="70" y2="48" stroke="#4A3828" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="70" y1="70" x2="88" y2="76" stroke="#E05A20" stroke-width="2" stroke-linecap="round"/>
      <line x1="70" y1="44" x2="70" y2="48" stroke="#8A7A6A" stroke-width="2"/>
      <line x1="70" y1="92" x2="70" y2="96" stroke="#8A7A6A" stroke-width="2"/>
      <line x1="44" y1="70" x2="48" y2="70" stroke="#8A7A6A" stroke-width="2"/>
      <line x1="92" y1="70" x2="96" y2="70" stroke="#8A7A6A" stroke-width="2"/>
      <rect x="108" y="118" width="50" height="42" rx="8" fill="#7A6A5A"/>
      <circle cx="133" cy="102" r="18" fill="#E8B870"/>
      <circle cx="126" cy="100" r="2.5" fill="#3C2A1A"/>
      <circle cx="140" cy="100" r="2.5" fill="#3C2A1A"/>
      <path d="M126 109 Q133 107 140 109" stroke="#3C2A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <line x1="108" y1="132" x2="83" y2="140" stroke="#7A6A5A" stroke-width="9" stroke-linecap="round"/>
      <line x1="158" y1="132" x2="183" y2="140" stroke="#7A6A5A" stroke-width="9" stroke-linecap="round"/>
      <rect x="197" y="140" width="30" height="18" fill="#E8B830" rx="4"/>
      <text x="212" y="153" text-anchor="middle" fill="#9A7820" font-size="7" font-family="sans-serif">food</text>
      <rect x="28" y="120" width="68" height="24" fill="white" rx="6" stroke="#D0C8B8" stroke-width="1"/>
      <text x="62" y="131" text-anchor="middle" fill="#888" font-size="6.5" font-family="sans-serif">No pick-up time set.</text>
      <text x="62" y="141" text-anchor="middle" fill="#C0392B" font-size="6.5" font-family="sans-serif">Still waiting...</text>
    </svg>`;
}

function sbOlioPanel4() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#F2EDE8"/>
      <rect y="165" width="280" height="45" fill="#E0D5C0"/>
      <rect x="20" y="148" width="240" height="50" rx="10" fill="#C8B898"/>
      <rect x="30" y="138" width="55" height="28" rx="8" fill="#D8C8A8"/>
      <rect x="195" y="138" width="55" height="28" rx="8" fill="#D8C8A8"/>
      <rect x="112" y="118" width="56" height="40" rx="10" fill="#7A6A5A"/>
      <circle cx="140" cy="100" r="20" fill="#E8C090"/>
      <path d="M131 97 Q134 94 137 97" stroke="#3C2A1A" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M143 97 Q146 94 149 97" stroke="#3C2A1A" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <circle cx="133" cy="101" r="2.5" fill="#3C2A1A"/>
      <circle cx="147" cy="101" r="2.5" fill="#3C2A1A"/>
      <path d="M130 110 Q140 118 150 110" stroke="#3C2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
      <line x1="112" y1="130" x2="82" y2="148" stroke="#7A6A5A" stroke-width="9" stroke-linecap="round"/>
      <line x1="168" y1="130" x2="198" y2="148" stroke="#7A6A5A" stroke-width="9" stroke-linecap="round"/>
      <rect x="188" y="128" width="28" height="50" rx="6" fill="#2A1808"/>
      <rect x="191" y="132" width="22" height="42" rx="3" fill="#F8F0E8"/>
      <rect x="191" y="132" width="22" height="10" rx="3" fill="#5A2D8A"/>
      <text x="202" y="140" text-anchor="middle" fill="white" font-size="3.8" font-family="sans-serif" font-weight="bold">Play. Learn. Earn.</text>
      <polygon points="202,146 205,150 202,154 199,150" fill="#F5C518"/>
      <text x="202" y="161" text-anchor="middle" fill="#5A2D8A" font-size="5" font-family="sans-serif" font-weight="bold">Earn gems</text>
      <text x="202" y="167" text-anchor="middle" fill="#5A2D8A" font-size="5" font-family="sans-serif">by sharing!</text>
      <circle cx="198" cy="172" r="2" fill="#5A2D8A"/>
      <circle cx="202" cy="172" r="2" fill="#CCC"/>
      <circle cx="206" cy="172" r="2" fill="#CCC"/>
      <circle cx="108" cy="62" r="16" fill="#F5C518" opacity="0.9"/>
      <rect x="104" y="77" width="8" height="5" fill="#C8A820" rx="1"/>
      <line x1="108" y1="82" x2="108" y2="86" stroke="#C8A820" stroke-width="2"/>
      <line x1="86" y1="62" x2="82" y2="62" stroke="#F5C518" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="90" y1="45" x2="87" y2="42" stroke="#F5C518" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="108" y1="40" x2="108" y2="36" stroke="#F5C518" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="126" y1="45" x2="129" y2="42" stroke="#F5C518" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="130" y1="62" x2="134" y2="62" stroke="#F5C518" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`;
}

function sbOlioPanel5() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#EAF4E8"/>
      <rect width="280" height="28" fill="#3A6A2A"/>
      <rect y="182" width="280" height="28" fill="#3A6A2A"/>
      <rect x="15" y="35" width="50" height="55" fill="#C8D8B8" rx="3"/>
      <polygon points="15,35 40,20 65,35" fill="#B0C0A0"/>
      <rect x="25" y="50" width="12" height="20" fill="#8BB0D8" rx="1"/>
      <rect x="44" y="50" width="12" height="20" fill="#8BB0D8" rx="1"/>
      <rect x="215" y="38" width="50" height="52" fill="#C8D8B8" rx="3"/>
      <polygon points="215,38 240,23 265,38" fill="#B0C0A0"/>
      <rect x="224" y="52" width="12" height="18" fill="#8BB0D8" rx="1"/>
      <rect x="244" y="52" width="12" height="18" fill="#8BB0D8" rx="1"/>
      <rect x="50" y="125" width="46" height="42" rx="8" fill="#6D4C41"/>
      <circle cx="73" cy="109" r="18" fill="#E8C090"/>
      <path d="M65 106 Q68 103 71 106" stroke="#3C2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M75 106 Q78 103 81 106" stroke="#3C2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="67" cy="110" r="2" fill="#3C2A1A"/>
      <circle cx="79" cy="110" r="2" fill="#3C2A1A"/>
      <path d="M66 118 Q73 124 80 118" stroke="#3C2A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <line x1="96" y1="136" x2="128" y2="148" stroke="#6D4C41" stroke-width="9" stroke-linecap="round"/>
      <ellipse cx="140" cy="152" rx="15" ry="9" fill="#E0B850" stroke="#C8A030" stroke-width="1.5"/>
      <rect x="139" y="142" width="3" height="6" fill="#27AE60" rx="1"/>
      <line x1="184" y1="136" x2="152" y2="148" stroke="#5A4038" stroke-width="9" stroke-linecap="round"/>
      <rect x="184" y="125" width="46" height="42" rx="8" fill="#5A4038"/>
      <circle cx="207" cy="109" r="18" fill="#E8B878"/>
      <path d="M199 106 Q202 103 205 106" stroke="#3C2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M209 106 Q212 103 215 106" stroke="#3C2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="201" cy="110" r="2" fill="#3C2A1A"/>
      <circle cx="213" cy="110" r="2" fill="#3C2A1A"/>
      <path d="M200 118 Q207 124 214 118" stroke="#3C2A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <rect x="108" y="38" width="64" height="40" fill="white" rx="6" stroke="#5A2D8A" stroke-width="1.5"/>
      <rect x="108" y="38" width="64" height="14" fill="#5A2D8A" rx="6"/>
      <rect x="108" y="45" width="64" height="7" fill="#5A2D8A"/>
      <text x="140" y="50" text-anchor="middle" fill="white" font-size="6" font-family="sans-serif" font-weight="bold">MEALS RESCUED</text>
      <text x="140" y="70" text-anchor="middle" fill="#5A2D8A" font-size="20" font-family="sans-serif" font-weight="bold">3</text>
      <circle cx="140" cy="177" r="14" fill="#4A7A3A"/>
      <path d="M133 177 L139 183 L149 169" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
}

function renderStoryboard(section) {
    const title = section.title || 'The Story';
    const panels = section.storyboardId === 'healthbuddy' ? getHealthBuddyPanels()
                 : section.storyboardId === 'olio' ? getOlioPanels()
                 : getEcoParkPanels();
    return `
    <section class="project-detail-content storyboard-section">
        <div class="container">
            <h2 class="section-title">${title}</h2>
            <div class="storyboard-grid">
                ${panels.map(p => `
                    <div class="storyboard-panel">
                        <div class="storyboard-frame">
                            <span class="storyboard-num">${p.num}</span>
                            ${p.svg}
                        </div>
                        <p class="storyboard-label">${p.label}</p>
                        <p class="storyboard-caption">${p.caption}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
}

function sbPanel1() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="115" fill="#CAD9E8"/>
      <rect y="115" width="280" height="95" fill="#C2B6A8"/>
      <rect x="126" y="148" width="28" height="9" rx="3" fill="#D8CEBC"/>
      <rect x="0" y="25" width="52" height="90" fill="#9A8A78"/>
      <rect x="8" y="14" width="38" height="101" fill="#B2A090"/>
      <rect x="14" y="22" width="8" height="8" fill="#CAD9E8" opacity="0.55"/>
      <rect x="28" y="22" width="8" height="8" fill="#CAD9E8" opacity="0.55"/>
      <rect x="14" y="36" width="8" height="8" fill="#CAD9E8" opacity="0.55"/>
      <rect x="28" y="36" width="8" height="8" fill="#CAD9E8" opacity="0.55"/>
      <rect x="228" y="22" width="52" height="93" fill="#9A8A78"/>
      <rect x="234" y="10" width="40" height="105" fill="#B2A090"/>
      <rect x="240" y="20" width="8" height="8" fill="#CAD9E8" opacity="0.55"/>
      <rect x="254" y="20" width="8" height="8" fill="#CAD9E8" opacity="0.55"/>
      <rect x="240" y="34" width="8" height="8" fill="#CAD9E8" opacity="0.55"/>
      <rect x="254" y="34" width="8" height="8" fill="#CAD9E8" opacity="0.55"/>
      <rect x="78" y="120" width="124" height="62" rx="12" fill="#4A3828"/>
      <rect x="94" y="105" width="92" height="34" rx="10" fill="#5E4A38"/>
      <rect x="100" y="108" width="80" height="28" rx="5" fill="#A4C4DA" opacity="0.85"/>
      <circle cx="140" cy="121" r="13" fill="#E8C090"/>
      <circle cx="135" cy="118" r="2" fill="#3C2A1A"/>
      <circle cx="145" cy="118" r="2" fill="#3C2A1A"/>
      <path d="M134 126 Q140 130 146 126" stroke="#3C2A1A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <circle cx="100" cy="182" r="16" fill="#2A1808"/>
      <circle cx="100" cy="182" r="8" fill="#6A6460"/>
      <circle cx="180" cy="182" r="16" fill="#2A1808"/>
      <circle cx="180" cy="182" r="8" fill="#6A6460"/>
      <circle cx="185" cy="84" r="3.5" fill="white" opacity="0.9"/>
      <circle cx="198" cy="73" r="5.5" fill="white" opacity="0.92"/>
      <rect x="200" y="22" width="66" height="48" rx="12" fill="white" opacity="0.95"/>
      <circle cx="215" cy="45" r="13" fill="none" stroke="#5C4A38" stroke-width="2"/>
      <line x1="215" y1="45" x2="215" y2="35" stroke="#5C4A38" stroke-width="2" stroke-linecap="round"/>
      <line x1="215" y1="45" x2="223" y2="45" stroke="#5C4A38" stroke-width="2" stroke-linecap="round"/>
      <rect x="234" y="30" width="22" height="22" rx="3" fill="none" stroke="#5C4A38" stroke-width="1.8"/>
      <line x1="234" y1="37" x2="256" y2="37" stroke="#5C4A38" stroke-width="1.5"/>
      <line x1="240" y1="27" x2="240" y2="32" stroke="#5C4A38" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="250" y1="27" x2="250" y2="32" stroke="#5C4A38" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`;
}

function sbPanel2() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#D4CEC6"/>
      <rect y="170" width="280" height="40" fill="#C4BAB0"/>
      <rect x="119" y="118" width="42" height="52" rx="8" fill="#5C4A38"/>
      <circle cx="140" cy="102" r="20" fill="#E8C090"/>
      <ellipse cx="133" cy="99" rx="2.5" ry="2" fill="#3C2A1A"/>
      <ellipse cx="147" cy="99" rx="2.5" ry="2" fill="#3C2A1A"/>
      <path d="M129 93 Q133 89 137 93" stroke="#3C2A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M143 93 Q147 89 151 93" stroke="#3C2A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M131 110 Q140 105 149 110" stroke="#3C2A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <line x1="119" y1="130" x2="88" y2="117" stroke="#5C4A38" stroke-width="8" stroke-linecap="round"/>
      <line x1="161" y1="130" x2="192" y2="117" stroke="#5C4A38" stroke-width="8" stroke-linecap="round"/>
      <line x1="128" y1="170" x2="122" y2="198" stroke="#5C4A38" stroke-width="7" stroke-linecap="round"/>
      <line x1="152" y1="170" x2="158" y2="198" stroke="#5C4A38" stroke-width="7" stroke-linecap="round"/>
      <g transform="rotate(-10,54,94)">
        <rect x="14" y="66" width="80" height="56" rx="5" fill="white" stroke="#C8C0B8" stroke-width="1.5"/>
        <rect x="14" y="66" width="80" height="18" rx="5" fill="#1A4FA0"/>
        <text x="54" y="79" text-anchor="middle" fill="white" font-size="8.5" font-family="sans-serif" font-weight="bold">PAY BY APP</text>
        <text x="54" y="95" text-anchor="middle" fill="#555" font-size="7.5" font-family="sans-serif">Scan QR code</text>
        <text x="54" y="107" text-anchor="middle" fill="#1A4FA0" font-size="8" font-family="sans-serif" font-weight="bold">JustPark™</text>
      </g>
      <g transform="rotate(8,226,88)">
        <rect x="186" y="58" width="80" height="56" rx="5" fill="white" stroke="#C8C0B8" stroke-width="1.5"/>
        <rect x="186" y="58" width="80" height="18" rx="5" fill="#D45A18"/>
        <text x="226" y="71" text-anchor="middle" fill="white" font-size="8.5" font-family="sans-serif" font-weight="bold">PARKING TARIFFS</text>
        <text x="226" y="88" text-anchor="middle" fill="#444" font-size="7.5" font-family="sans-serif">1 hr — £2.50</text>
        <text x="226" y="100" text-anchor="middle" fill="#444" font-size="7.5" font-family="sans-serif">2 hr — £4.80</text>
        <text x="226" y="109" text-anchor="middle" fill="#888" font-size="6.5" font-family="sans-serif">*conditions apply</text>
      </g>
      <g transform="rotate(-5,80,162)">
        <rect x="40" y="138" width="80" height="46" rx="5" fill="white" stroke="#C8C0B8" stroke-width="1.5"/>
        <rect x="40" y="138" width="80" height="16" rx="5" fill="#2A8A3C"/>
        <text x="80" y="150" text-anchor="middle" fill="white" font-size="8.5" font-family="sans-serif" font-weight="bold">COIN · CARD · APP</text>
        <text x="80" y="165" text-anchor="middle" fill="#444" font-size="7.5" font-family="sans-serif">Call 0330 400 2376</text>
        <text x="80" y="177" text-anchor="middle" fill="#666" font-size="7" font-family="sans-serif">or use location code</text>
      </g>
      <text x="90" y="76" fill="#C0392B" font-size="28" font-family="sans-serif" font-weight="900" opacity="0.9">?</text>
      <text x="162" y="86" fill="#C0392B" font-size="22" font-family="sans-serif" font-weight="900" opacity="0.8">?</text>
      <text x="76" y="126" fill="#C0392B" font-size="16" font-family="sans-serif" font-weight="900" opacity="0.7">?</text>
    </svg>`;
}

function sbPanel3() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#B8B2AC"/>
      <circle cx="140" cy="112" r="82" fill="#C8C0B8" stroke="#A8A09A" stroke-width="1"/>
      <circle cx="140" cy="112" r="46" fill="#B8B2AC"/>
      <circle cx="140" cy="112" r="40" fill="#D0C8BE"/>
      <circle cx="140" cy="112" r="64" fill="none" stroke="#D8D0C4" stroke-width="4" stroke-dasharray="14 9"/>
      <path d="M140 48 A64 64 0 1 1 80 148" fill="none" stroke="#E05A20" stroke-width="3.5" stroke-dasharray="12 7" opacity="0.85"/>
      <polygon points="74,138 80,152 92,142" fill="#E05A20" opacity="0.85"/>
      <g transform="translate(140,48)">
        <rect x="-20" y="-28" width="40" height="58" rx="7" fill="#4A3828"/>
        <rect x="-16" y="-22" width="32" height="15" rx="3" fill="#A4C4DA" opacity="0.7"/>
        <rect x="-16" y="12" width="32" height="15" rx="3" fill="#A4C4DA" opacity="0.45"/>
        <rect x="-22" y="-20" width="8" height="13" rx="2" fill="#2A1808"/>
        <rect x="14" y="-20" width="8" height="13" rx="2" fill="#2A1808"/>
        <rect x="-22" y="12" width="8" height="13" rx="2" fill="#2A1808"/>
        <rect x="14" y="12" width="8" height="13" rx="2" fill="#2A1808"/>
      </g>
      <circle cx="140" cy="82" r="6" fill="#D0C8BC" opacity="0.55"/>
      <circle cx="132" cy="74" r="5" fill="#D0C8BC" opacity="0.4"/>
      <circle cx="126" cy="67" r="4" fill="#D0C8BC" opacity="0.28"/>
      <circle cx="242" cy="38" r="26" fill="white" opacity="0.92" stroke="#C0B8B0" stroke-width="1.5"/>
      <circle cx="242" cy="38" r="20" fill="none" stroke="#5C4A38" stroke-width="2"/>
      <line x1="242" y1="38" x2="242" y2="22" stroke="#5C4A38" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="242" y1="38" x2="254" y2="44" stroke="#E05A20" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="170" y1="36" x2="176" y2="24" stroke="#C0392B" stroke-width="2.2" stroke-linecap="round" opacity="0.8"/>
      <line x1="181" y1="32" x2="188" y2="20" stroke="#C0392B" stroke-width="2.2" stroke-linecap="round" opacity="0.8"/>
      <line x1="191" y1="30" x2="197" y2="18" stroke="#C0392B" stroke-width="2.2" stroke-linecap="round" opacity="0.7"/>
      <text x="140" y="107" text-anchor="middle" fill="#7A6A5A" font-size="9" font-family="sans-serif">10+ min</text>
      <text x="140" y="121" text-anchor="middle" fill="#7A6A5A" font-size="9" font-family="sans-serif">circling</text>
    </svg>`;
}

function sbPanel4() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#F2E8D2"/>
      <rect y="162" width="280" height="48" fill="#DDD0B8"/>
      <rect x="15" y="147" width="250" height="60" rx="14" fill="#C8B898"/>
      <rect x="24" y="135" width="60" height="34" rx="10" fill="#D8C8A8"/>
      <rect x="196" y="135" width="60" height="34" rx="10" fill="#D8C8A8"/>
      <rect x="115" y="130" width="50" height="40" rx="10" fill="#5C4A38"/>
      <circle cx="140" cy="113" r="20" fill="#E8C090"/>
      <circle cx="133" cy="110" r="2.5" fill="#3C2A1A"/>
      <circle cx="147" cy="110" r="2.5" fill="#3C2A1A"/>
      <path d="M131 120 Q140 126 149 120" stroke="#3C2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
      <line x1="115" y1="142" x2="84" y2="154" stroke="#5C4A38" stroke-width="9" stroke-linecap="round"/>
      <line x1="165" y1="142" x2="196" y2="154" stroke="#5C4A38" stroke-width="9" stroke-linecap="round"/>
      <rect x="189" y="138" width="26" height="44" rx="6" fill="#2A1808"/>
      <rect x="192" y="142" width="20" height="35" rx="4" fill="#4A7A3A"/>
      <rect x="192" y="142" width="20" height="9" rx="3" fill="#3A6A2A"/>
      <text x="202" y="150" text-anchor="middle" fill="white" font-size="4.5" font-family="sans-serif" font-weight="bold">EcoPark</text>
      <rect x="193" y="153" width="18" height="5" rx="2" fill="#F2E8D2" opacity="0.6"/>
      <rect x="193" y="160" width="18" height="7" rx="2" fill="white" opacity="0.5"/>
      <rect x="193" y="169" width="18" height="7" rx="2" fill="white" opacity="0.35"/>
      <circle cx="84" cy="150" r="16" fill="#4A7A3A"/>
      <path d="M76 150 L82 156 L93 142" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="48" y="172" width="76" height="26" rx="7" fill="white" opacity="0.88"/>
      <text x="86" y="183" text-anchor="middle" fill="#4A7A3A" font-size="7.5" font-family="sans-serif" font-weight="bold">£2.50 · 0.80kg CO₂</text>
      <text x="86" y="193" text-anchor="middle" fill="#7A9A60" font-size="6.5" font-family="sans-serif">Booked ✓</text>
    </svg>`;
}

function sbPanel5() {
    return `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" class="sb-svg">
      <rect width="280" height="210" fill="#E8F4EC"/>
      <rect width="280" height="32" fill="#3A6A2A"/>
      <rect y="178" width="280" height="32" fill="#3A6A2A"/>
      <circle cx="70" cy="18" r="4" fill="#2A5A1A"/>
      <line x1="70" y1="22" x2="70" y2="38" stroke="#2A5A1A" stroke-width="3"/>
      <circle cx="140" cy="18" r="4" fill="#2A5A1A"/>
      <line x1="140" y1="22" x2="140" y2="38" stroke="#2A5A1A" stroke-width="3"/>
      <circle cx="210" cy="18" r="4" fill="#2A5A1A"/>
      <line x1="210" y1="22" x2="210" y2="38" stroke="#2A5A1A" stroke-width="3"/>
      <rect x="12" y="40" width="100" height="100" rx="6" fill="#B8D8F0"/>
      <rect x="18" y="80" width="22" height="60" fill="#8090A8" opacity="0.6"/>
      <rect x="44" y="65" width="18" height="75" fill="#9AA0B8" opacity="0.55"/>
      <rect x="66" y="75" width="28" height="65" fill="#8090A8" opacity="0.5"/>
      <line x1="12" y1="70" x2="112" y2="70" stroke="white" stroke-width="1.5" opacity="0.3"/>
      <line x1="12" y1="95" x2="112" y2="95" stroke="white" stroke-width="1" opacity="0.2"/>
      <rect x="168" y="40" width="100" height="100" rx="6" fill="#C0DDF5"/>
      <rect x="175" y="72" width="20" height="68" fill="#8090A8" opacity="0.5"/>
      <rect x="200" y="60" width="26" height="80" fill="#9AA0B8" opacity="0.55"/>
      <rect x="230" y="80" width="16" height="60" fill="#8090A8" opacity="0.5"/>
      <rect x="20" y="156" width="240" height="22" rx="7" fill="#3A6A2A" opacity="0.65"/>
      <rect x="116" y="128" width="48" height="38" rx="9" fill="#5C4A38"/>
      <circle cx="140" cy="110" r="20" fill="#E8C090"/>
      <path d="M131 108 Q134 105 137 108" stroke="#3C2A1A" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M143 108 Q146 105 149 108" stroke="#3C2A1A" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M130 119 Q140 127 150 119" stroke="#3C2A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
      <line x1="116" y1="140" x2="88" y2="152" stroke="#5C4A38" stroke-width="9" stroke-linecap="round"/>
      <line x1="164" y1="140" x2="192" y2="152" stroke="#5C4A38" stroke-width="9" stroke-linecap="round"/>
      <rect x="185" y="130" width="24" height="40" rx="5" fill="#2A1808"/>
      <rect x="187" y="133" width="20" height="33" rx="3" fill="#F2E8D2"/>
      <path d="M194 140 Q197 133 204 137 Q207 144 201 149 Q197 149 194 140Z" fill="#4A7A3A"/>
      <line x1="199" y1="149" x2="199" y2="155" stroke="#4A7A3A" stroke-width="1.5"/>
      <text x="197" y="162" text-anchor="middle" fill="#4A7A3A" font-size="5.5" font-family="sans-serif" font-weight="bold">12kg</text>
      <text x="197" y="169" text-anchor="middle" fill="#7A8A70" font-size="4.5" font-family="sans-serif">CO₂ saved</text>
      <path d="M38 50 Q42 42 50 46 Q52 54 44 58 Q40 57 38 50Z" fill="#4A7A3A" opacity="0.5"/>
      <path d="M234 54 Q238 46 246 50 Q248 58 240 62 Q236 61 234 54Z" fill="#4A7A3A" opacity="0.4"/>
    </svg>`;
}

function renderImageTextSection(section) {
    const { layout = 'stacked', title, description, images = [], proposals } = section;

    if (layout === 'side-by-side') {
        return `
            <div class="image-text-section">
                <div class="image-text-container">
                    <div class="image-text-image-wrapper">
                        <img src="${images[0].url}" alt="${images[0].alt || title || ''}" class="image-text-image">
                    </div>
                    <div class="image-text-content">
                        ${title ? `<h3>${title}</h3>` : ''}
                        ${proposals ? `
                            <ul class="tldr-proposals-list">
                                ${proposals.map(p => `<li><strong>${p.title}</strong> ${p.description || ''}</li>`).join('')}
                            </ul>
                        ` : ''}
                        ${description ? `<p>${description}</p>` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    // stacked layout
    return `
        <div class="image-text-section">
            ${title ? `<h3>${title}</h3>` : ''}
            <div class="image-text-image-wrapper-2">
                ${images.map(img => `<img src="${img.url}" alt="${img.alt || ''}" class="image-text-image">`).join('')}
            </div>
            ${description ? `<div class="image-text-content"><p>${description}</p></div>` : ''}
        </div>
    `;
}

function renderLearningPoints(section) {
    const { title, proposals } = section;
    return `
        <div class="learning-points">
            <h2>${title}</h2>
            ${proposals ? `
                <ul class="proposals-list">
                    ${proposals.map(p => `<li>${p.description}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `;
}

function renderTldr(tldr) {
    if (!tldr) return '';
    return `
        <div class="tldr-section">
            <h2 class="tldr-title">TL;DR</h2>
            <div class="tldr-steps">
                <div class="tldr-step">
                    <div class="tldr-step-number">1</div>
                    <div class="tldr-step-content">
                        <h3>Project Overview</h3>
                        <p>${tldr.overview}</p>
                    </div>
                </div>
                ${tldr.proposals ? `
                <div class="tldr-step">
                    <div class="tldr-step-number">2</div>
                    <div class="tldr-step-content">
                        <h3>Key Proposals</h3>
                        <ol class="tldr-proposals-list">
                            ${tldr.proposals.map(p => `<li><strong>${p.title}</strong> ${p.description}</li>`).join('')}
                        </ol>
                    </div>
                </div>
                ` : ''}
                <div class="tldr-step">
                    <div class="tldr-step-number">${tldr.proposals ? '3' : '2'}</div>
                    <div class="tldr-step-content">
                        <h3>Outcome</h3>
                        <p>${tldr.outcome}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderDetailHeader(item, backPage, categoryClass) {
    const backLabel = backPage === 'portfolio' ? 'Portfolio' : 'Observations';
    return `
        <section class="project-detail-header">
            <div class="container">
                <button class="back-btn" onclick="navigateToPage('${backPage}')">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    <span>Back to ${backLabel}</span>
                </button>
                <div class="project-detail-title">
                    <span class="${categoryClass}">${item.category}</span>
                    <h1>${item.title}</h1>
                    ${item.description || item.excerpt ? `<p class="project-description">${item.description || item.excerpt}</p>` : ''}
                </div>
            </div>
        </section>
    `;
}

function renderProjectNavigation(currentId) {
    const currentIndex = projects.findIndex(p => p.id === currentId);
    const prev = projects[currentIndex - 1];
    const next = projects[currentIndex + 1];
    if (!prev && !next) return '';

    return `
        <section class="item-nav">
            <div class="container">
                <div class="item-nav-grid">
                    ${prev ? `
                        <div class="item-nav-card item-nav-prev" onclick="showProjectDetail(${prev.id})">
                            <span class="item-nav-label">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                                </svg>
                                Previous
                            </span>
                            <span class="item-nav-title">${prev.title}</span>
                        </div>
                    ` : '<div></div>'}
                    ${next ? `
                        <div class="item-nav-card item-nav-next" onclick="showProjectDetail(${next.id})">
                            <span class="item-nav-label">
                                Next
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </span>
                            <span class="item-nav-title">${next.title}</span>
                        </div>
                    ` : '<div></div>'}
                </div>
            </div>
        </section>
    `;
}

function renderObservationNavigation(currentId) {
    const currentIndex = observations.findIndex(o => o.id === currentId);
    const prev = observations[currentIndex - 1];
    const next = observations[currentIndex + 1];
    if (!prev && !next) return '';

    return `
        <section class="item-nav">
            <div class="container">
                <div class="item-nav-grid">
                    ${prev ? `
                        <div class="item-nav-card item-nav-prev" onclick="showObservationDetail(${prev.id})">
                            <span class="item-nav-label">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                                </svg>
                                Previous
                            </span>
                            <span class="item-nav-title">${prev.title}</span>
                        </div>
                    ` : '<div></div>'}
                    ${next ? `
                        <div class="item-nav-card item-nav-next" onclick="showObservationDetail(${next.id})">
                            <span class="item-nav-label">
                                Next
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </span>
                            <span class="item-nav-title">${next.title}</span>
                        </div>
                    ` : '<div></div>'}
                </div>
            </div>
        </section>
    `;
}

function renderContactSection() {
    return `
        <section class="contact">
            <div class="container text-center">
                <h2>Let's Work Together</h2>
                <p class="contact-text">
                    I'm always open to discussing new projects, creative ideas, or
                    opportunities to be part of your vision.
                </p>
                <div class="contact-links">
                    <a href="mailto:nixonooishenrong@gmail.com" class="contact-link">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <span>Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/nixonooi/" class="contact-link">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    `;
}


//
// Project detail page (generic)
//
function showProjectDetail(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    const detailContent = document.getElementById('projectDetailContent');
    if (!detailContent) return;

    detailContent.innerHTML = `
        ${renderDetailHeader(project, 'portfolio', 'project-category-p')}

        <section class="project-detail-image">
            <div class="container">
                <img src="${project.image}" alt="${project.title}" class="detail-image">
            </div>
        </section>

        <section class="project-detail-content">
            <div class="container">
                <div class="detail-grid">
                    <div class="detail-sidebar">
                        <div class="detail-info">
                            <h4>Role</h4>
                            <p>${project.role}</p>
                        </div>
                        <div class="detail-info">
                            <h4>Timeline</h4>
                            <p>${project.timeline}</p>
                        </div>
                        <div class="detail-info">
                            <h4>Tag</h4>
                            <div class="project-tags">
                                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="detail-main">
                        ${renderSections(project.sections.filter(s => s.type === 'storyboard'))}
                        ${renderTldr(project.tldr)}
                        ${project.overview ? `
                        <div class="detail-section">
                            <h3>Brief</h3>
                            <p>${project.overview}</p>
                        </div>
                        ` : ''}
                        ${renderSections(project.sections.filter(s => s.type !== 'storyboard'))}
                    </div>
                </div>
            </div>
        </section>

        ${renderProjectNavigation(project.id)}
        ${renderContactSection()}
    `;

    setTimeout(() => {
        initializeCarousels();
        initializeLightbox(project.sections || []);
        initializeTabs();
        initializeAccordions();
    }, 0);

    navigateToPage('projectDetail');
}


//
// Observation detail page (generic)
//
function showObservationDetail(id) {
    const observation = observations.find(o => o.id === id);
    if (!observation) return;

    const detailContent = document.getElementById('observationDetailContent');
    if (!detailContent) return;

    detailContent.innerHTML = `
        ${renderDetailHeader(observation, 'observations', 'project-category-o')}

        <section class="project-detail-image">
            <div class="container">
                <img src="${observation.image}" alt="${observation.title}" class="detail-image">
            </div>
        </section>

        <section class="project-detail-content">
            <div class="container">
                <div class="detail-grid">
                    <div class="detail-sidebar">
                        ${observation.date ? `
                        <div class="detail-info">
                            <h4>Published</h4>
                            <p>${observation.date}</p>
                        </div>
                        ` : ''}
                        ${observation.readTime ? `
                        <div class="detail-info">
                            <h4>Read Time</h4>
                            <p>${observation.readTime}</p>
                        </div>
                        ` : ''}
                        ${observation.tags && observation.tags.length > 0 ? `
                        <div class="detail-info">
                            <h4>Tags</h4>
                            <div class="project-tags">
                                ${observation.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                        ` : ''}
                    </div>

                    <div class="detail-main">
                        ${renderSections(observation.sections)}
                    </div>
                </div>
            </div>
        </section>

        ${renderObservationNavigation(observation.id)}
        ${renderContactSection()}
    `;

    setTimeout(() => {
        initializeCarousels();
        initializeLightbox(observation.sections || []);
        initializeTabs();
        initializeAccordions();
    }, 0);

    navigateToPage('observationDetail');
}


//
// Carousel initialization
//
function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const rationalePanel = carousel.querySelector('.carousel-rationale p');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            if (index >= slides.length) currentSlide = 0;
            if (index < 0) currentSlide = slides.length - 1;

            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');

            if (rationalePanel) {
                const rationale = slides[currentSlide].dataset.rationale;
                rationalePanel.textContent = rationale || '';
            }
        }

        function nextSlide() {
            currentSlide++;
            if (currentSlide >= slides.length) currentSlide = 0;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide--;
            if (currentSlide < 0) currentSlide = slides.length - 1;
            showSlide(currentSlide);
        }

        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
    });
}


//
// Lightbox initialization
//
function initializeLightbox(sections) {
    // Build a map of sectionIndex → images from gallery sections
    const galleryMap = {};
    sections.forEach((section, index) => {
        if (section.type === 'gallery' && section.images) {
            galleryMap[index] = section.images;
        }
    });

    let lightbox = document.getElementById('imageLightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'imageLightbox';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <button class="lightbox-prev">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>
                <button class="lightbox-next">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </button>
                <div class="lightbox-image-container">
                    <img src="" alt="" class="lightbox-image">
                </div>
                <div class="lightbox-caption"></div>
                <div class="lightbox-counter"></div>
            </div>
        `;
        document.body.appendChild(lightbox);
    }

    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxCounter = lightbox.querySelector('.lightbox-counter');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentGalleryIndex = 0;
    let currentImageIndex = 0;
    let currentGalleryImages = [];

    function showLightboxImage(galleryIndex, imageIndex) {
        if (!galleryMap[galleryIndex]) return;

        currentGalleryIndex = galleryIndex;
        currentImageIndex = imageIndex;
        currentGalleryImages = galleryMap[galleryIndex];

        const image = currentGalleryImages[imageIndex];
        lightboxImg.src = image.url;
        lightboxImg.alt = image.caption || '';
        lightboxCaption.textContent = image.caption || '';
        lightboxCounter.textContent = `${imageIndex + 1} / ${currentGalleryImages.length}`;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showNextImage() {
        currentImageIndex++;
        if (currentImageIndex >= currentGalleryImages.length) {
            currentImageIndex = 0;
        }
        showLightboxImage(currentGalleryIndex, currentImageIndex);
    }

    function showPrevImage() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = currentGalleryImages.length - 1;
        }
        showLightboxImage(currentGalleryIndex, currentImageIndex);
    }

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    const keyHandler = (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
    };

    if (lightbox._keyHandler) {
        document.removeEventListener('keydown', lightbox._keyHandler);
    }
    lightbox._keyHandler = keyHandler;
    document.addEventListener('keydown', keyHandler);

    // Attach click to all gallery images and wrappers in the page
    document.querySelectorAll('.gallery-image, .carousel-image').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            showLightboxImage(parseInt(img.dataset.gallery), parseInt(img.dataset.index));
        });
    });

    document.querySelectorAll('.gallery-image-wrapper[data-gallery]').forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            showLightboxImage(parseInt(wrapper.dataset.gallery), parseInt(wrapper.dataset.index));
        });
    });
}


//
// Observations listing page
//
function renderObservations() {
    const observationsGrid = document.getElementById('observationsGrid');
    if (!observationsGrid) return;

    observationsGrid.innerHTML = observations.map(observation => `
        <article class="observation-card" data-observation-id="${observation.id}">
            <div class="observation-meta">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>${observation.date}</span>
                <span>•</span>
                <span>${observation.readTime}</span>
            </div>

            <div>
                <span class="observation-category">${observation.category}</span>
            </div>

            <h3>${observation.title}</h3>
            <p class="observation-excerpt">${observation.excerpt}</p>

            <div class="observation-tags">
                ${observation.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </article>
    `).join('');

    attachObservationCardHandlers();
}

function attachObservationCardHandlers() {
    document.querySelectorAll('.observation-card[data-observation-id]').forEach(card => {
        card.addEventListener('click', () => {
            showObservationDetail(parseInt(card.dataset.observationId));
        });
    });
}


//
// Scroll to Top
//
function setupScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    if (!scrollButton) return;

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const halfwayPoint = (scrollHeight - clientHeight) / 2;

        if (scrollTop > halfwayPoint) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


//
// Shared section renderers
//
function renderBriefSection(briefData) {
    if (!briefData) return '';

    const { title = 'Brief', paragraphs } = briefData;

    return `
        <div class="detail-section">
            <h3>${title}</h3>
            ${paragraphs.map(para => {
                if (typeof para === 'string') {
                    return `<p>${para}</p>`;
                } else {
                    const className = para.indent ? ' class="critique-brief-indent"' : '';
                    return `<p${className}>${para.text}</p>`;
                }
            }).join('\n            ')}
        </div>
    `;
}

function renderTabsSection(tabsData) {
    if (!tabsData) return '';

    const { title, tabs } = tabsData;
    const tabsId = `tabs-${Math.random().toString(36).substr(2, 9)}`;

    return `
        <div class="detail-section">
            <h3>${title}</h3>
            <div class="critique-tabs" data-tabs-id="${tabsId}">
                <div class="critique-tabs-nav">
                    ${tabs.map((tab, index) => `
                        <button class="critique-tab-btn ${index === 0 ? 'active' : ''}" data-tab="${index}">
                            ${tab.label}
                        </button>
                    `).join('')}
                </div>
                <div class="critique-tabs-content">
                    ${tabs.map((tab, index) => `
                        <div class="critique-tab-panel ${index === 0 ? 'active' : ''}" data-panel="${index}">
                            ${tab.content || ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderAccordionSection(accordionData) {
    if (!accordionData) return '';

    const { title, items } = accordionData;
    const accordionId = `accordion-${Math.random().toString(36).substr(2, 9)}`;

    return `
        <div class="detail-section">
            <h2>${title}</h2>
            <div class="critique-accordion" data-accordion-id="${accordionId}">
                ${items.map((item, index) => `
                    <div class="critique-accordion-item ${index === 0 ? 'active' : ''}">
                        <button class="critique-accordion-header" data-index="${index}">
                            <svg class="critique-accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                            <span>${item.title}</span>
                        </button>
                        <div class="critique-accordion-content">
                            <p>${item.content}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderVideoSection(videoData) {
    if (!videoData) return '';

    const { title, description, videoId, url } = videoData;

    let embedId = videoId;
    if (url && !videoId) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        embedId = (match && match[2].length === 11) ? match[2] : null;
    }

    if (!embedId) return '';

    return `
        <div class="detail-section">
            ${title ? `<h2>${title}</h2>` : ''}
            ${description ? `<p>${description}</p>` : ''}
            <div class="video-container">
                <iframe
                    src="https://www.youtube.com/embed/${embedId}"
                    title="${title || 'YouTube video'}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    `;
}


//
// Interactive element initialization
//
function initializeTabs() {
    const tabbedContainers = document.querySelectorAll('.critique-tabs');

    tabbedContainers.forEach(container => {
        const buttons = container.querySelectorAll('.critique-tab-btn');
        const panels = container.querySelectorAll('.critique-tab-panel');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const tabIndex = button.dataset.tab;

                buttons.forEach(btn => btn.classList.remove('active'));
                panels.forEach(panel => panel.classList.remove('active'));

                button.classList.add('active');
                const activePanel = container.querySelector(`[data-panel="${tabIndex}"]`);
                if (activePanel) {
                    activePanel.classList.add('active');
                }
            });
        });
    });
}

function initializeAccordions() {
    const accordions = document.querySelectorAll('.critique-accordion');

    accordions.forEach(accordion => {
        const headers = accordion.querySelectorAll('.critique-accordion-header');

        headers.forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const isActive = item.classList.contains('active');

                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        });
    });
}

function initializeCritiqueTabs() {
    const tabButtons = document.querySelectorAll('.critique-tab-btn');
    const tabPanels = document.querySelectorAll('.critique-tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabIndex = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            button.classList.add('active');
            const activePanel = document.querySelector(`.critique-tab-panel[data-tab="${tabIndex}"]`);
            if (activePanel) {
                activePanel.classList.add('active');
            }
        });
    });
}

function initializeCritiqueAccordion() {
    const accordionHeaders = document.querySelectorAll('.critique-accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}



// Featured work on home page (shows first 2 projects)
function renderFeaturedWork() {
    const grid = document.getElementById('featuredWorkGrid');
    if (!grid) return;

    const featured = projects.slice(0, 2);

    grid.innerHTML = featured.map(project => `
        <div class="featured-card" data-project-id="${project.id}">
            <div class="featured-card-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <span class="featured-category-badge">${project.category}</span>
            </div>
            <div class="featured-card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="featured-card-link">
                    View case study
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </span>
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('.featured-card[data-project-id]').forEach(card => {
        card.addEventListener('click', () => {
            showProjectDetail(parseInt(card.dataset.projectId));
        });
    });
}

function initPhraseReveal() {
    const phrases = Array.from(document.querySelectorAll('.hero-bounce-phrase'));
    if (!phrases.length) return;

    const INITIAL_DELAY = 800;
    const STEP_DELAY = 600;

    phrases.forEach((phrase, i) => {
        const isLast = i === phrases.length - 1;
        setTimeout(() => {
            if (i > 0) {
                phrases[i - 1].classList.remove('active');
                phrases[i - 1].classList.add('done');
            }
            phrase.classList.add('active');
            if (isLast) {
                setTimeout(() => {
                    phrase.classList.remove('active');
                    phrase.classList.add('done');
                }, STEP_DELAY);
            }
        }, INITIAL_DELAY + i * STEP_DELAY);
    });
}

function initHeroRotator() {
    const images = Array.from(document.querySelectorAll('.hero-visual-img'));
    if (!images.length) return;
    let current = 0;
    setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }, 4000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    renderProjects();
    renderObservations();
    renderFeaturedWork();
    setupScrollToTop();
    initPhraseReveal();
    initHeroRotator();
});
