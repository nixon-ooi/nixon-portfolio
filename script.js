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
    const imagesHtml = gallery.images.map((img, i) => `
        <div class="carousel-slide ${i === 0 ? 'active' : ''}" data-slide="${i}">
            <img src="${img.url}" alt="${img.caption || ''}" class="carousel-image" data-gallery="${galleryIndex}" data-index="${i}">
            ${img.caption ? `<div class="carousel-caption">${img.caption}</div>` : ''}
        </div>
    `).join('');

    const dotsHtml = gallery.images.map((_, i) => `
        <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></button>
    `).join('');

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
        default:                 return '';
    }
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
                        ${renderTldr(project.tldr)}
                        ${project.overview ? `
                        <div class="detail-section">
                            <h3>Brief</h3>
                            <p>${project.overview}</p>
                        </div>
                        ` : ''}
                        ${renderSections(project.sections)}
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
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            if (index >= slides.length) currentSlide = 0;
            if (index < 0) currentSlide = slides.length - 1;

            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
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


// Typewriter effect for hero section
function initTypewriter() {
    const el = document.querySelector('.typewriter-text');
    if (!el) return;

    const phrases = [
        'UX Research.',
        'Service Design.',
        'Journey Mapping.',
        'Design Thinking.',
        'Prototyping.',
        'Information Architecture.',
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const TYPE_SPEED   = 80;
    const DELETE_SPEED = 45;
    const PAUSE_AFTER_TYPE   = 1800;
    const PAUSE_AFTER_DELETE = 400;

    function tick() {
        const current = phrases[phraseIndex];

        if (isDeleting) {
            el.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        // Finished typing — pause then start deleting
        if (!isDeleting && charIndex === current.length) {
            setTimeout(() => { isDeleting = true; tick(); }, PAUSE_AFTER_TYPE);
            return;
        }

        // Finished deleting — move to next phrase
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(tick, PAUSE_AFTER_DELETE);
            return;
        }

        setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
    }

    // Delay start to let the hero fade-in animation settle first
    setTimeout(tick, 1800);
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    renderProjects();
    renderObservations();
    renderFeaturedWork();
    initTypewriter();
    setupScrollToTop();
});
