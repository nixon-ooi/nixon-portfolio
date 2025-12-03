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
    slug: 'nixon-portfolio',
    title: 'Designing My Portfolio',
    image: 'assets/designing-world-cover.webp',
    category: 'Personal Development',
    date: 'December 4, 2025',
    readTime: '8 min read',
    excerpt: 'A quick look into the design process behind my personal portfolio website, highlighting key decisions and features implemented to enhance user experience.',
    tags: ['Spatial Computing', 'Future of Design', '3D UI'],


    overview: 'Based on a UX Audit and Johari Window, this project showcases my advanced Visual/UI Design (Level 5) and Interaction Design (Level 4) skills. It is an end-to-end demonstration of my design process, focusing on transforming Research & Discovery (Level 4) and Testing & Evaluation (Level 4) into seamless service experiences, fulfilling my goal as a Service Designer.',


    // Image Galleries
    galleries: [
        {
            type: 'grid-2x2',
            title: 'Moodboard',
            description: 'This portfolio represents me as a holistic Service Designer who connects the business strategy with the feasibility of the front-end. My mantra, "Technology enables, but design establishes," reflects my focus on crafting seamless, holistic service journeys. I create work that balances deep user empathy with critical design critiques.',
            images: [
            { url: 'assets/digital-world-moodboard-1.png', caption: 'Expressive visuals & overall tone illustrates the designer’s fun, casual outlook of design.' },
            { url: 'assets/digital-world-moodboard-2.png', caption: 'Eye catching layout of case studies attracts viewers to explore more content.' },
            { url: 'assets/digital-world-moodboard-3.png', caption: 'Overall tone of voice and imagery used invoke a sense of confidence I want for my own portfolio.' },
            { url: 'assets/digital-world-moodboard-4.png', caption: 'Usage of behind-the-scenes photos to show the development of the project gives depth beyond prototype and graphs.' },                        
                ]
        },
        {
            type: 'carousel',
            title: 'Sketches and Wireframes',
            description: 'There are currently 2 layers of protection to ensure identity verification. The first layer is the login credentials (username and password) and the second layer is the 2FA (Two-Factor Authentication) via SMS or email. Along with these security measures, CPF Board has also initiated public education campaigns to raise awareness about common scams and promote safe online practices among its users.',
            images: [
                { url: 'assets/digital-world-sketch-1.webp', caption: 'Building blocks of components' },
                { url: 'assets/digital-world-sketch-2.webp', caption: 'Home Page' },
                { url: 'assets/digital-world-sketch-3.webp', caption: 'Portfolio Page' },
                { url: 'assets/digital-world-sketch-4.webp', caption: 'Design Observations' },
            ]
        },
        {
            type: 'grid-2x2',
            title: 'Work-in-progress',
            description: 'Iterative adjustments were very much geared towards optimizing readability of content and the interaction of users. To better highlight key insights, I introduced a different background color to bring notice to the section "Learning Points". I also integrated lightbox functionality, which would allow viewers to look closer at high-fidelity images and artefacts without losing their position on the page. <br><br> My original design concept for the primary portfolio index included a three-column tile layout that was static in position. When I considered examples of successful design portfolios, I quickly realised this was not a very exciting or rhythmic. I switched to an asymmetrical, alternating layout. By doing so, this design forces the visitor into a Z-pattern scan of the screen to help them get through and enjoy each project in a more inviting way.',
            images: [
            { url: 'assets/digital-world-wip-1.webp', caption: 'Highlighting sections' },
            { url: 'assets/digital-world-wip-2.webp', caption: 'Lightbox to view images' },
            { url: 'assets/digital-world-wip-3.webp', caption: 'Original 3 column tile' },
            { url: 'assets/digital-world-wip-4.webp', caption: ' New alternating layout' },                        
                ]
        },
        {
            type: 'carousel',
            title: 'Personal Branding',
            images: [
                { url: 'assets/digital-world-personal-branding-1.webp', caption: 'Business Card' },
                { url: 'assets/digital-world-personal-branding-2.webp', caption: 'LinkedIn Profile' },
            ]
        },
    ],
    // Image and Text Section
    imageTextSection: {
        image: [ 
            { url: 'assets/digital-world-tools.webp', alt: 'Tools I used to develop my site' },             
        ],
        title: 'Choice of Tools',
        description: 'The decision to code my professional portfolio with VS Code and host it on GitHub was a strategic move that would employ my technical skill and ensure design fidelity. <br><br>VS Code provided the familiar and efficient development environment needed to translate the design concepts into functional HTML and CSS with ease and built-in code helpers. Utilising Gemini proved crucial in accelerating development, letting me translate complex component descriptions directly from my sketches into clean, working code. Further, this approach demonstrates my ability to bridge the gap between high-level Visual Design Level 5 and Interaction Design Level 4 with the technical feasibility of front-end development.' 
    },

    imageTextSection1: {
        image: [ 
            { url: 'assets/digital-world-style-tile.webp', alt: 'Design Style Tile' },             
        ],
        title: 'Design Style Tile',
        description: 'The style tile represents an important pivot from the initial broader inspiration of the moodboard. It successfully codified the direction into a defined, measurable system by finalising the three-color palette and establishing the Barlow - Inter font pairing. This evolution will make sure that the final portfolio design is consistent, professional, and reflects my detailed approach in Visual/UI Design at Level 5.' 
    },






    brief1: {
        title: 'Problem Statement',
        paragraphs: [
            'The core problem is the low, inconsistent use of digital health tools by caretakers and the elderly, which leads to poor medication adherence and prevents the collection of crucial side effect data.',
            {
                text: 'How might we design a medication management system that is as reliable and intuitive as an alarm clock, so that caretakers and elderly users consistently log their medication and side effects?',
                indent: true
            }
    ]
    },
    tabsSection: {
        title: 'Insights from Testing',
        tabs: [
            {
                label: 'Synthesis of findings',
                content: '<p>The research confirmed the hypothesis was correct. People took more time to understand the message before closing the alert. The imagery and design of the message brought a heavier tone the consequence of fraud.</p>'
            },
            {
                label: 'What was found',
                content: '<p>User test showed that people took more serious mindset and adopted a “high alert” perception.</p>'
            },
            {
                label: 'Why it matters',
                content: '<p>Directly addressing people who are attempting to commit fraud elevates the overall awareness and efforts by the authority. This transparency serves to hold offenders accountable, communicate societal values of denunciation.</p>'
            }
        ]
    },

    },
    {
    id: 2,
    slug: 'cpf-unauthorised',
    title: 'CPF unauthorised withdrawal',
    image: 'assets/cpf-cover.jpeg',
    category: 'Preventive Measures',
    date: 'October 25, 2025',
    readTime: '5 min read',
    excerpt: 'The system\'s reliance on login credentials fails to prevent insider fraud when trusted individuals compromise account security.',
    tags: ['Spatial Computing', 'Future of Design', '3D UI'],


    // Brief Section (for additional context)
    brief: {
        title: 'Brief',
        paragraphs: [
            'The core problem is the absence of active deterrence mechanisms that increase the perceived risk and accountability for individuals who exploit their trusted position. ',
            {
                text: 'How might we increase the perceived risk of getting caught for trusted individuals who commit fraud?',
                indent: true
            },
            'In these scenarios, the system\'s security, designed primarily against external threats, fails to detect or prevent insider fraud, leading to significant financial losses and erosion of public trust in digital financial platforms.'
        ]
    },

    // Image Galleries
    galleries: [
        {
            type: 'carousel',
            title: 'Current Process',
            description: 'There are currently 2 layers of protection to ensure identity verification. The first layer is the login credentials (username and password) and the second layer is the 2FA (Two-Factor Authentication) via SMS or email. Along with these security measures, CPF Board has also initiated public education campaigns to raise awareness about common scams and promote safe online practices among its users.',
            images: [
                { url: 'assets/cpf-current-process.png', caption: 'Current Process that shows the two layers of protection: login credentials and 2FA' },
                { url: 'assets/cpf-current-initiatives.png', caption: 'Current initiatives to educate the public on on-going scams ' }
            ]
        },
        {
            type: 'grid-2x2',
            subtitle: 'Hypothesis',
            description: 'By leveraging on the understanding of human behaviour, we can craft real time security alerts and communicate the severe consequence of fraud. Imploring a moment of self reflection thereby reducing the incidence of insider financial fraud.',
            images: [
            { url: 'assets/cpf-problem-statement-1.png', caption: 'Issue Tree' },
            { url: 'assets/cpf-problem-statement-2.png', caption: 'Priority Matrix' }
                ]
        },
        {
            type: 'grid-2x2',
            title: 'Initial Prototype',
            images: [
            { url: 'assets/cpf-initial-prototype.png', caption: 'Initial Prototype screens' },
            { url: 'assets/cpf-initial-prototype-result.png', caption: 'Test Resultsx' }
                ]
        },
    ],
    // Image and Text Section
    imageTextSection: {
        image: [ 
            { url: 'assets/cpf-news.png', alt: 'Screengrab of article that reads: Boy, 16, siphons over $90k from dad’s CPF, bank accounts for fishing trips and Korea holiday & Screengrab of article that reads: Jail for man who accessed bedridden friend’s CPF money, transferring $54k to his own bank account' },
            { url: 'assets/cpf-stakeholder.png', alt: 'Stakeholders involved in CPF' },                
        ],
    },
    imageTextSection1: {
        image: 'assets/cpf-lock.png',
        title: 'Reframing perspective',
        description: 'Many of these steps are initiated towards protecting the person of interest and preventing scammers from accessing accounts.<br><br>What about addressing the scammers directly?',
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
    imageTextSection2: {
        title: 'Inspiration -- Physical deterrence',
        image: [ 
            { url: 'assets/cpf-physical-deterrence.png', alt: 'Examples of physical deterrence methods inspired by Police Force' },             
        ],
        description: 'From the top left, mirrors were placed at bicycle racks as studies has shown to makes people more self-aware, and they are likelier to stop and think about what they are doing. Cardboard Cut Out and Crime Alert display messages to raise crime awareness and deter would-be criminals.'

    },
    brief1: {
        title: 'Problem Statement',
        paragraphs: [
            'The core problem is the low, inconsistent use of digital health tools by caretakers and the elderly, which leads to poor medication adherence and prevents the collection of crucial side effect data.',
            {
                text: 'How might we design a medication management system that is as reliable and intuitive as an alarm clock, so that caretakers and elderly users consistently log their medication and side effects?',
                indent: true
            }
    ]
    },
    tabsSection: {
        title: 'Insights from Testing',
        tabs: [
            {
                label: 'Synthesis of findings',
                content: '<p>The research confirmed the hypothesis was correct. People took more time to understand the message before closing the alert. The imagery and design of the message brought a heavier tone the consequence of fraud.</p>'
            },
            {
                label: 'What was found',
                content: '<p>User test showed that people took more serious mindset and adopted a “high alert” perception.</p>'
            },
            {
                label: 'Why it matters',
                content: '<p>Directly addressing people who are attempting to commit fraud elevates the overall awareness and efforts by the authority. This transparency serves to hold offenders accountable, communicate societal values of denunciation.</p>'
            }
        ]
    },

    },
    {
    id: 3,
    slug: 'setting-page-banking',
    title: 'Restructuring Settings (Banking)',
    image: 'assets/banking-cover.png',
    category: 'Improving current systems',
    date: 'October 20, 2025',
    readTime: '5 min read',
    excerpt: 'Navigating through settings in banking apps can be cumbersome. A well-structured settings page enhances user experience by making it easier to find and adjust preferences.',
    tags: ['Hypothesis', 'Future of Design', '3D UI'],


    // Brief Section (for additional context)
    brief: {
        title: 'Brief',
        paragraphs: [
            'As a UI/UX designer, you\'re tasked with improving the settings page of a mobile app after receiving numerous user reports indicating that the current settings page is unclear. The page contains many options, potentially causing cognitive overload. Your goal is to design a settings page that is user-friendly and helps people easily find what they need without feeling overwhelmed.',
            {
                text: 'DBS Bank is a Singaporean multinational banking and financial services corporation.',
                indent: true
            },
            'I am going to look into the banking industry particularly on <strong>DBS digibank</strong>.'
        ]
    },

    // Image Galleries
    galleries: [
                {
            type: 'grid-2x2',
            title: 'Secondary Research',
            images: [
            { url: 'assets/banking-competitor-1.png', caption: 'Banking competitor Analysis' },
            { url: 'assets/banking-competitor-2.png', caption: 'Setting guidelines' }
                ]
        },
        {
            type: 'grid-2x2',
            subtitle: 'Hypothesis',
            description: 'If we integrate a direct, contextual \'Manage Card\' button on the digital card image that leads to a quick-access settings menu, then users will find and manage their card settings more intuitively and with significantly less effort than the current design.',
            images: [
            { url: 'assets/banking-problem-statement-1.png', caption: 'Issue Tree' },
            { url: 'assets/banking-problem-statement-2.png', caption: 'Priority Matrix' }
                ]
        },
        {
            type: 'grid-2x2',
            title: 'Initial Prototype',
            images: [
            { url: 'assets/banking-initial-prototype.png', caption: 'Initial Prototype screens' },
            { url: 'assets/banking-initial-prototype-result.png', caption: 'Test Results' }
                ]
        },
    ],
    // Image and Text Section
    imageTextSection: {
        title: 'Current Design Analysis',
        image: 'assets/banking-current-design.png', alt: 'Screengrab of current banking app design',
        proposals: [
            {
                title: 'Cluttered Interface:',
                description: 'Settings is embedded into a  “More” tab whereby long list of functions not often accessed in day-to-day usage'
            },
            {
                title: 'Flow Break:',
                description: 'Mental model mismatch by preventing users from accessing specific account settings directly from the account interaction screen'
            },
            {
                title: 'Heavy reliance on search bar',
            },
        ],           
    },

    brief1: {
        title: 'Problem Statement',
        paragraphs: [
            'DBS digital banking platform\'s current card management settings appear to lack discoverability, based on anecdotal evidence and publicly available user feedback. We will design and prototype a user-centered solution to improve the intuitiveness and accessibility of these features, with the goal of validating our design with a small group of users and demonstrating a path toward improving the user experience.',
            {
                text: 'How might we design the DBS digital banking platform to make card settings intuitive and easily discoverable, reducing user overwhelm and enabling seamless self-service by Q4 20XX?',
                indent: true
            }
    ]
    },
    tabsSection: {
        title: 'Insights from Testing',
        tabs: [
            {
                label: 'Synthesis of findings',
                content: '<p>The research confirmed the hypothesis was correct. Users were able to identify where to navigate without prior onboarding. Further research can be done identify other friction points beyond the current pretense that there is only one card per account.</p>'
            },
            {
                label: 'What was found',
                content: '<p>User tests showed visual indicator of a card at the home screen was well received as a way finder for settings. “More” section of the app has the potential to help users discover banks offerings given the right flow.</p>'
            },
            {
                label: 'Why it matters',
                content: '<p>Users were navigating the app using a mental model that did not match up with the apps flow, hindering a seamless and efficient experience</p>'
            }
        ]
    },
        imageTextSection1: {
        image: [ 
            { url: 'assets/banking-recommend.png', alt: 'Side by side comparison of banking app improvements' },             
        ],

    },

    },
    {
    id: 4,
    slug: 'selection-process-switch',
    title: 'Reviewing the selection process (Switch App)',
    image: 'assets/switch-cover.webp',
    category: 'Improving current systems',
    date: 'September 14, 2025',
    readTime: '5 min read',
    excerpt: 'Navigating through settings in banking apps can be cumbersome. A well-structured settings page enhances user experience by making it easier to find and adjust preferences.',
    tags: ['Hypothesis', 'Future of Design', '3D UI'],


    // Brief Section (for additional context)
    brief: {
        title: 'Brief',
        paragraphs: [
            'A design sprint to apply observational studies and critical thinking to enhance a user flow.',
            {
                text: 'Switch is a platform that provides on-demand access to a network of workspaces, including private booths, desks, and meeting rooms in locations like shopping malls and transit hubs.',
                indent: true
            },
            'I am going to look into the services industry particularly on <strong>Switch Workspaces</strong>.'
        ]
    },

    imageTextSection: {
        image: [ 
            { url: 'assets/switch-sitemap.webp', alt: 'site map provides an overview on tasks and functionality the app provides' },             
        ],
        title: 'Investigating site structure ',
    },

    learningpoints: {
        title: 'Learning Points',
        proposals: [
            {
                description: 'I learnt that making an impact does not necessarily mean having a big change. Instead, using informative insights is more meaningful to the purpose of the project.'
            },
            {
                description: 'Utilising the framework of “Work on something bite sized, gain feedback, reiterate, repeat” has helped me accelerate the needs and shortfall of my redesign.'
            },
            {
                description: 'Replicating the interface taught me the importance of analysing the sequences of animation that has been featured and incorporate into my own mockup.'
            },
        ]
    },

    // Image Galleries
    galleries: [
        {
            type: 'carousel',
            title: 'Secondary Research',
            images: [
            { url: 'assets/switch-competitor-1.webp', caption: '' },
            { url: 'assets/switch-competitor-2.webp', caption: '' }
                ]
        },
        {
            type: 'grid-2x2',
            title: 'Low fidelity Prototype',
            description: 'Rapid sketching allowed me to explore design patterns seen amongst competitor applications. This also helped identify screen sequencing as well as swiping/touch gestures that would ensure a smooth flow of information.',
            images: [
            { url: 'assets/switch-lowfi-1.webp', caption: 'On-boarding' },
            { url: 'assets/switch-lowfi-2.webp', caption: 'Home Page' },
            { url: 'assets/switch-lowfi-3.webp', caption: 'Location Listing' },
            { url: 'assets/switch-lowfi-4.webp', caption: 'Ending a session' }
            
                ]
        },
        {
            type: 'carousel',
            title: 'Recommendations',
            images: [
            { url: 'assets/switch-recommend-1.webp', caption: '' },
            { url: 'assets/switch-recommend-2.webp', caption: '' },
            { url: 'assets/switch-recommend-3.webp', caption: '' },            
                ]
        },
    ],
},

];
