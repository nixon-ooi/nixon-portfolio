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

    // ADD THIS SECTION FOR OBSERVATIONS PAGE
    if (pageId === 'observations') {
        renderObservations();
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



//
//
//
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
            
            // Call individual project functions based on ID
            switch(projectId) {
                case 1:
                    showHealthBuddyDetail();
                    break;
                case 2:
                    showOlioDetail();
                    break;
            }
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
        ${gallery.description ? `<p class="gallery-description">${gallery.description}</p>` : ''}
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

//
//
//
// Start of detailed portfolio page

function showHealthBuddyDetail() {
    const project = projects.find(p => p.id === 1);
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
    
    // Initialize carousels and lightbox after page loads
    setTimeout(() => {
        initializeCarousels();
        initializeLightbox(project);
        initializeTabs();
        initializeAccordions();
    }, 0);

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
                            <h4>Tag</h4>
                            <div class="project-tags">
                                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
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

                        ${project.finalImages ? `
                            <div class="detail-section">
                                ${project.finalImages.images ? project.finalImages.images.map(img => `
                                    <img src="${img}" alt="Final Image" class="tldr-product-image">
                                `).join('') : ''}
                                ${project.finalImages.paragraph ? `<p>${project.finalImages.paragraph}</p>` : ''}
                            </div>
                        ` : ''}

                        ${project.galleries ? getGallery(project.galleries, 1) : ''}

                        ${project.galleries ? getGallery(project.galleries, 2) : ''}

                        ${project.tabsSection ? renderTabsSection(project.tabsSection) : ''}

                        ${project.accordionSection ? renderAccordionSection(project.accordionSection) : ''}

                        ${project.galleries ? getGallery(project.galleries, 3) : ''}

                        ${project.galleries ? getGallery(project.galleries, 4) : ''}

                        <div class="learning-points">
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

    // Initialize interactive elements
    setTimeout(() => {
        initializeCarousels();
        initializeLightbox(project);
        initializeTabs();
        initializeAccordions();
    }, 0);

    navigateToPage('projectDetail');
}

function showOlioDetail() {
    const project = projects.find(p => p.id === 2);
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
    
    // Initialize carousels and lightbox after page loads
    setTimeout(() => {
        initializeCarousels();
        initializeLightbox(project);
        initializeTabs();
        initializeAccordions();
    }, 0);

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
                            <h4>Tag</h4>
                            <div class="project-tags">
                                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
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

                        ${project.finalImages ? `
                            <div class="detail-section">
                                ${project.finalImages.images ? project.finalImages.images.map(img => `
                                    <img src="${img}" alt="Final Image" class="tldr-product-image">
                                `).join('') : ''}
                                ${project.finalImages.paragraph ? `<p>${project.finalImages.paragraph}</p>` : ''}
                            </div>
                        ` : ''}

                        ${project.galleries ? getGallery(project.galleries, 1) : ''}

                        ${project.galleries ? getGallery(project.galleries, 2) : ''}

                        ${project.tabsSection ? renderTabsSection(project.tabsSection) : ''}

                        ${project.accordionSection ? renderAccordionSection(project.accordionSection) : ''}

                        ${project.galleries ? getGallery(project.galleries, 3) : ''}

                        ${project.galleries ? getGallery(project.galleries, 4) : ''}

                        <div class="learning-points">
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

    // Initialize interactive elements
    setTimeout(() => {
        initializeCarousels();
        initializeLightbox(project);
        initializeTabs();
        initializeAccordions();
    }, 0);

    navigateToPage('projectDetail');
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

//
//
//
// Start of design observations page
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

//
//
// 
// Show observation detail page

function showDesigningMyPortfolio() {
    const observation = observations.find(o => o.id === 1);
    if (!observation) return;

    const detailContent = document.getElementById('observationDetailContent');
    if (!detailContent) return;

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

        <section class="project-detail-image">
            <div class="container">
                <img src="${observation.image}" alt="${observation.title}" class="detail-image">
            </div>
        </section>

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
                        ${observation.overview ? `
                        <div class="detail-section">
                            <h3>Introduction</h3>
                            <p>${observation.overview}</p>
                        </div>
                        ` : ''}
                        ${observation.galleries ? getGallery(observation.galleries, 0) : ''}
                        ${observation.galleries ? getGallery(observation.galleries, 1) : ''}                        
                        ${observation.imageTextSection ? `
                        <div class="image-text-section">
                            <h3>${observation.imageTextSection.title}</h3>
                            <div class="image-text-image-wrapper-2">
                                ${observation.imageTextSection.image.map(img => `<img src="${img.url}" alt="${img.alt}" class="image-text-image">`).join('')}
                            </div>
                            <div class="image-text-content">
                                <p>${observation.imageTextSection.description}</p>
                            </div>
                        </div>
                        ` : ''}
                        ${observation.imageTextSection1 ? `
                        <div class="image-text-section">
                            <h3>${observation.imageTextSection1.title}</h3>
                            <div class="image-text-image-wrapper-2">
                                ${observation.imageTextSection1.image.map(img => `<img src="${img.url}" alt="${img.alt}" class="image-text-image">`).join('')}
                            </div>
                            <div class="image-text-content">
                                <p>${observation.imageTextSection1.description}</p>
                            </div>
                        </div>
                        ` : ''}  
                        ${observation.galleries ? getGallery(observation.galleries, 2) : ''}   
                        ${observation.galleries ? getGallery(observation.galleries, 3) : ''}
                        <div class="detail-main">
                        ${observation.overview1 ? `
                        <div class="detail-section">
                            <h3>Feedback</h3>
                            <p>${observation.overview1}</p>
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

    // Initialize interactive elements
    setTimeout(() => {
        if (observation.galleries && observation.galleries.length > 0) {
            initializeCarousels();
            initializeLightbox(observation);
        }
        initializeTabs();
        initializeAccordions();
    }, 0);

    navigateToPage('observationDetail');
}

function showCPFObservationDetail() {
    const observation = observations.find(o => o.id === 2);
    if (!observation) return;

    const detailContent = document.getElementById('observationDetailContent');
    if (!detailContent) return;

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

        <section class="project-detail-image">
            <div class="container">
                <img src="${observation.image}" alt="${observation.title}" class="detail-image">
            </div>
        </section>

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
                        ${observation.brief ? renderBriefSection(observation.brief) : ''}
                        ${observation.imageTextSection ? `
                        <div class="image-text-section">
                            <div class="image-text-image-wrapper-2">
                                ${observation.imageTextSection.image.map(img => `<img src="${img.url}" alt="${img.alt}" class="image-text-image">`).join('')}
                            </div>
                        </div>
                        ` : ''}   
                        ${observation.galleries ? getGallery(observation.galleries, 0) : ''}
                        ${observation.imageTextSection1 ? `
                        <div class="image-text-section">
                            <div class="image-text-container">
                                <div class="image-text-image-wrapper">
                                    <img src="${observation.imageTextSection1.image}" alt="${observation.imageTextSection1.title}" class="image-text-image">
                                </div>
                                <div class="image-text-content">
                                    <h3>${observation.imageTextSection1.title}</h3>
                                    <p>${observation.imageTextSection1.description}</p>
                                </div>
                            </div>
                        </div>
                        ` : ''}    
                        <!-- Problem Statement Section with indented paragraphs -->
                        ${observation.brief1 ? renderBriefSection(observation.brief1) : ''}
                        ${observation.galleries ? getGallery(observation.galleries, 1) : ''}
                        ${observation.finalImages ? `
                            <div class="detail-section">
                                <h3>${observation.finalImages.title}</h3>
                                ${observation.finalImages.images ? observation.finalImages.images.map(img => `
                                    <img src="${img.url}" alt="${img.caption}" class="tldr-product-image">
                                `).join('') : ''}
                                ${observation.finalImages.paragraphs ? observation.finalImages.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('') : ''}
                            </div>
                        ` : ''}      
                        ${observation.imageTextSection2 ? `
                        <div class="image-text-section">
                            <div class="image-text-image-wrapper-2">
                                ${observation.imageTextSection2.image.map(img => `<img src="${img.url}" alt="${img.alt}" class="image-text-image">`).join('')}
                            </div>
                            <div class="image-text-content">
                                <h3>${observation.imageTextSection2.title}</h3>
                                <p>${observation.imageTextSection2.description}</p>
                            </div>
                        </div>
                        ` : ''}  
                        ${observation.galleries ? getGallery(observation.galleries, 2) : ''}
                        ${observation.tabsSection ? renderTabsSection(observation.tabsSection) : ''}

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

    // Initialize interactive elements
    setTimeout(() => {
        if (observation.galleries && observation.galleries.length > 0) {
            initializeCarousels();
            initializeLightbox(observation);
        }
        initializeTabs();
        initializeAccordions();
    }, 0);

    navigateToPage('observationDetail');
}

function showSettingPageDetail() {
    const observation = observations.find(o => o.id === 3);
    if (!observation) return;

    const detailContent = document.getElementById('observationDetailContent');
    if (!detailContent) return;

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

        <section class="project-detail-image">
            <div class="container">
                <img src="${observation.image}" alt="${observation.title}" class="detail-image">
            </div>
        </section>

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
                        ${observation.brief ? renderBriefSection(observation.brief) : ''}
                        ${observation.imageTextSection ? `
                        <div class="image-text-section">
                            <div class="image-text-container">
                                <div class="image-text-image-wrapper">
                                    <img src="${observation.imageTextSection.image}" alt="${observation.imageTextSection.title}" class="image-text-image">
                                </div>
                                <div class="image-text-content">
                                    <h3>${observation.imageTextSection.title}</h3>
                                    ${observation.imageTextSection.proposals ? `
                                    <ul class="tldr-proposals-list">
                                        ${observation.imageTextSection.proposals.map(proposal => `
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
                        ${observation.galleries ? getGallery(observation.galleries, 0) : ''}
                        <!-- Problem Statement Section with indented paragraphs -->
                        ${observation.brief1 ? renderBriefSection(observation.brief1) : ''}
                        ${observation.galleries ? getGallery(observation.galleries, 1) : ''}
                        ${observation.galleries ? getGallery(observation.galleries, 2) : ''}
                        ${observation.tabsSection ? renderTabsSection(observation.tabsSection) : ''}    
                        ${observation.imageTextSection1 ? `
                        <div class="image-text-section">
                            <div class="image-text-image-wrapper-2">
                                ${observation.imageTextSection1.image.map(img => `<img src="${img.url}" alt="${img.alt}" class="image-text-image">`).join('')}
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

    // Initialize interactive elements
    setTimeout(() => {
        if (observation.galleries && observation.galleries.length > 0) {
            initializeCarousels();
            initializeLightbox(observation);
        }
        initializeTabs();
        initializeAccordions();
    }, 0);

    navigateToPage('observationDetail');
}

function showSwitchDetail() {
    const observation = observations.find(o => o.id === 4);
    if (!observation) return;

    const detailContent = document.getElementById('observationDetailContent');
    if (!detailContent) return;

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

        <section class="project-detail-image">
            <div class="container">
                <img src="${observation.image}" alt="${observation.title}" class="detail-image">
            </div>
        </section>

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
                        ${observation.brief ? renderBriefSection(observation.brief) : ''}
                        ${observation.imageTextSection ? `
                        <div class="image-text-section">
                            <h3>${observation.imageTextSection.title}</h3>
                            <div class="image-text-image-wrapper-2">
                                ${observation.imageTextSection.image.map(img => `<img src="${img.url}" alt="${img.alt}" class="image-text-image">`).join('')}
                            </div>
                            <div class="image-text-content">
                                <p>${observation.imageTextSection.description}</p>
                            </div>
                        </div>
                        ` : ''}
                        ${observation.galleries ? getGallery(observation.galleries, 0) : ''}
                        ${observation.galleries ? getGallery(observation.galleries, 1) : ''}
                        ${observation.galleries ? getGallery(observation.galleries, 2) : ''}
                        <div class="learning-points">
                            <h2>${observation.learningpoints.title}</h2>
                            ${observation.learningpoints.proposals ? `
                            <ul class="proposals-list">
                                ${observation.learningpoints.proposals.map(proposal => `
                                    <li>
                                        ${proposal.description}
                                    </li>
                                `).join('')}
                            </ul>
                                ` : ''}
                        </div>



                        
                        <!-- Problem Statement Section with indented paragraphs -->
                        ${observation.brief1 ? renderBriefSection(observation.brief1) : ''}
                        ${observation.tabsSection ? renderTabsSection(observation.tabsSection) : ''}    
                        ${observation.imageTextSection1 ? `
                        <div class="image-text-section">
                            <div class="image-text-image-wrapper-2">
                                ${observation.imageTextSection1.image.map(img => `<img src="${img.url}" alt="${img.alt}" class="image-text-image">`).join('')}
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

    // Initialize interactive elements
    setTimeout(() => {
        if (observation.galleries && observation.galleries.length > 0) {
            initializeCarousels();
            initializeLightbox(observation);
        }
        initializeTabs();
        initializeAccordions();
    }, 0);

    navigateToPage('observationDetail');
}

function attachObservationCardHandlers() {
    const observationCards = document.querySelectorAll('.observation-card');
    observationCards.forEach(card => {
        card.addEventListener('click', () => {
            const observationId = parseInt(card.dataset.observationId);
            
            // Call individual observation functions based on ID
            switch(observationId) {
                case 1:
                    showDesigningMyPortfolio();
                    break;
                case 2:
                    showCPFObservationDetail();
                    break;
                case 3:
                    showSettingPageDetail();
                    break;
                case 4:
                    showSwitchDetail();
                    break;                    
                // Add more cases here as you create detail pages for other observations
            }
        });
    });
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
    renderObservations();
    setupScrollToTop();
});
