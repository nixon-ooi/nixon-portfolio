// Portfolio Projects Data
// Edit this file to update portfolio project content

const projects = [
    {
        id: 1,
        title: 'E-Commerce Redesign',
        category: 'Web Design',
        description: 'Complete redesign of an e-commerce platform focusing on conversion optimization and user experience.',
        image: 'https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYxNjk3NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['UI Design', 'UX Research', 'Prototyping'],
        
        // Detailed project information
        role: 'Lead Product Designer',
        timeline: '3 months',
        team: '2 Designers, 3 Engineers',
        
        overview: 'This project aimed to transform a struggling e-commerce platform into a conversion-optimized shopping experience. Through extensive research and iterative design, we developed a solution that balances user needs with business objectives, resulting in a modern interface that drives engagement and sales.',
        
        // TL;DR Section (recommended for portfolio detail pages)
        tldr: {
            overview: 'Investigate caregivers and elderly users behaviors, routines, and contexts to uncover the specific barriers that hinder adoption and provide actionable design insights.',
            proposals: [
                {
                    title: 'Streamlined UI:',
                    description: 'Clean interface simplifies complex tasks, such as adding medication, with clear progress indicators.'
                },
                {
                    title: 'Intuitive Data Entry:',
                    description: 'Using QR codes or pill bottle scanners for easier data entry and fewer errors.'
                },
                {
                    title: 'Enhanced Guidance:',
                    description: 'Adding pop-up tips and a confirmation system to enhance user trust in the app.'
                }
            ],
            outcome: 'By addressing core usability flaws, increase user adoption and retention. Transforming the app from a frustrating tool to a reliable resource for caregivers',
            finalImages: [
                'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MjA2MDcwNnww&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1594549208400-128687ad97ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNhcnQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMDk0NDM3fDA&ixlib=rb-4.1.0&q=80&w=1080'
            ]
        },
        
        challenge: 'The existing platform suffered from high cart abandonment rates (68%), confusing navigation, and poor mobile experience. Users were frustrated with the checkout process, and product discovery was inefficient. Our goal was to streamline the experience while introducing features that would add value without adding complexity.',
        
        research: [
            'Conducted 25 user interviews revealing navigation and trust issues',
            'Analyzed 10,000+ user sessions to identify friction points',
            'Competitive analysis of 8 leading e-commerce platforms',
            'A/B tested key user flows with 5,000+ participants'
        ],
        
        solution: 'We redesigned the entire user journey with a focus on clarity, trust, and efficiency. Key improvements included: simplified navigation with predictive search, streamlined one-page checkout, enhanced product pages with better imagery and social proof, and a mobile-first responsive design that works seamlessly across all devices.',
        
        results: [
            { metric: '42%', label: 'Increase in conversion rate' },
            { metric: '35%', label: 'Reduction in cart abandonment' },
            { metric: '4.8/5', label: 'User satisfaction score' }
        ],
        
        // Image and Text Section (appears after TL;DR, before galleries)
        imageTextSection: {
            image: 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzYyMDk1Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
            title: 'Research & Discovery',
            text: 'Through extensive user research and competitive analysis, we identified key pain points in the current checkout process. Our team conducted 25 user interviews and analyzed over 10,000 user sessions to understand where users were dropping off and what barriers prevented them from completing their purchases.'
        },
        
        // Brief Section (OPTIONAL - see BRIEF_SECTION_GUIDE.md for details)
        // Uncomment and customize this section to add a Brief with indented paragraphs
        /*
        brief: {
            title: 'Brief', // Optional - defaults to "Brief"
            paragraphs: [
                'First paragraph introduces the main problem or context.',
                {
                    text: 'This indented paragraph provides background information, definitions, or important context. It will have a left border accent for emphasis.',
                    indent: true
                },
                'Final paragraph connects back to the implications or why this matters.'
            ]
        },
        */
        
        // Image Galleries - can be placed anywhere between sections
        galleries: [
            {
                type: 'carousel', // Options: 'carousel', 'two-column', 'three-column', 'grid-2x2'
                title: 'Design Process', // Optional title for the gallery
                position: 'after-overview', // Options: 'after-overview', 'after-challenge', 'after-research', 'after-solution', 'before-results'
                images: [
                    { url: 'https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzYxODk0NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Initial wireframe sketches' },
                    { url: 'https://images.unsplash.com/photo-1694878981856-7fb3b09598a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMG1vY2t1cCUyMHNjcmVlbnxlbnwxfHx8fDE3NjE4NjAxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'High-fidelity mockups' },
                    { url: 'https://images.unsplash.com/photo-1542627088-6603b66e5c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm90b3R5cGV8ZW58MXx8fHwxNzYxODQ2NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Interactive prototype' },
                    { url: 'https://images.unsplash.com/photo-1646617747609-45b466ace9a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZmxvdyUyMGRpYWdyYW18ZW58MXx8fHwxNzYxODk0NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'User flow diagram' }
                ]
            },
            {
                type: 'grid-2x2',
                title: 'Key Screens',
                position: 'after-solution',
                images: [
                    { url: 'https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYxNjk3NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Homepage redesign' },
                    { url: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxODgwMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Product page' },
                    { url: 'https://images.unsplash.com/photo-1636390877494-3ba0c41c7e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNoJTIwbm90ZXN8ZW58MXx8fHwxNzYxODk0NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Checkout flow' },
                    { url: 'https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzYxODk0NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'User dashboard' }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Mobile Banking App',
        category: 'Mobile App',
        description: 'Intuitive mobile banking experience with focus on security and ease of use for daily transactions.',
        image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNjczMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['Mobile Design', 'Fintech', 'Interaction Design'],
        
        role: 'Senior UX Designer',
        timeline: '4 months',
        team: '3 Designers, 4 Engineers, 1 Security Specialist',
        
        overview: 'A next-generation mobile banking app designed to make financial management accessible and secure. We focused on creating an experience that empowers users to manage their finances confidently while maintaining bank-level security standards.',
        
        // Quick Summary (optional)
        quickSummary: {
            problems: [
                'Intimidating and complex interface',
                'Confusing security measures',
                'Hidden features hard to discover',
                'Unintuitive transaction flows'
            ],
            solutions: [
                'Friendly, approachable interface design',
                'Biometric authentication with clear guidance',
                'Prominent feature discovery with tooltips',
                'Streamlined transaction process'
            ]
        },
        
        challenge: 'Traditional banking apps are often intimidating and difficult to navigate. Users struggle with complex security measures, hidden features, and unintuitive transaction flows. The challenge was to create a friendly, approachable interface without compromising on security or functionality.',
        
        research: [
            'Interviewed 40 users across different age groups and tech literacy levels',
            'Observed real banking sessions to understand pain points',
            'Security audit and compliance review with banking standards',
            'Usability testing with 200+ participants across 5 iterations'
        ],
        
        solution: 'We designed a clean, intuitive interface with biometric authentication, quick actions for common tasks, smart transaction categorization, and personalized financial insights. The app uses progressive disclosure to reveal complex features only when needed, keeping the primary interface simple and accessible.',
        
        results: [
            { metric: '89%', label: 'User adoption rate within 6 months' },
            { metric: '65%', label: 'Increase in mobile transactions' },
            { metric: '4.7/5', label: 'App store rating' }
        ]
    },
    {
        id: 3,
        title: 'Creative Portfolio Platform',
        category: 'Web Platform',
        description: 'A platform for creatives to showcase their work with customizable templates and seamless navigation.',
        image: 'https://images.unsplash.com/photo-1583121182724-6f84970c0e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NjE3MTU0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['Web Design', 'Branding', 'Visual Design'],
        
        role: 'Product Designer & Art Director',
        timeline: '5 months',
        team: '2 Designers, 5 Engineers',
        
        overview: 'A sophisticated platform that empowers designers, photographers, and artists to create stunning portfolio websites without coding. The project focused on giving creatives maximum flexibility while maintaining professional design standards.',
        
        challenge: 'Existing portfolio platforms were either too restrictive (limited templates) or too complex (requiring coding knowledge). Creatives wanted the freedom to express their unique style without spending weeks learning web development. We needed to bridge this gap.',
        
        research: [
            'Surveyed 500+ creatives about their portfolio needs',
            'Analyzed top 50 designer portfolios for common patterns',
            'Conducted workshops with 20 designers to understand workflow',
            'Tested prototypes with diverse creative professionals'
        ],
        
        solution: 'We created an intuitive drag-and-drop builder with carefully crafted templates that serve as starting points, not constraints. The platform features intelligent grid systems, typography presets, customizable color schemes, and seamless project case study layouts. Everything is responsive by default.',
        
        results: [
            { metric: '10K+', label: 'Active portfolios created' },
            { metric: '92%', label: 'User retention after 3 months' },
            { metric: '4.9/5', label: 'Creator satisfaction score' }
        ]
    }
];
