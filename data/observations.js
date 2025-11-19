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
    slug: 'cpf-unauthorised',
    title: 'CPF unauthorised withdrawal',
    image: 'assets/olio-hero-image.png',
    category: 'Preventive Measures',
    date: 'October 25, 2025',
    readTime: '5 min read',
    excerpt: 'The system\'s reliance on login credentials fails to prevent insider fraud when trusted individuals compromise account security.',
    tags: ['Spatial Computing', 'Future of Design', '3D UI'],

    // TL;DR Section (recommended for detail pages)
    tldr: {
        overview: 'Analysis of how CPF account security vulnerabilities expose systemic flaws in digital identity verification.',
        proposals: [
            {
                title: 'Multi-factor Authentication:',
                description: 'Implement additional verification steps beyond basic login credentials.'
            },
            {
                title: 'Behavioral Monitoring:',
                description: 'Track unusual transaction patterns and flag suspicious activities.'
            },
            {
                title: 'Transaction Delays:',
                description: 'Introduce cooling-off periods for large withdrawals to prevent impulsive fraudulent actions.'
            }
        ],
        outcome: 'Enhanced security measures that balance convenience with protection against insider threats.'
    },

    // Image and Text Section
    imageTextSection: {
        image: 'assets/999.png',
        title: 'Security Analysis',
        text: 'Current CPF security measures primarily focus on external threats, leaving vulnerabilities in trusted access scenarios where authorized users compromise credentials.'
    },

    // Brief Section (for additional context)
    brief: {
        title: 'Context',
        paragraphs: [
            'Incidents involving unauthorized access to CPF accounts highlight a critical vulnerability: the breach of trust where authorized login credentials are intentionally or unintentionally compromised by individuals close to the account holder.',
            {
                text: 'The Central Provident Fund (CPF) is a comprehensive social security system that enables working Singapore Citizens and Permanent Residents to set aside funds for retirement. It also addresses healthcare, home ownership, family protection and asset enhancement.',
                indent: true
            },
            'In these scenarios, the system\'s security, designed primarily against external threats, fails to detect or prevent insider fraud, leading to significant financial losses and erosion of public trust in digital financial platforms.'
        ]
    },

    // Image Galleries
    galleries: [
        {
            type: 'grid-2x2',
            subtitle: 'Hypothesis',
            description: 'The consistent use of the HealthBuddy app will significantly increase if its user interface is redesigned with clear, familiar iconography and the core task of adding medication is simplified with alternative methods like photo- or voice-based entry.',
            images: [
                { url: 'assets/999.png', caption: 'Issue Tree' },
                { url: 'assets/healthbuddy-problem-statement-2.png', caption: 'Priority Matrix' }
            ]
        },
    ],

    // Accordion Section (for FAQs or expandable content)
    accordionSection: {
        title: 'Common Questions',
        items: [
            {
                title: 'When should this pattern be used?',
                content: 'This security analysis applies to any financial or sensitive data system where trusted access could be compromised.'
            },
            {
                title: 'What are the tradeoffs?',
                content: 'Additional security measures may increase friction for legitimate users but provide crucial protection against insider threats.'
            }
        ]
    }
    },
];
