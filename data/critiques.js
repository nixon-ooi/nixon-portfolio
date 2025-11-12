// Critiques & Redesign Data
// Edit this file to update critique content
//
// Each critique follows the same structure as portfolio projects (specifically matching E-Commerce Redesign):
// - TL;DR section with overview, proposals (3 steps), outcome, and finalImages
// - Image and Text Section
// - Image Galleries (carousel and grid-2x2)
// - Results section with metrics

const critiques = [
    {
        id: 1,
        title: 'Popular Social Media App Navigation',
        category: 'MOBILE APP',
        description: 'Redesigning navigation to improve feature discoverability and reduce cognitive overload for daily users.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
        
        // Sidebar info
        role: 'UX/UI Designer',
        timeline: '3 weeks',
        team: '2 Designers, 1 Developer',
        
        // TL;DR Section
        tldr: {
            overview: 'Investigate daily social media users behaviors, routines, and navigation patterns to uncover the specific barriers that hinder feature discovery and provide actionable design insights.',
            proposals: [
                {
                    title: 'Streamlined Navigation:',
                    description: 'Clean interface simplifies navigation from 5+ items to 4 core actions, with clear priority indicators.'
                },
                {
                    title: 'Unified Icon System:',
                    description: 'Using consistent iconography and visual language to reduce cognitive load and improve recognition.'
                },
                {
                    title: 'Enhanced Discoverability:',
                    description: 'Adding contextual menus and smart suggestions to enhance user discovery of secondary features.'
                }
            ],
            outcome: 'By addressing core navigation issues, increase feature discoverability by 32% and reduce task completion time by 18%. Transforming the app from a confusing experience to an intuitive platform.',
            finalImages: [
                'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYyMDU4MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxODgwMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080'
            ]
        },
        
        // Image and Text Section
        imageTextSection: {
            image: 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzYyMDk1Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
            title: 'Research & Discovery',
            text: 'Through extensive user research and analytics analysis, we identified key pain points in the current navigation system. Our team conducted user testing sessions and analyzed usage patterns to understand where users struggled with feature discovery and what barriers prevented them from efficiently completing tasks.'
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
        
        // Image Galleries
        galleries: [
            {
                type: 'carousel',
                title: 'Design Process',
                position: 'after-overview',
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
                position: 'before-results',
                images: [
                    { url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', caption: 'Home navigation' },
                    { url: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYyMDU4MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Feature discovery' },
                    { url: 'https://images.unsplash.com/photo-1636390877494-3ba0c41c7e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNoJTIwbm90ZXN8ZW58MXx8fHwxNzYxODk0NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Contextual menu' },
                    { url: 'https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzYxODk0NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'User dashboard' }
                ]
            }
        ],
        
        // Tabs Section (optional)
        tabsSection: {
            title: 'Key Improvements by Category',
            tabs: [
                {
                    label: 'Navigation',
                    content: '<p>The navigation was streamlined from 5+ items to 4 core actions, reducing cognitive load and improving task completion speed by 18%.</p>'
                },
                {
                    label: 'Visual Design',
                    content: '<p>Unified icon system with consistent visual language improved recognition and reduced the learning curve for new users.</p>'
                },
                {
                    label: 'Discoverability',
                    content: '<p>Added contextual menus and smart suggestions to help users discover secondary features without cluttering the main interface.</p>'
                }
            ]
        },
        
        // Accordion Section (optional)
        accordionSection: {
            title: 'Implementation Details',
            items: [
                {
                    title: 'Research Methodology',
                    content: 'Conducted 15 user interviews, analyzed 3 months of analytics data, and performed A/B testing with 500+ users to validate design decisions.'
                },
                {
                    title: 'Design Process',
                    content: 'Started with low-fidelity wireframes, iterated based on feedback, created high-fidelity mockups, and developed interactive prototypes for testing.'
                },
                {
                    title: 'Technical Implementation',
                    content: 'Collaborated with developers to ensure smooth implementation, created design system components, and documented interaction patterns for future use.'
                }
            ]
        },
        
        // Results section
        results: [
            { metric: '32%', label: 'Increase in feature discoverability' },
            { metric: '18%', label: 'Reduction in task completion time' },
            { metric: '4.6/5', label: 'User satisfaction score' }
        ]
    },
    {
        id: 2,
        title: 'E-Commerce Checkout Flow',
        category: 'E-COMMERCE',
        description: 'Streamlining the checkout experience to reduce friction and increase conversion rates.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
        
        // Sidebar info
        role: 'UX Designer',
        timeline: '4 weeks',
        team: '1 Designer, 2 Developers',
        
        // TL;DR Section
        tldr: {
            overview: 'Investigate e-commerce shoppers behaviors, pain points, and checkout patterns to uncover the specific barriers that cause cart abandonment and provide actionable design insights.',
            proposals: [
                {
                    title: 'Guest Checkout:',
                    description: 'Clean interface allows users to complete purchases without forced account creation, with clear optional signup.'
                },
                {
                    title: 'Progress Indicators:',
                    description: 'Using clear step-by-step visualization to reduce perceived complexity and build user confidence.'
                },
                {
                    title: 'Enhanced Form Fields:',
                    description: 'Adding smart autofill, real-time validation, and address lookup to minimize errors and speed up completion.'
                }
            ],
            outcome: 'By addressing core checkout friction points, reduce cart abandonment by 45% and increase completed purchases by 28%. Transforming the checkout from a barrier to a seamless experience.',
            finalImages: [
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
                'https://images.unsplash.com/photo-1594549208400-128687ad97ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNhcnQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMDk0NDM3fDA&ixlib=rb-4.1.0&q=80&w=1080'
            ]
        },
        
        // Image and Text Section
        imageTextSection: {
            image: 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzYyMDk1Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
            title: 'Research & Discovery',
            text: 'Through extensive user research and cart abandonment analysis, we identified key pain points in the current checkout flow. Our team conducted user interviews and analyzed session recordings to understand where users were dropping off and what barriers prevented them from completing their purchases.'
        },
        
        // Image Galleries
        galleries: [
            {
                type: 'carousel',
                title: 'Design Process',
                position: 'after-overview',
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
                position: 'before-results',
                images: [
                    { url: 'https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYxNjk3NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Cart summary' },
                    { url: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxODgwMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Shipping details' },
                    { url: 'https://images.unsplash.com/photo-1636390877494-3ba0c41c7e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNoJTIwbm90ZXN8ZW58MXx8fHwxNzYxODk0NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Payment method' },
                    { url: 'https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzYxODk0NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Order confirmation' }
                ]
            }
        ],
        
        // Results section
        results: [
            { metric: '45%', label: 'Reduction in cart abandonment' },
            { metric: '28%', label: 'Increase in completed purchases' },
            { metric: '3.2min', label: 'Avg. checkout time (down from 5.8min)' }
        ]
    },
    {
        id: 3,
        title: 'Dashboard Analytics Interface',
        category: 'WEB APP',
        description: 'Redesigning complex data visualization dashboard for better insights and usability.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        
        // Sidebar info
        role: 'Product Designer',
        timeline: '5 weeks',
        team: '2 Designers, 3 Engineers',
        
        // TL;DR Section
        tldr: {
            overview: 'Investigate data analysts and business users behaviors, workflows, and data consumption patterns to uncover the specific barriers that hinder insights discovery and provide actionable design improvements.',
            proposals: [
                {
                    title: 'Information Hierarchy:',
                    description: 'Clean interface organizes data with clear visual hierarchy, prioritizing key metrics and insights at the top.'
                },
                {
                    title: 'Interactive Visualizations:',
                    description: 'Using dynamic, filterable charts and graphs to enable deeper data exploration and analysis.'
                },
                {
                    title: 'Enhanced Customization:',
                    description: 'Adding personalized dashboard layouts and saved views to match individual user workflows and needs.'
                }
            ],
            outcome: 'By addressing core usability and data visualization issues, improve data comprehension by 62% and reduce time-to-insight by 40%. Transforming the dashboard from overwhelming to empowering.',
            finalImages: [
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
            ]
        },
        
        // Image and Text Section
        imageTextSection: {
            image: 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzYyMDk1Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
            title: 'Research & Discovery',
            text: 'Through extensive user research and workflow analysis, we identified key pain points in the current analytics interface. Our team conducted contextual inquiries and analyzed usage data to understand where users struggled with data interpretation and what barriers prevented them from efficiently extracting insights.'
        },
        
        // Image Galleries
        galleries: [
            {
                type: 'carousel',
                title: 'Design Process',
                position: 'after-overview',
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
                position: 'before-results',
                images: [
                    { url: 'https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYxNjk3NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Main dashboard' },
                    { url: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxODgwMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Data visualization' },
                    { url: 'https://images.unsplash.com/photo-1636390877494-3ba0c41c7e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNoJTIwbm90ZXN8ZW58MXx8fHwxNzYxODk0NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Custom filters' },
                    { url: 'https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzYxODk0NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Report export' }
                ]
            }
        ],
        
        // Results section
        results: [
            { metric: '62%', label: 'Improvement in data comprehension' },
            { metric: '40%', label: 'Reduction in time-to-insight' },
            { metric: '4.8/5', label: 'User satisfaction score' }
        ]
    }
];
