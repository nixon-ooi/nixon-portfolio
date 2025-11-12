// ============================================================
// DATA IS NOW LOADED FROM SEPARATE FILES IN /data/ FOLDER
// Edit the following files to update content:
// - /data/projects.js (Portfolio projects)
// - /data/critiques.js (Critiques & Redesign)
// - /data/observations.js (Design Observations)
// ============================================================

// Data variables will be loaded from external files via script tags in index.html
// - projects (from /data/projects.js)
// - critiques (from /data/critiques.js)
// - observations (from /data/observations.js)

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
        // 1. Ensure the projects are rendered FIRST.
        //    (The renderProjects function already calls attachProjectCardHandlers() at its end)
        renderProjects(); 

        // 2. Remove the confusing setTimeout/attachProjectCardHandlers call 
        //    that was here, as it's now handled by renderProjects().
    }

    // Re-attach project card click handlers when navigating to portfolio
    if (pageId === 'portfolio') {
        setTimeout(() => {
            attachProjectCardHandlers();
        }, 0);
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

    // Add click listeners
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.page;
            if (pageId) {
                navigateToPage(pageId);
            }
        });
    });

    // Mobile menu toggle
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }
}

// Start of portfolio page
// Render projects (now using list layout)
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    // Create alternating list cards - image alternates left/right
    projectsGrid.innerHTML = projects.map((project, index) => {
        const isEven = index % 2 === 1; // Even index (0-based) = odd visual position
        
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

    // Add click handlers to project cards
    attachProjectCardHandlers();
}

// Attach click handlers to project cards (separated for reuse)
function attachProjectCardHandlers() {
    document.querySelectorAll('.portfolio-list-card[data-project-id]').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId);
            showProjectDetail(projectId);
        });
    });
}

