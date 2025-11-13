// Portfolio Projects Data
// Edit this file to update portfolio project content

const projects = [
        {
        id: 1,
        title: 'HealthBuddy - Meds Tracker',
        category: 'Public Health App',
        description: 'Bridging the digital divide to empower caregivers and engage elderly users.',
        image: 'assets/healthbuddy-hero-image.png',
        
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

            outcome: ['By addressing core usability flaws, increase user adoption and retention. Transforming the app from a frustrating tool to a reliable resource for caregivers'],

            
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
            title: 'Recommendations',
            description: 'Learning from the testing, I made final changes to the prototype: utilising a more visual medical reminder menu for easier navigation; showing only the latest medication intake instead of entire calendar list for focused scanning.',
            images: [
            { url: 'assets/healthbuddy-recommend-before.jpg', caption: 'Current Design screens' },
            { url: 'assets/healthbuddy-recommend-after.png', caption: 'After Feedback screens' },
            { url: 'assets/healthbuddy-recommend-shortterm.png', caption: 'Short term suggestion' },
            { url: 'assets/healthbuddy-recommend-longterm.png', caption: 'Long term suggestion' },
                ]
            }
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
            title: 'Insights from Testing',
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
        image: 'assets/olio-hero-image.png',
        
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

            outcome: ['An intuitive and engaging experience that increase user retention and community building, ultimately boosting the app\'s overall effectiveness in combating food waste.',
            ],
        },
        
        overview: 'The organisation requires you to build on your existing research by exploring and identifying the business needs,competitors, and success metrics. Along with the user research you have already gathered, these insights will inform a high-fidelity prototype.',


        brief: {
            title: 'UX Metrics & Service Blueprint',
            paragraphs: [
                'Olio\'s mission to reduce food waste depends significantly on active user involvement. Tracking community engagement metrics is essential for evaluating the platform\'s efficacy in cultivating a connected and engaged user community.',
                {
                    text: 'Using Google\'s HEART framework, product teams can focus on user-centered metrics to make data-driven decisions, prioritize development efforts, and align UX improvements with business goals. ',
                    indent: true
                },
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
            type: 'carousel',// Options: 'carousel', 'two-column', 'three-column', 'grid-2x2'
            description: 'The service blueprint helped to see the bottle necks in the service provided. Using data gathered from other parts of research, the points highlighted in red are parts which the redesign will tackle.',
            images: [
            { url: 'assets/olio-heart-framework.png', caption: 'Google Heart Framework' },
            { url: 'assets/olio-service-blueprint.png', caption: 'Service Blueprint' },
                ]
            },
            {
            type: 'carousel',// Options: 'carousel', 'two-column', 'three-column', 'grid-2x2'
            title: 'Initial Prototype',
            images: [
            { url: 'assets/olio-mockup-1.png', caption: 'Redesigned Home Page' },
            { url: 'assets/olio-mockup-2.png', caption: 'Redesigned Explore Page' },
            { url: 'assets/olio-mockup-3.png', caption: 'Redesigned Community Page' },
            { url: 'assets/olio-mockup-4.png', caption: 'Introduction of Games' },
                ]
            },
            {
            type: 'grid-2x2',
            description: 'Testing the prototype with users provided insights into usability issues and areas for improvement. Key findings included confusion around the points system, the need for clearer sectioning in detailed listings, and the desire for more comprehensive information to build trust among users.',
            title: 'Insights from Testing',
            images: [
            { url: 'assets/olio-testing-insights-1.png', caption: 'Key Themes of Insights' },
            { url: 'assets/olio-testing-insights-2.png', caption: 'Unsure of how the point system works' },
            { url: 'assets/olio-testing-insights-3.png', caption: 'Detailed listing has clearer sections' },
            { url: 'assets/olio-testing-insights-4.png', caption: 'More Details can be added for clarity' },
                ]
            },
            {
            type: 'carousel',// Options: 'carousel', 'two-column', 'three-column', 'grid-2x2'
            title: 'Improvements After Testing',
            images: [
            { url: 'assets/olio-mockup-after-testing-1.png', caption: 'Onboarding process' },
            { url: 'assets/olio-mockup-after-testing-2.png', caption: 'Product Page' },
            { url: 'assets/olio-mockup-after-testing-3.png', caption: 'Community Page' },
            { url: 'assets/olio-mockup-after-testing-4.png', caption: 'Games Page' },
                ]
            },
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
                    description: 'Making an impact doesn\'t require a big change. Informative insights are more meaningful for the project.'
                },
                {
                    description: 'Using the "Work on something small, get feedback, iterate, repeat" framework has sped up my redesign process.'
                },
                {
                    description: 'Replicating the interface highlighted the significance of analyzing featured animations and integrating them into my mockup.'
                },
            ]
        },

        recommendation: 'Learning from the testing, I made final changes to the prototype: utilising a more visual medical reminder menu for easier navigation; showing only the latest medication intake instead of entire calendar list for focused scanning.',
        
        
        results: [
                { metric: '89%', label: 'User adoption rate within 6 months' },
                { metric: '65%', label: 'Increase in mobile transactions' },
                { metric: '4.7/5', label: 'App store rating' }
            ],

    },
];
