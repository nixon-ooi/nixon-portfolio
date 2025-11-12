// Portfolio Projects Data
// Edit this file to update portfolio project content

const projects = [
        {
        id: 1,
        title: 'HealthBuddy - Meds Tracker',
        category: 'Public Health App',
        description: 'Bridging the digital divide to empower caregivers and engage elderly users.',
        image: '/assets/healthbuddy-hero-image.png',
        
        role: 'Senior UX Designer',
        timeline: '4 months',
        team: '3 Designers, 4 Engineers, 1 Security Specialist',
        
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
        },
        
        overview: 'As I view the caretakers of my grandparents and elders themselves who facilitate the daily ritual of medicine consumption, there is a struggle to remember the timing and dosage let alone noting down their reaction to the medication.<br><br>This raises the need to understand why tools like the HealthBuddy app are not fully adopted or consistently used. Through investigating user behaviors, routines, and contexts, the goal is to uncover the barriers that shape adoption and provide insights to guide better design.',

        // Image and Text Section
        imageTextSection: {
            image: 'assets/healthbuddy-current-design.jpg',
            title: 'Current Design Analysis',
            proposals: [
                {
                    title: 'Notification Ineffectiveness:',
                    description: 'The app\'s push notifications are easily ignored, proving unreliable compared to intrusive methods like an alarm clock.'
                },
                {
                    title: 'Poor Usability:',
                    description: 'The complex UI for core tasks hinders user adoption and consistent data logging.'
                }
            ],
        },

        brief: {
            title: 'Problem Statement',
            paragraphs: [
                'The core problem is the low, inconsistent use of digital health tools by caretakers and the elderly, which leads to poor medication adherence and prevents the collection of crucial side effect data.',
                {
                    text: 'How might we design a medication management system that is as reliable and intuitive as an alarm clock, so that caretakers and elderly users consistently log their medication and side effects?',
                    indent: true
                }
    ]
        },

        galleries: [
            {
            type: 'grid-2x2',
            title: 'Secondary Research',
            images: [
            { url: 'assets/healthbuddy-competitor-1.png', caption: 'Competitor Analysis' },
            { url: 'assets/healthbuddy-competitor-2.png', caption: 'Case Studies' },
                ]
            },
            {
            type: 'grid-2x2',
            subtitle: 'Hypothesis',
            description: 'The consistent use of the HealthBuddy app will significantly increase if its user interface is redesigned with clear, familiar iconography and the core task of adding medication is simplified with alternative methods like photo- or voice-based entry.',
            images: [
            { url: 'assets/healthbuddy-problem-statement-1.png', caption: 'Issue Tree' },
            { url: 'assets/healthbuddy-problem-statement-2.png', caption: 'Priority Matrix' }
                ]
            },
            {
            type: 'grid-2x2', // Options: 'carousel', 'two-column', 'three-column', 'grid-2x2'
            title: 'Initial Prototype',
            images: [
            { url: 'assets/healthbuddy-initial-prototype.png', caption: 'Initial Prototype screens' },
            { url: 'assets/healthbuddy-initial-prototype-result.png', caption: 'Test Results' }
                ]
            },
            {
            type: 'grid-2x2',
            images: [
            { url: 'assets/healthbuddy-recommend-before.jpg', caption: 'Current Design screens' },
            { url: 'assets/healthbuddy-recommend-after.png', caption: 'After Feedback screens' },
            { url: 'assets/healthbuddy-recommend-shortterm.png', caption: 'Short term suggestion' },
            { url: 'assets/healthbuddy-recommend-longterm.png', caption: 'Long term suggestion' },
                ]
            }
        ],

        finalImages: [
        'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MjA2MDcwNnww&ixlib=rb-4.1.0&q=80&w=1080',
        ],

        //challenge: 'Traditional banking apps are often intimidating and difficult to navigate. Users struggle with complex security measures, hidden features, and unintuitive transaction flows. The challenge was to create a friendly, approachable interface without compromising on security or functionality.',
        
        research: [
            'Interviewed 40 users across different age groups and tech literacy levels',
            'Observed real banking sessions to understand pain points',
            'Security audit and compliance review with banking standards',
            'Usability testing with 200+ participants across 5 iterations'
        ],
        
        learningpoints: {
            title: 'Learning Points',
            proposals: [
                {
                    description: 'Take time to synthesis user interviews.'
                },
                {
                    description: 'Allow users to understand where they are in the process .'
                },
                {
                    description: 'Unnecessary sectionising creates friction.'
                },
            ]
        },

        recommendation: 'Learning from the testing, I made final changes to the prototype: utilising a more visual medical reminder menu for easier navigation; showing only the latest medication intake instead of entire calendar list for focused scanning.',
        
        
        results: [
                { metric: '89%', label: 'User adoption rate within 6 months' },
                { metric: '65%', label: 'Increase in mobile transactions' },
                { metric: '4.7/5', label: 'App store rating' }
            ],
        
        // Tabs Section (optional)
        tabsSection: {
            title: 'Testing insights',
            tabs: [
                {
                    label: 'Synthesis of findings',
                    content: '<p>The research confirmed the hypothesis was correct but incomplete. The core problem isn\'t just about usability; it\'s about a complete user journey. The app should evolve beyond a simple tool into a holistic medication management and knowledge ecosystem.</p>'
                },
                {
                    label: 'What was found',
                    content: '<p>User tests showed a strong preference for a simplified interface and a QR scanner for adding medication, which would significantly improve task completion.</p>'
                },
                {
                    label: 'Why it matters',
                    content: '<p>Users were frustrated with manual entry and wanted a more efficient process. Our analysis revealed a deeper user need for reliable medical information and a seamless connection between the app and the physical act of taking medication (e.g., a pill dispenser)</p>'
                }
            ]
        },
    },
            {
        id: 2,
        title: 'Olio Food',
        category: 'Food Waste',
        description: 'Turning frustration into impact through strategic design that tackles food waste and builds community',
        image: '/assets/olio-hero-image.png',
        
        role: 'Senior UX Designer',
        timeline: '4 months',
        team: '3 Designers, 4 Engineers, 1 Security Specialist',
        
        // TL;DR Section (recommended for portfolio detail pages)
        tldr: {
            overview: 'Redesigned the selection process to improve engagement, strengthen community, and reduce food waste.',
            proposals: [
                {
                    title: 'Gamification & Points System:',
                    description: 'Introduce a rewards-based system to incentivize positive behavior and increase user retention.'
                },
                {
                    title: 'Hyper-Local Community Discovery:',
                    description: 'Help users connect and build trust with their neighbors, fostering a social and community-driven experience.'
                },
                {
                    title: 'Streamlined Requesting Flow:',
                    description: 'Simplify the request and communication process to reduce user friction and increase the reliability of transactions.'
                }
            ],

            outcome: 'An intuitive and engaging experience that increase user retention and community building, ultimately boosting the app\'s overall effectiveness in combating food waste.',
        },
        
        overview: 'The organisation requires you to build on your existing research by exploring and identifying the business needs,competitors, and success metrics. Along with the user research you have already gathered, these insights will inform a high-fidelity prototype.',

        brief: {
            title: 'Problem Statement',
            paragraphs: [
                'The core problem is the low, inconsistent use of digital health tools by caretakers and the elderly, which leads to poor medication adherence and prevents the collection of crucial side effect data.',
                {
                    text: 'How might we design a medication management system that is as reliable and intuitive as an alarm clock, so that caretakers and elderly users consistently log their medication and side effects?',
                    indent: true
                }
    ]
        },

        galleries: [
            {
            type: 'carousel',
            title: 'Secondary Research',
            images: [
            { url: 'assets/olio-competitor-1.png', caption: 'Competitor Landscape' },
            { url: 'assets/olio-competitor-2.png', caption: 'UX Audit' },
            { url: 'assets/olio-competitor-3.png', caption: 'Competitor Testing' },
            { url: 'assets/olio-competitor-4.png', caption: 'Competitor Testing Screens' },
            { url: 'assets/olio-competitor-5.png', caption: 'Learning Points from Competitor Testing' },

                ]
            },
            {
            type: 'grid-2x2',
            subtitle: 'Hypothesis',
            description: 'The consistent use of the HealthBuddy app will significantly increase if its user interface is redesigned with clear, familiar iconography and the core task of adding medication is simplified with alternative methods like photo- or voice-based entry.',
            images: [
            { url: 'assets/healthbuddy-problem-statement-1.png', caption: 'Issue Tree' },
            { url: 'assets/healthbuddy-problem-statement-2.png', caption: 'Priority Matrix' }
                ]
            },
            {
            type: 'grid-2x2', // Options: 'carousel', 'two-column', 'three-column', 'grid-2x2'
            title: 'Initial Prototype',
            images: [
            { url: 'assets/healthbuddy-initial-prototype.png', caption: 'Initial Prototype screens' },
            { url: 'assets/healthbuddy-initial-prototype-result.png', caption: 'Test Results' }
                ]
            },
            {
            type: 'grid-2x2',
            images: [
            { url: 'assets/healthbuddy-recommend-before.jpg', caption: 'Current Design screens' },
            { url: 'assets/healthbuddy-recommend-after.png', caption: 'After Feedback screens' },
            { url: 'assets/healthbuddy-recommend-shortterm.png', caption: 'Short term suggestion' },
            { url: 'assets/healthbuddy-recommend-longterm.png', caption: 'Long term suggestion' },
                ]
            }
        ],

        finalImages: [
        'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MjA2MDcwNnww&ixlib=rb-4.1.0&q=80&w=1080',
        ],

        //challenge: 'Traditional banking apps are often intimidating and difficult to navigate. Users struggle with complex security measures, hidden features, and unintuitive transaction flows. The challenge was to create a friendly, approachable interface without compromising on security or functionality.',
        
        research: [
            'Interviewed 40 users across different age groups and tech literacy levels',
            'Observed real banking sessions to understand pain points',
            'Security audit and compliance review with banking standards',
            'Usability testing with 200+ participants across 5 iterations'
        ],
        
        learningpoints: {
            title: 'Learning Points',
            proposals: [
                {
                    description: 'Take time to synthesis user interviews.'
                },
                {
                    description: 'Allow users to understand where they are in the process .'
                },
                {
                    description: 'Unnecessary sectionising creates friction.'
                },
            ]
        },

        recommendation: 'Learning from the testing, I made final changes to the prototype: utilising a more visual medical reminder menu for easier navigation; showing only the latest medication intake instead of entire calendar list for focused scanning.',
        
        
        results: [
                { metric: '89%', label: 'User adoption rate within 6 months' },
                { metric: '65%', label: 'Increase in mobile transactions' },
                { metric: '4.7/5', label: 'App store rating' }
            ],
        
        // Tabs Section (optional)
        tabsSection: {
            title: 'Testing insights',
            tabs: [
                {
                    label: 'Synthesis of findings',
                    content: '<p>The research confirmed the hypothesis was correct but incomplete. The core problem isn\'t just about usability; it\'s about a complete user journey. The app should evolve beyond a simple tool into a holistic medication management and knowledge ecosystem.</p>'
                },
                {
                    label: 'What was found',
                    content: '<p>User tests showed a strong preference for a simplified interface and a QR scanner for adding medication, which would significantly improve task completion.</p>'
                },
                {
                    label: 'Why it matters',
                    content: '<p>Users were frustrated with manual entry and wanted a more efficient process. Our analysis revealed a deeper user need for reliable medical information and a seamless connection between the app and the physical act of taking medication (e.g., a pill dispenser)</p>'
                }
            ]
        },
    },
    {
        id: 3,
        title: 'Olio Food',
        category: 'Mobile App',
        description: 'Turning frustration into impact through strategic design that tackles food waste and builds community',
        image: '/assets/olio-hero-image.png',
        
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
                'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MjA2MDcwNnww&ixlib=rb-4.1.0&q=80&w=1080'
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
            text: 'Through extensive user research and competitive analysis, we identified key pain points in the current checkout process. Our team conducted 25 user interviews and analyzed over 10,000 user sessions to understand where users were dropping off and what barriers prevented them from completing their purchases.',
            tags: ['Mobile Design', 'Fintech', 'Interaction Design'],
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
        id: 4,
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