// Gallery rendering functions
function createCarousel(gallery, galleryIndex) {
    const carouselId = `carousel-${galleryIndex}`;
    const imagesHtml = gallery.images.map((img, i) => `
        <div class="carousel-slide ${i === 0 ? 'active' : ''}" data-slide="${i}">
            <img src="${img.url}" alt="${img.caption}" class="carousel-image" data-gallery="${galleryIndex}" data-index="${i}">
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
    `;
}

function createColumnGallery(gallery, galleryIndex, columns) {
    const imagesHtml = gallery.images.map((img, i) => `
        <div class="gallery-image-wrapper">
            <img src="${img.url}" alt="${img.caption}" class="gallery-image" data-gallery="${galleryIndex}" data-index="${i}">
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
        <div class="gallery-image-wrapper">
            <img src="${img.url}" alt="${img.caption}" class="gallery-image" data-gallery="${galleryIndex}" data-index="${i}">
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
    switch(gallery.type) {
        case 'carousel':
            return createCarousel(gallery, galleryIndex);
        case 'two-column':
            return createColumnGallery(gallery, galleryIndex, 'two');
        case 'three-column':
            return createColumnGallery(gallery, galleryIndex, 'three');
        case 'grid-2x2':
            return createGridGallery(gallery, galleryIndex);
        default:
            return '';
    }
}

// Use this to manually insert galleries anywhere in your template
function getGallery(galleries, index) {
    if (!galleries || !galleries[index]) {
        return '';
    }
    return renderGallery(galleries[index], index);
}

// Start of detailed portfolio page
// Show project detail - NOW USES DATA FROM /data/projects.js
function showProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const detailContent = document.getElementById('projectDetailContent');
    if (!detailContent) return;

    // Build research list items
    const researchItems = project.research.map(item => `<li>${item}</li>`).join('');
    
    // Build results cards
    const resultsCards = project.results.map(result => `
        <div class="result-card">
            <h3>${result.metric}</h3>
            <p>${result.label}</p>
        </div>
    `).join('');
    
    // Build galleries by position
    const galleriesByPosition = {
        'after-overview': '',
        'after-challenge': '',
        'after-research': '',
        'after-solution': '',
        'before-results': ''
    };
    
    if (project.galleries && project.galleries.length > 0) {
        project.galleries.forEach((gallery, index) => {
            const position = gallery.position || 'after-overview';
            if (galleriesByPosition[position] !== undefined) {
                galleriesByPosition[position] += renderGallery(gallery, index);
            }
        });
    }

    detailContent.innerHTML = `
        <section class="project-detail-header">
            <div class="container">
                <button class="back-btn" onclick="navigateToPage('portfolio')">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    <span>Back to Portfolio</span>
                </button>
                <div class="project-detail-title">
                    <span class="project-category-p">${project.category}</span>
                    <h1>${project.title}</h1>
                    <p class="project-description">${project.description}</p>
                </div>
            </div>
        </section>

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
                            <h4>Team</h4>
                            <p>${project.team}</p>
                        </div>
                    </div>

                    <div class="detail-main">
                        <!-- TL;DR Section -->
                        ${project.tldr ? `
                        <div class="tldr-section">
                            <h2 class="tldr-title">TL;DR</h2>
                            
                            <div class="tldr-steps">
                                <!-- Step 1: Project Overview -->
                                <div class="tldr-step">
                                    <div class="tldr-step-number">1</div>
                                    <div class="tldr-step-content">
                                        <h3>Project Overview</h3>
                                        <p>${project.tldr.overview}</p>
                                    </div>
                                </div>
                                
                                <!-- Step 2: Key Proposals -->
                                <div class="tldr-step">
                                    <div class="tldr-step-number">2</div>
                                    <div class="tldr-step-content">
                                        <h3>Key Proposals</h3>
                                        ${project.tldr.proposals ? `
                                            <ol class="tldr-proposals-list">
                                                ${project.tldr.proposals.map(proposal => `
                                                    <li>
                                                        <strong>${proposal.title}</strong> ${proposal.description}
                                                    </li>
                                                `).join('')}
                                            </ol>
                                        ` : ''}
                                    </div>
                                </div>
                                
                                <!-- Step 3: Outcome -->
                                <div class="tldr-step">
                                    <div class="tldr-step-number">3</div>
                                    <div class="tldr-step-content">
                                        <h3>Outcome</h3>
                                        <p>${project.tldr.outcome}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ` : ''}

                        ${project.overview ? `
                        <div class="detail-section">
                            <h3>Brief</h3>
                            <p>${project.overview}</p>
                        </div>
                        ` : ''}

                        ${project.imageTextSection ? `
                        <div class="image-text-section">
                            <div class="image-text-container">
                                <div class="image-text-image-wrapper">
                                    <img src="${project.imageTextSection.image}" alt="${project.imageTextSection.title}" class="image-text-image">
                                </div>
                                <div class="image-text-content">
                                    <h3>${project.imageTextSection.title}</h3>
                                    ${project.imageTextSection.proposals ? `
                                    <ul class="tldr-proposals-list">
                                        ${project.imageTextSection.proposals.map(proposal => `
                                            <li>
                                                <strong>${proposal.title}</strong> ${proposal.description}
                                            </li>
                                        `).join('')}
                                    </ul>
                                     ` : ''}
                                </div>
                            </div>
                        </div>
                        ` : ''}

                        ${project.galleries ? getGallery(project.galleries, 0) : ''}

                        <!-- Problem Statement Section with indented paragraphs -->
                        ${project.brief ? renderBriefSection(project.brief) : ''}

                        ${project.galleries ? getGallery(project.galleries, 1) : ''}

                        ${project.galleries ? getGallery(project.galleries, 2) : ''}

                        ${project.tabsSection ? renderTabsSection(project.tabsSection) : ''}


                        <!-- Final Product Showcase -->
                        ${project.finalImages && project.finalImages.length > 0 ?`
                        <div class="tldr-final-product">
                            <div class="tldr-final-images">
                                <h2>Recommendations</h2>
                                <p>${project.recommendation}</p>
                                ${project.galleries ? getGallery(project.galleries, 3) : ''}
                            </div>
                        </div>
                        ` : ''}

                        ${project.galleries ? getGallery(project.galleries, 4) : ''}

                        <div class="detail-section">
                            <h2>${project.learningpoints.title}</h2>
                            ${project.learningpoints.proposals ? `
                            <ul class="proposals-list">
                                ${project.learningpoints.proposals.map(proposal => `
                                    <li>
                                        ${proposal.description}
                                    </li>
                                `).join('')}
                            </ul>
                                ` : ''}
                        </div>
                        


                        ${false ? `
                        <div class="detail-section">
                            <h2>The Challenge</h2>
                            <p>${project.challenge}</p>
                        </div>
                        ` : ''}

                        ${false ? `
                        <div class="detail-section">
                            <h2>Research & Discovery</h2>
                            <p>Key research activities and findings:</p>
                            <ul>
                                ${researchItems}
                            </ul>
                        </div>
                        ` : ''}

                        ${false ? `
                        <div class="detail-section">
                            <h2>Results</h2>
                            <div class="results-grid">
                                ${resultsCards}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Contact Section -->
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

    navigateToPage('projectDetail');
    
    // Initialize carousels and lightbox after page loads
    setTimeout(() => {
        initializeCarousels();
        initializeLightbox(project);
        initializeTabs();
        initializeAccordions();
    }, 0);
}

// Initialize carousel functionality
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
        
        // Event listeners
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

// Initialize lightbox functionality
function initializeLightbox(project) {
    // Create lightbox modal if it doesn't exist
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
        if (!project.galleries || !project.galleries[galleryIndex]) return;
        
        currentGalleryIndex = galleryIndex;
        currentImageIndex = imageIndex;
        currentGalleryImages = project.galleries[galleryIndex].images;
        
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
    
    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation - remove old listener if exists
    const keyHandler = (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
    };
    
    // Store handler on lightbox for cleanup
    if (lightbox._keyHandler) {
        document.removeEventListener('keydown', lightbox._keyHandler);
    }
    lightbox._keyHandler = keyHandler;
    document.addEventListener('keydown', keyHandler);
    
    // Add click listeners to all gallery images
    const galleryImages = document.querySelectorAll('.gallery-image, .carousel-image');
    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            const galleryIndex = parseInt(img.dataset.gallery);
            const imageIndex = parseInt(img.dataset.index);
            showLightboxImage(galleryIndex, imageIndex);
        });
    });
}
// Start of critiques page
// Render critiques (now using grid layout)
function renderCritiques() {
    const grid = document.getElementById('critiquesGrid');
    if (!grid) return;

    grid.innerHTML = critiques.map(critique => `
        <div class="project-card" data-critique-id="${critique.id}">
            <div class="project-image-wrapper">
                <img src="${critique.image}" alt="${critique.title}" class="project-image">
                <div class="project-overlay">
                    <div class="project-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <div class="project-category-c">${critique.category}</div>
                <h3>${critique.title}</h3>
                <p class="project-card-description">${critique.description}</p>
                <div class="project-tags">
                    ${critique.tags ? critique.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                </div>
            </div>
        </div>
    `).join('');

    // Add click handlers for cards
    const cards = document.querySelectorAll('.project-card[data-critique-id]');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const critiqueId = parseInt(card.dataset.critiqueId);
            showCritiqueDetail(critiqueId);
        });
    });
}

// Show critique detail page (using same structure as portfolio)
function showCritiqueDetail(critiqueId) {
    const critique = critiques.find(c => c.id === critiqueId);
    if (!critique) return;

    const detailContent = document.getElementById('critiqueDetailContent');
    if (!detailContent) return;

    // Process galleries by position (same as portfolio)
    const galleriesByPosition = {
        'after-overview': '',
        'after-challenge': '',
        'after-research': '',
        'after-solution': '',
        'before-results': ''
    };

    if (critique.galleries) {
        critique.galleries.forEach((gallery, index) => {
            const galleryHTML = renderGallery(gallery, index);
            if (galleriesByPosition.hasOwnProperty(gallery.position)) {
                galleriesByPosition[gallery.position] += galleryHTML;
            }
        });
    }

    // Process research items
    const researchItems = critique.research ? critique.research.map(item => `<li>${item}</li>`).join('') : '';

    // Process results cards
    const resultsCards = critique.results ? critique.results.map(result => `
        <div class="result-card">
            <h3>${result.metric}</h3>
            <p>${result.label}</p>
        </div>
    `).join('') : '';

    detailContent.innerHTML = `
        <section class="project-detail-header">
            <div class="container">
                <button class="back-btn" onclick="navigateToPage('critiques')">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    <span>Back to Critiques</span>
                </button>
                <div class="project-detail-title">
                    <span class="project-category-c">${critique.category}</span>
                    <h1>${critique.title}</h1>
                    <p class="project-description">${critique.description}</p>
                </div>
            </div>
        </section>

        <section class="project-detail-image">
            <div class="container">
                <img src="${critique.image}" alt="${critique.title}" class="detail-image">
            </div>
        </section>

        <section class="project-detail-content">
            <div class="container">
                <div class="detail-grid">
                    <div class="detail-sidebar">
                        <div class="detail-info">
                            <h4>Role</h4>
                            <p>${critique.role}</p>
                        </div>
                        <div class="detail-info">
                            <h4>Timeline</h4>
                            <p>${critique.timeline}</p>
                        </div>
                        <div class="detail-info">
                            <h4>Team</h4>
                            <p>${critique.team}</p>
                        </div>
                    </div>
                    
                    <div class="detail-main">
                        ${critique.tldr ? `
                        <!-- TL;DR Section -->
                        <div class="tldr-section">
                            <h2 class="tldr-title">TL;DR</h2>
                            
                            <div class="tldr-steps">
                                <!-- Step 1: Project Overview -->
                                <div class="tldr-step">
                                    <div class="tldr-step-number">1</div>
                                    <div class="tldr-step-content">
                                        <h3>Project Overview</h3>
                                        <p>${critique.tldr.overview}</p>
                                    </div>
                                </div>
                                
                                <!-- Step 45: Key Proposals -->
                                <div class="tldr-step">
                                    <div class="tldr-step-number">2</div>
                                    <div class="tldr-step-content">
                                        <h3>Key Proposals</h3>
                                        ${critique.tldr.proposals ? `
                                            <ol class="tldr-proposals-list">
                                                ${critique.tldr.proposals.map(proposal => `
                                                    <li>
                                                        <strong>${proposal.title}</strong> ${proposal.description}
                                                    </li>
                                                `).join('')}
                                            </ol>
                                        ` : ''}
                                    </div>
                                </div>
                                
                                <!-- Step 3: Outcome -->
                                <div class="tldr-step">
                                    <div class="tldr-step-number">3</div>
                                    <div class="tldr-step-content">
                                        <h3>Outcome</h3>
                                        <p>${critique.tldr.outcome}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Final Product Showcase -->
                            ${critique.tldr.finalImages && critique.tldr.finalImages.length > 0 ? `
                            <div class="tldr-final-product">
                                <div class="tldr-final-images">
                                    ${critique.tldr.finalImages.map(img => `
                                        <img src="${img}" alt="Final Product" class="tldr-product-image">
                                    `).join('')}
                                </div>
                            </div>
                            ` : ''}
                        </div>
                        
                        <!-- Image and Text Section (before galleries) -->
                        ${critique.imageTextSection ? `
                        <div class="image-text-section">
                            <div class="image-text-container">
                                <div class="image-text-image-wrapper">
                                    <img src="${critique.imageTextSection.image}" alt="${critique.imageTextSection.title}" class="image-text-image">
                                </div>
                                <div class="image-text-content">
                                    <h3>${critique.imageTextSection.title}</h3>
                                    <p>${critique.imageTextSection.text}</p>
                                </div>
                            </div>
                        </div>
                        ` : ''}
                        
                        <!-- Brief Section with indented paragraphs -->
                        ${critique.brief ? renderBriefSection(critique.brief) : ''}
                        ` : `
                        <!-- Fallback to original sections if no TL;DR data -->
                        <div class="detail-section">
                            <h2>Overview</h2>
                            <p>${critique.overview}</p>
                        </div>
                        
                        ${galleriesByPosition['after-overview']}

                        <div class="detail-section">
                            <h2>The Challenge</h2>
                            <p>${critique.challenge}</p>
                        </div>
                        ${galleriesByPosition['after-challenge']}

                        <div class="detail-section">
                            <h2>Research & Discovery</h2>
                            <p>Key research activities and findings:</p>
                            <ul>
                                ${researchItems}
                            </ul>
                        </div>
                        ${galleriesByPosition['after-research']}

                        <div class="detail-section">
                            <h2>Solution</h2>
                            <p>${critique.solution}</p>
                        </div>
                        ${galleriesByPosition['after-solution']}
                        `}
                        
                        ${galleriesByPosition['after-overview']}
                        ${galleriesByPosition['after-challenge']}
                        ${galleriesByPosition['after-research']}
                        ${galleriesByPosition['after-solution']}

                        ${critique.tabsSection ? renderTabsSection(critique.tabsSection) : ''}
                        ${critique.accordionSection ? renderAccordionSection(critique.accordionSection) : ''}

                        ${galleriesByPosition['before-results']}
                        <div class="detail-section">
                            <h2>Results</h2>
                            <div class="results-grid">
                                ${resultsCards}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="contact">
            <div class="container text-center">
                <h2>Let's Work Together</h2>
                <p class="contact-text">
                    I'm always open to discussing new projects, creative ideas, or 
                    opportunities to be part of your vision.
                </p>
                <div class="contact-links">
                    <a href="mailto:hello@designer.com" class="contact-link">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <span>Email</span>
                    </a>
                    <a href="https://github.com/yourusername" class="contact-link">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" class="contact-link">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    `;

    navigateToPage('critiqueDetail');
    
    // Initialize all interactive features after content is loaded
    setTimeout(() => {
        initializeCarousels();
        initializeLightbox(critique);
        initializeTabs();
        initializeAccordions();
    }, 0);
}

// Render observations
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
    
    // Add click handlers for observation cards
    const observationCards = document.querySelectorAll('.observation-card');
    observationCards.forEach(card => {
        card.addEventListener('click', () => {
            const observationId = parseInt(card.dataset.observationId);
            showObservationDetail(observationId);
        });
    });
}

// Show observation detail page (similar to critique detail)
function showObservationDetail(observationId) {
    const observation = observations.find(o => o.id === observationId);
    if (!observation) return;

    const detailContent = document.getElementById('observationDetailContent');
    if (!detailContent) return;

    // Process galleries by position (same structure as critiques/projects)
    const galleriesByPosition = {
        'after-overview': '',
        'after-challenge': '',
        'after-research': '',
        'after-solution': '',
        'before-results': ''
    };

    if (observation.galleries && observation.galleries.length > 0) {
        observation.galleries.forEach((gallery, galleryIndex) => {
            const position = gallery.position || 'before-results';
            const galleryHtml = renderGallery(gallery, galleryIndex);
            galleriesByPosition[position] += galleryHtml;
        });
    }

    // Process research items if available
    const researchItems = observation.research ? observation.research.map(item => `<li>${item}</li>`).join('') : '';

    // Process results cards if available
    const resultsCards = observation.results ? observation.results.map(result => `
        <div class="result-card">
            <h3>${result.metric}</h3>
            <p>${result.label}</p>
        </div>
    `).join('') : '';

    detailContent.innerHTML = `
        <section class="project-detail-header">
            <div class="container">
                <button class="back-btn" onclick="navigateToPage('observations')">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    <span>Back to Observations</span>
                </button>
                <div class="project-detail-title">
                    <span class="project-category-o">${observation.category}</span>
                    <h1>${observation.title}</h1>
                    ${observation.excerpt ? `<p class="project-description">${observation.excerpt}</p>` : ''}
                </div>
            </div>
        </section>

        ${observation.image ? `
        <section class="project-detail-image">
            <div class="container">
                <img src="${observation.image}" alt="${observation.title}" class="detail-image">
            </div>
        </section>
        ` : ''}

        <section class="project-detail-content">
            <div class="container">
                <div class="detail-grid">
                    ${observation.date || observation.readTime ? `
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
                    ` : ''}
                    
                    <div class="detail-main">
                        ${observation.tldr ? `
                        <!-- TL;DR Section -->
                        <div class="tldr-section">
                            <h2 class="tldr-title">TL;DR</h2>
                            
                            <div class="tldr-steps">
                                <!-- Step 1: Project Overview -->
                                <div class="tldr-step">
                                    <div class="tldr-step-number">1</div>
                                    <div class="tldr-step-content">
                                        <h3>Overview</h3>
                                        <p>${observation.tldr.overview}</p>
                                    </div>
                                </div>
                                
                                ${observation.tldr.proposals ? `
                                <!-- Step 2: Key Points -->
                                <div class="tldr-step">
                                    <div class="tldr-step-number">2</div>
                                    <div class="tldr-step-content">
                                        <h3>Key Points</h3>
                                        <ol class="tldr-proposals-list">
                                            ${observation.tldr.proposals.map(proposal => `
                                                <li>
                                                    <strong>${proposal.title}</strong> ${proposal.description}
                                                </li>
                                            `).join('')}
                                        </ol>
                                    </div>
                                </div>
                                ` : ''}
                                
                                ${observation.tldr.outcome ? `
                                <!-- Step 3: Takeaway -->
                                <div class="tldr-step">
                                    <div class="tldr-step-number">3</div>
                                    <div class="tldr-step-content">
                                        <h3>Takeaway</h3>
                                        <p>${observation.tldr.outcome}</p>
                                    </div>
                                </div>
                                ` : ''}
                            </div>
                            
                            <!-- Final Product Showcase -->
                            ${observation.tldr.finalImages && observation.tldr.finalImages.length > 0 ? `
                            <div class="tldr-final-product">
                                <div class="tldr-final-images">
                                    ${observation.tldr.finalImages.map(img => `
                                        <img src="${img}" alt="Example" class="tldr-product-image">
                                    `).join('')}
                                </div>
                            </div>
                            ` : ''}
                        </div>
                        
                        <!-- Image and Text Section (before galleries) -->
                        ${observation.imageTextSection ? `
                        <div class="image-text-section">
                            <div class="image-text-container">
                                <div class="image-text-image-wrapper">
                                    <img src="${observation.imageTextSection.image}" alt="${observation.imageTextSection.title}" class="image-text-image">
                                </div>
                                <div class="image-text-content">
                                    <h3>${observation.imageTextSection.title}</h3>
                                    <p>${observation.imageTextSection.text}</p>
                                </div>
                            </div>
                        </div>
                        ` : ''}
                        
                        <!-- Brief Section with indented paragraphs -->
                        ${observation.brief ? renderBriefSection(observation.brief) : ''}
                        
                        <!-- Video Section -->
                        ${observation.videoSection ? renderVideoSection(observation.videoSection) : ''}
                        ` : `
                        <!-- Fallback to content if no TL;DR data -->
                        <div class="detail-section">
                            <h2>Overview</h2>
                            ${observation.content ? `<p>${observation.content}</p>` : ''}
                        </div>
                        
                        ${galleriesByPosition['after-overview']}

                        ${observation.challenge ? `
                        <div class="detail-section">
                            <h2>Analysis</h2>
                            <p>${observation.challenge}</p>
                        </div>
                        ${galleriesByPosition['after-challenge']}
                        ` : ''}

                        ${researchItems ? `
                        <div class="detail-section">
                            <h2>Key Insights</h2>
                            <ul>
                                ${researchItems}
                            </ul>
                        </div>
                        ${galleriesByPosition['after-research']}
                        ` : ''}

                        ${observation.solution ? `
                        <div class="detail-section">
                            <h2>Recommendations</h2>
                            <p>${observation.solution}</p>
                        </div>
                        ${galleriesByPosition['after-solution']}
                        ` : ''}
                        
                        <!-- Video Section (fallback path) -->
                        ${observation.videoSection ? renderVideoSection(observation.videoSection) : ''}
                        `}
                        
                        ${galleriesByPosition['after-overview']}
                        ${galleriesByPosition['after-challenge']}
                        ${galleriesByPosition['after-research']}
                        ${galleriesByPosition['after-solution']}

                        ${observation.tabsSection ? renderTabsSection(observation.tabsSection) : ''}
                        ${observation.accordionSection ? renderAccordionSection(observation.accordionSection) : ''}

                        ${resultsCards ? `
                        ${galleriesByPosition['before-results']}
                        <div class="detail-section">
                            <h2>Impact</h2>
                            <div class="results-grid">
                                ${resultsCards}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="contact">
            <div class="container text-center">
                <h2>Let's Work Together</h2>
                <p class="contact-text">
                    I'm always open to discussing new projects, creative ideas, or 
                    opportunities to be part of your vision.
                </p>
                <div class="contact-links">
                    <a href="mailto:hello@designer.com" class="contact-link">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <span>Email</span>
                    </a>
                    <a href="https://github.com/yourusername" class="contact-link">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" class="contact-link">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    `;

    // Show observation detail page
    navigateToPage('observationDetail');

    // Initialize lightbox and other interactive elements
    setTimeout(() => {
        initializeLightbox();
        initializeTabs();
        initializeAccordions();
    }, 0);
}

// Scroll to Top functionality
function setupScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    
    if (!scrollButton) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show button when scrolled at least halfway through the page
        const halfwayPoint = (scrollHeight - clientHeight) / 2;
        
        if (scrollTop > halfwayPoint) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize critique tabs
function initializeCritiqueTabs() {
    const tabButtons = document.querySelectorAll('.critique-tab-btn');
    const tabPanels = document.querySelectorAll('.critique-tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabIndex = button.dataset.tab;
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            const activePanel = document.querySelector(`.critique-tab-panel[data-tab="${tabIndex}"]`);
            if (activePanel) {
                activePanel.classList.add('active');
            }
        });
    });
}

