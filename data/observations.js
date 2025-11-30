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
    id: 2,
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

];
