// Design Observations Data
// Edit this file to update observation articles
//
// INDIVIDUAL DETAIL PAGES NOW AVAILABLE!
// Click any observation card to view its detail page.
// See OBSERVATIONS_DETAIL_GUIDE.md for full documentation on creating rich detail pages
// with TL;DR sections, galleries, tabs, accordions, and more.
//
// Quick Reference:
// - Basic fields (required): id, title, category, date, readTime, excerpt, tags
// - Simple detail page: add 'content' field
// - Full detail page: add 'tldr', 'imageTextSection', 'galleries', 'tabsSection', etc.
// - See first observation below for commented example of all available fields

const observations = [
    {
        id: 1,
        title: 'The Rise of Spatial Interfaces',
        category: 'Industry Trends',
        date: 'October 25, 2025',
        readTime: '5 min read',
        excerpt: 'With the advent of spatial computing, we\'re seeing a shift from flat 2D interfaces to immersive 3D experiences. This observation explores how designers are adapting traditional UI patterns to work in three-dimensional space.',
        content: 'The design language is evolving to accommodate depth, shadows, and spatial relationships in ways that feel natural to users. Key considerations include maintaining usability while adding dimensionality, ensuring accessibility in spatial contexts, and creating intuitive navigation in 3D space.',
        tags: ['Spatial Computing', 'Future of Design', '3D UI'],
        
        // OPTIONAL: Add these fields to create a full detail page (same structure as critiques/portfolio)
        // Uncomment and customize to enable full detail page functionality
        /*
        image: 'https://images.unsplash.com/photo-your-image-url',
        
        // TL;DR Section (recommended for detail pages)
        tldr: {
            overview: 'Brief overview of the observation and its significance.',
            proposals: [
                {
                    title: 'Key Point 1:',
                    description: 'Explanation of the first major insight or pattern.'
                },
                {
                    title: 'Key Point 2:',
                    description: 'Explanation of the second major insight or pattern.'
                },
                {
                    title: 'Key Point 3:',
                    description: 'Explanation of the third major insight or pattern.'
                }
            ],
            outcome: 'Key takeaway or conclusion from this observation.',
            finalImages: [
                'https://images.unsplash.com/photo-example-1',
                'https://images.unsplash.com/photo-example-2'
            ]
        },
        
        // Image and Text Section
        imageTextSection: {
            image: 'https://images.unsplash.com/photo-your-analysis-image',
            title: 'Deep Dive Analysis',
            text: 'Detailed explanation of the observation with supporting context and examples.'
        },
        
        // Brief Section (for additional context)
        brief: {
            title: 'Context',
            paragraphs: [
                'First paragraph introducing the context.',
                {
                    text: 'Indented paragraph with additional background or definition.',
                    indent: true
                },
                'Concluding paragraph connecting back to the observation.'
            ]
        },
        
        // Image Galleries
        galleries: [
            {
                type: 'carousel',
                title: 'Examples in the Wild',
                position: 'after-overview',
                images: [
                    { url: 'https://images.unsplash.com/photo-example-1', caption: 'Example 1' },
                    { url: 'https://images.unsplash.com/photo-example-2', caption: 'Example 2' }
                ]
            }
        ],
        
        // Tabs Section (for organized content)
        tabsSection: {
            title: 'Detailed Analysis',
            tabs: [
                {
                    label: 'Pattern Analysis',
                    content: '<p>Content for pattern analysis...</p>'
                },
                {
                    label: 'Use Cases',
                    content: '<p>Content for use cases...</p>'
                }
            ]
        },
        
        // Accordion Section (for FAQs or expandable content)
        accordionSection: {
            title: 'Common Questions',
            items: [
                {
                    title: 'When should this pattern be used?',
                    content: 'Explanation of when to apply this pattern...'
                },
                {
                    title: 'What are the tradeoffs?',
                    content: 'Discussion of pros and cons...'
                }
            ]
        },
        
        // Video Section (YouTube embed)
        videoSection: {
            title: 'Video Walkthrough',  // Optional
            description: 'Watch this video for a visual demonstration of the concept.',  // Optional
            videoId: 'dQw4w9WgXcQ',  // YouTube video ID (e.g., from https://www.youtube.com/watch?v=dQw4w9WgXcQ)
            // OR use full URL instead of videoId:
            // url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
        */
    },
    {
        id: 2,
        title: 'Microinteractions That Matter',
        category: 'UX Patterns',
        date: 'October 20, 2025',
        readTime: '4 min read',
        excerpt: 'Small details create big impacts. This observation catalogs effective microinteractions from popular apps and analyzes what makes them successful in providing feedback and creating delightful user experiences.',
        content: 'Great microinteractions are invisible until they\'re missing. They provide immediate feedback, reduce cognitive load, and add personality to digital products. The best ones follow these principles: they\'re subtle, purposeful, and enhance the core experience without distracting from it.',
        tags: ['Microinteractions', 'Animation', 'User Feedback'],
    },
    {
        id: 3,
        title: 'Color Accessibility in Modern Design Systems',
        category: 'Accessibility',
        date: 'October 15, 2025',
        readTime: '6 min read',
        excerpt: 'An analysis of how leading design systems handle color contrast, color blindness, and dark mode while maintaining brand identity. Includes practical tips for creating accessible color palettes.',
        content: 'Accessible color systems start with understanding WCAG guidelines but go beyond compliance to create truly inclusive experiences. This means considering various types of color vision deficiency, providing sufficient contrast in all modes, and using color as an enhancement rather than the sole means of conveying information.',
        tags: ['Accessibility', 'Color Theory', 'Design Systems'],
    },
    {
        id: 4,
        title: 'The Evolution of Mobile Navigation Patterns',
        category: 'Mobile Design',
        date: 'October 10, 2025',
        readTime: '7 min read',
        excerpt: 'Mobile navigation has evolved significantly from the hamburger menu era. This observation tracks the shift towards thumb-friendly, context-aware navigation patterns optimized for larger screens.',
        content: 'As phones get larger, bottom navigation has become the standard, but we\'re seeing innovative approaches like gesture-based navigation, floating action buttons, and hybrid models. The key is balancing discoverability with screen real estate and ensuring one-handed operation.',
        tags: ['Mobile UX', 'Navigation', 'Ergonomics'],
    },
    {
        id: 5,
        title: 'Empty States as Opportunities',
        category: 'UX Patterns',
        date: 'October 5, 2025',
        readTime: '4 min read',
        excerpt: 'Empty states are often overlooked but represent crucial moments in the user journey. This observation showcases creative approaches to turning empty states into engagement opportunities.',
        content: 'The best empty states don\'t just say "nothing here yet" – they guide users on what to do next, explain the value of the feature, or even delight with clever illustrations and microcopy. They transform potential disappointment into motivation.',
        tags: ['Empty States', 'User Onboarding', 'Content Design'],
    },
    {
        id: 6,
        title: 'Typography Trends in Digital Products',
        category: 'Visual Design',
        date: 'September 28, 2025',
        readTime: '5 min read',
        excerpt: 'From variable fonts to expressive typography, this observation explores how type choices are becoming more dynamic and personality-driven while maintaining readability across devices.',
        content: 'Variable fonts are enabling more nuanced typographic hierarchies without sacrificing performance. We\'re seeing a trend towards larger type sizes, increased line heights, and more generous spacing – all contributing to improved readability and modern aesthetics.',
        tags: ['Typography', 'Web Fonts', 'Visual Hierarchy'],
    },
    {
        id: 7,
        title: 'Gestural Interfaces Beyond Swipe',
        category: 'Mobile Design',
        date: 'September 22, 2025',
        readTime: '6 min read',
        excerpt: 'As users become more comfortable with gestures, designers are exploring sophisticated multi-touch interactions. This piece examines successful implementations and common pitfalls.',
        content: 'Gestural interfaces can feel magical when done right, but they require careful consideration of discoverability, feedback, and error prevention. The challenge is creating intuitive gestures that feel natural without requiring extensive learning.',
        tags: ['Gestures', 'Interaction Design', 'Mobile'],
    },
    {
        id: 8,
        title: 'Dark Mode Done Right',
        category: 'Visual Design',
        date: 'September 15, 2025',
        readTime: '5 min read',
        excerpt: 'Dark mode is no longer a nice-to-have feature. This observation breaks down what separates good dark mode implementations from great ones, with insights from leading design systems.',
        content: 'Great dark mode isn\'t just inverted colors. It requires thoughtful color palette adjustments, careful attention to contrast ratios, consideration of OLED displays, and ensuring that brand identity remains consistent across themes.',
        tags: ['Dark Mode', 'Theming', 'Visual Design'],
    },
];
