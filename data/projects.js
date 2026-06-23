const projects = [
    {
        id: 2,
        slug: 'olio',
        title: 'Olio Food',
        category: 'Food Waste',
        description: 'Turning frustration into impact through strategic design that tackles food waste and builds community',
        image: 'assets/olio-hero-image.png',

        role: 'Service Designer',
        timeline: '2 months',
        tags: ['Service Design', 'Design Thinking', 'Prototyping'],

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

        overview: 'The organisation requires you to build on your existing research by exploring and identifying the business needs, competitors, and success metrics. Along with the user research you have already gathered, these insights will inform a high-fidelity prototype.',

        sections: [
            {
                type: 'gallery',
                galleryType: 'carousel',
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
                type: 'brief',
                title: 'UX Metrics & Service Blueprint',
                paragraphs: [
                    'Olio\'s mission to reduce food waste depends significantly on active user involvement. Tracking community engagement metrics is essential for evaluating the platform\'s efficacy in cultivating a connected and engaged user community.',
                    {
                        text: 'Using Google\'s HEART framework, product teams can focus on user-centered metrics to make data-driven decisions, prioritize development efforts, and align UX improvements with business goals.',
                        indent: true
                    }
                ]
            },
            {
                type: 'gallery',
                galleryType: 'carousel',
                description: 'The service blueprint helped to see the bottle necks in the service provided. Using data gathered from other parts of research, the points highlighted in red are parts which the redesign will tackle.',
                images: [
                    { url: 'assets/olio-heart-framework.png', caption: 'Google Heart Framework' },
                    { url: 'assets/olio-service-blueprint.png', caption: 'Service Blueprint' },
                ]
            },
            {
                type: 'gallery',
                galleryType: 'carousel',
                title: 'Initial Prototype',
                images: [
                    { url: 'assets/olio-mockup-1.png', caption: 'Redesigned Home Page' },
                    { url: 'assets/olio-mockup-2.png', caption: 'Redesigned Explore Page' },
                    { url: 'assets/olio-mockup-3.png', caption: 'Redesigned Community Page' },
                    { url: 'assets/olio-mockup-4.png', caption: 'Introduction of Games' },
                ]
            },
            {
                type: 'gallery',
                galleryType: 'grid-2x2',
                title: 'Insights from Testing',
                description: 'Testing the prototype with users provided insights into usability issues and areas for improvement. Key findings included confusion around the points system, the need for clearer sectioning in detailed listings, and the desire for more comprehensive information to build trust among users.',
                images: [
                    { url: 'assets/olio-testing-insights-1.png', caption: 'Key Themes of Insights' },
                    { url: 'assets/olio-testing-insights-2.png', caption: 'Unsure of how the point system works' },
                    { url: 'assets/olio-testing-insights-3.png', caption: 'Detailed listing has clearer sections' },
                    { url: 'assets/olio-testing-insights-4.png', caption: 'More Details can be added for clarity' },
                ]
            },
            {
                type: 'gallery',
                galleryType: 'carousel',
                title: 'Improvements After Testing',
                images: [
                    { url: 'assets/olio-mockup-after-testing-1.png', caption: 'Onboarding process' },
                    { url: 'assets/olio-mockup-after-testing-2.png', caption: 'Product Page' },
                    { url: 'assets/olio-mockup-after-testing-3.png', caption: 'Community Page' },
                    { url: 'assets/olio-mockup-after-testing-4.png', caption: 'Games Page' },
                ]
            },
            {
                type: 'learning-points',
                title: 'Learning Points',
                proposals: [
                    { description: 'Making an impact doesn\'t require a big change. Informative insights are more meaningful for the project.' },
                    { description: 'Using the "Work on something small, get feedback, iterate, repeat" framework has sped up my redesign process.' },
                    { description: 'Replicating the interface highlighted the significance of analyzing featured animations and integrating them into my mockup.' },
                ]
            },
        ]
    },
    {
        id: 3,
        slug: 'ecopark',
        title: 'EcoPark',
        category: 'Tech4Good / Sustainability',
        description: 'Reducing urban emissions through data-driven parking solutions',
        image: 'assets/eco-park-cover.png',

        role: 'UI/UX Designer',
        timeline: '3 months',
        tags: ['Sustainability', 'Tech4Good', 'Urban Mobility'],

        tldr: {
            overview: 'Redesign the parking experience to align with Manchester\'s zero-carbon ambitions, shifting from a standalone parking finder to a last-mile multimodal journey planner that makes every parking decision an opportunity to reduce emissions.',
            proposals: [
                {
                    title: 'Smart Multimodal Journey Planning:',
                    description: 'Guide drivers to park on the edge of the city centre and seamlessly continue via public transport, reducing car traffic and emissions.'
                },
                {
                    title: 'Eco-Transparent Parking Search:',
                    description: 'Intelligent search with eco-ratings and a personal emissions dashboard that makes the environmental impact of each parking decision visible and trustworthy.'
                },
                {
                    title: 'Frictionless End-to-End Booking:',
                    description: 'Real-time availability, in-app navigation, and one-tap payment consolidated into a single, stress-free journey flow.'
                }
            ],
            outcome: 'Usability testing validated the multimodal concept as logical and timely, with participants responding positively to the combined parking and public transport flow, and key iterations identified around emissions data clarity and booking confirmation detail.',
        },

        sections: [
            {
                type: 'brief',
                title: 'Current Climate',
                paragraphs: [
                    'Manchester City Council has set an ambitious zero-carbon target by 2038, underpinned by an integrated suite of transport strategies including the Local Implementation Plan, Parking Strategy, Vision Zero Action Plan, and Active Travel Network Plan.',
                    'The UK\'s current response is the National Parking Platform (NPP), a system that connects multiple parking providers to thousands of locations by integrating apps drivers already use, making parking simple and consistent nationwide.',
                    'However, NPP falls short of Manchester\'s integrated transport vision. It does not inform or encourage drivers to reduce their emissions, leaving a critical gap between convenience and sustainability.'
                ]
            },
            {
                type: 'brief',
                title: 'Problem Statement',
                paragraphs: [
                    'EcoPark positions technology as a force for environmental good. Unlike conventional parking apps focused solely on convenience, EcoPark integrates sustainability at its core, making every parking decision an opportunity to reduce one\'s carbon footprint.',
                    {
                        text: 'How might we design a parking experience that aligns with Manchester\'s zero-carbon ambitions, by guiding drivers toward smarter, more sustainable travel decisions without sacrificing convenience?',
                        indent: true
                    }
                ]
            },
            {
                type: 'brief',
                title: 'The Opportunity',
                paragraphs: [
                    'Smart parking technology, combined with Manchester\'s integrated transport strategy and behavioural insights, has the potential to reduce search time, lower emissions, and improve urban air quality while enhancing the overall travelling experience.',
                    'The opportunity lies in designing a last-mile multimodal journey planner, one that guides drivers to park on the edge of the city centre and continue seamlessly via public transport, turning a daily habit into a sustainable choice.',
                ]
            },
            {
                type: 'gallery',
                galleryType: 'carousel',
                title: 'Research & Discovery',
                description: 'A combination of user surveys, competitor analysis, and a physical walkthrough of existing car park systems surfaced four key findings that shaped EcoPark\'s design direction.',
                images: [
                    { url: 'assets/ecopark-walkthrough.png', caption: 'Physical Car Park Walkthrough' },
                    { url: 'assets/ecopark-competitor-analysis.png', caption: 'Competitor Analysis' },
                    { url: 'assets/ecopark-insights.png', caption: 'Insights and Implications' },
                    { url: 'assets/ecopark-service-blueprint.png', caption: 'Service Blueprint' },
                ]
            },
            {
                type: 'gallery',
                galleryType: 'carousel',
                title: 'Initial Prototype',
                description: 'Early lo-fi sketches focused on chunking the key elements across three core screens without getting into visual specifics. The choice of what to include on each screen was driven by a MoSCoW Prioritisation Framework, informed by a combination of user survey data and secondary research insights.',
                images: [
                    { url: 'assets/eco-park-moscow.png', caption: 'Moscow Prioritisation' },
                    { url: 'assets/eco-park-sketches.png', caption: 'Initial Sketches' },
                    { url: 'assets/eco-park-initial-prototype.png', caption: 'Initial Prototype' },
                ]
            },
            {
                type: 'gallery',
                galleryType: 'grid-2x2',
                title: 'Insights from Testing',
                description: 'Eye-tracking and think-aloud sessions revealed two clear friction points: dispersed gaze patterns on the results page signalled a weak call to action, and non-standard icons caused hesitation during navigation. These directly informed the final iteration, strengthening visual hierarchy on the results page and replacing ambiguous icons with clearer, familiar alternatives.',
                images: [
                    { url: 'assets/ecopark-heatmap.png', caption: 'Eye-Tracking Heatmap' },
                    { url: 'assets/ecopark-qualitative.png', caption: 'Icon & Terminology Findings' },
                ]
            },
            {
                type: 'gallery',
                galleryType: 'carousel',
                title: 'Final Prototype',
                images: [
                    { url: 'assets/ecopark-homepage.png', caption: 'Home Page' },
                    { url: 'assets/ecopark-resultpage.png', caption: 'Result Page' },
                    { url: 'assets/ecopark-detailedpage.png', caption: 'Detailed Page (Parking)' },
                    { url: 'assets/ecopark-detailedpage2.png', caption: 'Detailed Page (Transport)' },
                    { url: 'assets/ecopark-booking.png', caption: 'Booking Page' },
                    { url: 'assets/ecopark-navigation.png', caption: 'Navigation Page' },
                    { url: 'assets/ecopark-activebooking.png', caption: 'Active Booking Page' },
                    { url: 'assets/ecopark-paybycode.png', caption: 'Pay By Code Feature' },
                ]
            },
            {
                type: 'learning-points',
                title: 'Learning Points',
                proposals: [
                    { description: 'Integrating AI tools early in the design process accelerated ideation and iteration. With more experience using them, future projects can move faster and with greater precision.' },
                    { description: 'Researching within an unfamiliar cultural and infrastructural context, the UK\'s road and parking landscape compared to Singapore\'s, proved to be one of the most valuable parts of the process. Understanding why a system exists the way it does shapes better design decisions.' },
                ]
            },
        ]
    },
    {
        id: 1,
        slug: 'healthbuddy',
        title: 'HealthBuddy - Meds Tracker',
        category: 'Public Health App',
        description: 'Bridging the digital divide to empower caregivers and engage elderly users.',
        image: 'assets/healthbuddy-hero-image.png',

        role: 'UX Researcher & Designer',
        timeline: '2 weeks',
        tags: ['UX Research', 'Accessibility (WCAG)', 'Journey Mapping'],

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
            outcome: 'By addressing core usability flaws, increase user adoption and retention. Transforming the app from a frustrating tool to a reliable resource for caregivers.',
        },

        overview: 'As I view the caretakers of my grandparents and elders themselves who facilitate the daily ritual of medicine consumption, there is a struggle to remember the timing and dosage let alone noting down their reaction to the medication.<br><br>This raises the need to understand why tools like the HealthBuddy app are not fully adopted or consistently used. Through investigating user behaviors, routines, and contexts, the goal is to uncover the barriers that shape adoption and provide insights to guide better design.',

        sections: [
            {
                type: 'image-text',
                layout: 'side-by-side',
                title: 'Current Design Analysis',
                images: [{ url: 'assets/healthbuddy-current-design.jpg', alt: 'Current Design' }],
                proposals: [
                    {
                        title: 'Notification Ineffectiveness:',
                        description: 'The app\'s push notifications are easily ignored, proving unreliable compared to intrusive methods like an alarm clock.'
                    },
                    {
                        title: 'Poor Usability:',
                        description: 'The complex UI for core tasks hinders user adoption and consistent data logging.'
                    }
                ]
            },
            {
                type: 'gallery',
                galleryType: 'grid-2x2',
                title: 'Secondary Research',
                images: [
                    { url: 'assets/healthbuddy-competitor-1.png', caption: 'Competitor Analysis' },
                    { url: 'assets/healthbuddy-competitor-2.png', caption: 'Case Studies' },
                ]
            },
            {
                type: 'brief',
                title: 'Problem Statement',
                paragraphs: [
                    'The core problem is the low, inconsistent use of digital health tools by caretakers and the elderly, which leads to poor medication adherence and prevents the collection of crucial side effect data.',
                    {
                        text: 'How might we design a medication management system that is as reliable and intuitive as an alarm clock, so that caretakers and elderly users consistently log their medication and side effects?',
                        indent: true
                    }
                ]
            },
            {
                type: 'gallery',
                galleryType: 'grid-2x2',
                subtitle: 'Hypothesis',
                description: 'The consistent use of the HealthBuddy app will significantly increase if its user interface is redesigned with clear, familiar iconography and the core task of adding medication is simplified with alternative methods like photo- or voice-based entry.',
                images: [
                    { url: 'assets/healthbuddy-problem-statement-1.png', caption: 'Issue Tree' },
                    { url: 'assets/healthbuddy-problem-statement-2.png', caption: 'Priority Matrix' }
                ]
            },
            {
                type: 'gallery',
                galleryType: 'grid-2x2',
                title: 'Initial Prototype',
                images: [
                    { url: 'assets/healthbuddy-initial-prototype.png', caption: 'Initial Prototype screens' },
                    { url: 'assets/healthbuddy-initial-prototype-result.png', caption: 'Test Results' }
                ]
            },
            {
                type: 'tabs',
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
            {
                type: 'gallery',
                galleryType: 'grid-2x2',
                title: 'Recommendations',
                description: 'Learning from the testing, I made final changes to the prototype: utilising a more visual medical reminder menu for easier navigation; showing only the latest medication intake instead of entire calendar list for focused scanning.',
                images: [
                    { url: 'assets/healthbuddy-recommend-before.jpg', caption: 'Current Design screens' },
                    { url: 'assets/healthbuddy-recommend-after.png', caption: 'After Feedback screens' },
                    { url: 'assets/healthbuddy-recommend-shortterm.png', caption: 'Short term suggestion' },
                    { url: 'assets/healthbuddy-recommend-longterm.png', caption: 'Long term suggestion' },
                ]
            },
            {
                type: 'learning-points',
                title: 'Learning Points',
                proposals: [
                    { description: 'Take time to synthesis user interviews.' },
                    { description: 'Allow users to understand where they are in the process.' },
                    { description: 'Unnecessary sectionising creates friction.' },
                ]
            },
        ]
    },
];
