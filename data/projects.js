const projects = [
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
            overview: 'Manchester\'s parking apps help drivers find spaces. They don\'t help them make better choices. EcoPark addresses that gap — a last-mile journey planner that makes the sustainable option the most convenient one.',
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
            outcome: '5 out of 5 participants completed the end-to-end booking flow without assistance. The multimodal Park+Tram concept landed as intuitive and timely, with key iteration areas identified around emissions data clarity and booking confirmation detail. The prototype also surfaces a real dependency on live parking and traffic data — a deliberate design decision that points toward the infrastructure this product would need to work in the real world.',
        },

        sections: [
            {
                type: 'storyboard',
                title: 'The Story',
                storyboardId: 'ecopark',
            },
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
                type: 'user-voices',
                title: 'What People Told Us',
                quotes: [
                    {
                        text: 'Drove around for nearly 40 minutes, couldn\'t find anything… Got there 12 minutes late, flustered and sweaty. Didn\'t get the job.',
                        source: 'Survey respondent'
                    },
                    {
                        text: 'I ended up driving around a residential area for 25 minutes before finding a space.',
                        source: 'Survey respondent'
                    }
                ],
                stats: [
                    { value: '8/15', label: 'reported unclear pricing before arrival as a consistent pain point' },
                    { value: '73%', label: 'estimate their car idles 5–30 minutes per week just searching for parking' },
                    { value: '60%', label: 'were unaware of their parking emissions — yet rated environmental data as useful or essential alongside cost and time' },
                ],
                insight: 'Parking stress is not trivial — it carries real emotional, financial, and practical consequences. And while users aren\'t environmentally motivated yet, they\'re open to it if the data is transparent, credible, and presented alongside practical benefits like cost and time.'
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
                    { url: 'assets/ecopark-homepage.png', caption: 'Home Page', rationale: 'A prominent search bar reduces friction for common trips. The eco dashboard surfaces the environmental impact of each journey from the very first screen, reinforcing EcoPark\'s value proposition immediately. Real-time nearby availability means the app delivers instant value without requiring any input from time-pressed users.' },
                    { url: 'assets/ecopark-resultpage.png', caption: 'Result Page', rationale: 'The Park+Transport filter gives users control over how they complete their journey, directly reflecting Manchester\'s integrated transport strategy. CO₂ savings are displayed alongside price and time so the environmental impact of each choice is visible without feeling preachy.' },
                    { url: 'assets/ecopark-detailedpage.png', caption: 'Detailed Page (Parking)', rationale: 'Photos, amenities, and transparent pricing help users make an informed choice before committing. Reviews are included because competitor research showed that platforms like Parkopedia built strong user trust and loyalty through community validation.' },
                    { url: 'assets/ecopark-detailedpage2.png', caption: 'Detailed Page (Transport)', rationale: 'Route information shows the number of stops and transfers so users can fully gauge the last leg of their journey before booking. This reduces uncertainty at the point of decision, which the survey identified as a key barrier to confidence.' },
                    { url: 'assets/ecopark-booking.png', caption: 'Booking Page', rationale: 'Users set their desired duration and enter their license plate before seeing a full booking summary covering parking, transport, total cost, and CO₂ savings. The verification step builds confidence and reduces errors before payment.' },
                    { url: 'assets/ecopark-navigation.png', caption: 'Navigation Page', rationale: 'No existing parking app in the competitor analysis included in-app navigation. Adding turn-by-turn directions prevents users from needing to switch apps while driving, which is both a usability and a safety consideration.' },
                    { url: 'assets/ecopark-activebooking.png', caption: 'Active Booking Page', rationale: 'A persistent banner on the home screen gives users quick access to their QR code, the option to extend their session, or to end parking early. All of this is reachable without navigating away from the starting point, keeping the experience low-effort once the journey is underway.' },
                    { url: 'assets/ecopark-paybycode.png', caption: 'Pay By Code Feature', rationale: 'This feature allows users to pay for off-street parking on arrival without pre-planning. It connects directly to the NPP\'s existing scheme and addresses the fragmentation problem surfaced in the physical walkthrough. One code, one app, no confusion about which payment system to use.' },
                ]
            },
            {
                type: 'learning-points',
                title: 'Learning Points',
                proposals: [
                    { description: 'Designing for sustainability is not about adding eco features. It is about credibility design. When 3 out of 15 survey respondents said they would not trust any app\'s environmental claims, it reframed the design challenge entirely. Eco-scoring needs methodology transparency, past-trip comparisons, and institutional backing to be believed. Trust has to be designed, not assumed.' },
                    { description: 'A prototype\'s limits reveal the product\'s real requirements. EcoPark\'s full vision depends on live parking availability, real-time traffic data, and emissions APIs, none of which exist in a Figma simulation. Hitting that wall clarified exactly what infrastructure this product would need to move from concept to reality, and became one of the most valuable outputs of the project.' },
                    { description: 'Researching an unfamiliar infrastructure changed how I read the design problem. Coming from Singapore where parking systems are largely standardised, the fragmentation of UK parking was not immediately obvious. The physical walkthrough made it visceral. Understanding why that fragmentation exists shaped every decision around reducing cognitive load at the point of parking.' },
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
            overview: 'Caregivers managing medication for elderly relatives need tools they can trust. HealthBuddy\'s existing flow buried that trust under a confusing interface, a technical medicine list, and no sense of progress mid-task. This project asked: what would it take to make a medication reminder app as reliable as an alarm clock?',
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
            outcome: 'Testing with family members surfaced clear evidence that the redesign worked where it mattered. 80% of testers said the progress bar immediately helped them understand where they were in the flow — the single biggest frustration with the original. All testers were excited by the QR scanner and appreciated the structured layout. An unexpected insight also emerged: a tester asking "can I view all my medications at once?" pointed toward a longer-term opportunity to connect the app with a physical pill dispenser.',
        },

        overview: 'As I view the caretakers of my grandparents and elders themselves who facilitate the daily ritual of medicine consumption, there is a struggle to remember the timing and dosage let alone noting down their reaction to the medication.<br><br>This raises the need to understand why tools like the HealthBuddy app are not fully adopted or consistently used. Through investigating user behaviors, routines, and contexts, the goal is to uncover the barriers that shape adoption and provide insights to guide better design.',

        sections: [
            {
                type: 'storyboard',
                title: 'The Story',
                storyboardId: 'healthbuddy',
            },
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
                    { description: 'With a 2-week sprint, it was tempting to move quickly from interviews to design. Taking the time to properly synthesise what family members said, rather than jumping to solutions, produced sharper problem framing and more grounded design decisions.' },
                    { description: 'Testing revealed that users were not struggling with the task itself. They were struggling with not knowing where they were in the task. Adding a clear progress bar resolved the most common frustration without changing a single piece of functionality, a reminder that sometimes the most impactful fix is the simplest one.' },
                    { description: 'The original HealthBuddy app separated every action into its own section, forcing users to navigate across multiple screens to complete one task. Consolidating the flow into a single guided sequence reduced cognitive load significantly and made the experience feel far less overwhelming.' },
                ]
            },
        ]
    },
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
            overview: 'Olio had the right mission — reduce food waste by connecting neighbours. But the existing app experience was letting it down. Users who wanted to share surplus food encountered an unexplained points system, no required pickup timing, and a community page that felt more like a noticeboard than a neighbourhood. This project asked: what would it take to design an experience that actually earned the mission?',
            proposals: [
                {
                    title: 'Gamification & Points System:',
                    description: 'Introduce a rewards-based system to incentivize positive behaviour and increase user retention.'
                },
                {
                    title: 'Hyper-Local Community Discovery:',
                    description: 'Help users connect and build trust with their neighbours, fostering a social and community-driven experience.'
                },
                {
                    title: 'Streamlined Requesting Flow:',
                    description: 'Simplify the request and communication process to reduce user friction and increase the reliability of transactions.'
                }
            ],
            outcome: 'Testing surfaced the most consistent pain point immediately: users recognised the points system as a good idea but had no idea how to earn or use them. Adding a three-screen onboarding carousel resolved the confusion before users ever encountered a listing. A second key change shifted the gamification metric from abstract gems to meals rescued — a small data change that gave users a concrete, mission-aligned reason to engage. The service blueprint, mapped before any screen was drawn, also revealed that missing pickup times were driving most of the unnecessary back-and-forth between strangers.',
        },

        sections: [
            {
                type: 'storyboard',
                title: 'The Story',
                storyboardId: 'olio',
            },
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
                    { url: 'assets/olio-mockup-after-testing-1.png', caption: 'Onboarding', rationale: 'Testing showed users found the points system valuable in principle but couldn\'t figure out how to earn or redeem them. A three-screen onboarding carousel — Play, Learn, Earn — gives new users a clear mental model of how gems work before they ever encounter a listing.' },
                    { url: 'assets/olio-mockup-after-testing-2.png', caption: 'Product Page', rationale: 'Two targeted changes: pickup time is now a required field when creating a listing, eliminating the most common cause of unnecessary messages between strangers. Purchase date, expiry date, and a "shared because" field were also added to build the trust a user needs before committing to collect from someone they don\'t know.' },
                    { url: 'assets/olio-mockup-after-testing-3.png', caption: 'Community Page', rationale: 'The top sharers leaderboard metric was changed from gems to meals rescued — directly connecting individual contributions to the app\'s mission. This makes the scoreboard feel purposeful rather than arbitrary, and gives users a concrete answer to the question: why does sharing here matter?' },
                    { url: 'assets/olio-mockup-after-testing-4.png', caption: 'Games Page', rationale: 'A league indicator was added above the game tiles so users can track their progress at a glance. This makes the progression system visible on the screen users already visit most, without requiring a separate profile navigation step.' },
                ]
            },
            {
                type: 'learning-points',
                title: 'Learning Points',
                proposals: [
                    { description: 'The service blueprint was the most valuable artefact in this project. Mapping the full journey — customer actions, back-stage systems, and support infrastructure — revealed that the biggest friction point was invisible in the UI: listings without specified pickup times were forcing unnecessary message exchanges between strangers. Fixing the interface without addressing that would have missed the real problem entirely.' },
                    { description: 'Introducing a new mechanic is not the same as making it understandable. Testing showed users responded positively to the points system in principle but had no idea how to engage with it. The fix was not a better icon. It was a dedicated onboarding carousel that showed the system working before the user ever encountered a listing. Designing a feature and designing its explanation are two separate problems.' },
                    { description: 'Changing the gamification metric from gems earned to meals rescued was one line of data. The effect on user motivation was not small. Abstract rewards framed engagement as a loyalty scheme. A concrete impact metric made it feel like a contribution to something real. That distinction between a personal reward and a meaningful signal shapes how users relate to the product.' },
                ]
            },
        ]
    },
];