// Initialize critique accordion
function initializeCritiqueAccordion() {
    const accordionHeaders = document.querySelectorAll('.critique-accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Toggle active state
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

// ==========================================================================
// TABLE, TABS, AND ACCORDION RENDERING FUNCTIONS
// ==========================================================================



// Render tabs section (can contain tables or any content)
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

// Render accordion section
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

// Render brief section with indented paragraphs
function renderBriefSection(briefData) {
    if (!briefData) return '';
    
    const { title = 'Brief', paragraphs } = briefData;
    
    return `
        <div class="detail-section">
            <h3>${title}</h3>
            ${paragraphs.map(para => {
                if (typeof para === 'string') {
                    // Simple string paragraph
                    return `<p>${para}</p>`;
                } else {
                    // Object with text and optional indent flag
                    const className = para.indent ? ' class="critique-brief-indent"' : '';
                    return `<p${className}>${para.text}</p>`;
                }
            }).join('\n            ')}
        </div>
    `;
}

// Render video section (YouTube embeds)
function renderVideoSection(videoData) {
    if (!videoData) return '';
    
    const { title, description, videoId, url } = videoData;
    
    // Extract video ID from URL if full URL is provided instead of just ID
    let embedId = videoId;
    if (url && !videoId) {
        // Extract ID from various YouTube URL formats
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

// Initialize tabs functionality
function initializeTabs() {
    const tabbedContainers = document.querySelectorAll('.critique-tabs');
    
    tabbedContainers.forEach(container => {
        const buttons = container.querySelectorAll('.critique-tab-btn');
        const panels = container.querySelectorAll('.critique-tab-panel');
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const tabIndex = button.dataset.tab;
                
                // Remove active class from all buttons and panels in this container
                buttons.forEach(btn => btn.classList.remove('active'));
                panels.forEach(panel => panel.classList.remove('active'));
                
                // Add active class to clicked button and corresponding panel
                button.classList.add('active');
                const activePanel = container.querySelector(`[data-panel="${tabIndex}"]`);
                if (activePanel) {
                    activePanel.classList.add('active');
                }
            });
        });
    });
}

// Initialize accordion functionality
function initializeAccordions() {
    const accordions = document.querySelectorAll('.critique-accordion');
    
    accordions.forEach(accordion => {
        const headers = accordion.querySelectorAll('.critique-accordion-header');
        
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const isActive = item.classList.contains('active');
                
                // Toggle active state
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    renderProjects();
    renderCritiques();
    renderObservations();
    setupScrollToTop();
});
